"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[9237],{9237:function(t,n,e){e.d(n,{Bouncer:function(){return c}});var i=e(3622);class s{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}const o="bounce";class c extends i.L8{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.bounce;n&&(t.retina.bounceModeDistance=n.distance*t.retina.pixelRatio)}async interact(){const t=this.container,n=t.actualOptions.interactivity.events,s=t.interactivity.status===i.Wt,c=n.onHover.enable,a=n.onHover.mode,r=n.onDiv;if(s&&c&&(0,i.dB)(o,a)){const{mouseBounce:t}=await e.e(2345).then(e.bind(e,2345));t(this.container,(t=>this.isEnabled(t)))}else{const{divBounce:t}=await e.e(2345).then(e.bind(e,2345));t(this.container,r,o,(t=>this.isEnabled(t)))}}isEnabled(t){const n=this.container,e=n.actualOptions,s=n.interactivity.mouse,c=(t?.interactivity??e.interactivity).events,a=c.onDiv;return!!s.position&&c.onHover.enable&&(0,i.dB)(o,c.onHover.mode)||(0,i.wm)(o,a)}loadModeOptions(t,...n){t.bounce||(t.bounce=new s);for(const e of n)t.bounce.load(e?.bounce)}reset(){}}}}]);
//# sourceMappingURL=9237-5f62c61648a5eeb677df.js.map