import{r as M,a as R,b as d,j as i,E as b,_ as f,d as x,f as y,F as v,V as w}from"./index.a4ac383e.js";import{G as z}from"./ground.4e2095e6.js";const c=()=>{let t=0,a=0;for(;t===0;)t=Math.random();for(;a===0;)a=Math.random();let e=Math.sqrt(-2*Math.log(t))*Math.cos(f*a);return e=e/10+.5,e>1||e<0?c():e},F=({coordinateMapper:t,radius:a=2,pointSize:e=.2,nPoints:s=1e3})=>{const p=[...Array(s)].map(c),l=M.exports.useRef(null);return R(({clock:h})=>{const g=h.getElapsedTime();let o,n,u;const m=l.current.geometry.attributes.position;for(let r=0;r<s;r++)n=r/(s-1),u=n*f,o=a*(1+p[r]*t.map(b.Cartesian_1D,n,0,0,g)),m.setXYZ(r,o*Math.cos(u),o*Math.sin(u),0);m.needsUpdate=!0}),d("points",{ref:l,children:[i("bufferGeometry",{children:i("bufferAttribute",{attach:"attributes-position",array:new Float32Array(s*3),count:s,itemSize:3})}),i("pointsMaterial",{attach:"material",size:e})]})},A=({coordinateMapper:t})=>{const{radius:a,pointSize:e}=x({Ring:y({radius:{value:2,min:.25,max:3,step:.25},pointSize:{value:.2,min:.01,max:2,step:.01}},{collapsed:!0})});return d(v,{children:[i(F,{coordinateMapper:t,radius:a,pointSize:e}),i(z,{position:new w(0,0,-1.5*t.amplitude)})]})};export{A as default};
