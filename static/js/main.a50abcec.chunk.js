(this["webpackJsonpreact-library-app"]=this["webpackJsonpreact-library-app"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(20),o=n.n(r),s=(n(34),n(35),n(21)),l=n(4),i=n(6),u=Object(c.createContext)(),b=n(1);var d=function(){var e=Object(c.useContext)(u),t=e.addBook,n=e.current,a=e.showAddBookForm,r=e.updateBook;Object(c.useEffect)((function(){f(null!==n?n:{title:"",author:"",isbn:""})}),[e,n]);var o=Object(c.useState)({title:"",author:"",isbn:""}),d=Object(i.a)(o,2),j=d[0],f=d[1],p=j.title,O=j.author,x=j.isbn,h=function(e){return f(Object(l.a)(Object(l.a)({},j),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"absolute w-full h-full bg-black top-0 left-0 bg-opacity-40 grid justify-items-center items-center",onClick:function(e){a()},children:Object(b.jsxs)("div",{className:"bg-white px-4 max-w-sm z-10 py-4 rounded-xl shadow-md",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsx)("h1",{className:"text-3xl text-left font-bold text-brand-dark-brown my-5 ",children:null!==n?"UPDATE BOOK":"ADD BOOK"}),Object(b.jsx)("i",{className:"fas fa-plus right"})]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),null!==n?r(j):t(j),f({title:"",author:"",isbn:""}),a()},children:[Object(b.jsx)("input",{onChange:h,className:"px-4 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black",type:"text",name:"title",id:"title",value:p,placeholder:"Title..."}),Object(b.jsx)("input",{onChange:h,value:O,className:"px-4 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black",type:"text",name:"author",id:"author",placeholder:"Author..."}),Object(b.jsx)("input",{onChange:h,className:"px-4 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black",type:"text",value:x,name:"isbn",id:"isbn",placeholder:"ISBN #"}),Object(b.jsx)("input",{onChange:h,className:"px-4 py-1 mb-4 bg-brand-dark-brown text-white font-bold text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black",type:"submit",name:"submit",id:"submit",value:null!==n?"UPDATE BOOK":"ADD BOOK",placeholder:"ISBN #"})]})]})})};var j=function(e){var t=e.book,n=Object(c.useContext)(u),a=n.deleteBook,r=n.setCurrent,o=n.showAddBookForm,s=n.showAdd,l=t.id,i=t.title,d=t.author,j=t.isbn;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("td",{className:"px-2 py-1",children:i}),Object(b.jsx)("td",{className:"px-2 py-1",children:d}),Object(b.jsx)("td",{className:"px-2 py-1",children:j}),Object(b.jsx)("td",{className:"px-2 py-1 ",children:Object(b.jsx)("i",{className:"far fa-edit",onClick:function(){r(t),!s&&o()}})}),Object(b.jsx)("td",{className:"px-2 py-1 ",children:Object(b.jsx)("i",{className:"fas fa-trash",onClick:function(){a(l)}})})]})},f=n(16);var p=function(e){var t=e.books,n=Object(f.useTransition)(t,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return Object(b.jsx)(b.Fragment,{children:n((function(e,t){return Object(b.jsx)(f.animated.tr,{style:e,children:Object(b.jsx)(j,{book:t},t.id)})}))})};var O=function(){var e=Object(c.useContext)(u),t=e.getBooks,n=e.books,a=e.filtered;return Object(c.useEffect)((function(){t()}),[]),Object(b.jsx)("div",{className:"bg-white px-4 py-4 rounded-xl shadow-md",children:Object(b.jsxs)("table",{className:"w-full text-left mt-3 rounded-xl",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"",children:[Object(b.jsx)("th",{className:" px-2 py-1",children:"Title"}),Object(b.jsx)("th",{className:" px-2 py-1",children:"Author"}),Object(b.jsx)("th",{className:" px-2 py-1",children:"ISBN #"}),Object(b.jsx)("th",{className:" px-2 py-1 "}),Object(b.jsx)("th",{className:"px-2 py-1  "})]})}),Object(b.jsx)("tbody",{children:null!==n&&0!==n.length?null!==a?Object(b.jsx)(p,{books:a}):Object(b.jsx)(p,{books:n}):Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:Object(b.jsx)("h1",{children:"No Books Found..."})})})})]})})};var x=function(){var e=Object(c.useContext)(u),t=e.filterBooks,n=e.clearFilter,a=e.filtered,r=Object(c.useRef)("");return Object(c.useEffect)((function(){null===a&&(r.current.value="")})),Object(b.jsx)("div",{className:"bg-white px-4 py-4 rounded-xl shadow-md",children:Object(b.jsx)("input",{className:" w-full focus:outline-none px-2 h-6",type:"text",ref:r,name:"search",id:"search",placeholder:"Search...",onChange:function(e){""!==r.current.value?t(e.target.value):n()}})})};var h=function(){var e=Object(c.useContext)(u),t=e.showAddBookForm,n=e.showAdd,a=e.clearCurrent,r=n?"Cancel":"Add Book",o=n?"fa-times":"fa-plus";return Object(b.jsxs)("div",{onClick:function(){t(),a()},className:"px-4 z-30 cursor-pointer py-2 bg-brand-pink absolute bottom-4 right-4 rounded-3xl hover:bg-opacity-70 focus:outline-none",children:[r," ",Object(b.jsx)("i",{className:"fas right "+o})]})};var m=function(){var e=Object(c.useContext)(u).showAdd,t=Object(f.useTransition)(e,{from:{opacity:0,height:0,width:0},enter:{opacity:1,height:"auto",width:"auto"},leave:{opacity:0,height:0}});return Object(b.jsxs)("div",{className:"w-full h-full bg-brand-gray ",children:[Object(b.jsx)("div",{className:"bg-brand-pink h-2/6 w-full min-h-64",children:Object(b.jsx)("div",{className:"w-full h-1/2 flex justify-center items-center",children:Object(b.jsxs)("h1",{className:"text-center text-3xl font-bold  text-brand-gray-light",children:[Object(b.jsx)("i",{className:"fas fa-book-open mr-5 text-brand-gray-light"})," MY LIBRARY APP"]})})}),Object(b.jsx)("div",{className:"container mx-auto -mt-32 px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-9",children:Object(b.jsxs)("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-3 justify-center items-start px-2 space-y-2",children:[Object(b.jsxs)("div",{className:"space-y-2 col-span-3",children:[Object(b.jsx)(x,{}),Object(b.jsx)(O,{})]}),Object(b.jsx)(h,{})]})}),t((function(e,t){return t&&Object(b.jsx)(f.animated.div,{style:e,children:Object(b.jsx)(d,{})})}))]})},y=n(12),g=n.n(y),k=n(13),v=n(11),N="ADD_BOOK",w="GET_BOOK",B="DELETE_BOOK",A="SET_CURRENT",C="CLEAR_CURRENT",S="UPDATE_BOOK",E="FILTER_BOOKS",R="CLEAR_FILTER",T="SHOW_ADD_FORM",D=function(e,t){switch(t.type){case T:return Object(l.a)(Object(l.a)({},e),{},{showAdd:!e.showAdd});case w:return Object(l.a)(Object(l.a)({},e),{},{books:t.payload});case N:return Object(l.a)(Object(l.a)({},e),{},{books:null!==e.books?[].concat(Object(v.a)(e.books),[t.payload]):[t.payload]});case S:return Object(l.a)(Object(l.a)({},e),{},{books:e.books.map((function(e){return e.id===t.payload.id?t.payload:e}))});case B:return Object(l.a)(Object(l.a)({},e),{},{books:e.books.filter((function(e){return e.id!==t.payload}))});case A:return Object(l.a)(Object(l.a)({},e),{},{current:t.payload});case C:return Object(l.a)(Object(l.a)({},e),{},{current:null});case E:return Object(l.a)(Object(l.a)({},e),{},{filtered:e.books.filter((function(e){var n=new RegExp("".concat(t.payload),"gi");return e.title.match(n)||e.author.match(n)||e.isbn.match(n)}))});case R:return Object(l.a)(Object(l.a)({},e),{},{filtered:null});default:return e}},F=n(40),I=function(e){var t=Object(c.useReducer)(D,{books:null,current:null,filtered:null,error:null,showAdd:!1}),n=Object(i.a)(t,2),a=n[0],r=n[1],o=function(){var e=Object(k.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.books.map((function(e){return e.id===t.id?t:e})),localStorage.setItem("books",JSON.stringify(n)),r({type:S,payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(u.Provider,{value:{showAdd:a.showAdd,books:a.books,current:a.current,filtered:a.filtered,showAddBookForm:function(){r({type:T})},addBook:function(e){e.id=Object(F.a)(),null!==a.books?localStorage.setItem("books",JSON.stringify([].concat(Object(v.a)(a.books),[e]))):localStorage.setItem("books",JSON.stringify([e])),r({type:N,payload:e})},getBooks:function(){var e=JSON.parse(localStorage.getItem("books"));r({type:w,payload:e})},deleteBook:function(e){var t=a.books.filter((function(t){return t.id!==e}));localStorage.setItem("books",JSON.stringify(t)),r({type:B,payload:e})},setCurrent:function(e){r({type:A,payload:e})},clearCurrent:function(){r({type:C})},updateBook:o,filterBooks:function(e){null!==a.books&&r({type:E,payload:e})},clearFilter:function(){r({type:R})}},children:e.children})};var _=function(){return Object(b.jsx)(I,{children:Object(b.jsx)(m,{})})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a50abcec.chunk.js.map