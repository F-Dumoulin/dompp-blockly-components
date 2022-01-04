Blockly.Blocks['prop_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Width");
    this.setOutput(true, "Property");
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Height");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_offsettop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Offset Top");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_offsetleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Offset Left");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_clientoffsettop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Client Offset Top");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_clientoffsetleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Client Offset Left");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_fontsize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font Size");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_fontweight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font Weight");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prop_fontfamily'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font Family");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.JavaScript['prop_width'] = function(block) {
  let code = 'new dompp.DimensionWidth()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_color'] = function(block) {
  let code = 'new dompp.Color()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_height'] = function(block) {
  let code = 'new dompp.DimenseionHeight()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_offsettop'] = function(block) {
  let code = 'new dompp.PageOffsetTop()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_offsetleft'] = function(block) {
  let code = 'new dompp.PageOffsetLeft()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_clientoffsettop'] = function(block) {
  let code = 'new dompp.ClientOffsetTop()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_clientoffsetleft'] = function(block) {
  let code = 'new dompp.ClientOffsetLeft()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_fontsize'] = function(block) {
  let code = 'new dompp.FontSize()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_fontweight'] = function(block) {
  let code = 'new dompp.FontWeight()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['prop_fontfamily'] = function(block) {
  let code = 'new dompp.FontFamily()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};