function isValidPassword(password: string): string | true {
  if (password == null || password === undefined) return "Password is required";
    if (typeof password !== "string") return "Invalid type for password";
  if (
    password.includes('"') ||
    password.includes("'") ||
    password.includes("&") ||
    password.includes("?") ||
    password.includes("!") ||
    password.includes("=")
  )
    return "Password may not include special characters";
  if (password.length < 5) return "Password is too short";
  if (password.length > 16) return "Password is too long";
  return true;
}

export default isValidPassword;
