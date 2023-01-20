interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const Button: React.FC<Props> = ({ children, type, className }) => {
  return (
    <button
      type={type}
      className={`${className} text-aqua py-3 px-4 border border-aqua rounded hover:bg-[#00c6bc20]`}
    >
      {children}
    </button>
  );
};

export default Button;
