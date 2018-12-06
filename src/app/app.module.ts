import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';
import { VocabComponent } from './vocab/vocab.component';
import { QuizComponent } from './quiz/quiz.component';
import { FilterAlphabetPipe } from './filter-alphabet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    FilterPipe,
    VocabComponent,
    QuizComponent,
    FilterAlphabetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
