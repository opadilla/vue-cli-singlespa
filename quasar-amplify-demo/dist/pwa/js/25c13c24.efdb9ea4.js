(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["25c13c24"],{"039d":function(t,n,e){},"1f93":function(t,n,e){"use strict";var s=e("9cbd"),a=e.n(s);a.a},"21f3":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"auth"},["signUp"===t.formState?e("sign-up",{attrs:{toggle:t.toggle}}):t._e(),"signIn"===t.formState?e("sign-in"):t._e(),e("div",{staticClass:"row justify-end"},[e("q-btn",{staticClass:"authButton",attrs:{type:"submit"},on:{click:t.toggle}},[t._v("\n      "+t._s("signUp"===t.formState?"Already signed up? Sign In":"Need an account? Sign Up")+"\n    ")])],1)],1)},a=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"auth"},[e("h2",[t._v(t._s("signUp"===t.formState?"Sign Up":"Confirm Sign Up"))]),e("form",{on:{submit:function(n){return n.preventDefault(),t.signUp(n)}}},["signUp"===t.formState?e("div",[e("q-input",{attrs:{square:"",filled:"",color:"teal",label:"Username"},model:{value:t.form.username,callback:function(n){t.$set(t.form,"username",n)},expression:"form.username"}}),e("q-input",{attrs:{square:"",filled:"",color:"teal",label:"Password",type:"password"},model:{value:t.form.password,callback:function(n){t.$set(t.form,"password",n)},expression:"form.password"}}),e("q-input",{attrs:{square:"",filled:"",color:"teal",label:"E-mail"},model:{value:t.form.email,callback:function(n){t.$set(t.form,"email",n)},expression:"form.email"}}),e("div",{staticClass:"row"},[e("q-btn",{staticClass:"authButton",attrs:{type:"submit",label:"Sign Up"},on:{click:t.signUp},scopedSlots:t._u([{key:"loading",fn:function(){return[e("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)})],1)],1):t._e(),"confirmSignUp"===t.formState?e("div",[e("q-input",{attrs:{square:"",filled:"",color:"teal"},model:{value:t.form.authCode,callback:function(n){t.$set(t.form,"authCode",n)},expression:"form.authCode"}}),e("div",{staticClass:"row"},[e("q-btn",{staticClass:"authButton",attrs:{type:"submit",label:"Verification code"},on:{click:t.confirmSignUp},scopedSlots:t._u([{key:"loading",fn:function(){return[e("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)})],1)],1):t._e()])])},i=[],o=e("a34a"),u=e.n(o),l=(e("96cf"),e("c973")),c=e.n(l),f={name:"home",props:["toggle"],data:function(){return{formState:"signUp",form:{username:"",password:"",email:""}}},methods:{signUp:function(){var t=c()(u.a.mark(function t(){var n,e,s,a;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.form,e=n.username,s=n.password,a=n.email,t.next=3,this.$Auth.signUp({username:e,password:s,attributes:{email:a}});case 3:this.formState="confirmSignUp";case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),confirmSignUp:function(){var t=c()(u.a.mark(function t(){var n,e,s;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.form,e=n.username,s=n.authCode,t.next=3,this.$Auth.confirmSignUp(e,s);case 3:this.toggle();case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}},p=f,m=(e("1f93"),e("2877")),d=Object(m["a"])(p,r,i,!1,null,null,null),g=d.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"auth"},[e("h2",[t._v("Sign In")]),e("form",{on:{submit:function(n){return n.preventDefault(),t.signIn(n)}}},[e("q-input",{attrs:{square:"",filled:"",color:"teal",label:"Username"},model:{value:t.form.username,callback:function(n){t.$set(t.form,"username",n)},expression:"form.username"}}),e("q-input",{attrs:{square:"",filled:"",color:"teal",label:"Password",type:"password"},model:{value:t.form.password,callback:function(n){t.$set(t.form,"password",n)},expression:"form.password"}}),e("div",{staticClass:"row"},[e("q-btn",{staticClass:"authButton",attrs:{type:"submit",label:"Sign In"},on:{click:t.signIn},scopedSlots:t._u([{key:"loading",fn:function(){return[e("q-spinner-facebook")]},proxy:!0}])})],1)],1)])},b=[],v={name:"SignIn",data:function(){return{form:{username:"",password:""}}},methods:{signIn:function(){var t=c()(u.a.mark(function t(){var n,e,s;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.form,e=n.username,s=n.password,t.next=3,this.$Auth.signIn(e,s);case 3:this.$AmplifyEventBus.$emit("authState","signedIn"),parent.signedIn=!0,this.$router.push({name:"todo"});case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}},w=v,S=(e("8143"),Object(m["a"])(w,h,b,!1,null,null,null)),U=S.exports,k={name:"app",components:{SignUp:g,SignIn:U},data:function(){return{formState:"signUp"}},methods:{toggle:function(){"signUp"===this.formState?this.formState="signIn":this.formState="signUp"}}},q=k,x=(e("cc98"),Object(m["a"])(q,s,a,!1,null,"9669e0a2",null));n["default"]=x.exports},"25b0":function(t,n,e){},8143:function(t,n,e){"use strict";var s=e("25b0"),a=e.n(s);a.a},"9cbd":function(t,n,e){},cc98:function(t,n,e){"use strict";var s=e("039d"),a=e.n(s);a.a}}]);