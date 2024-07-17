import Link from "next/link";

function BackButton({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <Link prefetch href={`/`} className={className}>
      {children}
    </Link>
  );
}

export default BackButton;
