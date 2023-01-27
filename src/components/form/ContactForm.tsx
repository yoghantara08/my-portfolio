import { useForm } from "react-hook-form";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "../button/Button";
import Input from "./Input";
import TextArea from "./TextArea";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    // TODO: Create database for submiting contact form
    reset();
  };

  const disabled = errors.name || errors.email || errors.message;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-7 text-lg"
    >
      <Input
        type="text"
        name="name"
        placeholder="Your name"
        register={register}
        errors={errors}
        validation={{ required: true, maxLength: 80 }}
      />
      <Input
        type="text"
        name="email"
        placeholder="Email address"
        register={register}
        errors={errors}
        validation={{ required: true, pattern: /^\S+@\S+$/i }}
      />
      <TextArea
        name="message"
        placeholder="Message"
        rows={4}
        register={register}
        errors={errors}
        validation={{ required: true }}
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={disabled ? true : false}
          className={`w-fit py-2 px-5 flex items-center space-x-2 ${
            errors
              ? "disabled:opacity-70 disabled:cursor-not-allowed disabled:border-red disabled:text-red disabled:hover:bg-black"
              : ""
          }`}
        >
          <span>Send</span>
          <FaTelegramPlane />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
