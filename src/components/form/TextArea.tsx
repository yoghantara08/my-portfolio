const TextArea: React.FC<{
  register: any;
  errors: any;
  name: string;
  rows: number;
  placeholder: string;
  validation: {};
}> = ({ name, register, rows, placeholder, validation, errors }) => {
  let invalid;

  invalid =
    errors &&
    (errors[name]?.type === "required" ||
      errors[name]?.type === "minLength" ||
      errors[name]?.type === "pattern" ||
      errors[name]?.type === "maxLength");

  return (
    <textarea
      rows={rows}
      name={name}
      placeholder={placeholder}
      className={`inline-block py-3 px-4 rounded bg-slate-900 border-transparent font-bold 
      focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua ${
        invalid
          ? "border border-red ring-red focus:border-red focus:ring-red bg-[#be484846]"
          : ""
      }`}
      {...register(name, { ...validation })}
    />
  );
};

export default TextArea;
