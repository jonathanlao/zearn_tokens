ace.define("ace/snippets/javascript",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# Tokens\n\
# Inputs\n\
snippet {input}\n\
	{type: 'input', idx: ${1:idx}}\n\
snippet {dropdown}\n\
	{type: 'dropdown', idx: ${1:idx}, options: [${2}], displayStatic: false}\n\
snippet {fractionInput}\n\
	{type: 'fractionInput', idx: ${1:idx}}\n\
snippet {specificFractionInput}\n\
	{type: 'specificFractionInput', idx: ${1:idx}}\n\
snippet {mixedFractionInput}\n\
	{type: 'mixedFractionInput', idx: ${1:idx}}\n\
snippet {specificMixedFractionInput}\n\
	{type: 'specificMixedFractionInput', idx: ${1:idx}}\n\
snippet {inputSelector}\n\
	{type: 'inputSelector', idx: ${1:idx}}\n\
snippet {tileSlot}\n\
	{type: 'tileSlot', idx: ${1:idx}}\n\
# Tables\n\
snippet {msTable}\n\
	{\n\
		type: 'msTable',\n\
		rows: [\n\
			[${1}]\n\
		],\n\
	}\n\
snippet {msTableWithArrows}\n\
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
snippet {hintPopup}\n\
	{\n\
		type: 'hintPopup',\n\
		value: ['${1}'],\n\
		position: '${2:top}'\n\
	}\n\
# Fractions\n\
snippet {fraction}\n\
	{type: 'fraction', numerator: ${1:1}, denominator: ${2:2}}\n\
snippet {fractionSmall}\n\
	{type: 'fraction', numerator: ${1:1}, denominator: ${2:2}, cssClass: 'small'}\n\
snippet {fractionTrailer}\n\
	{type: 'fraction', numerator: ${1:1}, denominator: ${2:2}, trailer: ''}\n\
snippet {reducedFraction}\n\
	{type: 'reducedFraction', reduced: [${1}], text: '${2}', inputLocation: '${3:top-left}'}\n\
snippet {div}\n\
	{type: 'div', cssClass: '${1}', inner: ['${2}']}\n\
# Other\n\
snippet {br}\n\
	{type: 'br'}\n\
snippet {image}\n\
	{type: 'image', value: '${1}', altText: '${2}'}\n\
snippet {listItem}\n\
	{type: 'listItem', bulletLabel: '${1:•}', bulletText: '${2}'}\n\
# Helpers\n\
snippet TextHelper.metricUnitsToWords()\n\
	TextHelper.metricUnitsToWords(${1:10}, ${2:'cm'}, ${3:true})\n\
snippet TextHelper.capitalize()\n\
	TextHelper.capitalize(${1})\n\
snippet TextHelper.numToWords()\n\
	TextHelper.numToWords(${1})\n\
snippet TextHelper.numToFractionName()\n\
	TextHelper.numToFractionName(${1})\n\
snippet TextHelper.addCommas()\n\
	TextHelper.addCommas(${1})\n\
snippet TextHelper.pluralize()\n\
	TextHelper.pluralize(${1:'mouse'}, ${2:3})\n\
snippet TextHelper.tokensToString()\n\
	TextHelper.tokensToString([${1}])\n\
snippet TextHelper.expandedForm()\n\
	TextHelper.expandedForm(${1:12.34})\n\
snippet TextHelper.expandedFormMult()\n\
	TextHelper.expandedFormMult(${1:12.34})\n\
snippet TextHelper.expandedFormFrac()\n\
	TextHelper.expandedFormFrac(${1:12.34})\n\
# MathHelpers\n\
snippet MathHelper.digitsToNumber()\n\
	MathHelper.digitsToNumber(${1:[7,2,4,5]}, ${2: 2})\n\
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
            