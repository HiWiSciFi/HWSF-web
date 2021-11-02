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

		// strip html
		let code: any = this.content.nativeElement.textContent || this.content.nativeElement.innerText || "";

		switch(this.lang) {
			case "js":
			case "javascript":
			case "ts":
			case "typescript":
				console.log("ts");
				this.codeColoring_ts(code);
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

	codeColoring_ts(code: string): void {
		console.log(code);

		let concatCode: string = "";
		
		let htmlIgnore: boolean = false;
		let ignore: boolean = false;
		let cString: boolean = false;
		for (let i: number = 0; i < code.length; i++) {
			let character: string = code.slice(i, (i+1 >= code.length) ? undefined : i+1);
			if (!ignore && !htmlIgnore) {
				switch (character) {
					case "\\":
						ignore = true;
						break;
					case "<":
						htmlIgnore = true;
						break;
					default:
						concatCode += character;
						break;
				}
			} else if (!ignore) {
				if (character === ">") {
					htmlIgnore = false;
				}
			} else if (!htmlIgnore) {
				ignore = false;
			}
		}
	}

	codeColoring_java(code: string): void {
		console.log(code);
	}
}
