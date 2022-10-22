/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.98
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./arrayRemoveDuplicates-fd3a3f4e","./Transforms-f305a473","./Matrix2-7dfd434a","./ComponentDatatype-9b23164a","./PolylineVolumeGeometryLibrary-eb735769","./CorridorGeometryLibrary-7967da4b","./defaultValue-50f7432c","./GeometryAttribute-4d82fade","./GeometryAttributes-8bab1b25","./GeometryOffsetAttribute-490bc2c9","./IndexDatatype-ceed713e","./PolygonPipeline-898e8861","./combine-8462e002","./RuntimeError-48e1f06d","./WebGLConstants-58abc51a","./EllipsoidTangentPlane-03ebf5f4","./AxisAlignedBoundingBox-a2ff9dfd","./IntersectionTests-4a7694f7","./Plane-3d30b188","./PolylinePipeline-92970340","./EllipsoidGeodesic-8f07d257","./EllipsoidRhumbLine-5454653c"],(function(e,t,i,r,o,n,s,a,l,d,u,p,f,c,h,y,g,b,m,A,_,E){"use strict";const C=new i.Cartesian3,G=new i.Cartesian3,T=new i.Cartesian3;function P(e,t){const d=[],p=e.positions,f=e.corners,c=e.endPositions,h=new l.GeometryAttributes;let y,g,b,m=0,A=0,_=0;for(g=0;g<p.length;g+=2)b=p[g].length-3,m+=b,_+=b/3*4,A+=p[g+1].length-3;for(m+=3,A+=3,g=0;g<f.length;g++){y=f[g];const e=f[g].leftPositions;s.defined(e)?(b=e.length,m+=b,_+=b/3*2):(b=f[g].rightPositions.length,A+=b,_+=b/3*2)}const E=s.defined(c);let P;E&&(P=c[0].length-3,m+=P,A+=P,P/=3,_+=4*P);const v=m+A,w=new Float64Array(v);let L,D,x,k,V,N,O=0,H=v-1;const I=P/2,S=u.IndexDatatype.createTypedArray(v/3,_+4);let B=0;if(S[B++]=O/3,S[B++]=(H-2)/3,E){d.push(O/3),N=C,V=G;const e=c[0];for(g=0;g<I;g++)N=i.Cartesian3.fromArray(e,3*(I-1-g),N),V=i.Cartesian3.fromArray(e,3*(I+g),V),n.CorridorGeometryLibrary.addAttribute(w,V,O),n.CorridorGeometryLibrary.addAttribute(w,N,void 0,H),D=O/3,k=D+1,L=(H-2)/3,x=L-1,S[B++]=L,S[B++]=x,S[B++]=D,S[B++]=k,O+=3,H-=3}let M=0,R=p[M++],U=p[M++];for(w.set(R,O),w.set(U,H-U.length+1),b=U.length-3,d.push(O/3,(H-2)/3),g=0;g<b;g+=3)D=O/3,k=D+1,L=(H-2)/3,x=L-1,S[B++]=L,S[B++]=x,S[B++]=D,S[B++]=k,O+=3,H-=3;for(g=0;g<f.length;g++){let e;y=f[g];const r=y.leftPositions,a=y.rightPositions;let l,u=T;if(s.defined(r)){for(H-=3,l=x,d.push(k),e=0;e<r.length/3;e++)u=i.Cartesian3.fromArray(r,3*e,u),S[B++]=l-e-1,S[B++]=l-e,n.CorridorGeometryLibrary.addAttribute(w,u,void 0,H),H-=3;d.push(l-Math.floor(r.length/6)),t===o.CornerType.BEVELED&&d.push((H-2)/3+1),O+=3}else{for(O+=3,l=k,d.push(x),e=0;e<a.length/3;e++)u=i.Cartesian3.fromArray(a,3*e,u),S[B++]=l+e,S[B++]=l+e+1,n.CorridorGeometryLibrary.addAttribute(w,u,O),O+=3;d.push(l+Math.floor(a.length/6)),t===o.CornerType.BEVELED&&d.push(O/3-1),H-=3}for(R=p[M++],U=p[M++],R.splice(0,3),U.splice(U.length-3,3),w.set(R,O),w.set(U,H-U.length+1),b=U.length-3,e=0;e<U.length;e+=3)k=O/3,D=k-1,x=(H-2)/3,L=x+1,S[B++]=L,S[B++]=x,S[B++]=D,S[B++]=k,O+=3,H-=3;O-=3,H+=3,d.push(O/3,(H-2)/3)}if(E){O+=3,H-=3,N=C,V=G;const e=c[1];for(g=0;g<I;g++)N=i.Cartesian3.fromArray(e,3*(P-g-1),N),V=i.Cartesian3.fromArray(e,3*g,V),n.CorridorGeometryLibrary.addAttribute(w,N,void 0,H),n.CorridorGeometryLibrary.addAttribute(w,V,O),k=O/3,D=k-1,x=(H-2)/3,L=x+1,S[B++]=L,S[B++]=x,S[B++]=D,S[B++]=k,O+=3,H-=3;d.push(O/3)}else d.push(O/3,(H-2)/3);return S[B++]=O/3,S[B++]=(H-2)/3,h.position=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:w}),{attributes:h,indices:S,wallIndices:d}}function v(e){const t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions,n=e.width,a=s.defaultValue(e.height,0),l=s.defaultValue(e.extrudedHeight,a);this._positions=t,this._ellipsoid=i.Ellipsoid.clone(s.defaultValue(e.ellipsoid,i.Ellipsoid.WGS84)),this._width=n,this._height=Math.max(a,l),this._extrudedHeight=Math.min(a,l),this._cornerType=s.defaultValue(e.cornerType,o.CornerType.ROUNDED),this._granularity=s.defaultValue(e.granularity,r.CesiumMath.RADIANS_PER_DEGREE),this._offsetAttribute=e.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+t.length*i.Cartesian3.packedLength+i.Ellipsoid.packedLength+6}v.pack=function(e,t,r){r=s.defaultValue(r,0);const o=e._positions,n=o.length;t[r++]=n;for(let e=0;e<n;++e,r+=i.Cartesian3.packedLength)i.Cartesian3.pack(o[e],t,r);return i.Ellipsoid.pack(e._ellipsoid,t,r),r+=i.Ellipsoid.packedLength,t[r++]=e._width,t[r++]=e._height,t[r++]=e._extrudedHeight,t[r++]=e._cornerType,t[r++]=e._granularity,t[r]=s.defaultValue(e._offsetAttribute,-1),t};const w=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE),L={positions:void 0,ellipsoid:w,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};return v.unpack=function(e,t,r){t=s.defaultValue(t,0);const o=e[t++],n=new Array(o);for(let r=0;r<o;++r,t+=i.Cartesian3.packedLength)n[r]=i.Cartesian3.unpack(e,t);const a=i.Ellipsoid.unpack(e,t,w);t+=i.Ellipsoid.packedLength;const l=e[t++],d=e[t++],u=e[t++],p=e[t++],f=e[t++],c=e[t];return s.defined(r)?(r._positions=n,r._ellipsoid=i.Ellipsoid.clone(a,r._ellipsoid),r._width=l,r._height=d,r._extrudedHeight=u,r._cornerType=p,r._granularity=f,r._offsetAttribute=-1===c?void 0:c,r):(L.positions=n,L.width=l,L.height=d,L.extrudedHeight=u,L.cornerType=p,L.granularity=f,L.offsetAttribute=-1===c?void 0:c,new v(L))},v.createGeometry=function(o){let l=o._positions;const f=o._width,c=o._ellipsoid;l=function(e,t){for(let i=0;i<e.length;i++)e[i]=t.scaleToGeodeticSurface(e[i],e[i]);return e}(l,c);const h=e.arrayRemoveDuplicates(l,i.Cartesian3.equalsEpsilon);if(h.length<2||f<=0)return;const y=o._height,g=o._extrudedHeight,b=!r.CesiumMath.equalsEpsilon(y,g,0,r.CesiumMath.EPSILON2),m={ellipsoid:c,positions:h,width:f,cornerType:o._cornerType,granularity:o._granularity,saveAttributes:!1};let A;if(b)m.height=y,m.extrudedHeight=g,m.offsetAttribute=o._offsetAttribute,A=function(e){const t=e.ellipsoid,i=P(n.CorridorGeometryLibrary.computePositions(e),e.cornerType),o=i.wallIndices,l=e.height,f=e.extrudedHeight,c=i.attributes,h=i.indices;let y=c.position.values,g=y.length,b=new Float64Array(g);b.set(y);const m=new Float64Array(2*g);if(y=p.PolygonPipeline.scaleToGeodeticHeight(y,l,t),b=p.PolygonPipeline.scaleToGeodeticHeight(b,f,t),m.set(y),m.set(b,g),c.position.values=m,g/=3,s.defined(e.offsetAttribute)){let t=new Uint8Array(2*g);if(e.offsetAttribute===d.GeometryOffsetAttribute.TOP)t=t.fill(1,0,g);else{const i=e.offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1;t=t.fill(i)}c.applyOffset=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}let A;const _=h.length,E=u.IndexDatatype.createTypedArray(m.length/3,2*(_+o.length));E.set(h);let C,G,T=_;for(A=0;A<_;A+=2){const e=h[A],t=h[A+1];E[T++]=e+g,E[T++]=t+g}for(A=0;A<o.length;A++)C=o[A],G=C+g,E[T++]=C,E[T++]=G;return{attributes:c,indices:E}}(m);else{if(A=P(n.CorridorGeometryLibrary.computePositions(m),m.cornerType),A.attributes.position.values=p.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,y,c),s.defined(o._offsetAttribute)){const e=A.attributes.position.values.length,t=o._offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(t);A.attributes.applyOffset=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}}const _=A.attributes,E=t.BoundingSphere.fromVertices(_.position.values,void 0,3);return new a.Geometry({attributes:_,indices:A.indices,primitiveType:a.PrimitiveType.LINES,boundingSphere:E,offsetAttribute:o._offsetAttribute})},function(e,t){return s.defined(t)&&(e=v.unpack(e,t)),e._ellipsoid=i.Ellipsoid.clone(e._ellipsoid),v.createGeometry(e)}}));
