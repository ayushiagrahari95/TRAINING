define(["dojo/_base/declare","alfresco/documentlibrary/views/AlfDocumentListView","service/constants/Default"],function(c,b,d){return c([b],{getViewName:function a(){return"table"},viewSelectionConfig:{label:"doclist.view.table.label",iconClass:"alf-tableview-icon"},widgetsForHeader:[{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"",sortable:false}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"",sortable:false}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"label.name",sortable:true,sortValue:"cm:name"}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"label.title",sortable:true,sortValue:"cm:title"}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"label.description",sortable:true,sortValue:"cm:description"}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"label.creator",sortable:true,sortValue:"cm:creator"}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"label.created",sortable:true,sortValue:"cm:created"}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"label.modifier",sortable:true,sortValue:"cm:modifier"}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"label.modified",sortable:true,sortValue:"cm:modified"}},{name:"alfresco/documentlibrary/views/layouts/HeaderCell",config:{label:"",sortable:false}}],widgets:[{name:"alfresco/documentlibrary/views/layouts/Row",config:{widgets:[{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/Selector"}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/Indicators"}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/InlineEditPropertyLink",config:{propertyToRender:"node.properties.cm:name",postParam:"prop_cm_name",renderAsLink:true}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/InlineEditProperty",config:{propertyToRender:"node.properties.cm:title",postParam:"prop_cm_title"}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/InlineEditProperty",config:{propertyToRender:"node.properties.cm:description",postParam:"prop_cm_description"}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/PropertyLink",config:{propertyToRender:"node.properties.cm:creator",postParam:"prop_cm_creator",publishTopic:"ALF_NAVIGATE_TO_PAGE",publishPayloadType:"PROCESS",publishPayloadModifiers:["processCurrentItemTokens"],useCurrentItemAsPayload:false,publishPayload:{url:"user/{node.properties.cm:creator.userName}/profile",type:"SHARE_PAGE_RELATIVE",target:"CURRENT"}}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/Property",config:{propertyToRender:"node.properties.cm:created",postParam:"prop_cm_created"}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/PropertyLink",config:{propertyToRender:"node.properties.cm:modifier",postParam:"prop_cm_modifier",publishTopic:"ALF_NAVIGATE_TO_PAGE",publishPayloadType:"PROCESS",publishPayloadModifiers:["processCurrentItemTokens"],useCurrentItemAsPayload:false,publishPayload:{url:"user/{node.properties.cm:creator.userName}/profile",type:"SHARE_PAGE_RELATIVE",target:"CURRENT"}}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/Property",config:{propertyToRender:"node.properties.cm:modified",postParam:"prop_cm_modified"}}]}},{name:"alfresco/documentlibrary/views/layouts/Cell",config:{additionalCssClasses:"mediumpad",widgets:[{name:"alfresco/renderers/Actions"}]}}]}}]})});