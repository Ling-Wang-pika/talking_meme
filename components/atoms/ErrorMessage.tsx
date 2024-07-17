import classNames from "classnames";
import Close from "../icons/Close";

type ErrorMessageProps = {
  message: string;
  setErrorFunction?: (value: string) => void;
};

const ErrorMessage = ({ message, setErrorFunction }: ErrorMessageProps) => {
  const errorClass = classNames(
    "absolute right-1 top-2 flex items-center justify-between text-sm font-light text-light-primary bg-dark-pop-up rounded px-2 py-1 transform z-10"
  );

  return (
    <div className={errorClass}>
      <span className="flex-1 mr-1">{message}</span>
      <button
        type="button"
        className="focus:outline-none"
        onClick={() => setErrorFunction && setErrorFunction("")}
      >
        <Close stroke="rgb(255 255 255 / 0.6)" />
      </button>
    </div>
  );
};

export default ErrorMessage;
