import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from "@angular/core";
import { APP_CONFIG } from "../../src/tokens/app-config.token";

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		{
			provide: APP_CONFIG,
			useValue: {
				appName: "BPMSoft Angular",
				publicPath: "../public",
			},
		},
	],
};
