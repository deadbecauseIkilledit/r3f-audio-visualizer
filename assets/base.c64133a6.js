import{r as w,M as P,u as Y,C as j,j as z,B as O,a as X,b as T}from"./index.a7595aa2.js";import{L as g}from"./Lut.eb3800c8.js";const N=({coordinateMapper:A,nGridRows:s=100,nGridCols:e=100,cubeSideLength:r=.025,cubeSpacingScalar:B=5,colorLut:E="cooltowarm",pinStyle:d=!1,color:I="white"})=>{const o=w.exports.useRef(null),c=w.exports.useMemo(()=>new P,[]);return w.exports.useEffect(()=>{if(!E)return;const u=new g(E),M=Math.hypot(.5,.5);let i,l,n,m;for(let t=0;t<s;t++)for(let a=0;a<e;a++)i=t*e+a,l=t/(s-1),n=a/(e-1),m=Math.hypot(l-.5,n-.5)/M,o.current.setColorAt(i,u.getColor(m));o.current.instanceColor.needsUpdate=!0}),Y(({clock:u})=>{const M=u.getElapsedTime(),i=s*B*r,l=e*B*r,n=r+A.amplitude;let m,t,a,h,y,f;for(let p=0;p<s;p++)for(let x=0;x<e;x++)m=p*e+x,t=p/(s-1),a=x/(e-1),f=A.map(j.CARTESIAN_2D,t,a,0,M),h=i*(t-.5),y=l*(a-.5),d?(c.setPosition(h,y,(n+f)/2),c.elements[10]=(n+f)/r):c.setPosition(h,y,f),o.current.setMatrixAt(m,c);o.current.instanceMatrix.needsUpdate=!0}),z("instancedMesh",{ref:o,castShadow:!0,receiveShadow:!0,args:[new O,new X,s*e],children:[T("boxGeometry",{attach:"geometry",args:[r,r,r,1]}),T("meshPhongMaterial",{attach:"material",color:I,toneMapped:!1})]})};export{N as B};