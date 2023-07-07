import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
