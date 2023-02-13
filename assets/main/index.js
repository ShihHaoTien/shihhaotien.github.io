System.register("chunks:///_virtual/main",["./main.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,o,a,n,s,r;return{setters:[function(t){i=t.inheritsLoose},function(t){o=t.cclegacy,a=t._decorator,n=t.Tween,s=t.tween,r=t.Component}],execute:function(){var e;o._RF.push({},"a8a64CCQ9VGoKVqKspsg2FE","main",void 0);var h=a.ccclass;a.property,t("main",h("main")(e=function(t){function o(){for(var i,o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return(i=t.call.apply(t,[this].concat(a))||this)._awards=[],i._light=null,i._btn=null,i}i(o,t);var a=o.prototype;return a.start=function(){this._awards=this.node.getChildByName("Sprite").getChildByName("awards").children,this._btn=this.node.getChildByName("Sprite").getChildByName("Button"),this._light=this.node.getChildByName("Sprite").getChildByName("light"),this._btn.on("click",this._go,this)},a._go=function(){var t=Math.floor(6*Math.random()),i=Math.floor(3*Math.random()+3);this._goCircle(i,t)},a._goCircle=function(t,i){n.stopAllByTarget(this._light),this._light.setPosition(this._awards[0].position);for(var o=s(this._light),a=0;a<t;a++)for(var r=0;r<this._awards.length;r++)o.to(.05,{position:this._awards[r].position});for(var e=0;e<=i+this._awards.length;e++)o.to(.1,{position:this._awards[e%this._awards.length].position}).delay(.03);o.start()},o}(r))||e);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});