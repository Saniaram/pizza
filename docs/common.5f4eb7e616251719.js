"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[592],{7942:(u,a,e)=>{e.d(a,{M:()=>i});var o=e(9947),n=e(5879),c=e(9862);let i=(()=>{class r{constructor(t){this.http=t,this.products=[]}getProducts(){return this.http.get(o.N.apiURL+"pizzas")}getProduct(t){return this.http.get(o.N.apiURL+`pizzas?id=${t}`)}createOrder(t){return this.http.post(o.N.apiURL+"order-pizza",t)}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(c.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);