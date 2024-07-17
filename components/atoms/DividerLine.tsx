
function Divider({
  children
} : {
  children?: React.ReactNode
}) {
  return (
    <div className="w-full max-w-full flex items-center gap-4">
      <p className="h-[1px] border-t-[2px] border-t-black opacity-10 flex-1"> </p>
      <div className="flex-0">
        { children }
      </div>
      <p className="h-[1px] border-t-[2px] border-t-black opacity-10 flex-1"> </p>
    </div>
  )
}

export default Divider;
