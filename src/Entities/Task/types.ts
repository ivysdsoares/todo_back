// ENTITY
export interface ITaskEntity {
  id?: number;
  user_id?: number;
  title?: string;
  description?: string;
  status?: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date?: string;
  color?: number;
}

export interface ITaskEntityReturn {
  id: number;
  user_id: number;
  title: string;
  description: string;
  status: string;
  expiration_date: string;
  color: number;
  isValidBody: true | string;
  isValidId: true | string;
  isValidUserId: true | string;
}

// CREATE A TASK
export interface ICreateTaskRequirements {
  user_id: number;
  title: string;
  description: string;
  status: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date: string;
  color: number;
}

export interface ICreateTaskResult {
  id: number;
}

export type ICreateTaskRequest = ({
  user_id,
  title,
  description,
  status,
  expiration_date,
  color
}: ICreateTaskRequirements) => Promise<ICreateTaskResult>;

// EDIT A TASK

export interface IEditTaskRequirements {
  id: number;
  user_id: number;
  title: string;
  description: string;
  status: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date: string;
  color: number;
}

export interface IEditTaskResult {
  id: number;
}

export type IEditTaskRequest = ({
  id,
  user_id,
  title,
  description,
  status,
  expiration_date,
  color
}: IEditTaskRequirements) => Promise<IEditTaskResult>;
// DETAIL A TASK
export interface IDetailTaskRequirements {
  id: number;
  user_id: number;
}

export interface IDetailTaskResult {
  id: number;
  user_id: number;
  title: string;
  description: string;
  status: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date: string;
  color: number;
}

export type IDetailTaskRequest = ({
  id,
  user_id
}: IDetailTaskRequirements) => Promise<IDetailTaskResult>;

// VALIDATE A TASK

export interface IValidTaskRequirements {
  id: number;
}

export interface IValidTaskResult {
  id: number;
}

export type IValidTaskRequest = ({
  id
}: IValidTaskRequirements) => Promise<IValidTaskResult>;

// LIST ACTIVE TASK
export interface IListActiveTaskRequirements {
  id: string;
}

export interface IListActiveTaskResult {
  id: number;
  user_id: number;
  title: string;
  description: string;
  status: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date: string;
  color: number;
}

export type IListActiveTaskRequest = ({
  id
}: IListActiveTaskRequirements) => Promise<Array<IListActiveTaskResult>>;

// LIST INACTIVE TASK
export interface IListInactiveTaskRequirements {
  id: string;
}

export interface IListInactiveTaskResult {
  id: number;
  user_id: number;
  title: string;
  description: string;
  status: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date: string;
  color: number;
}

export type IListInactiveTaskRequest = ({
  id
}: IListInactiveTaskRequirements) => Promise<Array<IListInactiveTaskResult>>;

// LIST REPORT
export interface IReportTaskRequirements {
  id: string;
}

export interface IReportTaskResult {
  complete: number;
  ongoing: number;
  failed: number;
  expired: number;
}

export type IReportTaskRequest = ({
  id
}: IReportTaskRequirements) => Promise<IReportTaskResult>;
