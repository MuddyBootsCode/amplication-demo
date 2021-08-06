import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput;
  estimationDays?: number | null;
  project?: ProjectWhereUniqueInput;
  startDate?: Date | null;
  status?: "NEW" | "PENDING" | "ONGOING" | "DONE" | null;
  title?: string;
};
