import{c as l,f as u,r as p,u as m,b as n,F as h,j as G}from"./index.a0d79cae.js";import{B as x}from"./base.b0b6ad02.js";import"./Lut.917d65ee.js";const S=({coordinateMapper:c})=>{const{nPinGridRows:r,nPinGridCols:o,pinGridUnitSideLength:a}=l({"Visual - Grid":u({nPinGridRows:{value:50,min:2,max:150,step:1},nPinGridCols:{value:50,min:2,max:150,step:1},pinGridUnitSideLength:{value:.3,min:.05,max:1,step:.05}},{collapsed:!0})}),t=Math.max(o,r)*1.1*a,i=p.exports.useRef(null);return m(({clock:d})=>{if(i!=null&&i.current){const s=d.getElapsedTime()*.1,e=t/2;i.current.position.x=e*Math.sin(s*7),i.current.position.y=e*Math.cos(s*5),i.current.position.z=Math.abs(e*Math.cos(s*3))}}),n(h,{children:G("group",{children:[n(x,{coordinateMapper:c,nGridCols:o,nGridRows:r,cubeSideLength:a,cubeSpacingScalar:1.1,pinStyle:!0,colorLut:"",color:"black"}),n("pointLight",{position:[0,0,5*t],intensity:5}),n("pointLight",{ref:i,intensity:5,distance:3*t,decay:1})]})})};export{S as default};