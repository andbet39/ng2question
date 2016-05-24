import { Component, OnInit, Input } from '@angular/core';
import {Answer} from '../models';

@Component({
    moduleId: module.id,
    selector: 'question-result',
    template:`   
        <md-list>
        <md-list-item *ngFor="let answer of answers">
            
             {{answer.text}} -- {{answer.voted/totalvotes*100}}

       
                  </md-list-item>
        </md-list>
    `
})
export class QuestionResultComponent implements OnInit {
    @Input() answers:Array<Answer>
    totalvotes:number=0;
    
    constructor() { }

    ngOnInit() { 
        console.log(this.answers);
        
        this.answers.forEach((answer)=>{
            this.totalvotes += answer.voted;
        })
    }

}