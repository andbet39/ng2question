import { Component, OnInit } from '@angular/core';
import { Question ,Answer } from '../models';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {QuestionCardComponent} from './question.component';

var Masonry = require('masonry-layout');

@Component({
    moduleId: module.id,
    selector: 'board',
    template: require('./board.component.html'),
    directives :[QuestionCardComponent],
    styles:[require('./board.css')]
})
export class BoardComponent implements OnInit,AfterViewChecked  {
    
    afQuestion:FirebaseListObservable<Array<Question>>;
    alreadyVotedKey= [];
    constructor(public af:AngularFire) {
        this.afQuestion =  this.af.database.list('/questions');
     }
    
    ngAfterViewChecked (){
        var msnry = new Masonry( '.question-container', {
        itemSelector: '.question-card'
        });     
    }
    
    
    ngOnInit() {
     }
    
    onVoted(key){
        console.log('Setting already voted : '+ key);
        this.alreadyVotedKey.push(key);
    }
    
    getVoted(key){
        
        if(this.alreadyVotedKey.indexOf(key)>-1){
            return true;
        }else{
            return false;
        }
    }

}