import isValidEmail from "./isvalidemail";
import isValidName from "./isvalidname";

function isValidGmail({ email, name }: { email: string; name: string }) {
  let valid: string | true = true;
  if (!(isValidEmail(email) === true)) {
    valid = isValidEmail(email);
  }
  if (!(isValidName(name) === true)) {
    valid = isValidName(name);
  }
  return valid;
}
export default isValidGmail;
