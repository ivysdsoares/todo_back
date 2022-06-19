function isValidName(name: string | null | undefined): string | true {
  if (name === null || name === undefined) return "Name is required";
  if (
    name.includes("&") ||
    name.includes("?") ||
    name.includes("!") ||
    name.includes("=") ||
    name.includes("/") ||
    name.includes("~") ||
    name.includes("*")
  )
    return "Email may not include special characters";
  if (name.length < 5) return "Name is too short";
  if (name.length > 30) return "Name is too long";
  return true;
}

export default isValidName;
