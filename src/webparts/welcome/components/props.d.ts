import { WebPartContext } from "@microsoft/sp-webpart-base";

export type IProps = {
  context: WebPartContext;
  userDisplayName: string;
  morningMessage: string;
  afternoonMessage: string;
  eveningMessage: string;
};
