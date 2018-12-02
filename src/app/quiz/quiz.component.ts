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
  constructor(private vocabService: VocabService) { 
    this.terms = vocabService.terms;
    this.setRandomTerm();
  }

  ngOnInit() {
  }

  setRandomTerm()
  {
    this.randomTerm = this.terms[Math.floor(Math.random() * this.terms.length)];
    this.setRandomTerms();
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
}
