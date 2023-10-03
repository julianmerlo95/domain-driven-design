import { Author } from "../../domain/Author";

export interface IAuthorService {
  getAuthor(id: string): Promise<Author | undefined>;
}
