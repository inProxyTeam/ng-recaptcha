(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=function(){function n(){}return n.prototype.resolved=function(n){console.log("Resolved captcha with response: "+n)},n}();l.LanguageDemoComponent=a},16:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});e(15);var a=e(0);e(7);e(40),l.PAGE_SETTINGS=new a.InjectionToken("PAGE_SETTINGS"),l.NAV_LINKS=new a.InjectionToken("NAV_LINKS");var t=function(){function n(n,l,e,a,t){this.page=n,this.navLinks=l,this.titleService=e,this.site={title:"ng-recaptcha",description:"Angular component for Google reCAPTCHA",baseurl:"/ng-recaptcha"},this.sidebarOpened=!1,this.mobileQuery=a.matchMedia("(max-width: 600px)"),this.mobileQueryListener=function(){return t.detectChanges()},this.mobileQuery.addListener(this.mobileQueryListener)}return n.prototype.ngOnInit=function(){this.titleService.setTitle(this.page.title+" | "+this.site.title)},n.prototype.ngOnDestroy=function(){this.mobileQuery.removeListener(this.mobileQueryListener)},n}();l.DemoWrapperComponent=t},161:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e(0),t=e(7),o=e(162);a.enableProdMode(),t.platformBrowser().bootstrapModuleFactory(o.DemoModuleNgFactory)},162:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e(0),t=e(163),o=e(110),u=e(168),r=e(2),i=e(7),s=e(20),d=e(17),p=e(22),c=e(6),m=e(43),_=e(12),f=e(4),g=e(5),M=e(29),v=e(35),h=e(38),b=e(14),T=e(31),A=e(32),w=e(18),R=e(33),y=e(51),C=e(30),E=e(15),D=e(41),L=e(16),N=a.ɵcmf(t.DemoModule,[o.LanguageDemoComponent],function(n){return a.ɵmod([a.ɵmpd(512,a.ComponentFactoryResolver,a.ɵCodegenComponentFactoryResolver,[[8,[u.LanguageDemoComponentNgFactory]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a.ɵmpd(5120,a.LOCALE_ID,a.ɵangular_packages_core_core_q,[[3,a.LOCALE_ID]]),a.ɵmpd(4608,r.NgLocalization,r.NgLocaleLocalization,[a.LOCALE_ID,[2,r.ɵangular_packages_common_common_a]]),a.ɵmpd(5120,a.ɵangular_packages_core_core_bb,a.ɵangular_packages_core_core_s,[a.NgZone]),a.ɵmpd(4608,a.Compiler,a.Compiler,[]),a.ɵmpd(5120,a.APP_ID,a.ɵangular_packages_core_core_f,[]),a.ɵmpd(5120,a.IterableDiffers,a.ɵangular_packages_core_core_o,[]),a.ɵmpd(5120,a.KeyValueDiffers,a.ɵangular_packages_core_core_p,[]),a.ɵmpd(4608,i.DomSanitizer,i.ɵDomSanitizerImpl,[r.DOCUMENT]),a.ɵmpd(6144,a.Sanitizer,null,[i.DomSanitizer]),a.ɵmpd(4608,i.HAMMER_GESTURE_CONFIG,i.HammerGestureConfig,[]),a.ɵmpd(5120,i.EVENT_MANAGER_PLUGINS,function(n,l,e,a,t,o,u,r){return[new i.ɵDomEventsPlugin(n,l,e),new i.ɵKeyEventsPlugin(a),new i.ɵHammerGesturesPlugin(t,o,u,r)]},[r.DOCUMENT,a.NgZone,a.PLATFORM_ID,r.DOCUMENT,r.DOCUMENT,i.HAMMER_GESTURE_CONFIG,a.ɵConsole,[2,i.HAMMER_LOADER]]),a.ɵmpd(4608,i.EventManager,i.EventManager,[i.EVENT_MANAGER_PLUGINS,a.NgZone]),a.ɵmpd(135680,i.ɵDomSharedStylesHost,i.ɵDomSharedStylesHost,[r.DOCUMENT]),a.ɵmpd(4608,i.ɵDomRendererFactory2,i.ɵDomRendererFactory2,[i.EventManager,i.ɵDomSharedStylesHost,a.APP_ID]),a.ɵmpd(5120,s.AnimationDriver,d.ɵangular_packages_platform_browser_animations_animations_a,[]),a.ɵmpd(5120,s.ɵAnimationStyleNormalizer,d.ɵangular_packages_platform_browser_animations_animations_b,[]),a.ɵmpd(4608,s.ɵAnimationEngine,d.ɵInjectableAnimationEngine,[r.DOCUMENT,s.AnimationDriver,s.ɵAnimationStyleNormalizer]),a.ɵmpd(5120,a.RendererFactory2,d.ɵangular_packages_platform_browser_animations_animations_c,[i.ɵDomRendererFactory2,s.ɵAnimationEngine,a.NgZone]),a.ɵmpd(6144,i.ɵSharedStylesHost,null,[i.ɵDomSharedStylesHost]),a.ɵmpd(4608,a.Testability,a.Testability,[a.NgZone]),a.ɵmpd(4608,p.RecaptchaLoaderService,p.RecaptchaLoaderService,[a.PLATFORM_ID,[2,p.RECAPTCHA_LANGUAGE],[2,p.RECAPTCHA_BASE_URL],[2,p.RECAPTCHA_NONCE]]),a.ɵmpd(4608,c.AnimationBuilder,d.ɵBrowserAnimationBuilder,[a.RendererFactory2,r.DOCUMENT]),a.ɵmpd(4608,m.MutationObserverFactory,m.MutationObserverFactory,[]),a.ɵmpd(1073742336,r.CommonModule,r.CommonModule,[]),a.ɵmpd(1024,a.ErrorHandler,i.ɵangular_packages_platform_browser_platform_browser_a,[]),a.ɵmpd(1024,a.APP_INITIALIZER,function(n){return[i.ɵangular_packages_platform_browser_platform_browser_j(n)]},[[2,a.NgProbeToken]]),a.ɵmpd(512,a.ApplicationInitStatus,a.ApplicationInitStatus,[[2,a.APP_INITIALIZER]]),a.ɵmpd(131584,a.ApplicationRef,a.ApplicationRef,[a.NgZone,a.ɵConsole,a.Injector,a.ErrorHandler,a.ComponentFactoryResolver,a.ApplicationInitStatus]),a.ɵmpd(1073742336,a.ApplicationModule,a.ApplicationModule,[a.ApplicationRef]),a.ɵmpd(1073742336,i.BrowserModule,i.BrowserModule,[[3,i.BrowserModule]]),a.ɵmpd(1073742336,p.ɵa,p.ɵa,[]),a.ɵmpd(1073742336,p.RecaptchaModule,p.RecaptchaModule,[]),a.ɵmpd(1073742336,d.BrowserAnimationsModule,d.BrowserAnimationsModule,[]),a.ɵmpd(1073742336,_.BidiModule,_.BidiModule,[]),a.ɵmpd(1073742336,f.MatCommonModule,f.MatCommonModule,[[2,f.MATERIAL_SANITY_CHECKS],[2,i.HAMMER_LOADER]]),a.ɵmpd(1073742336,g.PlatformModule,g.PlatformModule,[]),a.ɵmpd(1073742336,f.MatRippleModule,f.MatRippleModule,[]),a.ɵmpd(1073742336,M.MatButtonModule,M.MatButtonModule,[]),a.ɵmpd(1073742336,v.MatIconModule,v.MatIconModule,[]),a.ɵmpd(1073742336,h.PortalModule,h.PortalModule,[]),a.ɵmpd(1073742336,m.ObserversModule,m.ObserversModule,[]),a.ɵmpd(1073742336,b.A11yModule,b.A11yModule,[]),a.ɵmpd(1073742336,T.MatTabsModule,T.MatTabsModule,[]),a.ɵmpd(1073742336,A.MatToolbarModule,A.MatToolbarModule,[]),a.ɵmpd(1073742336,w.ScrollingModule,w.ScrollingModule,[]),a.ɵmpd(1073742336,R.MatSidenavModule,R.MatSidenavModule,[]),a.ɵmpd(1073742336,f.MatLineModule,f.MatLineModule,[]),a.ɵmpd(1073742336,f.MatPseudoCheckboxModule,f.MatPseudoCheckboxModule,[]),a.ɵmpd(1073742336,y.MatDividerModule,y.MatDividerModule,[]),a.ɵmpd(1073742336,C.MatListModule,C.MatListModule,[]),a.ɵmpd(1073742336,E.LayoutModule,E.LayoutModule,[]),a.ɵmpd(1073742336,D.DemoWrapperModule,D.DemoWrapperModule,[]),a.ɵmpd(1073742336,t.DemoModule,t.DemoModule,[]),a.ɵmpd(256,a.ɵAPP_ROOT,!0,[]),a.ɵmpd(256,p.RECAPTCHA_LANGUAGE,"fr",[]),a.ɵmpd(256,d.ANIMATION_MODULE_TYPE,"BrowserAnimations",[]),a.ɵmpd(256,L.NAV_LINKS,D.ɵ0,[]),a.ɵmpd(256,L.PAGE_SETTINGS,t.ɵ0,[])])});l.DemoModuleNgFactory=N},163:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e(164).settings;l.ɵ0=a;var t=function(){return function(){}}();l.DemoModule=t},164:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.settings={feature:"language",title:"Language Example",content:{component:e(165),html:e(166),module:e(167)}}},165:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'recaptcha-demo\'</span>,\n  templateUrl: <span class="hljs-string">\'./language-demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> LanguageDemoComponent {\n  <span class="hljs-keyword">public</span> resolved(captchaResponse: <span class="hljs-built_in">string</span>) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Resolved captcha with response: <span class="hljs-subst">${captchaResponse}</span>`</span>);\n  }\n}\n'},166:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">recaptcha-demo-wrapper</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">re-captcha</span>\n    (<span class="hljs-attr">resolved</span>)=<span class="hljs-string">"resolved($event)"</span>\n    <span class="hljs-attr">siteKey</span>=<span class="hljs-string">"6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU"</span>\n  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">re-captcha</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">recaptcha-demo-wrapper</span>&gt;</span>\n'},167:function(n,l){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { BrowserModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/platform-browser\'</span>;\n\n<span class="hljs-keyword">import</span> {\n  RECAPTCHA_LANGUAGE,\n  RecaptchaLoaderService,\n  RecaptchaModule,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">\'ng-recaptcha\'</span>;\n\n<span class="hljs-keyword">import</span> { PAGE_SETTINGS } <span class="hljs-keyword">from</span> <span class="hljs-string">\'../../demo-wrapper/demo-wrapper.component\'</span>;\n<span class="hljs-keyword">import</span> { DemoWrapperModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'../../demo-wrapper/demo-wrapper.module\'</span>;\n<span class="hljs-keyword">import</span> { LanguageDemoComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./language-demo.component\'</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./language-demo.data\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  bootstrap: [LanguageDemoComponent],\n  declarations: [LanguageDemoComponent],\n  imports: [\n    BrowserModule,\n    RecaptchaModule,\n    DemoWrapperModule,\n  ],\n  providers: [\n    {\n      provide: RECAPTCHA_LANGUAGE,\n      useValue: <span class="hljs-string">\'fr\'</span>,\n    },\n    { provide: PAGE_SETTINGS, useValue: settings },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule { }\n'},168:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e(0),t=e(39),o=e(16),u=e(7),r=e(15),i=e(72),s=e(22),d=e(110),p=a.ɵcrt({encapsulation:2,styles:[],data:{}});function c(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,3,"recaptcha-demo-wrapper",[],null,null,null,t.View_DemoWrapperComponent_0,t.RenderType_DemoWrapperComponent)),a.ɵdid(1,245760,null,0,o.DemoWrapperComponent,[o.PAGE_SETTINGS,o.NAV_LINKS,u.Title,r.MediaMatcher,a.ChangeDetectorRef],null,null),(n()(),a.ɵeld(2,0,null,0,1,"re-captcha",[["siteKey","6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU"]],[[1,"id",0]],[[null,"resolved"]],function(n,l,e){var a=!0,t=n.component;"resolved"===l&&(a=!1!==t.resolved(e)&&a);return a},i.View_RecaptchaComponent_0,i.RenderType_RecaptchaComponent)),a.ɵdid(3,4374528,null,0,s.RecaptchaComponent,[a.ElementRef,s.RecaptchaLoaderService,a.NgZone,[2,s.RECAPTCHA_SETTINGS]],{siteKey:[0,"siteKey"]},{resolved:"resolved"})],function(n,l){n(l,1,0);n(l,3,0,"6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU")},function(n,l){n(l,2,0,a.ɵnov(l,3).id)})}function m(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,1,"recaptcha-demo",[],null,null,null,c,p)),a.ɵdid(1,49152,null,0,d.LanguageDemoComponent,[],null,null)],null,null)}l.RenderType_LanguageDemoComponent=p,l.View_LanguageDemoComponent_0=c,l.View_LanguageDemoComponent_Host_0=m;var _=a.ɵccf("recaptcha-demo",d.LanguageDemoComponent,m,{},{},[]);l.LanguageDemoComponentNgFactory=_},39:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e(0),t=e(61),o=e(29),u=e(14),r=e(17),i=e(62),s=e(30),d=e(63),p=e(35),c=e(64),m=e(31),_=e(65),f=e(32),g=e(5),M=e(2),v=e(66),h=e(33),b=e(12),T=e(18),A=e(16),w=e(7),R=e(15),y=a.ɵcrt({encapsulation:2,styles:[],data:{}});function C(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,4,"a",[["href","https://github.com/DethAriel/ng2-recaptcha"],["mat-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;"click"===l&&(t=!1!==a.ɵnov(n,1)._haltDisabledEvents(e)&&t);return t},t.View_MatAnchor_0,t.RenderType_MatAnchor)),a.ɵdid(1,180224,null,0,o.MatAnchor,[u.FocusMonitor,a.ElementRef,[2,r.ANIMATION_MODULE_TYPE]],null,null),(n()(),a.ɵeld(2,0,null,0,0,"img",[["height","26px"],["src","octocat.3ccdc11e.svg"]],null,null,null,null,null)),(n()(),a.ɵeld(3,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),a.ɵted(-1,null,["GitHub"]))],null,function(n,l){n(l,0,0,a.ɵnov(l,1).disabled?-1:a.ɵnov(l,1).tabIndex||0,a.ɵnov(l,1).disabled||null,a.ɵnov(l,1).disabled.toString(),"NoopAnimations"===a.ɵnov(l,1)._animationMode)})}function E(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,2,"a",[["aria-label","GitHub repository"],["href","https://github.com/DethAriel/ng2-recaptcha"],["mat-icon-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;"click"===l&&(t=!1!==a.ɵnov(n,1)._haltDisabledEvents(e)&&t);return t},t.View_MatAnchor_0,t.RenderType_MatAnchor)),a.ɵdid(1,180224,null,0,o.MatAnchor,[u.FocusMonitor,a.ElementRef,[2,r.ANIMATION_MODULE_TYPE]],null,null),(n()(),a.ɵeld(2,0,null,0,0,"img",[["height","26px"],["src","octocat.3ccdc11e.svg"]],null,null,null,null,null))],null,function(n,l){n(l,0,0,a.ɵnov(l,1).disabled?-1:a.ɵnov(l,1).tabIndex||0,a.ɵnov(l,1).disabled||null,a.ɵnov(l,1).disabled.toString(),"NoopAnimations"===a.ɵnov(l,1)._animationMode)})}function D(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,5,"a",[["class","mat-list-item"],["mat-list-item",""]],[[8,"href",4],[2,"active",null],[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],null,null,i.View_MatListItem_0,i.RenderType_MatListItem)),a.ɵdid(1,1228800,null,3,s.MatListItem,[a.ElementRef,a.ChangeDetectorRef,[2,s.MatNavList],[2,s.MatList]],null,null),a.ɵqud(603979776,4,{_lines:1}),a.ɵqud(603979776,5,{_avatar:0}),a.ɵqud(603979776,6,{_icon:0}),(n()(),a.ɵted(5,2,[" "," "]))],null,function(n,l){var e=l.component;n(l,0,0,e.site.baseurl+l.context.$implicit.path,e.page.feature===l.context.$implicit.feature,a.ɵnov(l,1)._avatar||a.ɵnov(l,1)._icon,a.ɵnov(l,1)._avatar||a.ɵnov(l,1)._icon),n(l,5,0,l.context.$implicit.label)})}function L(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,4,"button",[["mat-icon-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var a=!0,t=n.component;"click"===l&&(a=!1!=(t.sidebarOpened=!0)&&a);return a},t.View_MatButton_0,t.RenderType_MatButton)),a.ɵdid(1,180224,null,0,o.MatButton,[a.ElementRef,u.FocusMonitor,[2,r.ANIMATION_MODULE_TYPE]],null,null),(n()(),a.ɵeld(2,0,null,0,2,"mat-icon",[["aria-hidden","true"],["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.View_MatIcon_0,d.RenderType_MatIcon)),a.ɵdid(3,9158656,null,0,p.MatIcon,[a.ElementRef,p.MatIconRegistry,[8,"true"],[2,p.MAT_ICON_LOCATION]],null,null),(n()(),a.ɵted(-1,0,["menu"]))],function(n,l){n(l,3,0)},function(n,l){n(l,0,0,a.ɵnov(l,1).disabled||null,"NoopAnimations"===a.ɵnov(l,1)._animationMode),n(l,2,0,a.ɵnov(l,3).inline,"primary"!==a.ɵnov(l,3).color&&"accent"!==a.ɵnov(l,3).color&&"warn"!==a.ɵnov(l,3).color)})}function N(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),a.ɵted(1,null,["",".component.html"]))],null,function(n,l){n(l,1,0,l.component.page.feature)})}function I(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),a.ɵted(1,null,["",".component.ts"]))],null,function(n,l){n(l,1,0,l.component.page.feature)})}function S(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),a.ɵted(-1,null,["main.ts"]))],null,null)}function j(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),a.ɵted(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.page.content.additional.title)})}function O(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,16777216,null,null,6,"mat-tab",[],null,null,null,c.View_MatTab_0,c.RenderType_MatTab)),a.ɵdid(1,770048,[[8,4]],2,m.MatTab,[a.ViewContainerRef],null,null),a.ɵqud(603979776,15,{templateLabel:0}),a.ɵqud(335544320,16,{_explicitContent:0}),(n()(),a.ɵand(16777216,null,0,1,null,j)),a.ɵdid(5,16384,[[15,4]],0,m.MatTabLabel,[a.TemplateRef,a.ViewContainerRef],null,null),(n()(),a.ɵeld(6,0,null,0,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),a.ɵand(0,null,null,0))],function(n,l){n(l,1,0)},function(n,l){n(l,6,0,l.component.page.content.additional.content)})}function P(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,72,"section",[["class","recaptcha-demo-wrapper"]],null,null,null,null,null)),(n()(),a.ɵeld(1,0,null,null,12,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,_.View_MatToolbar_0,_.RenderType_MatToolbar)),a.ɵdid(2,4243456,null,1,f.MatToolbar,[a.ElementRef,g.Platform,M.DOCUMENT],{color:[0,"color"]},null),a.ɵqud(603979776,1,{_toolbarRows:1}),(n()(),a.ɵeld(4,0,null,1,9,"mat-toolbar-row",[["class","mat-toolbar-row"]],null,null,null,null,null)),a.ɵdid(5,16384,[[1,4]],0,f.MatToolbarRow,[],null,null),(n()(),a.ɵeld(6,0,null,null,0,"img",[["height","40px"],["src","angular.f26e178e.svg"]],null,null,null,null,null)),(n()(),a.ɵeld(7,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.ɵted(8,null,["",""])),(n()(),a.ɵeld(9,0,null,null,0,"span",[["class","filler"]],null,null,null,null,null)),(n()(),a.ɵand(16777216,null,null,1,null,C)),a.ɵdid(11,16384,null,0,M.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a.ɵand(16777216,null,null,1,null,E)),a.ɵdid(13,16384,null,0,M.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a.ɵeld(14,0,null,null,58,"mat-sidenav-container",[["class","mat-drawer-container mat-sidenav-container"]],[[2,"mat-drawer-container-explicit-backdrop",null]],null,null,v.View_MatSidenavContainer_0,v.RenderType_MatSidenavContainer)),a.ɵdid(15,1490944,null,2,h.MatSidenavContainer,[[2,b.Directionality],a.ElementRef,a.NgZone,a.ChangeDetectorRef,T.ViewportRuler,h.MAT_DRAWER_DEFAULT_AUTOSIZE,[2,r.ANIMATION_MODULE_TYPE]],null,null),a.ɵqud(603979776,2,{_drawers:1}),a.ɵqud(603979776,3,{_content:0}),(n()(),a.ɵeld(18,0,null,0,7,"mat-sidenav",[["class","mat-drawer mat-sidenav"],["fixedTopGap","56"],["tabIndex","-1"]],[[1,"align",0],[2,"mat-drawer-end",null],[2,"mat-drawer-over",null],[2,"mat-drawer-push",null],[2,"mat-drawer-side",null],[2,"mat-sidenav-fixed",null],[4,"top","px"],[4,"bottom","px"],[40,"@transform",0]],[[null,"closed"],["component","@transform.start"],["component","@transform.done"]],function(n,l,e){var t=!0,o=n.component;"component:@transform.start"===l&&(t=!1!==a.ɵnov(n,19)._animationStartListener(e)&&t);"component:@transform.done"===l&&(t=!1!==a.ɵnov(n,19)._animationDoneListener(e)&&t);"closed"===l&&(t=!1!=(o.sidebarOpened=!1)&&t);return t},v.View_MatSidenav_0,v.RenderType_MatSidenav)),a.ɵdid(19,3325952,[[2,4],["sidenav",4]],0,h.MatSidenav,[a.ElementRef,u.FocusTrapFactory,u.FocusMonitor,g.Platform,a.NgZone,[2,M.DOCUMENT]],{mode:[0,"mode"],opened:[1,"opened"],fixedInViewport:[2,"fixedInViewport"],fixedTopGap:[3,"fixedTopGap"]},{_closedStream:"closed"}),(n()(),a.ɵeld(20,0,null,0,5,"mat-nav-list",[["class","mat-nav-list mat-list-base"],["role","navigation"]],null,null,null,i.View_MatNavList_0,i.RenderType_MatNavList)),a.ɵdid(21,704512,null,0,s.MatNavList,[],null,null),(n()(),a.ɵeld(22,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),a.ɵted(-1,null,["Examples"])),(n()(),a.ɵand(16777216,null,0,1,null,D)),a.ɵdid(25,278528,null,0,M.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),a.ɵeld(26,0,null,1,46,"mat-sidenav-content",[["class","mat-drawer-content mat-sidenav-content"]],[[4,"margin-left","px"],[4,"margin-right","px"]],null,null,v.View_MatSidenavContent_0,v.RenderType_MatSidenavContent)),a.ɵdid(27,1294336,[[3,4]],0,h.MatSidenavContent,[a.ChangeDetectorRef,h.MatSidenavContainer,a.ElementRef,T.ScrollDispatcher,a.NgZone],null,null),(n()(),a.ɵeld(28,0,null,0,44,"div",[["class","layout"]],null,null,null,null,null)),(n()(),a.ɵeld(29,0,null,null,6,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,_.View_MatToolbar_0,_.RenderType_MatToolbar)),a.ɵdid(30,4243456,null,1,f.MatToolbar,[a.ElementRef,g.Platform,M.DOCUMENT],{color:[0,"color"]},null),a.ɵqud(603979776,7,{_toolbarRows:1}),(n()(),a.ɵand(16777216,null,0,1,null,L)),a.ɵdid(33,16384,null,0,M.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a.ɵeld(34,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),a.ɵted(35,null,["",""])),(n()(),a.ɵeld(36,0,null,null,28,"main",[],null,null,null,null,null)),(n()(),a.ɵeld(37,0,null,null,1,"div",[["class","example-container"]],null,null,null,null,null)),a.ɵncd(null,0),(n()(),a.ɵeld(39,0,null,null,25,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,c.View_MatTabGroup_0,c.RenderType_MatTabGroup)),a.ɵdid(40,3325952,null,1,m.MatTabGroup,[a.ElementRef,a.ChangeDetectorRef,[2,m.MAT_TABS_CONFIG]],null,null),a.ɵqud(603979776,8,{_tabs:1}),(n()(),a.ɵeld(42,16777216,null,null,6,"mat-tab",[],null,null,null,c.View_MatTab_0,c.RenderType_MatTab)),a.ɵdid(43,770048,[[8,4]],2,m.MatTab,[a.ViewContainerRef],null,null),a.ɵqud(603979776,9,{templateLabel:0}),a.ɵqud(335544320,10,{_explicitContent:0}),(n()(),a.ɵand(16777216,null,0,1,null,N)),a.ɵdid(47,16384,[[9,4]],0,m.MatTabLabel,[a.TemplateRef,a.ViewContainerRef],null,null),(n()(),a.ɵeld(48,0,null,0,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),a.ɵeld(49,16777216,null,null,6,"mat-tab",[],null,null,null,c.View_MatTab_0,c.RenderType_MatTab)),a.ɵdid(50,770048,[[8,4]],2,m.MatTab,[a.ViewContainerRef],null,null),a.ɵqud(603979776,11,{templateLabel:0}),a.ɵqud(335544320,12,{_explicitContent:0}),(n()(),a.ɵand(16777216,null,0,1,null,I)),a.ɵdid(54,16384,[[11,4]],0,m.MatTabLabel,[a.TemplateRef,a.ViewContainerRef],null,null),(n()(),a.ɵeld(55,0,null,0,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),a.ɵeld(56,16777216,null,null,6,"mat-tab",[],null,null,null,c.View_MatTab_0,c.RenderType_MatTab)),a.ɵdid(57,770048,[[8,4]],2,m.MatTab,[a.ViewContainerRef],null,null),a.ɵqud(603979776,13,{templateLabel:0}),a.ɵqud(335544320,14,{_explicitContent:0}),(n()(),a.ɵand(16777216,null,0,1,null,S)),a.ɵdid(61,16384,[[13,4]],0,m.MatTabLabel,[a.TemplateRef,a.ViewContainerRef],null,null),(n()(),a.ɵeld(62,0,null,0,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),a.ɵand(16777216,null,null,1,null,O)),a.ɵdid(64,16384,null,0,M.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a.ɵeld(65,0,null,null,7,"footer",[],null,null,null,null,null)),(n()(),a.ɵeld(66,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),a.ɵeld(67,0,null,null,0,"img",[["height","32px"],["src","angular.f26e178e.svg"]],null,null,null,null,null)),(n()(),a.ɵeld(68,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),a.ɵeld(69,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.ɵted(70,null,["",""])),(n()(),a.ɵeld(71,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.ɵted(72,null,["",""]))],function(n,l){var e=l.component;n(l,2,0,"primary"),n(l,11,0,!e.mobileQuery.matches),n(l,13,0,e.mobileQuery.matches),n(l,15,0);n(l,19,0,e.mobileQuery.matches?"over":"side",!e.mobileQuery.matches||e.sidebarOpened,e.mobileQuery.matches,"56"),n(l,25,0,e.navLinks),n(l,27,0);n(l,30,0,"primary"),n(l,33,0,e.mobileQuery.matches),n(l,43,0),n(l,50,0),n(l,57,0),n(l,64,0,e.page.content.additional)},function(n,l){var e=l.component;n(l,1,0,a.ɵnov(l,2)._toolbarRows.length>0,0===a.ɵnov(l,2)._toolbarRows.length),n(l,8,0,e.site.title),n(l,14,0,a.ɵnov(l,15)._backdropOverride);n(l,18,0,null,"end"===a.ɵnov(l,19).position,"over"===a.ɵnov(l,19).mode,"push"===a.ɵnov(l,19).mode,"side"===a.ɵnov(l,19).mode,a.ɵnov(l,19).fixedInViewport,a.ɵnov(l,19).fixedInViewport?a.ɵnov(l,19).fixedTopGap:null,a.ɵnov(l,19).fixedInViewport?a.ɵnov(l,19).fixedBottomGap:null,a.ɵnov(l,19)._animationState),n(l,26,0,a.ɵnov(l,27)._container._contentMargins.left,a.ɵnov(l,27)._container._contentMargins.right),n(l,29,0,a.ɵnov(l,30)._toolbarRows.length>0,0===a.ɵnov(l,30)._toolbarRows.length),n(l,35,0,e.page.title),n(l,39,0,a.ɵnov(l,40).dynamicHeight,"below"===a.ɵnov(l,40).headerPosition),n(l,48,0,e.page.content.html),n(l,55,0,e.page.content.component),n(l,62,0,e.page.content.module),n(l,70,0,e.site.title),n(l,72,0,e.site.description)})}function k(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,0,null,null,1,"recaptcha-demo-wrapper",[],null,null,null,P,y)),a.ɵdid(1,245760,null,0,A.DemoWrapperComponent,[A.PAGE_SETTINGS,A.NAV_LINKS,w.Title,R.MediaMatcher,a.ChangeDetectorRef],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_DemoWrapperComponent=y,l.View_DemoWrapperComponent_0=P,l.View_DemoWrapperComponent_Host_0=k;var V=a.ɵccf("recaptcha-demo-wrapper",A.DemoWrapperComponent,k,{},{},["*"]);l.DemoWrapperComponentNgFactory=V},40:function(n,l,e){},41:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e(42).navLinks;l.ɵ0=a;var t=function(){return function(){}}();l.DemoWrapperModule=t},42:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.navLinks=[{label:"Basic",path:"/",feature:"basic"},{label:"Forms",path:"/forms",feature:"forms"},{label:"Global Config",path:"/global-config",feature:"global-config"},{label:"Invisible",path:"/invisible",feature:"invisible"},{label:"reCAPTCHA v3",path:"/v3",feature:"v3"},{label:"Language",path:"/language",feature:"language"},{label:"Preloaded",path:"/preload-api",feature:"preload-api"}]},58:function(n,l){function e(n){return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=58}},[[161,0,1]]]);
//# sourceMappingURL=demo-language.a4fd693c71b5d1c36992.js.map