"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function recordMenuInstance(e){var n=Reflect.getPrototypeOf(Reflect.getPrototypeOf(e));n.$menus||(n.$menus=new Menus),n.$menus.record(e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var u=n[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(n,t,u){return t&&e(n.prototype,t),u&&e(n,u),n}}();exports.recordMenuInstance=recordMenuInstance;var _util=require("../../util/util"),Menus=function(){function e(){_classCallCheck(this,e),this.currentMenuId=null,this.menuIns={},this._unReg=null}return _createClass(e,[{key:"record",value:function(e){this.menuIns[e.id]=e}},{key:"open",value:function(e){function n(e,n){e.menuIns[n]?(e.currentMenuId=n,e.menuIns[n].openMenu(),!!u&&u()):!!r&&r(),e._unReg&&e._unReg(),e._unReg=(0,_util.urlChange)(function(){e.close()})}var t=this,u=void 0,r=void 0;return this.currentMenuId?this.close().then(function(){window.setTimeout(function(){n(t,e)},160)}):n(this,e),new Promise(function(e,n){u=e,r=n})}},{key:"close",value:function(){var e=this,n=this.currentMenuId,t=void 0,u=void 0;return n?(this.currentMenuId=null,this.menuIns[n]?this.menuIns[n].closeMenu().then(function(){t&&t()}):u&&u()):u&&u(),new Promise(function(n,r){e._unReg&&e._unReg(),t=n,u=r})}},{key:"toggle",value:function(e){return this.currentMenuId?this.close():this.open(e)}}]),e}();