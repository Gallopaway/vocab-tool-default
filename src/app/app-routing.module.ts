import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabComponent }  from './vocab/vocab.component';
import { QuizComponent }  from './quiz/quiz.component';

const routes: Routes = 
[
  { path: 'glossary', component: VocabComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '',
    redirectTo: '/glossary',
    pathMatch: 'full'
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [ RouterModule.forRoot(routes, {
              // scrollPositionRestoration: 'enabled',
              anchorScrolling: 'enabled',
              useHash: false,
              // scrollOffset: [0, 64]
             })
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



