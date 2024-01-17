// forgot-password.component.ts
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { emailRegex } from "src/app/constants/string";
import { validationMessages } from "src/app/constants/validationMessage";

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: "app-forgot-password",
	templateUrl: "./forgot-password.component.html",
	styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent {
	forgotPasswordForm: FormGroup;
	isEmailError = false;

	constructor(private form: FormBuilder, private router: Router) {
		this.forgotPasswordForm = this.form.group({
			email: ["", [Validators.required, Validators.pattern(emailRegex)]],
			agreeTerms: [false, [Validators.requiredTrue]],
		});
	}
	validationMessages = validationMessages;

	getErrorMessage(controlName: string): string {
		const control = this.forgotPasswordForm.get(controlName);
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
		const control = this.forgotPasswordForm.get(controlName);
		const hasVisibleError = control
			? control.invalid && (control.dirty || control.touched)
			: false;

		this.isEmailError = hasVisibleError;

		return hasVisibleError;
	}

	onSubmit() {
		if (this.forgotPasswordForm.valid) {
			console.log(this.forgotPasswordForm.value.email);
			this.forgotPasswordForm.reset();
		} else {
			this.forgotPasswordForm.markAllAsTouched();
		}
	}

	handleBack() {
		this.router.navigate(["/auth"]);
	}
}
