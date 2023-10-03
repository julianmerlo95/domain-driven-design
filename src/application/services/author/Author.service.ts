import { IAuthorRepsitory } from "../../../infrastructure/repositories/author/Author.repository.interface";
import { IAuthorService } from "./Author.interface.service";
import { Author } from "../../domain/Author";

export class AuthorService implements IAuthorService {
  constructor(private readonly authorRepository: IAuthorRepsitory) {}

  async getAuthor(id: string): Promise<Author | undefined> {
    return await this.authorRepository.findById(id);
  }
}
