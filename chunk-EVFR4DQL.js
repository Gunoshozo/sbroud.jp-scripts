import{a as j}from"./chunk-Y2ZDU5CO.js";import{a as T}from"./chunk-U4XC2GOP.js";import{b as x}from"./chunk-XYLHXVLH.js";import{a as C,b as N}from"./chunk-3VTLMZWP.js";import{d as o}from"./chunk-QPXJIEBY.js";import{$ as g,Ga as h,Ka as S,Kb as b,L as u,La as M,Ma as y,Mb as R,O as r,hb as I,qa as f,r as d,va as v,wa as n,z as l}from"./chunk-KN6KQJWB.js";var $=(()=>{let t=class t{constructor(a,e,i,p){this.route=a,this.router=e,this.apiService=i,this.gameRootService=p,this.text=""}ngOnInit(){let a=[this.route.paramMap];o.mapping||a.push(this.apiService.get("nameMapping").pipe(r(e=>{o.mapping=e}))),this.route.parent?.paramMap.pipe(l(a),u(e=>{let i=e[0].get("gameName")||"",p=e[1].get("mediaPage")||"";return d([this.apiService.get("supplementary",{pathParams:{gameName:i,page:p},requestOptions:{responseType:"text"}}).pipe(r(m=>{this.text=m})),this.apiService.get("gameConfig",{pathParams:{gameName:i}}).pipe(r(m=>{let c=m.find(H=>H.link.includes(this.router.url)),k=`${o.mapping[i]&&o.mapping[i]+" "||""}${c?c.name:"Something idk??"}`;this.gameRootService.pushHeader(k)}))])})).subscribe(()=>{})}};t.\u0275fac=function(e){return new(e||t)(n(b),n(R),n(j),n(T))},t.\u0275cmp=g({type:t,selectors:[["supplementary"]],standalone:!0,features:[I],decls:5,vars:1,consts:[[1,"items-list_body"],[1,"items-list_scroll"],[1,"items-list_container","vw80","one-column"],[1,"additional-page_island"],[1,"additional-page_contents",3,"innerHtml"]],template:function(e,i){e&1&&(S(0,"div",0)(1,"div",1)(2,"div",2)(3,"tui-island",3),y(4,"div",4),M()()()()),e&2&&(v(4),h("innerHtml",i.text,f))},dependencies:[N,C,x],encapsulation:2});let s=t;return s})();export{$ as SupplementaryPageComponent};
