(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("z80",function(){var g=/^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i;var f=/^(call|j[pr]|ret[in]?)\b/i;var d=/^b_?(call|jump)\b/i;var e=/^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i;var c=/^(n?[zc]|p[oe]?|m)\b/i;var h=/^([hl][xy]|i[xy][hl]|slia|sll)\b/i;var b=/^([\da-f]+h|[0-7]+o|[01]+b|\d+)\b/i;return{startState:function(){return{context:0}},token:function(k,j){if(!k.column()){j.context=0}if(k.eatSpace()){return null}var i;if(k.eatWhile(/\w/)){i=k.current();if(k.indentation()){if(j.context==1&&e.test(i)){return"variable-2"}if(j.context==2&&c.test(i)){return"variable-3"}if(g.test(i)){j.context=1;return"keyword"}else{if(f.test(i)){j.context=2;return"keyword"}else{if(d.test(i)){j.context=3;return"keyword"}}}if(h.test(i)){return"error"}}else{if(b.test(i)){return"number"}else{return null}}}else{if(k.eat(";")){k.skipToEnd();return"comment"}else{if(k.eat('"')){while(i=k.next()){if(i=='"'){break}if(i=="\\"){k.next()}}return"string"}else{if(k.eat("'")){if(k.match(/\\?.'/)){return"number"}}else{if(k.eat(".")||k.sol()&&k.eat("#")){j.context=4;if(k.eatWhile(/\w/)){return"def"}}else{if(k.eat("$")){if(k.eatWhile(/[\da-f]/i)){return"number"}}else{if(k.eat("%")){if(k.eatWhile(/[01]/)){return"number"}}else{k.next()}}}}}}}return null}}});a.defineMIME("text/x-z80","z80")});