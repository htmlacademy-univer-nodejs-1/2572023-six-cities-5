import { CityType } from './city-type.enum';
import { GoodsType } from './goods-type.enum';
import { Location } from './location.type';
import { OfferType } from './offer-type.enum';
import { User } from './user.type';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: CityType;
  photoLinks: string[];
  previewLink: string;
  isPremium: boolean;
  isFavorite: boolean;
  rate: number;
  type: OfferType;
  goods: GoodsType[];
  roomsCount: number;
  personCount: number;
  rentCost: number;
  author: User;
  commentsCount: number;
  location: Location;
};
