import { Danceschool } from "./danceschool";
export interface Certification {
    id: number;
    name: string;
    isCertified: boolean;
    danceSchool: Danceschool;
  }
  