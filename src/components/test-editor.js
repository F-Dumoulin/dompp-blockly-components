import {LitElement, html, css} from 'lit';

export class TestEditor extends LitElement {

	constructor() {
		//initialization
		super();
		this.listTests = [];
		this.currentTest = {};
	}

	firstUpdated(changedProperties) {

		//injecting the blockly editor into our component
		this.workspace = Blockly.inject("dppte-blocklyDiv", {toolbox: document.getElementById('toolbox')});

		//fetching data from attributes
		let dataTests = this.getAttribute("data-tests");
		if(dataTests != null && dataTests != "") {
			this.listTests = JSON.parse(this.getAttribute("data-tests"));
		}

		//loads the first existing test into the editor
		if(this.listTests.length > 0)
			this.modifyTest(this.listTests[0]);

		//update component display
		this.requestUpdate();
	}

	render() {
		return html`
			<div class="dppte-container">

				<div class="dppte-flex">
					<div id="dppte-blocklyDiv"></div>
					<div id="dppte-testDiv">
						<ul>
							${this.listTests.map(
								(item) => html`
									<li class=${item.current ? 'dppte-current' : ''}>
										<span>${item.name}</span>
										<div class="dppte-test-options">
											<i class="fa fa-cog"></i>
											<div class="dppte-test-dropdown">
												<span @click=${() => this.modifyTest(item)}>Modify</span>
												<span @click=${() => this.deleteTest(item)}>Delete</span>
												<span @click=${() => this.renameTest(item)}>Change Name</span>
												<span @click=${() => this.exportTest(item)}>Export</span>
											</div>
										</div>
									</li>
								`
							)}
							<li @click=${this.newTest}><i class="fa fa-plus"></i>New test</li>
						</ul>
					</div>
				</div>

				<div>
					<button @click=${this.saveTest} class="dppte-button-1">Save Test</button>
				</div>

			</div>

			<style>
				.dppte-container {
					font-family: sans-serif;
					color: #13204D;
				}

				.dppte-flex {
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-around;
				}

				#dppte-blocklyDiv {
					height: 540px;
					width: 70%;
				}

				#dppte-blocklyDiv .injectionDiv {
					box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
					border-radius: 12px;
				}

				#dppte-blocklyDiv .blocklyMainBackground {
					stroke: none;
				}

				#dppte-blocklyDiv .blocklyToolboxDiv {
					width: 120px;
					padding-top: 13px;
					background-color: #CAD3F8;
					/*border-right: 5px solid #eff2ff;*/
				}

				#dppte-blocklyDiv .blocklyFlyoutBackground {
					fill: #CAD3F8;
				}

				#dppte-testDiv {
					width: 20%;
					min-width: 150px;
					background-color: #fff;
					border-radius: 12px;
					box-shadow: 0 2px 10px rgba(17, 39, 119, 0.05);
					padding: 20px 20px;
				}

				#dppte-testDiv ul {
					list-style-type: none;
					margin: 0;
					padding: 0;
				}

				#dppte-testDiv ul li:not(:last-child) {
					margin-bottom: 7.5px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
				}

				#dppte-testDiv ul li:last-child {
					cursor: pointer;
				}

				#dppte-testDiv ul li i {
					padding-left: 5px;
					color: #13204D;
				}

				#dppte-testDiv ul li:last-child i {
					margin-right: 10px;
				}

				.dppte-test-dropdown {
					position: absolute;
					display: none;
					min-width: 120px;
					/*margin-left: -70px;*/
					margin-top: -45px;
					margin-left: -145px;
					padding: 2.5px 10px;
					background-color: #fff;
					flex-flow: column nowrap;
					border: 2px solid #e4e9fb;
					border-radius: 5px;
					text-align: center;
					font-size: 0.9em;
					color: #13204D;
				}

				.dppte-test-options:hover {
					cursor: pointer;
				}

				.dppte-test-options:hover .dppte-test-dropdown {
					display: flex;
				}

				.dppte-test-dropdown>span {
					margin: 2px 0;
				}

				.dppte-current {
					color: #2751E6;
				}

				.dppte-button-1 {
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

				.dppte-button-1:hover {
					filter: brightness(105%);
				}

				.dppte-button-1:active {
					transition: none;
					filter: brightness(95%);
				}
			</style>

			<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
			  <category name="Quantifier">
			    <block type="q_forall"></block>
			    <block type="q_exists"></block>
			    <block type="q_forallpairs1"></block>
			    <block type="q_forallpairs2"></block>
			  </category>
			  <category name="Selector">
			    <block type="s_findbyselector">
			      <field name="fbs_selector">#main</field>
			    </block>
			    <block type="s_findbyclass">
			      <field name="fbc_class">navlink</field>
			    </block>
			    <block type="s_findbyid">
			      <field name="fbi_id">main</field>
			    </block>
			    <block type="s_registered_elements">
			      <field name="re_variable">elements</field>
			    </block>
			  </category>
			  <category name="Condition">
			    <block type="c_sameheight"></block>
			    <block type="c_samewidth"></block>
			    <block type="c_sameoffsettop"></block>
			    <block type="c_sameoffsetleft"></block>
			    <block type="c_horizontallycentered"></block>
			    <block type="c_verticallycentered"></block>
			    <block type="c_comparetwoelems"></block>
			    <block type="c_comparetovalue">
			      <field name="cpt_value">0</field>
			    </block>
			  </category>
			  <category name="Property">
			    <block type="prop_width"></block>
			    <block type="prop_color"></block>
			    <block type="prop_height"></block>
			    <block type="prop_offsettop"></block>
			    <block type="prop_offsetleft"></block>
			    <block type="prop_clientoffsettop"></block>
			    <block type="prop_clientoffsetleft"></block>
			    <block type="prop_fontsize"></block>
			    <block type="prop_fontweight"></block>
			    <block type="prop_fontfamily"></block>
			  </category>
			  <category name="Operator">
			    <block type="op_equal"></block>
			    <block type="op_greatherthan"></block>
			    <block type="op_greatherorequal"></block>
			    <block type="op_lesserthan"></block>
			    <block type="op_lesserorequal"></block>
			  </category>
			  <category name="Action">
			    <block type="a_delay">
			      <field name="delay_duration">0</field>
			    </block>
			    <block type="a_scroll">
			      <field name="x_scroll">0</field>
			      <field name="y_scroll">0</field>
			    </block>
			    <block type="a_click">
			      <field name="click_selector">#button</field>
			    </block>
			    <block type="a_hover">
			      <field name="hover_selector">#button</field>
			    </block>
			     <block type="a_resize">
			      <field name="x_size">1920</field>
			      <field name="y_size">1080</field>
			    </block>
			  </category>
			  <category name="Other">
			    <block type="evaluation"></block>
			    <block type="evaluation_variable"></block>
			    <block type="registerbyselector">
			      <field name="rbs_selector">#main</field>
			   	</block>
			  </category>
			</xml>
		`;
	}

	modifyTest(item) {

		//loads test into the test editor
		Blockly.mainWorkspace.clear();
		let xml = Blockly.Xml.textToDom(item.xml);
		Blockly.Xml.domToWorkspace(xml, this.workspace);

		//updates current test
		this.currentTest.current = false;
		this.currentTest = item;
		this.currentTest.current = true;

   		this.requestUpdate();
	}

	deleteTest(item) {

		if(confirm("Are you sure ?")) {

			//removes test from test list
			this.listTests = this.listTests.filter(test => test !== item);
			this.requestUpdate();
			this.saveTestEvent("delete");

			//updates current test
			if(item === this.currentTest) {

				//if at least one test exists, loads it into the editor
				if(this.listTests.length > 0) {
					this.modifyTest(this.listTests[0]);
				}
				//else clear the editor
				else {
					Blockly.mainWorkspace.clear();
					this.currentTest = {};
				}
			}

		}
	}

	renameTest(item) {

		let unique = true, pname = item.name, name = "";

		do {

			name = prompt("Please enter a UNIQUE name for your test", name);
			unique = true;

			if(name != pname) {
				for(let i=0; i<this.listTests.length; i++) {
					if(name == this.listTests[i].name)
						unique = false;
				}
			}

		} while(!unique);

		if(name != "" && name != null) {

			item.name = name;
			this.requestUpdate();
			this.saveTestEvent("rename");
		}
	}

	exportTest(item) {

		//temporary
		//for now just outputs the tests xml in the console
		//console.log(item.xml);
		console.log(Blockly.JavaScript.workspaceToCode(this.workspace));
	}

	newTest() {

		let unique = true, name = "";
		do {

			name = prompt("Please enter a UNIQUE name for your test", name);
			unique = true;

			for(let i=0; i<this.listTests.length; i++) {
				if(name == this.listTests[i].name)
					unique = false;
			}

		} while(!unique);

		if(name != "" && name != null) {

			//creates new test and loads it into the test editor
			Blockly.mainWorkspace.clear();
			let newTest = {name: name, xml: '<xml xmlns="https://developers.google.com/blockly/xml"></xml>'};
			this.listTests.push(newTest);

			//updates current test
			this.currentTest.current = false;
			this.currentTest = newTest;
			this.currentTest.current = true;

			this.requestUpdate();
			this.saveTestEvent("create");
		}
	}

	saveTest() {

		//saves the blocks currently in the editor as xml inside the current test
		if(this.currentTest != {}) {
			let xml = Blockly.Xml.workspaceToDom(this.workspace);
			let text = Blockly.Xml.domToText(xml);
			this.currentTest.xml = text;

			this.saveTestEvent("save");
		}
	}

	//dispatches an event including the test data and the type of action that triggered it
	saveTestEvent(eventType) {
		let event = new CustomEvent('save-tests', { detail : { data: JSON.stringify(this.listTests), type: eventType }});
		this.dispatchEvent(event);
	}

	//prevents the component from creating a shadow root
	//for now Blockly doesn't support its editor being inside a shadow root
	createRenderRoot() {
		return this;
	}
}

window.customElements.define('test-editor', TestEditor);