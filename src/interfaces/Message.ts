import { ContentType } from "./ContentType";

export interface IMessage {
  id: string;
  senderId: string;
  type: string;
  contentType: ContentType;
  text: string;
  url: string;
}
