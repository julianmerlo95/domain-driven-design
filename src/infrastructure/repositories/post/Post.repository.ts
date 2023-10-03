import { IPostRepsitory } from "./Post.repository.interface";
import { Post } from "../../application/domain/Post";

class PostRepository implements IPostRepsitory {
  // constructor(private readonly connectionDB: IConnectionDB) {}

  async findById(id: string): Promise<Post | undefined> {
    // return await connectionDB.findOneby(PostDBEntity, { id: id });
    return new Post("dasf34221asfa341", "Test", "Test");
  }
}
