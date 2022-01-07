import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//shared modules
import { SharedModule } from 'src/auth/shared/shared.module';

//guards
import { AuthGuard } from 'src/auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: 'schedule',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
  },
  {
    path: 'meals',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./meals/meals.module').then((m) => m.MealsModule),
  },
  {
    canActivate: [AuthGuard],
    path: 'workouts',
    loadChildren: () =>
      import('./workouts/workouts.module').then((m) => m.WorkoutsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule.forRoot()],
  declarations: [],
  providers: [],
})
export class HealthModule {}
