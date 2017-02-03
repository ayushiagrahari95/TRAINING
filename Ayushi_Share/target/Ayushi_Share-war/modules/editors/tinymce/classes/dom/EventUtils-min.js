define("tinymce/dom/EventUtils",[],function(){var g="mce-data-";var c=/^(?:mouse|contextmenu)|click/;var b={keyLocation:1,layerX:1,layerY:1,returnValue:1};function d(k,j,l,i){if(k.addEventListener){k.addEventListener(j,l,i||false)}else{if(k.attachEvent){k.attachEvent("on"+j,l)}}}function f(k,j,l,i){if(k.removeEventListener){k.removeEventListener(j,l,i||false)}else{if(k.detachEvent){k.detachEvent("on"+j,l)}}}function a(k,o){var j,i=o||{},m;function l(){return false}function n(){return true}for(j in k){if(!b[j]){i[j]=k[j]}}if(!i.target){i.target=i.srcElement||document}if(k&&c.test(k.type)&&k.pageX===m&&k.clientX!==m){var r=i.target.ownerDocument||document;var q=r.documentElement;var p=r.body;i.pageX=k.clientX+(q&&q.scrollLeft||p&&p.scrollLeft||0)-(q&&q.clientLeft||p&&p.clientLeft||0);i.pageY=k.clientY+(q&&q.scrollTop||p&&p.scrollTop||0)-(q&&q.clientTop||p&&p.clientTop||0)}i.preventDefault=function(){i.isDefaultPrevented=n;if(k){if(k.preventDefault){k.preventDefault()}else{k.returnValue=false}}};i.stopPropagation=function(){i.isPropagationStopped=n;if(k){if(k.stopPropagation){k.stopPropagation()}else{k.cancelBubble=true}}};i.stopImmediatePropagation=function(){i.isImmediatePropagationStopped=n;i.stopPropagation()};if(!i.isDefaultPrevented){i.isDefaultPrevented=l;i.isPropagationStopped=l;i.isImmediatePropagationStopped=l}return i}function e(n,p,k){var m=n.document,l={type:"ready"};if(k.domLoaded){p(l);return}function j(){if(!k.domLoaded){k.domLoaded=true;p(l)}}function i(){if(m.readyState==="complete"||(m.readyState==="interactive"&&m.body)){f(m,"readystatechange",i);j()}}function o(){try{m.documentElement.doScroll("left")}catch(q){setTimeout(o,0);return}j()}if(m.addEventListener){if(m.readyState==="complete"){j()}else{d(n,"DOMContentLoaded",j)}}else{d(m,"readystatechange",i);if(m.documentElement.doScroll&&n.self===n.top){o()}}d(n,"load",j)}function h(){var i=this,k={},m,p,j,l,o;p=g+(+new Date()).toString(32);l="onmouseenter" in document.documentElement;j="onfocusin" in document.documentElement;o={mouseenter:"mouseover",mouseleave:"mouseout"};m=1;i.domLoaded=false;i.events=k;function n(t,w){var s,u,r,v,q=k[w];s=q&&q[t.type];if(s){for(u=0,r=s.length;u<r;u++){v=s[u];if(v&&v.func.call(v.scope,t)===false){t.preventDefault()}if(t.isImmediatePropagationStopped()){return}}}}i.bind=function(v,y,B,C){var r,s,t,q,z,x,A,u=window;function w(D){n(a(D||u.event),r)}if(!v||v.nodeType===3||v.nodeType===8){return}if(!v[p]){r=m++;v[p]=r;k[r]={}}else{r=v[p]}C=C||v;y=y.split(" ");t=y.length;while(t--){q=y[t];x=w;z=A=false;if(q==="DOMContentLoaded"){q="ready"}if(i.domLoaded&&q==="ready"&&v.readyState=="complete"){B.call(C,a({type:q}));continue}if(!l){z=o[q];if(z){x=function(D){var F,E;F=D.currentTarget;E=D.relatedTarget;if(E&&F.contains){E=F.contains(E)}else{while(E&&E!==F){E=E.parentNode}}if(!E){D=a(D||u.event);D.type=D.type==="mouseout"?"mouseleave":"mouseenter";D.target=F;n(D,r)}}}}if(!j&&(q==="focusin"||q==="focusout")){A=true;z=q==="focusin"?"focus":"blur";x=function(D){D=a(D||u.event);D.type=D.type==="focus"?"focusin":"focusout";n(D,r)}}s=k[r][q];if(!s){k[r][q]=s=[{func:B,scope:C}];s.fakeName=z;s.capture=A;s.nativeHandler=x;if(q==="ready"){e(v,x,i)}else{d(v,z||q,x,A)}}else{if(q==="ready"&&i.domLoaded){B({type:q})}else{s.push({func:B,scope:C})}}}v=s=0;return B};i.unbind=function(v,y,B){var r,t,u,C,q,s;if(!v||v.nodeType===3||v.nodeType===8){return i}r=v[p];if(r){s=k[r];if(y){y=y.split(" ");u=y.length;while(u--){q=y[u];t=s[q];if(t){if(B){C=t.length;while(C--){if(t[C].func===B){var x=t.nativeHandler;var z=t.fakeName,A=t.capture;t=t.slice(0,C).concat(t.slice(C+1));t.nativeHandler=x;t.fakeName=z;t.capture=A;s[q]=t}}}if(!B||t.length===0){delete s[q];f(v,t.fakeName||q,t.nativeHandler,t.capture)}}}}else{for(q in s){t=s[q];f(v,t.fakeName||q,t.nativeHandler,t.capture)}s={}}for(q in s){return i}delete k[r];try{delete v[p]}catch(w){v[p]=null}}return i};i.fire=function(s,r,q){var t;if(!s||s.nodeType===3||s.nodeType===8){return i}q=a(null,q);q.type=r;q.target=s;do{t=s[p];if(t){n(q,t)}s=s.parentNode||s.ownerDocument||s.defaultView||s.parentWindow}while(s&&!q.isPropagationStopped());return i};i.clean=function(t){var r,q,s=i.unbind;if(!t||t.nodeType===3||t.nodeType===8){return i}if(t[p]){s(t)}if(!t.getElementsByTagName){t=t.document}if(t&&t.getElementsByTagName){s(t);q=t.getElementsByTagName("*");r=q.length;while(r--){t=q[r];if(t[p]){s(t)}}}return i};i.destroy=function(){k={}};i.cancel=function(q){if(q){q.preventDefault();q.stopImmediatePropagation()}return false}}h.Event=new h();h.Event.bind(window,"ready",function(){});return h});