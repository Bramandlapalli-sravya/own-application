export const isFormInValid = (error) => {
  if (Object.keys(error).length > 0) return true;
  return false;
};

export default isFormInValid;
