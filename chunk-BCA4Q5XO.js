import{f as T,g as N,h as H,i as D,k,l as R}from"./chunk-XLIKHLUI.js";import{a as b,b as B,c as L}from"./chunk-QPXJIEBY.js";import{$ as f,Ea as p,Ga as r,Ka as o,La as s,Ma as v,Nb as I,Ta as S,Ua as d,ab as c,cb as u,hb as _,jb as h,ra as g,rb as y,ub as C,va as n}from"./chunk-KN6KQJWB.js";var F=i=>({disabled:i}),P=i=>({spoiler:i});function w(i,t){if(i&1&&(o(0,"p",8),c(1),s()),i&2){let l=d(2);n(),u(" ",l.subName," ")}}function M(i,t){if(i&1&&(o(0,"div",5)(1,"h2",6),c(2),s(),p(3,w,2,1,"p",7),s()),i&2){let l=d();n(2),u(" ",l.name," "),n(),r("ngIf",l.subName)}}var q=(()=>{let t=class t{constructor(){this.name="",this.subName="",this.link="",this.imageResource="",this.spoiler=!1,this.hideName=!1,this.hideTip=!1,this.hiddenBySpoiler=!1,this.intialImageResource="",this.initialName=""}ngOnInit(){this.intialImageResource=this.imageResource,this.initialName=this.name;let a=localStorage.getItem(L.hideSpoilers);this.spoiler&&(a==="true"||!a)&&(this.hiddenBySpoiler=!!this.spoiler,this.imageResource=b.spoilerImg,this.name=B.spoilerPrompt)}toggleSpoiler(a){a.preventDefault(),this.hiddenBySpoiler=!1,this.imageResource=this.intialImageResource,this.name=this.initialName}};t.\u0275fac=function(m){return new(m||t)},t.\u0275cmp=f({type:t,selectors:[["item-card"]],inputs:{name:"name",subName:"subName",link:"link",imageResource:"imageResource",spoiler:"spoiler",hideName:"hideName",hideTip:"hideTip"},standalone:!0,features:[_],decls:5,vars:12,consts:[["tuiHintDirection","top-left","tuiHintAppearance","onDark","tuiHintPointer","",1,"item-card-root",3,"click","routerLink","ngClass","tuiHint","tuiHintShowDelay"],[1,"item-card-container",3,"ngClass"],[1,"item-card-image",3,"src","alt"],[1,"item-card-title"],["class","item-card-title-container",4,"ngIf"],[1,"item-card-title-container"],[1,"item-card-title_name"],["class","item-card-title_subname",4,"ngIf"],[1,"item-card-title_subname"]],template:function(m,e){m&1&&(o(0,"a",0),S("click",function(E){return e.hiddenBySpoiler&&e.toggleSpoiler(E)}),o(1,"div",1),v(2,"img",2),o(3,"div",3),p(4,M,4,2,"div",4),s()()()),m&2&&(r("routerLink",e.hiddenBySpoiler?null:e.link)("ngClass",h(8,F,e.hiddenBySpoiler))("tuiHint",!e.hideTip&&e.name)("tuiHintShowDelay",600),n(),r("ngClass",h(10,P,e.hiddenBySpoiler)),n(),r("src",e.imageResource,g)("alt",!e.hideTip&&e.name),n(2),r("ngIf",(e.name||e.subName)&&!e.hideName))},dependencies:[R,T,k,N,H,D,C,y,I],encapsulation:2});let i=t;return i})();export{q as a};
