import {Student} from './student';
import {Subject} from './subject';
import {Teacher} from './teacher';


export class Classes {
    classId:number;
    className:string;
    students: Student[];
    subjects: Subject[];
    teachers: Teacher[];
 }

