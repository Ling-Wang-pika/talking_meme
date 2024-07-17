import classNames from "classnames";
import Close from "@/components/icons/Close";


function Modal({
  children,
  close
} : {
  children: React.ReactNode,
  close: () => void
}) {
  return (
    <div 
      className={classNames(
        "fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-[9999]"
      )}
    >
      <div 
        className={classNames(
          "w-full h-fit px-4 rounded-tl-lg rounded-tr-lg flex flex-col items-center justify-center bg-[var(--bg-color)]",
          "absolute left-0 bottom-0",
        )}
      >
        <button 
          className="absolute top-2 left-2 md:right-2" // fixme: phoebe
          onClick={() => close()}
        >
          <Close/>
        </button>

        {children}

      </div>
    </div>
  )
}

export default Modal;