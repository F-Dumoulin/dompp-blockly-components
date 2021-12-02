import {LitElement, html, css} from 'lit';

export class AdvancedSelection extends LitElement {

	static get styles() {
		return css`
			.flex {
				display: flex;
				flex-flow: row wrap;
 				justify-content: center;
				font-family: sans-serif;
				color: #13204D;
			}

			.center-text {
				text-align: center;
			}

			.page-card {
				height: fit-content;
				min-width: max(20%, 300px);
				padding: 20px 20px;
				margin-bottom: 25px;
				margin-right: 15px;
				margin-left: 15px;
				background-color: #fff;
				border-radius: 12px;
				box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
			}

			.page-card .top {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
			}

			.page-card h3 {
				max-width: 225px;
				margin-top: 0;
				margin-bottom: 25px;
				overflow: hidden;
				text-overflow: ellipsis;
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

			.page-card ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
			}

			.page-card ul li {
				margin-bottom: 7.5px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
			}

			.page-card hr {
				opacity: 30%;
			    margin-right: 30%;
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
			{url: 'www.site.com/page123456789'},
			{url: 'www.site.com/page2'},
			{url: 'www.site.com/page3'},
		]
	}

	render() {
		return html`
			<div id="pageDiv" class="flex wrap center">
				${this.listPages.map(
					(itemPage) => html`
						<div class="page-card">
	        				<div class="top">
			        			<h3 title="${itemPage.url}">${itemPage.url}</h3>
			        			<button @click=${this.checkAll} class="check-all">Check All</button>
			        		</div>
							<ul>
								${this.listTests.map(
									(itemTest, i) => html`
										${(i != 0) ? html`<hr/>` : ''}
										<li>
											<span>${itemTest.name}</span>
											<input type="checkbox"/>
										</li>
									`
								)}
							</ul>
						</div>
					`
				)}
	        	<!-- <div class="page-card">
	        		<h3>www.site.com</h3>
	        		<ul>
	        			<li>
	        				<span>Test 1</span>
							<input type="checkbox"/>
	        			</li>
						<hr/>
	        			<li>
	        				<span>Test 2</span>
							<input type="checkbox"/>
	        			</li>
						<hr/>
	        			<li>
	        				<span>Test 3</span>
							<input type="checkbox"/>
	        			</li>
						<hr/>
	        			<li>
	        				<span>Test 4</span>
							<input type="checkbox"/>
	        			</li>
						<hr/>
	        		</ul>
	        	</div> -->
	        </div>
	        <div id=error class="center-text"></div>
	        <div class="center-text">
				<button @click=${this.runTests}  class="button-1">Run Tests</button>
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
		let pageCards = this.shadowRoot.querySelectorAll(".page-card");

		//for each page
		for(let i=0; i<this.listPages.length; i++) {

			//retrieves all boxes
			let testBoxes = pageCards[i].querySelectorAll("input[type=checkbox]"), testIDs = [];

			//for each box
			for(let j=0; j<this.listTests.length; j++) {
				//if the test is selected
				if(testBoxes[j].checked) {
					testIDs.push(j);//add his ID to the list of tests to run on this page
					content.tests[j] = this.listTests[j].xml;//add him to content with a unique ID as the key and the Blockly generated xml as the value
				}
			}

			//if at least one test has been selected on the page
			if(testIDs.length > 0) {
				//add it to content with its URL as the key and the IDs of the tests to run on the page as the value
				content.pages[this.listPages[i].url] = testIDs;
			}
		}

		//checks if at least one test and one page have been selected
		if(Object.keys(content.tests).length == 0 || Object.keys(content.pages).length == 0) { //display an error
			this.shadowRoot.getElementById("error").innerHTML = "Select at least one test";
		}
		else { //go on 
			this.shadowRoot.getElementById("error").innerHTML = "";
			console.log(content);
			//...
		}
	}
}

window.customElements.define('advanced-selection', AdvancedSelection);