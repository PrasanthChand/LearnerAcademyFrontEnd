import {Student} from './student';
import {Subject} from './subject';
import {Teacher} from './teacher';


export class Classes {
    classId:number;
    className:string;
    student: Student[];
    subject: Subject[];
    teacher: Teacher[];
 }

