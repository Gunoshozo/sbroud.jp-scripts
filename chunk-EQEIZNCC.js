import{e as I,f as w,g as D,h as R,j as k,k as _}from"./chunk-LHJDZAOM.js";import{a as p,b as N,c as B}from"./chunk-T4ZPX6JM.js";import{Ca as h,Ea as o,Ia as u,Ma as a,Na as l,Oa as g,Va as f,Wa as v,Z as c,cb as S,eb as y,jb as C,lb as m,pa as d,ta as s,tb as T,ye as H}from"./chunk-7SN5N7H7.js";var L=i=>({disabled:i}),P=i=>({spoiler:i});function E(i,n){if(i&1&&(a(0,"div",4)(1,"h2",5),S(2),l()()),i&2){let b=v();s(2),y(" ",b.name," ")}}var j=(()=>{let n=class n{constructor(){this.name="",this.link="",this.imageResource="",this.spoiler=!1,this.hideName=!1,this.hideTip=!1,this.image="",this.srcset="",this.hiddenBySpoiler=!1,this.intialImageResource="",this.initialName=""}ngOnInit(){this.intialImageResource=this.imageResource,this.initialName=this.name;let t=localStorage.getItem(B.hideSpoilers);this.spoiler&&(t==="true"||!t)&&(this.hiddenBySpoiler=!!this.spoiler,this.imageResource=p.spoilerImg,this.name=N.spoilerPrompt),this.setImg()}toggleSpoiler(t){t.preventDefault(),this.hiddenBySpoiler=!1,this.imageResource=this.intialImageResource,this.name=this.initialName,this.setImg()}setImg(){if(this.imageResource.includes("-1000w.webp")){let t="";p.imgSizes.forEach(r=>{t+=this.imageResource.replace("-1000w.webp",`-${r}w.webp`)+` ${r}w, `}),this.srcset=t}this.image=this.imageResource}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["item-card"]],inputs:{name:"name",link:"link",imageResource:"imageResource",spoiler:"spoiler",hideName:"hideName",hideTip:"hideTip"},standalone:!0,features:[C],decls:5,vars:13,consts:[["tuiHintDirection","top-left","tuiHintAppearance","onDark","tuiHintPointer","",1,"item-card-root",3,"click","routerLink","ngClass","tuiHint","tuiHintShowDelay"],[1,"item-card-container",3,"ngClass"],["sizes",`(max-width: 720px) 75vw,
            45vw`,1,"item-card-image",3,"src","srcset","alt"],[1,"item-card-title"],[1,"item-card-title-container"],[1,"item-card-title_name"]],template:function(r,e){r&1&&(a(0,"a",0),f("click",function(F){return e.hiddenBySpoiler&&e.toggleSpoiler(F)}),a(1,"div",1),g(2,"img",2),a(3,"div",3),h(4,E,3,1,"div",4),l()()()),r&2&&(o("routerLink",e.hiddenBySpoiler?null:e.link)("ngClass",m(9,L,e.hiddenBySpoiler))("tuiHint",!e.hideTip&&e.name)("tuiHintShowDelay",600),s(),o("ngClass",m(11,P,e.hiddenBySpoiler)),s(),o("src",e.image,d)("srcset",e.srcset)("alt",!e.hideTip&&e.name),s(2),u(4,e.name&&!e.hideName?4:-1))},dependencies:[_,I,k,w,D,R,T,H],encapsulation:2});let i=n;return i})();export{j as a};