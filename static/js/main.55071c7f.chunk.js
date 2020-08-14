(this["webpackJsonpbooks-store"]=this["webpackJsonpbooks-store"]||[]).push([[0],{200:function(e,t,a){e.exports=a(384)},210:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"addBookToCart",(function(){return h})),a.d(r,"removeBookFromCart",(function(){return _}));var n={};a.r(n),a.d(n,"setFilterBy",(function(){return Q})),a.d(n,"setSearchQuery",(function(){return A}));var i=a(0),o=a.n(i),c=a(31),l=a.n(c),u=a(26),g=(a(209),a(210),a(167)),m=a(168),s=a(187),d=a(189),p=a(19),b=a(21),h=function(e){return{type:"ADD_BOOK_TO_CART",payload:e}},_=function(e){return{type:"REMOVE_BOOK_FROM_CART",payload:e}},f=a(395),E=a(385),k=a(188),y=a(397),O=a(394),j=function(e){var t=e.title,a=e.id,r=e.image,n=e.removeBookFromCart;return o.a.createElement(f.a,{selection:!0,divided:!0,verticalAlign:"middle"},o.a.createElement(f.a.Item,null,o.a.createElement(f.a.Content,{floated:"right"},o.a.createElement(E.a,{onClick:n.bind(null,a),color:"red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),o.a.createElement(k.a,{avatar:!0,src:r}),o.a.createElement(f.a.Content,null,t)))},v=function(e){var t=e.totalPrice,a=e.quantityBooks,r=e.items;return o.a.createElement(y.a,null,o.a.createElement(y.a.Item,{name:"browse"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u043d\u0438\u0433"),o.a.createElement(y.a.Menu,{position:"right"},o.a.createElement(y.a.Item,{name:"signup"},"\u0418\u0442\u043e\u0433\u043e: \xa0 ",o.a.createElement("b",null,t),"\xa0 \u0433\u0440\u043d."),o.a.createElement(O.a,{trigger:o.a.createElement(y.a.Item,{name:"help"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 (",o.a.createElement("b",null,a),")"),content:r.map((function(e){return o.a.createElement(j,e)})),on:"click",hideOnScroll:!0})))},B=a(182),C=a.n(B),R=Object(u.b)((function(e){var t=e.cart;return{totalPrice:t.goods.reduce((function(e,t){return e+t.price}),0),quantityBooks:t.goods.length,items:C()(t.goods,(function(e){return e.id}))}}),(function(e){return Object(p.a)({},Object(b.b)(r,e))}))(v),T=a(392),w=a(396),I=function(e){var t=e.title,a=e.author,r=e.image,n=e.price,i=e.addBookToCart,c=e.quantityBooks;return o.a.createElement(w.a,null,o.a.createElement(k.a,{src:r,wrapped:!0,ui:!1}),o.a.createElement(w.a.Content,null,o.a.createElement(w.a.Header,null,t),o.a.createElement(w.a.Meta,null,o.a.createElement("span",{className:"date"},a))),o.a.createElement(w.a.Content,{extra:!0},o.a.createElement("span",null,n," \u0433\u0440\u043d.")),o.a.createElement(E.a,{onClick:i.bind(null,e)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 ",c>0&&"(".concat(c,")")))},S=Object(u.b)((function(e,t){var a=e.cart,r=t.id;return{quantityBooks:a.goods.reduce((function(e,t){return e+(t.id===r?1:0)}),0)}}),(function(e){return Object(p.a)({},Object(b.b)(r,e))}))(I),Q=function(e){return{type:"SET_FILTER_BY",payload:e}},A=function(e){return{type:"SET_SEARCH_QUERY",payload:e}},F=a(391),L=function(e){var t=e.setFilterBy,a=e.filterBy,r=e.searchQuery,n=e.setSearchQuery;return o.a.createElement(y.a,{secondary:!0},o.a.createElement(y.a.Item,{active:"all"===a,onClick:t.bind(null,"all")},"\u0412\u0441\u0435"),o.a.createElement(y.a.Item,{active:"price_high"===a,onClick:t.bind(null,"price_high")},"\u0426\u0435\u043d\u0430(\u0434\u043e\u0440\u043e\u0433\u0438\u0435)"),o.a.createElement(y.a.Item,{active:"price_low"===a,onClick:t.bind(null,"price_low")},"\u0426\u0435\u043d\u0430(\u0434\u0435\u0448\u0435\u0432\u044b\u0435)"),o.a.createElement(y.a.Item,{active:"author"===a,onClick:t.bind(null,"author")},"\u0410\u0432\u0442\u043e\u0440"),o.a.createElement(y.a.Item,{active:"alphabet"===a,onClick:t.bind(null,"alphabet")},"\u0412 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435"),o.a.createElement(y.a.Item,null,o.a.createElement(F.a,{icon:"search",onChange:function(e){return n(e.target.value)},value:r,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441..."})))},M=Object(u.b)((function(e){var t=e.filter;return{filterBy:t.filterBy,searchQuery:t.searchQuery}}),(function(e){return Object(p.a)({},Object(b.b)(n,e))}))(L),K=function(e){var t=e.books,a=e.isReady;return o.a.createElement(T.a,null,o.a.createElement(R,null),o.a.createElement(M,null),o.a.createElement("div",{className:"margTop"},o.a.createElement(w.a.Group,{itemsPerRow:4},a?t.map((function(e,t){return o.a.createElement(S,Object.assign({key:t},e))})):"Loading...")))},D=a(61),q=a.n(D),x=a(183),P=a.n(x),Y=function(){return P.a.get("/books.json")},H={isReady:!0,books:[{id:0,title:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",author:"\u0414\u044d\u043d \u0411\u0440\u0430\u0443\u043d",image:"/images/book_image.jpg",price:710,rating:3},{id:1,title:"1984",author:"\u0414\u0436\u043e\u0440\u0434\u0436 \u041e\u0440\u0443\u044d\u043b\u043b",image:"/images/book_image_1.jpg",price:415,rating:5},{id:2,title:"\u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u0432 \u0442\u0443\u043c\u0430\u043d\u0435",author:"\u0414\u043e\u043d\u0430\u0442\u043e \u041a\u0430\u0440\u0440\u0438\u0437\u0438",image:"/images/book_image_2.jpg",price:464,rating:4},{id:3,title:"\u0418\u043c\u043f\u0435\u0440\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0443\u043c\u0435\u0440\u0435\u0442\u044c",author:"\u041c\u0438\u0445\u0430\u0438\u043b \u0417\u044b\u0433\u0430\u0440\u044c",image:"/images/book_image_3.jpg",price:741,rating:3},{id:4,title:"\u0417\u0435\u043c\u043d\u043e\u0435 \u043f\u0440\u0438\u0442\u044f\u0436\u0435\u043d\u0438\u0435",author:"\u0422\u0430\u0442\u044c\u044f\u043d\u0430 \u0423\u0441\u0442\u0438\u043d\u043e\u0432\u0430",image:"/images/book_image_4.jpg",price:317,rating:1},{id:5,title:"\u0417\u0443\u043b\u0435\u0439\u0445\u0430 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0433\u043b\u0430\u0437\u0430",author:"\u0413\u0443\u0437\u0435\u043b\u044c \u042f\u0445\u0438\u043d\u0430",image:"/images/book_image_5.jpg",price:254,rating:0},{id:6,title:"\u041e\u0447\u0430\u0440\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u0438\u0448\u0435\u0447\u043d\u0438\u043a. \u041a\u0430\u043a \u0441\u0430\u043c\u044b\u0439 \u043c\u043e\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043e\u0440\u0433\u0430\u043d \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0430\u043c\u0438",author:"\u0414\u0436\u0443\u043b\u0438\u044f \u042d\u043d\u0434\u0435\u0440\u0441",image:"/images/book_image_6.jpg",price:573,rating:4},{id:7,title:"iPhuck 10",author:"\u0412\u0438\u043a\u0442\u043e\u0440 \u041f\u0435\u043b\u0435\u0432\u0438\u043d",image:"/images/book_image_7.jpg",price:246,rating:0},{id:8,title:"7 \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u0432\u044b\u0441\u043e\u043a\u043e\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043b\u044e\u0434\u0435\u0439: \u041c\u043e\u0449\u043d\u044b\u0435...",author:"\u0421\u0442\u0438\u0432\u0435\u043d \u041a\u043e\u0432\u0438",image:"/images/book_image_8.jpg",price:347,rating:5},{id:9,title:"\u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u0432\u043e \u043b\u044c\u0434\u0443",author:"\u0420\u043e\u0431\u0435\u0440\u0442 \u0411\u0440\u044b\u043d\u0434\u0437\u0430",image:"/images/book_image_9.jpg",price:882,rating:2},{id:10,title:"\u041c\u0430\u0433\u0438\u044f \u0443\u0442\u0440\u0430. \u041a\u0430\u043a \u043f\u0435\u0440\u0432\u044b\u0439 \u0447\u0430\u0441 \u0434\u043d\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0432\u0430\u0448 \u0443\u0441\u043f\u0435\u0445",author:"\u0425\u044d\u043b \u042d\u043b\u0440\u043e\u0434",image:"/images/book_image_10.jpg",price:829,rating:1},{id:11,title:"\u0410\u0437\u0438\u0430\u0442\u0441\u043a\u0430\u044f \u0435\u0432\u0440\u043e\u043f\u0435\u0438\u0437\u0430\u0446\u0438\u044f. \u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430. \u0426\u0430\u0440\u044c \u041f\u0435\u0442\u0440...",author:"\u0411\u043e\u0440\u0438\u0441 \u0410\u043a\u0443\u043d\u0438\u043d",image:"/images/book_image_11.jpg",price:389,rating:2},{id:12,title:"\u0412\u0435\u0434\u044c\u043c\u0430\u043a (\u0441\u0431\u043e\u0440\u043d\u0438\u043a)",author:"\u0410\u043d\u0434\u0436\u0435\u0439 \u0421\u0430\u043f\u043a\u043e\u0432\u0441\u043a\u0438\u0439",image:"/images/book_image_12.jpg",price:424,rating:3},{id:13,title:"\u0410\u0442\u043b\u0430\u043d\u0442 \u0440\u0430\u0441\u043f\u0440\u0430\u0432\u0438\u043b \u043f\u043b\u0435\u0447\u0438",author:"\u0410\u0439\u043d \u0420\u044d\u043d\u0434",image:"/images/book_image_13.jpg",price:157,rating:2},{id:14,title:"\u0426\u0435\u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u0430. \u0422\u043e\u043c 1",author:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430 \u041c\u0430\u0440\u0438\u043d\u0438\u043d\u0430",image:"/images/book_image_14.jpg",price:664,rating:0},{id:15,title:"\u0418\u0441\u0447\u0435\u0437\u043d\u0443\u0432\u0448\u0430\u044f",author:"\u0413\u0438\u043b\u043b\u0438\u0430\u043d \u0424\u043b\u0438\u043d\u043d",image:"/images/book_image_15.jpg",price:476,rating:4},{id:17,title:"\u041c\u0435\u0442\u0440\u043e 2035",author:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0413\u043b\u0443\u0445\u043e\u0432\u0441\u043a\u0438\u0439",image:"/images/book_image_16.jpg",price:837,rating:4},{id:18,title:"\u0421\u043d\u0435\u0433\u043e\u0432\u0438\u043a",author:"\u042e \u041d\u0435\u0441\u0431\u0451",image:"/images/book_image_17.jpg",price:796,rating:5},{id:19,title:"\u041a\u0430\u043a \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043c\u044f\u0442\u044c. \u041d\u0435 \u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043e \u043f\u0430\u043c\u044f\u0442\u0438 \u2013 \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0435\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0441\u0442\u043e!",author:"\u0414\u0436\u043e\u043d\u0430\u0442\u0430\u043d \u0425\u044d\u043d\u043a\u043e\u043a",image:"/images/book_image_18.jpg",price:399,rating:5}]},J=function(e,t,a){return function(e,t){switch(t){case"all":return e;case"price_high":return q()(e,"price","desc");case"price_low":return q()(e,"price","asc");case"author":return q()(e,"author","asc");case"alphabet":return q()(e,"title","asc");default:return e}}(function(e,t){return e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0||e.author.toLowerCase().indexOf(t.toLowerCase())>=0}))}(e,a),t)},N=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.getBooks()}},{key:"render",value:function(){return o.a.createElement(K,this.props)}}]),a}(i.Component),U=Object(u.b)((function(e){var t=e.books,a=e.filter;return{books:t.books&&J(t.books,a.filterBy,a.searchQuery),isReady:t.isReady}}),{getBooks:function(){return function(e){Y().then((function(t){var a=t.data;e({type:"SET_BOOKS",payload:a})})).catch((function(e){return console.log(e)}))}}})(N),V=a(184),G=a.n(V),z=a(185),W=a(186),X={goods:[]},Z={filterBy:"all",searchQuery:""},$=Object(b.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS":return Object(p.a)({},e,{books:t.payload,isReady:!0});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK_TO_CART":return Object(p.a)({},e,{goods:[].concat(Object(W.a)(e.goods),[t.payload])});case"REMOVE_BOOK_FROM_CART":return Object(p.a)({},e,{goods:e.goods.filter((function(e){return e.id!==t.payload}))});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER_BY":return Object(p.a)({},e,{filterBy:t.payload});case"SET_SEARCH_QUERY":return Object(p.a)({},e,{searchQuery:t.payload});default:return e}}}),ee=Object(b.d)($,Object(b.a)(G.a,z.a));l.a.render(o.a.createElement(u.a,{store:ee},o.a.createElement(U,null)),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.55071c7f.chunk.js.map