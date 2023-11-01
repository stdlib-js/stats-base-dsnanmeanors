"use strict";var o=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var q=o(function(k,m){
function l(r,a,s){var v,n,i,e,u;if(r<=0)return NaN;if(r===1||s===0)return a[0];for(s<0?n=(1-r)*s:n=0,v=0,e=0,u=0;u<r;u++)i=a[n],i===i&&(v+=i,e+=1),n+=s;return e===0?NaN:v/e}m.exports=l
});var p=o(function(w,c){
function N(r,a,s,v){var n,i,e,u,t;if(r<=0)return NaN;if(r===1||s===0)return a[v];for(i=v,n=0,u=0,t=0;t<r;t++)e=a[i],e===e&&(n+=e,u+=1),i+=s;return u===0?NaN:n/u}c.exports=N
});var y=o(function(z,x){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),_=p();R(d,"ndarray",_);x.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=y(),f,j=O(E(__dirname,"./native.js"));b(j)?f=g:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
