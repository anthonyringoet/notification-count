!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require){var doc=document,N=require("../index"),n=N();doc.getElementById("n-more").addEventListener("click",function(e){e.preventDefault(),n.add()}),doc.getElementById("n-less").addEventListener("click",function(e){e.preventDefault(),n.subtract()}),doc.getElementById("n-default").addEventListener("click",function(e){e.preventDefault(),n.default()}),doc.getElementById("n-form").addEventListener("submit",function(e){e.preventDefault(),n.set(this.querySelector(".n-exact").value)}),doc.getElementById("n-form-specific-more").addEventListener("submit",function(e){e.preventDefault(),n.add(this.querySelector(".n-exact").value)}),doc.getElementById("n-form-specific-less").addEventListener("submit",function(e){e.preventDefault(),n.subtract(this.querySelector(".n-exact").value)});var c=new N(15,doc.querySelector(".c-status"));doc.getElementById("c-more-custom-el").addEventListener("click",function(e){e.preventDefault(),c.add()})},{"../index":2}],2:[function(require,module){function Notifier(count,el,left,right){return this instanceof Notifier?(this.separatorLeft=left||"(",this.separatorRight=right||")",this.initial=count||0,this.count=count||0,this.el=el||document.getElementsByTagName("title")[0],void(this.initial&&this.update())):new Notifier(count,left,right)}module.exports=Notifier,Notifier.prototype.update=function(){var output=this.separatorLeft+this.count+this.separatorRight,regexString="^(\\"+this.separatorLeft+")\\w+(\\"+this.separatorRight+") ",reg=new RegExp(regexString,"g"),oldTitle=this.el.textContent.replace(reg,"");return this.el.textContent=this.count?output+" "+oldTitle:oldTitle,this},Notifier.prototype.set=function(input){return this.count="undefined"==typeof input?1:parseFloat(input),(this.count<0||isNaN(this.count))&&(this.count=0),this.update(),this},Notifier.prototype.default=function(){return this.count=this.initial,this.update(),this},Notifier.prototype.add=function(input){return"undefined"==typeof input&&(input=1),this.count+=parseFloat(input),this.update(),this},Notifier.prototype.subtract=function(input){return"undefined"==typeof input&&(input=1),this.count-=parseFloat(input),(this.count<0||isNaN(this.count))&&(this.count=0),this.update(),this}},{}]},{},[1]);