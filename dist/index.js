"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(z,f){
function l(e,r,a,d){var s,t,n,i,u;if(e<=0)return NaN;if(e===1||a===0)return r[d];for(t=d,s=0,i=0,u=0;u<e;u++)n=r[t],n===n&&(s+=n,i+=1),t+=a;return i===0?NaN:s/i}f.exports=l
});var c=v(function(A,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function E(e,r,a){return _(e,r,a,R(e,a))}m.exports=E
});var x=v(function(B,y){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),O=o();N(p,"ndarray",O);y.exports=p
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=x(),q,j=g(b(__dirname,"./native.js"));h(j)?q=k:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
