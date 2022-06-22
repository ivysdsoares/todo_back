function isValidName(name: string ): string | true {
  if (name === null || name === undefined) return "Name is required";
  if(typeof name !== 'string')return "Invalid type for name"
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
