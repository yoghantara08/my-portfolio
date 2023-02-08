import { motion } from "framer-motion";
import { hobbyVariants } from "../../../animation/about-motion";

interface Props {
  hobby: string;
  pic: string;
  picText?: string;
  description: string;
  description2?: string;
}

const Hobby: React.FC<Props> = ({
  hobby,
  pic,
  picText,
  description,
  description2,
}) => {
  return (
    <motion.div
      className="flex flex-col lg:grid lg:grid-cols-2 gap-0 md:gap-10 py-3 mx:py-6 mx-6 md:px-12"
      variants={hobbyVariants.variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <picture className="rounded order-1">
        <img
          src={pic}
          alt={hobby}
          className="w-full rounded-md shadow-shadowEven"
        />
        {picText && (
          <p className="text-center mt-1 min-h-[48px] font-roboto text-sm">
            {picText}
          </p>
        )}
      </picture>
      <div className="pb-6 lg:order-2 md:text-[17px] font-inter text-justify">
        <p>{description}</p>
        {description2 && <p className="mt-2">{description2}</p>}
      </div>
    </motion.div>
  );
};

export default Hobby;
