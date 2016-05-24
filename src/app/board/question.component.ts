import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Question, Answer} from '../models';
import  {QuestionResultComponent} from './questionresult.component';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'question-card',
    template:`   
    <md-card>
        <img md-card-image src={{question.imageUrl}}/>
        <md-card-title>
               {{question.question}}
        </md-card-title>
        <md-card-content>
        
            <div *ngIf="!voted && !viewResult">
                <md-list>
                    <md-list-item *ngFor="let answer of question.answers ; #idx = index ">
                       <md-checkbox [disabled]="voted"  [checked]=false #check (change)="onVote(answer,idx,check.checked)">  {{answer.text}} </md-checkbox>
                    </md-list-item>
                </md-list>
            </div>
            <div *ngIf="voted || viewResult">
                <question-result [answers]="question.answers"></question-result>
            </div>
        </md-card-content>
        <md-card-action>
            <button  *ngIf="!voted && viewResult" md-button (click)="toggleResults()">Hide Result</button>
            <button  *ngIf="!voted && !viewResult" md-button (click)="toggleResults()">View Result</button>            
        </md-card-action>
    </md-card>
    `,
    styles:[require('./board.css')
    ],
    directives:[QuestionResultComponent]
})  
export class QuestionCardComponent implements OnInit {
    afAnswer:FirebaseObjectObservable<Answer>;
    @Input() question:Question
    @Input() voted:boolean
    @Output() onVoted:EventEmitter = new EventEmitter();
    @Output() needRedraw:EventEmitter = new EventEmitter();
    
    viewResult:boolean=false;
    
    
    voted_text:string="";
     
    constructor(private af:AngularFire) { 
    }

    ngOnInit() { 
    }

    onVote(answer,index,checked){
        if(checked){
            const url = '/questions/'+this.question.$key+'/answers/'+index;    
            this.voted_text = answer.text;
            answer.voted ++;
            this.onVoted.next(this.question.$key);
            const promise = this.af.database.object('/questions/'+this.question.$key+'/answers/'+index).update(answer);           
            
        }
    }
    
    
    toggleResults(){
        this.viewResult = this.viewResult ? false:true;
        this.needRedraw.emit();
    }
}