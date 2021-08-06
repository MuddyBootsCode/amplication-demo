export type ProjectCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name: string;
  owner: string;
  startDate?: Date | null;
};
