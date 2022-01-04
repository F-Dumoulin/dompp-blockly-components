Blockly.Blocks['evaluation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Evaluation");
    this.appendDummyInput()
        .appendField("Description")
        .appendField(new Blockly.FieldTextInput("..."), "eval_desc");
    this.appendStatementInput("eval")
        .setCheck("Quantifier");
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Evaluation");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['evaluation_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Evaluation");
    this.appendDummyInput()
        .appendField("Description")
        .appendField(new Blockly.FieldTextInput("..."), "eval_v_desc");
    this.appendDummyInput()
        .appendField("Variable Name")
        .appendField(new Blockly.FieldTextInput("elements"), "eval_v_variable");
    this.appendStatementInput("eval")
        .setCheck("Quantifier");
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Evaluation");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['registerbyselector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Register By Selector");
    this.appendDummyInput()
        .appendField("Variable Name")
        .appendField(new Blockly.FieldTextInput("elements"), "rbs_variable");
    this.appendDummyInput()
        .appendField("Selector")
        .appendField(new Blockly.FieldTextInput("#main"), "rbs_selector");
    this.appendValueInput("property")
        .setCheck("Property")
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("Property");
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Register");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}





Blockly.JavaScript['evaluation'] = function(block) {
  let statements_eval = Blockly.JavaScript.statementToCode(block, 'eval');
  let eval_desc = block.getFieldValue('eval_desc');

  console.log(this.getParent());

  let code = 'let result = await this.page.evaluate(function() {\n'
  + 'let body = document.querySelector("body");\n'
  + 'let f = ' + statements_eval + ';\n'
  + 'let cond = new dompp.TestCondition("' + eval_desc + '", f);\n'
  + 'let result = cond.evaluate(body).getValue();\n'
  + 'return result;\n'
  + '});\n'
  + 'if(result) console.log("Test réussi")\n'
  + 'else console.log("Test raté");\n';

  let asyncCode = '(async () => {\n' + code + '})()\n';
  return asyncCode;
};

Blockly.JavaScript['evaluation_variable'] = function(block) {
  let statements_eval = Blockly.JavaScript.statementToCode(block, 'eval');
  let eval_v_desc = block.getFieldValue('eval_v_desc');
  let eval_v_variable = block.getFieldValue('eval_v_variable');

  let code = 'let result = await this.page.evaluate(function(' + eval_v_variable + ') {\n'
  + 'let body = document.querySelector("body");\n'
  + eval_v_variable + ' = dompp.deserializeArray(' + eval_v_variable + ');\n'
  + 'let f = ' + statements_eval + ';\n'
  + 'let cond = new dompp.TestCondition("' + eval_v_desc + '", f);\n'
  + 'let result = cond.evaluate(body).getValue();\n'
  + 'return result;\n'
  + '}, ' + eval_v_variable + ');\n'
  + 'if(result) console.log("Test réussi")\n'
  + 'else console.log("Test raté");\n';
  let asyncCode = '(async () => {\n' + code + '})()\n';
  return asyncCode;
};

Blockly.JavaScript["registerbyselector"] = function(block) {
  let text_rbs_selector = block.getFieldValue('rbs_selector');
  let text_rbs_variable = block.getFieldValue('rbs_variable');
  let value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_ATOMIC);

  let code = 'let ' + text_rbs_variable + ' = await this.page.evaluate(function() {\n'
  + 'let body = document.querySelector("body");\n'
  + 'let r = new dompp.RegisterBySelector("' + text_rbs_selector + '", ' + value_property + ';\n'
  + 'let elements = r.evaluate(body).getValue();\n'
  + 'return dompp.serializeArray(elements);\n'
  + '});\n'

  return code;
}