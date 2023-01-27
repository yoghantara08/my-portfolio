interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, type, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} text-aqua py-3 px-4 border border-aqua rounded hover:bg-[#00c6bc20]`}
    >
      {children}
    </button>
  );
};

export default Button;
