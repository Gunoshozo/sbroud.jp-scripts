import{$ as J,Bc as X,Ca as S,E as A,Ea as E,Ga as T,Ha as K,Ia as $,K as G,Ka as L,L as D,La as B,Lc as d,M as v,Ma as k,Na as Y,O as V,Oa as U,Oc as ct,P as W,Qc as _,Rc as st,S as w,Ua as j,Yc as Z,_ as q,aa as P,ba as C,gb as I,la as M,lb as Q,mb as tt,n as O,oc as rt,qb as et,sd as at,ub as it,v as H,va as x,vc as y,vd as F,wa as a,x as N,xb as nt,xc as lt,xd as b,yb as ot}from"./chunk-KN6KQJWB.js";function mt(e,r){if(e&1&&(L(0,"div",3),k(1,"div",4),B()),e&2){let t=j().ngIf;$("t-bar_has-horizontal",t[1])}}function pt(e,r){if(e&1&&(L(0,"div",5),k(1,"div",6),B()),e&2){let t=j().ngIf;$("t-bar_has-vertical",t[0])}}function ft(e,r){if(e&1&&(Y(0),E(1,mt,2,2,"div",1)(2,pt,2,2,"div",2),U()),e&2){let t=r.ngIf;x(),T("ngIf",t[0]),x(),T("ngIf",t[1])}}function vt(e,r){if(e&1&&(Y(0),E(1,ft,3,2,"ng-container",0),Q(2,"async"),U()),e&2){let t=j();x(),T("ngIf",tt(2,1,t.refresh$))}}var z=24;function gt({clientY:e},{top:r,height:t}){return(e-r)/t}function _t({clientX:e},{left:r,width:t}){return(e-r)/t}var bt=(()=>{class e{constructor(t,i,l,n,o,c){this.container=n,this.doc=o,this.el=c,this.tuiScrollbar="vertical";let{nativeElement:s}=this.el,u=d(s,"mousedown"),h=d(this.doc,"mousemove"),f=d(this.doc,"mouseup"),m=d(this.wrapper,"mousedown");H(m.pipe(O(p=>this.getScrolled(p,.5,.5))),u.pipe(D(p=>{let g=s.getBoundingClientRect(),R=gt(p,g),ut=_t(p,g);return h.pipe(O(ht=>this.getScrolled(ht,R,ut)),v(f))}))).pipe(_(t),v(i)).subscribe(([p,g])=>{this.element.style.scrollBehavior="auto",this.tuiScrollbar==="vertical"?this.element.scrollTop=p:this.element.scrollLeft=g,this.element.style.scrollBehavior=""}),H(l.pipe(W(rt)),ct(this.element)).pipe(_(t),v(i)).subscribe(()=>{this.tuiScrollbar==="vertical"?(s.style.top=`${this.thumb*100}%`,s.style.height=`${this.view*100}%`):(s.style.left=`${this.thumb*100}%`,s.style.width=`${this.view*100}%`)})}get wrapper(){return this.el.nativeElement.parentElement}get scrolled(){let{scrollTop:t,scrollHeight:i,clientHeight:l,scrollLeft:n,scrollWidth:o,clientWidth:c}=this.element;return this.tuiScrollbar==="vertical"?t/(i-l):n/(o-c)}get compensation(){let{clientHeight:t,scrollHeight:i,clientWidth:l,scrollWidth:n}=this.element;return t*t/i>z&&this.tuiScrollbar==="vertical"||l*l/n>z&&this.tuiScrollbar==="horizontal"?0:this.tuiScrollbar==="vertical"?z/t:z/l}get thumb(){let t=this.compensation||this.view;return this.scrolled*(1-t)}get view(){let{clientHeight:t,scrollHeight:i,clientWidth:l,scrollWidth:n}=this.element;return this.tuiScrollbar==="vertical"?Math.ceil(t/i*100)/100:Math.ceil(l/n*100)/100}get element(){return this.container.nativeElement}getScrolled({clientY:t,clientX:i},l,n){let{offsetHeight:o,offsetWidth:c}=this.el.nativeElement,{top:s,left:u,width:h,height:f}=this.wrapper.getBoundingClientRect(),m=this.element.scrollHeight-f,p=this.element.scrollWidth-h,g=(t-s-o*l)/(f-o),R=(i-u-c*n)/(h-c);return[m*g,p*R]}}return e.\u0275fac=function(t){return new(t||e)(a(S),a(b,2),a(Z),a(F),a(et),a(M))},e.\u0275dir=C({type:e,selectors:[["","tuiScrollbar",""]],inputs:{tuiScrollbar:"tuiScrollbar"},features:[I([b])]}),e})(),Nt=(()=>{class e{constructor(t,i,l,n){this.isIOS=t,this.zone=i,this.scrollRef=l,this.animationFrame$=n,this.refresh$=this.animationFrame$.pipe(W(300),O(()=>{let{clientHeight:o,scrollHeight:c,clientWidth:s,scrollWidth:u}=this.scrollRef.nativeElement;return[Math.ceil(o/c*100)<100,Math.ceil(s/u*100)<100]}),G([!1,!1]),A((o,c)=>o[0]===c[0]&&o[1]===c[1]),st(this.zone))}}return e.\u0275fac=function(t){return new(t||e)(a(at),a(S),a(F),a(Z))},e.\u0275cmp=J({type:e,selectors:[["tui-scroll-controls"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","t-bar t-bar_vertical",3,"t-bar_has-horizontal",4,"ngIf"],["class","t-bar t-bar_horizontal",3,"t-bar_has-vertical",4,"ngIf"],[1,"t-bar","t-bar_vertical"],["tuiScrollbar","vertical",1,"t-thumb"],[1,"t-bar","t-bar_horizontal"],["tuiScrollbar","horizontal",1,"t-thumb"]],template:function(t,i){t&1&&E(0,vt,3,3,"ng-container",0),t&2&&T("ngIf",!i.isIOS)},dependencies:[it,bt,nt],styles:["[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0;left:0;z-index:1;min-width:calc(100% - 1px);min-height:calc(100% - 1px);max-width:calc(100% - 1px);max-height:calc(100% - 1px);float:left;-webkit-margin-end:calc(-100% + 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto;animation:tuiFadeIn var(--tui-duration, .3s) ease-in-out}.t-bar_vertical[_ngcontent-%COMP%]{top:0;width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;height:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition:all var(--tui-duration, .3s) ease-in-out;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;width:.75rem;min-height:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;height:.75rem;min-width:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{height:.875rem}"],changeDetection:0}),e})();var Wt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=C({type:e,selectors:[["","tuiScrollRef",""]],features:[I([{provide:F,useExisting:M}])]}),e})(),$t=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P({type:e}),e.\u0275inj=w({imports:[[ot]]}),e})();var Kt=(()=>{class e{constructor({nativeElement:t},i,l){this.mode="scroll",d(t,"wheel",{passive:!1}).pipe(N(()=>this.enabled),_(i),v(l)).subscribe(n=>{this.processEvent(n,!!n.deltaY,n.deltaY?n.deltaY<0:n.deltaX<0)}),d(t,"touchstart",{passive:!0}).pipe(D(({touches:n})=>{let{clientX:o,clientY:c}=n[0],s=0,u=0,h;return d(t,"touchmove",{passive:!1}).pipe(N(()=>this.enabled),V(f=>{let m=f.changedTouches[0];s=o-m.clientX,u=c-m.clientY,o=m.clientX,c=m.clientY,h===void 0&&(h=Math.abs(u)>Math.abs(s)),this.processEvent(f,h,h?u<0:s<0)}))}),_(i),v(l)).subscribe()}get enabled(){return this.mode!=="none"}get overscrollBehavior(){return this.enabled?"contain":null}processEvent(t,i,l){var n;let{target:o,currentTarget:c,cancelable:s}=t;if(!(!s||!lt(o)||((n=o)===null||n===void 0?void 0:n.type)==="range")){if(this.mode==="all"&&(i&&!c.contains(X(o))||!i&&!c.contains(X(o,!1)))){t.preventDefault();return}if(i&&(l&&!y(o,c,!0,!1)||!l&&!y(o,c,!0,!0))){t.preventDefault();return}!i&&(l&&!y(o,c,!1,!1)||!l&&!y(o,c,!1,!0))&&t.preventDefault()}}}return e.\u0275fac=function(t){return new(t||e)(a(M),a(S),a(b,2))},e.\u0275dir=C({type:e,selectors:[["","tuiOverscroll",""]],hostVars:2,hostBindings:function(t,i){t&2&&K("overscroll-behavior",i.overscrollBehavior)},inputs:{mode:[q.None,"tuiOverscroll","mode"]},features:[I([b])]}),e})(),Qt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P({type:e}),e.\u0275inj=w({}),e})();export{Nt as a,Wt as b,$t as c,Kt as d,Qt as e};
