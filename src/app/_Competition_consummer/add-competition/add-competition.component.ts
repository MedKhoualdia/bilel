import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceCompetitionService } from '../service-competition.service';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core'

function dateRangeValidator(control: FormControl): { [key: string]: boolean } | null {
  const currentDate = new Date();
  const selectedDate = new Date(control.value);

  // Compare dates
  if (selectedDate < currentDate) {
    return { 'date_range': true }; // Validation failed
  }
  return null; // Validation passed
}

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss']
})
export class AddCompetitionComponent {
  minDate = new Date(); // Initialize min date to today
  constructor(private consP: ServiceCompetitionService, private router: Router, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); // Set locale
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    date: new FormControl('', [Validators.required, dateRangeValidator]),
    expirationDate: new FormControl('', [Validators.required, dateRangeValidator]),
    rules: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;

  save() {
    if (this.isSubmitting) {
      return;
    }

    console.log('Saving competition:', this.registerForm.value);
    this.isSubmitting = true;

    this.consP.addCompetition(this.registerForm.value as any).subscribe(
      () => {
        console.log('competition added successfully');
        this.successMessage = 'Competition added successfully!';
        this.errorMessage = '';
        this.registerForm.reset();
        setTimeout(() => {
          this.router.navigateByUrl('/admin/listCompetition');
        }, 2000);
      },
      (error) => {
        console.error('Error adding competition', error);
        this.successMessage = '';
        this.errorMessage = 'Error adding competition';
      }
    ).add(() => {
      this.isSubmitting = false;
    });
  }
}
