define(["dojo/_base/declare","alfresco/documentlibrary/AlfDocumentList","alfresco/core/PathUtils","dojo/_base/array","dojo/_base/lang","dojo/dom-construct","dojo/dom-class"],function(e,f,g,h,a,d,i){return e([f],{dataRequestTopic:null,quadds:null,loadData:function c(){this.clearViews();this.showLoadingMessage();var j={responseTopic:"ALF_RETRIEVE_DOCUMENTS_REQUEST",quadds:this.quadds};this.alfPublish("ALF_GET_QUADDS_ITEMS",j)},onDataLoadSuccess:function b(k){this.alfLog("log","Data Loaded",k,this);this._currentData=k;var j=this.viewMap[this._currentlySelectedView];if(j!=null){this.showRenderingMessage();j.setData(this._currentData);j.renderView(false);this.showView(j);this.alfPublish("ALF_RESIZE_SIDEBAR",{})}}})});