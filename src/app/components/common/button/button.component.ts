// button.component.ts
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
	@Input() label = "Button";
	@Input() cssClass = "";
	@Input() disabled = false;
	@Input() type = "button";
	@Output() onClick: EventEmitter<void> = new EventEmitter<void>();
	@Input() iconClass?: string;
	@Input() iconPosition: "left" | "right" = "left";
	handleClick(): void {
		if (!this.disabled) {
			this.onClick.emit();
		}
	}
}
