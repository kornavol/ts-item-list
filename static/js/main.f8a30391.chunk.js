(this["webpackJsonpcards-list-concular"]=this["webpackJsonpcards-list-concular"]||[]).push([[0],{76:function(t,e,n){},77:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(58),c=n.n(r),o=(n(76),n(118)),s=(n(77),n(52)),l=n.n(s),u=n(59),d=n(9),m=n(126),j=n(121),p=n(125),h=n(122),b=n(11),x=n(124),g=n(119),f=Object(g.a)((function(t){return{root:{},skeleton:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:"100%",margin:"1vw",overflow:"hidden"},skeletonImg:{boxSizing:"content-box",width:"100%",display:"flex",justifyContent:"center"}}})),O=Object(g.a)((function(t){return{root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",margin:"1vw",boxShadow:"0px 0px 5px 2px rgba(0,0,0,0.3)"},img:{boxSizing:"border-box",width:"100%"}}})),v=n.p+"static/media/no-img-layout.097c93a9.png",y=n.p+"static/media/no-results.7c9a412b.png",w=Object(g.a)((function(t){return{root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:"100%",margin:"1vw",overflow:"hidden"},img:{maxWidth:400,width:"40%",marginTop:"2rem"},message:{fontFamily:"Lucida Console, Times, Sans-serif ",margin:"1rem"},text:{color:"red"}}})),C=n(2),k=function(t){var e=t.text,n=w();return Object(C.jsxs)(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:n.root,children:[Object(C.jsx)("img",{className:n.img,src:y,alt:"no-results"}),Object(C.jsxs)("h4",{className:n.message,children:["No result found for ",Object(C.jsx)("span",{className:n.text,children:e})," product"]})]})},S=function(t){var e,n=t.item,a=O(),i=null===(e=n.images)||void 0===e?void 0:e.map((function(t,e){return Object(C.jsx)("img",{src:null===t||void 0===t?void 0:t.object_url,alt:"product",className:a.img},e)}));return Object(C.jsx)(x.a,{item:!0,xs:12,sm:6,md:3,children:Object(C.jsxs)(o.a.div,{className:a.root,initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[i||Object(C.jsx)("img",{src:v,alt:"no-image",className:a.img}),Object(C.jsx)("p",{children:n.product_name})]})},n.id)},N=function(t){var e=t.items,n=t.meta,a=t.searchTerm,i=f();console.log(e);var r=Object(b.a)(Array(n.limit)).map((function(t,e){return Object(C.jsx)(x.a,{item:!0,xs:12,sm:6,md:3,children:Object(C.jsxs)("div",{className:i.skeleton,children:[Object(C.jsx)("div",{className:i.skeletonImg,children:Object(C.jsx)(p.a,{variant:"rectangular",width:300,height:300})}),Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{variant:"text",width:300,height:40,sx:{marginBottom:"-5px"}}),Object(C.jsx)(p.a,{variant:"text",width:150,height:40})]})]})},e)})),c=e.filter((function(t){return""===a||t.product_name.toLowerCase().includes(a.toLowerCase())?t:void 0})).map((function(t){return Object(C.jsx)(S,{item:t},t.id)}));return Object(C.jsx)(x.a,{container:!0,spacing:1,children:e.length>0?c.length>0?c:Object(C.jsx)(k,{text:a}):r})},I=n(5),L=n(10),_=n(114),D=n(120),T=Object(L.a)("div")((function(t){var e=t.theme;return Object(I.a)({position:"relative",border:"1px solid #808080",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.a)(e.palette.common.white,.25)},margin:"10px 5% 10px auto"},e.breakpoints.down("md"),{marginLeft:"auto",marginRight:"auto",width:"50%"})})),M=Object(L.a)("div")((function(t){return{padding:t.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),B=Object(L.a)(D.a)((function(t){var e=t.theme;return{color:"inherit","& .MuiInputBase-input":{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),transition:e.transitions.create("width"),width:"100%"}}})),E=n(64),J=n.n(E),R=function(t){var e=t.value,n=t.setValue;return Object(C.jsxs)(T,{children:[Object(C.jsx)(M,{children:Object(C.jsx)(J.a,{})}),Object(C.jsx)(B,{placeholder:"Search by product name",inputProps:{"aria-label":"search"},value:e,onChange:function(t){return n(t.target.value)}})]})},z=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],r=Object(a.useState)({cursor:0,limit:4}),c=Object(d.a)(r,2),o=c[0],s=c[1],b=Object(a.useState)(!0),x=Object(d.a)(b,2),g=x[0],f=x[1],O=Object(a.useState)(!1),v=Object(d.a)(O,2),y=v[0],w=v[1],k=Object(a.useState)(""),S=Object(d.a)(k,2),I=S[0],L=S[1];function _(t,e){var n=t.product_name.split(" "),a=e.product_name.split(" ");return n[0]===a[0]?n[1]-a[1]:0}function D(t){return T.apply(this,arguments)}function T(){return T=Object(u.a)(l.a.mark((function t(e){var n,a,r,c,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://asterix-dev.concular.com/material-service/marketplace/mp",a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},t.next=4,fetch("https://asterix-dev.concular.com/material-service/marketplace/mp",a);case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,w((function(){return!1})),o=null===(n=c.data)||void 0===n?void 0:n.data,u=c.data.meta,o.sort((function(t,e){return t.product_name.localeCompare(e.product_name)})).sort(_),f(u.hasMoreData),delete u.hasMoreData,i((function(t){return t.concat(o)})),s((function(t){return Object.assign(t,u)}));case 16:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}return Object(a.useEffect)((function(){D(o)}),[]),Object(C.jsxs)(m.a,{maxWidth:"1480px",sx:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(C.jsx)(R,{value:I,setValue:L}),Object(C.jsx)(N,{items:n,meta:o,searchTerm:I}),g?n.length>0?y?Object(C.jsx)(h.a,{style:{margin:"15px"},loading:!0,loadingIndicator:"Loading...",variant:"outlined",children:"Fetch data"}):Object(C.jsx)(j.a,{style:{margin:"15px"},variant:"contained",onClick:function(){w(!0),D(o),L("")},children:"Load more"}):Object(C.jsx)(p.a,{variant:"rectangular",width:100,height:33}):null]})},A=function(){return Object(C.jsx)("div",{className:"App-root",children:Object(C.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},style:{width:"100%"},children:Object(C.jsx)(z,{})})})};c.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.f8a30391.chunk.js.map