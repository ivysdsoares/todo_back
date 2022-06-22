function isValidUserId({ user_id }: { user_id: number }): string | true {
  if (!user_id) {
    return "Id is required";
  }
  if (Number.isNaN(parseInt(JSON.stringify(user_id), 10))) {
    return "Invalid type for user_id";
  }
  if (typeof user_id !== "number") {
    return "Invalid type for user_id";
  }
  return true;
}
export default isValidUserId;
