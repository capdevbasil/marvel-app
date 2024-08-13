export interface CardInterface {
  name: string;
  imageURL: string;
  description?: string;
  onClick: () => void;
}
