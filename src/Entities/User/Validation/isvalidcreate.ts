import isValidEmail from "./isvalidemail";
import isValidPassword from "./isvalidpassword";
import isValidName from "./isvalidname";

function isValidCreate({
  email,
  password,
  name
}: {
  email: string;
  password: string;
  name: string;
}) {
  let valid: string | true = true;
  if (!(isValidEmail(email) === true)) {
    valid = isValidEmail(email);
  }
  if (!(isValidPassword(password) === true)) {
    valid = isValidPassword(password);
  }
  if (!(isValidName(name) === true)) {
    valid = isValidName(name);
  }
  return valid;
}
export default isValidCreate