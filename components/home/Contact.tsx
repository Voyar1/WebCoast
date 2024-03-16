"use client";

import ContactForm from "../shared/ContactForm";

export default function App() {
  return (
    <section className="z-50 m-auto mt-12  w-8/12 max-sm:w-full max-sm:px-4 xl:w-6/12">
      <h1 className="h1-bold text-center">Skontaktuj się z nami!</h1>
      <div className="m-auto mt-8 flex w-full items-start gap-6 max-lg:flex-col">
        <article className="flex flex-col items-center rounded-xl bg-light-400 px-10 py-6  text-gray-500 max-lg:w-full max-lg:py-2">
          <span className="font-bold">Email</span>
          <span className="mb-4">kontakt@gmail.com</span>
          <a
            href="mailto:kontakt@gmail.com"
            className="text-primary-500 ease-in-out hover:text-primary-300"
          >
            Send a message!
          </a>
        </article>
        <ContactForm />
      </div>
    </section>
  );
}
