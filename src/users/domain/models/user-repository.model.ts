export interface IUserRepositoryModel {
  userId: string;
  name: string;
  email: string;
  role: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ISaveUserRepositoryModel = Omit<
  IUserRepositoryModel,
  'userId' | 'createdAt' | 'updatedAt' | 'role'
>;
