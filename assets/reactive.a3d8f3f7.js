import{r as R,u as M,C as T,j as m,b as i,T as f,c as b,f as x,F as A,G as y,V as S}from"./index.59d22219.js";const d=()=>{let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();const a=Math.sqrt(-2*Math.log(e))*Math.cos(f*t)/10+.5;return a>1||a<0?d():a},v=({coordinateMapper:e,radius:t=2,pointSize:a=.2,nPoints:s=1e3})=>{const p=[...Array(s)].map(d),l=R.exports.useRef(null);return M(({clock:h})=>{const g=h.getElapsedTime();let n,o,u;const c=l.current.geometry.attributes.position;for(let r=0;r<s;r++)o=r/(s-1),u=o*f,n=t*(1+p[r]*e.map(T.CARTESIAN_1D,o,0,0,g)),c.setXYZ(r,n*Math.cos(u),n*Math.sin(u),0);c.needsUpdate=!0}),m("points",{ref:l,children:[i("bufferGeometry",{children:i("bufferAttribute",{attach:"attributes-position",array:new Float32Array(s*3),count:s,itemSize:3})}),i("pointsMaterial",{attach:"material",size:a})]})},z=({coordinateMapper:e})=>{const{radius:t,pointSize:a}=b({"Visual - Ring":x({radius:{value:2,min:.25,max:3,step:.25},pointSize:{value:.2,min:.01,max:2,step:.01}},{collapsed:!0})});return m(A,{children:[i(v,{coordinateMapper:e,radius:t,pointSize:a}),i(y,{position:new S(0,0,-1.5*e.amplitude)})]})};export{z as default};