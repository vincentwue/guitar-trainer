(this["webpackJsonpguitar-trainer"]=this["webpackJsonpguitar-trainer"]||[]).push([[0],{17:function(e,r,n){},18:function(e,r,n){},20:function(e,r,n){"use strict";n.r(r);var t=n(0),i=n(1),o=n.n(i),s=n(10),a=n.n(s),d=(n(17),n(18),n(11)),l=n(3),c=n(2),f={PerfectUnison:{id:"unison",step:0,standardSymbol:"root",standardColor:"#000000"},MinorSecond:{id:"minorSecond",step:1,standardSymbol:"b9",standardColor:"#cf0e00"},MajorSecond:{id:"majorSecond",step:2,standardSymbol:"9",standardColor:"#cf4f00"},MinorThird:{id:"minorThird",step:3,standardSymbol:"b3",standardColor:"#72cf00"},MajorThird:{id:"majorThird",step:4,standardSymbol:"3",standardColor:"#FF7F50"},PerfectForth:{id:"perfectForth",step:5,standardSymbol:"11",standardColor:"#00751f"},Tritone:{id:"tritone",step:6,standardSymbol:"b5",standardColor:"#9FE2BF"},PerfectFifth:{id:"perfectFifth",step:7,standardSymbol:"5",standardColor:"#6495ED"},MinorSixth:{id:"minorSixth",step:8,standardSymbol:"b13",standardColor:"#00751f"},MajorSixth:{id:"majorSixth",step:9,standardSymbol:"13",standardColor:"#900C3F"},MinorSeventh:{id:"minorSeventh",step:10,standardSymbol:"7",standardColor:"#CCCCFF"},MajorSeventh:{id:"majorSeventh",step:11,standardSymbol:"\u0394",standardColor:"#40E0D0"}},u=Object.values(f),h={C:{id:"C",intervalFromC:f.PerfectUnison,standardColor:"#ffffff"},Db:{id:"Db",intervalFromC:f.MinorSecond,standardColor:"#FF0000"},D:{id:"D",intervalFromC:f.MajorSecond,standardColor:"#800000"},Eb:{id:"Eb",intervalFromC:f.MinorThird,standardColor:"#FFFF00"},E:{id:"E",intervalFromC:f.MajorThird,standardColor:"#808000"},F:{id:"F",intervalFromC:f.PerfectForth,standardColor:"#00FF00"},Gb:{id:"Gb",intervalFromC:f.Tritone,standardColor:"#008000"},G:{id:"G",intervalFromC:f.PerfectFifth,standardColor:"#00FFFF"},Ab:{id:"Ab",intervalFromC:f.MinorSixth,standardColor:"#008080"},A:{id:"A",intervalFromC:f.MajorSixth,standardColor:"#0000FF"},Bb:{id:"Bb",intervalFromC:f.MinorSeventh,standardColor:"#000080"},B:{id:"B",intervalFromC:f.MajorSeventh,standardColor:"#FF00FF"}},b=Object.values(h),v={Major:{id:"major",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth],symbol:""},Major7:{id:"major7",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MajorSeventh],symbol:""},Minor7b5:{id:"minor7b5",intervals:[f.PerfectUnison,f.MinorThird,f.MinorSeventh,f.Tritone],symbol:"m7b5"},Chord7b9:{id:"7b9",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MinorSeventh,f.MinorSecond],symbol:"7b9"},Chord7Sharp5:{id:"7#5",intervals:[f.PerfectUnison,f.MajorThird,f.MinorSixth,f.MinorSeventh],symbol:"7#5"},PowerChord:{id:"5",intervals:[f.PerfectUnison,f.PerfectFifth],symbol:"5"}},p=function(){var e,r=[],n=Object(c.a)(b);try{for(n.s();!(e=n.n()).done;)for(var t=e.value,i=0,o=Object.values(v);i<o.length;i++){var s,a=o[i],d=[],l=Object(c.a)(a.intervals);try{for(l.s();!(s=l.n()).done;){var f=s.value;d.push(b[(f.step+t.intervalFromC.step)%12])}}catch(u){l.e(u)}finally{l.f()}r.push({rootNote:t,id:t.id+" "+a.id,notes:d,intervals:a.intervals,symbol:t.id+a.symbol,presentInScales:[]})}}catch(u){n.e(u)}finally{n.f()}return r}();var m=n(7),g={Major:{id:"major",steps:[2,2,1,2,2,2,1],modes:["ionisch (dur)","dorisch","phrygisch","lydisch","mixolydisch","aeolisch (moll)","lokrisch"]},HarmonicMinor:{id:"harmonic minor",steps:[2,1,2,2,1,3,1],modes:["harmonic minor mode","Locrian 13 or Locrian 6 (half-diminished)","Ionian #5 (augmented)","Dorian #11 (or dorian #4) (minor)","Phrygian dominant (dominant)","Lydian #2 (major)","Super locrian bb7 (diminished)"]},MelodicMinor:{id:"melodic minor",steps:[2,1,2,2,2,2,1],modes:["melodic minor mode","dorisch b9","lydisch augmented","lydisch dominant","mixolydisch b13","aeolisch b5 (lokrisch #2)","alterierte skala (super lokrisch)"]}},j=function(){for(var e=[],r=0,n=Object.entries(g);r<n.length;r++){var t=Object(m.a)(n[r],2),i=(t[0],t[1]),o=i;if(o.modes)for(var s=0;s<o.modes.length;s++){var a=o.modes[s],d=[].concat(Object(l.a)(o.steps.slice(s,o.modes.length)),Object(l.a)(o.steps.slice(0,s))),c={id:a,steps:d,isMode:0!==s,intervals:x(d),rawScale:i,step:s};e.push(c)}else e.push(i)}return e}();function x(e){for(var r=[],n=0,t=0;t<e.length-1;t++){n+=e[t],r.push(n)}return[f.PerfectUnison].concat(Object(l.a)(r.map((function(e){return u[e]}))))}var y=function(){var e,r=[],n=Object(c.a)(b);try{for(n.s();!(e=n.n()).done;){var t,i=e.value,o=Object(c.a)(j);try{for(o.s();!(t=o.n()).done;){var s,a=t.value,d=[],l=Object(c.a)(a.intervals);try{for(l.s();!(s=l.n()).done;){var f=s.value;d.push(b[(f.step+i.intervalFromC.step)%12])}}catch(g){l.e(g)}finally{l.f()}var u={isScale:!0,id:i.id+" "+a.id,scale:a,notes:d,rootNote:i,intervals:a.intervals,chords:[],triads:[],tetrads:[]},h=C(u);u.chords=h.chords,r.push(u)}}catch(g){o.e(g)}finally{o.f()}}}catch(g){n.e(g)}finally{n.f()}for(var v=function(){var e=m[p],n=e.scale.step,t=e.scale.intervals[n],i=e.scale.rawScale.modes[0],o=(e.rootNote.intervalFromC.step+12-t.step)%12,s=b.find((function(e){return e.intervalFromC.step===o}));e.baseSpecificScale=r.find((function(e){return e.id===(null===s||void 0===s?void 0:s.id)+" "+i}))},p=0,m=r;p<m.length;p++)v();return r}();function C(e){for(var r=e.notes,n=[],t=0;t<r.length;t++){var i,o=r[t],s=[],a=Object(c.a)(p);try{for(a.s();!(i=a.n()).done;){var d=i.value;if(d.notes[0]===o)0===d.notes.filter((function(e){return!r.includes(e)})).length&&(s.push(d),d.presentInScales.push(e))}}catch(l){a.e(l)}finally{a.f()}n.push(s)}return{chords:n,triads:[],tetrads:[]}}var F={standardGuitar:{id:"guitar",fretsCount:25,tuning:[h.E,h.A,h.D,h.G,h.B,h.E]},dropDGuitar:{id:"guitar",fretsCount:25,tuning:[h.D,h.A,h.D,h.G,h.B,h.E]}};function S(e,r){var n=e.strings.map((function(e){return e.map((function(e){return{interval:function(e,r){var n=(r.intervalFromC.step-e.intervalFromC.step+12)%12;return u[n]}(r.rootNote,e),note:e,hidden:!r.notes.includes(e)}}))}));return{id:r.id,intervals:r.intervals,notes:r.notes,source:r,strings:n,stringInstrument:e,fretsArray:O(e.fretsCount)}}function O(e){for(var r=[],n=[3,5,7,12,15,17,19,24],t=0;t<e;t++)n.includes(t)?r.push(t):r.push(null);return r}var I=function(){for(var e=function(e){var r,n=[],t=Object(c.a)(e.tuning);try{for(t.s();!(r=t.n()).done;){for(var i=r.value,o=[],s=b.indexOf(i),a=0;a<e.fretsCount;a++){var d=b[(a+s)%12];o.push(d)}n.push(o)}}catch(l){t.e(l)}finally{t.f()}return{strings:n,tuning:e.tuning,fretsCount:e.fretsCount}}(F.standardGuitar),r=[],n=0,t=[].concat(Object(l.a)(y),Object(l.a)(p));n<t.length;n++){var i=t[n],o=S(e,i);r.push(o)}return r}();var M,N=Object(d.a)((function(e){return{renderables:I,index1:0,index2:0,firstIntervals:!1,secondIntervals:!1,secondHidden:!0,setIndex1:function(r){return e((function(e){return{index1:r}}))},setIndex2:function(r){return e((function(e){return{index2:r}}))},toggleSecondHidden:function(){return e((function(e){return{secondHidden:!e.secondHidden}}))},toggleFirstIntervals:function(){return e((function(e){return{firstIntervals:!e.firstIntervals}}))},toggleSecondIntervals:function(){return e((function(e){return{secondIntervals:!e.secondIntervals}}))}}})),P=n(6),k=n.n(P);function w(e){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?"rgb("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",0.2)":"black"}function T(e){return Object(t.jsxs)("div",{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",position:"relative"},children:[Object(t.jsx)("div",{style:{display:"flex",width:"100%",background:"black",height:"1px"}}),Object(t.jsx)("div",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",top:0,left:0,right:0,bottom:0},children:e.children})]})}function E(e){var r=e.first,n=e.second,i=w(r.renderableNote.interval.standardColor);w(n.renderableNote.interval.standardColor);return r.renderableNote.hidden&&n.renderableNote.hidden?Object(t.jsx)(T,{}):Object(t.jsx)("div",{style:{height:60},children:Object(t.jsx)(T,{children:Object(t.jsxs)("div",{style:{position:"relative",height:"100%",width:"100%",display:"flex"},children:[Object(t.jsx)("div",{className:"first",style:{position:"absolute",display:r.renderableNote.hidden?"none":"flex",alignItems:"center",justifyContent:"center",top:0,left:0,right:0,bottom:0,color:"black",backgroundColor:r.renderableNote.interval===f.PerfectUnison?"grey":i,borderRadius:10},children:e.first.renderableNote.note.id}),Object(t.jsx)("div",{className:"second",style:{position:"absolute",display:n.renderableNote.hidden||e.secondHidden?"none":"flex",alignItems:"center",justifyContent:"center",top:0,left:"80%",bottom:"80%",right:0,color:"blue",fontSize:25,background:"black",borderRadius:20}})]})})})}function D(e){console.log(e);var r=e.second.strings,n=e.first.strings.map((function(n,i){return n.map((function(n,o){var s="2px solid lightgrey",a="2px solid lightgrey";return 0===o&&(s="5px solid black"),11===o&&(s="5px solid black"),12===o&&(s="5px solid black"),1===o&&(a="5px solid black"),13===o&&(a="5px solid black"),12===o&&(a="5px solid black"),Object(t.jsx)("div",{style:{gridColumnStart:o+1,gridColumnEnd:o+2,gridRowStart:e.first.strings.length-i,gridRowEnd:e.first.strings.length-i,borderRight:s,borderLeft:a},children:Object(t.jsx)(E,{secondHidden:e.secondHidden,first:{renderableNote:n,colors:M.Intervals,symbols:M.Notes},second:{renderableNote:r[i][o],colors:M.Intervals,symbols:M.Notes}})})}))})).flat(),i=e.first.fretsArray.map((function(r,n){return Object(t.jsx)("div",{style:{gridColumnStart:n+1,gridColumnEnd:n+2,gridRowStart:e.first.strings.length+1,gridRowEnd:e.first.strings.length+2},children:r||""})}));return Object(t.jsx)("div",{className:k.a.wrapper,children:Object(t.jsxs)("div",{className:k.a.grid,style:{margin:10,fontSize:40,display:"grid",gridTemplateColumns:"repeat("+e.first.fretsArray.length+", 1fr)",gridTemplateRows:"repeat("+e.first.strings.length+", 1fr)"},children:[n,i]})})}function H(){var e=N();console.log(e);var r,n=e.renderables.map((function(e,r){return Object(t.jsx)("option",{value:r,children:e.id})}));e.renderables[e.index1].source.hasOwnProperty("presentInScales")&&(r=e.renderables[e.index1].source.presentInScales.filter((function(r){return r.id.split(" ")[0]===e.renderables[e.index1].id.split(" ")[0]})).map((function(r,n){var i;return Object(t.jsxs)("div",{children:[Object(t.jsx)("button",{style:{padding:10,paddingLeft:40,margin:10,fontSize:20,width:900,textAlign:"left"},onClick:function(n){var t=I.map((function(e){return e.id})).indexOf(r.id);console.log("d",{e:n,abc:t,specificScale:r}),e.setIndex2(t)},children:r.id}),"  -- base scale:  "+(r.scale.step+1)+"  "+(null===(i=r.baseSpecificScale)||void 0===i?void 0:i.id)]})})));return Object(t.jsxs)("div",{className:k.a.wrapper,children:[Object(t.jsxs)("label",{children:[Object(t.jsx)("input",{type:"checkbox",checked:e.secondHidden,onChange:function(r){return e.toggleSecondHidden()}}),"hide second"]}),Object(t.jsx)("select",{onChange:function(r){return e.setIndex1(parseFloat(r.target.value))},value:e.index1,children:n}),Object(t.jsx)("select",{onChange:function(r){return e.setIndex2(parseFloat(r.target.value))},value:e.index2,children:n}),Object(t.jsx)(D,{secondHidden:e.secondHidden,first:e.renderables[e.index1],second:e.renderables[e.index2],firstIntervals:e.firstIntervals,secondIntervals:e.secondIntervals}),Object(t.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",height:400,overflow:"auto"},children:r})]})}!function(e){e.Intervals="Intervals",e.Notes="Notes"}(M||(M={}));var A=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(H,{})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(r){var n=r.getCLS,t=r.getFID,i=r.getFCP,o=r.getLCP,s=r.getTTFB;n(e),t(e),i(e),o(e),s(e)}))};a.a.render(Object(t.jsx)(o.a.StrictMode,{children:Object(t.jsx)(A,{})}),document.getElementById("root")),U()},6:function(e,r,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.52ce5fc3.chunk.js.map