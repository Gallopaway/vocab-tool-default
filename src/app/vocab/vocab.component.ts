import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VocabService } from '../vocab.service';
import { debug } from 'util';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css']
})
export class VocabComponent implements OnInit {
  @ViewChild('all') all: ElementRef;
  @ViewChild('gs') gs: ElementRef;
  @ViewChild('tt') tt: ElementRef;
  terms:[];
  alphabet:any;
  termsAlphabet:any;
  filter:string = '';
  searchText:string;

  oldTerms: any = [];
  constructor(private vocabService: VocabService) 
  {
    this.terms = vocabService.terms;
    this.alphabet = vocabService.alphabet;
    //this.oldTerms = vocabService.oldTerms;
    //this.createNewTerm();
  }

  ngOnInit() {}

  // createNewTerm(){
  //   let newTerms = [];
  //   let objTerm = {};
  //   let currentfirstLetter = '';
  //   this.oldTerms.forEach(oldTerm => {
  //     objTerm = {};
  //     if (oldTerm[0].substring(0, 1).toLowerCase() !== currentfirstLetter.toLowerCase()){
  //       objTerm['title'] = oldTerm[0].substring(0, 1);
  //       objTerm['definition'] = "";
  //       objTerm['index'] = 0;
  //       newTerms.push(objTerm);
  //     }
  //     objTerm = {};
  //     objTerm['title'] = oldTerm[0];
  //     objTerm['definition'] = oldTerm[2];

  //     newTerms.push(objTerm);

  //     currentfirstLetter = oldTerm[0].substring(0, 1);
  //   });
  //   const filename = 'data.json';
  //   const jsonStr = JSON.stringify(newTerms);

  //   let element = document.createElement('a');
  //   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
  //   element.setAttribute('download', filename);

  //   element.style.display = 'none';
  //   document.body.appendChild(element);

  //   element.click();

  //   document.body.removeChild(element);
  // }

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
}
