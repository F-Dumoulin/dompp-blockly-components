import {LitElement, html, css} from 'lit';
import './test-editor.js'
import './basic-selection.js'
import './advanced-selection.js'

export class DOMPPTestManager extends LitElement {


	constructor() {
		super();

		this.listTests = [];
		this.listPages = [];
		this.basicSelection = document.createElement("basic-selection");
		this.advancedSelection = document.createElement("advanced-selection");


		let dataTests = this.getAttribute("data-tests"), dataPages = this.getAttribute("data-pages");
		if(dataTests != null && dataTests != "") {
			this.listTests = JSON.parse(this.getAttribute("data-tests"));
		}
		if(dataPages != null && dataPages != "") {
			this.listPages = JSON.parse(this.getAttribute("data-pages"));
		}
	}

	firstUpdated() {
		this.testEditor = document.querySelector("test-editor");

		this.testEditor.addEventListener('save-tests', (e) => {

			this.listTests = e.detail.data;

			let event = new CustomEvent('save-tests', { detail : e.detail });
			this.dispatchEvent(event);
		});

		this.basicSelection.addEventListener('run-tests', (e) => {
			let event = new CustomEvent('run-tests', {detail : e.detail });
			this.dispatchEvent(event);
		});

		this.advancedSelection.addEventListener('run-tests', (e) => {
			let event = new CustomEvent('run-tests', {detail : e.detail });
			this.dispatchEvent(event);
		});
	}

	render() {
		return html`
			<div id="dpptm-generateTests" class="dpptm-button-box">
				<button class="dpptm-button-2">Generate Tests</button>
				<button @click=${this.generateBasicSelection} class="dpptm-button-3">Basic Selection</button>
				<button @click=${this.generateAdvancedSelection} class="dpptm-button-3">Advanced Selection</button>
			</div>
			<div id="dpptm-backToEditor" class="dpptm-button-box" style="display: none">
				<button @click=${this.backToEditor} class="dpptm-button-1">Go Back To Editor</button>
			</div>
			<test-editor 
				data-tests="${JSON.stringify(this.listTests)}"
				data-save-callback="${this.saveCallback}">
			</test-editor/>
			<style>

				.dpptm-button-box {
					display: inline-block;
					margin: 15px 0 15px 20px;
				}

				#dpptm-generateTests {
					min-height: 35px;
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

				.dpptm-button-1 {
					min-width: 100px;
					min-height: 35px;
					background-color: #CAD3F8;
					border: none;
					border-radius: 5px;
					color: #415BB5;
					font-size: 0.9em;
					box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
					cursor: pointer;
					transition: filter 0.2s ease-in-out;
				}

				.dpptm-button-1:hover {
					filter: brightness(105%);
				}

				.dpptm-button-1:active {
					transition: none;
					filter: brightness(95%);
				}
			</style>
		`;
	}

	//prevents the component from creating a shadow root
	//for now Blockly doesn't support its editor being inside a shadow root
	createRenderRoot() {
		return this;
	}

	generateBasicSelection() {

		this.testEditor.style.display = "none";
		this.querySelector("#dpptm-generateTests").style.display = "none";
		this.querySelector("#dpptm-backToEditor").style.display = "inline-block";

		this.basicSelection.setAttribute("data-tests", JSON.stringify(this.listTests));
		this.basicSelection.setAttribute("data-pages", JSON.stringify(this.listPages));
		this.testEditor.after(this.basicSelection);
	}

	generateAdvancedSelection() {

		this.testEditor.style.display = "none";
		this.querySelector("#dpptm-generateTests").style.display = "none";
		this.querySelector("#dpptm-backToEditor").style.display = "inline-block";

		this.advancedSelection.setAttribute("data-tests", JSON.stringify(this.listTests));
		this.advancedSelection.setAttribute("data-pages", JSON.stringify(this.listPages));
		this.testEditor.after(this.advancedSelection);
	}

	backToEditor() {

		if(this.contains(this.basicSelection))
			this.removeChild(this.basicSelection);

		if(this.contains(this.advancedSelection))
			this.removeChild(this.advancedSelection);

		this.testEditor.style.display = "block";
		this.querySelector("#dpptm-generateTests").style.display = "inline-block";
		this.querySelector("#dpptm-backToEditor").style.display = "none";
	}
}

window.customElements.define('dompp-test-manager', DOMPPTestManager);