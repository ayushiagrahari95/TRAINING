define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/Spacer.html","alfresco/core/Core","dojo/dom-class","dojo/dom-style"],function(c,b,g,d,f,e,a){return c([b,g,f],{cssRequirements:[{cssFile:"./css/Spacer.css"}],templateString:d,height:null,width:null,additionalCssClasses:null,postCreate:function h(){if(this.additionalCssClasses!=null){e.add(this.domNode,this.additionalCssClasses)}if(this.height!=null){a.set(this.domNode,"height",this.height)}if(this.width!=null){a.set(this.domNode,"width",this.height)}}})});