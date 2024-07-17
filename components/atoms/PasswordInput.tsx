import React, { useState } from "react";
import classNames from "classnames";
import ErrorMessage from "./ErrorMessage";
import Link from "next/link";
import Eye from "@/components/icons/Eye";

type PasswordInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  rows?: number;
  isLightBackground?: boolean;
  errorMessage?: string | null;
  setErrorFunction?: (value: string) => void;
  containerClassName?: string;
  hasForgotPassword?: boolean;
  hasReveal?: boolean;
};

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className,
      label,
      isLightBackground = false,
      errorMessage,
      setErrorFunction,
      containerClassName,
      hasForgotPassword = false,
      hasReveal = false,
      ...props
    },
    ref
  ) => {
    const [type, setType] = useState<"password" | "text">("password");

    const inputContainerClass = classNames(containerClassName, {
      "relative w-full tablet:h-16 h-[3.375rem] rounded-[.625rem]":
        isLightBackground, // this represents contact page
      "flex flex-col gap-2": !isLightBackground, // this is original
    });

    const inputClass = classNames(
      "rounded-lg h-full w-full",
      {
        "w-full px-5 tablet:px-10 py-4 bg-light-primary text-dark-background placeholder:text-dark-tags":
          isLightBackground,
        "bg-dark-elements px-3.5 py-2.5 bg-dark-elements appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed":
          !isLightBackground,
        "border border-dark-background": !errorMessage,
        "border border-danger-primary": errorMessage,
      },
      className
    );

    const toggleReveal = () => {
      type === "password" ? setType("text") : setType("password");
    };

    return (
      <div className={inputContainerClass}>
        {label && (
          <label
            className={classNames(
              "text-s-mobile lg:text-s flex justify-between",
              {
                "text-dark-background": isLightBackground,
                "text-white": !isLightBackground,
              }
            )}
            htmlFor={props.id}
          >
            <span>{label}</span>
            {hasForgotPassword ? (
              <Link
                prefetch
                href="/forgot-password"
                className="underline opacity-60"
              >
                Forgot Password?
              </Link>
            ) : null}
          </label>
        )}

        <div className="relative">
          <input ref={ref} className={inputClass} type={type} {...props} />
          {hasReveal ? (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={toggleReveal}
            >
              {type === "password" ? (
                <Eye closed strokeOpacity="0.6" />
              ) : (
                <Eye strokeOpacity="0.6" />
              )}
            </button>
          ) : null}
        </div>
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            setErrorFunction={setErrorFunction}
          />
        )}
      </div>
    );
  }
);

export default PasswordInput;
