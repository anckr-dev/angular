import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { PageRoutes } from "./constants/routes";
import { AuthGuard } from "./guards/auth-guard.guard";
import { HomeComponent } from "./pages/admin/home/home.component";

const routes: Routes = [
	{
		path: PageRoutes.shortUrls.auth.short,
		loadChildren: () =>
			import("./pages/auth/auth.module").then((m) => m.AuthModule),
	},
	{
		path: "",
		canActivate: [AuthGuard],
		children: [
			{ path: "", component: HomeComponent },
			{ path: "dashboard", component: DashboardComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
