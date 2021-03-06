import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
} from '@angular/core';

import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  Form,
} from '@angular/forms';

import { Meal } from 'src/health/shared/services/meals/meals.service';

@Component({
  selector: 'meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['meal-form.component.scss'],
  templateUrl: 'meal-form.component.html',
})
export class MealFormComponent implements OnChanges {
  toggled = false;
  exists = false;

  @Input()
  meal!: Meal | any;

  @Output()
  create = new EventEmitter<Meal>();

  @Output()
  update = new EventEmitter<Meal>();

  @Output()
  remove = new EventEmitter<Meal>();

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array(['']),
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.meal && this.meal.payload) {
      this.exists = true;
      this.emptyIngredients();

      const value = this.meal.payload.val();
      this.form.patchValue(value);

      if (value.ingredients) {
        for (const item of value.ingredients) {
          this.ingredients.push(new FormControl(item));
        }
      }
    }
  }

  emptyIngredients() {
    while (this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }

  get required() {
    return (
      this.form.get('name')?.hasError('required') &&
      this.form.get('name')?.touched
    );
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateMeal() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeMeal() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
