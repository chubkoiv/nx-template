import { Component, inject } from "@angular/core";
import { TmpLib1WrapperComponent } from '@nx-template/tmp-lib1';
import { TmpLib2Component } from "@nx-template/tmp-lib2";
import { AppConfig } from "../model/app-config.model";
import { APP_CONFIG } from "../tokens/app-config.token";

@Component({
	imports: [TmpLib1WrapperComponent, TmpLib2Component],
	selector: "tmp-root",
	template: `
		<h1 [style.color]="'red'">{{ appConfig.appName }}</h1>
		<p>Компонент1: </p>
		<div [style.display]="'flex'">
			<tmp-lib1 />
		</div>
		<label>Компонент2: </label>
		<tmp-lib2 />
	`,
	styles: ``,
})
export class AppComponent {
	appConfig = inject<AppConfig>(APP_CONFIG);
}
