import clsx from "clsx";

const GridRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("grid grid-cols-12 gap-x-6", className)}>
      {children}
    </div>
  );
};

export default GridRow;
