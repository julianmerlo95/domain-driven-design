import { IPostRepsitory } from "../../../infrastructure/repositories/post/Post.repository.interface";
import { IPostService } from "./Post.interface.service";
import { Post } from "../../domain/Post";

export class PostService implements IPostService {
  constructor(private readonly postRepository: IPostRepsitory) {}

  getPost(id: string): Promise<Post | undefined> {
    return this.postRepository.findById(id);
  }
}
