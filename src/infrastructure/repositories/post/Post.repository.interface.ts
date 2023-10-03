import { Post } from "../../../application/domain/Post";

export interface IPostRepsitory {
  findById(id: string): Promise<Post | undefined>;
}
