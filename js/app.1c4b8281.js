(function(t){function n(n){for(var s,r,o=n[0],u=n[1],l=n[2],g=0,d=[];g<o.length;g++)r=o[g],a[r]&&d.push(a[r][0]),a[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(n);while(d.length)d.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],s=!0,o=1;o<e.length;o++){var u=e[o];0!==a[u]&&(s=!1)}s&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var s={},a={0:0},i=[];function r(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)r.d(e,s,function(n){return t[n]}.bind(null,s));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var c=u;i.push([0,1]),e()})({0:function(t,n,e){t.exports=e("Vtdi")},11:function(t,n){},"1S2X":function(t,n,e){},"28dp":function(t,n,e){},5:function(t,n){},6:function(t,n){},"71yT":function(t,n,e){},"A0++":function(t,n,e){"use strict";var s=e("BPUQ"),a=e.n(s);a.a},BPUQ:function(t,n,e){},HI5l:function(t,n,e){"use strict";var s=e("71yT"),a=e.n(s);a.a},JbZ6:function(t,n,e){t.exports=e.p+"img/sol.efd28761.svg"},OSFY:function(t,n,e){"use strict";var s=e("UkDe"),a=e.n(s);a.a},TS0Q:function(t,n,e){t.exports=e.p+"img/bicycle.b0b2901a.svg"},Tei0:function(t,n,e){},UkDe:function(t,n,e){},Vtdi:function(t,n,e){"use strict";e.r(n);e("yt8O"),e("VRzm");var s=e("Kw5r"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"clock-weather-wrapper"},[e("Clock"),e("Weather")],1),e("PublicTransit"),e("CityBike"),e("NRK"),e("OBX")],1)},i=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"white-box"},[e("div",{staticClass:"one-way"},[t._m(0),e("div",{staticClass:"departures"},t._l(t.getDeparturesFromPlatform(t.departures,"1"),function(n){return e("div",{staticClass:"single",class:{blue:4===parseInt(n.lineCode)}},[t._v(t._s(t.getHumanTime(n.depature)+" min"))])}))]),e("div",{staticClass:"one-way"},[t._m(1),e("div",{staticClass:"departures"},t._l(t.getDeparturesFromPlatform(t.departures,"2"),function(n){return e("div",{staticClass:"single",class:{blue:4===parseInt(n.lineCode)||"Ringen via Storo"===n.destination}},[t._v(t._s(t.getHumanTime(n.depature)+" min"))])}))])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tekst"},[e("p",[t._v("Mot sentrum")]),e("span",[t._v("Vestli, Bergkrystallen, Ringen")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tekst"},[e("p",[t._v("Mot ringen")]),e("span",[t._v("Sognsvann, Ringen, Vestli")])])}],u={name:"PublicTransit",data:function(){return{departures:[]}},mounted:function(){this.loadData(),setInterval(function(){this.loadData()}.bind(this),3e4)},methods:{loadData:function(){var t=this;this.$http.get("https://europe-west1-focused-brand-202320.cloudfunctions.net/depatures/NSR:StopPlace:6332").then(function(n){t.departures=n.body},function(t){return t})},getDeparturesFromPlatform:function(t,n){var e=this;return t.filter(function(t){return t.platform===n&&0!==e.getHumanTime(t.depature)}).slice(0,2)},getHumanTime:function(t){return Math.round((Date.parse(t)-Date.now())/6e4)}}},l=u,c=(e("bRXM"),e("KHd+")),g=Object(c["a"])(l,r,o,!1,null,"aeb79320",null),d=g.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"clock"},[e("h1",[t._v(t._s(""+t.now.toTimeString().substring(0,t.now.toTimeString().indexOf(" ")-3)))]),e("p",[t._v(t._s(t.now.getDate()+". "+t.monthNumToStringMapper[t.now.getMonth()]+" "+t.now.getFullYear()))])])},f=[],p={name:"Clock",data:function(){return{now:new Date,monthNumToStringMapper:{0:"januar",1:"februar",2:"mars",3:"april",4:"mai",5:"juni",6:"juli",7:"august",8:"september",9:"oktober",10:"november",11:"desember"}}},mounted:function(){var t=this;setInterval(function(){t.now=new Date},1e3)}},m=p,h=(e("qslY"),Object(c["a"])(m,v,f,!1,null,"18d78a92",null)),_=h.exports,b=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"white-box"},t._l(t.bikeStations,function(n){return s("div",{key:n.index},[s("div",{staticClass:"single"},[s("div",{staticClass:"text"},[t._v(t._s(t.stationToNameDesc[n.station_id].name)),s("p",[t._v(t._s(t.stationToNameDesc[n.station_id].desc))])]),s("span",[s("img",{attrs:{src:e("TS0Q"),alt:""}}),t._v(t._s(n.num_bikes_available)+" ")])])])}))},y=[],k=(e("dRSK"),{name:"CityBike",data:function(){return{stationIds:["474","496","580","619","486"],stationToNameDesc:{474:{name:"Blindern studentparkering",desc:"Blindern studentparkering"},496:{name:"Fysikkbygningen",desc:"Blindern Fysikkbygg"},580:{name:"Georg Morgenstiernes hus",desc:"Blindern  Moltke Moes vei"},619:{name:"Bak Niels Treschows hus nord",desc:"Bak Niels Treschows nord"},486:{name:"Det Teologiske fakultet",desc:"Universitetet i Oslo"}},bikeStations:[]}},mounted:function(){this.loadData(),setInterval(function(){this.loadData()}.bind(this),3e4)},methods:{loadData:function(){var t=this;this.$http.get("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json").then(function(n){t.bikeStations=[];for(var e=[],s=[],a=function(s){e[s]=n.body.data.stations.find(function(n){return n.station_id===t.stationIds[s]})},i=0;i<t.stationIds.length;i++)a(i);e.forEach(function(t){t.num_bikes_available>0&&s.push(t)}),t.bikeStations=s.concat(e).slice(0,2)},function(t){return t})}}}),w=k,C=(e("upo7"),Object(c["a"])(w,b,y,!1,null,"d09ee404",null)),T=C.exports,D=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"weather"},t._l(t.weather,function(n,a){return s("div",{key:a,staticClass:"single-weather"},[s("img",{staticClass:"icon",attrs:{src:e("zLgK")("./"+t.weatherToIconMapper[n.location.symbol.number])}}),s("span",{staticClass:"temp"},[t._v("\n            "+t._s(parseInt((parseInt(n.location.minTemperature.value)+parseInt(n.location.maxTemperature.value))/2+.5))+"\n        ")]),s("span",{staticClass:"time"},[t._v("\n            "+t._s(t.getHumanTime(new Date(n.from))+" - "+t.getHumanTime(new Date(n.to)))+"\n        ")])])}))},x=[],O=(e("Z2Ku"),e("L9s1"),{name:"Weather",data:function(){return{weather:[],weatherToIconMapper:{1:"sol.svg",2:"sky-sol.svg",3:"sky-sol.svg",4:"sky.svg",15:"sky.svg",6:"regn-lyn.svg",24:"regn-lyn.svg",25:"regn-lyn.svg",26:"regn-lyn.svg",20:"regn-lyn.svg",27:"regn-lyn.svg",28:"regn-lyn.svg",21:"regn-lyn.svg",29:"regn-lyn.svg",30:"regn-lyn.svg",22:"regn-lyn.svg",11:"regn-lyn.svg",31:"regn-lyn.svg",23:"regn-lyn.svg",32:"regn-lyn.svg",33:"regn-lyn.svg",14:"regn-lyn.svg",34:"regn-lyn.svg",40:"regn.svg",5:"regn.svg",41:"regn.svg",42:"regn.svg",7:"regn.svg",43:"regn.svg",44:"regn.svg",8:"regn.svg",45:"regn.svg",46:"regn.svg",9:"regn.svg",10:"regn.svg",47:"regn.svg",12:"regn.svg",48:"regn.svg",49:"regn.svg",13:"regn.svg",50:"regn.svg"}}},mounted:function(){this.loadData(),setInterval(function(){this.loadData()}.bind(this),9e5)},methods:{loadData:function(){var t=this;this.$http.get("https://us-central1-lilleengen-io.cloudfunctions.net/blindern-yr").then(function(n){t.weather=n.body.weatherdata.product.time.filter(function(t){var n=new Date(t.from);return!!t.location.minTemperature&&[0,6,12,18].includes(n.getHours())}).slice(0,4)},function(t){return t})},getHumanTime:function(t){return t.getHours()<10?"0"+t.getHours():t.getHours()}}}),S=O,j=(e("HI5l"),Object(c["a"])(S,D,x,!1,null,"6072573c",null)),H=j.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"white-box"},[t.data[0]?e("div",{staticClass:"main"},[e("h3",[t._v(t._s(t.data[0].title))]),e("div",{staticClass:"date"},[t._v(t._s(t.getHumanTime(new Date(t.data[0].pubDate))))]),e("p",[t._v(t._s(t.data[0].content))])]):t._e(),e("div",{staticClass:"list"},t._l(t.data.slice(1,4),function(n){return e("div",[e("h3",[t._v(t._s(n.title))]),e("div",{staticClass:"date"},[t._v(t._s(t.getHumanTime(new Date(n.pubDate))))])])}))])},P=[],I=e("sPDk"),N=e.n(I),B={name:"NRK",data:function(){return{data:[],parser:new N.a}},mounted:function(){var t=this;this.getData(),setInterval(function(){t.now=new Date},3e4)},methods:{getData:function(){var t=this;this.$http.get("https://jsonp.afeld.me/?url=https://www.nrk.no/nyheter/siste.rss").then(function(n){t.parser.parseString(n.body,function(n,e){t.data=e.items})},function(t){return t})},getHumanTime:function(t){var n=t.getHours();n<10&&(n="0"+n);var e=t.getMinutes();return e<10&&(e="0"+e),n+":"+e}}},E=B,$=(e("kgYo"),Object(c["a"])(E,M,P,!1,null,"099505bb",null)),F=$.exports,K=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.data?e("div",{staticClass:"obx"},[e("div",[e("div",{staticClass:"single-info"},[e("span",{staticClass:"desc"},[t._v("Siste dag")]),e("span",{staticClass:"percent"},[t._v(t._s(t.data.CHANGE_PCT.toFixed(2)))])]),e("div",{staticClass:"single-info"},[e("span",{staticClass:"desc"},[t._v("Siste uke")]),e("span",{staticClass:"percent"},[t._v(t._s(t.data.CHANGE_7DAYS_PCT.toFixed(2)))])]),e("div",{staticClass:"single-info"},[e("span",{staticClass:"desc"},[t._v("Siste måned")]),e("span",{staticClass:"percent"},[t._v(t._s(t.data.CHANGE_1MONTH_PCT.toFixed(2)))])])]),e("span",{staticClass:"absolute-percent"},[t._v("%")]),e("span",{staticClass:"obx-title"},[t._v("OBX")])]):t._e()},R=[],X={name:"OBX",data:function(){return{data:null}},mounted:function(){console.log("kjør"),this.loadData(),setInterval(function(){this.loadData()}.bind(this),3e4)},methods:{loadData:function(){var t=this;this.$http.get("https://jsonp.afeld.me/?url=https://www.dn.no/finans/servlets/newt/json/quotes?ticker=OBX.OSE").then(function(n){t.data=n.body[0]},function(t){return t})}}},z=X,Y=(e("OSFY"),Object(c["a"])(z,K,R,!1,null,"3ff798fc",null)),L=Y.exports,U={name:"app",components:{CityBike:T,Clock:_,PublicTransit:d,Weather:H,NRK:F,OBX:L}},V=U,A=(e("A0++"),Object(c["a"])(V,a,i,!1,null,null,null)),q=A.exports,G=e("KN3F");s["a"].use(G["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(q)}}).$mount("#app")},Xqsk:function(t,n,e){t.exports=e.p+"img/regn.92f8f868.svg"},bRXM:function(t,n,e){"use strict";var s=e("1S2X"),a=e.n(s);a.a},fz1O:function(t,n,e){t.exports=e.p+"img/night-rain.83277d77.svg"},ioP1:function(t,n,e){t.exports=e.p+"img/mane.b09439d8.svg"},ixzB:function(t,n,e){t.exports=e.p+"img/sky-sol.75baa2e7.svg"},kgYo:function(t,n,e){"use strict";var s=e("28dp"),a=e.n(s);a.a},qslY:function(t,n,e){"use strict";var s=e("y76I"),a=e.n(s);a.a},rzhN:function(t,n,e){t.exports=e.p+"img/sky.3b24ed8d.svg"},sVML:function(t,n,e){t.exports=e.p+"img/regn-lyn.0bb768e4.svg"},upo7:function(t,n,e){"use strict";var s=e("Tei0"),a=e.n(s);a.a},xfpa:function(t,n,e){t.exports=e.p+"img/night-sky.62b3376c.svg"},y76I:function(t,n,e){},zLgK:function(t,n,e){var s={"./mane.svg":"ioP1","./night-rain.svg":"fz1O","./night-sky.svg":"xfpa","./regn-lyn.svg":"sVML","./regn.svg":"Xqsk","./sky-sol.svg":"ixzB","./sky.svg":"rzhN","./sol.svg":"JbZ6"};function a(t){var n=i(t);return e(n)}function i(t){var n=s[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="zLgK"}});
//# sourceMappingURL=app.1c4b8281.js.map