import { IPostService } from "../../../application/services/post/Post.interface.service";
import { GetPostDto } from "./dto/Get.post.dto";
import { Post } from "../../../application/domain/Post";

class PostController {
  constructor(private readonly postService: IPostService) {}

  async getPost(getPostDto: GetPostDto): Promise<Post | undefined> {
    return this.postService.getPost(getPostDto.id);
  }
}
