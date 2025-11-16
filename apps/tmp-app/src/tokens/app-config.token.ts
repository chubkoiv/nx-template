import { InjectionToken } from "@angular/core";
import { AppConfig } from "../model/app-config.model";

export const APP_CONFIG = new InjectionToken<AppConfig>("APP_CONFIG", {
	providedIn: "root",
	factory: (): AppConfig => ({
		appName: "Angular",
		publicPath: "../public",
	}),
});
