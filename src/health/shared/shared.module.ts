import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//COMPONENTS
import { ListItemComponent } from './components/list-item/list-item.component';

//SERVICES
import { MealsService } from './services/meals/meals.service';

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [MealsService],
    };
  }
}
