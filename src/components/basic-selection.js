import {LitElement, html, css} from 'lit';

export class BasicSelection extends LitElement {

	static get styles() {
		return css`
			.flex {
				display: flex;
				flex-flow: row wrap;
				font-family: sans-serif;
				color: #13204D;
			}

			.select-div {
				height: fit-content;
				min-width: max(20%, 175px);
				padding: 20px 20px;
				margin: 0 30px 10px 0;
				background-color: #fff;
				border-radius: 12px;
				box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
			}

			.select-div .top {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
			}

			.select-div h3 {
				margin-top: 0;
			}

			.select-div ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
			}

			.select-div ul li {
				margin-bottom: 7.5px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
			}

			.select-div ul span {
				max-width: 300px;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.select-div input[type=checkbox] {
				margin-right: 10px;
			}

			.select-div hr {
				opacity: 30%;
			    margin-right: 30%;
			}

			.check-all {
				height: 25px;
				padding: 1px 10px;
				background-color: #CAD3F8;
				border: none;
				border-radius: 10px;
				color: #415BB5;
				font-size: 0.9em;
				cursor: pointer;
				transition: filter 0.2s ease-in-out;
			}

			.check-all:hover {
				filter: brightness(105%);
			}

			.check-all:active {
				transition: none;
				filter: brightness(95%);
			}

			#error {
				font-family: sans-serif;
				color: #ff4646;
			}

			.button-1 {
				min-width: 100px;
				min-height: 35px;
				margin: 15px 0 0 20px;
				background-color: #CAD3F8;
				border: none;
				border-radius: 5px;
				color: #415BB5;
				font-size: 0.9em;
				box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
				cursor: pointer;
				transition: filter 0.2s ease-in-out;
			}

			.button-1:hover {
				filter: brightness(105%);
			}

			.button-1:active {
				transition: none;
				filter: brightness(95%);
			}
		`;
	}

	constructor() {
		super();
		this.listTests = [];
		this.listPages = [];
	}

	firstUpdated() {

		if(this.getAttribute("data-tests") != "") {
			this.listTests = JSON.parse(this.getAttribute("data-tests"));
		}

		if(this.getAttribute("data-pages") != "") {
			this.listPages = JSON.parse(this.getAttribute("data-pages"));
		}

		this.requestUpdate();
	}

	render() {
		return html`
			<div class="flex">
	        	<div id="pageSelec" class="select-div">
	        		<div class="top">
	        			<h3>Pages</h3>
	        			<button @click=${this.checkAll} class="check-all">Check All</button>
	        		</div>
	        		<ul>
	        			${this.listPages.map(
	        				(item, i) => html`
								${(i != 0) ? html`<hr/>` : ''}
	        					<li>
									<input id="page-${i}" class="page-check" type="checkbox"/>
	        						<label for="page-${i}" title="${item.url}">${item.url}</span>
								</li>
	        				`
	        			)}
					</ul>
	        	</div>

	        	<div id="testSelec" class="select-div">
	        		<div class="top">
	        			<h3>Tests</h3>
	        			<button @click=${this.checkAll} class="check-all">Check All</button>
	        		</div>
	        		<ul>
	        			${this.listTests.map(
	        				(item, i) => html`
								${(i != 0) ? html`<hr/>` : ''}
	        					<li>
									<input id="test-${i}" class="page-check" type="checkbox"/>
	        						<label for="test-${i}">${item.name}</span>
								</li>
	        				`
	        			)}
	        		</ul>
	        	</div>
	        </div>
	        <div id="error"></div>
            <div>
				<button @click=${this.runTests} class="button-1">Run Tests</button>
			</div>
		`;
	}

	checkAll(e) {

		//retrieves #pageSelec or #testSelec
		let t = e.path[2];
		//retrieves all boxes and all checked boxes
		let boxes = t.querySelectorAll("input[type=checkbox]"), checkedBoxes = t.querySelectorAll("input[type=checkbox]:checked");

		//if not all boxes are checked, check them all
		if(boxes.length > checkedBoxes.length) {
			for(let i=0; i< boxes.length; i++)
				boxes[i].checked = true;
		}
		//else uncheck them all
		else {
			for(let i=0; i< boxes.length; i++) 
				boxes[i].checked = false;
		}
	}

	runTests() {

		let content = {tests: {}, pages: {}}, testIDs = [];
		let testBoxes = this.shadowRoot.querySelectorAll("#testSelec input[type=checkbox]");
		let pageBoxes = this.shadowRoot.querySelectorAll("#pageSelec input[type=checkbox]");

		//retrieves all checked test ad add them to content with a unique ID as the key and the blockly generated xml as the value
		for(let i=0; i<this.listTests.length; i++) {
			if(testBoxes[i].checked) {
				content.tests[i] = this.listTests[i].xml;
				testIDs.push(i);
			}
		}

		//retrieves all checked pages and add them to content with its URL as the key and the IDs of the tests to run on the page as the value
		for(let i=0; i<this.listPages.length; i++) {
			if(pageBoxes[i].checked) {
				content.pages[this.listPages[i].url] = testIDs;
			}
		}

		//checks if at least one test and one page have been selected
		if(Object.keys(content.tests).length == 0 || Object.keys(content.pages).length == 0) { //display an error
			this.shadowRoot.getElementById("error").innerHTML = "Select at least one page and one test";
		}
		else { //...
			this.shadowRoot.getElementById("error").innerHTML = "";

			let event = new CustomEvent('run-tests', { detail : { data : content }});
			this.dispatchEvent(event);
		}
	}
}

window.customElements.define('basic-selection', BasicSelection);