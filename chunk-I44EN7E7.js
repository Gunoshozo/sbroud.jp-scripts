import"./chunk-G4CQK3SC.js";import{a as Re,b as Ve,c as Be,d as Ue}from"./chunk-KHZVHM7D.js";import{a as je,b as He}from"./chunk-3T7R53LO.js";import{a as nt}from"./chunk-BCA4Q5XO.js";import{a as be}from"./chunk-SW5ADHBM.js";import{a as rt,b as at}from"./chunk-TQ3D3G5F.js";import{a as tt,b as it,c as ot}from"./chunk-BZ35IFDC.js";import"./chunk-UFRAF5IV.js";import"./chunk-XLIKHLUI.js";import{a as ze,j as Ye,k as qe,l as Xe,m as Je}from"./chunk-JJAHF3FC.js";import"./chunk-XYLHXVLH.js";import{a as Ze,b as et}from"./chunk-3VTLMZWP.js";import{c as C}from"./chunk-QPXJIEBY.js";import{$ as y,$b as we,C as ie,Da as F,E as oe,Ea as v,Fa as M,Ga as s,Ge,H as ne,Ha as de,Hd as U,He as $e,Ia as S,Id as Ae,Ie as Qe,Ja as ue,Jc as j,Je as We,K as re,Ka as d,La as u,Ma as m,Od as Ne,Pc as xe,Q as ae,Qa as ce,Qb as Ce,Ra as A,Rb as w,S as h,Sb as ye,Ta as b,Tb as Me,Ua as z,Ub as q,Va as $,Vb as g,Vc as H,Wa as Q,Wb as X,Wc as B,Xa as W,Xb as Te,Ya as N,Yb as ke,Za as T,Zb as Oe,_a as k,_b as Pe,aa as f,ab as O,ac as Se,ba as I,bb as me,bd as Le,db as ge,eb as pe,fa as x,fb as he,ga as L,gb as D,hb as fe,jb as Y,k as te,ka as se,kc as Ie,ke as J,la as G,ma as le,n as K,pb as P,pc as De,qc as Ee,qd as Fe,sc as V,tb as ve,te as Ke,ub as _e,va as c,wa as a,yb as R}from"./chunk-KN6KQJWB.js";var st=(()=>{class e{constructor(){this.indeterminate=!1,this.checked=!1,this.tuiCheckedChange=new le}get isChecked(){return this.checked}get isIndeterminate(){return this.indeterminate}set tuiChecked(t){this.checked=t||!1,this.indeterminate=t===null}onChange({checked:t}){this.checked=t,this.indeterminate=!1,this.tuiCheckedChange.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=I({type:e,selectors:[["input","tuiChecked",""],["input","tuiCheckedChange",""]],hostVars:2,hostBindings:function(t,i){t&1&&b("change",function(r){return i.onChange(r.target)}),t&2&&A("checked",i.isChecked)("indeterminate",i.isIndeterminate)},inputs:{tuiChecked:"tuiChecked"},outputs:{tuiCheckedChange:"tuiCheckedChange"}}),e})(),lt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({}),e})();var dt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({}),e})();var yt=["tuiLabel",""],Mt=["*"];function Tt(e,o){if(e&1&&m(0,"span",3),e&2){let t=o.polymorpheusOutlet;s("textContent",t)}}var ut=(()=>{class e{constructor(t){this.mode$=t,this.context={$implicit:null}}}return e.\u0275fac=function(t){return new(t||e)(a(Ke))},e.\u0275cmp=y({type:e,selectors:[["label","tuiLabel",""]],contentQueries:function(t,i,n){if(t&1&&W(n,w,5),t&2){let r;T(r=k())&&(i.control=r.first)}},hostVars:2,hostBindings:function(t,i){t&1&&b("$.data-mode.attr",function(){return i.mode$}),t&2&&S("_control",i.control)},inputs:{tuiLabel:"tuiLabel",context:"context"},features:[D([We])],attrs:yt,ngContentSelectors:Mt,decls:4,vars:2,consts:[[1,"t-label"],["class","t-text",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-content"],[1,"t-text",3,"textContent"]],template:function(t,i){t&1&&($(),d(0,"span",0),v(1,Tt,1,1,"span",1),u(),d(2,"span",2),Q(3),u()),t&2&&(c(),s("polymorpheusOutlet",i.tuiLabel)("polymorpheusOutletContext",i.context))},dependencies:[H],styles:['[_nghost-%COMP%]{display:flex;min-height:2.75rem;justify-content:space-between;flex-direction:column;pointer-events:none}.t-label[_ngcontent-%COMP%]{font:var(--tui-font-text-s);max-width:100%;align-self:inherit;overflow:inherit;pointer-events:auto}._control[_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{margin-bottom:.25rem}.t-text[_ngcontent-%COMP%]{display:block;overflow:inherit;text-overflow:ellipsis}[_nghost-%COMP%]:not(._control)   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02)}[data-mode="onDark"][_nghost-%COMP%]   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-content[_ngcontent-%COMP%]{line-height:1.5rem;overflow:inherit;text-overflow:ellipsis;pointer-events:auto;border-radius:inherit}'],changeDetection:0}),e})(),ct=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[[B]]}),e})();var mt=7;function gt(e,o){let t=e.findIndex((r,l)=>l&&o(r)),i=e[t-1]||e[0],n=e[t]||e[e.length-1];return[i,n]}function pt(e,o){let[[t,i],[n,r]]=gt(o,([_,jt])=>e<=_),l=(e-t)/(n-t),p=(r-i)*l+i;return Ee(p,mt)}function ht(e,o){let[[t,i],[n,r]]=gt(o,([p,_])=>e<=_),l=(e-i)/(r-i)||0;return(n-t)*l+t}var Ot=["type","range","tuiSlider",""];var Pt={size:"m",trackColor:"var(--tui-base-03)"},wt=V(Pt);var Z=(()=>{class e{constructor(t,i,n,r,l,p){var _;this.control=t,this.options=n,this.el=r,this.userAgent=l,this.injector=p,this.size=this.options.size,this.segments=1,t instanceof X&&((_=t.valueChanges)===null||_===void 0||_.pipe(xe(i),ie(1)).subscribe())}get min(){return Number(this.el.nativeElement.min)}get max(){return Number(this.el.nativeElement.max||100)}get step(){return Number(this.el.nativeElement.step)||1}get value(){let{el:t,control:i,hasKeySteps:n}=this;return!n&&i instanceof X?i.viewModel:Number(t.nativeElement.value)||0}set value(t){this.el.nativeElement.value=`${t}`}get valueRatio(){return(this.value-this.min)/(this.max-this.min)||0}get valuePercentage(){return 100*this.valueRatio}get segmentWidth(){return 100/Math.max(1,this.segments)}get isOldEdge(){return ze(Ie,this.userAgent)}get hasKeySteps(){return!!this.injector.get(ee,null)}}return e.\u0275fac=function(t){return new(t||e)(a(w,10),a(P),a(wt),a(G),a(Le),a(se))},e.\u0275cmp=y({type:e,selectors:[["input","type","range","tuiSlider",""]],hostVars:11,hostBindings:function(t,i){t&1&&b("input",function(){return 0}),t&2&&(M("data-size",i.size),de("--tui-slider-track-color",i.options.trackColor)("--tui-slider-fill-ratio",i.valueRatio)("--tui-slider-fill-percentage",i.valuePercentage,"%")("--tui-slider-segment-width",i.segmentWidth,"%"),S("_old-edge",i.isOldEdge))},inputs:{size:"size",segments:"segments"},attrs:Ot,decls:0,vars:0,template:function(t,i){},styles:['[_nghost-%COMP%]{position:relative;display:block;width:100%;color:var(--tui-primary);cursor:pointer}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}[data-size=s][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-percentage) - var(--tui-slider-fill-ratio) * .5rem);width:.5rem;height:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=s][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[data-size=m][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-percentage) - var(--tui-slider-fill-ratio) * .75rem);width:.75rem;height:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=m][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]:not(._old-edge){-webkit-appearance:none;-moz-appearance:none;appearance:none;height:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]:not(._old-edge)::-webkit-slider-container{border-radius:inherit}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-runnable-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor var(--tui-slider-fill-percentage),transparent var(--tui-slider-fill-percentage));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-runnable-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor var(--tui-slider-fill-percentage),transparent var(--tui-slider-fill-percentage));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.75rem;width:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.5rem;width:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-moz-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.75rem;width:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-moz-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.5rem;width:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)::-moz-range-progress{border-radius:inherit}[_nghost-%COMP%]:not(._old-edge)::-moz-range-progress{height:.125rem;background:currentColor;border-top-right-radius:0;border-bottom-right-radius:0}._old-edge[_nghost-%COMP%]::-ms-thumb{background:currentColor;border-radius:50%}._old-edge[_nghost-%COMP%]::-ms-fill-lower{background:currentColor}._old-edge[_nghost-%COMP%]::-ms-track{background:var(--tui-slider-track-color);border:none}'],changeDetection:0}),te([Ne],e.prototype,"hasKeySteps",null),e})(),ee=(()=>{class e extends U{constructor(t,i,n,r){super(t,i),this.el=n,this.slider=r}get nativeFocusableElement(){return this.computedDisabled?null:this.el.nativeElement}get focused(){return j(this.nativeFocusableElement)}get min(){return this.keySteps[0][1]}get max(){return this.keySteps[this.keySteps.length-1][1]}updateControlValue(){this.value=pt(this.slider.valuePercentage,this.keySteps)}writeValue(t){if(t===null)return;let i=De(t,this.min,this.max);this.slider.value=this.transformToNativeValue(i)}getFallbackValue(){return 0}transformToNativeValue(t){let{min:i,max:n}=this.slider;return ht(t,this.keySteps)*(n-i)/100+i}}return e.\u0275fac=function(t){return new(t||e)(a(w,10),a(P),a(G),a(ae(()=>Z)))},e.\u0275dir=I({type:e,selectors:[["input","tuiSlider","","keySteps",""]],hostVars:4,hostBindings:function(t,i){t&1&&b("input",function(){return i.updateControlValue()})("change",function(){return i.updateControlValue()}),t&2&&(A("disabled",i.computedDisabled),M("aria-valuenow",i.safeCurrentValue)("aria-valuemin",i.min)("aria-valuemax",i.max))},inputs:{keySteps:"keySteps"},features:[F]}),e})();var ft=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[[R]]}),e})();var It=["focusableElement"],vt=e=>({$implicit:e});function zt(e,o){if(e&1&&m(0,"tui-loader",7),e&2){let t=z();s("inheritColor",!0)("showLoader",t.value)("size",t.loaderSize)}}function Dt(e,o){if(e&1&&m(0,"tui-svg",10),e&2){let t=o.polymorpheusOutlet;s("src",t)}}function Et(e,o){if(e&1&&(d(0,"span",8),v(1,Dt,1,1,"tui-svg",9),u()),e&2){let t=z();c(),s("polymorpheusOutlet",t.iconOn)("polymorpheusOutletContext",Y(2,vt,t.size))}}function xt(e,o){if(e&1&&m(0,"tui-loader",7),e&2){let t=z();s("inheritColor",!0)("showLoader",!t.value)("size",t.loaderSize)}}function Lt(e,o){if(e&1&&m(0,"tui-svg",12),e&2){let t=o.polymorpheusOutlet;s("src",t)}}function Ft(e,o){if(e&1&&(d(0,"span",8),v(1,Lt,1,1,"tui-svg",11),u()),e&2){let t=z();c(),s("polymorpheusOutlet",t.iconOff)("polymorpheusOutletContext",Y(2,vt,t.size))}}var At={icons:{toggleOff({$implicit:e}){return e==="m"?"tuiIconToggleOff":"tuiIconToggleOffLarge"},toggleOn({$implicit:e}){return e==="m"?"tuiIconToggleOn":"tuiIconToggleOnLarge"}},appearances:{checked:J.Primary,unchecked:J.Secondary},singleColor:!1,showIcons:!1,size:"m"},Nt=V(At);var _t=(()=>{class e extends U{constructor(t,i,n,r){super(t,i),this.modeDirective=n,this.options=r,this.singleColor=this.options.singleColor,this.showIcons=this.options.showIcons,this.showLoader=!1,this.size=this.options.size}get iconOn(){return this.options.icons.toggleOn}get iconOff(){return this.options.icons.toggleOff}get nativeFocusableElement(){var t,i;return(i=(t=this.focusableElement)===null||t===void 0?void 0:t.nativeElement)!==null&&i!==void 0?i:null}get focused(){return j(this.nativeFocusableElement)}get appearance(){return this.singleColor||this.value?this.options.appearances.checked:this.options.appearances.unchecked}get sizeM(){return this.size==="m"}get loaderSize(){return this.sizeM?"xs":"s"}get hostMode(){var t,i;return(i=(t=this.modeDirective)===null||t===void 0?void 0:t.mode)!==null&&i!==void 0?i:null}onChecked(t){this.value=t}onFocused(t){this.updateFocused(t)}onFocusVisible(t){this.updateFocusVisible(t)}getFallbackValue(){return!1}}return e.\u0275fac=function(t){return new(t||e)(a(w,10),a(P),a(Qe,8),a(Nt))},e.\u0275cmp=y({type:e,selectors:[["tui-toggle"]],viewQuery:function(t,i){if(t&1&&N(It,5),t&2){let n;T(n=k())&&(i.focusableElement=n.first)}},hostVars:4,hostBindings:function(t,i){t&2&&(M("data-size",i.size)("data-mode",i.hostMode),S("_checked",i.value))},inputs:{singleColor:"singleColor",showIcons:"showIcons",showLoader:"showLoader",size:"size"},features:[D([Fe(e),Ae(e)]),F],decls:9,vars:16,consts:[["focusableElement",""],["tuiWrapper","",3,"active","appearance","disabled","focus","hover","invalid","readOnly"],[1,"t-toggle"],["class","t-loader",3,"inheritColor","showLoader","size",4,"ngIf"],["class","t-icon-wrapper",4,"ngIf"],[1,"t-circle"],["automation-id","tui-toggle__checkbox","role","switch","type","checkbox",1,"t-checkbox",3,"tuiCheckedChange","tuiFocusedChange","tuiFocusVisibleChange","disabled","id","tuiFocusable","tuiChecked"],[1,"t-loader",3,"inheritColor","showLoader","size"],[1,"t-icon-wrapper"],["automation-id","tui-toggle__check-icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-toggle__check-icon",1,"t-icon",3,"src"],["automation-id","tui-toggle__cancel-icon","class","t-icon t-icon_off",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-toggle__cancel-icon",1,"t-icon","t-icon_off",3,"src"]],template:function(t,i){if(t&1){let n=ce();d(0,"div",1)(1,"div",2),v(2,zt,1,3,"tui-loader",3)(3,Et,2,4,"span",4),m(4,"div",5),v(5,xt,1,3,"tui-loader",3)(6,Ft,2,4,"span",4),u(),d(7,"input",6,0),he("tuiCheckedChange",function(l){return x(n),pe(i.value,l)||(i.value=l),L(l)}),b("tuiFocusedChange",function(l){return x(n),L(i.onFocused(l))})("tuiFocusVisibleChange",function(l){return x(n),L(i.onFocusVisible(l))}),u()()}t&2&&(s("active",i.pseudoActive)("appearance",i.appearance)("disabled",i.computedDisabled)("focus",i.computedFocusVisible)("hover",i.pseudoHover)("invalid",i.computedInvalid)("readOnly",i.readOnly),c(2),s("ngIf",i.showLoader),c(),s("ngIf",i.showIcons&&!i.showLoader),c(2),s("ngIf",i.showLoader),c(),s("ngIf",i.showIcons&&!i.showLoader),c(),s("disabled",i.disabled)("id",i.id)("tuiFocusable",i.focusable),ge("tuiChecked",i.value),M("aria-checked",i.value))},dependencies:[Xe,Ge,Ye,_e,H,st,je,Be,Re],styles:["[_nghost-%COMP%]{position:relative;display:inline-block;vertical-align:middle;overflow:hidden;border-radius:6.25rem}[data-size=m][_nghost-%COMP%]{width:2rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:3rem;height:1.5rem}.t-checkbox[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;height:100%;width:100%;opacity:0;cursor:pointer}.t-checkbox[_ngcontent-%COMP%]:-webkit-autofill, .t-checkbox[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-checkbox[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}@supports (-webkit-touch-callout: none){.t-checkbox[_ngcontent-%COMP%]:active{font-size:1rem}}._disabled[_nghost-%COMP%]   .t-checkbox[_ngcontent-%COMP%]{pointer-events:none;cursor:default}.t-toggle[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center}[data-size=m][_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{width:3rem;height:1rem;transform:translate(-1rem)}[data-size=l][_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{width:4.5rem;height:1.5rem;transform:translate(-1.5rem)}._checked[_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{transform:translate(0)}.t-circle[_ngcontent-%COMP%]{margin:.125rem 0;flex-shrink:0;border-radius:100%;background-color:var(--tui-base-01)}._disabled[_nghost-%COMP%]   .t-circle_light[_ngcontent-%COMP%]{opacity:.24}[data-size=m][_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{width:.75rem;height:.75rem}[data-size=l][_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{width:1rem;height:1rem}._disabled[_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{background-color:var(--tui-base-01)}.t-loader[_ngcontent-%COMP%]{min-width:auto}[_nghost-%COMP%]:not(._checked)   .t-loader[_ngcontent-%COMP%]{color:var(--tui-base-06)}[_nghost-%COMP%]:not(._checked)._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-base-05)}[_nghost-%COMP%]:not(._checked)[data-mode=onDark]   .t-loader[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}[_nghost-%COMP%]:not(._checked)[data-mode=onDark]._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-clear-inverse-active)}[_nghost-%COMP%]:not(._checked)[data-mode=onLight]   .t-loader[_ngcontent-%COMP%]{color:var(--tui-text-03)}[_nghost-%COMP%]:not(._checked)[data-mode=onLight]._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-clear-active)}[data-size=m][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{width:.75rem;margin:0 .2rem;transform:scale(.75)}[data-size=l][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{width:1rem;margin:0 .25rem}.t-icon-wrapper[_ngcontent-%COMP%]{display:flex}.t-icon[_ngcontent-%COMP%]{opacity:.8}.t-icon_off[_ngcontent-%COMP%]{color:var(--tui-base-06)}._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-base-05)}[data-mode=onDark][_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark]._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-clear-inverse-active)}[data-mode=onLight][_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight]._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-clear-active)}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;transform:scale(.75)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{margin:0 .125rem;width:1.5rem;height:1.5rem}[_nghost-%COMP%]:hover   .t-icon[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0}),e})(),bt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[[R,Ue,He,dt,Ve,lt,qe,$e,Je,B]]}),e})();var Rt=["card"];function Vt(e,o){if(e&1&&(d(0,"span"),O(1),u()),e&2){let t=o.$implicit;c(),me(t)}}var vo=(()=>{let o=class o{get classes(){return"root"}constructor(i,n,r,l,p){this.globalLoaderService=i,this.sakura=n,this.cdr=r,this.theme=l,this.night=p,this.settingsForm=new q({sakura:new g(!0),spoiler:new g(!0),easterEggs:new g(!0),fontMul:new g(100)}),this.exampleItem={name:"Example",imgSrc:"assets/images/common/example.webp",routerLink:"/settings",spoiler:!0},this.controls={},this.labels=["1","2","3"],this.segments=2,this.keySteps=[[0,100],[50,200],[100,300]],this.change$=this.night,this.night$=this.change$.pipe(re(null),K(()=>this.night.value),oe(),ne())}ngOnInit(){this.globalLoaderService.setGlobalLoader(!0)}ngAfterViewInit(){this.sakura.bindSakura("settings"),this.InitData(),this.InitControls(),this.globalLoaderService.setGlobalLoader(!1)}InitData(){this.cdr.detectChanges();let i=document.getElementsByTagName("settings")[0],n=localStorage.getItem(C.sakuraAnim);n==null?this.controls.sakura=new g(!0):this.controls.sakura=new g(n=="true");let r=localStorage.getItem(C.hideSpoilers);if(r==null)this.controls.spoiler=new g(!0),i.style.setProperty("--spoiler-color","gray"),i.style.setProperty("--spoiler-background","gray");else{let _=r=="true";this.controls.spoiler=new g(r=="true"),_&&(i.style.setProperty("--spoiler-color","gray"),i.style.setProperty("--spoiler-background","gray"))}let l=localStorage.getItem(C.easterEggs);l==null?this.controls.easterEggs=new g(!0):this.controls.easterEggs=new g(l=="true");let p=localStorage.getItem(C.fontSizeMul);p==null?(this.controls.fontMul=new g(100),i.style.setProperty("--reading-font-size","1rem")):(this.controls.fontMul=new g(parseFloat(p)*100),i.style.setProperty("--reading-font-size",`${p}rem`))}InitControls(){this.settingsForm=new q(this.controls),this.settingsForm.controls.sakura.valueChanges.subscribe(i=>{i?this.sakura.startSakura():this.sakura.stopSakura(),localStorage.setItem(C.sakuraAnim,`${i}`)}),this.settingsForm.controls.spoiler.valueChanges.subscribe(i=>{let n=document.getElementsByClassName("root")[0];localStorage.setItem(C.hideSpoilers,`${i}`),i?(n.style.setProperty("--spoiler-color","gray"),n.style.setProperty("--spoiler-background","gray"),this.itemCard.ngOnInit()):(n.style.removeProperty("--spoiler-color"),n.style.removeProperty("--spoiler-background"),this.itemCard.toggleSpoiler(new MouseEvent("")))}),this.settingsForm.controls.easterEggs.valueChanges.subscribe(i=>{localStorage.setItem(C.easterEggs,`${i}`)}),this.settingsForm.controls.fontMul.valueChanges.subscribe(i=>{let n=document.getElementsByClassName("root")[0];this.sliderTimeout&&clearTimeout(this.sliderTimeout),this.sliderTimeout=setTimeout(()=>{let r=i/100;localStorage.setItem(C.fontSizeMul,r.toString()),n.style.setProperty("--reading-font-size",`${r}rem`)},0)})}get mode(){return this.night.value?"onDark":null}};o.\u0275fac=function(n){return new(n||o)(a(be),a(ot),a(P),a(tt),a(it))},o.\u0275cmp=y({type:o,selectors:[["settings"]],viewQuery:function(n,r){if(n&1&&N(Rt,5),n&2){let l;T(l=k())&&(r.itemCard=l.first)}},hostVars:3,hostBindings:function(n,r){n&2&&(M("data-mode",r.mode),ue(r.classes))},standalone:!0,features:[fe],decls:41,vars:16,consts:[["card",""],[1,"items-list_body"],[1,"items-list_scroll"],[1,"items-list_container","one-column","center"],[1,"additional-page_island","fit-content"],[3,"formGroup"],[1,"setting-grid"],[1,"setting-row"],["tuiLabel","Sakura animation:",1,"setting-label"],["formControlName","sakura",1,"tui-space_left-1",3,"showIcons","size"],["tuiLabel","Hide spoilers:",1,"setting-label"],["formControlName","spoiler",1,"tui-space_left-1",3,"showIcons","size"],["tuiLabel","Use easter eggs images:",1,"setting-label"],["formControlName","easterEggs",1,"tui-space_left-1",3,"showIcons","size"],["tuiLabel","Reading font size mulitiplier",1,"setting-label"],["tuiSlider","","type","range","formControlName","fontMul",3,"min","max","keySteps","segments"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"additional-page_island","vw80"],[1,"navigation_container"],[1,"navigation_prev"],["icon","tuiIconChevronsLeft","iconAlign","left","tuiLink",""],[1,"navigation_next"],["icon","tuiIconChevronsRight","tuiLink","",1,"spoiler"],[1,"chapter-reading_content-text"],[1,"chapter-reading_line"],[1,"chapter-reading_line","spoiler"],[3,"name","link","imageResource","spoiler"]],template:function(n,r){n&1&&(m(0,"header-controls"),d(1,"div",1)(2,"div",2)(3,"div",3)(4,"tui-island",4)(5,"form",5)(6,"div",6)(7,"div",7),m(8,"label",8)(9,"tui-toggle",9),u(),d(10,"div",7),m(11,"label",10)(12,"tui-toggle",11),u(),d(13,"div",7),m(14,"label",12)(15,"tui-toggle",13),u(),d(16,"div",7),m(17,"label",14),d(18,"div"),m(19,"input",15),d(20,"div",16),v(21,Vt,2,1,"span",17),u()()()()()(),d(22,"tui-island",18)(23,"div",19)(24,"div",20)(25,"a",21),O(26,"Prev example chapter"),u()(),d(27,"div",22)(28,"a",23),O(29,"Next example Spoiler Chapter"),u()()(),m(30,"hr"),d(31,"div",24)(32,"p",25),O(33,"Thats an example text"),u(),d(34,"p",25),O(35,"\u3053\u308C\u306F\u6587\u4F8B\u3067\u3059"),u(),d(36,"p",26),O(37,"Thats a spoiler"),u()()(),m(38,"item-card",27,0),u()()(),m(40,"footer-controls")),n&2&&(c(5),s("formGroup",r.settingsForm),c(4),s("showIcons",!0)("size","l"),c(3),s("showIcons",!0)("size","l"),c(3),s("showIcons",!0)("size","l"),c(4),s("min",100)("max",300)("keySteps",r.keySteps)("segments",r.segments),c(2),s("ngForOf",r.labels),c(17),s("name",r.exampleItem.name)("link",r.exampleItem.routerLink)("imageResource",r.exampleItem.imgSrc)("spoiler",r.exampleItem.spoiler))},dependencies:[we,Te,Ce,ke,ye,Me,Se,Oe,Pe,nt,ve,rt,at,ct,ut,et,Ze,bt,_t,ft,Z,ee],encapsulation:2});let e=o;return e})();export{vo as SettingsComponent};