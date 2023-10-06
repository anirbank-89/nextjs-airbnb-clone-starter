import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { User } from "../user/User";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  user?: User | null;
  wishlists?: Array<Wishlist>;
};
