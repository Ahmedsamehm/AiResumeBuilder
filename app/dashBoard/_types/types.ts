export interface Resume {
  title: string;
  user_id: string;
  id: string;
  created_at: string;
  description?: string;
}
export type ResumeType = Resume[];
export type Title = {
  title: string;
};

export type TResponse = {
  title: string;
  user_id: string | number;
  id: string | number;
  created_at: string;
};
