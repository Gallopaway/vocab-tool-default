import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css']
})
export class VocabComponent implements OnInit {
  @ViewChild('all') all: ElementRef;
  @ViewChild('gs') gs: ElementRef;
  @ViewChild('tt') tt: ElementRef;
  terms:any;
  alphabet:any;
  termsAlphabet:any;
  filter:string = '';
  searchText:string;
  constructor(private vocabService: VocabService) 
  {
    this.terms = vocabService.terms;
    this.alphabet = vocabService.alphabet;
  }

  ngOnInit() {}

  showTerm(event)
  {
    let accordion = event.currentTarget;
    var i;
    accordion.classList.toggle("active");
    var panel = accordion.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        accordion.classList.remove('border');
        accordion.classList.remove('margin-top');
    } else {
        panel.style.display = "block";
        accordion.classList.add('border')
        accordion.classList.add('margin-top');
    }
  }

  letterClick(letter){
    
  }
}
