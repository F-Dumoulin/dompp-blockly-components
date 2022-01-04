Blockly.Blocks['a_scroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scroll");
    this.appendDummyInput()
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("0"), "x_scroll")
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("0"), "y_scroll");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Action");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['a_delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delay");
    this.appendDummyInput()
        .appendField("Duration")
        .appendField(new Blockly.FieldTextInput("0"), "delay_duration");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Action");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['a_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Click On Element");
    this.appendDummyInput()
        .appendField("CSS Selector")
        .appendField(new Blockly.FieldTextInput("#button"), "click_selector");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Action");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['a_hover'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hover Over Element");
    this.appendDummyInput()
        .appendField("CSS Selector")
        .appendField(new Blockly.FieldTextInput("#button"), "hover_selector");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Action");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['a_resize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Resize viewport");
     this.appendDummyInput()
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("1920"), "x_size")
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("1080"), "y_size");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["Evaluation", "Action", "Register"]);
    this.setNextStatement(true, "Action");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve,time);
  });
}





Blockly.JavaScript['a_scroll'] = function(block) {
  let text_x_scroll = block.getFieldValue('x_scroll');
  let text_y_scroll = block.getFieldValue('y_scroll');
  
  let code = 'await this.page.evaluate(function() {window.scroll(' + text_x_scroll + ', ' + text_y_scroll + '); });\n';
  return code;
};

Blockly.JavaScript['a_delay'] = function(block) {
  let text_delay_duration = block.getFieldValue('delay_duration');

  let code = 'await delay(' + text_delay_duration + ');\n';
  return code;
};

Blockly.JavaScript['a_click'] = function(block) {
  let text_click_selector = block.getFieldValue('hover_selector');

  let code = 'await this.page.click("' + text_click_selector + '");\n';
  return code;
};

Blockly.JavaScript['a_hover'] = function(block) {
  let text_click_selector = block.getFieldValue('click_selector');

  let code = 'await this.page.click("' + text_click_selector + '");\n';
  return code;
};

Blockly.JavaScript['a_resize'] = function(block) {
  let text_x_size = block.getFieldValue('x_size');
  let text_y_size = block.getFieldValue('y_size');
  
  let code = 'await this.page.setViewport({ width: ' + text_x_size + ', height: ' + text_y_size + ' });\n';
  return code;
};

