export const Button = ({
  children,
  onClick,
  className,
  type,
}: {
  children: string | JSX.Element;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} py-[15px] px-[30px] bg-white  text-primery rounded-[5px] box-shadow-[0px 2px 4px rgba(0, 0, 0, 0.15)] hover:bg-primary-dark transition-all duration-200 text-lg font-bold`}
    >
      {children}
    </button>
  );
};
