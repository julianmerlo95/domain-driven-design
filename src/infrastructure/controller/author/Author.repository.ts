import { IAuthorService } from "../../../application/services/author/Author.interface.service";
import { GetAuthorDto } from "./dto/Get.author.dto";
import { Author } from "../../../application/domain/Author";

class AuthorController {
  constructor(private readonly authorService: IAuthorService) {}

  async getAuthor(getAuthorDto: GetAuthorDto): Promise<Author | undefined> {
    return this.authorService.getAuthor(getAuthorDto.id);
  }
}
