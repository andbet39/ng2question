import { Component, OnInit } from '@angular/core';
import { Question ,Answer } from '../models';
import { NgForm }    from '@angular/common';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'new-question',
    template: require('./new.component.html'),
    styles:[ require('./new.css')]
})
export class NewQuestionComponent implements OnInit {
    
    newquestion:Question = new Question('',false,[]);
    newanswer:string ='';
    afQuestion:FirebaseListObservable<Array<Question>>;
    
    constructor(public af:AngularFire) { 
          
          this.afQuestion =  this.af.database.list('/questions');

    }

    ngOnInit() { }
    
    
    addAnswer(){
        let toadd = new Answer(this.newanswer,0);
        this.newquestion.answers.push(toadd);
        this.newanswer="";
    }
    
    onSubmit(){
        this.afQuestion.push(this.newquestion);
        
    }

}