import Button from "../../components/button/Button";
import { FaTelegramPlane } from "react-icons/fa";

const Form = () => {
  return (
    <form action="" className="flex flex-col space-y-7 text-lg">
      <input
        type="text"
        className="inline-block py-3 px-4 rounded bg-slate-900 border-transparent font-bold"
        placeholder="Your name"
      />
      <input
        type="text"
        className="inline-block py-3 px-4 rounded bg-slate-900 border-transparent font-bold"
        placeholder="Email address"
      />
      <textarea
        name=""
        rows={4}
        className="inline-block py-3 px-4 rounded bg-slate-900 border-transparent font-bold"
        placeholder="Message"
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          className="w-fit py-2 px-5 flex items-center space-x-2"
        >
          <span>Send</span>
          <FaTelegramPlane />
        </Button>
      </div>
    </form>
  );
};

export default Form;
