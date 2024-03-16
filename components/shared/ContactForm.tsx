"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  firstName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    e?.preventDefault();

    await emailjs
      .sendForm("service_cl58jle", "template_7hgnnhb", "#contact_form", {
        publicKey: "tqf0pZAjua2qbwfYA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto mb-8 flex w-full flex-col gap-4"
      id="contact_form"
    >
      <div className="flex flex-col">
        <input
          placeholder="Imię"
          {...register("firstName", { required: true, maxLength: 20 })}
          className="rounded-xl bg-light-400 p-2 pl-4 text-black"
        />

        {errors.firstName && (
          <span className="text-red-300">To pole jest wymagane</span>
        )}
      </div>
      <div className="flex flex-col">
        <input
          {...register("email", { required: true })}
          className="rounded-xl bg-light-400 p-2 pl-4"
          placeholder="E-mail"
          type="email"
        />
        {errors.email && (
          <span className="text-red-300">To pole jest wymagane</span>
        )}
      </div>
      <div className="flex flex-col">
        <input
          {...register("phone")}
          className="rounded-xl bg-light-400 p-2 pl-4"
          placeholder="Numer telefonu"
          type="tel"
        />
      </div>
      <div className="flex flex-col">
        <textarea
          {...register("message", { required: true })}
          name="message"
          id="message"
          cols={30}
          rows={6}
          placeholder="Your Message"
          className="rounded-xl bg-light-400 p-2 pl-4"
        ></textarea>
        {errors.message && (
          <span className="text-red-300">To pole jest wymagane</span>
        )}
      </div>

      <input
        type="submit"
        className="cursor-pointer rounded-xl  bg-primary-500 py-2 text-xl font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-primary-300"
      />
    </form>
  );
};

export default ContactForm;
