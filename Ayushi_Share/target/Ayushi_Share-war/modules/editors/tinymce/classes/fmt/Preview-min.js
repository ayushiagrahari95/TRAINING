define("tinymce/fmt/Preview",["tinymce/util/Tools"],function(a){var c=a.each;function b(i,l){var e,f,h=i.dom;var d="",g,k;k=i.settings.preview_styles;if(k===false){return""}if(!k){k="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"}function j(m){return m.replace(/%(\w+)/g,"")}if(typeof(l)=="string"){l=i.formatter.get(l);if(!l){return}l=l[0]}e=l.block||l.inline||"span";f=h.create(e);c(l.styles,function(n,m){n=j(n);if(n){h.setStyle(f,m,n)}});c(l.attributes,function(n,m){n=j(n);if(n){h.setAttrib(f,m,n)}});c(l.classes,function(m){m=j(m);if(!h.hasClass(f,m)){h.addClass(f,m)}});i.fire("PreviewFormats");h.setStyles(f,{position:"absolute",left:-65535});i.getBody().appendChild(f);g=h.getStyle(i.getBody(),"fontSize",true);g=/px$/.test(g)?parseInt(g,10):0;c(k.split(" "),function(m){var n=h.getStyle(f,m,true);if(m=="background-color"&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)){n=h.getStyle(i.getBody(),m,true);if(h.toHex(n).toLowerCase()=="#ffffff"){return}}if(m=="color"){if(h.toHex(n).toLowerCase()=="#000000"){return}}if(m=="font-size"){if(/em|%$/.test(n)){if(g===0){return}n=parseFloat(n,10)/(/%$/.test(n)?100:1);n=(n*g)+"px"}}if(m=="border"&&n){d+="padding:0 2px;"}d+=m+":"+n+";"});i.fire("AfterPreviewFormats");h.remove(f);return d}return{getCssText:b}});