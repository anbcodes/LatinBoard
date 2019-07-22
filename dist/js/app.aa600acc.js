(function(e){function a(a){for(var r,i,u=a[0],o=a[1],l=a[2],m=0,d=[];m<u.length;m++)i=u[m],n[i]&&d.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);c&&c(a);while(d.length)d.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],r=!0,u=1;u<t.length;u++){var o=t[u];0!==n[o]&&(r=!1)}r&&(s.splice(a--,1),e=i(i.s=t[0]))}return e}var r={},n={app:0},s=[];function i(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)i.d(t,r,function(a){return e[a]}.bind(null,r));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/LatinBoard/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=a,u=u.slice();for(var l=0;l<u.length;l++)a(u[l]);var c=o;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),n=t("bb71");t("da64");r["a"].use(n["a"],{iconfont:"md"});var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-toolbar",{attrs:{app:"",color:"blue darken-3"}},[t("v-toolbar-title",{staticClass:"headline text-uppercase"},[t("span",{staticClass:"white--text"},[e._v("Latin Board")])]),t("v-spacer")],1),t("v-content",[t("Main")],1)],1)},i=[],u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-layout",{attrs:{column:""}},[t("v-flex",[t("board",{attrs:{board:e.board,showTranslation:e.showTranslation}})],1),t("v-flex",[t("v-layout",{attrs:{row:""}},[t("generateBoardBtn",{attrs:{weekRanges:e.weekRanges},model:{value:e.board,callback:function(a){e.board=a},expression:"board"}}),t("showTranslationBtn",{model:{value:e.showTranslation,callback:function(a){e.showTranslation=a},expression:"showTranslation"}})],1)],1),t("v-flex",[t("challenge",{attrs:{name:"A"},model:{value:e.weekRanges,callback:function(a){e.weekRanges=a},expression:"weekRanges"}})],1)],1)],1)},o=[],l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-layout",[t("v-flex",e._l(e.board,function(a,r){return t("v-layout",{key:r,attrs:{wrap:""}},e._l(a,function(a,n){return t("v-flex",{key:n,attrs:{xs4:"",sm4:"",md2:"",lg2:"",xl2:""}},[t("v-card",{staticStyle:{width:"100%",height:"100%"},attrs:{"elevation-0":""}},[t("v-card-title",{attrs:{"primary-title":""}},[t("h5",{staticClass:"subheading mb-0"},[e._v(e._s(a[0])+" ("+e._s(6*r+n+1)+")")])]),t("v-card-text",[e._v("Translation: "+e._s(e.showTranslation?a[1]:""))])],1)],1)}),1)}),1)],1)},c=[],m={props:{board:Array,showTranslation:Boolean}},d=m,p=t("2877"),h=t("6544"),v=t.n(h),f=t("b0af"),g=t("99d9"),b=t("12b2"),y=t("0e8f"),w=t("a722"),x=Object(p["a"])(d,l,c,!1,null,null,null),k=x.exports;v()(x,{VCard:f["a"],VCardText:g["a"],VCardTitle:b["a"],VFlex:y["a"],VLayout:w["a"]});var j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-btn",{staticClass:"secondary",attrs:{round:""},on:{click:function(a){return e.generateBoard()}}},[e._v("Generate Board")])},_=[],C={A:[[["terra, ae","earth, land"],["porta, ae","gate"],["Maria, ae","Mary"],["nauta, ae","sailor"],["victōria, ae","victory"],["silva, ae","forest"],["glōria, ae","fame, glory"]],[["ōrat","he, she, it prays"],["ōrant","they pray"],["videt","he, she, it sees"],["vident","they see"],["non, adv.","not"],["laudat","he, she, it praises"],["laudant","they praise"],["prōvincia, ae","province"],["servus, ī","servant, slave"],["fīlius, ī","son"],["Deus, Deī","God"],["amīcus, ī","friend"],["Chrīstus, ī","Christ"],["Chrīstiānus, ī","Christian"],["et, conj.","and"]],[["bellum, ī","war"],["caelum, ī","sky, heaven(C)"],["rēgnum, ī","kingdom, royal power"],["praemium, ī","reward"],["perīculum, ī","danger"],["imperium, ī","command, power, empire"],["dedit","he, she, it gave"],["dedērunt","they gave"],["gladius, ī","sword"],["sed, conj.","but"],["oppidum, ī","town"],["Gallia, ae","Gaul"],["Gallus, ī","a Gaul"],["Rōmānus, ī","a Roman"],["Roma, ae","Rome"],["propter, prep. w. acc.","on account of"],["cum, prep. w. abl.","with"],["post, prep. w. acc.","after, behind"],["in, prep. w. abl.","in, on"]],[["sum","I am"],["es","you are"],["est","he, she, it is"],["sumus","we are"],["estis","you (plural) are"],["sunt","they are"],["quod, conj.","because"],["itaque, conj.","therefore, and so"],["oncolunt","they inhabit"],["vidētis","you(plural) see"],["vīcērunt","they conquered"],["tabula, ae","map"]],[["lēx, legīs","law"],["rēx, rēgis","king"],["dux, ducis","leader"],["lūx, lūcis","light"],["homō, hominis","man, mankind"],["imperātor, imperātōris","commander in chief, general"],["vēritās, vēritātis","truth"],["Caesar, Caesaris","Caesar"],["salūs, salūtis","safety, welfare, salvation"],["vōx, vōcis","voice, cry"],["audīvit","he, she, it heard"],["Ego","I"],["vita, ae","life"],["virtūs, virtūtis","courage, virtue "],["mīles, mīlitis","soldier"],["pāx, pācis","peace"],["via, ae","road","way"],["populūs, populī","people, nation"],["mūnīverunt","they fortified (w.viam or via)"]],[["pars, partis","part"],["collis, collis, m.","hill"],["hostis, hostis","enemy (in war)"],["gēns, gentis","tribe"],["caedēs, caedis","slaughter"],["frāter, frātris (frātrum)","brother"],["pater, patris (partum)","father"],["māter, mātris (mātrum)","mother"],["mōns, mōntis","mountain"],["clamor, clāmōris","shout"],["prīnceps, prīncepis","chief leading man"],["occīdērunt","they killed"],["in cruce","on the cross"],["flūmen, flūmenis","river"],["iter, itineris","journey, march, route"],["corpus, corporis","body"],["vulnus, vulneris","wound"],["agmen, agmenis","col of soldiers, army"],["nōmen, nōmenis","name"]],[["mundus, ī","world"],["erat","he, she, it was"],["erant","they were"],["adventus, ūs","arrival"],["equitātus, ūs","cavalry"],["exercitus, ūs","army"],["impetus, ūs","attack"],["metus, ūs","fear"],["spīritus, ūs","breath, spirit"],["portus, ūs","harbor, port"],["senātus, ūs","senate"]],[["in, prep w. abl.","in, on"],["in, prep w. acc.","in, on, into, against, upon"],["nunc; adv.","now"],["autem; conj. postpositive","however"],["fēcērunt","they made"],["vēnit","he, she, it came"],["vēnērunt","they came"],["multī","many"],["rēs, reī","thing, affair"],["fidēs, fideī","faith, reliability"],["aciēs, aciēī","battle line"],["spēs, speī","hope"],["posuērunt","they put, placed,"],["they pitched (w. castra)"],["grātia, ae (sing)- favor, grace"],["castra, castrōrum","camp"],["impedīmenta, impedimentōrum","baggage, baggage train"],["grātiae, grātiārum (pl.)","thanks"],["cōpia, ae (sing)","supply, abundance"],["cōpiae, cōpiārum (pl.)","troops, forces"],["agunt","they give (w. grātiās)"],["cēpērunt","they captured"]],[["omnium","of all "],["vīdērunt","they saw "],["magnus, a, um","great, large "],["altus, a, um","high, deep "],["bonus, a, um","good "],["longus, a, um","long "],["malus, a, um","bad "],["multus, a, um","much, (pl.) many "],["sānctus, a, um","holy, saint "],["prīmus, a, um","first "],["America, ae","America "]],[[]],[["angustus, a, um","narrow "],["reliquus, a, um","remaining, the rest of "],["tūtus, a, um","safe "],["Rōmānus, a, um","Roman "],["Chrīstiānus, a, um","Christian "],["suprēmus, a, um","highest "],["estō","let….be "],["prō, prep w. abl.","in front of, on behalf of "],["inopia, ae","scarcity, want "],["dominus, ī","Lord, master "],["mūrus, ī","wall "],["frūmentum, ī","grain (pl. crops) "],["legiō, legiōnis f.","legion "],["sit","be (understood in Latin supply in English) "]],[["gravis, e","heavy, severe, serious "],["brevis, e","short "],["commūnis, e","common "],["difficilis, e","difficult "],["facilis, e","easy "],["fortis, e","brave, strong "],["nōbilis, e","noble, renowned "],["omnis, e","all, every "],["cupidus, a, um; w. gen.","eager, desirous "],["plēnus, a, um; w. gen. or abl.","full "],["fīnitimus, a, um; w. dat.","neighboring, next "],["similis, e; w. gen or dat.","like, similar "],["Jēsus, ū","Jesus "],["et…et","both…and "],["quid","what? "],["prīmā lūce","at dawn "],["urbs, urbis","city "],["pōns, pontis, m.- bridge "],["signum, ī","standard, signal, sign "],["eques, equitis","horseman (pl. cavalry) "],["pictūra, ae","picture "],["crux, crucis","cross "],["Amen","(Hebrew) so be it "]],[["laudō, 1, tr.","praise "],["occupō, 1, tr.","seize "],["oppugnō, 1, tr,","attack, assault "],["ōrō, 1, tr.","beg, pray "],["parō, 1, tr.","prepare, get ready "],["cum; conj.","when "]],[[]],[[]],[["pūgno, 1, intr.","fight "],["superō, 1, tr.","overcome, conquer, surpass "],["portō, 1, tr.","carry "],["centuriō, centuriōnis","a centurian "],["numerus, ī","number "],["dō, dare, dedī, datus, 1, tr.","give "],["vocō, 1, tr.","call "],["interim, adv. ","meanwhile "],["mors, mortis","death "],["hibērna, hibēnōrum (p. only)","winter quarters "]],[["ubi, adv.","where?"],["quis, pronoun","who?"],["quid, pronoun","what?"],["cūr, adv.","why?"],["locus, locī (pl. loca,locōrum)","place"],["aliēnus, a, um","unfavorable, another, foreign"]],[["ōratiō, ōrātiōnis","speech, prayer"],["semper, adv.","always"],["sīcut, conj.","as"],["in prīncipīo","in the beginning"],["in saecula saeculōrum","world without end forever"],["-ne","particle used in questions"],["sit","be or may"],["monuit","advised"],["suus, a, um","his (adj.)"],["America, ae","America"],["fēcit","made"],["omit","for"],["Americanus, a, um","American (adj.)"]],[["moneō, 2, tr.","warn, advise"],["timeō, timēre, timuī, 2, tr.","fear"],["terreō","terrify"],["habeō, 2, tr.","have"],["arama, armōrum","arms"]],[["Margarītārius, a, um","Pearl"],["Japōnia, ae","Japan"]],[["ego, meī","I"],["nōs, nostrī","we"],["videō, vidēre, vidī, vīsus, 2, tr. ","see"],["saepe adv.","often"],["salūtem dat","gives greeting"],["valē","farewell, goodbye"],["omnia","all things, everything"],["Galba, ae","Galba (a Roman proper name)"],["tū, tuī","you (sing.)"],["vōs, vestrī","you (pl.)"],["teneō, tenēnere, tenuī, tentus, 2, tr.","hold"],["moveō, movēre, mōvī, mōtus, 2, tr.","move"],["tamen, adv.","nevertheless"],["neque, conj.","nor, and...not"],["Imperator","(nonmilitary) emperor"],["et","and, also"],["vērus, a, um, adj.","true"],["sī","if"],["Mehercule!","By Hercules!"],["hōs","these"]],[["meus, a, um","my"],["is, ea, id","he, she, it"],["sustineō, sustinēre, sustinuī, sustentus, 2, tr.","sustain, withstand"],["finēs, finum, m. pl. 3rd decl. ","territory"],["āla, ae","wing"]],[["suī","him/her/it/themselves"],["etiam, adv.","also"],["enim, conj., postp.","for"],["ōrātor, ōrātōris","an orator"],["dē, prep. w. abl.","concernng"],["inquit","he said"],["laudatūr","is praised"],["Annuntiātiō, Annuntātōnis","the Annunciation (by the Angel Gabriel)"],["magnificat","doth magnify"],["anima mea","my soul"],["quia","same as quod"],["fēcit","he has done"],["pōnunt","place"],["Chrīstophorus","Greek, Christ-bearer"]],[["dūcō, dūcere, dūxī, ductus, 3, tr. ","lead, guide"],["gerō, gerere, gessī, gestus, 3, tr.","carry carry on, wage (w. bellum)"],["dēfendō, dēfendere, dēfendī, dēfēnsus, 3, tr.","draw up, equip"],["mittō, mittere, mīsī, missus, 3, tr.","send"],["fortiter, adv.","bravely, strongly"],["vincō, vincere, vīcī, victus, 3, tr.","conquer"],["petō, petere, petīvī, petītus, 3, tr.","drive, repulse, rout"],["litterae, litterārum","letter (i.e. an epistle), dispatch"],["frūmentum, ī","rations"]],[["pōnō, pōnere, posuī, positus, 3, tr.","put, place, set, pitch (w.castra)"],["contendō, contendere, contendī, 3, intr.","strive, contend, hasten"],["agō, agere, ēgī, āctus, 3. tr.","drive, do (not as a helping verb), act, treat"],["ibi, adv.","there"],["dē, prep. w. abl.","concerning, about"],["portō","use"]],[["audiō, 4, tr.","hear"],["muniō, 4, tr.","fortify, construct (w/ viam or viās)"],["veniō, venīre, vēnī, ventum, 4, intr.","come"],["conveniō, ceonvenīre, convēnī, conventum, 4, intr.","come together, assemble"],["per, prep. w. acc.","through"]],[["Populusque","et Populus"],["sum, esse, fuī, futūrus, intr.","am"],["undique, adv.","from all sides, on all sides"],["tēlum, ī","dart"]],[["absum, abesse, āfuī, āfutūrus, intr; ab (ā) w. abl.","am away, am distant"],["longē, adv. ","far, by far"],["collocō, 1, tr.","place, station"],["maneō, manēre, mānsī, mānsūrus, 2, intr.","remain"],["compleō, complēre, comlēvī, complētus, tr.; w. abl.","fill (with)"],["cēdō, cēdere, cessī, cessūrus, 3, intr.","give way, yield"],["atque (ac), conj.","and"],["Populīque = et Populī"],["Sanctūs Michael","St. Michael the Archangel"],["vinculum, ī","chain"],["intrā","enter!"],["gaudium, ī","joy"],["tuus, a, um adj.","your"]],[["incitō, 1, tr.","incite, arouse"],["adjuvō, adjuvāre, adjūvī, adjūtus, 1, tr.","help, aid"],["servō, 1, tr. ","guard, keep"],["perturbō, 1, tr.","confuse, disturb"],["incendō, incendere, incendī, incēnsus, 3, tr.","set fire to, burn"],["tum, adv.","then, at that time"]],[[]]],B:[[]]},q={props:{value:Array,weekRanges:Object},methods:{shuffle:function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e},generateBoard:function(){var e=this,a=[],t=["A","B","1","2","3","4"],r=[];if(t.forEach(function(a){if(e.weekRanges[a].selected){var t=C[a].slice(e.weekRanges[a].range[0]-1,e.weekRanges[a].range[1]).flat();r.push(t),r=r.flat()}}),r!==[]&&0!==r.length){for(var n=0;n<6;n++){for(var s=[],i=0;i<6;i++){var u=[];while(0===u.length)u=r[Math.floor(Math.random()*r.length)];u=this.shuffle(u),s.push(u)}a.push(s)}this.value=a,this.generated=!0,this.$emit("input",this.value)}}}},A=q,B=t("8336"),T=Object(p["a"])(A,j,_,!1,null,null,null),V=T.exports;v()(T,{VBtn:B["a"]});var R=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-btn",{staticClass:"secondary",attrs:{round:""},on:{click:function(a){return e.changed()}}},[e._v(e._s(e.value?"Hide":"Show")+" Answers")])},O=[],M={props:{value:Boolean},methods:{changed:function(){this.value=!this.value,this.$emit("input",this.value)}}},S=M,$=Object(p["a"])(S,R,O,!1,null,null,null),G=$.exports;v()($,{VBtn:B["a"]});var P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-layout",[t("v-flex",{attrs:{centered:"",shrink:"","mr-3":"","mt-1":""}},[t("h2",{staticClass:"heading mt-2"},[e._v("Challenge "+e._s(e.name)+" Weeks:")])]),t("v-flex",[t("v-range-slider",{attrs:{max:30,min:1,"thumb-size":24,step:1,"thumb-label":"always",disabled:!e.value[e.name].selected,"always-dirty":""},on:{change:e.valueChange},model:{value:e.value[e.name].range,callback:function(a){e.$set(e.value[e.name],"range",a)},expression:"value[name].range"}})],1),t("v-flex",{attrs:{shrink:"","ml-2":""}},[t("v-checkbox",{on:{change:e.valueChange},model:{value:e.value[e.name].selected,callback:function(a){e.$set(e.value[e.name],"selected",a)},expression:"value[name].selected"}})],1)],1)},E=[],L=(t("7f7f"),{props:{value:Object,name:String},created:function(){this.value[this.name]={range:[1,2],selected:!0}},methods:{valueChange:function(){this.$emit("input",this.value)}}}),J=L,I=t("ac7c"),F=t("5963"),H=Object(p["a"])(J,P,E,!1,null,null,null),z=H.exports;v()(H,{VCheckbox:I["a"],VFlex:y["a"],VLayout:w["a"],VRangeSlider:F["a"]});var D={components:{Board:k,GenerateBoardBtn:V,ShowTranslationBtn:G,Challenge:z},data:function(){return{weekRanges:{A:{},B:{},1:{},2:{},3:{},4:{}},board:[],selected:[],showTranslation:!1}}},W=D,K=t("a523"),N=Object(p["a"])(W,u,o,!1,null,null,null),Q=N.exports;v()(N,{VContainer:K["a"],VFlex:y["a"],VLayout:w["a"]});var U={name:"App",components:{Main:Q},data:function(){return{}}},X=U,Y=t("7496"),Z=t("549c"),ee=t("9910"),ae=t("71d9"),te=t("2a7f"),re=Object(p["a"])(X,s,i,!1,null,null,null),ne=re.exports;v()(re,{VApp:Y["a"],VContent:Z["a"],VSpacer:ee["a"],VToolbar:ae["a"],VToolbarTitle:te["a"]}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ne)}}).$mount("#app")}});
//# sourceMappingURL=app.aa600acc.js.map