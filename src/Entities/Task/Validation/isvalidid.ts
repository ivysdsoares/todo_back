function isValidId({ id }: { id: number }): string | true {
  if (!id) {
    return "Id is required";
  }
  if (typeof id !== "number") {
    return "Invalid type for id";
  }
  return true;
}
export default isValidId;
