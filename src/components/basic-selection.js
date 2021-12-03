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
		this.listTests = [
			{name: 'Test 1', xml: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="evaluation" id="fZB;_z%6NTTVK?7YPgCz" x="100" y="100"><statement name="eval"><block type="q_forall" id="zmG`POaBj}Bf(]#F2m06"><value name="selector"><block type="s_findbyselector" id="$O*8Y6)DQa6-O~)7F3D["><field name="fbs_selector">h1</field></block></value><value name="condition"><block type="c_comparetovalue" id="!vAnk2D[W.[wlP7[TZbZ"><field name="cpt_value">100</field><value name="property"><block type="prop_offsettop" id="JkA[=+a@HR9X_+6-`Tx."></block></value><value name="operator"><block type="op_lesserorequal" id="R|X~fROYmzA64l:m}(q}"></block></value></block></value></block></statement></block></xml>'},
			{name: 'Test 2', xml: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="evaluation" id="fZB;_z%6NTTVK?7YPgCz" x="100" y="100"><statement name="eval"><block type="q_forall" id="zmG`POaBj}Bf(]#F2m06"><value name="selector"><block type="s_findbyselector" id="$O*8Y6)DQa6-O~)7F3D["><field name="fbs_selector">h1</field></block></value><value name="condition"><block type="c_comparetovalue" id="!vAnk2D[W.[wlP7[TZbZ"><field name="cpt_value">200</field><value name="property"><block type="prop_offsettop" id="JkA[=+a@HR9X_+6-`Tx."></block></value><value name="operator"><block type="op_lesserorequal" id="R|X~fROYmzA64l:m}(q}"></block></value></block></value></block></statement></block></xml>'},
			{name: 'Test 3', xml: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="evaluation" id="fZB;_z%6NTTVK?7YPgCz" x="100" y="100"><statement name="eval"><block type="q_forall" id="zmG`POaBj}Bf(]#F2m06"><value name="selector"><block type="s_findbyselector" id="$O*8Y6)DQa6-O~)7F3D["><field name="fbs_selector">h1</field></block></value><value name="condition"><block type="c_comparetovalue" id="!vAnk2D[W.[wlP7[TZbZ"><field name="cpt_value">300</field><value name="property"><block type="prop_offsettop" id="JkA[=+a@HR9X_+6-`Tx."></block></value><value name="operator"><block type="op_lesserorequal" id="R|X~fROYmzA64l:m}(q}"></block></value></block></value></block></statement></block></xml>'},
			{name: 'Test 4', xml: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="evaluation" id="fZB;_z%6NTTVK?7YPgCz" x="100" y="100"><statement name="eval"><block type="q_forall" id="zmG`POaBj}Bf(]#F2m06"><value name="selector"><block type="s_findbyselector" id="$O*8Y6)DQa6-O~)7F3D["><field name="fbs_selector">h1</field></block></value><value name="condition"><block type="c_comparetovalue" id="!vAnk2D[W.[wlP7[TZbZ"><field name="cpt_value">400</field><value name="property"><block type="prop_offsettop" id="JkA[=+a@HR9X_+6-`Tx."></block></value><value name="operator"><block type="op_lesserorequal" id="R|X~fROYmzA64l:m}(q}"></block></value></block></value></block></statement></block></xml>'},
		];
		this.listPages = [
			{url: 'www.site.com'},
			{url: 'www.site.com/page1'},
			{url: 'www.site.com/page2'},
			{url: 'www.site.com/page3'},
		]
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
		else { //go on 
			this.shadowRoot.getElementById("error").innerHTML = "";
			console.log(content);
			//...
		}
	}
}

window.customElements.define('basic-selection', BasicSelection);