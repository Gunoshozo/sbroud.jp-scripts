import{a as s}from"./chunk-KGA3LBVL.js";import{a as F}from"./chunk-BCA4Q5XO.js";import{a as I,b as _}from"./chunk-TQ3D3G5F.js";import{c as y}from"./chunk-BZ35IFDC.js";import"./chunk-UFRAF5IV.js";import"./chunk-XLIKHLUI.js";import"./chunk-JJAHF3FC.js";import"./chunk-XYLHXVLH.js";import"./chunk-QPXJIEBY.js";import{$ as d,Ea as u,Ga as r,Ja as g,Ka as f,La as h,Ma as m,gb as v,hb as S,ib as l,tb as C,va as c,vb as k,wa as p}from"./chunk-KN6KQJWB.js";var H=()=>({"grid-template-columns":"none"}),N=()=>({});function R(i,t){if(i&1&&m(0,"item-card",3),i&2){let a=t.$implicit;r("name",a.name)("hideName",!0)("link",a.routerLink)("imageResource",a.imgSrc)}}var D=(()=>{let t=class t{get classes(){return"root"}constructor(n,e){this.sakura=n,this.apiService=e,this.gameItems=[]}ngOnInit(){this.sakura.bindSakura("home"),this.apiService.get("gamesListConfig").subscribe(n=>{this.gameItems=n.map(e=>({routerLink:e.link,name:e.name,imgSrc:e.logo}))})}};t.\u0275fac=function(e){return new(e||t)(p(y),p(s))},t.\u0275cmp=d({type:t,selectors:[["home"]],hostVars:2,hostBindings:function(e,o){e&2&&g(o.classes)},standalone:!0,features:[v([s]),S],decls:5,vars:4,consts:[[1,"items-list_body","games"],[1,"items-list_container","w",2,"--max-width","70vw",3,"ngStyle"],[3,"name","hideName","link","imageResource",4,"ngFor","ngForOf"],[3,"name","hideName","link","imageResource"]],template:function(e,o){e&1&&(m(0,"header-controls"),f(1,"div",0)(2,"div",1),u(3,R,1,4,"item-card",2),h()(),m(4,"footer-controls")),e&2&&(c(2),r("ngStyle",o.gameItems.length==1?l(2,H):l(3,N)),c(),r("ngForOf",o.gameItems))},dependencies:[C,k,F,I,_],encapsulation:2});let i=t;return i})();export{D as HomeComponent};
