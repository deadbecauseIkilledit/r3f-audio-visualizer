import{r as s,u,j as v}from"./index.6a4a3c5d.js";import{A as g}from"./audioMotion-analyzer.59e8360d.js";const D=({})=>{const n=s.exports.useRef(null),r=s.exports.useRef(null),t=s.exports.useRef(null),o=u(e=>e.data),i=u(e=>e.resizeData),l=()=>{t!=null&&t.current&&(r.current.disconnectInput(t.current),t.current=null)},f=()=>{l(),navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{n.current&&n.current.pause(),t.current=r.current.audioCtx.createMediaStreamSource(e),r.current.connectInput(t.current),r.current.volume=0}).catch(e=>{alert("Microphone access denied by user")}):alert("User mediaDevices not available")},d=e=>{const a=e.getBars();o.length!=a.length&&(console.log(`Resizing ${a.length}`),i(a.length));let c=0;for(const p of a)o[c]=p.value[0],c++};return s.exports.useEffect(()=>{!n.current||r.current||(r.current=new g(void 0,{source:n.current,mode:2,useCanvas:!1,onCanvasDraw:d}),r.current.volume=0,f())},[]),v("audio",{ref:n,crossOrigin:"anonymous"})};export{D as default};
