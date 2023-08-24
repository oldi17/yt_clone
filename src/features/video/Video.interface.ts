import User from "../user/User.interface";
import VideoComment from "./VideoComment.interface";

export default interface Video {
  owner: User;
  title: string;
  description: string;
  url: string;
  img: string;
  views: number;
  likes: number;
  dislikes: number;
  comments?: Array<VideoComment>;
}