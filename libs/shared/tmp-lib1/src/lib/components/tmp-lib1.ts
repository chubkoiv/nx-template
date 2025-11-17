import { Component } from '@angular/core';
import { TmpLib1HandlerComponent } from "./tmp-lib1-handler";

@Component({
	selector: "tmp-lib1",
	imports: [TmpLib1HandlerComponent],
	template: `
		<div
			[style.border]="'1px dashed black'"
			[style.border-radius]="'10px'"
			[style.padding]="'5px'"
		>
			<label>I'm tmp-lib1</label>
			<tmp-lib1-handler />
		</div>
	`,
	styles: ``,
})
export class TmpLib1WrapperComponent {}
