import{a as T}from"./chunk-4XJVTLNE.js";import{a as N}from"./chunk-E43OPYTD.js";import{b as R}from"./chunk-LBLC3GWP.js";import{a as w,b as C}from"./chunk-IVLG6K77.js";import{d as o}from"./chunk-T4ZPX6JM.js";import{Ea as h,J as u,M as r,Ma as S,Na as M,Oa as y,Z as g,jb as I,oa as v,p as d,ta as f,ua as n,ve as b,x as l,xe as x}from"./chunk-7SN5N7H7.js";var $=(()=>{let t=class t{constructor(a,e,i,p){this.route=a,this.router=e,this.apiService=i,this.gameRootService=p,this.text=""}ngOnInit(){window.scroll(0,0);let a=[this.route.paramMap];o.mapping||a.push(this.apiService.get("nameMapping").pipe(r(e=>{o.mapping=e}))),this.route.parent?.paramMap.pipe(l(a),u(e=>{let i=e[0].get("gameName")||"",p=e[1].get("mediaPage")||"";return d([this.apiService.get("supplementary",{pathParams:{gameName:i,page:p},requestOptions:{responseType:"text"}}).pipe(r(m=>{this.text=m})),this.apiService.get("gameConfig",{pathParams:{gameName:i}}).pipe(r(m=>{let c=m.find(H=>H.link.includes(this.router.url)),j=`${o.mapping[i]&&o.mapping[i]+" "||""}${c?c.name:""}`;this.gameRootService.pushHeader(j)}))])})).subscribe({next:()=>{},error:()=>{this.router.navigate(["/error"])}})}};t.\u0275fac=function(e){return new(e||t)(n(b),n(x),n(T),n(N))},t.\u0275cmp=g({type:t,selectors:[["supplementary"]],standalone:!0,features:[I],decls:5,vars:1,consts:[[1,"items-list_body"],[1,"items-list_scroll"],[1,"items-list_container","vw80","one-column"],[1,"additional-page_island"],[1,"additional-page_contents",3,"innerHtml"]],template:function(e,i){e&1&&(S(0,"div",0)(1,"div",1)(2,"div",2)(3,"tui-island",3),y(4,"div",4),M()()()()),e&2&&(f(4),h("innerHtml",i.text,v))},dependencies:[C,w,R],encapsulation:2});let s=t;return s})();export{$ as SupplementaryPageComponent};