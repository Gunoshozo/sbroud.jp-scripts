var m=class{static resolveChapterName(a,s){if(a.chapterOrder){let r=a.chapterOrder[s],e=a.chapters[r],t=r;return/^\d+[A-Za-z0-9\-_]*$/gm.test(t)||(t=""),t&&e?.name&&(t+=": "),e&&e.name&&`${t}${e.name}`||!!t&&`Chapter ${t}`||`Chapter ${s+1}`}else{let r=s,e=a.chapters[r];return e&&e.name&&`${r}: ${e.name}`||`Chapter ${r}`}}};export{m as a};