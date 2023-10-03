import { Author } from "../../../application/domain/Author";
import { IAuthorRepsitory } from "./Author.repository.interface";

class AuthorRepository implements IAuthorRepsitory {
  // constructor(private readonly connectionDB: IConnectionDB) {}

  async findById(id: string): Promise<Author | undefined> {
    // return await connectionDB.findOneby(AuthorDBEntity, { id: id });
    return new Author("dasf34221asfa341", "Test", "test@test.com");
  }
}
