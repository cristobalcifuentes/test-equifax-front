import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  newUserForm: FormGroup;
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.newUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.newUserForm.valid) {
      console.log("entro a onsubmit");
      this.authService.createNewUser(this.newUserForm.value).subscribe(
        (response) => {
          this.successMessage = response.message;
          this.errorMessage = '';
          this.newUserForm.reset();
        },
        (error) => {
          this.errorMessage = error.error.message;
          this.successMessage = '';
        }
      );
    }
  }
}