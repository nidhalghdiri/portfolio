import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {
  pageInfos: PageInfo[]
};

function ContactMe({pageInfos}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfos[0]?.email}?subject=${formData.subject}&body=Hi My name is ${formData.name}, \n ${formData.message}`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
      text-gray-500 text-2xl"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-8">
        <h4 className="text-2xl md:text-3xl xl:text-3xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="underline decoration-[#4f9447]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#4f9447] h-5 w-5 animate-pulse" />
            <p className="text-1xl xl:text-1xl">{pageInfos[0]?.phoneNumber} </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#4f9447] h-5 w-5 animate-pulse" />
            <p className="text-1xl xl:text-1xl">{pageInfos[0]?.email}</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#4f9447] h-5 w-5 animate-pulse" />
            <p className="text-1xl xl:text-1xl">{pageInfos[0]?.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-96 md:w-fit xl:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#4f9447] py-3 px-10 rounded-md  font-bold text-[#333333]"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
