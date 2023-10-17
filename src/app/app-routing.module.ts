import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { SearchbarComponent } from './search-bar/search-bar.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'old', component: SearchbarComponent },
  { path: 'new', component: NewComponent },
  { path: 'child', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
