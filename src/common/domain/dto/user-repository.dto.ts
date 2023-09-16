export interface IUserCreateRepositoryDto {
  name: string;
  email: string;
  role: string;
  password: string;
}

export interface IUserRepositoryDto extends IUserCreateRepositoryDto {
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
