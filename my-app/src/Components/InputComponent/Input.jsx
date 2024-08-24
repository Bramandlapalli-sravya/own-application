import React from "react";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import findInputError from "../InputComponent/utilites/findInputError.js";
import isFormInvalid from "../InputComponent/utilites/isFormInValid.js";

const Input = ({
  label,
  placeholder,
  id,
  type,
  name,
  validation,
  multiline,
}) => {
  // useForm: This is the primary hook provided by React Hook Form for managing form state. It provides methods and objects such as register, handleSubmit, formState, and others that you use to control your form. You typically call useForm at the top level of your component to initialize the form.
  // useFormContext: This hook is used when you want to access the form context provided by a FormProvider. It's particularly useful in complex forms where you might split the form across multiple components. useFormContext allows you to access the form's state and methods without passing them as props down the component tree.
// To use useFormContext, you need to wrap your form with FormProvider and pass the useForm return values as its value.

  const {
    register,
    watch,
    formState: { errors }, // this is used to get the errors from the form
  } = useFormContext();
  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);
  // const input_tailwind =
  //   "p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <div>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </div>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={
            "p-5 font-medium rounded-md border border-slate-300 placeholder:opacity-60 min-h-[10rem] max-h-[20rem] resize-y"
          }
          placeholder={placeholder}
          {...register(name, validation)} // register is used to register the input with react-hook-form
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
          // {...register(label, {
          //   required: {
          //     value: true,
          //     message: `${label} is required`,
          //   },
          // })}
          // or
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

export const InputError = ({ message }) => {
  return (
    <div className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
      {message}
    </div>
  );
};

export default Input;
