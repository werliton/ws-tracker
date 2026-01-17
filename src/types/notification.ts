export enum NotificationType {
  SUCCESS,
  ERROR,
  WARNNING,
}

export type TNotification = {
  title: string;
  text: string;
  type: NotificationType;
  id: number;
};
