import isValidEmail from "./isvalidemail";
import isValidPassword from "./isvalidpassword";

function isValidLogin({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  let valid: string | true = true;
  if (!(isValidEmail(email) === true)) {
    valid = isValidEmail(email);
  }
  if (!(isValidPassword(password) === true)) {
    valid = isValidPassword(password);
  }
  return valid;
}
export default isValidLogin;
