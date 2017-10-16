/*! jQuery v3.2.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(ja.test(this.type)&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d));
},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},holdReady:function(a){a?r.readyWait++:r.ready(!0)}}),r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);/*
 * bootbox.js [master branch]
 * http://bootboxjs.com/license.txt
 */
;
(function(e, t) {
   "use strict";
   if (typeof define === "function" && define.amd) {
      define(["jquery"], t)
   } else if (typeof exports === "object") {
      module.exports = t(require("jquery"))
   } else {
      e.bootbox = t(e.jQuery)
   }
})(this, function e(t, n) {
   "use strict";

   function o(e) {
      var t = m[i.locale];
      return t ? t[e] : m.en[e]
   }

   function u(e, n, r) {
      e.stopPropagation();
      e.preventDefault();
      var i = t.isFunction(r) && r(e) === false;
      if (!i) {
         n.modal("hide")
      }
   }

   function a(e) {
      var t, n = 0;
      for (t in e) {
         n++
      }
      return n
   }

   function f(e, n) {
      var r = 0;
      t.each(e, function(e, t) {
         n(e, t, r++)
      })
   }

   function l(e) {
      var n;
      var r;
      if (typeof e !== "object") {
         throw new Error("Please supply an object of options")
      }
      if (!e.message) {
         throw new Error("Please specify a message")
      }
      e = t.extend({}, i, e);
      if (!e.buttons) {
         e.buttons = {}
      }
      e.backdrop = e.backdrop ? "static" : false;
      n = e.buttons;
      r = a(n);
      f(n, function(e, i, s) {
         if (t.isFunction(i)) {
            i = n[e] = {
               callback: i
            }
         }
         if (t.type(i) !== "object") {
            throw new Error("button with key " + e + " must be an object")
         }
         if (!i.label) {
            i.label = e
         }
         if (!i.className) {
            if (r <= 2 && s === r - 1) {
               i.className = "btn-primary"
            } else {
               i.className = "btn-default"
            }
         }
      });
      return e
   }

   function c(e, t) {
      var n = e.length;
      var r = {};
      if (n < 1 || n > 2) {
         throw new Error("Invalid argument length")
      }
      if (n === 2 || typeof e[0] === "string") {
         r[t[0]] = e[0];
         r[t[1]] = e[1]
      } else {
         r = e[0]
      }
      return r
   }

   function h(e, n, r) {
      return t.extend(true, {}, e, c(n, r))
   }

   function p(e, t, n, r) {
      var i = {
         className: "bootbox-" + e,
         buttons: d.apply(null, t)
      };
      return v(h(i, r, n), t)
   }

   function d() {
      var e = {};
      for (var t = 0, n = arguments.length; t < n; t++) {
         var r = arguments[t];
         var i = r.toLowerCase();
         var s = r.toUpperCase();
         e[i] = {
            label: o(s)
         }
      }
      return e
   }

   function v(e, t) {
      var r = {};
      f(t, function(e, t) {
         r[t] = true
      });
      f(e.buttons, function(e) {
         if (r[e] === n) {
            throw new Error("button key " + e + " is not allowed (options are " + t.join("\n") + ")")
         }
      });
      return e
   }
   var r = {
      dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'>" + "<div class='modal-dialog'>" + "<div class='modal-content'>" + "<div class='modal-body'><div class='bootbox-body'></div></div>" + "</div>" + "</div>" + "</div>",
      header: "<div class='modal-header'>" + "<h4 class='modal-title'></h4>" + "</div>",
      footer: "<div class='modal-footer'></div>",
      closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
      form: "<form class='bootbox-form'></form>",
      inputs: {
         text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
         textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
         email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
         select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
         checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
         date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
         time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
         number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
         password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
      }
   };
   var i = {
      locale: "en",
      backdrop: true,
      animate: true,
      className: null,
      keyboard: false,
      closeButton: true,
      show: true,
      container: "body"
   };
   var s = {};
   s.defineLocale = function(e, t) {
      if (t) {
         m[e] = {
            OK: t.OK,
            CANCEL: t.CANCEL,
            CONFIRM: t.CONFIRM
         };
         return m[e]
      } else {
         delete m[e];
         return null
      }
   };
   s.alert = function() {
      var e;
      e = p("alert", ["ok"], ["message", "callback"], arguments);
      if (e.callback && !t.isFunction(e.callback)) {
         throw new Error("alert requires callback property to be a function when provided")
      }
      e.buttons.ok.callback = e.onEscape = function() {
         if (t.isFunction(e.callback)) {
            return e.callback()
         }
         return true
      };
      return s.dialog(e)
   };
   s.confirm = function() {
      var e;
      e = p("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);
      e.buttons.cancel.callback = e.onEscape = function() {
         return e.callback(false)
      };
      e.buttons.confirm.callback = function() {
         return e.callback(true)
      };
      if (!t.isFunction(e.callback)) {
         throw new Error("confirm requires a callback")
      }
      return s.dialog(e)
   };
   s.prompt = function() {
      var e;
      var i;
      var o;
      var u;
      var a;
      var l;
      var c;
      u = t(r.form);
      i = {
         className: "bootbox-prompt",
         buttons: d("cancel", "confirm"),
         value: "",
         inputType: "text"
      };
      e = v(h(i, arguments, ["title", "callback"]), ["cancel", "confirm"]);
      l = e.show === n ? true : e.show;
      e.message = u;
      e.buttons.cancel.callback = e.onEscape = function() {
         return e.callback(null)
      };
      e.buttons.confirm.callback = function() {
         var n;
         switch (e.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "select":
            case "date":
            case "time":
            case "number":
            case "password":
               n = a.val();
               break;
            case "checkbox":
               var r = a.find("input:checked");
               n = [];
               f(r, function(e, r) {
                  n.push(t(r).val())
               });
               break
         }
         return e.callback(n)
      };
      e.show = false;
      if (!e.title) {
         throw new Error("prompt requires a title")
      }
      if (!t.isFunction(e.callback)) {
         throw new Error("prompt requires a callback")
      }
      if (!r.inputs[e.inputType]) {
         throw new Error("invalid prompt type")
      }
      a = t(r.inputs[e.inputType]);
      switch (e.inputType) {
         case "text":
         case "textarea":
         case "email":
         case "date":
         case "time":
         case "number":
         case "password":
            a.val(e.value);
            break;
         case "select":
            var p = {};
            c = e.inputOptions || [];
            if (!c.length) {
               throw new Error("prompt with select requires options")
            }
            f(c, function(e, r) {
               var i = a;
               if (r.value === n || r.text === n) {
                  throw new Error("given options in wrong format")
               }
               if (r.group) {
                  if (!p[r.group]) {
                     p[r.group] = t("<optgroup/>").attr("label", r.group)
                  }
                  i = p[r.group]
               }
               i.append("<option value='" + r.value + "'>" + r.text + "</option>")
            });
            f(p, function(e, t) {
               a.append(t)
            });
            a.val(e.value);
            break;
         case "checkbox":
            var m = t.isArray(e.value) ? e.value : [e.value];
            c = e.inputOptions || [];
            if (!c.length) {
               throw new Error("prompt with checkbox requires options")
            }
            if (!c[0].value || !c[0].text) {
               throw new Error("given options in wrong format")
            }
            a = t("<div/>");
            f(c, function(n, i) {
               var s = t(r.inputs[e.inputType]);
               s.find("input").attr("value", i.value);
               s.find("label").append(i.text);
               f(m, function(e, t) {
                  if (t === i.value) {
                     s.find("input").prop("checked", true)
                  }
               });
               a.append(s)
            });
            break
      }
      if (e.placeholder) {
         a.attr("placeholder", e.placeholder)
      }
      if (e.pattern) {
         a.attr("pattern", e.pattern)
      }
      u.append(a);
      u.on("submit", function(e) {
         e.preventDefault();
         e.stopPropagation();
         o.find(".btn-primary").click()
      });
      o = s.dialog(e);
      o.off("shown.bs.modal");
      o.on("shown.bs.modal", function() {
         a.focus()
      });
      if (l === true) {
         o.modal("show")
      }
      return o
   };
   s.dialog = function(e) {
      e = l(e);
      var i = t(r.dialog);
      var s = i.find(".modal-dialog");
      var o = i.find(".modal-body");
      var a = e.buttons;
      var c = "";
      var h = {
         onEscape: e.onEscape
      };
      if (t.fn.modal === n) {
         throw new Error("$.fn.modal is not defined; please double check you have included " + "the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ " + "for more details.")
      }
      f(a, function(e, t) {
         c += "<button data-bb-handler='" + e + "' type='button' class='btn " + t.className + "'>" + t.label + "</button>";
         h[e] = t.callback
      });
      o.find(".bootbox-body").html(e.message);
      if (e.animate === true) {
         i.addClass("fade")
      }
      if (e.className) {
         i.addClass(e.className)
      }
      if (e.size === "large") {
         s.addClass("modal-lg")
      }
      if (e.size === "small") {
         s.addClass("modal-sm")
      }
      if (e.title) {
         o.before(r.header)
      }
      if (e.closeButton) {
         var p = t(r.closeButton);
         if (e.title) {
            i.find(".modal-header").prepend(p)
         } else {
            p.css("margin-top", "-10px").prependTo(o)
         }
      }
      if (e.title) {
         i.find(".modal-title").html(e.title)
      }
      if (c.length) {
         o.after(r.footer);
         i.find(".modal-footer").html(c)
      }
      i.on("hidden.bs.modal", function(e) {
         if (e.target === this) {
            i.remove()
         }
      });
      i.on("shown.bs.modal", function() {
         i.find(".btn-primary:first").focus()
      });
      i.on("escape.close.bb", function(e) {
         if (h.onEscape) {
            u(e, i, h.onEscape)
         }
      });
      i.on("click", ".modal-footer button", function(e) {
         var n = t(this).data("bb-handler");
         u(e, i, h[n])
      });
      i.on("click", ".bootbox-close-button", function(e) {
         u(e, i, h.onEscape)
      });
      i.on("keyup", function(e) {
         if (e.which === 27) {
            i.trigger("escape.close.bb")
         }
      });
      t(e.container).append(i);
      i.modal({
         backdrop: e.backdrop,
         keyboard: e.keyboard || false,
         show: false
      });
      if (e.show) {
         i.modal("show")
      }
      return i
   };
   s.setDefaults = function() {
      var e = {};
      if (arguments.length === 2) {
         e[arguments[0]] = arguments[1]
      } else {
         e = arguments[0]
      }
      t.extend(i, e)
   };
   s.hideAll = function() {
      t(".bootbox").modal("hide");
      return s
   };
   var m = {
      br: {
         OK: "OK",
         CANCEL: "Cancelar",
         CONFIRM: "Sim"
      },
      cs: {
         OK: "OK",
         CANCEL: "Zrušit",
         CONFIRM: "Potvrdit"
      },
      da: {
         OK: "OK",
         CANCEL: "Annuller",
         CONFIRM: "Accepter"
      },
      de: {
         OK: "OK",
         CANCEL: "Abbrechen",
         CONFIRM: "Akzeptieren"
      },
      el: {
         OK: "Εντάξει",
         CANCEL: "Ακύρωση",
         CONFIRM: "Επιβεβαίωση"
      },
      en: {
         OK: "OK",
         CANCEL: "Cancel",
         CONFIRM: "OK"
      },
      es: {
         OK: "OK",
         CANCEL: "Cancelar",
         CONFIRM: "Aceptar"
      },
      et: {
         OK: "OK",
         CANCEL: "Katkesta",
         CONFIRM: "OK"
      },
      fi: {
         OK: "OK",
         CANCEL: "Peruuta",
         CONFIRM: "OK"
      },
      fr: {
         OK: "OK",
         CANCEL: "Annuler",
         CONFIRM: "D'accord"
      },
      he: {
         OK: "אישור",
         CANCEL: "ביטול",
         CONFIRM: "אישור"
      },
      hu: {
         OK: "OK",
         CANCEL: "Mégsem",
         CONFIRM: "Megerősít"
      },
      hr: {
         OK: "OK",
         CANCEL: "Odustani",
         CONFIRM: "Potvrdi"
      },
      id: {
         OK: "OK",
         CANCEL: "Batal",
         CONFIRM: "OK"
      },
      it: {
         OK: "OK",
         CANCEL: "Annulla",
         CONFIRM: "Conferma"
      },
      ja: {
         OK: "OK",
         CANCEL: "キャンセル",
         CONFIRM: "確認"
      },
      lt: {
         OK: "Gerai",
         CANCEL: "Atšaukti",
         CONFIRM: "Patvirtinti"
      },
      lv: {
         OK: "Labi",
         CANCEL: "Atcelt",
         CONFIRM: "Apstiprināt"
      },
      nl: {
         OK: "OK",
         CANCEL: "Annuleren",
         CONFIRM: "Accepteren"
      },
      no: {
         OK: "OK",
         CANCEL: "Avbryt",
         CONFIRM: "OK"
      },
      pl: {
         OK: "OK",
         CANCEL: "Anuluj",
         CONFIRM: "Potwierdź"
      },
      pt: {
         OK: "OK",
         CANCEL: "Cancelar",
         CONFIRM: "Confirmar"
      },
      ru: {
         OK: "OK",
         CANCEL: "Отмена",
         CONFIRM: "Применить"
      },
      sv: {
         OK: "OK",
         CANCEL: "Avbryt",
         CONFIRM: "OK"
      },
      tr: {
         OK: "Tamam",
         CANCEL: "İptal",
         CONFIRM: "Onayla"
      },
      zh_CN: {
         OK: "OK",
         CANCEL: "取消",
         CONFIRM: "确认"
      },
      zh_TW: {
         OK: "OK",
         CANCEL: "取消",
         CONFIRM: "確認"
      }
   };
   s.init = function(n) {
      return e(n || t)
   };
   return s
})

/*
 * FitText.js 1.2
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
;
(function(e) {
   e.fn.fitText = function(t, n) {
      var r = t || 1,
         i = e.extend({
            minFontSize: Number.NEGATIVE_INFINITY,
            maxFontSize: Number.POSITIVE_INFINITY
         }, n);
      return this.each(function() {
         var t = e(this);
         var n = function() {
            t.css("font-size", Math.max(Math.min(t.width() / (r * 10), parseFloat(i.maxFontSize)), parseFloat(i.minFontSize)))
         };
         n();
         e(window).on("resize.fittext orientationchange.fittext", n)
      })
   }
})(jQuery)

/*
 * jQuery.fullscreen library v0.4.2
 * Copyright (c) 2013 Vladimir Zhuravlev
 * @license https://github.com/private-face/jquery.fullscreen/blob/master/LICENSE
 */
;
(function(e) {
   function t(e) {
      return typeof e !== "undefined"
   }

   function n(t, n, r) {
      var i = function() {};
      i.prototype = n.prototype;
      t.prototype = new i;
      t.prototype.constructor = t;
      n.prototype.constructor = n;
      t._super = n.prototype;
      if (r) {
         e.extend(t.prototype, r)
      }
   }

   function s(e, n) {
      var s;
      if (typeof e === "string") {
         n = e;
         e = document
      }
      for (var o = 0; o < r.length; ++o) {
         n = n.replace(r[o][0], r[o][1]);
         for (var u = 0; u < i.length; ++u) {
            s = i[u];
            s += u === 0 ? n : n.charAt(0).toUpperCase() + n.substr(1);
            if (t(e[s])) {
               return e[s]
            }
         }
      }
      return void 0
   }
   var r = [
      ["", ""],
      ["exit", "cancel"],
      ["screen", "Screen"]
   ];
   var i = ["", "o", "ms", "moz", "webkit", "webkitCurrent"];
   var o = navigator.userAgent;
   var u = s("fullscreenEnabled");
   var a = o.indexOf("Android") !== -1 && o.indexOf("Chrome") !== -1;
   var f = !a && t(s("fullscreenElement")) && (!t(u) || u === true);
   var l = e.fn.jquery.split(".");
   var c = parseInt(l[0]) < 2 && parseInt(l[1]) < 7;
   var h = function() {
      this.__options = null;
      this._fullScreenElement = null;
      this.__savedStyles = {}
   };
   h.prototype = {
      _DEFAULT_OPTIONS: {
         styles: {
            boxSizing: "border-box",
            MozBoxSizing: "border-box",
            WebkitBoxSizing: "border-box"
         },
         toggleClass: null
      },
      __documentOverflow: "visible",
      __htmlOverflow: "visible",
      _preventDocumentScroll: function() {
         this.__documentOverflow = e("body")[0].style.overflow;
         this.__htmlOverflow = e("html")[0].style.overflow
      },
      _allowDocumentScroll: function() {
         e("body")[0].style.overflow = this.__documentOverflow;
         e("html")[0].style.overflow = this.__htmlOverflow
      },
      _fullScreenChange: function() {
         if (!this.__options) return;
         if (!this.isFullScreen()) {
            this._allowDocumentScroll();
            this._revertStyles();
            this._triggerEvents();
            this._fullScreenElement = null
         } else {
            this._preventDocumentScroll();
            this._triggerEvents()
         }
      },
      _fullScreenError: function(t) {
         if (!this.__options) return;
         this._revertStyles();
         this._fullScreenElement = null;
         if (t) {
            e(document).trigger("fscreenerror", [t])
         }
      },
      _triggerEvents: function() {
         e(this._fullScreenElement).trigger(this.isFullScreen() ? "fscreenopen" : "fscreenclose");
         e(document).trigger("fscreenchange", [this.isFullScreen(), this._fullScreenElement])
      },
      _saveAndApplyStyles: function() {
         var t = e(this._fullScreenElement);
         this.__savedStyles = {};
         for (var n in this.__options.styles) {
            this.__savedStyles[n] = this._fullScreenElement.style[n];
            this._fullScreenElement.style[n] = this.__options.styles[n]
         }
         if (this.__options.toggleClass) {
            t.addClass(this.__options.toggleClass)
         }
      },
      _revertStyles: function() {
         var t = e(this._fullScreenElement);
         for (var n in this.__options.styles) {
            this._fullScreenElement.style[n] = this.__savedStyles[n]
         }
         if (this.__options.toggleClass) {
            t.removeClass(this.__options.toggleClass)
         }
      },
      open: function(t, n) {
         if (t === this._fullScreenElement) {
            return
         }
         if (this.isFullScreen()) {
            this.exit()
         }
         this._fullScreenElement = t;
         this.__options = e.extend(true, {}, this._DEFAULT_OPTIONS, n);
         this._saveAndApplyStyles()
      },
      exit: null,
      isFullScreen: null,
      isNativelySupported: function() {
         return f
      }
   };
   var p = function() {
      p._super.constructor.apply(this, arguments);
      this.exit = e.proxy(s("exitFullscreen"), document);
      this._DEFAULT_OPTIONS = e.extend(true, {}, this._DEFAULT_OPTIONS, {
         styles: {
            width: "100%",
            height: "100%"
         }
      });
      e(document).bind(this._prefixedString("fullscreenchange") + " MSFullscreenChange", e.proxy(this._fullScreenChange, this)).bind(this._prefixedString("fullscreenerror") + " MSFullscreenError", e.proxy(this._fullScreenError, this))
   };
   n(p, h, {
      VENDOR_PREFIXES: ["", "o", "moz", "webkit"],
      _prefixedString: function(t) {
         return e.map(this.VENDOR_PREFIXES, function(e) {
            return e + t
         }).join(" ")
      },
      open: function(e, t) {
         p._super.open.apply(this, arguments);
         var n = s(e, "requestFullscreen");
         n.call(e)
      },
      exit: e.noop,
      isFullScreen: function() {
         return s("fullscreenElement") !== null
      },
      element: function() {
         return s("fullscreenElement")
      }
   });
   var d = function() {
      d._super.constructor.apply(this, arguments);
      this._DEFAULT_OPTIONS = e.extend({}, this._DEFAULT_OPTIONS, {
         styles: {
            position: "fixed",
            zIndex: "2147483647",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
         }
      });
      this.__delegateKeydownHandler()
   };
   n(d, h, {
      __isFullScreen: false,
      __delegateKeydownHandler: function() {
         var t = e(document);
         t.delegate("*", "keydown.fullscreen", e.proxy(this.__keydownHandler, this));
         var n = c ? t.data("events") : e._data(document).events;
         var r = n["keydown"];
         if (!c) {
            r.splice(0, 0, r.splice(r.delegateCount - 1, 1)[0])
         } else {
            n.live.unshift(n.live.pop())
         }
      },
      __keydownHandler: function(e) {
         if (this.isFullScreen() && e.which === 27) {
            this.exit();
            return false
         }
         return true
      },
      _revertStyles: function() {
         d._super._revertStyles.apply(this, arguments);
         this._fullScreenElement.offsetHeight
      },
      open: function(e) {
         d._super.open.apply(this, arguments);
         this.__isFullScreen = true;
         this._fullScreenChange()
      },
      exit: function() {
         this.__isFullScreen = false;
         this._fullScreenChange()
      },
      isFullScreen: function() {
         return this.__isFullScreen
      },
      element: function() {
         return this.__isFullScreen ? this._fullScreenElement : null
      }
   });
   e.fullscreen = f ? new p : new d;
   e.fn.fullscreen = function(t) {
      var n = this[0];
      t = e.extend({
         toggleClass: null,
         overflow: "hidden"
      }, t);
      t.styles = {
         overflow: t.overflow
      };
      delete t.overflow;
      if (n) {
         e.fullscreen.open(n, t)
      }
      return this
   }
})(jQuery)

/*
 * Bootstrap Multiselect v0.9.8 (https://github.com/davidstutz/bootstrap-multiselect)
 * Dual licensed under the BSD-3-Clause and the Apache License, Version 2.0.
 * Copyright 2012 - 2014 David Stutz
 */
;
! function(e) {
   "use strict";

   function t(e) {
      return ko.isObservable(e) && !(e.destroyAll === undefined)
   }

   function n(e, t) {
      for (var n = 0; n < e.length; ++n) {
         t(e[n])
      }
   }

   function r(t, n) {
      this.$select = e(t);
      this.options = this.mergeOptions(e.extend({}, n, this.$select.data()));
      this.originalOptions = this.$select.clone()[0].options;
      this.query = "";
      this.searchTimeout = null;
      this.options.multiple = this.$select.attr("multiple") === "multiple";
      this.options.onChange = e.proxy(this.options.onChange, this);
      this.options.onDropdownShow = e.proxy(this.options.onDropdownShow, this);
      this.options.onDropdownHide = e.proxy(this.options.onDropdownHide, this);
      this.options.onDropdownShown = e.proxy(this.options.onDropdownShown, this);
      this.options.onDropdownHidden = e.proxy(this.options.onDropdownHidden, this);
      this.buildContainer();
      this.buildButton();
      this.buildDropdown();
      this.buildSelectAll();
      this.buildDropdownOptions();
      this.buildFilter();
      this.updateButtonText();
      this.updateSelectAll();
      if (this.options.disableIfEmpty && e("option", this.$select).length <= 0) {
         this.disable()
      }
      this.$select.hide().after(this.$container)
   }
   if (typeof ko !== "undefined" && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
      ko.bindingHandlers.multiselect = {
         init: function(r, i, s, o, u) {
            var a = s().selectedOptions;
            var f = ko.utils.unwrapObservable(i());
            e(r).multiselect(f);
            if (t(a)) {
               e(r).multiselect("select", ko.utils.unwrapObservable(a));
               a.subscribe(function(t) {
                  var i = [],
                     s = [];
                  n(t, function(e) {
                     switch (e.status) {
                        case "added":
                           i.push(e.value);
                           break;
                        case "deleted":
                           s.push(e.value);
                           break
                     }
                  });
                  if (i.length > 0) {
                     e(r).multiselect("select", i)
                  }
                  if (s.length > 0) {
                     e(r).multiselect("deselect", s)
                  }
               }, null, "arrayChange")
            }
         },
         update: function(n, r, i, s, o) {
            var u = i().options,
               a = e(n).data("multiselect"),
               f = ko.utils.unwrapObservable(r());
            if (t(u)) {
               u.subscribe(function(t) {
                  e(n).multiselect("rebuild")
               })
            }
            if (!a) {
               e(n).multiselect(f)
            } else {
               a.updateOriginalOptions()
            }
         }
      }
   }
   r.prototype = {
      defaults: {
         buttonText: function(t, n) {
            if (t.length === 0) {
               return this.nonSelectedText + ' <b class="caret"></b>'
            } else if (t.length == e("option", e(n)).length) {
               return this.allSelectedText + ' <b class="caret"></b>'
            } else if (t.length > this.numberDisplayed) {
               return t.length + " " + this.nSelectedText + ' <b class="caret"></b>'
            } else {
               var r = "";
               t.each(function() {
                  var t = e(this).attr("label") !== undefined ? e(this).attr("label") : e(this).html();
                  r += t + ", "
               });
               return r.substr(0, r.length - 2) + ' <b class="caret"></b>'
            }
         },
         buttonTitle: function(t, n) {
            if (t.length === 0) {
               return this.nonSelectedText
            } else {
               var r = "";
               t.each(function() {
                  r += e(this).text() + ", "
               });
               return r.substr(0, r.length - 2)
            }
         },
         label: function(t) {
            return e(t).attr("label") || e(t).html()
         },
         onChange: function(e, t) {},
         onDropdownShow: function(e) {},
         onDropdownHide: function(e) {},
         onDropdownShown: function(e) {},
         onDropdownHidden: function(e) {},
         buttonClass: "btn btn-default",
         buttonWidth: "auto",
         buttonContainer: '<div class="btn-group" />',
         dropRight: false,
         selectedClass: "active",
         maxHeight: false,
         checkboxName: false,
         includeSelectAllOption: false,
         includeSelectAllIfMoreThan: 0,
         selectAllText: " Select all",
         selectAllValue: "multiselect-all",
         selectAllName: false,
         enableFiltering: false,
         enableCaseInsensitiveFiltering: false,
         enableClickableOptGroups: false,
         filterPlaceholder: "Search",
         filterBehavior: "text",
         includeFilterClearBtn: true,
         preventInputChangeEvent: false,
         nonSelectedText: "None selected",
         nSelectedText: "selected",
         allSelectedText: "All selected",
         numberDisplayed: 3,
         disableIfEmpty: false,
         templates: {
            button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
            ul: '<ul class="multiselect-container dropdown-menu"></ul>',
            filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
            filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove"></i></button></span>',
            li: '<li><a href="javascript:void(0);"><label></label></a></li>',
            divider: '<li class="multiselect-item divider"></li>',
            liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
         }
      },
      constructor: r,
      buildContainer: function() {
         this.$container = e(this.options.buttonContainer);
         this.$container.on("show.bs.dropdown", this.options.onDropdownShow);
         this.$container.on("hide.bs.dropdown", this.options.onDropdownHide);
         this.$container.on("shown.bs.dropdown", this.options.onDropdownShown);
         this.$container.on("hidden.bs.dropdown", this.options.onDropdownHidden)
      },
      buildButton: function() {
         this.$button = e(this.options.templates.button).addClass(this.options.buttonClass);
         if (this.$select.prop("disabled")) {
            this.disable()
         } else {
            this.enable()
         }
         if (this.options.buttonWidth && this.options.buttonWidth !== "auto") {
            this.$button.css({
               width: this.options.buttonWidth
            });
            this.$container.css({
               width: this.options.buttonWidth
            })
         }
         var t = this.$select.attr("tabindex");
         if (t) {
            this.$button.attr("tabindex", t)
         }
         this.$container.prepend(this.$button)
      },
      buildDropdown: function() {
         this.$ul = e(this.options.templates.ul);
         if (this.options.dropRight) {
            this.$ul.addClass("pull-right")
         }
         if (this.options.maxHeight) {
            this.$ul.css({
               "max-height": this.options.maxHeight + "px",
               "overflow-y": "auto",
               "overflow-x": "hidden"
            })
         }
         this.$container.append(this.$ul)
      },
      buildDropdownOptions: function() {
         this.$select.children().each(e.proxy(function(t, n) {
            var r = e(n);
            var i = r.prop("tagName").toLowerCase();
            if (r.prop("value") === this.options.selectAllValue) {
               return
            }
            if (i === "optgroup") {
               this.createOptgroup(n)
            } else if (i === "option") {
               if (r.data("role") === "divider") {
                  this.createDivider()
               } else {
                  this.createOptionValue(n)
               }
            }
         }, this));
         e("li input", this.$ul).on("change", e.proxy(function(t) {
            var n = e(t.target);
            var r = n.prop("checked") || false;
            var i = n.val() === this.options.selectAllValue;
            if (this.options.selectedClass) {
               if (r) {
                  n.closest("li").addClass(this.options.selectedClass)
               } else {
                  n.closest("li").removeClass(this.options.selectedClass)
               }
            }
            var s = n.val();
            var o = this.getOptionByValue(s);
            var u = e("option", this.$select).not(o);
            var a = e("input", this.$container).not(n);
            if (i) {
               if (r) {
                  this.selectAll()
               } else {
                  this.deselectAll()
               }
            }
            if (!i) {
               if (r) {
                  o.prop("selected", true);
                  if (this.options.multiple) {
                     o.prop("selected", true)
                  } else {
                     if (this.options.selectedClass) {
                        e(a).closest("li").removeClass(this.options.selectedClass)
                     }
                     e(a).prop("checked", false);
                     u.prop("selected", false);
                     this.$button.click()
                  }
                  if (this.options.selectedClass === "active") {
                     u.closest("a").css("outline", "")
                  }
               } else {
                  o.prop("selected", false)
               }
            }
            this.$select.change();
            this.updateButtonText();
            this.updateSelectAll();
            this.options.onChange(o, r);
            if (this.options.preventInputChangeEvent) {
               return false
            }
         }, this));
         e("li a", this.$ul).on("touchstart click", function(t) {
            t.stopPropagation();
            var n = e(t.target);
            if (document.getSelection().type === "Range") {
               var r = e(this).find("input:first");
               r.prop("checked", !r.prop("checked")).trigger("change")
            }
            if (t.shiftKey) {
               var i = n.prop("checked") || false;
               if (i) {
                  var s = n.closest("li").siblings('li[class="active"]:first');
                  var o = n.closest("li").index();
                  var u = s.index();
                  if (o > u) {
                     n.closest("li").prevUntil(s).each(function() {
                        e(this).find("input:first").prop("checked", true).trigger("change")
                     })
                  } else {
                     n.closest("li").nextUntil(s).each(function() {
                        e(this).find("input:first").prop("checked", true).trigger("change")
                     })
                  }
               }
            }
            n.blur()
         });
         this.$container.off("keydown.multiselect").on("keydown.multiselect", e.proxy(function(t) {
            if (e('input[type="text"]', this.$container).is(":focus")) {
               return
            }
            if (t.keyCode === 9 && this.$container.hasClass("open")) {
               this.$button.click()
            } else {
               var n = e(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
               if (!n.length) {
                  return
               }
               var r = n.index(n.filter(":focus"));
               if (t.keyCode === 38 && r > 0) {
                  r--
               } else if (t.keyCode === 40 && r < n.length - 1) {
                  r++
               } else if (!~r) {
                  r = 0
               }
               var i = n.eq(r);
               i.focus();
               if (t.keyCode === 32 || t.keyCode === 13) {
                  var s = i.find("input");
                  s.prop("checked", !s.prop("checked"));
                  s.change()
               }
               t.stopPropagation();
               t.preventDefault()
            }
         }, this));
         if (this.options.enableClickableOptGroups && this.options.multiple) {
            e("li.multiselect-group", this.$ul).on("click", e.proxy(function(t) {
               t.stopPropagation();
               var n = e(t.target).parent();
               var r = n.nextUntil("li.multiselect-group");
               var i = true;
               var s = r.find("input");
               s.each(function() {
                  i = i && e(this).prop("checked")
               });
               s.prop("checked", !i).trigger("change")
            }, this))
         }
      },
      createOptionValue: function(t) {
         var n = e(t);
         if (n.is(":selected")) {
            n.prop("selected", true)
         }
         var r = this.options.label(t);
         var i = n.val();
         var s = this.options.multiple ? "checkbox" : "radio";
         var o = e(this.options.templates.li);
         var u = e("label", o);
         u.addClass(s);
         var a = e("<input/>").attr("type", s);
         if (this.options.checkboxName) {
            a.attr("name", this.options.checkboxName)
         }
         u.append(a);
         var f = n.prop("selected") || false;
         a.val(i);
         if (i === this.options.selectAllValue) {
            o.addClass("multiselect-item multiselect-all");
            a.parent().parent().addClass("multiselect-all")
         }
         u.append(" " + r);
         u.attr("title", n.attr("title"));
         this.$ul.append(o);
         if (n.is(":disabled")) {
            a.attr("disabled", "disabled").prop("disabled", true).closest("a").attr("tabindex", "-1").closest("li").addClass("disabled")
         }
         a.prop("checked", f);
         if (f && this.options.selectedClass) {
            a.closest("li").addClass(this.options.selectedClass)
         }
      },
      createDivider: function(t) {
         var n = e(this.options.templates.divider);
         this.$ul.append(n)
      },
      createOptgroup: function(t) {
         var n = e(t).prop("label");
         var r = e(this.options.templates.liGroup);
         e("label", r).text(n);
         if (this.options.enableClickableOptGroups) {
            r.addClass("multiselect-group-clickable")
         }
         this.$ul.append(r);
         if (e(t).is(":disabled")) {
            r.addClass("disabled")
         }
         e("option", t).each(e.proxy(function(e, t) {
            this.createOptionValue(t)
         }, this))
      },
      buildSelectAll: function() {
         if (typeof this.options.selectAllValue === "number") {
            this.options.selectAllValue = this.options.selectAllValue.toString()
         }
         var t = this.hasSelectAll();
         if (!t && this.options.includeSelectAllOption && this.options.multiple && e("option", this.$select).length > this.options.includeSelectAllIfMoreThan) {
            if (this.options.includeSelectAllDivider) {
               this.$ul.prepend(e(this.options.templates.divider))
            }
            var n = e(this.options.templates.li);
            e("label", n).addClass("checkbox");
            if (this.options.selectAllName) {
               e("label", n).append('<input type="checkbox" name="' + this.options.selectAllName + '" />')
            } else {
               e("label", n).append('<input type="checkbox" />')
            }
            var r = e("input", n);
            r.val(this.options.selectAllValue);
            n.addClass("multiselect-item multiselect-all");
            r.parent().parent().addClass("multiselect-all");
            e("label", n).append(" " + this.options.selectAllText);
            this.$ul.prepend(n);
            r.prop("checked", false)
         }
      },
      buildFilter: function() {
         if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
            var t = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);
            if (this.$select.find("option").length >= t) {
               this.$filter = e(this.options.templates.filter);
               e("input", this.$filter).attr("placeholder", this.options.filterPlaceholder);
               if (this.options.includeFilterClearBtn) {
                  var n = e(this.options.templates.filterClearBtn);
                  n.on("click", e.proxy(function(t) {
                     clearTimeout(this.searchTimeout);
                     this.$filter.find(".multiselect-search").val("");
                     e("li", this.$ul).show().removeClass("filter-hidden");
                     this.updateSelectAll()
                  }, this));
                  this.$filter.find(".input-group").append(n)
               }
               this.$ul.prepend(this.$filter);
               this.$filter.val(this.query).on("click", function(e) {
                  e.stopPropagation()
               }).on("input keydown", e.proxy(function(t) {
                  if (t.which === 13) {
                     t.preventDefault()
                  }
                  clearTimeout(this.searchTimeout);
                  this.searchTimeout = this.asyncFunction(e.proxy(function() {
                     if (this.query !== t.target.value) {
                        this.query = t.target.value;
                        var n, r;
                        e.each(e("li", this.$ul), e.proxy(function(t, i) {
                           var s = e("input", i).val();
                           var o = e("label", i).text();
                           var u = "";
                           if (this.options.filterBehavior === "text") {
                              u = o
                           } else if (this.options.filterBehavior === "value") {
                              u = s
                           } else if (this.options.filterBehavior === "both") {
                              u = o + "\n" + s
                           }
                           if (s !== this.options.selectAllValue && o) {
                              var a = false;
                              if (this.options.enableCaseInsensitiveFiltering && u.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                                 a = true
                              } else if (u.indexOf(this.query) > -1) {
                                 a = true
                              }
                              e(i).toggle(a).toggleClass("filter-hidden", !a);
                              if (e(i).hasClass("multiselect-group")) {
                                 n = i;
                                 r = a
                              } else {
                                 if (a) {
                                    e(n).show().removeClass("filter-hidden")
                                 }
                                 if (!a && r) {
                                    e(i).show().removeClass("filter-hidden")
                                 }
                              }
                           }
                        }, this))
                     }
                     this.updateSelectAll()
                  }, this), 300, this)
               }, this))
            }
         }
      },
      destroy: function() {
         this.$container.remove();
         this.$select.show();
         this.$select.data("multiselect", null)
      },
      refresh: function() {
         e("option", this.$select).each(e.proxy(function(t, n) {
            var r = e("li input", this.$ul).filter(function() {
               return e(this).val() === e(n).val()
            });
            if (e(n).is(":selected")) {
               r.prop("checked", true);
               if (this.options.selectedClass) {
                  r.closest("li").addClass(this.options.selectedClass)
               }
            } else {
               r.prop("checked", false);
               if (this.options.selectedClass) {
                  r.closest("li").removeClass(this.options.selectedClass)
               }
            }
            if (e(n).is(":disabled")) {
               r.attr("disabled", "disabled").prop("disabled", true).closest("li").addClass("disabled")
            } else {
               r.prop("disabled", false).closest("li").removeClass("disabled")
            }
         }, this));
         this.updateButtonText();
         this.updateSelectAll()
      },
      select: function(t, n) {
         if (!e.isArray(t)) {
            t = [t]
         }
         for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (i === null || i === undefined) {
               continue
            }
            var s = this.getOptionByValue(i);
            var o = this.getInputByValue(i);
            if (s === undefined || o === undefined) {
               continue
            }
            if (!this.options.multiple) {
               this.deselectAll(false)
            }
            if (this.options.selectedClass) {
               o.closest("li").addClass(this.options.selectedClass)
            }
            o.prop("checked", true);
            s.prop("selected", true)
         }
         this.updateButtonText();
         this.updateSelectAll();
         if (n && t.length === 1) {
            this.options.onChange(s, true)
         }
      },
      clearSelection: function() {
         this.deselectAll(false);
         this.updateButtonText();
         this.updateSelectAll()
      },
      deselect: function(t, n) {
         if (!e.isArray(t)) {
            t = [t]
         }
         for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (i === null || i === undefined) {
               continue
            }
            var s = this.getOptionByValue(i);
            var o = this.getInputByValue(i);
            if (s === undefined || o === undefined) {
               continue
            }
            if (this.options.selectedClass) {
               o.closest("li").removeClass(this.options.selectedClass)
            }
            o.prop("checked", false);
            s.prop("selected", false)
         }
         this.updateButtonText();
         this.updateSelectAll();
         if (n && t.length === 1) {
            this.options.onChange(s, false)
         }
      },
      selectAll: function(t) {
         var t = typeof t === "undefined" ? true : t;
         var n = e("li input[type='checkbox']:enabled", this.$ul);
         var r = n.filter(":visible");
         var i = n.length;
         var s = r.length;
         if (t) {
            r.prop("checked", true);
            e("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass)
         } else {
            n.prop("checked", true);
            e("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass)
         }
         if (i === s || t === false) {
            e("option:enabled", this.$select).prop("selected", true)
         } else {
            var o = r.map(function() {
               return e(this).val()
            }).get();
            e("option:enabled", this.$select).filter(function(t) {
               return e.inArray(e(this).val(), o) !== -1
            }).prop("selected", true)
         }
      },
      deselectAll: function(t) {
         var t = typeof t === "undefined" ? true : t;
         if (t) {
            var n = e("li input[type='checkbox']:enabled", this.$ul).filter(":visible");
            n.prop("checked", false);
            var r = n.map(function() {
               return e(this).val()
            }).get();
            e("option:enabled", this.$select).filter(function(t) {
               return e.inArray(e(this).val(), r) !== -1
            }).prop("selected", false);
            if (this.options.selectedClass) {
               e("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass)
            }
         } else {
            e("li input[type='checkbox']:enabled", this.$ul).prop("checked", false);
            e("option:enabled", this.$select).prop("selected", false);
            if (this.options.selectedClass) {
               e("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass)
            }
         }
      },
      rebuild: function() {
         this.$ul.html("");
         this.options.multiple = this.$select.attr("multiple") === "multiple";
         this.buildSelectAll();
         this.buildDropdownOptions();
         this.buildFilter();
         this.updateButtonText();
         this.updateSelectAll();
         if (this.options.disableIfEmpty && e("option", this.$select).length <= 0) {
            this.disable()
         }
         if (this.options.dropRight) {
            this.$ul.addClass("pull-right")
         }
      },
      dataprovider: function(t) {
         var r = "";
         var i = 0;
         var s = e("");
         e.each(t, function(t, o) {
            var u;
            if (e.isArray(o.children)) {
               i++;
               u = e("<optgroup/>").attr({
                  label: o.label || "Group " + i
               });
               n(o.children, function(t) {
                  u.append(e("<option/>").attr({
                     value: t.value,
                     label: t.label || t.value,
                     title: t.title,
                     selected: !!t.selected
                  }))
               });
               r += "</optgroup>"
            } else {
               u = e("<option/>").attr({
                  value: o.value,
                  label: o.label || o.value,
                  title: o.title,
                  selected: !!o.selected
               })
            }
            s = s.add(u)
         });
         this.$select.empty().append(s);
         this.rebuild()
      },
      enable: function() {
         this.$select.prop("disabled", false);
         this.$button.prop("disabled", false).removeClass("disabled")
      },
      disable: function() {
         this.$select.prop("disabled", true);
         this.$button.prop("disabled", true).addClass("disabled")
      },
      setOptions: function(e) {
         this.options = this.mergeOptions(e)
      },
      mergeOptions: function(t) {
         return e.extend(true, {}, this.defaults, t)
      },
      hasSelectAll: function() {
         return e("li." + this.options.selectAllValue, this.$ul).length > 0
      },
      updateSelectAll: function() {
         if (this.hasSelectAll()) {
            var t = e("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
            var n = t.length;
            var r = t.filter(":checked").length;
            var i = e("li." + this.options.selectAllValue, this.$ul);
            var s = i.find("input");
            if (r > 0 && r === n) {
               s.prop("checked", true);
               i.addClass(this.options.selectedClass)
            } else {
               s.prop("checked", false);
               i.removeClass(this.options.selectedClass)
            }
         }
      },
      updateButtonText: function() {
         var t = this.getSelected();
         e(".multiselect", this.$container).html(this.options.buttonText(t, this.$select));
         e(".multiselect", this.$container).attr("title", this.options.buttonTitle(t, this.$select))
      },
      getSelected: function() {
         return e("option", this.$select).filter(":selected")
      },
      getOptionByValue: function(t) {
         var n = e("option", this.$select);
         var r = t.toString();
         for (var i = 0; i < n.length; i = i + 1) {
            var s = n[i];
            if (s.value === r) {
               return e(s)
            }
         }
      },
      getInputByValue: function(t) {
         var n = e("li input", this.$ul);
         var r = t.toString();
         for (var i = 0; i < n.length; i = i + 1) {
            var s = n[i];
            if (s.value === r) {
               return e(s)
            }
         }
      },
      updateOriginalOptions: function() {
         this.originalOptions = this.$select.clone()[0].options
      },
      asyncFunction: function(e, t, n) {
         var r = Array.prototype.slice.call(arguments, 3);
         return setTimeout(function() {
            e.apply(n || window, r)
         }, t)
      }
   };
   e.fn.multiselect = function(t, n, i) {
      return this.each(function() {
         var s = e(this).data("multiselect");
         var o = typeof t === "object" && t;
         if (!s) {
            s = new r(this, o);
            e(this).data("multiselect", s)
         }
         if (typeof t === "string") {
            s[t](n, i);
            if (t === "destroy") {
               e(this).data("multiselect", false)
            }
         }
      })
   };
   e.fn.multiselect.Constructor = r;
   e(function() {
      e("select[data-role=multiselect]").multiselect()
   })
}(window.jQuery)

/*
 * Syntax highlighting with language autodetection.
 * https://highlightjs.org/
 */
;
var hljs = new function() {
   function e(e) {
      return e.replace(/&/gm, "&").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
   }

   function t(e) {
      return e.nodeName.toLowerCase()
   }

   function n(e, t) {
      var n = e && e.exec(t);
      return n && n.index == 0
   }

   function r(e) {
      var t = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
      t = t.map(function(e) {
         return e.replace(/^lang(uage)?-/, "")
      });
      return t.filter(function(e) {
         return w(e) || /no(-?)highlight/.test(e)
      })[0]
   }

   function i(e, t) {
      var n = {};
      for (var r in e) {
         n[r] = e[r]
      }
      if (t) {
         for (var r in t) {
            n[r] = t[r]
         }
      }
      return n
   }

   function s(e) {
      var n = [];
      (function r(e, i) {
         for (var s = e.firstChild; s; s = s.nextSibling) {
            if (s.nodeType == 3) {
               i += s.nodeValue.length
            } else {
               if (s.nodeType == 1) {
                  n.push({
                     event: "start",
                     offset: i,
                     node: s
                  });
                  i = r(s, i);
                  if (!t(s).match(/br|hr|img|input/)) {
                     n.push({
                        event: "stop",
                        offset: i,
                        node: s
                     })
                  }
               }
            }
         }
         return i
      })(e, 0);
      return n
   }

   function o(n, r, i) {
      function a() {
         if (!n.length || !r.length) {
            return n.length ? n : r
         }
         if (n[0].offset != r[0].offset) {
            return n[0].offset < r[0].offset ? n : r
         }
         return r[0].event == "start" ? n : r
      }

      function f(n) {
         function r(t) {
            return " " + t.nodeName + '="' + e(t.value) + '"'
         }
         o += "<" + t(n) + Array.prototype.map.call(n.attributes, r).join("") + ">"
      }

      function l(e) {
         o += "</" + t(e) + ">"
      }

      function c(e) {
         (e.event == "start" ? f : l)(e.node)
      }
      var s = 0;
      var o = "";
      var u = [];
      while (n.length || r.length) {
         var h = a();
         o += e(i.substr(s, h[0].offset - s));
         s = h[0].offset;
         if (h == n) {
            u.reverse().forEach(l);
            do {
               c(h.splice(0, 1)[0]);
               h = a()
            } while (h == n && h.length && h[0].offset == s);
            u.reverse().forEach(f)
         } else {
            if (h[0].event == "start") {
               u.push(h[0].node)
            } else {
               u.pop()
            }
            c(h.splice(0, 1)[0])
         }
      }
      return o + e(i.substr(s))
   }

   function u(e) {
      function t(e) {
         return e && e.source || e
      }

      function n(n, r) {
         return RegExp(t(n), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
      }

      function r(s, o) {
         if (s.compiled) {
            return
         }
         s.compiled = true;
         s.k = s.k || s.bK;
         if (s.k) {
            var u = {};
            var a = function(t, n) {
               if (e.cI) {
                  n = n.toLowerCase()
               }
               n.split(" ").forEach(function(e) {
                  var n = e.split("|");
                  u[n[0]] = [t, n[1] ? Number(n[1]) : 1]
               })
            };
            if (typeof s.k == "string") {
               a("keyword", s.k)
            } else {
               Object.keys(s.k).forEach(function(e) {
                  a(e, s.k[e])
               })
            }
            s.k = u
         }
         s.lR = n(s.l || /\b[A-Za-z0-9_]+\b/, true);
         if (o) {
            if (s.bK) {
               s.b = "\\b(" + s.bK.split(" ").join("|") + ")\\b"
            }
            if (!s.b) {
               s.b = /\B|\b/
            }
            s.bR = n(s.b);
            if (!s.e && !s.eW) {
               s.e = /\B|\b/
            }
            if (s.e) {
               s.eR = n(s.e)
            }
            s.tE = t(s.e) || "";
            if (s.eW && o.tE) {
               s.tE += (s.e ? "|" : "") + o.tE
            }
         }
         if (s.i) {
            s.iR = n(s.i)
         }
         if (s.r === undefined) {
            s.r = 1
         }
         if (!s.c) {
            s.c = []
         }
         var f = [];
         s.c.forEach(function(e) {
            if (e.v) {
               e.v.forEach(function(t) {
                  f.push(i(e, t))
               })
            } else {
               f.push(e == "self" ? s : e)
            }
         });
         s.c = f;
         s.c.forEach(function(e) {
            r(e, s)
         });
         if (s.starts) {
            r(s.starts, o)
         }
         var l = s.c.map(function(e) {
            return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
         }).concat([s.tE, s.i]).map(t).filter(Boolean);
         s.t = l.length ? n(l.join("|"), true) : {
            exec: function(e) {
               return null
            }
         }
      }
      r(e)
   }

   function a(t, r, i, s) {
      function o(e, t) {
         for (var r = 0; r < t.c.length; r++) {
            if (n(t.c[r].bR, e)) {
               return t.c[r]
            }
         }
      }

      function l(e, t) {
         if (n(e.eR, t)) {
            return e
         }
         if (e.eW) {
            return l(e.parent, t)
         }
      }

      function c(e, t) {
         return !i && n(t.iR, e)
      }

      function p(e, t) {
         var n = S.cI ? t[0].toLowerCase() : t[0];
         return e.k.hasOwnProperty(n) && e.k[n]
      }

      function d(e, t, n, r) {
         var i = r ? "" : h.classPrefix,
            s = '<span class="' + i,
            o = n ? "" : "</span>";
         s += e + '">';
         return s + t + o
      }

      function v() {
         if (!x.k) {
            return e(k)
         }
         var t = "";
         var n = 0;
         x.lR.lastIndex = 0;
         var r = x.lR.exec(k);
         while (r) {
            t += e(k.substr(n, r.index - n));
            var i = p(x, r);
            if (i) {
               L += i[1];
               t += d(i[0], e(r[0]))
            } else {
               t += e(r[0])
            }
            n = x.lR.lastIndex;
            r = x.lR.exec(k)
         }
         return t + e(k.substr(n))
      }

      function g() {
         if (x.sL && !m[x.sL]) {
            return e(k)
         }
         var t = x.sL ? a(x.sL, k, true, T) : f(k);
         if (x.r > 0) {
            L += t.r
         }
         if (x.subLanguageMode == "continuous") {
            T = t.top
         }
         return d(t.language, t.value, false, true)
      }

      function y() {
         return x.sL !== undefined ? g() : v()
      }

      function b(t, n) {
         var r = t.cN ? d(t.cN, "", true) : "";
         if (t.rB) {
            N += r;
            k = ""
         } else {
            if (t.eB) {
               N += e(n) + r;
               k = ""
            } else {
               N += r;
               k = n
            }
         }
         x = Object.create(t, {
            parent: {
               value: x
            }
         })
      }

      function E(t, n) {
         k += t;
         if (n === undefined) {
            N += y();
            return 0
         }
         var r = o(n, x);
         if (r) {
            N += y();
            b(r, n);
            return r.rB ? 0 : n.length
         }
         var i = l(x, n);
         if (i) {
            var s = x;
            if (!(s.rE || s.eE)) {
               k += n
            }
            N += y();
            do {
               if (x.cN) {
                  N += "</span>"
               }
               L += x.r;
               x = x.parent
            } while (x != i.parent);
            if (s.eE) {
               N += e(n)
            }
            k = "";
            if (i.starts) {
               b(i.starts, "")
            }
            return s.rE ? 0 : n.length
         }
         if (c(n, x)) {
            throw new Error('Illegal lexeme "' + n + '" for mode "' + (x.cN || "<unnamed>") + '"')
         }
         k += n;
         return n.length || 1
      }
      var S = w(t);
      if (!S) {
         throw new Error('Unknown language: "' + t + '"')
      }
      u(S);
      var x = s || S;
      var T;
      var N = "";
      for (var C = x; C != S; C = C.parent) {
         if (C.cN) {
            N = d(C.cN, "", true) + N
         }
      }
      var k = "";
      var L = 0;
      try {
         var A, O, M = 0;
         while (true) {
            x.t.lastIndex = M;
            A = x.t.exec(r);
            if (!A) {
               break
            }
            O = E(r.substr(M, A.index - M), A[0]);
            M = A.index + O
         }
         E(r.substr(M));
         for (var C = x; C.parent; C = C.parent) {
            if (C.cN) {
               N += "</span>"
            }
         }
         return {
            r: L,
            value: N,
            language: t,
            top: x
         }
      } catch (_) {
         if (_.message.indexOf("Illegal") != -1) {
            return {
               r: 0,
               value: e(r)
            }
         } else {
            throw _
         }
      }
   }

   function f(t, n) {
      n = n || h.languages || Object.keys(m);
      var r = {
         r: 0,
         value: e(t)
      };
      var i = r;
      n.forEach(function(e) {
         if (!w(e)) {
            return
         }
         var n = a(e, t, false);
         n.language = e;
         if (n.r > i.r) {
            i = n
         }
         if (n.r > r.r) {
            i = r;
            r = n
         }
      });
      if (i.language) {
         r.second_best = i
      }
      return r
   }

   function l(e) {
      if (h.tabReplace) {
         e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t, n, r) {
            return t.replace(/\t/g, h.tabReplace)
         })
      }
      if (h.useBR) {
         e = e.replace(/\n/g, "<br>")
      }
      return e
   }

   function c(e) {
      var t = r(e);
      if (/no(-?)highlight/.test(t)) {
         return
      }
      var n;
      if (h.useBR) {
         n = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
         n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")
      } else {
         n = e
      }
      var i = n.textContent;
      var u = t ? a(t, i, true) : f(i);
      var c = s(n);
      if (c.length) {
         var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
         p.innerHTML = u.value;
         u.value = o(c, s(p), i)
      }
      u.value = l(u.value);
      e.innerHTML = u.value;
      e.className += " hljs " + (!t && u.language || "");
      e.result = {
         language: u.language,
         re: u.r
      };
      if (u.second_best) {
         e.second_best = {
            language: u.second_best.language,
            re: u.second_best.r
         }
      }
   }

   function p(e) {
      h = i(h, e)
   }

   function d() {
      if (d.called) {
         return
      }
      d.called = true;
      var e = document.querySelectorAll("pre code");
      Array.prototype.forEach.call(e, c)
   }

   function v() {
      addEventListener("DOMContentLoaded", d, false);
      addEventListener("load", d, false)
   }

   function y(e, t) {
      var n = m[e] = t(this);
      if (n.aliases) {
         n.aliases.forEach(function(t) {
            g[t] = e
         })
      }
   }

   function b() {
      return Object.keys(m)
   }

   function w(e) {
      return m[e] || m[g[e]]
   }
   var h = {
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: false,
      languages: undefined
   };
   var m = {};
   var g = {};
   this.highlight = a;
   this.highlightAuto = f;
   this.fixMarkup = l;
   this.highlightBlock = c;
   this.configure = p;
   this.initHighlighting = d;
   this.initHighlightingOnLoad = v;
   this.registerLanguage = y;
   this.listLanguages = b;
   this.getLanguage = w;
   this.inherit = i;
   this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
   this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
   this.NR = "\\b\\d+(\\.\\d+)?";
   this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
   this.BNR = "\\b(0b[01]+)";
   this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
   this.BE = {
      b: "\\\\[\\s\\S]",
      r: 0
   };
   this.ASM = {
      cN: "string",
      b: "'",
      e: "'",
      i: "\\n",
      c: [this.BE]
   };
   this.QSM = {
      cN: "string",
      b: '"',
      e: '"',
      i: "\\n",
      c: [this.BE]
   };
   this.PWM = {
      b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
   };
   this.CLCM = {
      cN: "comment",
      b: "//",
      e: "$",
      c: [this.PWM]
   };
   this.CBCM = {
      cN: "comment",
      b: "/\\*",
      e: "\\*/",
      c: [this.PWM]
   };
   this.HCM = {
      cN: "comment",
      b: "#",
      e: "$",
      c: [this.PWM]
   };
   this.NM = {
      cN: "number",
      b: this.NR,
      r: 0
   };
   this.CNM = {
      cN: "number",
      b: this.CNR,
      r: 0
   };
   this.BNM = {
      cN: "number",
      b: this.BNR,
      r: 0
   };
   this.CSSNM = {
      cN: "number",
      b: this.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      r: 0
   };
   this.RM = {
      cN: "regexp",
      b: /\//,
      e: /\/[gim]*/,
      i: /\n/,
      c: [this.BE, {
         b: /\[/,
         e: /\]/,
         r: 0,
         c: [this.BE]
      }]
   };
   this.TM = {
      cN: "title",
      b: this.IR,
      r: 0
   };
   this.UTM = {
      cN: "title",
      b: this.UIR,
      r: 0
   }
};
hljs.registerLanguage("bash", function(e) {
   var t = {
      cN: "variable",
      v: [{
         b: /\$[\w\d#@][\w\d_]*/
      }, {
         b: /\$\{(.*?)\}/
      }]
   };
   var n = {
      cN: "string",
      b: /"/,
      e: /"/,
      c: [e.BE, t, {
         cN: "variable",
         b: /\$\(/,
         e: /\)/,
         c: [e.BE]
      }]
   };
   var r = {
      cN: "string",
      b: /'/,
      e: /'/
   };
   return {
      aliases: ["sh", "zsh"],
      l: /-?[a-z\.]+/,
      k: {
         keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
         literal: "true false",
         built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
         operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
      },
      c: [{
         cN: "shebang",
         b: /^#![^\n]+sh\s*$/,
         r: 10
      }, {
         cN: "function",
         b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
         rB: true,
         c: [e.inherit(e.TM, {
            b: /\w[\w\d_]*/
         })],
         r: 0
      }, e.HCM, e.NM, n, r, t]
   }
});
hljs.registerLanguage("ruby", function(e) {
   var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
   var n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";
   var r = {
      cN: "yardoctag",
      b: "@[A-Za-z]+"
   };
   var i = {
      cN: "value",
      b: "#<",
      e: ">"
   };
   var s = {
      cN: "comment",
      v: [{
         b: "#",
         e: "$",
         c: [r]
      }, {
         b: "^\\=begin",
         e: "^\\=end",
         c: [r],
         r: 10
      }, {
         b: "^__END__",
         e: "\\n$"
      }]
   };
   var o = {
      cN: "subst",
      b: "#\\{",
      e: "}",
      k: n
   };
   var u = {
      cN: "string",
      c: [e.BE, o],
      v: [{
         b: /'/,
         e: /'/
      }, {
         b: /"/,
         e: /"/
      }, {
         b: "%[qw]?\\(",
         e: "\\)"
      }, {
         b: "%[qw]?\\[",
         e: "\\]"
      }, {
         b: "%[qw]?{",
         e: "}"
      }, {
         b: "%[qw]?<",
         e: ">"
      }, {
         b: "%[qw]?/",
         e: "/"
      }, {
         b: "%[qw]?%",
         e: "%"
      }, {
         b: "%[qw]?-",
         e: "-"
      }, {
         b: "%[qw]?\\|",
         e: "\\|"
      }, {
         b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
      }]
   };
   var a = {
      cN: "params",
      b: "\\(",
      e: "\\)",
      k: n
   };
   var f = [u, i, s, {
      cN: "class",
      bK: "class module",
      e: "$|;",
      i: /=/,
      c: [e.inherit(e.TM, {
         b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
      }), {
         cN: "inheritance",
         b: "<\\s*",
         c: [{
            cN: "parent",
            b: "(" + e.IR + "::)?" + e.IR
         }]
      }, s]
   }, {
      cN: "function",
      bK: "def",
      e: " |$|;",
      r: 0,
      c: [e.inherit(e.TM, {
         b: t
      }), a, s]
   }, {
      cN: "constant",
      b: "(::)?(\\b[A-Z]\\w*(::)?)+",
      r: 0
   }, {
      cN: "symbol",
      b: e.UIR + "(\\!|\\?)?:",
      r: 0
   }, {
      cN: "symbol",
      b: ":",
      c: [u, {
         b: t
      }],
      r: 0
   }, {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0
   }, {
      cN: "variable",
      b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
   }, {
      b: "(" + e.RSR + ")\\s*",
      c: [i, s, {
         cN: "regexp",
         c: [e.BE, o],
         i: /\n/,
         v: [{
            b: "/",
            e: "/[a-z]*"
         }, {
            b: "%r{",
            e: "}[a-z]*"
         }, {
            b: "%r\\(",
            e: "\\)[a-z]*"
         }, {
            b: "%r!",
            e: "![a-z]*"
         }, {
            b: "%r\\[",
            e: "\\][a-z]*"
         }]
      }],
      r: 0
   }];
   o.c = f;
   a.c = f;
   var l = [{
      b: /^\s*=>/,
      cN: "status",
      starts: {
         e: "$",
         c: f
      }
   }, {
      cN: "prompt",
      b: /^\S[^=>\n]*>+/,
      starts: {
         e: "$",
         c: f
      }
   }];
   return {
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      k: n,
      c: [s].concat(l).concat(f)
   }
});
hljs.registerLanguage("javascript", function(e) {
   return {
      aliases: ["js"],
      k: {
         keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
         literal: "true false null undefined NaN Infinity",
         built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
      },
      c: [{
         cN: "pi",
         b: /^\s*('|")use strict('|")/,
         r: 10
      }, e.ASM, e.QSM, e.CLCM, e.CBCM, e.CNM, {
         b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
         k: "return throw case",
         c: [e.CLCM, e.CBCM, e.RM, {
            b: /</,
            e: />;/,
            r: 0,
            sL: "xml"
         }],
         r: 0
      }, {
         cN: "function",
         bK: "function",
         e: /\{/,
         eE: true,
         c: [e.inherit(e.TM, {
            b: /[A-Za-z$_][0-9A-Za-z$_]*/
         }), {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: [e.CLCM, e.CBCM],
            i: /["'\(]/
         }],
         i: /\[|%/
      }, {
         b: /\$[(.]/
      }, {
         b: "\\." + e.IR,
         r: 0
      }]
   }
});
hljs.registerLanguage("xml", function(e) {
   var t = "[A-Za-z0-9\\._:-]+";
   var n = {
      b: /<\?(php)?(?!\w)/,
      e: /\?>/,
      sL: "php",
      subLanguageMode: "continuous"
   };
   var r = {
      eW: true,
      i: /</,
      r: 0,
      c: [n, {
         cN: "attribute",
         b: t,
         r: 0
      }, {
         b: "=",
         r: 0,
         c: [{
            cN: "value",
            v: [{
               b: /"/,
               e: /"/
            }, {
               b: /'/,
               e: /'/
            }, {
               b: /[^\s\/>]+/
            }]
         }]
      }]
   };
   return {
      aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
      cI: true,
      c: [{
         cN: "doctype",
         b: "<!DOCTYPE",
         e: ">",
         r: 10,
         c: [{
            b: "\\[",
            e: "\\]"
         }]
      }, {
         cN: "comment",
         b: "<!--",
         e: "-->",
         r: 10
      }, {
         cN: "cdata",
         b: "<\\!\\[CDATA\\[",
         e: "\\]\\]>",
         r: 10
      }, {
         cN: "tag",
         b: "<style(?=\\s|>|$)",
         e: ">",
         k: {
            title: "style"
         },
         c: [r],
         starts: {
            e: "</style>",
            rE: true,
            sL: "css"
         }
      }, {
         cN: "tag",
         b: "<script(?=\\s|>|$)",
         e: ">",
         k: {
            title: "script"
         },
         c: [r],
         starts: {
            e: "</script>",
            rE: true,
            sL: "javascript"
         }
      }, {
         b: "<%",
         e: "%>",
         sL: "vbscript"
      }, n, {
         cN: "pi",
         b: /<\?\w+/,
         e: /\?>/,
         r: 10
      }, {
         cN: "tag",
         b: "</?",
         e: "/?>",
         c: [{
            cN: "title",
            b: /[^ \/><\n\t]+/,
            r: 0
         }, r]
      }]
   }
});
hljs.registerLanguage("markdown", function(e) {
   return {
      aliases: ["md", "mkdown", "mkd"],
      c: [{
         cN: "header",
         v: [{
            b: "^#{1,6}",
            e: "$"
         }, {
            b: "^.+?\\n[=-]{2,}$"
         }]
      }, {
         b: "<",
         e: ">",
         sL: "xml",
         r: 0
      }, {
         cN: "bullet",
         b: "^([*+-]|(\\d+\\.))\\s+"
      }, {
         cN: "strong",
         b: "[*_]{2}.+?[*_]{2}"
      }, {
         cN: "emphasis",
         v: [{
            b: "\\*.+?\\*"
         }, {
            b: "_.+?_",
            r: 0
         }]
      }, {
         cN: "blockquote",
         b: "^>\\s+",
         e: "$"
      }, {
         cN: "code",
         v: [{
            b: "`.+?`"
         }, {
            b: "^( {4}|	)",
            e: "$",
            r: 0
         }]
      }, {
         cN: "horizontal_rule",
         b: "^[-\\*]{3,}",
         e: "$"
      }, {
         b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
         rB: true,
         c: [{
            cN: "link_label",
            b: "\\[",
            e: "\\]",
            eB: true,
            rE: true,
            r: 0
         }, {
            cN: "link_url",
            b: "\\]\\(",
            e: "\\)",
            eB: true,
            eE: true
         }, {
            cN: "link_reference",
            b: "\\]\\[",
            e: "\\]",
            eB: true,
            eE: true
         }],
         r: 10
      }, {
         b: "^\\[.+\\]:",
         rB: true,
         c: [{
            cN: "link_reference",
            b: "\\[",
            e: "\\]:",
            eB: true,
            eE: true,
            starts: {
               cN: "link_url",
               e: "$"
            }
         }]
      }]
   }
});
hljs.registerLanguage("css", function(e) {
   var t = "[a-zA-Z-][a-zA-Z0-9_-]*";
   var n = {
      cN: "function",
      b: t + "\\(",
      rB: true,
      eE: true,
      e: "\\("
   };
   return {
      cI: true,
      i: "[=/|']",
      c: [e.CBCM, {
         cN: "id",
         b: "\\#[A-Za-z0-9_-]+"
      }, {
         cN: "class",
         b: "\\.[A-Za-z0-9_-]+",
         r: 0
      }, {
         cN: "attr_selector",
         b: "\\[",
         e: "\\]",
         i: "$"
      }, {
         cN: "pseudo",
         b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
      }, {
         cN: "at_rule",
         b: "@(font-face|page)",
         l: "[a-z-]+",
         k: "font-face page"
      }, {
         cN: "at_rule",
         b: "@",
         e: "[{;]",
         c: [{
            cN: "keyword",
            b: /\S+/
         }, {
            b: /\s/,
            eW: true,
            eE: true,
            r: 0,
            c: [n, e.ASM, e.QSM, e.CSSNM]
         }]
      }, {
         cN: "tag",
         b: t,
         r: 0
      }, {
         cN: "rules",
         b: "{",
         e: "}",
         i: "[^\\s]",
         r: 0,
         c: [e.CBCM, {
            cN: "rule",
            b: "[^\\s]",
            rB: true,
            e: ";",
            eW: true,
            c: [{
               cN: "attribute",
               b: "[A-Z\\_\\.\\-]+",
               e: ":",
               eE: true,
               i: "[^\\s]",
               starts: {
                  cN: "value",
                  eW: true,
                  eE: true,
                  c: [n, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                     cN: "hexcolor",
                     b: "#[0-9A-Fa-f]+"
                  }, {
                     cN: "important",
                     b: "!important"
                  }]
               }
            }]
         }]
      }]
   }
});
hljs.registerLanguage("http", function(e) {
   return {
      i: "\\S",
      c: [{
         cN: "status",
         b: "^HTTP/[0-9\\.]+",
         e: "$",
         c: [{
            cN: "number",
            b: "\\b\\d{3}\\b"
         }]
      }, {
         cN: "request",
         b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
         rB: true,
         e: "$",
         c: [{
            cN: "string",
            b: " ",
            e: " ",
            eB: true,
            eE: true
         }]
      }, {
         cN: "attribute",
         b: "^\\w",
         e: ": ",
         eE: true,
         i: "\\n|\\s|=",
         starts: {
            cN: "string",
            e: "$"
         }
      }, {
         b: "\\n\\n",
         starts: {
            sL: "",
            eW: true
         }
      }]
   }
});
hljs.registerLanguage("java", function(e) {
   var t = e.UIR + "(<" + e.UIR + ">)?";
   var n = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private";
   return {
      aliases: ["jsp"],
      k: n,
      i: /<\//,
      c: [{
         cN: "javadoc",
         b: "/\\*\\*",
         e: "\\*/",
         r: 0,
         c: [{
            cN: "javadoctag",
            b: "(^|\\s)@[A-Za-z]+"
         }]
      }, e.CLCM, e.CBCM, e.ASM, e.QSM, {
         cN: "class",
         bK: "class interface",
         e: /[{;=]/,
         eE: true,
         k: "class interface",
         i: /[:"\[\]]/,
         c: [{
            bK: "extends implements"
         }, e.UTM]
      }, {
         bK: "new",
         e: /\s/,
         r: 0
      }, {
         cN: "function",
         b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
         rB: true,
         e: /[{;=]/,
         eE: true,
         k: n,
         c: [{
            b: e.UIR + "\\s*\\(",
            rB: true,
            c: [e.UTM]
         }, {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: n,
            c: [e.ASM, e.QSM, e.CNM, e.CBCM]
         }, e.CLCM, e.CBCM]
      }, e.CNM, {
         cN: "annotation",
         b: "@[A-Za-z]+"
      }]
   }
});
hljs.registerLanguage("php", function(e) {
   var t = {
      cN: "variable",
      b: "(\\$|->)+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
   };
   var n = {
      cN: "preprocessor",
      b: /<\?(php)?|\?>/
   };
   var r = {
      cN: "string",
      c: [e.BE, n],
      v: [{
         b: 'b"',
         e: '"'
      }, {
         b: "b'",
         e: "'"
      }, e.inherit(e.ASM, {
         i: null
      }), e.inherit(e.QSM, {
         i: null
      })]
   };
   var i = {
      v: [e.BNM, e.CNM]
   };
   return {
      aliases: ["php3", "php4", "php5", "php6"],
      cI: true,
      k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
      c: [e.CLCM, e.HCM, {
         cN: "comment",
         b: "/\\*",
         e: "\\*/",
         c: [{
            cN: "phpdoc",
            b: "\\s@[A-Za-z]+"
         }, n]
      }, {
         cN: "comment",
         b: "__halt_compiler.+?;",
         eW: true,
         k: "__halt_compiler",
         l: e.UIR
      }, {
         cN: "string",
         b: "<<<['\"]?\\w+['\"]?$",
         e: "^\\w+;",
         c: [e.BE]
      }, n, t, {
         cN: "function",
         bK: "function",
         e: /[;{]/,
         eE: true,
         i: "\\$|\\[|%",
         c: [e.UTM, {
            cN: "params",
            b: "\\(",
            e: "\\)",
            c: ["self", t, e.CBCM, r, i]
         }]
      }, {
         cN: "class",
         bK: "class interface",
         e: "{",
         eE: true,
         i: /[:\(\$"]/,
         c: [{
            bK: "extends implements"
         }, e.UTM]
      }, {
         bK: "namespace",
         e: ";",
         i: /[\.']/,
         c: [e.UTM]
      }, {
         bK: "use",
         e: ";",
         c: [e.UTM]
      }, {
         b: "=>"
      }, r, i]
   }
});
hljs.registerLanguage("sql", function(e) {
   var t = {
      cN: "comment",
      b: "--",
      e: "$"
   };
   return {
      cI: true,
      i: /[<>]/,
      c: [{
         cN: "operator",
         bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",
         e: /;/,
         eW: true,
         k: {
            keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
            literal: "true false null",
            built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
         },
         c: [{
            cN: "string",
            b: "'",
            e: "'",
            c: [e.BE, {
               b: "''"
            }]
         }, {
            cN: "string",
            b: '"',
            e: '"',
            c: [e.BE, {
               b: '""'
            }]
         }, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE]
         }, e.CNM, e.CBCM, t]
      }, e.CBCM, t]
   }
});
hljs.registerLanguage("coffeescript", function(e) {
   var t = {
      keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
      literal: "true false null undefined yes no on off",
      reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
      built_in: "npm require console print module global window document"
   };
   var n = "[A-Za-z$_][0-9A-Za-z$_]*";
   var r = e.inherit(e.TM, {
      b: n
   });
   var i = {
      cN: "subst",
      b: /#\{/,
      e: /}/,
      k: t
   };
   var s = [e.BNM, e.inherit(e.CNM, {
      starts: {
         e: "(\\s*/)?",
         r: 0
      }
   }), {
      cN: "string",
      v: [{
         b: /'''/,
         e: /'''/,
         c: [e.BE]
      }, {
         b: /'/,
         e: /'/,
         c: [e.BE]
      }, {
         b: /"""/,
         e: /"""/,
         c: [e.BE, i]
      }, {
         b: /"/,
         e: /"/,
         c: [e.BE, i]
      }]
   }, {
      cN: "regexp",
      v: [{
         b: "///",
         e: "///",
         c: [i, e.HCM]
      }, {
         b: "//[gim]*",
         r: 0
      }, {
         b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
      }]
   }, {
      cN: "property",
      b: "@" + n
   }, {
      b: "`",
      e: "`",
      eB: true,
      eE: true,
      sL: "javascript"
   }];
   i.c = s;
   return {
      aliases: ["coffee", "cson", "iced"],
      k: t,
      i: /\/\*/,
      c: s.concat([{
         cN: "comment",
         b: "###",
         e: "###"
      }, e.HCM, {
         cN: "function",
         b: "(^\\s*|\\B)(" + n + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
         e: "[-=]>",
         rB: true,
         c: [r, {
            cN: "params",
            b: "\\([^\\(]",
            rB: true,
            c: [{
               b: /\(/,
               e: /\)/,
               k: t,
               c: ["self"].concat(s)
            }]
         }]
      }, {
         cN: "class",
         bK: "class",
         e: "$",
         i: /[:="\[\]]/,
         c: [{
            bK: "extends",
            eW: true,
            i: /[:="\[\]]/,
            c: [r]
         }, r]
      }, {
         cN: "attribute",
         b: n + ":",
         e: ":",
         rB: true,
         eE: true,
         r: 0
      }])
   }
});
hljs.registerLanguage("json", function(e) {
   var t = {
      literal: "true false null"
   };
   var n = [e.QSM, e.CNM];
   var r = {
      cN: "value",
      e: ",",
      eW: true,
      eE: true,
      c: n,
      k: t
   };
   var i = {
      b: "{",
      e: "}",
      c: [{
         cN: "attribute",
         b: '\\s*"',
         e: '"\\s*:\\s*',
         eB: true,
         eE: true,
         c: [e.BE],
         i: "\\n",
         starts: r
      }],
      i: "\\S"
   };
   var s = {
      b: "\\[",
      e: "\\]",
      c: [e.inherit(r, {
         cN: null
      })],
      i: "\\S"
   };
   n.splice(n.length, 0, i, s);
   return {
      c: n,
      k: t,
      i: "\\S"
   }
})

/*
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
;
(function($) {
   $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
      var cfg = {
         interval: 100,
         sensitivity: 6,
         timeout: 0
      };
      if (typeof handlerIn === "object") {
         cfg = $.extend(cfg, handlerIn)
      } else {
         if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
               over: handlerIn,
               out: handlerOut,
               selector: selector
            })
         } else {
            cfg = $.extend(cfg, {
               over: handlerIn,
               out: handlerIn,
               selector: handlerOut
            })
         }
      }
      var cX, cY, pX, pY;
      var track = function(ev) {
         cX = ev.pageX;
         cY = ev.pageY
      };
      var compare = function(ev, ob) {
         ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
         if (Math.sqrt((pX - cX) * (pX - cX) + (pY - cY) * (pY - cY)) < cfg.sensitivity) {
            $(ob).off("mousemove.hoverIntent", track);
            ob.hoverIntent_s = true;
            return cfg.over.apply(ob, [ev])
         } else {
            pX = cX;
            pY = cY;
            ob.hoverIntent_t = setTimeout(function() {
               compare(ev, ob)
            }, cfg.interval)
         }
      };
      var delay = function(ev, ob) {
         ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
         ob.hoverIntent_s = false;
         return cfg.out.apply(ob, [ev])
      };
      var handleHover = function(e) {
         var ev = $.extend({}, e);
         var ob = this;
         if (ob.hoverIntent_t) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
         }
         if (e.type === "mouseenter") {
            pX = ev.pageX;
            pY = ev.pageY;
            $(ob).on("mousemove.hoverIntent", track);
            if (!ob.hoverIntent_s) {
               ob.hoverIntent_t = setTimeout(function() {
                  compare(ev, ob)
               }, cfg.interval)
            }
         } else {
            $(ob).off("mousemove.hoverIntent", track);
            if (ob.hoverIntent_s) {
               ob.hoverIntent_t = setTimeout(function() {
                  delay(ev, ob)
               }, cfg.timeout)
            }
         }
      };
      return this.on({
         "mouseenter.hoverIntent": handleHover,
         "mouseleave.hoverIntent": handleHover
      }, cfg.selector)
   }
})(jQuery);

/*
 * jQuery Expose plugin 1.0
 * Copyright (c) 2013 Jeff Ching
 * http://github.com/chingor13/jquery-expose
 * http://www.opensource.org/licenses/mit-license.php
 */
;
(function(e) {
   function t() {
      e(".expose-overlay").remove();
      e("body").trigger("expose:overlay:removed")
   }

   function n(n, r, i, s, o) {
      var u = e('<div class="expose-overlay"></div>').css({
         position: "absolute",
         top: r + "px",
         left: n + "px",
         width: i - n + "px",
         height: s - r + "px"
      }).appendTo(e("body"));
      if (!o.static) {
         u.bind("click", t)
      }
      e("body").append(u).trigger("expose:overlay:shown", [n, r, i, s, u])
   }
   e.fn.expose = function(t) {
      t = t || {};
      e("body").trigger("expose:init", [this, t]);
      var r = t.padding || 0,
         i = [],
         s = [0],
         o = [];
      this.each(function(t, n) {
         var o = e(n);
         offset = o.offset(), f = offset.left - r, y0 = offset.top - r, l = offset.left + o.outerWidth() + r, y1 = offset.top + o.outerHeight() + r;
         i.push({
            topLeft: {
               x: f,
               y: y0
            },
            bottomRight: {
               x: l,
               y: y1
            }
         });
         s.push(f);
         s.push(l)
      });
      s.push(e(document).width());
      s.sort(function(e, t) {
         return e - t
      });
      var u;
      for (var a = 0; a < s.length; a++) {
         if (u != s[a]) {
            u = s[a];
            o.push(s[a])
         }
      }
      i.sort(function(e, t) {
         return e.topLeft.y - t.topLeft.y
      });
      for (var a = 0; a < o.length - 1; a++) {
         var f = o[a],
            l = o[a + 1],
            c = [];
         for (var h = 0; h < i.length; h++) {
            var p = i[h];
            if (p.topLeft.x <= f && p.bottomRight.x >= l) {
               c.push([p.topLeft.y, p.bottomRight.y])
            }
         }
         var d = [0];
         for (var h = 0; h < c.length; h++) {
            var p = c[h];
            if (p[0] > d[d.length - 1]) {
               d.push(p[0]);
               d.push(p[1])
            } else {
               d.pop();
               d.push(p[1])
            }
         }
         d.push(e(document).height());
         for (var h = 0; h < d.length - 1; h = h + 2) {
            n(f, d[h], l, d[h + 1], t)
         }
      }
      e("body").trigger("expose:shown", this);
      return this
   };
   e(document).bind("expose:hide", t)
})(jQuery)

/*
 * jVectorMap version 1.2.2
 * Copyright 2011-2013, Kirill Lebedev
 * Licensed under the MIT license.
 */
;
(function(e) {
   var t = {
      set: {
         colors: 1,
         values: 1,
         backgroundColor: 1,
         scaleColors: 1,
         normalizeFunction: 1,
         focus: 1
      },
      get: {
         selectedRegions: 1,
         selectedMarkers: 1,
         mapObject: 1,
         regionName: 1
      }
   };
   e.fn.vectorMap = function(e) {
      var n, r, i, n = this.children(".jvectormap-container").data("mapObject");
      if (e === "addMap") jvm.WorldMap.maps[arguments[1]] = arguments[2];
      else {
         if (!(e !== "set" && e !== "get" || !t[e][arguments[1]])) return r = arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1), n[e + r].apply(n, Array.prototype.slice.call(arguments, 2));
         e = e || {}, e.container = this, n = new jvm.WorldMap(e)
      }
      return this
   }
})(jQuery),
function(e) {
   function r(t) {
      var n = t || window.event,
         r = [].slice.call(arguments, 1),
         i = 0,
         s = !0,
         o = 0,
         u = 0;
      return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle).apply(this, r)
   }
   var t = ["DOMMouseScroll", "mousewheel"];
   if (e.event.fixHooks)
      for (var n = t.length; n;) e.event.fixHooks[t[--n]] = e.event.mouseHooks;
   e.event.special.mousewheel = {
      setup: function() {
         if (this.addEventListener)
            for (var e = t.length; e;) this.addEventListener(t[--e], r, !1);
         else this.onmousewheel = r
      },
      teardown: function() {
         if (this.removeEventListener)
            for (var e = t.length; e;) this.removeEventListener(t[--e], r, !1);
         else this.onmousewheel = null
      }
   }, e.fn.extend({
      mousewheel: function(e) {
         return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
      },
      unmousewheel: function(e) {
         return this.unbind("mousewheel", e)
      }
   })
}(jQuery);
var jvm = {
   inherits: function(e, t) {
      function n() {}
      n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.parentClass = t
   },
   mixin: function(e, t) {
      var n;
      for (n in t.prototype) t.prototype.hasOwnProperty(n) && (e.prototype[n] = t.prototype[n])
   },
   min: function(e) {
      var t = Number.MAX_VALUE,
         n;
      if (e instanceof Array)
         for (n = 0; n < e.length; n++) e[n] < t && (t = e[n]);
      else
         for (n in e) e[n] < t && (t = e[n]);
      return t
   },
   max: function(e) {
      var t = Number.MIN_VALUE,
         n;
      if (e instanceof Array)
         for (n = 0; n < e.length; n++) e[n] > t && (t = e[n]);
      else
         for (n in e) e[n] > t && (t = e[n]);
      return t
   },
   keys: function(e) {
      var t = [],
         n;
      for (n in e) t.push(n);
      return t
   },
   values: function(e) {
      var t = [],
         n, r;
      for (r = 0; r < arguments.length; r++) {
         e = arguments[r];
         for (n in e) t.push(e[n])
      }
      return t
   }
};
jvm.$ = jQuery, jvm.AbstractElement = function(e, t) {
   this.node = this.createElement(e), this.name = e, this.properties = {}, t && this.set(t)
}, jvm.AbstractElement.prototype.set = function(e, t) {
   var n;
   if (typeof e == "object")
      for (n in e) this.properties[n] = e[n], this.applyAttr(n, e[n]);
   else this.properties[e] = t, this.applyAttr(e, t)
}, jvm.AbstractElement.prototype.get = function(e) {
   return this.properties[e]
}, jvm.AbstractElement.prototype.applyAttr = function(e, t) {
   this.node.setAttribute(e, t)
}, jvm.AbstractElement.prototype.remove = function() {
   jvm.$(this.node).remove()
}, jvm.AbstractCanvasElement = function(e, t, n) {
   this.container = e, this.setSize(t, n), this.rootElement = new jvm[this.classPrefix + "GroupElement"], this.node.appendChild(this.rootElement.node), this.container.appendChild(this.node)
}, jvm.AbstractCanvasElement.prototype.add = function(e, t) {
   t = t || this.rootElement, t.add(e), e.canvas = this
}, jvm.AbstractCanvasElement.prototype.addPath = function(e, t, n) {
   var r = new jvm[this.classPrefix + "PathElement"](e, t);
   return this.add(r, n), r
}, jvm.AbstractCanvasElement.prototype.addCircle = function(e, t, n) {
   var r = new jvm[this.classPrefix + "CircleElement"](e, t);
   return this.add(r, n), r
}, jvm.AbstractCanvasElement.prototype.addGroup = function(e) {
   var t = new jvm[this.classPrefix + "GroupElement"];
   return e ? e.node.appendChild(t.node) : this.node.appendChild(t.node), t.canvas = this, t
}, jvm.AbstractShapeElement = function(e, t, n) {
   this.style = n || {}, this.style.current = {}, this.isHovered = !1, this.isSelected = !1, this.updateStyle()
}, jvm.AbstractShapeElement.prototype.setHovered = function(e) {
   this.isHovered !== e && (this.isHovered = e, this.updateStyle())
}, jvm.AbstractShapeElement.prototype.setSelected = function(e) {
   this.isSelected !== e && (this.isSelected = e, this.updateStyle(), jvm.$(this.node).trigger("selected", [e]))
}, jvm.AbstractShapeElement.prototype.setStyle = function(e, t) {
   var n = {};
   typeof e == "object" ? n = e : n[e] = t, jvm.$.extend(this.style.current, n), this.updateStyle()
}, jvm.AbstractShapeElement.prototype.updateStyle = function() {
   var e = {};
   jvm.AbstractShapeElement.mergeStyles(e, this.style.initial), jvm.AbstractShapeElement.mergeStyles(e, this.style.current), this.isHovered && jvm.AbstractShapeElement.mergeStyles(e, this.style.hover), this.isSelected && (jvm.AbstractShapeElement.mergeStyles(e, this.style.selected), this.isHovered && jvm.AbstractShapeElement.mergeStyles(e, this.style.selectedHover)), this.set(e)
}, jvm.AbstractShapeElement.mergeStyles = function(e, t) {
   var n;
   t = t || {};
   for (n in t) t[n] === null ? delete e[n] : e[n] = t[n]
}, jvm.SVGElement = function(e, t) {
   jvm.SVGElement.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.SVGElement, jvm.AbstractElement), jvm.SVGElement.svgns = "http://www.w3.org/2000/svg", jvm.SVGElement.prototype.createElement = function(e) {
   return document.createElementNS(jvm.SVGElement.svgns, e)
}, jvm.SVGElement.prototype.addClass = function(e) {
   this.node.setAttribute("class", e)
}, jvm.SVGElement.prototype.getElementCtr = function(e) {
   return jvm["SVG" + e]
}, jvm.SVGElement.prototype.getBBox = function() {
   return this.node.getBBox()
}, jvm.SVGGroupElement = function() {
   jvm.SVGGroupElement.parentClass.call(this, "g")
}, jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement), jvm.SVGGroupElement.prototype.add = function(e) {
   this.node.appendChild(e.node)
}, jvm.SVGCanvasElement = function(e, t, n) {
   this.classPrefix = "SVG", jvm.SVGCanvasElement.parentClass.call(this, "svg"), jvm.AbstractCanvasElement.apply(this, arguments)
}, jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement), jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement), jvm.SVGCanvasElement.prototype.setSize = function(e, t) {
   this.width = e, this.height = t, this.node.setAttribute("width", e), this.node.setAttribute("height", t)
}, jvm.SVGCanvasElement.prototype.applyTransformParams = function(e, t, n) {
   this.scale = e, this.transX = t, this.transY = n, this.rootElement.node.setAttribute("transform", "scale(" + e + ") translate(" + t + ", " + n + ")")
}, jvm.SVGShapeElement = function(e, t, n) {
   jvm.SVGShapeElement.parentClass.call(this, e, t), jvm.AbstractShapeElement.apply(this, arguments)
}, jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement), jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement), jvm.SVGPathElement = function(e, t) {
   jvm.SVGPathElement.parentClass.call(this, "path", e, t), this.node.setAttribute("fill-rule", "evenodd")
}, jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement), jvm.SVGCircleElement = function(e, t) {
   jvm.SVGCircleElement.parentClass.call(this, "circle", e, t)
}, jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement), jvm.VMLElement = function(e, t) {
   jvm.VMLElement.VMLInitialized || jvm.VMLElement.initializeVML(), jvm.VMLElement.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.VMLElement, jvm.AbstractElement), jvm.VMLElement.VMLInitialized = !1, jvm.VMLElement.initializeVML = function() {
   try {
      document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), jvm.VMLElement.prototype.createElement = function(e) {
         return document.createElement("<rvml:" + e + ' class="rvml">')
      }
   } catch (e) {
      jvm.VMLElement.prototype.createElement = function(e) {
         return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
      }
   }
   document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"), jvm.VMLElement.VMLInitialized = !0
}, jvm.VMLElement.prototype.getElementCtr = function(e) {
   return jvm["VML" + e]
}, jvm.VMLElement.prototype.addClass = function(e) {
   jvm.$(this.node).addClass(e)
}, jvm.VMLElement.prototype.applyAttr = function(e, t) {
   this.node[e] = t
}, jvm.VMLElement.prototype.getBBox = function() {
   var e = jvm.$(this.node);
   return {
      x: e.position().left / this.canvas.scale,
      y: e.position().top / this.canvas.scale,
      width: e.width() / this.canvas.scale,
      height: e.height() / this.canvas.scale
   }
}, jvm.VMLGroupElement = function() {
   jvm.VMLGroupElement.parentClass.call(this, "group"), this.node.style.left = "0px", this.node.style.top = "0px", this.node.coordorigin = "0 0"
}, jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement), jvm.VMLGroupElement.prototype.add = function(e) {
   this.node.appendChild(e.node)
}, jvm.VMLCanvasElement = function(e, t, n) {
   this.classPrefix = "VML", jvm.VMLCanvasElement.parentClass.call(this, "group"), jvm.AbstractCanvasElement.apply(this, arguments), this.node.style.position = "absolute"
}, jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement), jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement), jvm.VMLCanvasElement.prototype.setSize = function(e, t) {
   var n, r, i, s;
   this.width = e, this.height = t, this.node.style.width = e + "px", this.node.style.height = t + "px", this.node.coordsize = e + " " + t, this.node.coordorigin = "0 0";
   if (this.rootElement) {
      n = this.rootElement.node.getElementsByTagName("shape");
      for (i = 0, s = n.length; i < s; i++) n[i].coordsize = e + " " + t, n[i].style.width = e + "px", n[i].style.height = t + "px";
      r = this.node.getElementsByTagName("group");
      for (i = 0, s = r.length; i < s; i++) r[i].coordsize = e + " " + t, r[i].style.width = e + "px", r[i].style.height = t + "px"
   }
}, jvm.VMLCanvasElement.prototype.applyTransformParams = function(e, t, n) {
   this.scale = e, this.transX = t, this.transY = n, this.rootElement.node.coordorigin = this.width - t - this.width / 100 + "," + (this.height - n - this.height / 100), this.rootElement.node.coordsize = this.width / e + "," + this.height / e
}, jvm.VMLShapeElement = function(e, t) {
   jvm.VMLShapeElement.parentClass.call(this, e, t), this.fillElement = new jvm.VMLElement("fill"), this.strokeElement = new jvm.VMLElement("stroke"), this.node.appendChild(this.fillElement.node), this.node.appendChild(this.strokeElement.node), this.node.stroked = !1, jvm.AbstractShapeElement.apply(this, arguments)
}, jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement), jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement), jvm.VMLShapeElement.prototype.applyAttr = function(e, t) {
   switch (e) {
      case "fill":
         this.node.fillcolor = t;
         break;
      case "fill-opacity":
         this.fillElement.node.opacity = Math.round(t * 100) + "%";
         break;
      case "stroke":
         t === "none" ? this.node.stroked = !1 : this.node.stroked = !0, this.node.strokecolor = t;
         break;
      case "stroke-opacity":
         this.strokeElement.node.opacity = Math.round(t * 100) + "%";
         break;
      case "stroke-width":
         parseInt(t, 10) === 0 ? this.node.stroked = !1 : this.node.stroked = !0, this.node.strokeweight = t;
         break;
      case "d":
         this.node.path = jvm.VMLPathElement.pathSvgToVml(t);
         break;
      default:
         jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments)
   }
}, jvm.VMLPathElement = function(e, t) {
   var n = new jvm.VMLElement("skew");
   jvm.VMLPathElement.parentClass.call(this, "shape", e, t), this.node.coordorigin = "0 0", n.node.on = !0, n.node.matrix = "0.01,0,0,0.01,0,0", n.node.offset = "0,0", this.node.appendChild(n.node)
}, jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement), jvm.VMLPathElement.prototype.applyAttr = function(e, t) {
   e === "d" ? this.node.path = jvm.VMLPathElement.pathSvgToVml(t) : jvm.VMLShapeElement.prototype.applyAttr.call(this, e, t)
}, jvm.VMLPathElement.pathSvgToVml = function(e) {
   var t = "",
      n = 0,
      r = 0,
      i, s;
   return e = e.replace(/(-?\d+)e(-?\d+)/g, "0"), e.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function(e, t, o, u) {
      o = o.replace(/(\d)-/g, "$1,-").replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, ",").split(","), o[0] || o.shift();
      for (var a = 0, f = o.length; a < f; a++) o[a] = Math.round(100 * o[a]);
      switch (t) {
         case "m":
            return n += o[0], r += o[1], "t" + o.join(",");
         case "M":
            return n = o[0], r = o[1], "m" + o.join(",");
         case "l":
            return n += o[0], r += o[1], "r" + o.join(",");
         case "L":
            return n = o[0], r = o[1], "l" + o.join(",");
         case "h":
            return n += o[0], "r" + o[0] + ",0";
         case "H":
            return n = o[0], "l" + n + "," + r;
         case "v":
            return r += o[0], "r0," + o[0];
         case "V":
            return r = o[0], "l" + n + "," + r;
         case "c":
            return i = n + o[o.length - 4], s = r + o[o.length - 3], n += o[o.length - 2], r += o[o.length - 1], "v" + o.join(",");
         case "C":
            return i = o[o.length - 4], s = o[o.length - 3], n = o[o.length - 2], r = o[o.length - 1], "c" + o.join(",");
         case "s":
            return o.unshift(r - s), o.unshift(n - i), i = n + o[o.length - 4], s = r + o[o.length - 3], n += o[o.length - 2], r += o[o.length - 1], "v" + o.join(",");
         case "S":
            return o.unshift(r + r - s), o.unshift(n + n - i), i = o[o.length - 4], s = o[o.length - 3], n = o[o.length - 2], r = o[o.length - 1], "c" + o.join(",")
      }
      return ""
   }).replace(/z/g, "e")
}, jvm.VMLCircleElement = function(e, t) {
   jvm.VMLCircleElement.parentClass.call(this, "oval", e, t)
}, jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement), jvm.VMLCircleElement.prototype.applyAttr = function(e, t) {
   switch (e) {
      case "r":
         this.node.style.width = t * 2 + "px", this.node.style.height = t * 2 + "px", this.applyAttr("cx", this.get("cx") || 0), this.applyAttr("cy", this.get("cy") || 0);
         break;
      case "cx":
         if (!t) return;
         this.node.style.left = t - (this.get("r") || 0) + "px";
         break;
      case "cy":
         if (!t) return;
         this.node.style.top = t - (this.get("r") || 0) + "px";
         break;
      default:
         jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, e, t)
   }
}, jvm.VectorCanvas = function(e, t, n) {
   return this.mode = window.SVGAngle ? "svg" : "vml", this.mode == "svg" ? this.impl = new jvm.SVGCanvasElement(e, t, n) : this.impl = new jvm.VMLCanvasElement(e, t, n), this.impl
}, jvm.SimpleScale = function(e) {
   this.scale = e
}, jvm.SimpleScale.prototype.getValue = function(e) {
   return e
}, jvm.OrdinalScale = function(e) {
   this.scale = e
}, jvm.OrdinalScale.prototype.getValue = function(e) {
   return this.scale[e]
}, jvm.NumericScale = function(e, t, n, r) {
   this.scale = [], t = t || "linear", e && this.setScale(e), t && this.setNormalizeFunction(t), n && this.setMin(n), r && this.setMax(r)
}, jvm.NumericScale.prototype = {
   setMin: function(e) {
      this.clearMinValue = e, typeof this.normalize == "function" ? this.minValue = this.normalize(e) : this.minValue = e
   },
   setMax: function(e) {
      this.clearMaxValue = e, typeof this.normalize == "function" ? this.maxValue = this.normalize(e) : this.maxValue = e
   },
   setScale: function(e) {
      var t;
      for (t = 0; t < e.length; t++) this.scale[t] = [e[t]]
   },
   setNormalizeFunction: function(e) {
      e === "polynomial" ? this.normalize = function(e) {
         return Math.pow(e, .2)
      } : e === "linear" ? delete this.normalize : this.normalize = e, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue)
   },
   getValue: function(e) {
      var t = [],
         n = 0,
         r, i = 0,
         s;
      typeof this.normalize == "function" && (e = this.normalize(e));
      for (i = 0; i < this.scale.length - 1; i++) r = this.vectorLength(this.vectorSubtract(this.scale[i + 1], this.scale[i])), t.push(r), n += r;
      s = (this.maxValue - this.minValue) / n;
      for (i = 0; i < t.length; i++) t[i] *= s;
      i = 0, e -= this.minValue;
      while (e - t[i] >= 0) e -= t[i], i++;
      return i == this.scale.length - 1 ? e = this.vectorToNum(this.scale[i]) : e = this.vectorToNum(this.vectorAdd(this.scale[i], this.vectorMult(this.vectorSubtract(this.scale[i + 1], this.scale[i]), e / t[i]))), e
   },
   vectorToNum: function(e) {
      var t = 0,
         n;
      for (n = 0; n < e.length; n++) t += Math.round(e[n]) * Math.pow(256, e.length - n - 1);
      return t
   },
   vectorSubtract: function(e, t) {
      var n = [],
         r;
      for (r = 0; r < e.length; r++) n[r] = e[r] - t[r];
      return n
   },
   vectorAdd: function(e, t) {
      var n = [],
         r;
      for (r = 0; r < e.length; r++) n[r] = e[r] + t[r];
      return n
   },
   vectorMult: function(e, t) {
      var n = [],
         r;
      for (r = 0; r < e.length; r++) n[r] = e[r] * t;
      return n
   },
   vectorLength: function(e) {
      var t = 0,
         n;
      for (n = 0; n < e.length; n++) t += e[n] * e[n];
      return Math.sqrt(t)
   }
}, jvm.ColorScale = function(e, t, n, r) {
   jvm.ColorScale.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.ColorScale, jvm.NumericScale), jvm.ColorScale.prototype.setScale = function(e) {
   var t;
   for (t = 0; t < e.length; t++) this.scale[t] = jvm.ColorScale.rgbToArray(e[t])
}, jvm.ColorScale.prototype.getValue = function(e) {
   return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, e))
}, jvm.ColorScale.arrayToRgb = function(e) {
   var t = "#",
      n, r;
   for (r = 0; r < e.length; r++) n = e[r].toString(16), t += n.length == 1 ? "0" + n : n;
   return t
}, jvm.ColorScale.numToRgb = function(e) {
   e = e.toString(16);
   while (e.length < 6) e = "0" + e;
   return "#" + e
}, jvm.ColorScale.rgbToArray = function(e) {
   return e = e.substr(1), [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)]
}, jvm.DataSeries = function(e, t) {
   var n;
   e = e || {}, e.attribute = e.attribute || "fill", this.elements = t, this.params = e, e.attributes && this.setAttributes(e.attributes), jvm.$.isArray(e.scale) ? (n = e.attribute === "fill" || e.attribute === "stroke" ? jvm.ColorScale : jvm.NumericScale, this.scale = new n(e.scale, e.normalizeFunction, e.min, e.max)) : e.scale ? this.scale = new jvm.OrdinalScale(e.scale) : this.scale = new jvm.SimpleScale(e.scale), this.values = e.values || {}, this.setValues(this.values)
}, jvm.DataSeries.prototype = {
   setAttributes: function(e, t) {
      var n = e,
         r;
      if (typeof e == "string") this.elements[e] && this.elements[e].setStyle(this.params.attribute, t);
      else
         for (r in n) this.elements[r] && this.elements[r].element.setStyle(this.params.attribute, n[r])
   },
   setValues: function(e) {
      var t = Number.MIN_VALUE,
         n = Number.MAX_VALUE,
         r, i, s = {};
      if (this.scale instanceof jvm.OrdinalScale || this.scale instanceof jvm.SimpleScale)
         for (i in e) e[i] ? s[i] = this.scale.getValue(e[i]) : s[i] = this.elements[i].element.style.initial[this.params.attribute];
      else {
         if (!this.params.min || !this.params.max) {
            for (i in e) r = parseFloat(e[i]), r > t && (t = e[i]), r < n && (n = r);
            this.params.min || this.scale.setMin(n), this.params.max || this.scale.setMax(t), this.params.min = n, this.params.max = t
         }
         for (i in e) r = parseFloat(e[i]), isNaN(r) ? s[i] = this.elements[i].element.style.initial[this.params.attribute] : s[i] = this.scale.getValue(r)
      }
      this.setAttributes(s), jvm.$.extend(this.values, e)
   },
   clear: function() {
      var e, t = {};
      for (e in this.values) this.elements[e] && (t[e] = this.elements[e].element.style.initial[this.params.attribute]);
      this.setAttributes(t), this.values = {}
   },
   setScale: function(e) {
      this.scale.setScale(e), this.values && this.setValues(this.values)
   },
   setNormalizeFunction: function(e) {
      this.scale.setNormalizeFunction(e), this.values && this.setValues(this.values)
   }
}, jvm.Proj = {
   degRad: 180 / Math.PI,
   radDeg: Math.PI / 180,
   radius: 6381372,
   sgn: function(e) {
      return e > 0 ? 1 : e < 0 ? -1 : e
   },
   mill: function(e, t, n) {
      return {
         x: this.radius * (t - n) * this.radDeg,
         y: -this.radius * Math.log(Math.tan((45 + .4 * e) * this.radDeg)) / .8
      }
   },
   mill_inv: function(e, t, n) {
      return {
         lat: (2.5 * Math.atan(Math.exp(.8 * t / this.radius)) - 5 * Math.PI / 8) * this.degRad,
         lng: (n * this.radDeg + e / this.radius) * this.degRad
      }
   },
   merc: function(e, t, n) {
      return {
         x: this.radius * (t - n) * this.radDeg,
         y: -this.radius * Math.log(Math.tan(Math.PI / 4 + e * Math.PI / 360))
      }
   },
   merc_inv: function(e, t, n) {
      return {
         lat: (2 * Math.atan(Math.exp(t / this.radius)) - Math.PI / 2) * this.degRad,
         lng: (n * this.radDeg + e / this.radius) * this.degRad
      }
   },
   aea: function(e, t, n) {
      var r = 0,
         i = n * this.radDeg,
         s = 29.5 * this.radDeg,
         o = 45.5 * this.radDeg,
         u = e * this.radDeg,
         a = t * this.radDeg,
         f = (Math.sin(s) + Math.sin(o)) / 2,
         l = Math.cos(s) * Math.cos(s) + 2 * f * Math.sin(s),
         c = f * (a - i),
         h = Math.sqrt(l - 2 * f * Math.sin(u)) / f,
         p = Math.sqrt(l - 2 * f * Math.sin(r)) / f;
      return {
         x: h * Math.sin(c) * this.radius,
         y: -(p - h * Math.cos(c)) * this.radius
      }
   },
   aea_inv: function(e, t, n) {
      var r = e / this.radius,
         i = t / this.radius,
         s = 0,
         o = n * this.radDeg,
         u = 29.5 * this.radDeg,
         a = 45.5 * this.radDeg,
         f = (Math.sin(u) + Math.sin(a)) / 2,
         l = Math.cos(u) * Math.cos(u) + 2 * f * Math.sin(u),
         c = Math.sqrt(l - 2 * f * Math.sin(s)) / f,
         h = Math.sqrt(r * r + (c - i) * (c - i)),
         p = Math.atan(r / (c - i));
      return {
         lat: Math.asin((l - h * h * f * f) / (2 * f)) * this.degRad,
         lng: (o + p / f) * this.degRad
      }
   },
   lcc: function(e, t, n) {
      var r = 0,
         i = n * this.radDeg,
         s = t * this.radDeg,
         o = 33 * this.radDeg,
         u = 45 * this.radDeg,
         a = e * this.radDeg,
         f = Math.log(Math.cos(o) * (1 / Math.cos(u))) / Math.log(Math.tan(Math.PI / 4 + u / 2) * (1 / Math.tan(Math.PI / 4 + o / 2))),
         l = Math.cos(o) * Math.pow(Math.tan(Math.PI / 4 + o / 2), f) / f,
         c = l * Math.pow(1 / Math.tan(Math.PI / 4 + a / 2), f),
         h = l * Math.pow(1 / Math.tan(Math.PI / 4 + r / 2), f);
      return {
         x: c * Math.sin(f * (s - i)) * this.radius,
         y: -(h - c * Math.cos(f * (s - i))) * this.radius
      }
   },
   lcc_inv: function(e, t, n) {
      var r = e / this.radius,
         i = t / this.radius,
         s = 0,
         o = n * this.radDeg,
         u = 33 * this.radDeg,
         a = 45 * this.radDeg,
         f = Math.log(Math.cos(u) * (1 / Math.cos(a))) / Math.log(Math.tan(Math.PI / 4 + a / 2) * (1 / Math.tan(Math.PI / 4 + u / 2))),
         l = Math.cos(u) * Math.pow(Math.tan(Math.PI / 4 + u / 2), f) / f,
         c = l * Math.pow(1 / Math.tan(Math.PI / 4 + s / 2), f),
         h = this.sgn(f) * Math.sqrt(r * r + (c - i) * (c - i)),
         p = Math.atan(r / (c - i));
      return {
         lat: (2 * Math.atan(Math.pow(l / h, 1 / f)) - Math.PI / 2) * this.degRad,
         lng: (o + p / f) * this.degRad
      }
   }
}, jvm.WorldMap = function(e) {
   var t = this,
      n;
   this.params = jvm.$.extend(!0, {}, jvm.WorldMap.defaultParams, e);
   if (!jvm.WorldMap.maps[this.params.map]) throw new Error("Attempt to use map which was not loaded: " + this.params.map);
   this.mapData = jvm.WorldMap.maps[this.params.map], this.markers = {}, this.regions = {}, this.regionsColors = {}, this.regionsData = {}, this.container = jvm.$("<div>").css({
      width: "100%",
      height: "100%"
   }).addClass("jvectormap-container"), this.params.container.append(this.container), this.container.data("mapObject", this), this.container.css({
      position: "relative",
      overflow: "hidden"
   }), this.defaultWidth = this.mapData.width, this.defaultHeight = this.mapData.height, this.setBackgroundColor(this.params.backgroundColor), this.onResize = function() {
      t.setSize()
   }, jvm.$(window).resize(this.onResize);
   for (n in jvm.WorldMap.apiEvents) this.params[n] && this.container.bind(jvm.WorldMap.apiEvents[n] + ".jvectormap", this.params[n]);
   this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height), "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? this.params.bindTouchEvents && this.bindContainerTouchEvents() : this.bindContainerEvents(), this.bindElementEvents(), this.createLabel(), this.params.zoomButtons && this.bindZoomButtons(), this.createRegions(), this.createMarkers(this.params.markers || {}), this.setSize(), this.params.focusOn && (typeof this.params.focusOn == "object" ? this.setFocus.call(this, this.params.focusOn.scale, this.params.focusOn.x, this.params.focusOn.y) : this.setFocus.call(this, this.params.focusOn)), this.params.selectedRegions && this.setSelectedRegions(this.params.selectedRegions), this.params.selectedMarkers && this.setSelectedMarkers(this.params.selectedMarkers), this.params.series && this.createSeries()
}, jvm.WorldMap.prototype = {
   transX: 0,
   transY: 0,
   scale: 1,
   baseTransX: 0,
   baseTransY: 0,
   baseScale: 1,
   width: 0,
   height: 0,
   setBackgroundColor: function(e) {
      this.container.css("background-color", e)
   },
   resize: function() {
      var e = this.baseScale;
      this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / e, this.transX *= this.baseScale / e, this.transY *= this.baseScale / e
   },
   setSize: function() {
      this.width = this.container.width(), this.height = this.container.height(), this.resize(), this.canvas.setSize(this.width, this.height), this.applyTransform()
   },
   reset: function() {
      var e, t;
      for (e in this.series)
         for (t = 0; t < this.series[e].length; t++) this.series[e][t].clear();
      this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform()
   },
   applyTransform: function() {
      var e, t, n, r;
      this.defaultWidth * this.scale <= this.width ? (e = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), n = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (e = 0, n = (this.width - this.defaultWidth * this.scale) / this.scale), this.defaultHeight * this.scale <= this.height ? (t = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), r = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (t = 0, r = (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > t ? this.transY = t : this.transY < r && (this.transY = r), this.transX > e ? this.transX = e : this.transX < n && (this.transX = n), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this.markers && this.repositionMarkers(), this.container.trigger("viewportChange", [this.scale / this.baseScale, this.transX, this.transY])
   },
   bindContainerEvents: function() {
      var e = !1,
         t, n, r = this;
      this.container.mousemove(function(i) {
         return e && (r.transX -= (t - i.pageX) / r.scale, r.transY -= (n - i.pageY) / r.scale, r.applyTransform(), t = i.pageX, n = i.pageY), !1
      }).mousedown(function(r) {
         return e = !0, t = r.pageX, n = r.pageY, !1
      }), jvm.$("body").mouseup(function() {
         e = !1
      }), this.params.zoomOnScroll && this.container.mousewheel(function(e, t, n, i) {
         var s = jvm.$(r.container).offset(),
            o = e.pageX - s.left,
            u = e.pageY - s.top,
            a = Math.pow(1.3, i);
         r.label.hide(), r.setScale(r.scale * a, o, u), e.preventDefault()
      })
   },
   bindContainerTouchEvents: function() {
      var e, t, n = this,
         r, i, s, o, u, a = function(a) {
            var f = a.originalEvent.touches,
               l, c, h, p;
            a.type == "touchstart" && (u = 0), f.length == 1 ? (u == 1 && (h = n.transX, p = n.transY, n.transX -= (r - f[0].pageX) / n.scale, n.transY -= (i - f[0].pageY) / n.scale, n.applyTransform(), n.label.hide(), (h != n.transX || p != n.transY) && a.preventDefault()), r = f[0].pageX, i = f[0].pageY) : f.length == 2 && (u == 2 ? (c = Math.sqrt(Math.pow(f[0].pageX - f[1].pageX, 2) + Math.pow(f[0].pageY - f[1].pageY, 2)) / t, n.setScale(e * c, s, o), n.label.hide(), a.preventDefault()) : (l = jvm.$(n.container).offset(), f[0].pageX > f[1].pageX ? s = f[1].pageX + (f[0].pageX - f[1].pageX) / 2 : s = f[0].pageX + (f[1].pageX - f[0].pageX) / 2, f[0].pageY > f[1].pageY ? o = f[1].pageY + (f[0].pageY - f[1].pageY) / 2 : o = f[0].pageY + (f[1].pageY - f[0].pageY) / 2, s -= l.left, o -= l.top, e = n.scale, t = Math.sqrt(Math.pow(f[0].pageX - f[1].pageX, 2) + Math.pow(f[0].pageY - f[1].pageY, 2)))), u = f.length
         };
      jvm.$(this.container).bind("touchstart", a), jvm.$(this.container).bind("touchmove", a)
   },
   bindElementEvents: function() {
      var e = this,
         t;
      this.container.mousemove(function() {
         t = !0
      }), this.container.delegate("[class~='jvectormap-element']", "mouseover mouseout", function(t) {
         var n = this,
            r = jvm.$(this).attr("class").baseVal ? jvm.$(this).attr("class").baseVal : jvm.$(this).attr("class"),
            i = r.indexOf("jvectormap-region") === -1 ? "marker" : "region",
            s = i == "region" ? jvm.$(this).attr("data-code") : jvm.$(this).attr("data-index"),
            o = i == "region" ? e.regions[s].element : e.markers[s].element,
            u = i == "region" ? e.mapData.paths[s].name : e.markers[s].config.name || "",
            a = jvm.$.Event(i + "LabelShow.jvectormap"),
            f = jvm.$.Event(i + "Over.jvectormap");
         t.type == "mouseover" ? (e.container.trigger(f, [s]), f.isDefaultPrevented() || o.setHovered(!0), e.label.text(u), e.container.trigger(a, [e.label, s]), a.isDefaultPrevented() || (e.label.show(), e.labelWidth = e.label.width(), e.labelHeight = e.label.height())) : (o.setHovered(!1), e.label.hide(), e.container.trigger(i + "Out.jvectormap", [s]))
      }), this.container.delegate("[class~='jvectormap-element']", "mousedown", function(e) {
         t = !1
      }), this.container.delegate("[class~='jvectormap-element']", "mouseup", function(n) {
         var r = this,
            i = jvm.$(this).attr("class").baseVal ? jvm.$(this).attr("class").baseVal : jvm.$(this).attr("class"),
            s = i.indexOf("jvectormap-region") === -1 ? "marker" : "region",
            o = s == "region" ? jvm.$(this).attr("data-code") : jvm.$(this).attr("data-index"),
            u = jvm.$.Event(s + "Click.jvectormap"),
            a = s == "region" ? e.regions[o].element : e.markers[o].element;
         if (!t) {
            e.container.trigger(u, [o]);
            if (s === "region" && e.params.regionsSelectable || s === "marker" && e.params.markersSelectable) u.isDefaultPrevented() || (e.params[s + "sSelectableOne"] && e.clearSelected(s + "s"), a.setSelected(!a.isSelected))
         }
      })
   },
   bindZoomButtons: function() {
      var e = this;
      jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container), jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container), this.container.find(".jvectormap-zoomin").click(function() {
         e.setScale(e.scale * e.params.zoomStep, e.width / 2, e.height / 2)
      }), this.container.find(".jvectormap-zoomout").click(function() {
         e.setScale(e.scale / e.params.zoomStep, e.width / 2, e.height / 2)
      })
   },
   createLabel: function() {
      var e = this;
      this.label = jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")), this.container.mousemove(function(t) {
         var n = t.pageX - 15 - e.labelWidth,
            r = t.pageY - 15 - e.labelHeight;
         n < 5 && (n = t.pageX + 15), r < 5 && (r = t.pageY + 15), e.label.is(":visible") && e.label.css({
            left: n,
            top: r
         })
      })
   },
   setScale: function(e, t, n, r) {
      var i, s = jvm.$.Event("zoom.jvectormap");
      e > this.params.zoomMax * this.baseScale ? e = this.params.zoomMax * this.baseScale : e < this.params.zoomMin * this.baseScale && (e = this.params.zoomMin * this.baseScale), typeof t != "undefined" && typeof n != "undefined" && (i = e / this.scale, r ? (this.transX = t + this.defaultWidth * (this.width / (this.defaultWidth * e)) / 2, this.transY = n + this.defaultHeight * (this.height / (this.defaultHeight * e)) / 2) : (this.transX -= (i - 1) / e * t, this.transY -= (i - 1) / e * n)), this.scale = e, this.applyTransform(), this.container.trigger(s, [e / this.baseScale])
   },
   setFocus: function(e, t, n) {
      var r, i, s, o, u;
      if (jvm.$.isArray(e) || this.regions[e]) {
         jvm.$.isArray(e) ? o = e : o = [e];
         for (u = 0; u < o.length; u++) this.regions[o[u]] && (i = this.regions[o[u]].element.getBBox(), i && (typeof r == "undefined" ? r = i : (s = {
            x: Math.min(r.x, i.x),
            y: Math.min(r.y, i.y),
            width: Math.max(r.x + r.width, i.x + i.width) - Math.min(r.x, i.x),
            height: Math.max(r.y + r.height, i.y + i.height) - Math.min(r.y, i.y)
         }, r = s)));
         this.setScale(Math.min(this.width / r.width, this.height / r.height), -(r.x + r.width / 2), -(r.y + r.height / 2), !0)
      } else e *= this.baseScale, this.setScale(e, -t * this.defaultWidth, -n * this.defaultHeight, !0)
   },
   getSelected: function(e) {
      var t, n = [];
      for (t in this[e]) this[e][t].element.isSelected && n.push(t);
      return n
   },
   getSelectedRegions: function() {
      return this.getSelected("regions")
   },
   getSelectedMarkers: function() {
      return this.getSelected("markers")
   },
   setSelected: function(e, t) {
      var n;
      typeof t != "object" && (t = [t]);
      if (jvm.$.isArray(t))
         for (n = 0; n < t.length; n++) this[e][t[n]].element.setSelected(!0);
      else
         for (n in t) this[e][n].element.setSelected(!!t[n])
   },
   setSelectedRegions: function(e) {
      this.setSelected("regions", e)
   },
   setSelectedMarkers: function(e) {
      this.setSelected("markers", e)
   },
   clearSelected: function(e) {
      var t = {},
         n = this.getSelected(e),
         r;
      for (r = 0; r < n.length; r++) t[n[r]] = !1;
      this.setSelected(e, t)
   },
   clearSelectedRegions: function() {
      this.clearSelected("regions")
   },
   clearSelectedMarkers: function() {
      this.clearSelected("markers")
   },
   getMapObject: function() {
      return this
   },
   getRegionName: function(e) {
      return this.mapData.paths[e].name
   },
   createRegions: function() {
      var e, t, n = this;
      for (e in this.mapData.paths) t = this.canvas.addPath({
         d: this.mapData.paths[e].path,
         "data-code": e
      }, jvm.$.extend(!0, {}, this.params.regionStyle)), jvm.$(t.node).bind("selected", function(e, t) {
         n.container.trigger("regionSelected.jvectormap", [jvm.$(this).attr("data-code"), t, n.getSelectedRegions()])
      }), t.addClass("jvectormap-region jvectormap-element"), this.regions[e] = {
         element: t,
         config: this.mapData.paths[e]
      }
   },
   createMarkers: function(e) {
      var t, n, r, i, s, o = this;
      this.markersGroup = this.markersGroup || this.canvas.addGroup();
      if (jvm.$.isArray(e)) {
         s = e.slice(), e = {};
         for (t = 0; t < s.length; t++) e[t] = s[t]
      }
      for (t in e) i = e[t] instanceof Array ? {
         latLng: e[t]
      } : e[t], r = this.getMarkerPosition(i), r !== !1 && (n = this.canvas.addCircle({
         "data-index": t,
         cx: r.x,
         cy: r.y
      }, jvm.$.extend(!0, {}, this.params.markerStyle, {
         initial: i.style || {}
      }), this.markersGroup), n.addClass("jvectormap-marker jvectormap-element"), jvm.$(n.node).bind("selected", function(e, t) {
         o.container.trigger("markerSelected.jvectormap", [jvm.$(this).attr("data-index"), t, o.getSelectedMarkers()])
      }), this.markers[t] && this.removeMarkers([t]), this.markers[t] = {
         element: n,
         config: i
      })
   },
   repositionMarkers: function() {
      var e, t;
      for (e in this.markers) t = this.getMarkerPosition(this.markers[e].config), t !== !1 && this.markers[e].element.setStyle({
         cx: t.x,
         cy: t.y
      })
   },
   getMarkerPosition: function(e) {
      return jvm.WorldMap.maps[this.params.map].projection ? this.latLngToPoint.apply(this, e.latLng || [0, 0]) : {
         x: e.coords[0] * this.scale + this.transX * this.scale,
         y: e.coords[1] * this.scale + this.transY * this.scale
      }
   },
   addMarker: function(e, t, n) {
      var r = {},
         i = [],
         s, o, n = n || [];
      r[e] = t;
      for (o = 0; o < n.length; o++) s = {}, s[e] = n[o], i.push(s);
      this.addMarkers(r, i)
   },
   addMarkers: function(e, t) {
      var n;
      t = t || [], this.createMarkers(e);
      for (n = 0; n < t.length; n++) this.series.markers[n].setValues(t[n] || {})
   },
   removeMarkers: function(e) {
      var t;
      for (t = 0; t < e.length; t++) this.markers[e[t]].element.remove(), delete this.markers[e[t]]
   },
   removeAllMarkers: function() {
      var e, t = [];
      for (e in this.markers) t.push(e);
      this.removeMarkers(t)
   },
   latLngToPoint: function(e, t) {
      var n, r = jvm.WorldMap.maps[this.params.map].projection,
         i = r.centralMeridian,
         s = this.width - this.baseTransX * 2 * this.baseScale,
         o = this.height - this.baseTransY * 2 * this.baseScale,
         u, a, f = this.scale / this.baseScale;
      return t < -180 + i && (t += 360), n = jvm.Proj[r.type](e, t, i), u = this.getInsetForPoint(n.x, n.y), u ? (a = u.bbox, n.x = (n.x - a[0].x) / (a[1].x - a[0].x) * u.width * this.scale, n.y = (n.y - a[0].y) / (a[1].y - a[0].y) * u.height * this.scale, {
         x: n.x + this.transX * this.scale + u.left * this.scale,
         y: n.y + this.transY * this.scale + u.top * this.scale
      }) : !1
   },
   pointToLatLng: function(e, t) {
      var n = jvm.WorldMap.maps[this.params.map].projection,
         r = n.centralMeridian,
         i = jvm.WorldMap.maps[this.params.map].insets,
         s, o, u, a, f;
      for (s = 0; s < i.length; s++) {
         o = i[s], u = o.bbox, a = e - (this.transX * this.scale + o.left * this.scale), f = t - (this.transY * this.scale + o.top * this.scale), a = a / (o.width * this.scale) * (u[1].x - u[0].x) + u[0].x, f = f / (o.height * this.scale) * (u[1].y - u[0].y) + u[0].y;
         if (a > u[0].x && a < u[1].x && f > u[0].y && f < u[1].y) return jvm.Proj[n.type + "_inv"](a, -f, r)
      }
      return !1
   },
   getInsetForPoint: function(e, t) {
      var n = jvm.WorldMap.maps[this.params.map].insets,
         r, i;
      for (r = 0; r < n.length; r++) {
         i = n[r].bbox;
         if (e > i[0].x && e < i[1].x && t > i[0].y && t < i[1].y) return n[r]
      }
   },
   createSeries: function() {
      var e, t;
      this.series = {
         markers: [],
         regions: []
      };
      for (t in this.params.series)
         for (e = 0; e < this.params.series[t].length; e++) this.series[t][e] = new jvm.DataSeries(this.params.series[t][e], this[t])
   },
   remove: function() {
      this.label.remove(), this.container.remove(), jvm.$(window).unbind("resize", this.onResize)
   }
}, jvm.WorldMap.maps = {}, jvm.WorldMap.defaultParams = {
   map: "world_mill_en",
   backgroundColor: "#505050",
   zoomButtons: !0,
   zoomOnScroll: !0,
   zoomMax: 8,
   zoomMin: 1,
   zoomStep: 1.6,
   regionsSelectable: !1,
   markersSelectable: !1,
   bindTouchEvents: !0,
   regionStyle: {
      initial: {
         fill: "white",
         "fill-opacity": 1,
         stroke: "none",
         "stroke-width": 0,
         "stroke-opacity": 1
      },
      hover: {
         "fill-opacity": .8
      },
      selected: {
         fill: "yellow"
      },
      selectedHover: {}
   },
   markerStyle: {
      initial: {
         fill: "grey",
         stroke: "#505050",
         "fill-opacity": 1,
         "stroke-width": 1,
         "stroke-opacity": 1,
         r: 5
      },
      hover: {
         stroke: "black",
         "stroke-width": 2
      },
      selected: {
         fill: "blue"
      },
      selectedHover: {}
   }
}, jvm.WorldMap.apiEvents = {
   onRegionLabelShow: "regionLabelShow",
   onRegionOver: "regionOver",
   onRegionOut: "regionOut",
   onRegionClick: "regionClick",
   onRegionSelected: "regionSelected",
   onMarkerLabelShow: "markerLabelShow",
   onMarkerOver: "markerOver",
   onMarkerOut: "markerOut",
   onMarkerClick: "markerClick",
   onMarkerSelected: "markerSelected",
   onViewportChange: "viewportChange"
};

/* jVectorMap Map Addon - US LCC EN */
;
$.fn.vectorMap('addMap', 'us_lcc_en', {
   "insets": [{
      "width": 220,
      "top": 440,
      "height": 166.21110208955287,
      "bbox": [{
         "y": -9267552.531674266,
         "x": -5155290.453049839
      }, {
         "y": -6764289.414370112,
         "x": -1841926.430529895
      }],
      "left": 0
   }, {
      "width": 80,
      "top": 460,
      "height": 143.8328614221207,
      "bbox": [{
         "y": -4795881.34814295,
         "x": -6003393.339321571
      }, {
         "y": -4216840.972769757,
         "x": -5681330.42844124
      }],
      "left": 245
   }, {
      "width": 900.0,
      "top": 0,
      "height": 551.902671908889,
      "bbox": [{
         "y": -5998757.840416584,
         "x": -2034551.3272073336
      }, {
         "y": -3186864.9120395393,
         "x": 2550865.2042732784
      }],
      "left": 0
   }],
   "paths": {
      "US-VA": {
         "path": "M684.15,290.12l1.59,-0.92l1.65,-0.49l1.11,-0.95l3.57,-1.7l0.73,-2.31l0.83,-0.2l2.32,-1.54l0.04,-1.79l2.04,-1.86l-0.13,-1.56l0.25,-0.41l5.0,-4.09l4.74,-5.97l0.1,0.61l0.97,0.52l0.34,1.35l1.33,0.71l0.71,0.79l1.47,0.07l2.1,1.08l1.41,-0.11l0.79,-0.41l0.76,-1.22l1.18,-0.57l0.53,-1.36l2.74,1.43l1.42,-1.1l2.25,-1.01l0.77,0.05l1.07,-0.96l0.33,-0.82l-0.49,-0.94l0.23,-0.41l1.91,0.55l3.25,-2.63l0.3,-0.1l0.51,0.71l0.66,-0.08l2.37,-2.33l0.17,-0.85l-0.5,-0.49l0.98,-1.12l0.1,-0.6l-0.29,-0.5l-1.01,-0.43l0.69,-2.99l2.58,-4.76l0.54,-2.12l-0.02,-1.88l1.6,-2.53l-0.22,-0.92l0.24,-0.83l0.5,-0.48l0.38,-1.68l-0.02,-3.13l1.24,0.17l1.19,1.69l3.81,0.37l0.58,-0.28l1.03,-2.5l0.18,-2.33l0.7,-1.04l-0.05,-1.59l0.75,-2.28l1.8,0.72l0.65,-0.18l1.29,-3.27l0.57,0.04l0.59,-0.39l0.51,-1.19l0.81,-0.68l0.43,-1.78l1.36,-2.42l-0.37,-2.53l0.53,-1.74l-0.32,-1.97l9.23,4.37l0.58,-0.3l0.61,-3.95l2.61,-0.11l0.63,0.55l1.06,0.21l-0.5,1.72l0.62,0.87l1.62,0.81l2.53,-0.08l1.04,1.14l1.64,0.09l1.95,1.46l0.58,2.48l-0.94,0.78l-0.45,0.03l-0.3,0.43l0.12,0.7l-0.61,-0.05l-0.48,0.59l-0.35,2.47l0.08,2.25l-0.43,0.25l0.01,0.6l1.04,0.73l-0.35,0.14l-0.17,0.6l0.45,0.3l1.64,-0.1l1.38,-0.62l1.77,-1.62l0.4,0.56l-0.58,0.35l0.03,0.59l1.91,1.03l0.65,1.06l1.7,0.31l1.38,-0.13l0.95,0.47l0.82,-0.66l1.06,-0.1l0.33,0.55l1.26,0.59l-0.09,0.54l0.37,0.54l0.94,-0.24l0.42,0.54l3.97,0.8l0.26,1.1l-0.87,-0.4l-0.56,0.45l0.9,1.7l-0.35,0.57l0.62,0.77l-0.42,0.88l0.23,0.58l-1.36,-0.33l-0.59,-0.7l-0.66,0.19l-0.1,0.43l-2.47,-2.24l-0.55,0.06l-0.38,-0.54l-0.52,0.32l-1.37,-1.46l-1.24,-0.4l-2.88,-2.64l-1.34,-0.1l-1.12,-0.78l-1.17,0.07l-0.39,0.52l0.48,0.71l1.1,-0.03l0.64,0.66l1.33,0.05l0.6,0.41l0.63,1.37l1.47,1.07l1.14,0.32l1.54,1.75l2.56,0.89l1.41,1.84l2.15,-0.05l1.26,0.45l-0.58,0.69l0.31,0.48l2.03,0.31l0.27,0.7l0.56,0.09l0.14,1.64l-1.01,-0.73l-0.39,0.21l-1.14,-0.97l-0.58,0.3l0.11,0.81l-0.3,0.68l0.7,0.69l-0.16,0.59l1.12,0.3l-0.86,0.45l-2.14,-0.68l-1.4,-1.34l-0.84,-0.3l-2.25,-1.81l-0.57,0.12l-0.21,0.53l0.27,0.8l0.64,0.2l3.84,3.04l2.7,1.06l1.28,-0.35l0.46,1.05l1.27,0.23l-0.43,0.66l0.3,0.56l0.93,-0.2l0.01,1.21l-0.92,0.42l-0.57,0.74l-0.72,-0.91l-3.22,-1.51l-0.3,-1.14l-0.6,-0.57l-0.86,-0.1l-1.2,0.68l-1.72,-0.41l-0.37,-1.13l-0.71,-0.04l-0.05,1.3l-0.33,0.41l-1.44,-1.28l-0.51,0.1l-0.49,0.57l-0.66,-0.38l-0.98,0.46l-2.23,-0.07l-0.37,0.94l0.35,0.45l1.91,0.18l1.4,-0.33l0.85,0.23l0.56,-0.69l0.64,0.86l1.35,0.4l1.96,-0.34l1.51,0.68l0.67,-0.64l0.96,2.43l3.18,1.16l0.38,0.88l-0.57,1.02l0.56,0.43l1.72,-1.32l0.89,-0.03l0.84,0.63l0.79,-0.28l-0.62,-0.88l-0.2,-1.14l3.79,0.02l1.13,-0.45l1.91,3.14l-0.45,0.71l0.68,3.04l-1.2,-0.55l-0.01,0.87l-33.61,8.85l-34.62,8.17l-19.56,3.56l-11.81,1.37l-0.82,0.62l-28.25,5.27ZM782.77,223.09l0.13,0.08l-0.05,0.06l-0.01,-0.03l-0.07,-0.12ZM809.86,243.6l0.52,-1.12l-0.27,-0.54l-0.36,-0.07l0.57,-0.97l-0.39,-0.71l-0.03,-0.47l0.43,-0.35l-0.18,-0.72l0.63,-0.31l0.22,-0.6l0.12,-2.29l1.01,-0.4l-0.13,-0.88l0.48,-0.14l-0.27,-1.51l-0.77,-0.39l0.85,-0.56l0.09,-1.02l2.68,-1.14l0.39,2.43l-1.05,4.15l-0.21,2.35l0.34,1.06l-0.33,0.97l-0.61,-0.77l-0.8,0.16l-0.38,0.95l0.26,0.36l-0.64,0.46l-0.3,0.85l0.17,1.04l-0.3,1.44l0.4,2.43l-0.6,0.59l0.07,1.31l-1.39,-1.86l0.22,-0.92l-0.34,-1.54l0.28,-0.97l-0.38,-0.29Z",
         "name": "Virginia"
      },
      "US-PA": {
         "path": "M717.56,161.53l0.63,-0.19l4.28,-3.74l1.16,5.12l0.48,0.3l34.83,-8.31l34.25,-9.05l1.43,0.55l0.73,1.36l0.63,0.12l0.77,-0.34l1.24,0.56l0.16,0.84l0.81,0.39l-0.15,0.58l0.92,2.65l1.92,2.02l2.12,0.71l2.21,-0.24l0.72,0.77l-0.89,0.87l-0.71,1.48l-0.16,2.23l-1.39,3.33l-1.36,1.59l0.04,0.79l1.8,1.66l-0.29,1.63l-0.84,0.44l-0.22,0.65l0.15,1.46l1.06,2.82l0.53,0.24l1.2,-0.2l1.2,2.33l0.96,0.56l0.66,-0.27l0.61,0.88l4.26,2.64l0.12,0.39l-1.28,0.94l-3.69,4.22l-0.22,0.75l0.18,0.88l-1.35,1.14l-0.84,0.16l-1.32,1.09l-0.32,0.65l-1.72,-0.09l-2.03,0.86l-1.14,1.36l-0.4,1.38l-37.24,9.65l-39.13,9.08l-10.34,-47.42l1.91,-1.23l3.06,-3.05Z",
         "name": "Pennsylvania"
      },
      "US-TN": {
         "path": "M573.2,341.46l0.85,-0.82l0.29,-1.35l1.01,0.04l0.65,-0.79l-1.01,-4.82l1.41,-1.91l0.06,-1.31l1.19,-0.47l0.36,-0.48l-0.64,-1.29l0.52,-0.64l0.05,-0.56l-0.9,-1.3l2.56,-1.56l1.09,-1.12l-0.14,-0.84l-0.85,-0.52l0.13,-0.18l0.34,-0.16l0.85,0.36l0.45,-0.33l-0.27,-1.3l-0.85,-0.88l0.05,-0.69l0.5,-1.41l1.01,-1.1l-1.35,-2.02l1.37,-0.22l0.61,-0.55l-0.14,-0.64l-1.18,-0.79l0.82,-0.15l0.58,-0.54l0.13,-0.69l-0.59,-1.35l0.02,-0.36l0.38,0.53l0.47,0.07l1.18,-1.14l23.75,-2.95l0.35,-0.41l-0.1,-1.33l-0.84,-2.34l2.99,-0.1l0.82,0.57l22.86,-3.69l7.67,-0.52l7.52,-0.92l32.92,-4.79l1.11,-0.6l29.37,-5.47l0.73,-0.6l3.56,-0.57l-0.39,1.41l0.44,0.84l-0.39,1.97l0.36,0.8l-1.15,-0.02l-1.71,1.79l-1.19,3.85l-0.55,0.7l-0.57,0.08l-0.64,-0.72l-1.44,-0.0l-2.67,1.74l-1.41,2.71l-0.96,0.89l-0.34,-0.33l-0.14,-1.04l-0.73,-0.52l-0.53,0.15l-2.3,1.81l-0.29,1.31l-0.94,-0.23l-0.89,0.48l-0.16,0.76l0.33,0.71l-0.84,2.15l-1.29,0.07l-1.75,1.14l-1.28,1.24l-0.61,1.05l-0.78,0.28l-2.28,2.45l-4.05,0.81l-2.58,1.7l-0.49,1.08l-0.88,0.55l-0.55,0.8l-0.17,2.85l-0.35,0.6l-1.66,0.53l-0.89,-0.15l-1.06,1.14l0.23,5.18l-20.28,3.48l-21.69,3.21l-25.86,3.15l-0.13,0.28l-7.43,0.94l-28.83,3.33Z",
         "name": "Tennessee"
      },
      "US-ID": {
         "path": "M132.97,123.81l-0.34,-0.44l0.1,-1.98l0.55,-1.73l1.43,-1.2l2.14,-3.56l1.69,-0.91l1.4,-1.51l1.09,-2.13l0.06,-1.21l2.23,-2.39l1.45,-2.68l0.38,-1.36l2.06,-2.24l1.91,-2.8l0.04,-1.01l-0.76,-2.96l-2.11,-1.96l-0.86,-0.37l-0.84,-1.62l-0.39,-3.03l-0.58,-1.2l0.95,-1.18l-0.1,-2.36l-1.01,-2.71l0.47,-0.99l10.25,-55.09l13.33,2.45l-3.77,21.08l1.25,2.93l0.98,1.29l0.25,1.57l1.15,1.79l-0.13,0.84l0.38,1.16l-1.0,0.96l0.82,1.79l-0.84,0.11l-0.28,0.71l1.91,1.71l1.01,2.06l2.23,1.25l0.47,1.49l1.14,1.46l1.46,2.82l0.08,0.69l1.62,1.83l-0.01,1.89l1.78,1.73l-0.08,1.36l0.74,0.19l0.9,-0.58l0.35,0.47l-0.36,0.55l0.06,0.54l1.1,0.97l1.61,0.16l1.82,-0.35l-0.65,2.62l-0.99,0.53l0.25,1.14l-1.86,3.74l0.05,1.72l-0.81,0.07l-0.37,0.54l0.59,1.33l-0.62,0.9l-0.04,1.17l0.96,0.94l-0.37,0.81l0.27,1.02l-1.57,0.42l-1.22,1.41l0.09,1.11l0.45,0.78l-0.14,0.74l-0.83,0.77l-0.21,1.52l1.48,0.64l1.37,1.8l0.78,0.28l1.08,-0.34l0.56,-0.79l1.85,-0.4l1.22,-1.27l0.82,-0.29l0.16,-0.76l0.78,0.82l0.22,0.71l1.05,0.65l-0.43,1.23l0.72,0.95l-0.35,1.37l0.56,1.35l-0.22,1.61l1.53,2.65l0.3,1.73l0.82,0.37l0.65,2.08l-0.19,0.98l-0.77,0.63l0.5,1.9l1.23,1.16l0.3,0.79l0.81,0.09l0.87,-0.36l1.04,0.93l1.04,2.79l-0.51,0.81l0.88,1.83l-0.28,0.59l0.11,0.98l2.28,2.42l0.97,-0.13l-0.0,-1.13l1.08,-0.88l0.93,-0.21l4.53,1.64l0.69,-0.31l0.68,-1.34l1.2,-0.39l2.25,0.94l3.3,-0.08l0.95,0.88l2.29,-0.56l3.23,0.8l0.46,-0.49l-0.67,-0.77l0.26,-1.05l0.74,-0.47l-0.06,-0.96l1.23,-0.5l0.48,0.37l1.06,2.11l0.12,1.11l1.36,1.95l0.73,0.45l-6.5,53.36l-47.53,-6.62l-47.01,-8.09l7.13,-38.73l1.13,-1.16l1.09,-2.65l-0.2,-1.74l0.74,-0.14l0.78,-1.6l-0.89,-1.27l-0.17,-1.2l-1.24,-0.09l-0.63,-0.82l-0.89,0.28Z",
         "name": "Idaho"
      },
      "US-NV": {
         "path": "M138.94,329.03l-12.68,-16.85l-36.47,-50.78l-25.23,-34.32l14.11,-63.12l46.9,9.68l47.03,8.11l-19.28,123.81l-0.91,1.13l-1.0,2.15l-0.44,0.17l-1.35,-0.23l-0.97,-2.22l-0.7,-0.63l-1.42,0.2l-1.95,-1.03l-1.61,0.21l-1.8,0.93l-0.78,2.44l0.87,2.57l-0.61,0.95l-0.25,1.29l0.37,3.09l-0.77,2.5l0.76,3.67l-0.15,3.03l-0.31,1.05l-1.05,0.3l-0.12,0.51l0.32,0.79l-0.53,0.61Z",
         "name": "Nevada"
      },
      "US-TX": {
         "path": "M276.14,412.63l33.26,2.09l32.98,1.42l0.41,-0.38l3.72,-97.69l25.97,0.65l26.4,0.23l0.05,41.52l0.44,0.4l1.03,-0.13l0.79,0.27l3.76,3.78l1.67,0.2l0.88,-0.57l2.5,0.64l0.6,-0.67l0.11,-1.04l0.61,0.75l0.93,0.22l0.38,0.92l0.77,0.77l-0.01,1.62l0.53,0.83l2.86,0.42l1.26,-0.2l1.39,0.88l2.8,0.68l1.83,-0.56l0.63,0.1l1.9,1.78l1.41,-0.11l1.26,-1.42l2.44,0.26l1.68,-0.45l0.32,2.59l2.31,0.73l-0.04,2.07l1.56,0.78l1.82,-0.65l1.58,-1.66l1.03,-0.64l0.41,0.19l0.45,1.62l2.02,0.2l0.25,1.04l0.72,0.47l1.47,-0.21l0.89,-0.93l0.39,0.33l0.59,-0.08l0.61,-0.98l0.26,0.4l-0.45,1.22l0.14,0.76l0.68,1.13l0.78,0.41l0.57,-0.04l0.6,-0.5l0.69,-2.34l0.91,-0.65l0.35,-1.53l0.57,-0.14l0.41,0.14l0.29,0.98l0.58,0.63l1.21,0.01l0.83,0.49l1.26,-0.2l0.69,-1.33l0.49,0.15l-0.13,0.69l0.49,0.69l1.21,0.44l0.49,0.71l1.53,-0.05l1.5,1.72l0.51,0.02l0.63,-0.62l0.08,-0.71l1.5,-0.1l0.93,-1.42l1.89,-0.41l1.67,-1.13l1.53,0.83l1.51,-0.22l0.29,-0.83l2.3,-0.73l0.53,-0.55l0.51,0.32l0.38,0.87l1.83,0.41l1.7,-0.06l1.87,-1.14l0.42,-1.04l1.07,0.3l2.25,1.54l1.16,0.17l1.8,2.05l2.15,0.39l1.05,0.91l0.76,-0.11l2.5,0.84l1.05,0.03l0.37,0.78l1.39,0.96l1.45,-0.12l0.39,-0.71l0.81,0.36l0.88,-0.4l0.93,0.34l0.76,-0.16l0.64,0.36l2.31,33.8l1.53,1.66l1.31,0.82l1.26,1.86l0.58,1.63l-0.09,2.64l1.01,1.2l0.85,0.39l-0.11,0.85l0.75,0.54l0.29,0.87l0.66,0.69l-0.19,1.17l1.01,1.02l0.6,1.63l0.51,0.34l0.55,-0.11l-0.16,1.71l0.82,1.21l-0.64,0.25l-0.35,0.68l0.78,1.26l-0.55,0.89l0.19,1.39l-0.75,2.69l-0.75,0.85l-0.36,1.55l-0.8,1.13l0.65,2.0l-0.83,2.29l0.17,1.08l0.84,1.2l-0.18,1.01l0.5,1.61l-0.24,1.41l-1.13,1.68l-1.03,0.21l-1.76,3.39l-0.04,1.07l1.81,2.38l-3.45,0.09l-7.41,3.83l-0.02,-0.44l-2.2,-0.46l-3.27,1.09l1.09,-3.54l-0.3,-1.22l-0.81,-0.76l-0.62,-0.07l-1.53,0.86l-0.99,2.02l-1.57,-0.96l-1.65,0.13l-0.07,0.63l0.9,0.62l0.01,1.06l0.56,0.39l-0.47,0.7l0.07,1.02l1.65,0.64l-0.63,0.72l0.49,0.98l0.91,0.23l0.28,0.38l-0.41,1.27l-0.46,-0.12l-0.98,0.82l-1.73,2.27l-1.19,-0.41l-0.49,0.13l0.33,1.01l0.08,2.57l-1.86,1.51l-1.92,2.13l-0.97,0.37l-4.13,2.94l-3.32,0.46l-2.56,1.08l-0.2,1.14l-0.76,-0.35l-2.05,0.9l-0.34,-0.35l-1.12,0.18l0.43,-0.88l-0.53,-0.6l-1.44,0.23l-1.22,1.1l-0.61,-0.63l-0.11,-1.21l-1.39,-0.82l-0.5,0.44l0.66,1.45l0.02,1.14l-0.72,0.09l-0.54,-0.44l-0.76,-0.0l-0.56,-1.35l-1.47,-0.38l-0.58,0.39l0.04,0.55l0.95,1.72l0.03,1.25l0.58,0.37l0.37,-0.16l1.15,0.79l-0.76,0.38l-0.27,0.54l0.15,0.37l0.7,0.23l1.09,-0.55l0.97,0.61l-4.3,2.46l-0.58,-0.13l-0.38,-1.46l-0.51,-0.19l-1.14,-1.48l-0.49,-0.03l-0.48,0.51l0.12,0.64l-0.64,0.35l-0.05,0.51l1.2,1.64l-0.31,1.06l0.34,0.86l-1.67,1.82l-0.38,0.2l0.38,-0.66l-0.19,-0.72l0.25,-0.74l-0.46,-0.68l-0.52,0.17l-0.72,1.11l0.26,0.73l-0.4,0.97l-0.07,-1.15l-0.52,-0.55l-1.96,1.31l-0.78,-0.33l-0.7,0.52l0.07,0.76l-0.82,1.01l0.02,0.49l1.26,0.64l0.03,0.58l0.79,0.28l0.7,-1.43l0.87,-0.42l0.01,0.64l-2.84,4.43l-1.24,-1.01l-1.37,0.39l-0.33,-0.35l-2.42,0.4l-0.47,-0.32l-0.65,0.17l-0.18,0.58l0.41,0.62l0.56,0.38l1.55,0.02l-0.01,0.93l0.56,0.65l2.09,1.05l-2.71,7.78l-0.22,0.11l-0.38,-0.56l-0.34,0.1l0.18,-0.78l-0.57,-0.43l-2.37,1.99l-1.74,-2.41l-1.2,-0.93l-0.61,0.4l0.09,0.53l1.46,2.04l-0.1,0.84l-0.95,-0.09l-0.33,0.63l0.51,0.57l1.9,0.07l2.16,0.73l2.11,-0.74l-0.44,1.79l0.24,0.79l-0.98,0.71l0.38,1.63l-1.13,0.15l-0.43,0.41l0.41,2.15l-0.33,1.63l0.45,0.64l0.85,0.24l0.89,2.93l0.72,2.88l-0.92,0.84l0.63,0.49l-0.08,1.31l0.73,0.3l0.18,0.63l0.59,0.29l0.4,1.84l0.7,0.31l0.44,3.31l0.81,0.56l0.7,0.08l-0.32,0.2l-0.23,0.95l0.32,1.11l-0.65,0.8l-0.85,-0.05l-0.54,0.45l0.09,1.35l-0.49,-0.34l-0.5,0.26l-0.39,-0.68l-1.5,-0.47l-2.95,-2.6l-2.23,-0.18l-0.81,-0.52l-4.24,0.1l-0.9,0.44l-0.79,-0.64l-1.07,0.26l-1.26,-0.21l-1.47,-0.72l-0.73,-1.0l-0.62,-0.14l-0.2,-0.74l-1.18,-0.5l-1.0,-0.02l-2.0,-0.89l-1.47,0.4l-0.84,-1.12l-0.61,-0.21l-1.44,-1.42l-1.98,0.01l-1.48,-0.66l-0.86,0.12l-1.64,-0.43l0.29,-1.29l-0.54,-1.03l-0.96,-0.36l-1.67,-6.18l-2.79,-3.08l-0.29,-1.14l-1.09,-0.77l0.35,-0.79l-0.24,-0.77l0.34,-2.23l-0.45,-0.97l-1.06,-1.03l0.66,-2.04l0.05,-1.21l-0.18,-0.71l-0.55,-0.33l-0.15,-1.85l-1.86,-1.46l-0.86,0.22l-0.3,-0.42l-0.81,-0.11l-0.75,-1.33l-2.25,-1.75l0.01,-0.7l-0.51,-0.59l0.12,-0.88l-0.98,-0.93l-0.08,-0.76l-1.13,-0.62l-1.31,-2.92l-2.68,-1.5l-0.38,-0.93l-1.14,-0.6l-0.06,-1.18l-0.83,-1.2l-0.23,-1.46l-0.36,-0.52l0.42,-0.22l-0.04,-0.73l-1.04,-0.5l-0.26,-1.31l-0.82,-0.58l-0.95,-1.76l-0.61,-2.41l-1.86,-2.38l-0.87,-4.28l-1.82,-1.35l0.05,-0.71l-0.76,-1.22l-1.32,-0.76l-0.92,-0.99l-1.75,-0.95l-0.71,-1.87l-1.83,-0.62l-1.45,-1.0l-0.01,-1.64l-0.6,-0.39l-0.89,0.24l-0.12,-0.78l-0.99,-0.33l-0.8,-2.09l-0.56,-0.47l-0.47,0.12l-0.46,-0.44l-0.86,0.27l-0.14,-0.61l-0.44,-0.31l-0.47,0.15l-0.26,0.61l-1.06,0.16l-2.91,-0.47l-0.39,-0.38l-1.49,-0.03l-0.79,0.29l-0.77,-0.44l-2.68,0.27l-3.95,-2.1l-1.36,0.86l-0.65,1.62l-2.0,-0.18l-0.52,0.45l-0.49,-0.17l-1.05,0.49l-1.34,0.14l-3.25,6.44l-0.19,1.78l-0.77,0.67l-0.39,1.81l0.35,0.6l-2.01,1.01l-0.73,1.31l-1.12,0.66l-1.13,2.02l-2.69,-0.47l-1.04,-0.88l-0.55,0.3l-1.71,-1.22l-1.31,-1.64l-2.92,-0.86l-1.16,-0.96l-0.02,-0.67l-0.42,-0.41l-2.77,-0.52l-2.29,-1.05l-1.9,-1.77l-0.91,-1.54l-0.97,-0.92l-1.54,-0.29l-1.78,-1.27l-0.22,-0.56l-1.32,-1.19l-0.65,-2.7l-0.87,-1.02l-0.24,-1.11l-0.76,-1.28l-0.26,-2.35l0.53,-3.06l-3.01,-5.09l-0.05,-1.94l-1.26,-2.52l-0.99,-0.44l-0.43,-1.24l-1.44,-0.81l-2.16,-2.18l-1.03,-0.1l-2.02,-1.26l-3.2,-3.36l-0.59,-1.56l-3.14,-2.56l-1.59,-2.45l-1.2,-0.95l-0.61,-1.05l-4.44,-2.62l-1.19,-2.19l-1.21,-3.23l-1.38,-1.09l-1.13,-0.08l-1.76,-1.68l-0.78,-3.04ZM503.52,468.36l-0.35,0.19l0.19,-0.17l0.16,-0.02ZM500.13,471.02l-0.12,0.17l-0.05,0.03l0.18,-0.2ZM499.19,472.55l0.16,0.05l-0.21,0.2l0.04,-0.13l0.01,-0.12ZM498.43,473.45l-0.15,0.14l0.04,-0.1l0.11,-0.04ZM468.75,489.63l0.04,0.02l-0.03,0.02l-0.0,-0.04ZM455.12,548.8l0.78,-0.53l0.25,-0.72l0.12,1.15l-1.14,0.1ZM462.07,500.4l-0.15,-0.61l1.24,-0.37l-0.3,0.35l-0.8,0.64ZM464.7,498.41l0.11,-0.25l1.31,-0.91l-0.95,0.88l-0.47,0.27ZM466.99,496.67l0.29,-0.26l0.49,-0.04l-0.27,0.14l-0.52,0.16ZM459.12,503.58l0.71,-1.67l0.64,-0.73l-0.01,0.78l-1.34,1.62ZM452.17,516.05l0.07,-0.29l0.1,-0.22l-0.17,0.5ZM452.62,514.77l0.17,-0.39l0.04,-0.06l-0.21,0.45ZM453.57,512.77l-0.01,-0.06l0.06,-0.05l-0.05,0.11Z",
         "name": "Texas"
      },
      "US-NH": {
         "path": "M830.68,105.86l0.18,-1.32l-1.48,-5.32l0.52,-1.45l-0.31,-2.2l0.98,-1.86l-0.16,-2.28l0.61,-2.28l-0.45,-0.61l0.27,-2.29l-0.98,-3.77l0.08,-0.7l0.3,-0.46l1.83,-0.83l0.68,-1.39l1.42,-1.64l0.72,-1.8l-0.26,-1.12l0.51,-0.63l-2.38,-3.45l0.83,-3.26l-0.12,-0.78l-0.82,-1.28l0.26,-0.6l-0.24,-0.7l0.44,-3.2l-0.37,-0.82l0.89,-1.5l2.44,0.3l0.64,-0.89l13.44,34.54l0.88,3.61l2.62,2.16l0.88,0.32l0.38,1.58l1.73,1.27l0.01,0.34l0.78,0.22l-0.05,0.57l-0.43,3.08l-1.57,0.26l-1.31,1.21l-0.5,0.94l-0.96,0.38l-0.49,1.67l-1.08,1.44l-17.58,5.0l-1.71,-1.39l-0.42,-0.87l-0.12,-1.98l0.53,-0.59l0.03,-0.52l-1.08,-5.12Z",
         "name": "New Hampshire"
      },
      "US-NY": {
         "path": "M822.66,166.36l0.68,-2.03l0.63,-0.03l0.54,-0.75l0.77,0.13l0.53,-0.42l-0.04,-0.3l0.57,-0.04l0.27,-0.66l0.66,-0.03l0.19,-0.55l-0.43,-0.81l0.22,-0.53l0.61,-0.38l1.34,0.19l0.53,-0.6l1.46,-0.2l0.21,-0.8l1.86,-0.01l1.08,-0.91l0.11,-0.79l0.62,0.24l0.43,-0.61l4.82,-1.35l2.25,-1.32l1.97,-2.91l-0.19,1.14l-0.97,0.86l-1.21,2.3l0.55,0.46l1.59,-0.37l0.28,0.61l-0.42,0.49l-1.37,0.88l-0.51,-0.06l-2.25,0.95l-0.07,0.92l-0.87,0.01l-2.72,1.74l-1.01,0.16l-0.17,0.79l-1.24,0.11l-2.23,1.92l-4.43,2.22l-0.2,0.71l-0.28,0.08l-0.46,-0.81l-1.41,-0.04l-0.73,0.42l-0.41,0.81l0.22,0.3l-0.91,0.7l-0.76,-0.81l0.32,-1.04ZM829.28,158.96l-0.01,-0.01l0.02,-0.06l-0.01,0.07ZM846.33,148.77l0.14,-0.09l0.08,-0.01l-0.11,0.18l-0.12,-0.07ZM845.51,154.6l0.09,-0.87l0.73,-1.16l1.63,-1.53l1.01,0.29l0.04,-0.81l0.79,0.65l-3.33,3.22l-0.67,0.46l-0.31,-0.24ZM723.17,157.08l3.74,-3.86l1.26,-2.18l1.74,-1.87l1.16,-0.79l1.26,-3.33l1.55,-1.31l0.53,-0.83l-0.22,-1.82l-1.63,-2.37l0.42,-1.12l-0.18,-0.78l-0.84,-0.52l-2.11,0.02l0.04,-0.98l-0.59,-2.19l4.97,-2.98l4.48,-1.84l2.38,-0.22l1.83,-0.76l5.64,-0.31l3.14,1.2l3.15,-1.71l5.49,-1.13l0.58,0.44l0.68,-0.2l0.11,-0.98l1.45,-0.74l1.02,-0.94l0.74,-0.21l0.67,-2.04l1.86,-1.77l0.77,-1.27l1.12,0.02l1.12,-0.54l1.05,-1.63l-0.47,-0.69l0.35,-1.19l-0.26,-0.51l-0.64,0.03l-0.18,-1.16l-0.95,-1.56l-1.01,-0.6l0.12,-0.18l0.6,0.38l0.53,-0.27l0.73,-1.44l-0.02,-0.9l0.8,-0.65l-0.02,-0.97l-0.93,-0.18l-0.59,0.7l-0.27,0.12l0.54,-1.29l-0.81,-0.61l-1.26,0.06l-0.86,0.78l-0.99,-0.68l2.02,-2.52l1.76,-1.49l1.64,-2.65l0.7,-0.57l0.11,-0.59l0.77,-0.96l0.07,-0.56l-0.51,-0.94l0.76,-1.9l4.74,-7.65l4.72,-4.55l2.83,-0.55l19.6,-5.91l0.42,0.87l-0.06,2.0l1.03,1.2l0.48,3.78l2.33,3.2l-0.07,1.88l0.88,2.39l-0.58,1.07l0.04,3.4l0.72,0.88l1.35,2.72l0.2,1.08l0.62,0.83l0.16,3.9l0.56,0.83l0.54,0.07l0.53,-0.61l0.05,-0.86l0.33,-0.08l1.06,1.09l4.12,15.39l0.75,1.17l0.37,15.15l0.61,0.61l3.72,15.98l1.27,1.3l-2.79,3.18l0.03,0.55l1.53,1.27l0.19,0.58l-0.77,0.88l-0.63,1.79l-0.41,0.39l0.15,0.67l-1.24,0.65l0.0,-3.96l-0.58,-2.25l-0.76,-1.59l-1.47,-1.06l-0.18,-1.11l-0.7,-0.09l-0.41,1.33l0.69,1.25l1.06,0.8l0.99,2.79l-13.8,-3.78l-1.29,-1.43l-2.39,0.27l-0.63,-0.41l-1.06,-0.13l-1.76,-1.86l-0.76,-2.29l0.11,-0.72l-0.36,-0.62l-0.55,-0.2l0.08,-0.45l-0.36,-0.42l-1.65,-0.64l-1.08,0.33l-0.76,-1.38l-1.71,-0.71l-34.57,9.14l-34.42,8.22l-1.15,-5.07ZM820.13,168.63l1.08,-0.49l0.15,0.61l-1.16,1.52l-0.07,-1.64ZM731.02,138.24l0.02,-0.68l0.78,-0.08l-0.37,1.08l-0.44,-0.32Z",
         "name": "New York"
      },
      "US-HI": {
         "path": "M295.6,602.68l-0.09,-1.67l-0.5,-1.2l-1.36,-1.92l-0.81,-0.52l0.28,-0.81l-0.26,-0.81l1.55,-2.32l3.47,-3.7l1.36,-3.84l-0.34,-0.67l1.34,-3.38l0.03,-3.33l0.97,-1.19l2.6,-0.55l1.38,0.28l3.13,-1.26l1.83,-0.31l0.55,-0.72l-0.02,-3.0l0.55,-1.89l2.08,-1.33l1.79,2.42l-0.22,1.06l1.84,4.02l1.0,0.39l5.15,8.57l0.71,4.42l-1.86,3.54l0.21,0.61l1.56,1.09l-0.87,2.31l0.29,1.69l1.58,3.4l-1.65,1.04l-2.5,-0.21l-3.62,0.59l-4.92,-1.47l-2.28,-1.5l-7.29,-0.13l-1.75,0.29l-1.79,1.35l-1.85,0.68l-1.27,0.03ZM308.01,538.5l1.75,0.1l0.45,2.33l-0.48,2.26l0.38,0.88l2.49,0.98l1.51,0.11l1.61,1.55l0.21,1.73l0.97,1.09l-0.2,1.18l1.85,2.81l-0.19,0.78l-0.73,0.55l-2.03,0.42l-2.01,-0.21l-1.54,-1.33l-2.4,-0.27l-2.86,-1.65l0.09,-1.41l1.37,-2.06l0.56,-2.29l-0.39,-0.61l-1.46,-0.79l-1.08,-1.95l0.04,-2.96l2.08,-1.24ZM298.76,524.37l0.78,0.38l0.35,1.16l2.76,2.23l0.91,1.23l1.01,0.08l0.77,1.87l1.64,1.17l0.79,0.07l1.14,1.28l-1.54,0.5l-2.97,-0.75l-3.3,-4.38l-3.34,-2.24l-1.49,-0.49l-0.0,-0.85l1.78,-0.49l0.7,-0.77ZM302.19,550.7l-2.27,-1.11l-0.3,-0.63l3.27,0.35l-0.7,1.39ZM299.02,540.44l-1.0,-0.33l-0.74,-1.02l1.13,-2.28l-0.43,-2.01l2.82,1.55l0.54,2.32l0.07,1.24l-2.41,0.51ZM282.01,508.46l0.73,-2.05l-0.37,-0.99l-0.01,-3.16l0.89,-1.06l-0.09,-1.35l2.95,2.09l3.17,-0.67l1.72,0.17l0.36,1.13l-0.49,2.4l0.23,1.66l-0.79,0.68l-0.29,1.71l0.32,1.7l0.94,0.57l0.23,1.2l-0.63,1.26l0.55,1.49l-1.41,-0.01l-0.19,-0.54l-2.19,-0.97l-0.68,-3.14l-1.37,-0.44l0.91,-0.17l0.35,-0.47l-0.05,-0.71l-0.64,-0.76l-0.41,-0.26l-0.38,0.43l-1.05,-0.53l0.12,2.05l-2.44,-1.27ZM260.53,470.55l-0.14,-2.24l-0.95,-0.77l-0.68,-1.38l0.16,-1.33l0.12,-0.42l2.67,-0.89l5.01,0.62l0.67,1.16l2.67,1.22l0.69,1.39l-0.28,2.14l-2.6,1.45l-0.88,1.44l-0.85,0.35l-3.09,0.08l-0.91,-1.7l-1.61,-1.12ZM245.8,462.89l-0.21,-0.88l1.2,-0.84l4.77,-0.76l0.54,0.41l-1.11,0.42l-0.79,1.06l-1.81,-0.57l-1.49,0.36l-1.09,0.8Z",
         "name": "Hawaii"
      },
      "US-VT": {
         "path": "M805.92,73.67l25.93,-8.31l0.92,1.83l-0.71,2.38l-0.01,1.54l2.25,2.7l-0.5,0.59l0.28,1.12l-0.65,1.6l-1.33,1.51l-0.63,1.32l-1.72,0.73l-0.61,0.93l-0.09,0.98l0.97,3.7l-0.26,2.43l0.41,0.53l-0.58,2.1l0.18,2.17l-0.98,1.87l0.29,2.34l-0.52,1.54l1.49,5.38l-0.2,1.22l1.1,5.24l-0.57,0.85l0.14,2.29l0.61,1.24l1.51,1.06l-11.42,3.05l-0.57,-0.83l-4.18,-15.56l-1.73,-1.55l-0.9,0.26l-0.29,1.19l-0.12,-0.25l-0.15,-3.88l-0.69,-0.99l-0.15,-0.97l-1.4,-2.82l-0.63,-0.67l-0.02,-3.13l0.58,-1.15l-0.89,-2.54l0.06,-1.92l-0.4,-0.91l-1.57,-1.6l-0.39,-0.8l-0.45,-3.69l-1.04,-1.25l0.09,-1.87l-0.44,-1.0Z",
         "name": "Vermont"
      },
      "US-NM": {
         "path": "M230.53,422.69l12.24,-122.4l25.76,2.35l26.19,1.96l26.22,1.52l25.84,1.07l-0.32,10.07l-0.75,0.39l-3.71,97.67l-32.57,-1.41l-33.72,-2.12l-0.44,0.75l0.53,2.31l0.44,1.25l0.99,0.76l-30.72,-2.59l-0.44,0.36l-0.85,9.43l-14.71,-1.4Z",
         "name": "New Mexico"
      },
      "US-NC": {
         "path": "M829.09,287.59l0.01,-0.01l-0.0,0.0l-0.01,0.0ZM821.62,270.85l0.21,0.22l-0.05,0.01l-0.16,-0.24ZM823.91,275.04l0.2,0.15l-0.02,0.18l-0.06,-0.08l-0.12,-0.24ZM678.55,321.5l0.92,0.16l1.52,-0.4l0.42,-0.39l0.52,-0.97l0.11,-2.67l1.34,-1.19l0.47,-1.04l2.25,-1.47l2.13,-0.54l0.76,0.17l1.32,-0.53l2.36,-2.52l0.78,-0.25l1.84,-2.28l1.49,-1.0l1.55,-0.2l1.14,-2.63l-0.29,-1.2l1.66,0.04l0.5,-1.63l0.93,-0.77l1.08,-0.77l0.52,1.49l1.07,0.32l1.34,-1.17l1.34,-2.62l2.49,-1.6l0.79,0.07l0.83,0.78l1.05,-0.21l0.84,-1.07l1.46,-4.14l1.08,-1.1l1.48,0.07l0.43,-0.31l-0.7,-1.24l0.39,-1.97l-0.43,-0.89l0.38,-1.24l7.44,-0.94l19.59,-3.57l37.28,-8.83l31.16,-8.25l0.41,1.18l3.57,3.14l1.01,1.48l-1.21,-0.97l-0.17,-0.62l-0.93,-0.38l-0.52,0.06l-0.23,0.65l0.66,0.52l0.6,1.52l-0.54,0.02l-0.92,-0.73l-2.32,-0.75l-0.41,-0.47l-0.55,0.14l-0.31,0.69l0.15,0.64l1.38,0.42l1.69,1.33l-1.1,0.66l-2.49,-1.14l-0.35,0.51l0.15,0.42l1.6,1.13l-1.85,-0.3l-2.24,-0.82l-0.46,0.15l0.02,0.48l0.61,0.68l1.7,0.78l-0.96,0.58l0.0,0.6l-0.43,0.53l-1.48,0.76l-0.9,-0.75l-0.6,0.23l-0.1,0.35l-0.2,-0.13l-1.33,-2.26l0.19,-2.6l-0.43,-0.47l-0.9,-0.2l-0.35,0.65l0.62,0.68l-0.43,0.98l-0.01,1.03l0.5,1.7l1.61,2.14l-0.3,1.26l0.49,0.29l2.97,-0.63l2.09,-1.51l0.27,0.01l0.38,0.78l0.76,-0.34l1.57,0.03l0.15,-0.72l-0.56,-0.3l1.28,-0.77l2.04,-0.49l-0.08,1.17l0.64,0.28l-0.59,0.87l0.9,1.16l-0.84,0.12l-0.18,0.67l1.39,0.43l0.26,0.92l-1.21,0.07l-0.18,0.66l0.67,0.57l1.25,-0.18l0.52,0.25l0.4,-0.38l0.16,-1.93l-0.77,-3.27l0.41,-0.49l0.57,0.42l0.93,0.04l0.28,-0.57l-0.29,-0.43l0.46,-0.58l1.74,1.8l0.01,1.39l0.62,0.87l-0.53,0.19l-0.24,0.47l0.91,1.11l-0.08,0.36l-0.41,0.55l-0.78,0.09l-0.91,-0.83l-0.31,0.34l0.14,1.24l-1.07,1.61l0.2,0.56l-0.32,0.22l-0.15,0.98l-0.73,0.55l0.1,0.9l-0.89,0.97l-1.06,0.23l-0.59,-0.36l-0.52,0.52l-0.95,-0.79l-0.86,0.12l-0.4,-0.81l-0.59,-0.2l-0.51,0.38l0.09,0.93l-0.53,0.23l-1.42,-1.21l1.3,-0.41l0.23,-0.87l-0.57,-0.42l-2.03,0.34l-1.13,1.02l0.3,0.67l0.44,0.15l0.1,0.81l0.35,0.24l-0.03,0.12l-0.57,-0.33l-1.69,0.85l-1.13,-0.41l-1.46,0.09l-3.33,-0.64l0.44,1.07l0.98,0.43l0.36,0.63l0.63,0.1l0.88,-0.33l1.69,0.6l2.36,0.35l3.52,0.06l0.47,0.41l-0.05,0.51l-1.0,0.07l-0.24,0.72l-1.61,1.45l0.32,0.58l1.86,-0.03l-2.54,3.5l-1.68,0.07l-1.61,-0.94l-0.91,-0.18l-1.22,-0.99l-1.12,0.09l0.08,0.47l1.05,1.11l2.35,2.03l2.69,0.22l1.31,0.46l1.7,-2.16l0.52,0.45l1.18,0.31l0.39,-0.58l-0.55,-0.87l0.87,0.14l0.2,0.56l0.66,0.23l1.62,-1.21l-0.17,0.59l0.29,0.57l-0.29,0.38l-0.43,-0.2l-0.4,0.37l0.04,0.89l-0.96,1.71l0.02,0.78l-0.72,-0.06l-0.07,-0.73l-1.13,-0.58l-0.41,0.48l0.29,1.46l-0.35,-0.91l-0.84,-0.35l-1.22,1.08l-0.21,0.52l0.25,0.26l-2.03,0.35l-2.75,1.86l-0.68,-1.01l-0.75,-0.28l-0.36,0.49l0.44,1.24l-0.57,-0.01l-0.09,0.82l-0.93,1.72l-0.92,0.85l-0.59,-0.25l0.48,-0.69l-0.03,-0.77l-1.07,-0.9l-0.09,-0.52l-1.69,-0.38l-0.15,0.47l0.44,1.14l0.2,0.32l0.59,0.07l0.3,0.59l-0.88,0.38l-0.08,0.71l0.66,0.62l0.77,0.16l-0.0,0.36l-2.12,1.68l-1.9,2.65l-1.98,4.29l-0.33,2.11l0.13,1.34l-0.16,-1.04l-1.02,-1.56l-0.55,-0.16l-0.29,0.48l1.21,3.9l-0.62,2.26l-3.92,0.24l-1.43,0.66l-0.36,-0.51l-0.58,-0.17l-0.53,1.07l-1.9,1.16l-0.61,-0.01l-23.45,-14.89l-1.05,-0.01l-18.73,3.7l-0.67,-2.73l-3.28,-2.77l-0.46,0.08l-1.23,1.32l-0.02,-1.27l-0.82,-0.52l-22.89,3.59l-0.64,-0.26l-0.62,0.46l-0.25,0.65l-3.99,1.95l-0.89,1.23l-1.02,0.09l-4.79,2.68l-21.02,4.11l-0.36,-4.48l0.71,-0.95ZM819.02,269.97l0.19,0.35l0.25,0.37l-0.46,-0.4l0.02,-0.32ZM809.66,288.69l0.21,0.33l-0.17,-0.08l-0.04,-0.24ZM817.54,297.34l0.15,-0.36l0.16,0.07l-0.13,0.28l-0.18,0.02ZM814.96,297.34l-0.06,-0.28l-0.04,-0.11l0.31,0.26l-0.21,0.13ZM814.94,262.69l0.37,-0.24l0.15,0.4l-0.42,0.08l-0.1,-0.23ZM794.27,327.63l0.04,-0.07l0.22,0.03l-0.0,0.09l-0.26,-0.04Z",
         "name": "North Carolina"
      },
      "US-ND": {
         "path": "M439.1,45.59l2.07,7.05l-0.73,2.58l0.57,2.4l-0.27,1.19l0.48,2.03l0.02,3.32l1.42,4.01l0.45,0.55l-0.08,0.99l0.39,1.54l0.62,0.75l1.49,3.79l-0.05,3.94l0.42,0.71l0.51,8.43l0.51,1.54l0.51,0.25l-0.47,2.66l0.36,1.64l-0.14,1.76l0.69,1.11l0.2,2.17l0.49,1.14l1.81,2.57l0.16,2.21l0.51,1.08l0.17,1.4l-0.24,1.36l0.29,1.75l-27.89,0.76l-28.38,0.2l-28.37,-0.38l-28.48,-0.97l2.91,-66.22l23.01,0.82l25.49,0.43l25.49,-0.06l24.04,-0.51Z",
         "name": "North Dakota"
      },
      "US-NE": {
         "path": "M423.3,177.34l3.93,2.68l3.94,1.88l1.33,-0.22l0.51,-0.47l0.36,-1.07l0.48,-0.2l2.5,0.33l1.32,-0.47l1.59,0.24l3.45,-0.65l2.38,1.96l1.41,0.14l1.55,0.76l1.45,0.08l0.89,1.09l1.48,0.17l-0.06,0.97l1.69,2.06l3.32,0.59l0.19,0.67l-0.21,1.85l1.14,1.92l0.01,2.27l1.16,1.06l0.34,1.69l1.74,1.44l0.07,1.85l1.51,2.07l-0.49,2.3l0.44,3.05l0.52,0.54l0.93,-0.2l-0.03,1.23l1.21,0.49l-0.4,2.32l0.21,0.45l1.12,0.39l-0.59,0.75l-0.09,1.0l0.13,0.59l0.82,0.49l0.16,1.42l-0.26,0.91l0.26,1.26l0.55,0.6l0.3,1.89l-0.22,1.31l0.23,0.71l-0.57,0.9l0.03,0.78l0.45,0.87l1.23,0.62l0.26,2.47l1.1,0.5l0.03,0.78l1.19,2.7l-0.23,0.95l1.16,0.21l0.8,0.98l1.1,0.23l-0.15,0.95l1.31,1.64l-0.21,1.1l0.49,0.89l-26.2,1.1l-27.91,0.67l-27.92,0.15l-27.97,-0.37l0.47,-21.33l-0.39,-0.41l-32.44,-1.09l1.91,-42.71l43.42,1.28l44.74,-0.05Z",
         "name": "Nebraska"
      },
      "US-LA": {
         "path": "M510.29,413.05l-1.38,-21.63l25.76,-1.93l25.96,-2.35l0.35,0.82l1.49,0.64l-0.92,1.34l-0.25,2.12l0.5,0.72l1.18,0.3l-1.22,0.47l-0.45,0.78l0.46,1.35l1.05,0.83l0.08,2.13l0.47,0.54l1.52,0.73l0.45,1.04l1.43,0.42l-0.87,1.22l-0.85,2.34l-0.76,0.05l-0.52,0.51l-0.02,0.73l0.63,0.72l-0.21,1.16l-1.35,0.96l-1.08,1.89l-1.38,0.68l-0.68,0.83l-0.79,2.41l-0.24,3.51l-1.55,1.75l0.13,1.2l0.63,0.95l-0.35,2.37l-1.62,0.3l-0.59,0.57l0.29,0.97l0.65,0.59l-0.25,1.41l0.99,1.51l-1.18,1.19l-0.08,0.45l0.4,0.23l6.22,-0.58l29.41,-3.07l-0.67,3.48l-0.52,1.02l-0.19,2.25l0.7,0.98l-0.09,0.66l0.61,1.0l1.32,0.7l1.23,1.42l0.15,0.88l0.9,1.38l0.14,1.05l1.13,1.84l-1.86,0.4l-0.39,-0.08l-0.02,-0.56l-0.54,-0.57l-1.29,0.28l-1.19,-0.59l-1.52,0.18l-0.62,-0.98l-1.25,-0.86l-2.86,-0.46l-1.25,0.64l-1.39,2.31l-1.3,1.43l-0.41,0.92l0.07,1.2l0.56,0.89l0.83,0.57l4.28,0.81l3.37,-1.02l1.32,-1.2l0.68,-1.2l0.35,0.59l1.09,0.42l0.59,-0.41l0.81,0.02l0.51,-0.47l-0.76,1.23l-1.13,-0.11l-0.57,0.32l-0.38,0.62l0.0,0.83l0.78,1.22l1.49,-0.03l0.66,0.9l1.11,0.48l0.94,-0.22l0.51,-0.45l0.46,-1.11l-0.02,-1.37l0.93,-0.58l0.42,-1.0l0.24,0.05l0.11,1.17l-0.24,0.25l0.19,0.57l0.43,0.15l-0.07,0.75l1.36,1.08l0.35,-0.17l-0.48,0.6l0.19,0.63l-0.36,0.14l-0.53,-0.57l-0.92,-0.18l-1.0,1.91l-0.85,0.15l-0.46,0.53l0.17,1.2l-1.03,-0.49l-1.01,0.07l0.04,0.46l1.16,1.07l-1.18,-0.14l-0.92,0.61l0.69,0.42l1.28,2.05l1.85,0.44l0.92,0.53l-0.08,1.21l0.34,0.41l2.08,-0.33l0.78,0.17l0.18,0.53l0.74,0.32l1.36,-0.35l0.54,0.78l1.08,-0.47l1.15,0.74l0.14,0.3l-0.41,0.63l1.55,0.86l-0.39,0.66l0.39,0.58l-0.18,0.63l-0.95,1.52l-1.33,-1.57l-0.68,0.34l0.1,0.67l-0.39,0.13l0.4,-1.91l-1.34,-0.76l-0.5,0.5l0.2,1.19l-0.55,0.46l-0.27,-1.03l-0.58,-0.25l-0.91,-1.28l0.03,-0.77l-0.97,-0.13l-0.47,0.51l-1.42,-0.16l-0.42,-0.61l0.14,-0.64l-0.39,-0.46l-0.45,-0.01l-0.81,0.74l-1.2,0.03l0.26,-0.57l-0.13,-0.67l-0.47,-0.88l-0.92,0.05l0.09,-0.97l-0.37,-0.36l-0.92,-0.02l-0.22,0.59l-0.86,-0.38l-0.48,0.27l-2.64,-1.26l-1.25,-0.02l-0.68,-0.64l-0.61,0.19l-0.3,0.56l-0.05,1.26l1.74,0.94l1.69,0.34l-0.15,0.93l0.28,0.4l-0.34,0.35l0.23,0.69l-0.76,0.96l-0.02,0.67l0.82,0.97l-0.96,1.45l-1.34,0.95l-0.78,-1.16l0.21,-1.51l-0.36,-0.93l-0.49,-0.17l-0.4,0.36l-1.17,-1.08l-0.6,0.43l-0.77,-1.06l-0.63,-0.2l-0.64,1.34l-0.86,0.27l-0.89,-0.53l-0.86,0.54l-0.1,0.62l0.49,0.41l-0.68,0.57l-0.13,1.46l-0.46,0.13l-0.39,0.84l-0.93,0.09l-0.12,-0.69l-1.61,-0.4l-0.77,0.99l-1.25,-0.82l-0.69,-0.11l-0.31,-0.54l-1.0,0.01l-0.35,0.61l-1.18,-0.51l0.43,-0.41l-0.0,-1.47l-0.38,-0.58l-1.92,-1.19l-0.08,-0.54l-0.84,-0.72l-0.1,-0.91l0.73,-1.16l-0.35,-1.14l-0.88,-0.19l-0.34,0.57l0.16,0.43l-0.59,0.81l0.04,0.92l-1.82,-0.4l0.07,-0.39l-0.47,-0.54l-1.98,0.77l-0.71,-2.23l-0.47,-0.12l-0.87,0.35l-0.18,-2.14l-1.31,-0.35l-1.9,0.3l-1.09,0.66l-0.22,-0.71l0.85,-0.27l-0.06,-0.8l-0.61,-0.58l-1.04,-0.1l-0.86,0.43l-0.95,-0.14l-0.4,0.81l-2.01,1.12l-0.64,-0.31l-1.29,0.72l0.54,1.37l0.81,0.3l0.99,1.52l-1.41,0.2l-1.83,1.05l-3.71,-0.39l-1.24,0.21l-3.11,-0.44l-2.0,-0.68l-1.82,-1.07l-3.73,-1.09l-3.21,-0.48l-2.55,0.6l-5.66,0.47l-1.0,0.27l-1.83,1.27l-0.6,-0.63l-0.27,-1.09l1.6,-0.48l0.7,-1.78l-0.03,-1.56l-0.39,-0.56l1.12,-1.55l0.23,-1.6l-0.5,-1.84l0.07,-1.46l-0.67,-0.7l-0.22,-1.05l0.83,-2.22l-0.64,-1.95l0.77,-0.85l0.29,-1.5l0.79,-0.94l0.78,-2.84l-0.19,-1.42l0.58,-0.98l-0.76,-1.33l0.84,-0.39l0.19,-0.44l-0.9,-1.35l0.02,-2.13l-1.08,-0.23l-0.58,-1.57l-0.92,-0.84l0.28,-1.27l-0.82,-0.75l-0.33,-0.95l-0.65,-0.34l0.22,-0.98l-1.17,-0.58l-0.81,-0.93l0.15,-2.45l-0.69,-1.93l-1.34,-1.97l-2.65,-2.19ZM550.67,462.74l0.02,-0.01l0.0,0.0l-0.02,0.0ZM609.66,467.22l-0.03,-0.03l-0.09,-0.04l0.15,-0.02l-0.03,0.09ZM609.67,465.6l-0.02,-0.02l0.04,-0.01l-0.02,0.03ZM568.93,468.95l-2.03,-0.42l-0.68,-0.51l0.74,-0.44l0.35,-0.77l0.4,0.49l0.84,0.2l-0.14,0.62l0.51,0.81ZM552.13,462.99l1.74,-1.07l3.38,1.07l-0.7,0.57l-0.17,0.82l-0.69,0.18l-3.56,-1.57Z",
         "name": "Louisiana"
      },
      "US-SD": {
         "path": "M337.03,132.38l0.3,-0.53l0.79,-19.92l28.49,0.97l28.39,0.38l28.39,-0.2l27.77,-0.76l-0.17,1.71l-0.72,1.71l-2.9,2.47l-0.41,1.28l1.59,2.13l1.06,2.06l0.55,0.36l1.74,0.24l1.02,0.84l0.58,1.02l1.51,38.65l-1.84,0.09l-0.42,0.56l0.24,1.42l0.88,1.12l0.01,1.44l-0.65,0.36l0.17,1.47l0.48,0.43l1.09,0.04l0.34,1.66l-0.16,0.9l-0.62,0.82l0.02,1.72l-0.68,2.42l-0.49,0.44l-0.67,1.87l0.5,1.1l1.33,1.06l-0.16,0.61l0.64,0.65l0.36,1.13l-1.66,-0.28l-0.34,-0.92l-0.85,-0.72l0.19,-0.6l-0.29,-0.59l-1.58,-0.22l-1.03,-1.16l-1.57,-0.11l-1.51,-0.74l-1.34,-0.12l-2.39,-1.97l-3.79,0.6l-1.65,-0.24l-1.19,0.46l-2.62,-0.32l-0.98,0.48l-0.76,1.43l-0.72,0.05l-3.67,-1.8l-4.13,-2.77l-44.9,0.05l-43.4,-1.27l1.86,-42.93Z",
         "name": "South Dakota"
      },
      "US-DC": {
         "path": "M782.83,216.82l0.44,-0.76l2.05,1.2l-0.65,1.13l-0.56,-1.03l-1.27,-0.55Z",
         "name": "District of Columbia"
      },
      "US-DE": {
         "path": "M799.98,195.01l0.4,-1.49l0.91,-1.11l1.73,-0.73l1.11,0.04l-0.31,0.54l-0.07,1.36l-1.12,1.92l0.11,1.08l1.11,1.06l-0.06,1.5l2.31,2.41l1.25,0.57l0.94,1.47l1.01,3.29l1.74,1.52l0.58,1.29l3.08,1.91l1.44,-0.12l0.46,1.21l-1.05,0.57l0.17,1.31l0.35,0.18l-0.81,0.57l-0.07,1.2l0.67,0.2l0.85,-0.73l0.71,0.33l0.3,-0.21l0.76,1.5l-10.19,2.94l-8.32,-25.59Z",
         "name": "Delaware"
      },
      "US-FL": {
         "path": "M632.37,423.12l47.45,-7.21l1.55,1.89l0.89,2.71l1.48,0.99l49.06,-5.55l1.04,1.38l0.04,1.09l0.56,1.05l0.87,0.49l1.83,-0.32l0.85,-0.76l-0.18,-4.58l-1.0,-1.48l-0.24,-1.77l0.27,-0.74l0.62,-0.31l0.11,-0.7l5.64,0.91l4.06,-0.2l0.16,1.25l-0.75,-0.12l-0.32,0.44l0.27,1.54l2.14,1.8l0.23,1.01l0.43,0.38l0.31,1.93l1.91,3.28l1.75,4.88l0.74,0.84l0.53,1.5l1.68,2.46l0.66,1.58l2.84,3.71l1.98,3.19l2.33,2.77l0.16,0.6l0.64,0.36l6.96,7.57l-0.5,-0.03l-0.27,0.62l-1.37,-0.01l-0.35,-0.66l0.37,-1.4l-0.16,-0.56l-2.33,-0.91l-0.46,0.53l1.04,2.82l0.79,0.98l2.21,4.81l10.15,13.83l1.42,3.15l3.77,5.42l-1.41,-0.35l-0.42,0.74l0.81,0.66l0.85,0.24l0.56,-0.22l1.49,0.95l2.1,3.1l-0.5,0.37l-0.11,0.53l1.17,0.53l0.92,1.87l-0.07,1.08l0.61,0.97l0.65,2.7l-0.26,0.77l1.06,9.2l-0.3,1.1l0.47,0.69l0.55,3.19l-0.8,1.49l0.1,2.3l-0.84,0.77l-0.19,1.86l-0.47,0.87l0.24,1.51l-0.28,1.8l0.48,0.84l0.09,0.93l0.48,0.24l-1.15,1.89l-0.37,1.32l-0.95,0.25l-0.54,-0.23l-1.38,0.47l-0.34,1.1l-0.9,0.32l-0.16,0.6l-0.86,0.7l-1.45,0.15l-0.28,-0.33l-1.25,-0.09l-0.9,1.09l-3.19,1.18l-1.08,-0.61l-0.73,-1.08l0.04,-1.87l1.02,0.86l1.68,0.48l0.26,0.65l0.52,0.07l1.36,-0.75l0.19,-0.7l-0.27,-0.64l-1.61,-1.13l-2.43,-0.26l-0.92,-0.47l-0.89,-1.72l-0.92,-0.75l0.22,-1.01l-0.49,-0.28l-0.53,0.16l-1.43,-2.59l-0.44,-0.29l-0.65,0.08l-0.46,-0.63l0.28,-0.33l-0.06,-0.58l-0.72,-0.66l-1.23,-0.61l-1.08,-0.08l-0.77,-0.55l-0.58,0.19l-2.84,-0.59l-0.51,0.66l0.25,-0.95l-0.47,-0.42l-0.88,0.13l-0.27,-0.74l-0.9,-0.67l-0.63,-1.45l-0.56,-0.1l-0.77,-3.02l-0.79,-1.02l-0.18,-1.56l-0.45,-0.85l-0.72,-0.91l-0.49,-0.15l-0.1,0.95l-1.33,-0.26l1.07,-1.35l0.29,-0.76l-0.13,-0.64l0.86,-1.51l0.65,-0.35l0.27,-0.85l-0.62,-0.38l-1.42,0.96l-0.88,1.32l-0.4,2.23l-1.38,0.37l-0.23,-1.36l-0.81,-1.35l-0.32,-4.13l-0.88,-0.61l1.64,-1.37l0.21,-0.99l-0.59,-0.41l-0.72,0.68l-1.57,0.56l-0.77,0.74l-0.76,-0.67l-0.4,0.27l-1.3,-0.9l-0.37,0.75l1.15,1.1l0.53,0.1l1.3,2.05l-1.05,0.25l-1.44,-0.38l-0.87,-1.63l-1.14,-0.61l-1.99,-2.59l-1.07,-2.32l-1.3,-0.89l0.09,-0.89l-1.0,-1.82l-1.8,-0.98l0.08,-0.69l0.99,-0.41l-0.36,-0.5l0.44,-0.75l-0.4,-0.35l0.4,-1.23l2.45,-4.56l-1.08,-2.44l-0.69,-0.46l-0.92,0.43l-0.27,0.94l0.31,1.22l-0.25,0.04l-0.76,-2.47l-1.0,-0.27l-1.2,-0.88l-1.53,-0.31l0.32,1.97l-0.48,0.63l0.27,0.59l2.24,0.56l0.26,0.99l-0.35,2.51l-0.32,-0.59l-0.8,-0.21l-2.17,-1.54l-0.42,0.21l-0.3,-0.64l0.58,-2.14l0.04,-3.02l-0.69,-1.99l0.42,-0.52l0.47,-1.94l-0.25,-0.54l0.63,-3.08l-0.4,-5.32l-0.38,-1.38l-0.37,-0.34l0.36,-0.47l-0.49,-2.2l-2.13,-1.32l-0.05,-0.53l-0.56,-0.42l-0.11,-1.03l-0.93,-0.73l-0.56,-1.52l-0.64,-0.24l-1.45,0.33l-1.03,-0.19l-1.58,0.56l-1.17,-1.75l-1.52,-0.47l-0.19,-0.6l-1.37,-1.51l-0.88,-0.58l-0.62,0.08l-1.54,-1.16l-0.81,-0.21l-0.53,-2.76l-3.09,-1.12l-0.66,-0.59l-0.53,-1.23l-2.18,-1.92l-2.21,-1.07l-1.46,-0.11l-3.47,-1.66l-2.86,1.01l-1.01,-0.4l-1.05,0.43l-0.35,0.69l-1.34,0.69l-0.5,0.71l0.03,0.65l-0.75,-0.22l-0.59,0.6l0.68,0.94l1.51,0.06l0.42,0.21l-3.05,0.26l-1.58,1.53l-0.91,0.46l-1.29,1.58l-1.56,1.05l-0.33,0.14l0.2,-0.5l-0.26,-0.53l-0.67,-0.04l-0.96,0.76l-1.11,1.52l-2.21,0.25l-2.12,1.09l-0.79,0.04l-0.29,-2.04l-1.74,-2.23l-2.23,-0.99l-0.18,-0.41l-2.54,-1.49l2.83,1.31l1.21,-0.75l-0.01,-0.74l-1.33,-0.33l-0.36,0.57l-0.22,-1.03l-0.35,-0.1l0.12,-0.52l-0.49,-0.33l-1.4,0.62l-2.33,-0.74l0.65,-1.09l0.83,-0.11l1.03,-1.47l-0.92,-0.95l-0.46,0.13l-0.49,1.03l-0.45,-0.03l-0.81,0.57l-0.73,-0.9l-0.7,0.1l-0.17,0.38l-1.35,0.74l-0.14,0.68l0.3,0.46l-3.99,-1.33l-5.09,-0.68l0.12,-0.24l1.28,0.29l0.61,-0.53l2.12,0.37l0.22,-0.78l-0.95,-1.02l0.08,-0.7l-0.63,-0.28l-0.5,0.32l-0.29,-0.47l-1.91,0.2l-2.27,1.12l0.3,-0.64l-0.41,-0.58l-0.96,0.36l-0.59,-0.25l-0.22,0.44l0.2,0.71l-1.46,0.81l-0.39,0.64l-5.21,1.01l0.31,-0.53l-0.4,-0.52l-1.36,-0.27l-0.73,-0.53l0.69,-0.54l0.0,-0.78l-0.68,-0.12l-0.82,-0.66l-0.46,0.11l0.14,0.76l-0.41,1.78l-1.06,-1.39l-0.7,-0.45l-0.55,0.07l-0.3,0.72l0.83,1.77l-0.25,0.8l-1.39,1.0l-0.05,1.04l-0.6,0.23l-0.17,0.57l-1.5,0.57l0.28,-0.66l-0.22,-0.46l1.14,-1.04l0.07,-0.74l-0.4,-0.58l-1.2,-0.23l-0.42,-0.84l0.3,-1.71l-0.19,-1.61l-2.19,-1.1l-2.42,-2.45l0.31,-1.45l-0.16,-1.04ZM770.96,489.55l0.5,1.09l0.91,0.4l0.78,-0.16l1.45,1.7l0.92,0.58l1.88,0.69l1.63,0.06l0.55,-0.45l-0.09,-0.89l0.55,-0.66l-0.17,-1.24l0.75,-1.4l0.07,-1.84l-0.66,-1.65l-1.49,-2.04l-1.77,-1.33l-1.2,-0.12l-1.12,0.86l-1.81,3.23l-2.12,2.0l-0.12,0.77l0.57,0.41ZM646.6,433.48l-0.95,0.27l0.41,-0.45l0.54,0.18ZM667.51,434.9l0.99,-0.29l0.36,0.31l0.1,0.73l-1.45,-0.75ZM773.86,453.5l0.44,0.57l-0.43,0.77l-0.01,-1.35ZM793.21,525.19l0.02,-0.12l0.03,0.05l-0.05,0.07ZM793.79,522.73l-0.25,-0.25l0.54,-0.38l-0.29,0.63ZM772.1,452.11l0.22,0.77l-0.28,2.36l0.31,1.82l-1.43,-3.27l1.19,-1.69ZM682.35,444.75l0.22,-0.2l0.37,0.02l-0.11,0.43l-0.48,-0.25Z",
         "name": "Florida"
      },
      "US-WA": {
         "path": "M39.75,56.79l0.48,-1.33l0.18,0.46l0.65,0.31l1.05,-0.73l0.42,0.6l0.7,-0.02l0.18,-0.77l-0.9,-1.57l0.8,-0.74l-0.07,-1.37l0.49,-0.38l-0.09,-1.04l0.81,-0.26l0.04,0.51l0.47,0.42l0.96,-0.3l-0.08,-0.68l-1.33,-1.67l-0.91,0.14l-1.87,-0.58l0.2,-2.0l0.65,0.54l0.52,-0.07l0.3,-0.56l-0.16,-0.69l3.32,-0.49l0.27,-0.69l-1.68,-0.98l-0.86,-0.15l-0.35,-1.52l-0.7,-0.43l-0.81,-0.03l0.39,-4.77l-0.47,-1.3l0.11,-0.69l-0.4,-0.35l0.85,-5.8l-0.09,-2.49l-0.44,-0.63l-0.14,-1.38l-0.63,-1.35l-0.72,-0.58l-0.28,-2.49l0.39,-2.3l-0.14,-1.13l1.8,-3.33l-0.51,-1.26l4.52,3.99l1.18,0.4l0.91,0.77l0.78,1.33l1.84,1.11l3.22,0.94l0.82,0.78l1.42,0.12l1.72,1.05l2.32,0.76l1.47,-0.47l0.52,0.3l0.54,0.71l-0.05,1.1l0.54,0.75l0.31,0.12l0.49,-0.35l0.08,-0.77l0.44,0.04l0.61,1.42l-0.41,0.59l0.34,0.5l0.56,-0.03l0.73,-0.84l-0.35,-1.73l1.05,-0.23l-0.46,0.23l-0.22,0.69l1.21,4.49l-0.47,0.1l-1.69,1.73l0.24,-1.3l-0.22,-0.41l-1.32,0.3l-0.39,0.81l0.08,0.96l-1.4,1.71l-2.0,1.38l-1.08,1.42l-0.97,0.69l-1.12,1.67l-0.07,0.71l0.61,0.61l0.95,0.13l2.78,-0.46l1.23,-0.58l-0.02,-0.7l-0.64,-0.24l-2.95,0.77l-0.34,-0.31l3.28,-3.44l3.07,-0.87l0.91,-1.52l1.75,-1.54l0.52,0.57l0.54,-0.18l0.25,-1.83l-0.1,2.29l0.25,0.92l-0.98,-0.22l-0.65,0.77l-0.4,-0.74l-0.52,-0.2l-0.4,0.64l0.29,0.72l0.0,1.65l-0.19,-1.08l-0.67,-0.22l-0.47,0.69l-0.08,0.76l0.46,0.68l-0.64,0.59l-0.0,0.45l0.41,0.17l1.68,-0.56l0.23,1.11l-1.11,1.8l-0.1,1.06l-0.84,0.7l0.12,1.02l-0.84,-0.69l1.14,-1.45l-0.22,-0.97l-1.98,1.07l-0.39,0.64l-0.03,-2.13l-0.52,0.01l-1.05,1.6l-1.27,0.53l-1.16,1.87l-1.52,0.29l-0.47,0.43l-0.22,1.18l1.11,-0.03l-0.26,0.36l0.26,0.38l0.92,0.03l0.05,0.68l0.52,0.48l0.53,-0.27l0.37,-1.77l0.14,0.42l0.83,-0.14l1.09,1.5l1.32,-0.61l1.66,-1.47l1.0,-1.57l0.62,0.8l0.73,0.14l0.45,-0.23l-0.05,-0.87l1.56,-0.54l0.36,-0.94l-0.32,-1.28l0.24,-1.2l-0.16,-1.38l0.83,0.21l0.31,-0.92l-0.18,-0.76l-0.71,-0.65l0.91,-1.14l0.1,-1.77l1.26,-1.25l0.63,-1.38l1.62,-0.49l0.79,-1.16l-0.44,-0.67l-0.51,-0.02l-0.84,-1.32l0.19,-2.12l-0.25,-0.88l0.5,-0.81l0.07,-0.84l-1.13,-1.76l-0.62,-0.41l-0.16,-0.67l0.19,-0.51l0.59,0.24l0.53,-0.33l0.27,-1.83l0.8,-0.24l0.31,-1.01l-0.57,-2.36l0.45,-0.55l-0.02,-0.86l-0.95,-0.9l-0.95,0.3l-1.05,-2.71l0.96,-1.88l41.1,9.79l38.78,7.97l-10.24,55.02l-0.48,1.02l1.01,3.02l0.12,2.01l-1.02,1.3l0.71,1.89l-31.12,-6.19l-1.67,0.78l-7.23,-1.08l-1.69,0.9l-4.19,-0.16l-3.18,0.42l-1.65,0.73l-0.88,-0.27l-1.2,0.29l-1.5,-0.24l-2.42,-0.97l-0.91,0.45l-3.45,0.47l-2.1,-0.73l-1.65,0.28l-0.3,-1.37l-1.08,-0.89l-4.33,-1.51l-2.32,-0.14l-1.14,-0.52l-1.27,0.2l-1.9,0.84l-4.5,0.53l-1.1,-0.72l-1.15,-0.31l-1.6,-1.17l-1.84,-0.53l-0.62,-0.82l0.72,-6.83l-0.45,-0.95l-0.19,-1.91l-0.96,-1.36l-1.94,-1.7l-2.82,-0.14l-1.02,-1.32l-0.14,-1.05l-0.55,-0.64l-2.36,-0.34l-0.56,-0.31l-0.23,-0.79l-0.5,-0.18l-0.97,0.34l-0.83,-0.27l-1.1,0.39l-0.95,-1.49l-0.88,-0.24ZM63.27,41.42l0.15,0.75l-0.42,0.48l0.02,-0.91l0.26,-0.31ZM72.98,21.85l-0.63,0.89l-0.16,0.52l0.12,-1.02l0.67,-0.39ZM72.91,17.04l-0.1,-0.06l0.06,-0.05l0.05,0.11ZM72.14,16.87l-0.78,0.39l0.38,-0.7l-0.07,-0.62l0.23,-0.07l0.23,1.0ZM58.87,44.11l0.14,-0.06l-0.03,0.02l-0.12,0.04ZM69.46,20.67l1.77,-2.13l0.46,-0.02l0.5,1.75l-0.34,-0.56l-0.51,-0.12l-0.55,0.45l-0.35,-0.1l-0.36,0.74l-0.63,-0.01ZM69.54,21.84l0.46,0.01l0.6,0.51l0.08,0.36l-0.79,-0.21l-0.35,-0.68ZM70.49,24.67l-0.1,0.51l-0.0,0.0l-0.02,-0.24l0.12,-0.27ZM70.76,26.94l0.1,0.05l0.14,-0.05l-0.18,0.12l-0.06,-0.12ZM71.13,26.88l0.51,-0.96l1.09,1.49l0.01,0.89l-0.35,0.36l-0.33,-0.1l-0.25,-1.57l-0.68,-0.13ZM68.2,11.24l0.5,-0.34l0.16,1.55l-0.22,-0.05l-0.44,-1.16ZM69.91,10.93l0.82,0.83l-0.66,0.31l-0.16,-1.14ZM68.13,39.7l0.35,-1.09l0.22,-0.25l-0.05,1.08l-0.52,0.25ZM68.31,15.63l-0.41,-0.42l0.61,-0.75l-0.18,0.6l-0.02,0.57ZM68.47,15.97l0.4,0.2l-0.09,0.14l-0.28,-0.12l-0.03,-0.22ZM68.56,14.29l-0.01,-0.1l0.05,-0.13l-0.04,0.23ZM68.5,34.94l0.11,-1.05l0.35,-0.34l-0.25,1.58l-0.21,-0.18ZM66.18,14.44l-1.04,-0.84l0.22,-1.86l1.3,1.97l-0.36,0.18l-0.12,0.55ZM63.56,44.22l0.23,-0.25l0.02,0.01l-0.13,0.32l-0.12,-0.07ZM61.46,41.94l-0.1,-0.21l0.04,-0.08l0.0,0.12l0.06,0.16Z",
         "name": "Washington"
      },
      "US-KS": {
         "path": "M478.81,242.03l0.44,0.62l0.76,0.17l1.05,0.79l2.2,-1.07l-0.0,0.74l1.08,0.77l0.23,1.42l-0.95,-0.15l-0.59,0.31l-0.17,0.95l-1.15,1.36l-0.06,1.12l-0.79,0.5l0.04,0.63l1.57,2.07l2.01,1.46l0.2,1.12l0.42,0.85l0.75,0.55l0.33,1.09l1.9,0.89l1.54,0.25l2.74,46.06l-31.67,1.55l-32.1,0.92l-32.11,0.27l-32.18,-0.39l1.25,-64.43l27.98,0.37l27.94,-0.15l27.93,-0.67l27.75,-1.17l1.65,1.2Z",
         "name": "Kansas"
      },
      "US-WI": {
         "path": "M599.36,110.41l0.82,-0.15l-0.13,0.81l-0.56,0.02l-0.14,-0.67ZM594.93,119.05l0.47,-0.41l0.24,-2.36l0.95,-0.25l0.64,-0.7l0.21,-1.4l0.41,-0.64l0.63,-0.04l0.07,0.38l-0.76,0.07l-0.18,0.52l0.18,1.26l-0.38,0.17l-0.11,0.58l0.57,0.57l-0.24,0.65l-0.5,0.34l-0.68,1.91l0.07,1.23l-1.04,2.28l-0.41,0.15l-0.87,-0.96l-0.19,-0.71l0.3,-1.57l0.61,-1.05ZM510.78,127.49l0.4,-0.27l0.27,-0.9l-0.45,-1.48l0.03,-1.91l0.69,-1.16l0.52,-2.25l-1.63,-2.9l-0.83,-0.35l-1.28,-0.0l-0.22,-2.32l1.66,-2.27l-0.05,-0.78l0.76,-1.55l1.95,-1.09l0.48,-0.75l0.97,-0.25l0.45,-0.76l1.16,-0.14l1.03,-1.57l-1.02,-12.16l1.03,-0.35l0.22,-1.1l0.73,-0.98l0.78,0.69l1.69,0.64l2.61,-0.58l3.27,-1.59l2.64,-0.84l2.2,-2.15l0.31,0.29l1.39,-0.11l1.25,-1.49l0.78,-0.59l1.04,-0.1l0.4,-0.52l1.08,0.99l-0.47,1.7l-0.67,1.02l0.24,1.62l-1.19,2.22l0.64,0.65l2.49,-1.1l0.72,-0.87l2.16,1.22l2.34,0.47l0.44,0.54l0.86,-0.13l1.6,0.69l2.25,3.55l15.49,2.46l4.66,1.94l1.67,-0.17l1.63,0.41l1.33,-0.6l3.17,0.69l2.18,0.08l0.86,0.4l0.56,0.89l-0.41,1.1l0.41,0.77l3.4,0.61l1.41,1.12l-0.15,0.71l0.6,1.11l-0.35,0.81l0.44,1.25l-0.77,1.25l-0.02,1.76l0.91,0.63l1.38,-0.26l1.02,-0.73l0.2,0.25l-0.78,2.45l0.05,1.31l1.32,1.45l0.84,0.34l-0.23,2.01l-2.41,1.21l-0.51,0.79l0.05,1.25l-1.59,3.49l-0.38,3.49l1.11,0.81l0.92,-0.04l0.49,-0.36l0.49,-1.36l1.81,-1.48l0.65,-2.53l1.06,-1.7l0.59,0.17l0.57,-0.71l0.88,-0.4l1.13,1.11l0.59,0.19l-0.27,2.2l-1.16,2.82l-0.54,5.56l0.23,1.11l0.8,0.92l0.07,0.52l-0.5,0.98l-1.29,1.34l-0.85,3.87l0.16,2.56l0.72,1.19l0.07,1.23l-1.05,3.21l0.13,2.1l-0.72,2.1l-0.27,2.45l0.6,2.0l-0.03,1.31l0.49,0.53l-0.2,1.68l0.92,0.77l0.55,2.41l1.21,1.51l0.09,1.67l-0.32,1.44l0.49,2.91l-44.26,4.85l-0.2,-0.78l-1.57,-2.16l-4.95,-0.8l-1.06,-1.33l-0.37,-1.67l-0.91,-1.19l-0.88,-4.84l1.03,-2.6l-0.09,-0.98l-0.72,-0.78l-1.44,-0.47l-0.72,-1.74l-0.49,-5.97l-0.71,-1.39l-0.53,-2.54l-1.16,-0.6l-1.1,-1.55l-0.93,-0.11l-1.17,-0.74l-1.71,0.09l-2.68,-1.77l-2.31,-3.47l-2.65,-2.08l-2.94,-0.52l-0.73,-1.23l-1.13,-0.99l-3.12,-0.43l-3.54,-2.72l0.45,-1.24l-0.12,-1.61l0.25,-0.81l-0.89,-3.1ZM542.09,81.41l0.05,-0.28l0.03,0.16l-0.08,0.12ZM538.44,86.94l0.29,-0.22l0.05,0.09l-0.34,0.13Z",
         "name": "Wisconsin"
      },
      "US-OR": {
         "path": "M11.03,140.91l0.03,-1.74l0.5,-0.82l0.34,-1.92l1.14,-1.87l0.26,-1.88l-0.69,-2.56l-0.33,-0.16l-0.1,-1.79l3.07,-3.74l2.56,-5.89l0.01,0.76l0.52,0.52l0.49,-0.28l0.61,-1.58l0.47,-0.47l0.3,0.98l1.12,0.42l0.33,-0.54l-0.43,-1.75l0.28,-0.86l-0.45,-0.14l-0.8,0.31l1.77,-3.11l1.14,-0.94l0.89,0.31l0.49,-0.28l-0.46,-1.08l-0.8,-0.4l1.81,-4.57l0.48,-0.56l0.03,-0.99l1.11,-2.64l0.65,-2.58l1.06,-1.89l0.33,0.28l0.66,-0.33l-0.03,-0.6l-0.75,-0.63l1.09,-2.58l0.32,0.22l0.6,-0.19l0.13,-0.34l-0.03,-0.51l-0.57,-0.33l0.89,-3.82l1.25,-1.78l0.86,-3.02l1.16,-1.74l0.86,-2.43l0.27,-1.21l-0.17,-0.5l1.2,-1.07l-0.3,-1.64l0.95,0.58l0.79,-0.62l-0.38,-0.76l0.21,-0.65l-0.76,-0.78l0.53,-1.07l1.31,-0.85l0.06,-0.45l-0.92,-0.35l-0.31,-1.26l1.0,-2.13l-0.03,-1.48l0.87,-0.52l0.59,-1.33l0.2,-1.96l-0.19,-1.45l0.81,1.18l0.6,0.18l-0.13,0.9l0.55,0.54l0.84,-0.95l-0.26,-1.0l0.22,-0.07l0.23,0.56l0.69,0.33l1.51,0.06l0.38,-0.35l1.37,-0.17l0.96,2.09l2.41,0.95l1.25,-0.63l0.78,0.05l1.7,1.53l0.76,1.05l0.19,1.9l0.42,0.78l-0.05,2.05l-0.4,1.24l0.18,0.93l-0.45,1.74l0.24,1.45l0.78,0.86l1.94,0.58l1.43,1.07l1.36,0.42l1.03,0.7l4.99,-0.48l2.91,-1.03l1.14,0.52l2.23,0.11l4.23,1.47l0.69,0.55l0.18,1.15l0.57,0.59l1.86,-0.25l2.1,0.73l3.79,-0.51l0.69,-0.42l2.18,0.95l1.64,0.26l1.2,-0.29l0.87,0.27l1.89,-0.76l3.07,-0.4l4.16,0.17l1.62,-0.9l7.15,1.08l0.96,-0.18l0.8,-0.58l31.21,6.2l0.22,1.81l0.91,1.83l1.15,0.64l1.95,1.88l0.55,2.46l-0.16,1.0l-3.72,4.51l-0.41,1.41l-1.41,2.61l-2.23,2.39l-0.67,2.67l-1.5,1.82l-2.24,1.48l-1.94,3.32l-1.5,1.26l-0.63,2.01l-0.13,1.86l0.28,0.92l0.56,0.62l0.54,0.04l0.39,-0.34l0.63,0.76l0.89,-0.04l0.06,0.87l0.8,0.95l-0.46,0.99l-0.65,0.05l-0.34,0.4l0.2,1.79l-1.04,2.53l-1.23,1.4l-7.11,38.72l-26.22,-5.22l-28.9,-6.33l-28.79,-6.92l-28.92,-7.58l-1.46,-2.58l0.22,-2.33l-0.22,-0.89Z",
         "name": "Oregon"
      },
      "US-KY": {
         "path": "M584.42,307.35l0.34,-2.14l1.15,0.94l0.72,0.19l0.75,-0.36l0.46,-0.87l0.87,-3.5l-0.55,-1.72l0.38,-0.85l-0.11,-1.85l-1.28,-2.0l1.78,-3.17l1.25,-0.51l0.74,0.05l7.06,2.47l0.81,-0.2l0.65,-0.71l0.23,-1.91l-1.5,-2.1l-0.24,-1.4l0.19,-0.86l0.4,-0.52l1.1,-0.19l1.24,-0.83l3.01,-0.96l0.64,-0.51l0.14,-1.13l-1.54,-2.01l-0.08,-0.66l1.33,-1.95l0.14,-1.15l1.26,0.41l1.12,-1.32l-0.68,-1.97l1.93,0.87l1.72,-0.84l0.03,1.15l1.01,0.45l0.99,-0.94l0.02,-1.34l0.51,0.16l1.9,-0.97l4.43,1.46l0.64,0.92l0.86,0.17l0.59,-0.59l0.73,-2.49l1.39,-0.55l1.4,-1.34l0.87,1.26l0.77,0.41l1.16,-0.14l0.12,0.74l0.95,0.18l0.66,-0.62l0.02,-0.99l0.84,-0.38l0.27,-0.48l-0.25,-2.06l0.84,-0.4l0.34,-0.56l-0.06,-0.67l1.25,-0.57l0.34,-0.72l0.39,1.45l0.62,0.59l1.47,0.61l1.25,-0.01l1.12,0.79l0.52,-0.11l0.26,-0.54l1.1,-0.46l0.53,-0.69l0.03,-3.42l0.85,-2.15l1.03,0.17l1.55,-1.19l0.74,-3.41l1.04,-0.37l1.65,-2.21l-0.0,-0.81l-1.19,-2.81l2.79,-0.61l1.54,0.78l3.85,-2.82l2.24,-0.47l-0.19,-1.06l0.35,-1.45l-0.32,-0.36l-1.22,-0.02l0.57,-1.38l-1.09,-1.5l1.65,-1.82l1.82,1.15l0.92,-0.12l1.94,-1.02l0.78,0.86l1.76,0.51l0.57,1.26l0.94,0.9l0.8,1.81l2.61,0.63l1.88,-0.58l1.64,0.25l2.2,1.8l0.96,0.41l1.27,-0.19l0.6,-1.3l0.99,-0.54l1.36,0.48l1.35,0.02l1.34,1.06l1.26,-0.69l1.42,-0.16l1.8,-2.53l1.72,-1.04l0.94,2.3l0.7,0.81l2.46,0.77l1.36,0.94l0.75,1.02l0.95,3.28l-0.37,0.45l0.1,0.71l-0.44,0.61l0.02,0.53l2.26,2.56l1.36,0.89l-0.07,0.87l1.35,0.94l0.59,1.33l1.56,1.17l0.99,1.58l2.15,0.8l1.1,1.09l2.13,0.23l-4.83,6.08l-5.06,4.15l-0.42,0.86l0.23,1.22l-2.07,1.93l0.05,1.61l-3.06,1.65l-0.8,2.36l-1.71,0.61l-2.7,1.83l-1.66,0.49l-3.39,2.42l-32.85,4.78l-7.5,0.92l-7.71,0.53l-22.79,3.67l-0.64,-0.55l-3.64,0.12l-0.41,0.6l1.05,3.51l-23.08,2.87ZM582.3,307.55l-0.6,0.08l-0.06,-0.53l0.48,-0.02l0.18,0.47Z",
         "name": "Kentucky"
      },
      "US-CO": {
         "path": "M364.77,242.03l-1.26,64.83l-29.41,-0.94l-29.5,-1.5l-29.46,-2.05l-32.29,-2.88l8.57,-85.75l27.85,2.51l28.29,2.01l29.65,1.53l28.02,0.91l-0.47,21.33Z",
         "name": "Colorado"
      },
      "US-OH": {
         "path": "M666.13,180.72l1.67,0.44l1.04,-0.31l1.75,1.04l2.08,0.23l1.48,1.15l1.61,0.23l-2.08,1.16l-0.11,0.47l0.42,0.24l2.46,0.16l1.39,-1.1l1.77,-0.27l3.41,0.91l0.92,-0.09l1.47,-1.29l1.74,-0.61l1.14,-0.96l1.91,-0.98l2.62,-0.06l1.09,-0.62l1.24,-0.07l1.06,-0.8l4.22,-5.44l4.52,-3.48l6.9,-4.4l6.01,27.6l-0.51,0.54l-1.28,0.43l-0.41,0.94l1.67,2.19l0.03,2.07l0.41,0.26l0.32,0.92l-0.04,0.75l-0.54,0.82l-0.48,4.03l0.19,3.16l-0.57,0.41l0.34,1.09l-0.34,1.72l-0.39,0.54l0.77,1.21l-0.24,1.84l-2.4,2.64l-0.82,1.85l-1.36,1.49l-1.24,0.68l-0.6,0.7l-0.88,-0.89l-1.18,0.15l-1.31,1.73l-0.08,1.3l-1.78,0.86l-0.77,2.22l0.28,1.55l-0.93,0.85l0.31,0.66l0.63,0.4l0.27,1.27l-0.8,0.18l-0.5,1.59l0.05,-0.91l-0.92,-1.23l-1.53,-0.52l-1.13,0.8l-0.75,1.87l-0.33,2.65l-0.53,0.82l1.24,3.51l-1.46,0.64l-0.43,3.33l-2.54,1.14l-1.01,0.06l-0.77,-1.04l-1.52,-1.07l-2.35,-0.69l-1.17,-1.87l-0.32,-1.12l-0.74,-0.34l-2.26,1.33l-1.09,1.28l-0.4,1.04l-1.43,0.17l-0.87,0.61l-1.12,-0.98l-3.15,-0.55l-1.37,0.72l-0.53,1.24l-0.72,0.06l-3.06,-2.19l-1.94,-0.26l-1.78,0.58l-2.15,-0.49l-0.55,-1.51l-0.97,-0.95l-0.64,-1.35l-2.04,-0.73l-1.15,-0.98l-0.97,0.27l-1.31,0.89l-0.46,0.03l-1.8,-1.19l-0.61,0.21l-0.6,0.7l-8.79,-54.8l20.44,-4.42ZM676.8,183.09l0.5,-0.77l0.64,0.41l-0.44,0.34l-0.7,0.03Z",
         "name": "Ohio"
      },
      "US-OK": {
         "path": "M399.74,360.02l-0.05,-41.47l-0.39,-0.4l-26.8,-0.23l-25.23,-0.63l0.32,-10.07l36.84,0.78l36.14,-0.07l36.13,-0.9l35.7,-1.7l0.62,10.51l4.61,23.98l1.48,37.44l-1.21,-0.21l-0.29,-0.36l-2.14,-0.2l-0.83,-0.78l-2.13,-0.38l-1.78,-2.03l-1.24,-0.21l-2.27,-1.54l-1.5,-0.39l-0.8,0.45l-0.23,0.87l-0.83,0.24l-0.46,0.62l-2.49,-0.13l-0.48,-0.19l-0.28,-0.67l-1.05,-0.6l-2.31,1.28l-1.17,0.2l-0.19,0.56l-0.63,0.27l-2.13,-0.76l-1.71,1.17l-2.07,0.51l-0.83,1.36l-1.49,0.07l-0.57,1.24l-1.27,-1.53l-1.71,-0.09l-0.32,-0.57l-1.21,-0.45l-0.2,-0.23l0.18,-0.72l-0.44,-0.5l-1.24,-0.17l-0.74,1.37l-0.67,0.11l-0.84,-0.49l-0.98,0.07l-0.71,-1.5l-1.09,-0.34l-1.17,0.57l-0.45,1.69l-0.71,-0.08l-0.49,0.43l0.29,0.72l-0.5,1.66l-0.44,0.19l-0.56,-0.54l-0.31,-0.89l0.39,-1.64l-0.76,-0.85l-0.8,0.18l-0.49,0.76l-0.85,-0.18l-0.93,0.97l-1.08,0.13l-0.53,-1.35l-2.0,-0.18l-0.3,-1.46l-1.19,-0.53l-0.83,0.33l-2.13,2.14l-1.22,0.51l-0.98,-0.37l0.19,-1.23l-0.29,-1.12l-2.34,-0.66l-0.08,-2.15l-0.44,-0.55l-2.11,0.39l-2.53,-0.25l-0.64,0.26l-0.81,1.2l-0.96,0.06l-1.77,-1.75l-0.97,-0.12l-1.51,0.55l-2.7,-0.63l-1.86,-0.99l-1.05,0.25l-2.48,-0.3l-0.18,-2.1l-0.86,-0.86l-0.44,-1.01l-1.17,-0.41l-0.7,-0.82l-0.82,0.08l-0.44,1.63l-2.23,-0.67l-1.08,0.59l-0.97,-0.09l-3.81,-3.74l-1.13,-0.43l-0.81,0.08Z",
         "name": "Oklahoma"
      },
      "US-WV": {
         "path": "M694.57,249.01l3.95,-1.56l0.35,-0.7l0.11,-2.72l1.15,-0.23l0.4,-0.61l-0.59,-2.46l-0.62,-1.21l0.48,-0.64l0.34,-2.74l0.67,-1.65l0.46,-0.39l1.25,0.52l0.41,0.68l-0.13,1.12l0.71,0.44l0.77,-0.44l0.47,-1.41l0.5,0.21l0.57,-0.2l0.2,-0.45l-0.65,-2.06l-0.75,-0.53l0.8,-0.78l-0.27,-1.69l0.73,-1.98l1.65,-0.53l0.16,-1.58l1.01,-1.41l0.44,-0.09l0.65,0.77l0.67,0.18l2.27,-1.59l1.49,-1.63l0.78,-1.81l2.44,-2.66l0.36,-2.38l-0.74,-0.98l0.7,-2.31l-0.25,-0.75l0.58,-0.58l-0.29,-3.38l0.45,-3.87l0.53,-0.79l0.07,-1.1l-0.39,-1.18l-0.4,-0.32l-0.05,-1.97l-1.58,-1.86l0.44,-0.53l0.85,-0.11l0.3,-0.33l4.15,19.01l0.48,0.31l16.61,-3.72l2.23,10.49l0.51,0.37l2.05,-2.49l0.97,-0.57l0.34,-1.02l1.62,-1.98l0.25,-1.03l0.52,-0.41l1.2,0.42l0.73,-0.32l1.31,-2.58l0.6,-0.46l-0.04,-0.85l0.42,0.58l1.81,0.49l3.2,-0.61l0.77,-0.86l0.07,-1.44l1.99,-0.76l1.02,-1.69l0.67,-0.11l3.17,1.44l1.8,-0.73l-0.44,1.01l0.56,0.9l1.28,0.4l0.09,0.95l1.13,0.4l0.1,1.18l0.34,0.41l-0.56,3.59l-9.05,-4.28l-0.64,0.25l-0.3,1.14l0.39,1.58l-0.51,1.61l0.42,2.24l-1.35,2.39l-0.41,1.74l-0.72,0.53l-0.41,1.09l-0.28,0.22l-0.61,-0.22l-0.37,0.33l-1.23,3.26l-1.86,-0.74l-0.64,0.26l-0.93,2.75l0.09,1.44l-0.73,1.14l-0.18,2.3l-0.88,2.18l-3.26,-0.31l-1.45,-1.71l-1.71,-0.22l-0.5,0.42l-0.25,2.14l0.2,1.28l-0.31,1.43l-0.49,0.45l-0.31,1.03l0.23,0.91l-1.57,2.42l-0.03,2.07l-0.51,1.98l-2.56,4.69l-0.74,3.13l0.15,0.76l1.14,0.52l-1.08,1.37l0.06,0.6l0.44,0.39l-2.15,2.12l-0.55,-0.69l-0.84,0.16l-3.12,2.54l-1.04,-0.54l-1.31,0.27l-0.43,0.9l0.46,1.14l-0.91,0.91l-0.74,-0.04l-2.27,1.02l-1.21,0.97l-2.2,-1.31l-0.73,0.0l-0.81,1.57l-1.1,0.5l-1.22,1.46l-1.09,0.1l-1.99,-1.05l-1.31,0.0l-0.62,-0.73l-1.2,-0.58l-0.31,-1.31l-0.88,-0.53l0.35,-0.66l-0.31,-0.81l-0.85,-0.36l-0.84,0.25l-1.34,-0.15l-1.27,-1.16l-2.07,-0.75l-0.77,-1.4l-1.59,-1.21l-0.71,-1.46l-1.0,-0.57l-0.13,-1.07l-1.39,-0.92l-2.01,-2.21l0.7,-2.0l-0.26,-1.59l-0.67,-1.43Z",
         "name": "West Virginia"
      },
      "US-WY": {
         "path": "M218.82,209.32l10.47,-85.76l25.45,2.87l26.8,2.51l26.84,2.0l27.86,1.53l-3.81,86.31l-27.38,-1.48l-28.27,-2.06l-29.76,-2.75l-28.2,-3.17Z",
         "name": "Wyoming"
      },
      "US-UT": {
         "path": "M178.98,182.72l41.58,5.7l-2.59,21.2l0.35,0.45l32.3,3.59l-8.57,85.75l-42.69,-4.9l-42.54,-6.06l16.56,-106.59l5.59,0.86ZM188.02,193.73l-0.3,0.03l-0.25,0.61l0.72,3.63l-0.81,0.18l-0.5,1.3l1.14,0.59l0.36,-0.83l0.37,-0.17l0.92,1.13l0.82,1.66l-0.26,0.99l0.15,1.43l-0.41,0.76l0.39,0.51l-0.05,0.55l1.57,1.82l0.02,0.59l1.12,1.91l0.71,-0.09l0.85,-1.72l0.07,2.25l0.53,0.94l0.06,1.77l0.99,0.47l1.66,-0.65l2.5,-1.73l0.38,-1.23l3.33,-1.39l0.18,-0.54l-0.52,-1.01l-0.68,-0.84l-1.36,-0.7l-1.85,-4.54l-0.87,-0.47l0.87,-0.89l1.3,0.6l1.33,-0.14l0.92,-0.82l-0.06,-1.11l-1.55,-0.51l-0.81,0.41l-1.18,-0.12l0.28,-0.75l-0.58,-0.78l-1.86,-0.23l-0.57,1.12l0.28,0.78l-0.35,0.67l0.54,2.41l-0.91,0.31l-0.34,-0.41l0.22,-1.78l-0.42,-0.69l-0.06,-1.72l-0.68,-0.6l-1.33,-0.12l-1.07,-1.54l-0.18,-0.67l0.64,-0.54l0.36,-1.28l-0.82,-1.37l-1.22,-0.29l-0.99,0.79l-2.74,0.17l-0.36,0.62l0.61,0.83l-0.28,0.42ZM199.39,206.21l0.03,0.02l0.03,0.09l-0.06,-0.11ZM199.42,207.0l0.31,0.91l-0.18,0.88l-0.39,-0.92l0.26,-0.87Z",
         "name": "Utah"
      },
      "US-IN": {
         "path": "M601.93,192.0l1.44,0.85l2.1,0.13l1.52,-0.39l2.63,-1.39l2.73,-2.1l32.34,-5.07l9.08,56.53l-0.66,1.15l0.31,0.91l0.81,0.76l-0.65,1.12l0.5,0.79l1.12,0.03l-0.36,1.11l0.18,0.5l-1.81,0.3l-3.18,2.54l-0.44,0.18l-1.41,-0.78l-3.46,0.93l-0.09,0.77l1.21,3.04l-1.4,1.87l-1.18,0.5l-0.45,0.88l-0.3,2.56l-1.12,0.88l-0.89,-0.25l-0.63,0.49l-0.85,1.93l0.06,3.09l-0.39,0.98l-1.39,0.85l-0.94,-0.66l-1.24,0.02l-1.48,-0.66l-0.63,-1.81l-1.89,-0.7l-0.44,0.3l-0.03,0.51l0.82,0.66l-0.62,0.3l-0.89,-0.34l-0.35,0.29l-0.04,0.48l0.55,0.9l-1.08,0.68l0.15,2.34l-1.06,0.65l0.0,0.82l-0.16,0.36l0.08,-0.48l-0.34,-0.51l-1.61,0.19l-1.42,-1.65l-0.49,-0.07l-1.67,1.49l-1.57,0.69l-1.07,2.86l-0.82,-1.05l-2.8,-0.74l-1.12,-0.59l-1.08,-0.17l-1.76,0.92l-0.64,-1.0l-0.58,-0.18l-0.53,0.56l0.65,1.83l-0.33,0.82l-0.29,0.09l-0.03,-1.15l-0.43,-0.39l-2.04,0.81l-1.42,-0.81l-0.84,0.01l-0.48,0.95l0.72,1.52l-0.49,0.73l-1.16,-0.38l-0.08,-0.53l-0.52,-0.42l0.54,-0.62l-0.35,-3.04l0.95,-0.78l-0.08,-0.59l-0.43,-0.22l0.68,-0.45l0.25,-0.61l-1.18,-1.43l0.45,-1.15l0.33,0.19l0.59,-0.44l0.8,-0.1l0.33,-1.77l0.55,-0.39l0.44,-0.91l-0.06,-0.82l1.52,-1.06l0.06,-0.69l-0.42,-0.9l0.57,-0.85l0.13,-1.27l0.87,-0.51l0.39,-1.89l-1.1,-2.5l0.22,-0.78l-0.17,-1.1l-0.94,-0.89l-0.62,-1.47l-1.06,-0.76l-0.04,-0.57l0.92,-1.38l-0.64,-2.21l1.27,-1.31l-6.7,-49.9Z",
         "name": "Indiana"
      },
      "US-IL": {
         "path": "M541.12,227.85l0.87,-0.35l0.37,-0.67l-0.24,-2.29l-0.74,-0.92l0.15,-0.4l0.71,-0.69l2.42,-0.98l0.71,-0.64l0.63,-1.67l0.17,-2.08l1.64,-2.45l0.27,-0.94l-0.04,-1.21l-0.59,-1.92l-2.24,-1.84l-0.12,-1.74l0.66,-2.35l0.45,-0.37l4.61,-0.86l0.81,-0.41l0.82,-1.11l2.55,-1.0l1.43,-1.55l-0.01,-1.56l0.4,-1.69l1.42,-1.45l0.29,-0.74l0.32,-4.32l-0.77,-2.12l-4.03,-2.42l-0.28,-1.47l-0.49,-0.81l-3.66,-2.42l44.64,-4.88l0.0,2.62l0.58,2.56l1.39,2.45l1.31,0.93l0.77,2.56l1.27,2.67l1.43,1.81l6.81,50.69l-1.22,1.12l-0.1,0.69l0.68,1.72l-0.83,1.07l-0.03,1.1l1.2,1.07l0.57,1.38l0.9,0.8l-0.09,1.78l1.07,2.26l-0.27,1.46l-0.87,0.56l-0.21,1.45l-0.59,0.92l0.33,1.18l-1.48,1.12l-0.22,0.42l0.29,0.68l-0.93,1.16l-0.3,1.18l-1.65,0.68l-0.62,1.65l0.16,0.8l0.97,0.8l-1.27,1.14l0.4,0.75l-0.47,0.23l-0.12,0.55l0.43,2.88l-1.15,0.2l0.08,0.45l0.9,0.75l-0.47,0.17l-0.02,0.64l0.83,0.28l0.04,0.41l-1.3,1.95l-0.24,1.17l0.6,1.21l0.7,0.63l0.37,1.05l-3.32,1.23l-1.19,0.81l-1.25,0.25l-0.77,1.0l-0.17,2.02l0.31,0.87l1.41,1.89l0.07,0.52l-0.53,1.17l-0.97,0.03l-6.33,-2.35l-1.08,-0.07l-1.58,0.64l-0.68,0.71l-1.43,2.91l0.06,0.66l-1.19,-1.18l-0.79,0.14l-0.35,0.47l0.57,1.11l-1.23,-0.76l-0.02,-0.67l-1.61,-2.16l-0.4,-1.1l-0.76,-0.36l-0.05,-0.47l0.94,-1.33l0.2,-1.02l-0.33,-1.0l-1.45,-1.98l-0.48,-3.13l-2.27,-0.96l-1.56,-2.09l-1.96,-0.79l-1.73,-1.31l-1.57,-0.13l-1.83,-0.93l-2.33,-1.73l-2.36,-2.39l-0.37,-1.91l2.36,-6.76l-0.25,-2.28l0.98,-2.03l-0.39,-0.84l-2.68,-1.41l-2.6,-0.64l-1.28,0.45l-0.86,1.43l-0.46,0.28l-0.45,-0.12l-1.3,-1.86l-0.43,-1.49l0.15,-0.86l-0.54,-0.9l-0.29,-1.62l-0.83,-1.33l-0.94,-0.88l-4.13,-2.46l-1.01,-1.61l-4.55,-3.45l-0.74,-1.87l-1.05,-1.19l-0.04,-1.57l-0.97,-1.45l-0.76,-3.48l0.09,-2.89l0.6,-1.26ZM586.9,296.43l0.05,0.06l0.03,0.03l-0.05,-0.0l-0.04,-0.09Z",
         "name": "Illinois"
      },
      "US-AK": {
         "path": "M87.36,534.18l0.47,0.12l0.39,-0.03l0.07,0.37l-0.38,0.38l-0.69,0.33l-0.12,-0.13l0.29,-0.43l-0.1,-0.33l0.07,-0.29ZM89.85,534.33l0.63,-0.13l0.31,-0.6l1.87,-0.44l2.32,0.02l1.55,0.61l0.8,0.71l-0.15,1.95l0.18,0.42l0.1,-0.0l0.29,0.45l0.44,-0.08l0.29,-0.27l0.0,-0.67l0.34,0.23l-0.11,0.47l0.79,0.97l-0.04,0.07l-0.3,-0.1l-0.32,-0.32l-0.32,-0.11l-0.45,0.39l-0.16,-0.54l-0.38,-0.04l-0.24,0.12l-0.25,-0.16l-0.24,0.07l-0.39,-0.32l-0.3,-0.04l-0.73,0.26l-0.89,-0.2l-0.06,-0.27l-0.23,-0.18l0.36,-0.29l0.69,0.74l0.47,-0.03l0.21,-0.45l-0.25,-0.46l-0.0,-0.32l-0.26,-0.72l-0.96,-0.54l-1.1,0.3l-0.64,0.75l-0.83,0.25l-0.29,0.09l-0.42,-0.31l-0.48,0.11l-0.1,0.17l-0.65,-0.16l-0.28,0.07l-0.24,0.25l0.25,-0.28l-0.05,-0.59l0.21,-0.89ZM99.7,537.94l0.33,-0.34l0.43,-0.24l-0.01,-0.35l-0.47,-1.08l0.15,-0.27l0.65,-0.28l0.32,-0.33l0.72,-0.38l0.65,-0.03l0.43,-0.15l0.83,0.08l1.47,-0.11l0.63,0.14l0.1,0.14l0.38,0.14l0.9,0.09l0.27,0.15l0.28,-0.24l0.27,-0.06l0.37,0.08l0.18,0.21l0.27,-0.04l0.21,0.43l0.39,0.27l0.08,0.22l0.71,-0.02l0.39,-0.85l0.55,-0.71l0.52,-0.25l1.89,-0.56l0.5,0.02l0.35,0.22l1.22,-0.45l0.64,0.02l-0.15,0.41l0.4,0.58l0.61,0.29l0.46,-0.01l0.45,-0.47l0.13,-0.43l-0.35,-0.28l-0.25,-0.06l0.17,-0.42l-0.14,-0.42l1.23,-1.18l0.98,-1.13l0.16,-0.1l0.35,0.16l0.38,-0.03l0.26,0.28l0.17,0.41l0.67,-0.24l-0.05,-0.61l-0.38,-0.61l-0.45,-0.26l0.25,-0.55l0.9,-0.58l0.37,0.02l0.73,-0.26l0.84,-0.13l0.57,0.16l0.44,-0.15l-0.12,-0.56l0.24,-0.11l0.62,-0.65l0.43,0.04l0.24,-0.11l0.52,-0.62l0.38,-0.16l0.2,-0.48l-0.44,-0.28l-0.55,0.11l-0.59,0.59l-0.54,-0.07l-0.54,0.34l-2.21,-0.44l-1.73,-0.17l-0.68,-0.22l-0.09,-0.2l0.22,-0.4l0.08,-0.44l-0.26,-0.66l0.69,-0.45l0.24,-0.34l0.47,0.57l-0.21,0.72l0.03,0.41l0.61,0.14l0.29,-0.14l-0.01,-0.29l0.21,-0.39l0.04,-0.79l-0.74,-1.1l0.09,-0.77l-0.68,-0.24l-0.21,0.25l-0.12,0.58l-0.54,0.27l-0.27,-0.56l-0.34,-0.08l-0.49,0.37l-0.07,0.34l-0.24,0.24l-0.4,-0.01l-0.48,0.27l-0.29,0.57l-0.53,1.69l-0.27,0.06l-0.23,-0.38l0.4,-2.82l0.01,-0.54l-0.15,-0.55l0.18,-0.2l0.14,-0.44l-0.15,-0.33l-0.51,-0.26l-0.94,0.36l0.02,-0.53l-0.5,-0.64l0.24,-0.28l0.16,-0.7l-0.14,-0.41l-0.58,-0.27l-1.94,0.1l-0.58,-0.32l-1.04,-0.07l-0.2,-0.36l-0.24,-0.06l-1.16,0.65l-0.73,-0.13l-0.06,-0.42l-0.15,-0.03l0.18,-0.12l0.34,0.1l0.5,-0.11l0.29,-0.39l-0.16,-0.57l0.5,-0.64l0.9,-0.0l0.43,-0.18l0.13,-0.3l-0.1,-0.46l-1.07,-0.66l0.16,-0.38l0.4,-0.21l0.45,-0.53l1.21,-0.08l0.23,-0.1l0.17,-0.27l0.17,-1.07l0.3,-0.59l0.27,-1.56l0.33,-0.54l-0.01,-0.63l0.14,-0.31l1.0,-0.81l-0.03,-0.14l0.2,-0.15l-0.2,-0.34l-0.24,-0.11l-0.14,0.07l-0.09,-0.34l0.71,-0.3l0.4,-0.32l0.52,-0.13l0.31,-0.33l0.46,-0.04l0.15,0.15l0.45,0.08l0.33,-0.12l0.44,-0.51l-0.32,-0.4l-0.34,-0.04l-0.01,-0.32l-0.27,-0.36l-0.62,0.35l0.01,0.16l-0.56,-0.06l-1.27,0.79l-0.19,-0.04l-0.58,0.22l-0.38,-0.03l-0.25,0.1l-0.05,0.15l-0.48,-0.06l-0.17,0.47l0.35,0.75l-0.37,0.25l-0.22,0.4l-0.2,0.15l-0.15,-0.07l-0.13,-0.26l-2.03,-0.22l-1.8,-0.94l-0.73,-0.6l-0.44,-0.69l0.09,-0.39l0.11,0.06l0.53,-0.13l-0.05,-0.33l0.13,-0.31l-0.38,-1.12l0.22,-0.87l-0.11,-0.58l0.42,-0.68l-0.42,-0.31l-0.21,0.02l-0.35,-0.67l0.0,-0.37l0.37,-0.01l0.39,-0.17l0.32,-0.43l-0.03,-0.35l-0.26,-0.27l-0.54,-0.17l1.35,0.03l0.28,-0.15l0.21,-0.32l0.67,-0.05l0.02,0.53l0.51,0.51l0.27,0.51l-0.09,0.24l-0.29,-0.02l-0.62,0.18l-0.55,0.48l0.0,0.14l0.31,0.38l1.01,-0.16l0.4,0.22l0.27,-0.03l0.46,-0.28l0.28,-0.0l0.09,0.08l-0.64,0.61l-0.16,0.47l0.03,0.25l0.17,0.24l0.48,0.24l1.49,-0.04l0.27,-0.18l0.18,-0.34l0.2,-0.07l-0.14,-0.9l0.27,-0.1l0.2,-0.27l0.02,-0.32l-0.13,-0.24l0.2,-0.53l-0.06,-0.13l-0.55,-0.28l-0.84,0.04l-0.35,0.16l-0.97,-0.93l-0.42,-0.26l0.07,-0.57l-0.33,-0.44l-0.24,-0.13l-0.19,-0.48l0.19,0.03l0.07,-0.09l0.52,0.15l0.51,-0.35l-0.15,-0.47l-0.73,-0.52l0.2,-0.06l0.41,-0.42l-0.11,-0.55l0.12,-0.15l0.41,-0.21l0.27,0.07l0.5,-0.15l0.43,0.25l0.8,-0.11l0.67,-0.43l-0.02,-0.53l-0.18,-0.22l-0.45,-0.06l-0.66,0.28l-0.44,-0.17l-1.09,0.08l-0.76,0.26l-0.36,0.37l-0.7,0.11l-0.18,0.15l-0.15,0.39l-0.12,0.12l-0.06,-0.08l0.08,-0.32l0.35,-0.45l-0.07,-0.08l0.19,0.01l0.12,-0.14l-0.1,-0.06l0.17,-0.46l-0.4,-0.6l0.11,-0.27l0.4,0.09l0.24,-0.06l0.45,-0.5l0.04,-0.34l-0.13,-0.54l-0.39,-0.37l1.09,0.44l0.4,-0.45l-0.38,-0.63l-0.06,-0.33l0.52,0.48l0.98,0.33l0.18,-0.4l0.12,0.03l0.05,-0.61l0.22,-0.48l0.63,-0.43l0.57,-0.07l2.22,-0.76l0.81,-0.13l0.27,0.19l-0.08,0.5l0.2,0.34l-0.41,0.26l0.13,0.45l0.3,0.14l0.85,-0.04l0.29,-0.37l0.05,-0.95l-0.19,-0.11l0.35,0.03l1.35,-0.27l0.27,-0.58l-0.05,-0.09l-0.31,-0.21l-0.9,0.06l0.08,-0.22l0.5,-0.05l0.12,-0.59l0.14,-0.14l0.89,-0.42l0.73,0.88l0.38,0.11l0.32,-0.23l0.16,-0.44l-0.01,-0.27l-0.25,-0.44l0.64,-0.07l0.65,0.27l0.28,0.29l0.41,0.85l-0.04,0.22l-0.15,0.1l0.04,0.18l-0.54,-0.04l-0.54,0.27l-0.1,0.49l0.46,0.2l1.1,-0.05l-0.07,0.5l0.35,0.37l0.69,0.38l0.34,0.09l0.95,-0.04l0.57,-0.28l0.44,0.15l0.53,-0.06l1.67,-0.57l0.1,0.54l1.59,0.9l0.27,0.34l0.54,0.31l1.07,0.28l2.13,-0.53l0.42,-0.22l0.47,-0.45l0.41,-0.77l0.37,-1.17l0.9,-1.39l0.06,-0.37l-0.1,-0.54l0.04,-0.33l0.22,-0.25l-0.06,-0.5l0.46,0.37l0.31,0.02l0.23,-0.16l1.15,-0.23l0.62,-0.63l0.26,-1.05l-0.15,-0.65l0.51,-0.43l-0.22,-0.39l-0.76,-0.38l-0.4,0.19l-0.4,0.02l-0.6,0.33l-0.26,-0.29l-0.05,-0.41l-0.3,-0.35l-0.49,-0.04l-0.07,0.23l-0.62,0.0l-0.43,-0.28l-0.08,0.09l-0.54,-0.03l-0.36,0.17l-0.95,-0.12l-0.9,0.24l0.06,-0.3l-0.16,-0.8l0.04,-0.58l-0.1,-0.59l-0.54,-0.21l-0.87,0.1l-0.29,-0.51l-0.43,-0.43l-0.59,-0.28l-1.06,-1.04l-0.92,-0.12l-0.2,-0.28l-0.43,-0.23l-0.07,-0.22l-0.65,-0.06l-0.17,0.22l-0.7,-1.25l-0.93,-1.21l-0.6,-0.94l-0.15,-0.58l0.22,-0.72l0.16,-0.13l0.26,0.05l0.25,-0.13l0.49,-0.79l-0.01,-0.48l-0.21,-0.69l0.21,-0.4l0.5,0.21l0.56,-0.14l0.47,-0.29l0.4,0.66l0.5,0.23l0.42,-0.32l0.06,-0.37l-0.2,-0.74l-0.43,-0.44l-0.33,-0.84l-0.73,-0.89l-0.16,-0.04l-0.77,-1.14l-0.22,-0.53l0.03,-0.34l-0.38,-1.37l0.77,0.03l0.48,0.42l0.39,0.13l0.39,-0.13l0.19,-0.28l0.19,0.05l0.18,-0.27l0.19,-0.0l0.22,0.55l0.54,0.22l1.01,0.04l0.19,-0.16l0.17,0.07l0.66,-0.29l1.57,0.23l0.08,0.66l0.76,0.9l1.11,0.4l0.5,-0.28l0.03,-0.12l-0.01,-0.26l-0.38,-0.97l0.25,-0.04l1.04,0.11l0.61,0.18l0.24,0.17l0.02,0.44l0.76,0.16l0.33,-0.12l1.02,-0.04l0.42,0.17l1.32,0.83l0.03,0.42l0.15,0.18l-0.14,0.16l-0.52,0.11l-0.41,0.31l-0.48,0.71l-0.5,-0.17l-0.63,-0.09l-0.12,0.06l-0.08,0.66l0.52,0.44l-0.12,0.64l0.09,0.45l0.28,0.39l0.8,0.5l0.15,0.33l0.4,0.4l0.72,0.27l0.32,0.25l-0.29,0.37l-0.04,0.29l0.48,0.32l0.22,-0.09l0.18,0.07l0.07,0.23l0.35,0.3l0.54,0.08l0.24,0.37l-0.17,0.51l0.21,0.38l0.49,0.2l0.35,-0.15l0.07,-0.28l0.31,-0.03l0.3,-0.25l1.17,-0.57l0.04,0.5l0.32,0.37l-0.13,0.11l-0.33,0.02l-0.08,0.49l0.34,0.34l0.57,-0.02l0.77,-0.55l0.23,-0.37l0.13,-0.95l-0.53,-1.05l0.53,0.03l0.16,0.37l-0.04,0.42l0.21,0.94l0.5,0.48l1.23,0.64l0.3,0.05l0.27,-0.1l0.29,-0.29l0.49,-0.7l0.1,-0.53l0.43,-0.51l-0.16,-0.31l-0.71,-0.34l-0.49,-0.01l-0.06,-0.56l-0.18,-0.38l-0.88,-0.51l-0.51,-0.09l-0.69,0.4l-0.2,-0.22l0.09,-0.54l-0.1,-0.15l-0.06,-0.94l0.33,-0.37l0.4,-0.14l0.27,-0.3l0.38,-0.08l0.3,0.24l0.3,0.04l0.39,-0.33l0.04,-0.19l-0.5,-1.34l-0.57,-0.43l-0.49,-0.19l-0.05,-0.43l0.37,-0.35l0.03,-0.29l-0.11,-0.24l-0.51,-0.23l-0.39,0.26l0.03,0.11l-0.6,0.24l-0.2,-0.44l-0.8,-0.5l-0.12,-0.35l-1.08,-1.4l1.04,-1.59l0.48,-1.31l0.21,-1.26l-0.22,-1.28l0.02,-1.32l-0.25,-0.51l-0.08,-1.73l-0.15,-0.88l-0.74,-1.55l0.16,-0.91l-0.24,-1.2l0.25,-0.0l1.0,-0.81l0.49,-0.22l1.3,-1.27l0.3,-0.44l0.16,0.26l0.43,0.32l0.33,0.49l1.57,1.15l0.85,0.35l1.25,0.85l0.65,0.21l0.78,0.09l1.5,-0.09l1.75,-0.56l0.32,0.05l0.52,-0.2l1.22,-0.98l0.43,-0.54l0.4,-0.31l0.55,-0.18l0.17,-0.45l2.11,-0.42l0.63,-0.43l0.54,-0.09l0.2,-0.19l0.25,-0.04l0.1,0.18l0.69,0.39l0.89,0.14l0.09,-0.15l0.19,-0.05l0.66,0.47l0.8,0.14l0.38,0.39l0.41,-0.26l2.49,-0.32l-0.46,0.31l0.23,0.44l-0.72,0.37l-0.11,0.57l0.36,0.2l-0.26,1.06l0.21,0.46l0.49,-0.11l0.8,-1.61l0.24,-0.23l0.25,0.17l0.55,0.07l0.28,0.23l0.49,0.02l0.31,-0.11l-0.07,-0.72l-0.28,-0.1l-0.33,-0.32l-0.36,-0.04l-0.0,-0.14l0.16,-0.3l0.05,-0.61l0.41,0.07l0.82,-0.35l-0.0,1.13l0.16,0.42l0.45,0.0l0.24,-0.34l0.43,0.18l0.24,-0.1l0.46,0.48l1.04,0.48l0.2,-0.05l0.71,0.47l0.58,0.1l1.34,-0.08l1.42,-0.31l1.29,-0.65l1.13,-0.41l0.06,0.74l0.64,0.58l-0.31,0.27l0.14,0.59l0.58,0.09l0.25,0.14l0.16,0.27l-0.16,0.38l-0.53,0.08l-0.22,0.14l-0.83,-0.31l-0.6,0.19l-0.28,0.66l0.17,0.37l-0.54,0.69l0.23,0.62l0.39,0.04l0.35,-0.31l0.64,0.31l0.32,-0.03l0.36,-0.22l0.3,-0.41l0.4,-0.13l0.35,0.33l0.27,-0.05l0.33,0.15l0.24,-0.07l0.35,-0.34l0.08,0.63l-0.43,0.35l-0.58,0.09l0.1,0.73l-0.05,0.46l0.2,0.27l0.55,0.25l-0.11,0.23l0.12,0.4l0.22,0.16l0.4,0.05l1.03,-0.36l0.71,0.57l0.62,0.22l0.32,-0.04l0.14,0.36l0.2,0.09l0.02,0.43l0.24,0.25l0.17,0.54l0.45,0.04l0.29,-0.21l0.23,0.34l-1.14,0.49l-0.31,0.63l-0.62,0.16l-0.15,0.49l0.34,0.45l1.51,0.71l-0.37,0.08l-0.25,0.18l-0.03,0.62l0.55,0.49l0.67,0.4l0.14,0.2l0.13,0.59l0.36,0.22l0.46,-0.17l0.1,-0.24l1.06,0.38l0.2,-0.18l0.27,0.35l-0.2,0.22l0.18,0.58l1.13,0.28l0.65,-0.12l0.18,0.18l0.66,0.24l0.02,0.15l0.23,0.24l0.36,0.11l0.34,0.46l0.11,0.53l0.19,0.07l0.56,0.71l-0.11,0.23l0.06,0.57l0.51,0.33l0.5,-0.08l0.1,0.41l0.41,0.37l-0.19,0.45l0.29,0.52l0.7,0.54l0.72,0.78l0.67,0.31l0.22,-0.06l1.43,0.88l0.33,0.49l0.45,0.21l0.37,0.84l0.07,-0.04l0.02,0.34l0.12,0.03l0.31,0.59l-0.03,0.31l0.51,0.28l0.38,0.42l0.36,0.11l0.29,0.27l0.49,0.2l0.84,-0.17l0.4,0.22l0.04,0.55l0.49,0.04l0.4,-0.4l0.51,0.02l0.21,0.18l0.6,0.22l-0.03,0.31l0.54,0.37l0.22,-0.21l0.16,0.11l0.21,0.36l0.27,0.08l0.28,0.52l-0.06,0.4l0.39,0.53l-0.08,0.29l0.11,0.51l0.48,0.47l0.03,0.45l0.13,0.18l0.35,0.13l0.38,0.48l0.3,1.3l0.27,0.3l0.68,0.03l-33.88,69.97l0.07,0.44l1.39,1.52l0.56,0.03l0.2,-0.18l1.0,1.36l0.47,0.14l1.42,-0.55l1.71,0.67l-1.05,1.27l-0.09,0.32l0.25,1.15l0.83,1.01l-0.14,0.64l0.04,0.6l1.99,5.34l-0.34,1.76l-0.34,0.47l0.19,0.61l0.33,0.11l0.27,-0.0l0.86,-0.33l0.55,-0.04l0.04,0.26l-0.76,0.37l-0.33,0.35l0.29,0.55l0.37,-0.02l0.38,-0.21l0.2,0.1l0.0,0.24l0.53,0.24l0.14,1.31l0.1,0.14l-0.31,0.03l-0.1,0.46l0.22,0.36l0.92,0.24l0.05,0.19l-0.31,0.19l-0.0,0.13l0.19,0.34l0.19,0.11l-0.13,0.52l-0.19,-0.01l-0.06,-0.5l-0.34,-0.34l-0.12,0.06l-0.23,-0.49l-0.51,-0.04l-0.29,0.41l-0.27,-0.02l-0.23,0.12l-0.19,-0.6l-0.14,0.01l-0.33,-0.45l-0.45,-0.12l-0.86,-1.68l0.26,-0.0l0.3,-0.44l-0.05,-0.28l-0.36,-0.33l-0.47,0.03l-0.39,-1.0l-0.06,-0.2l0.18,-0.61l-0.05,-0.42l-0.43,-1.17l-0.42,-0.8l-0.15,-0.06l-0.03,-0.2l0.19,-0.5l-0.3,-0.32l-0.68,-0.12l-0.76,-1.2l-0.34,-0.36l-0.22,-0.51l0.0,-0.25l-0.29,-0.25l-0.22,-0.37l-0.28,-0.12l-0.53,-0.85l0.33,0.03l0.26,-0.14l0.12,-0.23l0.61,-0.3l-0.02,0.19l-0.22,0.1l-0.15,0.49l0.27,0.46l0.43,0.08l0.44,-0.35l0.31,-1.17l0.22,-0.31l0.35,0.19l0.12,0.32l0.22,0.2l0.41,0.04l0.32,-0.36l-0.39,-0.84l-0.65,-0.42l-0.17,-1.03l-0.29,-0.7l-0.44,-0.21l-0.49,0.29l-0.22,0.26l-0.42,0.09l-0.83,0.47l-1.88,0.06l-0.94,-0.51l-0.42,-0.36l-1.39,-1.72l0.31,-0.13l0.2,-0.25l0.32,-0.95l-0.37,-1.07l-0.54,-0.07l-0.36,0.29l-0.08,0.55l-0.66,0.01l-0.74,-0.96l-2.63,-2.07l-1.67,-0.45l-1.59,-0.64l-1.09,-0.13l-0.02,-0.58l-0.25,-0.63l0.18,-0.21l0.03,-0.3l-0.23,-0.29l-0.25,-0.01l-0.99,-0.65l-0.07,-0.58l-0.17,-0.38l-0.2,-0.13l0.07,-0.18l0.3,-0.08l0.43,-0.41l0.11,-0.29l-0.11,-0.09l0.31,-0.43l0.29,-0.14l0.38,0.06l0.37,-0.2l0.18,-0.32l-0.0,-0.32l-0.35,-0.26l-0.61,-0.04l-0.84,0.36l-0.28,0.27l-0.59,0.06l-0.62,0.45l-0.63,0.21l-0.13,-0.1l-0.12,-0.65l-0.6,-0.75l0.99,-0.56l0.18,-0.35l-0.33,-0.49l-0.45,0.03l-0.19,-0.61l-0.13,-0.1l0.18,-0.56l-0.13,-0.28l0.08,-0.24l-0.24,-0.61l-0.47,-0.26l-0.52,0.22l-0.09,-0.21l-0.21,-0.01l-0.07,-0.12l0.32,-0.71l-0.08,-0.14l0.37,0.06l0.11,-0.13l0.59,0.36l0.42,0.06l0.4,-0.44l-0.08,-0.47l-0.28,-0.31l-1.03,-0.53l-1.57,0.42l-0.08,-0.19l-0.39,-0.32l-0.41,0.01l-0.1,-0.25l-0.41,0.05l-0.2,-0.13l0.26,-0.39l0.18,-0.83l-0.15,-0.23l-0.36,-0.13l0.14,-0.17l0.2,-0.7l-0.37,-0.34l-0.3,0.04l-1.38,0.7l-0.36,-0.43l-1.21,-0.12l-0.18,0.31l-0.52,0.28l0.05,0.48l0.19,0.14l-0.11,0.28l-0.81,-0.24l-0.66,0.02l-0.27,0.57l-0.52,0.43l0.1,0.52l0.33,0.17l0.42,-0.05l-0.12,0.24l-1.26,0.35l-0.28,0.24l-0.07,0.41l0.41,0.33l0.83,-0.19l0.01,0.38l0.35,0.34l-0.41,0.17l-0.14,0.35l-0.59,-0.04l-0.24,0.4l-0.35,0.16l0.06,0.54l-0.29,0.33l-0.13,0.11l-0.09,-0.11l-0.67,0.18l-0.02,0.15l-0.31,-0.3l-0.43,-0.14l-0.12,-0.28l-0.17,-0.11l0.18,-0.58l-0.07,-0.12l-0.48,-0.24l-0.46,0.09l0.2,-0.46l-0.01,-0.33l-0.23,-0.3l-0.3,-0.08l-0.43,0.22l-0.36,0.71l-0.2,0.15l-0.2,-0.02l-0.18,-0.5l-0.51,-0.08l-0.42,0.5l-0.43,-0.05l-0.19,0.37l-0.23,-0.3l-0.45,-0.03l-0.25,0.25l-0.04,0.31l-0.3,-0.08l-0.14,-0.37l-0.12,-0.02l-0.39,0.09l-0.72,0.47l-0.01,-0.27l-0.12,-0.09l-0.86,-0.01l-0.38,0.23l0.01,0.46l-1.69,0.41l-0.81,-0.77l-0.25,-0.04l-0.32,0.3l-0.39,-0.25l-0.96,-0.01l-0.3,-0.5l-0.07,-0.37l0.11,0.09l0.66,-0.33l-0.01,-0.1l0.26,0.09l0.34,-0.07l0.37,0.28l0.07,0.27l0.21,0.23l0.51,-0.04l0.19,-0.29l0.01,-0.28l0.31,0.14l0.44,-0.07l0.47,-0.16l0.09,-0.22l0.53,-0.29l0.5,-0.13l0.3,-0.47l-0.19,-0.43l-0.51,-0.19l-1.87,0.16l-0.47,-0.71l-0.04,-0.34l1.51,-1.29l1.74,-0.62l0.37,-0.29l0.42,-0.58l0.21,0.02l0.26,-0.13l0.8,-1.1l0.24,-1.21l0.46,-0.04l0.73,0.28l1.61,-0.32l1.36,-0.08l-0.05,0.52l0.19,0.48l0.52,0.51l1.2,0.2l0.23,0.45l1.45,1.39l0.16,0.38l0.29,0.16l0.48,-0.33l0.06,-0.48l-0.08,-0.44l-0.39,-0.52l-0.41,-0.12l-0.25,-0.55l-0.39,-0.37l-0.6,-1.46l0.49,-0.09l0.64,-0.47l0.37,-0.01l0.36,-0.23l1.56,0.25l0.38,-0.1l0.15,-0.57l-0.75,-0.62l-0.83,-0.27l-0.64,0.0l-0.98,0.33l-0.55,0.58l-0.65,-0.49l-0.11,-0.29l-0.55,-0.08l0.23,-0.38l-0.2,-0.67l-0.3,-0.01l-0.45,0.3l-0.18,-0.09l-0.33,0.19l-0.85,-0.15l-0.51,0.05l-0.93,0.54l-0.63,-0.12l-0.41,-0.23l-0.48,-0.05l-0.65,0.18l-0.29,-0.03l-0.61,0.32l-0.26,0.3l-0.09,0.42l-0.43,-0.13l-0.68,0.1l-0.55,0.31l-0.65,0.08l-0.57,0.21l-0.42,0.37l-0.15,0.46l-0.6,0.29l-0.6,0.01l-0.33,-0.24l-0.19,-0.75l-0.42,-0.34l-0.33,-0.12l-0.44,0.05l-0.26,0.26l0.14,0.52l0.28,0.07l0.02,0.63l0.32,0.65l0.02,0.67l-0.46,0.14l-0.39,0.32l-0.32,-0.05l-0.53,-0.39l-0.76,-0.31l-0.3,-0.03l-0.52,0.26l0.04,0.67l-0.07,-0.54l-0.29,-0.38l-0.45,0.17l-0.3,0.49l-0.19,-0.37l-0.85,0.2l-0.09,0.06l-0.03,0.5l-0.4,-0.36l-0.35,-0.02l-0.21,0.71l0.08,0.2l-0.35,-0.21l-0.38,0.06l-0.47,-0.19l-0.65,0.34l0.01,0.17l-0.32,0.17l-0.34,0.45l-0.5,0.02l-0.04,0.18l-0.21,0.08l0.0,0.48l-0.21,0.29l-0.05,0.39l0.34,0.39l0.59,-0.1l0.36,0.39l0.52,0.29l-0.03,0.37l0.15,0.4l0.38,0.33l0.0,0.52l-0.33,0.14l-0.48,0.42l-0.52,-0.03l-0.47,0.23l-0.85,-0.45l-0.39,0.03l-0.33,0.34l-0.15,-0.02l-0.08,0.15l-0.17,-0.11l-0.49,0.0l-0.37,0.68l-0.8,-0.11l-0.42,0.08l-0.37,0.3l-0.02,0.34l-0.05,-0.14l-0.37,-0.26l-0.38,0.26l-0.05,0.14l-0.21,-0.12l-0.38,0.21l-0.29,-0.09l-0.37,0.09l-0.5,-0.44l-0.48,-0.15l-1.0,0.59l-0.12,-0.1l-0.35,0.16l-0.42,-0.16l-0.48,0.3l-0.09,-0.34l-0.3,-0.29l-0.39,-0.0l-0.43,0.31l-0.22,0.36l-0.4,-0.17l-0.35,0.36l-0.42,-0.07l-0.41,-0.46l-0.41,0.09l-0.34,0.26l-0.55,-0.13l-0.15,0.1l-0.32,-0.07l-0.78,0.14l-0.41,-0.05l-0.31,0.14l-0.22,0.28l0.03,0.47l0.12,0.1l0.0,0.5l-0.36,-0.03l-0.17,0.19l-0.67,-0.23l-0.41,-0.28l-0.36,0.12l-0.17,0.24l-0.19,-0.25l-0.66,0.27l-0.57,0.09l-0.31,-0.22l-0.27,0.18l-0.14,-0.63l-0.41,-0.25l-0.44,0.09l-0.29,0.36l-0.49,0.09l-0.19,-0.09l-0.2,0.35l-0.03,-0.25l-0.28,-0.29l-0.53,-0.13l-1.34,-0.02l-0.66,0.34l-0.42,-0.34l-0.53,-0.02l-0.88,0.31l-0.74,0.12l-0.17,0.14l-0.15,0.37l0.04,0.2l-0.34,-0.03l-0.42,0.3l-0.09,0.27l-0.29,0.16l-0.22,-0.25l-0.39,-0.03l-0.39,0.2l-0.58,-0.33l-0.87,-0.21l-0.37,-0.18l-0.09,-0.39l-0.39,-0.15l-0.28,0.02l-0.17,0.13l-0.67,-0.68l-0.42,0.02l-0.8,-0.23l-0.32,0.23l-0.41,0.02ZM106.4,539.35l-0.02,0.01l-0.0,0.03l0.02,-0.04ZM106.43,539.32l0.01,-0.01l-0.01,0.0l-0.0,0.01ZM111.57,518.06l-0.28,0.1l-0.37,0.21l0.38,-0.38l0.27,0.08ZM135.54,477.36l-0.14,0.2l-0.03,0.01l0.06,-0.2l0.11,-0.01ZM165.25,532.53l-0.7,0.04l-0.06,-0.16l0.39,-0.18l0.33,-0.39l0.85,-0.3l-0.33,0.55l-0.37,0.09l-0.1,0.36ZM161.82,535.36l0.25,0.0l0.0,0.01l-0.28,0.13l0.03,-0.14ZM158.22,525.53l0.0,-0.0l-0.0,0.0l-0.0,-0.0ZM157.41,525.32l-0.03,-0.01l0.01,-0.01l0.02,0.02ZM141.51,529.3l0.28,0.11l0.27,0.23l-0.18,0.15l-0.38,0.01l-0.06,-0.1l0.11,-0.12l-0.03,-0.28ZM130.96,537.03l0.02,0.01l-0.03,0.02l0.0,-0.03ZM107.99,539.38l0.13,-0.03l0.06,0.1l-0.11,0.04l-0.07,-0.1ZM105.8,540.76l0.01,0.03l-0.02,0.0l0.0,-0.03l0.01,-0.0ZM98.05,537.96l0.0,0.06l-0.04,0.0l0.04,-0.07ZM189.71,556.2l0.09,-0.87l0.26,-0.09l0.03,0.48l-0.38,0.49ZM196.77,565.5l0.54,-0.11l0.83,0.29l0.38,-0.07l0.81,-0.66l0.46,-1.03l0.4,0.03l0.29,-0.09l0.5,-0.42l0.14,-0.26l0.0,-0.34l1.03,0.18l1.86,-0.26l0.42,0.76l-0.02,0.36l0.38,0.82l-0.16,0.4l-0.33,0.23l-0.1,0.5l0.11,0.21l-0.15,0.37l0.08,0.6l0.16,0.27l0.65,0.49l-0.02,0.41l0.25,0.63l0.33,0.27l0.06,0.43l-0.19,0.35l0.18,1.36l1.21,1.64l0.21,1.03l-0.69,-0.21l-0.4,0.06l-0.33,0.42l-0.51,0.26l-0.04,0.35l-0.41,0.21l-0.2,0.31l-0.42,-1.04l-0.8,-0.71l0.15,-0.53l-0.14,-0.43l-0.05,-0.8l0.15,-0.11l0.35,-1.25l-0.24,-0.23l0.05,-0.09l-0.14,-0.02l0.05,-0.08l-0.1,0.06l-0.13,-0.13l-0.11,0.1l-0.03,-0.1l0.14,-0.2l0.38,-2.06l-0.06,-1.21l0.61,-1.16l0.04,-0.36l-0.68,-0.27l-0.56,0.83l-0.22,-0.13l-0.44,0.09l-0.08,0.44l0.07,0.14l-0.37,0.38l0.23,1.2l-0.43,0.98l0.02,1.52l-0.15,0.39l0.01,0.5l-0.3,0.34l-0.12,2.12l-0.33,0.4l-0.18,-0.2l-0.05,-0.31l0.12,-1.48l-0.25,-0.33l-0.54,0.11l-0.1,0.15l-0.79,-0.08l-0.02,-0.13l0.29,-0.11l0.15,-0.25l0.25,-0.95l-0.11,-0.11l-0.07,-1.31l0.94,0.09l0.44,-0.41l-0.08,-0.36l-0.7,-0.48l-0.22,0.08l0.04,-0.97l-0.25,-0.3l-0.34,-0.05l-0.39,0.67l-0.26,0.08l-0.24,0.42l0.35,0.35l-0.2,0.26l-0.04,-0.39l-0.49,-0.25l0.3,-0.64l-0.28,-0.55l-0.26,-0.02l-0.13,-0.53l-0.45,-0.19l-0.25,0.33l-0.21,-0.55ZM207.28,574.49l0.35,0.91l-0.28,0.4l0.04,0.74l0.38,1.41l-0.0,1.31l0.27,1.06l0.37,3.3l0.33,1.42l0.09,1.05l-0.6,0.55l0.03,0.61l0.79,0.61l-0.55,0.81l0.04,0.5l0.56,0.6l-0.11,0.33l0.03,0.54l-0.18,0.59l0.14,0.3l0.2,0.15l0.87,0.27l1.35,1.98l1.13,0.85l0.3,0.83l0.53,0.45l0.04,0.84l0.76,0.62l0.47,0.11l0.02,0.18l-0.21,0.82l-0.71,0.53l-0.36,0.55l-0.03,0.7l-0.35,0.74l0.06,1.04l-0.18,0.6l0.03,0.38l-0.44,0.21l-1.4,1.54l-0.43,0.34l-0.48,0.17l-0.19,-0.14l-0.26,0.0l0.14,-0.54l-0.14,-0.44l-0.65,0.05l-0.07,0.14l-0.09,-0.51l0.26,-0.08l0.11,0.14l0.51,0.15l1.31,-0.89l0.77,-0.71l-0.23,-0.63l-0.45,0.06l0.0,-0.13l-0.38,-0.38l-0.52,0.14l0.69,-1.91l0.27,-1.72l-0.35,-0.25l-0.04,-0.39l-0.25,-0.6l0.53,-0.19l0.37,-0.39l0.16,-0.48l-0.44,-0.25l-0.44,0.1l-0.63,0.36l-0.42,0.05l-0.56,-0.3l-0.16,0.11l-0.21,-0.09l-1.07,0.31l-0.64,-0.05l0.28,-0.15l0.18,-0.31l0.3,-1.03l0.32,0.01l0.78,0.43l0.33,0.02l0.69,-0.35l-0.04,-0.49l-0.35,-0.21l-0.38,0.04l-0.84,-0.44l0.07,-0.93l-0.22,-0.31l-0.44,-0.27l0.05,-0.48l-0.4,-0.66l0.33,-0.41l-0.17,-0.67l-0.35,-0.02l0.13,-0.08l-0.03,-0.23l0.53,-0.28l0.22,-0.59l-0.39,-0.29l-0.68,0.21l-0.41,-0.64l-0.06,-0.43l0.37,-0.24l0.24,-1.12l-0.41,-0.33l-0.48,0.19l-0.14,-0.07l-0.27,-0.39l0.15,-0.23l-0.22,-0.49l-0.49,-0.26l-0.25,0.04l-0.19,0.17l-0.21,-0.25l0.13,-0.23l0.53,0.23l1.01,-0.02l0.4,-0.16l0.16,-0.2l0.05,-0.15l-0.28,-0.52l-0.5,0.1l-0.44,-0.15l0.25,-0.38l-0.01,-0.29l-0.5,-0.27l0.09,-0.26l0.62,-0.0l0.34,0.77l0.29,0.26l0.33,0.01l0.28,-0.17l0.05,-0.48l-0.23,-0.25l-0.4,-1.14l-0.72,-1.0l0.18,-0.54l0.96,0.79l0.3,0.11l0.45,-0.45l-0.05,-0.21l-0.35,-0.47l-1.25,-0.77l-0.25,-0.05l0.21,-0.28l-0.18,-0.43l0.22,-0.16l0.32,-0.62l-0.5,-0.34l-0.27,0.02l-0.35,0.25l-0.02,0.14l-0.39,0.35l-0.1,-0.38l0.12,-0.22l0.01,-0.49l0.28,-0.4l0.39,-0.23l0.18,-0.64l0.25,-0.15l0.25,-0.35l0.34,0.08l0.45,-0.24ZM208.9,604.79l-0.14,0.6l-0.04,-0.01l0.1,-0.48l0.08,-0.11ZM210.37,602.77l-0.57,0.31l-0.25,-0.22l-0.61,0.16l0.07,-0.21l0.55,-0.32l0.81,0.28ZM206.97,596.06l-0.04,0.0l0.0,-0.01l0.04,0.01ZM206.76,596.37l-0.08,0.41l0.26,0.3l-0.54,0.46l-0.46,-0.21l-0.29,0.43l0.05,0.44l-0.14,-0.23l0.12,-0.78l0.24,-0.06l0.03,-0.15l0.5,-0.05l0.3,-0.58ZM205.35,581.23l-0.08,-0.02l-0.02,-0.09l0.1,0.11ZM174.62,442.02l0.16,-0.03l0.01,0.02l-0.12,0.04l-0.05,-0.03ZM149.15,463.88l-0.48,-0.68l0.17,-0.34l0.08,-0.53l0.46,0.23l-0.22,1.31ZM139.58,480.85l-0.2,-0.16l-0.1,-0.17l0.02,-0.02l0.29,0.35ZM110.4,493.59l-0.04,0.0l-0.0,-0.01l0.04,-0.0l0.0,0.0ZM207.1,600.51l-0.19,-0.22l-0.19,-0.6l0.65,-0.29l-0.24,0.42l-0.04,0.69ZM206.1,600.7l-0.0,0.01l0.0,-0.01l0.0,0.0ZM207.6,599.25l0.23,-0.53l-0.13,-0.23l0.59,-0.1l0.3,-0.26l-0.01,-0.13l0.38,-0.35l0.16,-0.57l0.54,-0.04l0.23,1.16l0.07,1.2l-0.18,0.24l0.03,0.13l-0.16,0.03l-0.32,0.84l-0.28,0.19l-0.18,-0.34l0.21,-1.61l-0.4,-0.43l-0.4,0.19l-0.2,0.53l-0.47,0.08ZM206.69,592.9l0.19,-0.29l0.19,0.3l0.37,0.14l-0.02,0.58l-0.25,0.02l-0.48,-0.74ZM204.84,593.41l0.21,-0.32l0.24,-0.03l-0.06,0.39l0.08,0.1l0.28,0.16l0.34,0.0l0.38,0.28l0.05,0.19l-0.37,0.12l0.06,0.4l-0.09,0.26l-0.26,0.09l0.16,-0.53l-0.3,-0.42l-0.07,-0.28l-0.66,-0.41ZM205.68,592.74l0.12,-0.12l0.05,0.06l-0.04,0.06l-0.14,0.0ZM205.02,590.02l0.06,-0.2l0.28,-0.11l0.2,-0.33l-0.02,-0.41l0.06,-0.13l0.29,1.13l-0.65,-0.16l-0.2,0.2ZM202.23,585.03l0.13,-0.03l0.27,0.18l0.93,0.73l0.44,0.47l0.07,0.52l0.45,0.21l0.13,-0.03l0.22,-0.36l0.14,0.05l0.18,0.49l-0.02,0.28l-0.32,0.23l-0.18,0.94l-0.13,-1.28l-0.2,-0.03l-0.21,-0.45l-0.58,0.05l-0.22,0.89l0.07,0.36l0.17,0.15l-0.24,0.37l0.23,0.32l0.16,0.47l-0.2,0.16l-0.8,-0.56l-0.44,0.1l-0.03,0.21l-0.22,-0.05l0.18,-0.54l0.13,-0.1l-0.06,-0.28l0.1,0.01l0.05,-0.14l-0.04,-0.41l0.48,-0.79l0.11,-0.48l-0.25,-0.42l0.07,-0.26l-0.3,-0.33l-0.26,-0.63ZM204.11,591.3l0.32,-0.24l0.41,0.24l0.3,-0.01l-0.25,0.23l-0.09,0.42l-0.18,0.06l-0.19,-0.01l-0.32,-0.68ZM201.15,595.61l0.39,-0.04l0.71,-0.6l0.17,-0.41l-0.02,-0.35l-0.29,-0.08l0.28,-0.75l0.11,0.2l0.52,0.24l0.23,0.34l0.37,0.27l0.43,1.44l-0.06,0.78l-0.11,0.23l-0.18,-0.04l-0.49,0.47l0.07,0.29l-0.79,0.31l-0.07,0.49l0.07,0.41l0.53,0.0l-0.02,0.12l0.39,0.47l0.21,-0.01l0.23,0.24l0.23,-0.06l0.16,0.27l0.04,0.2l-0.39,-0.09l-0.34,0.45l-0.07,0.31l0.2,0.39l0.69,0.17l-0.31,0.02l-0.39,0.51l-0.49,0.15l0.01,-0.38l-0.25,-0.1l-0.13,-0.29l0.03,-0.93l-0.19,-0.86l-0.55,0.06l-0.09,-0.43l0.17,-0.51l-0.46,-0.42l0.16,-0.04l-0.02,-0.49l-0.3,-0.24l0.21,-0.25l0.29,-0.11l0.37,0.02l0.22,-0.65l-0.53,-0.28l-1.08,0.01l-0.17,-0.19l0.34,-0.25ZM203.12,602.04l0.1,0.62l0.38,0.29l-0.14,0.15l-0.01,0.33l0.19,0.34l-0.25,0.06l-0.09,0.28l-0.22,-0.12l0.22,-0.36l-0.34,-1.17l0.11,-0.07l-0.04,-0.22l0.1,-0.14ZM203.35,597.92l0.0,0.0l-0.0,-0.0l0.0,-0.0ZM202.64,592.33l-0.02,-0.23l-0.18,-0.27l-0.57,-0.24l-0.38,-0.33l0.04,-0.12l0.23,-0.13l0.24,0.13l0.03,0.3l0.41,0.29l0.13,-0.01l0.16,-0.25l0.01,0.41l0.15,0.18l-0.07,0.32l-0.19,-0.05ZM199.97,583.58l0.25,-0.55l0.45,-0.17l-0.03,-0.41l0.33,-0.19l0.26,0.24l0.53,-0.27l-0.12,0.49l-0.21,0.32l-0.34,-0.04l-0.38,0.34l-0.32,-0.04l-0.11,0.23l-0.31,0.06ZM202.63,581.99l-0.01,-0.02l0.01,0.0l0.0,0.02ZM202.51,581.14l-0.13,0.03l-0.03,0.48l-0.5,0.27l-0.01,-0.56l-0.44,-0.14l-0.03,-0.19l0.6,-0.09l0.24,-0.62l-0.38,-0.27l-0.47,-0.02l-0.09,-0.31l0.16,-1.0l0.22,-0.37l0.21,-0.81l0.17,-0.88l-0.05,-0.32l0.42,-0.42l0.65,0.16l0.25,0.34l-0.08,0.37l-0.18,0.13l0.02,0.26l-0.13,0.04l-0.1,0.73l-0.26,0.61l0.01,0.1l0.33,0.12l0.15,1.13l-0.17,0.29l0.4,0.49l-0.13,0.37l-0.51,-0.18l-0.16,0.25ZM203.26,574.86l0.1,0.02l0.05,0.13l-0.14,-0.13l-0.0,-0.02ZM200.56,588.29l-0.08,-0.33l-0.15,-0.02l0.1,-0.05l0.11,0.08l0.09,0.31l-0.07,0.02ZM200.12,587.92l-0.07,-0.01l-0.0,-0.01l0.01,-0.0l0.07,0.02ZM200.37,586.97l-0.16,-0.4l-0.43,-0.09l0.1,-0.17l0.4,0.09l0.16,-0.21l0.28,0.17l0.27,-0.12l0.0,0.58l-0.09,0.12l-0.26,0.22l-0.28,-0.19ZM201.49,592.7l-0.1,-0.02l0.02,-0.11l0.12,-0.03l-0.04,0.17ZM200.65,592.73l-0.02,0.02l-0.16,0.03l0.09,-0.08l0.09,0.04ZM195.39,575.1l0.13,-0.1l0.32,0.81l0.27,0.26l0.58,-0.41l-0.42,-1.39l0.16,0.12l0.49,-0.01l0.11,-0.88l0.2,0.31l0.55,0.02l0.21,-0.32l0.27,-0.08l0.58,0.85l-0.37,0.18l-0.69,-0.15l-0.15,0.28l-0.14,-0.08l-0.56,0.2l0.03,0.46l0.24,0.6l0.52,0.51l0.21,0.54l0.4,0.42l-0.17,0.22l0.09,0.51l0.4,0.15l0.12,0.22l0.3,0.1l0.81,-0.05l-0.16,0.99l-0.21,0.51l-0.26,-0.12l-1.86,-3.21l-0.28,-0.23l-0.62,0.31l0.06,0.43l-0.27,0.19l0.22,0.69l0.2,0.1l-0.12,0.12l-0.06,0.45l0.16,0.09l0.06,0.25l-0.29,0.13l-0.08,-0.6l-0.36,-0.69l0.31,-0.17l-0.14,-0.48l-0.2,-0.19l0.01,-0.36l-0.25,-0.56l0.02,-0.34l-0.25,-0.15l-0.11,-0.46ZM198.57,575.78l0.52,-0.38l0.44,-0.12l0.69,0.39l0.05,0.19l0.37,0.31l0.02,0.18l-0.14,0.22l-0.34,-0.45l-0.61,-0.13l-0.19,0.37l0.01,0.19l0.26,0.64l-0.2,-0.12l-0.87,-1.29ZM197.4,579.96l0.2,0.09l0.33,-0.11l-0.02,0.3l0.46,0.2l0.23,0.33l-0.16,0.05l-0.02,0.25l0.08,0.33l-0.06,0.32l0.21,0.36l-0.12,0.88l0.11,0.42l-0.12,0.06l-0.17,0.59l-0.23,1.9l-0.31,0.87l-0.21,-0.03l-0.2,0.38l-0.03,0.54l-0.52,1.19l-0.15,-0.9l-0.02,-1.09l0.35,-0.03l0.67,-0.56l-0.07,-0.72l-0.19,-0.05l0.01,-0.57l-0.14,-0.2l-0.2,-0.01l-0.2,-0.65l-0.51,-0.01l0.33,-0.22l0.02,-0.34l0.7,-0.09l0.2,-0.29l-0.1,-0.53l-0.52,-0.27l-0.0,-0.1l0.61,-0.26l-0.29,-1.24l-0.54,-0.23l0.25,0.04l0.27,-0.16l0.1,-0.43ZM195.81,580.52l-0.11,0.19l0.0,-0.37l0.11,0.18ZM195.45,581.71l-0.18,0.24l-0.21,-0.02l0.06,-0.09l0.33,-0.12ZM166.9,538.83l0.06,-0.04l0.0,0.06l-0.06,-0.02ZM167.11,538.95l0.14,0.08l0.02,0.11l-0.16,-0.18ZM161.05,540.17l0.02,-0.05l0.3,0.02l0.37,-0.3l0.19,-0.01l-0.35,0.19l-0.13,0.29l-0.39,-0.13ZM135.33,540.66l0.22,0.31l0.6,-0.08l0.07,-0.42l-0.07,-0.17l0.71,0.45l0.28,-0.22l0.24,-0.69l0.19,-0.18l0.34,0.1l-0.17,0.51l0.11,0.35l-0.07,0.25l0.28,0.22l-0.63,0.48l0.06,-0.1l-0.16,-0.67l-0.37,-0.01l-0.74,0.65l-0.1,-0.23l-0.47,0.05l-0.18,0.2l-0.16,-0.35l0.03,-0.21l-0.1,-0.04l0.11,-0.21ZM138.62,541.16l-0.18,-0.04l0.14,-0.08l0.05,0.11ZM125.8,544.87l0.6,-0.15l0.09,0.05l-0.61,0.5l-0.08,-0.39ZM126.2,543.5l0.18,-0.98l-0.32,-0.49l0.3,-0.05l0.26,-0.39l0.25,-0.03l0.28,-0.29l0.43,0.23l0.18,-0.14l0.44,0.12l0.16,-0.28l0.18,-0.04l0.36,0.08l0.39,0.35l-0.66,0.08l-0.0,0.49l0.42,0.33l-0.32,0.72l0.07,0.46l-0.06,0.52l0.34,0.82l0.44,0.2l0.31,-0.36l-0.14,-0.65l0.13,-0.61l0.23,-0.4l0.3,0.14l0.35,-0.29l0.43,0.11l0.52,-0.04l0.21,-0.24l0.14,-0.02l0.24,0.16l0.21,-0.03l0.17,0.33l0.67,-0.25l0.26,-0.42l0.27,0.22l-0.19,0.28l-0.04,0.41l0.26,0.39l0.48,-0.04l0.32,-0.45l0.28,0.19l0.45,-0.19l0.37,0.14l-0.13,0.29l-0.77,0.26l-0.2,0.37l0.19,0.45l-0.09,0.59l0.3,0.21l0.31,0.07l-0.64,0.25l-0.16,-0.22l-0.29,-0.1l-0.07,-0.2l-0.24,-0.18l-0.12,-0.34l-0.95,-0.71l-0.26,0.2l-0.66,0.22l-0.18,0.25l0.16,0.4l-0.16,-0.05l-0.3,-0.39l-0.43,0.12l-0.28,0.54l-0.86,-0.26l-0.1,0.11l-0.26,-0.21l-0.24,-0.04l-0.25,0.09l-0.22,0.45l-0.12,-0.06l0.11,-0.41l-0.2,-0.39l-0.49,-0.11l-0.3,0.07l0.05,-0.16l-0.49,-0.6l-0.82,-0.56l-0.36,-0.07ZM134.27,542.42l-0.01,-0.05l0.17,-0.06l0.0,0.05l-0.16,0.07ZM132.2,545.58l0.25,-0.03l0.37,0.14l0.22,0.62l-0.1,0.08l-0.21,-0.1l0.05,-0.11l-0.29,-0.51l-0.28,-0.08ZM126.26,546.94l-0.15,0.05l-0.01,-0.01l0.06,-0.03l0.11,-0.0ZM131.32,541.84l-0.53,-0.58l0.32,-0.33l0.47,-0.02l0.05,0.41l-0.32,0.53ZM105.81,462.39l-0.11,-0.32l0.35,-0.73l0.36,-0.32l0.68,-0.25l-0.18,0.17l0.11,0.32l-0.14,-0.01l0.06,0.34l0.69,0.55l0.17,0.58l0.33,0.45l0.3,0.27l1.18,0.11l0.29,0.2l0.33,0.06l0.24,0.31l-0.01,0.58l0.1,0.26l-0.21,0.31l-0.27,0.11l-0.22,0.43l0.38,0.42l0.17,0.76l0.36,0.34l-0.18,0.36l-0.0,0.32l0.2,0.38l0.45,0.25l-0.07,0.47l0.15,0.3l-0.4,-0.26l-0.47,-0.12l-1.23,0.14l0.06,-0.93l-0.25,-0.52l-0.02,-0.5l-0.15,-0.17l0.25,-0.53l-0.13,-0.43l-0.01,-0.64l-0.26,-0.89l-0.24,-0.37l-0.03,-0.47l-0.8,-0.64l-0.94,-0.23l-0.15,-0.01l-0.0,0.09l-0.53,-0.08l-0.18,-0.48ZM111.34,469.47l0.34,0.23l0.34,-0.0l0.32,0.49l-0.46,0.25l-0.33,-0.58l-0.24,-0.19l0.02,-0.19ZM99.58,492.96l0.13,-0.45l0.36,0.29l0.67,0.85l0.32,0.21l0.39,-0.01l0.4,-0.28l0.18,0.05l0.18,0.25l0.48,0.04l0.28,-0.1l-0.04,0.35l0.68,0.15l0.17,0.26l-0.1,0.36l0.08,0.18l0.27,0.32l0.48,0.17l0.05,0.26l-0.71,0.6l-0.06,0.37l-0.25,0.08l-0.34,0.96l-0.72,-0.21l-0.37,-0.45l-0.21,0.14l-0.22,-0.05l-0.29,-0.37l-0.41,-0.11l-0.21,-0.4l-0.47,-0.4l-0.43,-1.65l0.1,-0.21l-0.16,-0.32l-0.27,-0.19l0.1,-0.37l-0.07,-0.3ZM95.47,539.48l0.12,-0.24l0.1,0.3l0.17,0.12l-0.0,0.16l-0.2,-0.34l-0.19,-0.01ZM88.44,537.17l0.0,-0.02l0.03,0.0l-0.03,0.01ZM77.94,532.86l0.31,-0.91l0.71,0.25l0.4,-0.03l1.64,-0.75l0.19,0.0l0.11,0.36l0.43,0.42l0.29,0.09l0.42,-0.18l0.53,0.24l0.62,-0.02l0.51,0.26l0.41,0.41l0.02,0.57l-0.53,1.12l-0.34,0.06l-0.25,0.24l-0.3,0.0l-0.28,-0.08l-0.42,-0.6l-1.35,-0.96l-0.46,-0.11l-0.79,0.04l-0.43,0.31l-0.25,0.05l-0.89,-0.43l-0.29,-0.34ZM72.06,531.33l0.05,-0.29l0.35,0.02l0.04,0.43l-0.33,-0.2l-0.06,0.1l-0.05,-0.06ZM62.39,530.55l0.16,-0.01l0.12,0.09l-0.08,0.09l-0.2,-0.16ZM62.89,530.86l0.03,0.06l0.02,0.04l-0.11,-0.1l0.06,0.01ZM67.63,532.06l-0.22,-0.27l-0.39,0.07l0.31,-0.15l0.34,0.02l0.42,-0.6l-0.29,-0.36l-0.27,-0.66l-0.29,-0.25l0.08,-0.32l0.43,-0.1l0.43,0.15l0.4,0.29l0.15,0.23l-0.34,0.42l0.08,0.55l-0.1,0.18l-0.36,0.12l-0.04,0.3l-0.13,-0.03l-0.21,0.41ZM66.48,531.55l-0.31,0.29l-0.03,0.08l-0.08,-0.11l0.27,-0.3l-0.12,-0.26l0.07,-0.05l0.18,-0.01l0.03,0.37ZM68.16,529.58l-0.03,-0.02l-0.0,-0.01l0.04,0.03ZM57.55,529.02l0.25,-0.15l0.2,-0.38l0.16,-0.08l0.64,0.01l0.12,0.21l0.37,0.15l0.09,0.15l-0.15,0.14l-0.22,-0.04l-0.65,0.2l-0.42,-0.23l-0.38,0.0ZM60.36,528.86l0.09,-0.37l0.33,-0.35l0.69,-0.04l0.67,0.28l0.23,0.6l-0.17,0.06l-0.19,0.26l-1.26,-0.24l-0.38,-0.2ZM34.78,515.5l0.04,0.03l-0.03,0.13l-0.02,-0.17l0.01,0.0ZM35.78,515.3l0.08,-0.23l-0.1,-0.29l0.37,0.05l0.06,0.52l-0.34,0.04l-0.08,-0.09ZM28.34,509.91l0.02,-0.07l0.04,-0.02l-0.01,0.1l-0.05,-0.01ZM24.83,509.43l0.48,-0.33l0.11,0.34l-0.02,0.11l-0.3,0.01l-0.27,-0.13ZM23.14,507.45l0.08,0.02l-0.03,0.03l-0.05,-0.05ZM21.49,504.95l-0.1,0.01l0.06,-0.23l0.04,0.13l0.0,0.1ZM21.53,504.44l-0.09,0.14l-0.13,-0.33l0.02,-0.27l0.21,0.2l-0.01,0.26ZM14.7,495.17l0.26,0.08l-0.03,0.22l-0.17,-0.02l-0.07,-0.27ZM1.42,466.35l0.24,-0.09l0.22,-0.4l-0.29,-0.43l0.05,-0.12l0.24,0.2l0.16,0.67l0.46,0.46l-0.28,0.18l0.12,0.42l-0.13,-0.01l-0.15,-0.38l-0.53,-0.19l-0.1,-0.31Z",
         "name": "Alaska"
      },
      "US-NJ": {
         "path": "M802.92,165.5l1.3,-1.54l0.47,-1.56l0.49,-0.62l0.53,-1.44l0.1,-2.03l0.67,-1.34l0.92,-0.72l14.17,3.88l-0.26,5.58l-0.5,0.83l-0.13,-0.29l-0.65,-0.06l-0.34,0.44l-0.55,1.45l-0.44,2.7l0.27,1.53l0.64,0.6l1.06,0.13l1.23,-0.45l2.47,0.24l0.67,1.83l-0.16,4.48l0.29,0.46l-0.54,0.44l0.27,0.8l-0.72,0.75l0.46,0.57l-0.2,0.58l0.48,0.6l-0.14,3.74l0.59,0.51l-0.35,1.34l-1.13,1.82l-0.1,0.93l-1.37,0.1l0.11,1.19l0.64,0.8l-0.82,0.56l-0.17,1.14l1.05,0.74l-0.31,0.29l-0.18,-0.44l-0.54,-0.17l-0.49,0.23l-0.43,1.49l-1.27,0.62l-0.2,0.44l0.46,0.55l0.8,0.05l-0.64,1.25l-0.25,1.48l-0.67,0.65l0.19,0.48l0.4,0.04l-0.88,1.56l0.08,0.93l-1.55,1.66l-0.19,-1.61l0.32,-2.04l-0.12,-0.85l-0.59,-0.8l-0.9,-0.26l-1.11,0.36l-0.82,-0.33l-1.51,0.9l-0.31,-0.69l-1.63,-0.92l-1.0,0.06l-0.66,-0.68l-0.7,0.08l-3.26,-1.95l-0.07,-1.7l-1.02,-0.91l0.47,-0.67l-0.0,-0.87l0.42,-0.83l-0.13,-0.72l0.5,-1.17l1.19,-1.16l2.59,-1.51l0.54,-0.86l-0.38,-0.83l0.49,-0.38l0.46,-1.43l1.23,-1.7l2.51,-2.23l0.18,-0.66l-0.48,-0.81l-4.29,-2.67l-0.76,-1.02l-0.9,0.25l-0.48,-0.32l-1.26,-2.41l-1.62,0.01l-1.03,-3.38l1.01,-1.02l0.35,-2.21l-1.88,-1.86Z",
         "name": "New Jersey"
      },
      "US-ME": {
         "path": "M837.19,56.84l0.85,-1.16l1.45,1.68l0.84,0.03l0.36,-2.12l-0.49,-2.18l1.71,0.33l0.72,-0.43l0.21,-0.53l-0.33,-0.69l-1.18,-0.45l-0.45,-0.61l0.17,-1.43l0.83,-2.04l2.05,-2.28l-0.01,-0.99l-0.53,-0.93l1.0,-1.66l0.36,-1.52l-0.23,-0.91l-1.02,-0.34l-0.09,-1.42l-0.41,-0.43l0.54,-0.97l-0.05,-0.63l-1.02,-1.25l0.1,-1.74l0.36,-0.64l-0.17,-0.98l1.19,-1.95l-1.06,-6.19l5.24,-19.09l2.24,-0.25l1.2,3.2l0.56,0.42l2.56,0.53l1.8,-1.76l1.66,-0.85l1.21,-1.74l1.25,-0.13l0.64,-0.48l0.22,-1.45l0.42,-0.3l1.36,0.03l3.71,1.38l1.16,0.96l2.39,1.03l8.78,22.69l0.65,0.64l-0.24,0.96l0.73,1.01l-0.08,1.41l0.56,1.29l0.68,0.46l1.05,-0.13l1.13,0.56l0.98,0.09l2.46,-0.57l0.41,0.94l-0.57,1.43l1.72,1.84l0.32,2.68l2.75,1.63l0.98,-0.12l0.46,-0.75l-0.07,-0.5l1.22,0.23l3.0,2.75l0.04,0.47l-0.52,-0.13l-0.38,0.41l0.19,0.77l-0.77,-0.14l-0.34,0.4l0.16,0.63l1.87,1.58l0.15,-0.88l0.38,-0.17l0.81,0.31l0.26,-0.83l0.33,0.4l-0.3,0.85l-0.52,0.19l-1.16,3.25l-0.63,-0.03l-0.31,0.44l-0.57,-1.04l-0.72,0.04l-0.3,0.51l-0.56,0.07l-0.02,0.49l0.59,0.84l-0.91,-0.44l-0.31,0.63l0.27,0.51l-1.2,-0.26l-0.36,0.3l-0.36,0.78l0.08,0.45l0.44,0.08l0.09,1.2l-0.38,-0.57l-0.54,-0.05l-0.39,0.46l-0.19,1.09l-0.5,-1.52l-1.13,0.03l-0.67,0.76l-0.34,1.48l0.6,0.61l-0.82,0.64l-0.7,-0.45l-0.71,1.05l0.11,0.64l0.99,0.6l-0.35,0.22l-0.09,0.82l-0.46,-0.2l-0.87,-1.8l-1.04,-0.44l-0.38,0.22l-0.45,-0.41l-0.56,0.64l-1.25,-0.17l-0.25,0.86l0.78,0.38l0.01,0.36l-0.52,-0.05l-0.55,0.41l-0.08,0.69l-0.51,-1.01l-1.17,-0.0l-0.15,0.64l0.53,0.86l-1.42,0.98l0.85,1.09l0.1,1.05l0.54,0.64l-0.97,-0.39l-0.96,0.23l-1.2,-0.4l-0.19,-0.9l0.74,-0.29l-0.09,-0.55l-0.43,-0.49l-0.67,-0.11l-0.3,0.33l-0.27,-2.35l-0.38,-0.21l-1.1,0.28l0.07,1.95l-1.82,1.94l0.03,0.5l1.27,1.44l-0.63,0.96l-0.14,3.85l0.79,1.39l-0.56,0.54l0.01,0.63l-0.5,0.56l-0.8,-0.18l-0.44,0.93l-0.62,-0.05l-0.42,-1.14l-0.73,-0.2l-0.5,1.03l0.12,0.68l-0.44,0.6l0.15,2.4l-0.97,-0.99l0.12,-1.27l-0.25,-0.59l-0.81,0.3l-0.06,2.0l-0.44,-0.24l0.13,-1.54l-0.48,-0.39l-0.67,0.49l-0.73,3.04l-0.77,-1.81l0.05,-1.5l-0.76,0.06l-1.03,2.77l0.52,0.54l0.72,-0.27l0.94,2.01l-0.29,-0.58l-0.52,-0.22l-0.65,0.31l-0.06,0.64l-1.38,-0.08l-2.12,3.19l-0.51,1.87l0.3,0.59l-0.67,0.66l0.51,0.42l0.91,-0.23l0.37,0.91l-0.76,0.31l-0.2,0.4l-0.41,-0.04l-0.5,0.57l-0.13,1.03l0.68,1.35l-0.07,0.67l-0.77,1.3l-0.93,0.62l-0.39,1.07l-0.09,1.28l0.44,0.88l-0.37,2.8l-0.8,-0.32l-0.4,0.6l-1.03,-0.74l-0.59,-1.83l-0.94,-0.36l-2.38,-1.94l-0.8,-3.42l-13.69,-35.19ZM864.39,80.9l0.09,0.26l-0.08,0.23l0.03,-0.28l-0.04,-0.2ZM865.81,81.1l0.47,0.69l-0.04,0.47l-0.32,-0.24l-0.11,-0.92ZM868.11,77.94l0.43,0.81l-0.16,0.14l-0.42,-0.18l0.15,-0.77ZM877.3,64.42l-0.14,0.2l-0.03,-0.23l0.17,0.03ZM873.48,74.78l0.01,0.02l-0.02,0.03l0.01,-0.05ZM882.98,63.24l0.02,-1.16l0.4,-0.66l-0.18,-0.44l0.4,-0.5l0.62,-0.12l1.56,1.32l-0.48,0.65l-1.08,0.06l-0.26,0.44l0.59,1.29l-0.99,-0.16l-0.15,-0.56l-0.44,-0.16ZM879.6,65.86l0.62,0.39l-0.35,0.3l0.16,0.95l-0.4,-0.62l0.18,-0.53l-0.21,-0.49ZM878.42,70.38l0.09,-0.01l0.47,-0.09l-0.24,0.45l-0.32,-0.36Z",
         "name": "Maine"
      },
      "US-MD": {
         "path": "M742.19,220.07l-2.1,-9.88l19.86,-4.71l-0.65,1.27l-0.95,0.09l-1.54,0.82l0.16,0.69l-0.41,0.49l0.23,0.76l-1.76,0.52l-1.48,0.05l-1.12,-0.36l0.2,-0.35l-0.3,-0.49l-1.11,-0.29l-0.46,1.78l-1.61,2.82l-1.38,-0.37l-1.03,0.63l-0.4,1.24l-1.59,1.92l-0.36,1.03l-0.88,0.46l-1.3,1.86ZM762.24,204.93l37.01,-9.59l8.42,25.88l0.48,0.25l8.46,-2.33l0.26,0.69l0.6,0.02l0.39,0.93l0.52,-0.06l-0.37,1.93l-0.13,-0.26l-0.47,0.07l-0.72,0.86l-0.15,2.66l-0.6,0.19l-0.35,0.7l-0.01,1.45l-3.64,1.55l-0.36,0.75l-2.25,0.46l-0.56,0.65l-0.31,-1.05l0.5,-0.31l0.86,-1.83l-0.41,-0.5l-0.43,0.12l0.06,-0.48l-0.44,-0.41l-2.29,0.66l0.3,-0.59l1.15,-0.84l-0.18,-0.69l-1.36,-0.15l0.37,-2.2l-0.19,-1.01l-0.91,0.17l-0.52,1.75l-0.35,-0.67l-0.61,-0.06l-0.44,0.47l-0.49,1.38l0.54,1.0l-2.89,-2.07l-0.43,-0.18l-0.6,0.37l-0.74,-0.74l0.36,-0.82l-0.04,-0.83l0.76,-0.6l-0.08,-1.33l2.08,0.06l0.88,-0.46l0.36,-0.9l-0.33,-1.4l-0.43,-0.04l-0.52,1.3l-0.39,0.1l-1.05,-0.69l0.05,-0.39l-0.52,-0.27l-0.55,0.23l-0.23,-0.66l-0.73,0.1l-0.12,0.29l0.07,-0.72l1.14,-0.39l0.21,-1.04l-0.54,-0.54l-0.57,0.71l-0.2,-0.51l0.87,-0.87l-0.26,-0.65l-0.54,-0.07l-0.09,-0.47l-0.42,-0.26l-0.35,0.16l-0.65,-0.51l0.87,-0.8l-0.24,-1.01l0.92,-2.36l-0.18,-0.43l-0.46,0.02l-0.66,0.67l-0.56,-0.16l-0.6,0.96l-0.75,-0.59l0.46,-3.53l0.59,-0.52l0.06,-0.6l4.22,-1.26l0.11,-0.71l-0.51,-0.28l-2.37,0.46l0.75,-1.25l1.43,-0.07l0.35,-0.5l-0.99,-0.65l0.42,-1.88l-0.63,-0.32l-1.18,1.81l0.04,-1.46l-0.6,-0.34l-0.67,1.1l-1.62,0.68l-0.3,1.63l0.39,0.53l0.64,0.11l-1.44,1.91l-0.21,-1.61l-0.64,-0.41l-0.61,0.72l0.08,1.44l-0.85,-0.28l-1.15,0.65l0.03,0.71l1.01,0.24l-0.36,0.53l-0.83,0.23l-0.05,0.34l-0.45,-0.03l-0.34,0.65l1.15,1.16l-1.88,-0.63l-1.21,0.6l0.17,0.69l1.57,0.55l0.92,0.9l0.72,-0.13l0.56,0.72l-0.98,-0.05l-1.14,1.36l0.33,0.77l1.57,0.87l-0.67,0.13l-0.21,0.42l0.79,1.06l-0.3,0.56l0.33,0.94l0.57,0.45l-0.5,1.07l1.0,1.22l0.99,3.47l0.62,0.82l2.08,1.57l0.42,0.78l-0.58,0.18l-0.65,-0.73l-1.46,-0.28l-1.65,-1.22l-1.35,-3.09l-0.74,-0.66l-0.3,0.37l0.12,0.7l1.3,3.47l1.16,1.27l2.06,0.69l1.04,1.08l0.63,0.13l0.91,-0.36l-0.02,1.09l1.67,1.5l0.11,1.08l-0.9,-0.33l-0.52,-1.26l-0.64,-0.44l-0.45,0.05l-0.12,0.44l0.27,0.77l-0.68,0.1l-0.66,-0.8l-1.41,-0.64l-2.39,0.66l-0.7,-0.65l-0.72,-1.46l-1.27,-0.68l-0.46,0.15l0.01,0.48l1.15,1.78l-0.23,-0.07l-1.63,-1.15l-1.68,-2.23l-0.45,-0.01l-0.37,1.42l-0.33,-0.78l-0.74,0.2l-0.21,0.27l0.33,0.72l-0.1,0.54l-0.76,0.54l-0.95,-1.45l0.06,-1.65l0.76,-0.6l-0.13,-0.81l0.71,-0.39l0.2,-1.59l1.07,-1.03l-0.01,-1.02l-0.47,-0.84l1.25,-2.17l-0.14,-0.54l-2.73,-1.61l-0.55,0.14l-0.63,1.08l-1.87,-0.23l-0.53,-0.81l-1.12,-0.49l-2.42,0.1l-1.25,-0.87l0.6,-1.34l-0.41,-0.96l-1.19,-0.28l-0.89,-0.63l-2.7,0.11l-0.36,-0.22l-0.12,-1.24l-1.04,-0.58l0.09,-1.18l-0.51,-0.28l-0.48,0.2l-0.24,-0.62l-0.5,-0.13l0.24,-0.81l-0.46,-0.57l-0.69,-0.11l-1.81,0.69l-2.23,-1.21ZM791.61,211.89l1.15,0.15l0.29,0.15l-0.51,0.29l-0.92,-0.6ZM804.73,225.05l-0.02,0.32l-0.21,-0.13l0.23,-0.19ZM808.72,228.4l-0.14,0.28l-0.13,0.07l0.01,-0.23l0.25,-0.12ZM799.19,220.15l-0.05,0.01l-0.02,0.01l0.05,-0.03l0.02,0.01ZM798.85,220.3l-0.23,0.54l-0.17,0.12l0.14,-0.59l0.27,-0.07ZM797.54,216.38l-0.28,0.3l-0.72,-0.26l0.02,-0.31l0.26,-0.36l0.72,0.64ZM796.15,212.56l-0.33,0.77l-0.6,0.24l0.01,-1.45l0.92,0.45ZM803.88,228.23l0.1,-0.1l0.11,0.06l-0.21,0.03Z",
         "name": "Maryland"
      },
      "US-AR": {
         "path": "M499.92,377.33l-1.49,-37.58l-4.53,-23.63l37.83,-2.71l39.17,-3.76l0.8,1.57l1.02,0.69l0.11,1.73l-0.77,0.56l-0.22,0.92l-1.42,0.93l-0.29,1.03l-0.83,0.54l-1.19,2.56l0.02,0.7l0.53,0.25l10.98,-1.52l0.87,0.91l-1.18,0.36l-0.52,0.95l0.25,0.49l0.84,0.39l-3.61,2.69l0.02,0.84l0.83,1.01l-0.59,1.14l0.62,0.95l-1.42,0.74l-0.11,1.43l-1.45,2.07l0.12,1.62l0.92,3.05l-0.14,0.27l-1.09,-0.01l-0.32,0.26l-0.5,1.71l-1.52,0.95l-0.04,0.51l0.8,0.89l0.05,0.63l-1.11,1.2l-2.03,1.13l-0.21,0.62l0.43,0.98l-0.19,0.26l-1.24,0.04l-0.42,0.67l-0.32,1.87l0.47,1.55l0.03,3.04l-1.28,1.09l-1.55,0.14l0.23,1.47l-0.21,0.48l-0.93,0.25l-0.59,1.75l-1.49,1.19l-0.02,0.93l1.4,0.75l-0.02,0.68l-1.24,0.3l-2.24,1.23l0.04,0.67l0.99,0.8l-0.45,1.13l0.54,1.36l-1.09,0.61l-1.9,2.56l0.52,0.7l1.01,0.48l0.01,0.56l-0.99,0.29l-0.42,0.64l0.51,0.83l1.64,0.99l0.07,1.75l-0.59,0.98l-0.09,0.84l0.29,0.4l1.06,0.38l0.51,2.15l-1.09,1.01l0.07,2.1l-25.98,2.35l-25.74,1.93l-0.86,-11.44l-1.19,-0.85l-0.9,0.17l-0.83,-0.35l-0.93,0.39l-1.23,-0.33l-0.56,0.72l-0.47,0.01l-0.49,-0.48l-0.83,-0.14l-0.63,-0.99Z",
         "name": "Arkansas"
      },
      "US-MA": {
         "path": "M878.75,135.13l1.03,-0.2l0.84,-1.14l0.45,0.55l-1.05,0.65l-1.28,0.13ZM832.87,132.8l-0.47,-0.28l-10.39,2.68l-0.25,-0.17l-0.41,-14.64l29.93,-8.29l1.51,-1.81l0.33,-1.48l0.94,-0.36l0.6,-1.04l1.29,-1.09l1.23,-0.1l-0.43,1.05l1.36,0.52l-0.16,0.61l0.45,0.81l1.0,0.34l-0.06,0.32l0.4,0.27l1.31,0.16l-0.15,0.55l-2.5,1.89l-0.03,1.07l0.45,0.15l-1.09,1.41l0.24,1.07l-1.0,0.97l0.6,1.39l1.4,0.42l0.51,0.61l1.36,-0.59l0.32,-0.6l1.2,0.07l0.8,0.45l0.24,0.67l1.8,1.32l-0.06,1.23l-0.36,0.3l0.12,0.61l1.59,0.78l1.19,-0.16l0.69,1.17l0.23,1.13l0.9,0.66l1.33,0.38l1.48,-0.15l0.43,0.36l1.05,-0.25l3.32,-2.79l0.38,-0.7l0.54,0.01l0.58,1.82l-3.31,1.56l-0.93,0.83l-1.89,0.89l-0.51,-0.11l-0.44,0.45l-0.37,1.42l-1.93,1.29l-0.84,-2.48l0.1,-1.34l-0.55,-0.29l-0.49,0.4l-0.93,-0.09l-0.3,0.51l0.25,0.9l-0.25,0.79l-0.4,0.07l-0.62,1.1l-0.61,-0.19l-0.49,0.49l0.23,1.83l-0.89,0.88l-0.64,-0.78l-0.47,0.02l-0.1,0.55l-0.26,0.04l-0.72,-1.98l-1.02,-0.34l0.42,-2.47l-0.21,-0.39l-0.77,0.41l-0.28,1.46l-0.7,0.21l-1.41,-0.61l-0.8,-2.08l-0.8,-0.21l-0.8,-2.11l-0.49,-0.23l-6.12,2.09l-0.3,-0.14l-14.81,4.4l-0.27,0.51ZM861.69,109.95l-0.02,-0.36l-0.15,-0.47l0.51,0.21l-0.35,0.62ZM877.31,122.26l-0.42,-0.64l0.06,-0.05l0.45,0.65l-0.09,0.05ZM876.38,120.74l-0.87,-0.1l-0.95,-1.38l1.45,0.96l0.36,0.52ZM872.43,119.06l-0.05,0.24l-0.32,-0.18l0.1,0.01l0.28,-0.07ZM872.93,134.59l0.01,-0.02l0.01,0.03l-0.02,-0.01ZM868.26,137.09l0.76,-0.56l0.27,-1.16l0.84,-1.19l0.17,0.25l0.46,-0.12l0.35,0.51l0.71,-0.02l0.18,0.36l-2.1,0.76l-1.33,1.32l-0.32,-0.15Z",
         "name": "Massachusetts"
      },
      "US-AL": {
         "path": "M610.27,337.63l25.27,-3.08l19.48,-2.89l14.31,42.76l0.8,1.38l0.22,1.04l1.18,1.57l0.61,1.86l2.26,2.46l0.94,1.78l-0.1,2.12l1.81,1.11l-0.17,0.73l-0.64,0.11l-0.15,0.7l-0.98,0.85l-0.21,2.28l0.26,1.47l-0.76,2.29l-0.13,1.83l1.13,2.92l1.22,1.5l0.54,1.59l-0.05,5.02l-0.25,0.81l0.5,2.03l1.36,1.15l1.16,2.06l-47.9,7.28l-0.41,0.61l-0.06,3.0l2.67,2.74l2.02,0.95l-0.33,2.71l0.57,1.6l0.44,0.39l-0.94,1.7l-1.24,1.01l-1.14,-0.75l-0.33,0.49l0.67,1.46l-2.84,1.07l0.29,-0.64l-0.45,-0.86l-1.0,-0.76l-0.1,-1.11l-0.57,-0.22l-0.53,0.61l-0.32,-0.1l-0.9,-1.53l0.4,-1.68l-0.99,-2.21l-0.47,-0.44l-0.86,-0.2l-0.31,-0.89l-0.56,-0.17l-0.36,0.61l0.15,0.35l-0.76,3.11l0.01,5.1l-0.6,0.0l-0.25,-0.71l-2.24,-0.43l-1.66,0.33l-5.65,-31.94l-1.25,-65.96l-0.02,-0.37l-1.08,-0.62l-0.69,-1.0Z",
         "name": "Alabama"
      },
      "US-MO": {
         "path": "M469.55,228.14l24.77,-0.8l18.99,-1.48l22.16,-2.65l0.42,0.34l0.4,0.89l2.44,1.61l0.29,0.73l1.21,0.85l-0.5,1.34l-0.09,3.17l0.79,3.59l0.96,1.41l0.03,1.56l1.11,1.35l0.47,1.53l4.99,4.01l1.07,1.66l4.95,3.23l0.7,1.12l0.28,1.59l0.51,0.8l-0.17,0.68l0.48,1.78l0.98,1.6l0.77,0.72l1.03,0.15l0.83,-0.56l0.83,-1.39l0.58,-0.19l2.42,0.59l1.69,0.74l0.84,0.75l-0.96,1.92l0.27,2.24l-2.36,6.77l0.02,1.01l0.71,1.89l4.7,3.96l2.0,1.02l1.46,0.08l1.67,1.27l1.92,0.77l1.52,2.07l2.05,0.8l0.43,2.91l1.74,2.84l-1.09,1.92l0.19,1.37l0.75,0.32l2.34,4.17l1.94,0.89l0.54,-0.32l0.0,-0.64l0.89,1.08l1.08,-0.08l0.15,1.81l-0.37,1.06l0.54,1.56l-1.06,3.81l-0.52,0.08l-1.38,-1.11l-0.65,0.13l-0.78,3.3l-0.52,0.73l0.13,-1.04l-0.56,-1.07l-0.96,-0.19l-0.74,0.63l0.02,1.04l0.53,0.64l-0.04,0.69l0.59,1.31l-0.2,0.39l-1.2,0.39l-0.17,0.42l0.16,0.55l0.84,0.81l-1.69,0.37l-0.13,0.62l1.54,1.93l-0.89,0.74l-0.63,2.1l-10.65,1.47l1.05,-2.24l0.87,-0.61l0.18,-0.86l1.44,-0.95l0.25,-0.95l0.63,-0.36l0.29,-0.59l-0.23,-2.25l-1.06,-0.74l-0.2,-0.75l-1.09,-1.16l-39.39,3.79l-37.87,2.71l-3.31,-57.27l-1.04,-0.62l-1.2,-0.02l-1.52,-0.71l-0.2,-0.92l-0.77,-0.58l-0.34,-0.69l-0.37,-1.52l-0.56,-0.09l-0.3,-0.55l-1.13,-0.65l-1.41,-1.8l0.73,-0.5l0.09,-1.22l1.12,-1.25l0.09,-0.78l1.02,0.16l0.56,-0.42l-0.21,-2.21l-1.02,-0.72l-0.33,-1.09l-1.17,-0.0l-1.31,0.95l-0.82,-0.69l-0.73,-0.16l-2.69,-2.31l-1.05,-0.27l0.13,-1.58l-1.32,-1.69l0.09,-1.0l-0.37,-0.36l-1.02,-0.17l-0.59,-0.84l-0.83,-0.26l0.07,-0.52l-1.24,-2.84l-0.0,-0.72l-0.4,-0.49l-0.85,-0.28l-0.05,-0.52ZM585.14,295.52l-0.11,-0.1l-0.07,-0.14l0.11,-0.01l0.06,0.25Z",
         "name": "Missouri"
      },
      "US-MN": {
         "path": "M439.91,45.57l26.73,-1.1l0.34,1.49l1.28,0.86l1.79,-0.51l1.04,-1.46l0.77,-0.32l2.13,2.24l1.71,0.28l0.31,1.23l1.83,1.42l1.79,0.49l2.63,-0.42l0.39,0.87l0.67,0.4l5.1,0.01l0.38,0.24l0.55,1.61l0.72,0.62l4.26,-0.8l0.77,-0.66l0.07,-0.71l2.42,-0.81l3.96,-0.03l1.42,0.71l3.38,0.67l-1.0,0.81l0.0,0.83l0.51,0.45l0.67,0.09l2.23,-0.16l0.53,2.12l1.59,2.33l0.72,0.05l1.02,-0.8l-0.05,-1.76l2.65,-0.48l1.44,2.2l2.01,0.8l1.53,0.18l0.55,0.58l-0.03,0.84l0.59,0.36l1.32,0.06l-0.05,0.37l0.43,0.47l1.43,-0.2l1.12,0.22l2.21,-0.86l2.76,-2.6l2.47,-1.57l1.26,2.56l0.96,0.52l2.22,-0.68l0.87,0.36l5.96,-1.34l0.56,0.18l1.33,1.66l1.24,0.6l0.62,-0.01l1.6,-0.84l1.38,0.06l-0.96,1.07l-4.66,3.12l-6.32,2.87l-3.66,2.52l-2.13,2.52l-0.95,0.59l-6.57,8.77l-0.94,0.62l-1.07,1.58l-1.95,1.99l-4.15,3.59l-0.85,1.8l-0.55,0.44l-0.14,0.96l-0.77,-0.01l-0.46,0.51l1.03,12.27l-0.79,1.21l-1.04,0.08l-0.52,0.82l-0.83,0.16l-0.61,0.83l-2.06,1.2l-0.93,1.87l0.07,0.72l-1.69,2.4l-0.0,2.07l0.38,0.91l2.15,0.38l1.43,2.48l-0.51,1.92l-0.71,1.26l-0.04,2.12l0.46,1.32l-0.71,1.23l0.92,3.13l-0.49,4.07l3.96,3.01l3.02,0.38l1.9,2.23l2.88,0.48l2.46,1.91l2.4,3.56l2.64,1.78l2.09,0.08l1.07,0.7l0.88,0.09l0.82,1.35l1.27,0.83l0.28,2.01l0.68,1.29l0.41,4.78l-40.67,3.35l-40.68,2.18l-1.52,-38.8l-0.7,-1.27l-0.83,-0.78l-2.57,-0.78l-0.95,-1.91l-1.46,-1.79l0.21,-0.68l2.82,-2.35l0.96,-2.13l0.39,-2.45l-0.36,-1.59l0.23,-1.59l-0.19,-1.8l-0.51,-1.03l-0.19,-2.34l-1.82,-2.6l-0.47,-1.14l-0.22,-2.18l-0.66,-0.98l0.15,-1.67l-0.36,-1.54l0.52,-2.71l-1.08,-1.86l-0.51,-8.4l-0.42,-0.8l0.05,-3.96l-1.58,-4.0l-0.53,-0.66l-0.41,-1.38l0.05,-1.2l-0.48,-0.54l-1.37,-3.82l-0.01,-3.27l-0.47,-2.0l0.27,-1.14l-0.57,-2.36l0.73,-2.61l-2.07,-7.05ZM469.41,36.19l1.21,0.47l0.98,-0.2l0.34,0.47l-0.04,1.77l-1.77,1.15l-0.15,-0.48l-0.41,-0.14l-0.17,-3.04Z",
         "name": "Minnesota"
      },
      "US-CA": {
         "path": "M3.0,175.65l0.8,-1.21l0.46,0.47l0.59,-0.07l0.53,-1.15l0.8,-0.83l1.3,-0.23l0.57,-0.51l-0.15,-0.72l-0.92,-0.33l1.55,-2.72l-0.29,-1.56l0.15,-0.86l2.07,-3.22l1.34,-2.97l0.37,-2.09l-0.27,-1.0l0.19,-3.07l-1.34,-2.15l1.19,-1.34l0.7,-2.48l32.71,8.51l32.57,7.68l-14.08,63.61l25.33,34.47l36.48,50.79l13.27,17.63l-0.21,2.7l0.73,0.93l0.21,1.7l0.86,0.63l0.8,2.54l-0.08,0.9l0.63,1.44l-0.17,1.35l3.8,3.82l0.01,0.49l-1.96,1.49l-3.13,1.22l-1.21,1.96l-1.73,1.11l-0.34,0.81l0.37,1.02l-0.52,0.51l-0.1,0.89l0.07,2.27l-0.61,0.7l-0.66,2.41l-2.04,2.43l-1.61,0.12l-0.43,0.51l0.33,0.88l-0.6,1.33l0.53,1.11l-0.02,1.18l-0.79,2.66l0.57,1.01l2.75,1.15l0.33,0.83l-0.2,2.38l-1.19,0.76l-0.43,1.36l-2.29,-0.63l-1.26,0.59l-43.59,-3.74l0.18,-1.14l0.67,-0.5l-0.17,-1.06l-1.16,-1.39l-1.04,-0.16l0.24,-1.19l-0.27,-1.07l0.79,-1.32l-0.28,-4.22l-0.59,-2.29l-1.91,-4.06l-3.55,-4.08l-1.29,-1.97l-2.41,-2.12l-2.03,-3.0l-2.22,-0.91l-0.94,0.29l-0.4,0.95l-0.62,-0.74l-0.88,-0.23l-0.14,-0.3l0.62,-0.74l0.18,-1.56l-0.43,-2.04l-1.0,-1.95l-0.99,-0.74l-4.45,-0.24l-3.33,-1.83l-1.36,-1.26l-0.7,-0.13l-1.02,-1.19l-0.43,-2.58l-0.97,-0.48l-1.67,-2.31l-2.19,-1.74l-1.24,-0.42l-1.67,0.34l-1.14,-1.02l-1.25,0.01l-2.48,-1.85l-1.06,-0.0l-1.49,-0.7l-4.93,-0.58l-1.11,-2.34l-1.35,-0.65l1.28,-2.52l-0.24,-1.36l0.76,-1.95l-0.63,-1.34l1.29,-2.4l0.34,-2.41l-0.99,-1.24l-1.26,-0.24l-1.4,-1.29l0.42,-1.58l0.8,-0.07l0.26,-0.45l-0.46,-2.18l-0.65,-0.77l-1.47,-0.85l-1.76,-3.95l-1.82,-1.26l-0.34,-2.72l-1.6,-2.57l0.07,-1.37l-0.33,-1.25l-1.15,-0.95l-0.73,-2.92l-2.4,-2.69l-0.54,-1.25l0.01,-4.55l0.6,-0.57l-0.58,-1.13l0.51,-0.57l0.53,0.61l0.77,-0.01l0.85,-0.79l0.57,-1.3l0.8,0.05l0.21,-0.88l-0.42,-0.27l0.48,-1.17l-1.2,-3.64l-0.62,-0.48l-1.06,0.07l-1.93,-0.53l-1.04,-1.06l-1.87,-3.2l-0.78,-2.26l0.87,-2.34l0.1,-1.1l-0.26,-2.36l-0.31,-0.64l-0.54,-0.25l0.25,-1.16l0.7,-1.05l0.26,-2.66l0.47,-0.62l0.88,0.14l0.18,0.92l-0.72,2.09l0.05,1.14l1.18,1.32l0.55,0.11l0.58,1.27l1.16,0.79l0.4,1.0l0.89,0.41l0.83,-0.19l-0.2,-1.44l-0.64,-0.43l-0.17,-0.58l-0.22,-3.52l-0.54,-0.7l0.24,-0.68l-1.48,-1.06l0.51,-1.05l0.1,-1.05l-1.19,-1.57l0.78,-0.71l0.79,0.07l1.25,-0.7l1.25,1.02l1.87,-0.29l5.55,2.45l0.61,-0.08l0.65,-1.35l0.69,-0.03l1.91,2.53l0.25,0.18l0.63,-0.23l0.03,-0.38l-0.39,-0.93l-1.56,-1.88l-1.65,-0.34l0.27,-0.6l-0.28,-0.54l-0.48,0.08l-1.06,0.97l-1.84,-0.25l-0.44,0.27l-0.14,-0.5l-1.04,-0.41l0.24,-1.03l-0.84,-0.47l-1.0,0.26l-0.61,0.82l-1.1,0.37l-1.35,-0.9l-0.39,-0.87l-1.51,-1.44l-0.58,0.03l-0.64,0.59l-0.92,-0.14l-0.49,0.36l-0.35,1.85l0.2,0.76l-0.77,1.34l0.35,0.63l-0.46,0.58l-0.04,0.67l-2.15,-2.88l-0.44,-0.15l-0.25,0.32l-0.73,-1.0l-0.21,-1.02l-1.19,-1.17l-0.39,-1.04l-0.61,-0.19l0.66,-1.45l0.11,0.95l0.76,1.48l0.44,0.25l0.34,-0.38l-1.43,-5.16l-1.08,-1.41l-0.3,-2.65l-2.49,-2.87l-1.77,-4.45l-3.02,-5.5l1.11,-1.65l0.27,-1.94l-0.45,-2.09l-0.12,-3.56l1.36,-2.85l0.7,-0.72l-0.06,-1.52l0.43,-1.51l-0.4,-1.62l0.13,-1.93l-1.39,-4.03l-0.97,-1.15l0.06,-0.78l-0.41,-1.18l-2.88,-4.02l0.52,-1.32l-0.19,-2.65l2.25,-3.36ZM31.19,240.19l-0.05,0.09l-0.27,0.04l-0.01,-0.0l0.33,-0.12ZM63.48,350.44l0.26,0.12l0.17,0.16l-0.29,-0.17l-0.13,-0.11ZM65.06,351.68l1.33,0.85l0.74,1.72l-0.89,-0.66l-1.14,0.01l-0.04,-1.92ZM61.77,361.76l1.36,2.09l0.57,0.53l-0.46,0.06l-0.83,-0.8l-0.64,-1.88ZM42.7,332.51l0.87,0.73l1.38,0.37l1.33,1.0l-2.81,-0.22l-0.71,-0.58l0.24,-0.65l-0.31,-0.66ZM47.07,334.62l0.93,-0.47l0.32,0.35l-0.37,0.13l-0.87,-0.01ZM45.1,350.98l0.29,-0.06l0.95,0.92l-0.61,-0.17l-0.63,-0.69ZM36.71,332.66l2.58,0.19l0.2,0.74l0.59,0.45l-1.22,0.61l-1.17,-0.11l-0.5,-0.44l-0.48,-1.42ZM34.08,330.97l0.05,-0.02l0.05,0.06l-0.01,-0.0l-0.09,-0.04Z",
         "name": "California"
      },
      "US-IA": {
         "path": "M453.66,165.63l42.88,-2.29l40.6,-3.34l0.97,2.5l2.0,0.98l0.08,0.59l-0.89,1.79l-0.15,1.04l0.92,5.04l0.93,1.24l0.39,1.73l1.47,1.7l4.96,0.81l1.27,2.0l-0.3,1.02l0.29,0.66l3.63,2.32l0.86,2.38l3.86,2.26l0.62,1.65l-0.3,4.16l-1.64,1.97l-0.49,1.92l0.14,1.27l-1.25,1.35l-2.52,0.97l-0.89,1.17l-0.55,0.25l-4.57,0.84l-0.89,0.72l-0.6,1.69l-0.15,2.53l0.4,1.06l2.02,1.44l0.55,2.61l-1.86,3.22l-0.21,2.21l-0.52,1.4l-2.89,1.39l-1.02,1.02l-0.2,0.99l0.72,0.85l0.21,2.11l-0.58,0.24l-1.35,-0.81l-0.31,-0.75l-1.29,-0.8l-0.29,-0.5l-0.89,-0.35l-0.3,-0.8l-0.95,-0.67l-22.35,2.69l-15.16,1.21l-7.61,0.53l-20.83,0.54l-0.22,-1.04l-1.3,-0.72l-0.33,-0.66l0.57,-1.13l-0.21,-0.95l0.21,-1.37l-0.36,-2.16l-0.6,-0.71l0.06,-3.6l-1.05,-0.49l0.05,-0.88l0.71,-1.01l-0.05,-0.44l-1.31,-0.55l0.33,-2.51l-0.41,-0.45l-0.89,-0.16l0.23,-0.78l-0.3,-0.58l-0.51,-0.25l-0.74,0.23l-0.42,-2.77l0.5,-2.33l-0.2,-0.67l-1.37,-1.69l-0.08,-1.89l-1.79,-1.52l-0.36,-1.72l-1.09,-0.93l0.03,-2.15l-1.11,-1.85l0.21,-1.67l-0.27,-1.08l-1.38,-0.66l-0.88,-2.14l0.04,-0.63l-1.81,-1.79l0.56,-1.58l0.54,-0.47l0.72,-2.66l0.0,-1.67l0.54,-0.68l0.21,-1.18l-0.51,-2.22l-1.33,-0.28l-0.05,-0.72l0.45,-0.56l-0.0,-1.7l-0.96,-1.41l-0.05,-0.86Z",
         "name": "Iowa"
      },
      "US-MI": {
         "path": "M613.3,123.04l1.01,-0.11l0.46,-0.67l-0.39,-3.2l1.08,-0.12l0.66,-1.43l1.19,0.47l0.65,-0.34l0.74,-2.59l0.82,-1.21l0.55,-1.68l0.55,-0.18l-0.57,0.88l0.61,1.64l-0.7,1.8l0.71,0.42l-0.46,2.61l0.89,1.41l0.73,-0.06l0.52,0.55l0.65,-0.25l0.87,-2.26l0.64,-3.51l-0.09,-2.06l-0.78,-3.41l0.58,-1.02l2.12,-1.66l2.74,-0.56l0.98,-0.64l0.28,-0.64l-0.26,-0.54l-1.76,-0.09l-0.97,-0.85l-0.53,-1.98l1.83,-2.99l-0.11,-0.73l1.72,-0.24l0.74,-0.95l4.18,1.97l0.83,0.12l1.98,-0.42l1.38,0.38l0.99,0.79l1.19,1.76l2.74,-0.21l1.71,1.0l1.92,0.07l0.81,0.63l1.16,0.23l1.44,-0.07l1.77,1.03l0.0,1.12l1.05,1.3l0.64,0.2l0.39,0.92l-0.15,0.54l-0.67,-0.25l-0.94,0.58l-0.22,1.83l0.82,1.28l1.61,0.97l0.7,1.36l0.67,2.25l-0.1,1.73l0.8,5.79l-0.77,0.64l-0.4,0.87l-0.75,0.08l-0.78,0.82l-0.14,4.45l-1.12,0.49l-0.17,0.81l-1.86,0.44l-0.72,0.6l-0.56,2.6l0.26,0.45l-0.2,0.52l0.27,2.56l1.39,1.29l2.9,0.8l0.91,-0.08l1.07,-1.23l0.59,-1.44l0.63,0.18l0.38,-0.24l0.99,-3.57l0.59,-1.06l-0.08,-0.51l0.92,-1.41l1.43,-0.44l1.06,-0.69l0.82,-1.1l0.87,-0.44l2.07,0.57l2.14,1.75l1.23,2.13l2.05,5.84l0.83,1.58l1.05,3.67l1.52,3.58l1.41,2.21l-0.43,3.38l0.46,2.46l-0.46,2.76l-0.34,0.44l-0.24,-0.32l-0.32,-1.69l-1.46,-0.5l-0.47,0.09l-1.47,1.36l-0.05,0.83l0.55,0.66l-0.82,0.57l-0.29,0.78l0.3,2.91l-0.48,0.75l-1.61,0.93l-1.05,1.85l-0.41,3.7l0.28,1.53l-0.32,0.92l-0.43,0.19l0.03,0.9l-0.63,0.3l-0.37,1.07l-0.52,0.52l-0.49,1.28l-0.02,1.04l-0.51,0.78l-20.38,4.41l-0.15,-0.84l-0.46,-0.33l-31.63,4.97l1.86,-2.22l1.82,-5.87l1.42,-3.02l0.98,-4.96l0.08,-5.29l-1.11,-6.42l-2.21,-4.24l0.6,-0.51l0.3,-0.78l-0.57,-0.42l-1.08,0.56l-4.01,-7.31l0.08,-1.35l0.97,-2.05l-0.02,-0.96l-0.76,-3.11l-1.29,-1.63l-0.05,-0.61l1.71,-2.72l1.2,-4.13l-0.25,-5.32l-0.78,-1.58l1.09,-1.15ZM622.19,118.68l0.0,-0.07l0.11,-0.12l-0.01,0.03l-0.11,0.16ZM622.44,117.76l-0.07,-0.16l0.07,-0.14l0.0,0.3ZM544.04,91.26l4.86,-2.42l3.53,-3.65l5.76,-1.4l1.38,-0.85l2.34,-2.74l0.97,0.04l1.52,-0.74l0.99,-2.27l2.79,-2.88l0.24,1.73l1.85,0.59l0.06,1.46l0.67,0.14l0.51,0.6l-0.14,3.17l0.44,0.95l-0.33,0.48l0.2,0.47l0.74,-0.02l1.07,-2.23l1.07,-0.91l-0.41,1.17l0.59,0.44l0.82,-0.68l0.52,-1.23l1.0,-0.44l3.09,-0.27l1.5,0.2l1.19,0.93l1.54,0.44l0.48,1.05l2.32,2.59l1.17,0.54l0.54,1.56l0.73,0.34l1.87,0.06l0.72,-0.41l1.07,-0.06l0.51,-0.66l0.88,-0.44l1.0,1.11l1.11,0.64l1.02,-0.26l0.67,-0.83l1.88,1.05l0.64,-0.35l1.63,-2.61l2.79,-1.92l1.69,-1.67l0.92,0.1l3.26,-1.23l5.17,-0.28l4.46,-2.76l2.56,-0.39l0.01,3.27l0.3,0.72l-0.35,1.11l0.68,0.85l0.66,0.11l0.71,-0.4l2.2,0.69l1.14,-0.44l1.02,-0.88l0.66,0.48l0.21,0.71l0.85,0.21l1.26,-0.82l0.94,-1.56l0.65,-0.02l0.85,0.75l2.01,3.79l-0.86,1.05l0.49,0.88l0.47,0.36l1.36,-0.43l0.58,0.46l0.64,0.04l0.18,1.2l0.99,0.87l1.53,0.51l-1.17,0.69l-4.96,-0.11l-0.53,0.3l-1.36,-0.16l-0.88,0.41l-0.67,-0.75l-1.63,-0.06l-0.58,0.47l-0.06,1.22l-0.49,0.76l0.4,2.05l-0.92,-0.22l-0.9,-0.92l-0.77,-0.13l-1.97,-1.64l-2.41,-0.58l-1.6,0.05l-1.04,-0.5l-2.88,0.49l-0.61,0.45l-1.16,2.53l-3.47,0.76l-0.57,0.78l-2.06,-0.32l-2.81,0.95l-0.68,0.84l-0.54,2.52l-0.78,0.29l-0.81,0.88l-0.65,0.29l0.15,-1.96l-0.75,-0.91l-1.02,0.35l-0.76,0.93l-0.97,-0.39l-0.68,0.17l-0.37,0.4l0.11,0.83l-0.72,2.02l-1.2,0.6l-0.12,-1.38l-0.47,-1.06l0.33,-1.69l-0.17,-0.37l-0.66,-0.16l-0.45,0.58l-0.59,2.13l-0.2,2.57l-1.11,0.92l-1.25,3.03l-0.6,2.66l-2.53,5.34l-0.69,0.74l0.13,0.91l-1.41,-1.27l0.17,-1.74l0.62,-1.69l-0.42,-0.81l-0.62,-0.3l-1.35,0.86l-1.16,0.1l0.03,-1.29l0.8,-1.45l-0.42,-1.34l0.29,-1.09l-0.58,-0.98l0.14,-0.83l-1.91,-1.54l-1.1,-0.05l-0.59,-0.43l-0.86,0.2l-0.62,-0.19l0.29,-1.37l-0.95,-1.45l-1.13,-0.51l-2.23,-0.09l-3.2,-0.69l-1.55,0.6l-1.43,-0.42l-1.62,0.17l-4.57,-1.93l-15.38,-2.44l-2.01,-3.4l-1.89,-0.96l-0.76,0.26l-0.1,-0.3ZM603.98,101.59l-0.0,0.52l-0.46,0.32l-0.69,1.39l0.08,0.57l-0.65,-0.58l0.9,-2.17l0.83,-0.07ZM644.38,90.12l1.97,-1.54l0.16,-0.57l-0.28,-0.64l1.05,0.15l0.81,1.23l0.82,0.19l-0.26,1.09l-0.36,0.19l-1.51,-0.33l-0.77,0.46l-1.63,-0.23ZM636.04,80.32l0.55,-0.84l0.52,0.05l-0.36,1.33l0.11,0.71l-0.35,-0.9l-0.47,-0.35ZM636.97,81.84l0.09,0.14l0.01,0.02l-0.02,-0.01l-0.08,-0.14ZM637.86,83.93l0.4,0.45l0.23,0.61l-0.63,-0.71l0.0,-0.34ZM634.29,95.87l1.41,0.24l0.35,-0.19l0.4,0.21l-0.17,0.52l-0.75,0.11l-1.24,-0.89ZM619.44,99.61l0.64,2.25l-0.79,0.78l-0.39,-0.26l0.54,-2.77ZM613.94,113.71l0.48,0.3l-0.08,0.57l-0.45,-0.69l0.06,-0.17ZM612.93,116.45l0.0,-0.03l0.02,-0.04l-0.03,0.07ZM599.9,85.56l-0.23,-0.37l0.02,-0.4l0.37,0.33l-0.16,0.45ZM570.96,75.75l-0.51,-0.27l-1.15,0.07l-0.06,-1.58l0.99,-1.04l1.16,-2.12l1.82,-1.52l0.63,-0.0l0.52,-0.59l2.07,-0.9l3.33,-0.44l1.11,0.67l-0.54,0.38l-1.31,-0.12l-2.26,0.79l-0.15,0.29l0.31,0.58l0.72,0.13l-1.19,1.0l-1.39,1.91l-0.69,0.29l-0.34,1.46l-1.14,1.38l-0.64,2.06l-0.67,-0.88l0.74,-0.98l0.12,-1.97l-0.63,-0.37l-0.2,0.15l-0.59,0.93l-0.04,0.68ZM558.64,61.09l0.75,-1.0l-0.4,-0.34l0.56,-0.55l4.59,-3.04l1.96,-1.75l0.62,-0.18l-0.45,0.67l0.11,0.8l-0.43,0.5l-4.22,2.61l-0.85,1.0l0.24,0.37l-1.86,1.19l-0.61,-0.29Z",
         "name": "Michigan"
      },
      "US-GA": {
         "path": "M655.83,331.54l22.1,-3.74l20.71,-4.04l-1.47,1.41l-0.51,1.67l-0.66,0.82l-0.4,1.72l0.12,1.22l0.83,0.77l1.85,0.77l1.04,0.1l2.72,1.98l0.84,0.22l1.91,-0.39l0.6,0.24l0.81,1.62l1.52,1.57l1.06,2.46l1.34,0.8l0.85,1.14l0.56,0.26l1.01,1.74l1.08,0.28l1.19,0.97l3.84,1.79l2.44,3.1l2.27,0.55l2.56,1.63l0.51,2.31l1.26,0.99l0.48,-0.17l0.31,0.48l-0.09,0.62l0.79,0.71l0.79,0.08l0.57,1.19l5.03,1.81l0.41,1.76l1.56,1.7l1.04,1.98l-0.07,0.8l0.49,0.68l0.12,1.23l1.05,0.78l1.17,0.16l1.26,0.6l0.28,0.53l0.58,0.23l1.14,2.53l0.77,0.56l0.1,2.67l0.78,1.47l1.39,0.88l1.53,-0.28l1.46,0.74l1.46,0.09l-0.59,0.78l-0.56,-0.35l-0.47,0.28l-0.4,0.99l0.63,0.9l-0.37,0.48l-1.39,-0.14l-0.78,-0.54l-0.64,0.45l0.26,0.71l-0.48,0.53l0.36,0.6l0.95,-0.05l0.5,0.28l-0.57,1.35l-1.44,0.29l-1.34,-0.43l-0.44,0.39l0.35,0.84l1.24,0.33l-0.5,0.87l0.23,0.35l-0.2,0.64l0.84,0.63l-0.33,0.44l-0.72,-0.13l-0.96,0.52l-0.09,0.63l1.09,0.44l0.06,0.94l0.48,-0.08l1.2,-1.18l-0.91,2.33l-0.32,-0.58l-0.59,-0.07l-0.44,0.73l0.3,0.7l0.99,0.82l-2.34,0.07l-0.92,-0.27l-0.63,0.3l0.07,0.63l0.55,0.33l2.78,0.21l1.08,0.65l-0.01,0.34l-0.56,0.22l-0.87,1.96l-0.52,-1.41l-0.45,-0.12l-0.6,0.34l-0.14,0.84l0.35,0.96l-0.6,0.12l-0.02,0.84l-0.3,0.16l0.07,0.46l1.35,1.13l-1.09,1.04l0.33,0.47l0.78,0.07l-0.38,0.92l0.06,0.88l-0.46,0.52l1.12,1.65l0.04,0.76l-0.8,0.34l-2.66,-0.14l-4.1,-0.92l-1.31,0.36l-0.17,0.74l-0.68,0.26l-0.34,1.25l0.29,2.08l0.96,1.35l0.17,4.26l-1.99,0.42l-0.55,-0.92l-0.13,-1.31l-1.35,-1.81l-49.49,5.58l-0.73,-0.55l-0.89,-2.7l-0.96,-1.5l-0.57,-0.37l0.15,-0.68l-0.74,-1.5l-1.84,-1.8l-0.44,-1.74l0.25,-0.8l0.03,-5.18l-0.62,-1.8l-1.2,-1.45l-1.05,-2.63l0.11,-1.65l0.77,-2.36l-0.26,-1.52l0.18,-2.1l1.62,-1.34l0.45,-1.47l-0.56,-0.6l-1.43,-0.67l0.08,-2.14l-0.99,-1.85l-2.2,-2.38l-1.05,-2.78l-0.76,-0.67l-0.17,-0.95l-0.78,-1.35l-14.26,-42.58ZM747.77,388.29l0.7,-0.27l-0.07,0.83l-0.3,-0.33l-0.34,-0.23ZM746.43,405.18l0.06,0.87l-0.01,0.47l-0.35,-0.57l0.3,-0.77Z",
         "name": "Georgia"
      },
      "US-AZ": {
         "path": "M127.66,383.44l0.45,-1.79l1.3,-1.26l0.55,-1.1l0.48,-0.25l1.67,0.63l0.97,-0.03l0.52,-0.45l0.29,-1.16l1.32,-0.98l0.26,-2.71l-0.45,-1.24l-0.84,-0.66l-2.08,-0.68l-0.3,-0.61l0.81,-2.37l0.01,-1.38l-0.51,-1.19l0.57,-0.84l-0.2,-0.86l1.58,-0.25l2.32,-2.77l0.66,-2.41l0.66,-0.79l0.04,-3.14l0.56,-0.61l-0.28,-1.41l1.73,-1.11l1.05,-1.82l3.18,-1.25l2.05,-1.54l0.27,-0.53l-0.12,-1.03l-3.25,-3.48l-0.51,-0.22l0.23,-1.24l-0.65,-1.44l0.08,-0.9l-0.87,-2.74l-0.84,-0.56l-0.18,-1.63l-0.68,-0.79l0.21,-3.49l0.59,-0.85l-0.29,-0.84l1.03,-0.39l0.41,-1.4l0.15,-3.16l-0.75,-3.61l0.47,-0.86l0.3,-1.65l-0.38,-2.96l0.86,-2.52l-0.8,-1.85l-0.03,-0.9l0.44,-0.51l0.35,-1.33l2.55,-0.6l1.75,1.0l1.43,-0.18l0.96,2.22l0.78,0.71l1.54,0.15l1.02,-0.48l1.04,-2.23l0.95,-1.17l2.64,-16.67l42.56,6.06l42.71,4.9l-12.24,122.4l-37.11,-4.26l-36.46,-19.18l-28.51,-15.73Z",
         "name": "Arizona"
      },
      "US-MT": {
         "path": "M167.4,59.85l0.72,-0.1l0.33,-0.38l-0.88,-2.02l0.85,-0.96l-0.38,-1.32l0.1,-0.97l-1.22,-1.96l-0.22,-1.51l-1.02,-1.36l-1.16,-2.48l3.76,-21.01l43.48,7.0l42.9,5.45l42.6,4.01l43.01,2.64l-3.73,86.82l-28.12,-1.54l-26.83,-2.0l-26.78,-2.51l-25.84,-2.91l-0.45,0.35l-1.28,10.37l-1.51,-2.01l-0.02,-0.91l-1.17,-2.35l-1.24,-0.75l-1.81,0.9l0.02,1.05l-0.72,0.42l-0.35,1.55l-2.42,-0.42l-1.92,0.55l-0.92,-0.85l-3.36,0.07l-2.38,-0.98l-1.68,0.56l-0.85,1.47l-4.66,-1.63l-1.3,0.36l-1.13,0.89l-0.31,0.66l-1.65,-1.41l0.22,-1.42l-0.89,-1.71l0.4,-0.36l0.07,-0.62l-1.16,-3.08l-1.44,-1.26l-1.45,0.34l-0.21,-0.64l-1.07,-0.9l-0.4,-1.37l0.68,-0.6l0.21,-1.41l-0.75,-2.38l-0.77,-0.36l-0.3,-1.58l-1.49,-2.55l0.24,-1.51l-0.55,-1.27l0.35,-1.4l-0.72,-0.86l0.49,-0.97l-0.21,-0.75l-1.14,-0.76l-0.13,-0.59l-0.84,-0.92l-0.8,-0.4l-0.51,0.37l-0.08,0.75l-0.7,0.26l-1.14,1.21l-1.75,0.35l-1.22,1.06l-1.08,-0.86l-0.63,-1.01l-1.05,-0.45l0.02,-0.86l0.74,-0.63l0.25,-1.06l-0.6,-1.61l0.91,-1.09l1.07,-0.08l0.83,-0.8l-0.25,-1.14l0.39,-1.07l-0.94,-0.81l-0.04,-0.81l0.67,-1.28l-0.58,-1.08l0.74,-0.06l0.39,-0.42l-0.03,-1.78l1.85,-3.73l-0.13,-1.06l0.89,-0.62l0.63,-3.18l-0.78,-0.51l-1.8,0.36l-1.33,-0.12l-0.64,-0.56l0.37,-0.84l-0.61,-0.98l-0.66,-0.23l-0.73,0.35l-0.06,-0.95l-1.73,-1.65l0.06,-1.86l-1.66,-1.85l-0.08,-0.69l-1.52,-2.92l-1.06,-1.31l-0.55,-1.65l-2.34,-1.37l-0.93,-1.98l-1.44,-1.22Z",
         "name": "Montana"
      },
      "US-MS": {
         "path": "M557.14,430.96l0.67,-0.97l-1.06,-1.76l0.18,-1.63l-0.82,-0.87l1.7,-0.26l0.47,-0.54l0.39,-2.74l-0.79,-1.82l1.57,-1.8l0.24,-3.58l0.74,-2.26l1.89,-1.25l1.15,-1.97l1.4,-1.04l0.34,-0.78l-0.04,-0.99l-0.64,-0.95l1.15,-0.28l0.96,-2.58l0.91,-1.31l-0.16,-0.86l-1.55,-0.42l-0.35,-0.95l-1.84,-1.03l-0.08,-2.13l-0.94,-0.73l-0.45,-0.83l-0.02,-0.37l1.14,-0.29l0.46,-0.68l-0.26,-0.89l-1.41,-0.48l0.23,-1.76l0.98,-1.53l-0.78,-1.06l-1.08,-0.3l-0.16,-2.8l0.9,-0.54l0.22,-0.8l-0.63,-2.5l-1.26,-0.65l0.7,-1.32l-0.08,-2.2l-2.03,-1.49l1.13,-0.47l0.12,-1.4l-1.35,-0.87l1.57,-2.02l0.93,-0.31l0.36,-0.68l-0.52,-1.55l0.42,-1.35l-0.89,-0.87l1.59,-0.83l1.25,-0.27l0.59,-0.76l-0.09,-1.06l-1.42,-0.93l1.39,-1.07l0.62,-1.76l0.95,-0.17l0.34,-0.97l-0.2,-0.76l1.48,-0.44l1.22,-1.21l0.06,-3.49l-0.47,-1.51l0.36,-1.76l0.74,0.08l0.68,-0.33l0.42,-0.87l-0.41,-1.04l2.73,-1.71l0.58,-1.05l-0.29,-1.26l36.59,-4.31l0.87,1.23l0.85,0.44l1.25,65.96l5.71,32.91l-0.73,0.7l-1.55,-0.29l-0.91,-0.94l-1.32,1.07l-1.24,0.18l-2.05,-1.2l-2.01,-0.23l-0.84,0.37l-0.34,0.44l0.32,0.41l-0.56,0.37l-3.98,1.69l-0.05,-0.5l-0.97,-0.51l-1.0,0.05l-0.58,1.0l0.76,0.61l-1.6,1.22l-0.32,1.29l-0.69,0.31l-1.35,-0.05l-1.18,-1.87l-0.09,-0.9l-0.93,-1.47l-0.21,-1.01l-1.42,-1.63l-1.17,-0.53l-0.47,-0.77l0.1,-0.63l-0.7,-0.92l0.2,-1.99l0.5,-0.94l0.65,-2.99l-0.07,-1.23l-0.43,-0.28l-34.87,3.59Z",
         "name": "Mississippi"
      },
      "US-SC": {
         "path": "M699.48,323.59l4.87,-2.71l1.03,-0.06l1.11,-1.38l3.94,-1.92l0.45,-0.88l0.63,0.21l22.62,-3.59l0.31,0.13l-0.1,0.97l0.46,0.66l0.71,0.0l1.21,-1.3l2.85,2.48l0.48,2.44l0.56,0.51l19.55,-3.73l23.18,14.64l0.02,0.54l-2.47,2.19l-2.42,3.67l-2.38,5.71l-0.07,2.72l-1.09,-0.21l0.84,-2.71l-0.64,-0.22l-0.76,0.87l-0.55,1.38l-0.1,1.55l0.85,0.94l1.06,0.22l0.45,0.89l-0.75,0.09l-0.4,0.56l-0.88,0.03l-0.23,0.69l0.95,0.43l-1.1,1.13l-0.07,1.01l-1.35,0.65l-0.5,-0.6l-0.5,-0.07l-1.06,0.87l-0.55,1.76l0.43,0.86l-1.19,1.23l-0.6,1.44l-1.2,1.02l-0.91,-0.38l0.27,-0.59l-0.54,-0.73l-1.38,0.33l-0.11,0.43l0.37,0.76l-0.52,0.03l0.06,0.75l0.73,0.57l1.31,0.41l-0.12,0.38l-0.88,0.95l-1.22,0.24l-0.25,0.51l0.33,0.44l-2.29,1.36l-1.44,-0.83l-0.56,0.11l-0.1,0.68l1.2,0.76l-1.54,1.58l-0.73,-0.74l-0.49,0.53l-0.0,0.73l-0.7,-0.36l-0.85,0.01l-1.35,-0.82l-0.44,0.5l0.17,0.52l-1.74,0.19l-0.44,0.37l-0.06,0.77l0.65,0.22l1.43,-0.18l-0.25,0.55l0.43,0.25l1.92,-0.17l0.11,0.21l-0.97,0.87l-0.32,0.78l0.57,0.49l0.94,-0.54l0.03,0.21l-1.12,1.1l-1.0,0.45l-0.22,-2.03l-0.7,-0.26l-0.24,-1.54l-0.89,-0.14l-0.3,0.58l0.89,2.68l-1.14,-0.65l-0.64,-0.99l-0.41,-1.75l-0.66,-0.2l-0.53,-0.62l-0.69,0.01l-0.26,0.6l0.86,1.01l0.01,0.67l1.13,1.81l-0.01,0.85l1.24,1.16l-0.62,0.34l0.04,0.98l-1.18,3.56l-1.53,-0.76l-1.53,0.27l-0.98,-0.66l-0.55,-1.02l-0.19,-2.92l-0.87,-0.74l-1.08,-2.45l-1.05,-0.93l-3.25,-1.29l-0.51,-2.63l-1.14,-2.15l-1.45,-1.55l-0.07,-1.06l-0.78,-1.2l-4.85,-1.62l-0.6,-1.26l-1.21,-0.35l0.01,-0.7l-0.54,-0.86l-0.87,0.01l-0.74,-0.59l0.02,-1.21l-0.67,-1.25l-2.72,-1.73l-2.17,-0.49l-2.39,-3.07l-3.96,-1.86l-1.23,-1.01l-0.83,-0.11l-1.06,-1.78l-0.51,-0.21l-0.92,-1.19l-1.19,-0.66l-1.01,-2.38l-1.55,-1.62l-1.04,-1.84l-1.06,-0.36l-1.94,0.39l-0.46,-0.16l-2.77,-2.14l-1.07,0.03l-1.71,-0.71l-0.53,-0.51l0.35,-2.19l0.64,-0.78l0.34,-1.37l1.36,-1.23l0.4,-0.98ZM752.86,373.71l0.73,-0.09l0.52,0.44l-1.22,1.91l0.28,-1.22l-0.3,-1.05Z",
         "name": "South Carolina"
      },
      "US-RI": {
         "path": "M860.17,132.77l0.34,0.0l1.04,2.6l-0.31,0.56l-1.07,-3.15ZM859.46,136.41l-0.28,-0.32l0.23,-1.5l0.42,1.5l-0.37,0.32ZM852.23,141.2l0.22,-0.46l-0.55,-2.18l-3.23,-9.82l5.59,-1.92l0.78,2.02l0.81,0.24l0.19,0.72l0.09,0.41l-0.76,0.26l0.03,0.29l0.53,1.43l0.59,0.48l-0.6,0.16l-0.45,0.73l0.88,0.95l-0.13,1.21l0.96,2.14l-0.3,2.06l-1.33,0.25l-3.14,2.22l-0.17,-1.18ZM856.95,131.31l0.26,0.09l0.01,0.09l-0.17,-0.08l-0.09,-0.1ZM858.34,131.95l0.24,0.47l-0.2,0.31l-0.04,-0.37l0.0,-0.4ZM857.06,144.61l0.1,0.1l-0.18,0.1l-0.03,-0.13l0.11,-0.07Z",
         "name": "Rhode Island"
      },
      "US-CT": {
         "path": "M824.64,156.55l2.8,-3.23l-0.07,-0.55l-1.32,-1.21l-3.64,-15.64l9.8,-2.55l0.6,0.44l0.65,-0.27l0.22,-0.58l14.14,-4.2l3.29,10.01l0.48,1.92l-0.03,1.67l-1.65,0.34l-0.91,0.82l-0.7,-0.35l-0.49,0.11l-0.17,0.9l-1.15,0.09l-1.26,1.27l-0.62,-0.12l-0.57,-0.99l-0.89,-0.07l-0.2,0.68l0.76,0.62l0.09,0.53l-0.89,-0.0l-1.01,0.88l-1.65,0.1l-1.14,0.95l-0.86,-0.08l-2.05,0.85l-0.4,-0.66l-0.6,0.12l-0.87,2.11l-0.59,0.3l-0.82,1.29l-0.79,-0.04l-0.94,0.74l-0.19,0.63l-0.53,0.06l-0.88,0.75l-2.75,3.08l-0.96,0.28l-1.25,-1.01Z",
         "name": "Connecticut"
      }
   },
   "height": 606.2111020895529,
   "projection": {
      "type": "lcc",
      "centralMeridian": -100.0
   },
   "width": 900.0
});

/*
 * fgnass.github.com/spin.js#v2.0.1
 */
;
! function(a, b) {
   "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b()
}(this, function() {
   "use strict";

   function a(a, b) {
      var c, d = document.createElement(a || "div");
      for (c in b) d[c] = b[c];
      return d
   }

   function b(a) {
      for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
      return a
   }

   function c(a, b, c, d) {
      var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
         f = .01 + c / d * 100,
         g = Math.max(1 - (1 - a) / b * (100 - f), a),
         h = j.substring(0, j.indexOf("Animation")).toLowerCase(),
         i = h && "-" + h + "-" || "";
      return l[e] || (m.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", m.cssRules.length), l[e] = 1), e
   }

   function d(a, b) {
      var c, d, e = a.style;
      for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < k.length; d++)
         if (c = k[d] + b, void 0 !== e[c]) return c;
      return void 0 !== e[b] ? b : void 0
   }

   function e(a, b) {
      for (var c in b) a.style[d(a, c) || c] = b[c];
      return a
   }

   function f(a) {
      for (var b = 1; b < arguments.length; b++) {
         var c = arguments[b];
         for (var d in c) void 0 === a[d] && (a[d] = c[d])
      }
      return a
   }

   function g(a, b) {
      return "string" == typeof a ? a : a[b % a.length]
   }

   function h(a) {
      this.opts = f(a || {}, h.defaults, n)
   }

   function i() {
      function c(b, c) {
         return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
      }
      m.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function(a, d) {
         function f() {
            return e(c("group", {
               coordsize: k + " " + k,
               coordorigin: -j + " " + -j
            }), {
               width: k,
               height: k
            })
         }

         function h(a, h, i) {
            b(m, b(e(f(), {
               rotation: 360 / d.lines * a + "deg",
               left: ~~h
            }), b(e(c("roundrect", {
               arcsize: d.corners
            }), {
               width: j,
               height: d.width,
               left: d.radius,
               top: -d.width >> 1,
               filter: i
            }), c("fill", {
               color: g(d.color, a),
               opacity: d.opacity
            }), c("stroke", {
               opacity: 0
            }))))
         }
         var i, j = d.length + d.width,
            k = 2 * j,
            l = 2 * -(d.width + d.length) + "px",
            m = e(f(), {
               position: "absolute",
               top: l,
               left: l
            });
         if (d.shadow)
            for (i = 1; i <= d.lines; i++) h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
         for (i = 1; i <= d.lines; i++) h(i);
         return b(a, m)
      }, h.prototype.opacity = function(a, b, c, d) {
         var e = a.firstChild;
         d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
      }
   }
   var j, k = ["webkit", "Moz", "ms", "O"],
      l = {},
      m = function() {
         var c = a("style", {
            type: "text/css"
         });
         return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet
      }(),
      n = {
         lines: 12,
         length: 7,
         width: 5,
         radius: 10,
         rotate: 0,
         corners: 1,
         color: "#000",
         direction: 1,
         speed: 1,
         trail: 100,
         opacity: .25,
         fps: 20,
         zIndex: 2e9,
         className: "spinner",
         top: "50%",
         left: "50%",
         position: "absolute"
      };
   h.defaults = {}, f(h.prototype, {
      spin: function(b) {
         this.stop(); {
            var c = this,
               d = c.opts,
               f = c.el = e(a(0, {
                  className: d.className
               }), {
                  position: d.position,
                  width: 0,
                  zIndex: d.zIndex
               });
            d.radius + d.length + d.width
         }
         if (e(f, {
               left: d.left,
               top: d.top
            }), b && b.insertBefore(f, b.firstChild || null), f.setAttribute("role", "progressbar"), c.lines(f, c.opts), !j) {
            var g, h = 0,
               i = (d.lines - 1) * (1 - d.direction) / 2,
               k = d.fps,
               l = k / d.speed,
               m = (1 - d.opacity) / (l * d.trail / 100),
               n = l / d.lines;
            ! function o() {
               h++;
               for (var a = 0; a < d.lines; a++) g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity), c.opacity(f, a * d.direction + i, g, d);
               c.timeout = c.el && setTimeout(o, ~~(1e3 / k))
            }()
         }
         return c
      },
      stop: function() {
         var a = this.el;
         return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this
      },
      lines: function(d, f) {
         function h(b, c) {
            return e(a(), {
               position: "absolute",
               width: f.length + f.width + "px",
               height: f.width + "px",
               background: b,
               boxShadow: c,
               transformOrigin: "left",
               transform: "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.radius + "px,0)",
               borderRadius: (f.corners * f.width >> 1) + "px"
            })
         }
         for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++) i = e(a(), {
            position: "absolute",
            top: 1 + ~(f.width / 2) + "px",
            transform: f.hwaccel ? "translate3d(0,0,0)" : "",
            opacity: f.opacity,
            animation: j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"
         }), f.shadow && b(i, e(h("#000", "0 0 4px #000"), {
            top: "2px"
         })), b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)")));
         return d
      },
      opacity: function(a, b, c) {
         b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
      }
   });
   var o = e(a("group"), {
      behavior: "url(#default#VML)"
   });
   return !d(o, "transform") && o.adj ? i() : j = d(o, "animation"), h
});

/*
 * nanoScrollerJS - v0.8.4 - (c) 2014 James Florentino; Licensed MIT
 */
;
! function(a) {
   return "function" == typeof define && define.amd ? define(["jquery"], function(b) {
      return a(b, window, document)
   }) : a(jQuery, window, document)
}(function(a, b, c) {
   "use strict";
   var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
   z = {
      paneClass: "nano-pane",
      sliderClass: "nano-slider",
      contentClass: "nano-content",
      iOSNativeScrolling: !1,
      preventPageScrolling: !1,
      disableResize: !1,
      alwaysVisible: !1,
      flashDelay: 1500,
      sliderMinHeight: 20,
      sliderMaxHeight: null,
      documentContext: null,
      windowContext: null
   }, u = "scrollbar", t = "scroll", l = "mousedown", m = "mouseenter", n = "mousemove", p = "mousewheel", o = "mouseup", s = "resize", h = "drag", i = "enter", w = "up", r = "panedown", f = "DOMMouseScroll", g = "down", x = "wheel", j = "keydown", k = "keyup", v = "touchmove", d = "Microsoft Internet Explorer" === b.navigator.appName && /msie 7./i.test(b.navigator.appVersion) && b.ActiveXObject, e = null, D = b.requestAnimationFrame, y = b.cancelAnimationFrame, F = c.createElement("div").style, H = function() {
      var a, b, c, d, e, f;
      for (d = ["t", "webkitT", "MozT", "msT", "OT"], a = e = 0, f = d.length; f > e; a = ++e)
         if (c = d[a], b = d[a] + "ransform", b in F) return d[a].substr(0, d[a].length - 1);
      return !1
   }(), G = function(a) {
      return H === !1 ? !1 : "" === H ? a : H + a.charAt(0).toUpperCase() + a.substr(1)
   }, E = G("transform"), B = E !== !1, A = function() {
      var a, b, d;
      return a = c.createElement("div"), b = a.style, b.position = "absolute", b.width = "100px", b.height = "100px", b.overflow = t, b.top = "-9999px", c.body.appendChild(a), d = a.offsetWidth - a.clientWidth, c.body.removeChild(a), d
   }, C = function() {
      var a, c, d;
      return c = b.navigator.userAgent, (a = /(?=.+Mac OS X)(?=.+Firefox)/.test(c)) ? (d = /Firefox\/\d{2}\./.exec(c), d && (d = d[0].replace(/\D+/g, "")), a && +d > 23) : !1
   }, q = function() {
      function j(d, f) {
         this.el = d, this.options = f, e || (e = A()), this.$el = a(this.el), this.doc = a(this.options.documentContext || c), this.win = a(this.options.windowContext || b), this.body = this.doc.find("body"), this.$content = this.$el.children("." + f.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
      }
      return j.prototype.preventScrolling = function(a, b) {
         if (this.isActive)
            if (a.type === f)(b === g && a.originalEvent.detail > 0 || b === w && a.originalEvent.detail < 0) && a.preventDefault();
            else if (a.type === p) {
            if (!a.originalEvent || !a.originalEvent.wheelDelta) return;
            (b === g && a.originalEvent.wheelDelta < 0 || b === w && a.originalEvent.wheelDelta > 0) && a.preventDefault()
         }
      }, j.prototype.nativeScrolling = function() {
         this.$content.css({
            WebkitOverflowScrolling: "touch"
         }), this.iOSNativeScrolling = !0, this.isActive = !0
      }, j.prototype.updateScrollValues = function() {
         var a, b;
         a = this.content, this.maxScrollTop = a.scrollHeight - a.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = a.scrollTop, b = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== b && this.$el.trigger("update", {
            position: this.contentScrollTop,
            maximum: this.maxScrollTop,
            direction: b
         }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
      }, j.prototype.setOnScrollStyles = function() {
         var a;
         B ? (a = {}, a[E] = "translate(0, " + this.sliderTop + "px)") : a = {
            top: this.sliderTop
         }, D ? (y && this.scrollRAF && y(this.scrollRAF), this.scrollRAF = D(function(b) {
            return function() {
               return b.scrollRAF = null, b.slider.css(a)
            }
         }(this))) : this.slider.css(a)
      }, j.prototype.createEvents = function() {
         this.events = {
            down: function(a) {
               return function(b) {
                  return a.isBeingDragged = !0, a.offsetY = b.pageY - a.slider.offset().top, a.slider.is(b.target) || (a.offsetY = 0), a.pane.addClass("active"), a.doc.bind(n, a.events[h]).bind(o, a.events[w]), a.body.bind(m, a.events[i]), !1
               }
            }(this),
            drag: function(a) {
               return function(b) {
                  return a.sliderY = b.pageY - a.$el.offset().top - a.paneTop - (a.offsetY || .5 * a.sliderHeight), a.scroll(), a.contentScrollTop >= a.maxScrollTop && a.prevScrollTop !== a.maxScrollTop ? a.$el.trigger("scrollend") : 0 === a.contentScrollTop && 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"), !1
               }
            }(this),
            up: function(a) {
               return function() {
                  return a.isBeingDragged = !1, a.pane.removeClass("active"), a.doc.unbind(n, a.events[h]).unbind(o, a.events[w]), a.body.unbind(m, a.events[i]), !1
               }
            }(this),
            resize: function(a) {
               return function() {
                  a.reset()
               }
            }(this),
            panedown: function(a) {
               return function(b) {
                  return a.sliderY = (b.offsetY || b.originalEvent.layerY) - .5 * a.sliderHeight, a.scroll(), a.events.down(b), !1
               }
            }(this),
            scroll: function(a) {
               return function(b) {
                  a.updateScrollValues(), a.isBeingDragged || (a.iOSNativeScrolling || (a.sliderY = a.sliderTop, a.setOnScrollStyles()), null != b && (a.contentScrollTop >= a.maxScrollTop ? (a.options.preventPageScrolling && a.preventScrolling(b, g), a.prevScrollTop !== a.maxScrollTop && a.$el.trigger("scrollend")) : 0 === a.contentScrollTop && (a.options.preventPageScrolling && a.preventScrolling(b, w), 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"))))
               }
            }(this),
            wheel: function(a) {
               return function(b) {
                  var c;
                  if (null != b) return c = b.delta || b.wheelDelta || b.originalEvent && b.originalEvent.wheelDelta || -b.detail || b.originalEvent && -b.originalEvent.detail, c && (a.sliderY += -c / 3), a.scroll(), !1
               }
            }(this),
            enter: function(a) {
               return function(b) {
                  var c;
                  if (a.isBeingDragged) return 1 !== (b.buttons || b.which) ? (c = a.events)[w].apply(c, arguments) : void 0
               }
            }(this)
         }
      }, j.prototype.addEvents = function() {
         var a;
         this.removeEvents(), a = this.events, this.options.disableResize || this.win.bind(s, a[s]), this.iOSNativeScrolling || (this.slider.bind(l, a[g]), this.pane.bind(l, a[r]).bind("" + p + " " + f, a[x])), this.$content.bind("" + t + " " + p + " " + f + " " + v, a[t])
      }, j.prototype.removeEvents = function() {
         var a;
         a = this.events, this.win.unbind(s, a[s]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind("" + t + " " + p + " " + f + " " + v, a[t])
      }, j.prototype.generate = function() {
         var a, c, d, f, g, h, i;
         return f = this.options, h = f.paneClass, i = f.sliderClass, a = f.contentClass, (g = this.$el.children("." + h)).length || g.children("." + i).length || this.$el.append('<div class="' + h + '"><div class="' + i + '" /></div>'), this.pane = this.$el.children("." + h), this.slider = this.pane.find("." + i), 0 === e && C() ? (d = b.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, ""), c = {
            right: -14,
            paddingRight: +d + 14
         }) : e && (c = {
            right: -e
         }, this.$el.addClass("has-scrollbar")), null != c && this.$content.css(c), this
      }, j.prototype.restore = function() {
         this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
      }, j.prototype.reset = function() {
         var a, b, c, f, g, h, i, j, k, l, m, n;
         return this.iOSNativeScrolling ? void(this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), a = this.content, f = a.style, g = f.overflowY, d && this.$content.css({
            height: this.$content.height()
         }), b = a.scrollHeight + e, l = parseInt(this.$el.css("max-height"), 10), l > 0 && (this.$el.height(""), this.$el.height(a.scrollHeight > l ? l : a.scrollHeight)), i = this.pane.outerHeight(!1), k = parseInt(this.pane.css("top"), 10), h = parseInt(this.pane.css("bottom"), 10), j = i + k + h, n = Math.round(j / b * j), n < this.options.sliderMinHeight ? n = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && n > this.options.sliderMaxHeight && (n = this.options.sliderMaxHeight), g === t && f.overflowX !== t && (n += e), this.maxSliderTop = j - n, this.contentHeight = b, this.paneHeight = i, this.paneOuterHeight = j, this.sliderHeight = n, this.paneTop = k, this.slider.height(n), this.events.scroll(), this.pane.show(), this.isActive = !0, a.scrollHeight === a.clientHeight || this.pane.outerHeight(!0) >= a.scrollHeight && g !== t ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === a.scrollHeight && g === t ? this.slider.hide() : this.slider.show(), this.pane.css({
            opacity: this.options.alwaysVisible ? 1 : "",
            visibility: this.options.alwaysVisible ? "visible" : ""
         }), c = this.$content.css("position"), ("static" === c || "relative" === c) && (m = parseInt(this.$content.css("right"), 10), m && this.$content.css({
            right: "",
            marginRight: m
         })), this)
      }, j.prototype.scroll = function() {
         return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this) : void 0
      }, j.prototype.scrollBottom = function(a) {
         return this.isActive ? (this.$content.scrollTop(this.contentHeight - this.$content.height() - a).trigger(p), this.stop().restore(), this) : void 0
      }, j.prototype.scrollTop = function(a) {
         return this.isActive ? (this.$content.scrollTop(+a).trigger(p), this.stop().restore(), this) : void 0
      }, j.prototype.scrollTo = function(a) {
         return this.isActive ? (this.scrollTop(this.$el.find(a).get(0).offsetTop), this) : void 0
      }, j.prototype.stop = function() {
         return y && this.scrollRAF && (y(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
      }, j.prototype.destroy = function() {
         return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), d && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"), this.$content.css({
            right: ""
         })), this
      }, j.prototype.flash = function() {
         return !this.iOSNativeScrolling && this.isActive ? (this.reset(), this.pane.addClass("flashed"), setTimeout(function(a) {
            return function() {
               a.pane.removeClass("flashed")
            }
         }(this), this.options.flashDelay), this) : void 0
      }, j
   }(), a.fn.nanoScroller = function(b) {
      return this.each(function() {
         var c, d;
         if ((d = this.nanoscroller) || (c = a.extend({}, z, b), this.nanoscroller = d = new q(this, c)), b && "object" == typeof b) {
            if (a.extend(d.options, b), null != b.scrollBottom) return d.scrollBottom(b.scrollBottom);
            if (null != b.scrollTop) return d.scrollTop(b.scrollTop);
            if (b.scrollTo) return d.scrollTo(b.scrollTo);
            if ("bottom" === b.scroll) return d.scrollBottom(0);
            if ("top" === b.scroll) return d.scrollTop(0);
            if (b.scroll && b.scroll instanceof a) return d.scrollTo(b.scroll);
            if (b.stop) return d.stop();
            if (b.destroy) return d.destroy();
            if (b.flash) return d.flash()
         }
         return d.reset()
      })
   }, a.fn.nanoScroller.Constructor = q
});

/*
PNotify 2.0.1 sciactive.com/pnotify/
(C) 2014 Hunter Perrin
license GPL/LGPL/MPL
*/
;
(function(e) {
   if (typeof define === "function" && define.amd) {
      define("pnotify", ["jquery"], e)
   } else {
      e(jQuery)
   }
})(function(e) {
   var t = {
      dir1: "down",
      dir2: "left",
      push: "top",
      spacing1: 15,
      spacing2: 15,
      context: e("body")
   };
   var n, r, i = e(window);
   var s = function() {
      r = e("body");
      PNotify.prototype.options.stack.context = r;
      i = e(window);
      i.bind("resize", function() {
         if (n) clearTimeout(n);
         n = setTimeout(function() {
            PNotify.positionAll(true)
         }, 10)
      })
   };
   PNotify = function(e) {
      this.parseOptions(e);
      this.init()
   };
   e.extend(PNotify.prototype, {
      version: "2.0.1",
      options: {
         title: false,
         title_escape: false,
         text: false,
         text_escape: false,
         styling: "bootstrap3",
         addclass: "",
         cornerclass: "",
         auto_display: true,
         width: "290px",
         min_height: "16px",
         type: "notice",
         icon: true,
         opacity: 1,
         animation: "fade",
         animate_speed: "slow",
         position_animate_speed: 500,
         shadow: false,
         hide: true,
         delay: 8e3,
         mouse_reset: true,
         remove: true,
         insert_brs: true,
         destroy: true,
         stack: t
      },
      modules: {},
      runModules: function(e, t) {
         var n;
         for (var r in this.modules) {
            n = typeof t === "object" && r in t ? t[r] : t;
            if (typeof this.modules[r][e] === "function") this.modules[r][e](this, typeof this.options[r] === "object" ? this.options[r] : {}, n)
         }
      },
      state: "initializing",
      timer: null,
      styles: null,
      elem: null,
      container: null,
      title_container: null,
      text_container: null,
      animating: false,
      timerHide: false,
      init: function() {
         var t = this;
         this.modules = {};
         e.extend(true, this.modules, PNotify.prototype.modules);
         if (typeof this.options.styling === "object") {
            this.styles = this.options.styling
         } else {
            this.styles = PNotify.styling[this.options.styling]
         }
         this.elem = e("<div />", {
            "class": "ui-pnotify " + this.options.addclass,
            css: {
               display: "none"
            },
            mouseenter: function(e) {
               if (t.options.mouse_reset && t.animating === "out") {
                  if (!t.timerHide) return;
                  t.cancelRemove()
               }
               if (t.options.hide && t.options.mouse_reset) t.cancelRemove()
            },
            mouseleave: function(e) {
               if (t.options.hide && t.options.mouse_reset) t.queueRemove();
               PNotify.positionAll()
            }
         });
         this.container = e("<div />", {
            "class": this.styles.container + " ui-pnotify-container " + (this.options.type === "error" ? this.styles.error : this.options.type === "primary" ? this.styles.primary : this.options.type === "info" ? this.styles.info : this.options.type === "success" ? this.styles.success : this.options.type === "warning" ? this.styles.warning : this.options.type === "danger" ? this.styles.danger : this.options.type === "alert" ? this.styles.alert : this.options.type === "system" ? this.styles.system : this.options.type === "dark" ? this.styles.dark : this.options.type === "success" ? this.styles.success : this.styles.notice)
         }).appendTo(this.elem);
         if (this.options.cornerclass !== "") this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass);
         if (this.options.shadow) this.container.addClass("ui-pnotify-shadow");
         if (this.options.icon !== false) {
            e("<div />", {
               "class": "ui-pnotify-icon"
            }).append(e("<span />", {
               "class": this.options.icon === true ? this.options.type === "error" ? this.styles.error_icon : this.options.type === "primary" ? this.styles.primary_icon : this.options.type === "info" ? this.styles.info_icon : this.options.type === "success" ? this.styles.success_icon : this.options.type === "warning" ? this.styles.warning_icon : this.options.type === "danger" ? this.styles.danger_icon : this.options.type === "alert" ? this.styles.alert_icon : this.options.type === "system" ? this.styles.system_icon : this.options.type === "dark" ? this.styles.dark_icon : this.styles.notice_icon : this.options.icon
            })).prependTo(this.container)
         }
         this.title_container = e("<h4 />", {
            "class": "ui-pnotify-title"
         }).appendTo(this.container);
         if (this.options.title === false) this.title_container.hide();
         else if (this.options.title_escape) this.title_container.text(this.options.title);
         else this.title_container.html(this.options.title);
         this.text_container = e("<div />", {
            "class": "ui-pnotify-text"
         }).appendTo(this.container);
         if (this.options.text === false) this.text_container.hide();
         else if (this.options.text_escape) this.text_container.text(this.options.text);
         else this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text);
         if (typeof this.options.width === "string") this.elem.css("width", this.options.width);
         if (typeof this.options.min_height === "string") this.container.css("min-height", this.options.min_height);
         if (this.options.stack.push === "top") PNotify.notices = e.merge([this], PNotify.notices);
         else PNotify.notices = e.merge(PNotify.notices, [this]);
         if (this.options.stack.push === "top") this.queuePosition(false, 1);
         this.options.stack.animation = false;
         this.runModules("init");
         if (this.options.auto_display) this.open();
         return this
      },
      update: function(t) {
         var n = this.options;
         this.parseOptions(n, t);
         if (this.options.cornerclass !== n.cornerclass) this.container.removeClass("ui-corner-all " + n.cornerclass).addClass(this.options.cornerclass);
         if (this.options.shadow !== n.shadow) {
            if (this.options.shadow) this.container.addClass("ui-pnotify-shadow");
            else this.container.removeClass("ui-pnotify-shadow")
         }
         if (this.options.addclass === false) this.elem.removeClass(n.addclass);
         else if (this.options.addclass !== n.addclass) this.elem.removeClass(n.addclass).addClass(this.options.addclass);
         if (this.options.title === false) this.title_container.slideUp("fast");
         else if (this.options.title !== n.title) {
            if (this.options.title_escape) this.title_container.text(this.options.title);
            else this.title_container.html(this.options.title);
            if (n.title === false) this.title_container.slideDown(200)
         }
         if (this.options.text === false) {
            this.text_container.slideUp("fast")
         } else if (this.options.text !== n.text) {
            if (this.options.text_escape) this.text_container.text(this.options.text);
            else this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text);
            if (n.text === false) this.text_container.slideDown(200)
         }
         if (this.options.type !== n.type) this.container.removeClass(this.styles.error + " " + this.styles.notice + " " + this.styles.primary + " " + this.styles.info + " " + this.styles.success + " " + this.styles.warning + " " + this.styles.danger + " " + this.styles.alert + " " + this.styles.system + " " + this.styles.dark).addClass(this.options.type === "error" ? this.styles.error : this.options.type === "primary" ? this.styles.primary : this.options.type === "info" ? this.styles.info : this.options.type === "success" ? this.styles.success : this.options.type === "warning" ? this.styles.warning : this.options.type === "danger" ? this.styles.danger : this.options.type === "alert" ? this.styles.alert : this.options.type === "system" ? this.styles.system : this.options.type === "dark" ? this.styles.dark : this.styles.notice);
         if (this.options.icon !== n.icon || this.options.icon === true && this.options.type !== n.type) {
            this.container.find("div.ui-pnotify-icon").remove();
            if (this.options.icon !== false) {
               e("<div />", {
                  "class": "ui-pnotify-icon"
               }).append(e("<span />", {
                  "class": this.options.icon === true ? this.options.type === "error" ? this.styles.error_icon : this.options.type === "primary" ? this.styles.primary_icon : this.options.type === "info" ? this.styles.info_icon : this.options.type === "success" ? this.styles.success_icon : this.options.type === "warning" ? this.styles.warning_icon : this.options.type === "danger" ? this.styles.danger_icon : this.options.type === "alert" ? this.styles.alert_icon : this.options.type === "system" ? this.styles.system_icon : this.options.type === "dark" ? this.styles.dark_icon : this.styles.notice_icon : this.options.icon
               })).prependTo(this.container)
            }
         }
         if (this.options.width !== n.width) this.elem.animate({
            width: this.options.width
         });
         if (this.options.min_height !== n.min_height) this.container.animate({
            minHeight: this.options.min_height
         });
         if (this.options.opacity !== n.opacity) this.elem.fadeTo(this.options.animate_speed, this.options.opacity);
         if (!this.options.hide) this.cancelRemove();
         else if (!n.hide) this.queueRemove();
         this.queuePosition(true);
         this.runModules("update", n);
         return this
      },
      open: function() {
         this.state = "opening";
         this.runModules("beforeOpen");
         var e = this;
         if (!this.elem.parent().length) this.elem.appendTo(this.options.stack.context ? this.options.stack.context : r);
         if (this.options.stack.push !== "top") this.position(true);
         if (this.options.animation === "fade" || this.options.animation.effect_in === "fade") {
            this.elem.show().fadeTo(0, 0).hide()
         } else {
            if (this.options.opacity !== 1) this.elem.show().fadeTo(0, this.options.opacity).hide()
         }
         this.animateIn(function() {
            e.queuePosition(true);
            if (e.options.hide) e.queueRemove();
            e.state = "open";
            e.runModules("afterOpen")
         });
         return this
      },
      remove: function(t) {
         this.state = "closing";
         this.timerHide = !!t;
         this.runModules("beforeClose");
         var n = this;
         if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null
         }
         this.animateOut(function() {
            n.state = "closed";
            n.runModules("afterClose");
            n.queuePosition(true);
            if (n.options.remove) n.elem.detach();
            n.runModules("beforeDestroy");
            if (n.options.destroy) {
               if (PNotify.notices !== null) {
                  var t = e.inArray(n, PNotify.notices);
                  if (t !== -1) {
                     PNotify.notices.splice(t, 1)
                  }
               }
            }
            n.runModules("afterDestroy")
         });
         return this
      },
      get: function() {
         return this.elem
      },
      parseOptions: function(t, n) {
         this.options = e.extend(true, {}, PNotify.prototype.options);
         this.options.stack = PNotify.prototype.options.stack;
         var r = [t, n],
            i;
         for (var s in r) {
            i = r[s];
            if (typeof i == "undefined") break;
            if (typeof i !== "object") {
               this.options.text = i
            } else {
               for (var o in i) {
                  if (this.modules[o]) {
                     e.extend(true, this.options[o], i[o])
                  } else {
                     this.options[o] = i[o]
                  }
               }
            }
         }
      },
      animateIn: function(e) {
         this.animating = "in";
         var t;
         if (typeof this.options.animation.effect_in !== "undefined") t = this.options.animation.effect_in;
         else t = this.options.animation;
         if (t === "none") {
            this.elem.show();
            e()
         } else if (t === "show") this.elem.show(this.options.animate_speed, e);
         else if (t === "fade") this.elem.show().fadeTo(this.options.animate_speed, this.options.opacity, e);
         else if (t === "slide") this.elem.slideDown(this.options.animate_speed, e);
         else if (typeof t === "function") t("in", e, this.elem);
         else this.elem.show(t, typeof this.options.animation.options_in === "object" ? this.options.animation.options_in : {}, this.options.animate_speed, e);
         if (this.elem.parent().hasClass("ui-effects-wrapper")) this.elem.parent().css({
            position: "fixed",
            overflow: "visible"
         });
         if (t !== "slide") this.elem.css("overflow", "visible");
         this.container.css("overflow", "hidden")
      },
      animateOut: function(e) {
         this.animating = "out";
         var t;
         if (typeof this.options.animation.effect_out !== "undefined") t = this.options.animation.effect_out;
         else t = this.options.animation;
         if (t === "none") {
            this.elem.hide();
            e()
         } else if (t === "show") this.elem.hide(this.options.animate_speed, e);
         else if (t === "fade") this.elem.fadeOut(this.options.animate_speed, e);
         else if (t === "slide") this.elem.slideUp(this.options.animate_speed, e);
         else if (typeof t === "function") t("out", e, this.elem);
         else this.elem.hide(t, typeof this.options.animation.options_out === "object" ? this.options.animation.options_out : {}, this.options.animate_speed, e);
         if (this.elem.parent().hasClass("ui-effects-wrapper")) this.elem.parent().css({
            position: "fixed",
            overflow: "visible"
         });
         if (t !== "slide") this.elem.css("overflow", "visible");
         this.container.css("overflow", "hidden")
      },
      position: function(e) {
         var t = this.options.stack,
            n = this.elem;
         if (n.parent().hasClass("ui-effects-wrapper")) n = this.elem.css({
            left: "0",
            top: "0",
            right: "0",
            bottom: "0"
         }).parent();
         if (typeof t.context === "undefined") t.context = r;
         if (!t) return;
         if (typeof t.nextpos1 !== "number") t.nextpos1 = t.firstpos1;
         if (typeof t.nextpos2 !== "number") t.nextpos2 = t.firstpos2;
         if (typeof t.addpos2 !== "number") t.addpos2 = 0;
         var s = n.css("display") === "none";
         if (!s || e) {
            var o, u;
            var a = {};
            var f;
            switch (t.dir1) {
               case "down":
                  f = "top";
                  break;
               case "up":
                  f = "bottom";
                  break;
               case "left":
                  f = "right";
                  break;
               case "right":
                  f = "left";
                  break
            }
            o = parseInt(n.css(f).replace(/(?:\..*|[^0-9.])/g, ""));
            if (isNaN(o)) o = 0;
            if (typeof t.firstpos1 === "undefined" && !s) {
               t.firstpos1 = o;
               t.nextpos1 = t.firstpos1
            }
            var l;
            switch (t.dir2) {
               case "down":
                  l = "top";
                  break;
               case "up":
                  l = "bottom";
                  break;
               case "left":
                  l = "right";
                  break;
               case "right":
                  l = "left";
                  break
            }
            u = parseInt(n.css(l).replace(/(?:\..*|[^0-9.])/g, ""));
            if (isNaN(u)) u = 0;
            if (typeof t.firstpos2 === "undefined" && !s) {
               t.firstpos2 = u;
               t.nextpos2 = t.firstpos2
            }
            if (t.dir1 === "down" && t.nextpos1 + n.height() > (t.context.is(r) ? i.height() : t.context.prop("scrollHeight")) || t.dir1 === "up" && t.nextpos1 + n.height() > (t.context.is(r) ? i.height() : t.context.prop("scrollHeight")) || t.dir1 === "left" && t.nextpos1 + n.width() > (t.context.is(r) ? i.width() : t.context.prop("scrollWidth")) || t.dir1 === "right" && t.nextpos1 + n.width() > (t.context.is(r) ? i.width() : t.context.prop("scrollWidth"))) {
               t.nextpos1 = t.firstpos1;
               t.nextpos2 += t.addpos2 + (typeof t.spacing2 === "undefined" ? 25 : t.spacing2);
               t.addpos2 = 0
            }
            if (t.animation && t.nextpos2 < u) {
               switch (t.dir2) {
                  case "down":
                     a.top = t.nextpos2 + "px";
                     break;
                  case "up":
                     a.bottom = t.nextpos2 + "px";
                     break;
                  case "left":
                     a.right = t.nextpos2 + "px";
                     break;
                  case "right":
                     a.left = t.nextpos2 + "px";
                     break
               }
            } else {
               if (typeof t.nextpos2 === "number") n.css(l, t.nextpos2 + "px")
            }
            switch (t.dir2) {
               case "down":
               case "up":
                  if (n.outerHeight(true) > t.addpos2) t.addpos2 = n.height();
                  break;
               case "left":
               case "right":
                  if (n.outerWidth(true) > t.addpos2) t.addpos2 = n.width();
                  break
            }
            if (typeof t.nextpos1 === "number") {
               if (t.animation && (o > t.nextpos1 || a.top || a.bottom || a.right || a.left)) {
                  switch (t.dir1) {
                     case "down":
                        a.top = t.nextpos1 + "px";
                        break;
                     case "up":
                        a.bottom = t.nextpos1 + "px";
                        break;
                     case "left":
                        a.right = t.nextpos1 + "px";
                        break;
                     case "right":
                        a.left = t.nextpos1 + "px";
                        break
                  }
               } else n.css(f, t.nextpos1 + "px")
            }
            if (a.top || a.bottom || a.right || a.left) n.animate(a, {
               duration: this.options.position_animate_speed,
               queue: false
            });
            switch (t.dir1) {
               case "down":
               case "up":
                  t.nextpos1 += n.height() + (typeof t.spacing1 === "undefined" ? 25 : t.spacing1);
                  break;
               case "left":
               case "right":
                  t.nextpos1 += n.width() + (typeof t.spacing1 === "undefined" ? 25 : t.spacing1);
                  break
            }
         }
         return this
      },
      queuePosition: function(e, t) {
         if (n) clearTimeout(n);
         if (!t) t = 10;
         n = setTimeout(function() {
            PNotify.positionAll(e)
         }, t);
         return this
      },
      cancelRemove: function() {
         if (this.timer) window.clearTimeout(this.timer);
         if (this.state === "closing") {
            this.elem.stop(true);
            this.state = "open";
            this.animating = "in";
            this.elem.css("height", "auto").animate({
               width: this.options.width,
               opacity: this.options.opacity
            }, "fast")
         }
         return this
      },
      queueRemove: function() {
         var e = this;
         this.cancelRemove();
         this.timer = window.setTimeout(function() {
            e.remove(true)
         }, isNaN(this.options.delay) ? 0 : this.options.delay);
         return this
      }
   });
   e.extend(PNotify, {
      notices: [],
      removeAll: function() {
         e.each(PNotify.notices, function() {
            if (this.remove) this.remove()
         })
      },
      positionAll: function(t) {
         if (n) clearTimeout(n);
         n = null;
         e.each(PNotify.notices, function() {
            var e = this.options.stack;
            if (!e) return;
            e.nextpos1 = e.firstpos1;
            e.nextpos2 = e.firstpos2;
            e.addpos2 = 0;
            e.animation = t
         });
         e.each(PNotify.notices, function() {
            this.position()
         })
      },
      styling: {
         jqueryui: {
            container: "ui-widget ui-widget-content ui-corner-all",
            notice: "ui-state-highlight",
            notice_icon: "ui-icon ui-icon-info",
            info: "",
            info_icon: "ui-icon ui-icon-info",
            success: "ui-state-default",
            success_icon: "ui-icon ui-icon-circle-check",
            error: "ui-state-error",
            error_icon: "ui-icon ui-icon-alert"
         },
         bootstrap2: {
            container: "alert",
            notice: "",
            notice_icon: "icon-exclamation-sign",
            info: "alert-info",
            info_icon: "icon-info-sign",
            success: "alert-success",
            success_icon: "icon-ok-sign",
            error: "alert-error",
            error_icon: "icon-warning-sign"
         },
         bootstrap3: {
            container: "alert",
            notice: "alert-default",
            notice_icon: "glyphicon glyphicon-exclamation-sign",
            error: "alert-danger",
            error_icon: "glyphicon glyphicon-warning-sign",
            primary: "alert-primary",
            primary_icon: "glyphicon glyphicon-exclamation-sign",
            info: "alert-info",
            info_icon: "glyphicon glyphicon-info-sign",
            success: "alert-success",
            success_icon: "glyphicon glyphicon-ok-sign",
            warning: "alert-warning",
            warning_icon: "glyphicon glyphicon-ok-sign",
            danger: "alert-danger",
            danger_icon: "glyphicon glyphicon-warning-sign",
            alert: "alert-alert",
            alert_icon: "glyphicon glyphicon-warning-sign",
            system: "alert-system",
            system_icon: "glyphicon glyphicon-warning-sign",
            dark: "alert-dark",
            dark_icon: "glyphicon glyphicon-warning-sign"
         }
      }
   });
   PNotify.styling.fontawesome = e.extend({}, PNotify.styling.bootstrap3);
   e.extend(PNotify.styling.fontawesome, {
      notice_icon: "fa fa-exclamation-circle",
      error_icon: "fa fa-warning",
      primary_icon: "fa fa-info",
      info_icon: "fa fa-info",
      success_icon: "fa fa-check",
      warning_icon: "fa fa-check",
      danger_icon: "fa fa-info",
      alert_icon: "fa fa-check",
      system_icon: "fa fa-warning",
      dark_icon: "fa fa-warning"
   });
   if (document.body) s();
   else e(s);
   return PNotify
});
(function(e) {
   if (typeof define === "function" && define.amd) {
      define("pnotify.buttons", ["jquery", "pnotify"], e)
   } else {
      e(jQuery, PNotify)
   }
})(function(e, t) {
   t.prototype.options.buttons = {
      closer: true,
      closer_hover: true,
      sticker: true,
      sticker_hover: true,
      labels: {
         close: "Close",
         stick: "Stick"
      }
   };
   t.prototype.modules.buttons = {
      myOptions: null,
      closer: null,
      sticker: null,
      init: function(t, n) {
         var r = this;
         this.myOptions = n;
         t.elem.on({
            mouseenter: function(e) {
               if (r.myOptions.sticker && !(t.options.nonblock && t.options.nonblock.nonblock)) r.sticker.trigger("pnotify_icon").css("visibility", "visible");
               if (r.myOptions.closer && !(t.options.nonblock && t.options.nonblock.nonblock)) r.closer.css("visibility", "visible")
            },
            mouseleave: function(e) {
               if (r.myOptions.sticker_hover) r.sticker.css("visibility", "hidden");
               if (r.myOptions.closer_hover) r.closer.css("visibility", "hidden")
            }
         });
         this.sticker = e("<div />", {
            "class": "ui-pnotify-sticker",
            css: {
               cursor: "pointer",
               visibility: n.sticker_hover ? "hidden" : "visible"
            },
            click: function() {
               t.options.hide = !t.options.hide;
               if (t.options.hide) t.queueRemove();
               else t.cancelRemove();
               e(this).trigger("pnotify_icon")
            }
         }).bind("pnotify_icon", function() {
            e(this).children().removeClass(t.styles.pin_up + " " + t.styles.pin_down).addClass(t.options.hide ? t.styles.pin_up : t.styles.pin_down)
         }).append(e("<span />", {
            "class": t.styles.pin_up,
            title: n.labels.stick
         })).prependTo(t.container);
         if (!n.sticker || t.options.nonblock && t.options.nonblock.nonblock) this.sticker.css("display", "none");
         this.closer = e("<div />", {
            "class": "ui-pnotify-closer",
            css: {
               cursor: "pointer",
               visibility: n.closer_hover ? "hidden" : "visible"
            },
            click: function() {
               t.remove(false);
               r.sticker.css("visibility", "hidden");
               r.closer.css("visibility", "hidden")
            }
         }).append(e("<span />", {
            "class": t.styles.closer,
            title: n.labels.close
         })).prependTo(t.container);
         if (!n.closer || t.options.nonblock && t.options.nonblock.nonblock) this.closer.css("display", "none")
      },
      update: function(e, t) {
         this.myOptions = t;
         if (!t.closer || e.options.nonblock && e.options.nonblock.nonblock) this.closer.css("display", "none");
         else if (t.closer) this.closer.css("display", "block");
         if (!t.sticker || e.options.nonblock && e.options.nonblock.nonblock) this.sticker.css("display", "none");
         else if (t.sticker) this.sticker.css("display", "block");
         this.sticker.trigger("pnotify_icon");
         if (t.sticker_hover) this.sticker.css("visibility", "hidden");
         else if (!(e.options.nonblock && e.options.nonblock.nonblock)) this.sticker.css("visibility", "visible");
         if (t.closer_hover) this.closer.css("visibility", "hidden");
         else if (!(e.options.nonblock && e.options.nonblock.nonblock)) this.closer.css("visibility", "visible")
      }
   };
   e.extend(t.styling.jqueryui, {
      closer: "ui-icon ui-icon-close",
      pin_up: "ui-icon ui-icon-pin-w",
      pin_down: "ui-icon ui-icon-pin-s"
   });
   e.extend(t.styling.bootstrap2, {
      closer: "icon-remove",
      pin_up: "icon-pause",
      pin_down: "icon-play"
   });
   e.extend(t.styling.bootstrap3, {
      closer: "glyphicon glyphicon-remove",
      pin_up: "glyphicon glyphicon-pause",
      pin_down: "glyphicon glyphicon-play"
   });
   e.extend(t.styling.fontawesome, {
      closer: "fa fa-times",
      pin_up: "fa fa-pause",
      pin_down: "fa fa-play"
   })
});
(function(e) {
   if (typeof define === "function" && define.amd) {
      define("pnotify.confirm", ["jquery", "pnotify"], e)
   } else {
      e(jQuery, PNotify)
   }
})(function(e, t) {
   t.prototype.options.confirm = {
      confirm: false,
      prompt: false,
      prompt_class: "",
      prompt_default: "",
      prompt_multi_line: false,
      align: "right",
      buttons: [{
         text: "Ok",
         addClass: "",
         promptTrigger: true,
         click: function(e, t) {
            e.remove();
            e.get().trigger("pnotify.confirm", [e, t])
         }
      }, {
         text: "Cancel",
         addClass: "",
         click: function(e) {
            e.remove();
            e.get().trigger("pnotify.cancel", e)
         }
      }]
   };
   t.prototype.modules.confirm = {
      container: null,
      prompt: null,
      init: function(t, n) {
         this.container = e('<div style="margin-top:5px;clear:both;" />').css("text-align", n.align).appendTo(t.container);
         if (n.confirm || n.prompt) this.makeDialog(t, n);
         else this.container.hide()
      },
      update: function(e, t) {
         if (t.confirm) {
            this.makeDialog(e, t);
            this.container.show()
         } else {
            this.container.hide().empty()
         }
      },
      afterOpen: function(e, t) {
         if (t.prompt) this.prompt.focus()
      },
      makeDialog: function(t, n) {
         var r = false,
            i = this,
            s, o;
         this.container.empty();
         if (n.prompt) {
            this.prompt = e("<" + (n.prompt_multi_line ? 'textarea rows="5"' : 'input type="text"') + ' style="margin-bottom:5px;clear:both;" />').addClass(t.styles.input + " " + n.prompt_class).val(n.prompt_default).appendTo(this.container)
         }
         for (var u in n.buttons) {
            s = n.buttons[u];
            if (r) this.container.append(" ");
            else r = true;
            o = e('<button type="button" />').addClass(t.styles.btn + " " + s.addClass).text(s.text).appendTo(this.container).on("click", function(e) {
               return function() {
                  if (typeof e.click == "function") {
                     e.click(t, n.prompt ? i.prompt.val() : null)
                  }
               }
            }(s));
            if (n.prompt && !n.prompt_multi_line && s.promptTrigger) this.prompt.keypress(function(e) {
               return function(t) {
                  if (t.keyCode == 13) e.click()
               }
            }(o));
            if (t.styles.text) {
               o.wrapInner('<span class="' + t.styles.text + '"></span>')
            }
            if (t.styles.btnhover) {
               o.hover(function(e) {
                  return function() {
                     e.addClass(t.styles.btnhover)
                  }
               }(o), function(e) {
                  return function() {
                     e.removeClass(t.styles.btnhover)
                  }
               }(o))
            }
            if (t.styles.btnactive) {
               o.on("mousedown", function(e) {
                  return function() {
                     e.addClass(t.styles.btnactive)
                  }
               }(o)).on("mouseup", function(e) {
                  return function() {
                     e.removeClass(t.styles.btnactive)
                  }
               }(o))
            }
            if (t.styles.btnfocus) {
               o.on("focus", function(e) {
                  return function() {
                     e.addClass(t.styles.btnfocus)
                  }
               }(o)).on("blur", function(e) {
                  return function() {
                     e.removeClass(t.styles.btnfocus)
                  }
               }(o))
            }
         }
      }
   };
   e.extend(t.styling.jqueryui, {
      btn: "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",
      btnhover: "ui-state-hover",
      btnactive: "ui-state-active",
      btnfocus: "ui-state-focus",
      input: "",
      text: "ui-button-text"
   });
   e.extend(t.styling.bootstrap2, {
      btn: "btn",
      input: ""
   });
   e.extend(t.styling.bootstrap3, {
      btn: "btn btn-default",
      input: "form-control"
   });
   e.extend(t.styling.fontawesome, {
      btn: "btn btn-default",
      input: "form-control"
   })
});
(function(e) {
   if (typeof define === "function" && define.amd) {
      define("pnotify.desktop", ["jquery", "pnotify"], e)
   } else {
      e(jQuery, PNotify)
   }
})(function(e, t) {
   var n;
   var r = function(e, t) {
      if ("Notification" in window) {
         r = function(e, t) {
            return new Notification(e, t)
         }
      } else if ("mozNotification" in navigator) {
         r = function(e, t) {
            return navigator.mozNotification.createNotification(e, t.body, t.icon).show()
         }
      } else if ("webkitNotifications" in window) {
         r = function(e, t) {
            return window.webkitNotifications.createNotification(t.icon, e, t.body)
         }
      } else {
         r = function(e, t) {
            return null
         }
      }
      return r(e, t)
   };
   t.prototype.options.desktop = {
      desktop: false,
      icon: null,
      tag: null
   };
   t.prototype.modules.desktop = {
      tag: null,
      icon: null,
      genNotice: function(e, t) {
         if (t.icon === null) {
            this.icon = "http://sciactive.com/pnotify/includes/desktop/" + e.options.type + ".png"
         } else if (t.icon === false) {
            this.icon = null
         } else {
            this.icon = t.icon
         }
         if (this.tag === null || t.tag !== null) {
            this.tag = t.tag === null ? "PNotify-" + Math.round(Math.random() * 1e6) : t.tag
         }
         e.desktop = r(e.options.title, {
            icon: this.icon,
            body: e.options.text,
            tag: this.tag
         });
         if (!("close" in e.desktop)) {
            e.desktop.close = function() {
               e.desktop.cancel()
            }
         }
         e.desktop.onclick = function() {
            e.elem.trigger("click")
         };
         e.desktop.onclose = function() {
            if (e.state !== "closing" && e.state !== "closed") {
               e.remove()
            }
         }
      },
      init: function(e, r) {
         if (!r.desktop) return;
         n = t.desktop.checkPermission();
         if (n != 0) return;
         this.genNotice(e, r)
      },
      update: function(e, t, r) {
         if (n != 0 || !t.desktop) return;
         this.genNotice(e, t)
      },
      beforeOpen: function(e, t) {
         if (n != 0 || !t.desktop) return;
         e.elem.css({
            left: "-10000px",
            display: "none"
         })
      },
      afterOpen: function(e, t) {
         if (n != 0 || !t.desktop) return;
         e.elem.css({
            left: "-10000px",
            display: "none"
         });
         if ("show" in e.desktop) {
            e.desktop.show()
         }
      },
      beforeClose: function(e, t) {
         if (n != 0 || !t.desktop) return;
         e.elem.css({
            left: "-10000px",
            display: "none"
         })
      },
      afterClose: function(e, t) {
         if (n != 0 || !t.desktop) return;
         e.elem.css({
            left: "-10000px",
            display: "none"
         });
         e.desktop.close()
      }
   };
   t.desktop = {
      permission: function() {
         if (typeof Notification !== "undefined" && "requestPermission" in Notification) {
            Notification.requestPermission()
         } else if ("webkitNotifications" in window) {
            window.webkitNotifications.requestPermission()
         }
      },
      checkPermission: function() {
         if (typeof Notification !== "undefined" && "permission" in Notification) {
            return Notification.permission == "granted" ? 0 : 1
         } else if ("webkitNotifications" in window) {
            return window.webkitNotifications.checkPermission()
         } else {
            return 1
         }
      }
   };
   n = t.desktop.checkPermission()
})

/*!
 * jQuery Smooth Scroll - v1.5.4 - 2014-11-17
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
;
(function(t) {
   "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
   function e(t) {
      return t.replace(/(:|\.|\/)/g, "\\$1")
   }
   var l = "1.5.4",
      o = {},
      n = {
         exclude: [],
         excludeWithin: [],
         offset: 0,
         direction: "top",
         scrollElement: null,
         scrollTarget: null,
         beforeScroll: function() {},
         afterScroll: function() {},
         easing: "swing",
         speed: 400,
         autoCoefficient: 2,
         preventDefault: !0
      },
      s = function(e) {
         var l = [],
            o = !1,
            n = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
         return this.each(function() {
            if (this !== document && this !== window) {
               var e = t(this);
               e[n]() > 0 ? l.push(this) : (e[n](1), o = e[n]() > 0, o && l.push(this), e[n](0))
            }
         }), l.length || this.each(function() {
            "BODY" === this.nodeName && (l = [this])
         }), "first" === e.el && l.length > 1 && (l = [l[0]]), l
      };
   t.fn.extend({
      scrollable: function(t) {
         var e = s.call(this, {
            dir: t
         });
         return this.pushStack(e)
      },
      firstScrollable: function(t) {
         var e = s.call(this, {
            el: "first",
            dir: t
         });
         return this.pushStack(e)
      },
      smoothScroll: function(l, o) {
         if (l = l || {}, "options" === l) return o ? this.each(function() {
            var e = t(this),
               l = t.extend(e.data("ssOpts") || {}, o);
            t(this).data("ssOpts", l)
         }) : this.first().data("ssOpts");
         var n = t.extend({}, t.fn.smoothScroll.defaults, l),
            s = t.smoothScroll.filterPath(location.pathname);
         return this.unbind("click.smoothscroll").bind("click.smoothscroll", function(l) {
            var o = this,
               r = t(this),
               i = t.extend({}, n, r.data("ssOpts") || {}),
               c = n.exclude,
               a = i.excludeWithin,
               f = 0,
               h = 0,
               u = !0,
               d = {},
               p = location.hostname === o.hostname || !o.hostname,
               m = i.scrollTarget || t.smoothScroll.filterPath(o.pathname) === s,
               S = e(o.hash);
            if (i.scrollTarget || p && m && S) {
               for (; u && c.length > f;) r.is(e(c[f++])) && (u = !1);
               for (; u && a.length > h;) r.closest(a[h++]).length && (u = !1)
            } else u = !1;
            u && (i.preventDefault && l.preventDefault(), t.extend(d, i, {
               scrollTarget: i.scrollTarget || S,
               link: o
            }), t.smoothScroll(d))
         }), this
      }
   }), t.smoothScroll = function(e, l) {
      if ("options" === e && "object" == typeof l) return t.extend(o, l);
      var n, s, r, i, c, a = 0,
         f = "offset",
         h = "scrollTop",
         u = {},
         d = {};
      "number" == typeof e ? (n = t.extend({
         link: null
      }, t.fn.smoothScroll.defaults, o), r = e) : (n = t.extend({
         link: null
      }, t.fn.smoothScroll.defaults, e || {}, o), n.scrollElement && (f = "position", "static" === n.scrollElement.css("position") && n.scrollElement.css("position", "relative"))), h = "left" === n.direction ? "scrollLeft" : h, n.scrollElement ? (s = n.scrollElement, /^(?:HTML|BODY)$/.test(s[0].nodeName) || (a = s[h]())) : s = t("html, body").firstScrollable(n.direction), n.beforeScroll.call(s, n), r = "number" == typeof e ? e : l || t(n.scrollTarget)[f]() && t(n.scrollTarget)[f]()[n.direction] || 0, u[h] = r + a + n.offset, i = n.speed, "auto" === i && (c = u[h] - s.scrollTop(), 0 > c && (c *= -1), i = c / n.autoCoefficient), d = {
         duration: i,
         easing: n.easing,
         complete: function() {
            n.afterScroll.call(n.link, n)
         }
      }, n.step && (d.step = n.step), s.length ? s.stop().animate(u, d) : n.afterScroll.call(n.link, n)
   }, t.smoothScroll.version = l, t.smoothScroll.filterPath = function(t) {
      return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
   }, t.fn.smoothScroll.defaults = n
});

/*!
Underscore.js 1.7.0
http://underscorejs.org
(c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
Underscore may be freely distributed under the MIT license.
*/
;
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);

/*!
Waypoints - 3.0.0
Copyright © 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
;
! function() {
   "use strict";

   function t(o) {
      if (!o) throw new Error("No options passed to Waypoint constructor");
      if (!o.element) throw new Error("No element option passed to Waypoint constructor");
      if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
      this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
         name: this.options.group,
         axis: this.axis
      }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
   }
   var e = 0,
      i = {};
   t.prototype.queueTrigger = function(t) {
      this.group.queueTrigger(this, t)
   }, t.prototype.trigger = function(t) {
      this.enabled && this.callback && this.callback.apply(this, t)
   }, t.prototype.destroy = function() {
      this.context.remove(this), this.group.remove(this), delete i[this.key]
   }, t.prototype.disable = function() {
      return this.enabled = !1, this
   }, t.prototype.enable = function() {
      return this.context.refresh(), this.enabled = !0, this
   }, t.prototype.next = function() {
      return this.group.next(this)
   }, t.prototype.previous = function() {
      return this.group.previous(this)
   }, t.destroyAll = function() {
      var t = [];
      for (var e in i) t.push(i[e]);
      for (var o = 0, r = t.length; r > o; o++) t[o].destroy()
   }, t.refreshAll = function() {
      t.Context.refreshAll()
   }, t.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight
   }, t.viewportWidth = function() {
      return document.documentElement.clientWidth
   }, t.adapters = [], t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
   }, t.offsetAliases = {
      "bottom-in-view": function() {
         return this.context.innerHeight() - this.adapter.outerHeight()
      },
      "right-in-view": function() {
         return this.context.innerWidth() - this.adapter.outerWidth()
      }
   }, window.Waypoint = t
}(),
function() {
   "use strict";

   function t(t) {
      window.setTimeout(t, 1e3 / 60)
   }

   function e(t) {
      this.element = t, this.Adapter = r.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
         x: this.adapter.scrollLeft(),
         y: this.adapter.scrollTop()
      }, this.waypoints = {
         vertical: {},
         horizontal: {}
      }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
   }
   var i = 0,
      o = {},
      r = window.Waypoint,
      n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t,
      s = window.onload;
   e.prototype.add = function(t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[e][t.key] = t, this.refresh()
   }, e.prototype.checkEmpty = function() {
      var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
         e = this.Adapter.isEmptyObject(this.waypoints.vertical);
      t && e && (this.adapter.off(".waypoints"), delete o[this.key])
   }, e.prototype.createThrottledResizeHandler = function() {
      function t() {
         e.handleResize(), e.didResize = !1
      }
      var e = this;
      this.adapter.on("resize.waypoints", function() {
         e.didResize || (e.didResize = !0, n(t))
      })
   }, e.prototype.createThrottledScrollHandler = function() {
      function t() {
         e.handleScroll(), e.didScroll = !1
      }
      var e = this;
      this.adapter.on("scroll.waypoints", function() {
         (!e.didScroll || r.isTouch) && (e.didScroll = !0, n(t))
      })
   }, e.prototype.handleResize = function() {
      r.Context.refreshAll()
   }, e.prototype.handleScroll = function() {
      var t = {},
         e = {
            horizontal: {
               newScroll: this.adapter.scrollLeft(),
               oldScroll: this.oldScroll.x,
               forward: "right",
               backward: "left"
            },
            vertical: {
               newScroll: this.adapter.scrollTop(),
               oldScroll: this.oldScroll.y,
               forward: "down",
               backward: "up"
            }
         };
      for (var i in e) {
         var o = e[i],
            r = o.newScroll > o.oldScroll,
            n = r ? o.forward : o.backward;
         for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
               l = o.oldScroll < a.triggerPoint,
               h = o.newScroll >= a.triggerPoint,
               p = l && h,
               u = !l && !h;
            (p || u) && (a.queueTrigger(n), t[a.group.id] = a.group)
         }
      }
      for (var c in t) t[c].flushTriggers();
      this.oldScroll = {
         x: e.horizontal.newScroll,
         y: e.vertical.newScroll
      }
   }, e.prototype.innerHeight = function() {
      return this.element === this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
   }, e.prototype.remove = function(t) {
      delete this.waypoints[t.axis][t.key], this.checkEmpty()
   }, e.prototype.innerWidth = function() {
      return this.element === this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
   }, e.prototype.destroy = function() {
      var t = [];
      for (var e in this.waypoints)
         for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
      for (var o = 0, r = t.length; r > o; o++) t[o].destroy()
   }, e.prototype.refresh = function() {
      var t, e = this.element === this.element.window,
         i = this.adapter.offset(),
         o = {};
      this.handleScroll(), t = {
         horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
         },
         vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
         }
      };
      for (var r in t) {
         var n = t[r];
         for (var s in this.waypoints[r]) {
            var a, l, h, p, u, c = this.waypoints[r][s],
               d = c.options.offset,
               f = c.triggerPoint,
               w = 0,
               y = null == f;
            c.element !== c.element.window && (w = c.adapter.offset()[n.offsetProp]), "function" == typeof d ? d = d.apply(c) : "string" == typeof d && (d = parseFloat(d), c.options.offset.indexOf("%") > -1 && (d = Math.ceil(n.contextDimension * d / 100))), a = n.contextScroll - n.contextOffset, c.triggerPoint = w + a - d, l = f < n.oldScroll, h = c.triggerPoint >= n.oldScroll, p = l && h, u = !l && !h, !y && p ? (c.queueTrigger(n.backward), o[c.group.id] = c.group) : !y && u ? (c.queueTrigger(n.forward), o[c.group.id] = c.group) : y && n.oldScroll >= c.triggerPoint && (c.queueTrigger(n.forward), o[c.group.id] = c.group)
         }
      }
      for (var g in o) o[g].flushTriggers();
      return this
   }, e.findOrCreateByElement = function(t) {
      return e.findByElement(t) || new e(t)
   }, e.refreshAll = function() {
      for (var t in o) o[t].refresh()
   }, e.findByElement = function(t) {
      return o[t.waypointContextKey]
   }, window.onload = function() {
      s && s(), e.refreshAll()
   }, r.Context = e
}(),
function() {
   "use strict";

   function t(t, e) {
      return t.triggerPoint - e.triggerPoint
   }

   function e(t, e) {
      return e.triggerPoint - t.triggerPoint
   }

   function i(t) {
      this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
   }
   var o = {
         vertical: {},
         horizontal: {}
      },
      r = window.Waypoint;
   i.prototype.add = function(t) {
      this.waypoints.push(t)
   }, i.prototype.clearTriggerQueues = function() {
      this.triggerQueues = {
         up: [],
         down: [],
         left: [],
         right: []
      }
   }, i.prototype.flushTriggers = function() {
      for (var i in this.triggerQueues) {
         var o = this.triggerQueues[i],
            r = "up" === i || "left" === i;
         o.sort(r ? e : t);
         for (var n = 0, s = o.length; s > n; n += 1) {
            var a = o[n];
            (a.options.continuous || n === o.length - 1) && a.trigger([i])
         }
      }
      this.clearTriggerQueues()
   }, i.prototype.next = function(e) {
      this.waypoints.sort(t);
      var i = r.Adapter.inArray(e, this.waypoints),
         o = i === this.waypoints.length - 1;
      return o ? null : this.waypoints[i + 1]
   }, i.prototype.previous = function(e) {
      this.waypoints.sort(t);
      var i = r.Adapter.inArray(e, this.waypoints);
      return i ? this.waypoints[i - 1] : null
   }, i.prototype.queueTrigger = function(t, e) {
      this.triggerQueues[e].push(t)
   }, i.prototype.remove = function(t) {
      var e = r.Adapter.inArray(t, this.waypoints);
      e > -1 && this.waypoints.splice(e, 1)
   }, i.prototype.first = function() {
      return this.waypoints[0]
   }, i.prototype.last = function() {
      return this.waypoints[this.waypoints.length - 1]
   }, i.findOrCreate = function(t) {
      return o[t.axis][t.name] || new i(t)
   }, r.Group = i
}(),
function() {
   "use strict";

   function t(t) {
      this.$element = e(t)
   }
   var e = window.jQuery,
      i = window.Waypoint;
   e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
      t.prototype[i] = function() {
         var t = Array.prototype.slice.call(arguments);
         return this.$element[i].apply(this.$element, t)
      }
   }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
      t[o] = e[o]
   }), i.adapters.push({
      name: "jquery",
      Adapter: t
   }), i.Adapter = t
}(),
function() {
   "use strict";

   function t(t) {
      return function() {
         var i = [],
            o = arguments[0];
         return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
            var r = t.extend({}, o, {
               element: this
            });
            "string" == typeof r.context && (r.context = t(this).closest(r.context)[0]), i.push(new e(r))
         }), i
      }
   }
   var e = window.Waypoint;
   window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();

/*--------------------------------------------------------------------------
* linq.js - LINQ for JavaScript
* ver 2.2.0.2 (Jan. 21th, 2011)
*
* created and maintained by neuecc <ils@neue.cc>
* licensed under Microsoft Public License(Ms-PL)
* http://neue.cc/
* http://linqjs.codeplex.com/
*--------------------------------------------------------------------------*/

Enumerable = (function ()
{
    var Enumerable = function (getEnumerator)
    {
        this.GetEnumerator = getEnumerator;
    }

    // Generator

    Enumerable.Choice = function () // variable argument
    {
        var args = (arguments[0] instanceof Array) ? arguments[0] : arguments;

        return new Enumerable(function ()
        {
            return new IEnumerator(
                Functions.Blank,
                function ()
                {
                    return this.Yield(args[Math.floor(Math.random() * args.length)]);
                },
                Functions.Blank);
        });
    }

    Enumerable.Cycle = function () // variable argument
    {
        var args = (arguments[0] instanceof Array) ? arguments[0] : arguments;

        return new Enumerable(function ()
        {
            var index = 0;
            return new IEnumerator(
                Functions.Blank,
                function ()
                {
                    if (index >= args.length) index = 0;
                    return this.Yield(args[index++]);
                },
                Functions.Blank);
        });
    }

    Enumerable.Empty = function ()
    {
        return new Enumerable(function ()
        {
            return new IEnumerator(
                Functions.Blank,
                function () { return false; },
                Functions.Blank);
        });
    }

    Enumerable.From = function (obj)
    {
        if (obj == null)
        {
            return Enumerable.Empty();
        }
        if (obj instanceof Enumerable)
        {
            return obj;
        }
        if (typeof obj == Types.Number || typeof obj == Types.Boolean)
        {
            return Enumerable.Repeat(obj, 1);
        }
        if (typeof obj == Types.String)
        {
            return new Enumerable(function ()
            {
                var index = 0;
                return new IEnumerator(
                    Functions.Blank,
                    function ()
                    {
                        return (index < obj.length) ? this.Yield(obj.charAt(index++)) : false;
                    },
                    Functions.Blank);
            });
        }
        if (typeof obj != Types.Function)
        {
            // array or array like object
            if (typeof obj.length == Types.Number)
            {
                return new ArrayEnumerable(obj);
            }

            // JScript's IEnumerable
            if (!(obj instanceof Object) && Utils.IsIEnumerable(obj))
            {
                return new Enumerable(function ()
                {
                    var isFirst = true;
                    var enumerator;
                    return new IEnumerator(
                        function () { enumerator = new Enumerator(obj); },
                        function ()
                        {
                            if (isFirst) isFirst = false;
                            else enumerator.moveNext();

                            return (enumerator.atEnd()) ? false : this.Yield(enumerator.item());
                        },
                        Functions.Blank);
                });
            }
        }

        // case function/object : Create KeyValuePair[]
        return new Enumerable(function ()
        {
            var array = [];
            var index = 0;

            return new IEnumerator(
                function ()
                {
                    for (var key in obj)
                    {
                        if (!(obj[key] instanceof Function))
                        {
                            array.push({ Key: key, Value: obj[key] });
                        }
                    }
                },
                function ()
                {
                    return (index < array.length)
                        ? this.Yield(array[index++])
                        : false;
                },
                Functions.Blank);
        });
    },

    Enumerable.Return = function (element)
    {
        return Enumerable.Repeat(element, 1);
    }

    // Overload:function(input, pattern)
    // Overload:function(input, pattern, flags)
    Enumerable.Matches = function (input, pattern, flags)
    {
        if (flags == null) flags = "";
        if (pattern instanceof RegExp)
        {
            flags += (pattern.ignoreCase) ? "i" : "";
            flags += (pattern.multiline) ? "m" : "";
            pattern = pattern.source;
        }
        if (flags.indexOf("g") === -1) flags += "g";

        return new Enumerable(function ()
        {
            var regex;
            return new IEnumerator(
                function () { regex = new RegExp(pattern, flags) },
                function ()
                {
                    var match = regex.exec(input);
                    return (match) ? this.Yield(match) : false;
                },
                Functions.Blank);
        });
    }

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.Range = function (start, count, step)
    {
        if (step == null) step = 1;
        return Enumerable.ToInfinity(start, step).Take(count);
    }

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.RangeDown = function (start, count, step)
    {
        if (step == null) step = 1;
        return Enumerable.ToNegativeInfinity(start, step).Take(count);
    }

    // Overload:function(start, to)
    // Overload:function(start, to, step)
    Enumerable.RangeTo = function (start, to, step)
    {
        if (step == null) step = 1;
        return (start < to)
            ? Enumerable.ToInfinity(start, step).TakeWhile(function (i) { return i <= to; })
            : Enumerable.ToNegativeInfinity(start, step).TakeWhile(function (i) { return i >= to; })
    }

    // Overload:function(obj)
    // Overload:function(obj, num)
    Enumerable.Repeat = function (obj, num)
    {
        if (num != null) return Enumerable.Repeat(obj).Take(num);

        return new Enumerable(function ()
        {
            return new IEnumerator(
                Functions.Blank,
                function () { return this.Yield(obj); },
                Functions.Blank);
        });
    }

    Enumerable.RepeatWithFinalize = function (initializer, finalizer)
    {
        initializer = Utils.CreateLambda(initializer);
        finalizer = Utils.CreateLambda(finalizer);

        return new Enumerable(function ()
        {
            var element;
            return new IEnumerator(
                function () { element = initializer(); },
                function () { return this.Yield(element); },
                function ()
                {
                    if (element != null)
                    {
                        finalizer(element);
                        element = null;
                    }
                });
        });
    }

    // Overload:function(func)
    // Overload:function(func, count)
    Enumerable.Generate = function (func, count)
    {
        if (count != null) return Enumerable.Generate(func).Take(count);
        func = Utils.CreateLambda(func);

        return new Enumerable(function ()
        {
            return new IEnumerator(
                Functions.Blank,
                function () { return this.Yield(func()); },
                Functions.Blank);
        });
    }

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.ToInfinity = function (start, step)
    {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function ()
        {
            var value;
            return new IEnumerator(
                function () { value = start - step },
                function () { return this.Yield(value += step); },
                Functions.Blank);
        });
    }

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.ToNegativeInfinity = function (start, step)
    {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function ()
        {
            var value;
            return new IEnumerator(
                function () { value = start + step },
                function () { return this.Yield(value -= step); },
                Functions.Blank);
        });
    }

    Enumerable.Unfold = function (seed, func)
    {
        func = Utils.CreateLambda(func);

        return new Enumerable(function ()
        {
            var isFirst = true;
            var value;
            return new IEnumerator(
                Functions.Blank,
                function ()
                {
                    if (isFirst)
                    {
                        isFirst = false;
                        value = seed;
                        return this.Yield(value);
                    }
                    value = func(value);
                    return this.Yield(value);
                },
                Functions.Blank);
        });
    }

    // Extension Methods

    Enumerable.prototype =
    {
        /* Projection and Filtering Methods */

        // Overload:function(func)
        // Overload:function(func, resultSelector<element>)
        // Overload:function(func, resultSelector<element, nestLevel>)
        CascadeBreadthFirst: function (func, resultSelector)
        {
            var source = this;
            func = Utils.CreateLambda(func);
            resultSelector = Utils.CreateLambda(resultSelector);

            return new Enumerable(function ()
            {
                var enumerator;
                var nestLevel = 0;
                var buffer = [];

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        while (true)
                        {
                            if (enumerator.MoveNext())
                            {
                                buffer.push(enumerator.Current());
                                return this.Yield(resultSelector(enumerator.Current(), nestLevel));
                            }

                            var next = Enumerable.From(buffer).SelectMany(function (x) { return func(x); });
                            if (!next.Any())
                            {
                                return false;
                            }
                            else
                            {
                                nestLevel++;
                                buffer = [];
                                Utils.Dispose(enumerator);
                                enumerator = next.GetEnumerator();
                            }
                        }
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        // Overload:function(func)
        // Overload:function(func, resultSelector<element>)
        // Overload:function(func, resultSelector<element, nestLevel>)
        CascadeDepthFirst: function (func, resultSelector)
        {
            var source = this;
            func = Utils.CreateLambda(func);
            resultSelector = Utils.CreateLambda(resultSelector);

            return new Enumerable(function ()
            {
                var enumeratorStack = [];
                var enumerator;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        while (true)
                        {
                            if (enumerator.MoveNext())
                            {
                                var value = resultSelector(enumerator.Current(), enumeratorStack.length);
                                enumeratorStack.push(enumerator);
                                enumerator = Enumerable.From(func(enumerator.Current())).GetEnumerator();
                                return this.Yield(value);
                            }

                            if (enumeratorStack.length <= 0) return false;
                            Utils.Dispose(enumerator);
                            enumerator = enumeratorStack.pop();
                        }
                    },
                    function ()
                    {
                        try { Utils.Dispose(enumerator); }
                        finally { Enumerable.From(enumeratorStack).ForEach(function (s) { s.Dispose(); }) }
                    });
            });
        },

        Flatten: function ()
        {
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var middleEnumerator = null;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        while (true)
                        {
                            if (middleEnumerator != null)
                            {
                                if (middleEnumerator.MoveNext())
                                {
                                    return this.Yield(middleEnumerator.Current());
                                }
                                else
                                {
                                    middleEnumerator = null;
                                }
                            }

                            if (enumerator.MoveNext())
                            {
                                if (enumerator.Current() instanceof Array)
                                {
                                    Utils.Dispose(middleEnumerator);
                                    middleEnumerator = Enumerable.From(enumerator.Current())
                                        .SelectMany(Functions.Identity)
                                        .Flatten()
                                        .GetEnumerator();
                                    continue;
                                }
                                else
                                {
                                    return this.Yield(enumerator.Current());
                                }
                            }

                            return false;
                        }
                    },
                    function ()
                    {
                        try { Utils.Dispose(enumerator); }
                        finally { Utils.Dispose(middleEnumerator); }
                    });
            });
        },

        Pairwise: function (selector)
        {
            var source = this;
            selector = Utils.CreateLambda(selector);

            return new Enumerable(function ()
            {
                var enumerator;

                return new IEnumerator(
                    function ()
                    {
                        enumerator = source.GetEnumerator();
                        enumerator.MoveNext();
                    },
                    function ()
                    {
                        var prev = enumerator.Current();
                        return (enumerator.MoveNext())
                            ? this.Yield(selector(prev, enumerator.Current()))
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        // Overload:function(func)
        // Overload:function(seed,func<value,element>)
        // Overload:function(seed,func<value,element>,resultSelector)
        Scan: function (seed, func, resultSelector)
        {
            if (resultSelector != null) return this.Scan(seed, func).Select(resultSelector);

            var isUseSeed;
            if (func == null)
            {
                func = Utils.CreateLambda(seed); // arguments[0]
                isUseSeed = false;
            }
            else
            {
                func = Utils.CreateLambda(func);
                isUseSeed = true;
            }
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var value;
                var isFirst = true;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        if (isFirst)
                        {
                            isFirst = false;
                            if (!isUseSeed)
                            {
                                if (enumerator.MoveNext())
                                {
                                    return this.Yield(value = enumerator.Current());
                                }
                            }
                            else
                            {
                                return this.Yield(value = seed);
                            }
                        }

                        return (enumerator.MoveNext())
                            ? this.Yield(value = func(value, enumerator.Current()))
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        // Overload:function(selector<element>)
        // Overload:function(selector<element,index>)
        Select: function (selector)
        {
            var source = this;
            selector = Utils.CreateLambda(selector);

            return new Enumerable(function ()
            {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        return (enumerator.MoveNext())
                            ? this.Yield(selector(enumerator.Current(), index++))
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        // Overload:function(collectionSelector<element>)
        // Overload:function(collectionSelector<element,index>)
        // Overload:function(collectionSelector<element>,resultSelector)
        // Overload:function(collectionSelector<element,index>,resultSelector)
        SelectMany: function (collectionSelector, resultSelector)
        {
            var source = this;
            collectionSelector = Utils.CreateLambda(collectionSelector);
            if (resultSelector == null) resultSelector = function (a, b) { return b; }
            resultSelector = Utils.CreateLambda(resultSelector);

            return new Enumerable(function ()
            {
                var enumerator;
                var middleEnumerator = undefined;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        if (middleEnumerator === undefined)
                        {
                            if (!enumerator.MoveNext()) return false;
                        }
                        do
                        {
                            if (middleEnumerator == null)
                            {
                                var middleSeq = collectionSelector(enumerator.Current(), index++);
                                middleEnumerator = Enumerable.From(middleSeq).GetEnumerator();
                            }
                            if (middleEnumerator.MoveNext())
                            {
                                return this.Yield(resultSelector(enumerator.Current(), middleEnumerator.Current()));
                            }
                            Utils.Dispose(middleEnumerator);
                            middleEnumerator = null;
                        } while (enumerator.MoveNext())
                        return false;
                    },
                    function ()
                    {
                        try { Utils.Dispose(enumerator); }
                        finally { Utils.Dispose(middleEnumerator); }
                    })
            });
        },

        // Overload:function(predicate<element>)
        // Overload:function(predicate<element,index>)
        Where: function (predicate)
        {
            predicate = Utils.CreateLambda(predicate);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        while (enumerator.MoveNext())
                        {
                            if (predicate(enumerator.Current(), index++))
                            {
                                return this.Yield(enumerator.Current());
                            }
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        OfType: function (type)
        {
            var typeName;
            switch (type)
            {
                case Number: typeName = Types.Number; break;
                case String: typeName = Types.String; break;
                case Boolean: typeName = Types.Boolean; break;
                case Function: typeName = Types.Function; break;
                default: typeName = null; break;
            }
            return (typeName === null)
                ? this.Where(function (x) { return x instanceof type })
                : this.Where(function (x) { return typeof x === typeName });
        },

        // Overload:function(second,selector<outer,inner>)
        // Overload:function(second,selector<outer,inner,index>)
        Zip: function (second, selector)
        {
            selector = Utils.CreateLambda(selector);
            var source = this;

            return new Enumerable(function ()
            {
                var firstEnumerator;
                var secondEnumerator;
                var index = 0;

                return new IEnumerator(
                    function ()
                    {
                        firstEnumerator = source.GetEnumerator();
                        secondEnumerator = Enumerable.From(second).GetEnumerator();
                    },
                    function ()
                    {
                        if (firstEnumerator.MoveNext() && secondEnumerator.MoveNext())
                        {
                            return this.Yield(selector(firstEnumerator.Current(), secondEnumerator.Current(), index++));
                        }
                        return false;
                    },
                    function ()
                    {
                        try { Utils.Dispose(firstEnumerator); }
                        finally { Utils.Dispose(secondEnumerator); }
                    })
            });
        },

        /* Join Methods */

        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
        Join: function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
        {
            outerKeySelector = Utils.CreateLambda(outerKeySelector);
            innerKeySelector = Utils.CreateLambda(innerKeySelector);
            resultSelector = Utils.CreateLambda(resultSelector);
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function ()
            {
                var outerEnumerator;
                var lookup;
                var innerElements = null;
                var innerCount = 0;

                return new IEnumerator(
                    function ()
                    {
                        outerEnumerator = source.GetEnumerator();
                        lookup = Enumerable.From(inner).ToLookup(innerKeySelector, Functions.Identity, compareSelector);
                    },
                    function ()
                    {
                        while (true)
                        {
                            if (innerElements != null)
                            {
                                var innerElement = innerElements[innerCount++];
                                if (innerElement !== undefined)
                                {
                                    return this.Yield(resultSelector(outerEnumerator.Current(), innerElement));
                                }

                                innerElement = null;
                                innerCount = 0;
                            }

                            if (outerEnumerator.MoveNext())
                            {
                                var key = outerKeySelector(outerEnumerator.Current());
                                innerElements = lookup.Get(key).ToArray();
                            }
                            else
                            {
                                return false;
                            }
                        }
                    },
                    function () { Utils.Dispose(outerEnumerator); })
            });
        },

        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
        // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
        GroupJoin: function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
        {
            outerKeySelector = Utils.CreateLambda(outerKeySelector);
            innerKeySelector = Utils.CreateLambda(innerKeySelector);
            resultSelector = Utils.CreateLambda(resultSelector);
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator = source.GetEnumerator();
                var lookup = null;

                return new IEnumerator(
                    function ()
                    {
                        enumerator = source.GetEnumerator();
                        lookup = Enumerable.From(inner).ToLookup(innerKeySelector, Functions.Identity, compareSelector);
                    },
                    function ()
                    {
                        if (enumerator.MoveNext())
                        {
                            var innerElement = lookup.Get(outerKeySelector(enumerator.Current()));
                            return this.Yield(resultSelector(enumerator.Current(), innerElement));
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        /* Set Methods */

        All: function (predicate)
        {
            predicate = Utils.CreateLambda(predicate);

            var result = true;
            this.ForEach(function (x)
            {
                if (!predicate(x))
                {
                    result = false;
                    return false; // break
                }
            });
            return result;
        },

        // Overload:function()
        // Overload:function(predicate)
        Any: function (predicate)
        {
            predicate = Utils.CreateLambda(predicate);

            var enumerator = this.GetEnumerator();
            try
            {
                if (arguments.length == 0) return enumerator.MoveNext(); // case:function()

                while (enumerator.MoveNext()) // case:function(predicate)
                {
                    if (predicate(enumerator.Current())) return true;
                }
                return false;
            }
            finally { Utils.Dispose(enumerator); }
        },

        Concat: function (second)
        {
            var source = this;

            return new Enumerable(function ()
            {
                var firstEnumerator;
                var secondEnumerator;

                return new IEnumerator(
                    function () { firstEnumerator = source.GetEnumerator(); },
                    function ()
                    {
                        if (secondEnumerator == null)
                        {
                            if (firstEnumerator.MoveNext()) return this.Yield(firstEnumerator.Current());
                            secondEnumerator = Enumerable.From(second).GetEnumerator();
                        }
                        if (secondEnumerator.MoveNext()) return this.Yield(secondEnumerator.Current());
                        return false;
                    },
                    function ()
                    {
                        try { Utils.Dispose(firstEnumerator); }
                        finally { Utils.Dispose(secondEnumerator); }
                    })
            });
        },

        Insert: function (index, second)
        {
            var source = this;

            return new Enumerable(function ()
            {
                var firstEnumerator;
                var secondEnumerator;
                var count = 0;
                var isEnumerated = false;

                return new IEnumerator(
                    function ()
                    {
                        firstEnumerator = source.GetEnumerator();
                        secondEnumerator = Enumerable.From(second).GetEnumerator();
                    },
                    function ()
                    {
                        if (count == index && secondEnumerator.MoveNext())
                        {
                            isEnumerated = true;
                            return this.Yield(secondEnumerator.Current());
                        }
                        if (firstEnumerator.MoveNext())
                        {
                            count++;
                            return this.Yield(firstEnumerator.Current());
                        }
                        if (!isEnumerated && secondEnumerator.MoveNext())
                        {
                            return this.Yield(secondEnumerator.Current());
                        }
                        return false;
                    },
                    function ()
                    {
                        try { Utils.Dispose(firstEnumerator); }
                        finally { Utils.Dispose(secondEnumerator); }
                    })
            });
        },

        Alternate: function (value)
        {
            value = Enumerable.Return(value);
            return this.SelectMany(function (elem)
            {
                return Enumerable.Return(elem).Concat(value);
            }).TakeExceptLast();
        },

        // Overload:function(value)
        // Overload:function(value, compareSelector)
        Contains: function (value, compareSelector)
        {
            compareSelector = Utils.CreateLambda(compareSelector);
            var enumerator = this.GetEnumerator();
            try
            {
                while (enumerator.MoveNext())
                {
                    if (compareSelector(enumerator.Current()) === value) return true;
                }
                return false;
            }
            finally { Utils.Dispose(enumerator) }
        },

        DefaultIfEmpty: function (defaultValue)
        {
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var isFirst = true;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        if (enumerator.MoveNext())
                        {
                            isFirst = false;
                            return this.Yield(enumerator.Current());
                        }
                        else if (isFirst)
                        {
                            isFirst = false;
                            return this.Yield(defaultValue);
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        // Overload:function()
        // Overload:function(compareSelector)
        Distinct: function (compareSelector)
        {
            return this.Except(Enumerable.Empty(), compareSelector);
        },

        // Overload:function(second)
        // Overload:function(second, compareSelector)
        Except: function (second, compareSelector)
        {
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var keys;

                return new IEnumerator(
                    function ()
                    {
                        enumerator = source.GetEnumerator();
                        keys = new Dictionary(compareSelector);
                        Enumerable.From(second).ForEach(function (key) { keys.Add(key); });
                    },
                    function ()
                    {
                        while (enumerator.MoveNext())
                        {
                            var current = enumerator.Current();
                            if (!keys.Contains(current))
                            {
                                keys.Add(current);
                                return this.Yield(current);
                            }
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        // Overload:function(second)
        // Overload:function(second, compareSelector)
        Intersect: function (second, compareSelector)
        {
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var keys;
                var outs;

                return new IEnumerator(
                    function ()
                    {
                        enumerator = source.GetEnumerator();

                        keys = new Dictionary(compareSelector);
                        Enumerable.From(second).ForEach(function (key) { keys.Add(key); });
                        outs = new Dictionary(compareSelector);
                    },
                    function ()
                    {
                        while (enumerator.MoveNext())
                        {
                            var current = enumerator.Current();
                            if (!outs.Contains(current) && keys.Contains(current))
                            {
                                outs.Add(current);
                                return this.Yield(current);
                            }
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        // Overload:function(second)
        // Overload:function(second, compareSelector)
        SequenceEqual: function (second, compareSelector)
        {
            compareSelector = Utils.CreateLambda(compareSelector);

            var firstEnumerator = this.GetEnumerator();
            try
            {
                var secondEnumerator = Enumerable.From(second).GetEnumerator();
                try
                {
                    while (firstEnumerator.MoveNext())
                    {
                        if (!secondEnumerator.MoveNext()
                            || compareSelector(firstEnumerator.Current()) !== compareSelector(secondEnumerator.Current()))
                        {
                            return false;
                        }
                    }

                    if (secondEnumerator.MoveNext()) return false;
                    return true;
                }
                finally { Utils.Dispose(secondEnumerator); }
            }
            finally { Utils.Dispose(firstEnumerator); }
        },

        Union: function (second, compareSelector)
        {
            compareSelector = Utils.CreateLambda(compareSelector);
            var source = this;

            return new Enumerable(function ()
            {
                var firstEnumerator;
                var secondEnumerator;
                var keys;

                return new IEnumerator(
                    function ()
                    {
                        firstEnumerator = source.GetEnumerator();
                        keys = new Dictionary(compareSelector);
                    },
                    function ()
                    {
                        var current;
                        if (secondEnumerator === undefined)
                        {
                            while (firstEnumerator.MoveNext())
                            {
                                current = firstEnumerator.Current();
                                if (!keys.Contains(current))
                                {
                                    keys.Add(current);
                                    return this.Yield(current);
                                }
                            }
                            secondEnumerator = Enumerable.From(second).GetEnumerator();
                        }
                        while (secondEnumerator.MoveNext())
                        {
                            current = secondEnumerator.Current();
                            if (!keys.Contains(current))
                            {
                                keys.Add(current);
                                return this.Yield(current);
                            }
                        }
                        return false;
                    },
                    function ()
                    {
                        try { Utils.Dispose(firstEnumerator); }
                        finally { Utils.Dispose(secondEnumerator); }
                    })
            });
        },

        /* Ordering Methods */

        OrderBy: function (keySelector)
        {
            return new OrderedEnumerable(this, keySelector, false);
        },

        OrderByDescending: function (keySelector)
        {
            return new OrderedEnumerable(this, keySelector, true);
        },

        Reverse: function ()
        {
            var source = this;

            return new Enumerable(function ()
            {
                var buffer;
                var index;

                return new IEnumerator(
                    function ()
                    {
                        buffer = source.ToArray();
                        index = buffer.length;
                    },
                    function ()
                    {
                        return (index > 0)
                            ? this.Yield(buffer[--index])
                            : false;
                    },
                    Functions.Blank)
            });
        },

        Shuffle: function ()
        {
            var source = this;

            return new Enumerable(function ()
            {
                var buffer;

                return new IEnumerator(
                    function () { buffer = source.ToArray(); },
                    function ()
                    {
                        if (buffer.length > 0)
                        {
                            var i = Math.floor(Math.random() * buffer.length);
                            return this.Yield(buffer.splice(i, 1)[0]);
                        }
                        return false;
                    },
                    Functions.Blank)
            });
        },

        /* Grouping Methods */

        // Overload:function(keySelector)
        // Overload:function(keySelector,elementSelector)
        // Overload:function(keySelector,elementSelector,resultSelector)
        // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
        GroupBy: function (keySelector, elementSelector, resultSelector, compareSelector)
        {
            var source = this;
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            if (resultSelector != null) resultSelector = Utils.CreateLambda(resultSelector);
            compareSelector = Utils.CreateLambda(compareSelector);

            return new Enumerable(function ()
            {
                var enumerator;

                return new IEnumerator(
                    function ()
                    {
                        enumerator = source.ToLookup(keySelector, elementSelector, compareSelector)
                            .ToEnumerable()
                            .GetEnumerator();
                    },
                    function ()
                    {
                        while (enumerator.MoveNext())
                        {
                            return (resultSelector == null)
                                ? this.Yield(enumerator.Current())
                                : this.Yield(resultSelector(enumerator.Current().Key(), enumerator.Current()));
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        // Overload:function(keySelector)
        // Overload:function(keySelector,elementSelector)
        // Overload:function(keySelector,elementSelector,resultSelector)
        // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
        PartitionBy: function (keySelector, elementSelector, resultSelector, compareSelector)
        {

            var source = this;
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            compareSelector = Utils.CreateLambda(compareSelector);
            var hasResultSelector;
            if (resultSelector == null)
            {
                hasResultSelector = false;
                resultSelector = function (key, group) { return new Grouping(key, group) }
            }
            else
            {
                hasResultSelector = true;
                resultSelector = Utils.CreateLambda(resultSelector);
            }

            return new Enumerable(function ()
            {
                var enumerator;
                var key;
                var compareKey;
                var group = [];

                return new IEnumerator(
                    function ()
                    {
                        enumerator = source.GetEnumerator();
                        if (enumerator.MoveNext())
                        {
                            key = keySelector(enumerator.Current());
                            compareKey = compareSelector(key);
                            group.push(elementSelector(enumerator.Current()));
                        }
                    },
                    function ()
                    {
                        var hasNext;
                        while ((hasNext = enumerator.MoveNext()) == true)
                        {
                            if (compareKey === compareSelector(keySelector(enumerator.Current())))
                            {
                                group.push(elementSelector(enumerator.Current()));
                            }
                            else break;
                        }

                        if (group.length > 0)
                        {
                            var result = (hasResultSelector)
                                ? resultSelector(key, Enumerable.From(group))
                                : resultSelector(key, group);
                            if (hasNext)
                            {
                                key = keySelector(enumerator.Current());
                                compareKey = compareSelector(key);
                                group = [elementSelector(enumerator.Current())];
                            }
                            else group = [];

                            return this.Yield(result);
                        }

                        return false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        BufferWithCount: function (count)
        {
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;

                return new IEnumerator(
                function () { enumerator = source.GetEnumerator(); },
                function ()
                {
                    var array = [];
                    var index = 0;
                    while (enumerator.MoveNext())
                    {
                        array.push(enumerator.Current());
                        if (++index >= count) return this.Yield(array);
                    }
                    if (array.length > 0) return this.Yield(array);
                    return false;
                },
                function () { Utils.Dispose(enumerator); })
            });
        },

        /* Aggregate Methods */

        // Overload:function(func)
        // Overload:function(seed,func)
        // Overload:function(seed,func,resultSelector)
        Aggregate: function (seed, func, resultSelector)
        {
            return this.Scan(seed, func, resultSelector).Last();
        },

        // Overload:function()
        // Overload:function(selector)
        Average: function (selector)
        {
            selector = Utils.CreateLambda(selector);

            var sum = 0;
            var count = 0;
            this.ForEach(function (x)
            {
                sum += selector(x);
                ++count;
            });

            return sum / count;
        },

        // Overload:function()
        // Overload:function(predicate)
        Count: function (predicate)
        {
            predicate = (predicate == null) ? Functions.True : Utils.CreateLambda(predicate);

            var count = 0;
            this.ForEach(function (x, i)
            {
                if (predicate(x, i)) ++count;
            });
            return count;
        },

        // Overload:function()
        // Overload:function(selector)
        Max: function (selector)
        {
            if (selector == null) selector = Functions.Identity;
            return this.Select(selector).Aggregate(function (a, b) { return (a > b) ? a : b; });
        },

        // Overload:function()
        // Overload:function(selector)
        Min: function (selector)
        {
            if (selector == null) selector = Functions.Identity;
            return this.Select(selector).Aggregate(function (a, b) { return (a < b) ? a : b; });
        },

        MaxBy: function (keySelector)
        {
            keySelector = Utils.CreateLambda(keySelector);
            return this.Aggregate(function (a, b) { return (keySelector(a) > keySelector(b)) ? a : b });
        },

        MinBy: function (keySelector)
        {
            keySelector = Utils.CreateLambda(keySelector);
            return this.Aggregate(function (a, b) { return (keySelector(a) < keySelector(b)) ? a : b });
        },

        // Overload:function()
        // Overload:function(selector)
        Sum: function (selector)
        {
            if (selector == null) selector = Functions.Identity;
            return this.Select(selector).Aggregate(0, function (a, b) { return a + b; });
        },

        /* Paging Methods */

        ElementAt: function (index)
        {
            var value;
            var found = false;
            this.ForEach(function (x, i)
            {
                if (i == index)
                {
                    value = x;
                    found = true;
                    return false;
                }
            });

            if (!found) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
            return value;
        },

        ElementAtOrDefault: function (index, defaultValue)
        {
            var value;
            var found = false;
            this.ForEach(function (x, i)
            {
                if (i == index)
                {
                    value = x;
                    found = true;
                    return false;
                }
            });

            return (!found) ? defaultValue : value;
        },

        // Overload:function()
        // Overload:function(predicate)
        First: function (predicate)
        {
            if (predicate != null) return this.Where(predicate).First();

            var value;
            var found = false;
            this.ForEach(function (x)
            {
                value = x;
                found = true;
                return false;
            });

            if (!found) throw new Error("First:No element satisfies the condition.");
            return value;
        },

        // Overload:function(defaultValue)
        // Overload:function(defaultValue,predicate)
        FirstOrDefault: function (defaultValue, predicate)
        {
            if (predicate != null) return this.Where(predicate).FirstOrDefault(defaultValue);

            var value;
            var found = false;
            this.ForEach(function (x)
            {
                value = x;
                found = true;
                return false;
            });
            return (!found) ? defaultValue : value;
        },

        // Overload:function()
        // Overload:function(predicate)
        Last: function (predicate)
        {
            if (predicate != null) return this.Where(predicate).Last();

            var value;
            var found = false;
            this.ForEach(function (x)
            {
                found = true;
                value = x;
            });

            if (!found) throw new Error("Last:No element satisfies the condition.");
            return value;
        },

        // Overload:function(defaultValue)
        // Overload:function(defaultValue,predicate)
        LastOrDefault: function (defaultValue, predicate)
        {
            if (predicate != null) return this.Where(predicate).LastOrDefault(defaultValue);

            var value;
            var found = false;
            this.ForEach(function (x)
            {
                found = true;
                value = x;
            });
            return (!found) ? defaultValue : value;
        },

        // Overload:function()
        // Overload:function(predicate)
        Single: function (predicate)
        {
            if (predicate != null) return this.Where(predicate).Single();

            var value;
            var found = false;
            this.ForEach(function (x)
            {
                if (!found)
                {
                    found = true;
                    value = x;
                }
                else throw new Error("Single:sequence contains more than one element.");
            });

            if (!found) throw new Error("Single:No element satisfies the condition.");
            return value;
        },

        // Overload:function(defaultValue)
        // Overload:function(defaultValue,predicate)
        SingleOrDefault: function (defaultValue, predicate)
        {
            if (predicate != null) return this.Where(predicate).SingleOrDefault(defaultValue);

            var value;
            var found = false;
            this.ForEach(function (x)
            {
                if (!found)
                {
                    found = true;
                    value = x;
                }
                else throw new Error("Single:sequence contains more than one element.");
            });

            return (!found) ? defaultValue : value;
        },

        Skip: function (count)
        {
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function ()
                    {
                        enumerator = source.GetEnumerator();
                        while (index++ < count && enumerator.MoveNext()) { };
                    },
                    function ()
                    {
                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        // Overload:function(predicate<element>)
        // Overload:function(predicate<element,index>)
        SkipWhile: function (predicate)
        {
            predicate = Utils.CreateLambda(predicate);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var index = 0;
                var isSkipEnd = false;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        while (!isSkipEnd)
                        {
                            if (enumerator.MoveNext())
                            {
                                if (!predicate(enumerator.Current(), index++))
                                {
                                    isSkipEnd = true;
                                    return this.Yield(enumerator.Current());
                                }
                                continue;
                            }
                            else return false;
                        }

                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;

                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        Take: function (count)
        {
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        return (index++ < count && enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); }
                )
            });
        },

        // Overload:function(predicate<element>)
        // Overload:function(predicate<element,index>)
        TakeWhile: function (predicate)
        {
            predicate = Utils.CreateLambda(predicate);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        return (enumerator.MoveNext() && predicate(enumerator.Current(), index++))
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        // Overload:function()
        // Overload:function(count)
        TakeExceptLast: function (count)
        {
            if (count == null) count = 1;
            var source = this;

            return new Enumerable(function ()
            {
                if (count <= 0) return source.GetEnumerator(); // do nothing

                var enumerator;
                var q = [];

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        while (enumerator.MoveNext())
                        {
                            if (q.length == count)
                            {
                                q.push(enumerator.Current());
                                return this.Yield(q.shift());
                            }
                            q.push(enumerator.Current());
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        TakeFromLast: function (count)
        {
            if (count <= 0 || count == null) return Enumerable.Empty();
            var source = this;

            return new Enumerable(function ()
            {
                var sourceEnumerator;
                var enumerator;
                var q = [];

                return new IEnumerator(
                    function () { sourceEnumerator = source.GetEnumerator(); },
                    function ()
                    {
                        while (sourceEnumerator.MoveNext())
                        {
                            if (q.length == count) q.shift()
                            q.push(sourceEnumerator.Current());
                        }
                        if (enumerator == null)
                        {
                            enumerator = Enumerable.From(q).GetEnumerator();
                        }
                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        IndexOf: function (item)
        {
            var found = null;
            this.ForEach(function (x, i)
            {
                if (x === item)
                {
                    found = i;
                    return true;
                }
            });

            return (found !== null) ? found : -1;
        },

        LastIndexOf: function (item)
        {
            var result = -1;
            this.ForEach(function (x, i)
            {
                if (x === item) result = i;
            });

            return result;
        },

        /* Convert Methods */

        ToArray: function ()
        {
            var array = [];
            this.ForEach(function (x) { array.push(x) });
            return array;
        },

        // Overload:function(keySelector)
        // Overload:function(keySelector, elementSelector)
        // Overload:function(keySelector, elementSelector, compareSelector)
        ToLookup: function (keySelector, elementSelector, compareSelector)
        {
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            compareSelector = Utils.CreateLambda(compareSelector);

            var dict = new Dictionary(compareSelector);
            this.ForEach(function (x)
            {
                var key = keySelector(x);
                var element = elementSelector(x);

                var array = dict.Get(key);
                if (array !== undefined) array.push(element);
                else dict.Add(key, [element]);
            });
            return new Lookup(dict);
        },

        ToObject: function (keySelector, elementSelector)
        {
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);

            var obj = {};
            this.ForEach(function (x)
            {
                obj[keySelector(x)] = elementSelector(x);
            });
            return obj;
        },

        // Overload:function(keySelector, elementSelector)
        // Overload:function(keySelector, elementSelector, compareSelector)
        ToDictionary: function (keySelector, elementSelector, compareSelector)
        {
            keySelector = Utils.CreateLambda(keySelector);
            elementSelector = Utils.CreateLambda(elementSelector);
            compareSelector = Utils.CreateLambda(compareSelector);

            var dict = new Dictionary(compareSelector);
            this.ForEach(function (x)
            {
                dict.Add(keySelector(x), elementSelector(x));
            });
            return dict;
        },

        // Overload:function()
        // Overload:function(replacer)
        // Overload:function(replacer, space)
        ToJSON: function (replacer, space)
        {
            return JSON.stringify(this.ToArray(), replacer, space);
        },

        // Overload:function()
        // Overload:function(separator)
        // Overload:function(separator,selector)
        ToString: function (separator, selector)
        {
            if (separator == null) separator = "";
            if (selector == null) selector = Functions.Identity;

            return this.Select(selector).ToArray().join(separator);
        },


        /* Action Methods */

        // Overload:function(action<element>)
        // Overload:function(action<element,index>)
        Do: function (action)
        {
            var source = this;
            action = Utils.CreateLambda(action);

            return new Enumerable(function ()
            {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        if (enumerator.MoveNext())
                        {
                            action(enumerator.Current(), index++);
                            return this.Yield(enumerator.Current());
                        }
                        return false;
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        // Overload:function(action<element>)
        // Overload:function(action<element,index>)
        // Overload:function(func<element,bool>)
        // Overload:function(func<element,index,bool>)
        ForEach: function (action)
        {
            action = Utils.CreateLambda(action);

            var index = 0;
            var enumerator = this.GetEnumerator();
            try
            {
                while (enumerator.MoveNext())
                {
                    if (action(enumerator.Current(), index++) === false) break;
                }
            }
            finally { Utils.Dispose(enumerator); }
        },

        // Overload:function()
        // Overload:function(separator)
        // Overload:function(separator,selector)
        Write: function (separator, selector)
        {
            if (separator == null) separator = "";
            selector = Utils.CreateLambda(selector);

            var isFirst = true;
            this.ForEach(function (item)
            {
                if (isFirst) isFirst = false;
                else document.write(separator);
                document.write(selector(item));
            });
        },

        // Overload:function()
        // Overload:function(selector)
        WriteLine: function (selector)
        {
            selector = Utils.CreateLambda(selector);

            this.ForEach(function (item)
            {
                document.write(selector(item));
                document.write("<br />");
            });
        },

        Force: function ()
        {
            var enumerator = this.GetEnumerator();

            try { while (enumerator.MoveNext()) { } }
            finally { Utils.Dispose(enumerator); }
        },

        /* Functional Methods */

        Let: function (func)
        {
            func = Utils.CreateLambda(func);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;

                return new IEnumerator(
                    function ()
                    {
                        enumerator = Enumerable.From(func(source)).GetEnumerator();
                    },
                    function ()
                    {
                        return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); })
            });
        },

        Share: function ()
        {
            var source = this;
            var sharedEnumerator;

            return new Enumerable(function ()
            {
                return new IEnumerator(
                    function ()
                    {
                        if (sharedEnumerator == null)
                        {
                            sharedEnumerator = source.GetEnumerator();
                        }
                    },
                    function ()
                    {
                        return (sharedEnumerator.MoveNext())
                            ? this.Yield(sharedEnumerator.Current())
                            : false;
                    },
                    Functions.Blank
                )
            });
        },

        MemoizeAll: function ()
        {
            var source = this;
            var cache;
            var enumerator;

            return new Enumerable(function ()
            {
                var index = -1;

                return new IEnumerator(
                    function ()
                    {
                        if (enumerator == null)
                        {
                            enumerator = source.GetEnumerator();
                            cache = [];
                        }
                    },
                    function ()
                    {
                        index++;
                        if (cache.length <= index)
                        {
                            return (enumerator.MoveNext())
                                ? this.Yield(cache[index] = enumerator.Current())
                                : false;
                        }

                        return this.Yield(cache[index]);
                    },
                    Functions.Blank
                )
            });
        },

        /* Error Handling Methods */

        Catch: function (handler)
        {
            handler = Utils.CreateLambda(handler);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        try
                        {
                            return (enumerator.MoveNext())
                               ? this.Yield(enumerator.Current())
                               : false;
                        }
                        catch (e)
                        {
                            handler(e);
                            return false;
                        }
                    },
                    function () { Utils.Dispose(enumerator); });
            });
        },

        Finally: function (finallyAction)
        {
            finallyAction = Utils.CreateLambda(finallyAction);
            var source = this;

            return new Enumerable(function ()
            {
                var enumerator;

                return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function ()
                    {
                        return (enumerator.MoveNext())
                           ? this.Yield(enumerator.Current())
                           : false;
                    },
                    function ()
                    {
                        try { Utils.Dispose(enumerator); }
                        finally { finallyAction(); }
                    });
            });
        },

        /* For Debug Methods */

        // Overload:function()
        // Overload:function(message)
        // Overload:function(message,selector)
        Trace: function (message, selector)
        {
            if (message == null) message = "Trace";
            selector = Utils.CreateLambda(selector);

            return this.Do(function (item)
            {
                console.log(message, ":", selector(item));
            });
        }
    }

    // private

    // static functions
    var Functions =
    {
        Identity: function (x) { return x; },
        True: function () { return true; },
        Blank: function () { }
    }

    // static const
    var Types =
    {
        Boolean: typeof true,
        Number: typeof 0,
        String: typeof "",
        Object: typeof {},
        Undefined: typeof undefined,
        Function: typeof function () { }
    }

    // static utility methods
    var Utils =
    {
        // Create anonymous function from lambda expression string
        CreateLambda: function (expression)
        {
            if (expression == null) return Functions.Identity;
            if (typeof expression == Types.String)
            {
                if (expression == "")
                {
                    return Functions.Identity;
                }
                else if (expression.indexOf("=>") == -1)
                {
                    return new Function("$,$$,$$$,$$$$", "return " + expression);
                }
                else
                {
                    var expr = expression.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
                    return new Function(expr[1], "return " + expr[2]);
                }
            }
            return expression;
        },

        IsIEnumerable: function (obj)
        {
            if (typeof Enumerator != Types.Undefined)
            {
                try
                {
                    new Enumerator(obj);
                    return true;
                }
                catch (e) { }
            }
            return false;
        },

        Compare: function (a, b)
        {
            return (a === b) ? 0
                : (a > b) ? 1
                : -1;
        },

        Dispose: function (obj)
        {
            if (obj != null) obj.Dispose();
        }
    }

    // IEnumerator State
    var State = { Before: 0, Running: 1, After: 2 }

    // name "Enumerator" is conflict JScript's "Enumerator"
    var IEnumerator = function (initialize, tryGetNext, dispose)
    {
        var yielder = new Yielder();
        var state = State.Before;

        this.Current = yielder.Current;
        this.MoveNext = function ()
        {
            try
            {
                switch (state)
                {
                    case State.Before:
                        state = State.Running;
                        initialize(); // fall through
                    case State.Running:
                        if (tryGetNext.apply(yielder))
                        {
                            return true;
                        }
                        else
                        {
                            this.Dispose();
                            return false;
                        }
                    case State.After:
                        return false;
                }
            }
            catch (e)
            {
                this.Dispose();
                throw e;
            }
        }
        this.Dispose = function ()
        {
            if (state != State.Running) return;

            try { dispose(); }
            finally { state = State.After; }
        }
    }

    // for tryGetNext
    var Yielder = function ()
    {
        var current = null;
        this.Current = function () { return current; }
        this.Yield = function (value)
        {
            current = value;
            return true;
        }
    }

    // for OrderBy/ThenBy

    var OrderedEnumerable = function (source, keySelector, descending, parent)
    {
        this.source = source;
        this.keySelector = Utils.CreateLambda(keySelector);
        this.descending = descending;
        this.parent = parent;
    }
    OrderedEnumerable.prototype = new Enumerable();

    OrderedEnumerable.prototype.CreateOrderedEnumerable = function (keySelector, descending)
    {
        return new OrderedEnumerable(this.source, keySelector, descending, this);
    }

    OrderedEnumerable.prototype.ThenBy = function (keySelector)
    {
        return this.CreateOrderedEnumerable(keySelector, false);
    }

    OrderedEnumerable.prototype.ThenByDescending = function (keySelector)
    {
        return this.CreateOrderedEnumerable(keySelector, true);
    }

    OrderedEnumerable.prototype.GetEnumerator = function ()
    {
        var self = this;
        var buffer;
        var indexes;
        var index = 0;

        return new IEnumerator(
            function ()
            {
                buffer = [];
                indexes = [];
                self.source.ForEach(function (item, index)
                {
                    buffer.push(item);
                    indexes.push(index);
                });
                var sortContext = SortContext.Create(self, null);
                sortContext.GenerateKeys(buffer);

                indexes.sort(function (a, b) { return sortContext.Compare(a, b); });
            },
            function ()
            {
                return (index < indexes.length)
                    ? this.Yield(buffer[indexes[index++]])
                    : false;
            },
            Functions.Blank
        )
    }

    var SortContext = function (keySelector, descending, child)
    {
        this.keySelector = keySelector;
        this.descending = descending;
        this.child = child;
        this.keys = null;
    }

    SortContext.Create = function (orderedEnumerable, currentContext)
    {
        var context = new SortContext(orderedEnumerable.keySelector, orderedEnumerable.descending, currentContext);
        if (orderedEnumerable.parent != null) return SortContext.Create(orderedEnumerable.parent, context);
        return context;
    }

    SortContext.prototype.GenerateKeys = function (source)
    {
        var len = source.length;
        var keySelector = this.keySelector;
        var keys = new Array(len);
        for (var i = 0; i < len; i++) keys[i] = keySelector(source[i]);
        this.keys = keys;

        if (this.child != null) this.child.GenerateKeys(source);
    }

    SortContext.prototype.Compare = function (index1, index2)
    {
        var comparison = Utils.Compare(this.keys[index1], this.keys[index2]);

        if (comparison == 0)
        {
            if (this.child != null) return this.child.Compare(index1, index2)
            comparison = Utils.Compare(index1, index2);
        }

        return (this.descending) ? -comparison : comparison;
    }

    // optimize array or arraylike object

    var ArrayEnumerable = function (source)
    {
        this.source = source;
    }
    ArrayEnumerable.prototype = new Enumerable();

    ArrayEnumerable.prototype.Any = function (predicate)
    {
        return (predicate == null)
            ? (this.source.length > 0)
            : Enumerable.prototype.Any.apply(this, arguments);
    }

    ArrayEnumerable.prototype.Count = function (predicate)
    {
        return (predicate == null)
            ? this.source.length
            : Enumerable.prototype.Count.apply(this, arguments);
    }

    ArrayEnumerable.prototype.ElementAt = function (index)
    {
        return (0 <= index && index < this.source.length)
            ? this.source[index]
            : Enumerable.prototype.ElementAt.apply(this, arguments);
    }

    ArrayEnumerable.prototype.ElementAtOrDefault = function (index, defaultValue)
    {
        return (0 <= index && index < this.source.length)
            ? this.source[index]
            : defaultValue;
    }

    ArrayEnumerable.prototype.First = function (predicate)
    {
        return (predicate == null && this.source.length > 0)
            ? this.source[0]
            : Enumerable.prototype.First.apply(this, arguments);
    }

    ArrayEnumerable.prototype.FirstOrDefault = function (defaultValue, predicate)
    {
        if (predicate != null)
        {
            return Enumerable.prototype.FirstOrDefault.apply(this, arguments);
        }

        return this.source.length > 0 ? this.source[0] : defaultValue;
    }

    ArrayEnumerable.prototype.Last = function (predicate)
    {
        return (predicate == null && this.source.length > 0)
            ? this.source[this.source.length - 1]
            : Enumerable.prototype.Last.apply(this, arguments);
    }

    ArrayEnumerable.prototype.LastOrDefault = function (defaultValue, predicate)
    {
        if (predicate != null)
        {
            return Enumerable.prototype.LastOrDefault.apply(this, arguments);
        }

        return this.source.length > 0 ? this.source[this.source.length - 1] : defaultValue;
    }

    ArrayEnumerable.prototype.Skip = function (count)
    {
        var source = this.source;

        return new Enumerable(function ()
        {
            var index;

            return new IEnumerator(
                function () { index = (count < 0) ? 0 : count },
                function ()
                {
                    return (index < source.length)
                        ? this.Yield(source[index++])
                        : false;
                },
                Functions.Blank);
        });
    };

    ArrayEnumerable.prototype.TakeExceptLast = function (count)
    {
        if (count == null) count = 1;
        return this.Take(this.source.length - count);
    }

    ArrayEnumerable.prototype.TakeFromLast = function (count)
    {
        return this.Skip(this.source.length - count);
    }

    ArrayEnumerable.prototype.Reverse = function ()
    {
        var source = this.source;

        return new Enumerable(function ()
        {
            var index;

            return new IEnumerator(
                function ()
                {
                    index = source.length;
                },
                function ()
                {
                    return (index > 0)
                        ? this.Yield(source[--index])
                        : false;
                },
                Functions.Blank)
        });
    }

    ArrayEnumerable.prototype.SequenceEqual = function (second, compareSelector)
    {
        if ((second instanceof ArrayEnumerable || second instanceof Array)
            && compareSelector == null
            && Enumerable.From(second).Count() != this.Count())
        {
            return false;
        }

        return Enumerable.prototype.SequenceEqual.apply(this, arguments);
    }

    ArrayEnumerable.prototype.ToString = function (separator, selector)
    {
        if (selector != null || !(this.source instanceof Array))
        {
            return Enumerable.prototype.ToString.apply(this, arguments);
        }

        if (separator == null) separator = "";
        return this.source.join(separator);
    }

    ArrayEnumerable.prototype.GetEnumerator = function ()
    {
        var source = this.source;
        var index = 0;

        return new IEnumerator(
            Functions.Blank,
            function ()
            {
                return (index < source.length)
                    ? this.Yield(source[index++])
                    : false;
            },
            Functions.Blank);
    }

    // Collections

    var Dictionary = (function ()
    {
        // static utility methods
        var HasOwnProperty = function (target, key)
        {
            return Object.prototype.hasOwnProperty.call(target, key);
        }

        var ComputeHashCode = function (obj)
        {
            if (obj === null) return "null";
            if (obj === undefined) return "undefined";

            return (typeof obj.toString === Types.Function)
                ? obj.toString()
                : Object.prototype.toString.call(obj);
        }

        // LinkedList for Dictionary
        var HashEntry = function (key, value)
        {
            this.Key = key;
            this.Value = value;
            this.Prev = null;
            this.Next = null;
        }

        var EntryList = function ()
        {
            this.First = null;
            this.Last = null;
        }
        EntryList.prototype =
        {
            AddLast: function (entry)
            {
                if (this.Last != null)
                {
                    this.Last.Next = entry;
                    entry.Prev = this.Last;
                    this.Last = entry;
                }
                else this.First = this.Last = entry;
            },

            Replace: function (entry, newEntry)
            {
                if (entry.Prev != null)
                {
                    entry.Prev.Next = newEntry;
                    newEntry.Prev = entry.Prev;
                }
                else this.First = newEntry;

                if (entry.Next != null)
                {
                    entry.Next.Prev = newEntry;
                    newEntry.Next = entry.Next;
                }
                else this.Last = newEntry;

            },

            Remove: function (entry)
            {
                if (entry.Prev != null) entry.Prev.Next = entry.Next;
                else this.First = entry.Next;

                if (entry.Next != null) entry.Next.Prev = entry.Prev;
                else this.Last = entry.Prev;
            }
        }

        // Overload:function()
        // Overload:function(compareSelector)
        var Dictionary = function (compareSelector)
        {
            this.count = 0;
            this.entryList = new EntryList();
            this.buckets = {}; // as Dictionary<string,List<object>>
            this.compareSelector = (compareSelector == null) ? Functions.Identity : compareSelector;
        }

        Dictionary.prototype =
        {
            Add: function (key, value)
            {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                var entry = new HashEntry(key, value);
                if (HasOwnProperty(this.buckets, hash))
                {
                    var array = this.buckets[hash];
                    for (var i = 0; i < array.length; i++)
                    {
                        if (this.compareSelector(array[i].Key) === compareKey)
                        {
                            this.entryList.Replace(array[i], entry);
                            array[i] = entry;
                            return;
                        }
                    }
                    array.push(entry);
                }
                else
                {
                    this.buckets[hash] = [entry];
                }
                this.count++;
                this.entryList.AddLast(entry);
            },

            Get: function (key)
            {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (!HasOwnProperty(this.buckets, hash)) return undefined;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++)
                {
                    var entry = array[i];
                    if (this.compareSelector(entry.Key) === compareKey) return entry.Value;
                }
                return undefined;
            },

            Set: function (key, value)
            {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (HasOwnProperty(this.buckets, hash))
                {
                    var array = this.buckets[hash];
                    for (var i = 0; i < array.length; i++)
                    {
                        if (this.compareSelector(array[i].Key) === compareKey)
                        {
                            var newEntry = new HashEntry(key, value);
                            this.entryList.Replace(array[i], newEntry);
                            array[i] = newEntry;
                            return true;
                        }
                    }
                }
                return false;
            },

            Contains: function (key)
            {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (!HasOwnProperty(this.buckets, hash)) return false;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++)
                {
                    if (this.compareSelector(array[i].Key) === compareKey) return true;
                }
                return false;
            },

            Clear: function ()
            {
                this.count = 0;
                this.buckets = {};
                this.entryList = new EntryList();
            },

            Remove: function (key)
            {
                var compareKey = this.compareSelector(key);
                var hash = ComputeHashCode(compareKey);
                if (!HasOwnProperty(this.buckets, hash)) return;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++)
                {
                    if (this.compareSelector(array[i].Key) === compareKey)
                    {
                        this.entryList.Remove(array[i]);
                        array.splice(i, 1);
                        if (array.length == 0) delete this.buckets[hash];
                        this.count--;
                        return;
                    }
                }
            },

            Count: function ()
            {
                return this.count;
            },

            ToEnumerable: function ()
            {
                var self = this;
                return new Enumerable(function ()
                {
                    var currentEntry;

                    return new IEnumerator(
                        function () { currentEntry = self.entryList.First },
                        function ()
                        {
                            if (currentEntry != null)
                            {
                                var result = { Key: currentEntry.Key, Value: currentEntry.Value };
                                currentEntry = currentEntry.Next;
                                return this.Yield(result);
                            }
                            return false;
                        },
                        Functions.Blank);
                });
            }
        }

        return Dictionary;
    })();

    // dictionary = Dictionary<TKey, TValue[]>
    var Lookup = function (dictionary)
    {
        this.Count = function ()
        {
            return dictionary.Count();
        }

        this.Get = function (key)
        {
            return Enumerable.From(dictionary.Get(key));
        }

        this.Contains = function (key)
        {
            return dictionary.Contains(key);
        }

        this.ToEnumerable = function ()
        {
            return dictionary.ToEnumerable().Select(function (kvp)
            {
                return new Grouping(kvp.Key, kvp.Value);
            });
        }
    }

    var Grouping = function (key, elements)
    {
        this.Key = function ()
        {
            return key;
        }

        ArrayEnumerable.call(this, elements);
    }
    Grouping.prototype = new ArrayEnumerable();

    // out to global
    return Enumerable;
})();/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x){'use strict';function L(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.4/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function me(a){if(C(a))u(a.objectMaxDepth)&&(Ic.objectMaxDepth=Sb(a.objectMaxDepth)?
a.objectMaxDepth:NaN);else return Ic}function Sb(a){return ba(a)&&0<a}function qa(a){if(null==a||Wa(a))return!1;if(H(a)||F(a)||B&&a instanceof B)return!0;var b="length"in Object(a)&&a.length;return ba(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,e;if(a)if(D(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||qa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,
a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Jc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function Kc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Lc(a){return function(b,d){a(d,b)}}function ne(){return++qb}function Tb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];
if(C(g)||D(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&C(n)?ga(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Ub(n)?a[m]=n.clone():(C(a[m])||(a[m]=H(n)?[]:{}),Tb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Tb(a,va.call(arguments,1),!1)}function oe(a){return Tb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Vb(a,b){return S(Object.create(a),b)}function z(){}function Ya(a){return a}
function la(a){return function(){return a}}function Wb(a){return D(a.toString)&&a.toString!==ma}function w(a){return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function C(a){return null!==a&&"object"===typeof a}function Jc(a){return null!==a&&"object"===typeof a&&!Mc(a)}function F(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ga(a){return"[object Date]"===ma.call(a)}function D(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===
ma.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ha(a){return"boolean"===typeof a}function pe(a){return a&&ba(a.length)&&qe.test(ma.call(a))}function Ub(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function re(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function ra(a,b,d){function c(a,
b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Jc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&(b[f]=e(a[f],c));else for(f in a)ua.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!C(a))return a;var d=g.indexOf(a);if(-1!==d)return h[d];if(Wa(a)||Za(a))throw Fa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Mc(a)),
d=!0);g.push(a);h.push(e);return d?c(a,e,b):e}function f(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));
return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(D(a.cloneNode))return a.cloneNode(!0)}var g=[],h=[];d=Sb(d)?d:NaN;if(b){if(pe(b)||"[object ArrayBuffer]"===ma.call(b))throw Fa("cpta");if(a===b)throw Fa("cpi");H(b)?b.length=
0:q(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);h.push(b);return c(a,b,d)}return e(a,d)}function Xb(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],b[c]))return!1;return!0}}else{if(ga(a))return ga(b)?Xb(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;
if(Za(a)||Za(b)||Wa(a)||Wa(b)||H(b)||ga(b)||Xa(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!D(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!D(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(va.call(b,d))}function bb(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!D(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?
b.apply(a,arguments):b.call(a)}}function Nc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&x.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return ba(b)||(b=b?2:null),JSON.stringify(a,Nc,b)}function Oc(a){return F(a)?JSON.parse(a):a}function Pc(a,b){a=a.replace(se,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return da(d)?b:d}function Yb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Pc(b,c);d*=b-c;a=new Date(a.getTime());
a.setMinutes(a.getMinutes()+d);return a}function xa(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Ia?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function Qc(a){try{return decodeURIComponent(a)}catch(b){}}function Rc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Qc(e),u(e)&&(f=
u(f)?Qc(f):!0,ua.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Zb(a){var b=[];q(a,function(a,c){H(a)?q(a,function(a){b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))}):b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))});return b.length?b.join("&"):""}function db(a){return $(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function $(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,
b?"%20":"+")}function te(a,b){var d,c,e=Ja.length;for(c=0;c<e;++c)if(d=Ja[c]+b,F(d=a.getAttribute(d)))return d;return null}function ue(a,b){var d,c,e={};q(Ja,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ja,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(ve?(e.strictDi=null!==te(d,"strict-di"),b(d,c?[c]:[],e)):x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}
function Sc(a,b,d){C(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===x.document?"document":xa(a);throw Fa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;x&&e.test(x.name)&&(d.debugInfoEnabled=!0,x.name=x.name.replace(e,""));if(x&&!f.test(x.name))return c();x.name=x.name.replace(f,"");ea.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};D(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function we(){x.name="NG_ENABLE_DEBUG_INFO!"+x.name;x.location.reload()}function xe(a){a=ea.element(a).injector();if(!a)throw Fa("test");return a.get("$$testability")}
function Tc(a,b){b=b||"_";return a.replace(ye,function(a,c){return(c?b:"")+a.toLowerCase()})}function ze(){var a;if(!Uc){var b=rb();(na=w(b)?x.jQuery:b?x[b]:void 0)&&na.fn.on?(B=na,S(na.fn,{scope:Na.scope,isolateScope:Na.isolateScope,controller:Na.controller,injector:Na.injector,inheritedData:Na.inheritedData}),a=na.cleanData,na.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=na._data(f,"events"))&&c.$destroy&&na(f).triggerHandler("$destroy");a(b)}):B=W;ea.element=B;Uc=!0}}function fb(a,
b,d){if(!a)throw Fa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);fb(D(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ka(a,b){if("hasOwnProperty"===a)throw Fa("badname",b);}function Vc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&D(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=B(va.call(a,0,e))),c.push(b);return c||a}function V(){return Object.create(null)}function $b(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Wb(a)||H(a)||ga(a)?cb(a):a.toString()}return a}function Ae(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=L("$injector"),c=L("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||L;return b(a,"module",function(){var a={};return function(f,g,h){var k={};if("hasOwnProperty"===f)throw c("badname","module");
g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return v}}function b(a,c,d){d||(d=e);return function(b,e){e&&D(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return v}}if(!g)throw d("nomod",f);var e=[],p=[],r=[],J=a("$injector","invoke","push",p),v={_invokeQueue:e,_configBlocks:p,_runBlocks:r,info:function(a){if(u(a)){if(!C(a))throw c("aobj","value");k=a;return this}return k},requires:g,name:f,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",p),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:J,run:function(a){r.push(a);return this}};h&&J(h);return v})}})}function pa(a,b){if(H(a)){b=
b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(C(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Be(a,b){var d=[];Sb(b)&&(a=ra(a,null,b));return JSON.stringify(a,function(a,b){b=Nc(a,b);if(C(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ce(a){S(a,{errorHandlingConfig:me,bootstrap:Sc,copy:ra,extend:S,merge:oe,equals:sa,element:B,forEach:q,injector:eb,noop:z,bind:bb,toJson:cb,fromJson:Oc,identity:Ya,isUndefined:w,isDefined:u,isString:F,
isFunction:D,isObject:C,isNumber:ba,isElement:Ub,isArray:H,version:De,isDate:ga,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:xe,reloadWithDebugInfo:we,$$minErr:L,$$csp:Ga,$$encodeUriSegment:db,$$encodeUriQuery:$,$$stringify:$b});ac=Ae(x);ac("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ee});a.provider("$compile",Wc).directive({a:Fe,input:Xc,textarea:Xc,form:Ge,script:He,select:Ie,option:Je,ngBind:Ke,ngBindHtml:Le,ngBindTemplate:Me,ngClass:Ne,ngClassEven:Oe,
ngClassOdd:Pe,ngCloak:Qe,ngController:Re,ngForm:Se,ngHide:Te,ngIf:Ue,ngInclude:Ve,ngInit:We,ngNonBindable:Xe,ngPluralize:Ye,ngRepeat:Ze,ngShow:$e,ngStyle:af,ngSwitch:bf,ngSwitchWhen:cf,ngSwitchDefault:df,ngOptions:ef,ngTransclude:ff,ngModel:gf,ngList:hf,ngChange:jf,pattern:Yc,ngPattern:Yc,required:Zc,ngRequired:Zc,minlength:$c,ngMinlength:$c,maxlength:ad,ngMaxlength:ad,ngValue:kf,ngModelOptions:lf}).directive({ngInclude:mf}).directive(vb).directive(bd);a.provider({$anchorScroll:nf,$animate:of,$animateCss:pf,
$$animateJs:qf,$$animateQueue:rf,$$AnimateRunner:sf,$$animateAsyncRun:tf,$browser:uf,$cacheFactory:vf,$controller:wf,$document:xf,$$isDocumentHidden:yf,$exceptionHandler:zf,$filter:cd,$$forceReflow:Af,$interpolate:Bf,$interval:Cf,$http:Df,$httpParamSerializer:Ef,$httpParamSerializerJQLike:Ff,$httpBackend:Gf,$xhrFactory:Hf,$jsonpCallbacks:If,$location:Jf,$log:Kf,$parse:Lf,$rootScope:Mf,$q:Nf,$$q:Of,$sce:Pf,$sceDelegate:Qf,$sniffer:Rf,$templateCache:Sf,$templateRequest:Tf,$$testability:Uf,$timeout:Vf,
$window:Wf,$$rAF:Xf,$$jqLite:Yf,$$Map:Zf,$$cookieReader:$f})}]).info({angularVersion:"1.6.4"})}function gb(a,b){return b.toUpperCase()}function wb(a){return a.replace(ag,gb)}function bc(a){a=a.nodeType;return 1===a||!a||9===a}function dd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(cc.test(a)){d=e.appendChild(b.createElement("div"));c=(bg.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(cg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);
d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function W(a){if(a instanceof W)return a;var b;F(a)&&(a=T(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw dc("nosel");return new W(a)}if(b){b=x.document;var d;a=(d=dg.exec(a))?[b.createElement(d[1])]:(d=dd(a,b))?d.childNodes:[];ec(this,a)}else D(a)?ed(a):ec(this,a)}function fc(a){return a.cloneNode(!0)}function xb(a,b){!b&&bc(a)&&B.cleanData([a]);
a.querySelectorAll&&B.cleanData(a.querySelectorAll("*"))}function fd(a,b,d,c){if(u(c))throw dc("offargs");var e=(c=yb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&$a(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};q(b.split(" "),function(a){g(a);zb[a]&&g(zb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}function gc(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),
fd(a)),delete hb[d],a.ng339=void 0))}function yb(a,b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++eg,d=hb[d]={events:{},data:{},handle:void 0});return d}function hc(a,b,d){if(bc(a)){var c,e=u(d),f=!e&&b&&!C(b),g=!b;a=(a=yb(a,!f))&&a.data;if(e)a[wb(b)]=d;else{if(g)return a;if(f)return a&&a[wb(b)];for(c in b)a[wb(c)]=b[c]}}}function Ab(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Bb(a,b){b&&a.setAttribute&&q(b.split(" "),
function(b){a.setAttribute("class",T((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=T(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",T(d))}}function ec(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=
b}}function gd(a,b){return Db(a,"$"+(b||"ngController")+"Controller")}function Db(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function hd(a){for(xb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Eb(a,b){b||xb(a);var d=a.parentNode;d&&d.removeChild(a)}function fg(a,b){b=b||x;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function ed(a){function b(){x.document.removeEventListener("DOMContentLoaded",
b);x.removeEventListener("load",b);a()}"complete"===x.document.readyState?x.setTimeout(a):(x.document.addEventListener("DOMContentLoaded",b),x.addEventListener("load",b))}function id(a,b){var d=Fb[b.toLowerCase()];return d&&jd[wa(a)]&&d}function gg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||hg;1<g&&(f=pa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function hg(a,b,d){d.call(a,b)}function ig(a,b,d){var c=b.relatedTarget;c&&(c===a||jg.call(a,c))||d.call(a,b)}function Yf(){this.$get=function(){return S(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Cb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ne)():d+":"+a}function kd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function ld(a){a=Function.prototype.toString.call(a).replace(kg,"");return a.match(lg)||a.match(mg)}function ng(a){return(a=ld(a))?"function("+
(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(C(b))q(b,Lc(a));else return a(b,c)}}function c(a,b){Ka(a,"service");if(D(b)||H(b))b=p.instantiate(b);if(!b.$get)throw ya("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(w(c))throw ya("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){fb(w(a)||H(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{F(a)?(c=ac(a),v.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):D(a)?b.push(p.invoke(a)):H(a)?b.push(p.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),ya("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw ya("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var k=0,h=a.length;k<h;k++){var l=a[k];if("string"!==typeof l)throw ya("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(za||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ha(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Gb,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,
b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,la(b),!1)}),constant:d(function(a,b){Ka(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw ya("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return v.invoke(c.$get,c,void 0,a)}),v=J;n.$injectorProvider=
{$get:la(J)};v.modules=p.modules=V();var t=g(a),v=J.get("$injector");v.strictDi=b;q(t,function(a){a&&v.invoke(a)});return v}function nf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;D(c)?c=c():Ub(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
ba(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:ba(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||fg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function og(a){F(a)&&
(a=a.split(" "));var b=V();q(a,function(a){a.length&&(b[a]=!0)});return b}function ia(a){return C(a)?a:{}}function pg(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(J--,0===J)for(;v.length;)try{v.pop()()}catch(b){d.error(b)}}}function f(){Oa=null;h()}function g(){t=I();t=w(t)?null:t;sa(t,G)&&(t=G);M=G=t}function h(){var a=M;g();if(N!==k.url()||a!==t)N=k.url(),M=t,q(K,function(a){a(k.url(),t)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=
!1;var J=0,v=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():v.push(a)};var t,M,N=l.href,A=b.find("base"),Oa=null,I=c.history?function(){try{return m.state}catch(a){}}:z;g();k.url=function(b,d,e){w(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=M===e;if(N===b&&(!c.history||f))return k;var h=N&&Aa(N)===Aa(b);N=b;M=e;!c.history||h&&f?(h||(Oa=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(Oa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());Oa&&(Oa=b);return k}return Oa||l.href.replace(/%27/g,"'")};k.state=function(){return t};var K=[],E=!1,G=null;k.onUrlChange=function(b){if(!E){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);E=!0}K.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(z),!0):!1}}function uf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new pg(a,c,b,d)}]}function vf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(p?p===a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw L("$cacheFactory")("iid",a);var g=0,h=
S({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Sf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Wc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=V();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");
e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&C(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=re("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=V();this.directive=function N(b,d){fb(b,"name");Ka(b,"directive");F(b)?(c(b),fb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);D(h)?h={compile:la(h)}:!h.compile&&h.link&&(h.compile=la(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!F(l)||!/[EACM]/.test(l)))throw fa("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):q(b,Lc(N));return this};this.component=function(a,b){function c(a){function e(b){return D(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:qg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,D(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return u(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return u(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var v=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(v=a,this):v};var t=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,e,n,E,G,y,O,X){function P(){try{if(!--ya)throw ia=void 0,fa("infchng",J);G.$apply(function(){for(var a=[],b=0,c=ia.length;b<c;++b)try{ia[b]()}catch(d){a.push(d)}ia=void 0;if(a.length)throw a;})}finally{ya++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){ta.innerHTML="<span "+b+">";b=ta.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function La(a,
b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof B||(a=B(a));var f=Ma(a,b,a,c,d,e);ca.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw fa("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?B(ha(g,B("<div>").append(a).html())):
c?Na.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ca.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(B(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=H(a)||a instanceof B,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===za&&L(a,r,k);m=jc(a[r],[],l,0===r?d:void 0,e);(f=m.length?W(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ca.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Ma(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function L(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ia)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ia)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=V(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function jc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=wa(a);Y(b,
Ba(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var G=!1,E=!1;k=p[K];l=k.name;m=k.value;k=Ba(l);(n=Ja.test(k))&&(l=l.replace(md,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(G=l,E=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ba(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,id(a,k)&&(c[k]=!0);pa(a,b,m,k,n);Y(b,k,"A",d,e,G,E)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;C(f)&&(f=f.animVal);if(F(f)&&""!==f)for(;a=h.exec(f);)k=Ba(a[2]),Y(b,k,"C",d,e)&&(c[k]=T(a[3])),f=f.substr(a.index+a[0].length);break;case Ia:la(b,a.nodeValue);break;case 8:if(!Fa)break;jb(a,b,c,d,e)}b.sort(ea);return b}function jb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ba(f[1]);Y(b,h,"M",d,e)&&(c[h]=T(f[2]))}}catch(k){}}function nd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function od(a,b,c){return function(d,e,f,g,h){e=nd(e[0],b,c);return a(d,e,f,g,h)}}function kc(a,b,c,d,e,f){var g;return a?ca(b,c,d,e,f):function(){g||(g=ca(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function W(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=od(a,c,d));a.require=y.require;a.directiveName=P;if(E===y||y.$$isolateScope)a=qa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=od(b,c,d));b.require=
y.require;b.directiveName=P;if(E===y||y.$$isolateScope)b=qa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);X&&(e=O);c||(c=X?P.parent():P);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(w(f))throw fa("noslot",d,xa(P));}else return l(a,b,e,c,R)}var p,y,t,v,J,O,N,P;b===f?(g=d,P=d.$$element):(P=B(f),g=new s(P,d));J=e;E?v=e.$new(!0):K&&(J=e.$parent);l&&(N=m,N.$$boundTransclude=l,N.isSlotFilled=function(a){return!!l.$$slots[a]});G&&(O=
ba(P,g,N,G,v,e,E));E&&(ca.$$addScopeInfo(P,v,!0,!(I&&(I===E||I===E.$$originalDirective))),ca.$$addScopeClass(P,!0),v.$$isolateBindings=E.$$isolateBindings,y=na(e,g,v,v.$$isolateBindings,E),y.removeWatches&&v.$on("$destroy",y.removeWatches));for(p in O){y=G[p];t=O[p];var Hb=y.$$bindings.bindToController;if(r){t.bindingInfo=Hb?na(J,g,t.instance,Hb,y):{};var A=t();A!==t.instance&&(t.instance=A,P.data("$"+y.name+"Controller",A),t.bindingInfo.removeWatches&&t.bindingInfo.removeWatches(),t.bindingInfo=
na(J,g,t.instance,Hb,y))}else t.instance=t(),P.data("$"+y.name+"Controller",t.instance),t.bindingInfo=na(J,g,t.instance,Hb,y)}q(G,function(a,b){var c=a.require;a.bindToController&&!H(c)&&C(c)&&S(O[b].instance,U(b,c,P,O))});q(O,function(a){var b=a.instance;if(D(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(D(b.$onInit))try{b.$onInit()}catch(e){c(e)}D(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());D(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(y=h.length;p<y;p++)t=h[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);var R=e;E&&(E.template||null===E.templateUrl)&&(R=v);a&&a(R,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)t=k[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);q(O,function(a){a=a.instance;D(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,G=l.controllerDirectives,E=l.newIsolateScopeDirective,I=l.templateDirective,t=l.nonTlbTranscludeDirective,
J=!1,O=!1,X=l.hasElementTranscludeDirective,v=d.$$element=B(b),y,P,N,A=e,R,u=!1,La=!1,x,z=0,F=a.length;z<F;z++){y=a[z];var Ma=y.$$start,L=y.$$end;Ma&&(v=nd(b,Ma,L));N=void 0;if(p>y.priority)break;if(x=y.scope)y.templateUrl||(C(x)?($("new/isolated scope",E||K,y,v),E=y):$("new/isolated scope",E,y,v)),K=K||y;P=y.name;if(!u&&(y.replace&&(y.templateUrl||y.template)||y.transclude&&!y.$$tlb)){for(x=z+1;u=a[x++];)if(u.transclude&&!u.$$tlb||u.replace&&(u.templateUrl||u.template)){La=!0;break}u=!0}!y.templateUrl&&
y.controller&&(G=G||V(),$("'"+P+"' controller",G[P],y,v),G[P]=y);if(x=y.transclude)if(J=!0,y.$$tlb||($("transclusion",t,y,v),t=y),"element"===x)X=!0,p=y.priority,N=v,v=d.$$element=B(ca.$$createComment(P,d[P])),b=v[0],ka(f,va.call(N,0),b),N[0].$$parentNode=N[0].parentNode,A=kc(La,N,e,p,g&&g.name,{nonTlbTranscludeDirective:t});else{var ja=V();if(C(x)){N=[];var Q=V(),jb=V();q(x,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;ja[b]=null;jb[b]=c});q(v.contents(),function(a){var b=Q[Ba(wa(a))];
b?(jb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):N.push(a)});q(jb,function(a,b){if(!a)throw fa("reqslot",b);});for(var ic in ja)ja[ic]&&(ja[ic]=kc(La,ja[ic],e))}else N=B(fc(b)).contents();v.empty();A=kc(La,N,e,void 0,void 0,{needsNewScope:y.$$isolateScope||y.$$newScope});A.$$slots=ja}if(y.template)if(O=!0,$("template",I,y,v),I=y,x=D(y.template)?y.template(v,d):y.template,x=Ea(x),y.replace){g=y;N=cc.test(x)?pd(ha(y.templateNamespace,T(x))):[];b=N[0];if(1!==N.length||1!==b.nodeType)throw fa("tplrt",P,"");
ka(f,v,b);F={$attr:{}};x=jc(b,[],F);var Y=a.splice(z+1,a.length-(z+1));(E||K)&&aa(x,E,K);a=a.concat(x).concat(Y);da(d,F);F=a.length}else v.html(x);if(y.templateUrl)O=!0,$("template",I,y,v),I=y,y.replace&&(g=y),n=ga(a.splice(z,a.length-z),v,d,f,J&&A,h,k,{controllerDirectives:G,newScopeDirective:K!==y&&K,newIsolateScopeDirective:E,templateDirective:I,nonTlbTranscludeDirective:t}),F=a.length;else if(y.compile)try{R=y.compile(v,d,A);var Z=y.$$originalDirective||y;D(R)?m(null,bb(Z,R),Ma,L):R&&m(bb(Z,R.pre),
bb(Z,R.post),Ma,L)}catch(ea){c(ea,xa(v))}y.terminal&&(n.terminal=!0,p=Math.max(p,y.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=O;n.transclude=A;l.hasElementTranscludeDirective=X;return n}function U(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(H(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=U(a,b[g],c,d);else C(b)&&(e={},q(b,function(b,f){e[f]=U(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=V(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=E(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Vb(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,e,g,h,k,l){if(c===
h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(w(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Vb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,t={isolateScope:null,bindToController:null};C(K.scope)&&(!0===K.bindToController?(t.bindToController=d(K.scope,r,!0),t.isolateScope={}):t.isolateScope=d(K.scope,r,!1));C(K.bindToController)&&(t.bindToController=d(K.bindToController,r,!0));if(t.bindToController&&!K.controller)throw fa("noctrl",
r);m=m.$$bindings=t;C(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function da(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,f,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),t=Vb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),y=D(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,E=r.templateNamespace;b.empty();e(y).then(function(c){var e,G;c=Ea(c);if(r.replace){c=cc.test(c)?pd(ha(E,T(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw fa("tplrt",r.name,y);c={$attr:{}};ka(f,b,e);var I=jc(e,[],c);C(r.scope)&&aa(I,!0);a=I.concat(a);da(d,c)}else e=K,b.html(c);a.unshift(t);n=W(a,e,d,g,b,
r,h,k,l);q(f,function(a,c){a===e&&(f[c]=b[0])});for(p=Ma(b[0].childNodes,g);m.length;){c=m.shift();G=m.shift();var v=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(G!==K){var O=G.className;l.hasElementTranscludeDirective&&r.replace||(I=fc(e));ka(v,B(G),I);La(B(I),O)}G=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,f,G)}}m=null}).catch(function(a){a instanceof Error&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ea(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function la(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=x.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return y.HTML;var c=wa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return y.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return y.RESOURCE_URL}function pa(a,
c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===wa(a))throw fa("selmulti",xa(a));if(m.test(e))throw fa("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=V());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ka(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=x.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function qa(a,b){return S(function(){return a.apply(null,arguments)},
a,b)}function ra(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,xa(d))}}function na(a,c,d,e,f){function g(b,c,e){D(d.$onChanges)&&!Xb(c,e)&&(ia||(a.$$postDigest(P),ia=[]),m||(m={},ia.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,t,y,G;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(F(a)||Ha(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;r=c[m];
F(r)?d[h]=b(r)(a):Ha(r)&&(d[h]=r);l[h]=new Ib(lc,d[h]);k.push(p);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);G=t.literal?sa:Xb;y=t.assign||function(){r=d[h]=t(a);throw fa("nonassign",c[m],m,f.name);};r=d[h]=t(a);p=function(b){G(b,d[h])||(G(b,r)?y(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,t.literal);k.push(p);break;case "<":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);
var E=t.literal,I=d[h]=t(a);l[h]=new Ib(lc,d[h]);p=a.$watch(t,function(a,b){if(b===a){if(b===I||E&&sa(b,I))return;b=I}g(h,a,b);d[h]=a},E);k.push(p);break;case "&":t=c.hasOwnProperty(m)?n(c[m]):z;if(t===z&&p)break;d[h]=function(b){return t(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ca=/^\w/,ta=x.document.createElement("div"),Fa=v,Ga=t,ya=J,ia;s.prototype={$normalize:Ba,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=qd(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=qd(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=id(this.$$element[0],a),g=rd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Tc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=
b=X(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+X(T(g[m]),!0),f=f+(" "+T(g[m+1]));g=T(g[2*l]).split(/\s/);f+=X(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):Ca.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);G.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Da=b.endSymbol(),Ea="{{"===Aa&&"}}"===Da?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Da)},Ja=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ca.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:z;ca.$$addBindingClass=
p?function(a){La(a,"ng-binding")}:z;ca.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:z;ca.$$addScopeClass=p?function(a,b){La(a,b?"ng-isolate-scope":"ng-scope")}:z;ca.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return x.document.createComment(c)};return ca}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ba(a){return a.replace(md,"").replace(rg,gb)}function qd(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g===e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function pd(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ia&&""===d.nodeValue.trim())&&sg.call(a,b,1)}return a}function qg(a,b){if(b&&F(b))return b;if(F(a)){var d=sd.exec(a);if(d)return d[3]}}function wf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ka(b,"controller");C(b)?
S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!C(a.$scope))throw L("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(sd);if(!k)throw td("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Vc(g.$scope,m,!0)||(b?Vc(c,m,!0):void 0);if(!f)throw td("ctrlreg",m);sb(f,m,!0)}if(h)return h=(H(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,
l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(C(a)||D(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function xf(){this.$get=["$window",function(a){return B(a.document)}]}function yf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function zf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function mc(a){return C(a)?ga(a)?a.toISOString():cb(a):a}function Ef(){this.$get=function(){return function(a){if(!a)return"";var b=[];Kc(a,function(a,c){null===a||w(a)||(H(a)?q(a,function(a){b.push($(c)+"="+$(mc(a)))}):b.push($(c)+"="+$(mc(a))))});return b.join("&")}}}function Ff(){this.$get=function(){return function(a){function b(a,e,f){null===a||w(a)||(H(a)?q(a,function(a,c){b(a,e+"["+(C(a)?c:"")+"]")}):C(a)&&!ga(a)?Kc(a,function(a,
c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push($(e)+"="+$(mc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function nc(a,b){if(F(a)){var d=a.replace(tg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ud))||(c=(c=d.match(ug))&&vg[c[0]].test(d));if(c)try{a=Oc(d)}catch(e){throw oc("baddata",a,e);}}}return a}function vd(a){var b=V(),d;F(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):C(a)&&q(a,function(a,
d){var f=Q(d),g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function wd(a){var b;return function(d){b||(b=vd(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function xd(a,b,d,c){if(D(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function Df(){var a=this.defaults={transformResponse:[nc],transformRequest:[function(a){return C(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:pa(pc),put:pa(pc),patch:pa(pc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}
function e(a,b){var c,d={};q(a,function(a,e){D(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=xd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!C(b))throw L("$http")("badreq",b);if(!F(m.valueOf(b.url)))throw L("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=
function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,pa(b))}(b);g.method=ub(g.method);g.paramSerializer=F(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(t,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=xd(b.data,wd(c),void 0,b.transformRequest);w(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(z)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}O&&
(200<=a&&300>a?O.put(R,[a,c,vd(d),e]):O.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?G.resolve:G.reject)({data:a,status:b,headers:wd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,pa(a.headers()),a.statusText)}function t(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var G=k.defer(),y=G.promise,O,X,P=c.headers,s="jsonp"===Q(c.method),R=c.url;s?R=m.getTrustedResourceUrl(R):F(R)||(R=m.valueOf(R));R=r(R,
c.paramSerializer(c.params));s&&(R=J(R,c.jsonpCallbackParam));n.pendingRequests.push(c);y.then(t,t);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=C(c.cache)?c.cache:C(a.cache)?a.cache:v);O&&(X=O.get(R),u(X)?X&&D(X.then)?X.then(K,K):H(X)?p(X[1],X[0],pa(X[2]),X[3]):p(X,200,{},"OK"):O.put(R,y));w(X)&&((X=yd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(P[c.xsrfHeaderName||a.xsrfHeaderName]=X),e(c.method,R,d,l,P,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return y}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw oc("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw oc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var v=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var t=[];q(d,function(a){t.unshift(F(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Hf(){this.$get=function(){return function(){return new x.XMLHttpRequest}}}function Gf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return wg(a,c,a.defer,b,d[0])}]}function wg(a,b,d,c,e){function f(a,
b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,r,J,v){function t(){N&&N();A&&
A.abort()}h=h||a.url();if("jsonp"===Q(e))var M=c.createCallback(h),N=f(h,M,function(a,b){var e=200===a&&c.getResponse(M);u(I)&&d.cancel(I);N=A=null;l(a,e,"",b);c.removeCallback(M)});else{var A=b(e,h);A.open(e,h,!0);q(m,function(a,b){u(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"===Ca(h).protocol?404:0);var e=A.getAllResponseHeaders();u(I)&&d.cancel(I);N=A=null;l(c,b,e,a)};e=
function(){u(I)&&d.cancel(I);N=A=null;l(-1,null,null,"")};A.onerror=e;A.onabort=e;A.ontimeout=e;q(J,function(a,b){A.addEventListener(b,a)});q(v,function(a,b){A.upload.addEventListener(b,a)});p&&(A.withCredentials=!0);if(r)try{A.responseType=r}catch(s){if("json"!==r)throw s;}A.send(w(k)?null:k)}if(0<n)var I=d(t,n);else n&&D(n.then)&&n.then(t)}}function Bf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(f,k,n,p){function M(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);return p&&!u(a)?a:$b(a)}catch(d){c(Da.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var q;k||(k=g(f),q=la(k),q.exp=f,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var A,s,I=0,K=[],E=[];q=f.length;for(var G=[],y=[];I<q;)if(-1!==(A=f.indexOf(a,
I))&&-1!==(s=f.indexOf(b,A+l)))I!==A&&G.push(g(f.substring(I,A))),I=f.substring(A+l,s),K.push(I),E.push(d(I,M)),I=s+m,y.push(G.length),G.push("");else{I!==q&&G.push(g(f.substring(I)));break}n&&1<G.length&&Da.throwNoconcat(f);if(!k||K.length){var O=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&w(a[b]))return;G[y[b]]=a[b]}return G.join("")};return S(function(a){var b=0,d=K.length,e=Array(d);try{for(;b<d;b++)e[b]=E[b](a);return O(e)}catch(g){c(Da.interr(f,g))}},{exp:f,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(E,function(d,e){var f=O(d);D(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function Cf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,r):f(t)}var p=4<arguments.length,r=p?va.call(arguments,4):[],J=b.setInterval,v=b.clearInterval,
t=0,M=u(m)&&!m,q=(M?c:d).defer(),A=q.promise;l=u(l)?l:0;A.$$intervalId=J(function(){M?e.defer(n):a.$evalAsync(n);q.notify(t++);0<l&&t>=l&&(q.resolve(t),v(A.$$intervalId),delete g[A.$$intervalId]);M||a.$apply()},k);g[A.$$intervalId]=q;return A}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(z),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function qc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
db(a[b]);return a.join("/")}function zd(a,b){var d=Ca(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||xg[d.protocol]||null}function Ad(a,b){if(yg.test(a))throw kb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Ca(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Rc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function rc(a,b){return a.slice(0,b.length)===
b}function ka(a,b){if(rc(b,a))return b.substr(a.length)}function Aa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function sc(a,b,d){this.$$html5=!0;d=d||"";zd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!F(d))throw kb("ipthprfx",a,b);Ad(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=ka(a,c))?(g=f,g=d&&u(f=ka(d,f))?b+(ka("/",f)||f):a+g):u(f=ka(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function tc(a,b,d){zd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=ka(d,e),w(f)&&(f=e));Ad(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;rc(f,
e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return Aa(a)===Aa(b)?(this.$$parse(b),!0):!1}}function Bd(a,b,d){this.$$html5=!0;tc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;a===Aa(c)?f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Jb(a){return function(){return this[a]}}function Cd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Jf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};
this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(Ha(a))return b.enabled=a,this;if(C(a)){Ha(a.enabled)&&(b.enabled=a.enabled);Ha(a.requireBase)&&(b.requireBase=a.requireBase);if(Ha(a.rewriteLinks)||F(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=
f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?sc:Bd}else p=Aa(n),m=tc;var r=p.substr(0,Aa(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!==a.which&&2!==a.button){for(var h=B(a.target);"a"!==wa(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!F(e)||!w(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");C(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Ca(e.animVal).href);J.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(n)&&c.url(l.absUrl(),!0);var v=!0;
c.onUrlChange(function(a,b){rc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(v=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(v||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(v||m)v=
!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))})}l.$$replace=!1});return l}]}function Kf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(f){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}var f=za||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function zg(a){return a+""}function Ag(a,
b){return"undefined"!==typeof a?a:b}function Dd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function U(a,b){var d,c,e;switch(a.type){case s.Program:d=!0;q(a.body,function(a){U(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:U(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:U(a.test,b);U(a.alternate,b);U(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:U(a.object,b);a.computed&&U(a.property,b);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=e=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=e?c:[a];break;case s.AssignmentExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=
d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){U(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch);a.computed&&(U(a.key,b),a.key.constant||c.push.apply(c,a.key.toWatch))});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Ed(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Fd(a){return a.type===
s.Identifier||a.type===s.MemberExpression}function Gd(a){if(1===a.body.length&&Fd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Hd(a){this.$filter=a}function Id(a){this.$filter=a}function uc(a,b,d){this.ast=new s(a,d);this.astCompiler=d.csp?new Id(b):new Hd(b)}function vc(a){return D(a.valueOf)?a.valueOf():Bg.call(a)}function Lf(){var a=V(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=
function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=vc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,d.literal)||(h=d(a,void 0,void 0,[b]),k=b&&vc(b));return h},b,c,e)}for(var l=[],m=[],n=0,E=g.length;n<E;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],d.literal)))m[c]=k,l[c]=k&&vc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(a){return d(a)}function h(a,c,d){n=a;D(b)&&b(a,c,d);l(a)&&d.$$postDigest(function(){l(n)&&m()})}var l=d.literal?k:u,m,n;return m=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){function c(d,
e,g,h){g=f&&h?h[0]:a(d,e,g,h);return b(g,d,e)}function d(c,e,g,k){g=f&&k?k[0]:a(c,e,g,k);c=b(g,c,e);return h(g)?c:g}if(!b)return a;var e=a.$$watchDelegate,f=!1,h=a.literal?k:u,l=a.oneTime?d:c;l.literal=a.literal;l.oneTime=a.oneTime;f=!a.inputs;e&&e!==g?(l.$$watchDelegate=e,l.inputs=a.inputs):b.$stateful||(l.$$watchDelegate=g,l.inputs=a.inputs?a.inputs:[a]);return l}var n={csp:Ga().noUnsafeEval,literals:ra(b),isIdentifierStart:D(d)&&d,isIdentifierContinue:D(c)&&c};return function(b,c){var d,f,k;switch(typeof b){case "string":return k=
b=b.trim(),d=a[k],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new wc(n),d=(new uc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?(d.oneTime=!0,d.$$watchDelegate=h):d.inputs&&(d.$$watchDelegate=g),a[k]=d),m(d,c);case "function":return m(b,c);default:return m(z,c)}}}]}function Nf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Jd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Of(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Jd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Jd(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!s&&A.length;){var a=A.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):w(c)?"undefined":"string"!==typeof c?Be(c,void 0):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===s&&0===A.length&&a(g),A.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++s,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{D(c)?k(e,c(b.value)):1===b.status?k(e,b.value):
m(e,b.value)}catch(n){m(e,n)}}}finally{--s,d&&0===s&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,M("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(C(b)||D(b))f=b.then;D(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,D(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new f;m(b,a);return b}function J(a,b,c){var d=null;try{D(c)&&(d=c())}catch(e){return r(e)}return d&&D(d.then)?d.then(function(){return b(a)},r):b(a)}function v(a,b,c,d){var e=new f;k(e,a);return e.then(b,c,d)}function t(a){if(!D(a))throw M("norslvr",a);var b=new f;a(function(a){k(b,a)},function(a){m(b,a)});return b}var M=
L("$q",TypeError),s=0,A=[];S(f.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,u,a)},function(b){return J(b,r,a)},b)}});var u=v;t.prototype=f.prototype;t.defer=c;t.reject=r;t.when=v;t.resolve=u;t.all=function(a){var b=new f,c=0,d=H(a)?
[]:{};q(a,function(a,e){c++;v(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};t.race=function(a){var b=c();q(a,function(a){v(a).then(b.resolve,b.reject)});return b.promise};return t}function Xf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Mf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=L("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=
!0}function l(a){9===za&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(M.$$phase)throw d("inprog",
M.$$phase);M.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function v(){for(;u.length;)try{u.shift()()}catch(a){f(a)}e=null}function t(){null===e&&(e=h.defer(function(){M.$apply(v)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;D(b)||(l.fn=z);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(C(e))if(qa(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ua.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,t=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(C(e))if(qa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,t=b,q,u=[],w,x;n("$digest");h.$$checkUrlChange();this===M&&null!==e&&(h.defer.cancel(e),v());c=null;do{r=!1;q=this;for(p=0;p<s.length;p++){try{x=s[p],l=x.fn,l(x.scope,x.locals)}catch(z){f(z)}c=null}s.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?sa(g,k):da(g)&&da(k)))r=!0,c=a,a.last=a.eq?ra(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>t&&(w=4-t,u[w]||(u[w]=[]),u[w].push({msg:D(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(B){f(B)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||s.length)&&!t--)throw M.$$phase=
null,d("infdig",b,u);}while(r||s.length);for(M.$$phase=null;I<A.length;)try{A[I++]()}catch(F){f(F)}A.length=I=0;h.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===M&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=z;this.$on=this.$watch=this.$watchGroup=function(){return z};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){M.$$phase||s.length||h.defer(function(){s.length&&M.$digest()});s.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){A.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{M.$$phase=null}}catch(b){f(b)}finally{try{M.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);a=g(a);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var M=new m,s=M.$$asyncQueue=[],A=M.$$postDigestQueue=[],u=M.$$applyAsyncQueue=[],I=0;return M}]}function Ee(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Ca(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Cg(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ta("iwcard",a);a=Kd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ta("imatcher");}function Ld(a){var b=[];u(a)&&q(a,function(a){b.push(Cg(a))});return b}function Qf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Ld(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Ld(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?yd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ta("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||w(b)||
""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=Ca(e.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return e;throw ta("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw ta("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Pf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>za)throw ta("iequirks");var c=pa(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(oa,function(a,b){var d=Q(b);c[("parse_as_"+d).replace(xc,gb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(xc,gb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(xc,gb)]=function(b){return g(a,b)}});return c}]}function Rf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||
{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&za)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ga(),transitions:k,animations:l,android:e}}]}function Tf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(h,k){g.totalPendingRequests++;if(!F(h)||w(d.get(h)))h=f.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==nc}):l===nc&&(l=null);return c.get(h,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=Dg("tpload",h,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=
0;return g}]}function Uf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ea.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Kd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+
'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Vf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){D(f)||(l=k,k=f,f=z);var m=va.call(arguments,3),n=u(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[r.$$timeoutId]}n||
a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(z),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Ca(a){za&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):
"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function yd(a){a=F(a)?Ca(a):a;return a.protocol===Md.protocol&&a.host===Md.host}function Wf(){this.$get=la(x)}function Nd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&
(c[l]=b(g.substring(k+1))));return c}}function $f(){this.$get=Nd}function cd(a){function b(d,c){if(C(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Od);b("date",Pd);b("filter",Eg);b("json",Fg);b("limitTo",Gg);b("lowercase",Hg);b("number",Qd);b("orderBy",Rd);b("uppercase",Ig)}function Eg(){return function(a,b,d,c){if(!qa(a)){if(null==a)return a;throw L("filter")("notarray",
a);}c=c||"$";var e;switch(yc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Jg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Jg(a,b,d,c){var e=C(a)&&d in a;!0===b?b=sa:D(b)||(b=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;if(C(b)||C(a)&&!Wb(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!C(f)?Ea(f,a[d],b,d,!1):Ea(f,a,b,d,c)}}function Ea(a,b,d,c,e,
f){var g=yc(a),h=yc(b);if("string"===h&&"!"===b.charAt(0))return!Ea(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Ea(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if(k.charAt&&"$"!==k.charAt(0)&&Ea(a[k],b,d,c,!0))return!0;return f?!1:Ea(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!D(f)&&!w(f)&&(g=k===c,!Ea(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function yc(a){return null===a?"null":typeof a}function Od(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Sd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Sd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Kg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Td))&&(a=a.replace(Td,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===zc;e++);
if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===zc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Ud&&(d=d.splice(0,Ud-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Lg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-
1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Sd(a,b,d,c,e){if(!F(a)&&!ba(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=Kg(h);Lg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=zc+a;d&&(a=a.substr(a.length-b));return e+a}function Y(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Kb(f,b,c,e)}}function mb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Vd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Wd(a){return function(b){var d=Vd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function Ac(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Pd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=Mg.test(c)?Z(c):b(c));ba(c)&&(c=new Date(c));if(!ga(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Ng.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Pc(f,m),c=Yb(c,f,!0));q(h,function(b){k=Og[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Fg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function Gg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(da(b))return a;ba(a)&&(a=a.toString());if(!qa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?Bc(a,d,d+b):0===d?Bc(a,b,a.length):Bc(a,Math.max(0,d+b),d)}}function Bc(a,b,d){return F(a)?a.slice(b,d):va.call(a,b,d)}function Rd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(D(b))d=b;else if(F(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(C(k)&&(k=a.index),C(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!qa(a))throw L("orderBy")("notarray",a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=D(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(D(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Wb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Qa(a){D(a)&&(a={link:a});a.restrict=a.restrict||"AC";return la(a)}function Lb(a,b,d,
c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Xd(this)}function Xd(a){a.$$classCache={};a.$$classCache[Yd]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function Zd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Tc(c,"-"):"";b(a,nb+c,!0===d);b(a,Yd+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){w(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&e(this.$pending,a,h),$d(this.$pending)&&(this.$pending=void 0));Ha(g)?g?(e(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),e(this.$$success,a,h)):(e(this.$error,a,h),e(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=$d(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function $d(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Cc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Ra(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",
function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",l);if(ae[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ga(d))return d;if(F(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Pg.test(d))return new Date(d);
a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ga(a)?d(a)||
void 0:a}Dc(e,f,g,h);Ra(e,f,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Yb(a,r)),a});h.$formatters.push(function(a){if(a&&!ga(a))throw pb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Yb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(u(g.min)||g.ngMin){var v;h.$validators.min=function(a){return!n(a)||w(v)||d(a)>=v};g.$observe("min",function(a){v=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var t;
h.$validators.max=function(a){return!n(a)||w(t)||d(a)<=t};g.$observe("max",function(a){t=p(a);h.$validate()})}}}function Dc(a,b,d,c){(c.$$hasNativeValidators=C(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function be(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Qg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!ba(b))throw pb("numfmt",b);b=b.toString()}return b})}
function Sa(a){u(a)&&!ba(a)&&(a=parseFloat(a));return da(a)?void 0:a}function Ec(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ce(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Ec(a):0,h=e?Ec(b):0,k=f?Ec(d):0,g=Math.max(g,h,k),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function de(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",
d,c);return a(b)}return e}function Fc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){var b=a;H(a)?b=a.map(c).join(" "):C(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,h,k){function l(a,b){var c=[];q(a,function(a){if(0<b||n[a])n[a]=(n[a]||
0)+b,n[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===b){var c=r,c=l(c&&c.split(" "),1);k.$addClass(c)}else c=r,c=l(c&&c.split(" "),-1),k.$removeClass(c);p=a}var n=h.data("$classCounts"),p=!0,r;n||(n=V(),h.data("$classCounts",n));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(k[a],c),function(a){F(a)||(a=c(a));if(p===b){var e=a,f=r&&r.split(" "),g=e&&e.split(" "),e=d(f,g),f=d(g,f),e=l(e,-1),f=l(f,1);k.$addClass(f);k.$removeClass(e)}r=a})}}}]}
function Ob(a,b,d,c,e,f,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;
this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=h;this.$$exceptionHandler=b;Xd(this);Rg(this)}function Rg(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=
b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,z))}return b})}function Gc(a){this.$$options=a}function ee(a,b){q(b,function(b,c){u(a[c])||(a[c]=b)})}function Ta(a,b){a.prop("selected",b);a.attr("selected",b)}var Sg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Ic={objectMaxDepth:5},Q=function(a){return F(a)?a.toLowerCase():
a},ub=function(a){return F(a)?a.toUpperCase():a},za,B,na,va=[].slice,sg=[].splice,Tg=[].push,ma=Object.prototype.toString,Mc=Object.getPrototypeOf,Fa=L("ng"),ea=x.angular||(x.angular={}),ac,qb=0;za=x.document.documentMode;var da=Number.isNaN||function(a){return a!==a};z.$inject=[];Ya.$inject=[];var H=Array.isArray,qe=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,T=function(a){return F(a)?a.trim():a},Kd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ga=function(){if(!u(Ga.rules)){var a=x.document.querySelector("[ng-csp]")||x.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ga.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ga;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ga.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ja.length,
c,e;for(b=0;b<d;++b)if(c=Ja[b],a=x.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},se=/:/g,Ja=["ng-","data-ng-","ng:","x-ng-"],ve=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof x.HTMLScriptElement||b instanceof x.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=
b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(x.document),ye=/[A-Z]/g,Uc=!1,Ia=3,De={full:"1.6.4",major:1,minor:6,dot:4,codeName:"phenomenal-footnote"};W.expando="ng339";var hb=W.cache={},eg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var ag=/-([a-z])/g,Ug=/^-ms-/,zb={mouseleave:"mouseout",mouseenter:"mouseover"},dc=L("jqLite"),dg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
cc=/<|&#?\w+;/,bg=/<([\w:-]+)/,cg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var jg=x.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Na=W.prototype={ready:ed,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Tg,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Fb[Q(a)]=a});var jd={};q("input select option textarea button form details".split(" "),function(a){jd[a]=!0});var rd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern",ngStep:"step"};q({data:hc,removeData:gc,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gc(a[b])}},function(a,b){W[b]=a});q({data:hc,inheritedData:Db,scope:function(a){return B.data(a,"$scope")||Db(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:gd,injector:function(a){return Db(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,d){b=wb(b.replace(Ug,"ms-"));if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ia&&2!==c&&8!==c&&a.getAttribute){var c=Q(b),e=Fb[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Ia?
a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;xb(a,!0);a.innerHTML=b},empty:hd},function(a,b){W.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==hd&&w(2===a.length&&a!==Ab&&a!==gd?b:c)){if(C(b)){for(e=0;e<g;e++)if(a===hc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=
a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:gc,on:function(a,b,d,c){if(u(c))throw dc("onargs");if(bc(a)){c=yb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=gg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));h.push(d)};g--;)b=c[g],zb[b]?(h(zb[b],ig),h(b,void 0,!0)):h(b)}},
off:fd,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;xb(a);q(new W(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},
prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=B(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Eb,detach:function(a){Eb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var e=d;w(e)&&(e=!Ab(a,b));
(e?Cb:Bb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:fc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=yb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===
this.immediatePropagationStopped},stopPropagation:z,type:f,target:a},b.type&&(c=S(c,b)),b=pa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){W.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),u(f)&&(f=B(f))):ec(f,a(this[g],b,c,e));return u(f)?f:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;var Vg=Object.create(null);kd.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return da(a)?Vg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};
var Gb=kd,Zf=[function(){this.$get=[function(){return Gb}]}],lg=/^([^(]+?)=>/,mg=/^[^(]*\(\s*([^)]*)\)/m,Wg=/,/,Xg=/^\s*(_?)(\S+?)\1\s*$/,kg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ya=L("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||ng(a)),ya("strictdi",d);b=ld(a);q(b[1].split(Wg),function(a){a.replace(Xg,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",
!0);return c};var fe=L("$animate"),qf=function(){this.$get=z},rf=function(){var a=new Gb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):H(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=og(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Cb(a,e);f&&Bb(a,f)});a.delete(b)}});b.length=0}return{enabled:z,
on:z,off:z,pin:z,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.set(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},of=["$provide",function(a){var b=this,d=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw fe("notcsel",c);var f=c+"-animation";b.$$registeredAnimations[c.substr(1)]=
f;a.factory(f,d)};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,fe("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var l=d[e];if(1===l.nodeType){e=l;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&
a.end()},enter:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"enter",ia(k))},move:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"move",ia(k))},leave:function(b,d){return a.push(b,"leave",ia(d),function(){b.remove()})},addClass:function(b,d,e){e=ia(e);e.addClass=ib(e.addclass,d);return a.push(b,"addClass",e)},removeClass:function(b,d,e){e=ia(e);e.removeClass=ib(e.removeClass,d);return a.push(b,"removeClass",e)},setClass:function(b,d,
e,k){k=ia(k);k.addClass=ib(k.addClass,d);k.removeClass=ib(k.removeClass,e);return a.push(b,"setClass",k)},animate:function(b,d,e,k,l){l=ia(l);l.from=l.from?S(l.from,d):d;l.to=l.to?S(l.to,e):e;l.tempClasses=ib(l.tempClasses,k||"ng-inline-animate");return a.push(b,"animate",l)}}}]}],tf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},
sf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},
done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:z,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},pf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=ra(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=L("$compile"),lc=new function(){};Wc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===lc};var md=/^((?:x|data)[:\-_])/i,rg=/[:\-_]+(.)/g,td=L("$controller"),
sd=/^(\S+)(\s+as\s+([\w$]+))?$/,Af=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},ud="application/json",pc={"Content-Type":ud+";charset=utf-8"},ug=/^\[|^\{(?!\{)/,vg={"[":/]$/,"{":/}$/},tg=/^\)]\}',?\n/,oc=L("$http"),Da=ea.$interpolateMinErr=L("$interpolate");Da.throwNoconcat=function(a){throw Da("noconcat",a);};Da.interr=function(a,b){return Da("interr",a,b.toString())};var If=function(){this.$get=function(){function a(a){var b=
function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ea.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},Yg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,xg={http:80,https:443,ftp:21},kb=L("$location"),yg=/^\s*[\\/]{2,}/,Zg={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),
url:function(a){if(w(a))return this.$$url;var b=Yg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:Cd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||ba(a))a=a.toString(),this.$$search=Rc(a);else if(C(a))a=ra(a,{}),q(a,function(b,
c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Cd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([Bd,tc,sc],function(a){a.prototype=Object.create(Zg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==sc||!this.$$html5)throw kb("nostate");this.$$state=w(b)?null:b;this.$$urlUpdatedByLocation=
!0;return this}});var Ua=L("$parse"),Bg={}.constructor.prototype.valueOf,Qb=V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var $g={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},wc=function(a){this.options=a};wc.prototype={constructor:wc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],e=Qb[d];Qb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=$g[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Fd(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=ra(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
$locals:{type:s.LocalsExpression}}};Hd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(a,b.$filter);var d="",c;this.stage="assign";if(c=Gd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Ed(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var h=b.nextId();
b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,zg,Ag,Dd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||z;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,
void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,
b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),
k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.computedMember(g,h),k.assign(b,
m),d&&(d.computed=!0,d.name=h)):(e&&1!==e&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):
(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);m=k.member(g.context,
g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();
k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+
b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,
b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,
b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(ba(a))return a.toString();if(!0===a)return"true";if(!1===
a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Id.prototype={compile:function(a){var b=this;U(a,b.$filter);var d,c;if(d=Gd(a))c=this.recurse(d);d=Ed(a.body);var e;d&&(e=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;e.push(d);a.watchId=c}));var f=[];q(a.body,function(a){f.push(b.recurse(a.expression))});
a=0===a.body.length?z:1===a.body.length?f[0]:function(a,b){var c;q(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+
a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return f.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,
e,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),p;if(null!=n.value){p=[];for(var r=0;r<g.length;++r)p.push(g[r](a,c,d,f));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=
this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:
""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:
d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=Dd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);
return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?
{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:
c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]=
{});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,h){var k=a(e,f,g,h),l,m;null!=k&&(l=b(e,f,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};uc.prototype=
{constructor:uc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression);b.constant=a.constant;return b}};var ta=L("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},xc=/_([a-z])/g,Dg=L("$compile"),aa=x.document.createElement("a"),Md=Ca(x.location.href);Nd.$inject=["$document"];
cd.$inject=["$provide"];var Ud=22,Td=".",zc="0";Od.$inject=["$locale"];Qd.$inject=["$locale"];var Og={yyyy:Y("FullYear",4,0,!1,!0),yy:Y("FullYear",2,0,!0,!0),y:Y("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),LLLL:mb("Month",!1,!0),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),
a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Wd(2),w:Wd(1),G:Ac,GG:Ac,GGG:Ac,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ng=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Mg=/^-?\d+$/;Pd.$inject=["$locale"];var Hg=la(Q),Ig=la(ub);Rd.$inject=["$parse"];var Fe=la({restrict:"E",compile:function(a,
b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Fb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ba("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(rd,function(a,b){vb[b]=
function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Sg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ba("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),
za&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Mb={$addControl:z,$$renameControl:function(a,b){a.$name=b},$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z,$setSubmitted:z};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ka(a.$name,"input");this.$$controls.push(a);
a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Zd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ge=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||z}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,f){d.addClass(Va).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):z;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);S(n,Mb)})}}}}}]},Ge=ge(),
Se=ge(!0),Pg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ah=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,bh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Qg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,he=/^(\d{4,})-(\d{2})-(\d{2})$/,ie=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Hc=/^(\d{4,})-W(\d\d)$/,je=/^(\d{4,})-(\d\d)$/,ke=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ae=V();q(["date","datetime-local","month","time","week"],function(a){ae[a]=!0});var le={text:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c)},date:ob("date",he,Nb(he,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ie,Nb(ie,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ke,Nb(ke,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Hc,function(a,b){if(ga(a))return a;
if(F(a)){Hc.lastIndex=0;var d=Hc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Vd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:ob("month",je,Nb(je,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g},d.$observe("min",function(a){g=Sa(a);c.$validate()});
if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h},d.$observe("max",function(a){h=Sa(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||w(k)||ce(b,g||0,k)};d.$observe("step",function(a){k=Sa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||ah.test(d)}},email:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||bh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==T(d.ngTrim);w(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=T(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=T(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Sa(a);da(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Sa(a);da(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Sa(a);da(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=u(d.min);e=u(d.max);f=u(d.step);var s=c.$render;c.$render=m&&u(q.rangeUnderflow)&&
u(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(n)||b>=n},g("min",h));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(p)||b<=p},g("max",k));f&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||w(r)||ce(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,h){var k=de(h,a,"ngTrueValue",d.ngTrueValue,!0),l=de(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:z,button:z,submit:z,reset:z,file:z},Xc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(le[Q(g.type)]||le.text)(e,f,g,h[0],b,a,d,c)}}}}],ch=/^(true|false|\d+)$/,
kf=function(){function a(a,d,c){var e=u(c)?c:9===za?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return ch.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Ke=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=$b(a)})}}}}],Me=["$interpolate",
"$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],Le=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,
function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],jf=la({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ne=Fc("",!0),Pe=Fc("Odd",0),Oe=Fc("Even",1),Qe=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Re=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],bd={},dh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ba("ng-"+a);bd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};dh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ue=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",
e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Ve=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var r=0,q,s,t,w=function(){s&&(s.remove(),s=null);q&&(q.$destroy(),q=
null);t&&(d.leave(t).done(function(a){!1!==a&&(s=null)}),s=t,t=null)};c.$watch(f,function(f){var m=function(a){!1===a||!u(h)||h&&!c.$eval(h)||b()},s=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&s===r){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).done(m)});q=b;t=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||s!==r||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],mf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(dd(e.template,x.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],We=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),hf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!w(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",Yd="ng-invalid",Va="ng-pristine",Rb="ng-dirty",pb=L("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+
"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);D(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){D(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,xa(this.$$element));},$render:z,$isEmpty:function(a){return w(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,
"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=
!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!da(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),
f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(q(k.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(k.$asyncValidators,function(e,g){var k=e(a,b);if(!k||!D(k.then))throw pb("nopromise",k);f(g,void 0);c.push(k.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});
c.length?k.$$q.all(c).then(function(){g(d)},z):g(!0)}function f(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(w(k.$$parserValid))f(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){f(b,null)}),q(k.$asyncValidators,function(a,b){f(b,null)})),f(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?e():g(!1):
g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=w(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),w(a)){this.$$parserValid=!1;break}da(this.$modelValue)&&
(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},
this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");ba(b[a])?b=b[a]:ba(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};Zd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var gf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){h.$setTouched()}var h=f[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,eh=/(\s+|^)default(\s+|$)/;Gc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=S({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=T(d.replace(eh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ee(a,this.$$options));ee(a,Pb.$$options);return new Gc(a)}};Pb=new Gc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var lf=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Xe=Qa({terminal:!0,priority:1E3}),fh=L("ngOptions"),gh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
ef=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&qa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(gh);if(!n)throw fh("iexp",a,xa(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,t=s&&d(s),u=s?function(a,b){return t(c,b)}:function(a){return Pa(a)},
w=function(a,b){return u(a,G(a,b))},A=d(n[2]||n[1]),x=d(n[3]||""),I=d(n[4]||""),K=d(n[8]),E={},G=q?function(a,b){E[q]=b;E[p]=a;return E}:function(a){E[p]=a;return E};return{trackBy:s,getTrackByValue:w,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=G(l,h),l=u(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=I(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=G(d[p],p),r=v(c,q),p=u(r,q),t=A(c,q),E=x(c,q),q=I(c,q),r=new e(p,r,t,E,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return s?ra(a.viewValue):a.viewValue}}}}}var e=x.document.createElement("option"),f=x.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=z},post:function(d,h,k,l){function m(a){var b=(a=A.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=A&&r.readValue();if(A)for(var b=A.items.length-1;0<=b;b--){var c=A.items[b];u(c.group)?Eb(c.element.parentNode):Eb(c.element)}A=z.getOptions();var d={};x&&h.prepend(r.emptyOption);A.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),I.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=I,c=e.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(I);s.$render();s.$isEmpty(a)||(b=r.readValue(),(z.trackBy||v?sa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],v=k.multiple;l=0;for(var t=h.children(),w=t.length;l<w;l++)if(""===t[l].value){r.hasEmptyOption=!0;r.emptyOption=t.eq(l);break}var x=!!r.emptyOption;B(e.cloneNode(!1)).val("?");var A,z=c(k.ngOptions,h,d),I=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};v?(r.writeValue=function(a){var b=a&&a.map(m)||[];A.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=A.selectValueMap[a])&&!a.disabled&&b.push(A.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(H(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=A.selectValueMap[h.val()],c=A.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):x?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=A.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
A.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));x&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(z.getWatchables,
p)}}}}],Ye=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),t=s+l+"-"+n+v,u=ea.noop,x;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,t))});f.$watch(l,function(b){var c=parseFloat(b),e=da(c);e||c in p||(c=a.pluralCat(c-
n));c===x||e&&da(x)||(u(),e=r[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),u=z,k()):u=f.$watch(e,k),x=c)})}}}],Ze=["$parse","$animate","$compile",function(a,b,d){var c=L("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var t,u,w,x,z={$id:Pa};r?t=a(r):(w=function(a,b){return Pa(b)},
x=function(a){return a});return function(a,d,f,g,l){t&&(u=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=d;return t(a,z)});var m=V();a.$watchCollection(n,function(f){var g,n,r=d[0],t,z=V(),B,D,F,C,G,E,H;p&&(a[p]=f);if(qa(f))G=f,n=u||w;else for(H in n=u||x,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);B=G.length;H=Array(B);for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],C=n(D,F,g),m[C])E=m[C],delete m[C],z[C]=E,H[g]=E;else{if(z[C])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,F);H[g]={id:C,
scope:void 0,clone:void 0};z[C]=!0}for(t in m){E=m[t];C=tb(E.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],E=H[g],E.scope){t=r;do t=t.nextSibling;while(t&&t.$$NG_REMOVED);E.clone[0]!==t&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,s,F,v,D,B)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;z[E.id]=E;e(E.scope,g,s,F,v,D,B)});m=
z})}}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Te=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],af=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),bf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;k.length;)a.cancel(k.pop());d=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],cf=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),df=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),hh=L("ngTransclude"),ff=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw hh("orphan",xa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==
Ia||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],He=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ih={$setViewValue:z,$render:z},jh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){h||(h=!0,b.$$postDigest(function(){b.$$destroyed||(h=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}var e=this,f=new Gb;e.selectValueMap={};e.ngModelCtrl=ih;e.multiple=!1;e.unknownOption=B(x.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ta(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ta(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=
function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ta(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=z});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];
c&&Ta(B(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?c:b),Ta(B(a[0].options[a[0].selectedIndex]),!0)):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ka(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),
""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};var g=!1,h=!1;e.registerOption=function(a,b,f,g,h){if(f.$attr.ngValue){var q,s=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");u(s)&&(e.removeOption(q),delete e.selectValueMap[s],d=!0);s=Pa(a);q=a;e.selectValueMap[s]=a;e.addOption(a,b);b.attr("value",s);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(q)&&(e.removeOption(q),d=!0);q=
a;e.addOption(a,b);d&&f&&c()}):h?a.$watch(h,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ie=function(){return{restrict:"E",require:["select",
"?ngModel"],controller:jh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){q(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ta(B(b),c)})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||sa(g,f.$viewValue)||(g=pa(f.$viewValue),f.$render());h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=z},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Je=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;u(d.ngValue)||
(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],Zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw L("ngPattern")("noregexp",f,a,xa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=da(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};x.angular.bootstrap?x.console&&console.log("WARNING: Tried to load angular more than once."):(ze(),Ce(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(function(){ue(x.document,Sc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
/**
 * @license AngularJS v1.5.0
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function (window, angular, undefined) {
    'use strict';

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *     Any commits to this file should be reviewed with security in mind.  *
     *   Changes to this file can potentially create security vulnerabilities. *
     *          An approval from 2 Core members with history of modifying      *
     *                         this file is required.                          *
     *                                                                         *
     *  Does the change somehow allow for arbitrary javascript to be executed? *
     *    Or allows for someone to change the prototype of built-in objects?   *
     *     Or gives undesired access to variables likes document or window?    *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    var $sanitizeMinErr = angular.$$minErr('$sanitize');

    /**
     * @ngdoc module
     * @name ngSanitize
     * @description
     *
     * # ngSanitize
     *
     * The `ngSanitize` module provides functionality to sanitize HTML.
     *
     *
     * <div doc-module-components="ngSanitize"></div>
     *
     * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
     */

    /**
     * @ngdoc service
     * @name $sanitize
     * @kind function
     *
     * @description
     *   Sanitizes an html string by stripping all potentially dangerous tokens.
     *
     *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
     *   then serialized back to properly escaped html string. This means that no unsafe input can make
     *   it into the returned string.
     *
     *   The whitelist for URL sanitization of attribute values is configured using the functions
     *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider
     *   `$compileProvider`}.
     *
     *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
     *
     * @param {string} html HTML input.
     * @returns {string} Sanitized HTML.
     *
     * @example
       <example module="sanitizeExample" deps="angular-sanitize.js">
       <file name="index.html">
         <script>
             angular.module('sanitizeExample', ['ngSanitize'])
               .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
                 $scope.snippet =
                   '<p style="color:blue">an html\n' +
                   '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
                   'snippet</p>';
                 $scope.deliberatelyTrustDangerousSnippet = function() {
                   return $sce.trustAsHtml($scope.snippet);
                 };
               }]);
         </script>
         <div ng-controller="ExampleController">
            Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
           <table>
             <tr>
               <td>Directive</td>
               <td>How</td>
               <td>Source</td>
               <td>Rendered</td>
             </tr>
             <tr id="bind-html-with-sanitize">
               <td>ng-bind-html</td>
               <td>Automatically uses $sanitize</td>
               <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
               <td><div ng-bind-html="snippet"></div></td>
             </tr>
             <tr id="bind-html-with-trust">
               <td>ng-bind-html</td>
               <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
               <td>
               <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
    &lt;/div&gt;</pre>
               </td>
               <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
             </tr>
             <tr id="bind-default">
               <td>ng-bind</td>
               <td>Automatically escapes</td>
               <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
               <td><div ng-bind="snippet"></div></td>
             </tr>
           </table>
           </div>
       </file>
       <file name="protractor.js" type="protractor">
         it('should sanitize the html snippet by default', function() {
           expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
             toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
         });
    
         it('should inline raw snippet if bound to a trusted value', function() {
           expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
             toBe("<p style=\"color:blue\">an html\n" +
                  "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
                  "snippet</p>");
         });
    
         it('should escape snippet without any filter', function() {
           expect(element(by.css('#bind-default div')).getInnerHtml()).
             toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
                  "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
                  "snippet&lt;/p&gt;");
         });
    
         it('should update', function() {
           element(by.model('snippet')).clear();
           element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
           expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
             toBe('new <b>text</b>');
           expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
             'new <b onclick="alert(1)">text</b>');
           expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
             "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
         });
       </file>
       </example>
     */


    /**
     * @ngdoc provider
     * @name $sanitizeProvider
     *
     * @description
     * Creates and configures {@link $sanitize} instance.
     */
    function $SanitizeProvider() {
        var svgEnabled = false;

        this.$get = ['$$sanitizeUri', function ($$sanitizeUri) {
            if (svgEnabled) {
                angular.extend(validElements, svgElements);
            }
            return function (html) {
                var buf = [];
                htmlParser(html, htmlSanitizeWriter(buf, function (uri, isImage) {
                    return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
                }));
                return buf.join('');
            };
        }];


        /**
         * @ngdoc method
         * @name $sanitizeProvider#enableSvg
         * @kind function
         *
         * @description
         * Enables a subset of svg to be supported by the sanitizer.
         *
         * <div class="alert alert-warning">
         *   <p>By enabling this setting without taking other precautions, you might expose your
         *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
         *   outside of the containing element and be rendered over other elements on the page (e.g. a login
         *   link). Such behavior can then result in phishing incidents.</p>
         *
         *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
         *   tags within the sanitized content:</p>
         *
         *   <br>
         *
         *   <pre><code>
         *   .rootOfTheIncludedContent svg {
         *     overflow: hidden !important;
         *   }
         *   </code></pre>
         * </div>
         *
         * @param {boolean=} regexp New regexp to whitelist urls with.
         * @returns {boolean|ng.$sanitizeProvider} Returns the currently configured value if called
         *    without an argument or self for chaining otherwise.
         */
        this.enableSvg = function (enableSvg) {
            if (angular.isDefined(enableSvg)) {
                svgEnabled = enableSvg;
                return this;
            } else {
                return svgEnabled;
            }
        };
    }

    function sanitizeText(chars) {
        var buf = [];
        var writer = htmlSanitizeWriter(buf, angular.noop);
        writer.chars(chars);
        return buf.join('');
    }


    // Regular Expressions for parsing tags and attributes
    var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      // Match everything outside of normal chars and " (quote character)
      NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;


    // Good source of info about elements and attributes
    // http://dev.w3.org/html5/spec/Overview.html#semantics
    // http://simon.html5.org/html-elements

    // Safe Void Elements - HTML5
    // http://dev.w3.org/html5/spec/Overview.html#void-elements
    var voidElements = toMap("area,br,col,hr,img,wbr");

    // Elements that you can, intentionally, leave open (and which close themselves)
    // http://dev.w3.org/html5/spec/Overview.html#optional-tags
    var optionalEndTagBlockElements = toMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        optionalEndTagInlineElements = toMap("rp,rt"),
        optionalEndTagElements = angular.extend({},
                                                optionalEndTagInlineElements,
                                                optionalEndTagBlockElements);

    // Safe Block Elements - HTML5
    var blockElements = angular.extend({}, optionalEndTagBlockElements, toMap("address,article," +
            "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
            "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"));

    // Inline Elements - HTML5
    var inlineElements = angular.extend({}, optionalEndTagInlineElements, toMap("a,abbr,acronym,b," +
            "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
            "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

    // SVG Elements
    // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
    // Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
    // They can potentially allow for arbitrary javascript to be executed. See #11290
    var svgElements = toMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
            "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
            "radialGradient,rect,stop,svg,switch,text,title,tspan");

    // Blocked Elements (will be stripped)
    var blockedElements = toMap("script,style");

    var validElements = angular.extend({},
                                       voidElements,
                                       blockElements,
                                       inlineElements,
                                       optionalEndTagElements);

    //Attributes that have href and hence need to be sanitized
    var uriAttrs = toMap("background,cite,href,longdesc,src,xlink:href");

    var htmlAttrs = toMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
        'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
        'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
        'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
        'valign,value,vspace,width');

    // SVG attributes (without "id" and "name" attributes)
    // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
    var svgAttrs = toMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
        'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
        'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
        'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
        'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
        'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
        'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
        'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
        'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
        'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
        'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
        'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
        'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
        'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
        'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

    var validAttrs = angular.extend({},
                                    uriAttrs,
                                    svgAttrs,
                                    htmlAttrs);

    function toMap(str, lowercaseKeys) {
        var obj = {}, items = str.split(','), i;
        for (i = 0; i < items.length; i++) {
            obj[lowercaseKeys ? angular.lowercase(items[i]) : items[i]] = true;
        }
        return obj;
    }

    var inertBodyElement;
    (function (window) {
        var doc;
        if (window.document && window.document.implementation) {
            doc = window.document.implementation.createHTMLDocument("inert");
        } else {
            throw $sanitizeMinErr('noinert', "Can't create an inert html document");
        }
        var docElement = doc.documentElement || doc.getDocumentElement();
        var bodyElements = docElement.getElementsByTagName('body');

        // usually there should be only one body element in the document, but IE doesn't have any, so we need to create one
        if (bodyElements.length === 1) {
            inertBodyElement = bodyElements[0];
        } else {
            var html = doc.createElement('html');
            inertBodyElement = doc.createElement('body');
            html.appendChild(inertBodyElement);
            doc.appendChild(html);
        }
    })(window);

    /**
     * @example
     * htmlParser(htmlString, {
     *     start: function(tag, attrs) {},
     *     end: function(tag) {},
     *     chars: function(text) {},
     *     comment: function(text) {}
     * });
     *
     * @param {string} html string
     * @param {object} handler
     */
    function htmlParser(html, handler) {
        if (html === null || html === undefined) {
            html = '';
        } else if (typeof html !== 'string') {
            html = '' + html;
        }
        inertBodyElement.innerHTML = html;

        //mXSS protection
        var mXSSAttempts = 5;
        do {
            if (mXSSAttempts === 0) {
                throw $sanitizeMinErr('uinput', "Failed to sanitize html because the input is unstable");
            }
            mXSSAttempts--;

            // strip custom-namespaced attributes on IE<=11
            if (document.documentMode <= 11) {
                stripCustomNsAttrs(inertBodyElement);
            }
            html = inertBodyElement.innerHTML; //trigger mXSS
            inertBodyElement.innerHTML = html;
        } while (html !== inertBodyElement.innerHTML);

        var node = inertBodyElement.firstChild;
        while (node) {
            switch (node.nodeType) {
                case 1: // ELEMENT_NODE
                    handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
                    break;
                case 3: // TEXT NODE
                    handler.chars(node.textContent);
                    break;
            }

            var nextNode;
            if (!(nextNode = node.firstChild)) {
                if (node.nodeType == 1) {
                    handler.end(node.nodeName.toLowerCase());
                }
                nextNode = node.nextSibling;
                if (!nextNode) {
                    while (nextNode == null) {
                        node = node.parentNode;
                        if (node === inertBodyElement) break;
                        nextNode = node.nextSibling;
                        if (node.nodeType == 1) {
                            handler.end(node.nodeName.toLowerCase());
                        }
                    }
                }
            }
            node = nextNode;
        }

        while (node = inertBodyElement.firstChild) {
            inertBodyElement.removeChild(node);
        }
    }

    function attrToMap(attrs) {
        var map = {};
        for (var i = 0, ii = attrs.length; i < ii; i++) {
            var attr = attrs[i];
            map[attr.name] = attr.value;
        }
        return map;
    }


    /**
     * Escapes all potentially dangerous characters, so that the
     * resulting string can be safely inserted into attribute or
     * element text.
     * @param value
     * @returns {string} escaped text
     */
    function encodeEntities(value) {
        return value.
          replace(/&/g, '&amp;').
          replace(SURROGATE_PAIR_REGEXP, function (value) {
              var hi = value.charCodeAt(0);
              var low = value.charCodeAt(1);
              return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
          }).
          replace(NON_ALPHANUMERIC_REGEXP, function (value) {
              return '&#' + value.charCodeAt(0) + ';';
          }).
          replace(/</g, '&lt;').
          replace(/>/g, '&gt;');
    }

    /**
     * create an HTML/XML writer which writes to buffer
     * @param {Array} buf use buf.join('') to get out sanitized html string
     * @returns {object} in the form of {
     *     start: function(tag, attrs) {},
     *     end: function(tag) {},
     *     chars: function(text) {},
     *     comment: function(text) {}
     * }
     */
    function htmlSanitizeWriter(buf, uriValidator) {
        var ignoreCurrentElement = false;
        var out = angular.bind(buf, buf.push);
        return {
            start: function (tag, attrs) {
                tag = angular.lowercase(tag);
                if (!ignoreCurrentElement && blockedElements[tag]) {
                    ignoreCurrentElement = tag;
                }
                if (!ignoreCurrentElement && validElements[tag] === true) {
                    out('<');
                    out(tag);
                    angular.forEach(attrs, function (value, key) {
                        var lkey = angular.lowercase(key);
                        var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
                        if (validAttrs[lkey] === true &&
                          (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
                            out(' ');
                            out(key);
                            out('="');
                            out(encodeEntities(value));
                            out('"');
                        }
                    });
                    out('>');
                }
            },
            end: function (tag) {
                tag = angular.lowercase(tag);
                if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
                    out('</');
                    out(tag);
                    out('>');
                }
                if (tag == ignoreCurrentElement) {
                    ignoreCurrentElement = false;
                }
            },
            chars: function (chars) {
                if (!ignoreCurrentElement) {
                    out(encodeEntities(chars));
                }
            }
        };
    }


    /**
     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
     * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
     * to allow any of these custom attributes. This method strips them all.
     *
     * @param node Root element to process
     */
    function stripCustomNsAttrs(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            var attrs = node.attributes;
            for (var i = 0, l = attrs.length; i < l; i++) {
                var attrNode = attrs[i];
                var attrName = attrNode.name.toLowerCase();
                if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
                    node.removeAttributeNode(attrNode);
                    i--;
                    l--;
                }
            }
        }

        var nextNode = node.firstChild;
        if (nextNode) {
            stripCustomNsAttrs(nextNode);
        }

        nextNode = node.nextSibling;
        if (nextNode) {
            stripCustomNsAttrs(nextNode);
        }
    }



    // define ngSanitize module and register $sanitize service
    angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

    /* global sanitizeText: false */

    /**
     * @ngdoc filter
     * @name linky
     * @kind function
     *
     * @description
     * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and
     * plain email address links.
     *
     * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
     *
     * @param {string} text Input text.
     * @param {string} target Window (`_blank|_self|_parent|_top`) or named frame to open links in.
     * @param {object|function(url)} [attributes] Add custom attributes to the link element.
     *
     *    Can be one of:
     *
     *    - `object`: A map of attributes
     *    - `function`: Takes the url as a parameter and returns a map of attributes
     *
     *    If the map of attributes contains a value for `target`, it overrides the value of
     *    the target parameter.
     *
     *
     * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
     *
     * @usage
       <span ng-bind-html="linky_expression | linky"></span>
     *
     * @example
       <example module="linkyExample" deps="angular-sanitize.js">
         <file name="index.html">
           <div ng-controller="ExampleController">
           Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
           <table>
             <tr>
               <th>Filter</th>
               <th>Source</th>
               <th>Rendered</th>
             </tr>
             <tr id="linky-filter">
               <td>linky filter</td>
               <td>
                 <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
               </td>
               <td>
                 <div ng-bind-html="snippet | linky"></div>
               </td>
             </tr>
             <tr id="linky-target">
              <td>linky target</td>
              <td>
                <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
              </td>
              <td>
                <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
              </td>
             </tr>
             <tr id="linky-custom-attributes">
              <td>linky custom attributes</td>
              <td>
                <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
              </td>
              <td>
                <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
              </td>
             </tr>
             <tr id="escaped-html">
               <td>no filter</td>
               <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
               <td><div ng-bind="snippet"></div></td>
             </tr>
           </table>
         </file>
         <file name="script.js">
           angular.module('linkyExample', ['ngSanitize'])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.snippet =
                 'Pretty text with some links:\n'+
                 'http://angularjs.org/,\n'+
                 'mailto:us@somewhere.org,\n'+
                 'another@somewhere.org,\n'+
                 'and one more: ftp://127.0.0.1/.';
               $scope.snippetWithSingleURL = 'http://angularjs.org/';
             }]);
         </file>
         <file name="protractor.js" type="protractor">
           it('should linkify the snippet with urls', function() {
             expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
                 toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                      'another@somewhere.org, and one more: ftp://127.0.0.1/.');
             expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
           });
    
           it('should not linkify snippet without the linky filter', function() {
             expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
                 toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                      'another@somewhere.org, and one more: ftp://127.0.0.1/.');
             expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
           });
    
           it('should update', function() {
             element(by.model('snippet')).clear();
             element(by.model('snippet')).sendKeys('new http://link.');
             expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
                 toBe('new http://link.');
             expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
             expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
                 .toBe('new http://link.');
           });
    
           it('should work with the target property', function() {
            expect(element(by.id('linky-target')).
                element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
                toBe('http://angularjs.org/');
            expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
           });
    
           it('should optionally add custom attributes', function() {
            expect(element(by.id('linky-custom-attributes')).
                element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
                toBe('http://angularjs.org/');
            expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
           });
         </file>
       </example>
     */
    angular.module('ngSanitize').filter('linky', ['$sanitize', function ($sanitize) {
        var LINKY_URL_REGEXP =
              /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            MAILTO_REGEXP = /^mailto:/i;

        var linkyMinErr = angular.$$minErr('linky');
        var isString = angular.isString;

        return function (text, target, attributes) {
            if (text == null || text === '') return text;
            if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

            var match;
            var raw = text;
            var html = [];
            var url;
            var i;
            while ((match = raw.match(LINKY_URL_REGEXP))) {
                // We can not end in these as they are sometimes found at the end of the sentence
                url = match[0];
                // if we did not match ftp/http/www/mailto then assume mailto
                if (!match[2] && !match[4]) {
                    url = (match[3] ? 'http://' : 'mailto:') + url;
                }
                i = match.index;
                addText(raw.substr(0, i));
                addLink(url, match[0].replace(MAILTO_REGEXP, ''));
                raw = raw.substring(i + match[0].length);
            }
            addText(raw);
            return $sanitize(html.join(''));

            function addText(text) {
                if (!text) {
                    return;
                }
                html.push(sanitizeText(text));
            }

            function addLink(url, text) {
                var key;
                html.push('<a ');
                if (angular.isFunction(attributes)) {
                    attributes = attributes(url);
                }
                if (angular.isObject(attributes)) {
                    for (key in attributes) {
                        html.push(key + '="' + attributes[key] + '" ');
                    }
                } else {
                    attributes = {};
                }
                if (angular.isDefined(target) && !('target' in attributes)) {
                    html.push('target="',
                              target,
                              '" ');
                }
                html.push('href="',
                          url.replace(/"/g, '&quot;'),
                          '">');
                addText(text);
                html.push('</a>');
            }
        };
    }]);


})(window, window.angular);/**
 * angular-cache
 * @version 4.6.0 - Homepage <https://github.com/jmdobry/angular-cache>
 * @copyright (c) 2013-2016 angular-cache project authors
 * @license MIT <https://github.com/jmdobry/angular-cache/blob/master/LICENSE>
 * @overview angular-cache is a very useful replacement for Angular's $cacheFactory.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(typeof angular === 'undefined' ? require('angular') : angular) :
  typeof define === 'function' && define.amd ? define('angular-cache', ['angular'], factory) :
  (global.angularCacheModuleName = factory(global.angular));
}(this, function (angular) { 'use strict';

  angular = 'default' in angular ? angular['default'] : angular;

  var babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
  
  /**
   * @method bubbleUp
   * @param {array} heap The heap.
   * @param {function} weightFunc The weight function.
   * @param {number} n The index of the element to bubble up.
   */
  var bubbleUp = function bubbleUp(heap, weightFunc, n) {
    var element = heap[n];
    var weight = weightFunc(element);
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = Math.floor((n + 1) / 2) - 1;
      var parent = heap[parentN];
      // If the parent has a lesser weight, things are in order and we
      // are done.
      if (weight >= weightFunc(parent)) {
        break;
      } else {
        heap[parentN] = element;
        heap[n] = parent;
        n = parentN;
      }
    }
  };

  /**
   * @method bubbleDown
   * @param {array} heap The heap.
   * @param {function} weightFunc The weight function.
   * @param {number} n The index of the element to sink down.
   */
  var bubbleDown = function bubbleDown(heap, weightFunc, n) {
    var length = heap.length;
    var node = heap[n];
    var nodeWeight = weightFunc(node);

    while (true) {
      var child2N = (n + 1) * 2;
      var child1N = child2N - 1;
      var swap = null;
      if (child1N < length) {
        var child1 = heap[child1N];
        var child1Weight = weightFunc(child1);
        // If the score is less than our node's, we need to swap.
        if (child1Weight < nodeWeight) {
          swap = child1N;
        }
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = heap[child2N];
        var child2Weight = weightFunc(child2);
        if (child2Weight < (swap === null ? nodeWeight : weightFunc(heap[child1N]))) {
          swap = child2N;
        }
      }

      if (swap === null) {
        break;
      } else {
        heap[n] = heap[swap];
        heap[swap] = node;
        n = swap;
      }
    }
  };

  function BinaryHeap(weightFunc, compareFunc) {
    if (!weightFunc) {
      weightFunc = function weightFunc(x) {
        return x;
      };
    }
    if (!compareFunc) {
      compareFunc = function compareFunc(x, y) {
        return x === y;
      };
    }
    if (typeof weightFunc !== 'function') {
      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "weightFunc" must be a function!');
    }
    if (typeof compareFunc !== 'function') {
      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "compareFunc" must be a function!');
    }
    this.weightFunc = weightFunc;
    this.compareFunc = compareFunc;
    this.heap = [];
  }

  var BHProto = BinaryHeap.prototype;

  BHProto.push = function (node) {
    this.heap.push(node);
    bubbleUp(this.heap, this.weightFunc, this.heap.length - 1);
  };

  BHProto.peek = function () {
    return this.heap[0];
  };

  BHProto.pop = function () {
    var front = this.heap[0];
    var end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      bubbleDown(this.heap, this.weightFunc, 0);
    }
    return front;
  };

  BHProto.remove = function (node) {
    var length = this.heap.length;
    for (var i = 0; i < length; i++) {
      if (this.compareFunc(this.heap[i], node)) {
        var removed = this.heap[i];
        var end = this.heap.pop();
        if (i !== length - 1) {
          this.heap[i] = end;
          bubbleUp(this.heap, this.weightFunc, i);
          bubbleDown(this.heap, this.weightFunc, i);
        }
        return removed;
      }
    }
    return null;
  };

  BHProto.removeAll = function () {
    this.heap = [];
  };

  BHProto.size = function () {
    return this.heap.length;
  };

  var _Promise = null;
  try {
    _Promise = window.Promise;
  } catch (e) {}

  var utils = {
    isNumber: function isNumber(value) {
      return typeof value === 'number';
    },
    isString: function isString(value) {
      return typeof value === 'string';
    },
    isObject: function isObject(value) {
      return value !== null && (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) === 'object';
    },
    isFunction: function isFunction(value) {
      return typeof value === 'function';
    },
    fromJson: function fromJson(value) {
      return JSON.parse(value);
    },
    equals: function equals(a, b) {
      return a === b;
    },

    Promise: _Promise
  };

  function _keys(collection) {
    var keys = [];
    var key = void 0;
    if (!utils.isObject(collection)) {
      return keys;
    }
    for (key in collection) {
      if (collection.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  function _isPromiseLike(value) {
    return value && typeof value.then === 'function';
  }

  function _stringifyNumber(number) {
    if (utils.isNumber(number)) {
      return number.toString();
    }
    return number;
  }

  function _keySet(collection) {
    var keySet = {};
    var key = void 0;
    if (!utils.isObject(collection)) {
      return keySet;
    }
    for (key in collection) {
      if (collection.hasOwnProperty(key)) {
        keySet[key] = key;
      }
    }
    return keySet;
  }

  var defaults = {
    capacity: Number.MAX_VALUE,
    maxAge: Number.MAX_VALUE,
    deleteOnExpire: 'none',
    onExpire: null,
    cacheFlushInterval: null,
    recycleFreq: 1000,
    storageMode: 'memory',
    storageImpl: null,
    disabled: false,
    storagePrefix: 'cachefactory.caches.',
    storeOnResolve: false,
    storeOnReject: false
  };

  var caches = {};

  function createCache(cacheId, options) {
    if (cacheId in caches) {
      throw new Error(cacheId + ' already exists!');
    } else if (!utils.isString(cacheId)) {
      throw new Error('cacheId must be a string!');
    }

    var $$data = {};
    var $$promises = {};
    var $$storage = null;
    var $$expiresHeap = new BinaryHeap(function (x) {
      return x.expires;
    }, utils.equals);
    var $$lruHeap = new BinaryHeap(function (x) {
      return x.accessed;
    }, utils.equals);

    var cache = caches[cacheId] = {

      $$id: cacheId,

      destroy: function destroy() {
        clearInterval(this.$$cacheFlushIntervalId);
        clearInterval(this.$$recycleFreqId);
        this.removeAll();
        if ($$storage) {
          $$storage().removeItem(this.$$prefix + '.keys');
          $$storage().removeItem(this.$$prefix);
        }
        $$storage = null;
        $$data = null;
        $$lruHeap = null;
        $$expiresHeap = null;
        this.$$prefix = null;
        delete caches[this.$$id];
      },
      disable: function disable() {
        this.$$disabled = true;
      },
      enable: function enable() {
        delete this.$$disabled;
      },
      get: function get(key, options) {
        var _this2 = this;

        if (Array.isArray(key)) {
          var _ret = function () {
            var keys = key;
            var values = [];

            keys.forEach(function (key) {
              var value = _this2.get(key, options);
              if (value !== null && value !== undefined) {
                values.push(value);
              }
            });

            return {
              v: values
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
        } else {
          key = _stringifyNumber(key);

          if (this.$$disabled) {
            return;
          }
        }

        options = options || {};
        if (!utils.isString(key)) {
          throw new Error('key must be a string!');
        } else if (options && !utils.isObject(options)) {
          throw new Error('options must be an object!');
        } else if (options.onExpire && !utils.isFunction(options.onExpire)) {
          throw new Error('options.onExpire must be a function!');
        }

        var item = void 0;

        if ($$storage) {
          if ($$promises[key]) {
            return $$promises[key];
          }

          var itemJson = $$storage().getItem(this.$$prefix + '.data.' + key);

          if (itemJson) {
            item = utils.fromJson(itemJson);
          } else {
            return;
          }
        } else if (utils.isObject($$data)) {
          if (!(key in $$data)) {
            return;
          }

          item = $$data[key];
        }

        var value = item.value;
        var now = new Date().getTime();

        if ($$storage) {
          $$lruHeap.remove({
            key: key,
            accessed: item.accessed
          });
          item.accessed = now;
          $$lruHeap.push({
            key: key,
            accessed: now
          });
        } else {
          $$lruHeap.remove(item);
          item.accessed = now;
          $$lruHeap.push(item);
        }

        if (this.$$deleteOnExpire === 'passive' && 'expires' in item && item.expires < now) {
          this.remove(key);

          if (this.$$onExpire) {
            this.$$onExpire(key, item.value, options.onExpire);
          } else if (options.onExpire) {
            options.onExpire.call(this, key, item.value);
          }
          value = undefined;
        } else if ($$storage) {
          $$storage().setItem(this.$$prefix + '.data.' + key, JSON.stringify(item));
        }

        return value;
      },
      info: function info(key) {
        if (key) {
          var item = void 0;
          if ($$storage) {
            var itemJson = $$storage().getItem(this.$$prefix + '.data.' + key);

            if (itemJson) {
              item = utils.fromJson(itemJson);
              return {
                created: item.created,
                accessed: item.accessed,
                expires: item.expires,
                isExpired: new Date().getTime() - item.created > (item.maxAge || this.$$maxAge)
              };
            } else {
              return undefined;
            }
          } else if (utils.isObject($$data) && key in $$data) {
            item = $$data[key];

            return {
              created: item.created,
              accessed: item.accessed,
              expires: item.expires,
              isExpired: new Date().getTime() - item.created > (item.maxAge || this.$$maxAge)
            };
          } else {
            return undefined;
          }
        } else {
          return {
            id: this.$$id,
            capacity: this.$$capacity,
            maxAge: this.$$maxAge,
            deleteOnExpire: this.$$deleteOnExpire,
            onExpire: this.$$onExpire,
            cacheFlushInterval: this.$$cacheFlushInterval,
            recycleFreq: this.$$recycleFreq,
            storageMode: this.$$storageMode,
            storageImpl: $$storage ? $$storage() : undefined,
            disabled: !!this.$$disabled,
            size: $$lruHeap && $$lruHeap.size() || 0
          };
        }
      },
      keys: function keys() {
        if ($$storage) {
          var keysJson = $$storage().getItem(this.$$prefix + '.keys');

          if (keysJson) {
            return utils.fromJson(keysJson);
          } else {
            return [];
          }
        } else {
          return _keys($$data);
        }
      },
      keySet: function keySet() {
        if ($$storage) {
          var keysJson = $$storage().getItem(this.$$prefix + '.keys');
          var kSet = {};

          if (keysJson) {
            var keys = utils.fromJson(keysJson);

            for (var i = 0; i < keys.length; i++) {
              kSet[keys[i]] = keys[i];
            }
          }
          return kSet;
        } else {
          return _keySet($$data);
        }
      },
      put: function put(key, value, options) {
        var _this3 = this;

        options || (options = {});

        var storeOnResolve = 'storeOnResolve' in options ? !!options.storeOnResolve : this.$$storeOnResolve;
        var storeOnReject = 'storeOnReject' in options ? !!options.storeOnReject : this.$$storeOnReject;

        var getHandler = function getHandler(store, isError) {
          return function (v) {
            if (store) {
              delete $$promises[key];
              if (utils.isObject(v) && 'status' in v && 'data' in v) {
                v = [v.status, v.data, v.headers(), v.statusText];
                _this3.put(key, v);
              } else {
                _this3.put(key, v);
              }
            }
            if (isError) {
              if (utils.Promise) {
                return utils.Promise.reject(v);
              } else {
                throw v;
              }
            } else {
              return v;
            }
          };
        };

        if (this.$$disabled || !utils.isObject($$data) || value === null || value === undefined) {
          return;
        }
        key = _stringifyNumber(key);

        if (!utils.isString(key)) {
          throw new Error('key must be a string!');
        }

        var now = new Date().getTime();
        var item = {
          key: key,
          value: _isPromiseLike(value) ? value.then(getHandler(storeOnResolve, false), getHandler(storeOnReject, true)) : value,
          created: options.created === undefined ? now : options.created,
          accessed: options.accessed === undefined ? now : options.accessed
        };
        if (options.maxAge) {
          item.maxAge = options.maxAge;
        }

        if (options.expires === undefined) {
          item.expires = item.created + (item.maxAge || this.$$maxAge);
        } else {
          item.expires = options.expires;
        }

        if ($$storage) {
          if (_isPromiseLike(item.value)) {
            $$promises[key] = item.value;
            return $$promises[key];
          }
          var keysJson = $$storage().getItem(this.$$prefix + '.keys');
          var keys = keysJson ? utils.fromJson(keysJson) : [];
          var itemJson = $$storage().getItem(this.$$prefix + '.data.' + key);

          // Remove existing
          if (itemJson) {
            this.remove(key);
          }
          // Add to expires heap
          $$expiresHeap.push({
            key: key,
            expires: item.expires
          });
          // Add to lru heap
          $$lruHeap.push({
            key: key,
            accessed: item.accessed
          });
          // Set item
          $$storage().setItem(this.$$prefix + '.data.' + key, JSON.stringify(item));
          var exists = false;
          for (var i = 0; i < keys.length; i++) {
            if (keys[i] === key) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            keys.push(key);
          }
          $$storage().setItem(this.$$prefix + '.keys', JSON.stringify(keys));
        } else {
          // Remove existing
          if ($$data[key]) {
            this.remove(key);
          }
          // Add to expires heap
          $$expiresHeap.push(item);
          // Add to lru heap
          $$lruHeap.push(item);
          // Set item
          $$data[key] = item;
          delete $$promises[key];
        }

        // Handle exceeded capacity
        if ($$lruHeap.size() > this.$$capacity) {
          this.remove($$lruHeap.peek().key);
        }

        return value;
      },
      remove: function remove(key) {
        key += '';
        delete $$promises[key];
        if ($$storage) {
          var itemJson = $$storage().getItem(this.$$prefix + '.data.' + key);

          if (itemJson) {
            var item = utils.fromJson(itemJson);
            $$lruHeap.remove({
              key: key,
              accessed: item.accessed
            });
            $$expiresHeap.remove({
              key: key,
              expires: item.expires
            });
            $$storage().removeItem(this.$$prefix + '.data.' + key);
            var keysJson = $$storage().getItem(this.$$prefix + '.keys');
            var keys = keysJson ? utils.fromJson(keysJson) : [];
            var index = keys.indexOf(key);

            if (index >= 0) {
              keys.splice(index, 1);
            }
            $$storage().setItem(this.$$prefix + '.keys', JSON.stringify(keys));
            return item.value;
          }
        } else if (utils.isObject($$data)) {
          var value = $$data[key] ? $$data[key].value : undefined;
          $$lruHeap.remove($$data[key]);
          $$expiresHeap.remove($$data[key]);
          $$data[key] = null;
          delete $$data[key];
          return value;
        }
      },
      removeAll: function removeAll() {
        if ($$storage) {
          $$lruHeap.removeAll();
          $$expiresHeap.removeAll();
          var keysJson = $$storage().getItem(this.$$prefix + '.keys');

          if (keysJson) {
            var keys = utils.fromJson(keysJson);

            for (var i = 0; i < keys.length; i++) {
              this.remove(keys[i]);
            }
          }
          $$storage().setItem(this.$$prefix + '.keys', JSON.stringify([]));
        } else if (utils.isObject($$data)) {
          $$lruHeap.removeAll();
          $$expiresHeap.removeAll();
          for (var key in $$data) {
            $$data[key] = null;
          }
          $$data = {};
        } else {
          $$lruHeap.removeAll();
          $$expiresHeap.removeAll();
          $$data = {};
        }
        $$promises = {};
      },
      removeExpired: function removeExpired() {
        var now = new Date().getTime();
        var expired = {};
        var key = void 0;
        var expiredItem = void 0;

        while ((expiredItem = $$expiresHeap.peek()) && expiredItem.expires <= now) {
          expired[expiredItem.key] = expiredItem.value ? expiredItem.value : null;
          $$expiresHeap.pop();
        }

        if ($$storage) {
          for (key in expired) {
            var itemJson = $$storage().getItem(this.$$prefix + '.data.' + key);
            if (itemJson) {
              expired[key] = utils.fromJson(itemJson).value;
              this.remove(key);
            }
          }
        } else {
          for (key in expired) {
            this.remove(key);
          }
        }

        if (this.$$onExpire) {
          for (key in expired) {
            this.$$onExpire(key, expired[key]);
          }
        }

        return expired;
      },
      setCacheFlushInterval: function setCacheFlushInterval(cacheFlushInterval) {
        var _this = this;
        if (cacheFlushInterval === null) {
          delete _this.$$cacheFlushInterval;
        } else if (!utils.isNumber(cacheFlushInterval)) {
          throw new Error('cacheFlushInterval must be a number!');
        } else if (cacheFlushInterval < 0) {
          throw new Error('cacheFlushInterval must be greater than zero!');
        } else if (cacheFlushInterval !== _this.$$cacheFlushInterval) {
          _this.$$cacheFlushInterval = cacheFlushInterval;

          clearInterval(_this.$$cacheFlushIntervalId); // eslint-disable-line

          _this.$$cacheFlushIntervalId = setInterval(function () {
            _this.removeAll();
          }, _this.$$cacheFlushInterval);
        }
      },
      setCapacity: function setCapacity(capacity) {
        if (capacity === null) {
          delete this.$$capacity;
        } else if (!utils.isNumber(capacity)) {
          throw new Error('capacity must be a number!');
        } else if (capacity < 0) {
          throw new Error('capacity must be greater than zero!');
        } else {
          this.$$capacity = capacity;
        }
        var removed = {};
        while ($$lruHeap.size() > this.$$capacity) {
          removed[$$lruHeap.peek().key] = this.remove($$lruHeap.peek().key);
        }
        return removed;
      },
      setDeleteOnExpire: function setDeleteOnExpire(deleteOnExpire, setRecycleFreq) {
        if (deleteOnExpire === null) {
          delete this.$$deleteOnExpire;
        } else if (!utils.isString(deleteOnExpire)) {
          throw new Error('deleteOnExpire must be a string!');
        } else if (deleteOnExpire !== 'none' && deleteOnExpire !== 'passive' && deleteOnExpire !== 'aggressive') {
          throw new Error('deleteOnExpire must be "none", "passive" or "aggressive"!');
        } else {
          this.$$deleteOnExpire = deleteOnExpire;
        }
        if (setRecycleFreq !== false) {
          this.setRecycleFreq(this.$$recycleFreq);
        }
      },
      setMaxAge: function setMaxAge(maxAge) {
        if (maxAge === null) {
          this.$$maxAge = Number.MAX_VALUE;
        } else if (!utils.isNumber(maxAge)) {
          throw new Error('maxAge must be a number!');
        } else if (maxAge < 0) {
          throw new Error('maxAge must be greater than zero!');
        } else {
          this.$$maxAge = maxAge;
        }
        var i = void 0,
            keys = void 0,
            key = void 0;

        $$expiresHeap.removeAll();

        if ($$storage) {
          var keysJson = $$storage().getItem(this.$$prefix + '.keys');

          keys = keysJson ? utils.fromJson(keysJson) : [];

          for (i = 0; i < keys.length; i++) {
            key = keys[i];
            var itemJson = $$storage().getItem(this.$$prefix + '.data.' + key);

            if (itemJson) {
              var item = utils.fromJson(itemJson);
              if (this.$$maxAge === Number.MAX_VALUE) {
                item.expires = Number.MAX_VALUE;
              } else {
                item.expires = item.created + (item.maxAge || this.$$maxAge);
              }
              $$expiresHeap.push({
                key: key,
                expires: item.expires
              });
            }
          }
        } else {
          keys = _keys($$data);

          for (i = 0; i < keys.length; i++) {
            key = keys[i];
            if (this.$$maxAge === Number.MAX_VALUE) {
              $$data[key].expires = Number.MAX_VALUE;
            } else {
              $$data[key].expires = $$data[key].created + ($$data[key].maxAge || this.$$maxAge);
            }
            $$expiresHeap.push($$data[key]);
          }
        }
        if (this.$$deleteOnExpire === 'aggressive') {
          return this.removeExpired();
        } else {
          return {};
        }
      },
      setOnExpire: function setOnExpire(onExpire) {
        if (onExpire === null) {
          delete this.$$onExpire;
        } else if (!utils.isFunction(onExpire)) {
          throw new Error('onExpire must be a function!');
        } else {
          this.$$onExpire = onExpire;
        }
      },
      setOptions: function setOptions(cacheOptions, strict) {
        cacheOptions = cacheOptions || {};
        strict = !!strict;
        if (!utils.isObject(cacheOptions)) {
          throw new Error('cacheOptions must be an object!');
        }

        if ('storagePrefix' in cacheOptions) {
          this.$$storagePrefix = cacheOptions.storagePrefix;
        } else if (strict) {
          this.$$storagePrefix = defaults.storagePrefix;
        }

        this.$$prefix = this.$$storagePrefix + this.$$id;

        if ('disabled' in cacheOptions) {
          this.$$disabled = !!cacheOptions.disabled;
        } else if (strict) {
          this.$$disabled = defaults.disabled;
        }

        if ('deleteOnExpire' in cacheOptions) {
          this.setDeleteOnExpire(cacheOptions.deleteOnExpire, false);
        } else if (strict) {
          this.setDeleteOnExpire(defaults.deleteOnExpire, false);
        }

        if ('recycleFreq' in cacheOptions) {
          this.setRecycleFreq(cacheOptions.recycleFreq);
        } else if (strict) {
          this.setRecycleFreq(defaults.recycleFreq);
        }

        if ('maxAge' in cacheOptions) {
          this.setMaxAge(cacheOptions.maxAge);
        } else if (strict) {
          this.setMaxAge(defaults.maxAge);
        }

        if ('storeOnResolve' in cacheOptions) {
          this.$$storeOnResolve = !!cacheOptions.storeOnResolve;
        } else if (strict) {
          this.$$storeOnResolve = defaults.storeOnResolve;
        }

        if ('storeOnReject' in cacheOptions) {
          this.$$storeOnReject = !!cacheOptions.storeOnReject;
        } else if (strict) {
          this.$$storeOnReject = defaults.storeOnReject;
        }

        if ('capacity' in cacheOptions) {
          this.setCapacity(cacheOptions.capacity);
        } else if (strict) {
          this.setCapacity(defaults.capacity);
        }

        if ('cacheFlushInterval' in cacheOptions) {
          this.setCacheFlushInterval(cacheOptions.cacheFlushInterval);
        } else if (strict) {
          this.setCacheFlushInterval(defaults.cacheFlushInterval);
        }

        if ('onExpire' in cacheOptions) {
          this.setOnExpire(cacheOptions.onExpire);
        } else if (strict) {
          this.setOnExpire(defaults.onExpire);
        }

        if ('storageMode' in cacheOptions || 'storageImpl' in cacheOptions) {
          this.setStorageMode(cacheOptions.storageMode || defaults.storageMode, cacheOptions.storageImpl || defaults.storageImpl);
        } else if (strict) {
          this.setStorageMode(defaults.storageMode, defaults.storageImpl);
        }
      },
      setRecycleFreq: function setRecycleFreq(recycleFreq) {
        if (recycleFreq === null) {
          delete this.$$recycleFreq;
        } else if (!utils.isNumber(recycleFreq)) {
          throw new Error('recycleFreq must be a number!');
        } else if (recycleFreq < 0) {
          throw new Error('recycleFreq must be greater than zero!');
        } else {
          this.$$recycleFreq = recycleFreq;
        }
        clearInterval(this.$$recycleFreqId);
        if (this.$$deleteOnExpire === 'aggressive') {
          (function (self) {
            self.$$recycleFreqId = setInterval(function () {
              self.removeExpired();
            }, self.$$recycleFreq);
          })(this);
        } else {
          delete this.$$recycleFreqId;
        }
      },
      setStorageMode: function setStorageMode(storageMode, storageImpl) {
        if (!utils.isString(storageMode)) {
          throw new Error('storageMode must be a string!');
        } else if (storageMode !== 'memory' && storageMode !== 'localStorage' && storageMode !== 'sessionStorage') {
          throw new Error('storageMode must be "memory", "localStorage" or "sessionStorage"!');
        }

        var prevStorage = $$storage;
        var prevData = $$data;
        var shouldReInsert = false;
        var items = {};

        function load(prevStorage, prevData) {
          var keys = this.keys();
          var length = keys.length;
          if (length) {
            var _key = void 0;
            var prevDataIsObject = utils.isObject(prevData);
            for (var i = 0; i < length; i++) {
              _key = keys[i];
              if (prevStorage) {
                var itemJson = prevStorage().getItem(this.$$prefix + '.data.' + _key);
                if (itemJson) {
                  items[_key] = utils.fromJson(itemJson);
                }
              } else if (prevDataIsObject) {
                items[_key] = prevData[_key];
              }
              this.remove(_key);
            }
            shouldReInsert = true;
          }
        }

        if (!this.$$initializing) {
          load.call(this, prevStorage, prevData);
        }

        this.$$storageMode = storageMode;

        if (storageImpl) {
          if (!utils.isObject(storageImpl)) {
            throw new Error('storageImpl must be an object!');
          } else if (!('setItem' in storageImpl) || typeof storageImpl.setItem !== 'function') {
            throw new Error('storageImpl must implement "setItem(key, value)"!');
          } else if (!('getItem' in storageImpl) || typeof storageImpl.getItem !== 'function') {
            throw new Error('storageImpl must implement "getItem(key)"!');
          } else if (!('removeItem' in storageImpl) || typeof storageImpl.removeItem !== 'function') {
            throw new Error('storageImpl must implement "removeItem(key)"!');
          }
          $$storage = function $$storage() {
            return storageImpl;
          };
        } else if (this.$$storageMode === 'localStorage') {
          try {
            localStorage.setItem('cachefactory', 'cachefactory');
            localStorage.removeItem('cachefactory');
            $$storage = function $$storage() {
              return localStorage;
            };
          } catch (e) {
            $$storage = null;
            this.$$storageMode = 'memory';
          }
        } else if (this.$$storageMode === 'sessionStorage') {
          try {
            sessionStorage.setItem('cachefactory', 'cachefactory');
            sessionStorage.removeItem('cachefactory');
            $$storage = function $$storage() {
              return sessionStorage;
            };
          } catch (e) {
            $$storage = null;
            this.$$storageMode = 'memory';
          }
        } else {
          $$storage = null;
          this.$$storageMode = 'memory';
        }

        if (this.$$initializing) {
          load.call(this, $$storage, $$data);
        }

        if (shouldReInsert) {
          var item = void 0;
          for (var key in items) {
            item = items[key];
            this.put(key, item.value, {
              created: item.created,
              accessed: item.accessed,
              expires: item.expires
            });
          }
        }
      },
      touch: function touch(key, options) {
        var _this4 = this;

        if (key) {
          var val = this.get(key, {
            onExpire: function onExpire(k, v) {
              return _this4.put(k, v);
            }
          });
          if (val) {
            this.put(key, val, options);
          }
        } else {
          var keys = this.keys();
          for (var i = 0; i < keys.length; i++) {
            this.touch(keys[i], options);
          }
        }
      },
      values: function values() {
        var keys = this.keys();
        var items = [];
        for (var i = 0; i < keys.length; i++) {
          items.push(this.get(keys[i]));
        }
        return items;
      }
    };

    cache.$$initializing = true;
    cache.setOptions(options, true);
    cache.$$initializing = false;

    return cache;
  }

  function CacheFactory(cacheId, options) {
    return createCache(cacheId, options);
  }

  CacheFactory.createCache = createCache;
  CacheFactory.defaults = defaults;

  CacheFactory.info = function () {
    var keys = _keys(caches);
    var info = {
      size: keys.length,
      caches: {}
    };
    for (var opt in defaults) {
      if (defaults.hasOwnProperty(opt)) {
        info[opt] = defaults[opt];
      }
    }
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      info.caches[key] = caches[key].info();
    }
    return info;
  };

  CacheFactory.get = function (cacheId) {
    return caches[cacheId];
  };
  CacheFactory.keySet = function () {
    return _keySet(caches);
  };
  CacheFactory.keys = function () {
    return _keys(caches);
  };
  CacheFactory.destroy = function (cacheId) {
    if (caches[cacheId]) {
      caches[cacheId].destroy();
      delete caches[cacheId];
    }
  };
  CacheFactory.destroyAll = function () {
    for (var cacheId in caches) {
      caches[cacheId].destroy();
    }
    caches = {};
  };
  CacheFactory.clearAll = function () {
    for (var cacheId in caches) {
      caches[cacheId].removeAll();
    }
  };
  CacheFactory.removeExpiredFromAll = function () {
    var expired = {};
    for (var cacheId in caches) {
      expired[cacheId] = caches[cacheId].removeExpired();
    }
    return expired;
  };
  CacheFactory.enableAll = function () {
    for (var cacheId in caches) {
      caches[cacheId].$$disabled = false;
    }
  };
  CacheFactory.disableAll = function () {
    for (var cacheId in caches) {
      caches[cacheId].$$disabled = true;
    }
  };
  CacheFactory.touchAll = function () {
    for (var cacheId in caches) {
      caches[cacheId].touch();
    }
  };

  CacheFactory.utils = utils;
  CacheFactory.BinaryHeap = BinaryHeap;

  CacheFactory.utils.equals = angular.equals;
  CacheFactory.utils.isObject = angular.isObject;
  CacheFactory.utils.fromJson = angular.fromJson;

  function BinaryHeapProvider() {
    this.$get = function () {
      return CacheFactory.BinaryHeap;
    };
  }

  function CacheFactoryProvider() {
    this.defaults = CacheFactory.defaults;
    this.defaults.storagePrefix = 'angular-cache.caches.';

    this.$get = ['$q', function ($q) {
      CacheFactory.utils.Promise = $q;
      return CacheFactory;
    }];
  }

  angular.module('angular-cache', []).provider('BinaryHeap', BinaryHeapProvider).provider('CacheFactory', CacheFactoryProvider);

  var index = 'angular-cache';

  return index;

}));/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles
 * @version v1.0.6
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("angular")):"function"==typeof define&&define.amd?define(["exports","angular"],e):e(t["@uirouter/angularjs"]=t["@uirouter/angularjs"]||{},t.angular)}(this,function(t,e){"use strict";function r(t){function e(r){return r.length>=n?t.apply(null,r):function(){return e(r.concat([].slice.apply(arguments)))}}var r=[].slice.apply(arguments,[1]),n=t.length;return e(r)}function n(){var t=arguments,e=t.length-1;return function(){for(var r=e,n=t[e].apply(this,arguments);r--;)n=t[r].call(this,n);return n}}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.apply(null,[].slice.call(arguments).reverse())}function o(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)&&e.apply(null,r)}}function a(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)||e.apply(null,r)}}function u(t,e){return function(r){return r[t].apply(r,e)}}function s(t){return function(e){for(var r=0;r<t.length;r++)if(t[r][0](e))return t[r][1](e)}}function c(t){if(re(t)&&t.length){var e=t.slice(0,-1),r=t.slice(-1);return!(e.filter(Dt(te)).length||r.filter(Dt(Zt)).length)}return Zt(t)}function f(t){return t}function l(){}function h(t,e,r,n,i){void 0===i&&(i=!1);var o=function(e){return t()[e].bind(r())},a=function(t){return function(){return e[t]=o(t),e[t].apply(null,arguments)}};return n=n||Object.keys(t()),n.reduce(function(t,e){return t[e]=i?a(e):o(e),t},e)}function p(t,e){return-1!==t.indexOf(e)}function d(t,e){var r=t.indexOf(e);return r>=0&&t.splice(r,1),t}function v(t,e){return t.push(e),e}function m(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=e.concat({}).reverse(),i=ve.apply(null,n);return ve({},i,g(t||{},Object.keys(i)))}function y(t,e){var r=[];for(var n in t.path){if(t.path[n]!==e.path[n])break;r.push(t.path[n])}return r}function g(t,e){var r={};for(var n in t)-1!==e.indexOf(n)&&(r[n]=t[n]);return r}function w(t,e){return Object.keys(t).filter(Dt(ge(e))).reduce(function(e,r){return e[r]=t[r],e},{})}function _(t,e){return b(t,At(e))}function $(t,e){var r=re(t),n=r?[]:{},i=r?function(t){return n.push(t)}:function(t,e){return n[e]=t};return de(t,function(t,r){e(t,r)&&i(t,r)}),n}function S(t,e){var r;return de(t,function(t,n){r||e(t,n)&&(r=t)}),r}function b(t,e){var r=re(t)?[]:{};return de(t,function(t,n){return r[n]=e(t,n)}),r}function R(t,e){return t.push(e),t}function E(t,e){return void 0===e&&(e="assert failure"),function(r){var n=t(r);if(!n)throw new Error(Zt(e)?e(r):e);return n}}function T(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return[];var r,n=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991),i=[];for(r=0;r<n;r++)switch(t.length){case 1:i.push([t[0][r]]);break;case 2:i.push([t[0][r],t[1][r]]);break;case 3:i.push([t[0][r],t[1][r],t[2][r]]);break;case 4:i.push([t[0][r],t[1][r],t[2][r],t[3][r]]);break;default:i.push(t.map(function(t){return t[r]}))}return i}function C(t,e){var r,n;if(re(e)&&(r=e[0],n=e[1]),!te(r))throw new Error("invalid parameters to applyPairs");return t[r]=n,t}function P(t){return t.length&&t[t.length-1]||void 0}function k(t,e){return e&&Object.keys(e).forEach(function(t){return delete e[t]}),e||(e={}),ve(e,t)}function O(t,e,r){if(re(t))return t.forEach(e,r);Object.keys(t).forEach(function(r){return e(t[r],r)})}function x(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n=Object.keys(r),i=0;i<n.length;i++)t[n[i]]=r[n[i]]}return t}function j(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r=typeof t;if(r!==typeof e||"object"!==r)return!1;var n=[t,e];if(Nt(re)(n))return I(t,e);if(Nt(ne)(n))return t.getTime()===e.getTime();if(Nt(ie)(n))return t.toString()===e.toString();if(Nt(Zt)(n))return!0;if([Zt,re,ne,ie].map(Ft).reduce(function(t,e){return t||!!e(n)},!1))return!1;var i,o={};for(i in t){if(!j(t[i],e[i]))return!1;o[i]=!0}for(i in e)if(!o[i])return!1;return!0}function I(t,e){return t.length===e.length&&T(t,e).reduce(function(t,e){return t&&j(e[0],e[1])},!0)}function V(t){if(!t)return"ui-view (defunct)";var e=t.creationContext?t.creationContext.name||"(root)":"(none)";return"[ui-view#"+t.id+" "+t.$type+":"+t.fqn+" ("+t.name+"@"+e+")]"}function A(e){return Xt(e)?t.Category[e]:t.Category[t.Category[e]]}function H(t,e){function r(t){for(var e=n,r=0;r<e.length;r++){var i=new Gt(e[r]);if(i&&i.matches(t.name)||!i&&e[r]===t.name)return!0}return!1}var n=te(e)?[e]:e;return!!(Zt(n)?n:r)(t)}function q(t,e,r){function n(t,n,i){void 0===i&&(i={});var a=new Qe(e,r,n,t,i);return o.push(a),function(){a._deregistered=!0,we(o)(a)}}var i=t._registeredHooks=t._registeredHooks||{},o=i[r.name]=[];return t[r.name]=n,n}function D(t){return void 0===t&&(t=!1),function(e,r){var n=t?-1:1,i=(e.node.state.path.length-r.node.state.path.length)*n;return 0!==i?i:r.hook.priority-e.hook.priority}}function N(t,e){function r(t){return re(t)?t:Qt(t)?[t]:[]}function n(t){switch(t.length){case 0:return;case 1:return"auto"===e?t[0]:t;default:return t}}function i(t,e){return function(i){if(re(i)&&0===i.length)return i;var o=r(i),a=b(o,t);return!0===e?0===$(a,function(t){return!t}).length:n(a)}}function o(t){return function(e,n){var i=r(e),o=r(n);if(i.length!==o.length)return!1;for(var a=0;a<i.length;a++)if(!t(i[a],o[a]))return!1;return!0}}var a=this;["encode","decode","equals","$normalize"].forEach(function(e){var r=t[e].bind(t),n="equals"===e?o:i;a[e]=n(r)}),ve(this,{dynamic:t.dynamic,name:t.name,pattern:t.pattern,inherit:t.inherit,is:i(t.is.bind(t),!0),$arrayMode:e})}function F(t){function e(){return t.value}return t=Xe(t)&&{value:t}||t,e.__cacheable=!0,ve(t,{$$fn:c(t.value)?t.value:e})}function U(e,r,n,i,o){if(e.type&&r&&"string"!==r.name)throw new Error("Param '"+i+"' has two type configurations.");if(e.type&&r&&"string"===r.name&&o.type(e.type))return o.type(e.type);if(r)return r;if(!e.type){var a=n===t.DefType.CONFIG?"any":n===t.DefType.PATH?"path":n===t.DefType.SEARCH?"query":"string";return o.type(a)}return e.type instanceof Ye?e.type:o.type(e.type)}function L(t,e,r){var n=t.squash;if(!e||!1===n)return!1;if(!Qt(n)||null==n)return r;if(!0===n||te(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}function M(t,e,r,n){var i,o,a=[{from:"",to:r||e?void 0:""},{from:null,to:r||e?void 0:""}];return i=re(t.replace)?t.replace:[],te(n)&&i.push({from:n,to:void 0}),o=b(i,At("from")),$(a,function(t){return-1===o.indexOf(t.from)}).concat(i)}function G(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function B(t,e){for(;e.length<t;)e+=" ";return e}function W(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function z(t){var e=J(t),r=e.match(/^(function [^ ]+\([^)]*\))/),n=r?r[1]:e,i=t.name||"";return i&&n.match(/function \(/)?"function "+i+n.substr(9):n}function J(t){var e=re(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}function Q(t){function e(t){if(ee(t)){if(-1!==r.indexOf(t))return"[circular ref]";r.push(t)}return vr(t)}var r=[];return JSON.stringify(t,function(t,r){return e(r)}).replace(/\\"/g,'"')}function K(t){var e=new RegExp("("+t+")","g");return function(t){return t.split(e).filter(f)}}function Y(t,e){return te(P(t))&&te(e)?t.slice(0,-1).concat(P(t)+e):R(t,e)}function Z(t){return t.name}function X(t){return t.self.$$state=function(){return t},t.self}function tt(t){return t.parent&&t.parent.data&&(t.data=t.self.data=ye(t.parent.data,t.data)),t.data}function et(t){return t.parent?t.parent.path.concat(t):[t]}function rt(t){var e=t.parent?ve({},t.parent.includes):{};return e[t.name]=!0,e}function nt(t){var e=function(t){var e=se.$injector;return t.$inject||e&&e.annotate(t,e.strictDi)||"deferred"},r=function(t){return!(!t.token||!t.resolveFn)},n=function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},o=function(t){return!!(t&&t.val&&(te(t.val)||re(t.val)||Zt(t.val)))},a=function(t){return t.provide||t.token},u=s([[At("resolveFn"),function(t){return new ir(a(t),t.resolveFn,t.deps,t.policy)}],[At("useFactory"),function(t){return new ir(a(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[At("useClass"),function(t){return new ir(a(t),function(){return new t.useClass},[],t.policy)}],[At("useValue"),function(t){return new ir(a(t),function(){return t.useValue},[],t.policy,t.useValue)}],[At("useExisting"),function(t){return new ir(a(t),f,[t.useExisting],t.policy)}]]),c=s([[i(At("val"),te),function(t){return new ir(t.token,f,[t.val],t.policy)}],[i(At("val"),re),function(t){return new ir(t.token,P(t.val),t.val.slice(0,-1),t.policy)}],[i(At("val"),Zt),function(t){return new ir(t.token,t.val,e(t.val),t.policy)}]]),l=s([[Ut(ir),function(t){return t}],[r,u],[n,u],[o,c],[Mt(!0),function(t){throw new Error("Invalid resolve value: "+Q(t))}]]),h=t.resolve;return(re(h)?h:function(t,e){return Object.keys(t||{}).map(function(r){return{token:r,val:t[r],deps:void 0,policy:e[r]}})}(h,t.resolvePolicy||{})).map(l)}function it(t,e){var r=["",""],n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;switch(e.squash){case!1:r=["(",")"+(e.isOptional?"?":"")];break;case!0:n=n.replace(/\/$/,""),r=["(?:/(",")|/)?"];break;default:r=["("+e.squash+"|",")?"]}return n+r[0]+e.type.pattern.source+r[1]}function ot(t,e,r,n){return"/"===n?t:e?n.slice(0,-1)+t:r?n.slice(1)+t:t}function at(t){if(!(Zt(t)||te(t)||Ut(We)(t)||We.isDef(t)))throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");return Zt(t)?t:Mt(t)}function ut(t){t.addResolvable({token:Qr,deps:[],resolveFn:function(){return t.router},data:t.router},""),t.addResolvable({token:pr,deps:[],resolveFn:function(){return t},data:t},""),t.addResolvable({token:"$transition$",deps:[],resolveFn:function(){return t},data:t},""),t.addResolvable({token:"$stateParams",deps:[],resolveFn:function(){return t.params()},data:t.params()},""),t.entering().forEach(function(e){t.addResolvable({token:"$state$",deps:[],resolveFn:function(){return e},data:e},e)})}function st(t){return function(e,r){return(0,r.$$state()[t])(e,r)}}function ct(t,e){function r(e){return e&&Array.isArray(e.states)&&e.states.forEach(function(e){return t.router.stateRegistry.register(e)}),e}var n=e.$$state().lazyLoad,i=n._promise;if(!i){var o=function(t){return delete e.lazyLoad,delete e.$$state().lazyLoad,delete n._promise,t},a=function(t){return delete n._promise,se.$q.reject(t)};i=n._promise=se.$q.when(n(t,e)).then(r).then(o,a)}return i}function ft(t){var e=t._ignoredReason();if(e){Be.traceTransitionIgnored(t);var r=t.router.globals.transition;return"SameAsCurrent"===e&&r&&r.abort(),Ne.ignored().toPromise()}}function lt(t){if(!t.valid())throw new Error(t.error())}function ht(t){var e=function(t){return t||""},r=jn(t).map(e),n=r[0],i=r[1],o=In(n).map(e);return{path:o[0],search:o[1],hash:i,url:t}}function pt(t,e,r,n){return function(i){function o(t){t.dispose(a),t.dispose(u)}var a=i.locationService=new r(i),u=i.locationConfig=new n(i,e);return{name:t,service:a,configuration:u,dispose:o}}}function dt(t){return se.$injector=On,se.$q=Tn,{name:"vanilla.services",$q:Tn,$injector:On,dispose:function(){return null}}}function vt(){var t=null;return function(e,r){return t=t||se.$injector.get("$templateFactory"),[new ei(e,r,t)]}}function mt(t){if(!t.parent)return{};var e=["templateProvider","templateUrl","template","notify","async"],r=["controller","controllerProvider","controllerAs","resolveAs"],n=["component","bindings","componentProvider"],i=e.concat(r),o=n.concat(i);if(Qt(t.views)&&Xn(o,t))throw new Error("State '"+t.name+"' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  "+o.filter(function(e){return Qt(t[e])}).join(", "));var a={},u=t.views||{$default:g(t,o)};return de(u,function(e,r){if(r=r||"$default",te(e)&&(e={component:e}),e=ve({},e),Xn(n,e)&&Xn(i,e))throw new Error("Cannot combine: "+n.join("|")+" with: "+i.join("|")+" in stateview: '"+r+"@"+t.name+"'");e.resolveAs=e.resolveAs||"$resolve",e.$type="ng1",e.$context=t,e.$name=r;var o=Nr.normalizeUIViewTarget(e.$context,e.$name);e.$uiViewName=o.uiViewName,e.$uiViewContextAnchor=o.uiViewContextAnchor,a[r]=e}),a}function yt(t){var e=se.$injector.get(t+"Directive");if(!e||!e.length)throw new Error("Unable to find component named '"+t+"'");return e.map(ni).reduce(Ce,[])}function gt(t){function e(t,e,n,i,o,a){return r._runtimeServices(i,t,n,e),delete di.router,delete di.$get,di}di=this.router=new Qr,di.stateProvider=new oi(di.stateRegistry,di.stateService),di.stateRegistry.decorator("views",mt),di.stateRegistry.decorator("onExit",ai("onExit")),di.stateRegistry.decorator("onRetain",ai("onRetain")),di.stateRegistry.decorator("onEnter",ai("onEnter")),di.viewService._pluginapi._viewConfigFactory("ng1",vt());var r=di.locationService=di.locationConfig=new ui(t);return ui.monkeyPatchPathParameterType(di),di.router=di,di.$get=e,e.$inject=["$location","$browser","$sniffer","$rootScope","$http","$templateCache"],di}function wt(t,e,r){se.$injector=t,se.$q=e,r.stateRegistry.get().map(function(t){return t.$$state().resolvables}).reduce(Ce,[]).filter(function(t){return"deferred"===t.deps}).forEach(function(e){return e.deps=t.annotate(e.resolveFn,t.strictDi)})}function _t(t){t.$watch(function(){Be.approximateDigests++})}function $t(t){var e,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t="("+r[1]+")"),!(e=t.replace(/\n/g," ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/))||4!==e.length)throw new Error("Invalid state ref '"+t+"'");return{state:e[1]||null,paramExpr:e[3]||null}}function St(t){var e=t.parent().inheritedData("$uiView"),r=qt("$cfg.path")(e);return r?P(r).state.name:void 0}function bt(t,e,r){var n=r.uiState||t.current.name,i=ve(Tt(e,t),r.uiStateOpts||{}),o=t.href(n,r.uiStateParams,i);return{uiState:n,uiStateParams:r.uiStateParams,uiStateOpts:i,href:o}}function Rt(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),r="FORM"===t[0].nodeName;return{attr:r?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!r}}function Et(t,e,r,n,i){return function(o){var a=o.which||o.button,u=i();if(!(a>1||o.ctrlKey||o.metaKey||o.shiftKey||t.attr("target"))){var s=r(function(){e.go(u.uiState,u.uiStateParams,u.uiStateOpts)});o.preventDefault();var c=n.isAnchor&&!u.href?1:0;o.preventDefault=function(){c--<=0&&r.cancel(s)}}}}function Tt(t,e){return{relative:St(t)||e.$current,inherit:!0,source:"sref"}}function Ct(t,e,r,n){var i;n&&(i=n.events),re(i)||(i=["click"]);for(var o=t.on?"on":"bind",a=0,u=i;a<u.length;a++){var s=u[a];t[o](s,r)}e.$on("$destroy",function(){for(var e=t.off?"off":"unbind",n=0,o=i;n<o.length;n++){var a=o[n];t[e](a,r)}})}function Pt(t){var e=function(e,r,n){return t.is(e,r,n)};return e.$stateful=!0,e}function kt(t){var e=function(e,r,n){return t.includes(e,r,n)};return e.$stateful=!0,e}function Ot(t,r,n,i,o,a){var u=qt("viewDecl.controllerAs"),s=qt("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(i){var a=i.html();return i.empty(),function(i,c){var f=c.data("$uiView");if(!f)return c.html(a),void t(c.contents())(i);var l=f.$cfg||{viewDecl:{},getTemplate:e.noop},h=l.path&&new fr(l.path);c.html(l.getTemplate(c,h)||a),Be.traceUIViewFill(f.$uiView,c.html());var p=t(c.contents()),d=l.controller,v=u(l),m=s(l),y=h&&wi(h);if(i[m]=y,d){var g=r(d,ve({},y,{$scope:i,$element:c}));v&&(i[v]=g,i[v][m]=y),c.data("$ngControllerController",g),c.children().data("$ngControllerController",g),xt(o,n,g,i,l)}if(te(l.viewDecl.component))var w=l.viewDecl.component,_=W(w),$=new RegExp("^(x-|data-)?"+_+"$","i"),S=function(){var t=[].slice.call(c[0].children).filter(function(t){return t&&t.tagName&&$.exec(t.tagName)});return t&&Vt.element(t).data("$"+w+"Controller")},b=i.$watch(S,function(t){t&&(xt(o,n,t,i,l),b())});p(i)}}}}function xt(t,e,r,n,i){!Zt(r.$onInit)||i.viewDecl.component&&bi||r.$onInit();var o=P(i.path).state.self,a={bind:r};if(Zt(r.uiOnParamsChanged)){var u=new fr(i.path),s=u.getResolvable("$transition$").data,c=function(t){if(t!==s&&-1===t.exiting().indexOf(o)){var e=t.params("to"),n=t.params("from"),i=t.treeChanges().to.map(function(t){return t.paramSchema}).reduce(Ce,[]),a=t.treeChanges().from.map(function(t){return t.paramSchema}).reduce(Ce,[]),u=i.filter(function(t){var r=a.indexOf(t);return-1===r||!a[r].type.equals(e[t.id],n[t.id])});if(u.length){var c=u.map(function(t){return t.id}),f=$(e,function(t,e){return-1!==c.indexOf(e)});r.uiOnParamsChanged(f,t)}}};n.$on("$destroy",e.onSuccess({},c,a))}if(Zt(r.uiCanExit)){var f=Ri++,l=function(t){return!!t&&(t._uiCanExitIds&&!0===t._uiCanExitIds[f]||l(t.redirectedFrom()))},h=function(e){var n,i=e._uiCanExitIds=e._uiCanExitIds||{};return l(e)||(n=t.when(r.uiCanExit(e)),n.then(function(t){return i[f]=!1!==t})),n},p={exiting:o.name};n.$on("$destroy",e.onBefore(p,h,a))}}function jt(){var t=!1;this.useAnchorScroll=function(){t=!0},this.$get=["$anchorScroll","$timeout",function(e,r){return t?e:function(t){return r(function(){t[0].scrollIntoView()},0,!1)}}]}var It=angular,Vt=e&&e.module?e:It,At=function(t){return function(e){return e&&e[t]}},Ht=r(function(t,e,r){return r&&r[t]===e}),qt=function(t){return i.apply(null,t.split(".").map(At))},Dt=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return!t.apply(null,e)}},Nt=function(t){return function(e){return e.reduce(function(e,r){return e&&!!t(r)},!0)}},Ft=function(t){return function(e){return e.reduce(function(e,r){return e||!!t(r)},!1)}},Ut=function(t){return function(e){return null!=e&&e.constructor===t||e instanceof t}},Lt=function(t){return function(e){return t===e}},Mt=function(t){return function(){return t}},Gt=function(){function t(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}return t.prototype.matches=function(t){return this.regexp.test("."+t)},t.is=function(t){return!!/[!,*]+/.exec(t)},t.fromString=function(e){return t.is(e)?new t(e):null},t}(),Bt=function(){function t(e){return t.create(e||{})}return t.create=function(e){e=t.isStateClass(e)?new e:e;var r=ye(ye(e,t.prototype));return e.$$state=function(){return r},r.self=e,r.__stateObjectCache={nameGlob:Gt.fromString(r.name)},r},t.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},t.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},t.prototype.root=function(){return this.parent&&this.parent.root()||this},t.prototype.parameters=function(t){return t=m(t,{inherit:!0,matchingKeys:null}),(t.inherit&&this.parent&&this.parent.parameters()||[]).concat(Re(this.params)).filter(function(e){return!t.matchingKeys||t.matchingKeys.hasOwnProperty(e.id)})},t.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||S(Re(this.params),Ht("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},t.prototype.toString=function(){return this.fqn()},t.isStateClass=function(t){return Zt(t)&&!0===t.__uiRouterState},t.isState=function(t){return ee(t.__stateObjectCache)},t}(),Wt=Object.prototype.toString,zt=function(t){return function(e){return typeof e===t}},Jt=zt("undefined"),Qt=Dt(Jt),Kt=function(t){return null===t},Yt=a(Kt,Jt),Zt=zt("function"),Xt=zt("number"),te=zt("string"),ee=function(t){return null!==t&&"object"==typeof t},re=Array.isArray,ne=function(t){return"[object Date]"===Wt.call(t)},ie=function(t){return"[object RegExp]"===Wt.call(t)},oe=Bt.isState,ae=o(ee,i(At("then"),Zt)),ue=function(t){return function(){throw new Error(t+"(): No coreservices implementation for UI-Router is loaded.")}},se={$q:void 0,$injector:void 0},ce="undefined"==typeof window?{}:window,fe=ce.angular||{},le=fe.fromJson||JSON.parse.bind(JSON),he=fe.toJson||JSON.stringify.bind(JSON),pe=fe.copy||k,de=fe.forEach||O,ve=Object.assign||x,me=fe.equals||j,ye=function(t,e){return ve(Object.create(t),e)},ge=r(p),we=r(d),_e=r(v),$e=function(t){return t.slice().forEach(function(e){"function"==typeof e&&e(),we(t,e)})},Se=function(t,e){return ve(t,e)},be=b,Re=function(t){return Object.keys(t).map(function(e){return t[e]})},Ee=function(t,e){return t&&e},Te=function(t,e){return t||e},Ce=function(t,e){return t.concat(e)},Pe=function(t,e){return re(e)?t.concat(e.reduce(Pe,[])):R(t,e)},ke=function(t,e){return ge(t,e)?t:R(t,e)},Oe=function(t){return t.reduce(Ce,[])},xe=function(t){return t.reduce(Pe,[])},je=E,Ie=E,Ve=function(t){return Object.keys(t).map(function(e){return[e,t[e]]})},Ae=function(t){return t.catch(function(t){return 0})&&t},He=function(t){return Ae(se.$q.reject(t))},qe=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e}return t.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&e.shift(),t},t.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},t.prototype.clear=function(){var t=this._items;return this._items=[],t},t.prototype.size=function(){return this._items.length},t.prototype.remove=function(t){var e=this._items.indexOf(t);return e>-1&&this._items.splice(e,1)[0]},t.prototype.peekTail=function(){return this._items[this._items.length-1]},t.prototype.peekHead=function(){if(this.size())return this._items[0]},t}();!function(t){t[t.SUPERSEDED=2]="SUPERSEDED",t[t.ABORTED=3]="ABORTED",t[t.INVALID=4]="INVALID",t[t.IGNORED=5]="IGNORED",t[t.ERROR=6]="ERROR"}(t.RejectType||(t.RejectType={}));var De=0,Ne=function(){function e(t,e,r){this.$id=De++,this.type=t,this.message=e,this.detail=r}return e.prototype.toString=function(){var t=function(t){return t&&t.toString!==Object.prototype.toString?t.toString():Q(t)}(this.detail),e=this;return"Transition Rejection($id: "+e.$id+" type: "+e.type+", message: "+e.message+", detail: "+t+")"},e.prototype.toPromise=function(){return ve(He(this),{_transitionRejection:this})},e.isRejectionPromise=function(t){return t&&"function"==typeof t.then&&Ut(e)(t._transitionRejection)},e.superseded=function(r,n){var i=new e(t.RejectType.SUPERSEDED,"The transition has been superseded by a different transition",r);return n&&n.redirected&&(i.redirected=!0),i},e.redirected=function(t){return e.superseded(t,{redirected:!0})},e.invalid=function(r){return new e(t.RejectType.INVALID,"This transition is invalid",r)},e.ignored=function(r){return new e(t.RejectType.IGNORED,"The transition was ignored",r)},e.aborted=function(r){return new e(t.RejectType.ABORTED,"The transition has been aborted",r)},e.errored=function(r){return new e(t.RejectType.ERROR,"The transition errored",r)},e.normalize=function(t){return Ut(e)(t)?t:e.errored(t)},e}(),Fe=function(t){var e=t.viewDecl,r=e.$context.name||"(root)";return"[View#"+t.$id+" from '"+r+"' state]: target ui-view: '"+e.$uiViewName+"@"+e.$uiViewContextAnchor+"'"};!function(t){t[t.RESOLVE=0]="RESOLVE",t[t.TRANSITION=1]="TRANSITION",t[t.HOOK=2]="HOOK",t[t.UIVIEW=3]="UIVIEW",t[t.VIEWCONFIG=4]="VIEWCONFIG"}(t.Category||(t.Category={}));var Ue=qt("$id"),Le=qt("router.$id"),Me=function(t){return"Transition #"+Ue(t)+"-"+Le(t)},Ge=function(){function e(){this._enabled={},this.approximateDigests=0}return e.prototype._set=function(e,r){var n=this;r.length||(r=Object.keys(t.Category).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(e){return t.Category[e]})),r.map(A).forEach(function(t){return n._enabled[t]=e})},e.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!0,t)},e.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!1,t)},e.prototype.enabled=function(t){return!!this._enabled[A(t)]},e.prototype.traceTransitionStart=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Me(e)+": Started  -> "+Q(e))},e.prototype.traceTransitionIgnored=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Me(e)+": Ignored  <> "+Q(e))},e.prototype.traceHookInvocation=function(e,r,n){if(this.enabled(t.Category.HOOK)){var i=qt("traceData.hookType")(n)||"internal",o=qt("traceData.context.state.name")(n)||qt("traceData.context")(n)||"unknown",a=z(e.registeredHook.callback);console.log(Me(r)+":   Hook -> "+i+" context: "+o+", "+G(200,a))}},e.prototype.traceHookResult=function(e,r,n){this.enabled(t.Category.HOOK)&&console.log(Me(r)+":   <- Hook returned: "+G(200,Q(e)))},e.prototype.traceResolvePath=function(e,r,n){this.enabled(t.Category.RESOLVE)&&console.log(Me(n)+":         Resolving "+e+" ("+r+")")},e.prototype.traceResolvableResolved=function(e,r){this.enabled(t.Category.RESOLVE)&&console.log(Me(r)+":               <- Resolved  "+e+" to: "+G(200,Q(e.data)))},e.prototype.traceError=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Me(r)+": <- Rejected "+Q(r)+", reason: "+e)},e.prototype.traceSuccess=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Me(r)+": <- Success  "+Q(r)+", final state: "+e.name)},e.prototype.traceUIViewEvent=function(e,r,n){void 0===n&&(n=""),this.enabled(t.Category.UIVIEW)&&console.log("ui-view: "+B(30,e)+" "+V(r)+n)},e.prototype.traceUIViewConfigUpdated=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Updating",e," with ViewConfig from context='"+r+"'")},e.prototype.traceUIViewFill=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Fill",e," with: "+G(200,r))},e.prototype.traceViewSync=function(e){if(this.enabled(t.Category.VIEWCONFIG)){var r=e.map(function(t){var e=t[0],r=t[1];return{"ui-view fqn":e.$type+":"+e.fqn,"state: view name":r&&r.viewDecl.$context.name+": "+r.viewDecl.$name+" ("+r.viewDecl.$type+")"}}).sort(function(t,e){return t["ui-view fqn"].localeCompare(e["ui-view fqn"])});console.table(r)}},e.prototype.traceViewServiceEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+Fe(r))},e.prototype.traceViewServiceUIViewEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+V(r))},e}(),Be=new Ge;!function(t){t[t.CREATE=0]="CREATE",t[t.BEFORE=1]="BEFORE",t[t.RUN=2]="RUN",t[t.SUCCESS=3]="SUCCESS",t[t.ERROR=4]="ERROR"}(t.TransitionHookPhase||(t.TransitionHookPhase={})),function(t){t[t.TRANSITION=0]="TRANSITION",t[t.STATE=1]="STATE"}(t.TransitionHookScope||(t.TransitionHookScope={}));var We=function(){function t(t,e,r,n){void 0===n&&(n={}),this._identifier=t,this._definition=e,this._options=n,this._params=r||{}}return t.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},t.prototype.identifier=function(){return this._identifier},t.prototype.params=function(){return this._params},t.prototype.$state=function(){return this._definition},t.prototype.state=function(){return this._definition&&this._definition.self},t.prototype.options=function(){return this._options},t.prototype.exists=function(){return!(!this._definition||!this._definition.self)},t.prototype.valid=function(){return!this.error()},t.prototype.error=function(){var t=this.options().relative;if(!this._definition&&t){var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"}return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'"},t.prototype.toString=function(){return"'"+this.name()+"'"+he(this.params())},t.isDef=function(t){return t&&t.state&&(te(t.state)||te(t.state.name))},t}(),ze={current:l,transition:null,traceData:{},bind:null},Je=function(){function e(e,r,n,i){var o=this;this.transition=e,this.stateContext=r,this.registeredHook=n,this.options=i,this.isSuperseded=function(){return o.type.hookPhase===t.TransitionHookPhase.RUN&&!o.options.transition.isActive()},this.options=m(i,ze),this.type=n.eventType}return e.prototype.logError=function(t){this.transition.router.stateService.defaultErrorHandler()(t)},e.prototype.invokeHook=function(){var t=this,e=this.registeredHook;if(!e._deregistered){var r=this.getNotCurrentRejection();if(r)return r;var n=this.options;Be.traceHookInvocation(this,this.transition,n);var i=function(t){return Ne.normalize(t).toPromise()},o=function(r){return e.eventType.getErrorHandler(t)(r)},a=function(r){return e.eventType.getResultHandler(t)(r)};try{var u=function(){return e.callback.call(n.bind,t.transition,t.stateContext)}();return!this.type.synchronous&&ae(u)?u.catch(i).then(a,o):a(u)}catch(t){return o(Ne.normalize(t))}}},e.prototype.handleHookResult=function(t){var e=this,r=this.getNotCurrentRejection();return r||(ae(t)?t.then(function(t){return e.handleHookResult(t)}):(Be.traceHookResult(t,this.transition,this.options),!1===t?Ne.aborted("Hook aborted transition").toPromise():Ut(We)(t)?Ne.redirected(t).toPromise():void 0))},e.prototype.getNotCurrentRejection=function(){var t=this.transition.router;return t._disposed?Ne.aborted("UIRouter instance #"+t.$id+" has been stopped (disposed)").toPromise():this.transition._aborted?Ne.aborted().toPromise():this.isSuperseded()?Ne.superseded(this.options.current()).toPromise():void 0},e.prototype.toString=function(){var t=this,e=t.options,r=t.registeredHook;return(qt("traceData.hookType")(e)||"internal")+" context: "+(qt("traceData.context.state.name")(e)||qt("traceData.context")(e)||"unknown")+", "+G(200,J(r.callback))},e.chain=function(t,e){var r=function(t,e){return t.then(function(){return e.invokeHook()})};return t.reduce(r,e||se.$q.when())},e.invokeHooks=function(t,r){for(var n=0;n<t.length;n++){var i=t[n].invokeHook();if(ae(i)){var o=t.slice(n+1);return e.chain(o,i).then(r)}}return r()},e.runAllHooks=function(t){t.forEach(function(t){return t.invokeHook()})},e.HANDLE_RESULT=function(t){return function(e){return t.handleHookResult(e)}},e.LOG_REJECTED_RESULT=function(t){return function(e){ae(e)&&e.catch(function(e){return t.logError(Ne.normalize(e))})}},e.LOG_ERROR=function(t){return function(e){return t.logError(e)}},e.REJECT_ERROR=function(t){return function(t){return He(t)}},e.THROW_ERROR=function(t){return function(t){throw t}},e}(),Qe=function(){function e(t,e,r,n,i){void 0===i&&(i={}),this.tranSvc=t,this.eventType=e,this.callback=r,this.matchCriteria=n,this.priority=i.priority||0,this.bind=i.bind||null,this._deregistered=!1}return e.prototype._matchingNodes=function(t,e){if(!0===e)return t;var r=t.filter(function(t){return H(t.state,e)});return r.length?r:null},e.prototype._getDefaultMatchCriteria=function(){return b(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},e.prototype._getMatchingNodes=function(e){var r=this,n=ve(this._getDefaultMatchCriteria(),this.matchCriteria);return Re(this.tranSvc._pluginapi._getPathTypes()).reduce(function(i,o){var a=o.scope===t.TransitionHookScope.STATE,u=e[o.name]||[],s=a?u:[P(u)];return i[o.name]=r._matchingNodes(s,n[o.name]),i},{})},e.prototype.matches=function(t){var e=this._getMatchingNodes(t);return Re(e).every(f)?e:null},e}(),Ke=function(){function e(t){this.transition=t}return e.prototype.buildHooksForPhase=function(t){var e=this;return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t){return e.buildHooks(t)}).reduce(Ce,[]).filter(f)},e.prototype.buildHooks=function(e){var r=this.transition,n=r.treeChanges(),i=this.getMatchingHooks(e,n);if(!i)return[];var o={transition:r,current:r.options().current},a=function(i){return i.matches(n)[e.criteriaMatchPath.name].map(function(n){var a=ve({bind:i.bind,traceData:{hookType:e.name,context:n}},o),u=e.criteriaMatchPath.scope===t.TransitionHookScope.STATE?n.state.self:null,s=new Je(r,u,i,a);return{hook:i,node:n,transitionHook:s}})};return i.map(a).reduce(Ce,[]).sort(D(e.reverseSort)).map(function(t){return t.transitionHook})},e.prototype.getMatchingHooks=function(e,r){
var n=e.hookPhase===t.TransitionHookPhase.CREATE,i=this.transition.router.transitionService;return(n?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(je(re,"broken event named: "+e.name)).reduce(Ce,[]).filter(function(t){return t.matches(r)})},e}(),Ye=function(){function t(t){this.pattern=/.*/,this.inherit=!0,ve(this,t)}return t.prototype.is=function(t,e){return!0},t.prototype.encode=function(t,e){return t},t.prototype.decode=function(t,e){return t},t.prototype.equals=function(t,e){return t==e},t.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},t.prototype.toString=function(){return"{ParamType:"+this.name+"}"},t.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},t.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new N(this,t)},t}(),Ze=Object.prototype.hasOwnProperty,Xe=function(t){return 0===["value","type","squash","array","dynamic"].filter(Ze.bind(t||{})).length};!function(t){t[t.PATH=0]="PATH",t[t.SEARCH=1]="SEARCH",t[t.CONFIG=2]="CONFIG"}(t.DefType||(t.DefType={}));var tr=function(){function e(e,r,n,i,o){n=F(n),r=U(n,r,i,e,o.paramTypes);var a=function(){var r={array:i===t.DefType.SEARCH&&"auto"},o=e.match(/\[\]$/)?{array:!0}:{};return ve(r,o,n).array}();r=a?r.$asArray(a,i===t.DefType.SEARCH):r;var u=void 0!==n.value||i===t.DefType.SEARCH,s=Qt(n.dynamic)?!!n.dynamic:!!r.dynamic,c=Qt(n.raw)?!!n.raw:!!r.raw,f=L(n,u,o.defaultSquashPolicy()),l=M(n,a,u,f),h=Qt(n.inherit)?!!n.inherit:!!r.inherit;ve(this,{id:e,type:r,location:i,isOptional:u,dynamic:s,raw:c,squash:f,replace:l,inherit:h,array:a,config:n})}return e.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},e.prototype.value=function(t){var e=this;return t=function(t){for(var r=0,n=e.replace;r<n.length;r++){var i=n[r];if(i.from===t)return i.to}return t}(t),Jt(t)?function(){if(e._defaultValueCache)return e._defaultValueCache.defaultValue;if(!se.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=se.$injector.invoke(e.config.$$fn);if(null!==t&&void 0!==t&&!e.type.is(t))throw new Error("Default value ("+t+") for parameter '"+e.id+"' is not an instance of ParamType ("+e.type.name+")");return e.config.$$fn.__cacheable&&(e._defaultValueCache={defaultValue:t}),t}():this.type.$normalize(t)},e.prototype.isSearch=function(){return this.location===t.DefType.SEARCH},e.prototype.validates=function(t){if((Jt(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var r=this.type.encode(e);return!(te(r)&&!this.type.pattern.exec(r))},e.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},e.values=function(t,e){void 0===e&&(e={});for(var r={},n=0,i=t;n<i.length;n++){var o=i[n];r[o.id]=o.value(e[o.id])}return r},e.changed=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),t.filter(function(t){return!t.type.equals(e[t.id],r[t.id])})},e.equals=function(t,r,n){return void 0===r&&(r={}),void 0===n&&(n={}),0===e.changed(t,r,n).length},e.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(Ee,!0)},e}(),er=function(){function t(e){if(e instanceof t){var r=e;this.state=r.state,this.paramSchema=r.paramSchema.slice(),this.paramValues=ve({},r.paramValues),this.resolvables=r.resolvables.slice(),this.views=r.views&&r.views.slice()}else{var n=e;this.state=n,this.paramSchema=n.parameters({inherit:!1}),this.paramValues={},this.resolvables=n.resolvables.map(function(t){return t.clone()})}}return t.prototype.applyRawParams=function(t){var e=function(e){return[e.id,e.value(t[e.id])]};return this.paramValues=this.paramSchema.reduce(function(t,r){return C(t,e(r))},{}),this},t.prototype.parameter=function(t){return S(this.paramSchema,Ht("id",t))},t.prototype.equals=function(t,e){var r=this.diff(t,e);return r&&0===r.length},t.prototype.diff=function(t,e){if(this.state!==t.state)return!1;var r=e?e(this):this.paramSchema;return tr.changed(r,this.paramValues,t.paramValues)},t.clone=function(e){return new t(e)},t}(),rr=function(){function t(){}return t.makeTargetState=function(t){var e=P(t).state;return new We(e,e,t.map(At("paramValues")).reduce(Se,{}))},t.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new er(t).applyRawParams(e)})},t.buildToPath=function(e,r){var n=t.buildPath(r);return r.options().inherit?t.inheritParams(e,n,Object.keys(r.params())):n},t.applyViewConfigs=function(e,r,n){r.filter(function(t){return ge(n,t.state)}).forEach(function(n){var i=Re(n.state.views||{}),o=t.subPath(r,function(t){return t===n}),a=i.map(function(t){return e.createViewConfig(o,t)});n.views=a.reduce(Ce,[])})},t.inheritParams=function(t,e,r){function n(t,e){var r=S(t,Ht("state",e));return ve({},r&&r.paramValues)}function i(e){var i=ve({},e&&e.paramValues),a=g(i,r);i=w(i,r);var u=w(n(t,e.state)||{},o),s=ve(i,u,a);return new er(e.state).applyRawParams(s)}void 0===r&&(r=[]);var o=t.map(function(t){return t.paramSchema}).reduce(Ce,[]).filter(function(t){return!t.inherit}).map(At("id"));return e.map(i)},t.treeChanges=function(e,r,n){function i(t,e){var n=er.clone(t);return n.paramValues=r[e].paramValues,n}for(var o=0,a=Math.min(e.length,r.length);o<a&&e[o].state!==n&&function(e,r){return e.equals(r,t.nonDynamicParams)}(e[o],r[o]);)o++;var u,s,c,f,l;u=e,s=u.slice(0,o),c=u.slice(o);var h=s.map(i);return f=r.slice(o),l=h.concat(f),{from:u,to:l,retained:s,exiting:c,entering:f}},t.matching=function(t,e,r){var n=!1;return T(t,e).reduce(function(t,e){var i=e[0],o=e[1];return n=n||!i.equals(o,r),n?t:t.concat(i)},[])},t.equals=function(e,r,n){return e.length===r.length&&t.matching(e,r,n).length===e.length},t.subPath=function(t,e){var r=S(t,e),n=t.indexOf(r);return-1===n?void 0:t.slice(0,n+1)},t.nonDynamicParams=function(t){return t.state.parameters({inherit:!1}).filter(function(t){return!t.dynamic})},t.paramValues=function(t){return t.reduce(function(t,e){return ve(t,e.paramValues)},{})},t}(),nr={when:"LAZY",async:"WAIT"},ir=function(){function t(e,r,n,i,o){if(this.resolved=!1,this.promise=void 0,e instanceof t)ve(this,e);else if(Zt(r)){if(Yt(e))throw new Error("new Resolvable(): token argument is required");if(!Zt(r))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=e,this.policy=i,this.resolveFn=r,this.deps=n||[],this.data=o,this.resolved=void 0!==o,this.promise=this.resolved?se.$q.when(this.data):void 0}else if(ee(e)&&e.token&&Zt(e.resolveFn)){var a=e;return new t(a.token,a.resolveFn,a.deps,a.policy,a.data)}}return t.prototype.getPolicy=function(t){var e=this.policy||{},r=t&&t.resolvePolicy||{};return{when:e.when||r.when||nr.when,async:e.async||r.async||nr.async}},t.prototype.resolve=function(t,e){var r=this,n=se.$q,i=function(){return n.all(t.getDependencies(r).map(function(r){return r.get(t,e)}))},o=function(t){return r.resolveFn.apply(null,t)},a=function(t){var e=t.cache(1);return e.take(1).toPromise().then(function(){return e})},u=t.findNode(this),s=u&&u.state,c="RXWAIT"===this.getPolicy(s).async?a:f,l=function(t){return r.data=t,r.resolved=!0,Be.traceResolvableResolved(r,e),r.data};return this.promise=n.when().then(i).then(o).then(c).then(l)},t.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},t.prototype.toString=function(){return"Resolvable(token: "+Q(this.token)+", requires: ["+this.deps.map(Q)+"])"},t.prototype.clone=function(){return new t(this)},t.fromData=function(e,r){return new t(e,function(){return r},null,null,r)},t}(),or={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT",RXWAIT:"RXWAIT"}},ar=or.when,ur=[ar.EAGER,ar.LAZY],sr=[ar.EAGER],cr="Native Injector",fr=function(){function t(t){this._path=t}return t.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(ke,[])},t.prototype.getResolvable=function(t){return P(this._path.map(function(t){return t.resolvables}).reduce(Ce,[]).filter(function(e){return e.token===t}))},t.prototype.getPolicy=function(t){var e=this.findNode(t);return t.getPolicy(e.state)},t.prototype.subContext=function(e){return new t(rr.subPath(this._path,function(t){return t.state===e}))},t.prototype.addResolvables=function(t,e){var r=S(this._path,Ht("state",e)),n=t.map(function(t){return t.token});r.resolvables=r.resolvables.filter(function(t){return-1===n.indexOf(t.token)}).concat(t)},t.prototype.resolvePath=function(t,e){var r=this;void 0===t&&(t="LAZY");var n=ge(ur,t)?t:"LAZY",i=n===or.when.EAGER?sr:ur;Be.traceResolvePath(this._path,t,e);var o=function(t,e){return function(n){return ge(t,r.getPolicy(n)[e])}},a=this._path.reduce(function(t,n){var a=n.resolvables.filter(o(i,"when")),u=a.filter(o(["NOWAIT"],"async")),s=a.filter(Dt(o(["NOWAIT"],"async"))),c=r.subContext(n.state),f=function(t){return t.get(c,e).then(function(e){return{token:t.token,value:e}})};return u.forEach(f),t.concat(s.map(f))},[]);return se.$q.all(a)},t.prototype.injector=function(){return this._injector||(this._injector=new lr(this))},t.prototype.findNode=function(t){return S(this._path,function(e){return ge(e.resolvables,t)})},t.prototype.getDependencies=function(t){var e=this,r=this.findNode(t),n=rr.subPath(this._path,function(t){return t===r})||this._path,i=n.reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(e){return e!==t}),o=function(t){var r=i.filter(function(e){return e.token===t});if(r.length)return P(r);var n=e.injector().getNative(t);if(!n)throw new Error("Could not find Dependency Injection token: "+Q(t));return new ir(t,function(){return n},[],n)};return t.deps.map(o)},t}(),lr=function(){function t(t){this.context=t,this.native=this.get(cr)||se.$injector}return t.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if("NOWAIT"===this.context.getPolicy(e).async)return e.get(this.context);if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+Q(e.token));return e.data}return this.native&&this.native.get(t)},t.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):se.$q.when(this.native.get(t))},t.prototype.getNative=function(t){return this.native&&this.native.get(t)},t}(),hr=At("self"),pr=function(){function e(e,r,n){var i=this;if(this._deferred=se.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new Ke(this),this.isActive=function(){return i.router.globals.transition===i},this.router=n,this._targetState=r,!r.valid())throw new Error(r.error());this._options=ve({current:Mt(this)},r.options()),this.$id=n.transitionService._transitionCount++;var o=rr.buildToPath(e,r);this._treeChanges=rr.treeChanges(e,o,this._options.reloadState),this.createTransitionHookRegFns();var a=this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);Je.invokeHooks(a,function(){return null}),this.applyViewConfigs(n)}return e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(e){return e.hookPhase!==t.TransitionHookPhase.CREATE}).forEach(function(t){return q(e,e.router.transitionService,t)})},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype.applyViewConfigs=function(t){var e=this._treeChanges.entering.map(function(t){return t.state});rr.applyViewConfigs(t.transitionService.$view,this._treeChanges.to,e)},e.prototype.$from=function(){return P(this._treeChanges.from).state},e.prototype.$to=function(){return P(this._treeChanges.to).state},e.prototype.from=function(){return this.$from().self},e.prototype.to=function(){return this.$to().self},e.prototype.targetState=function(){return this._targetState},e.prototype.is=function(t){return t instanceof e?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!H(this.$to(),t.to)||t.from&&!H(this.$from(),t.from))},e.prototype.params=function(t){return void 0===t&&(t="to"),Object.freeze(this._treeChanges[t].map(At("paramValues")).reduce(Se,{}))},e.prototype.injector=function(t,e){void 0===e&&(e="to");var r=this._treeChanges[e];return t&&(r=rr.subPath(r,function(e){return e.state===t||e.state.name===t})),new fr(r).injector()},e.prototype.getResolveTokens=function(t){return void 0===t&&(t="to"),new fr(this._treeChanges[t]).getTokens()},e.prototype.addResolvable=function(t,e){void 0===e&&(e=""),t=Ut(ir)(t)?t:new ir(t);var r="string"==typeof e?e:e.name,n=this._treeChanges.to,i=S(n,function(t){return t.state.name===r});new fr(n).addResolvables([t],i.state)},e.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},e.prototype.originalTransition=function(){var t=this.redirectedFrom();return t&&t.originalTransition()||this},e.prototype.options=function(){return this._options},e.prototype.entering=function(){return b(this._treeChanges.entering,At("state")).map(hr)},e.prototype.exiting=function(){return b(this._treeChanges.exiting,At("state")).map(hr).reverse()},e.prototype.retained=function(){return b(this._treeChanges.retained,At("state")).map(hr)},e.prototype.views=function(t,e){void 0===t&&(t="entering");var r=this._treeChanges[t];return r=e?r.filter(Ht("state",e)):r,r.map(At("views")).filter(f).reduce(Ce,[])},e.prototype.treeChanges=function(t){return t?this._treeChanges[t]:this._treeChanges},e.prototype.redirect=function(t){for(var e=1,r=this;null!=(r=r.redirectedFrom());)if(++e>20)throw new Error("Too many consecutive Transition redirects (20+)");var n={redirectedFrom:this,source:"redirect"};"url"===this.options().source&&!1!==t.options().location&&(n.location="replace");var i=ve({},this.options(),t.options(),n);t=new We(t.identifier(),t.$state(),t.params(),i);var o=this.router.transitionService.create(this._treeChanges.from,t),a=this._treeChanges.entering,u=o._treeChanges.entering;return rr.matching(u,a,rr.nonDynamicParams).filter(Dt(function(t){return function(e){return t&&e.state.includes[t.name]}}(t.options().reloadState))).forEach(function(t,e){t.resolvables=a[e].resolvables}),o},e.prototype._changedParams=function(){var t=this._treeChanges;if(!this._options.reload&&!t.exiting.length&&!t.entering.length&&t.to.length===t.from.length){if(!T(t.to,t.from).map(function(t){return t[0].state!==t[1].state}).reduce(Te,!1)){var e=t.to.map(function(t){return t.paramSchema}),r=[t.to,t.from].map(function(t){return t.map(function(t){return t.paramValues})});return T(e,r[0],r[1]).map(function(t){var e=t[0],r=t[1],n=t[2];return tr.changed(e,r,n)}).reduce(Ce,[])}}},e.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(Te,!1)},e.prototype.ignored=function(){return!!this._ignoredReason()},e.prototype._ignoredReason=function(){var t=this.router.globals.transition,e=this._options.reloadState,r=function(t,r){if(t.length!==r.length)return!1;var n=rr.matching(t,r);return t.length===n.filter(function(t){return!e||!t.state.includes[e.name]}).length},n=this.treeChanges(),i=t&&t.treeChanges();return i&&r(i.to,n.to)&&r(i.exiting,n.exiting)?"SameAsPending":0===n.exiting.length&&0===n.entering.length&&r(n.from,n.to)?"SameAsCurrent":void 0},e.prototype.run=function(){var e=this,r=Je.runAllHooks,n=function(t){return e._hookBuilder.buildHooksForPhase(t)},i=function(){Be.traceSuccess(e.$to(),e),e.success=!0,e._deferred.resolve(e.to()),r(n(t.TransitionHookPhase.SUCCESS))},o=function(i){Be.traceError(i,e),e.success=!1,e._deferred.reject(i),e._error=i,r(n(t.TransitionHookPhase.ERROR))},a=function(){var e=n(t.TransitionHookPhase.RUN),r=function(){return se.$q.when(void 0)};return Je.invokeHooks(e,r)},u=function(){var t=e.router.globals;return t.lastStartedTransitionId=e.$id,t.transition=e,t.transitionHistory.enqueue(e),Be.traceTransitionStart(e),se.$q.when(void 0)},s=n(t.TransitionHookPhase.BEFORE);return Je.invokeHooks(s,u).then(a).then(i,o),this.promise},e.prototype.valid=function(){return!this.error()||void 0!==this.success},e.prototype.abort=function(){Jt(this.success)&&(this._aborted=!0)},e.prototype.error=function(){var t=this.$to();if(t.self.abstract)return"Cannot transition to abstract state '"+t.name+"'";var e=t.parameters(),r=this.params(),n=e.filter(function(t){return!t.validates(r[t.id])});return n.length?"Param values not valid for state '"+t.name+"'. Invalid params: [ "+n.map(function(t){return t.id}).join(", ")+" ]":!1===this.success?this._error:void 0},e.prototype.toString=function(){var t=this.from(),e=this.to(),r=function(t){return null!==t["#"]&&void 0!==t["#"]?t:w(t,["#"])};return"Transition#"+this.$id+"( '"+(ee(t)?t.name:t)+"'"+he(r(this._treeChanges.from.map(At("paramValues")).reduce(Se,{})))+" -> "+(this.valid()?"":"(X) ")+"'"+(ee(e)?e.name:e)+"'"+he(r(this.params()))+" )"},e.diToken=e,e}(),dr=null,vr=function(t){var e=Ne.isRejectionPromise;return(dr=dr||s([[Dt(Qt),Mt("undefined")],[Kt,Mt("null")],[ae,Mt("[Promise]")],[e,function(t){return t._transitionRejection.toString()}],[Ut(Ne),u("toString")],[Ut(pr),u("toString")],[Ut(ir),u("toString")],[c,z],[Mt(!0),f]]))(t)},mr=function(t){return function(e){if(!e)return["",""];var r=e.indexOf(t);return-1===r?[e,""]:[e.substr(0,r),e.substr(r+1)]}},yr=function(){function t(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=g(t.prototype,["hash","string","query","path","int","bool","date","json","any"]);var e=function(t,e){return new Ye(ve({name:e},t))};this.types=ye(b(this.defaultTypes,e),{})}return t.prototype.dispose=function(){this.types={}},t.prototype.type=function(t,e,r){if(!Qt(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new Ye(ve({name:t},e)),r&&(this.typeQueue.push({name:t,def:r}),this.enqueue||this._flushTypeQueue()),this},t.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");ve(this.types[t.name],se.$injector.invoke(t.def))}},t}();!function(){var t=function(t){var e=function(t){return null!=t?t.toString():t},r={encode:e,decode:e,is:Ut(String),pattern:/.*/,equals:function(t,e){return t==e}};return ve({},r,t)};ve(yr.prototype,{string:t({}),path:t({pattern:/[^\/]*/}),query:t({}),hash:t({inherit:!1}),int:t({decode:function(t){return parseInt(t,10)},is:function(t){return!Yt(t)&&this.decode(t.toString())===t},pattern:/-?\d+/}),bool:t({encode:function(t){return t&&1||0},decode:function(t){return 0!==parseInt(t,10)},is:Ut(Boolean),pattern:/0|1/}),date:t({encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(t,e){return["getFullYear","getMonth","getDate"].reduce(function(r,n){return r&&t[n]()===e[n]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:t({encode:he,decode:le,is:Ut(Object),equals:me,pattern:/[^\/]*/}),any:t({encode:f,decode:f,is:function(){return!0},equals:me})})}();var gr,wr=function(){function t(t){void 0===t&&(t={}),ve(this,t)}return t.prototype.$inherit=function(t,e,r){var n,i=y(e,r),o={},a=[];for(var u in i)if(i[u]&&i[u].params&&(n=Object.keys(i[u].params),n.length))for(var s in n)a.indexOf(n[s])>=0||(a.push(n[s]),o[n[s]]=this[n[s]]);return ve({},o,t)},t}(),_r=function(t){if(!te(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}},$r=function(t,e){return function(r){var n=r;n&&n.url&&n.name&&n.name.match(/\.\*\*$/)&&(n.url+="{remainder:any}");var i=_r(n.url),o=r.parent,a=i?t.compile(i.val,{params:r.params||{},paramMap:function(t,e){return!1===n.reloadOnSearch&&e&&(t=ve(t||{},{dynamic:!0})),t}}):n.url;if(!a)return null;if(!t.isMatcher(a))throw new Error("Invalid url '"+a+"' in state '"+r+"'");return i&&i.root?a:(o&&o.navigable||e()).url.append(a)}},Sr=function(t){return function(e){return!t(e)&&e.url?e:e.parent?e.parent.navigable:null}},br=function(t){return function(e){var r=function(e,r){return t.fromConfig(r,null,e)},n=e.url&&e.url.parameters({inherit:!1})||[],i=Re(be(w(e.params||{},n.map(At("id"))),r));return n.concat(i).map(function(t){return[t.id,t]}).reduce(C,{})}},Rr=function(){function t(t,e){function r(e){return o(e)?null:t.find(n.parentName(e))||i()}this.matcher=t;var n=this,i=function(){return t.find("")},o=function(t){return""===t.name};this.builders={name:[Z],self:[X],parent:[r],data:[tt],url:[$r(e,i)],navigable:[Sr(o)],params:[br(e.paramFactory)],views:[],path:[et],includes:[rt],resolvables:[nt]}}return t.prototype.builder=function(t,e){var r=this.builders,n=r[t]||[];return te(t)&&!Qt(e)?n.length>1?n:n[0]:te(t)&&Zt(e)?(r[t]=n,r[t].push(e),function(){return r[t].splice(r[t].indexOf(e,1))&&null}):void 0},t.prototype.build=function(t){var e=this,r=e.matcher,n=e.builders,i=this.parentName(t);if(i&&!r.find(i,void 0,!1))return null;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o].reduce(function(t,e){return function(r){return e(r,t)}},l);t[o]=a(t)}return t},t.prototype.parentName=function(t){var e=t.name||"",r=e.split(".");if("**"===r.pop()&&r.pop(),r.length){if(t.parent)throw new Error("States that specify the 'parent:' property should not have a '.' in their name ("+e+")");return r.join(".")}return t.parent?te(t.parent)?t.parent:t.parent.name:""},t.prototype.name=function(t){var e=t.name;if(-1!==e.indexOf(".")||!t.parent)return e;var r=te(t.parent)?t.parent:t.parent.name;return r?r+"."+e:e},t}(),Er=function(){function t(t){this._states=t}return t.prototype.isRelative=function(t){return t=t||"",0===t.indexOf(".")||0===t.indexOf("^")},t.prototype.find=function(t,e,r){if(void 0===r&&(r=!0),t||""===t){var n=te(t),i=n?t:t.name;this.isRelative(i)&&(i=this.resolvePath(i,e));var o=this._states[i];if(o&&(n||!(n||o!==t&&o.self!==t)))return o;if(n&&r){var a=Re(this._states),u=a.filter(function(t){return t.__stateObjectCache.nameGlob&&t.__stateObjectCache.nameGlob.matches(i)});return u.length>1&&console.log("stateMatcher.find: Found multiple matches for "+i+" using glob: ",u.map(function(t){return t.name})),u[0]}}},t.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var r=this.find(e),n=t.split("."),i=0,o=n.length,a=r;i<o;i++)if(""!==n[i]||0!==i){if("^"!==n[i])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+r.name+"'");a=a.parent}else a=r;var u=n.slice(i).join(".");return a.name+(a.name&&u?".":"")+u},t}(),Tr=function(){function t(t,e,r,n,i){this.$registry=t,this.$urlRouter=e,this.states=r,this.builder=n,this.listeners=i,this.queue=[],this.matcher=t.matcher}return t.prototype.dispose=function(){this.queue=[]},t.prototype.register=function(t){var e=this.queue,r=Bt.create(t),n=r.name;if(!te(n))throw new Error("State must have a valid name");if(this.states.hasOwnProperty(n)||ge(e.map(At("name")),n))throw new Error("State '"+n+"' is already defined");return e.push(r),this.flush(),r},t.prototype.flush=function(){for(var t=this,e=this,r=e.queue,n=e.states,i=e.builder,o=[],a=[],u={},s=function(e){return t.states.hasOwnProperty(e)&&t.states[e]};r.length>0;){var c=r.shift(),f=c.name,l=i.build(c),h=a.indexOf(c);if(l){var p=s(f);if(p&&p.name===f)throw new Error("State '"+f+"' is already defined");var d=s(f+".**");d&&this.$registry.deregister(d),n[f]=c,this.attachRoute(c),h>=0&&a.splice(h,1),o.push(c)}else{var v=u[f];if(u[f]=r.length,h>=0&&v===r.length)return r.push(c),n;h<0&&a.push(c),r.push(c)}}return o.length&&this.listeners.forEach(function(t){return t("registered",o.map(function(t){return t.self}))}),n},t.prototype.attachRoute=function(t){!t.abstract&&t.url&&this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t))},t}(),Cr=function(){function t(t){this._router=t,this.states={},this.listeners=[],this.matcher=new Er(this.states),this.builder=new Rr(this.matcher,t.urlMatcherFactory),this.stateQueue=new Tr(this,t.urlRouter,this.states,this.builder,this.listeners),this._registerRoot()}return t.prototype._registerRoot=function(){var t={name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},abstract:!0};(this._root=this.stateQueue.register(t)).navigable=null},t.prototype.dispose=function(){var t=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(e){return t.get(e)&&t.deregister(e)})},t.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){we(this.listeners)(t)}.bind(this)},t.prototype.root=function(){return this._root},t.prototype.register=function(t){return this.stateQueue.register(t)},t.prototype._deregisterTree=function(t){var e=this,r=this.get().map(function(t){return t.$$state()}),n=function(t){var e=r.filter(function(e){return-1!==t.indexOf(e.parent)});return 0===e.length?e:e.concat(n(e))},i=n([t]),o=[t].concat(i).reverse();return o.forEach(function(t){var r=e._router.urlRouter;r.rules().filter(Ht("state",t)).forEach(r.removeRule.bind(r)),delete e.states[t.name]}),o},t.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var r=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",r.map(function(t){return t.self}))}),r},t.prototype.get=function(t,e){var r=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return r.states[t].self});var n=this.matcher.find(t,e);return n&&n.self||null},t.prototype.decorator=function(t,e){return this.builder.builder(t,e)},t}(),Pr=function(t,e,r){return t[e]=t[e]||r()},kr=K("/"),Or=function(){function e(t,r,n,i){var o=this;this.config=i,this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.pattern=t,this.config=m(this.config,{params:{},strict:!0,caseInsensitive:!1,paramMap:f});for(var a,u,s,c=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,h=0,p=[],d=function(r){if(!e.nameValidator.test(r))throw new Error("Invalid parameter name '"+r+"' in pattern '"+t+"'");if(S(o._params,Ht("id",r)))throw new Error("Duplicate parameter name '"+r+"' in pattern '"+t+"'")},v=function(e,n){var i=e[2]||e[3],a=n?e[4]:e[4]||("*"===e[1]?"[\\s\\S]*":null);return{id:i,regexp:a,cfg:o.config.params[i],segment:t.substring(h,e.index),type:a?r.type(a)||function(t){return ye(r.type(n?"query":"path"),{pattern:new RegExp(t,o.config.caseInsensitive?"i":void 0)})}(a):null}};(a=c.exec(t))&&(u=v(a,!1),!(u.segment.indexOf("?")>=0));)d(u.id),this._params.push(n.fromPath(u.id,u.type,this.config.paramMap(u.cfg,!1))),this._segments.push(u.segment),p.push([u.segment,P(this._params)]),h=c.lastIndex;s=t.substring(h);var y=s.indexOf("?");if(y>=0){var g=s.substring(y);if(s=s.substring(0,y),g.length>0)for(h=0;a=l.exec(g);)u=v(a,!0),d(u.id),this._params.push(n.fromSearch(u.id,u.type,this.config.paramMap(u.cfg,!0))),h=c.lastIndex}this._segments.push(s),this._compiled=p.map(function(t){return it.apply(null,t)}).concat(it(s))}return e.prototype.append=function(t){return this._children.push(t),t._cache={path:this._cache.path.concat(t),parent:this,pattern:null},t},e.prototype.isRoot=function(){return this._cache.path[0]===this},e.prototype.toString=function(){return this.pattern},e.prototype.exec=function(t,e,r,n){var i=this;void 0===e&&(e={}),void 0===n&&(n={});var o=Pr(this._cache,"pattern",function(){return new RegExp(["^",Oe(i._cache.path.map(At("_compiled"))).join(""),!1===i.config.strict?"/?":"","$"].join(""),i.config.caseInsensitive?"i":void 0)}).exec(t);if(!o)return null;var a=this.parameters(),u=a.filter(function(t){return!t.isSearch()}),s=a.filter(function(t){return t.isSearch()}),c=this._cache.path.map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),f={};if(c!==o.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var l=0;l<c;l++){for(var h=u[l],p=o[l+1],d=0;d<h.replace.length;d++)h.replace[d].from===p&&(p=h.replace[d].to);p&&!0===h.array&&(p=function(t){var e=function(t){return t.split("").reverse().join("")},r=function(t){return t.replace(/\\-/g,"-")};return b(b(e(t).split(/-(?!\\)/),e),r).reverse()}(p)),Qt(p)&&(p=h.type.decode(p)),f[h.id]=h.value(p)}return s.forEach(function(t){for(var r=e[t.id],n=0;n<t.replace.length;n++)t.replace[n].from===r&&(r=t.replace[n].to);Qt(r)&&(r=t.type.decode(r)),f[t.id]=t.value(r)}),r&&(f["#"]=r),f},e.prototype.parameters=function(t){return void 0===t&&(t={}),!1===t.inherit?this._params:Oe(this._cache.path.map(function(t){return t._params}))},e.prototype.parameter=function(t,e){var r=this;void 0===e&&(e={});var n=this._cache.parent;return function(){for(var e=0,n=r._params;e<n.length;e++){var i=n[e];if(i.id===t)return i}}()||!1!==e.inherit&&n&&n.parameter(t,e)||null},e.prototype.validates=function(t){var e=function(t,e){return!t||t.validates(e)};return t=t||{},this.parameters().filter(function(e){return t.hasOwnProperty(e.id)}).map(function(r){return e(r,t[r.id])}).reduce(Ee,!0)},e.prototype.format=function(t){function r(e){var r=e.value(t[e.id]),n=e.validates(r),i=e.isDefaultValue(r);return{param:e,value:r,isValid:n,isDefaultValue:i,squash:!!i&&e.squash,encoded:e.type.encode(r)}}void 0===t&&(t={});var n=this._cache.path,i=n.map(e.pathSegmentsAndParams).reduce(Ce,[]).map(function(t){return te(t)?t:r(t)}),o=n.map(e.queryParams).reduce(Ce,[]).map(r),a=function(t){return!1===t.isValid};if(i.concat(o).filter(a).length)return null;var u=i.reduce(function(t,r){if(te(r))return t+r;var n=r.squash,i=r.encoded,o=r.param;return!0===n?t.match(/\/$/)?t.slice(0,-1):t:te(n)?t+n:!1!==n?t:null==i?t:re(i)?t+b(i,e.encodeDashes).join("-"):o.raw?t+i:t+encodeURIComponent(i)},""),s=o.map(function(t){var e=t.param,r=t.squash,n=t.encoded,i=t.isDefaultValue;if(!(null==n||i&&!1!==r)&&(re(n)||(n=[n]),0!==n.length))return e.raw||(n=b(n,encodeURIComponent)),n.map(function(t){return e.id+"="+t})}).filter(f).reduce(Ce,[]).join("&");return u+(s?"?"+s:"")+(t["#"]?"#"+t["#"]:"")},e.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},e.pathSegmentsAndParams=function(e){return T(e._segments,e._params.filter(function(e){return e.location===t.DefType.PATH}).concat(void 0)).reduce(Ce,[]).filter(function(t){return""!==t&&Qt(t)})},e.queryParams=function(e){return e._params.filter(function(e){return e.location===t.DefType.SEARCH})},e.compare=function(t,r){var n=function(t){return t._cache.segments=t._cache.segments||t._cache.path.map(e.pathSegmentsAndParams).reduce(Ce,[]).reduce(Y,[]).map(function(t){return te(t)?kr(t):t}).reduce(Ce,[])},i=function(t){return t._cache.weights=t._cache.weights||n(t).map(function(t){return"/"===t?1:te(t)?2:t instanceof tr?3:void 0})},o=i(t),a=i(r);!function(t,e,r){for(var n=Math.max(t.length,e.length);t.length<n;)t.push(r);for(;e.length<n;)e.push(r)}(o,a,0);var u,s,c=T(o,a);for(s=0;s<c.length;s++)if(0!==(u=c[s][0]-c[s][1]))return u;return 0},e.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,e}(),xr=function(){function e(){var e=this;this.paramTypes=new yr,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this._getConfig=function(t){return ve({strict:e._isStrictMode,caseInsensitive:e._isCaseInsensitive},t)},this.paramFactory={fromConfig:function(r,n,i){return new tr(r,n,i,t.DefType.CONFIG,e)},fromPath:function(r,n,i){
return new tr(r,n,i,t.DefType.PATH,e)},fromSearch:function(r,n,i){return new tr(r,n,i,t.DefType.SEARCH,e)}},ve(this,{UrlMatcher:Or,Param:tr})}return e.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=Qt(t)?t:this._isCaseInsensitive},e.prototype.strictMode=function(t){return this._isStrictMode=Qt(t)?t:this._isStrictMode},e.prototype.defaultSquashPolicy=function(t){if(Qt(t)&&!0!==t&&!1!==t&&!te(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=Qt(t)?t:this._defaultSquashPolicy},e.prototype.compile=function(t,e){return new Or(t,this.paramTypes,this.paramFactory,this._getConfig(e))},e.prototype.isMatcher=function(t){if(!ee(t))return!1;var e=!0;return de(Or.prototype,function(r,n){Zt(r)&&(e=e&&Qt(t[n])&&Zt(t[n]))}),e},e.prototype.type=function(t,e,r){var n=this.paramTypes.type(t,e,r);return Qt(e)?this:n},e.prototype.$get=function(){return this.paramTypes.enqueue=!1,this.paramTypes._flushTypeQueue(),this},e.prototype.dispose=function(){this.paramTypes.dispose()},e}(),jr=function(){function t(t){this.router=t}return t.prototype.compile=function(t){return this.router.urlMatcherFactory.compile(t)},t.prototype.create=function(t,e){var r=this,n=s([[te,function(t){return n(r.compile(t))}],[Ut(Or),function(t){return r.fromUrlMatcher(t,e)}],[oe,function(t){return r.fromState(t,r.router)}],[Ut(RegExp),function(t){return r.fromRegExp(t,e)}],[Zt,function(t){return new Ir(t,e)}]]),i=n(t);if(!i)throw new Error("invalid 'what' in when()");return i},t.prototype.fromUrlMatcher=function(t,e){function r(e){var r=t.exec(e.path,e.search,e.hash);return t.validates(r)&&r}function n(e){var r=t.parameters().filter(function(t){return t.isOptional});return r.length?r.filter(function(t){return e[t.id]}).length/r.length:1e-6}var i=e;te(e)&&(e=this.router.urlMatcherFactory.compile(e)),Ut(Or)(e)&&(i=function(t){return e.format(t)});var o={urlMatcher:t,matchPriority:n,type:"URLMATCHER"};return ve(new Ir(r,i),o)},t.prototype.fromState=function(t,e){var r=function(r){var n=e.stateService,i=e.globals;n.href(t,r)!==n.href(i.current,i.params)&&n.transitionTo(t,r,{inherit:!0,source:"url"})},n={state:t,type:"STATE"};return ve(this.fromUrlMatcher(t.url,r),n)},t.prototype.fromRegExp=function(t,e){if(t.global||t.sticky)throw new Error("Rule RegExp must not be global or sticky");var r=function(t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})},n=te(e)?r:e,i=function(e){return t.exec(e.path)},o={regexp:t,type:"REGEXP"};return ve(new Ir(i,n),o)},t.isUrlRule=function(t){return t&&["type","match","handler"].every(function(e){return Qt(t[e])})},t}(),Ir=function(){function t(t,e){var r=this;this.match=t,this.type="RAW",this.matchPriority=function(t){return 0-r.$id},this.handler=e||f}return t}(),Vr=function(t,e){return(e.priority||0)-(t.priority||0)},Ar=function(t,e){var r={STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1};return(r[t.type]||0)-(r[e.type]||0)},Hr=function(t,e){return t.urlMatcher&&e.urlMatcher?Or.compare(t.urlMatcher,e.urlMatcher):0},qr=function(t,e){var r={STATE:!0,URLMATCHER:!0};return r[t.type]&&r[e.type]?0:(t.$id||0)-(e.$id||0)};gr=function(t,e){var r=Vr(t,e);return 0!==r?r:0!==(r=Ar(t,e))?r:(r=Hr(t,e),0!==r?r:qr(t,e))};var Dr=function(){function t(e){this._sortFn=gr,this._rules=[],this.interceptDeferred=!1,this._id=0,this._sorted=!1,this._router=e,this.urlRuleFactory=new jr(e),h(Mt(t.prototype),this,Mt(this))}return t.prototype.dispose=function(){this.listen(!1),this._rules=[],delete this._otherwiseFn},t.prototype.sort=function(t){this._rules=this.stableSort(this._rules,this._sortFn=t||this._sortFn),this._sorted=!0},t.prototype.ensureSorted=function(){this._sorted||this.sort()},t.prototype.stableSort=function(t,e){var r=t.map(function(t,e){return{elem:t,idx:e}});return r.sort(function(t,r){var n=e(t.elem,r.elem);return 0===n?t.idx-r.idx:n}),r.map(function(t){return t.elem})},t.prototype.match=function(t){var e=this;this.ensureSorted(),t=ve({path:"",search:{},hash:""},t);var r=this.rules();this._otherwiseFn&&r.push(this._otherwiseFn);for(var n,i=0;i<r.length&&(!n||0===this._sortFn(r[i],n.rule));i++){var o=function(r){var n=r.match(t,e._router);return n&&{match:n,rule:r,weight:r.matchPriority(n)}}(r[i]);n=!n||o&&o.weight>n.weight?o:n}return n},t.prototype.sync=function(t){if(!t||!t.defaultPrevented){var e=this._router,r=e.urlService,n=e.stateService,i={path:r.path(),search:r.search(),hash:r.hash()},o=this.match(i);s([[te,function(t){return r.url(t,!0)}],[We.isDef,function(t){return n.go(t.state,t.params,t.options)}],[Ut(We),function(t){return n.go(t.state(),t.params(),t.options())}]])(o&&o.rule.handler(o.match,i,e))}},t.prototype.listen=function(t){var e=this;if(!1!==t)return this._stopFn=this._stopFn||this._router.urlService.onChange(function(t){return e.sync(t)});this._stopFn&&this._stopFn(),delete this._stopFn},t.prototype.update=function(t){var e=this._router.locationService;if(t)return void(this.location=e.path());e.path()!==this.location&&e.url(this.location,!0)},t.prototype.push=function(t,e,r){var n=r&&!!r.replace;this._router.urlService.url(t.format(e||{}),n)},t.prototype.href=function(t,e,r){var n=t.format(e);if(null==n)return null;r=r||{absolute:!1};var i=this._router.urlService.config,o=i.html5Mode();if(o||null===n||(n="#"+i.hashPrefix()+n),n=ot(n,o,r.absolute,i.baseHref()),!r.absolute||!n)return n;var a=!o&&n?"/":"",u=i.port();return u=80===u||443===u?"":":"+u,[i.protocol(),"://",i.host(),u,a,n].join("")},t.prototype.rule=function(t){var e=this;if(!jr.isUrlRule(t))throw new Error("invalid rule");return t.$id=this._id++,t.priority=t.priority||0,this._rules.push(t),this._sorted=!1,function(){return e.removeRule(t)}},t.prototype.removeRule=function(t){we(this._rules,t)},t.prototype.rules=function(){return this.ensureSorted(),this._rules.slice()},t.prototype.otherwise=function(t){var e=at(t);this._otherwiseFn=this.urlRuleFactory.create(Mt(!0),e),this._sorted=!1},t.prototype.initial=function(t){var e=at(t),r=function(t,e){return 0===e.globals.transitionHistory.size()&&!!/^\/?$/.exec(t.path)};this.rule(this.urlRuleFactory.create(r,e))},t.prototype.when=function(t,e,r){var n=this.urlRuleFactory.create(t,e);return Qt(r&&r.priority)&&(n.priority=r.priority),this.rule(n),n},t.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},t}(),Nr=function(){function t(){var t=this;this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIViews:function(){return t._uiViews},_activeViewConfigs:function(){return t._viewConfigs}}}return t.prototype._rootViewContext=function(t){return this._rootContext=t||this._rootContext},t.prototype._viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},t.prototype.createViewConfig=function(t,e){var r=this._viewConfigFactories[e.$type];if(!r)throw new Error("ViewService: No view config factory registered for type "+e.$type);var n=r(t,e);return re(n)?n:[n]},t.prototype.deactivateViewConfig=function(t){Be.traceViewServiceEvent("<- Removing",t),we(this._viewConfigs,t)},t.prototype.activateViewConfig=function(t){Be.traceViewServiceEvent("-> Registering",t),this._viewConfigs.push(t)},t.prototype.sync=function(){function e(t){var e=function(t){return t&&t.parent?e(t.parent)+1:1};return 1e4*t.fqn.split(".").length+e(t.creationContext)}function n(t){for(var e=t.viewDecl.$context,r=0;++r&&e.parent;)e=e.parent;return r}var i=this,o=this._uiViews.map(function(t){return[t.fqn,t]}).reduce(C,{}),a=r(function(t,e,r,n){return e*(t(r)-t(n))}),u=function(e){var r=i._viewConfigs.filter(t.matches(o,e));return r.length>1&&r.sort(a(n,-1)),[e,r[0]]},s=function(t){var e=t[0],r=t[1];-1!==i._uiViews.indexOf(e)&&e.configUpdated(r)},c=this._uiViews.sort(a(e,1)).map(u);Be.traceViewSync(c),c.forEach(s)},t.prototype.registerUIView=function(t){Be.traceViewServiceUIViewEvent("-> Registering",t);var e=this._uiViews,r=function(e){return e.fqn===t.fqn&&e.$type===t.$type};return e.filter(r).length&&Be.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",t),e.push(t),this.sync(),function(){if(-1===e.indexOf(t))return void Be.traceViewServiceUIViewEvent("Tried removing non-registered uiView",t);Be.traceViewServiceUIViewEvent("<- Deregistering",t),we(e)(t)}},t.prototype.available=function(){return this._uiViews.map(At("fqn"))},t.prototype.active=function(){return this._uiViews.filter(At("$config")).map(At("name"))},t.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var r=e.split("@"),n=r[0]||"$default",i=te(r[1])?r[1]:"^",o=/^(\^(?:\.\^)*)\.(.*$)/.exec(n);(o&&(i=o[1],n=o[2]),"!"===n.charAt(0)&&(n=n.substr(1),i=""),/^(\^(?:\.\^)*)$/.exec(i))?i=i.split(".").reduce(function(t,e){return t.parent},t).name:"."===i&&(i=t.name);return{uiViewName:n,uiViewContextAnchor:i}},t.matches=function(t,e){return function(r){if(e.$type!==r.viewDecl.$type)return!1;var n=r.viewDecl,i=n.$uiViewName.split("."),o=e.fqn.split(".");if(!me(i,o.slice(0-i.length)))return!1;var a=1-i.length||void 0,u=o.slice(0,a).join("."),s=t[u].creationContext;return n.$uiViewContextAnchor===(s&&s.name)}},t}(),Fr=function(){function t(){this.params=new wr,this.lastStartedTransitionId=-1,this.transitionHistory=new qe([],1),this.successfulTransitions=new qe([],1)}return t.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},t}(),Ur=function(t){return t.reduce(function(t,e){return t[e]=ue(e),t},{dispose:l})},Lr=["url","path","search","hash","onChange"],Mr=["port","protocol","host","baseHref","html5Mode","hashPrefix"],Gr=["type","caseInsensitive","strictMode","defaultSquashPolicy"],Br=["sort","when","initial","otherwise","rules","rule","removeRule"],Wr=["deferIntercept","listen","sync","match"],zr=function(){function t(t,e){void 0===e&&(e=!0),this.router=t,this.rules={},this.config={};var r=function(){return t.locationService};h(r,this,r,Lr,e);var n=function(){return t.locationConfig};h(n,this.config,n,Mr,e);var i=function(){return t.urlMatcherFactory};h(i,this.config,i,Gr);var o=function(){return t.urlRouter};h(o,this.rules,o,Br),h(o,this,o,Wr)}return t.prototype.url=function(t,e,r){},t.prototype.path=function(){},t.prototype.search=function(){},t.prototype.hash=function(){},t.prototype.onChange=function(t){},t.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},t.prototype.dispose=function(){},t.prototype.sync=function(t){},t.prototype.listen=function(t){},t.prototype.deferIntercept=function(t){},t.prototype.match=function(t){},t.locationServiceStub=Ur(Lr),t.locationConfigStub=Ur(Mr),t}(),Jr=0,Qr=function(){function t(t,e){void 0===t&&(t=zr.locationServiceStub),void 0===e&&(e=zr.locationConfigStub),this.locationService=t,this.locationConfig=e,this.$id=Jr++,this._disposed=!1,this._disposables=[],this.trace=Be,this.viewService=new Nr,this.transitionService=new Rn(this),this.globals=new Fr,this.urlMatcherFactory=new xr,this.urlRouter=new Dr(this),this.stateRegistry=new Cr(this),this.stateService=new En(this),this.urlService=new zr(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlRouter),this.disposable(t),this.disposable(e)}return t.prototype.disposable=function(t){this._disposables.push(t)},t.prototype.dispose=function(t){var e=this;if(t&&Zt(t.dispose))return void t.dispose(this);this._disposed=!0,this._disposables.slice().forEach(function(t){try{"function"==typeof t.dispose&&t.dispose(e),we(e._disposables,t)}catch(t){}})},t.prototype.plugin=function(t,e){void 0===e&&(e={});var r=new t(this,e);if(!r.name)throw new Error("Required property `name` missing on plugin: "+r);return this._disposables.push(r),this._plugins[r.name]=r},t.prototype.getPlugin=function(t){return t?this._plugins[t]:Re(this._plugins)},t}(),Kr=function(t){return t.onCreate({},ut)},Yr=function(t){function e(e){if(e)return e instanceof We?e:te(e)?n.target(e,t.params(),t.options()):e.state||e.params?n.target(e.state||t.to(),e.params||t.params(),t.options()):void 0}var r=t.to().redirectTo;if(r){var n=t.router.stateService;return Zt(r)?se.$q.when(r(t)).then(e):e(r)}},Zr=function(t){return t.onStart({to:function(t){return!!t.redirectTo}},Yr)},Xr=st("onExit"),tn=function(t){return t.onExit({exiting:function(t){return!!t.onExit}},Xr)},en=st("onRetain"),rn=function(t){return t.onRetain({retained:function(t){return!!t.onRetain}},en)},nn=st("onEnter"),on=function(t){return t.onEnter({entering:function(t){return!!t.onEnter}},nn)},an=function(t){return new fr(t.treeChanges().to).resolvePath("EAGER",t).then(l)},un=function(t){return t.onStart({},an,{priority:1e3})},sn=function(t,e){return new fr(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY",t).then(l)},cn=function(t){return t.onEnter({entering:Mt(!0)},sn,{priority:1e3})},fn=function(t){var e=se.$q,r=t.views("entering");if(r.length)return e.all(r.map(function(t){return e.when(t.load())})).then(l)},ln=function(t){return t.onFinish({},fn)},hn=function(t){var e=t.views("entering"),r=t.views("exiting");if(e.length||r.length){var n=t.router.viewService;r.forEach(function(t){return n.deactivateViewConfig(t)}),e.forEach(function(t){return n.activateViewConfig(t)}),n.sync()}},pn=function(t){return t.onSuccess({},hn)},dn=function(t){var e=t.router.globals,r=function(){e.successfulTransitions.enqueue(t),e.$current=t.$to(),e.current=e.$current.self,pe(t.params(),e.params)},n=function(){e.transition===t&&(e.transition=null)};t.onSuccess({},r,{priority:1e4}),t.promise.then(n,n)},vn=function(t){return t.onCreate({},dn)},mn=function(t){var e=t.options(),r=t.router.stateService,n=t.router.urlRouter;if("url"!==e.source&&e.location&&r.$current.navigable){var i={replace:"replace"===e.location};n.push(r.$current.navigable.url,r.params,i)}n.update(!0)},yn=function(t){return t.onSuccess({},mn,{priority:9999})},gn=function(t){function e(){if("url"!==t.originalTransition().options().source){var e=t.targetState();return r.stateService.target(e.identifier(),e.params(),e.options())}var n=r.urlService,i=n.match(n.parts()),o=i&&i.rule;if(o&&"STATE"===o.type){var a=o.state,u=i.match;return r.stateService.target(a,u,t.options())}r.urlService.sync()}var r=t.router,n=t.entering().filter(function(t){return!!t.$$state().lazyLoad}).map(function(e){return ct(t,e)});return se.$q.all(n).then(e)},wn=function(t){return t.onBefore({entering:function(t){return!!t.lazyLoad}},gn)},_n=function(){function t(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Je.HANDLE_RESULT),void 0===a&&(a=Je.REJECT_ERROR),void 0===u&&(u=!1),this.name=t,this.hookPhase=e,this.hookOrder=r,this.criteriaMatchPath=n,this.reverseSort=i,this.getResultHandler=o,this.getErrorHandler=a,this.synchronous=u}return t}(),$n=function(t){return t.onBefore({},ft,{priority:-9999})},Sn=function(t){return t.onBefore({},lt,{priority:-1e4})},bn={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,custom:{},current:function(){return null},source:"unknown"},Rn=function(){function e(t){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=t,this.$view=t.viewService,this._deregisterHookFns={},this._pluginapi=h(Mt(this),{},Mt(this),["_definePathType","_defineEvent","_getPathTypes","_getEvents","getHooks"]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks()}return e.prototype.onCreate=function(t,e,r){},e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.dispose=function(t){Re(this._registeredHooks).forEach(function(t){return t.forEach(function(e){e._deregistered=!0,we(t,e)})})},e.prototype.create=function(t,e){return new pr(t,e,this._router)},e.prototype._defineCoreEvents=function(){var e=t.TransitionHookPhase,r=Je,n=this._criteriaPaths;this._defineEvent("onCreate",e.CREATE,0,n.to,!1,r.LOG_REJECTED_RESULT,r.THROW_ERROR,!0),this._defineEvent("onBefore",e.BEFORE,0,n.to),this._defineEvent("onStart",e.RUN,0,n.to),this._defineEvent("onExit",e.RUN,100,n.exiting,!0),this._defineEvent("onRetain",e.RUN,200,n.retained),this._defineEvent("onEnter",e.RUN,300,n.entering),this._defineEvent("onFinish",e.RUN,400,n.to),this._defineEvent("onSuccess",e.SUCCESS,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0),this._defineEvent("onError",e.ERROR,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0)},e.prototype._defineCorePaths=function(){var e=t.TransitionHookScope.STATE,r=t.TransitionHookScope.TRANSITION;this._definePathType("to",r),this._definePathType("from",r),this._definePathType("exiting",e),this._definePathType("retained",e),this._definePathType("entering",e)},e.prototype._defineEvent=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Je.HANDLE_RESULT),void 0===a&&(a=Je.REJECT_ERROR),void 0===u&&(u=!1);var s=new _n(t,e,r,n,i,o,a,u);this._eventTypes.push(s),q(this,this,s)},e.prototype._getEvents=function(t){return(Qt(t)?this._eventTypes.filter(function(e){return e.hookPhase===t}):this._eventTypes.slice()).sort(function(t,e){var r=t.hookPhase-e.hookPhase;return 0===r?t.hookOrder-e.hookOrder:r})},e.prototype._definePathType=function(t,e){this._criteriaPaths[t]={name:t,scope:e}},e.prototype._getPathTypes=function(){return this._criteriaPaths},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype._registerCoreTransitionHooks=function(){var t=this._deregisterHookFns;t.addCoreResolves=Kr(this),t.ignored=$n(this),t.invalid=Sn(this),t.redirectTo=Zr(this),t.onExit=tn(this),t.onRetain=rn(this),t.onEnter=on(this),t.eagerResolve=un(this),t.lazyResolve=cn(this),t.loadViews=ln(this),t.activateViews=pn(this),t.updateGlobals=vn(this),t.updateUrl=yn(this),t.lazyLoad=wn(this)},e}(),En=function(){function e(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof Ne?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var r=["current","$current","params","transition"],n=Object.keys(e.prototype).filter(Dt(ge(r)));h(Mt(e.prototype),this,Mt(this),n)}return Object.defineProperty(e.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this.defaultErrorHandler(l),this.invalidCallbacks=[]},e.prototype._handleInvalidTargetState=function(t,e){function r(){var t=s.dequeue();return void 0===t?Ne.invalid(e.error()).toPromise():se.$q.when(t(e,i,c)).then(f).then(function(t){return t||r()})}var n=this,i=rr.makeTargetState(t),o=this.router.globals,a=function(){return o.transitionHistory.peekTail()},u=a(),s=new qe(this.invalidCallbacks.slice()),c=new fr(t).injector(),f=function(t){if(t instanceof We){var e=t;return e=n.target(e.identifier(),e.params(),e.options()),e.valid()?a()!==u?Ne.superseded().toPromise():n.transitionTo(e.identifier(),e.params(),e.options()):Ne.invalid(e.error()).toPromise()}};return r()},e.prototype.onInvalid=function(t){return this.invalidCallbacks.push(t),function(){we(this.invalidCallbacks)(t)}.bind(this)},e.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!Qt(t)||t,inherit:!1,notify:!1})},e.prototype.go=function(t,e,r){var n={relative:this.$current,inherit:!0},i=m(r,n,bn);return this.transitionTo(t,e,i)},e.prototype.target=function(t,e,r){if(void 0===r&&(r={}),ee(r.reload)&&!r.reload.name)throw new Error("Invalid reload state object");var n=this.router.stateRegistry;if(r.reloadState=!0===r.reload?n.root():n.matcher.find(r.reload,r.relative),r.reload&&!r.reloadState)throw new Error("No such reload state '"+(te(r.reload)?r.reload:r.reload.name)+"'");var i=n.matcher.find(t,r.relative);return new We(t,i,e,r)},e.prototype.getCurrentPath=function(){var t=this,e=this.router.globals,r=e.successfulTransitions.peekTail();return r?r.treeChanges().to:function(){return[new er(t.router.stateRegistry.root())]}()},e.prototype.transitionTo=function(e,r,n){var i=this;void 0===r&&(r={}),void 0===n&&(n={});var o=this.router,a=o.globals;n=m(n,bn),n=ve(n,{current:function(){return a.transition}});var u=this.target(e,r,n),s=this.getCurrentPath();if(!u.exists())return this._handleInvalidTargetState(s,u);if(!u.valid())return He(u.error());var c=function(e){return function(r){if(r instanceof Ne){var n=o.globals.lastStartedTransitionId===e.$id;if(r.type===t.RejectType.IGNORED)return n&&o.urlRouter.update(),se.$q.when(a.current);var u=r.detail;if(r.type===t.RejectType.SUPERSEDED&&r.redirected&&u instanceof We){var s=e.redirect(u);return s.run().catch(c(s))}if(r.type===t.RejectType.ABORTED)return n&&o.urlRouter.update(),se.$q.reject(r)}return i.defaultErrorHandler()(r),se.$q.reject(r)}},f=this.router.transitionService.create(s,u),l=f.run().catch(c(f));return Ae(l),ve(l,{transition:f})},e.prototype.is=function(t,e,r){r=m(r,{relative:this.$current});var n=this.router.stateRegistry.matcher.find(t,r.relative);if(Qt(n)){if(this.$current!==n)return!1;if(!e)return!0;var i=n.parameters({inherit:!0,matchingKeys:e});return tr.equals(i,tr.values(i,e),this.params)}},e.prototype.includes=function(t,e,r){r=m(r,{relative:this.$current});var n=te(t)&&Gt.fromString(t);if(n){if(!n.matches(this.$current.name))return!1;t=this.$current.name}var i=this.router.stateRegistry.matcher.find(t,r.relative),o=this.$current.includes;if(Qt(i)){if(!Qt(o[i.name]))return!1;if(!e)return!0;var a=i.parameters({inherit:!0,matchingKeys:e});return tr.equals(a,tr.values(a,e),this.params)}},e.prototype.href=function(t,e,r){r=m(r,{lossy:!0,inherit:!0,absolute:!1,relative:this.$current}),e=e||{};var n=this.router.stateRegistry.matcher.find(t,r.relative);if(!Qt(n))return null;r.inherit&&(e=this.params.$inherit(e,this.$current,n));var i=n&&r.lossy?n.navigable:n;return i&&void 0!==i.url&&null!==i.url?this.router.urlRouter.href(i.url,e,{absolute:r.absolute}):null},e.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},e.prototype.get=function(t,e){var r=this.router.stateRegistry;return 0===arguments.length?r.get():r.get(t,e||this.$current)},e.prototype.lazyLoad=function(t,e){var r=this.get(t);if(!r||!r.lazyLoad)throw new Error("Can not lazy load "+t);var n=this.getCurrentPath(),i=rr.makeTargetState(n);return e=e||this.router.transitionService.create(n,i),ct(e,r)},e}(),Tn={when:function(t){return new Promise(function(e,r){return e(t)})},reject:function(t){return new Promise(function(e,r){r(t)})},defer:function(){var t={};return t.promise=new Promise(function(e,r){t.resolve=e,t.reject=r}),t},all:function(t){if(re(t))return Promise.all(t);if(ee(t)){var e=Object.keys(t).map(function(e){return t[e].then(function(t){return{key:e,val:t}})});return Tn.all(e).then(function(t){return t.reduce(function(t,e){return t[e.key]=e.val,t},{})})}}},Cn={},Pn=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,kn=/([^\s,]+)/g,On={get:function(t){return Cn[t]},has:function(t){return null!=On.get(t)},invoke:function(t,e,r){var n=ve({},Cn,r||{}),i=On.annotate(t),o=je(function(t){return n.hasOwnProperty(t)},function(t){return"DI can't find injectable: '"+t+"'"}),a=i.filter(o).map(function(t){return n[t]});return Zt(t)?t.apply(e,a):t.slice(-1)[0].apply(e,a)},annotate:function(t){if(!c(t))throw new Error("Not an injectable function: "+t);if(t&&t.$inject)return t.$inject;if(re(t))return t.slice(0,-1);var e=t.toString().replace(Pn,"");return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(kn)||[]}},xn=function(t){return function(e){if(!e)return["",""];var r=e.indexOf(t);return-1===r?[e,""]:[e.substr(0,r),e.substr(r+1)]}},jn=xn("#"),In=xn("?"),Vn=xn("="),An=function(t){return t?t.replace(/^#/,""):""},Hn=function(t,e){var r=e[0],n=e[1];return t.hasOwnProperty(r)?re(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n,t},qn=function(t){return t.split("&").filter(f).map(Vn).reduce(Hn,{})},Dn=function(t){var e=t.path(),r=t.search(),n=t.hash(),i=Object.keys(r).map(function(t){var e=r[t];return(re(e)?e:[e]).map(function(e){return t+"="+e})}).reduce(Ce,[]).join("&");return e+(i?"?"+i:"")+(n?"#"+n:"")},Nn=function(){function t(t,e){var r=this;this.fireAfterUpdate=e,this._listener=function(t){return r._listeners.forEach(function(e){return e(t)})},this._listeners=[],this.hash=function(){return ht(r._get()).hash},this.path=function(){return ht(r._get()).path},this.search=function(){return qn(ht(r._get()).search)},this._location=window&&window.location,this._history=window&&window.history}return t.prototype.url=function(t,e){if(void 0===e&&(e=!0),Qt(t)&&t!==this._get()&&(this._set(null,null,t,e),this.fireAfterUpdate)){var r=ve(new Event("locationchange"),{url:t});this._listeners.forEach(function(t){return t(r)})}return Dn(this)},t.prototype.onChange=function(t){var e=this;return this._listeners.push(t),function(){return we(e._listeners,t)}},t.prototype.dispose=function(t){$e(this._listeners)},t}(),Fn=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Un=function(t){function e(e){var r=t.call(this,e,!1)||this;return window.addEventListener("hashchange",r._listener,!1),r}return Fn(e,t),e.prototype._get=function(){return An(this._location.hash)},e.prototype._set=function(t,e,r,n){this._location.hash=r},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),window.removeEventListener("hashchange",this._listener)},e}(Nn),Ln=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Mn=function(t){function e(e){return t.call(this,e,!0)||this}return Ln(e,t),e.prototype._get=function(){return this._url},e.prototype._set=function(t,e,r,n){this._url=r},e}(Nn),Gn=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Bn=function(t){function e(e){var r=t.call(this,e,!0)||this;return r._config=e.urlService.config,window.addEventListener("popstate",r._listener,!1),r}return Gn(e,t),e.prototype._get=function(){var t=this._location,e=t.pathname,r=t.hash,n=t.search;return n=In(n)[1],r=jn(r)[1],e+(n?"?"+n:"")+(r?"$"+n:"")},e.prototype._set=function(t,e,r,n){var i=this,o=i._config,a=i._history,u=o.baseHref()+r;n?a.replaceState(t,e,u):a.pushState(t,e,u)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),window.removeEventListener("popstate",this._listener)},e}(Nn),Wn=function(){function t(){var t=this;this._baseHref="",this._port=80,this._protocol="http",this._host="localhost",this._hashPrefix="",this.port=function(){return t._port},this.protocol=function(){return t._protocol},this.host=function(){return t._host},this.baseHref=function(){return t._baseHref},this.html5Mode=function(){return!1},this.hashPrefix=function(e){return Qt(e)?t._hashPrefix=e:t._hashPrefix},this.dispose=l}return t}(),zn=function(){function t(t,e){void 0===e&&(e=!1),this._isHtml5=e,this._baseHref=void 0,this._hashPrefix=""}return t.prototype.port=function(){return location.port?Number(location.port):"https"===this.protocol()?443:80},t.prototype.protocol=function(){return location.protocol.replace(/:/g,"")},t.prototype.host=function(){return location.hostname},t.prototype.html5Mode=function(){return this._isHtml5},t.prototype.hashPrefix=function(t){return Qt(t)?this._hashPrefix=t:this._hashPrefix},t.prototype.baseHref=function(t){return Qt(t)?this._baseHref=t:this._baseHref||this.applyDocumentBaseHref()},t.prototype.applyDocumentBaseHref=function(){var t=document.getElementsByTagName("base");return this._baseHref=t.length?t[0].href.substr(location.origin.length):""},t.prototype.dispose=function(){},t}(),Jn=pt("vanilla.hashBangLocation",!1,Un,zn),Qn=pt("vanilla.pushStateLocation",!0,Bn,zn),Kn=pt("vanilla.memoryLocation",!1,Mn,Wn),Yn=function(){function t(){}return t.prototype.dispose=function(t){},t}(),Zn=Object.freeze({fromJson:le,toJson:he,copy:pe,forEach:de,extend:ve,equals:me,identity:f,noop:l,createProxyFunctions:h,inherit:ye,inArray:ge,_inArray:p,removeFrom:we,_removeFrom:d,pushTo:_e,_pushTo:v,deregAll:$e,defaults:m,mergeR:Se,ancestors:y,pick:g,omit:w,pluck:_,filter:$,find:S,mapObj:be,map:b,values:Re,allTrueR:Ee,anyTrueR:Te,unnestR:Ce,flattenR:Pe,pushR:R,uniqR:ke,unnest:Oe,flatten:xe,assertPredicate:je,assertMap:Ie,assertFn:E,pairs:Ve,arrayTuples:T,applyPairs:C,tail:P,_extend:x,silenceUncaughtInPromise:Ae,silentRejection:He,notImplemented:ue,services:se,Glob:Gt,curry:r,compose:n,pipe:i,prop:At,propEq:Ht,parse:qt,not:Dt,and:o,or:a,all:Nt,any:Ft,is:Ut,eq:Lt,val:Mt,invoke:u,pattern:s,isUndefined:Jt,isDefined:Qt,isNull:Kt,isNullOrUndefined:Yt,isFunction:Zt,isNumber:Xt,isString:te,isObject:ee,isArray:re,isDate:ne,isRegExp:ie,isState:oe,isInjectable:c,isPromise:ae,Queue:qe,maxLength:G,padString:B,kebobString:W,functionToString:z,fnToString:J,stringify:Q,beforeAfterSubstr:mr,splitOnDelim:K,joinNeighborsR:Y,get Category(){return t.Category},Trace:Ge,trace:Be,get DefType(){return t.DefType},Param:tr,ParamTypes:yr,StateParams:wr,ParamType:Ye,PathNode:er,PathUtils:rr,resolvePolicies:or,defaultResolvePolicy:nr,Resolvable:ir,NATIVE_INJECTOR_TOKEN:cr,ResolveContext:fr,resolvablesBuilder:nt,StateBuilder:Rr,StateObject:Bt,StateMatcher:Er,StateQueueManager:Tr,StateRegistry:Cr,StateService:En,TargetState:We,get TransitionHookPhase(){return t.TransitionHookPhase},get TransitionHookScope(){return t.TransitionHookScope},HookBuilder:Ke,matchState:H,RegisteredHook:Qe,makeEvent:q,get RejectType(){return t.RejectType},Rejection:Ne,Transition:pr,TransitionHook:Je,TransitionEventType:_n,defaultTransOpts:bn,TransitionService:Rn,UrlMatcher:Or,UrlMatcherFactory:xr,UrlRouter:Dr,UrlRuleFactory:jr,BaseUrlRule:Ir,UrlService:zr,ViewService:Nr,UIRouterGlobals:Fr,UIRouter:Qr,$q:Tn,$injector:On,BaseLocationServices:Nn,HashLocationService:Un,MemoryLocationService:Mn,PushStateLocationService:Bn,MemoryLocationConfig:Wn,BrowserLocationConfig:zn,splitHash:jn,splitQuery:In,splitEqual:Vn,trimHashVal:An,keyValsToObjectR:Hn,getParams:qn,parseUrl:ht,buildUrl:Dn,locationPluginFactory:pt,servicesPlugin:dt,hashLocationPlugin:Jn,pushStateLocationPlugin:Qn,memoryLocationPlugin:Kn,UIRouterPluginBase:Yn}),Xn=function(t,e){return t.reduce(function(t,r){return t||Qt(e[r])},!1)},ti=0,ei=function(){function t(t,e,r){var n=this;this.path=t,this.viewDecl=e,this.factory=r,this.$id=ti++,this.loaded=!1,this.getTemplate=function(t,e){return n.component?n.factory.makeComponentTemplate(t,e,n.component,n.viewDecl.bindings):n.template}}return t.prototype.load=function(){var t=this,e=se.$q,r=new fr(this.path),n=this.path.reduce(function(t,e){return ve(t,e.paramValues)},{}),i={
template:e.when(this.factory.fromConfig(this.viewDecl,n,r)),controller:e.when(this.getController(r))};return e.all(i).then(function(e){return Be.traceViewServiceEvent("Loaded",t),t.controller=e.controller,ve(t,e.template),t})},t.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!c(e))return this.viewDecl.controller;var r=se.$injector.annotate(e),n=re(e)?P(e):e;return new ir("",n,r).get(t)},t}(),ri=function(){function t(){var t=this;this._useHttp=Vt.version.minor<3,this.$get=["$http","$templateCache","$injector",function(e,r,n){return t.$templateRequest=n.has&&n.has("$templateRequest")&&n.get("$templateRequest"),t.$http=e,t.$templateCache=r,t}]}return t.prototype.useHttpService=function(t){this._useHttp=t},t.prototype.fromConfig=function(t,e,r){var n=function(t){return se.$q.when(t).then(function(t){return{template:t}})},i=function(t){return se.$q.when(t).then(function(t){return{component:t}})};return Qt(t.template)?n(this.fromString(t.template,e)):Qt(t.templateUrl)?n(this.fromUrl(t.templateUrl,e)):Qt(t.templateProvider)?n(this.fromProvider(t.templateProvider,e,r)):Qt(t.component)?i(t.component):Qt(t.componentProvider)?i(this.fromComponentProvider(t.componentProvider,e,r)):n("<ui-view></ui-view>")},t.prototype.fromString=function(t,e){return Zt(t)?t(e):t},t.prototype.fromUrl=function(t,e){return Zt(t)&&(t=t(e)),null==t?null:this._useHttp?this.$http.get(t,{cache:this.$templateCache,headers:{Accept:"text/html"}}).then(function(t){return t.data}):this.$templateRequest(t)},t.prototype.fromProvider=function(t,e,r){var n=se.$injector.annotate(t),i=re(t)?P(t):t;return new ir("",i,n).get(r)},t.prototype.fromComponentProvider=function(t,e,r){var n=se.$injector.annotate(t),i=re(t)?P(t):t;return new ir("",i,n).get(r)},t.prototype.makeComponentTemplate=function(t,e,r,n){n=n||{};var i=Vt.version.minor>=3?"::":"",o=function(t){var e=W(t);return/^(x|data)-/.exec(e)?"x-"+e:e},a=function(r){var a=r.name,u=r.type,s=o(a);if(t.attr(s)&&!n[a])return s+"='"+t.attr(s)+"'";var c=n[a]||a;if("@"===u)return s+"='{{"+i+"$resolve."+c+"}}'";if("&"===u){var f=e.getResolvable(c),l=f&&f.data,h=l&&se.$injector.annotate(l)||[];return s+"='$resolve."+c+(re(l)?"["+(l.length-1)+"]":"")+"("+h.join(",")+")'"}return s+"='"+i+"$resolve."+c+"'"},u=yt(r).map(a).join(" "),s=o(r);return"<"+s+" "+u+"></"+s+">"},t}(),ni=function(t){return ii(ee(t.bindToController)?t.bindToController:t.scope)},ii=function(t){return Object.keys(t||{}).map(function(e){return[e,/^([=<@&])[?]?(.*)/.exec(t[e])]}).filter(function(t){return Qt(t)&&re(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},oi=function(){function t(e,r){this.stateRegistry=e,this.stateService=r,h(Mt(t.prototype),this,Mt(this))}return t.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},t.prototype.state=function(t,e){return ee(t)?e=t:e.name=t,this.stateRegistry.register(e),this},t.prototype.onInvalid=function(t){return this.stateService.onInvalid(t)},t}(),ai=function(t){return function(e,r){function n(t,e){var r=new fr(t.treeChanges(o)),n=ve(wi(r),{$state$:e,$transition$:t});return se.$injector.invoke(i,this,n)}var i=e[t],o="onExit"===t?"from":"to";return i?n:void 0}},ui=function(){function t(t){this._urlListeners=[],this.$locationProvider=t;var e=Mt(t);h(e,this,e,["hashPrefix"])}return t.prototype.dispose=function(){},t.prototype.onChange=function(t){var e=this;return this._urlListeners.push(t),function(){return we(e._urlListeners)(t)}},t.prototype.html5Mode=function(){var t=this.$locationProvider.html5Mode();return(t=ee(t)?t.enabled:t)&&this.$sniffer.history},t.prototype.url=function(t,e,r){return void 0===e&&(e=!1),t&&this.$location.url(t),e&&this.$location.replace(),r&&this.$location.state(r),this.$location.url()},t.prototype._runtimeServices=function(t,e,r,n){var i=this;this.$location=e,this.$sniffer=r,t.$on("$locationChangeSuccess",function(t){return i._urlListeners.forEach(function(e){return e(t)})});var o=Mt(e),a=Mt(n);h(o,this,o,["replace","path","search","hash"]),h(o,this,o,["port","protocol","host"]),h(a,this,a,["baseHref"])},t.monkeyPatchPathParameterType=function(t){var e=t.urlMatcherFactory.type("path");e.encode=function(t){return null!=t?t.toString().replace(/(~|\/)/g,function(t){return{"~":"~~","/":"~2F"}[t]}):t},e.decode=function(t){return null!=t?t.toString().replace(/(~~|~2F)/g,function(t){return{"~~":"~","~2F":"/"}[t]}):t}},t}(),si=function(){function t(t){this._router=t,this._urlRouter=t.urlRouter}return t.prototype.$get=function(){var t=this._urlRouter;return t.update(!0),t.interceptDeferred||t.listen(),t},t.prototype.rule=function(t){var e=this;if(!Zt(t))throw new Error("'rule' must be a function");var r=function(){return t(se.$injector,e._router.locationService)},n=new Ir(r,f);return this._urlRouter.rule(n),this},t.prototype.otherwise=function(t){var e=this,r=this._urlRouter;if(te(t))r.otherwise(t);else{if(!Zt(t))throw new Error("'rule' must be a string or function");r.otherwise(function(){return t(se.$injector,e._router.locationService)})}return this},t.prototype.when=function(e,r){return(re(r)||Zt(r))&&(r=t.injectableHandler(this._router,r)),this._urlRouter.when(e,r),this},t.injectableHandler=function(t,e){return function(r){return se.$injector.invoke(e,null,{$match:r,$stateParams:t.globals.params})}},t.prototype.deferIntercept=function(t){this._urlRouter.deferIntercept(t)},t}();Vt.module("ui.router.angular1",[]);var ci=Vt.module("ui.router.init",[]),fi=Vt.module("ui.router.util",["ng","ui.router.init"]),li=Vt.module("ui.router.router",["ui.router.util"]),hi=Vt.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),pi=Vt.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),di=(Vt.module("ui.router.compat",["ui.router"]),null);gt.$inject=["$locationProvider"];var vi=function(t){return["$uiRouterProvider",function(e){var r=e.router[t];return r.$get=function(){return r},r}]};wt.$inject=["$injector","$q","$uiRouter"];var mi=function(t){return t.urlRouterProvider=new si(t)},yi=function(){return ve(di.stateProvider,{$get:function(){return di.stateService}})};_t.$inject=["$rootScope"],ci.provider("$uiRouter",gt),li.provider("$urlRouter",["$uiRouterProvider",mi]),fi.provider("$urlService",vi("urlService")),fi.provider("$urlMatcherFactory",["$uiRouterProvider",function(){return di.urlMatcherFactory}]),fi.provider("$templateFactory",function(){return new ri}),hi.provider("$stateRegistry",vi("stateRegistry")),hi.provider("$uiRouterGlobals",vi("globals")),hi.provider("$transitions",vi("transitionService")),hi.provider("$state",["$uiRouterProvider",yi]),hi.factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),pi.factory("$view",function(){return di.viewService}),pi.service("$trace",function(){return Be}),pi.run(_t),fi.run(["$urlMatcherFactory",function(t){}]),hi.run(["$state",function(t){}]),li.run(["$urlRouter",function(t){}]),ci.run(wt);var gi,wi=function(t){return t.getTokens().filter(te).map(function(e){var r=t.getResolvable(e);return[e,"NOWAIT"===t.getPolicy(r).async?r.promise:r.data]}).reduce(C,{})};gi=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){function u(){var t=p();l&&l(),f&&(l=f.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(c.attr,t.href)}var s,c=Rt(i),f=a[1]||a[0],l=null,h={},p=function(){return bt(r,i,h)},d=$t(o.uiSref);h.uiState=d.state,h.uiStateOpts=o.uiSrefOpts?n.$eval(o.uiSrefOpts):{},d.paramExpr&&(n.$watch(d.paramExpr,function(t){h.uiStateParams=ve({},t),u()},!0),h.uiStateParams=ve({},n.$eval(d.paramExpr))),u(),n.$on("$destroy",t.stateRegistry.onStatesChanged(u)),n.$on("$destroy",t.transitionService.onSuccess({},u)),c.clickable&&(s=Et(i,r,e,c,p),Ct(i,n,s,h.uiStateOpts))}}}];var _i;_i=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){function u(){var t=d();h&&h(),f&&(h=f.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(c.attr,t.href)}var s,c=Rt(i),f=a[1]||a[0],h=null,p={},d=function(){return bt(r,i,p)},v=["uiState","uiStateParams","uiStateOpts"],m=v.reduce(function(t,e){return t[e]=l,t},{});v.forEach(function(t){p[t]=o[t]?n.$eval(o[t]):null,o.$observe(t,function(e){m[t](),m[t]=n.$watch(e,function(e){p[t]=e,u()},!0)})}),u(),n.$on("$destroy",t.stateRegistry.onStatesChanged(u)),n.$on("$destroy",t.transitionService.onSuccess({},u)),c.clickable&&(s=Et(i,r,e,c,d),Ct(i,n,s,p.uiStateOpts))}}}];var $i;$i=["$state","$stateParams","$interpolate","$uiRouter",function(t,e,r,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,i,o){function a(t){t.promise.then(s,l)}function u(e,r,n){var o=t.get(e,St(i)),a={state:o||{name:e},params:r,activeClass:n};return p.push(a),function(){we(p)(a)}}function s(){var r=function(t){return t.split(/\s/).filter(f)},n=function(t){return t.map(function(t){return t.activeClass}).map(r).reduce(Ce,[])},o=n(p).concat(r(c)).reduce(ke,[]),a=n(p.filter(function(e){return t.includes(e.state.name,e.params)})),u=!!p.filter(function(e){return t.is(e.state.name,e.params)}).length,s=u?r(c):[],l=a.concat(s).reduce(ke,[]),h=o.filter(function(t){return!ge(l,t)});e.$evalAsync(function(){l.forEach(function(t){return i.addClass(t)}),h.forEach(function(t){return i.removeClass(t)})})}var c,h,p=[];c=r(o.uiSrefActiveEq||"",!1)(e);try{h=e.$eval(o.uiSrefActive)}catch(t){}h=h||r(o.uiSrefActive||"",!1)(e),ee(h)&&de(h,function(t,r){if(te(t)){var n=$t(t);u(n.state,e.$eval(n.paramExpr),r)}}),this.$$addStateInfo=function(t,e){if(!(ee(h)&&p.length>0)){var r=u(t,e,h);return s(),r}},e.$on("$stateChangeSuccess",s),e.$on("$destroy",n.transitionService.onStart({},a)),n.globals.transition&&a(n.globals.transition),s()}]}}],Vt.module("ui.router.state").directive("uiSref",gi).directive("uiSrefActive",$i).directive("uiSrefActiveEq",$i).directive("uiState",_i),Pt.$inject=["$state"],kt.$inject=["$state"],Vt.module("ui.router.state").filter("isState",Pt).filter("includedByState",kt);var Si;Si=["$view","$animate","$uiViewScroll","$interpolate","$q",function(t,e,r,n,i){function o(t,r){return{enter:function(t,r,n){Vt.version.minor>2?e.enter(t,null,r).then(n):e.enter(t,null,r,n)},leave:function(t,r){Vt.version.minor>2?e.leave(t).then(r):e.leave(t,r)}}}function a(t,e){return t===e}var u={$cfg:{viewDecl:{$context:t._pluginapi._rootViewContext()}},$uiView:{}},s={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(e,c,f){return function(e,c,l){function h(t){(!t||t instanceof ei)&&(a(S,t)||(Be.traceUIViewConfigUpdated(E,t&&t.viewDecl&&t.viewDecl.$context),S=t,d(t)))}function p(){if(v&&(Be.traceUIViewEvent("Removing (previous) el",v.data("$uiView")),v.remove(),v=null),y&&(Be.traceUIViewEvent("Destroying scope",E),y.$destroy(),y=null),m){var t=m.data("$uiViewAnim");Be.traceUIViewEvent("Animate out",t),$.leave(m,function(){t.$$animLeave.resolve(),v=null}),v=m,m=null}}function d(t){var n=e.$new(),o=i.defer(),a=i.defer(),u={$cfg:t,$uiView:E},s={$animEnter:o.promise,$animLeave:a.promise,$$animLeave:a};n.$emit("$viewContentLoading",R);var l=f(n,function(t){t.data("$uiViewAnim",s),t.data("$uiView",u),$.enter(t,c,function(){o.resolve(),y&&y.$emit("$viewContentAnimationEnded"),(Qt(_)&&!_||e.$eval(_))&&r(t)}),p()});m=l,y=n,y.$emit("$viewContentLoaded",t||S),y.$eval(w)}var v,m,y,g,w=l.onload||"",_=l.autoscroll,$=o(l,e),S=void 0,b=c.inheritedData("$uiView")||u,R=n(l.uiView||l.name||"")(e)||"$default",E={$type:"ng1",id:s.count++,name:R,fqn:b.$uiView.fqn?b.$uiView.fqn+"."+R:R,config:null,configUpdated:h,get creationContext(){var t=qt("$cfg.viewDecl.$context")(b),e=qt("$uiView.creationContext")(b);return t||e}};Be.traceUIViewEvent("Linking",E),c.data("$uiView",{$uiView:E}),d(),g=t.registerUIView(E),e.$on("$destroy",function(){Be.traceUIViewEvent("Destroying/Unregistering",E),g()})}}};return s}],Ot.$inject=["$compile","$controller","$transitions","$view","$q","$timeout"];var bi="function"==typeof Vt.module("ui.router").component,Ri=0;Vt.module("ui.router.state").directive("uiView",Si),Vt.module("ui.router.state").directive("uiView",Ot),Vt.module("ui.router.state").provider("$uiViewScroll",jt);t.default="ui.router",t.core=Zn,t.watchDigests=_t,t.getLocals=wi,t.getNg1ViewConfigFactory=vt,t.ng1ViewsBuilder=mt,t.Ng1ViewConfig=ei,t.StateProvider=oi,t.UrlRouterProvider=si,t.fromJson=le,t.toJson=he,t.copy=pe,t.forEach=de,t.extend=ve,t.equals=me,t.identity=f,t.noop=l,t.createProxyFunctions=h,t.inherit=ye,t.inArray=ge,t._inArray=p,t.removeFrom=we,t._removeFrom=d,t.pushTo=_e,t._pushTo=v,t.deregAll=$e,t.defaults=m,t.mergeR=Se,t.ancestors=y,t.pick=g,t.omit=w,t.pluck=_,t.filter=$,t.find=S,t.mapObj=be,t.map=b,t.values=Re,t.allTrueR=Ee,t.anyTrueR=Te,t.unnestR=Ce,t.flattenR=Pe,t.pushR=R,t.uniqR=ke,t.unnest=Oe,t.flatten=xe,t.assertPredicate=je,t.assertMap=Ie,t.assertFn=E,t.pairs=Ve,t.arrayTuples=T,t.applyPairs=C,t.tail=P,t._extend=x,t.silenceUncaughtInPromise=Ae,t.silentRejection=He,t.notImplemented=ue,t.services=se,t.Glob=Gt,t.curry=r,t.compose=n,t.pipe=i,t.prop=At,t.propEq=Ht,t.parse=qt,t.not=Dt,t.and=o,t.or=a,t.all=Nt,t.any=Ft,t.is=Ut,t.eq=Lt,t.val=Mt,t.invoke=u,t.pattern=s,t.isUndefined=Jt,t.isDefined=Qt,t.isNull=Kt,t.isNullOrUndefined=Yt,t.isFunction=Zt,t.isNumber=Xt,t.isString=te,t.isObject=ee,t.isArray=re,t.isDate=ne,t.isRegExp=ie,t.isState=oe,t.isInjectable=c,t.isPromise=ae,t.Queue=qe,t.maxLength=G,t.padString=B,t.kebobString=W,t.functionToString=z,t.fnToString=J,t.stringify=Q,t.beforeAfterSubstr=mr,t.splitOnDelim=K,t.joinNeighborsR=Y,t.Trace=Ge,t.trace=Be,t.Param=tr,t.ParamTypes=yr,t.StateParams=wr,t.ParamType=Ye,t.PathNode=er,t.PathUtils=rr,t.resolvePolicies=or,t.defaultResolvePolicy=nr,t.Resolvable=ir,t.NATIVE_INJECTOR_TOKEN=cr,t.ResolveContext=fr,t.resolvablesBuilder=nt,t.StateBuilder=Rr,t.StateObject=Bt,t.StateMatcher=Er,t.StateQueueManager=Tr,t.StateRegistry=Cr,t.StateService=En,t.TargetState=We,t.HookBuilder=Ke,t.matchState=H,t.RegisteredHook=Qe,t.makeEvent=q,t.Rejection=Ne,t.Transition=pr,t.TransitionHook=Je,t.TransitionEventType=_n,t.defaultTransOpts=bn,t.TransitionService=Rn,t.UrlMatcher=Or,t.UrlMatcherFactory=xr,t.UrlRouter=Dr,t.UrlRuleFactory=jr,t.BaseUrlRule=Ir,t.UrlService=zr,t.ViewService=Nr,t.UIRouterGlobals=Fr,t.UIRouter=Qr,t.$q=Tn,t.$injector=On,t.BaseLocationServices=Nn,t.HashLocationService=Un,t.MemoryLocationService=Mn,t.PushStateLocationService=Bn,t.MemoryLocationConfig=Wn,t.BrowserLocationConfig=zn,t.splitHash=jn,t.splitQuery=In,t.splitEqual=Vn,t.trimHashVal=An,t.keyValsToObjectR=Hn,t.getParams=qn,t.parseUrl=ht,t.buildUrl=Dn,t.locationPluginFactory=pt,t.servicesPlugin=dt,t.hashLocationPlugin=Jn,t.pushStateLocationPlugin=Qn,t.memoryLocationPlugin=Kn,t.UIRouterPluginBase=Yn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=angular-ui-router.min.js.map