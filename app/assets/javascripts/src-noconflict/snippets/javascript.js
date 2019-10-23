ace.define("ace/snippets/javascript",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "\
# Tokens\n\
# Inputs\n\
snippet input\n\
	{type: 'input', idx: ${1:idx}}\n\
snippet dropdown\n\
	{type: 'dropdown', idx: ${1:idx}, options: [${2}], displayStatic: false}\n\
snippet fractionInput\n\
	{type: 'fractionInput', idx: ${1:idx}}\n\
snippet specificFractionInput\n\
	{type: 'specificFractionInput', idx: ${1:idx}}\n\
snippet mixedFractionInput\n\
	{type: 'mixedFractionInput', idx: ${1:idx}}\n\
snippet specificMixedFractionInput\n\
	{type: 'specificMixedFractionInput', idx: ${1:idx}}\n\
snippet inputSelector\n\
	{type: 'inputSelector', idx: ${1:idx}}\n\
snippet tileSlot\n\
	{type: 'tileSlot', idx: ${1:idx}}\n\
# Tables\n\
snippet msTable\n\
	{\n\
		type: 'msTable',\n\
		rows: [\n\
			[${1}]\n\
		],\n\
	}\n\
snippet msTableWithArrows\n\
	{\n\
		type: 'msTable',\n\
		rows: [\n\
			[${1}]\n\
		],\n\
		leftArrows: [ [] ],\n\
		leftArrowLabels: [ [] ],\n\
		rightArrows: [ [] ],\n\
		rightArrowLabels: [ [] ]\n\
	}\n\
# Hints\n\
snippet hintPopup\n\
	{\n\
		type: 'hintPopup',\n\
		value: ['${1}'],\n\
		position: '${2:top}'\n\
	}\n\
# Fractions\n\
snippet fraction\n\
	{type: 'fraction', numerator: ${1:1}, denominator: ${2:2}}\n\
snippet fractionSmall\n\
	{type: 'fraction', numerator: ${1:1}, denominator: ${2:2}, cssClass: 'small'}\n\
snippet div\n\
	{type: 'div', cssClass: '${1}', inner: ['${2}']}\n\
# Other\n\
snippet br\n\
	{type: 'br'}\n\
#\n\
# Code Snippets\n\
snippet if\n\
	if (${1:true}) {\n\
		${0}\n\
	}\n\
snippet ifelse\n\
	if (${1:true}) {\n\
		${2}\n\
	} else {\n\
		${0}\n\
	}\n\
snippet for\n\
	for (let ${1:i} = 0; $1 < ${2:Things}.length; $1++) {\n\
		${3:$2[$1]}$0\n\
	}\n\
";
exports.scope = "javascript";

});                (function() {
                    ace.require(["ace/snippets/javascript"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            