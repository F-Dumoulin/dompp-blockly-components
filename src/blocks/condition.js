Blockly.Blocks['c_sameheight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Same Height");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-2");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_samewidth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Same Width");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-2");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_sameoffsettop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Same Offset Top");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-2");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_sameoffsetleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Same Offset Left");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-2");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_horizontallycentered'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Horizontally Centered");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-2");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}

Blockly.Blocks['c_verticallycentered'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Horizontally Centered");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-2");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}

Blockly.Blocks['c_comparetwoelems'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compare Two Elements");
    this.appendValueInput("property")
        .setCheck("Property")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Property");
    this.appendValueInput("operator")
        .setCheck("Operator")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Operator");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-2");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_comparetovalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compare To Value");
    this.appendValueInput("property")
        .setCheck("Property")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Property");
    this.appendValueInput("operator")
        .setCheck("Operator")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Operator");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput("0"), "cpt_value");
    this.setInputsInline(false);
    this.setOutput(true, "Condition-1");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.JavaScript['c_sameheight'] = function(block) {
  let code = 'new dompp.ComposedFunction(\n'
  + 'new dompp.IsEqualTo(),\n'
  + 'new dompp.ComposedFunction(new dompp.DimensionHeight(), "$x"),\n'
  + 'new dompp.ComposedFunction(new dompp.DimensionHeight(), "$y")\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['c_samewidth'] = function(block) {
  let code = 'new dompp.ComposedFunction(\n'
  + 'new dompp.IsEqualTo(),\n'
  + 'new dompp.ComposedFunction(new dompp.DimensionWidth(), "$x"),\n'
  + 'new dompp.ComposedFunction(new dompp.DimensionWidth(), "$y")\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['c_sameoffsettop'] = function(block) {
  let code = 'new dompp.ComposedFunction(\n'
  + 'new dompp.IsEqualTo(),\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetTop(), "$x"),\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetTop(), "$y")\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['c_sameoffsetleft'] = function(block) {
  let code = 'new dompp.ComposedFunction(\n'
  + 'new dompp.IsEqualTo(),\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetLeft(), "$x"),\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetLeft(), "$y")\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['c_horizontallycentered'] = function(block) {
  let code = 'new dompp.ComposedFunction(\n'
  + 'new dompp.IsEqualTo(),\n'
  + 'dompp.Plus(\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetLeft(), "$x"),\n'
  + 'new dompp.ComposedFunction(new dompp.Division(), dompp.Width($x), new dompp.ConstantFunction(2))\n'
  + '),\n'
  + 'dompp.Plus(\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetLeft(), "$y"),\n'
  + 'new dompp.ComposedFunction(new dompp.Division(), dompp.Width($y), new dompp.ConstantFunction(2))\n'
  + ')\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['c_verticallycentered'] = function(block) {
  let code = 'new dompp.ComposedFunction(\n'
  + 'new dompp.IsEqualTo(),\n'
  + 'dompp.Plus(\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetTop(), "$x"),\n'
  + 'new dompp.ComposedFunction(new dompp.Division(), dompp.Height($x), new dompp.ConstantFunction(2))\n'
  + '),\n'
  + 'dompp.Plus(\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetTop(), "$y"),\n'
  + 'new dompp.ComposedFunction(new dompp.Division(), dompp.Height($y), new dompp.ConstantFunction(2))\n'
  + ')\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['c_comparetwoelems'] = function(block) {
  let value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_ATOMIC);
  let value_operator = Blockly.JavaScript.valueToCode(block, 'operator', Blockly.JavaScript.ORDER_ATOMIC);

  let code = 'new dompp.ComposedFunction(\n' 
    + value_operator + ',\n'
    + 'new dompp.ComposedFunction(' + value_property + ', "$x),\n'
    + 'new dompp.ComposedFunction(' + value_property + ', "$y)\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['c_comparetovalue'] = function(block) {
  let value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_NONE) || 'erreur';
  let value_operator = Blockly.JavaScript.valueToCode(block, 'operator', Blockly.JavaScript.ORDER_NONE) || 'erreur';
  let text_cpt_value = block.getFieldValue('cpt_value');

  let code = 'new dompp.ComposedFunction(\n' 
    + value_operator + ',\n' 
    + 'new dompp.ComposedFunction(' + value_property + ', "$x"),\n' 
    + 'new dompp.ConstantFunction(' + text_cpt_value + ')\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};