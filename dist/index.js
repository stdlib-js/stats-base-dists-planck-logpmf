"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(w,u){
var N=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-expm1/dist'),c=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist');function g(e,r){return n(e)||n(r)||r<=0?NaN:N(e)?c(-f(-r))-r*e:p}u.exports=g
});var s=t(function(z,o){
var y=require('@stdlib/utils-constant-function/dist'),I=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-expm1/dist'),x=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ninf/dist');function R(e){if(a(e)||e<=0)return y(NaN);return r;function r(i){return a(i)?NaN:I(i)?x(-F(-e))-e*i:O}}o.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),j=s();h(q,"factory",j);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
