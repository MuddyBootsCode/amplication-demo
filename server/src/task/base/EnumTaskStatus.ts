import { registerEnumType } from "@nestjs/graphql";

export enum EnumTaskStatus {
  New = "NEW",
  Pending = "PENDING",
  Ongoing = "ONGOING",
  Done = "DONE",
}

registerEnumType(EnumTaskStatus, {
  name: "EnumTaskStatus",
});
