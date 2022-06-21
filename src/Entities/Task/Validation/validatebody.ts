import moment from "moment";

function ValidateBody({
  expiration_date,
  title,
  description,
  color,
  status,
  user_id
}: {
  expiration_date: string;
  title: string;
  description: string;
  color: number;
  status: string;
  user_id: number;
}): string | true {
  if (!moment(expiration_date).isValid()) {
    return "Invalid date";
  }
  if (title.length < 5) return "Title is too short";
  if (title.length > 30) return "Title is too long";
  if (description.length > 150) return "Description is too long";
  if (![1, 2, 3, 4].includes(color)) {
    return "Color is invalid";
  }
  if (!["COMPLETE", "FAILED", "ONGOING", "EXPIRED"].includes(status)) {
    return "Invalid status";
  }

  if (user_id === 0 || typeof user_id === "string") {
    return "Invalid User";
  }
  return true;
}

export default ValidateBody;
