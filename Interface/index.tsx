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
  title1: string;
  title2: string;
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

export interface IService {
  id: number;
  iconUrl: string;
  num: string;
  title: string;
  description: string;
  imageUrl: string;
}
export interface ITitleH3 {
  title: string;
}
export interface IDescription {
  text: string;
}

export interface ITeam {
  id: number;
  imageUrl: string;
  fullName: string;
  info: string;
}
