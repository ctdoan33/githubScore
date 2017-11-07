import { Component } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	score;
	username="";
	message;
	color="black";
	constructor(private _scoreService: ScoreService) { }
	onSubmit(){
		this._scoreService.retrieveScore(this.username, (score) => {
			this.score = score;
			if(this.score==null){
				this.message="User does not exist, pick a different Github username.";
				this.color="black";
			}else if(this.score<20){
				this.message="Needs Work!";
				this.color="red";
			}else if(this.score<50){
				this.message="A decent start!";
				this.color="orange";
			}else if(this.score<100){
				this.message="Doing good!";
				this.color="black"
			}else if(this.score<200){
				this.message="Great job!";
				this.color="green";
			}else if(this.score>=200){
				this.message="Github Elite!";
				this.color="blue";
			}
		});
	}
}
