import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      verifyPhoneNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      secondPhoneNumber: ['', [Validators.pattern(/^\d{9}$/)]],
      nationalId: ['', [Validators.required, Validators.minLength(5)]],
      acceptance: [false, [Validators.requiredTrue]],
      recaptcha: [false, [Validators.requiredTrue]]
    });

    // Add custom validator to check if phone numbers match
    this.contactForm.get('verifyPhoneNumber')?.valueChanges.subscribe(() => {
      this.checkPhoneNumbersMatch();
    });

    this.contactForm.get('phoneNumber')?.valueChanges.subscribe(() => {
      this.checkPhoneNumbersMatch();
    });
  }

  // Check if phone numbers match
  checkPhoneNumbersMatch(): void {
    const phoneNumber = this.contactForm.get('phoneNumber')?.value;
    const verifyPhoneNumber = this.contactForm.get('verifyPhoneNumber')?.value;

    if (phoneNumber && verifyPhoneNumber && phoneNumber !== verifyPhoneNumber) {
      this.contactForm.get('verifyPhoneNumber')?.setErrors({ mismatch: true });
    } else if (this.contactForm.get('verifyPhoneNumber')?.hasError('mismatch')) {
      // Remove mismatch error if they now match
      const errors = this.contactForm.get('verifyPhoneNumber')?.errors;
      if (errors) {
        delete errors['mismatch'];
        if (Object.keys(errors).length === 0) {
          this.contactForm.get('verifyPhoneNumber')?.setErrors(null);
        }
      }
    }
  }

  // Getter for easy access to form controls
  get f() {
    return this.contactForm.controls;
  }

  // Check if a field is invalid and has been touched or form submitted
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || this.submitted));
  }

  // Handle form submission
  onSubmit(): void {
    this.submitted = true;

    // Mark all fields as touched to show validation errors
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });

    // Check if form is valid
    if (this.contactForm.valid) {
      console.log('Form Submitted Successfully!', this.contactForm.value);

      // Prepare data with full phone numbers (including +254)
      const formData = {
        ...this.contactForm.value,
        phoneNumber: '+254' + this.contactForm.value.phoneNumber,
        verifyPhoneNumber: '+254' + this.contactForm.value.verifyPhoneNumber,
        secondPhoneNumber: this.contactForm.value.secondPhoneNumber ? '+254' + this.contactForm.value.secondPhoneNumber : null
      };

      console.log('Formatted Form Data:', formData);
      alert('Form submitted successfully! Check console for data.');
    } else {
      console.log('Form is invalid!');
      alert('Please fill in all required fields correctly.');
    }
  }
}