"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[3984],{3984:function(t,e,a){a.d(e,{RotateUpdater:function(){return c}});var s=a(4324);class i{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(t){t&&(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.speed&&(this.speed=(0,s.Ws)(t.speed)),void 0!==t.decay&&(this.decay=(0,s.Ws)(t.decay)),void 0!==t.sync&&(this.sync=t.sync))}}class o extends s.S4{constructor(){super(),this.animation=new i,this.direction="clockwise",this.path=!1,this.value=0}load(t){t&&(super.load(t),void 0!==t.direction&&(this.direction=t.direction),this.animation.load(t.animation),void 0!==t.path&&(this.path=t.path))}}const n=2*Math.PI;class c{constructor(t){this.container=t}async init(t){const e=t.options.rotate;if(!e)return;t.rotate={enable:e.animation.enable,value:(0,s.qy)((0,s.qS)(e.value)),min:0,max:n},t.pathRotation=e.path;let a=e.direction;if("random"===a){a=Math.floor(2*(0,s.CE)())>0?"counter-clockwise":"clockwise"}switch(a){case"counter-clockwise":case"counterClockwise":t.rotate.status="decreasing";break;case"clockwise":t.rotate.status="increasing"}const i=e.animation;i.enable&&(t.rotate.decay=1-(0,s.qS)(i.decay),t.rotate.velocity=(0,s.qS)(i.speed)/360*this.container.retina.reduceFactor,i.sync||(t.rotate.velocity*=(0,s.CE)())),t.rotation=t.rotate.value,await Promise.resolve()}isEnabled(t){const e=t.options.rotate;return!!e&&(!t.destroyed&&!t.spawning&&e.animation.enable&&!e.path)}loadOptions(t,...e){t.rotate||(t.rotate=new o);for(const a of e)t.rotate.load(a?.rotate)}async update(t,e){this.isEnabled(t)&&t.rotate&&((0,s.C2)(t,t.rotate,!1,"none",e),t.rotation=t.rotate.value,await Promise.resolve())}}}}]);
//# sourceMappingURL=3984-7844f186b57c6bf5a614.js.map