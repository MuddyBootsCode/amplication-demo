import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string;
  owner?: string;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
