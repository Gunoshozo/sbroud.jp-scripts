import{j as Y,k as G,l as J,m as K}from"./chunk-WNPWYFNT.js";import{$ as M,Bb as j,Cb as A,Da as v,Dd as U,E as _,Ea as r,Fa as z,Ga as o,Hc as E,Ia as T,K as f,Ke as $,Le as W,Me as V,Oa as u,Pa as s,Qa as d,S as C,Ta as B,Tc as k,Uc as H,Va as I,Xa as x,Ya as c,Za as y,_a as w,aa as O,ie as R,j as l,kb as b,la as P,n as m,od as N,pb as D,qb as F,qc as L,va as a,vd as q,wa as p,yb as S}from"./chunk-VIQ542NQ.js";var Q=["tuiButton",""],X=["*"];function Z(t,i){t&1&&B(0)}function tt(t,i){if(t&1&&d(0,"tui-svg",8),t&2){let e=i.polymorpheusOutlet;o("src",e)}}function et(t,i){if(t&1&&(u(0,"span",6),r(1,tt,1,1,"tui-svg",7),s()),t&2){let e=c();a(),o("polymorpheusOutlet",e.icon)}}function nt(t,i){if(t&1&&d(0,"tui-svg",8),t&2){let e=i.polymorpheusOutlet;o("src",e)}}function it(t,i){if(t&1&&(u(0,"span",9),r(1,nt,1,1,"tui-svg",7),s()),t&2){let e=c();a(),o("polymorpheusOutlet",e.iconRight)}}function ot(t,i){if(t&1&&d(0,"tui-loader",10),t&2){let e=c();o("inheritColor",!0)("size",e.loaderSize)}}var at={size:"l",shape:null,appearance:R.Primary},rt=L(at);var St=(()=>{class t extends U{constructor(e,n,h){var g;super(),this.mode=e,this.el=n,this.options=h,this.mode$=((g=this.mode)===null||g===void 0?void 0:g.change$)||l,this.appearance=null,this.disabled=!1,this.shape=this.options.shape,this.showLoader=!1,this.size=this.options.size,this.appearance$=this.mode$.pipe(f(null),m(()=>this.computedAppearance),_())}get nativeFocusableElement(){return this.nativeDisabled?null:this.el.nativeElement}get focused(){return!this.showLoader&&E(this.el.nativeElement)}get loaderSize(){return this.size==="l"||this.size==="xl"?"m":"s"}get computedAppearance(){var e;return(e=this.appearance)!==null&&e!==void 0?e:this.options.appearance||""}get nativeDisabled(){return this.computedDisabled||this.showLoader?"":null}get tabIndex(){return this.focusable?0:-1}onFocused(e){this.updateFocused(e)}}return t.\u0275fac=function(e){return new(e||t)(p(V,8),p(P),p(rt))},t.\u0275cmp=M({type:t,selectors:[["button","tuiButton",""],["button","tuiIconButton",""],["a","tuiButton",""],["a","tuiIconButton",""]],hostVars:7,hostBindings:function(e,n){e&1&&x("focusin",function(){return n.onFocused(!0)})("focusout",function(){return n.onFocused(!1)}),e&2&&(I("tabIndex",n.tabIndex),z("data-shape",n.shape)("data-size",n.size)("data-appearance",n.computedAppearance)("disabled",n.nativeDisabled),T("_loading",n.showLoader))},inputs:{appearance:"appearance",disabled:"disabled",icon:"icon",iconRight:"iconRight",shape:"shape",showLoader:"showLoader",size:"size"},features:[b([N(t),q]),v],attrs:Q,ngContentSelectors:X,decls:8,vars:10,consts:[[4,"ngIf"],["tuiWrapper","",1,"t-wrapper",3,"active","appearance","disabled","hover"],[1,"t-content"],["class","t-left",4,"ngIf"],["class","t-right",4,"ngIf"],["class","t-loader",3,"inheritColor","size",4,"ngIf"],[1,"t-left"],["class","t-icon",3,"src",4,"polymorpheusOutlet"],[1,"t-icon",3,"src"],[1,"t-right"],[1,"t-loader",3,"inheritColor","size"]],template:function(e,n){e&1&&(y(),r(0,Z,1,0,"ng-container",0),D(1,"async"),u(2,"div",1)(3,"span",2),r(4,et,2,1,"span",3),w(5),r(6,it,2,1,"span",4),s(),r(7,ot,1,2,"tui-loader",5),s()),e&2&&(o("ngIf",F(1,8,n.appearance$)),a(2),o("active",n.pseudoActive)("appearance",n.computedAppearance)("disabled",n.computedDisabled)("hover",n.pseudoHover),a(2),o("ngIf",n.icon),a(2),o("ngIf",n.iconRight),a(),o("ngIf",n.showLoader))},dependencies:[$,J,S,Y,k,j],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:inline-block;flex-shrink:0;vertical-align:top;border-radius:var(--tui-radius-m);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;color:inherit}[data-shape=rounded][_nghost-%COMP%]{border-radius:6.25rem}[data-size=xs][_nghost-%COMP%]{height:var(--tui-height-xs);font-weight:normal}[data-size=xs][data-shape=square][_nghost-%COMP%], [data-size=xs][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-xs)}[data-size=s][_nghost-%COMP%]{height:var(--tui-height-s);font-weight:normal}[data-size=s][data-shape=square][_nghost-%COMP%], [data-size=s][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{height:var(--tui-height-m);font:var(--tui-font-text-m);font-weight:bold}[data-size=m][data-shape=square][_nghost-%COMP%], [data-size=m][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold}[data-size=l][data-shape=square][_nghost-%COMP%], [data-size=l][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-l)}[data-size=xl][_nghost-%COMP%]{height:3.75rem;font:var(--tui-font-text-m);font-weight:bold}[data-size=xl][data-shape=square][_nghost-%COMP%], [data-size=xl][tuiIconButton][_nghost-%COMP%]{width:3.75rem}[tuiIconButton][_nghost-%COMP%]{font-size:0!important}[tuiIconButton][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0!important}.t-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default}.t-left[_ngcontent-%COMP%]{margin-right:.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.375rem}[data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.25rem}.t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .25rem}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .375rem}[data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.125rem 0 .25rem}.t-icon[_ngcontent-%COMP%]{display:flex;max-width:100%;max-height:100%;align-items:center;justify-content:center}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1rem;height:1rem}[tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [tuiIconButton][data-appearance=link][data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][data-appearance=link][data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.t-wrapper[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;isolation:isolate}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .375rem)}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-size=s][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .75rem)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 1.5rem)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.25rem)}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.5rem)}[data-shape=square][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center;text-align:center}._loading[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{opacity:0}"],changeDetection:0}),t})(),jt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=O({type:t}),t.\u0275inj=C({imports:[[A,H,G,W,K]]}),t})();export{St as a,jt as b};