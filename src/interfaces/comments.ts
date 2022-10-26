
export interface IComments {
  championId: string;
  comment: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface IComment {
  ok?: boolean;
  message?: string;
  comment: string | number;
  username: string | number;
  email: string | number;
}
