define(["dojo/_base/declare","alfresco/renderers/InlineEditProperty","alfresco/forms/controls/DojoSelect"],function(c,b,d){return c([b],{getPrimaryFormWidget:function a(){return{name:"alfresco/forms/controls/DojoSelect",config:{name:this.postParam,optionsConfig:this.optionsConfig,_convertStringValuesToBooleans:true,additionalCssClasses:"hiddenlabel",label:this.message(this.editLabel)}}}})});