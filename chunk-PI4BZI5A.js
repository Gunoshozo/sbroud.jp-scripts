import{b as Kt,c as Xt,d as Yt,e as Zt,f as ie,h as oe,i as ne,j as re,k as ae}from"./chunk-CRHUP7PS.js";import"./chunk-YPJUEPRX.js";import"./chunk-W66C6N3I.js";import"./chunk-YPHX7PC4.js";import{a as pe}from"./chunk-S77TKC5Z.js";import{a as se}from"./chunk-BPDZKKEV.js";import{b as Ht,c as Gt,d as Bt}from"./chunk-ZRHCUKDU.js";import{a as Qt,b as Vt}from"./chunk-3LROMLBA.js";import{a as Dt}from"./chunk-TFAWTYLP.js";import"./chunk-UEBDUWVO.js";import{l as te,m as ee}from"./chunk-WNPWYFNT.js";import{a as de,b as ue}from"./chunk-BREHQ7QA.js";import{d as k}from"./chunk-QPXJIEBY.js";import{$ as _,$a as I,Ab as It,Ae as Wt,Bb as Pt,Cb as D,Ce as qt,Da as Z,Dd as Nt,Ea as m,F as lt,Fa as G,Ga as a,Ha as ht,Hc as zt,Ia as h,Ka as ft,Ke as J,L as H,La as vt,Lc as Ft,Le as it,M as Q,Ma as Ct,Na as yt,Ne as Jt,O as ct,Oa as l,Pa as c,Qa as w,Ra as E,Rc as Lt,S as y,Sa as S,Sc as Rt,Ta as B,Tc as q,Ua as U,Uc as et,Xa as z,Ya as g,Za as F,_ as mt,_a as O,aa as b,ab as $,ba as T,bb as v,cb as C,e as ut,eb as L,fa as M,ga as x,gb as W,hb as bt,he as Ut,ib as Tt,jb as wt,jc as At,kb as R,lb as Mt,lc as Et,ma as gt,n as X,o as st,od as jt,pb as xt,qa as _t,qb as Ot,qc as tt,re as $t,sc as St,t as pt,tb as j,v as Y,va as u,vd as A,wa as d,wd as kt,x as N,ya as V,yb as P}from"./chunk-VIQ542NQ.js";var ye=["wrapper"],be=["*"];function Te(e,o){if(e&1&&(l(0,"tui-loader",4),B(1,5),c()),e&2){let t=g(2);a("overlay",!0)("showLoader",t.loading),u(),a("ngTemplateOutlet",t.content)}}function we(e,o){if(e&1&&(E(0),O(1),m(2,Te,2,3,"tui-loader",3),S()),e&2){let t=g();u(2),a("ngIf",t.async)("ngIfElse",t.content)}}var ot=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=T({type:e,selectors:[["","tuiExpandContent",""]]}),e})(),s={Idle:0,Loading:1,Prepared:2,Animated:3},Me=48,ce=(()=>{class e{constructor(t,i){this.cdr=t,this.destroy$=i,this.state=s.Idle,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(t){if(this.expanded===null){this.expanded=t;return}if(this.state!==s.Idle){this.expanded=t,this.state=s.Animated;return}this.expanded=t,this.retrigger(this.async&&t?s.Loading:s.Animated)}get overflow(){return this.state!==s.Idle}get loading(){return!!this.expanded&&this.async&&this.state===s.Loading}get height(){let{expanded:t,state:i,contentWrapper:n}=this;return t&&i===s.Prepared||!t&&i===s.Animated?0:n&&(!t&&i===s.Prepared||t&&i===s.Animated)?n.nativeElement.offsetHeight:n&&t&&i===s.Loading?Math.max(n.nativeElement.offsetHeight,Me):null}get contentVisible(){return this.expanded||this.state!==s.Idle}onTransitionEnd({propertyName:t,pseudoElement:i}){t==="opacity"&&!i&&this.state===s.Animated&&(this.state=s.Idle)}onExpandLoaded(t){t.stopPropagation(),this.state===s.Loading&&this.retrigger(s.Animated)}retrigger(t){this.state=s.Prepared,pt(0).pipe(Q(this.destroy$)).subscribe(()=>{this.state===s.Prepared&&(this.state=t,this.cdr.markForCheck())})}}return e.\u0275fac=function(t){return new(t||e)(d(j),d(A,2))},e.\u0275cmp=_({type:e,selectors:[["tui-expand"]],contentQueries:function(t,i,n){if(t&1&&I(n,ot,5,V),t&2){let r;v(r=C())&&(i.content=r.first)}},viewQuery:function(t,i){if(t&1&&$(ye,5),t&2){let n;v(n=C())&&(i.contentWrapper=n.first)}},hostVars:9,hostBindings:function(t,i){t&1&&z("transitionend.self",function(r){return i.onTransitionEnd(r)})("tui-expand-loaded",function(r){return i.onExpandLoaded(r)}),t&2&&(G("aria-expanded",i.expanded),ht("height",i.height,"px"),h("_expanded",i.expanded)("_overflow",i.overflow)("_loading",i.loading))},inputs:{async:"async",expandedSetter:[mt.None,"expanded","expandedSetter"]},features:[R([A])],ngContentSelectors:be,decls:3,vars:3,consts:[["wrapper",""],[1,"t-wrapper"],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(t,i){t&1&&(F(),l(0,"div",1,0),m(2,we,3,2,"ng-container",2),c()),t&2&&(a("@tuiParentAnimation",void 0)("@.disabled",i.overflow),u(2),a("ngIf",i.contentVisible))},dependencies:[te,P,It],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[Et]},changeDetection:0}),e})(),me=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=y({imports:[[D,ee]]}),e})();var xe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=_({type:e,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(t,i){},styles:[`.tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}
`],encapsulation:2,changeDetection:0}),e})(),ge=(()=>{class e{constructor(t){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",t.addComponent(xe)}get orientationHorizontal(){return this.orientation==="horizontal"}get orientationVertical(){return this.orientation==="vertical"}get sizeLarge(){return this.size==="l"}}return e.\u0275fac=function(t){return new(t||e)(d(kt))},e.\u0275dir=T({type:e,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(t,i){t&2&&h("tui-group_adaptive",i.adaptive)("tui-group_collapsed",i.collapsed)("tui-group_rounded",i.rounded)("tui-group_orientation_horizontal",i.orientationHorizontal)("tui-group_orientation_vertical",i.orientationVertical)("tui-group_radius_large",i.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),e})(),_e=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=y({imports:[[D]]}),e})();function Ie(e,o){if(e&1&&w(0,"tui-svg",2),e&2){let t=o.polymorpheusOutlet;a("src",t)}}function Pe(e,o){e&1&&B(0)}var De={iconSmall:"tuiIconChevronDown",iconLarge:"tuiIconChevronDownLarge"},nt=tt(De);var Ae=(()=>{class e{constructor(t,i,n){this.dropdown=t,this.textfieldSize=i,this.options=n}get rotated(){return this.dropdown.open}get arrowIcon(){return Ut(this.textfieldSize.size)?this.options.iconLarge:this.options.iconSmall}}return e.\u0275fac=function(t){return new(t||e)(d(ie),d(Yt),d(nt))},e.\u0275cmp=_({type:e,selectors:[["tui-arrow"]],hostVars:2,hostBindings:function(t,i){t&2&&h("_rotated",i.rotated)},decls:3,vars:4,consts:[[3,"src",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"src"]],template:function(t,i){t&1&&(m(0,Ie,1,1,"tui-svg",0)(1,Pe,1,0,"ng-container",1),xt(2,"async")),t&2&&(a("polymorpheusOutlet",i.arrowIcon),u(),a("ngIf",Ot(2,2,i.dropdown.openChange)))},dependencies:[J,q,P,Pt],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})(),he=new Lt(Ae);var Ee={interactive:he,disabled:he},Ci=tt(Ee);var Se=["focusableElement"],ze=["*",[["","tuiAccordionItemContent",""]]],Fe=["*","[tuiAccordionItemContent]"];function Le(e,o){if(e&1&&w(0,"tui-svg",9),e&2){let t=o.polymorpheusOutlet,i=g(2);h("t-icon_open",i.open),a("src",t)}}function Re(e,o){if(e&1&&(E(0),m(1,Le,1,3,"tui-svg",8),S()),e&2){let t=g();u(),a("polymorpheusOutlet",t.options.iconLarge)}}function je(e,o){if(e&1&&(E(0),L(1),S()),e&2){let t=o.polymorpheusOutlet;u(),W(" ",t," ")}}function ke(e,o){if(e&1&&(l(0,"div",11),m(1,je,2,1,"ng-container",12),c()),e&2){let t=g(2);u(),a("polymorpheusOutlet",t.lazyContent)}}function Ne(e,o){if(e&1&&m(0,ke,2,1,"div",10),e&2){let t=g();a("ngIf",t.lazyContent)}}function He(e,o){e&1&&(l(0,"div",13),O(1,1),c())}var Qe=[[["tui-accordion-item"]]],Ve=["tui-accordion-item"],rt=(()=>{class e extends Rt{constructor(t,i){super(t,i)}}return e.\u0275fac=function(t){return new(t||e)(d(V,2),d(j))},e.\u0275dir=T({type:e,selectors:[["ng-template","tuiAccordionItemContent",""]],features:[Z]}),e})(),Ge=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=T({type:e,selectors:[["","tuiAccordionItemContent","",5,"ng-template"]]}),e})(),at=(()=>{class e extends Nt{constructor(t,i,n){super(),this.cdr=t,this.mode$=i,this.options=n,this.noPadding=!1,this.showArrow=!0,this.borders="all",this.size="m",this.disabled=!1,this.disableHover=!1,this.open=!1,this.async=!1,this.openChange=new gt}get nativeFocusableElement(){return this.disabled||!this.focusableElement?null:this.focusableElement.nativeElement}get focused(){return zt(this.nativeFocusableElement)}onFocused(t){this.updateFocused(t)}onRowToggle(){this.disabled||this.updateOpen(!this.open)}onItemKeyDownEsc(t){this.open&&(t.stopPropagation(),this.updateOpen(!1))}close(){this.updateOpen(!1),this.cdr.markForCheck()}updateOpen(t){this.open!==t&&(this.open=t,this.openChange.emit(t))}}return e.\u0275fac=function(t){return new(t||e)(d(j),d($t),d(nt))},e.\u0275cmp=_({type:e,selectors:[["tui-accordion-item"]],contentQueries:function(t,i,n){if(t&1&&(I(n,Ge,5),I(n,rt,5)),t&2){let r;v(r=C())&&(i.eagerContent=r.first),v(r=C())&&(i.lazyContent=r.first)}},viewQuery:function(t,i){if(t&1&&$(Se,5),t&2){let n;v(n=C())&&(i.focusableElement=n.first)}},hostVars:8,hostBindings:function(t,i){t&1&&z("$.data-mode.attr",function(){return i.mode$}),t&2&&(G("data-borders",i.borders)("data-size",i.size),h("_no-padding",i.noPadding)("_has-arrow",i.showArrow)("_disabled",i.disabled))},inputs:{noPadding:"noPadding",showArrow:"showArrow",borders:"borders",size:"size",disabled:"disabled",disableHover:"disableHover",open:"open",async:"async"},outputs:{openChange:"openChange"},features:[R([jt(e),Jt]),Z],ngContentSelectors:Fe,decls:9,vars:10,consts:[["focusableElement",""],["automation-id","tui-accordion__item-wrapper",1,"t-wrapper"],["automation-id","tui-accordion__item-header","type","button",1,"t-header",3,"click","keydown.esc","tuiFocusedChange","disabled","tuiFocusable"],["automation-id","tui-accordion__item-title",1,"t-title"],[4,"ngIf"],[3,"async","expanded"],["tuiExpandContent",""],["class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-arrow","class","t-icon",3,"t-icon_open","src",4,"polymorpheusOutlet"],["automation-id","tui-accordion__item-arrow",1,"t-icon",3,"src"],["automation-id","tui-accordion__item-content","class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-content",1,"t-content"],[4,"polymorpheusOutlet"],[1,"t-content"]],template:function(t,i){if(t&1){let n=U();F(ze),l(0,"div",1)(1,"button",2,0),z("click",function(){return M(n),x(i.onRowToggle())})("keydown.esc",function(p){return M(n),x(i.onItemKeyDownEsc(p))})("tuiFocusedChange",function(p){return M(n),x(i.onFocused(p))}),l(3,"span",3),O(4),c(),m(5,Re,2,1,"ng-container",4),c(),l(6,"tui-expand",5),m(7,Ne,1,1,"ng-template",6)(8,He,2,0,"div",7),c()()}t&2&&(u(),h("t-header_hoverable",!i.disableHover)("t-header_open",i.open),a("disabled",i.computedDisabled)("tuiFocusable",i.computedFocusable),u(4),a("ngIf",i.showArrow),u(),a("async",i.async)("expanded",i.open),u(2),a("ngIf",i.eagerContent))},dependencies:[J,ce,Qt,Gt,P,q,ot],styles:['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}[data-borders=top-bottom][_nghost-%COMP%]{border-radius:0!important}.t-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:inherit}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-base-04);pointer-events:none}[_nghost-%COMP%]:not([data-borders])   .t-wrapper[_ngcontent-%COMP%]:after{border-width:0}[data-borders=all][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-borders=top-bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0}[data-borders=top][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-bottom-width:0}[data-borders=bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-top-width:0}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-text-01)}[_nghost-%COMP%]:not([data-mode])   .t-wrapper[_ngcontent-%COMP%]{background:var(--tui-base-01)}.t-header[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;width:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-bottom:1px solid var(--tui-base-04);min-height:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-01);cursor:pointer;text-align:left;outline:none}.t-header[_ngcontent-%COMP%]:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-focus)}[data-mode=onDark][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{color:var(--tui-text-01-night);border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{border-color:var(--tui-text-01)}[_nghost-%COMP%]:not([data-borders])   .t-header[_ngcontent-%COMP%]{border-bottom-width:0;box-shadow:none}._has-arrow[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-right:.75rem}[data-mode=onDark][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}[data-mode=onLight][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear)}[data-size=s][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{font:var(--tui-font-text-m);min-height:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}._no-padding[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-left:0;padding-right:0}._disabled[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{cursor:default}.t-wrapper[_ngcontent-%COMP%]:hover:not([data-mode]) > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-base-02)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onDark] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onLight] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear)}.t-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}._has-arrow[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{margin-right:.5rem}.t-icon[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:1.5rem;height:1.5rem;margin-left:auto;color:var(--tui-base-06)}.t-icon_open[_ngcontent-%COMP%]{transform:rotate(180deg)}[data-mode][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:hover[data-mode]   .t-icon[_ngcontent-%COMP%]{opacity:.8}[data-mode=onDark][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onLight][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01)}[_nghost-%COMP%]:hover:not([data-mode])   .t-icon[_ngcontent-%COMP%]{color:var(--tui-base-07)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);padding:1.25rem;word-wrap:break-word}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);padding:1rem}'],changeDetection:0}),e})(),ve=(()=>{class e{constructor(t){this.destroy$=t,this.closeOthers=!0,this.rounded=!0,this.accordionItems=At}ngAfterContentInit(){let{accordionItems:t}=this,i=Ft(t),n=i.pipe(lt(),X(([p,f])=>f.find(dt=>!p.includes(dt)&&dt.open)),N(St));Y(i.pipe(H(p=>Y(...p.map(f=>f.openChange.pipe(N(ut),X(()=>f)))))),n).pipe(N(()=>this.closeOthers),Q(this.destroy$)).subscribe(p=>{t.forEach(f=>{p!==f&&f.close()})})}}return e.\u0275fac=function(t){return new(t||e)(d(A,2))},e.\u0275cmp=_({type:e,selectors:[["tui-accordion"]],contentQueries:function(t,i,n){if(t&1&&I(n,at,4),t&2){let r;v(r=C())&&(i.accordionItems=r)}},inputs:{closeOthers:"closeOthers",rounded:"rounded"},features:[R([A])],ngContentSelectors:Ve,decls:2,vars:2,consts:[["automation-id","tui-accordion__group","orientation","vertical","size","l","tuiGroup","",1,"t-group",3,"collapsed","rounded"]],template:function(t,i){t&1&&(F(Qe),l(0,"div",0),O(1),c()),t&2&&a("collapsed",!0)("rounded",i.rounded)},dependencies:[ge],styles:["[_nghost-%COMP%]{display:block}.t-group[_ngcontent-%COMP%]{display:flex;align-items:stretch}"],changeDetection:0}),e})(),Ce=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=y({imports:[[D,Bt,Ht,Vt,et,it,_e,me]]}),e})();function Be(e,o){if(e&1&&w(0,"pre",9),e&2){let t=g().$implicit;a("innerHTML",t.content,_t)}}function Ue(e,o){if(e&1&&(l(0,"tui-accordion-item",7),L(1),m(2,Be,1,1,"ng-template",8),c()),e&2){let t=o.$implicit;u(),W(" ",t.name," ")}}function $e(e,o){if(e&1){let t=U();l(0,"div",1)(1,"div",2)(2,"tui-island",3)(3,"tui-primitive-textfield",4),wt("valueChange",function(n){M(t);let r=g();return Tt(r.filterString,n)||(r.filterString=n),x(n)}),L(4," Filter "),w(5,"input",5),c(),l(6,"tui-accordion",6),Ct(7,Ue,3,1,"tui-accordion-item",7,vt),c()()()()}if(e&2){let t=g();u(3),a("tuiTextfieldIcon","tuiIconSearchLarge")("tuiTextfieldCleaner",!0),bt("value",t.filterString),u(3),a("closeOthers",!1),u(),yt(t.filteredTips)}}var Yi=(()=>{let o=class o{get filterString(){return this.filterStr}set filterString(i){this.filterStr=i,this.filterTimeout&&clearTimeout(this.filterTimeout),this.filterTimeout=setTimeout(()=>{this.onFilter(this.filterStr)},400)}constructor(i,n,r,p,f){this.activeRoute=i,this.router=n,this.restApiService=r,this.gameRootService=p,this.globalLoader=f,this._tipsList=[],this.gameName="",this.filterStr="",this.filteredTips=[],this.header="",this.isDraw=!1}ngOnInit(){let i={parentParams:this.activeRoute.parent?.paramMap,queryParams:this.activeRoute.parent?.queryParamMap};k.mapping||(i.mapping=this.restApiService.get("nameMapping").pipe(ct(n=>{k.mapping=n}))),st(i).pipe(H(n=>{let r=n.queryParams?.params.filter;r&&(this.filterStr=r);let p=n.parentParams;return this.gameName=p.get("gameName")||"",this.header=`${k.mapping[this.gameName]&&k.mapping[this.gameName]+" "||""}Tips`,this.gameRootService.pushHeader(this.header),this.restApiService.get("tips",{pathParams:{gameName:this.gameName}})})).subscribe({next:n=>{this._tipsList=n.map((r,p)=>(r.name=`${p+1}: ${r.name}`,r)),this.filteredTips=this._tipsList,this.filterStr&&this.onFilter(this.filterStr),this.isDraw=!0},error:()=>{this.router.navigate(["/error"]),this.globalLoader.setGlobalLoader(!1)}})}onFilter(i){i?this.filteredTips=this._tipsList.filter(n=>n.name.toLowerCase().includes(i.toLowerCase())||n.pronunciation?.toLowerCase().includes(i.toLowerCase())||n.content.toLowerCase().includes(i.toLowerCase())):this.filteredTips=JSON.parse(JSON.stringify(this._tipsList))}};o.\u0275fac=function(n){return new(n||o)(d(Wt),d(qt),d(pe),d(se),d(Dt))},o.\u0275cmp=_({type:o,selectors:[["app-tips"]],standalone:!0,features:[Mt],decls:2,vars:1,consts:[[1,"items-list_body"],[1,"items-list_scroll"],[1,"items-list_container","vw80",2,"grid-template-columns","repeat(1, minmax(0, 1fr))"],[1,"items-list_container-island","additional-page_contents","additional-page_island"],[1,"items-list_filter-field",3,"valueChange","tuiTextfieldIcon","tuiTextfieldCleaner","value"],["tuiTextfield",""],[1,"tips_accordion",3,"closeOthers"],[1,"accordion-item"],["tuiAccordionItemContent",""],[1,"tips_accordion-content",3,"innerHTML"]],template:function(n,r){n&1&&(l(0,"div",0),m(1,$e,9,4,"div",1),c()),n&2&&(u(),ft(1,r.isDraw?1:-1))},dependencies:[Ce,ve,at,rt,ue,de,ae,oe,ne,re,Zt,Kt,Xt],encapsulation:2});let e=o;return e})();export{Yi as TipsComponent};
