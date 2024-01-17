import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { emailRegex } from "src/app/constants/string";
import { validationMessages } from "src/app/constants/validationMessage";

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	loginForm: FormGroup;
	isEmailError = false;

	constructor(private form: FormBuilder, private router: Router) {
		this.loginForm = this.form.group({
			email: ["", [Validators.required, Validators.pattern(emailRegex)]],
			password: ["", [Validators.required]],
		});
	}

	validationMessages = validationMessages;

	getErrorMessage(controlName: string): string {
		const control = this.loginForm.get(controlName);
		const messages = this.validationMessages as {
			[key: string]: { required: string; pattern?: string };
		};

		if (control?.hasError("required")) {
			return messages[controlName].required;
		}

		if (control?.hasError("pattern")) {
			return messages[controlName].pattern || "";
		}

		return "";
	}

	showError(controlName: string): boolean {
		const control = this.loginForm.get(controlName);
		const hasVisibleError = control
			? control.invalid && (control.dirty || control.touched)
			: false;

		this.isEmailError = hasVisibleError;

		return hasVisibleError;
	}

	onSubmit() {
		if (this.loginForm.valid) {
			console.log(this.loginForm.value);
			this.router.navigate(["/dashboard"]);
			this.loginForm.reset();
		} else {
			this.loginForm.markAllAsTouched();
		}
	}
}
