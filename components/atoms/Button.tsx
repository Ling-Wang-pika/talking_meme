import classNames from "classnames";
import LoadingRing from "./LoadingRing";
import Link from "next/link";
import React from "react";
export type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    children: React.ReactNode,
    className?: string,
    loading?: boolean;
    secondary?: boolean;
    icon?: React.ReactNode,
    disabled?: boolean
  }

function Button({
  className,
  children,
  loading,
  secondary,
  icon,
  disabled,
  ...props
} : ButtonProps) {

  const _children = (
    <>
      {icon !== undefined && icon}
      {children}
    </>
  )

  return (
    <button 
      className={classNames(
        "flex items-center justify-center gap-[0.625rem] h-[var(--button-height)] p-4 pr-5 rounded-full font-[500] hover:cursor-pointer",
        "disabled:cursor-not-allowed",
        className,
        {
          "bg-black text-white hover:bg-[#1f1f1f]": !secondary,
          "bg-white text-black hover:bg-[#f1f1f1]": secondary,
          "bg-white bg-opacity-95": disabled
        }
      )}
      {...props}
    >
      { !loading ? _children : <LoadingRing/>}
    </button>
  )
}

export type Button1Props = (
  | ({
      purpose?: "button" | undefined;
    } & React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >)
  | ({
      purpose: "link";
      disabled?: boolean;
    } & React.ComponentProps<typeof Link>)
) & {
  loading?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  danger?: boolean;
  small?: boolean;
  transparent?: boolean;
} & (
    | {
        icon: React.ReactNode;
        iconPosition?: "left" | "right";
      }
    | {
        icon?: never;
        iconPosition?: never;
      }
  ) &
  (
    | {
        secondary: boolean;
      }
    | {
        secondary?: never;
      }
  );

function Button1({
  className,
  children,
  loading,
  secondary,
  tertiary,
  danger,
  disabled,
  small,
  transparent,
  ...props
}: Button1Props) {
  const _children = (
    <>
      {props.iconPosition !== "right" && props.icon}
      {children}
      {props.iconPosition === "right" && props.icon}
    </>
  );

  const gapClasses = classNames({
    "px-4": !props.icon && !small,
    "px-3": !props.icon && small,
    "px-2.5": props.icon && !small,
    "px-1.5": props.icon && small,
    "gap-2 py-2.5": !small,
    "gap-1.5 py-1.5": small,
  });

  delete props.icon;
  delete props.iconPosition;

  if (props.purpose !== "link") {
    return (
      <button
        className={classNames(
          "rounded-md flex items-center justify-center transition-colors font-normal",
          "disabled:cursor-not-allowed",
          gapClasses,
          className,
          {
            "hover:bg-accent-hover text-dark-background":
              !secondary && !danger && !transparent,
            "hover:bg-dark-elements-hover text-light-primary":
              secondary || tertiary,
            "hover:bg-danger-hover text-light-primary": danger,
            "hover:bg-light-disabled text-white": transparent,

            "bg-accent-primary":
              !loading && !secondary && !danger && !transparent,
            "bg-accent-hover": loading && !secondary && !danger && !transparent,

            "bg-dark-elements": !loading && secondary,
            "bg-dark-background": !loading && tertiary,
            "bg-dark-elements-hover": loading && secondary,
            "bg-danger-primary": !loading && danger,
            "bg-danger-primary-hover": loading && danger,
            "bg-light-emphasis": !loading && transparent,
            "bg-light-disabled": loading && transparent,

            "disabled:border disabled:border-white disabled:border-opacity-[15%] disabled:bg-dark-elements  disabled:text-light-tertiary":
              disabled && !transparent && !loading,
            "disabled:opacity-50 disabled:bg-light-emphasis":
              disabled && transparent && !loading,
          }
        )}
        disabled={disabled || loading}
        {...props}
      >
        {!loading ? (
          _children
        ) : (
          <LoadingRing className="text-dark-background" />
        )}
      </button>
    );
  }

  if (props.purpose === "link") {
    const Tag = disabled ? "span" : Link;

    return (
      <Tag
        className={classNames(
          "rounded-md flex items-center justify-center transition-colors font-normal",
          "disabled:cursor-not-allowed",
          gapClasses,
          className,
          {
            "hover:bg-accent-hover text-dark-background":
              !secondary && !disabled && !transparent && !danger,
            "hover:bg-dark-elements-hover": secondary && !disabled,
            "hover:bg-dark-elements-hover text-light-primary": secondary,
            "hover:bg-light-disabled text-white": transparent && !disabled,

            "bg-accent-primary":
              !loading && !secondary && !transparent && !disabled,
            "bg-accent-hover":
              loading && !secondary && !transparent && !disabled,

            "bg-dark-elements": !loading && secondary && !disabled,
            "bg-dark-elements-hover": loading && secondary && !disabled,

            "bg-light-emphasis": !loading && transparent && !disabled,
            "bg-light-disabled": loading && transparent && !disabled,

            "border border-white border-opacity-[15%] bg-dark-elements disabled:text-light-tertiary":
              disabled && !transparent && !loading,
            "opacity-50 bg-light-emphasis": disabled && transparent && !loading,
          }
        )}
        {...props}
      >
        {!loading ? (
          _children
        ) : (
          <LoadingRing className="text-dark-background" />
        )}
      </Tag>
    );
  }
}

export default Button;
