define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_OnDijitClickMixin","alfresco/renderers/_PublishPayloadMixin","dojo/text!./templates/Reorder.html","alfresco/core/Core","dojo/on","dojo/_base/lang","dojo/dom-class"],function(h,k,n,d,g,m,c,j,b,l){return h([k,n,d,c,g],{i18nRequirements:[{i18nFile:"./i18n/Reorder.properties"}],cssRequirements:[{cssFile:"./css/Reorder.css"}],templateString:m,upArrowImg:"move-up.png",downArrowImg:"move-down.png",upPublishTopic:"ALF_REORDER_UP",downPublishTopic:"ALF_REORDER_DOWN",upAltText:"reorder.moveup.altText",downAltText:"reorder.movedown.altText",propertyToRender:"displayName",postMixInProperties:function i(){if(this.upArrowImageSrc==null||this.upArrowImageSrc==""){this.upArrowImageSrc=require.toUrl("alfresco/renderers")+"/css/images/"+this.upArrowImg}if(this.downArrowImageSrc==null||this.downArrowImageSrc==""){this.downArrowImageSrc=require.toUrl("alfresco/renderers")+"/css/images/"+this.downArrowImg}this.upAltText=this.message(this.upAltText,{0:this.currentItem[this.propertyToRender]});this.downAltText=this.message(this.downAltText,{0:this.currentItem[this.propertyToRender]})},postCreate:function a(){if(this.currentItem.index===0){l.add(this.upNode,"invisible")}if(this.currentItem.isLastItem===true){l.add(this.downNode,"invisible")}},onUpClick:function f(o){this.alfLog("log","Moving item up",this);var q=this.generatePayload(this.moveUpPublishPayload,this.currentItem,null,this.moveUpPublishPayloadType,this.moveUpPublishPayloadItemMixin,this.moveUpPublishPayloadModifiers);var p=this.message("reorder.moveup.success",{0:this.currentItem[this.propertyToRender]});q.successMessage=p;this.alfPublish(this.moveUpPublishTopic,q)},onDownClick:function e(o){this.alfLog("log","Moving item down",this);var q=this.generatePayload(this.moveDownPublishPayload,this.currentItem,null,this.moveDownPublishPayloadType,this.moveDownPublishPayloadItemMixin,this.moveDownPublishPayloadModifiers);var p=this.message("reorder.movedown.success",{0:this.currentItem[this.propertyToRender]});q.successMessage=p;this.alfPublish(this.moveDownPublishTopic,q)}})});