import { Author } from "../../../application/domain/Author";

export interface IAuthorRepsitory {
  findById(id: string): Promise<Author | undefined>;
}
