import { Course } from './course';
import { DanceStyle } from './dancestyle';

export interface DanceCategory {
    id: number;
    name: string;
    course: Course;
    danceStyles: DanceStyle[];
}
