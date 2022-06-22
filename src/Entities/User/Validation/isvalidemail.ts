function isValidEmail(email: string): string | true {
  if (email === null || email === undefined) return "Email is required";
  if (typeof email !== "string") {
    return "Invalid type for email";
  }
  if (!email.includes("@") || !email.includes(".com"))
    return "Email is incomplete";
  if (email.includes('"') || email.includes("'"))
    return "Email may not include quotes";
  if (
    email.includes("&") ||
    email.includes("?") ||
    email.includes("!") ||
    email.includes("=") ||
    email.includes("/") ||
    email.includes("~") ||
    email.includes("*")
  )
    return "Email may not include special characters";
  if (email.length < 5) return "Email is too short";
  if (email.length > 30) return "Email is too long";
  return true;
}

export default isValidEmail;
