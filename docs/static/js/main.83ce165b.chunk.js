(this["webpackJsonpguitar-trainer"]=this["webpackJsonpguitar-trainer"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),o=n.n(i),s=n(9),d=n.n(s),a=(n(16),n(17),n(10)),l=n(3),c=n(2),f={PerfectUnison:{id:"unison",step:0,standardSymbol:"root",standardColor:"#000000"},MinorSecond:{id:"minorSecond",step:1,standardSymbol:"b9",standardColor:"#9e006f"},MajorSecond:{id:"majorSecond",step:2,standardSymbol:"9",standardColor:"#ff00b3"},MinorThird:{id:"minorThird",step:3,standardSymbol:"b3",standardColor:"#b7ff42"},MajorThird:{id:"majorThird",step:4,standardSymbol:"3",standardColor:"#7dc900"},PerfectForth:{id:"perfectForth",step:5,standardSymbol:"11",standardColor:"#f7e886"},Tritone:{id:"tritone",step:6,standardSymbol:"b5",standardColor:"#ad6500"},PerfectFifth:{id:"perfectFifth",step:7,standardSymbol:"5",standardColor:"#ffdd00"},MinorSixth:{id:"minorSixth",step:8,standardSymbol:"b13",standardColor:"#ff0019"},MajorSixth:{id:"majorSixth",step:9,standardSymbol:"13",standardColor:"#d42c3d"},MinorSeventh:{id:"minorSeventh",step:10,standardSymbol:"7",standardColor:"#0073ff"},MajorSeventh:{id:"majorSeventh",step:11,standardSymbol:"\u0394",standardColor:"#00eaff"}},h=Object.values(f),u={C:{id:"C",intervalFromC:f.PerfectUnison,standardColor:"#ffffff"},Db:{id:"Db",intervalFromC:f.MinorSecond,standardColor:"#FF0000"},D:{id:"D",intervalFromC:f.MajorSecond,standardColor:"#800000"},Eb:{id:"Eb",intervalFromC:f.MinorThird,standardColor:"#FFFF00"},E:{id:"E",intervalFromC:f.MajorThird,standardColor:"#808000"},F:{id:"F",intervalFromC:f.PerfectForth,standardColor:"#00FF00"},Gb:{id:"Gb",intervalFromC:f.Tritone,standardColor:"#008000"},G:{id:"G",intervalFromC:f.PerfectFifth,standardColor:"#00FFFF"},Ab:{id:"Ab",intervalFromC:f.MinorSixth,standardColor:"#008080"},A:{id:"A",intervalFromC:f.MajorSixth,standardColor:"#0000FF"},Bb:{id:"Bb",intervalFromC:f.MinorSeventh,standardColor:"#000080"},B:{id:"B",intervalFromC:f.MajorSeventh,standardColor:"#FF00FF"}},b=Object.values(u),v={PerfectUnison:{id:"unison",intervals:[f.PerfectUnison],symbol:"unison"},Minor:{id:"minor",intervals:[f.PerfectUnison,f.MinorThird,f.PerfectFifth],symbol:"_"},Major:{id:"major",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth],symbol:""},Major7:{id:"\u03947",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MajorSeventh],symbol:"\u03947"},Chord7:{id:"7",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MinorSeventh],symbol:"7"},Minor7:{id:"_7",intervals:[f.PerfectUnison,f.MinorThird,f.PerfectFifth,f.MinorSeventh],symbol:"_7"},Minor7b5:{id:"_7b5",intervals:[f.PerfectUnison,f.MinorThird,f.MinorSeventh,f.Tritone],symbol:"_7b5"},Chord7b9:{id:"7b9",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MinorSeventh,f.MinorSecond],symbol:"7b9"},Chord7Sharp5:{id:"7#5",intervals:[f.PerfectUnison,f.MajorThird,f.MinorSixth,f.MinorSeventh],symbol:"7#5"},Chord7Sharp11:{id:"7#11",intervals:[f.PerfectUnison,f.MajorThird,f.Tritone,f.PerfectFifth,f.MinorSeventh],symbol:"7#11"},PowerChord:{id:"5",intervals:[f.PerfectUnison,f.PerfectFifth],symbol:"5"},MajorB13:{id:"\u0394#5",intervals:[f.PerfectUnison,f.MajorThird,f.MinorSixth,f.MajorSeventh],symbol:"\u0394#5"},Dim7:{id:"\xb07",intervals:[f.PerfectUnison,f.MinorThird,f.Tritone,f.MajorSixth],symbol:"\xb07"},b9b13:{id:"#5b9",intervals:[f.PerfectUnison,f.MinorSecond,f.MajorThird,f.MinorSixth],symbol:"#5b9"},MinorMajor7:{id:"_\u0394",intervals:[f.PerfectUnison,f.MinorThird,f.PerfectFifth,f.MajorSeventh],symbol:"_\u0394"},Minor6:{id:"_6",intervals:[f.PerfectUnison,f.MinorThird,f.PerfectFifth,f.MajorSixth],symbol:"_6"},Major6:{id:"6",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MajorSixth],symbol:"6"},Minorb6:{id:"_b6",intervals:[f.PerfectUnison,f.MinorThird,f.PerfectFifth,f.MinorSixth],symbol:"_b6"},Majorb6:{id:"b6",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MinorSixth],symbol:"b6"},Minor9:{id:"_9",intervals:[f.PerfectUnison,f.MinorThird,f.PerfectFifth,f.MajorSecond],symbol:"_9"},Major9:{id:"9",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MajorSecond],symbol:"9"},Minorb9:{id:"_b9",intervals:[f.PerfectUnison,f.MinorThird,f.PerfectFifth,f.MinorSecond],symbol:"_b9"},Majorb9:{id:"b9",intervals:[f.PerfectUnison,f.MajorThird,f.PerfectFifth,f.MinorSecond],symbol:"b9"}},p=function(){var e,t=[],n=Object(c.a)(b);try{for(n.s();!(e=n.n()).done;)for(var r=e.value,i=0,o=Object.values(v);i<o.length;i++){var s,d=o[i],a=[],l=Object(c.a)(d.intervals);try{for(l.s();!(s=l.n()).done;){var f=s.value;a.push(b[(f.step+r.intervalFromC.step)%12])}}catch(h){l.e(h)}finally{l.f()}t.push({rootNote:r,id:r.id+" "+d.id,notes:a,intervals:d.intervals,symbol:r.id+d.symbol,presentInScales:[]})}}catch(h){n.e(h)}finally{n.f()}return t}();var m=n(6),j={Major:{id:"major",steps:[2,2,1,2,2,2,1],modes:["ionisch (dur)","dorisch","phrygisch","lydisch","mixolydisch","aeolisch (moll)","lokrisch"]},HarmonicMinor:{id:"harmonic minor",steps:[2,1,2,2,1,3,1],modes:["harmonic minor mode","Locrian 13 or Locrian 6 (half-diminished)","Ionian #5 (augmented)","Dorian #11 (or dorian #4) (minor)","Phrygian dominant (dominant)","Lydian #2 (major)","Super locrian bb7 (diminished)"]},MelodicMinor:{id:"melodic minor",steps:[2,1,2,2,2,2,1],modes:["melodic minor mode","dorisch b9","lydisch augmented","lydisch dominant","mixolydisch b13","aeolisch b5 (lokrisch #2)","alterierte skala (super lokrisch)"]},Chromatic:{id:"chromatic",steps:[1,1,1,1,1,1,1,1,1,1,1,1],modes:["chromatic","chromatic-del","chromatic-del","chromatic-del","chromatic-del","chromatic-del","chromatic-del","chromatic-del","chromatic-del","chromatic-del","chromatic-del","chromatic-del"]},MinorPentatonic:{id:"minor pentatonic",steps:[3,2,2,3,2],modes:["minor pentatonic","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del"]},MajorPentatonic:{id:"major pentatonic",steps:[2,2,3,2,3],modes:["major pentatonic","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del"]},MinorPentatonicBlues:{id:"minor blues pentatonic",steps:[3,2,1,1,3,2],modes:["minor blues pentatonic","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del"]},MajorPentatonicBlues:{id:"major blues pentatonic",steps:[2,1,1,3,2,3],modes:["major blues pentatonic","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del"]},BluesRocknRoll:{id:"blues rock n roll",steps:[2,1,1,1,1,1,2,1,2],modes:["blues rock n roll","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del"]},BBKingBlues:{id:"B.B. King blues",steps:[3,3,1,1,2],modes:["B.B. King blues","pentatonic-del","pentatonic-del","pentatonic-del","pentatonic-del"]}},g=function(){for(var e=[],t=0,n=Object.entries(j);t<n.length;t++){var r=Object(m.a)(n[t],2),i=(r[0],r[1]),o=i;if(o.modes)for(var s=0;s<o.modes.length;s++){var d=o.modes[s],a=[].concat(Object(l.a)(o.steps.slice(s,o.modes.length)),Object(l.a)(o.steps.slice(0,s))),c={id:d,steps:a,isMode:0!==s,intervals:x(a),rawScale:i,step:s};e.push(c)}else e.push(i)}return e}();function x(e){for(var t=[],n=0,r=0;r<e.length-1;r++){n+=e[r],t.push(n)}return[f.PerfectUnison].concat(Object(l.a)(t.map((function(e){return h[e]}))))}var y=function(){var e,t=[],n=Object(c.a)(b);try{for(n.s();!(e=n.n()).done;){var r,i=e.value,o=Object(c.a)(g);try{for(o.s();!(r=o.n()).done;){var s,d=r.value,a=[],l=Object(c.a)(d.intervals);try{for(l.s();!(s=l.n()).done;){var f=s.value;a.push(b[(f.step+i.intervalFromC.step)%12])}}catch(j){l.e(j)}finally{l.f()}var h={isScale:!0,id:i.id+" "+d.id,scale:d,notes:a,rootNote:i,intervals:d.intervals,chords:[],triads:[],tetrads:[]},u=M(h);h.chords=u.chords,h.autoChords=S(h),t.push(h)}}catch(j){o.e(j)}finally{o.f()}}}catch(j){n.e(j)}finally{n.f()}for(var v=function(){var e=m[p],n=e.scale.step,r=e.scale.rawScale.modes[0],i=t.find((function(t){return t.id===e.rootNote.id+" "+r}));if(i){var o=i.scale.intervals[n],s=(e.rootNote.intervalFromC.step+12-o.step)%12,d=b.find((function(e){return e.intervalFromC.step===s}));e.baseSpecificScale=t.find((function(e){return e.id===(null===d||void 0===d?void 0:d.id)+" "+r}))}},p=0,m=t;p<m.length;p++)v();return t}();function S(e){var t,n=[].concat(Object(l.a)(e.notes),Object(l.a)(e.notes),Object(l.a)(e.notes)),r=[],i=Object(c.a)(e.notes);try{for(i.s();!(t=i.n()).done;){for(var o=t.value,s=n.indexOf(o),d=[],a=s;a<s+8;a+=2)d.push(n[a]);r.push(d)}}catch(v){i.e(v)}finally{i.f()}var f,h=r,u=Object(c.a)(p);try{var b=function(){for(var e=f.value,t=0;t<r.length;t++){var n=r[t];n.length===e.notes.length&&e.notes[0]===n[0]&&n.every((function(t){return e.notes.includes(t)}))&&(h[t]=e)}};for(u.s();!(f=u.n()).done;)b()}catch(v){u.e(v)}finally{u.f()}return h}function M(e){for(var t=e.notes,n=[],r=0;r<t.length;r++){var i,o=t[r],s=[],d=Object(c.a)(p);try{for(d.s();!(i=d.n()).done;){var a=i.value;if(a.notes[0]===o)0===a.notes.filter((function(e){return!t.includes(e)})).length&&(s.push(a),a.presentInScales.push(e))}}catch(l){d.e(l)}finally{d.f()}n.push(s)}return{chords:n,triads:[],tetrads:[]}}var C={standardGuitar:{id:"guitar",fretsCount:25,tuning:[u.E,u.A,u.D,u.G,u.B,u.E]},dropDGuitar:{id:"guitar",fretsCount:25,tuning:[u.D,u.A,u.D,u.G,u.B,u.E]}};function O(e,t){var n=e.strings.map((function(e){return e.map((function(e){return{interval:function(e,t){var n=(t.intervalFromC.step-e.intervalFromC.step+12)%12;return h[n]}(t.rootNote,e),note:e,hidden:!t.notes.includes(e)}}))}));return{id:t.id,intervals:t.intervals,notes:t.notes,source:t,strings:n,stringInstrument:e,fretsArray:F(e.fretsCount)}}function F(e){for(var t=[],n=[3,5,7,9,12,15,17,19,21,24],r=0;r<e;r++)n.includes(r)?t.push(r):t.push(null);return t}var P=function(){for(var e=function(e){var t,n=[],r=Object(c.a)(e.tuning);try{for(r.s();!(t=r.n()).done;){for(var i=t.value,o=[],s=b.indexOf(i),d=0;d<e.fretsCount;d++){var a=b[(d+s)%12];o.push(a)}n.push(o)}}catch(l){r.e(l)}finally{r.f()}return{strings:n,tuning:e.tuning,fretsCount:e.fretsCount}}(C.standardGuitar),t=[],n=0,r=[].concat(Object(l.a)(y),Object(l.a)(p));n<r.length;n++){var i=r[n],o=O(e,i);t.push(o)}return t.filter((function(e){return!e.id.includes("-del")}))}();var I,T=Object(a.a)((function(e){return{renderables:P,index1:0,index2:0,firstIntervals:!1,secondIntervals:!1,secondHidden:!0,setIndex1:function(t){return e((function(e){return{index1:t}}))},setIndex2:function(t){return e((function(e){return{index2:t}}))},toggleSecondHidden:function(){return e((function(e){return{secondHidden:!e.secondHidden}}))},toggleFirstIntervals:function(){return e((function(e){return{firstIntervals:!e.firstIntervals}}))},toggleSecondIntervals:function(){return e((function(e){return{secondIntervals:!e.secondIntervals}}))}}}));function k(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgb("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",0.4)":"black"}function w(e){return Object(r.jsxs)("div",{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",position:"relative"},children:[Object(r.jsx)("div",{style:{display:"flex",width:"100%",background:"black",height:"1px"}}),Object(r.jsx)("div",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",top:0,left:0,right:0,bottom:0},children:e.children})]})}function U(e){var t=e.first,n=e.second,i=k(t.renderableNote.interval.standardColor);k(n.renderableNote.interval.standardColor);return t.renderableNote.hidden&&n.renderableNote.hidden?Object(r.jsx)(w,{}):Object(r.jsx)("div",{style:{height:60},children:Object(r.jsx)(w,{children:Object(r.jsxs)("div",{style:{position:"relative",height:"100%",width:"100%",display:"flex"},children:[Object(r.jsx)("div",{className:"first",style:{position:"absolute",display:t.renderableNote.hidden?"none":"flex",alignItems:"center",justifyContent:"center",top:"5%",left:"5%",bottom:"5%",right:"5%",color:"black",backgroundColor:i,borderRadius:20},children:e.first.renderableNote.note.id}),Object(r.jsx)("div",{className:"second",style:{position:"absolute",display:n.renderableNote.hidden||e.secondHidden?"none":"flex",alignItems:"center",justifyContent:"center",top:"5%",left:"5%",bottom:"5%",right:"5%",color:"blue",fontSize:25,border:"4px solid "+(n.renderableNote.interval===f.PerfectUnison?"red":"black"),borderRadius:20}})]})})})}function N(e){console.log(e);var t=e.second.strings,n=e.first.strings.map((function(n,i){return n.map((function(n,o){var s="4px solid grey",d="4px solid grey";return 0===o&&(s="5px solid black"),11===o&&(s="5px solid black"),12===o&&(s="5px solid black"),1===o&&(d="5px solid black"),13===o&&(d="5px solid black"),12===o&&(d="5px solid black"),23===o&&(s="5px solid black"),24===o&&(d="5px solid black"),Object(r.jsx)("div",{style:{gridColumnStart:o+1,gridColumnEnd:o+2,gridRowStart:e.first.strings.length-i,gridRowEnd:e.first.strings.length-i,borderRight:s,borderLeft:d},children:Object(r.jsx)(U,{secondHidden:e.secondHidden,first:{renderableNote:n,colors:I.Intervals,symbols:I.Notes},second:{renderableNote:t[i][o],colors:I.Intervals,symbols:I.Notes}})},o)}))})),i=e.first.fretsArray.map((function(t,n){return Object(r.jsx)("div",{style:{gridColumnStart:n+1,gridColumnEnd:n+2,gridRowStart:e.first.strings.length+2,gridRowEnd:e.first.strings.length+3,textAlign:"center"},children:t||""},n)})),o=e.first.fretsArray.map((function(e,t){return Object(r.jsx)("div",{style:{gridColumnStart:t+1,gridColumnEnd:t+2,gridRowStart:0,gridRowEnd:1,textAlign:"center"},children:e||""},t)}));return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{style:{margin:10,fontSize:40,display:"grid",gridTemplateColumns:"repeat("+e.first.fretsArray.length+", 1fr)",gridTemplateRows:"repeat("+e.first.strings.length+", 1fr)"},children:[n,o,i]})})}function B(){var e=T();console.log(e);var t,n,i=e.renderables.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e.id},t)}));e.renderables[e.index1].source.hasOwnProperty("presentInScales")&&(t=e.renderables[e.index1].source.presentInScales.filter((function(e){return!e.id.includes("-del")})).filter((function(t){return t.id.split(" ")[0]===e.renderables[e.index1].id.split(" ")[0]})).map((function(t,n){var i;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{style:{padding:10,paddingLeft:40,margin:10,fontSize:20,width:500,textAlign:"left"},onClick:function(n){var r=P.map((function(e){return e.id})).indexOf(t.id);e.setIndex2(r)},children:t.id}),"  -- base scale:  "+(t.scale.step+1)+" of  "+(null===(i=t.baseSpecificScale)||void 0===i?void 0:i.id)]},n)})));if(e.renderables[e.index1].source.hasOwnProperty("autoChords")){var o=e.renderables[e.index1].source;o.autoChords&&(n=o.autoChords.map((function(t,n){return console.log(t),Object(r.jsxs)("button",{style:{fontSize:20,padding:10,margin:20},onClick:function(n){var r=P.find((function(e){return e.id===t.id}));if(r){var i=P.indexOf(r);e.setIndex2(i)}},children:[n+1,Object(r.jsx)("br",{}),t.id,Object(r.jsx)("br",{}),o.scale.rawScale.modes[n]]},n)})))}return Object(r.jsxs)("div",{style:{fontSize:20,display:"flex",flexDirection:"column",height:"100%"},children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"bolder",fontSize:25,padding:10,borderBottom:"2px solid black",backgroundColor:"#ff8282"},children:["Guitar scale/chord visualizer",Object(r.jsx)("div",{style:{fontSize:17,paddingLeft:20,display:"flex",fontWeight:"bolder",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)("a",{href:"https://github.com/vincentwue/guitar-trainer",target:"_blank",children:"more information on github"})})]}),Object(r.jsx)("div",{}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[Object(r.jsxs)("div",{style:{width:"100%",display:"flex",padding:10},children:[Object(r.jsx)("div",{style:{width:500,marginRight:20,textAlign:"right"},children:"first layer:"}),Object(r.jsx)("select",{onChange:function(t){return e.setIndex1(parseFloat(t.target.value))},style:{fontSize:20},value:e.index1,children:i}),Object(r.jsx)("button",{style:{marginLeft:20},onClick:function(t){var n=e.index1;e.setIndex1(e.index2),e.setIndex2(n)},children:"invert"})]}),Object(r.jsxs)("div",{style:{width:"100%",display:"flex",padding:10},children:[Object(r.jsx)("div",{style:{width:500,marginRight:20,textAlign:"right"},children:"second layer:"}),Object(r.jsx)("select",{onChange:function(t){return e.setIndex2(parseFloat(t.target.value))},style:{fontSize:20},value:e.index2,children:i}),Object(r.jsx)("div",{style:{marginLeft:20},children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:e.secondHidden,onChange:function(t){return e.toggleSecondHidden()}}),"hide second layer"]})})]})]}),Object(r.jsx)(N,{secondHidden:e.secondHidden,first:e.renderables[e.index1],second:e.renderables[e.index2],firstIntervals:e.firstIntervals,secondIntervals:e.secondIntervals}),Object(r.jsx)("div",{style:{display:t?"flex":"none",flexDirection:"column",alignItems:"flex-start",height:1,flexGrow:1,overflow:"auto"},children:t}),Object(r.jsx)("div",{style:{display:n?"flex":"none",flexDirection:"row",justifyContent:"center",height:1,flexGrow:1,overflow:"auto"},children:n})]})}!function(e){e.Intervals="Intervals",e.Notes="Notes"}(I||(I={}));var A=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(B,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),o(e),s(e)}))};d.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),D()}},[[19,1,2]]]);
//# sourceMappingURL=main.83ce165b.chunk.js.map