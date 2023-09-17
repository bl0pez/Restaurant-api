export interface IUserCreateRepositoryDto {
  email: string;
  name: string;
  password: string;
}

export interface IUserRepositoryDto extends IUserCreateRepositoryDto {
  createdAt: Date;
  role: string;
  updatedAt: Date;
  userId: string;
}
