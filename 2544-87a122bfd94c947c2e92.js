"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[2544],{2544:function(t,i,a){a.d(i,{Attractor:function(){return n}});var e=a(4324);class s{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),void 0!==t.duration&&(this.duration=t.duration),void 0!==t.easing&&(this.easing=t.easing),void 0!==t.factor&&(this.factor=t.factor),void 0!==t.maxSpeed&&(this.maxSpeed=t.maxSpeed),void 0!==t.speed&&(this.speed=t.speed))}}const c="attract";class n extends e.Ef{constructor(t,i){super(i),this._engine=t,i.attract||(i.attract={particles:[]}),this.handleClickMode=t=>{const a=this.container.actualOptions.interactivity.modes.attract;if(a&&t===c){i.attract||(i.attract={particles:[]}),i.attract.clicking=!0,i.attract.count=0;for(const t of i.attract.particles)this.isEnabled(t)&&t.velocity.setTo(t.initialVelocity);i.attract.particles=[],i.attract.finish=!1,setTimeout((()=>{i.destroyed||(i.attract||(i.attract={particles:[]}),i.attract.clicking=!1)}),a.duration*e.Ub)}}}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.attract;i&&(t.retina.attractModeDistance=i.distance*t.retina.pixelRatio)}async interact(){const t=this.container,i=t.actualOptions,s=t.interactivity.status===e.yG,n=i.interactivity.events,{enable:o,mode:r}=n.onHover,{enable:d,mode:l}=n.onClick;if(s&&o&&(0,e.Sc)(c,r)){const{hoverAttract:t}=await a.e(9940).then(a.bind(a,9940));t(this.container,(t=>this.isEnabled(t)))}else if(d&&(0,e.Sc)(c,l)){const{clickAttract:t}=await a.e(9940).then(a.bind(a,9940));t(this.container,(t=>this.isEnabled(t)))}}isEnabled(t){const i=this.container,a=i.actualOptions,s=i.interactivity.mouse,n=(t?.interactivity??a.interactivity).events;if(!(s.position&&n.onHover.enable||s.clickPosition&&n.onClick.enable))return!1;const o=n.onHover.mode,r=n.onClick.mode;return(0,e.Sc)(c,o)||(0,e.Sc)(c,r)}loadModeOptions(t,...i){t.attract||(t.attract=new s);for(const a of i)t.attract.load(a?.attract)}reset(){}}}}]);
//# sourceMappingURL=2544-87a122bfd94c947c2e92.js.map