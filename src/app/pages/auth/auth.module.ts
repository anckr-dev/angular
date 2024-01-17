import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { PageRoutes } from "src/app/constants/routes";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/components/common/shared.module";
import { CommonModule } from "@angular/common";

const routes: Routes = [
	{
		path: "",
		component: AuthComponent,
		children: [
			{
				path: PageRoutes.shortUrls.auth.login,
				component: LoginComponent,
			},
			{
				path: PageRoutes.shortUrls.auth.forgotPassword,
				component: ForgotPasswordComponent,
			},
			{
				path: "",
				redirectTo: PageRoutes.shortUrls.auth.login,
				pathMatch: "full",
			},
		],
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
	],
	declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent],
})
export class AuthModule {}
