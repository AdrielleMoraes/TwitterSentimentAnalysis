(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{195:function(e,t,c){},202:function(e,t,c){},226:function(e,t,c){},228:function(e,t,c){},229:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(28),r=c.n(s),i=(c(195),c(55)),j=c(268),l=c(263),o=c(39),b=c(6),d=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(b.jsx)(j.a,{onSubmit:function(){return e.onClickSearch(n)},loading:e.loadingAPIResponse,children:Object(b.jsxs)("div",{className:"teste",children:[Object(b.jsx)(l.a,{required:!0,placeholder:"Machine Learning, Artificial Intelligence, Programming...",onChange:function(e){s(e.target.value)}}),Object(b.jsx)("button",{type:"submit",className:"buttontest",children:Object(b.jsx)(o.a,{name:"search"})})]})})},h=c(94),u=c(169),x=c(265),O=c(270),p=c(266),f=c(264),v=c(269),m=c(271),g=function(e){var t=null;return e.hashtags.length>0&&(t=Object(b.jsxs)("h4",{children:["Hashtags: ",e.hashtags.map((function(e){return Object(b.jsxs)("div",{className:"hashtag",children:["#",e," "]})}))]})),Object(b.jsxs)(m.a.Item,{children:[Object(b.jsx)(m.a.Content,{floated:"right"}),Object(b.jsxs)(m.a.Content,{children:[Object(b.jsxs)(m.a.Header,{children:[e.name," ",Object(b.jsx)("a",{target:"blank",href:"https://twitter.com/user/status/"+e.id,children:"Visit"})]}),Object(b.jsxs)(m.a.Description,{children:["Created at: ",e.created_at," - Liked by ",e.favourite_count]}),Object(b.jsx)("p",{}),Object(b.jsx)("p",{children:e.text}),Object(b.jsxs)("h4",{children:[Object(b.jsxs)("p",{children:["Classification Vader: ",e.vader]}),Object(b.jsxs)("p",{children:["Classification BOW: ",e.bow]})]}),t]})]})},w=(c(202),function(e){return Object(b.jsxs)("div",{className:"TweetsList",children:[Object(b.jsx)("h1",{children:"Tweets"}),Object(b.jsxs)("p",{children:["Showing ",e.APIresponse.tweets.length," results"]}),Object(b.jsxs)("p",{children:["Results for query: ",e.APIresponse.query]}),Object(b.jsx)(m.a,{selection:!0,divided:!0,verticalAlign:"middle",children:e.APIresponse.tweets.map((function(e){return Object(b.jsx)(g,{name:e.author_name,id:e.id,created_at:e.created_at,text:e.text,vader:e.vader,bow:e.bow,hashtags:e.hashtags,favourite_count:e.favourite_count},e.id)}))})]})}),y=c(163),C=c(164),I=c(170),k=c(167),P=(c(203),c(66)),S=function(e){Object(I.a)(c,e);var t=Object(k.a)(c);function c(){return Object(y.a)(this,c),t.apply(this,arguments)}return Object(C.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("h1",{children:"Tweets Distribution"}),Object(b.jsxs)(P.e,{height:300,width:300,children:[Object(b.jsx)(P.b,{data:[{x:0,y:8},{x:1,y:5},{x:2,y:4},{x:3,y:9},{x:4,y:1},{x:5,y:7},{x:6,y:6},{x:7,y:3},{x:8,y:2},{x:9,y:0}]}),Object(b.jsx)(P.c,{}),Object(b.jsx)(P.a,{}),Object(b.jsx)(P.d,{}),Object(b.jsx)(P.f,{})]})]})}}]),c}(a.Component);function A(e){var t=e.children,c=e.value,a=e.index,n=Object(u.a)(e,["children","value","index"]);return Object(b.jsx)("div",Object(h.a)(Object(h.a)({role:"tabpanel",hidden:c!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a)},n),{},{children:c===a&&Object(b.jsx)(v.a,{p:3,children:Object(b.jsx)(f.a,{children:t})})}))}function N(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var T=Object(x.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:"".concat(100,"%")},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}}));function R(e){var t=T(),c=n.a.useState(0),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(b.jsxs)("div",{className:t.root,children:[Object(b.jsxs)(O.a,{orientation:"vertical",variant:"scrollable",value:s,onChange:function(e,t){r(t)},"aria-label":"Vertical tabs example",className:t.tabs,children:[Object(b.jsx)(p.a,Object(h.a)({className:t.tab,label:"Tweets"},N(0))),Object(b.jsx)(p.a,Object(h.a)({className:t.tab,label:"Distribution"},N(1)))]}),Object(b.jsx)(A,{value:s,index:0,children:e.showAPIResponse?Object(b.jsx)(w,{APIresponse:e.data}):Object(b.jsx)("p",{children:"Enter items on search bar"})}),Object(b.jsx)(A,{value:s,index:1,children:e.showAPIResponse?Object(b.jsx)(S,{}):Object(b.jsx)("p",{children:"Enter items on search bar"})})]})}var _=function(e){var t=Object(a.useState)({tweets:[]}),c=Object(i.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),j=Object(i.a)(r,2),l=j[0],o=j[1],h=Object(a.useState)(!1),u=Object(i.a)(h,2),x=u[0],O=u[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{loadingAPIResponse:l,onClickSearch:function(e){o(!0),function(e){fetch("https://tweet-analysis-app.herokuapp.com/api/tweets?query=".concat(e)).then((function(e){return e.json().then((function(e){O(!0),s(e),o(!1)}))}))}(e)}}),Object(b.jsx)(R,{data:n,showAPIResponse:x})]})},D=c(274),L=(c(226),function(e){return Object(b.jsx)("div",{className:"TopMenu",children:Object(b.jsxs)(D.a,{className:"Breadcrumb",size:"huge",children:[Object(b.jsx)("a",{href:"https://adriellemoraes.com/",children:"Home"}),Object(b.jsx)(D.a.Divider,{}),Object(b.jsx)(D.a.Section,{active:!0,children:"Tweets"})]})})}),q=c(267);var B=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(L,{}),Object(b.jsx)(q.a,{children:Object(b.jsx)(_,{})})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,276)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(227),c(228);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),F()}},[[229,1,2]]]);
//# sourceMappingURL=main.9650b697.chunk.js.map