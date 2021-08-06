import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: StringFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
