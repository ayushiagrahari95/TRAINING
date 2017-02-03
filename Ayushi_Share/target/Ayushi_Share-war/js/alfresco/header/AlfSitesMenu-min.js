define(["dojo/_base/declare","alfresco/header/AlfMenuBarPopup","alfresco/core/CoreXhr","dojo/_base/lang","dojo/_base/array","dojo/aspect","dijit/registry","alfresco/menus/AlfMenuGroup","alfresco/header/AlfMenuItem","alfresco/header/AlfCascadingMenu","dojo/dom-style","dijit/popup","service/constants/Default"],function(D,f,w,H,j,o,k,g,B,F,q,b,n){return D([f,w],{i18nRequirements:[{i18nFile:"./i18n/AlfSitesMenu.properties"}],currentUser:null,currentSite:null,constructor:function e(){this.alfSubscribe("ALF_FAVOURITE_SITE_ADDED",H.hitch(this,"favouriteAdded"));this.alfSubscribe("ALF_FAVOURITE_SITE_REMOVED",H.hitch(this,"favouriteRemoved"));this.alfSubscribe("ALF_SITE_DETAILS_UPDATED",H.hitch(this,"siteDetailsUpdated"));this.alfSubscribe("ALF_SITE_JOINED",H.hitch(this,"siteJoined"));this.alfSubscribe("ALF_SITE_LEFT",H.hitch(this,"siteLeft"))},showRecentSites:true,showUsefulGroup:true,showSiteFinder:true,showCreateSite:true,showMySites:true,showFavourites:true,widgets:[{name:"alfresco/header/AlfMenuItem",config:{iconClass:"alf-loading-icon",label:"loading.label"}}],postCreate:function A(){if(!this.label){this.set("label",this.message("menu.label"))}this.inherited(arguments);if(this.popup){this.popup.onOpen=dojo.hitch(this,"loadMenu")}else{this.alfLog("log","No Sites Menu popup - something has gone wrong!")}},_menuUrl:null,_menuLoaded:false,loadMenu:function r(){if(this._menuLoaded){this.alfLog("log","Menu already loaded")}else{this.alfLog("log","Loading menu");var I=this._menuUrl;if(I==null){I=n.URL_SERVICECONTEXT+"header/sites-menu/recent";if(this.currentSite){I=I+"/site/"+this.currentSite}}this.serviceXhr({url:I,method:"GET",successCallback:this._menuDataLoaded,failureCallback:this._menuDataLoadFailed,callbackScope:this})}},_menuDataLoaded:function i(J,I){this.alfLog("log","Menu data loaded successfully",J);this._menuLoaded=true;var K=(this.popup&&this.popup.getChildren().length>0&&this.popup.getChildren()[0].focused);var L=this;j.forEach(this.popup.getChildren(),function(N,M){L.popup.removeChild(N)});if(J.widgetsRecent&&J.widgetsRecent.length>0){this.addRecentGroup(J.widgetsRecent)}this.addUsefulGroup(J.showAddFavourite,J.showRemoveFavourite);if(K){if(this.recentGroup){this.recentGroup.focusFirstChild()}else{this.usefulGroup.focusFirstChild()}}this.favoritesCascade.popup.onOpen=dojo.hitch(this,"loadFavourites")},addRecentGroup:function p(I){if(this.popup&&this.showRecentSites){this.recentGroup=new g({label:this.recentGroupLabel});j.forEach(I,dojo.hitch(this,"_addMenuItem",this.recentGroup));this.popup.addChild(this.recentGroup)}},_menuDataLoadFailed:function t(J,I){this.alfLog("error","Could not load sites menu items",J);var K=this;j.forEach(this.popup.getChildren(),function(M,L){K.popup.removeChild(M)});this.addMenuFailMessageItem()},_menuMessageItem:null,addMenuFailMessageItem:function m(){this._menuMessageItem=new B({label:"menu.load.error"});this.popup.addChild(this._menuMessageItem)},_favouritesUrl:null,_favouritesLoaded:false,loadFavourites:function u(){if(this._favouritesLoaded){this.alfLog("log","Favourites already loaded")}else{this.alfLog("log","Loading favourites");var I=this._favouritesUrl;if(I==null){I=n.URL_SERVICECONTEXT+"header/sites-menu/favourites"}this.serviceXhr({url:I,method:"GET",successCallback:this._favouritesDataLoaded,failureCallback:this._favouritesDataLoadFailed,callbackScope:this})}},_favouritesDataLoaded:function y(J,I){this.alfLog("log","Menu data loaded successfully",J);this._favouritesLoaded=true;var K=(this.favouritesList&&this.favouritesList.getChildren().length>0&&this.favouritesList.getChildren()[0].focused);var L=this;j.forEach(this.favouritesList.getChildren(),function(N,M){L.favouritesList.removeChild(N)});if(J.widgetsFavourites){if(J.widgetsFavourites.length>0){J.widgetsFavourites.sort(this.sortFavourites);j.forEach(J.widgetsFavourites,dojo.hitch(this,"_addMenuItem",this.favouritesList))}else{this.addNoFavouritesMessageItem()}}if(K){this.favouritesList.focusFirstChild()}},sortFavourites:function a(J,I){if(J.config&&J.config.label&&I.config&&I.config.label){return(J.config.label>I.config.label)?1:(J.config.label<I.config.label)?-1:0}else{if(J.config&&J.config.label){return 1}else{if(I.config&&I.config.label){return -1}else{return 0}}}},_favouritesDataLoadFailed:function h(J,I){this.alfLog("error","Could not load favourites menu items",J);var K=this;j.forEach(this.favouritesList.getChildren(),function(M,L){K.favouritesList.removeChild(M)});this.addFavouritesFailMessageItem()},_favouritesMessageItem:null,addNoFavouritesMessageItem:function c(){this._favouritesMessageItem=new B({label:"no.favourites.label"});this.favouritesList.addChild(this._favouritesMessageItem)},addFavouritesFailMessageItem:function s(){this._favouritesMessageItem=new B({label:"favourites.load.error"});this.favouritesList.addChild(this._favouritesMessageItem)},_addMenuItem:function(L,K,I){this.alfLog("log","Adding menu item",K,I,L);var J=new B(K.config);L.addChild(J)},addUsefulGroup:function G(J,I){this.alfLog("log","Creating 'Useful' group");if(this.popup&&this.showUsefulGroup){this.usefulGroup=new g({label:this.usefulGroupLabel});if(this.showMySites){this.mySites=new B({id:this.id+"_MY_SITES",label:this.mySitesLabel,iconClass:this.mySitesIconClass,targetUrl:"user/"+encodeURIComponent(n.USERNAME)+"/user-sites"});this.usefulGroup.addChild(this.mySites)}if(this.showSiteFinder){this.siteFinder=new B({id:this.id+"_SITE_FINDER",label:this.siteFinderLabel,iconClass:this.siteFinderIconClass,targetUrl:"site-finder"});this.usefulGroup.addChild(this.siteFinder)}if(this.showCreateSite){this.createSite=new B({id:this.id+"_CREATE_SITE",label:this.createSiteLabel,iconClass:this.createSiteIconClass,publishTopic:"ALF_CREATE_SITE"});this.usefulGroup.addChild(this.createSite)}if(this.showFavourites){this.favouritesList=new g({widgets:[{name:"alfresco/header/AlfMenuItem",config:{iconClass:"alf-loading-icon",label:this.message("loading.label")}}]});this.favoritesCascade=new F({id:this.id+"_FAVOURITES",label:this.favouriteGroupLabel,iconClass:this.favouriteGroupIconClass});this.favoritesCascade.popup.addChild(this.favouritesList);this.usefulGroup.addChild(this.favoritesCascade);if(this.currentSite&&this.currentSite!==""&&this.currentUser&&this.currentUser!==""){this.addFavourite=new B({id:this.id+"_ADD_FAVOURITE",label:this.addFavouriteLabel,iconClass:this.addFavouriteIconClass,publishTopic:"ALF_ADD_FAVOURITE_SITE",publishPayload:{site:this.currentSite,user:this.currentUser}});this.removeFavourite=new B({id:this.id+"_REMOVE_FAVOURITE",label:this.removeFavouriteLabel,iconClass:this.removeFavouriteIconClass,publishTopic:"ALF_REMOVE_FAVOURITE_SITE",publishPayload:{site:this.currentSite,user:this.currentUser}});if(J){this.usefulGroup.addChild(this.addFavourite)}if(I){this.usefulGroup.addChild(this.removeFavourite)}}}this.popup.addChild(this.usefulGroup)}},addFavouriteMenuItem:function l(J){this.alfLog("log","Adding favourite menu item",J);if(J&&J.site){if(J.title){this.alfLog("log","Title provided");this._addFavouriteMenuItem(J.site,J.title)}else{this.alfLog("log","No title provided - retrieving from repository...");var K=this,I=this.generateUuid();this.alfSubscribe(I,function(L){if(L&&L.title&&L.shortName){K.alfLog("log","Retrieved site details",L);K._addFavouriteMenuItem(L.shortName,L.title)}else{K.alfLog("error","Site data not returned in the expected structure",L)}});this.alfPublish("ALF_GET_SITE_DETAILS",{site:J.site,responseTopic:I})}}else{this.alfLog("error","A request was made to add a favourite site, but there is no 'site' attribute has been defined.",J)}},_addFavouriteMenuItem:function z(I,K){this.alfLog("log","Adding favourite",I,K);if(this._favouritesMessageItem){this.favouritesList.removeChild(this._favouritesMessageItem)}var L=new B({label:K,iconClass:this.favouriteGroupIconClass,targetUrl:"site/"+I+"/dashboard",siteShortName:I});if(this.favouritesList){var N=this.favouritesList.getChildren(),M=null;for(var J=0;J<N.length&&M==null;J++){if(L.label<N[J].label){M=J}}this.alfLog("log","Adding favourite at index: ",M);this.favouritesList.addChild(L,M)}},favouriteAdded:function v(I){this.alfLog("log","Favourite Site Added",I);if(I.site){if(I.site==this.currentSite){this.usefulGroup.removeChild(this.addFavourite);this.usefulGroup.addChild(this.removeFavourite)}this.addFavouriteMenuItem({site:I.site,title:I.title})}else{this.alfLog("warn","A favourite site has been added, but the site name has NOT been provided. The Sites Menu will not be modified")}},favouriteRemoved:function d(I){this.alfLog("log","Favourite Site Removed",I);if(I&&I.site==this.currentSite){this.usefulGroup.removeChild(this.removeFavourite);this.usefulGroup.addChild(this.addFavourite)}if(this.favouritesList){var J=this;j.forEach(this.favouritesList.getChildren(),function(L,K){if(L.siteShortName==I.site){J.favouritesList.removeChild(L)}})}if(this.favouritesList&&this.favouritesList.getChildren().length===0){this.addNoFavouritesMessageItem()}},siteJoined:function C(I){},siteLeft:function x(I){},siteDetailsUpdated:function E(I){this.alfLog("log","Not yet implemented!")},recentGroupLabel:"recent.sites.label",favouriteGroupLabel:"favourite.sites.label",usefulGroupLabel:"useful.sites.label",favouriteGroupIconClass:"alf-favourite-site-icon",siteFinderLabel:"site-finder.label",siteFinderIconClass:"alf-site-finder-icon",createSiteLabel:"create-site.label",createSiteIconClass:"alf-create-site-icon",mySitesLabel:"my-sites.label",mySitesIconClass:"alf-my-sites-icon",addFavouriteLabel:"add-favourite-site.label",addFavouriteIconClass:"alf-add-favourite-site-icon",removeFavouriteLabel:"remove-favourite-site.label",removeFavouriteIconClass:"alf-remove-favourite-site-icon"})});