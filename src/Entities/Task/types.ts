interface ITaskEntity {
  id?: number;
  user_id?: number;
  title?: string;
  description?: string;
  status?: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date?: string;
  color?: number;
}

interface ITaskEntityReturn {
  id: number;
  user_id: number;
  title: string;
  description: string;
  status: "ONGOING" | "COMPLETE" | "FAILED" | "EXPIRED";
  expiration_date: string;
  color: number;
}

export type { ITaskEntity, ITaskEntityReturn };
