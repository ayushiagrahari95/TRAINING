define("tinymce/ui/Movable",["tinymce/ui/DomUtils"],function(a){function b(c,k,n){var m,g,j,h,l,e,i,d,f,o;f=a.getViewPort();g=a.getPos(k);j=g.x;h=g.y;if(c._fixed){j-=f.x;h-=f.y}m=c.getEl();o=a.getSize(m);l=o.width;e=o.height;o=a.getSize(k);i=o.width;d=o.height;n=(n||"").split("");if(n[0]==="b"){h+=d}if(n[1]==="r"){j+=i}if(n[0]==="c"){h+=Math.round(d/2)}if(n[1]==="c"){j+=Math.round(i/2)}if(n[3]==="b"){h-=e}if(n[4]==="r"){j-=l}if(n[3]==="c"){h-=Math.round(e/2)}if(n[4]==="c"){j-=Math.round(l/2)}return{x:j,y:h,w:l,h:e}}return{testMoveRel:function(g,d){var c=a.getViewPort();for(var e=0;e<d.length;e++){var f=b(this,g,d[e]);if(this._fixed){if(f.x>0&&f.x+f.w<c.w&&f.y>0&&f.y+f.h<c.h){return d[e]}}else{if(f.x>c.x&&f.x+f.w<c.w+c.x&&f.y>c.y&&f.y+f.h<c.h+c.y){return d[e]}}}return d[0]},moveRel:function(e,c){if(typeof(c)!="string"){c=this.testMoveRel(e,c)}var d=b(this,e,c);return this.moveTo(d.x,d.y)},moveBy:function(e,c){var d=this,f=d.layoutRect();d.moveTo(f.x+e,f.y+c);return d},moveTo:function(c,h){var e=this;function d(k,i,j){if(k<0){return 0}if(k+j>i){k=i-j;return k<0?0:k}return k}if(e.settings.constrainToViewport){var f=a.getViewPort(window);var g=e.layoutRect();c=d(c,f.w+f.x,g.w);h=d(h,f.h+f.y,g.h)}if(e._rendered){e.layoutRect({x:c,y:h}).repaint()}else{e.settings.x=c;e.settings.y=h}e.fire("move",{x:c,y:h});return e}}});