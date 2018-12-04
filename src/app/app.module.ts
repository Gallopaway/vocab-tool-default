import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';
import { VocabComponent } from './vocab/vocab.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { FilterAlphabetPipe } from './filter-alphabet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    FilterPipe,
    VocabComponent,
    SideNavComponent,
    QuizComponent,
    FilterAlphabetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
