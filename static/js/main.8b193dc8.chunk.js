(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports={panel:"styles_panel__3tlwJ",shuffleButton:"styles_shuffleButton__c20Wy"}},18:function(e,t,n){e.exports={game:"styles_game__1zvgC",winGame:"styles_winGame__ByKjP",rainbow:"styles_rainbow__5C7KC"}},19:function(e,t,n){e.exports={main:"styles_main__mlelH",octicon:"styles_octicon__3nJoe"}},38:function(e,t,n){e.exports={board:"styles_board__1DbXX"}},39:function(e,t,n){e.exports={chip:"styles_chip__1-bh1"}},40:function(e,t,n){e.exports={bar:"styles_bar__Mf98z",blinker:"styles_blinker__1Miom"}},41:function(e,t,n){e.exports=n(91)},88:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),i=n.n(c),o=n(8),s=n(32),u=n(7),l="app/data/SET_CHIPS",f="app/data/SET_IS_WON",p=new u.a({positions:[],isWon:!1});var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case l:var n=t.chips;return e.set("chips",n);case f:var a=t.value;return e.set("isWon",a);default:return e}},v=Object(o.c)({data:h}),b=function(){var e=[s.a],t=o.d.apply(void 0,[o.a.apply(void 0,e)].concat([]));return Object(o.e)(v,{},t)},m=n(1),y=n(2),d=n(4),O=n(3),j=n(5),g=n(6),_=n(34),E=n(35),w=n.n(E),C=n(36),k=n.n(C),x=n(37),W=n.n(x);function M(e){var t=u.a({});if(e){for(var n=0;n<15;++n)t=t.set(n+1,new u.a({x:n%4,y:Math.floor(n/4)}));t=t.set(0,new u.a({x:3,y:3}))}else for(var a=0;a<16;++a)t=t.set(a,new u.a({x:a%4,y:Math.floor(a/4)}));return t}function N(e){var t=[];e.forEach(function(e,n){t[e.get("y")]||(t[e.get("y")]=[]),t[4*e.get("y")+e.get("x")]=n});for(var n=0,a=Math.sqrt(t.length),r=0,c=0,i=0;i<t.length;++i)if(i%a===0&&(r+=1),0!==t[i])for(var o=i+1;o<t.length;++o)t[i]>t[o]&&0!==t[o]&&(n+=1);else c=r;return a%2===0?c%2===0?n%2===0:n%2!==0:n%2===0}var S=M(),B=M(!0);function q(e){return{type:l,chips:e}}function J(e){return!(!e.equals(S)&&!e.equals(B))}function z(){return function(e,t){var n,a=function(){var e=new u.a,t=k()(0,16);t=W()(t);for(var n=0;n<4;++n)for(var a=0;a<4;++a){var r=t.pop();e=e.set(r,new u.a({x:a,y:n}))}return e};do{n=a()}while(J(n)||!N(n));e(q(n)),e(A(!1))}}function A(e){return{type:f,value:e}}var G=n(17),D=n.n(G),H=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).handleShuffle=function(){(0,n.props.shuffleChips)()},n.handleMakeWin=function(e){e.preventDefault(),(0,n.props.makeWin)()},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:D.a.panel},r.a.createElement("button",{onClick:this.handleShuffle,onContextMenu:this.handleMakeWin,className:D.a.shuffleButton},"Shuffle"))}}]),t}(r.a.Component);var I=Object(g.b)(function(e,t){return{}},{shuffleChips:z,makeWin:function(){return function(e,t){e(q(M(!0))),e(A(!0))}}})(H),K=n(38),P=n.n(K),T=n(39),X=n.n(T),R=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).handleMoveChip=function(){var e=n.props;(0,e.moveChip)(e.value)},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.x,a=e.y;return r.a.createElement("div",{className:X.a.chip,style:{left:5+55*n,top:5+55*a},onClick:this.handleMoveChip},t)}}]),t}(r.a.Component);var U=Object(g.b)(function(e,t){return{}},{moveChip:function(e){return function(t,n){var a=n().data.get("chips"),r=a.get(e),c=a.get(0);(1===Math.abs(c.get("x")-r.get("x"))&&c.get("y")===r.get("y")||1===Math.abs(c.get("y")-r.get("y"))&&c.get("x")===r.get("x"))&&t(q(a=a.set(0,r).set(e,c))),t(A(J(a)))}}})(R),Y=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"renderChips",value:function(){var e=this.props.chips,t=[];return e.forEach(function(e,n){0!==n&&t.push(r.a.createElement(U,{key:n,value:n,x:e.get("x"),y:e.get("y")}))}),t}},{key:"render",value:function(){return r.a.createElement("div",{className:P.a.board},this.renderChips())}}]),t}(r.a.Component);var F=Object(g.b)(function(e,t){return{chips:e.data.get("chips")}},{})(Y),L=n(18),Q=n.n(L),V=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.isWon;return r.a.createElement("div",{className:w()(Q.a.game,Object(_.a)({},Q.a.winGame,e))},r.a.createElement(F,null),r.a.createElement(I,null))}}]),t}(r.a.Component);var Z=Object(g.b)(function(e,t){return{isWon:e.data.get("isWon")}},{})(V),$=n(40),ee=n.n($),te=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.isWon;return r.a.createElement("div",{className:ee.a.bar},e?r.a.createElement("span",null,"YOU WON!!!"):r.a.createElement("span",null,"\xa0"))}}]),t}(r.a.Component);var ne=Object(g.b)(function(e,t){return{isWon:e.data.get("isWon")}},{})(te),ae=n(19),re=n.n(ae),ce=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:re.a.main},r.a.createElement("a",{href:"https://github.com/avin/react-game15",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:re.a.octicon,viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))))}}]),t}(r.a.Component),ie=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.store;return r.a.createElement(g.a,{store:e},r.a.createElement("div",{className:"filler"}),r.a.createElement(ne,null),r.a.createElement(Z,null),r.a.createElement("div",{className:"filler-2"}),r.a.createElement(ce,null))}}]),t}(r.a.Component);n(88);var oe=b();oe.dispatch(z());var se=document.querySelector("#root");i.a.render(r.a.createElement(ie,{store:oe}),se),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.8b193dc8.chunk.js.map