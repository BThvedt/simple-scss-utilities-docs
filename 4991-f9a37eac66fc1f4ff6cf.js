"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[4991],{4991:function(t,e,i){i.d(e,{Attractor:function(){return a}});var s=i(3622);class a extends s.$S{constructor(t){super(t)}clear(){}init(){}async interact(t){const e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,s.Gu)(t.options.move.attract.distance)*e.retina.pixelRatio);const i=t.attractDistance,a=t.getPosition(),o=e.particles.quadTree.queryCircle(a,i);for(const c of o){if(t===c||!c.options.move.attract.enable||c.destroyed||c.spawning)continue;const e=c.getPosition(),{dx:i,dy:o}=(0,s.oW)(a,e),n=t.options.move.attract.rotate,r=i/(1e3*n.x),l=o/(1e3*n.y),u=c.size.value/t.size.value,p=1/u;t.velocity.x-=r*u,t.velocity.y-=l*u,c.velocity.x+=r*p,c.velocity.y+=l*p}await Promise.resolve()}isEnabled(t){return t.options.move.attract.enable}reset(){}}}}]);
//# sourceMappingURL=4991-f9a37eac66fc1f4ff6cf.js.map