"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto flex w-full flex-col gap-4"
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="Imię"
            {...register("example")}
            className="rounded-xl bg-light-400 p-2 pl-4 text-black"
          />

          <input
            placeholder="Nazwisko"
            {...register("example")}
            className="rounded-xl bg-light-400 p-2 pl-4"
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired", { required: true })}
            className="rounded-xl bg-light-400 p-2 pl-4"
            placeholder="E-mail"
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            {...register("exampleRequired", { required: true })}
            className="rounded-xl bg-light-400 p-2 pl-4"
            placeholder="Numer telefonu"
          />
          <textarea
            name="message"
            id=""
            cols={30}
            rows={6}
            placeholder="Your Message"
            className="rounded-xl bg-light-400 p-2 pl-4"
          ></textarea>
          <input
            type="submit"
            className="primary-gradient mb-20 rounded-xl py-2 text-xl font-bold text-white"
          />
        </form>
      </div>
    </section>
  );
}
