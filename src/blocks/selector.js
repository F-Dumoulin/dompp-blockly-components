Blockly.Blocks['s_findbyselector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Find By Selector");
    this.appendDummyInput()
        .appendField("Selector")
        .appendField(new Blockly.FieldTextInput("#main"), "fbs_selector");
    this.setInputsInline(false);
    this.setOutput(true, "Selector");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s_findbyclass'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Find By Class");
    this.appendDummyInput()
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("navlink"), "fbc_class");
    this.setInputsInline(false);
    this.setOutput(true, "Selector");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s_findbyid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Find By Id");
    this.appendDummyInput()
        .appendField("Id")
        .appendField(new Blockly.FieldTextInput("main"), "fbi_id");
    this.setInputsInline(false);
    this.setOutput(true, "Selector");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s_registered_elements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Registered Element(s)")
    this.appendDummyInput()
        .appendField("Variable Name")
        .appendField(new Blockly.FieldTextInput("elements"), "re_variable");
    this.setInputsInline(false);
    this.setOutput(true, "Selector");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
} 






Blockly.JavaScript['s_findbyselector'] = function(block) {
  let text_fbs_selector = block.getFieldValue('fbs_selector');

  let code = 'new dompp.FindBySelector("' + text_fbs_selector  + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['s_findbyclass'] = function(block) {
  let text_fbc_class = block.getFieldValue('fbc_class');

  let code = 'new dompp.FindBySelector(".' + text_fbc_class  + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['s_findbyid'] = function(block) {
  let text_fbi_id = block.getFieldValue('fbi_id');

  let code = 'new dompp.FindBySelector("#' + text_fbi_id  + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['s_registered_elements'] = function(block) {
  return [block.getFieldValue('re_variable'), Blockly.JavaScript.ORDER_NONE];
}

