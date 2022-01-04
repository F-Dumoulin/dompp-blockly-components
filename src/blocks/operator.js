Blockly.Blocks['op_greatherthan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(">");
    this.setOutput(true, "Operator");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['op_greatherorequal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(">=");
    this.setOutput(true, "Operator");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['op_lesserthan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("<");
    this.setOutput(true, "Operator");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['op_lesserorequal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("<=");
    this.setOutput(true, "Operator");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['op_equal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("=");
    this.setOutput(true, "Operator");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.JavaScript['op_greatherthan'] = function(block) {
  let code = 'new dompp.GreaterThan()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['op_greatherorequal'] = function(block) {
  let code = 'new dompp.GreaterOrEqual()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['op_lesserthan'] = function(block) {
  let code = 'new dompp.LesserThan()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['op_lesserorequal'] = function(block) {
  let code = 'new dompp.LesserOrEqual()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['op_equal'] = function(block) {
  let code = 'new dompp.IsEqualTo()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};