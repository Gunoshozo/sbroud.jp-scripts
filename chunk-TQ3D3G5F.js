import{a as B,b as y}from"./chunk-BZ35IFDC.js";import{a as I,b as L}from"./chunk-UFRAF5IV.js";import{f as b,g as k,i as S,k as D,l as C}from"./chunk-XLIKHLUI.js";import{a as j,b as A}from"./chunk-XYLHXVLH.js";import{$ as g,E as d,Fa as v,Ga as r,H as m,Ja as f,K as h,Ka as a,La as u,Ma as l,Nb as T,Ta as G,ab as _,hb as H,n as p,ra as M,va as o,wa as c}from"./chunk-KN6KQJWB.js";var P=(()=>{let i=class i{get classes(){let e=[];return this.night.value&&e.push("dark"),e}constructor(e,t){this.theme=e,this.night=t,this.change$=this.night,this.night$=this.change$.pipe(h(null),p(()=>this.night.value),d(),m())}get mode(){return this.night.value?"onDark":null}};i.\u0275fac=function(t){return new(t||i)(c(B),c(y))},i.\u0275cmp=g({type:i,selectors:[["header-controls"]],hostVars:3,hostBindings:function(t,n){t&2&&(v("data-mode",n.mode),f(n.classes))},standalone:!0,features:[H],decls:8,vars:5,consts:[[1,"header-controls"],["aria-label","General Info",1,"header-controls_button",3,"routerLink"],["icon","tuiIconHelpCircleLarge","tuiIconButton","","appearance","icon","tuiHint","General Info","tuiHintAppearance","onDark","aria-label","General Info"],["aria-label","To game list",1,"header-controls_button",3,"routerLink"],["icon","tuiIconHomeLarge","tuiIconButton","","appearance","icon","tuiHint","To game list","tuiHintAppearance","onDark","aria-label","To game list"],["aria-label","Global Settings",1,"header-controls_button",3,"routerLink"],["icon","tuiIconSettingsLarge","tuiIconButton","","appearance","icon","tuiHint","Global Settings","tuiHintAppearance","onDark","aria-label","Global Settings"],["tuiIconButton","","appearance","icon","tuiHintAppearance","onDark","aria-label","Switch mode",1,"header-controls_button",3,"click","icon","tuiHint"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"a",1),l(2,"button",2),u(),a(3,"a",3),l(4,"button",4),u(),a(5,"a",5),l(6,"button",6),u(),a(7,"button",7),G("click",function(){return n.night.toggle()}),u()()),t&2&&(o(),r("routerLink","/info"),o(2),r("routerLink","/games"),o(2),r("routerLink","/settings"),o(2),r("icon",n.night.value?"tuiIconSunLarge":"tuiIconMoonLarge")("tuiHint",n.night.value?"Switch to light mode":"Switch to night mode"))},dependencies:[T,L,I,C,b,D,k,S],encapsulation:2});let s=i;return s})();var J=(()=>{let i=class i{get classes(){let e=[];return this.night.value&&e.push("dark"),e}constructor(e,t){this.theme=e,this.night=t,this.change$=this.night,this.night$=this.change$.pipe(h(null),p(()=>this.night.value),d(),m())}get mode(){return this.night.value?"onDark":null}};i.\u0275fac=function(t){return new(t||i)(c(B),c(y))},i.\u0275cmp=g({type:i,selectors:[["footer-controls"]],hostVars:3,hostBindings:function(t,n){t&2&&(v("data-mode",n.mode),f(n.classes))},standalone:!0,features:[H],decls:5,vars:3,consts:[[1,"header-controls"],["tuiLink","",3,"routerLink"],["aria-label","Source Code",1,"header-controls_button",3,"href"],["icon","tuiIconGithubLarge","tuiIconButton","","appearance","icon","tuiHint","Source Code","aria-label","Source Code",3,"tuiHintAppearance"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"a",1),_(2," Credits "),u(),a(3,"a",2),l(4,"button",3),u()()),t&2&&(o(),r("routerLink","/credits"),o(2),r("href","https://github.com/Gunoshozo/sbroud.jp-scripts",M),o(),r("tuiHintAppearance","onDark"))},dependencies:[T,C,b,D,k,S,A,j,L,I],encapsulation:2});let s=i;return s})();export{P as a,J as b};
