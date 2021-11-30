import {LitElement, html, css} from 'lit';

export class TestEditor extends LitElement {
	static get styles(){
		return css`
			.flex{display:flex}.nowrap{flex-flow:row nowrap}.space-around{justify-content:space-around}#blocklyDiv{height:540px;width:70%}.injectionDiv{box-shadow:0 2px 10px rgba(17,39,119,.05);border-radius:12px}.blocklyMainBackground{stroke:none}.blocklyToolboxDiv{width:120px;padding-top:13px;background-color:#cad3f8}.blocklyFlyoutBackground{fill:#cad3f8}#testDiv{width:20%;min-width:150px;background-color:#fff;border-radius:12px;box-shadow:0 2px 10px rgba(17,39,119,.05);padding:20px 20px;font-family:sans-serif;color:#13204d}#testDiv ul{list-style-type:none;margin:0;padding:0}#testDiv ul li:not(:last-child){margin-bottom:7.5px;display:flex;flex-flow:row nowrap;justify-content:space-between}#testDiv ul li:last-child{cursor:pointer}#testDiv ul li i{padding-left:5px;color:#13204d}#testDiv ul li:last-child i{margin-right:10px}.test-dropdown{position:absolute;display:none;min-width:120px;margin-top:-45px;margin-left:-145px;padding:2.5px 10px;background-color:#fff;flex-flow:column nowrap;border:2px solid #e4e9fb;border-radius:5px;text-align:center;font-size:.9em;color:#13204d}.test-options:hover{cursor:pointer}.test-options:hover .test-dropdown{display:flex}.test-dropdown>span{margin:2px 0}#getCode{margin-top:35px}.button-1{min-width:100px;min-height:35px;margin:15px 0 0 20px;background-color:#cad3f8;border:none;border-radius:5px;color:#415bb5;font-size:.9em;box-shadow:0 2px 10px rgba(17,39,119,.05);cursor:pointer;transition:filter .2s ease-in-out}.button-1:hover{filter:brightness(105%)}.button-1:active{transition:none;filter:brightness(95%)}#generateTests{display:inline-block;min-height:35px;margin:15px 0 0 10px;border-radius:5px}#generateTests:hover{background-color:#fff;box-shadow:0 2px 10px rgba(17,39,119,.05)}.button-2{min-width:120px;min-height:35px;background-color:#cad3f8;border:none;border-radius:5px;color:#415bb5;font-size:.9em;box-shadow:0 2px 10px rgba(17,39,119,.05);cursor:pointer;transition:filter .1s ease-in-out}.button-2:hover{filter:brightness(105%)}.button-3{display:none;padding:0 10px;background:0 0;border:none;font-size:.9em;cursor:pointer;color:#13204d;text-decoration:none}.button-3:hover{color:#13204d}.button-3:visited{color:#13204d}#generateTests:hover .button-3{display:inline-block}
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
	}

	firstUpdated(changedProperties) {
		console.log(document);
		this.workspace = Blockly.inject(this.shadowRoot.getElementById("blocklyDiv"), {toolbox: document.getElementById('toolbox')});
	}

	render() {
		return html`
			<div class="flex nowrap space-around">
    			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
				<div id="blocklyDiv"></div>

				<div id="testDiv">
					<ul>
						${this.listTests.map(
							(item) => html`
								<li>
									<span>${item.name}</span>
									<div class="test-options">
										<i class="fa fa-cog"></i>
										<div class="test-dropdown">
											<span class="test-modify">Modify</span>
											<span class="test-delete">Delete</span>
											<span class="test-name">Change Name</span>
											<span>Export</span>
										</div>
									</div>
								</li>
							`
						)}
						<li id="newTest"><i class="fa fa-plus"></i>New test</li>
					</ul>
				</div>

			</div>

			<div>
				<button id="saveTest" class="button-1">Save Test</button>
				<div id = "generateTests">
					<button class="button-2">Generate Tests</button>
					<a href="basic-selection.html" class="button-3">Basic Selection</a>
					<a href="advanced-selection.html" class="button-3">Advanced Selection</a>
				</div>
			</div>


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
			  </category>
			  <category name="Condition">
			    <block type="c_comparetovalue">
			      <field name="cpt_value">0</field>
			    </block>
			    <block type="c_comparetwoelems"></block>
			    <block type="c_sameoffsettop"></block>
			  </category>
			  <category name="Property">
			    <block type="prop_width"></block>
			    <block type="prop_height"></block>
			    <block type="prop_offsettop"></block>
			    <block type="prop_color"></block>
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
			  </category>
			</xml>
		`;
	}
}

window.customElements.define('test-editor', TestEditor);