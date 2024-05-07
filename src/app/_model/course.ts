import { Danceschool } from "./danceschool";

export interface Course {
    id: number;
    name: string;
    instructor: string;
    schedule: string;
    danceSchool: Danceschool;
    contenu: string;
  }
  