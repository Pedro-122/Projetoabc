"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9334],{88370:function(e,t,a){a.d(t,{u:function(){return n}});function n(e){return t=>{let a=(e?Math[e]:Math.trunc)(t);return 0===a?0:a}}},70530:function(e,t,a){a.d(t,{U:function(){return i}});var n=a(32841);function i(e,t){let a=(0,n.Q)(e),i=(0,n.Q)(t),r=a.getTime()-i.getTime();return r<0?-1:r>0?1:r}},49592:function(e,t,a){a.d(t,{H:function(){return u}});var n=a(97497),i=a(63583),r=a(88370),o=a(10846),d=a(70530),s=a(81853),m=a(32841);function u(e,t,a){let u,l,f;let h=(0,i.j)(),c=a?.locale??h.locale??n._,g=(0,d.U)(e,t);if(isNaN(g))throw RangeError("Invalid time value");let p=Object.assign({},a,{addSuffix:a?.addSuffix,comparison:g});g>0?(u=(0,m.Q)(t),l=(0,m.Q)(e)):(u=(0,m.Q)(e),l=(0,m.Q)(t));let b=(0,r.u)(a?.roundingMethod??"round"),w=l.getTime()-u.getTime(),v=w/s.yJ,M=(w-((0,o.D)(l)-(0,o.D)(u)))/s.yJ,y=a?.unit;if("second"===(f=y||(v<1?"second":v<60?"minute":v<s.H_?"hour":M<s.fH?"day":M<s.UU?"month":"year"))){let e=b(w/1e3);return c.formatDistance("xSeconds",e,p)}if("minute"===f){let e=b(v);return c.formatDistance("xMinutes",e,p)}if("hour"===f){let e=b(v/60);return c.formatDistance("xHours",e,p)}if("day"===f){let e=b(M/s.H_);return c.formatDistance("xDays",e,p)}if("month"===f){let e=b(M/s.fH);return 12===e&&"month"!==y?c.formatDistance("xYears",1,p):c.formatDistance("xMonths",e,p)}{let e=b(M/s.UU);return c.formatDistance("xYears",e,p)}}},50262:function(e,t,a){a.d(t,{pt:function(){return u}});let n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 semana",other:"aproximadamente {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var i=a(37238);let r={date:(0,i.l)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.l)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.l)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:e=>{let t=e.getDay();return"'"+(0===t||6===t?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};var d=a(65580);let s={ordinalNumber:(e,t)=>Number(e)+"\xba",era:(0,d.Y)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},defaultWidth:"wide"}),quarter:(0,d.Y)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,d.Y)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,d.Y)({values:{narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","s\xe1b"],abbreviated:["dom","seg","ter","qua","qui","sex","s\xe1b"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,d.Y)({values:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},defaultFormattingWidth:"wide"})};var m=a(95021);let u={code:"pt",formatDistance:(e,t,a)=>{let i;let r=n[e];return(i="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),a?.addSuffix)?a.comparison&&a.comparison>0?"daqui a "+i:"h\xe1 "+i:i},formatLong:r,formatRelative:(e,t,a,n)=>{let i=o[e];return"function"==typeof i?i(t):i},localize:s,match:{ordinalNumber:(0,a(6898).y)({matchPattern:/^(\d+)(º|ª)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:(0,m.t)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},defaultParseWidth:"any"}),quarter:(0,m.t)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º|ª)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,m.t)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,m.t)({matchPatterns:{narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,wide:/^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[áa]/i]},defaultParseWidth:"any"}),dayPeriod:(0,m.t)({matchPatterns:{narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[ãa]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}}},63595:function(e,t,a){a.d(t,{D:function(){return i}});var n=a(81853);function i(e,t){let a,i;let h=t?.additionalDigits??2,c=function(e){let t;let a={},n=e.split(r.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?t=n[0]:(a.date=n[0],t=n[1],r.timeZoneDelimiter.test(a.date)&&(a.date=e.split(r.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){let e=r.timezone.exec(t);e?(a.time=t.replace(e[1],""),a.timezone=e[1]):a.time=t}return a}(e);if(c.date){let e=function(e,t){let a=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:NaN,restDateString:""};let i=n[1]?parseInt(n[1]):null,r=n[2]?parseInt(n[2]):null;return{year:null===r?i:100*r,restDateString:e.slice((n[1]||n[2]).length)}}(c.date,h);a=function(e,t){if(null===t)return new Date(NaN);let a=e.match(o);if(!a)return new Date(NaN);let n=!!a[4],i=m(a[1]),r=m(a[2])-1,d=m(a[3]),s=m(a[4]),u=m(a[5])-1;if(n)return s>=1&&s<=53&&u>=0&&u<=6?function(e,t,a){let n=new Date(0);n.setUTCFullYear(e,0,4);let i=n.getUTCDay()||7;return n.setUTCDate(n.getUTCDate()+((t-1)*7+a+1-i)),n}(t,s,u):new Date(NaN);{let e=new Date(0);return r>=0&&r<=11&&d>=1&&d<=(l[r]||(f(t)?29:28))&&i>=1&&i<=(f(t)?366:365)?(e.setUTCFullYear(t,r,Math.max(i,d)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);let g=a.getTime(),p=0;if(c.time&&isNaN(p=function(e){let t=e.match(d);if(!t)return NaN;let a=u(t[1]),i=u(t[2]),r=u(t[3]);return(24===a?0===i&&0===r:r>=0&&r<60&&i>=0&&i<60&&a>=0&&a<25)?a*n.vh+i*n.yJ+1e3*r:NaN}(c.time)))return new Date(NaN);if(c.timezone){if(isNaN(i=function(e){if("Z"===e)return 0;let t=e.match(s);if(!t)return 0;let a="+"===t[1]?-1:1,i=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return r>=0&&r<=59?a*(i*n.vh+r*n.yJ):NaN}(c.timezone)))return new Date(NaN)}else{let e=new Date(g+p),t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return new Date(g+p+i)}let r={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},o=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function m(e){return e?parseInt(e):1}function u(e){return e&&parseFloat(e.replace(",","."))||0}let l=[31,null,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}}}]);