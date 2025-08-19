export type FeedbackProps = {
  like: number;
  dislike: number;
  onLike: () => void;
  onDislike: () => void;
  onReset: () => void;
};
