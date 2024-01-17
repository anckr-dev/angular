import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = (route, state) => {
	const token = false;
	if (token) {
		return true;
	}
	return inject(Router).createUrlTree(["/auth"]);
};
