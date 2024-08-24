// import React, { useState } from "react";
// import Input from "./InputComponent/Input.jsx";
// import { FormProvider, useForm } from "react-hook-form";

// export const Form = () => {
//   const methods = useForm({
//     defaultValues: {
//       "First Name": "",
//       "Last Name": "",
//       password: "",
//       Age: "",
//       description: "", // these are default values where we can pass from here
//     },
//   }); // this methods object provides all the methods that are required to create a form
//   const [success, setSuccess] = useState(false);
//   const onSubmit = methods.handleSubmit((data) => {
//     console.log(data, "data");
//     methods.reset(); // this method is used to reset the form to its default state
//     setSuccess(true);
//   });

//   console.log(methods.watch(), "watch"); // this method is used to watch the form values and it returns the form values as an object instantly when the form values change
//   // as we are using methods.watch() it will return the form values as an object instantly when the form values change
//   // or
//   console.log(methods.watch("First Name"), "watch"); // this method is only watching the value of the input field with the name "First Name" and it will return the value of the input field with the name "First Name" instantly when the value of the input field with the name "First Name" changes
//   const firstName_validation = {
//     name: "First Name",
//     label: "First Name",
//     type: "text",
//     id: "First Name",
//     placeholder: "write your name ...",
//     validation: {
//       required: {
//         value: true,
//         message: "required",
//       },
//     },
//   };
//   const lastName_validation = {
//     name: "Last Name",
//     label: "Last Name",
//     type: "text",
//     id: "Last Name",
//     placeholder: "write your name ...",
//     validation: {
//       required: {
//         value: true,
//         message: "required",
//       },
//     },
//   };

//   const password_validation = {
//     name: "password",
//     label: "password",
//     type: "password",
//     id: "password",
//     placeholder: "type password ...",
//     validation: {
//       required: {
//         value: true,
//         message: "required",
//       },
//       minLength: {
//         value: 6,
//         message: "min 6 characters",
//       },
//     },
//   };

//   const num_validation = {
//     name: "Age",
//     label: "Age",
//     type: "number",
//     id: "Age",
//     placeholder: "type age ...",
//     validation: {
//       required: {
//         value: true,
//         message: "required",
//       },
//     },
//   };

//   const description_validation = {
//     name: "description",
//     label: "description",
//     type: "text",
//     id: "description",
//     placeholder: "type description ...",
//     validation: {
//       required: {
//         value: true,
//         message: "required",
//       },
//     },
//   };

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={onSubmit} noValidate className="container">
//         <div className="mt-5 text-center w-100 flex-1">
//           <div className="grid gap-5 md:grid-cols-2">
//             <Input {...firstName_validation} />
//             <Input {...lastName_validation} />
//             <Input {...password_validation} />
//             <Input {...num_validation} />
//             <Input
//               {...description_validation}
//               multiline={true}
//               className="md:col-span-2"
//             />
//           </div>
//           {success && (
//             <div>
//               <div className="flex items-center gap-1 px-2 font-semibold text-green-500 bg-green-100 rounded-md">
//                 Form Submitted Successfully
//               </div>
//             </div>
//           )}
//           <div>
//             <button
//               type="submit"
//               //   onClick={onSubmit}
//               className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
//             >
//               Submit Form
//             </button>
//           </div>
//         </div>
//       </form>
//     </FormProvider>
//   );
// };

// import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup"; // this is used to resolve the schema validation with yup and it is used to validate the form with yup
import * as yup from "yup";

export const Form = () => {
  const schema = yup
    .object({
      firstName: yup
        .string()
        .required()
        .matches(/^[A-Za-z]+$/)
        .required(), // this is used to validate the first name field with yup and errors messages are coming from react-hook-form
      checkbox: yup.bool().oneOf([true], "Checkbox is required"), // if we want to customize the error message then we can pass the error message as a second argument in the yup validation method
    })
    .required();

  const {
    control,
    handleSubmit, 
    formState: { errors, isDirty, dirtyFields, touchedFields, isSubmitted, isSubmitSuccessful, submitCount, isValid, isSubmitting }, 
    // errors is used to show the error messages when the form is not validated
    // isDirty is used to check if the form is modified from the default values it will be false as default it changes to true when the form is modified
    // dirtyFields is used to check all fields for each of them true and false are modified from the default values
    // touchedFields is used to check if the field is touched or not
    // isSubmitted is used to check if the form is submitted or not and this doesn't care about the form is valid or not and if the values are added to the form or not
    // isSubmitSuccessful is used to check if the form is submitted successfully or not and this only works when the form is submitted and the form is valid and when values are added to it and all inputs are filled
    // submitCount is used to check how many times the form is submitted
    // isValid is used to check if the form is valid or not mean all the fields are filled and the form is validated without any errors
    // isSubmitting is used to check if the form is submitting or not and this only works when the form is submitting and it is used to show the loader or spinner when the form is submitting

  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      select: {},
      checkbox: false,
    },
  });
  const onSubmit = (data) => console.log(data);
  console.log(isDirty, 'isDirty', dirtyFields, 'dirtyFields', touchedFields, 'touchedFields', isSubmitted, 'isSubmitted', isSubmitSuccessful, 'isSubmitSuccessful', submitCount, 'submitCount', isValid, 'isValid', isSubmitting, 'isSubmitting');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller // This is controller is used when we use third party components like material ui, design system, etc
        name="firstName"
        control={control} // The control object is provided by the useForm hook and it acts as a centralized manager for all the form's fields. It keeps track of the form's state, validation, and provides the necessary methods and data to the Controller component, enabling it to interact with custom or third-party UI components.
        type="text"
        render={({ field }) => <Input {...field} />} // The render prop function receives an object with the field prop, which contains the necessary props to be spread on the custom input component. The field prop is an object that contains the value, onChange, onBlur, and name props that should be passed to the custom input component.
      />
      {errors.firstName && <p>{errors.firstName?.message}</p>}
      {/* <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <Select
           {...field}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        )}
      /> */}
      <Controller
        name="checkbox"
        control={control}
        render={({ field }) => <Checkbox {...field} />}
      />
      {errors.checkbox && <p>{errors.checkbox?.message}</p>}
      <input type="submit" disabled={!isDirty} />
    </form>
  );
};
