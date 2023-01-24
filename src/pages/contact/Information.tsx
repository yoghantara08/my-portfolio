import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Information = () => {
  return (
    <div className="flex flex-col space-y-3 text-lg mt-3 md:mt-6">
      <h3 className="text-2xl font-bold text-white">Let's Get in Touch!</h3>
      <p className="">I'd love to hear your message</p>
      <div className="flex items-center">
        <div className="flex justify-center items-center p-2 rounded mr-3 bg-slate-800 border border-slate-900">
          <MdEmail className="text-aqua text-xl" />
        </div>
        <p>gyoghantara@gmail.com</p>
      </div>
      <div className="flex items-center">
        <div className="flex justify-center items-center p-2 rounded mr-3 bg-slate-800 border border-slate-900">
          <MdLocationPin className="text-aqua text-xl" />
        </div>
        <p>Bali - Indonesia</p>
      </div>
      <div className="flex items-center">
        <div className="flex justify-center items-center p-2 rounded mr-3 bg-slate-800 border border-slate-900">
          <BsTelephoneFill className="text-aqua text-xl" />
        </div>
        <p>+6281246480844</p>
      </div>
    </div>
  );
};

export default Information;
