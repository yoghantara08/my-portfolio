import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTelegramPlane } from "react-icons/fa";
import { rightSlideVariants } from "../../animation/about-motion";
import Button from "../button/Button";
import Input from "./Input";
import TextArea from "./TextArea";
const url =
  "https://my-portfolio-contact-for-11b7c-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    axios
      .post(url, data)
      .then((res) => {
        setIsLoading(false);
        reset();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const disabled = errors.name || errors.email || errors.message;

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-7 text-lg"
      variants={rightSlideVariants.variants}
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
        {!isLoading ? (
          <Button
            type="submit"
            disabled={disabled ? true : false}
            className={`w-fit py-2 px-5 flex items-center space-x-2 ${
              errors
                ? "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-black"
                : ""
            }`}
          >
            <span>Send</span>
            <FaTelegramPlane />
          </Button>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;
