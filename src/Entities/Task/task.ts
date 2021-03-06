import { ITaskEntity, ITaskEntityReturn } from "./types";
import Validation from "./Validation";

function TaskEntity({
  id,
  user_id,
  title,
  description,
  status,
  expiration_date,
  color
}: ITaskEntity): ITaskEntityReturn {
  const Tid: number = id || 0;
  const Tuser_id: number = user_id || 0;
  const Ttitle: string = title || "";
  const Tdescription: string = description || "";
  const Tstatus: string = status || "";
  const Texpiration_date: string = expiration_date || "";
  const Tcolor: number = color || 0;

  return {
    id: Tid,
    user_id: Tuser_id,
    title: Ttitle,
    description: Tdescription,
    status: Tstatus,
    expiration_date: Texpiration_date,
    color: Tcolor,
    isValidBody: Validation.isValidBody({
      title: Ttitle,
      description: Tdescription,
      status: Tstatus,
      expiration_date: Texpiration_date,
      color: Tcolor,
      user_id: Tuser_id
    }),
    isValidId: Validation.isValidId({ id: Tid }),
    isValidUserId: Validation.isValidUserId({ user_id: Tuser_id })
  };
}

export default TaskEntity;
