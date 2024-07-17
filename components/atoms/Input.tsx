import React from "react";
import classNames from "classnames";
import ErrorMessage from "./ErrorMessage";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  rows?: number;
  isLightBackground?: boolean;
  errorMessage?: string | null;
  setErrorFunction?: (value: string) => void;
  containerClassName?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      isLightBackground = false,
      errorMessage,
      setErrorFunction,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const inputContainerClass = classNames(containerClassName, {
      "relative w-full tablet:h-16 h-[3.375rem] rounded-full":
        isLightBackground, // this represents contact page
      "flex flex-col gap-2": !isLightBackground, // this is original
    });

    const inputClass = classNames(
      "rounded-lg h-full",
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

    return (
      <div className={inputContainerClass}>
        {label && (
          <label
            className={classNames("text-s-mobile lg:text-s", {
              "text-dark-background": isLightBackground,
              "text-white": !isLightBackground,
            })}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <input ref={ref} className={inputClass} {...props} />
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

export default Input;
