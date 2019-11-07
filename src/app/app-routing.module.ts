import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentMealSelectionComponent } from './recent-meal-selection/recent-meal-selection.component';


const routes: Routes = [
  { path: 'recent', component: RecentMealSelectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
