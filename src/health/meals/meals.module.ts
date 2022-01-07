import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/auth/shared/shared.module';

//components
import { MealFormComponent } from './components/meal-form/meal-form.component';

//containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';
import { ListItemComponent } from '../shared/components/list-item/list-item.component';

export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent,
    ListItemComponent,
  ],
})
export class MealsModule {}
