(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="160",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,vo=1,wu=2,yc=1,Au=2,Rn=3,Dn=0,Wt=1,Qt=2,un=0,Gi=1,gr=2,yo=3,xo=4,Ru=5,ui=100,Cu=101,Pu=102,Mo=103,So=104,Lu=200,Iu=201,Du=202,Nu=203,Ta=204,Ea=205,Ou=206,Fu=207,Bu=208,ku=209,Hu=210,zu=211,Gu=212,Vu=213,Wu=214,ju=0,Xu=1,qu=2,_r=3,Yu=4,Ku=5,Qu=6,Ju=7,Va=0,Zu=1,$u=2,$n=0,ed=1,td=2,nd=3,xc=4,id=5,sd=6,To="attached",rd="detached",Mc=300,Yi=301,Ki=302,ba=303,Ua=304,wr=306,Gt=1e3,tn=1001,vr=1002,xt=1003,wa=1004,ur=1005,zt=1006,Sc=1007,_i=1008,ei=1009,ad=1010,od=1011,Wa=1012,Tc=1013,Yn=1014,Pn=1015,Ft=1016,Ec=1017,bc=1018,fi=1020,ld=1021,nn=1023,cd=1024,ud=1025,mi=1026,Qi=1027,dd=1028,Uc=1029,hd=1030,wc=1031,Ac=1033,Br=33776,kr=33777,Hr=33778,zr=33779,Eo=35840,bo=35841,Uo=35842,wo=35843,Rc=36196,Ao=37492,Ro=37496,Co=37808,Po=37809,Lo=37810,Io=37811,Do=37812,No=37813,Oo=37814,Fo=37815,Bo=37816,ko=37817,Ho=37818,zo=37819,Go=37820,Vo=37821,Gr=36492,Wo=36494,jo=36495,fd=36283,Xo=36284,qo=36285,Yo=36286,Es=2300,Ji=2301,Vr=2302,Ko=2400,Qo=2401,Jo=2402,md=2500,pd=0,Cc=1,Aa=2,Pc=3e3,pi=3001,gd=3200,Lc=3201,ja=0,_d=1,sn="",at="srgb",Et="srgb-linear",Xa="display-p3",Ar="display-p3-linear",yr="linear",tt="srgb",xr="rec709",Mr="p3",Ti=7680,Zo=519,vd=512,yd=513,xd=514,Ic=515,Md=516,Sd=517,Td=518,Ed=519,Ra=35044,$o="300 es",Ca=1035,Ln=2e3,Sr=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const xs=Math.PI/180,Zi=180/Math.PI;function dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function qa(s,e){return(s%e+e)%e}function bd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ud(s,e,t){return s!==e?(t-s)/(e-s):0}function Ms(s,e,t){return(1-t)*s+t*e}function wd(s,e,t,n){return Ms(s,e,1-Math.exp(-t*n))}function Ad(s,e=1){return e-Math.abs(qa(s,e*2)-e)}function Rd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Cd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Pd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ld(s,e){return s+Math.random()*(e-s)}function Id(s){return s*(.5-Math.random())}function Dd(s){s!==void 0&&(el=s);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nd(s){return s*xs}function Od(s){return s*Zi}function Pa(s){return(s&s-1)===0&&s!==0}function Fd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Tr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Dc={DEG2RAD:xs,RAD2DEG:Zi,generateUUID:dn,clamp:ht,euclideanModulo:qa,mapLinear:bd,inverseLerp:Ud,lerp:Ms,damp:wd,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Ld,randFloatSpread:Id,seededRandom:Dd,degToRad:Nd,radToDeg:Od,isPowerOfTwo:Pa,ceilPowerOfTwo:Fd,floorPowerOfTwo:Tr,setQuaternionFromProperEuler:Bd,normalize:Je,denormalize:pn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],x=i[1],v=i[4],E=i[7],A=i[2],w=i[5],U=i[8];return r[0]=a*_+o*x+l*A,r[3]=a*p+o*v+l*w,r[6]=a*f+o*E+l*U,r[1]=c*_+u*x+d*A,r[4]=c*p+u*v+d*w,r[7]=c*f+u*E+d*U,r[2]=h*_+m*x+g*A,r[5]=h*p+m*v+g*w,r[8]=h*f+m*E+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new Ge;function Nc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kd(){const s=bs("canvas");return s.style.display="block",s}const tl={};function Ss(s){s in tl||(tl[s]=!0,console.warn(s))}const nl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[Et]:{transfer:yr,primaries:xr,toReference:s=>s,fromReference:s=>s},[at]:{transfer:tt,primaries:xr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ar]:{transfer:yr,primaries:Mr,toReference:s=>s.applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl)},[Xa]:{transfer:tt,primaries:Mr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl).convertLinearToSRGB()}},Hd=new Set([Et,Ar]),Ke={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Hd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ds[e].toReference,i=Ds[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ds[s].primaries},getTransfer:function(s){return s===sn?yr:Ds[s].transfer}};function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function jr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ei;class Oc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=bs("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zd=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xr(i[a].image)):r.push(Xr(i[a]))}else r=Xr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;class Tt extends yi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=tn,i=tn,r=zt,a=_i,o=nn,l=ei,c=Tt.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=dn(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===pi?at:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gt:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gt:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?pi:Pc}set encoding(e){Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pi?at:sn}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Mc;Tt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,A=(f+1)/2,w=(u+h)/4,U=(d+_)/4,H=(g+p)/4;return v>E&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=U/n):E>A?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=w/i,r=H/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=U/r,i=H/r),this.set(n,i,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vd extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?at:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mt extends Vd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bc extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==m||u!==g){let p=1-o;const f=l*h+c*m+u*g+d*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,f*x);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A}const E=o*x;if(l=l*p+h*E,c=c*p+m*E,u=u*p+g*E,d=d*p+_*E,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-o*m,e[t+2]=c*g+u*m+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new C,sl=new gn;class On{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Os.subVectors(this.max,ds),bi.subVectors(e.a,ds),Ui.subVectors(e.b,ds),wi.subVectors(e.c,ds),kn.subVectors(Ui,bi),Hn.subVectors(wi,Ui),si.subVectors(bi,wi);let t=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!Yr(t,bi,Ui,wi,Os)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,bi,Ui,wi,Os))?!1:(Fs.crossVectors(kn,Hn),t=[Fs.x,Fs.y,Fs.z],Yr(t,bi,Ui,wi,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,Ns=new On,bi=new C,Ui=new C,wi=new C,kn=new C,Hn=new C,si=new C,ds=new C,Os=new C,Fs=new C,ri=new C;function Yr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ri.fromArray(s,r);const o=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jd=new On,hs=new C,Kr=new C;class xn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Kr)),this.expandByPoint(hs.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new C,Qr=new C,Bs=new C,zn=new C,Jr=new C,ks=new C,Zr=new C;class ss{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qr.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=zn.dot(this.direction),l=-zn.dot(Bs),c=zn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Qr).addScaledVector(Bs,h),m}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,r){Jr.subVectors(t,e),ks.subVectors(n,e),Zr.crossVectors(Jr,ks);let a=this.direction.dot(Zr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(ks.crossVectors(zn,ks));if(l<0)return null;const c=o*this.direction.dot(Jr.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(Zr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,l,c,u,d,h,m,g,_,p){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,h,m,g,_,p)}set(e,t,n,i,r,a,o,l,c,u,d,h,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xd,e,qd)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Gn.crossVectors(n,qt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Gn.crossVectors(n,qt)),Gn.normalize(),Hs.crossVectors(qt,Gn),i[0]=Gn.x,i[4]=Hs.x,i[8]=qt.x,i[1]=Gn.y,i[5]=Hs.y,i[9]=qt.y,i[2]=Gn.z,i[6]=Hs.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],x=n[3],v=n[7],E=n[11],A=n[15],w=i[0],U=i[4],H=i[8],M=i[12],b=i[1],z=i[5],Y=i[9],le=i[13],L=i[2],N=i[6],V=i[10],X=i[14],j=i[3],W=i[7],Z=i[11],te=i[15];return r[0]=a*w+o*b+l*L+c*j,r[4]=a*U+o*z+l*N+c*W,r[8]=a*H+o*Y+l*V+c*Z,r[12]=a*M+o*le+l*X+c*te,r[1]=u*w+d*b+h*L+m*j,r[5]=u*U+d*z+h*N+m*W,r[9]=u*H+d*Y+h*V+m*Z,r[13]=u*M+d*le+h*X+m*te,r[2]=g*w+_*b+p*L+f*j,r[6]=g*U+_*z+p*N+f*W,r[10]=g*H+_*Y+p*V+f*Z,r[14]=g*M+_*le+p*X+f*te,r[3]=x*w+v*b+E*L+A*j,r[7]=x*U+v*z+E*N+A*W,r[11]=x*H+v*Y+E*V+A*Z,r[15]=x*M+v*le+E*X+A*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*l*d-i*c*d-r*o*h+n*c*h+i*o*m-n*l*m)+_*(+t*l*m-t*c*h+r*a*h-i*a*m+i*c*u-r*l*u)+p*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+f*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],x=d*p*c-_*h*c+_*l*m-o*p*m-d*l*f+o*h*f,v=g*h*c-u*p*c-g*l*m+a*p*m+u*l*f-a*h*f,E=u*_*c-g*d*c+g*o*m-a*_*m-u*o*f+a*d*f,A=g*d*l-u*_*l-g*o*h+a*_*h+u*o*p-a*d*p,w=t*x+n*v+i*E+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/w;return e[0]=x*U,e[1]=(_*h*r-d*p*r-_*i*m+n*p*m+d*i*f-n*h*f)*U,e[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*f+n*l*f)*U,e[3]=(d*l*r-o*h*r-d*i*c+n*h*c+o*i*m-n*l*m)*U,e[4]=v*U,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*f+t*h*f)*U,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*f-t*l*f)*U,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*m+t*l*m)*U,e[8]=E*U,e[9]=(g*d*r-u*_*r-g*n*m+t*_*m+u*n*f-t*d*f)*U,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*U,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*m-t*o*m)*U,e[12]=A*U,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*p+t*d*p)*U,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*U,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,g=r*d,_=a*u,p=a*d,f=o*d,x=l*c,v=l*u,E=l*d,A=n.x,w=n.y,U=n.z;return i[0]=(1-(_+f))*A,i[1]=(m+E)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(m-E)*w,i[5]=(1-(h+f))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(g+v)*U,i[9]=(p-x)*U,i[10]=(1-(h+_))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ai.set(i[0],i[1],i[2]).length();const a=Ai.set(i[4],i[5],i[6]).length(),o=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/r,u=1/a,d=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ln){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let m,g;if(o===Ln)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ln){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-r),h=(t+e)*c,m=(n+i)*u;let g,_;if(o===Ln)g=(a+r)*d,_=-2*d;else if(o===Sr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new C,on=new Fe,Xd=new C(0,0,0),qd=new C(1,1,1),Gn=new C,Hs=new C,qt=new C,rl=new Fe,al=new gn;class Rr{constructor(e=0,t=0,n=0,i=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yd=0;const ol=new C,Ri=new gn,bn=new Fe,zs=new C,fs=new C,Kd=new C,Qd=new gn,ll=new C(1,0,0),cl=new C(0,1,0),ul=new C(0,0,1),Jd={type:"added"},Zd={type:"removed"};class st extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new C,t=new Rr,n=new gn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ge}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(fs,zs,this.up):bn.lookAt(zs,fs,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new C(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new C,Un=new C,$r=new C,wn=new C,Ci=new C,Pi=new C,dl=new C,ea=new C,ta=new C,na=new C;let Gs=!1;class cn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),Un.subVectors(n,t),$r.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Un),l=ln.dot($r),c=Un.dot(Un),u=Un.dot($r),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gs=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Un.subVectors(e,t),ln.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),ln.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gs=!0),cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ci.subVectors(i,n),Pi.subVectors(r,n),ea.subVectors(e,n);const l=Ci.dot(ea),c=Pi.dot(ea);if(l<=0&&c<=0)return t.copy(n);ta.subVectors(e,i);const u=Ci.dot(ta),d=Pi.dot(ta);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ci,a);na.subVectors(e,r);const m=Ci.dot(na),g=Pi.dot(na);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Pi,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return dl.subVectors(r,i),o=(d-u)/(d-u+(m-g)),t.copy(i).addScaledVector(dl,o);const f=1/(p+_+h);return a=_*f,o=h*f,t.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ia(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=qa(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ia(a,r,e+1/3),this.g=ia(a,r,e),this.b=ia(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const n=kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Ke.fromWorkingColorSpace(Rt.copy(this),e),Math.round(ht(Rt.r*255,0,255))*65536+Math.round(ht(Rt.g*255,0,255))*256+Math.round(ht(Rt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=at){Ke.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Vs);const n=Ms(Vn.h,Vs.h,t),i=Ms(Vn.s,Vs.s,t),r=Ms(Vn.l,Vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new ge;ge.NAMES=kc;let $d=0;class bt extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Gi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Ea,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kn extends bt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new C,Ws=new ue;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class Hc extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zc extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let eh=0;const Zt=new Fe,sa=new st,Li=new C,Yt=new On,ms=new On,yt=new C;class jt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nc(e)?zc:Hc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Yt.min,ms.min),Yt.expandByPoint(yt),yt.addVectors(Yt.max,ms.max),Yt.expandByPoint(yt)):(Yt.expandByPoint(ms.min),Yt.expandByPoint(ms.max))}Yt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),yt.add(Li)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new C,u[b]=new C;const d=new C,h=new C,m=new C,g=new ue,_=new ue,p=new ue,f=new C,x=new C;function v(b,z,Y){d.fromArray(i,b*3),h.fromArray(i,z*3),m.fromArray(i,Y*3),g.fromArray(a,b*2),_.fromArray(a,z*2),p.fromArray(a,Y*2),h.sub(d),m.sub(d),_.sub(g),p.sub(g);const le=1/(_.x*p.y-p.x*_.y);isFinite(le)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(le),x.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(le),c[b].add(f),c[z].add(f),c[Y].add(f),u[b].add(x),u[z].add(x),u[Y].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,z=E.length;b<z;++b){const Y=E[b],le=Y.start,L=Y.count;for(let N=le,V=le+L;N<V;N+=3)v(n[N+0],n[N+1],n[N+2])}const A=new C,w=new C,U=new C,H=new C;function M(b){U.fromArray(r,b*3),H.copy(U);const z=c[b];A.copy(z),A.sub(U.multiplyScalar(U.dot(z))).normalize(),w.crossVectors(H,z);const le=w.dot(u[b])<0?-1:1;l[b*4]=A.x,l[b*4+1]=A.y,l[b*4+2]=A.z,l[b*4+3]=le}for(let b=0,z=E.length;b<z;++b){const Y=E[b],le=Y.start,L=Y.count;for(let N=le,V=le+L;N<V;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new kt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new Fe,ai=new ss,js=new xn,fl=new C,Ii=new C,Di=new C,Ni=new C,ra=new C,Xs=new C,qs=new ue,Ys=new ue,Ks=new ue,ml=new C,pl=new C,gl=new C,Qs=new C,Js=new C;class St extends st{constructor(e=new jt,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(ra.fromBufferAttribute(d,e),a?Xs.addScaledVector(ra,u):Xs.addScaledVector(ra.sub(t),u))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(js.containsPoint(ai.origin)===!1&&(ai.intersectSphere(js,fl)===null||ai.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(hl.copy(r).invert(),ai.copy(e.ray).applyMatrix4(hl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,A=v;E<A;E+=3){const w=o.getX(E),U=o.getX(E+1),H=o.getX(E+2);i=Zs(this,f,e,n,c,u,d,w,U,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=o.getX(p),v=o.getX(p+1),E=o.getX(p+2);i=Zs(this,a,e,n,c,u,d,x,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,A=v;E<A;E+=3){const w=E,U=E+1,H=E+2;i=Zs(this,f,e,n,c,u,d,w,U,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=p,v=p+1,E=p+2;i=Zs(this,a,e,n,c,u,d,x,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function th(s,e,t,n,i,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Dn,o),l===null)return null;Js.copy(o),Js.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:s}}function Zs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ii),s.getVertexPosition(l,Di),s.getVertexPosition(c,Ni);const u=th(s,e,t,n,Ii,Di,Ni,Qs);if(u){i&&(qs.fromBufferAttribute(i,o),Ys.fromBufferAttribute(i,l),Ks.fromBufferAttribute(i,c),u.uv=cn.getInterpolation(Qs,Ii,Di,Ni,qs,Ys,Ks,new ue)),r&&(qs.fromBufferAttribute(r,o),Ys.fromBufferAttribute(r,l),Ks.fromBufferAttribute(r,c),u.uv1=cn.getInterpolation(Qs,Ii,Di,Ni,qs,Ys,Ks,new ue),u.uv2=u.uv1),a&&(ml.fromBufferAttribute(a,o),pl.fromBufferAttribute(a,l),gl.fromBufferAttribute(a,c),u.normal=cn.getInterpolation(Qs,Ii,Di,Ni,ml,pl,gl,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};cn.getNormal(Ii,Di,Ni,d.normal),u.face=d}return u}class Rs extends jt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(d,2));function g(_,p,f,x,v,E,A,w,U,H,M){const b=E/U,z=A/H,Y=E/2,le=A/2,L=w/2,N=U+1,V=H+1;let X=0,j=0;const W=new C;for(let Z=0;Z<V;Z++){const te=Z*z-le;for(let he=0;he<N;he++){const G=he*b-Y;W[_]=G*x,W[p]=te*v,W[f]=L,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[f]=w>0?1:-1,u.push(W.x,W.y,W.z),d.push(he/U),d.push(1-Z/H),X+=1}}for(let Z=0;Z<H;Z++)for(let te=0;te<U;te++){const he=h+te+N*Z,G=h+te+N*(Z+1),K=h+(te+1)+N*(Z+1),de=h+(te+1)+N*Z;l.push(he,G,de),l.push(G,K,de),j+=6}o.addGroup(m,j,M),m+=j,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=$i(s[t]);for(const i in n)e[i]=n[i]}return e}function nh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gc(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}const Us={clone:$i,merge:Ot};var ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends bt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ih,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vc extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Vc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Fi=1;class rh extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(Oi,Fi,e,t);i.layers=this.layers,this.add(i);const r=new Bt(Oi,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(Oi,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Bt(Oi,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Bt(Oi,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Bt(Oi,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ka extends Tt{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===pi?at:sn),this.texture=new Ka(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rs(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:un});r.uniforms.tEquirect.value=t;const a=new St(i,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=zt),new rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const aa=new C,oh=new C,lh=new Ge;class jn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=aa.subVectors(n,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lh.getNormalMatrix(e),i=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new xn,$s=new C;class Qa{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],x=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-r,h-c,p-m,E-f).normalize(),n[1].setComponents(l+r,h+c,p+m,E+f).normalize(),n[2].setComponents(l+a,h+u,p+g,E+x).normalize(),n[3].setComponents(l-a,h-u,p-g,E-x).normalize(),n[4].setComponents(l-o,h-d,p-_,E-v).normalize(),t===Ln)n[5].setComponents(l+o,h+d,p+_,E+v).normalize();else if(t===Sr)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($s.x=i.normal.x>0?e.max.x:e.min.x,$s.y=i.normal.y>0?e.max.y:e.min.y,$s.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ch(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){const h=u.array,m=u._updateRange,g=u.updateRanges;if(s.bindBuffer(d,c),m.count===-1&&g.length===0&&s.bufferSubData(d,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?s.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):s.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}class Ja extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const x=f*h-a;for(let v=0;v<c;v++){const E=v*d-r;g.push(E,-x,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,E=x+c*(f+1),A=x+1+c*(f+1),w=x+1+c*f;m.push(v,E,w),m.push(E,A,w)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ih=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",zh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:uh,alphahash_pars_fragment:dh,alphamap_fragment:hh,alphamap_pars_fragment:fh,alphatest_fragment:mh,alphatest_pars_fragment:ph,aomap_fragment:gh,aomap_pars_fragment:_h,batching_pars_vertex:vh,batching_vertex:yh,begin_vertex:xh,beginnormal_vertex:Mh,bsdfs:Sh,iridescence_fragment:Th,bumpmap_pars_fragment:Eh,clipping_planes_fragment:bh,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:wh,clipping_planes_vertex:Ah,color_fragment:Rh,color_pars_fragment:Ch,color_pars_vertex:Ph,color_vertex:Lh,common:Ih,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Nh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Fh,emissivemap_fragment:Bh,emissivemap_pars_fragment:kh,colorspace_fragment:Hh,colorspace_pars_fragment:zh,envmap_fragment:Gh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Wh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:sf,envmap_vertex:Xh,fog_vertex:qh,fog_pars_vertex:Yh,fog_fragment:Kh,fog_pars_fragment:Qh,gradientmap_pars_fragment:Jh,lightmap_fragment:Zh,lightmap_pars_fragment:$h,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:af,lights_phong_fragment:of,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:uf,lights_fragment_begin:df,lights_fragment_maps:hf,lights_fragment_end:ff,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:vf,map_pars_fragment:yf,map_particle_fragment:xf,map_particle_pars_fragment:Mf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:Tf,morphcolor_vertex:Ef,morphnormal_vertex:bf,morphtarget_pars_vertex:Uf,morphtarget_vertex:wf,normal_fragment_begin:Af,normal_fragment_maps:Rf,normal_pars_fragment:Cf,normal_pars_vertex:Pf,normal_vertex:Lf,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Ff,opaque_fragment:Bf,packing:kf,premultiplied_alpha_fragment:Hf,project_vertex:zf,dithering_fragment:Gf,dithering_pars_fragment:Vf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:qf,shadowmap_vertex:Yf,shadowmask_pars_fragment:Kf,skinbase_vertex:Qf,skinning_pars_vertex:Jf,skinning_vertex:Zf,skinnormal_vertex:$f,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:lm,worldpos_vertex:cm,background_vert:um,background_frag:dm,backgroundCube_vert:hm,backgroundCube_frag:fm,cube_vert:mm,cube_frag:pm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:ym,equirect_vert:xm,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:Tm,meshbasic_vert:Em,meshbasic_frag:bm,meshlambert_vert:Um,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:Im,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Om,meshtoon_frag:Fm,points_vert:Bm,points_frag:km,shadow_vert:Hm,shadow_frag:zm,sprite_vert:Gm,sprite_frag:Vm},oe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ot([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ot([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ot([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ot([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ot([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ot([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ot([oe.common,oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ot([oe.lights,oe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};mn.physical={uniforms:Ot([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const er={r:0,b:0,g:0};function Wm(s,e,t,n,i,r,a){const o=new ge(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(p,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wr)?(u===void 0&&(u=new St(new Rs(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:$i(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==tt,(d!==v||h!==v.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new Ja(2,2),new ft({name:"BackgroundMaterial",uniforms:$i(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(er,Gc(s)),n.buffers.color.setClear(er.r,er.g,er.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function jm(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function d(L,N,V,X,j){let W=!1;if(a){const Z=_(X,V,N);c!==Z&&(c=Z,m(c.object)),W=f(L,X,V,j),W&&x(L,X,V,j)}else{const Z=N.wireframe===!0;(c.geometry!==X.id||c.program!==V.id||c.wireframe!==Z)&&(c.geometry=X.id,c.program=V.id,c.wireframe=Z,W=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,H(L,N,V,X),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,V){const X=V.wireframe===!0;let j=o[L.id];j===void 0&&(j={},o[L.id]=j);let W=j[N.id];W===void 0&&(W={},j[N.id]=W);let Z=W[X];return Z===void 0&&(Z=p(h()),W[X]=Z),Z}function p(L){const N=[],V=[],X=[];for(let j=0;j<i;j++)N[j]=0,V[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:X,object:L,attributes:{},index:null}}function f(L,N,V,X){const j=c.attributes,W=N.attributes;let Z=0;const te=V.getAttributes();for(const he in te)if(te[he].location>=0){const K=j[he];let de=W[he];if(de===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;Z++}return c.attributesNum!==Z||c.index!==X}function x(L,N,V,X){const j={},W=N.attributes;let Z=0;const te=V.getAttributes();for(const he in te)if(te[he].location>=0){let K=W[he];K===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const de={};de.attribute=K,K&&K.data&&(de.data=K.data),j[he]=de,Z++}c.attributes=j,c.attributesNum=Z,c.index=X}function v(){const L=c.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function E(L){A(L,0)}function A(L,N){const V=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;V[L]=1,X[L]===0&&(s.enableVertexAttribArray(L),X[L]=1),j[L]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),j[L]=N)}function w(){const L=c.newAttributes,N=c.enabledAttributes;for(let V=0,X=N.length;V<X;V++)N[V]!==L[V]&&(s.disableVertexAttribArray(V),N[V]=0)}function U(L,N,V,X,j,W,Z){Z===!0?s.vertexAttribIPointer(L,N,V,j,W):s.vertexAttribPointer(L,N,V,X,j,W)}function H(L,N,V,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=X.attributes,W=V.getAttributes(),Z=N.defaultAttributeValues;for(const te in W){const he=W[te];if(he.location>=0){let G=j[te];if(G===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const K=G.normalized,de=G.itemSize,xe=t.get(G);if(xe===void 0)continue;const ve=xe.buffer,Ce=xe.type,Pe=xe.bytesPerElement,be=n.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||G.gpuType===Tc);if(G.isInterleavedBufferAttribute){const We=G.data,D=We.stride,gt=G.offset;if(We.isInstancedInterleavedBuffer){for(let Te=0;Te<he.locationSize;Te++)A(he.location+Te,We.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Te=0;Te<he.locationSize;Te++)E(he.location+Te);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Te=0;Te<he.locationSize;Te++)U(he.location+Te,de/he.locationSize,Ce,K,D*Pe,(gt+de/he.locationSize*Te)*Pe,be)}else{if(G.isInstancedBufferAttribute){for(let We=0;We<he.locationSize;We++)A(he.location+We,G.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let We=0;We<he.locationSize;We++)E(he.location+We);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let We=0;We<he.locationSize;We++)U(he.location+We,de/he.locationSize,Ce,K,de*Pe,de/he.locationSize*We*Pe,be)}}else if(Z!==void 0){const K=Z[te];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(he.location,K);break;case 3:s.vertexAttrib3fv(he.location,K);break;case 4:s.vertexAttrib4fv(he.location,K);break;default:s.vertexAttrib1fv(he.location,K)}}}}w()}function M(){Y();for(const L in o){const N=o[L];for(const V in N){const X=N[V];for(const j in X)g(X[j].object),delete X[j];delete N[V]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const V in N){const X=N[V];for(const j in X)g(X[j].object),delete X[j];delete N[V]}delete o[L.id]}function z(L){for(const N in o){const V=o[N];if(V[L.id]===void 0)continue;const X=V[L.id];for(const j in X)g(X[j].object),delete X[j];delete V[L.id]}}function Y(){le(),u=!0,c!==l&&(c=l,m(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:le,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:E,disableUnusedAttributes:w}}function Xm(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,d){s.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function qm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=a||e.has("OES_texture_float"),A=v&&E,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:w}}function Ym(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new jn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,v=x*4;let E=f.clippingState||null;l.value=E,E=u(g,h,v,m);for(let A=0;A!==v;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,E=m;v!==_;++v,E+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Km(s){let e=new WeakMap;function t(a,o){return o===ba?a.mapping=Yi:o===Ua&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ba||o===Ua)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ah(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Cr extends Vc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,_l=[.125,.215,.35,.446,.526,.582],di=20,oa=new Cr,vl=new ge;let la=null,ca=0,ua=0;const ci=(1+Math.sqrt(5))/2,Bi=1/ci,yl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ci,Bi),new C(0,ci,-Bi),new C(Bi,0,ci),new C(-Bi,0,ci),new C(ci,Bi,0),new C(-ci,Bi,0)];class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ua),e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ft,format:nn,colorSpace:Et,depthBuffer:!1},i=Ml(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=Jm(r,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(vl),u.toneMapping=$n,u.autoClear=!1;const m=new Kn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new St(new Rs,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(vl),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;tr(i,x*v,f>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Yi||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=yl[(i-1)%yl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new St(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):di;p>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const f=[];let x=0;for(let U=0;U<di;++U){const H=U/_,M=Math.exp(-H*H/2);f.push(M),U===0?x+=M:U<p&&(x+=2*M)}for(let U=0;U<f.length;U++)f[U]=f[U]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const E=this._sizeLods[i],A=3*E*(i>v-Hi?i-v+Hi:0),w=4*(this._cubeSize-E);tr(t,A,w,3*E,2*E),l.setRenderTarget(t),l.render(d,oa)}}function Qm(s){const e=[],t=[],n=[];let i=s;const r=s-Hi+1+_l.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Hi?l=_l[a-s+Hi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,x=new Float32Array(_*g*m),v=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let w=0;w<m;w++){const U=w%3*2/3-1,H=w>2?0:-1,M=[U,H,0,U+2/3,H,0,U+2/3,H+1,0,U,H,0,U+2/3,H+1,0,U,H+1,0];x.set(M,_*g*w),v.set(h,p*g*w);const b=[w,w,w,w,w,w];E.set(b,f*g*w)}const A=new jt;A.setAttribute("position",new kt(x,_)),A.setAttribute("uv",new kt(v,p)),A.setAttribute("faceIndex",new kt(E,f)),e.push(A),i>Hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ml(s,e,t){const n=new Mt(s,e,t);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Jm(s,e,t){const n=new Float32Array(di),i=new C(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Sl(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Tl(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ba||l===Ua,u=l===Yi||l===Ki;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new xl(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new xl(s));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $m(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ep(s,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,E=x.length;v<E;v+=3){const A=x[v+0],w=x[v+1],U=x[v+2];h.push(A,w,w,U,U,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const A=v+0,w=v+1,U=v+2;h.push(A,w,w,U,U,A)}}else return;const p=new(Nc(h)?zc:Hc)(h,1);p.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function tp(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){s.drawElements(r,g,o,m*l),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*l,_),t.update(g,r,_)}function h(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function np(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ip(s,e){return s[0]-e[0]}function sp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function rp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ze,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let L=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let H=0;x===!0&&(H=1),v===!0&&(H=2),E===!0&&(H=3);let M=u.attributes.position.count*H,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const z=new Float32Array(M*b*4*g),Y=new Bc(z,M,b,g);Y.type=Pn,Y.needsUpdate=!0;const le=H*4;for(let N=0;N<g;N++){const V=A[N],X=w[N],j=U[N],W=M*b*4*N;for(let Z=0;Z<V.count;Z++){const te=Z*le;x===!0&&(a.fromBufferAttribute(V,Z),z[W+te+0]=a.x,z[W+te+1]=a.y,z[W+te+2]=a.z,z[W+te+3]=0),v===!0&&(a.fromBufferAttribute(X,Z),z[W+te+4]=a.x,z[W+te+5]=a.y,z[W+te+6]=a.z,z[W+te+7]=0),E===!0&&(a.fromBufferAttribute(j,Z),z[W+te+8]=a.x,z[W+te+9]=a.y,z[W+te+10]=a.z,z[W+te+11]=j.itemSize===4?a.w:1)}}_={count:g,texture:Y,size:new ue(M,b)},r.set(u,_),u.addEventListener("dispose",L)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];const f=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",f),d.getUniforms().setValue(s,"morphTargetInfluences",h),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const m=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){const E=g[v];E[0]=v,E[1]=h[v]}g.sort(sp);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ip);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const E=o[v],A=E[0],w=E[1];A!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+v)!==_[A]&&u.setAttribute("morphTarget"+v,_[A]),p&&u.getAttribute("morphNormal"+v)!==p[A]&&u.setAttribute("morphNormal"+v,p[A]),i[v]=w,f+=w):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ap(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class jc extends Tt{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:mi,u!==mi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=Yn),n===void 0&&u===Qi&&(n=fi),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xc=new Tt,qc=new jc(1,1);qc.compareFunction=Ic;const Yc=new Bc,Kc=new Wd,Qc=new Ka,El=[],bl=[],Ul=new Float32Array(16),wl=new Float32Array(9),Al=new Float32Array(4);function rs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=El[i];if(r===void 0&&(r=new Float32Array(i),El[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pr(s,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function op(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function dp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(mt(t,n))return;Al.set(n),s.uniformMatrix2fv(this.addr,!1,Al),pt(t,n)}}function hp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(mt(t,n))return;wl.set(n),s.uniformMatrix3fv(this.addr,!1,wl),pt(t,n)}}function fp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(mt(t,n))return;Ul.set(n),s.uniformMatrix4fv(this.addr,!1,Ul),pt(t,n)}}function mp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function _p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function vp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function Mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function Sp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?qc:Xc;t.setTexture2D(e||r,i)}function Tp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kc,i)}function Ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qc,i)}function bp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yc,i)}function Up(s){switch(s){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return up;case 35674:return dp;case 35675:return hp;case 35676:return fp;case 5124:case 35670:return mp;case 35667:case 35671:return pp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return yp;case 36295:return xp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return bp}}function wp(s,e){s.uniform1fv(this.addr,e)}function Ap(s,e){const t=rs(e,this.size,2);s.uniform2fv(this.addr,t)}function Rp(s,e){const t=rs(e,this.size,3);s.uniform3fv(this.addr,t)}function Cp(s,e){const t=rs(e,this.size,4);s.uniform4fv(this.addr,t)}function Pp(s,e){const t=rs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Lp(s,e){const t=rs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ip(s,e){const t=rs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Dp(s,e){s.uniform1iv(this.addr,e)}function Np(s,e){s.uniform2iv(this.addr,e)}function Op(s,e){s.uniform3iv(this.addr,e)}function Fp(s,e){s.uniform4iv(this.addr,e)}function Bp(s,e){s.uniform1uiv(this.addr,e)}function kp(s,e){s.uniform2uiv(this.addr,e)}function Hp(s,e){s.uniform3uiv(this.addr,e)}function zp(s,e){s.uniform4uiv(this.addr,e)}function Gp(s,e,t){const n=this.cache,i=e.length,r=Pr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xc,r[a])}function Vp(s,e,t){const n=this.cache,i=e.length,r=Pr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Kc,r[a])}function Wp(s,e,t){const n=this.cache,i=e.length,r=Pr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qc,r[a])}function jp(s,e,t){const n=this.cache,i=e.length,r=Pr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Yc,r[a])}function Xp(s){switch(s){case 5126:return wp;case 35664:return Ap;case 35665:return Rp;case 35666:return Cp;case 35674:return Pp;case 35675:return Lp;case 35676:return Ip;case 5124:case 35670:return Dp;case 35667:case 35671:return Np;case 35668:case 35672:return Op;case 35669:case 35673:return Fp;case 5125:return Bp;case 36294:return kp;case 36295:return Hp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return jp}}class qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Up(t.type)}}class Yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xp(t.type)}}class Kp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Rl(s,e){s.seq.push(e),s.map[e.id]=e}function Qp(s,e,t){const n=s.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rl(t,c===void 0?new qp(o,s,e):new Yp(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Kp(o),Rl(t,d)),t=d}}}class dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Qp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Cl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Jp=37297;let Zp=0;function $p(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function eg(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===Mr&&t===xr?n="LinearDisplayP3ToLinearSRGB":e===xr&&t===Mr&&(n="LinearSRGBToLinearDisplayP3"),s){case Et:case Ar:return[n,"LinearTransferOETF"];case at:case Xa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+$p(s.getShaderSource(e),a)}else return i}function tg(s,e){const t=eg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ng(s,e){let t;switch(e){case ed:t="Linear";break;case td:t="Reinhard";break;case nd:t="OptimizedCineon";break;case xc:t="ACESFilmic";break;case sd:t="AgX";break;case id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ig(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zi).join(`
`)}function rg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ag(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function zi(s){return s!==""}function Ll(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Il(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(s){return s.replace(og,cg)}const lg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cg(s,e){let t=Oe[e];if(t===void 0){const n=lg.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(s){return s.replace(ug,dg)}function dg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function fg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yi:case Ki:e="ENVMAP_TYPE_CUBE";break;case wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function pg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Va:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case $u:e="ENVMAP_BLENDING_ADD";break}return e}function gg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _g(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hg(t),c=fg(t),u=mg(t),d=pg(t),h=gg(t),m=t.isWebGL2?"":ig(t),g=sg(t),_=rg(r),p=i.createProgram();let f,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zi).join(`
`),f.length>0&&(f+=`
`),x=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zi).join(`
`),x.length>0&&(x+=`
`)):(f=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),x=[m,Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Oe.tonemapping_pars_fragment:"",t.toneMapping!==$n?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=La(a),a=Ll(a,t),a=Il(a,t),o=La(o),o=Ll(o,t),o=Il(o,t),a=Dl(a),o=Dl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=v+f+a,A=v+x+o,w=Cl(i,i.VERTEX_SHADER,E),U=Cl(i,i.FRAGMENT_SHADER,A);i.attachShader(p,w),i.attachShader(p,U),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function H(Y){if(s.debug.checkShaderErrors){const le=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(w).trim(),N=i.getShaderInfoLog(U).trim();let V=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,U);else{const j=Pl(i,w,"vertex"),W=Pl(i,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+j+`
`+W)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(L===""||N==="")&&(X=!1);X&&(Y.diagnostics={runnable:V,programLog:le,vertexShader:{log:L,prefix:f},fragmentShader:{log:N,prefix:x}})}i.deleteShader(w),i.deleteShader(U),M=new dr(i,p),b=ag(i,p)}let M;this.getUniforms=function(){return M===void 0&&H(this),M};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(p,Jp)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=U,this}let vg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xg(e),t.set(e,n)),n}}class xg{constructor(e){this.id=vg++,this.code=e,this.usedTimes=0}}function Mg(s,e,t,n,i,r,a){const o=new Ya,l=new yg,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,b,z,Y,le){const L=Y.fog,N=le.geometry,V=M.isMeshStandardMaterial?Y.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),j=X&&X.mapping===wr?X.image.height:null,W=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,te=Z!==void 0?Z.length:0;let he=0;N.morphAttributes.position!==void 0&&(he=1),N.morphAttributes.normal!==void 0&&(he=2),N.morphAttributes.color!==void 0&&(he=3);let G,K,de,xe;if(W){const It=mn[W];G=It.vertexShader,K=It.fragmentShader}else G=M.vertexShader,K=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const ve=s.getRenderTarget(),Ce=le.isInstancedMesh===!0,Pe=le.isBatchedMesh===!0,be=!!M.map,We=!!M.matcap,D=!!X,gt=!!M.aoMap,Te=!!M.lightMap,Ae=!!M.bumpMap,pe=!!M.normalMap,et=!!M.displacementMap,Le=!!M.emissiveMap,T=!!M.metalnessMap,y=!!M.roughnessMap,O=M.anisotropy>0,ee=M.clearcoat>0,J=M.iridescence>0,$=M.sheen>0,_e=M.transmission>0,ce=O&&!!M.anisotropyMap,me=ee&&!!M.clearcoatMap,Ue=ee&&!!M.clearcoatNormalMap,De=ee&&!!M.clearcoatRoughnessMap,Q=J&&!!M.iridescenceMap,je=J&&!!M.iridescenceThicknessMap,R=$&&!!M.sheenColorMap,q=$&&!!M.sheenRoughnessMap,ae=!!M.specularMap,ne=!!M.specularColorMap,ye=!!M.specularIntensityMap,He=_e&&!!M.transmissionMap,Xe=_e&&!!M.thicknessMap,Be=!!M.gradientMap,re=!!M.alphaMap,P=M.alphaTest>0,ie=!!M.alphaHash,se=!!M.extensions,Ee=!!N.attributes.uv1,Me=!!N.attributes.uv2,qe=!!N.attributes.uv3;let Ye=$n;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ye=s.toneMapping),{isWebGL2:u,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:K,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pe,instancing:Ce,instancingColor:Ce&&le.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Et,map:be,matcap:We,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:j,aoMap:gt,lightMap:Te,bumpMap:Ae,normalMap:pe,displacementMap:h&&et,emissiveMap:Le,normalMapObjectSpace:pe&&M.normalMapType===_d,normalMapTangentSpace:pe&&M.normalMapType===ja,metalnessMap:T,roughnessMap:y,anisotropy:O,anisotropyMap:ce,clearcoat:ee,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:De,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:je,sheen:$,sheenColorMap:R,sheenRoughnessMap:q,specularMap:ae,specularColorMap:ne,specularIntensityMap:ye,transmission:_e,transmissionMap:He,thicknessMap:Xe,gradientMap:Be,opaque:M.transparent===!1&&M.blending===Gi,alphaMap:re,alphaTest:P,alphaHash:ie,combine:M.combine,mapUv:be&&_(M.map.channel),aoMapUv:gt&&_(M.aoMap.channel),lightMapUv:Te&&_(M.lightMap.channel),bumpMapUv:Ae&&_(M.bumpMap.channel),normalMapUv:pe&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:Le&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:ce&&_(M.anisotropyMap.channel),clearcoatMapUv:me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:q&&_(M.sheenRoughnessMap.channel),specularMapUv:ae&&_(M.specularMap.channel),specularColorMapUv:ne&&_(M.specularColorMap.channel),specularIntensityMapUv:ye&&_(M.specularIntensityMap.channel),transmissionMapUv:He&&_(M.transmissionMap.channel),thicknessMapUv:Xe&&_(M.thicknessMap.channel),alphaMapUv:re&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:Me,vertexUv3s:qe,pointsUvs:le.isPoints===!0&&!!N.attributes.uv&&(be||re),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:le.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,useLegacyLights:s._useLegacyLights,decodeVideoTexture:be&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qt,flipSided:M.side===Wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)b.push(z),b.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(x(b,M),v(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){const b=g[M.type];let z;if(b){const Y=mn[b];z=Us.clone(Y.uniforms)}else z=M.uniforms;return z}function A(M,b){let z;for(let Y=0,le=c.length;Y<le;Y++){const L=c[Y];if(L.cacheKey===b){z=L,++z.usedTimes;break}}return z===void 0&&(z=new _g(s,b,M,r),c.push(z)),z}function w(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function U(M){l.remove(M)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:A,releaseProgram:w,releaseShaderCache:U,programs:c,dispose:H}}function Sg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ol(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,m,g,_,p){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function o(d,h,m,g,_,p){const f=a(d,h,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function l(d,h,m,g,_,p){const f=a(d,h,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Tg),n.length>1&&n.sort(h||Ol),i.length>1&&i.sort(h||Ol)}function u(){for(let d=e,h=s.length;d<h;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Eg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Fl,s.set(n,[a])):i>=r.length?(a=new Fl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function bg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ge};break;case"SpotLight":t={position:new C,direction:new C,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Ug(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wg=0;function Ag(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Rg(s,e){const t=new bg,n=Ug(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new C);const r=new C,a=new Fe,o=new Fe;function l(u,d){let h=0,m=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let _=0,p=0,f=0,x=0,v=0,E=0,A=0,w=0,U=0,H=0,M=0;u.sort(Ag);const b=d===!0?Math.PI:1;for(let Y=0,le=u.length;Y<le;Y++){const L=u[Y],N=L.color,V=L.intensity,X=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*V*b,m+=N.g*V*b,g+=N.b*V*b;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],V);M++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const Z=L.shadow,te=n.get(L);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=L.shadow.matrix,E++}i.directional[_]=W,_++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(V*b),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[f]=W;const Z=L.shadow;if(L.map&&(i.spotLightMap[U]=L.map,U++,Z.updateMatrices(L),L.castShadow&&H++),i.spotLightMatrix[f]=Z.matrix,L.castShadow){const te=n.get(L);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.spotShadow[f]=te,i.spotShadowMap[f]=j,w++}f++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(N).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=W,x++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Z=L.shadow,te=n.get(L);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=L.shadow.matrix,A++}i.point[p]=W,p++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(V*b),W.groundColor.copy(L.groundColor).multiplyScalar(V*b),i.hemi[v]=W,v++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==f||z.rectAreaLength!==x||z.hemiLength!==v||z.numDirectionalShadows!==E||z.numPointShadows!==A||z.numSpotShadows!==w||z.numSpotMaps!==U||z.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=x,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+U-H,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=M,z.directionalLength=_,z.pointLength=p,z.spotLength=f,z.rectAreaLength=x,z.hemiLength=v,z.numDirectionalShadows=E,z.numPointShadows=A,z.numSpotShadows=w,z.numSpotMaps=U,z.numLightProbes=M,i.version=wg++)}function c(u,d){let h=0,m=0,g=0,_=0,p=0;const f=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const E=u[x];if(E.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),h++}else if(E.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function Bl(s,e){const t=new Rg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cg(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Bl(s,e),t.set(r,[l])):a>=o.length?(l=new Bl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jc extends bt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pg extends bt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dg(s,e,t){let n=new Qa;const i=new ue,r=new ue,a=new Ze,o=new Jc({depthPacking:Lc}),l=new Pg,c={},u=t.maxTextureSize,d={[Dn]:Wt,[Wt]:Dn,[Qt]:Qt},h=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let f=this.type;this.render=function(w,U,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(un),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const le=f!==Rn&&this.type===Rn,L=f===Rn&&this.type!==Rn;for(let N=0,V=w.length;N<V;N++){const X=w[N],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const W=j.getFrameExtents();if(i.multiply(W),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,j.mapSize.y=r.y)),j.map===null||le===!0||L===!0){const te=this.type!==Rn?{minFilter:xt,magFilter:xt}:{};j.map!==null&&j.map.dispose(),j.map=new Mt(i.x,i.y,te),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const Z=j.getViewportCount();for(let te=0;te<Z;te++){const he=j.getViewport(te);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),Y.viewport(a),j.updateMatrices(X,te),n=j.getFrustum(),E(U,H,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===Rn&&x(j,H),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(M,b,z)};function x(w,U){const H=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mt(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(U,null,H,h,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(U,null,H,m,_,null)}function v(w,U,H,M){let b=null;const z=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)b=z;else if(b=H.isPointLight===!0?l:o,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Y=b.uuid,le=U.uuid;let L=c[Y];L===void 0&&(L={},c[Y]=L);let N=L[le];N===void 0&&(N=b.clone(),L[le]=N,U.addEventListener("dispose",A)),b=N}if(b.visible=U.visible,b.wireframe=U.wireframe,M===Rn?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:d[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=s.properties.get(b);Y.light=H}return b}function E(w,U,H,M,b){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);const le=e.update(w),L=w.material;if(Array.isArray(L)){const N=le.groups;for(let V=0,X=N.length;V<X;V++){const j=N[V],W=L[j.materialIndex];if(W&&W.visible){const Z=v(w,W,M,b);w.onBeforeShadow(s,w,U,H,le,Z,j),s.renderBufferDirect(H,null,le,Z,w,j),w.onAfterShadow(s,w,U,H,le,Z,j)}}}else if(L.visible){const N=v(w,L,M,b);w.onBeforeShadow(s,w,U,H,le,N,null),s.renderBufferDirect(H,null,le,N,w,null),w.onAfterShadow(s,w,U,H,le,N,null)}}const Y=w.children;for(let le=0,L=Y.length;le<L;le++)E(Y[le],U,H,M,b)}function A(w){w.target.removeEventListener("dispose",A);for(const H in c){const M=c[H],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Ng(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const ie=new Ze;let se=null;const Ee=new Ze(0,0,0,0);return{setMask:function(Me){se!==Me&&!P&&(s.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){P=Me},setClear:function(Me,qe,Ye,_t,It){It===!0&&(Me*=_t,qe*=_t,Ye*=_t),ie.set(Me,qe,Ye,_t),Ee.equals(ie)===!1&&(s.clearColor(Me,qe,Ye,_t),Ee.copy(ie))},reset:function(){P=!1,se=null,Ee.set(-1,0,0,0)}}}function r(){let P=!1,ie=null,se=null,Ee=null;return{setTest:function(Me){Me?Pe(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Me){ie!==Me&&!P&&(s.depthMask(Me),ie=Me)},setFunc:function(Me){if(se!==Me){switch(Me){case ju:s.depthFunc(s.NEVER);break;case Xu:s.depthFunc(s.ALWAYS);break;case qu:s.depthFunc(s.LESS);break;case _r:s.depthFunc(s.LEQUAL);break;case Yu:s.depthFunc(s.EQUAL);break;case Ku:s.depthFunc(s.GEQUAL);break;case Qu:s.depthFunc(s.GREATER);break;case Ju:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=Me}},setLocked:function(Me){P=Me},setClear:function(Me){Ee!==Me&&(s.clearDepth(Me),Ee=Me)},reset:function(){P=!1,ie=null,se=null,Ee=null}}}function a(){let P=!1,ie=null,se=null,Ee=null,Me=null,qe=null,Ye=null,_t=null,It=null;return{setTest:function($e){P||($e?Pe(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function($e){ie!==$e&&!P&&(s.stencilMask($e),ie=$e)},setFunc:function($e,Dt,fn){(se!==$e||Ee!==Dt||Me!==fn)&&(s.stencilFunc($e,Dt,fn),se=$e,Ee=Dt,Me=fn)},setOp:function($e,Dt,fn){(qe!==$e||Ye!==Dt||_t!==fn)&&(s.stencilOp($e,Dt,fn),qe=$e,Ye=Dt,_t=fn)},setLocked:function($e){P=$e},setClear:function($e){It!==$e&&(s.clearStencil($e),It=$e)},reset:function(){P=!1,ie=null,se=null,Ee=null,Me=null,qe=null,Ye=null,_t=null,It=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,_=[],p=null,f=!1,x=null,v=null,E=null,A=null,w=null,U=null,H=null,M=new ge(0,0,0),b=0,z=!1,Y=null,le=null,L=null,N=null,V=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=W>=2);let te=null,he={};const G=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),de=new Ze().fromArray(G),xe=new Ze().fromArray(K);function ve(P,ie,se,Ee){const Me=new Uint8Array(4),qe=s.createTexture();s.bindTexture(P,qe),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<se;Ye++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ie,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(ie+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return qe}const Ce={};Ce[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(s.DEPTH_TEST),l.setFunc(_r),Le(!1),T(vo),Pe(s.CULL_FACE),pe(un);function Pe(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function be(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function We(P,ie){return m[P]!==ie?(s.bindFramebuffer(P,ie),m[P]=ie,n&&(P===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ie),P===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ie)),!0):!1}function D(P,ie){let se=_,Ee=!1;if(P)if(se=g.get(ie),se===void 0&&(se=[],g.set(ie,se)),P.isWebGLMultipleRenderTargets){const Me=P.texture;if(se.length!==Me.length||se[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ye=Me.length;qe<Ye;qe++)se[qe]=s.COLOR_ATTACHMENT0+qe;se.length=Me.length,Ee=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,Ee=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,Ee=!0);Ee&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function gt(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const Te={[ui]:s.FUNC_ADD,[Cu]:s.FUNC_SUBTRACT,[Pu]:s.FUNC_REVERSE_SUBTRACT};if(n)Te[Mo]=s.MIN,Te[So]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Te[Mo]=P.MIN_EXT,Te[So]=P.MAX_EXT)}const Ae={[Lu]:s.ZERO,[Iu]:s.ONE,[Du]:s.SRC_COLOR,[Ta]:s.SRC_ALPHA,[Hu]:s.SRC_ALPHA_SATURATE,[Bu]:s.DST_COLOR,[Ou]:s.DST_ALPHA,[Nu]:s.ONE_MINUS_SRC_COLOR,[Ea]:s.ONE_MINUS_SRC_ALPHA,[ku]:s.ONE_MINUS_DST_COLOR,[Fu]:s.ONE_MINUS_DST_ALPHA,[zu]:s.CONSTANT_COLOR,[Gu]:s.ONE_MINUS_CONSTANT_COLOR,[Vu]:s.CONSTANT_ALPHA,[Wu]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(P,ie,se,Ee,Me,qe,Ye,_t,It,$e){if(P===un){f===!0&&(be(s.BLEND),f=!1);return}if(f===!1&&(Pe(s.BLEND),f=!0),P!==Ru){if(P!==x||$e!==z){if((v!==ui||w!==ui)&&(s.blendEquation(s.FUNC_ADD),v=ui,w=ui),$e)switch(P){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFunc(s.ONE,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,A=null,U=null,H=null,M.set(0,0,0),b=0,x=P,z=$e}return}Me=Me||ie,qe=qe||se,Ye=Ye||Ee,(ie!==v||Me!==w)&&(s.blendEquationSeparate(Te[ie],Te[Me]),v=ie,w=Me),(se!==E||Ee!==A||qe!==U||Ye!==H)&&(s.blendFuncSeparate(Ae[se],Ae[Ee],Ae[qe],Ae[Ye]),E=se,A=Ee,U=qe,H=Ye),(_t.equals(M)===!1||It!==b)&&(s.blendColor(_t.r,_t.g,_t.b,It),M.copy(_t),b=It),x=P,z=!1}function et(P,ie){P.side===Qt?be(s.CULL_FACE):Pe(s.CULL_FACE);let se=P.side===Wt;ie&&(se=!se),Le(se),P.blending===Gi&&P.transparent===!1?pe(un):pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Ee=P.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(P){Y!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),Y=P)}function T(P){P!==Uu?(Pe(s.CULL_FACE),P!==le&&(P===vo?s.cullFace(s.BACK):P===wu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),le=P}function y(P){P!==L&&(j&&s.lineWidth(P),L=P)}function O(P,ie,se){P?(Pe(s.POLYGON_OFFSET_FILL),(N!==ie||V!==se)&&(s.polygonOffset(ie,se),N=ie,V=se)):be(s.POLYGON_OFFSET_FILL)}function ee(P){P?Pe(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function J(P){P===void 0&&(P=s.TEXTURE0+X-1),te!==P&&(s.activeTexture(P),te=P)}function $(P,ie,se){se===void 0&&(te===null?se=s.TEXTURE0+X-1:se=te);let Ee=he[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},he[se]=Ee),(Ee.type!==P||Ee.texture!==ie)&&(te!==se&&(s.activeTexture(se),te=se),s.bindTexture(P,ie||Ce[P]),Ee.type=P,Ee.texture=ie)}function _e(){const P=he[te];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){de.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function He(P){xe.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),xe.copy(P))}function Xe(P,ie){let se=d.get(ie);se===void 0&&(se=new WeakMap,d.set(ie,se));let Ee=se.get(P);Ee===void 0&&(Ee=s.getUniformBlockIndex(ie,P.name),se.set(P,Ee))}function Be(P,ie){const Ee=d.get(ie).get(P);u.get(ie)!==Ee&&(s.uniformBlockBinding(ie,Ee,P.__bindingPointIndex),u.set(ie,Ee))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,he={},m={},g=new WeakMap,_=[],p=null,f=!1,x=null,v=null,E=null,A=null,w=null,U=null,H=null,M=new ge(0,0,0),b=0,z=!1,Y=null,le=null,L=null,N=null,V=null,de.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:be,bindFramebuffer:We,drawBuffers:D,useProgram:gt,setBlending:pe,setMaterial:et,setFlipSided:Le,setCullFace:T,setLineWidth:y,setPolygonOffset:O,setScissorTest:ee,activeTexture:J,bindTexture:$,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:me,texImage2D:ae,texImage3D:ne,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:R,texStorage3D:q,texSubImage2D:Ue,texSubImage3D:De,compressedTexSubImage2D:Q,compressedTexSubImage3D:je,scissor:ye,viewport:He,reset:re}}function Og(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return m?new OffscreenCanvas(T,y):bs("canvas")}function _(T,y,O,ee){let J=1;if((T.width>ee||T.height>ee)&&(J=ee/Math.max(T.width,T.height)),J<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const $=y?Tr:Math.floor,_e=$(J*T.width),ce=$(J*T.height);d===void 0&&(d=g(_e,ce));const me=O?g(_e,ce):d;return me.width=_e,me.height=ce,me.getContext("2d").drawImage(T,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+ce+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Pa(T.width)&&Pa(T.height)}function f(T){return o?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==xt&&T.minFilter!==zt}function x(T,y){return T.generateMipmaps&&y&&T.minFilter!==xt&&T.minFilter!==zt}function v(T){s.generateMipmap(T)}function E(T,y,O,ee,J=!1){if(o===!1)return y;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),y===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8)),y===s.RGBA){const _e=J?yr:Ke.getTransfer(ee);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=_e===tt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(T,y,O){return x(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==xt&&T.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function w(T){return T===xt||T===wa||T===ur?s.NEAREST:s.LINEAR}function U(T){const y=T.target;y.removeEventListener("dispose",U),M(y),y.isVideoTexture&&u.delete(y)}function H(T){const y=T.target;y.removeEventListener("dispose",H),z(y)}function M(T){const y=n.get(T);if(y.__webglInit===void 0)return;const O=T.source,ee=h.get(O);if(ee){const J=ee[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(ee).length===0&&h.delete(O)}n.remove(T)}function b(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const O=T.source,ee=h.get(O);delete ee[y.__cacheKey],a.memory.textures--}function z(T){const y=T.texture,O=n.get(T),ee=n.get(y);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let $=0;$<O.__webglFramebuffer[J].length;$++)s.deleteFramebuffer(O.__webglFramebuffer[J][$]);else s.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)s.deleteFramebuffer(O.__webglFramebuffer[J]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,$=y.length;J<$;J++){const _e=n.get(y[J]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(y[J])}n.remove(y),n.remove(T)}let Y=0;function le(){Y=0}function L(){const T=Y;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),Y+=1,T}function N(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function V(T,y){const O=n.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(O,T,y);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function X(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){de(O,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function j(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){de(O,T,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function W(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){xe(O,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const Z={[Gt]:s.REPEAT,[tn]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},te={[xt]:s.NEAREST,[wa]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},he={[vd]:s.NEVER,[Ed]:s.ALWAYS,[yd]:s.LESS,[Ic]:s.LEQUAL,[xd]:s.EQUAL,[Td]:s.GEQUAL,[Md]:s.GREATER,[Sd]:s.NOTEQUAL};function G(T,y,O){if(O?(s.texParameteri(T,s.TEXTURE_WRAP_S,Z[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Z[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Z[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,te[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,te[y.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==tn||y.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,w(y.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==xt&&y.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,he[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===xt||y.minFilter!==ur&&y.minFilter!==_i||y.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ft&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function K(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",U));const ee=y.source;let J=h.get(ee);J===void 0&&(J={},h.set(ee,J));const $=N(y);if($!==T.__cacheKey){J[$]===void 0&&(J[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[$].usedTimes++;const _e=J[T.__cacheKey];_e!==void 0&&(J[T.__cacheKey].usedTimes--,_e.usedTimes===0&&b(y)),T.__cacheKey=$,T.__webglTexture=J[$].texture}return O}function de(T,y,O){let ee=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=s.TEXTURE_3D);const J=K(T,y),$=y.source;t.bindTexture(ee,T.__webglTexture,s.TEXTURE0+O);const _e=n.get($);if($.version!==_e.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const ce=Ke.getPrimaries(Ke.workingColorSpace),me=y.colorSpace===sn?null:Ke.getPrimaries(y.colorSpace),Ue=y.colorSpace===sn||ce===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const De=f(y)&&p(y.image)===!1;let Q=_(y.image,De,!1,i.maxTextureSize);Q=Le(y,Q);const je=p(Q)||o,R=r.convert(y.format,y.colorSpace);let q=r.convert(y.type),ae=E(y.internalFormat,R,q,y.colorSpace,y.isVideoTexture);G(ee,y,je);let ne;const ye=y.mipmaps,He=o&&y.isVideoTexture!==!0&&ae!==Rc,Xe=_e.__version===void 0||J===!0,Be=A(y,Q,je);if(y.isDepthTexture)ae=s.DEPTH_COMPONENT,o?y.type===Pn?ae=s.DEPTH_COMPONENT32F:y.type===Yn?ae=s.DEPTH_COMPONENT24:y.type===fi?ae=s.DEPTH24_STENCIL8:ae=s.DEPTH_COMPONENT16:y.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===mi&&ae===s.DEPTH_COMPONENT&&y.type!==Wa&&y.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Yn,q=r.convert(y.type)),y.format===Qi&&ae===s.DEPTH_COMPONENT&&(ae=s.DEPTH_STENCIL,y.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=fi,q=r.convert(y.type))),Xe&&(He?t.texStorage2D(s.TEXTURE_2D,1,ae,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ae,Q.width,Q.height,0,R,q,null));else if(y.isDataTexture)if(ye.length>0&&je){He&&Xe&&t.texStorage2D(s.TEXTURE_2D,Be,ae,ye[0].width,ye[0].height);for(let re=0,P=ye.length;re<P;re++)ne=ye[re],He?t.texSubImage2D(s.TEXTURE_2D,re,0,0,ne.width,ne.height,R,q,ne.data):t.texImage2D(s.TEXTURE_2D,re,ae,ne.width,ne.height,0,R,q,ne.data);y.generateMipmaps=!1}else He?(Xe&&t.texStorage2D(s.TEXTURE_2D,Be,ae,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,R,q,Q.data)):t.texImage2D(s.TEXTURE_2D,0,ae,Q.width,Q.height,0,R,q,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ae,ye[0].width,ye[0].height,Q.depth);for(let re=0,P=ye.length;re<P;re++)ne=ye[re],y.format!==nn?R!==null?He?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,Q.depth,R,ne.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,ae,ne.width,ne.height,Q.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,Q.depth,R,q,ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,ae,ne.width,ne.height,Q.depth,0,R,q,ne.data)}else{He&&Xe&&t.texStorage2D(s.TEXTURE_2D,Be,ae,ye[0].width,ye[0].height);for(let re=0,P=ye.length;re<P;re++)ne=ye[re],y.format!==nn?R!==null?He?t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,ne.width,ne.height,R,ne.data):t.compressedTexImage2D(s.TEXTURE_2D,re,ae,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(s.TEXTURE_2D,re,0,0,ne.width,ne.height,R,q,ne.data):t.texImage2D(s.TEXTURE_2D,re,ae,ne.width,ne.height,0,R,q,ne.data)}else if(y.isDataArrayTexture)He?(Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ae,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,R,q,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ae,Q.width,Q.height,Q.depth,0,R,q,Q.data);else if(y.isData3DTexture)He?(Xe&&t.texStorage3D(s.TEXTURE_3D,Be,ae,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,R,q,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ae,Q.width,Q.height,Q.depth,0,R,q,Q.data);else if(y.isFramebufferTexture){if(Xe)if(He)t.texStorage2D(s.TEXTURE_2D,Be,ae,Q.width,Q.height);else{let re=Q.width,P=Q.height;for(let ie=0;ie<Be;ie++)t.texImage2D(s.TEXTURE_2D,ie,ae,re,P,0,R,q,null),re>>=1,P>>=1}}else if(ye.length>0&&je){He&&Xe&&t.texStorage2D(s.TEXTURE_2D,Be,ae,ye[0].width,ye[0].height);for(let re=0,P=ye.length;re<P;re++)ne=ye[re],He?t.texSubImage2D(s.TEXTURE_2D,re,0,0,R,q,ne):t.texImage2D(s.TEXTURE_2D,re,ae,R,q,ne);y.generateMipmaps=!1}else He?(Xe&&t.texStorage2D(s.TEXTURE_2D,Be,ae,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,R,q,Q)):t.texImage2D(s.TEXTURE_2D,0,ae,R,q,Q);x(y,je)&&v(ee),_e.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function xe(T,y,O){if(y.image.length!==6)return;const ee=K(T,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const $=n.get(J);if(J.version!==$.__version||ee===!0){t.activeTexture(s.TEXTURE0+O);const _e=Ke.getPrimaries(Ke.workingColorSpace),ce=y.colorSpace===sn?null:Ke.getPrimaries(y.colorSpace),me=y.colorSpace===sn||_e===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Ue&&!De?Q[re]=_(y.image[re],!1,!0,i.maxCubemapSize):Q[re]=De?y.image[re].image:y.image[re],Q[re]=Le(y,Q[re]);const je=Q[0],R=p(je)||o,q=r.convert(y.format,y.colorSpace),ae=r.convert(y.type),ne=E(y.internalFormat,q,ae,y.colorSpace),ye=o&&y.isVideoTexture!==!0,He=$.__version===void 0||ee===!0;let Xe=A(y,je,R);G(s.TEXTURE_CUBE_MAP,y,R);let Be;if(Ue){ye&&He&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,ne,je.width,je.height);for(let re=0;re<6;re++){Be=Q[re].mipmaps;for(let P=0;P<Be.length;P++){const ie=Be[P];y.format!==nn?q!==null?ye?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ie.width,ie.height,q,ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ne,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ie.width,ie.height,q,ae,ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ne,ie.width,ie.height,0,q,ae,ie.data)}}}else{Be=y.mipmaps,ye&&He&&(Be.length>0&&Xe++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,ne,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(De){ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,q,ae,Q[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ne,Q[re].width,Q[re].height,0,q,ae,Q[re].data);for(let P=0;P<Be.length;P++){const se=Be[P].image[re].image;ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,se.width,se.height,q,ae,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ne,se.width,se.height,0,q,ae,se.data)}}else{ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,q,ae,Q[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ne,q,ae,Q[re]);for(let P=0;P<Be.length;P++){const ie=Be[P];ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,q,ae,ie.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ne,q,ae,ie.image[re])}}}x(y,R)&&v(s.TEXTURE_CUBE_MAP),$.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ve(T,y,O,ee,J,$){const _e=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),me=E(O.internalFormat,_e,ce,O.colorSpace);if(!n.get(y).__hasExternalTextures){const De=Math.max(1,y.width>>$),Q=Math.max(1,y.height>>$);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,$,me,De,Q,y.depth,0,_e,ce,null):t.texImage2D(J,$,me,De,Q,0,_e,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,J,n.get(O).__webglTexture,0,Ae(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,J,n.get(O).__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(T,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let ee=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||pe(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===Pn?ee=s.DEPTH_COMPONENT32F:J.type===Yn&&(ee=s.DEPTH_COMPONENT24));const $=Ae(y);pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,ee,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,$,ee,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const ee=Ae(y);O&&pe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0;J<ee.length;J++){const $=ee[J],_e=r.convert($.format,$.colorSpace),ce=r.convert($.type),me=E($.internalFormat,_e,ce,$.colorSpace),Ue=Ae(y);O&&pe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,me,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,me,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const ee=n.get(y.depthTexture).__webglTexture,J=Ae(y);if(y.depthTexture.format===mi)pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Qi)pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function be(T){const y=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=s.createRenderbuffer(),Ce(y.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Ce(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(T,y,O){const ee=n.get(T);y!==void 0&&ve(ee.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&be(T)}function D(T){const y=T.texture,O=n.get(T),ee=n.get(y);T.addEventListener("dispose",H),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=y.version,a.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,$=T.isWebGLMultipleRenderTargets===!0,_e=p(T)||o;if(J){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let me=0;me<y.mipmaps.length;me++)O.__webglFramebuffer[ce][me]=s.createFramebuffer()}else O.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)O.__webglFramebuffer[ce]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if($)if(i.drawBuffers){const ce=T.texture;for(let me=0,Ue=ce.length;me<Ue;me++){const De=n.get(ce[me]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&pe(T)===!1){const ce=$?y:[y];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const Ue=ce[me];O.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const De=r.convert(Ue.format,Ue.colorSpace),Q=r.convert(Ue.type),je=E(Ue.internalFormat,De,Q,Ue.colorSpace,T.isXRRenderTarget===!0),R=Ae(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,R,je,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,O.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),G(s.TEXTURE_CUBE_MAP,y,_e);for(let ce=0;ce<6;ce++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)ve(O.__webglFramebuffer[ce][me],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ve(O.__webglFramebuffer[ce],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(y,_e)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const ce=T.texture;for(let me=0,Ue=ce.length;me<Ue;me++){const De=ce[me],Q=n.get(De);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),G(s.TEXTURE_2D,De,_e),ve(O.__webglFramebuffer,T,De,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),x(De,_e)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ce=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),G(ce,y,_e),o&&y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)ve(O.__webglFramebuffer[me],T,y,s.COLOR_ATTACHMENT0,ce,me);else ve(O.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,ce,0);x(y,_e)&&v(ce),t.unbindTexture()}T.depthBuffer&&be(T)}function gt(T){const y=p(T)||o,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,J=O.length;ee<J;ee++){const $=O[ee];if(x($,y)){const _e=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ce=n.get($).__webglTexture;t.bindTexture(_e,ce),v(_e),t.unbindTexture()}}}function Te(T){if(o&&T.samples>0&&pe(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,ee=T.height;let J=s.COLOR_BUFFER_BIT;const $=[],_e=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(T),me=T.isWebGLMultipleRenderTargets===!0;if(me)for(let Ue=0;Ue<y.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){$.push(s.COLOR_ATTACHMENT0+Ue),T.depthBuffer&&$.push(_e);const De=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(De===!1&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Ue]),De===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_e]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_e])),me){const Q=n.get(y[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,O,ee,0,0,O,ee,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Ue=0;Ue<y.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Ue]);const De=n.get(y[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ae(T){return Math.min(i.maxSamples,T.samples)}function pe(T){const y=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(T){const y=a.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Le(T,y){const O=T.colorSpace,ee=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ca||O!==Et&&O!==sn&&(Ke.getTransfer(O)===tt?o===!1?e.has("EXT_sRGB")===!0&&ee===nn?(T.format=Ca,T.minFilter=zt,T.generateMipmaps=!1):y=Oc.sRGBToLinear(y):(ee!==nn||J!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=L,this.resetTextureUnits=le,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=D,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe}function Fg(s,e,t){const n=t.isWebGL2;function i(r,a=sn){let o;const l=Ke.getTransfer(a);if(r===ei)return s.UNSIGNED_BYTE;if(r===Ec)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ad)return s.BYTE;if(r===od)return s.SHORT;if(r===Wa)return s.UNSIGNED_SHORT;if(r===Tc)return s.INT;if(r===Yn)return s.UNSIGNED_INT;if(r===Pn)return s.FLOAT;if(r===Ft)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ld)return s.ALPHA;if(r===nn)return s.RGBA;if(r===cd)return s.LUMINANCE;if(r===ud)return s.LUMINANCE_ALPHA;if(r===mi)return s.DEPTH_COMPONENT;if(r===Qi)return s.DEPTH_STENCIL;if(r===Ca)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===dd)return s.RED;if(r===Uc)return s.RED_INTEGER;if(r===hd)return s.RG;if(r===wc)return s.RG_INTEGER;if(r===Ac)return s.RGBA_INTEGER;if(r===Br||r===kr||r===Hr||r===zr)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Br)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Br)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eo||r===bo||r===Uo||r===wo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ao||r===Ro)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ao)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ro)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Co||r===Po||r===Lo||r===Io||r===Do||r===No||r===Oo||r===Fo||r===Bo||r===ko||r===Ho||r===zo||r===Go||r===Vo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Co)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Po)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Io)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Do)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===No)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ko)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ho)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Go)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gr||r===Wo||r===jo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Gr)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fd||r===Xo||r===qo||r===Yo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Gr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Bg extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kg={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hg extends yi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const x=[],v=[],E=new ue;let A=null;const w=new Bt;w.layers.enable(1),w.viewport=new Ze;const U=new Bt;U.layers.enable(2),U.viewport=new Ze;const H=[w,U],M=new Bg;M.layers.enable(1),M.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=x[G];return K===void 0&&(K=new ha,x[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=x[G];return K===void 0&&(K=new ha,x[G]=K),K.getGripSpace()},this.getHand=function(G){let K=x[G];return K===void 0&&(K=new ha,x[G]=K),K.getHandSpace()};function Y(G){const K=v.indexOf(G.inputSource);if(K===-1)return;const de=x[K];de!==void 0&&(de.update(G.inputSource,G.frame,c||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function le(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",L);for(let G=0;G<x.length;G++){const K=v[G];K!==null&&(v[G]=null,x[G].disconnect(K))}b=null,z=null,e.setRenderTarget(p),m=null,h=null,d=null,i=null,f=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",le),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Mt(m.framebufferWidth,m.framebufferHeight,{format:nn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,de=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Qi:mi,de=_.stencil?fi:Yn);const ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ve),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Mt(h.textureWidth,h.textureHeight,{format:nn,type:ei,depthTexture:new jc(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(f);Ce.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(G){for(let K=0;K<G.removed.length;K++){const de=G.removed[K],xe=v.indexOf(de);xe>=0&&(v[xe]=null,x[xe].disconnect(de))}for(let K=0;K<G.added.length;K++){const de=G.added[K];let xe=v.indexOf(de);if(xe===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=v.length){v.push(de),xe=Ce;break}else if(v[Ce]===null){v[Ce]=de,xe=Ce;break}if(xe===-1)break}const ve=x[xe];ve&&ve.connect(de)}}const N=new C,V=new C;function X(G,K,de){N.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const xe=N.distanceTo(V),ve=K.projectionMatrix.elements,Ce=de.projectionMatrix.elements,Pe=ve[14]/(ve[10]-1),be=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],D=(ve[9]-1)/ve[5],gt=(ve[8]-1)/ve[0],Te=(Ce[8]+1)/Ce[0],Ae=Pe*gt,pe=Pe*Te,et=xe/(-gt+Te),Le=et*-gt;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Le),G.translateZ(et),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=Pe+et,y=be+et,O=Ae-Le,ee=pe+(xe-Le),J=We*be/y*T,$=D*be/y*T;G.projectionMatrix.makePerspective(O,ee,J,$,T,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function j(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;M.near=U.near=w.near=G.near,M.far=U.far=w.far=G.far,(b!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,z=M.far);const K=G.parent,de=M.cameras;j(M,K);for(let xe=0;xe<de.length;xe++)j(de[xe],K);de.length===2?X(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),W(G,M,K)};function W(G,K,de){de===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Zi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let Z=null;function te(G,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let xe=!1;de.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let ve=0;ve<de.length;ve++){const Ce=de[ve];let Pe=null;if(m!==null)Pe=m.getViewport(Ce);else{const We=d.getViewSubImage(h,Ce);Pe=We.viewport,ve===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let be=H[ve];be===void 0&&(be=new Bt,be.layers.enable(ve),be.viewport=new Ze,H[ve]=be),be.matrix.fromArray(Ce.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ce.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ve===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push(be)}}for(let de=0;de<x.length;de++){const xe=v[de],ve=x[de];xe!==null&&ve!==void 0&&ve.update(xe,K,c||a)}Z&&Z(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const he=new Wc;he.setAnimationLoop(te),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function zg(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Gc(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,x,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,x,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,x,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const x=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gg(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const E=v.program;n.uniformBlockBinding(x,E)}function c(x,v){let E=i[x.id];E===void 0&&(g(x),E=u(x),i[x.id]=E,x.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(x,A);const w=e.render.frame;r[x.id]!==w&&(h(x),r[x.id]=w)}function u(x){const v=d();x.__bindingPointIndex=v;const E=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],E=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,U=E.length;w<U;w++){const H=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,b=H.length;M<b;M++){const z=H[M];if(m(z,w,M,A)===!0){const Y=z.__offset,le=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let N=0;N<le.length;N++){const V=le[N],X=_(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,Y+L,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(x,v,E,A){const w=x.value,U=v+"_"+E;if(A[U]===void 0)return typeof w=="number"||typeof w=="boolean"?A[U]=w:A[U]=w.clone(),!0;{const H=A[U];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return A[U]=w,!0}else if(H.equals(w)===!1)return H.copy(w),!0}return!1}function g(x){const v=x.uniforms;let E=0;const A=16;for(let U=0,H=v.length;U<H;U++){const M=Array.isArray(v[U])?v[U]:[v[U]];for(let b=0,z=M.length;b<z;b++){const Y=M[b],le=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,N=le.length;L<N;L++){const V=le[L],X=_(V),j=E%A;j!==0&&A-j<X.boundary&&(E+=A-j),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=X.storage}}}const w=E%A;return w>0&&(E+=A-w),x.__size=E,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Zc{constructor(e={}){const{canvas:t=kd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let E=!1,A=0,w=0,U=null,H=-1,M=null;const b=new Ze,z=new Ze;let Y=null;const le=new ge(0);let L=0,N=t.width,V=t.height,X=1,j=null,W=null;const Z=new Ze(0,0,N,V),te=new Ze(0,0,N,V);let he=!1;const G=new Qa;let K=!1,de=!1,xe=null;const ve=new Fe,Ce=new ue,Pe=new C,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return U===null?X:1}let D=n;function gt(S,I){for(let B=0;B<S.length;B++){const k=S[B],F=t.getContext(k,I);if(F!==null)return F}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ga}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),D=gt(I,S),D===null)throw gt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,Ae,pe,et,Le,T,y,O,ee,J,$,_e,ce,me,Ue,De,Q,je,R,q,ae,ne,ye,He;function Xe(){Te=new $m(D),Ae=new qm(D,Te,e),Te.init(Ae),ne=new Fg(D,Te,Ae),pe=new Ng(D,Te,Ae),et=new np(D),Le=new Sg,T=new Og(D,Te,pe,Le,Ae,ne,et),y=new Km(v),O=new Zm(v),ee=new ch(D,Ae),ye=new jm(D,Te,ee,Ae),J=new ep(D,ee,et,ye),$=new ap(D,J,ee,et),R=new rp(D,Ae,T),De=new Ym(Le),_e=new Mg(v,y,O,Te,Ae,ye,De),ce=new zg(v,Le),me=new Eg,Ue=new Cg(Te,Ae),je=new Wm(v,y,O,pe,$,h,l),Q=new Dg(v,$,Ae),He=new Gg(D,et,Ae,pe),q=new Xm(D,Te,et,Ae),ae=new tp(D,Te,et,Ae),et.programs=_e.programs,v.capabilities=Ae,v.extensions=Te,v.properties=Le,v.renderLists=me,v.shadowMap=Q,v.state=pe,v.info=et}Xe();const Be=new Hg(v,D);this.xr=Be,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(N,V,!1))},this.getSize=function(S){return S.set(N,V)},this.setSize=function(S,I,B=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,V=I,t.width=Math.floor(S*X),t.height=Math.floor(I*X),B===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(N*X,V*X).floor()},this.setDrawingBufferSize=function(S,I,B){N=S,V=I,X=B,t.width=Math.floor(S*B),t.height=Math.floor(I*B),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,I,B,k){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,I,B,k),pe.viewport(b.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(S){return S.copy(te)},this.setScissor=function(S,I,B,k){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,I,B,k),pe.scissor(z.copy(te).multiplyScalar(X).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){pe.setScissorTest(he=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(S=!0,I=!0,B=!0){let k=0;if(S){let F=!1;if(U!==null){const fe=U.texture.format;F=fe===Ac||fe===wc||fe===Uc}if(F){const fe=U.texture.type,Se=fe===ei||fe===Yn||fe===Wa||fe===fi||fe===Ec||fe===bc,we=je.getClearColor(),Re=je.getClearAlpha(),ke=we.r,Ie=we.g,Ne=we.b;Se?(m[0]=ke,m[1]=Ie,m[2]=Ne,m[3]=Re,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=ke,g[1]=Ie,g[2]=Ne,g[3]=Re,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}I&&(k|=D.DEPTH_BUFFER_BIT),B&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),me.dispose(),Ue.dispose(),Le.dispose(),y.dispose(),O.dispose(),$.dispose(),ye.dispose(),He.dispose(),_e.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",It),Be.removeEventListener("sessionend",$e),xe&&(xe.dispose(),xe=null),Dt.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=et.autoReset,I=Q.enabled,B=Q.autoUpdate,k=Q.needsUpdate,F=Q.type;Xe(),et.autoReset=S,Q.enabled=I,Q.autoUpdate=B,Q.needsUpdate=k,Q.type=F}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){const I=S.target;I.removeEventListener("dispose",se),Ee(I)}function Ee(S){Me(S),Le.remove(S)}function Me(S){const I=Le.get(S).programs;I!==void 0&&(I.forEach(function(B){_e.releaseProgram(B)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,B,k,F,fe){I===null&&(I=be);const Se=F.isMesh&&F.matrixWorld.determinant()<0,we=Su(S,I,B,k,F);pe.setMaterial(k,Se);let Re=B.index,ke=1;if(k.wireframe===!0){if(Re=J.getWireframeAttribute(B),Re===void 0)return;ke=2}const Ie=B.drawRange,Ne=B.attributes.position;let ct=Ie.start*ke,Xt=(Ie.start+Ie.count)*ke;fe!==null&&(ct=Math.max(ct,fe.start*ke),Xt=Math.min(Xt,(fe.start+fe.count)*ke)),Re!==null?(ct=Math.max(ct,0),Xt=Math.min(Xt,Re.count)):Ne!=null&&(ct=Math.max(ct,0),Xt=Math.min(Xt,Ne.count));const vt=Xt-ct;if(vt<0||vt===1/0)return;ye.setup(F,k,we,B,Re);let Sn,rt=q;if(Re!==null&&(Sn=ee.get(Re),rt=ae,rt.setIndex(Sn)),F.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*We()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(F.isLine){let ze=k.linewidth;ze===void 0&&(ze=1),pe.setLineWidth(ze*We()),F.isLineSegments?rt.setMode(D.LINES):F.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else F.isPoints?rt.setMode(D.POINTS):F.isSprite&&rt.setMode(D.TRIANGLES);if(F.isBatchedMesh)rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)rt.renderInstances(ct,vt,F.count);else if(B.isInstancedBufferGeometry){const ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Dr=Math.min(B.instanceCount,ze);rt.renderInstances(ct,vt,Dr)}else rt.render(ct,vt)};function qe(S,I,B){S.transparent===!0&&S.side===Qt&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,Is(S,I,B),S.side=Dn,S.needsUpdate=!0,Is(S,I,B),S.side=Qt):Is(S,I,B)}this.compile=function(S,I,B=null){B===null&&(B=S),p=Ue.get(B),p.init(),x.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(v._useLegacyLights);const k=new Set;return S.traverse(function(F){const fe=F.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const we=fe[Se];qe(we,B,F),k.add(we)}else qe(fe,B,F),k.add(fe)}),x.pop(),p=null,k},this.compileAsync=function(S,I,B=null){const k=this.compile(S,I,B);return new Promise(F=>{function fe(){if(k.forEach(function(Se){Le.get(Se).currentProgram.isReady()&&k.delete(Se)}),k.size===0){F(S);return}setTimeout(fe,10)}Te.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ye=null;function _t(S){Ye&&Ye(S)}function It(){Dt.stop()}function $e(){Dt.start()}const Dt=new Wc;Dt.setAnimationLoop(_t),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(S){Ye=S,Be.setAnimationLoop(S),S===null?Dt.stop():Dt.start()},Be.addEventListener("sessionstart",It),Be.addEventListener("sessionend",$e),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(I),I=Be.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,I,U),p=Ue.get(S,x.length),p.init(),x.push(p),ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(ve),de=this.localClippingEnabled,K=De.init(this.clippingPlanes,de),_=me.get(S,f.length),_.init(),f.push(_),fn(S,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,W),this.info.render.frame++,K===!0&&De.beginShadows();const B=p.state.shadowsArray;if(Q.render(B,S,I),K===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,S),p.setupLights(v._useLegacyLights),I.isArrayCamera){const k=I.cameras;for(let F=0,fe=k.length;F<fe;F++){const Se=k[F];ho(_,S,Se,Se.viewport)}}else ho(_,S,I);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(v,S,I),ye.resetDefaultState(),H=-1,M=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function fn(S,I,B,k){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){k&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const Se=$.update(S),we=S.material;we.visible&&_.push(S,Se,we,B,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){const Se=$.update(S),we=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Pe.copy(Se.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(we)){const Re=Se.groups;for(let ke=0,Ie=Re.length;ke<Ie;ke++){const Ne=Re[ke],ct=we[Ne.materialIndex];ct&&ct.visible&&_.push(S,Se,ct,B,Pe.z,Ne)}}else we.visible&&_.push(S,Se,we,B,Pe.z,null)}}const fe=S.children;for(let Se=0,we=fe.length;Se<we;Se++)fn(fe[Se],I,B,k)}function ho(S,I,B,k){const F=S.opaque,fe=S.transmissive,Se=S.transparent;p.setupLightsView(B),K===!0&&De.setGlobalState(v.clippingPlanes,B),fe.length>0&&Mu(F,fe,I,B),k&&pe.viewport(b.copy(k)),F.length>0&&Ls(F,I,B),fe.length>0&&Ls(fe,I,B),Se.length>0&&Ls(Se,I,B),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Mu(S,I,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const fe=Ae.isWebGL2;xe===null&&(xe=new Mt(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Ft:ei,minFilter:_i,samples:fe?4:0})),v.getDrawingBufferSize(Ce),fe?xe.setSize(Ce.x,Ce.y):xe.setSize(Tr(Ce.x),Tr(Ce.y));const Se=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(le),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=$n,Ls(S,B,k),T.updateMultisampleRenderTarget(xe),T.updateRenderTargetMipmap(xe);let Re=!1;for(let ke=0,Ie=I.length;ke<Ie;ke++){const Ne=I[ke],ct=Ne.object,Xt=Ne.geometry,vt=Ne.material,Sn=Ne.group;if(vt.side===Qt&&ct.layers.test(k.layers)){const rt=vt.side;vt.side=Wt,vt.needsUpdate=!0,fo(ct,B,k,Xt,vt,Sn),vt.side=rt,vt.needsUpdate=!0,Re=!0}}Re===!0&&(T.updateMultisampleRenderTarget(xe),T.updateRenderTargetMipmap(xe)),v.setRenderTarget(Se),v.setClearColor(le,L),v.toneMapping=we}function Ls(S,I,B){const k=I.isScene===!0?I.overrideMaterial:null;for(let F=0,fe=S.length;F<fe;F++){const Se=S[F],we=Se.object,Re=Se.geometry,ke=k===null?Se.material:k,Ie=Se.group;we.layers.test(B.layers)&&fo(we,I,B,Re,ke,Ie)}}function fo(S,I,B,k,F,fe){S.onBeforeRender(v,I,B,k,F,fe),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,I,B,k,S,fe),F.transparent===!0&&F.side===Qt&&F.forceSinglePass===!1?(F.side=Wt,F.needsUpdate=!0,v.renderBufferDirect(B,I,k,F,S,fe),F.side=Dn,F.needsUpdate=!0,v.renderBufferDirect(B,I,k,F,S,fe),F.side=Qt):v.renderBufferDirect(B,I,k,F,S,fe),S.onAfterRender(v,I,B,k,F,fe)}function Is(S,I,B){I.isScene!==!0&&(I=be);const k=Le.get(S),F=p.state.lights,fe=p.state.shadowsArray,Se=F.state.version,we=_e.getParameters(S,F.state,fe,I,B),Re=_e.getProgramCacheKey(we);let ke=k.programs;k.environment=S.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||k.environment),ke===void 0&&(S.addEventListener("dispose",se),ke=new Map,k.programs=ke);let Ie=ke.get(Re);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===Se)return po(S,we),Ie}else we.uniforms=_e.getUniforms(S),S.onBuild(B,we,v),S.onBeforeCompile(we,v),Ie=_e.acquireProgram(we,Re),ke.set(Re,Ie),k.uniforms=we.uniforms;const Ne=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=De.uniform),po(S,we),k.needsLights=Eu(S),k.lightsStateVersion=Se,k.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function mo(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=dr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function po(S,I){const B=Le.get(S);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Su(S,I,B,k,F){I.isScene!==!0&&(I=be),T.resetTextureUnits();const fe=I.fog,Se=k.isMeshStandardMaterial?I.environment:null,we=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Et,Re=(k.isMeshStandardMaterial?O:y).get(k.envMap||Se),ke=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ne=!!B.morphAttributes.position,ct=!!B.morphAttributes.normal,Xt=!!B.morphAttributes.color;let vt=$n;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(vt=v.toneMapping);const Sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=Sn!==void 0?Sn.length:0,ze=Le.get(k),Dr=p.state.lights;if(K===!0&&(de===!0||S!==M)){const Jt=S===M&&k.id===H;De.setState(k,S,Jt)}let ot=!1;k.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Dr.state.version||ze.outputColorSpace!==we||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==Re||k.fog===!0&&ze.fog!==fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==De.numPlanes||ze.numIntersection!==De.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Ie||ze.morphTargets!==Ne||ze.morphNormals!==ct||ze.morphColors!==Xt||ze.toneMapping!==vt||Ae.isWebGL2===!0&&ze.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,ze.__version=k.version);let ni=ze.currentProgram;ot===!0&&(ni=Is(k,I,F));let go=!1,us=!1,Nr=!1;const wt=ni.getUniforms(),ii=ze.uniforms;if(pe.useProgram(ni.program)&&(go=!0,us=!0,Nr=!0),k.id!==H&&(H=k.id,us=!0),go||M!==S){wt.setValue(D,"projectionMatrix",S.projectionMatrix),wt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Jt=wt.map.cameraPosition;Jt!==void 0&&Jt.setValue(D,Pe.setFromMatrixPosition(S.matrixWorld)),Ae.logarithmicDepthBuffer&&wt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&wt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,us=!0,Nr=!0)}if(F.isSkinnedMesh){wt.setOptional(D,F,"bindMatrix"),wt.setOptional(D,F,"bindMatrixInverse");const Jt=F.skeleton;Jt&&(Ae.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),wt.setValue(D,"boneTexture",Jt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(wt.setOptional(D,F,"batchingTexture"),wt.setValue(D,"batchingTexture",F._matricesTexture,T));const Or=B.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&Ae.isWebGL2===!0)&&R.update(F,B,ni),(us||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,wt.setValue(D,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ii.envMap.value=Re,ii.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),us&&(wt.setValue(D,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Tu(ii,Nr),fe&&k.fog===!0&&ce.refreshFogUniforms(ii,fe),ce.refreshMaterialUniforms(ii,k,X,V,xe),dr.upload(D,mo(ze),ii,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(dr.upload(D,mo(ze),ii,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&wt.setValue(D,"center",F.center),wt.setValue(D,"modelViewMatrix",F.modelViewMatrix),wt.setValue(D,"normalMatrix",F.normalMatrix),wt.setValue(D,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Jt=k.uniformsGroups;for(let Fr=0,bu=Jt.length;Fr<bu;Fr++)if(Ae.isWebGL2){const _o=Jt[Fr];He.update(_o,ni),He.bind(_o,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Tu(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Eu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,I,B){Le.get(S.texture).__webglTexture=I,Le.get(S.depthTexture).__webglTexture=B;const k=Le.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const B=Le.get(S);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,B=0){U=S,A=I,w=B;let k=!0,F=null,fe=!1,Se=!1;if(S){const Re=Le.get(S);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):Re.__webglFramebuffer===void 0?T.setupRenderTarget(S):Re.__hasExternalTextures&&T.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const Ie=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?F=Ie[I][B]:F=Ie[I],fe=!0):Ae.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?F=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[B]:F=Ie,b.copy(S.viewport),z.copy(S.scissor),Y=S.scissorTest}else b.copy(Z).multiplyScalar(X).floor(),z.copy(te).multiplyScalar(X).floor(),Y=he;if(pe.bindFramebuffer(D.FRAMEBUFFER,F)&&Ae.drawBuffers&&k&&pe.drawBuffers(S,F),pe.viewport(b),pe.scissor(z),pe.setScissorTest(Y),fe){const Re=Le.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,B)}else if(Se){const Re=Le.get(S.texture),ke=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,B||0,ke)}H=-1},this.readRenderTargetPixels=function(S,I,B,k,F,fe,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){pe.bindFramebuffer(D.FRAMEBUFFER,we);try{const Re=S.texture,ke=Re.format,Ie=Re.type;if(ke!==nn&&ne.convert(ke)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===Ft&&(Te.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ie!==ei&&ne.convert(Ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Pn&&(Ae.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-k&&B>=0&&B<=S.height-F&&D.readPixels(I,B,k,F,ne.convert(ke),ne.convert(Ie),fe)}finally{const Re=U!==null?Le.get(U).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(S,I,B=0){const k=Math.pow(2,-B),F=Math.floor(I.image.width*k),fe=Math.floor(I.image.height*k);T.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,S.x,S.y,F,fe),pe.unbindTexture()},this.copyTextureToTexture=function(S,I,B,k=0){const F=I.image.width,fe=I.image.height,Se=ne.convert(B.format),we=ne.convert(B.type);T.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,S.x,S.y,F,fe,Se,we,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,k,S.x,S.y,Se,we,I.image),k===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(S,I,B,k,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,we=S.max.z-S.min.z+1,Re=ne.convert(k.format),ke=ne.convert(k.type);let Ie;if(k.isData3DTexture)T.setTexture3D(k,0),Ie=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)T.setTexture2DArray(k,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ne=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xt=D.getParameter(D.UNPACK_SKIP_PIXELS),vt=D.getParameter(D.UNPACK_SKIP_ROWS),Sn=D.getParameter(D.UNPACK_SKIP_IMAGES),rt=B.isCompressedTexture?B.mipmaps[F]:B.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?D.texSubImage3D(Ie,F,I.x,I.y,I.z,fe,Se,we,Re,ke,rt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ie,F,I.x,I.y,I.z,fe,Se,we,Re,rt.data)):D.texSubImage3D(Ie,F,I.x,I.y,I.z,fe,Se,we,Re,ke,rt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Sn),F===0&&k.generateMipmaps&&D.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){A=0,w=0,U=null,pe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xa?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ar?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?pi:Pc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pi?at:Et}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vg extends Zc{}Vg.prototype.isWebGL1Renderer=!0;class Wg extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new C;class $a{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kl=new C,Hl=new Ze,zl=new Ze,Xg=new C,Gl=new Fe,nr=new C,fa=new xn,Vl=new Fe,ma=new ss;class qg extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=To,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nr),this.boundingBox.expandByPoint(nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nr),this.boundingSphere.expandByPoint(nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1&&(Vl.copy(i).invert(),ma.copy(e.ray).applyMatrix4(Vl),!(this.boundingBox!==null&&ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===To?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Hl.fromBufferAttribute(i.attributes.skinIndex,e),zl.fromBufferAttribute(i.attributes.skinWeight,e),kl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=zl.getComponent(r);if(a!==0){const o=Hl.getComponent(r);Gl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xg.copy(kl).applyMatrix4(Gl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class $c extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yg extends Tt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=xt,u=xt,d,h){super(null,a,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=new Fe,Kg=new Fe;class eo{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Kg;Wl.multiplyMatrices(o,t[r]),Wl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new eo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yg(t,e,e,nn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $c),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ia extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new Fe,jl=new Fe,ir=[],Xl=new On,Qg=new Fe,ps=new St,gs=new xn;class Jg extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Xl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Xl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),gs.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),e.ray.intersectsSphere(gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ki),jl.multiplyMatrices(n,ki),ps.matrixWorld=jl,ps.raycast(e,ir);for(let a=0,o=ir.length;a<o;a++){const l=ir[a];l.instanceId=r,l.object=this,t.push(l)}ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends bt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new C,Yl=new C,Kl=new Fe,pa=new ss,sr=new xn;class no extends st{constructor(e=new jt,t=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ql.fromBufferAttribute(t,i-1),Yl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ql.distanceTo(Yl);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Kl.copy(i).invert(),pa.copy(e.ray).applyMatrix4(Kl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,d=new C,h=new C,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=f,E=x-1;v<E;v+=m){const A=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,w),pa.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(h);H<e.near||H>e.far||t.push({distance:H,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=f,E=x-1;v<E;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),pa.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ql=new C,Jl=new C;class Zg extends no{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ql.fromBufferAttribute(t,i),Jl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ql.distanceTo(Jl);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eu extends no{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tu extends bt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zl=new Fe,Da=new ss,rr=new xn,ar=new C;class $g extends st{constructor(e=new jt,t=new tu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;Zl.copy(i).invert(),Da.copy(e.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,_=m;g<_;g++){const p=c.getX(g);ar.fromBufferAttribute(d,p),$l(ar,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=h,_=m;g<_;g++)ar.fromBufferAttribute(d,g),$l(ar,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $l(s,e,t,n,i,r,a){const o=Da.distanceSqToPoint(s);if(o<t){const l=new C;Da.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Er extends Tt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class e_{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],h=n[i+1]-u,m=(a-u)/h;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ue:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],a=[],o=new C,l=new Fe;for(let m=0;m<=e;m++){const g=m/e;i[m]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ht(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(ht(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class t_ extends e_{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ue,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*d+this.aX,c=h*d+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class io extends jt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,m=new C,g=new ue;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const p=_*(n+1);for(let f=0;f<n;f++){const x=f+p,v=x,E=x+n+1,A=x+n+2,w=x+1;o.push(v,E,w),o.push(E,A,w)}}this.setIndex(o),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wi extends jt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new C,h=new C,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let E=0;f===0&&a===0?E=.5/t:f===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(i+w*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+w*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(w+E,1-v),x.push(c++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const v=u[f][x+1],E=u[f][x],A=u[f+1][x],w=u[f+1][x+1];(f!==0||a>0)&&m.push(v,E,w),(f!==n-1||l<Math.PI)&&m.push(E,A,w)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gi extends bt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ji extends bt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function or(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function n_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function i_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ec(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function nu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Cs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class s_ extends Cs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qo:r=e,o=2*t-n;break;case Jo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qo:a=e,l=2*n-t;break;case Jo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,f=-h*p+2*h*_-h*g,x=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,v=(-1-m)*p+(1.5+m)*_+.5*g,E=m*p-m*_;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+x*a[c+A]+v*a[l+A]+E*a[d+A];return r}}class r_ extends Cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class a_ extends Cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new a_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new r_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new s_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Ji:t=this.InterpolantFactoryMethodLinear;break;case Vr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Ji;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&n_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,h=d-n,m=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let m=0;m!==n;++m)t[h+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Ji;class as extends Mn{}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Es;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class iu extends Mn{}iu.prototype.ValueTypeName="color";class es extends Mn{}es.prototype.ValueTypeName="number";class o_ extends Cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class vi extends Mn{InterpolantFactoryMethodLinear(e){return new o_(this.times,this.values,this.getValueSize(),e)}}vi.prototype.ValueTypeName="quaternion";vi.prototype.DefaultInterpolation=Ji;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Mn{}os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Es;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends Mn{}ts.prototype.ValueTypeName="vector";class l_{constructor(e,t=-1,n,i=md){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(u_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=i_(l);l=ec(l,1,u),c=ec(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new es(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,m,g,_){if(m.length!==0){const p=[],f=[];nu(m,p,f,g),p.length!==0&&_.push(new d(h,p,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)m[h[g].morphTargets[_]]=-1;for(const _ in m){const p=[],f=[];for(let x=0;x!==h[g].morphTargets.length;++x){const v=h[g];p.push(v.time),f.push(v.morphTarget===_?1:0)}i.push(new es(".morphTargetInfluence["+_+"]",p,f))}l=m.length*a}else{const m=".bones["+t[d].name+"]";n(ts,m+".position",h,"pos",i),n(vi,m+".quaternion",h,"rot",i),n(ts,m+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function c_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return iu;case"quaternion":return vi;case"bool":case"boolean":return as;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function u_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=c_(s.type);if(s.times===void 0){const t=[],n=[];nu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class d_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const h_=new d_;class xi{constructor(e){this.manager=e!==void 0?e:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xi.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class f_ extends Error{constructor(e,t){super(e),this.response=t}}class su extends xi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Jn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:n,onError:i});return}An[e]=[],An[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=An[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let _=0;const p=new ReadableStream({start(f){x();function x(){d.read().then(({done:v,value:E})=>{if(v)f.close();else{_+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let w=0,U=u.length;w<U;w++){const H=u[w];H.onProgress&&H.onProgress(A)}f.enqueue(E),x()}})}}});return new Response(p)}else throw new f_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Jn.add(e,c);const u=An[e];delete An[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=An[e];if(u===void 0)throw this.manager.itemError(e),c;delete An[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ru extends xi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Jn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=bs("img");function l(){u(),Jn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class m_ extends xi{constructor(e){super(e)}load(e,t,n,i){const r=new Ka;r.colorSpace=at;const a=new ru(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class au extends xi{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,a=new ru(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Lr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ga=new Fe,tc=new C,nc=new C;class so{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p_ extends so{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Zi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class g_ extends Lr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new p_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ic=new Fe,_s=new C,_a=new C;class __ extends so{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),n.position.copy(_s),_a.copy(n.position),_a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_a),n.updateMatrixWorld(),i.makeTranslation(-_s.x,-_s.y,-_s.z),ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic)}}class ou extends Lr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new __}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class v_ extends so{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y_ extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new v_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class x_ extends Lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ts{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class M_ extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Jn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Jn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(e,l),r.manager.itemStart(e)}}class S_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sc(){return(typeof performance>"u"?Date:performance).now()}const ro="\\[\\]\\.:\\/",T_=new RegExp("["+ro+"]","g"),ao="[^"+ro+"]",E_="[^"+ro.replace("\\.","")+"]",b_=/((?:WC+[\/:])*)/.source.replace("WC",ao),U_=/(WCOD+)?/.source.replace("WCOD",E_),w_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ao),A_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ao),R_=new RegExp("^"+b_+U_+w_+A_+"$"),C_=["material","materials","bones","map"];class P_{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(e){const t=R_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);C_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=P_;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class L_{constructor(e,t,n=0,i=1/0){this.ray=new ss(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Na(e,this,n,t),n.sort(rc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Na(e[i],this,n,t);return n.sort(rc),n}}function rc(s,e){return s.distance-e.distance}function Na(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Na(i[r],e,t,!0)}}class ac{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);const oc={type:"change"},va={type:"start"},lc={type:"end"},lr=new ss,cc=new jn,I_=Math.cos(70*Dc.DEG2RAD);class D_ extends yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",$),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oc),n.update(),r=i.NONE},this.update=function(){const R=new C,q=new gn().setFromUnitVectors(e.up,new C(0,1,0)),ae=q.clone().invert(),ne=new C,ye=new gn,He=new C,Xe=2*Math.PI;return function(re=null){const P=n.object.position;R.copy(P).sub(n.target),R.applyQuaternion(q),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&z(M(re)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ie=n.minAzimuthAngle,se=n.maxAzimuthAngle;isFinite(ie)&&isFinite(se)&&(ie<-Math.PI?ie+=Xe:ie>Math.PI&&(ie-=Xe),se<-Math.PI?se+=Xe:se>Math.PI&&(se-=Xe),ie<=se?o.theta=Math.max(ie,Math.min(se,o.theta)):o.theta=o.theta>(ie+se)/2?Math.max(ie,o.theta):Math.min(se,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(ae),P.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ee=!1;if(n.zoomToCursor&&w){let Me=null;if(n.object.isPerspectiveCamera){const qe=R.length();Me=W(qe*c);const Ye=qe-Me;n.object.position.addScaledVector(E,Ye),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const qe=new C(A.x,A.y,0);qe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ee=!0;const Ye=new C(A.x,A.y,0);Ye.unproject(n.object),n.object.position.sub(Ye).add(qe),n.object.updateMatrixWorld(),Me=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Me!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Me).add(n.object.position):(lr.origin.copy(n.object.position),lr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(lr.direction))<I_?e.lookAt(n.target):(cc.setFromNormalAndCoplanarPoint(n.object.up,n.target),lr.intersectPlane(cc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ee=!0);return c=1,w=!1,Ee||ne.distanceToSquared(n.object.position)>a||8*(1-ye.dot(n.object.quaternion))>a||He.distanceToSquared(n.target)>0?(n.dispatchEvent(oc),ne.copy(n.object.position),ye.copy(n.object.quaternion),He.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",me),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",$),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new ac,l=new ac;let c=1;const u=new C,d=new ue,h=new ue,m=new ue,g=new ue,_=new ue,p=new ue,f=new ue,x=new ue,v=new ue,E=new C,A=new ue;let w=!1;const U=[],H={};function M(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function b(R){const q=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*q)}function z(R){l.theta-=R}function Y(R){l.phi-=R}const le=function(){const R=new C;return function(ae,ne){R.setFromMatrixColumn(ne,0),R.multiplyScalar(-ae),u.add(R)}}(),L=function(){const R=new C;return function(ae,ne){n.screenSpacePanning===!0?R.setFromMatrixColumn(ne,1):(R.setFromMatrixColumn(ne,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(ae),u.add(R)}}(),N=function(){const R=new C;return function(ae,ne){const ye=n.domElement;if(n.object.isPerspectiveCamera){const He=n.object.position;R.copy(He).sub(n.target);let Xe=R.length();Xe*=Math.tan(n.object.fov/2*Math.PI/180),le(2*ae*Xe/ye.clientHeight,n.object.matrix),L(2*ne*Xe/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(le(ae*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),L(ne*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R,q){if(!n.zoomToCursor)return;w=!0;const ae=n.domElement.getBoundingClientRect(),ne=R-ae.left,ye=q-ae.top,He=ae.width,Xe=ae.height;A.x=ne/He*2-1,A.y=-(ye/Xe)*2+1,E.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function Z(R){d.set(R.clientX,R.clientY)}function te(R){j(R.clientX,R.clientX),f.set(R.clientX,R.clientY)}function he(R){g.set(R.clientX,R.clientY)}function G(R){h.set(R.clientX,R.clientY),m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;z(2*Math.PI*m.x/q.clientHeight),Y(2*Math.PI*m.y/q.clientHeight),d.copy(h),n.update()}function K(R){x.set(R.clientX,R.clientY),v.subVectors(x,f),v.y>0?V(b(v.y)):v.y<0&&X(b(v.y)),f.copy(x),n.update()}function de(R){_.set(R.clientX,R.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),N(p.x,p.y),g.copy(_),n.update()}function xe(R){j(R.clientX,R.clientY),R.deltaY<0?X(b(R.deltaY)):R.deltaY>0&&V(b(R.deltaY)),n.update()}function ve(R){let q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),q=!0;break}q&&(R.preventDefault(),n.update())}function Ce(R){if(U.length===1)d.set(R.pageX,R.pageY);else{const q=je(R),ae=.5*(R.pageX+q.x),ne=.5*(R.pageY+q.y);d.set(ae,ne)}}function Pe(R){if(U.length===1)g.set(R.pageX,R.pageY);else{const q=je(R),ae=.5*(R.pageX+q.x),ne=.5*(R.pageY+q.y);g.set(ae,ne)}}function be(R){const q=je(R),ae=R.pageX-q.x,ne=R.pageY-q.y,ye=Math.sqrt(ae*ae+ne*ne);f.set(0,ye)}function We(R){n.enableZoom&&be(R),n.enablePan&&Pe(R)}function D(R){n.enableZoom&&be(R),n.enableRotate&&Ce(R)}function gt(R){if(U.length==1)h.set(R.pageX,R.pageY);else{const ae=je(R),ne=.5*(R.pageX+ae.x),ye=.5*(R.pageY+ae.y);h.set(ne,ye)}m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;z(2*Math.PI*m.x/q.clientHeight),Y(2*Math.PI*m.y/q.clientHeight),d.copy(h)}function Te(R){if(U.length===1)_.set(R.pageX,R.pageY);else{const q=je(R),ae=.5*(R.pageX+q.x),ne=.5*(R.pageY+q.y);_.set(ae,ne)}p.subVectors(_,g).multiplyScalar(n.panSpeed),N(p.x,p.y),g.copy(_)}function Ae(R){const q=je(R),ae=R.pageX-q.x,ne=R.pageY-q.y,ye=Math.sqrt(ae*ae+ne*ne);x.set(0,ye),v.set(0,Math.pow(x.y/f.y,n.zoomSpeed)),V(v.y),f.copy(x);const He=(R.pageX+q.x)*.5,Xe=(R.pageY+q.y)*.5;j(He,Xe)}function pe(R){n.enableZoom&&Ae(R),n.enablePan&&Te(R)}function et(R){n.enableZoom&&Ae(R),n.enableRotate&&gt(R)}function Le(R){n.enabled!==!1&&(U.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",y)),Ue(R),R.pointerType==="touch"?_e(R):O(R))}function T(R){n.enabled!==!1&&(R.pointerType==="touch"?ce(R):ee(R))}function y(R){De(R),U.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",y)),n.dispatchEvent(lc),r=i.NONE}function O(R){let q;switch(R.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Mi.DOLLY:if(n.enableZoom===!1)return;te(R),r=i.DOLLY;break;case Mi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;he(R),r=i.PAN}else{if(n.enableRotate===!1)return;Z(R),r=i.ROTATE}break;case Mi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;Z(R),r=i.ROTATE}else{if(n.enablePan===!1)return;he(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(va)}function ee(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;G(R);break;case i.DOLLY:if(n.enableZoom===!1)return;K(R);break;case i.PAN:if(n.enablePan===!1)return;de(R);break}}function J(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(va),xe(R),n.dispatchEvent(lc))}function $(R){n.enabled===!1||n.enablePan===!1||ve(R)}function _e(R){switch(Q(R),U.length){case 1:switch(n.touches.ONE){case Si.ROTATE:if(n.enableRotate===!1)return;Ce(R),r=i.TOUCH_ROTATE;break;case Si.PAN:if(n.enablePan===!1)return;Pe(R),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(R),r=i.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(R),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(va)}function ce(R){switch(Q(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Te(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(R),n.update();break;default:r=i.NONE}}function me(R){n.enabled!==!1&&R.preventDefault()}function Ue(R){U.push(R.pointerId)}function De(R){delete H[R.pointerId];for(let q=0;q<U.length;q++)if(U[q]==R.pointerId){U.splice(q,1);return}}function Q(R){let q=H[R.pointerId];q===void 0&&(q=new ue,H[R.pointerId]=q),q.set(R.pageX,R.pageY)}function je(R){const q=R.pointerId===U[0]?U[1]:U[0];return H[q]}n.domElement.addEventListener("contextmenu",me),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",J,{passive:!1}),this.update()}}const oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const N_=new Cr(-1,1,1,-1,0,1);class O_ extends jt{constructor(){super(),this.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ut([0,2,0,0,2,0],2))}}const F_=new O_;class lo{constructor(e){this._mesh=new St(F_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,N_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class B_ extends ls{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Us.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new lo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class uc extends ls{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class k_ extends ls{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class H_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new Mt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new B_(oo),this.copyPass.material.blending=un,this.clock=new S_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}uc!==void 0&&(a instanceof uc?n=!0:a instanceof k_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const z_={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ns extends ls{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Mt(r,a,{type:Ft}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Mt(r,a,{type:Ft});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new Mt(r,a,{type:Ft});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=z_;this.highPassUniforms=Us.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ue(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=oo;this.copyUniforms=Us.clone(u.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:gr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new Kn,this.fsQuad=new lo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ns.BlurDirectionX=new ue(1,0);ns.BlurDirectionY=new ue(0,1);class G_ extends ls{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}function dc(s,e){if(e===pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Aa||e===Cc){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Aa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class V_ extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Y_(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ov(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ts.extractUrlBase(e);a=Ts.resolveURL(c,this.path)}else a=Ts.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new su(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===lu){try{a[Ve.KHR_BINARY_GLTF]=new lv(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Mv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case Ve.KHR_MATERIALS_UNLIT:a[d]=new X_;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[d]=new cv(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[d]=new uv;break;case Ve.KHR_MESH_QUANTIZATION:a[d]=new dv;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function W_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class j_{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Et);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new y_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ou(u),c.distance=d;break;case"spot":c=new g_(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Xn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class X_{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Kn}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Et),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(i)}}class q_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Y_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(r)}}class K_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Q_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Et)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,at)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class J_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],Et),Promise.all(r)}}class $_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ev{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],Et),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,at)),Promise.all(r)}}class tv{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class nv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class iv{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class sv{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rv{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class av{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(m),u,d,h,i.mode,i.filter),m})})}else return null}}class ov{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,m=[];for(const g of d){const _=new Fe,p=new C,f=new gn,x=new C(1,1,1),v=new Jg(g.geometry,g.material,h);for(let E=0;E<h;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,E),l.SCALE&&x.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,_.compose(p,f,x));for(const E in l)if(E==="_COLOR_0"){const A=l[E];v.instanceColor=new Ia(A.array,A.itemSize,A.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);st.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const lu="glTF",vs=12,hc={JSON:1313821514,BIN:5130562};class lv{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vs,r=new DataView(e,vs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===hc.JSON){const c=new Uint8Array(e,vs+a,o);this.content=n.decode(c)}else if(l===hc.BIN){const c=vs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const d=Oa[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=Oa[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],m=Xi[h.componentType];c[d]=m.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(m){for(const g in m.attributes){const _=m.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}d(m)},o,c,Et,h)})})}}class uv{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dv{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class cu extends Cs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,h=d*d,m=h*d,g=e*c,_=g-c,p=-2*m+3*h,f=m-h,x=1-p,v=f-h+d;for(let E=0;E!==o;E++){const A=a[_+E+o],w=a[_+E+l]*u,U=a[g+E+o],H=a[g+E]*u;r[E]=x*A+v*w+p*U+f*H}return r}}const hv=new gn;class fv extends cu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hv.fromArray(r).normalize().toArray(r),r}}const en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fc={9728:xt,9729:zt,9984:wa,9985:Sc,9986:ur,9987:_i},mc={33071:tn,33648:vr,10497:Gt},ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mv={CUBICSPLINE:void 0,LINEAR:Ji,STEP:Es},xa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),s.DefaultMaterial}function li(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function _v(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vv(s){let e;const t=s.extensions&&s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ma(t.attributes):e=s.indices+":"+Ma(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ma(s.targets[n]);return e}function Ma(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Fa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const xv=new Fe;class Mv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new au(this.options.manager):this.textureLoader=new M_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new su(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return li(r,o,i),Xn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ts.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ya[i.type],o=Xi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new kt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ya[i.type],c=Xi[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(m&&m!==d){const f=Math.floor(h/m),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(x);v||(_=new c(o,f*m,i.count*m/u),v=new jg(_,m/u),t.cache.add(x,v)),p=new $a(v,l,h%m/u,g)}else o===null?_=new c(i.count*l):_=new c(o,h,i.count*l),p=new kt(_,l,g);if(i.sparse!==void 0){const f=ya.SCALAR,x=Xi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,A=new x(a[1],v,i.sparse.count*f),w=new c(a[2],E,i.sparse.count*l);o!==null&&(p=new kt(p.array.slice(),p.itemSize,p.normalized));for(let U=0,H=A.length;U<H;U++){const M=A[U];if(p.setX(M,w[U*l]),l>=2&&p.setY(M,w[U*l+1]),l>=3&&p.setZ(M,w[U*l+2]),l>=4&&p.setW(M,w[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=fc[h.magFilter]||zt,u.minFilter=fc[h.minFilter]||_i,u.wrapS=mc[h.wrapS]||Gt,u.wrapT=mc[h.wrapT]||Gt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,m){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Tt(_);p.needsUpdate=!0,h(p)}),t.load(Ts.resolveURL(d,r.path),g,void 0,m)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||yv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new tu,bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new to,bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const d=i[Ve.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Et),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,at)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Qt);const u=r.alphaMode||xa.OPAQUE;if(u===xa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===xa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Kn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Kn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Kn){const d=r.emissiveFactor;o.emissive=new ge().setRGB(d[0],d[1],d[2],Et)}return r.emissiveTexture!==void 0&&a!==Kn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,at)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Xn(d,r),t.associations.set(d,{materials:e}),r.extensions&&li(i,d,r),d})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return pc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=vv(c),d=i[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=pc(new jt,c,t),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?pv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let m=0,g=u.length;m<g;m++){const _=u[m],p=a[m];let f;const x=c[m];if(p.mode===en.TRIANGLES||p.mode===en.TRIANGLE_STRIP||p.mode===en.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new qg(_,x):new St(_,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===en.TRIANGLE_STRIP?f.geometry=dc(f.geometry,Cc):p.mode===en.TRIANGLE_FAN&&(f.geometry=dc(f.geometry,Aa));else if(p.mode===en.LINES)f=new Zg(_,x);else if(p.mode===en.LINE_STRIP)f=new no(_,x);else if(p.mode===en.LINE_LOOP)f=new eu(_,x);else if(p.mode===en.POINTS)f=new $g(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&_v(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Xn(f,r),p.extensions&&li(i,f,p),t.assignFinalMaterial(f),d.push(f)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return r.extensions&&li(i,d[0],r),d[0];const h=new Qn;r.extensions&&li(i,h,r),t.associations.set(h,{meshes:e});for(let m=0,g=d.length;m<g;m++)h.add(d[m]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Dc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Cr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const d=a[c];if(d){o.push(d);const h=new Fe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new eo(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const m=i.channels[d],g=i.samplers[m.sampler],_=m.target,p=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],m=d[1],g=d[2],_=d[3],p=d[4],f=[];for(let x=0,v=h.length;x<v;x++){const E=h[x],A=m[x],w=g[x],U=_[x],H=p[x];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const M=n._createAnimationTracks(E,A,w,U,H);if(M)for(let b=0;b<M.length;b++)f.push(M[b])}return new l_(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(h,xv)});for(let m=0,g=d.length;m<g;m++)u.add(d[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new $c:c.length>1?u=new Qn:c.length===1?u=c[0]:u=new st,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Xn(u,r),r.extensions&&li(n,u,r),r.matrix!==void 0){const d=new Fe;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Qn;n.name&&(r.name=i.createUniqueName(n.name)),Xn(r,n),n.extensions&&li(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,m]of i.associations)(h instanceof bt||h instanceof Tt)&&d.set(h,m);return u.traverse(h=>{const m=i.associations.get(h);m!=null&&d.set(h,m)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Wn[r.path]===Wn.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Wn[r.path]){case Wn.weights:c=es;break;case Wn.rotation:c=vi;break;case Wn.position:case Wn.scale:c=ts;break;default:switch(n.itemSize){case 1:c=es;break;case 2:case 3:default:c=ts;break}break}const u=i.interpolation!==void 0?mv[i.interpolation]:Ji,d=this._getArrayFromAccessor(n);for(let h=0,m=l.length;h<m;h++){const g=new c(l[h]+"."+Wn[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fa(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vi?fv:cu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sv(s,e,t){const n=e.attributes,i=new On;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const u=Fa(Xi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,l=new C;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],m=h.min,g=h.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){const _=Fa(Xi[h.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function pc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Oa[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==Et&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Xn(s,e),Sv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gv(s,e.targets,t):s})}class Zn extends ls{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new ge(1,1,1),this.hiddenEdgeColor=new ge(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Mt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Jc,this.depthMaterial.side=Qt,this.depthMaterial.depthPacking=Lc,this.depthMaterial.blending=un,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Qt,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Mt(this.resolution.x,this.resolution.y,{type:Ft}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Mt(r,a,{type:Ft}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Mt(r,a,{type:Ft}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Mt(Math.round(r/2),Math.round(a/2),{type:Ft}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Mt(r,a,{type:Ft}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Mt(Math.round(r/2),Math.round(a/2),{type:Ft}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=oo;this.copyUniforms=Us.clone(c.uniforms),this.materialCopy=new ft({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:un,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.fsQuad=new lo(null),this.tempPulseColor1=new ge,this.tempPulseColor2=new ge,this.textureMatrix=new Fe;function u(d,h){const m=h.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,m+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function n(i){i.isMesh&&(e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e))}for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=[];function i(a){a.isMesh&&n.push(a)}for(let a=0;a<this.selectedObjects.length;a++)this.selectedObjects[a].traverse(i);function r(a){if(a.isMesh||a.isSprite){let o=!1;for(let l=0;l<n.length;l++)if(n[l].id===a.id){o=!0;break}if(o===!1){const l=a.visible;(e===!1||t.get(a)===!0)&&(a.visible=e),t.set(a,l)}}else(a.isPoints||a.isLine)&&(e===!0?a.visible=t.get(a):(t.set(a,a.visible),a.visible=e))}this.renderScene.traverse(r)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Zn.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Zn.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Zn.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Zn.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new ft({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ue(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new ft({uniforms:{maskTexture:{value:null},texSize:{value:new ue(.5,.5)},visibleEdgeColor:{value:new C(1,1,1)},hiddenEdgeColor:{value:new C(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new ft({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new ft({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:gr,depthTest:!1,depthWrite:!1,transparent:!0})}}Zn.BlurDirectionX=new ue(1,0);Zn.BlurDirectionY=new ue(0,1);const Tv=""+new URL("1-56423a2a.jpg",import.meta.url).href,Sa=""+new URL("2-7887ba5b.jpg",import.meta.url).href,Ev=""+new URL("3-d416039e.jpg",import.meta.url).href,bv=""+new URL("4-65e36d4d.jpg",import.meta.url).href,Uv=""+new URL("sun-71464a92.jpg",import.meta.url).href,wv=""+new URL("mercurymap-7dcb6a51.jpg",import.meta.url).href,Av=""+new URL("mercurybump-1b3eb45b.jpg",import.meta.url).href,gc=""+new URL("venusmap-11f97521.jpg",import.meta.url).href,Rv=""+new URL("venus_atmosphere-225012ad.jpg",import.meta.url).href,Cv=""+new URL("earth_daymap-767ee1dc.jpg",import.meta.url).href,Pv=""+new URL("earth_nightmap-c16fd1bc.jpg",import.meta.url).href,Lv=""+new URL("earth_atmosphere-fffd7f68.jpg",import.meta.url).href,Iv=""+new URL("moonmap-6141d26e.jpg",import.meta.url).href,Dv=""+new URL("moonbump-61c38865.jpg",import.meta.url).href,Nv=""+new URL("marsmap-34ffa876.jpg",import.meta.url).href,Ov=""+new URL("marsbump-dbf776bf.jpg",import.meta.url).href,Fv=""+new URL("jupiter-b0f04d00.jpg",import.meta.url).href,Bv=""+new URL("jupiterIo-79239daa.jpg",import.meta.url).href,kv=""+new URL("jupiterEuropa-50d01ca5.jpg",import.meta.url).href,Hv=""+new URL("jupiterGanymede-1aa9d5a6.jpg",import.meta.url).href,zv=""+new URL("jupiterCallisto-b9f4fa5d.jpg",import.meta.url).href,Gv=""+new URL("saturnmap-40529949.jpg",import.meta.url).href,Vv=""+new URL("saturn_ring-00207137.png",import.meta.url).href,Wv=""+new URL("uranus-d15239d4.jpg",import.meta.url).href,jv=""+new URL("uranus_ring-ec5fa257.png",import.meta.url).href,Xv=""+new URL("neptune-cb42ea82.jpg",import.meta.url).href,qv=""+new URL("plutomap-d221756a.jpg",import.meta.url).href,is=[{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Mercury","Unnamed: 1":"Name","Unnamed: 2":"Perception","Unnamed: 3":"Date","Unnamed: 4":"Who","Unnamed: 5":"Technique","Unnamed: 6":"Key Notes and Discoveries","Unnamed: 7":"Images","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":'UDU.IDIM.GU~4~.UD ("the jumping planet")',"Unnamed: 2":"Divinity","Unnamed: 3":"14th century BC","Unnamed: 4":"Assyrian astronomer","Unnamed: 5":"MUL.APIN tablets","Unnamed: 6":"The cuneiform name is the earliest known recorded observation.","Unnamed: 7":"/images/planets/mercury/960px-MulApin-BritishMuseum.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Nabu","Unnamed: 2":"Divinity","Unnamed: 3":"1st millennium BC","Unnamed: 4":"Babylonians","Unnamed: 5":"Cuneiform tablets","Unnamed: 6":"Named after the messenger to the gods in Babylonian mythology.","Unnamed: 7":"/images/planets/mercury/2560px-Colossal_statue_of_the_god_Nabu_2C_8th_century_BCE_2C_from_Nimrud_2C_Iraq_Museum.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Stilbon (Στίλβων)","Unnamed: 2":"Divinity","Unnamed: 3":"6th century BC","Unnamed: 4":"Greek","Unnamed: 5":"Naked-eye observation","Unnamed: 6":'Nickname meaning "the shining, glittering".',"Unnamed: 7":"/images/planets/mercury/T30.1Astra.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":'"the Hour Star" (Chen-xing 辰星)',"Unnamed: 2":"Divinity/Element","Unnamed: 3":"Ancient China","Unnamed: 4":"Ancient China","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":'Associated with North and the water phase. Modern names (e.g., in Chinese, Korean, Japanese) mean "water star" (水星).',"Unnamed: 7":"/images/planets/mercury/96680668fd834142c0dabf2405e6482b.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Budha","Unnamed: 2":"Divinity","Unnamed: 3":"Ancient India","Unnamed: 4":"Hindu mythology","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Deity thought to preside over Wednesday.","Unnamed: 7":"/images/planets/mercury/960px-Budha_graha.JPG","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Odin (or Woden)","Unnamed: 2":"Divinity","Unnamed: 3":"Germanic paganism","Unnamed: 4":"Germanic paganism","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"God associated with the planet and Wednesday.","Unnamed: 7":"/images/planets/mercury/108872.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Owl","Unnamed: 2":"Divinity/Messenger","Unnamed: 3":"Ancient Mesoamerica","Unnamed: 4":"Maya","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Possible representation of Mercury (four owls: two for the morning aspect, two for the evening).","Unnamed: 7":"/images/planets/mercury/3644058.jpeg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercurius","Unnamed: 2":"Planet","Unnamed: 3":170,"Unnamed: 4":"Ptolemy (Greco-Egyptian)","Unnamed: 5":"Planetary Hypotheses (Book)","Unnamed: 6":"Wrote about the theoretical possibility of planetary transits, suggesting they were unobserved due to the planets' small size or their rarity.","Unnamed: 7":"/images/planets/mercury/9789004400566_i0132.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"-","Unnamed: 2":"Planet","Unnamed: 3":"11th century","Unnamed: 4":"Abū Ishāq Ibrāhīm al-Zarqālī (Andalusian)","Unnamed: 5":"Geocentric Model (Book)","Unnamed: 6":"Described the deferent of the geocentric orbit as oval (egg/pignon shaped), though the insight was not used in his calculations.","Unnamed: 7":"/images/planets/mercury/Shatir500.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"-","Unnamed: 2":"Planet","Unnamed: 3":"12th century","Unnamed: 4":"Ibn Bajjah","Unnamed: 5":"Optical observation","Unnamed: 6":'Observed "two planets as black spots on the face of the Sun" (later suggested as a Mercury/Venus transit).',"Unnamed: 7":"/images/planets/mercury/4-theplanetmer.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"-","Unnamed: 2":"Planet","Unnamed: 3":"13th century","Unnamed: 4":"Qotb al-Din Shirazi (Maragha)","Unnamed: 5":"Optical observation","Unnamed: 6":"Suggested that Ibn Bajjah's observation might have been a transit of Mercury and/or Venus.","Unnamed: 7":"https://encyclopedia.pub/media/common/202211/mceclip0-638428feb2559.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"(Buddhā)","Unnamed: 2":"Planet","Unnamed: 3":"15th century","Unnamed: 4":"Nilakantha Somayaji (Kerala school)","Unnamed: 5":"Partially Heliocentric Model (Book)","Unnamed: 6":"Developed a model where Mercury orbits the Sun, which in turn orbits the Earth (similar to the Tychonic system).","Unnamed: 7":"/images/planets/mercury/Nilakanthas_Planetary_model.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1610,"Unnamed: 4":"Thomas Harriot & Galileo","Unnamed: 5":"Telescope","Unnamed: 6":"First telescopic observations.","Unnamed: 7":"/images/planets/mercury/harriotSunspots.gif","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1612,"Unnamed: 4":"Simon Marius","Unnamed: 5":"Telescope","Unnamed: 6":"Observed brightness variations and concluded it had phases like Venus and the Moon.","Unnamed: 7":"/images/planets/mercury/maxresdefault.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1631,"Unnamed: 4":"Pierre Gassendi","Unnamed: 5":"Telescope","Unnamed: 6":"First recorded telescopic observation of a transit of Mercury (predicted by Kepler).","Unnamed: 7":"/images/planets/mercury/2323.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1639,"Unnamed: 4":"Giovanni Zupi","Unnamed: 5":"Telescope","Unnamed: 6":"Conclusively discovered orbital phases, demonstrating it orbited the Sun.","Unnamed: 7":"/images/planets/mercury/unnamed.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1737,"Unnamed: 4":"John Bevis","Unnamed: 5":"Greenwich Observatory","Unnamed: 6":"Observed the only historically recorded occultation of Mercury by Venus (May 28).","Unnamed: 7":"/images/planets/mercury/Bevis_206.gif","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1800,"Unnamed: 4":"Johann Schröter","Unnamed: 5":"Telescope","Unnamed: 6":"Observations of surface features, claiming to have seen 20 km high mountains.","Unnamed: 7":"/images/planets/mercury/Antoniadi_Mercury.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":"1880s","Unnamed: 4":"Giovanni Schiaparelli","Unnamed: 5":"Telescopic Mapping","Unnamed: 6":"Mapped the planet more accurately; suggested a rotation period of 88 days.","Unnamed: 7":"/images/planets/mercury/Mercure_carte_schiaparelli.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1934,"Unnamed: 4":"Eugenios Antoniadi","Unnamed: 5":"Telescopic Mapping","Unnamed: 6":"Continued mapping; published a book; many albedo features are named after his map.","Unnamed: 7":"/images/planets/mercury/Antoniadi_Mercury.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1965,"Unnamed: 4":"Pettengill & Dyce","Unnamed: 5":"Radar","Unnamed: 6":"Radar observations conclusively showed the rotation period was about 59 day.","Unnamed: 7":"https://agupubs.onlinelibrary.wiley.com/cms/asset/3a3a7d60-1412-48d0-9ab8-b12d46c198d2/jgre20808-fig-0007-m.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":"1974–1975","Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"First spacecraft to visit; used a Venus gravity assist; confirmed the 3:2 resonance","Unnamed: 7":"/images/planets/mercury/1000w_q95.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":1991,"Unnamed: 4":"M. A. Slade, B. J. Butler, D. O. Muhleman, Science 258, 635 (1992)","Unnamed: 5":"Radar echo with the VLA","Unnamed: 6":"Bistatic radar echo using the Goldstone transmitter and the VLA in New Mexico; produced the first high-resolution radar maps of Mercury’s unseen hemisphere and detected highly reflective polar regions consistent with water-ice deposits.","Unnamed: 7":"/images/planets/mercury/MercuryVLA.GIF","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":2e3,"Unnamed: 4":"Mount Wilson Observatory","Unnamed: 5":"Lucky Imaging Optics","Unnamed: 6":"Obtained the first views resolving surface features not imaged by Mariner 10.","Unnamed: 7":"https://www.researchgate.net/profile/Marek-Kozubal/publication/231011356/figure/fig2/AS:340885737885700@1458284901266/EHigh-resolution-I-band-images-of-Mercury-using-the-Mount-Wilson-Observatory-60-inch.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":"2004–2015","Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Launched 2004, entered orbit 2011. Mapped most of the hemisphere missed by Mariner 10; clarified key issues (density, core, magnetic field, polar ice). Impact: April 30, 2015.","Unnamed: 7":"/images/planets/mercury/20151118_CW0162741055G_RA_3_web.png","Unnamed: 8":"/images/planets/mercury/PIA19449-1.jpg","Unnamed: 9":"/images/planets/mercury/500px-Rachmaninoff_crater.png","Unnamed: 10":"/images/planets/mercury/330px-CW0131775256F_Kuiper_Crater.png","Unnamed: 11":"/images/planets/mercury/last_image.jpg"},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":2008,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Mercury in true color” shows the planet as the human eye would see it, with natural brown-grey tones shaped by minerals and space-weathering. It was captured during MESSENGER’s first flyby, offering the most realistic view of Mercury at the time","Unnamed: 7":"/images/planets/mercury/960px-Mercury_in_true_color.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":2014,"Unnamed: 4":"NASA (on Mars)","Unnamed: 5":"Imaging","Unnamed: 6":"Observed Mercury transiting the Sun (a transit as viewed from Mars).","Unnamed: 7":"/images/planets/mercury/pia18389.gif","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":2015,"Unnamed: 4":"NASA","Unnamed: 5":"Spectrum scan","Unnamed: 6":"MASCS spectrum scan of Mercury's surface by MESSENGER","Unnamed: 7":"/images/planets/mercury/2812FC2400000578-3058229-image-a-60_1430174306267.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mercury","Unnamed: 2":"Planet","Unnamed: 3":"2018–2026","Unnamed: 4":"ESA & JAXA","Unnamed: 5":"Space Probe","Unnamed: 6":"Joint mission launched 2018 (orbit insertion expected 2026) after six flybys. Objectives: mapping and magnetosphere study.","Unnamed: 7":"/images/planets/mercury/Best_images_from_BepiColombo_s_sixth_Mercury_flyby_pillars.jpg","Unnamed: 8":"/images/planets/mercury/Mercury_s_sunlit_north_viewed_by_M-CAM_1_article.jpg","Unnamed: 9":"/images/planets/mercury/Lava_and_debris_brighten_Mercury_s_surface_article.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Venus","Unnamed: 1":"Ishtar","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Sumerians","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Associated with the goddess of fertility, war, and sexual love.","Unnamed: 7":"/images/planets/venus/Ishtar_on_an_Akkadian_seal.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Ninsi'anna","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Babylonians","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Oldest known recording of Venus positions, on the Babylonian Venus tablet of Ammisaduqa ","Unnamed: 7":"/images/planets/venus/500px-Venus_Tablet_of_Ammisaduqa.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Aphrodite","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Greeks","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Associated with the Greek goddess of love, beauty, pleasure, and procreation.","Unnamed: 7":"/images/planets/venus/960px-Cnidus_Aphrodite_Altemps_Inv8619.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Romans","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Associated with the Roman goddess of love, beauty, and gardens. Known to appear as the morning and evening star.","Unnamed: 7":"/images/planets/venus/960px-Statue_of_nude_Venus_of_the_Capitoline_type_2C_Roman_2C_2nd_century_AD_2C_from_Campo_Iemini_2C_housed_in_the_British_Museum.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Maya","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"The Pre-Columbian Mayan Dresden Codex, which calculates appearances of Venus","Unnamed: 7":"/images/planets/venus/500px-Dresden_Codex_p09.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Wandering Star ","Unnamed: 3":"~600 BC","Unnamed: 4":"Pythagoras","Unnamed: 5":"Deduction","Unnamed: 6":"First to recognize that the morning star and evening star were the same celestial body (Venus).","Unnamed: 7":"/images/planets/venus/Venus-pacific-levelled.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1610,"Unnamed: 4":"Galileo Galilei","Unnamed: 5":"Telescope","Unnamed: 6":"Observed the phases of Venus, similar to the Moon. This evidence was crucial support for the Copernican heliocentric model.","Unnamed: 7":"/images/planets/venus/m_GalileosPhases.jpg","Unnamed: 8":"/images/planets/venus/Fases_de_Venus_-_Galileo_Galilei.png","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1639,"Unnamed: 4":"Jeremiah Horrocks","Unnamed: 5":"Telescope","Unnamed: 6":"First scientific observation and recording of the Transit of Venus (passing in front of the Sun).","Unnamed: 7":"/images/planets/venus/Horrocks_Venus_in_sole.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1761,"Unnamed: 4":"Mikhail Lomonosov","Unnamed: 5":"Transit Observation","Unnamed: 6":"By observing the transit, he noticed a halo of light around the planet, deducing the existence of a dense atmosphere.","Unnamed: 7":"/images/planets/venus/ypey1000.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":"1761 & 1769","Unnamed: 4":"James Cook, Mikhail Lomonosov, Edmond Halley, Jeremiah Horrocks, Pierre-Charles Le Monnier, Guillaume Le Gentil","Unnamed: 5":"Transit Observation","Unnamed: 6":"The black drop effect is an optical phenomenon visible during a transit of Venus and, to a lesser extent, a transit of Mercury","Unnamed: 7":"/images/planets/venus/500px-Venus_Drawing.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1915,"Unnamed: 4":"C. E. Housden","Unnamed: 5":"Theories","Unnamed: 6":"Plate II from Is Venus inhabited?","Unnamed: 7":"/images/planets/venus/venus-section-of-from-is-Venus-inhabitedImage-30-2048x1418.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1927,"Unnamed: 4":"Frank E. Ross ","Unnamed: 5":"Ultraviolet pictures","Unnamed: 6":"Ultraviolet photographs revealed considerable detail that was absent in visible and infrared radiation","Unnamed: 7":"/images/planets/venus/image_12.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1962,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"First successful mission to another planet. Confirmed extremely high surface temperatures.","Unnamed: 7":"/images/planets/venus/kn7ju88wmvb51-1-1024x486.webp","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1974,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Used Venus's gravity assist to proceed to Mercury. Provided the first UV images of Venus's atmosphere.","Unnamed: 7":"/images/planets/venus/724700main_venus_full_full.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1975,"Unnamed: 4":"USSR","Unnamed: 5":"Orbiter/Lander","Unnamed: 6":"First black and white images from the surface (Venera 9). Studied rock and surface composition.","Unnamed: 7":"/images/planets/venus/Foto_de_Venera_9.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1978,"Unnamed: 4":"NASA","Unnamed: 5":"Orbiter/Probes","Unnamed: 6":"Two-part mission: Orbiter (radar mapping and atmospheric study) and Multiprobe (four probes deployed into the atmosphere).","Unnamed: 7":"/images/planets/venus/250px-Venus_clouds_seen_by_Pioneer_Venus_Orbiter__28cropped_29.jpg","Unnamed: 8":"/images/planets/venus/250px-Venuspioneeruv.jpg","Unnamed: 9":"/images/planets/venus/250px-Quater_Venus_phase__28cropped_29.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1982,"Unnamed: 4":"USSR","Unnamed: 5":"Orbiter/Probes","Unnamed: 6":"On March 5, 1982, the Soviet Venera-14 lander made history by successfully touching down on Venus, the second planet of the Solar System.","Unnamed: 7":"/images/planets/venus/venus-surface-photos.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":1983,"Unnamed: 4":"USSR","Unnamed: 5":"Radar Orbiter","Unnamed: 6":"Detailed radar mapping of the northern hemisphere.","Unnamed: 7":"/images/planets/venus/image_20.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":"1990–1996","Unnamed: 4":"NASA","Unnamed: 5":"Radar Orbiter","Unnamed: 6":"Nearly complete radar mapping (98%) of the surface with very high resolution. Revealed volcanoes, calderas, and a scarcity of impact craters.","Unnamed: 7":"/images/planets/venus/jpegPIA00478.width-1600.jpg","Unnamed: 8":"/images/planets/venus/Radar_view_of_Venus_surface.jpeg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":"2006–2014","Unnamed: 4":"ESA","Unnamed: 5":"Orbiter","Unnamed: 6":"Detailed, long-term study of the atmosphere (especially winds) and thermosphere; provided evidence of recent volcanism.","Unnamed: 7":"/images/planets/venus/pia00104-venus-computer-simulated-global-view.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Venus","Unnamed: 2":"Planet","Unnamed: 3":"2015–Present","Unnamed: 4":"JAXA","Unnamed: 5":"Orbiter","Unnamed: 6":"Studies the atmospheric super-rotation (where the atmosphere rotates much faster than the solid planet) and meteorology.","Unnamed: 7":"/images/planets/venus/Venus_-_October_24_2018.png","Unnamed: 8":"/images/planets/venus/174_226_232_date_2016_07_11_14_10.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Earth","Unnamed: 1":" Earth","Unnamed: 2":"Disk","Unnamed: 3":"Antiquity","Unnamed: 4":"Many Ancient Cultures","Unnamed: 5":"Observation and Mythological Belief","Unnamed: 6":"Earth was viewed as a disk or plane surrounded by water.","Unnamed: 7":"/images/planets/earth/1280px-Stelae_front.jpg","Unnamed: 8":"/images/planets/earth/the-world-map-according-to-homer-image504917218.html","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Sphere","Unnamed: 3":"500 BC","Unnamed: 4":"Pythagoras","Unnamed: 5":"Philosophical Deduction","Unnamed: 6":"First to suggest Earth might be a sphere based on aesthetic/philosophical reasons.","Unnamed: 7":"/images/planets/earth/Dante_and_the_early_astronomers__281913_29__2814781241124_29.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet Shape","Unnamed: 3":"350 BC","Unnamed: 4":"Aristotle","Unnamed: 5":"Observation","Unnamed: 6":"Evidence based on Earth's circular shadow on the Moon during eclipses and the change in visible stars with latitude.","Unnamed: 7":"/images/planets/earth/21af3ce3-7106-49da-91ef-68cd5175c212.jpeg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":"240 BC","Unnamed: 4":"Eratosthenes","Unnamed: 5":"Trigonometry","Unnamed: 6":"Used solar angles and distances to calculate the circumference with remarkable accuracy (within 15%).","Unnamed: 7":"/images/planets/earth/circumference-method-length-Eratosthenes-angle-Earth-arc.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":150,"Unnamed: 4":"Ptolemy","Unnamed: 5":"Astronomy","Unnamed: 6":"Earth was considered the fixed center of the Universe. Dominant model for over 1400 years.","Unnamed: 7":"/images/planets/earth/17887.jpeg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1543,"Unnamed: 4":"Nicolaus Copernicus","Unnamed: 5":"Astronomy","Unnamed: 6":"Theory that places the Sun at the center of the Solar System, with Earth orbiting it.","Unnamed: 7":"/images/planets/earth/2560px-Copernican_heliocentrism_diagram-2.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1600,"Unnamed: 4":"William Gilbert","Unnamed: 5":"Physics","Unnamed: 6":"Demonstrated that the Earth itself is a giant magnet.","Unnamed: 7":"/images/planets/earth/gilbert-de-magnete-page-76.jpg","Unnamed: 8":"/images/planets/earth/gilbert-de-magnete-page-96.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1687,"Unnamed: 4":"Isaac Newton","Unnamed: 5":"Physics","Unnamed: 6":"Described the force that keeps Earth in orbit and causes gravity on the surface.","Unnamed: 7":"/images/planets/earth/newton_cannon.jpg","Unnamed: 8":"/images/planets/earth/image.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1795,"Unnamed: 4":"James Hutton","Unnamed: 5":"Geology","Unnamed: 6":'Developed the concept of Uniformitarianism ("the present is the key to the past") and the concept of deep geologic time.',"Unnamed: 7":"/images/planets/earth/hutton1.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1815,"Unnamed: 4":"William Smith","Unnamed: 5":"Geological Cartography","Unnamed: 6":"Created the first detailed and comprehensive geological map of a nation (England and Wales).","Unnamed: 7":"/images/planets/earth/strata_england_wales_1815.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1912,"Unnamed: 4":"Alfred Wegener","Unnamed: 5":"Geology / Meteorology","Unnamed: 6":"Proposed that continents move over time (initially largely disregarded).","Unnamed: 7":"/images/planets/earth/Wegener-PangeaReconstructions-2000px-2-scaled.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1936,"Unnamed: 4":"Inge Lehmann","Unnamed: 5":"Seismology","Unnamed: 6":"Deduced the existence of the Solid Inner Core using seismic waves.","Unnamed: 7":"/images/planets/earth/f2df4e_96ea98eb121448a292f09ccd97c2133d_mv2.jpg","Unnamed: 8":"/images/planets/earth/lehmann_03_full_610.jpg","Unnamed: 9":"/images/planets/earth/lehmann_02_full_610.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1958,"Unnamed: 4":"James Van Allen","Unnamed: 5":"Satellites","Unnamed: 6":"Discovery of the radiation belts surrounding Earth.","Unnamed: 7":"/images/planets/earth/historic_radiation_belts_orig.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":"1960s","Unnamed: 4":"Hess, Vine, Matthews et al.","Unnamed: 5":"Marine Geology / Paleomagnetism","Unnamed: 6":"Synthesis of evidence (Wegener, seafloor spreading) explaining the movement of continents.","Unnamed: 7":"/images/planets/earth/Diagram-of-ocean-fl-oor-spreading-fi-rst-outlined-by-HH-Hess-in-1960-published-as.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":"1960s–Present","Unnamed: 4":"Cousteau, Ballard, Vescovo et al.","Unnamed: 5":"Submersibles","Unnamed: 6":"Discovery of hydrothermal vents, extreme life, and ocean floor mapping.","Unnamed: 7":"/images/planets/earth/ocean-vents.jpg","Unnamed: 8":"/images/planets/earth/submarine-volcano.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1968,"Unnamed: 4":"Borman, Lovell, Anders (Apollo 8)","Unnamed: 5":"Apollo Command Module","Unnamed: 6":"irst “Earthrise” photo and a new ecological perspective on Earth.","Unnamed: 7":"/images/planets/earth/NASA-Apollo8-Dec24-Earthrise.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":"1957–Present","Unnamed: 4":"USSR, USA, ESA, etc.","Unnamed: 5":"Satellites / Space Stations","Unnamed: 6":"Ongoing observation for meteorology, environment, military, and communications from Earth orbit.","Unnamed: 7":"/images/planets/earth/Earth_disc_from_MSG_pillars.jpg","Unnamed: 8":"/images/planets/earth/4647159387_ba68fe270b_h.jpg","Unnamed: 9":"/images/planets/earth/abi_north_america_med_res_jan_15_2017_0.jpg","Unnamed: 10":"/images/planets/earth/great_lakes.jpg","Unnamed: 11":"/images/planets/earth/1485348155162798.jpg"},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":1972,"Unnamed: 4":"Apollo 17 Crew","Unnamed: 5":"Space Photography","Unnamed: 6":"One of the first clear, fully illuminated color images of the whole Earth.","Unnamed: 7":"/images/planets/earth/The_Earth_seen_from_Apollo_17.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":"1998–Present","Unnamed: 4":"NASA, Roscosmos, ESA, JAXA, CSA","Unnamed: 5":"Orbital Laboratory","Unnamed: 6":"Platform for long-term scientific research and continuous observation of Earth's climate.","Unnamed: 7":"/images/planets/earth/esa.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":" Earth","Unnamed: 2":"Planet","Unnamed: 3":"2014–Present","Unnamed: 4":"European Union / ESA","Unnamed: 5":"Sentinel Satellites","Unnamed: 6":"The largest Earth observation program, providing environmental data (land, sea, climate) in near real-time.","Unnamed: 7":"/images/planets/earth/Sentinel-1_radar_vision_pillars.jpg","Unnamed: 8":"/images/planets/earth/vito24-001-living_planet_symposium-v3_clean.jpg.webp","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Mars","Unnamed: 1":"Nergal","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Sumerian","Unnamed: 5":"Naked-eye observation","Unnamed: 6":"Mesopotamian god linked to war, death and the underworld, later associated with the red planet.","Unnamed: 7":"/images/planets/mars/Nergal.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Ares","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Greek","Unnamed: 5":"Naked-eye observation","Unnamed: 6":"Greek god of violent war; the reddish “fire-like” planet was tied to his destructive nature.","Unnamed: 7":"/images/planets/mars/500px-Ares_Ludovisi_Altemps_Inv8602_n2.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Romans","Unnamed: 5":"Naked-eye observation","Unnamed: 6":"Roman god of war; its red color made ancient cultures see it as a celestial omen of conflict.","Unnamed: 7":"/images/planets/mars/960px-0_Statue_de_Mars__28Pyrrhus_29_-_Musei_Capitolini_-_MC0058__282_29.JPG","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Star / Not Recognized","Unnamed: 3":"1534 BC","Unnamed: 4":"Egyptians","Unnamed: 5":"Naked-eye observation","Unnamed: 6":"Familiar with the planet's retrograde motion.","Unnamed: 7":"/images/planets/mars/1280px-Astronomical_Ceiling_2C_Tomb_of_Senenmut_MET_DT207429.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Wandering Star ","Unnamed: 3":"4th century BC","Unnamed: 4":"Aristotle","Unnamed: 5":"Occultation","Unnamed: 6":"Noted Mars disappeared behind the Moon, indicating it was further away.","Unnamed: 7":"/images/planets/mars/970272-lunar.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":"2nd century","Unnamed: 4":"Ptolemy","Unnamed: 5":"Geocentric Model","Unnamed: 6":"His orbital model was included in the influential Almagest.","Unnamed: 7":"/images/planets/mars/960px-Bartolomeu_Velho_1568.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1590,"Unnamed: 4":"Michael Maestlin","Unnamed: 5":"Observation","Unnamed: 6":"Only observed occultation of Mars by Venus.","Unnamed: 7":"/images/planets/mars/lunar-occultation-68.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1609,"Unnamed: 4":"Johannes Kepler","Unnamed: 5":"Data Analysis","Unnamed: 6":"Deduced Mars's orbit is elliptical (First Law).","Unnamed: 7":"/images/planets/mars/c0075931-800px-wm.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1610,"Unnamed: 4":"Galileo Galilei","Unnamed: 5":"Telescope","Unnamed: 6":"First use of a telescope for Mars observation.","Unnamed: 7":"/images/planets/mars/galileo-GG1632-3--archives-news.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1659,"Unnamed: 4":"Christiaan Huygens","Unnamed: 5":"Telescope","Unnamed: 6":"First drawn record of a Martian feature; Calculated the rotation of Mars.","Unnamed: 7":"https://www.researchgate.net/profile/Herve-Cottin/publication/226712255/figure/fig18/AS:302298317246464@1449084943026/Three-drawings-made-by-Huygens-in-1659-The-first-one-was-drawn-on-November-28-at-7-pm.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1672,"Unnamed: 4":"Giovanni Domenico Cassini","Unnamed: 5":"Telescope","Unnamed: 6":"Observations of the rotation of Mars around its axis ","Unnamed: 7":"/images/planets/mars/Cassini-1666-002r.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1877,"Unnamed: 4":"Giovanni Schiaparelli","Unnamed: 5":"Telescope","Unnamed: 6":'Created the first detailed map. Observed and named "canali" (channels/grooves).',"Unnamed: 7":"/images/planets/mars/opposizione7_big5.gif","Unnamed: 8":"/images/planets/mars/500px-Mars_Schiaparelli_MKL_Bd._11_1890__28128500338_29.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":"Late 1800s – Early 1900s","Unnamed: 4":"Percival Lowell","Unnamed: 5":"Telescope","Unnamed: 6":'Erroneously interpreted the "canali" as artificial structures (canals) built by a civilization.',"Unnamed: 7":"/images/planets/mars/image_12.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1909,"Unnamed: 4":"Antoniadi","Unnamed: 5":"Telescope","Unnamed: 6":'Observed irregular patterns, but no straight "canali", supporting the optical illusion theory.',"Unnamed: 7":"/images/planets/mars/antoniadi1.jpg","Unnamed: 8":"/images/planets/mars/antoniadi4.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1965,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":'First successful mission. Captured the first 22 close-up images; revealed a cratered, seemingly "dead" world.',"Unnamed: 7":"/images/planets/mars/M04_12.jpg","Unnamed: 8":"/images/planets/mars/nssdc_m04_11ea.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1971,"Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"First spacecraft to successfully orbit another planet. Provided better maps.","Unnamed: 7":"/images/planets/mars/mariner_9_10_mars_global_map.jpg","Unnamed: 8":"/images/planets/mars/mariner_9_9_horizon_with_haze_25_to_40_km_high.jpg","Unnamed: 9":"/images/planets/mars/mariner_9_6_olympus_mons.jpeg","Unnamed: 10":"/images/planets/mars/mariner_9_7_valles_marineris.jpeg","Unnamed: 11":"/images/planets/mars/mariner_9_3_mars_on_approach_showing_nix_olympica_in_dust_storm_nov_11_1971_408_000_mi_pia02995.jpg"},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1975,"Unnamed: 4":"NASA","Unnamed: 5":"Twin Probes","Unnamed: 6":"First long-duration soft landing by the U.S. Performed life detection experiments (inconclusive results).","Unnamed: 7":"/images/planets/mars/2305_Mars-Viking1-Lander-1st-Image-PIA00381-full2.jpg","Unnamed: 8":"/images/planets/mars/viking_2_surface_image.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1990,"Unnamed: 4":"NASA","Unnamed: 5":"Telescope","Unnamed: 6":"First color image of the planet by Hubble Telescope","Unnamed: 7":"/images/planets/mars/Mars_from_Hubble__28Dec._13_2C_1990_29.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":1997,"Unnamed: 4":"NASA","Unnamed: 5":"Lander / First Rover","Unnamed: 6":"Began the uninterrupted robotic presence at Mars. Sojourner was the first successful rover.","Unnamed: 7":"/images/planets/mars/2400px-Mars_Pathfinder_Presidential_Panorama.jpg","Unnamed: 8":"/images/planets/mars/pia01551.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":"1997–2006","Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"Provided complete, detailed maps of topography, magnetic field, and surface minerals.","Unnamed: 7":null,"Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":"2001–Present","Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"Discovered evidence of subsurface water ice (hydrogen).","Unnamed: 7":null,"Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":2003,"Unnamed: 4":"NASA","Unnamed: 5":"Rover","Unnamed: 6":"Explored the geology and history of water on Mars. Opportunity exceeded expectations dramatically.","Unnamed: 7":"/images/planets/mars/2560px-Fram_Crater_in_color.jpg","Unnamed: 8":"/images/planets/mars/500px-PIA22222-Mars-OpportunityRover-FirstSelfie-20180220.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":"2005–Present","Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"Provides ultra-high resolution observations for climate and landing site study.","Unnamed: 7":"/images/planets/mars/hubble-mars-close-approach-2003-jpg.webp","Unnamed: 8":"/images/planets/mars/cq5dam.web.1280.1280.jpeg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":2018,"Unnamed: 4":"NASA","Unnamed: 5":"Lander","Unnamed: 6":"Investigation of Mars's internal structure (seismology and heat flow).","Unnamed: 7":"/images/planets/mars/PIA22575_IDC_Camera_First_Image.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":"2012–Present","Unnamed: 4":"NASA","Unnamed: 5":"Rover","Unnamed: 6":"Active rover investigating past habitability and geology.","Unnamed: 7":"/images/planets/mars/Curiosity_Postcard_PIA24937-1.jpg","Unnamed: 8":"/images/planets/mars/Rocky_Mars_Surface.jpeg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":"2020–Present","Unnamed: 4":"NASA","Unnamed: 5":"Rover / First Flight","Unnamed: 6":"Active rover searching for signs of ancient life and sample collection. Ingenuity was the first controlled flight on another planet.","Unnamed: 7":"/images/planets/mars/Mars_2020_selfie_containing_both_perseverance_rover_and_ingenuity.gif","Unnamed: 8":"/images/planets/mars/PIA25217-MarsIngenuityHelicopter-LandingGear-20220419.jpg","Unnamed: 9":"/images/planets/mars/Flight_13_zoomed-in_animation_from_Perseverance_Mastcam.gif","Unnamed: 10":"/images/planets/mars/2560px-PIA25220-MarsIngenuityHelicopter-27-FortunRidge-20220423.jpg","Unnamed: 11":"/images/planets/mars/45954_PIA24581.jpg"},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Mars","Unnamed: 2":"Planet","Unnamed: 3":2023,"Unnamed: 4":"NASA","Unnamed: 5":"Simulation","Unnamed: 6":"Simulated view of Mars with enhanced color and contrast","Unnamed: 7":"/images/planets/mars/QDnjitdnUnRzAyw59g6wPc-1200-80.jpg.webp","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Jupiter","Unnamed: 1":"Marduk","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity ","Unnamed: 4":"Sumerian / Babylonian","Unnamed: 5":"Naked-eye observation","Unnamed: 6":"Supreme Mesopotamian god; the greatest planet was linked to his role as cosmic ruler.","Unnamed: 7":"/images/planets/jupiter/Chaos_Monster_and_Sun_God.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Zeus","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity ","Unnamed: 4":"Ancient Greek","Unnamed: 5":"Naked-eye observation","Unnamed: 6":"In Greece, the largest planet symbolized Zeus’s authority and dominion over sky and thunder.","Unnamed: 7":"/images/planets/jupiter/500px-Jupiter_Smyrna_Louvre_Ma13.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity ","Unnamed: 4":"Ancient Roman","Unnamed: 5":"Naked-eye observation","Unnamed: 6":"Romans saw the bright giant as the celestial form of Jupiter, ruler of gods and state.","Unnamed: 7":"/images/planets/jupiter/960px-0_Jupiter_-_Louvre_MR_254_-_Louvre-Lens__282_29.JPG","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Medicean Stars","Unnamed: 3":1610,"Unnamed: 4":"Galileo Galilei","Unnamed: 5":"Telescope","Unnamed: 6":"Discovery of the four largest moons (Io, Europa, Ganymede, Callisto). This observation refuted the Ptolemaic model.","Unnamed: 7":"/images/planets/jupiter/960px-Medicean_Stars.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1665,"Unnamed: 4":"Giovanni Cassini","Unnamed: 5":"Telescope","Unnamed: 6":"Identified a distinct red formation (Great Red Spot or other storms).","Unnamed: 7":"/images/planets/jupiter/cassini-sketch-jupiter-1024x574.jpg","Unnamed: 8":"/images/planets/jupiter/Historical-Illustrations-of-Jupiter.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1671,"Unnamed: 4":"Ole Rømer","Unnamed: 5":"Observation of Moon Motions","Unnamed: 6":"Deduced that discrepancies in moon occultation predictions were due to the time light takes to travel the varying Earth-Jupiter distance, calculating the speed of light.","Unnamed: 7":"/images/planets/jupiter/Illustration_from_1676_article_on_Ole_R_C3_B8mer_27s_measurement_of_the_speed_of_light.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1831,"Unnamed: 4":"Heinrich Schwabe ","Unnamed: 5":"Telescope","Unnamed: 6":"Earliest known drawing to show details of the Great Red Spot ","Unnamed: 7":"/images/planets/jupiter/Popular_science_monthly_1872_14779876541.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1938,"Unnamed: 4":null,"Unnamed: 5":"Telescope","Unnamed: 6":"The belts of jupiter in disturbed and quiescent states","Unnamed: 7":null,"Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1955,"Unnamed: 4":"Burke and Franklin","Unnamed: 5":"Radiotelescope","Unnamed: 6":"Detected Jupiter as a highly active source of radio emissions (second only to the Sun).","Unnamed: 7":"/images/planets/jupiter/jupiter3-1280x853.jpg","Unnamed: 8":"/images/planets/jupiter/jupiter3-1280x853.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1973,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"First mission to visit Jupiter (Pioneer 10). Captured first close-up images; discovered its magnetic field and mainly fluid interior.","Unnamed: 7":"/images/planets/jupiter/ZsRoiEtbRozpPAWmFhEAGN-946-80.jpg.webp","Unnamed: 8":"/images/planets/jupiter/pioneer_10_launch_7_jupiter_europa_ganymede_composite.jpg","Unnamed: 9":"/images/planets/jupiter/pioneer_10_launch_6_jupiter_flyby_art.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1974,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Observed the polar regions and the Great Red Spot (Pioneer 11).","Unnamed: 7":"/images/planets/jupiter/pioneer_11_jupiter_north_pole.jpg","Unnamed: 8":"/images/planets/jupiter/Fuzzy_color_image_of_Jupiter.jpeg","Unnamed: 9":"/images/planets/jupiter/jupiter_pioneer11_approach_stryk_c25b.png","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1979,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Discovered a thin ring system around Jupiter (Voyager 1); discovered volcanic activity on Io.","Unnamed: 7":"/images/planets/jupiter/jpegPIA02251.jpg","Unnamed: 8":"/images/planets/jupiter/jpegPIA00373.jpg","Unnamed: 9":"/images/planets/jupiter/pia00010.jpg","Unnamed: 10":"/images/planets/jupiter/PIA01484.jpg","Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1979,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Discovered three new moons (Adrastea, Metis, and Thebe); studied the atmosphere and the Red Spot (Voyager 2).","Unnamed: 7":"/images/planets/jupiter/PIA01370_orig.jpg","Unnamed: 8":"/images/planets/jupiter/Adrast_C3_A9e_FDS_20630.png","Unnamed: 9":"/images/planets/jupiter/image-Jupiter-Great-Red-Spot-spacecraft-Juno.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":"1992, 2004","Unnamed: 4":"ESA/NASA","Unnamed: 5":"Solar Probe","Unnamed: 6":"Studied Jupiter's magnetosphere while using the planet's gravity to change trajectory towards the Sun's polar regions.","Unnamed: 7":"/images/planets/jupiter/STScI-01EVT9YHVPCRY1ZCA2RVV98NPV.tif","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":1995,"Unnamed: 4":"NASA","Unnamed: 5":"Probe / Lander","Unnamed: 6":"First probe to directly measure the atmosphere (descended 153 km) before vaporizing. Transmitted data on winds and composition.","Unnamed: 7":"/images/planets/jupiter/E4_True_and_False_Color_Jupiter_Hot_Spot_Mosaic__28PIA00602_29.jpg","Unnamed: 8":"/images/planets/jupiter/SL9ImpactGalileo.jpg","Unnamed: 9":"/images/planets/jupiter/2560px-Great_Red_Spot_at_Four_Different_Wavelengths__28PIA00721_29.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":"1995–2003","Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"First probe to orbit Jupiter. Found evidence of a subsurface liquid water ocean on Europa and studied the Galilean moons in detail.","Unnamed: 7":"/images/planets/jupiter/SL9ImpactGalileo.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":2e3,"Unnamed: 4":"NASA/ESA","Unnamed: 5":"Space Probe","Unnamed: 6":"Observed Jupiter for about six months during its journey to Saturn, providing sharp color images.","Unnamed: 7":"/images/planets/jupiter/image_29.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":2007,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Observed the Jupiter system (atmosphere, moons, rings) for about six months during its path to Pluto. Measured the temperature of Io's volcanoes.","Unnamed: 7":"/images/planets/jupiter/Jupiter_as_imaged_by_New_Horizons_pillars.jpg","Unnamed: 8":"/images/planets/jupiter/Jupiter_as_imaged_by_New_Horizons_pillars.jpg","Unnamed: 9":"/images/planets/jupiter/lor_0034829600_0x630_sci_1.png","Unnamed: 10":"/images/planets/jupiter/STScI-01EVT6Z7XPMG4XA4JS7JBBEE3B.tif","Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":"2016–Present","Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"Currently in polar orbit. Studies the internal structure, gravitational field, magnetic field, and polar atmosphere. Discovered a new radiation belt.","Unnamed: 7":"/images/planets/jupiter/2560px-PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":"1990–Present","Unnamed: 4":"NASA/ESA","Unnamed: 5":"Space Telescope","Unnamed: 6":"Provided and continues to provide numerous long-term photos and observations of Jupiter's climate changes (e.g., Red Spot).","Unnamed: 7":"/images/planets/jupiter/STScI-01J947TJ6V1DY43NW5HSY7HXSZ.tif","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Jupiter","Unnamed: 2":"Planet","Unnamed: 3":2022,"Unnamed: 4":"NASA","Unnamed: 5":"Space Telescope","Unnamed: 6":"NASA’s Juno mission orbiting Jupiter","Unnamed: 7":"/images/planets/jupiter/giove_juno-immagini-vicine.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Saturn","Unnamed: 1":"Ninurta","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Sumerians","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"The planet Saturn, though a deity, was sometimes associated with the god of war, hunting, or agriculture depending on the period.","Unnamed: 7":"/images/planets/saturn/500px-Cropped_Image_of_Carving_Showing_the_Mesopotamian_God_Ninurta.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Kronos","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Greeks","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Associated with the Greek god Cronus, the leader of the Titans and the god of time (in the sense of flowing time).","Unnamed: 7":"/images/planets/saturn/Rhea_handing_a_swaddled_stone_to_Cronus_2C_Attic_terracotta_pelike_2C_c._460_E2_80_93450_BC_2C_Met_06.1021.144.jpg__28cropped_29.jpg","Unnamed: 8":"/images/planets/saturn/Chronos-Giovanni-Francesco-Romanelli.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturnus","Unnamed: 2":"Divinity","Unnamed: 3":"Antiquity","Unnamed: 4":"Romans","Unnamed: 5":"Naked-eye Observation","Unnamed: 6":"Associated with the Roman god Saturn, the god of sowing, agriculture, and time, who was later equated with Cronus.","Unnamed: 7":"/images/planets/saturn/960px-thumbnail.jpg","Unnamed: 8":"/images/planets/saturn/image_4.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1610,"Unnamed: 4":"Galileo Galilei","Unnamed: 5":"Telescope","Unnamed: 6":'First telescopic observation. Saw "ears" or "handles" on the sides of the planet, not recognizing the nature of the rings.',"Unnamed: 7":"/images/planets/saturn/Anillos_de_Satruno_-_Galileo_Galilei.png","Unnamed: 8":"/images/planets/saturn/Huygens_Systema_Saturnium.jpg","Unnamed: 9":"https://www.researchgate.net/profile/David-Dubois-6/publication/331247528/figure/fig1/AS:778541683716099@1562630210723/Drawings-of-the-first-observations-of-Saturn-with-a-telescope-I-Galileo-1610-II.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1655,"Unnamed: 4":"Christiaan Huygens","Unnamed: 5":"Telescope","Unnamed: 6":'Recognized that the "ears" were a system of thin, flat rings that did not touch the planet.',"Unnamed: 7":"/images/planets/saturn/huygens1.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1666,"Unnamed: 4":"Robert Hooke","Unnamed: 5":"Telescope","Unnamed: 6":" Shadows (a and b) cast by both the globe and the rings on each other","Unnamed: 7":"/images/planets/saturn/500px-Saturn_Robert_Hooke_1666.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1675,"Unnamed: 4":"Giovanni Cassini","Unnamed: 5":"Telescope","Unnamed: 6":"Discovered the gap between the A and B rings, now known as the Cassini Division.","Unnamed: 7":"/images/planets/saturn/cassini1.jpg","Unnamed: 8":"/images/planets/saturn/cassini7.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1789,"Unnamed: 4":"William Herschel","Unnamed: 5":"Telescope","Unnamed: 6":"Discovery of the moons Enceladus and Mimas.","Unnamed: 7":"/images/planets/saturn/herschel-3.tiff","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1848,"Unnamed: 4":"Bond, Lassell, e Pickering","Unnamed: 5":"Telescope","Unnamed: 6":"Discovered the C Ring (or Crepe Ring), which is darker and translucent, located inside the B Ring.","Unnamed: 7":"/images/planets/saturn/s-l1200.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1960,"Unnamed: 4":"NASA","Unnamed: 5":"National Park Observation","Unnamed: 6":"Discovery (or at least identification) of a thin F Ring (later confirmed by probes).","Unnamed: 7":"/images/planets/saturn/13-1-0675f4c3.jpeg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1979,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"First mission to visit Saturn (Pioneer 11). Provided data on the magnetosphere, Titan's temperature, and took the first close-up images.","Unnamed: 7":"/images/planets/saturn/saturn_from_pioneer_11.jpg","Unnamed: 8":"/images/planets/saturn/pioneer_11_saturn_post_encounter.jpg","Unnamed: 9":"/images/planets/saturn/pioneer_11_saturn_titan.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1980,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Discovered the F Ring and the moons Prometheus and Pandora (shepherd moons). Executed the Titan flyby, confirming its dense atmosphere (Voyager 1).","Unnamed: 7":"/images/planets/saturn/PIA05393.jpg","Unnamed: 8":"/images/planets/saturn/jpegPIA05387.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":1981,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":'Measured the temperature and density of the rings, revealing thousands of "ringlets" and structures like "spokes" (Voyager 2).',"Unnamed: 7":"/images/planets/saturn/voyager_2_saturn_18_departure_aug_28_1981_2_1_m_miles.png","Unnamed: 8":"/images/planets/saturn/voyager_2_saturn_5_flyby_false_color_30_m_miles_jul_12_1981.jpg","Unnamed: 9":"/images/planets/saturn/voyager_2_saturn_6_flyby_saturn_13_m_miles_tethys_and_shadow_dione_rhea_aug_4_1981.jpg","Unnamed: 10":"/images/planets/saturn/voyager_2_saturn_7_flyby_b-ring_spokes_2_5_m_miles_aug_22_1981.png","Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":"1990–Present","Unnamed: 4":"NASA/ESA","Unnamed: 5":"Space Telescope","Unnamed: 6":"Provided and continues to provide long-term observations of seasonal and atmospheric changes (Hubble Space Telescope).","Unnamed: 7":"/images/planets/saturn/Hubble_Reveals_Latest_Portrait_of_Saturn_pillars.jpg","Unnamed: 8":"/images/planets/saturn/STScI-01HGXC6PRGG2D1WGQE4XXXK9JX.tif","Unnamed: 9":"/images/planets/saturn/STScI-01EVVG5M4CFCV1ZR2B8822ADGC.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":"2004–2017","Unnamed: 4":"NASA/ESA/ASI","Unnamed: 5":"Orbiter","Unnamed: 6":"First and only probe to orbit Saturn (Cassini). Provided unprecedented data on rings, magnetosphere, and moons for 13 years.","Unnamed: 7":"/images/planets/saturn/The_Face_of_Beauty.png","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":2005,"Unnamed: 4":"ESA","Unnamed: 5":"Lander","Unnamed: 6":"Released by Cassini, landed on the surface of Titan (Huygens). First-ever landing on a Saturn moon; transmitted images from the surface.","Unnamed: 7":"/images/planets/saturn/First_images_from_Titan_pillars.jpg","Unnamed: 8":"/images/planets/saturn/First_images_from_Titan_pillars.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":2005,"Unnamed: 4":"Cassini","Unnamed: 5":"Orbiter","Unnamed: 6":"Discovered jets of water vapor and ice particles erupting from Enceladus's south pole, indicating a subsurface ocean (Cassini).","Unnamed: 7":"/images/planets/saturn/PIA08386.jpg","Unnamed: 8":"/images/planets/saturn/PIA19061.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":2005,"Unnamed: 4":"Cassini","Unnamed: 5":"Orbiter","Unnamed: 6":"Confirmed that the icy particles in the E Ring originate from the geysers on Enceladus (Cassini).","Unnamed: 7":"/images/planets/saturn/Enceladus_Plume.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":2011,"Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"A global storm girdles the planet in 2011. The storm passes around the planet, such that the storm's head (bright area) passes its tail","Unnamed: 7":null,"Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Saturn","Unnamed: 2":"Planet","Unnamed: 3":2017,"Unnamed: 4":"NASA","Unnamed: 5":"Orbiter","Unnamed: 6":"Executed the Grand Finale (passes between the rings and the planet) before disintegrating in Saturn's atmosphere to avoid moon contamination (Cassini).","Unnamed: 7":"/images/planets/saturn/PIA21895_ImpactSite_FigA_FINALIMAGE_2.png","Unnamed: 8":"/images/planets/saturn/1061_Enceladus-2.png","Unnamed: 9":"/images/planets/saturn/1064_Saturn_Hemisphere-2.png","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Uranus","Unnamed: 1":"Hipparchus / 34 Tauri/Star","Unnamed: 2":"Star / Not Recognized","Unnamed: 3":"Antiquity – 1769","Unnamed: 4":"Hipparchus, J. Flamsteed, P. Le Monnier","Unnamed: 5":"Naked-eye observation / Telescope","Unnamed: 6":"Observed multiple times and mistakenly cataloged as a fixed star due to its low brightness and extremely slow movement.","Unnamed: 7":"/images/planets/uranus/09.RalphSmyth_UranusAnd4Satellites-5baeea3-e1603791298522.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Comet / Georgium Sidus","Unnamed: 2":"Comet / Planet","Unnamed: 3":1781,"Unnamed: 4":"William Herschel","Unnamed: 5":"Telescope","Unnamed: 6":"Official Discovery (initially thought to be a comet). It was the first planet discovered in the modern era, expanding the boundaries of the Solar System.","Unnamed: 7":"/images/planets/uranus/Uranus6.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Uranus","Unnamed: 2":"Planet","Unnamed: 3":1977,"Unnamed: 4":"J. Elliot, E. Dunham, D. Mink","Unnamed: 5":"Aerial Occultation Observation","Unnamed: 6":"Discovery of the ring system (initially 9) while observing a stellar occultation from the Kuiper Airborne Observatory (KOA).","Unnamed: 7":"/images/planets/uranus/GIVvEWUXkAAhxAE.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Uranus","Unnamed: 2":"Planet","Unnamed: 3":1986,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Only mission to visit Uranus. Detected the unusually tilted magnetic field (59° to the rotation axis) and the extreme axial tilt (98°).","Unnamed: 7":"/images/planets/uranus/STScI-01EVT8XQTXDN68CJWBZ1N9P1PW.tif","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Uranus","Unnamed: 2":"Planet","Unnamed: 3":1986,"Unnamed: 4":"Voyager 2","Unnamed: 5":"Space Probe","Unnamed: 6":'Detected a polar haze cap and the "electroglow" phenomenon (UV emission) on the sunlit pole.',"Unnamed: 7":"/images/planets/uranus/voyager_2_uranus_coloar_and_false_color_pia00032-43_full_jan_17_1986_5_7_million_miles.jpg","Unnamed: 8":"/images/planets/uranus/voyager_2_uranus_false_color_image_of_rings_jan_21_19862_6_million_miles.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Uranus","Unnamed: 2":"Planet","Unnamed: 3":2004,"Unnamed: 4":"De Pater, Hammel, Sromovsky","Unnamed: 5":"Ground-based telescope (W. M. Keck Observatory with adaptive optics)","Unnamed: 6":"Best ground-based images of Uranus showing cloud structure, rings and atmospheric change.","Unnamed: 7":"/images/planets/uranus/3_2-300x300-1.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Uranus","Unnamed: 2":"Planet","Unnamed: 3":2006,"Unnamed: 4":"Keck Obs. / HST","Unnamed: 5":"Ground/Space Telescopes","Unnamed: 6":"Confirmed that the Epsilon Ring (outermost) is blue, while the newly discovered inner ring is reddish.","Unnamed: 7":"/images/planets/uranus/uranus.jpg","Unnamed: 8":"/images/planets/uranus/9_22.gif","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Uranus","Unnamed: 2":"Planet","Unnamed: 3":"1990–Present","Unnamed: 4":"HST, Keck, JWST","Unnamed: 5":"Space/Ground Telescopes","Unnamed: 6":"Continuous monitoring of extreme seasons and storms, made possible by the use of infrared filters and adaptive optics.","Unnamed: 7":"/images/planets/uranus/STScI-01GWQDPJTF1MY8ZGN4WBMWMACJ.png","Unnamed: 8":"/images/planets/uranus/uranusIR-300x150-1.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Uranus","Unnamed: 2":"Planet","Unnamed: 3":2004,"Unnamed: 4":"NASA","Unnamed: 5":"Telescope","Unnamed: 6":"An infrared composite image of the two hemispheres of Uranus obtained with Keck Telescope adaptive optics.","Unnamed: 7":"/images/planets/uranus/PIA17306_orig.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":"Neptune","Unnamed: 1":"Unknown / Star","Unnamed: 2":"Unknown / Star","Unnamed: 3":1612,"Unnamed: 4":"Galileo Galilei","Unnamed: 5":"Telescope","Unnamed: 6":"Observed and recorded as a fixed star near Jupiter. Its planetary nature was not recognized due to its extremely slow movement.","Unnamed: 7":"/images/planets/neptune/OsservazioneGalileo.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Unknown Planet","Unnamed: 2":"Planet","Unnamed: 3":"1843–1846","Unnamed: 4":"Urbain Le Verrier","Unnamed: 5":"Mathematical Calculations","Unnamed: 6":"Observed and recorded as a fixed star near Jupiter. Its planetary nature was not recognized due to its extremely slow movement.","Unnamed: 7":"/images/planets/neptune/b79.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Unknown Planet","Unnamed: 2":"Planet","Unnamed: 3":"1845–1846","Unnamed: 4":"John Couch Adams","Unnamed: 5":"Mathematical Calculations","Unnamed: 6":"Reached an independent and nearly identical prediction of the planet's position, but failed to secure a systematic observation.","Unnamed: 7":null,"Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":1846,"Unnamed: 4":"All Astronomers","Unnamed: 5":"Scientific Consensus","Unnamed: 6":"It was named Neptune (Roman god of the sea) to follow the mythological theme and due to its blue coloring.","Unnamed: 7":"/images/planets/neptune/Sousse_neptune.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":1984,"Unnamed: 4":"A. Brahic, W. B. Hubbard et al.","Unnamed: 5":"Occultation Observation","Unnamed: 6":"Stellar occultation data suggested the existence of incomplete rings or ring arcs.","Unnamed: 7":"/images/planets/neptune/1-s2.0-S0019103523000519-gr4.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":1989,"Unnamed: 4":"NASA","Unnamed: 5":"Space Probe","Unnamed: 6":"Only mission to visit Neptune. Provided high-quality images and data; its flyby marked the completion of the robotic exploration of the giant planets.","Unnamed: 7":"/images/planets/neptune/pia01492-main.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":1989,"Unnamed: 4":"Voyager 2","Unnamed: 5":"Space Probe","Unnamed: 6":"Discovery of the Great Dark Spot (a giant anti-cyclonic storm), which has since vanished and reappeared.","Unnamed: 7":"/images/planets/neptune/neptune_discovery_6_voyager_2_neptune_great_spot.jpg","Unnamed: 8":"/images/planets/neptune/neptune_discovery_7_voyager_2_neptune_high_altitude_clouds.jpg","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":1989,"Unnamed: 4":"Voyager 2","Unnamed: 5":"Space Probe","Unnamed: 6":"Confirmed that the previously hypothesized arcs were part of complete but very faint and thin rings, with local clumps.","Unnamed: 7":"/images/planets/neptune/https___specials-images.forbesimg.com_dam_imageserve_50581210_960x0.jpg","Unnamed: 8":"/images/planets/neptune/Neptune_Voyager2_color_calibrated.png","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":1989,"Unnamed: 4":"Voyager 2","Unnamed: 5":"Space Probe","Unnamed: 6":"Detected the distinct arcs within the outermost Adams Ring, with the most prominent arc named Courage.","Unnamed: 7":"/images/planets/neptune/jpegPIA02256.jpg","Unnamed: 8":null,"Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":"1990–Present","Unnamed: 4":"NASA/ESA","Unnamed: 5":"Space Telescope","Unnamed: 6":"Long-term monitoring of seasonal changes and weather systems (Dark Spots).","Unnamed: 7":"/images/planets/neptune/hubble-voyager-large-2.jpg","Unnamed: 8":"/images/planets/neptune/STScI-01EVSSSN6T0YKZSDTPNHEXDEP2.tif","Unnamed: 9":"/images/planets/neptune/STScI-01EVVGVGNCB6JEJ5NV9649W3J6.jpg","Unnamed: 10":null,"Unnamed: 11":null},{"In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)":null,"Unnamed: 1":"Neptune","Unnamed: 2":"Planet","Unnamed: 3":"1990–Present","Unnamed: 4":"HST, Keck, JWST","Unnamed: 5":"Space/Ground Telescopes","Unnamed: 6":"Continuous monitoring of the planet's clouds and brightness changes in response to its long seasons.","Unnamed: 7":"/images/planets/neptune/STScI-01H7DMA8FB4RGP8JA398W6SWW0.tif","Unnamed: 8":"/images/planets/neptune/STScI-01H7DNWVHHFVGJMTV58WWG2NTX.tif","Unnamed: 9":null,"Unnamed: 10":null,"Unnamed: 11":null}];console.log("Create the scene");const ti=new Wg;console.log("Create a perspective projection camera");var nt=new Bt(45,window.innerWidth/window.innerHeight,.1,1e3);nt.position.set(-175,115,5);console.log("Create the renderer");const it=new Zc({powerPreference:"high-performance",antialias:!0});it.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(it.domElement);it.domElement.style.width="100%";it.domElement.style.height="100%";it.domElement.style.position="absolute";it.domElement.style.top="0";it.domElement.style.left="0";it.domElement.style.display="block";it.domElement.style.backgroundColor="#000";it.domElement.style.zIndex="0";it.domElement.style.opacity="0";it.toneMapping=xc;console.log("Create an orbit control");const Ht=new D_(nt,it.domElement);Ht.enableDamping=!0;Ht.dampingFactor=.75;Ht.screenSpacePanning=!1;Ht.enabled=!0;console.log("Set up texture loader");const Yv=new m_,Kt=new au,Nn=new H_(it);Nn.addPass(new G_(ti,nt));const In=new Zn(new ue(window.innerWidth,window.innerHeight),ti,nt);In.edgeStrength=3;In.edgeGlow=1;In.visibleEdgeColor.set(16777215);In.hiddenEdgeColor.set(1640965);Nn.addPass(In);const co=new ns(new ue(window.innerWidth,window.innerHeight),1,.4,.85);co.threshold=1;co.radius=.9;Nn.addPass(co);console.log("Add the ambient light");var Kv=new x_(2236962,6);ti.add(Kv);ti.background=Yv.load([Ev,Tv,Sa,Sa,bv,Sa]);let dt=1,$t=1;const Qv=1.9;let Ps=!1;const br=new L_,qi=new ue;function Jv(s){s.preventDefault(),qi.x=s.clientX/window.innerWidth*2-1,qi.y=-(s.clientY/window.innerHeight)*2+1}let cr=null,Ba=!1,hr=new C,fr=new C;function Zv(s){if(s.preventDefault(),!Ps){qi.x=s.clientX/window.innerWidth*2-1,qi.y=-(s.clientY/window.innerHeight)*2+1,br.setFromCamera(qi,nt);var e=br.intersectObjects(fu);if(e.length>0){const t=e[0].object,n=$v(t);if(n){r0(),cr=n,dt=0;const i=new C;cr.planet.getWorldPosition(i);const a=cr.planet.geometry.parameters.radius*3.5,o=new C;o.subVectors(nt.position,i).normalize(),hr.copy(i).add(o.multiplyScalar(a)),fr.copy(i),Ba=!0,n0(cr.name),e0(500),h0()}}}}function $v(s){return s.material===hn.planet.material?hn:s.material===Lt.Atmosphere.material?Lt:s.material===lt.Atmosphere.material?lt:s.material===Vt.planet.material?Vt:s.material===Pt.planet.material?Pt:s.material===rn.planet.material?rn:s.material===_n.planet.material?_n:s.material===vn.planet.material?vn:s.material===yn.planet.material?yn:null}function uu(s,e,t){const n=parseFloat(it.domElement.style.height.replace("%",""))||100,i=s,r=performance.now();function a(o){const l=o-r,c=Math.min(l/e,1),u=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2,d=n+(i-n)*u,h=Math.round(window.innerHeight*d/100);it.domElement.style.height=h+"px",it.setSize(window.innerWidth,h,!0),Nn.setSize(window.innerWidth,h),nt.aspect=window.innerWidth/h,nt.updateProjectionMatrix(),Nn.render(),c<1?requestAnimationFrame(a):t&&t()}requestAnimationFrame(a)}let ys=45;function e0(s){const e=performance.now();ys=nt.fov;const t=ys*.75;function n(i){const r=i-e,a=Math.min(r/s,1),o=a<.5?2*a*a:1-Math.pow(-2*a+2,2)/2,l=ys+(t-ys)*o;nt.fov=l,nt.updateProjectionMatrix(),a<1&&requestAnimationFrame(n)}requestAnimationFrame(n)}function t0(s){const e=performance.now(),t=nt.fov,n=ys;function i(r){const a=r-e,o=Math.min(a/s,1),l=o<.5?2*o*o:1-Math.pow(-2*o+2,2)/2,c=t+(n-t)*l;nt.fov=c,nt.updateProjectionMatrix(),o<1&&requestAnimationFrame(i)}requestAnimationFrame(i)}function n0(s){var e=document.getElementById("planetInfo"),t=document.getElementById("planetName");document.getElementById("planetDetails"),t.innerText=s,Ir(null),v0(s),e.style.display="block",e.style.transform="translateY(0)",Ps=!0,Ht.enabled=!1,uu(50,500,()=>{})}let ka=!1,mr=new C(-175,115,5),i0=new C(-175,115,5);function s0(){var s=document.getElementById("planetInfo");s.style.transform="translateY(100%)",dt=1,Ps=!1,Ht.enabled=!0,uu(100,500,()=>{}),t0(500),ka=!0,mr.copy(i0),Ht.target.set(0,0,0),setTimeout(()=>{pu?pr():d0()},300),setTimeout(()=>{s.style.display="none"},500)}window.closeInfo=s0;function r0(){var s=document.getElementById("planetInfo");s.style.display="none",s.style.transform="translateY(100%)",dt=1}let du;const a0=697/40,o0=new Wi(a0,32,20);du=new gi({emissive:16775311,emissiveMap:Kt.load(Uv),emissiveIntensity:Qv});const uo=new St(o0,du);ti.add(uo);const cs=new ou(16646099,1200,400,1.4);ti.add(cs);function Bn(s,e,t,n,i,r,a,o,l){let c;i instanceof bt?c=i:r?c=new ji({map:Kt.load(i),bumpMap:Kt.load(r),bumpScale:.7}):c=new ji({map:Kt.load(i)}),c.userData={originalTexture:i,originalBump:r,planetName:s};const u=s,d=new Wi(e,32,20),h=new St(d,c),m=new st,g=new Qn;g.add(h);let _,p;h.position.x=t,h.rotation.z=n*Math.PI/180;const x=new t_(0,0,t,t,0,2*Math.PI,!1,0).getPoints(100),v=new jt().setFromPoints(x),E=new to({color:16777215,transparent:!0,opacity:.03}),A=new eu(v,E);if(A.rotation.x=Math.PI/2,g.add(A),a){const w=new io(a.innerRadius,a.outerRadius,30),U=new gi({map:Kt.load(a.texture),side:Qt});p=new St(w,U),g.add(p),p.position.x=t,p.rotation.x=-.5*Math.PI,p.rotation.y=-n*Math.PI/180}if(o){const w=new Wi(e+.1,32,20),U=new ji({map:Kt.load(o),transparent:!0,opacity:.4,depthTest:!0,depthWrite:!1});_=new St(w,U),_.rotation.z=.41,h.add(_)}return l&&l.forEach(w=>{let U;w.bump?U=new gi({map:Kt.load(w.texture),bumpMap:Kt.load(w.bump),bumpScale:.5}):U=new gi({map:Kt.load(w.texture)});const H=new Wi(w.size,32,20),M=new St(H,U),b=e*1.5;M.position.set(b,0,0),g.add(M),w.mesh=M}),m.add(g),ti.add(m),{name:u,planet:h,planet3d:m,Atmosphere:_,moons:l,planetSystem:g,Ring:p,originalMaterial:c}}function hu(s){const e=[];let t=null;for(let i=0;i<is.length;i++){const r=is[i],a=r["In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)"];if(a&&a!=="null"&&(t=a),t&&t.toLowerCase()===s.toLowerCase()&&e.push(r),t&&t.toLowerCase()!==s.toLowerCase()&&e.length>0)break}const n=[];return e.slice(1).forEach(i=>{["Unnamed: 7","Unnamed: 8","Unnamed: 9","Unnamed: 10","Unnamed: 11"].forEach(a=>{const o=i[a];o&&o!==null&&o!=="null"&&!o.startsWith("http")&&n.push(o)})}),n}function l0(s){return{Mercury:{saturation:.4,brightness:.9,tint:[160,140,120]},Venus:{saturation:.5,brightness:1,tint:[255,220,140]},Earth:{saturation:.7,brightness:1.1,tint:[50,150,255]},Mars:{saturation:.8,brightness:1,tint:[255,80,40]},Jupiter:{saturation:.6,brightness:1,tint:[230,180,120]},Saturn:{saturation:.5,brightness:1,tint:[250,230,170]},Uranus:{saturation:.7,brightness:1,tint:[100,220,255]},Neptune:{saturation:.8,brightness:1,tint:[40,100,255]},Pluto:{saturation:.4,brightness:.85,tint:[200,180,170]}}[s]||{saturation:.4,brightness:.9,tint:[200,200,200]}}function Ur(s,e,t){const n=l0(t),i=s.getImageData(0,0,e,e),r=i.data,a=e/2,o=e/2,l=e/2;for(let u=0;u<e;u++)for(let d=0;d<e;d++){const h=(u*e+d)*4,m=d-a,g=u-o,p=Math.sqrt(m*m+g*g)/l,f=Math.max(0,1-Math.pow(p,1.5)*.4),x=Math.cos(p*Math.PI/2);let v=r[h],E=r[h+1],A=r[h+2];const w=v*.299+E*.587+A*.114,U=.3;v=w*(1-U)+n.tint[0]*U,E=w*(1-U)+n.tint[1]*U,A=w*(1-U)+n.tint[2]*U;const H=(v+E+A)/3,M=n.saturation*1.5;v=H+(v-H)*M,E=H+(E-H)*M,A=H+(A-H)*M;const b=f*(.9+x*.2)*n.brightness*1.2;r[h]=Math.min(255,v*b),r[h+1]=Math.min(255,E*b),r[h+2]=Math.min(255,A*b)}s.putImageData(i,0,0),s.globalCompositeOperation="destination-in";const c=s.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,"rgba(255, 255, 255, 1)"),c.addColorStop(.7,"rgba(255, 255, 255, 1)"),c.addColorStop(1,"rgba(255, 255, 255, 0.95)"),s.fillStyle=c,s.fillRect(0,0,e,e),s.globalCompositeOperation="source-over"}function c0(s,e){const t=hu(s);if(t.length===0){console.log(`No images found for ${s}`);return}const n=document.createElement("canvas"),i=2048;n.width=i,n.height=i;const r=n.getContext("2d");r.fillStyle="#1a1a1a",r.fillRect(0,0,i,i);const a=Math.ceil(Math.sqrt(t.length)),o=Math.ceil(t.length/a),l=a*o,c=i/a,u=i/o;let d=0;const h=t.length,m=[];t.forEach((g,_)=>{const p=new Image;g.startsWith("http")||(p.crossOrigin=""),p.onload=()=>{if(m.push(p),d++,d===h){if(m.length>0)for(let x=0;x<l;x++){const v=x%a,E=Math.floor(x/a),A=v*c,w=E*u,U=x%m.length,H=m[U];r.globalAlpha=1,r.drawImage(H,A,w,c,u)}r.strokeStyle="rgba(0, 0, 0, 1.0)",r.lineWidth=10;for(let x=0;x<l;x++){const v=x%a,E=Math.floor(x/a),A=v*c,w=E*u;r.strokeRect(A,w,c,u)}Ur(r,i,s);const f=new Er(n);if(f.needsUpdate=!0,f.wrapS=Gt,f.wrapT=Gt,f.repeat.set(2,2),s==="Earth"){const x=new ji({map:f,shininess:5,specular:2236962,transparent:!1,opacity:1});x.userData=e.material.userData,e.material=x}else e.material.userData.originalTexture instanceof bt?console.log(`Cannot apply mosaic to shader material for ${s}`):(e.material.map=f,e.material.shininess=5,e.material.specular=new ge(2236962),e.material.transparent=!1,e.material.opacity=1,e.material.needsUpdate=!0)}},p.onerror=()=>{if(d++,d===h){if(m.length>0)for(let x=0;x<l;x++){const v=x%a,E=Math.floor(x/a),A=v*c,w=E*u,U=x%m.length,H=m[U];r.globalAlpha=1,r.drawImage(H,A,w,c,u)}r.strokeStyle="rgba(0, 0, 0, 1.0)",r.lineWidth=10;for(let x=0;x<l;x++){const v=x%a,E=Math.floor(x/a),A=v*c,w=E*u;r.strokeRect(A,w,c,u)}Ur(r,i,s);const f=new Er(n);if(f.needsUpdate=!0,f.wrapS=Gt,f.wrapT=Gt,f.repeat.set(2,2),s==="Earth"){const x=new ji({map:f,shininess:5,specular:2236962,transparent:!1,opacity:1});x.userData=e.material.userData,e.material=x}else e.material.userData.originalTexture instanceof bt||(e.material.map=f,e.material.shininess=5,e.material.specular=new ge(2236962),e.material.transparent=!1,e.material.opacity=1,e.material.needsUpdate=!0)}},p.src=g})}function u0(s,e){const t=s.material.userData;if(!(!t||!t.originalTexture)){if(t.planetName==="Earth"&&t.originalTexture instanceof bt){s.material=e.originalMaterial;return}t.originalTexture instanceof bt||(s.material.map=Kt.load(t.originalTexture),t.originalBump&&(s.material.bumpMap=Kt.load(t.originalBump)),s.material.needsUpdate=!0)}}function d0(){[hn,Lt,lt,Vt,Pt,rn,_n,vn,yn].forEach(e=>{c0(e.name,e.planet)})}function h0(){[hn,Lt,lt,Vt,Pt,rn,_n,vn,yn].forEach(e=>{u0(e.planet,e)})}function f0(s,e,t,n){new V_().load(s,function(r){const a=r.scene;a.position.set(e,0,0),a.scale.set(t,t,t),ti.add(a),n&&n(a)},void 0,function(r){console.error("An error happened",r)})}const m0=new ft({uniforms:{dayTexture:{type:"t",value:Kt.load(Cv)},nightTexture:{type:"t",value:Kt.load(Pv)},sunPosition:{type:"v3",value:uo.position}},vertexShader:`
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vSunDirection;

    uniform vec3 sunPosition;

    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
      vSunDirection = normalize(sunPosition - worldPosition.xyz);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;

    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vSunDirection;

    void main() {
      float intensity = max(dot(vNormal, vSunDirection), 0.0);
      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv)* 0.2;
      gl_FragColor = mix(nightColor, dayColor, intensity);
    }
  `}),p0=[{size:1.6,texture:Iv,bump:Dv,orbitSpeed:.001*dt,orbitRadius:10}],Ha=[{modelPath:"/images/mars/phobos.glb",scale:.1,orbitRadius:5,orbitSpeed:.002*dt,position:100,mesh:null},{modelPath:"/images/mars/deimos.glb",scale:.1,orbitRadius:9,orbitSpeed:5e-4*dt,position:120,mesh:null}],g0=[{size:1.6,texture:Bv,orbitRadius:20,orbitSpeed:5e-4*dt},{size:1.4,texture:kv,orbitRadius:24,orbitSpeed:25e-5*dt},{size:2,texture:Hv,orbitRadius:28,orbitSpeed:125e-6*dt},{size:1.7,texture:zv,orbitRadius:32,orbitSpeed:6e-5*dt}],hn=new Bn("Mercury",2.4,40,0,wv,Av),Lt=new Bn("Venus",6.1,65,3,gc,gc,null,Rv),lt=new Bn("Earth",6.4,90,23,m0,null,null,Lv,p0),Vt=new Bn("Mars",3.4,115,25,Nv,Ov);Ha.forEach(s=>{f0(s.modelPath,s.position,s.scale,function(e){s.mesh=e,Vt.planetSystem.add(s.mesh),s.mesh.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})})});const Pt=new Bn("Jupiter",69/4,200,3,Fv,null,null,null,g0),rn=new Bn("Saturn",58/4,270,26,Gv,null,{innerRadius:18,outerRadius:29,texture:Vv}),_n=new Bn("Uranus",25/4,320,82,Wv,null,{innerRadius:6,outerRadius:8,texture:jv}),vn=new Bn("Neptune",24/4,340,28,Xv),yn=new Bn("Pluto",1,350,57,qv),fu=[hn.planet,Lt.planet,Lt.Atmosphere,lt.planet,lt.Atmosphere,Vt.planet,Pt.planet,rn.planet,_n.planet,vn.planet,yn.planet];it.shadowMap.enabled=!0;cs.castShadow=!0;cs.shadow.mapSize.width=1024;cs.shadow.mapSize.height=1024;cs.shadow.camera.near=10;cs.shadow.camera.far=20;lt.planet.castShadow=!0;lt.planet.receiveShadow=!0;lt.Atmosphere.castShadow=!0;lt.Atmosphere.receiveShadow=!0;lt.moons.forEach(s=>{s.mesh.castShadow=!0,s.mesh.receiveShadow=!0});hn.planet.castShadow=!0;hn.planet.receiveShadow=!0;Lt.planet.castShadow=!0;Lt.planet.receiveShadow=!0;Lt.Atmosphere.receiveShadow=!0;Vt.planet.castShadow=!0;Vt.planet.receiveShadow=!0;Pt.planet.castShadow=!0;Pt.planet.receiveShadow=!0;Pt.moons.forEach(s=>{s.mesh.castShadow=!0,s.mesh.receiveShadow=!0});rn.planet.castShadow=!0;rn.planet.receiveShadow=!0;rn.Ring.receiveShadow=!0;_n.planet.receiveShadow=!0;vn.planet.receiveShadow=!0;yn.planet.receiveShadow=!0;function mu(){uo.rotateY(.001*$t),hn.planet.rotateY(.001*$t),hn.planet3d.rotateY(.004*dt),Lt.planet.rotateY(5e-4*$t),Lt.Atmosphere.rotateY(5e-4*$t),Lt.planet3d.rotateY(6e-4*dt),lt.planet.rotateY(.005*$t),lt.Atmosphere.rotateY(.001*$t),lt.planet3d.rotateY(.001*dt),Vt.planet.rotateY(.01*$t),Vt.planet3d.rotateY(7e-4*dt),Pt.planet.rotateY(.005*$t),Pt.planet3d.rotateY(3e-4*dt),rn.planet.rotateY(.01*$t),rn.planet3d.rotateY(2e-4*dt),_n.planet.rotateY(.005*$t),_n.planet3d.rotateY(1e-4*dt),vn.planet.rotateY(.005*$t),vn.planet3d.rotateY(8e-5*dt),yn.planet.rotateY(.001*$t),yn.planet3d.rotateY(6e-5*dt),lt.moons&&lt.moons.forEach(e=>{const t=performance.now(),n=5*Math.PI/180,i=lt.planet.position.x+e.orbitRadius*Math.cos(t*e.orbitSpeed),r=e.orbitRadius*Math.sin(t*e.orbitSpeed)*Math.sin(n),a=lt.planet.position.z+e.orbitRadius*Math.sin(t*e.orbitSpeed)*Math.cos(n);e.mesh.position.set(i,r,a),e.mesh.rotateY(.01)}),Ha&&Ha.forEach(e=>{if(e.mesh){const t=performance.now(),n=Vt.planet.position.x+e.orbitRadius*Math.cos(t*e.orbitSpeed),i=e.orbitRadius*Math.sin(t*e.orbitSpeed),r=Vt.planet.position.z+e.orbitRadius*Math.sin(t*e.orbitSpeed);e.mesh.position.set(n,i,r),e.mesh.rotateY(.001)}}),Pt.moons&&Pt.moons.forEach(e=>{const t=performance.now(),n=Pt.planet.position.x+e.orbitRadius*Math.cos(t*e.orbitSpeed),i=e.orbitRadius*Math.sin(t*e.orbitSpeed),r=Pt.planet.position.z+e.orbitRadius*Math.sin(t*e.orbitSpeed);e.mesh.position.set(n,i,r),e.mesh.rotateY(.01)}),br.setFromCamera(qi,nt);var s=br.intersectObjects(fu);if(In.selectedObjects=[],s.length>0&&!Ps){const e=s[0].object;e===lt.Atmosphere?In.selectedObjects=[lt.planet]:e===Lt.Atmosphere?In.selectedObjects=[Lt.planet]:In.selectedObjects=[e]}if(Ba){nt.position.lerp(hr,.08),Ht.target.lerp(fr,.08);const t=nt.position.distanceTo(hr),n=Ht.target.distanceTo(fr);t<.1&&n<.1&&(Ba=!1,nt.position.copy(hr),Ht.target.copy(fr))}else ka&&(nt.position.lerp(mr,.08),Ht.target.lerp(new C(0,0,0),.08),nt.position.distanceTo(mr)<.5&&Ht.target.distanceTo(new C(0,0,0))<.5&&(ka=!1,nt.position.copy(mr),Ht.target.set(0,0,0)));Ht.update(),requestAnimationFrame(mu),Nn.render()}let pu=!1;const za=new Map;function _0(){const s=[{name:"Mercury",obj:hn},{name:"Venus",obj:Lt},{name:"Earth",obj:lt},{name:"Mars",obj:Vt},{name:"Jupiter",obj:Pt},{name:"Saturn",obj:rn},{name:"Uranus",obj:_n},{name:"Neptune",obj:vn},{name:"Pluto",obj:yn}];let e=0;const t=s.length;s.forEach(({name:n,obj:i})=>{const r=hu(n);if(r.length===0){e++,e===t&&pr();return}const a=document.createElement("canvas"),o=2048;a.width=o,a.height=o;const l=a.getContext("2d");l.fillStyle="#1a1a1a",l.fillRect(0,0,o,o);const c=Math.ceil(Math.sqrt(r.length)),u=Math.ceil(r.length/c),d=c*u,h=o/c,m=o/u;let g=0;const _=r.length,p=[];r.forEach((f,x)=>{const v=new Image;f.startsWith("http")||(v.crossOrigin=""),v.onload=()=>{if(p.push(v),g++,g===_){if(p.length>0){for(let A=0;A<d;A++){const w=A%c,U=Math.floor(A/c),H=w*h,M=U*m,b=A%p.length,z=p[b];l.globalAlpha=1,l.drawImage(z,H,M,h,m)}l.strokeStyle="rgba(0, 0, 0, 1.0)",l.lineWidth=10;for(let A=0;A<d;A++){const w=A%c,U=Math.floor(A/c),H=w*h,M=U*m;l.strokeRect(H,M,h,m)}Ur(l,o,n);const E=new Er(a);E.needsUpdate=!0,E.wrapS=Gt,E.wrapT=Gt,E.repeat.set(2,2),za.set(n,E)}e++,e===t&&pr()}},v.onerror=()=>{if(g++,g===_){if(p.length>0){for(let A=0;A<d;A++){const w=A%c,U=Math.floor(A/c),H=w*h,M=U*m,b=A%p.length,z=p[b];l.globalAlpha=1,l.drawImage(z,H,M,h,m)}l.strokeStyle="rgba(0, 0, 0, 1.0)",l.lineWidth=10;for(let A=0;A<d;A++){const w=A%c,U=Math.floor(A/c),H=w*h,M=U*m;l.strokeRect(H,M,h,m)}Ur(l,o,n);const E=new Er(a);E.needsUpdate=!0,E.wrapS=Gt,E.wrapT=Gt,E.repeat.set(2,2),za.set(n,E)}e++,e===t&&pr()}},v.src=f})})}function pr(){[hn,Lt,lt,Vt,Pt,rn,_n,vn,yn].forEach(e=>{const t=za.get(e.name);if(t)if(e.name==="Earth"){const n=new ji({map:t,shininess:5,specular:2236962,transparent:!1,opacity:1});n.userData=e.planet.material.userData,e.planet.material=n}else e.planet.material.userData.originalTexture instanceof bt||(e.planet.material.map=t,e.planet.material.shininess=5,e.planet.material.specular=new ge(2236962),e.planet.material.transparent=!1,e.planet.material.opacity=1,e.planet.material.needsUpdate=!0)}),pu=!0,Nn.render(),setTimeout(()=>{it.domElement.style.transition="opacity 0.5s ease",it.domElement.style.opacity="1";const e=document.getElementById("loading-screen");e&&(e.classList.add("fade-out"),setTimeout(()=>{e.style.display="none"},500))},300)}_0();mu();window.addEventListener("mousemove",Jv,!1);window.addEventListener("mousedown",Zv,!1);function Ir(s){const e=document.getElementById("planetDetails");if(!s){e.innerHTML='<div style="color: #999; font-style: italic;">Hover over an image to see details</div>';return}let t="<table>";s["Unnamed: 1"]&&(t+=`<tr><td>Name:</td><td>${s["Unnamed: 1"]}</td></tr>`),s["Unnamed: 2"]&&(t+=`<tr><td>Perception:</td><td>${s["Unnamed: 2"]}</td></tr>`),s["Unnamed: 3"]&&(t+=`<tr><td>Date:</td><td>${s["Unnamed: 3"]}</td></tr>`),s["Unnamed: 4"]&&(t+=`<tr><td>Who:</td><td>${s["Unnamed: 4"]}</td></tr>`),s["Unnamed: 5"]&&(t+=`<tr><td>Technique:</td><td>${s["Unnamed: 5"]}</td></tr>`),s["Unnamed: 6"]&&(t+=`<tr><td>Key Notes:</td><td>${s["Unnamed: 6"]}</td></tr>`),t+="</table>",e.innerHTML=t}function v0(s){const e=document.getElementById("timeline");e.innerHTML="";const t=[];let n=null;for(let l=0;l<is.length;l++){const c=is[l],u=c["In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)"];if(u&&u!=="null"&&(n=u),n&&n.toLowerCase()===s.toLowerCase()&&t.push(c),n&&n.toLowerCase()!==s.toLowerCase()&&t.length>0)break}const i=[];t.slice(1).forEach((l,c)=>{["Unnamed: 7","Unnamed: 8","Unnamed: 9","Unnamed: 10","Unnamed: 11"].forEach(d=>{const h=l[d];h&&h!==null&&h!=="null"&&!h.startsWith("http")&&i.push({entry:l,imageUrl:h})})});const r=e.offsetWidth,a=i.length,o=Math.max(40,Math.floor(r/a));i.forEach(({entry:l,imageUrl:c},u)=>{const d=document.createElement("div");d.className="timeline-item";const h=120,m=280,g=h+Math.random()*(m-h);d.style.height=g+"px",d.style.flexGrow="1",d.style.flexBasis=o+"px";const _=document.createElement("img");_.src=c,_.alt=l["Unnamed: 1"]||"Historical image",_.onerror=function(){this.parentElement.style.display="none"},d.appendChild(_),d.addEventListener("mouseenter",()=>{Ir(l),y0(l,c,d)}),d.addEventListener("mouseleave",gu),d.addEventListener("click",()=>{_u(i,u)}),e.appendChild(d)})}let Ct=null,Cn=null,hi=null;function y0(s,e,t){if(Ir(s),Cn&&(clearTimeout(Cn),Cn=null),Ct&&Ct.previousSibling===t)return;Ct&&Ct.parentNode&&(Ct.parentNode.removeChild(Ct),Ct=null),hi&&(hi.style.display="",hi=null),t.style.display="none",hi=t,document.getElementById("timeline");const n=document.createElement("div");n.className="timeline-image-preview active",n.id="activePreview";const i=document.createElement("img");i.src=e,i.alt=s["Unnamed: 1"]||"Preview";const r=document.createElement("div");r.className="preview-info";let a="";r.innerHTML=a,n.appendChild(i),n.appendChild(r),t.parentNode.insertBefore(n,t.nextSibling),Ct=n,n.addEventListener("mouseenter",()=>{Cn&&(clearTimeout(Cn),Cn=null)}),n.addEventListener("mouseleave",()=>{gu()}),n.addEventListener("click",()=>{const o=document.getElementById("timeline"),c=Array.from(o.querySelectorAll(".timeline-item")).indexOf(t),u=document.getElementById("planetName").innerText,d=[];let h=null;for(let g=0;g<is.length;g++){const _=is[g],p=_["In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)"];if(p&&p!=="null"&&(h=p),h&&h.toLowerCase()===u.toLowerCase()&&d.push(_),h&&h.toLowerCase()!==u.toLowerCase()&&d.length>0)break}const m=[];d.slice(1).forEach(g=>{["Unnamed: 7","Unnamed: 8","Unnamed: 9","Unnamed: 10","Unnamed: 11"].forEach(p=>{const f=g[p];f&&f!==null&&f!=="null"&&!f.startsWith("http")&&m.push({entry:g,imageUrl:f})})}),_u(m,c>=0?c:0)})}function gu(){Cn&&clearTimeout(Cn),Cn=setTimeout(()=>{Ir(null),Ct&&Ct.parentNode&&(Ct.classList.remove("active"),setTimeout(()=>{Ct&&Ct.parentNode&&Ct.parentNode.removeChild(Ct),Ct=null,hi&&(hi.style.display="",hi=null)},300))},100)}window.addEventListener("resize",function(){Ps?(it.domElement.style.height="50%",it.setSize(window.innerWidth,window.innerHeight/2),Nn.setSize(window.innerWidth,window.innerHeight/2),nt.aspect=window.innerWidth/(window.innerHeight/2)):(it.domElement.style.height="100%",it.setSize(window.innerWidth,window.innerHeight),Nn.setSize(window.innerWidth,window.innerHeight),nt.aspect=window.innerWidth/window.innerHeight),nt.updateProjectionMatrix()});let ws=[],qn=0;function _u(s,e){ws=s,qn=e,document.getElementById("imageCarousel").classList.add("active"),xu(qn),document.body.style.overflow="hidden";const n=document.querySelector(".carousel-content");n&&!n.hasAttribute("data-click-listener")&&(n.setAttribute("data-click-listener","true"),n.addEventListener("click",vu))}function vu(s){const t=s.currentTarget.getBoundingClientRect(),n=s.clientX-t.left,i=t.width;n<i*.33333?As(-1):n>=i*.33333&&As(1)}function yu(){document.getElementById("imageCarousel").classList.remove("active"),document.body.style.overflow="";const e=document.querySelector(".carousel-content");e&&(e.removeEventListener("click",vu),e.removeAttribute("data-click-listener"))}function As(s){qn+=s,qn<0?qn=ws.length-1:qn>=ws.length&&(qn=0),xu(qn)}function xu(s){const{entry:e,imageUrl:t}=ws[s],n=document.getElementById("carouselImage");n.src=t;const i=document.getElementById("carouselInfo");let r="<table>";e["Unnamed: 1"]&&(r+=`<tr><td>Name:</td><td>${e["Unnamed: 1"]}</td></tr>`),e["Unnamed: 2"]&&(r+=`<tr><td>Perception:</td><td>${e["Unnamed: 2"]}</td></tr>`),e["Unnamed: 3"]&&(r+=`<tr><td>Date:</td><td>${e["Unnamed: 3"]}</td></tr>`),e["Unnamed: 4"]&&(r+=`<tr><td>Who:</td><td>${e["Unnamed: 4"]}</td></tr>`),e["Unnamed: 5"]&&(r+=`<tr><td>Technique:</td><td>${e["Unnamed: 5"]}</td></tr>`),e["Unnamed: 6"]&&(r+=`<tr><td>Key Notes:</td><td>${e["Unnamed: 6"]}</td></tr>`),r+="</table>",i.innerHTML=r;const a=document.querySelector(".carousel-content");a&&a.setAttribute("data-counter",`${s+1} / ${ws.length}`)}window.closeCarousel=yu;window.navigateCarousel=As;let _c=0,vc=0;document.addEventListener("mousemove",s=>{_c=s.clientX,vc=s.clientY;const e=document.getElementById("imageCarousel");if(e&&e.classList.contains("active")){const t=document.querySelector(".carousel-content");t&&(t.style.setProperty("--mouse-x",_c+"px"),t.style.setProperty("--mouse-y",vc+"px"))}});document.addEventListener("keydown",s=>{document.getElementById("imageCarousel").classList.contains("active")&&(s.key==="ArrowLeft"?As(-1):s.key==="ArrowRight"?As(1):s.key==="Escape"&&yu())});
//# sourceMappingURL=index-8241c32e.js.map
