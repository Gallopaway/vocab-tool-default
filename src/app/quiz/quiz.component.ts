import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  terms:any;
  randomTerm: object;
  randomTerms: any = [];
  randomTermLimit:number = 3;
  answered:boolean = false;
  constructor(private vocabService: VocabService) { 
    this.terms = vocabService.terms;
    this.setRandomTerm(null);
  }

  ngOnInit() {
  }

  checkAnswer(term, event){
    if (!term){return;}
    if (this.answered){return;}
    let panel = event.currentTarget;
    let panels = event.currentTarget.parentElement.children;
    if (term.title === this.randomTerm['title']){
      this.showNotification(panel, true);
    }
    else{
      for (let key in panels){
        if (panels.hasOwnProperty(key)){
          if (panels[key].classList.contains('answer')){
            this.showNotification(panels[key], true);
            break;
          }
        }
      }
      this.showNotification(panel, false);
    }
    this.answered = true;
  }

  onNextClick(event){
    if (!this.answered){return;}
    this.setRandomTerm(event);
  }

  setRandomTerm(event)
  {
    if (event){
      this.removeResultClasses();
    }
    this.randomTerm = this.terms[Math.floor(Math.random() * this.terms.length)];
    this.setRandomTerms();
    this.answered = false;
  }

  setRandomTerms(){
    if (!this.randomTerm){
      return;
    }

    this.randomTerms = [];
    var tempTerms = this.terms.slice() //clones array
    tempTerms = tempTerms.sort(function() { return 0.5 - Math.random()});
    tempTerms.forEach(term => {
      if (this.randomTerms.length < this.randomTermLimit && term.title !== this.randomTerm['title']){
        this.randomTerms.push(term);
      }
    });
    this.randomTerms.push(this.randomTerm);
    this.shuffleArray(this.randomTerms);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  removeResultClasses(){
    let options = document.getElementById('options').children;
    for (let key in options){
      if (options.hasOwnProperty(key)){
        options[key].classList.remove('correct', 'wrong');
        options[key].children.namedItem('noti').classList.remove('noti-correct', 'noti-wrong');
      }
    }
  }

  showNotification(panel, correct){
    if (!panel){
      return;
    }
    if (correct){
      panel.classList.add('correct');
      panel.children.namedItem('noti').classList.add('noti-correct');
    }
    else{
      panel.classList.add('wrong');
      panel.children.namedItem('noti').classList.add('noti-wrong');
    }
  }
}
