export enum NotificationType {
  SUCCESS,
  ERROR,
  WARNNING,
}

export type TNotification = {
  title: string;
  text: string;
  tipo: NotificationType;
  id: number;
};
