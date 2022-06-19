function isValidPassword(password: string | null | undefined): string | true {
  if (password == null || password === undefined) return "Password is required";
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
