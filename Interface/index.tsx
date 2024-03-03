export interface IButton {
  title: string;
  to: string;
}

export interface IOurWork {
  id: number;
  header: string;
  text: string;
}

export interface IReview {
  id: number;
  fullName: string;
  from: string;
  text: string;
  imageUrl: string;
}

export interface IBrands {
  id: number;
  iconUrl: string;
}

export interface IProjects {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export interface IBanner {
  header: string;
  title: string;
}

export interface INumber {
  id: number;
  title: string;
  text: string;
}
export interface IProps {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}
export interface ITeamOf {
  id: number;
  image: string;
  fullName: string;
  from: string;
  contact: string;
  email: string;
}

export interface IService {
  id: number;
  iconUrl: string;
  num: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface IList {
  id: number;
  title: string;
  listItem: string[];
}

export interface IPricing {
  id: number;
  title: string;
  price: number;
  pricing_plan: string;
  list: string[];
}

export interface ITabs {
  id: number;
  title: string;
}

export interface ITitleH3 {
  title: string;
}

export interface IDescription {
  text: string;
}

export interface IRoomNav {
  id: number;
  to: string;
  link: string;
}

export interface IGrid {
  id: number;
  imageUrl: string;
}

export interface ITeam {
  id: number;
  imageUrl: string;
  fullName: string;
  info: string;
}

export interface ITag {
  title: string;
}

export interface IMedia {
  id: number;
  link: string;
  to: string;
}
