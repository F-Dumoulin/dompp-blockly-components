Blockly.Blocks['q_forallpairs1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For All Pairs");
    this.appendValueInput("selector")
        .setCheck("Selector")
        .appendField("Selector");
    this.appendValueInput("condition")
        .setCheck("Condition-1")
        .appendField("Condition");
    this.setPreviousStatement(true, "Quantifier");
    //this.setNextStatement(true, "Quantifier");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['q_forallpairs2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For All Pairs");
    this.appendValueInput("selector1")
        .setCheck("Selector")
        .appendField("Selector 1");
    this.appendValueInput("selector2")
        .setCheck("Selector")
        .appendField("Selector 2");
    this.appendValueInput("condition")
        .setCheck("Condition-2")
        .appendField("Condition");
    this.setPreviousStatement(true, "Quantifier");
    //this.setNextStatement(true, "Quantifier");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['q_forall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For All");
    this.appendValueInput("selector")
        .setCheck("Selector")
        .appendField("Selector");
    this.appendValueInput("condition")
        .setCheck("Condition-1")
        .appendField("Condition");
    this.setPreviousStatement(true, "Quantifier");
    //this.setNextStatement(true, "Quantifier");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['q_exists'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For At Least One");
    this.appendValueInput("selector")
        .setCheck("Selector")
        .appendField("Selector");
    this.appendValueInput("condition")
        .setCheck("Condition-1")
        .appendField("Condition");
    this.setPreviousStatement(true, "Quantifier");
    //this.setNextStatement(true, "Quantifier");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



Blockly.JavaScript['q_forallpairs1'] = function(block) {
  let value_selector = Blockly.JavaScript.valueToCode(block, 'selector1', Blockly.JavaScript.ORDER_NONE);
  let value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);

  let code = 'dompp.ForAll(\n'
  + '"$x",\n'
  + value_selector + ',\n'
  + 'dompp.ForAll(\n'
  + '"$y",\n'
  + value_selector + ',\n'
  + value_condition + '\n'
  + ')'
  + ')';
  return code;
};

Blockly.JavaScript['q_forallpairs2'] = function(block) {
  let value_selector1 = Blockly.JavaScript.valueToCode(block, 'selector1', Blockly.JavaScript.ORDER_NONE);
  let value_selector2 = Blockly.JavaScript.valueToCode(block, 'selector2', Blockly.JavaScript.ORDER_NONE);
  let value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);

  let code = 'dompp.ForAll(\n'
  + '"$x",\n'
  + value_selector1 + ',\n'
  + 'dompp.ForAll(\n'
  + '"$y",\n'
  + value_selector2 + ',\n'
  + value_condition + '\n'
  + ')'
  + ')';
  return code;
};

Blockly.JavaScript['q_forall'] = function(block) {
  let value_selector = Blockly.JavaScript.valueToCode(block, 'selector', Blockly.JavaScript.ORDER_NONE);
  let value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);

  let code = 'dompp.ForAll(\n'
  + '"$x",\n'
  + value_selector + ',\n'
  + value_condition + '\n'
  + ')';
  return code;
};

Blockly.JavaScript['q_exists'] = function(block) {
  let value_selector = Blockly.JavaScript.valueToCode(block, 'selector', Blockly.JavaScript.ORDER_NONE);
  let value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);

  let code = 'dompp.Exists(\n'
  + '"$x",\n'
  + value_selector + ',\n'
  + value_condition + '\n'
  + ')';
  return code;
};