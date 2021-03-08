/* eslint-disable camelcase */

export interface CanditatesPropsInfo {
  accept_remote: boolean;
  candidate_id: number;
  candidate_name: string;
  candidate_photo: string;
  city_name: string;
  experience: string;
  technologies: TechnologiesProps[];
}

export interface TechnologiesProps {
  is_main_tech: boolean;
  name: string;
}

export interface CardProps {
  acceptRemote: boolean;
  candidateId: number;
  candidateName: string;
  candidatePhoto: string;
  cityName: string;
  experience: string;
  technologies: TechnologiesProps[];
}

export interface FilterProps {
  id: number;
  name: string;
}

export interface LoadingProps {
  animation: Record<string, unknown>;
  height: number;
  width: number;
}

export interface ContextDate {
  city: number;
  setCity: (city: number) => void;
  technologies: number;
  setTechnologies: (technologies: number) => void;
  minExperience: number;
  setMinExperience: (minExperience: number) => void;
  maxExperience: number;
  setMaxExperience: (maxExperience: number) => void;
  acceptRemote: number;
  setAcceptRemote: (acceptRemote: number) => void;
}
