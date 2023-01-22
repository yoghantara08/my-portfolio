interface Props {
  children: React.ReactNode;
}

const TagButton: React.FC<Props> = ({ children }) => {
  return (
    <div className="py-1 px-2 text-sm bg-slate-800 text-aqua mr-2 mt-2 inline-block">
      #{children}
    </div>
  );
};

export default TagButton;
