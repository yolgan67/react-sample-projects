(this["webpackJsonpdigital-clock"]=this["webpackJsonpdigital-clock"]||[]).push([[0],{10:function(n,t,e){},13:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),c=e(3),a=e.n(c),i=(e(10),e(5)),s=e(4),u=e.n(s),l=["HH:mm:ss","LT","LTS","L","l","LL"];var d={getRandomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},getRandomDarkColor:function(){return function(){var n=String("#"+Math.random().toString(16).slice(2,8).toUpperCase()).replace(/[^0-9a-f]/gi,"");n.length<6&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var t,e,r="#";for(e=0;e<3;e++)t=parseInt(n.substr(2*e,2),16),r+=("00"+(t=Math.round(Math.min(Math.max(0,t+-.25*t),255)).toString(16))).substr(t.length);return r}()},getRandomClockFormat:function(n){return u()().format(function(n){return l[n]||l[0]}(n))},maxFormats:l.length};var f=e(1);var m=function(){var n=Object(r.useState)({}),t=Object(i.a)(n,2),e=t[0],o=t[1],c=function(){var n=function(){var n=e.currentIndex+1||0;return n===d.maxFormats&&(n=0),n}();return{style:{color:d.getRandomColor(),background:d.getRandomDarkColor()},info:d.getRandomClockFormat(n),currentIndex:n}};function a(){o(c())}return Object(r.useEffect)((function(){return a()}),[]),function(n,t){var e=Object(r.useRef)();Object(r.useEffect)((function(){e.current=n}),[n]),Object(r.useEffect)((function(){if(null!==t){var n=setInterval((function(){e.current()}),t);return function(){return clearInterval(n)}}}),[t])}((function(){return o({style:e.style,info:d.getRandomClockFormat(e.currentIndex),currentIndex:e.currentIndex})}),1e3),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("p",{id:"instruction",children:"Click on clock to change formats"}),Object(f.jsx)("div",{className:"outer",children:Object(f.jsx)("div",{className:"inner",children:Object(f.jsx)("div",{className:"clock-dial",style:e.style,onClick:function(){return a()},children:Object(f.jsx)("span",{className:"time unselectable",children:e.info})})})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.7aec8326.chunk.js.map