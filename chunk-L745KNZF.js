import{a as s}from"./chunk-4XJVTLNE.js";import{a as F}from"./chunk-EQEIZNCC.js";import{a as _,b as w}from"./chunk-RGD2YWW5.js";import{c as I}from"./chunk-EHQK4D3D.js";import"./chunk-G7FI4UIO.js";import"./chunk-LHJDZAOM.js";import"./chunk-Z2UCWZAT.js";import"./chunk-LBLC3GWP.js";import"./chunk-T4ZPX6JM.js";import{Ea as p,Ha as u,Ja as g,Ka as f,La as h,Ma as v,Na as S,Oa as r,Z as d,ib as C,jb as y,kb as l,ta as m,ua as c,xb as k}from"./chunk-7SN5N7H7.js";var H=()=>({"grid-template-columns":"none"}),b=()=>({});function B(i,t){if(i&1&&r(0,"item-card",2),i&2){let a=t.$implicit;p("name",a.name)("hideName",!0)("link",a.routerLink)("imageResource",a.imgSrc)}}var E=(()=>{let t=class t{get classes(){return"root"}constructor(n,e){this.sakura=n,this.apiService=e,this.gameItems=[]}ngOnInit(){window.scroll(0,0),this.sakura.bindSakura("home"),this.apiService.get("gamesListConfig").subscribe(n=>{this.gameItems=n.map(e=>({routerLink:e.link,name:e.name,imgSrc:e.logo}))})}};t.\u0275fac=function(e){return new(e||t)(c(I),c(s))},t.\u0275cmp=d({type:t,selectors:[["home"]],hostVars:2,hostBindings:function(e,o){e&2&&u(o.classes)},standalone:!0,features:[C([s]),y],decls:6,vars:3,consts:[[1,"items-list_body","games"],[1,"items-list_container",2,"--container-width","80vw",3,"ngStyle"],[3,"name","hideName","link","imageResource"]],template:function(e,o){e&1&&(r(0,"header-controls"),v(1,"div",0)(2,"div",1),f(3,B,1,4,"item-card",2,g),S()(),r(5,"footer-controls")),e&2&&(m(2),p("ngStyle",o.gameItems.length==1?l(1,H):l(2,b)),m(),h(o.gameItems))},dependencies:[k,F,_,w],encapsulation:2});let i=t;return i})();export{E as HomeComponent};