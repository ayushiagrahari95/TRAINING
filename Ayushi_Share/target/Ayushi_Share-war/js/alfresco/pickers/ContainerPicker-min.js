define(["dojo/_base/declare","alfresco/pickers/Picker"],function(c,a){return c([a],{postCreate:function b(){this.widgetsForPickedItems=[{name:"alfresco/pickers/PickedItems",assignTo:"pickedItemsWidget",config:{singleItemMode:this.singleItemMode}}];this.inherited(arguments)},widgetsForRootPicker:[{name:"alfresco/menus/AlfVerticalMenuBar",config:{widgets:[{name:"alfresco/menus/AlfMenuBarItem",config:{label:"picker.recentSites.label",publishTopic:"ALF_ADD_PICKER",publishPayload:{currentPickerDepth:0,pickerLabel:"Sites",picker:[{name:"alfresco/pickers/SingleItemPicker",config:{currentPickerDepth:1,widgetsForSubPicker:[{name:"alfresco/layout/VerticalWidgets",config:{widgets:[{name:"alfresco/pickers/ContainerListPicker",config:{siteMode:true,libraryRoot:"{siteNodeRef}",nodeRef:"{siteNodeRef}",path:"/"}},{name:"alfresco/documentlibrary/AlfDocumentListPaginator",config:{compactMode:true}}]}}],requestItemsTopic:"ALF_GET_RECENT_SITES"}}]}}},{name:"alfresco/menus/AlfMenuBarItem",config:{label:"picker.favouriteSites.label",publishTopic:"ALF_ADD_PICKER",publishPayload:{currentPickerDepth:0,pickerLabel:"Sites",picker:[{name:"alfresco/pickers/SingleItemPicker",config:{currentPickerDepth:1,widgetsForSubPicker:[{name:"alfresco/layout/VerticalWidgets",config:{widgets:[{name:"alfresco/pickers/ContainerListPicker",config:{siteMode:true,libraryRoot:"{siteNodeRef}",nodeRef:"{siteNodeRef}",path:"/"}},{name:"alfresco/documentlibrary/AlfDocumentListPaginator",config:{compactMode:true}}]}}],requestItemsTopic:"ALF_GET_FAVOURITE_SITES"}}]}}},{name:"alfresco/menus/AlfMenuBarItem",config:{label:"picker.allSites.label",publishTopic:"ALF_ADD_PICKER",publishPayload:{currentPickerDepth:0,pickerLabel:"Sites",picker:[{name:"alfresco/pickers/SingleItemPicker",config:{currentPickerDepth:1,widgetsForSubPicker:[{name:"alfresco/layout/VerticalWidgets",config:{widgets:[{name:"alfresco/pickers/ContainerListPicker",config:{siteMode:true,libraryRoot:"{siteNodeRef}",nodeRef:"{siteNodeRef}",path:"/"}},{name:"alfresco/documentlibrary/AlfDocumentListPaginator",config:{compactMode:true}}]}}],requestItemsTopic:"ALF_GET_SITES"}}]}}},{name:"alfresco/menus/AlfMenuBarItem",config:{label:"picker.sharedFiles.label",publishTopic:"ALF_ADD_PICKER",publishPayload:{currentPickerDepth:0,pickerLabel:"Path",picker:[{name:"alfresco/layout/VerticalWidgets",config:{widgets:[{name:"alfresco/pickers/ContainerListPicker",config:{nodeRef:"alfresco://company/shared",filter:{path:"/"}}},{name:"alfresco/documentlibrary/AlfDocumentListPaginator",config:{compactMode:true}}]}}]}}},{name:"alfresco/menus/AlfMenuBarItem",config:{label:"picker.repository.label",publishTopic:"ALF_ADD_PICKER",publishPayload:{currentPickerDepth:0,pickerLabel:"Path",picker:[{name:"alfresco/layout/VerticalWidgets",config:{widgets:[{name:"alfresco/pickers/ContainerListPicker",config:{nodeRef:"alfresco://company/home",filter:{path:"/"}}},{name:"alfresco/documentlibrary/AlfDocumentListPaginator",config:{compactMode:true}}]}}]}}},{name:"alfresco/menus/AlfMenuBarItem",config:{label:"picker.myFiles.label",publishTopic:"ALF_ADD_PICKER",publishPayload:{currentPickerDepth:0,pickerLabel:"Path",picker:[{name:"alfresco/layout/VerticalWidgets",config:{widgets:[{name:"alfresco/pickers/ContainerListPicker",config:{nodeRef:"alfresco://user/home",filter:{path:"/"}}},{name:"alfresco/documentlibrary/AlfDocumentListPaginator",config:{compactMode:true}}]}}]}}}]}}],widgetsForPickedItems:[]})});