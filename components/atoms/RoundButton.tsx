import classNames from "classnames";

function RoundButton({
  className,
  children,
  ...props
} : {
  className?: string,
  children: React.ReactNode;
}) {
  return(
    <button 
      className={classNames(
        "flex items-center justify-center bg-white rounded-full w-[var(--button-height)] h-[var(--button-height)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default RoundButton;