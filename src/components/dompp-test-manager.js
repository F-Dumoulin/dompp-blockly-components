import {LitElement, html, css} from 'lit';
import './test-editor.js'
import './basic-selection.js'
import './advanced-selection.js'

export class DOMPPTestManager extends LitElement {


	constructor() {
		super();

		this.listTests = [];
		if(this.getAttribute("data-tests") != "") {
			this.listTests = JSON.parse(this.getAttribute("data-tests"));
		}

		this.listPages = [];
		if(this.getAttribute("data-pages") != "") {
			this.listPages = JSON.parse(this.getAttribute("data-pages"));
		}
	}

	firstUpdated() {
		let testEditor = document.querySelector("test-editor");

		testEditor.addEventListener('save-tests', (e) => {
			let event = new CustomEvent('save-tests', { detail : e.detail });
			this.dispatchEvent(event);
		});

		let basicSelection = document.querySelector("basic-selection");

		basicSelection.addEventListener('run-tests', (e) => {
			let event = new CustomEvent('run-tests', {detail : e.detail });
			this.dispatchEvent(event);
		});

		let advancedSelection = document.querySelector("advanced-selection");

		advancedSelection.addEventListener('run-tests', (e) => {
			let event = new CustomEvent('run-tests', {detail : e.detail });
			this.dispatchEvent(event);
		});
	}

	render() {
		return html`
			<test-editor 
				data-tests="${JSON.stringify(this.listTests)}"
				data-save-callback="${this.saveCallback}"></test-editor/>
			<basic-selection 
				data-tests="${JSON.stringify(this.listTests)}"
				data-pages="${JSON.stringify(this.listPages)}">
			</basic-selection>
			<advanced-selection 
				data-tests="${JSON.stringify(this.listTests)}"
				data-pages="${JSON.stringify(this.listPages)}">
			</advanced-selection>
			<div id = "dpptm-generateTests">
				<button class="dpptm-button-2">Generate Tests</button>
				<button @click=${this.basicSelection} class="dpptm-button-3">Basic Selection</button>
				<button class="dpptm-button-3">Advanced Selection</button>
			</div>
			<style>
				#dpptm-generateTests {
					display: inline-block;
					min-height: 35px;
					margin: 15px 0 0 20px;
					border-radius: 5px;
					font-family: sans-serif;
					color: #13204D;
				}

				#dpptm-generateTests:hover {
					background-color: #fff;
					box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
				}
				.dpptm-button-2 {
					min-width: 120px;
					min-height: 35px;
					background-color: #CAD3F8;
					border: none;
					border-radius: 5px;
					color: #415BB5;
					font-size: 0.9em;
					box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
					cursor: pointer;
					transition: filter 0.1s ease-in-out;
				}

				.dpptm-button-2:hover {
					filter: brightness(105%);
				}

				.dpptm-button-3 {
					display: none;
					/*min-height: 35px;*/
					padding: 0 10px;
					background: none;
					border: none;
					font-size: 0.9em;
					cursor: pointer;
					color: #13204D;
					text-decoration: none;
				}

				.dpptm-button-3:hover {
					color: #13204D;
				}

				.dpptm-button-3:visited {
					color: #13204D;
				}

				#dpptm-generateTests:hover .dpptm-button-3 {
					display: inline-block;
				}
			</style>
		`;
	}

	//prevents the component from creating a shadow root
	//for now Blockly doesn't support its editor being inside a shadow root
	createRenderRoot() {
		return this;
	}

	basicSelection() {
	}
}

window.customElements.define('dompp-test-manager', DOMPPTestManager);