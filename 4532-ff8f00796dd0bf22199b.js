"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[4532],{4532:function(t,i,n){n.d(i,{Grabber:function(){return r}});var e=n(4324),o=n(6368);function s(t,i,n,o,s){t.canvas.draw((t=>{const r=i.getPosition();!function(t,i,n,o,s,r){(0,e.Cw)(t,n,o),t.strokeStyle=(0,e.a2)(s,r),t.lineWidth=i,t.stroke()}(t,i.retina.linksWidth??0,r,s,n,o)}))}class r extends e.Ef{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.grab;i&&(t.retina.grabModeDistance=i.distance*t.retina.pixelRatio)}async interact(){const t=this.container,i=t.actualOptions.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==e.yG)return;const n=t.interactivity.mouse.position;if(!n)return;const o=t.retina.grabModeDistance;if(!o||o<0)return;const r=t.particles.quadTree.queryCircle(n,o,(t=>this.isEnabled(t)));for(const a of r){const r=a.getPosition(),c=(0,e.c$)(r,n);if(c>o)continue;const l=i.modes.grab.links,u=l.opacity,b=u-c*u/o;if(b<=0)continue;const d=l.color??a.options.links?.color;if(!t.particles.grabLineColor&&d){const n=i.modes.grab.links;t.particles.grabLineColor=(0,e.E$)(d,n.blink,n.consent)}const p=(0,e.MF)(a,void 0,t.particles.grabLineColor);p&&s(t,a,p,b,n)}await Promise.resolve()}isEnabled(t){const i=this.container,n=i.interactivity.mouse,o=(t?.interactivity??i.actualOptions.interactivity).events;return o.onHover.enable&&!!n.position&&(0,e.Sc)("grab",o.onHover.mode)}loadModeOptions(t,...i){t.grab||(t.grab=new o.E);for(const n of i)t.grab.load(n?.grab)}reset(){}}}}]);
//# sourceMappingURL=4532-ff8f00796dd0bf22199b.js.map