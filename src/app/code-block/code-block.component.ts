import { Component, ContentChild, Input, OnInit, AfterContentInit } from '@angular/core';
import { char_stringStartEnd } from '../char-util';
import { ElementRef } from '@angular/core';

@Component({
	selector: 'app-code-block',
	templateUrl: './code-block.component.html',
	styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit {

	@Input() lang?: string;

	@ContentChild('code') content?: ElementRef;

	constructor() { }

	ngOnInit(): void {
		
	}

	ngAfterContentInit(): void {
		if (this.content === undefined) return;

		switch(this.lang) {
			case "js":
			case "javascript":
			case "ts":
			case "typescript":
				console.log("ts");
				this.codeColoring_ts(this.content.nativeElement);
				break;
			case "j":
			case "java":
				console.log("java");
				break;
			case "c":
			case "c++":
			case "cpp":
			case "cplusplus":
				console.log("cpp");
				break;
			case "p":
			case "python":
				console.log("python");
				break;
			default:
				console.log("unknown");
				break;
		}
	}

	codeColoring_ts(code: Element): void {
		console.log(code);

		let concatCode: string = "<div class=\"codeBlock\">";
		let cString: boolean = false;

		for (let i: number = 0; i < code.innerHTML.length; i++) {
			let character: string = code.innerHTML.slice(i, (i+1 >= code.innerHTML.length) ? undefined : i+1);
			concatCode += character;
			console.log(concatCode);
		}
		concatCode += "</div>";
		code.innerHTML = concatCode;
		console.log(code.innerHTML);
	}

	codeColoring_java(code: string): void {
		console.log(code);
	}
}
