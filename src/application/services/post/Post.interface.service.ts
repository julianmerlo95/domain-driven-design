import { Post } from "../../domain/Post";

export interface IPostService {
  getPost(id: string): Promise<Post | undefined>;
}
