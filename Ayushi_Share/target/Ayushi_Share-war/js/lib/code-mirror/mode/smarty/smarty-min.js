(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("smarty",function(b){var f={rightDelimiter:"}",leftDelimiter:"{",smartyVersion:2};if(b.hasOwnProperty("leftDelimiter")){f.leftDelimiter=b.leftDelimiter}if(b.hasOwnProperty("rightDelimiter")){f.rightDelimiter=b.rightDelimiter}if(b.hasOwnProperty("smartyVersion")&&b.smartyVersion===3){f.smartyVersion=3}var e=["debug","extends","function","include","literal"];var h;var d={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/};var g={cont:function(j,i){h=i;return j},chain:function(j,i,k){i.tokenize=k;return k(j,i)}};var c={tokenizer:function(l,j){if(l.match(f.leftDelimiter,true)){if(l.eat("*")){return g.chain(l,j,c.inBlock("comment","*"+f.rightDelimiter))}else{j.depth++;var i=l.eol();var k=/\s/.test(l.peek());if(f.smartyVersion===3&&f.leftDelimiter==="{"&&(i||k)){j.depth--;return null}else{j.tokenize=c.smarty;h="startTag";return"tag"}}}else{l.next();return null}},smarty:function(p,n){if(p.match(f.rightDelimiter,true)){if(f.smartyVersion===3){n.depth--;if(n.depth<=0){n.tokenize=c.tokenizer}}else{n.tokenize=c.tokenizer}return g.cont("tag",null)}if(p.match(f.leftDelimiter,true)){n.depth++;return g.cont("tag","startTag")}var m=p.next();if(m=="$"){p.eatWhile(d.validIdentifier);return g.cont("variable-2","variable")}else{if(m=="|"){return g.cont("operator","pipe")}else{if(m=="."){return g.cont("operator","property")}else{if(d.stringChar.test(m)){n.tokenize=c.inAttribute(m);return g.cont("string","string")}else{if(d.operatorChars.test(m)){p.eatWhile(d.operatorChars);return g.cont("operator","operator")}else{if(m=="["||m=="]"){return g.cont("bracket","bracket")}else{if(m=="("||m==")"){return g.cont("bracket","operator")}else{if(/\d/.test(m)){p.eatWhile(/\d/);return g.cont("number","number")}else{if(n.last=="variable"){if(m=="@"){p.eatWhile(d.validIdentifier);return g.cont("property","property")}else{if(m=="|"){p.eatWhile(d.validIdentifier);return g.cont("qualifier","modifier")}}}else{if(n.last=="pipe"){p.eatWhile(d.validIdentifier);return g.cont("qualifier","modifier")}else{if(n.last=="whitespace"){p.eatWhile(d.validIdentifier);return g.cont("attribute","modifier")}}}if(n.last=="property"){p.eatWhile(d.validIdentifier);return g.cont("property",null)}else{if(/\s/.test(m)){h="whitespace";return null}}var o="";if(m!="/"){o+=m}var q=null;while(q=p.eat(d.validIdentifier)){o+=q}for(var l=0,k=e.length;l<k;l++){if(e[l]==o){return g.cont("keyword","keyword")}}if(/\s/.test(m)){return null}return g.cont("tag","tag")}}}}}}}}},inAttribute:function(i){return function(l,j){var m=null;var k=null;while(!l.eol()){k=l.peek();if(l.next()==i&&m!=="\\"){j.tokenize=c.smarty;break}m=k}return"string"}},inBlock:function(j,i){return function(l,k){while(!l.eol()){if(l.match(i)){k.tokenize=c.tokenizer;break}l.next()}return j}}};return{startState:function(){return{tokenize:c.tokenizer,mode:"smarty",last:null,depth:0}},token:function(k,j){var i=j.tokenize(k,j);j.last=h;return i},electricChars:""}});a.defineMIME("text/x-smarty","smarty")});