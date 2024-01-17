import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './pages/admin/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		DashboardComponent,
  HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		RouterModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
