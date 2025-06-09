export const checkValidData = (email, password) => {
  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);

  const isvalidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isValidEmail) return "Email Is Not Valid";
  if (!isvalidPassword) return "Password Is Not Valid";

  return null;
};
