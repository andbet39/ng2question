import { Answer } from './answer.model';

export class Question{
    constructor(public question?:string,
                public ispublished?:boolean,
                public answers?:Array<Answer>,
                public imageUrl?:string   
                ){
                }
}