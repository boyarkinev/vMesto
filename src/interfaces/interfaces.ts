export interface ICardData {
  placeName: string;
  placePhotoLink: string;
  date?: string;
  isLiked?: boolean;
  id?: string;
}

export interface IFormState {
  placeName: string;
  placePhotoLink: string;
}

export interface IAction {
  type: string;
  payload: Array<ICardData> | string;
}

export interface ICardsDataState {
  places: Array<ICardData>;
}
