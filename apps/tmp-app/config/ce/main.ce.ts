import { createApplication } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";
import { AppComponent } from "../../src/components/app";
import { appConfig } from "./app.config.ce";

createApplication(appConfig)
	.then((appRef) => {
		const injector = appRef.injector;
		const customElement = createCustomElement(AppComponent, { injector });
		customElements.define("ng-angular", customElement);
	})
	.catch((err) => console.error(err));
