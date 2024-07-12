import{a as rt,b as nt,d as j,e as ot,f as st,g as at,h as lt}from"./chunk-Z3UCU2EC.js";import{a as A}from"./chunk-FH72FGH4.js";import{a as k}from"./chunk-4XJVTLNE.js";import{a as ut}from"./chunk-E43OPYTD.js";import"./chunk-RPMNTHUF.js";import{a as L}from"./chunk-MACJAMH4.js";import{a as re,b as ne}from"./chunk-G7FI4UIO.js";import"./chunk-LHJDZAOM.js";import"./chunk-Z2UCWZAT.js";import{$ as h,$a as Re,Ab as Ye,Ad as ve,Ba as Y,Ca as y,Cb as te,Ea as m,F as xe,Fa as Ee,Ga as q,Hc as R,Ia as ue,Ic as Je,J as f,Ja as H,Jd as tt,Ka as $,La as V,M as Q,Ma as p,N as we,Na as d,Oa as J,P as Me,Q as g,R as B,Ra as ce,S as ae,Sa as F,T as De,Tc as Xe,Va as I,Wa as v,Yc as Ke,Z as T,Za as Le,_,ab as je,bb as de,cb as x,d as W,da as C,db as ke,e as G,ea as b,eb as X,ec as me,f as Ie,fb as K,fc as pe,g as z,gb as Z,ha as le,hb as ee,hc as qe,i as Ce,ib as S,j as U,ja as P,jb as E,ka as Oe,l as O,lb as Ae,lc as fe,m as be,nb as Be,ob as He,p as N,pd as Ze,ra as Ne,rb as $e,s as Te,sa as Pe,sd as et,t as ye,ta as c,tb as Ve,ua as a,v as Se,vb as We,ve as it,wa as Fe,wb as Ge,xb as ze,yb as Ue,ye as ie,zb as Qe,zd as he}from"./chunk-7SN5N7H7.js";var oe=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=h({type:e,selectors:[["","tuiItem",""]]}),e})(),ct=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({}),e})();var dt=(()=>{class e{constructor(i){this.tuiPan=i}}return e.\u0275fac=function(i){return new(i||e)(a(he))},e.\u0275dir=h({type:e,selectors:[["","tuiPan",""]],outputs:{tuiPan:"tuiPan"},features:[S([he])]}),e})(),mt=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({}),e})();var pt=(()=>{class e{constructor(i){this.tuiSwipe=i}}return e.\u0275fac=function(i){return new(i||e)(a(ve))},e.\u0275dir=h({type:e,selectors:[["","tuiSwipe",""]],outputs:{tuiSwipe:"tuiSwipe"},features:[S([ve])]}),e})(),ft=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({}),e})();function Mt(e,n){if(e&1&&(p(0,"div")(1,"a",1)(2,"button",2),x(3),d()()()),e&2){let i=n.$implicit;c(),m("routerLink",i.routerLink),c(2),X(" ",i.name,"")}}var _t=(()=>{let n=class n{set filterStr(t){this.onFilter.next(t)}constructor(t,r){this.globalLoaderService=t,this.restApi=r,this.filteredItems=[],this.onLoad=new z,this.onFilter=new G,this.initialItems=[],this.prevSearchString=""}ngOnInit(){this.subscribeOnChanges(),this.restApi.get("nonRoutedGameChapterConfig",{pathParams:{gameName:this.gameName}}).pipe(f(t=>{let r=t.total,o=[];this.initialItems=new Array(r);for(let s=0;s<r;s++){this.initialItems[s]={};let l,u;t.chapterOrder?(l=t.chapterOrder[s],u=A.resolveChapterName(t,s)):(l=`${s+1}`,u=A.resolveChapterName(t,s+1)),this.initialItems[s].name=u,this.initialItems[s].routerLink=`../chapters/${l}`,this.globalLoaderService.setGlobalLoader(!1),o.push(this.restApi.get("nonRoutedChapterFile",{pathParams:{gameName:this.gameName,file:`${l}.txt`},requestOptions:{headers:new te({Accept:"application/json;charset=utf-8"}),responseType:"text"}}))}return this.filteredItems=this.initialItems,N(o)})).subscribe(t=>{t.forEach((r,o)=>{this.initialItems[o].text=r}),this.filteredItems=this.initialItems,this.onLoad.next(),this.onLoad.complete()})}ngOnDestroy(){this.onFilter.complete()}subscribeOnChanges(){this.onFilter.pipe(f(t=>[t]),f(t=>this.onLoad.pipe(f(()=>U(t))))).subscribe(t=>{this.filterChapters(t),this.globalLoaderService.setGlobalLoader(!1)})}filterChapters(t){if(t?.length>0){let r=[];t.includes(this.prevSearchString)?r=this.filteredItems:r=this.initialItems,this.filteredItems=r?.filter(o=>o.text.includes(t)),this.prevSearchString=t}else this.filteredItems.length!=this.initialItems.length&&(this.filteredItems=this.initialItems)}};n.\u0275fac=function(r){return new(r||n)(a(L),a(k))},n.\u0275cmp=T({type:n,selectors:[["chapters-items"]],inputs:{gameName:"gameName",filterStr:"filterStr"},standalone:!0,features:[E],decls:3,vars:0,consts:[[1,"search-items-grid"],[3,"routerLink"],["appearance","custom","tuiButton","","type","button",1,"items-list_item-button"]],template:function(r,o){r&1&&(p(0,"div",0),$(1,Mt,4,2,"div",null,H),d()),r&2&&(c(),V(o.filteredItems))},dependencies:[j,ne,re,ie],encapsulation:2});let e=n;return e})();var Dt=new B("Root element for IntersectionObserver"),Ct="0px 0px 0px 0px",mi=new B("rootMargin for IntersectionObserver",{providedIn:"root",factory:()=>Ct});function Ot(e){return e||Ct}var bt=0,pi=new B("threshold for IntersectionObserver",{providedIn:"root",factory:()=>bt});function Nt(e){return e?.split(",").map(parseFloat)||bt}var Pt=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){this.root=null,this.rootMargin="",this.thresholds=[]}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}},ge=(()=>{class e extends Pt{constructor(i,t,r){super(o=>{this.callbacks.forEach((s,l)=>{let u=o.filter(({target:M})=>M===l);return u.length&&s(u,this)})},{root:i&&i.nativeElement,rootMargin:Ot(t),threshold:Nt(r)}),this.callbacks=new Map}observe(i,t=()=>{}){super.observe(i),this.callbacks.set(i,t)}unobserve(i){super.unobserve(i),this.callbacks.delete(i)}ngOnDestroy(){this.disconnect()}}return e.\u0275fac=function(i){return new(i||e)(a(Dt,8),le("waIntersectionRootMargin"),le("waIntersectionThreshold"))},e.\u0275dir=h({type:e,selectors:[["","waIntersectionObserver",""]],exportAs:["IntersectionObserver"],features:[Y]}),e})(),It=(()=>{class e extends W{constructor({nativeElement:i},t){return super(r=>(t.observe(i,o=>{r.next(o)}),()=>{t.unobserve(i)})),this.pipe(xe())}}return e.\u0275fac=function(i){return new(i||e)(ae(P),ae(ge))},e.\u0275prov=Me({token:e,factory:e.\u0275fac}),e})(),Tt=(()=>{class e{constructor(i){this.waIntersectionObservee=i}}return e.\u0275fac=function(i){return new(i||e)(a(It))},e.\u0275dir=h({type:e,selectors:[["","waIntersectionObservee",""]],outputs:{waIntersectionObservee:"waIntersectionObservee"},features:[S([It])]}),e})();var yt=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({}),e})(),fi=new B("Intersection Observer API support",{providedIn:"root",factory:()=>!!De(Xe).IntersectionObserver});function Lt(e,n){e&1&&ce(0)}function Rt(e,n){if(e&1){let i=F();p(0,"fieldset",5),I("waIntersectionObservee",function(r){let o=C(i).index,s=v();return b(s.onIntersection(r[0],o))}),ce(1,6),d()}if(e&2){let i=n.$implicit,t=n.index,r=v();m("disabled",r.isDisabled(t))("ngStyle",r.getStyle(r.itemsCount)),c(),m("ngTemplateOutlet",i)}}var jt=(()=>{class e{constructor(i){this.el=i,this.tuiCarouselScroll=R(this.el.nativeElement,"wheel").pipe(Se(({deltaX:t})=>Math.abs(t)>20),we(500),O(({deltaX:t})=>Math.sign(t)),Q(()=>{this.el.nativeElement.scrollLeft=10}))}}return e.\u0275fac=function(i){return new(i||e)(a(P))},e.\u0275dir=h({type:e,selectors:[["","tuiCarouselScroll",""]],outputs:{tuiCarouselScroll:"tuiCarouselScroll"}}),e})(),_e=(()=>{class e extends W{constructor(i,t){super(r=>this.output$.subscribe(r)),this.el=i,this.visible$=t,this.duration$=new Ie(0),this.running$=ye(R(this.el.nativeElement,"mouseenter").pipe(O(me)),R(this.el.nativeElement,"touchstart").pipe(O(me)),R(this.el.nativeElement,"touchend").pipe(O(pe)),R(this.el.nativeElement,"mouseleave").pipe(O(pe)),this.visible$),this.output$=be([this.duration$,this.running$]).pipe(Je(([r])=>Te(r),r=>r.every(Boolean)))}set duration(i){this.duration$.next(i)}set index(i){this.duration$.next(this.duration$.value)}}return e.\u0275fac=function(i){return new(i||e)(a(P),a(Ke))},e.\u0275dir=h({type:e,selectors:[["tui-carousel"]],inputs:{duration:"duration",index:"index"},features:[Y]}),e})(),kt=(()=>{class e{constructor(i){this.tuiCarouselAutoscroll=i}}return e.\u0275fac=function(i){return new(i||e)(a(_e))},e.\u0275dir=h({type:e,selectors:[["","tuiCarouselAutoscroll",""]],outputs:{tuiCarouselAutoscroll:"tuiCarouselAutoscroll"}}),e})(),St=(()=>{class e{constructor(i,t,r){this.cdr=i,this.el=t,this.isMobile=r,this.translate=0,this.draggable=!1,this.itemsCount=1,this.index=0,this.indexChange=new Oe,this.items=qe,this.transitioned=!0}get transform(){return`translateX(${100*(this.transitioned?this.computedTranslate:this.translate)}%)`}onTransitioned(i){this.transitioned=i,i||(this.translate=this.computedTranslate)}getStyle(i){let t=`${100/i}%`;return{flexBasis:t,minWidth:t,maxWidth:t}}next(){this.items&&this.index===this.items.length-this.itemsCount||this.updateIndex(this.index+1)}prev(){this.updateIndex(this.index-1)}isDisabled(i){return i<this.index||i>this.index+this.itemsCount}onIntersection({intersectionRatio:i},t){i&&i>=.5&&!this.transitioned&&this.updateIndex(this.index<t?t-this.itemsCount+1:t)}onScroll(i){this.isMobile||(i>0?this.next():this.prev())}onPan(i){if(!this.computedDraggable)return;let{clientWidth:t}=this.el.nativeElement,r=1-this.items.length/this.itemsCount;this.translate=fe(i/t+this.translate,r,0)}onSwipe(i){i==="left"?this.next():i==="right"&&this.prev()}onAutoscroll(){this.updateIndex(this.index===this.items.length-1?0:this.index+1)}get computedTranslate(){return-this.index/this.itemsCount}get computedDraggable(){return this.isMobile||this.draggable}updateIndex(i){this.index=fe(i,0,this.items.length-1),this.indexChange.emit(this.index),this.cdr.markForCheck()}}return e.\u0275fac=function(i){return new(i||e)(a($e),a(P),a(Ze))},e.\u0275cmp=T({type:e,selectors:[["tui-carousel"]],contentQueries:function(i,t,r){if(i&1&&Le(r,oe,4,Fe),i&2){let o;Re(o=je())&&(t.items=o)}},hostVars:4,hostBindings:function(i,t){i&1&&I("touchstart",function(){return t.onTransitioned(!1)})("touchend",function(){return t.onTransitioned(!0)})("mousedown",function(){return t.onTransitioned(!1)})("mouseup.silent",function(){return t.onTransitioned(!0)},!1,Pe),i&2&&q("_draggable",t.draggable)("_transitioned",t.transitioned)},inputs:{draggable:"draggable",itemsCount:"itemsCount",index:"index"},outputs:{indexChange:"indexChange"},features:[S([{provide:et,useValue:{timeout:200,threshold:30}}])],decls:6,vars:6,consts:[[4,"ngIf"],[1,"t-scroller",3,"tuiCarouselScroll"],["waIntersectionObserver","","waIntersectionThreshold","0.5",1,"t-wrapper"],[1,"t-items",3,"tuiCarouselAutoscroll","tuiPan","tuiSwipe"],["class","t-item",3,"disabled","ngStyle","waIntersectionObservee",4,"ngFor","ngForOf"],[1,"t-item",3,"waIntersectionObservee","disabled","ngStyle"],[3,"ngTemplateOutlet"]],template:function(i,t){i&1&&(y(0,Lt,1,0,"ng-container",0),Be(1,"async"),p(2,"div",1),I("tuiCarouselScroll",function(o){return t.onScroll(o)}),p(3,"div",2)(4,"div",3),I("tuiCarouselAutoscroll",function(){return t.onAutoscroll()})("tuiPan",function(o){return t.onPan(o[0])})("tuiSwipe",function(o){return t.onSwipe(o.direction)}),y(5,Rt,2,3,"fieldset",4),d()()()),i&2&&(m("ngIf",He(1,4,t.items.changes)),c(4),Ee("transform",t.transform),c(),m("ngForOf",t.items))},dependencies:[Ge,jt,ge,kt,dt,pt,We,ze,Tt,Ue,Qe],styles:['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden}._draggable[_nghost-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}._draggable[_nghost-%COMP%]:hover{cursor:grab}._draggable[_nghost-%COMP%]:active{cursor:grabbing}.t-items[_ngcontent-%COMP%]{display:flex}._transitioned[_nghost-%COMP%]   .t-items[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-width:100%;max-width:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:0;right:0;min-width:100%;overflow:hidden}.t-scroller[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none;touch-action:none}.t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar, .t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-scroller[_ngcontent-%COMP%]:before, .t-scroller[_ngcontent-%COMP%]:after{content:"";display:block;min-width:1rem}'],changeDetection:0}),Ce([tt],e.prototype,"getStyle",null),e})();var xt=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({imports:[[Ye,yt,mt,ft,ct]]}),e})();var At=e=>({spoiler:e});function Bt(e,n){if(e&1&&(p(0,"div",10)(1,"a",11)(2,"button",12),x(3),d()()()),e&2){let i=n.$implicit;c(),m("routerLink",i.routerLink),c(2),X(" ",i.name," ")}}function Ht(e,n){if(e&1&&(p(0,"div",8)(1,"h2",9),x(2),d(),$(3,Bt,4,2,"div",10,H),d()),e&2){let i=v(),t=i.$implicit,r=i.$index,o=v();q("item_active",r===o._index+1),c(),m("ngClass",Ae(4,At,t.spoiler)),c(),ke(t.name),c(),V(t.items)}}function $t(e,n){e&1&&y(0,Ht,5,6,"div",7)}var wt=(()=>{let n=class n{set filterStr(t){this.onFilter.next(t)}constructor(t,r){this.globalLoaderService=t,this.restApi=r,this._index=0,this.onLoad=new z,this.onFilter=new G,this.carouselCount=Math.ceil(window.innerWidth/500),this.prevSearchString="",this.initialItems=[],this.filteredItems=[]}ngOnInit(){this.subscribeOnChanges(),this.restApi.get("gameRouteConfig",{pathParams:{gameName:this.gameName}}).pipe(f(t=>{this.initialItems=t.items.map(o=>({name:o.name,spoiler:o.spoiler,items:[]}));let r=t.items.map(o=>this.restApi.get("routedGameChapterConfig",{pathParams:{gameName:this.gameName,routeName:o.routerLink}}));return N(r).pipe(f(o=>{this.buildInitialItems(o,t),this.globalLoaderService.setGlobalLoader(!1);let s=this.getOrderedChapterTexts(o,t);return N(s)}))})).subscribe(t=>{this.initialItems.forEach((r,o)=>{r.items.forEach((s,l)=>{s.text=t[o][l]})}),this.filteredItems=this.initialItems,this.onLoad.next(),this.onLoad.complete()})}ngOnDestroy(){this.onFilter.complete()}scrollToTop(){window.scroll({top:0,behavior:"smooth"})}getOrderedChapterTexts(t,r){return r.items.map((s,l)=>[s,t[l]]).map(s=>{let l=s[1],u=s[0].routerLink;return N(Array.from({length:l.total}).map((M,D)=>{let se="";return l.chapterOrder?se=l.chapterOrder[D]:se=`${D+1}`,this.restApi.get("routedChapterFile",{pathParams:{gameName:this.gameName,routeName:u,file:`${se}.txt`},requestOptions:{headers:new te({Accept:"application/json;charset=utf-8"}),responseType:"text"}})}))})}onResize(){let t=Math.ceil(window.innerWidth/500),r=Math.max(Math.min(t,this.filteredItems?.length),1);r!=this.carouselCount&&(this._index=0),this.carouselCount=r}subscribeOnChanges(){this.onFilter.pipe(f(t=>[t]),f(t=>this.onLoad.pipe(f(()=>U(t))))).subscribe(t=>{this.filterChapters(t),this.globalLoaderService.setGlobalLoader(!1)})}filterChapters(t){if(t.length>0){let r=[];t.includes(this.prevSearchString)?r=this.filteredItems:r=this.initialItems,this.filteredItems=r.map(o=>({items:o.items.filter(l=>l.text.includes(t)),name:o.name,spoiler:o.spoiler})).filter(o=>o.items.length>0),this.prevSearchString=t,this.onResize(),this._index=0}else this.filteredItems?.length!=this.initialItems?.length&&(this.filteredItems=this.initialItems,this.onResize(),this._index=0)}buildInitialItems(t,r){t.forEach((s,l)=>{for(let u=0;u<s.total;u++){let M,D;s.chapterOrder?(M=s.chapterOrder[u],D=A.resolveChapterName(s,u)):(M=`${u+1}`,D=A.resolveChapterName(s,u+1)),this.initialItems[l].items.push({name:D,text:"",routerLink:`../routes/${r.items[l].routerLink}/${M}`})}}),this.filteredItems=this.initialItems;let o=Math.ceil(window.innerWidth/500);this.carouselCount=Math.max(Math.min(o,this.filteredItems?.length),1)}};n.\u0275fac=function(r){return new(r||n)(a(L),a(k))},n.\u0275cmp=T({type:n,selectors:[["routed-items"]],hostBindings:function(r,o){r&1&&I("resize",function(l){return o.onResize(l)},!1,Ne)},inputs:{gameName:"gameName",filterStr:"filterStr"},standalone:!0,features:[E],decls:8,vars:5,consts:[["carousel",""],[1,"search-routes"],["icon","tuiIconChevronLeftLarge","title","Previous","tuiIconButton","","appearance","custom","type","button",1,"search_navigation-button","left",3,"click","disabled"],[3,"indexChange","draggable","itemsCount","index"],["alt","","draggable","false",1,"search-route-item","item",3,"item_active"],["icon","tuiIconChevronRightLarge","title","Next","tuiIconButton","","appearance","custom","type","button",1,"search_navigation-button","right",3,"click","disabled"],["icon","tuiIconChevronUpLarge","title","To Top","tuiIconButton","","appearance","custom","type","button",1,"search_navigation-button","right","bottom",3,"click"],["class","search-route-item item","alt","","draggable","false",3,"item_active",4,"tuiItem"],["alt","","draggable","false",1,"search-route-item","item"],[3,"ngClass"],[1,"search-route-chapters"],[3,"routerLink"],["appearance","custom","tuiButton","","type","button",1,"items-list_item-button"]],template:function(r,o){if(r&1){let s=F();p(0,"div",1)(1,"button",2),I("click",function(){C(s);let u=de(3);return b(u.prev())}),d(),p(2,"tui-carousel",3,0),ee("indexChange",function(u){return C(s),Z(o._index,u)||(o._index=u),b(u)}),$(4,$t,1,0,"div",4,H),d(),p(6,"button",5),I("click",function(){C(s);let u=de(3);return b(u.next())}),d(),p(7,"button",6),I("click",function(){return C(s),b(o.scrollToTop())}),d()()}r&2&&(c(),m("disabled",o._index==0),c(),m("draggable",!0)("itemsCount",o.carouselCount),K("index",o._index),c(2),V(o.filteredItems),c(2),m("disabled",o.filteredItems.length-o.carouselCount==o._index))},dependencies:[Ve,ie,xt,St,_e,oe,j,ne,re],encapsulation:2});let e=n;return e})();function Vt(e,n){if(e&1&&J(0,"routed-items",5),e&2){let i=v(2);m("gameName",i.gameName)("filterStr",i.filterString)}}function Wt(e,n){if(e&1&&J(0,"chapters-items",5),e&2){let i=v(2);m("gameName",i.gameName)("filterStr",i.filterString)}}function Gt(e,n){if(e&1){let i=F();p(0,"div",1)(1,"div",2)(2,"tui-primitive-textfield",3),ee("valueChange",function(r){C(i);let o=v();return Z(o.filterString,r)||(o.filterString=r),b(r)}),x(3," Search for text in scenarios "),J(4,"input",4),d(),y(5,Vt,1,2,"routed-items",5)(6,Wt,1,2),d()()}if(e&2){let i=v();c(2),m("tuiTextfieldIcon","tuiIconSearchLarge")("tuiTextfieldCleaner",!0),K("value",i.filterString),c(3),ue(5,i._routed?5:6)}}var Xi=(()=>{let n=class n{get filterString(){return this.filterStr}set filterString(t){this.filterTimeout&&clearTimeout(this.filterTimeout),this.filterTimeout=setTimeout(()=>{this.filterStr=t},600)}constructor(t,r,o,s){this.route=t,this.restApi=r,this.gameRootService=o,this.globalLoader=s,this._routed=!1,this.filterStr=""}ngOnInit(){window.scroll(0,0),this.gameRootService.pushHeader("Search"),this.route.parent?.paramMap.pipe(Q(()=>{this.loaded=!1,this.globalLoader.setGlobalLoader(!0)}),f(t=>(this.gameName=t.get("gameName")||"",this.restApi.get("searchConfig",{pathParams:{gameName:this.gameName}})))).subscribe(t=>{this._routed=t.routed,this.loaded=!0})}};n.\u0275fac=function(r){return new(r||n)(a(it),a(k),a(ut),a(L))},n.\u0275cmp=T({type:n,selectors:[["app-search"]],standalone:!0,features:[E],decls:2,vars:1,consts:[[1,"search_root"],[1,"search_body"],[1,"search-items"],[1,"items-list_filter-field",3,"valueChange","tuiTextfieldIcon","tuiTextfieldCleaner","value"],["tuiTextfield",""],[3,"gameName","filterStr"]],template:function(r,o){r&1&&(p(0,"div",0),y(1,Gt,7,4,"div",1),d()),r&2&&(c(),ue(1,o.loaded?1:-1))},dependencies:[_t,wt,lt,ot,st,at,j,rt,nt],encapsulation:2});let e=n;return e})();export{Xi as SearchComponent};