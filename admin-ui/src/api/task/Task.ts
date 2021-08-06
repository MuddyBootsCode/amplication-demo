import { User } from "../user/User";
import { Project } from "../project/Project";

export type Task = {
  assignedTo?: User | null;
  createdAt: Date;
  estimationDays: number | null;
  id: string;
  project?: Project | null;
  startDate: Date | null;
  status?: "NEW" | "PENDING" | "ONGOING" | "DONE" | null;
  title: string;
  updatedAt: Date;
};
