const { useState, useEffect } = React;

const P = {
  av1:"https://i.pravatar.cc/200?img=11",av2:"https://i.pravatar.cc/200?img=33",
  av3:"https://i.pravatar.cc/200?img=32",av4:"https://i.pravatar.cc/200?img=53",
  av5:"https://i.pravatar.cc/200?img=23",
  c1:"https://i.pravatar.cc/200?img=12",c2:"https://i.pravatar.cc/200?img=26",
  c3:"https://i.pravatar.cc/200?img=44",c4:"https://i.pravatar.cc/200?img=59",
  c5:"https://i.pravatar.cc/200?img=20",
  r1:"https://i.pravatar.cc/200?img=15",r2:"https://i.pravatar.cc/200?img=38",
  r3:"https://i.pravatar.cc/200?img=48",r4:"https://i.pravatar.cc/200?img=41",
  me:"https://i.pravatar.cc/200?img=68",
};
const TI={};for(let i=1;i<=20;i++)TI["t"+i]="https://picsum.photos/seed/ink"+i+"x/600/600";

const ARTISTS=[
  {id:1,name:"Mika Santoro",handle:"@mikasantoro",location:"Brooklyn, NY",rating:4.9,reviews:247,hourly:200,avatar:P.av1,hue:265,featured:true,
   bio:"Black & grey realism with a dark surrealist edge. 12 years in the game. Former apprentice at Sacred Tattoo NYC. Known for narrative sleeves that tell stories through shadow.",
   styles:["Black & Grey","Realism","Dotwork"],
   portfolio:[{id:1,title:"Memento Mori",style:"Black & Grey",likes:342,comments:28,desc:"Full sleeve skull with smoke and roses",img:TI.t1},{id:2,title:"Koi Ascension",style:"Japanese",likes:518,comments:45,desc:"Back piece with modern shading",img:TI.t2},{id:3,title:"Sacred Geometry",style:"Geometric",likes:201,comments:12,desc:"Forearm mandala with impossible triangles",img:TI.t3},{id:4,title:"Portrait Study",style:"Realism",likes:876,comments:67,desc:"Hyperrealistic portrait with decay",img:TI.t4},{id:5,title:"Botanical Dark",style:"Black & Grey",likes:445,comments:31,desc:"Peony and serpent half-sleeve",img:TI.t5},{id:6,title:"Cosmic Skull",style:"Dotwork",likes:623,comments:52,desc:"Stippled skull with galaxy fill",img:TI.t6}],
   availability:["Mon","Tue","Thu","Fri","Sat"],nextOpen:"Apr 22",waitlist:14},
  {id:2,name:"Jae Kim",handle:"@jaekim.ink",location:"Los Angeles, CA",rating:4.8,reviews:183,hourly:250,avatar:P.av2,hue:38,featured:true,
   bio:"Neo-traditional meets Korean folk art. Color is my weapon. Walk-ins welcome Saturdays.",
   styles:["Neo-Traditional","Watercolor","Japanese"],
   portfolio:[{id:7,title:"Tiger Spirit",style:"Neo-Traditional",likes:721,comments:54,desc:"Korean tiger with chrysanthemum",img:TI.t7},{id:8,title:"Watercolor Crane",style:"Watercolor",likes:445,comments:33,desc:"Loose watercolor crane with splatter",img:TI.t8},{id:9,title:"Dragon Sleeve",style:"Japanese",likes:932,comments:78,desc:"Full traditional sleeve — 60+ hrs",img:TI.t9},{id:10,title:"Neon Panther",style:"Neo-Traditional",likes:567,comments:41,desc:"Panther head with neon palette",img:TI.t10}],
   availability:["Tue","Wed","Thu","Sat"],nextOpen:"Apr 19",waitlist:8},
  {id:3,name:"Rosa Delgado",handle:"@rosa.needles",location:"Austin, TX",rating:4.95,reviews:312,hourly:175,avatar:P.av3,hue:0,featured:true,
   bio:"Chicano heritage meets fine art. Portraits, lettering, religious iconography. 15 years experience.",
   styles:["Chicano","Realism","Black & Grey"],
   portfolio:[{id:11,title:"La Virgen",style:"Chicano",likes:1203,comments:94,desc:"Virgin Mary back piece with roses",img:TI.t11},{id:12,title:"Script Crown",style:"Chicano",likes:445,comments:22,desc:"Custom lettering with crown",img:TI.t12},{id:13,title:"Family Portrait",style:"Realism",likes:678,comments:51,desc:"Three-generation portrait",img:TI.t13},{id:14,title:"Rose Sleeve",style:"Black & Grey",likes:892,comments:63,desc:"Full grey-wash rose sleeve",img:TI.t14}],
   availability:["Mon","Wed","Fri"],nextOpen:"Apr 25",waitlist:22},
  {id:4,name:"Tomasz Wojcik",handle:"@tomasz.trash",location:"Chicago, IL",rating:4.7,reviews:98,hourly:225,avatar:P.av4,hue:160,featured:false,
   bio:"Trash polka and abstract expressionism on skin. Every piece is a conversation.",
   styles:["Trash Polka","Geometric","Minimalist"],
   portfolio:[{id:15,title:"Chaos Theory",style:"Trash Polka",likes:345,comments:29,desc:"Chest collage meets anatomy",img:TI.t15},{id:16,title:"Void",style:"Geometric",likes:234,comments:18,desc:"Negative space ribcage piece",img:TI.t16},{id:17,title:"Red Collage",style:"Trash Polka",likes:412,comments:35,desc:"Abstract red and black work",img:TI.t17}],
   availability:["Thu","Fri","Sat"],nextOpen:"Apr 20",waitlist:5},
  {id:5,name:"Priya Sharma",handle:"@priya.lines",location:"San Francisco, CA",rating:4.85,reviews:156,hourly:180,avatar:P.av5,hue:240,featured:false,
   bio:"Minimalist and fine-line specialist. Less is everything. Bookings open first of each month.",
   styles:["Minimalist","Dotwork","Geometric"],
   portfolio:[{id:18,title:"Single Line Face",style:"Minimalist",likes:892,comments:63,desc:"Continuous line portrait",img:TI.t18},{id:19,title:"Micro Botanical",style:"Minimalist",likes:567,comments:44,desc:"Tiny wildflower behind ear",img:TI.t19},{id:20,title:"Constellation",style:"Dotwork",likes:334,comments:21,desc:"Custom star chart with dots",img:TI.t20}],
   availability:["Mon","Tue","Wed","Sat"],nextOpen:"May 1",waitlist:31},
];

const POSTS=[
  {id:1,user:"alexthunder",av:P.c1,text:"Just finished my sleeve with @mikasantoro — 6 sessions, 3 months. The detail is insane.",img:TI.t1,likes:89,replies:12,time:"2h ago",aId:1},
  {id:2,user:"inkdreamer22",av:P.c2,text:"Anyone got recs for neo-trad artists in LA? Bold color work.",img:null,likes:34,replies:23,time:"4h ago",aId:null},
  {id:3,user:"tattoo_virgin",av:P.c3,text:"First tattoo next week with @rosa.needles. Tips for first-timers?",img:null,likes:156,replies:47,time:"6h ago",aId:3},
  {id:4,user:"blackworkonly",av:P.c4,text:"Tomasz Chaos Theory is best trash polka this year. The texture is unreal.",img:TI.t15,likes:67,replies:8,time:"9h ago",aId:4},
  {id:5,user:"healingcheck",av:P.c5,text:"Week 3 healing on my Priya piece. Fine lines holding up perfectly.",img:TI.t18,likes:201,replies:31,time:"12h ago",aId:5},
];

const STY=["All","Black & Grey","Neo-Traditional","Japanese","Realism","Geometric","Trash Polka","Watercolor","Minimalist","Chicano","Dotwork"];
const PL=[{n:"Pay in Full",d:"Single payment",b:null,s:1},{n:"Split in 2",d:"50/50",b:null,s:2},{n:"4 Payments",d:"Every 2 weeks",b:"Popular",s:4},{n:"Monthly x6",d:"Large pieces",b:"Large",s:6}];
const TMS=["10:00 AM","11:30 AM","1:00 PM","2:30 PM","4:00 PM"];

const V={bg:"#0A0A0A",sf:"#111",cd:"#161616",bd:"#252525",tx:"#E8E4DF",md:"#8A857F",dm:"#4A4744",ac:"#CCFF00",acD:"rgba(204,255,0,0.07)",acB:"rgba(204,255,0,0.2)",wm:"#FF6B35",wmD:"rgba(255,107,53,0.1)",rd:"#FF4040",h:"'Bebas Neue',Impact,sans-serif",b:"'DM Sans',system-ui,sans-serif",m:"'DM Mono','SF Mono',monospace"};

function useW(){const[w,setW]=useState(window.innerWidth);useEffect(()=>{const h=()=>setW(window.innerWidth);window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h)},[]);return w}

function Pic({src,h=160,style={},rounded}){
  const[e,setE]=useState(false);
  const bg="linear-gradient(135deg,hsl("+(src||"").length*7%360+",20%,14%),hsl("+(src||"").length*13%360+",25%,20%))";
  return React.createElement("div",{style:{height:h,width:"100%",overflow:"hidden",background:bg,position:"relative",borderRadius:rounded||0,...style}},
    !e&&src&&React.createElement("img",{src:src,alt:"",referrerPolicy:"no-referrer",onError:()=>setE(true),style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}))
}

function Face({src,size=36,name="",hue=200}){
  const[e,setE]=useState(false);const ini=name.split(" ").map(n=>n[0]).join("").slice(0,2);
  return React.createElement("div",{style:{width:size,height:size,borderRadius:"50%",overflow:"hidden",flexShrink:0,background:"hsl("+hue+",50%,35%)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid "+V.bd}},
    !e&&src?React.createElement("img",{src:src,alt:"",referrerPolicy:"no-referrer",onError:()=>setE(true),style:{width:"100%",height:"100%",objectFit:"cover"}}):
    React.createElement("span",{style:{color:"#fff",fontSize:size*0.35,fontWeight:700,fontFamily:V.b}},ini))
}

function Tg({children,active,onClick}){return React.createElement("button",{onClick:onClick,style:{background:active?V.ac:V.cd,color:active?V.bg:V.md,border:"1px solid "+(active?V.ac:V.bd),borderRadius:20,padding:"7px 16px",fontSize:12,fontWeight:600,fontFamily:V.b,cursor:"pointer",whiteSpace:"nowrap"}},children)}

function Toast({msg,onClose}){useEffect(()=>{const t=setTimeout(onClose,2500);return()=>clearTimeout(t)},[]);
  return React.createElement("div",{style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",background:V.ac,color:V.bg,padding:"12px 24px",borderRadius:12,fontSize:14,fontWeight:700,fontFamily:V.b,zIndex:300,boxShadow:"0 8px 32px rgba(204,255,0,0.3)"}},msg)}

// ─── NAV ──────────────────────────────────────────────
function Nav({pg,go,wide,sc}){
  const tabs=[{id:"discover",i:"\u{1F50D}",l:"Discover"},{id:"community",i:"\u{1F4AC}",l:"Community"},{id:"bookings",i:"\u{1F4C5}",l:"Bookings"},{id:"saved",i:"\u{1F90D}",l:"Saved"},{id:"profile",i:"\u{1F464}",l:"Profile"}];
  if(wide) return React.createElement("aside",{style:{position:"fixed",top:0,left:0,bottom:0,width:220,background:V.sf,borderRight:"1px solid "+V.bd,display:"flex",flexDirection:"column",padding:"20px 12px",zIndex:100}},
    React.createElement("div",{onClick:()=>go("discover"),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:10,padding:"0 8px",marginBottom:32}},
      React.createElement("div",{style:{width:32,height:32,background:V.ac,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",transform:"rotate(-3deg)"}},React.createElement("span",{style:{fontSize:14,fontWeight:900,color:V.bg,fontFamily:V.h}},"IB")),
      React.createElement("span",{style:{fontSize:22,fontFamily:V.h,color:V.tx,letterSpacing:3}},"INKBOOK")),
    tabs.map(t=>React.createElement("button",{key:t.id,onClick:()=>go(t.id),style:{display:"flex",alignItems:"center",gap:12,padding:"12px 12px",borderRadius:10,border:"none",background:pg===t.id?V.acD:"transparent",cursor:"pointer",marginBottom:4}},
      React.createElement("span",{style:{fontSize:18}},t.i),React.createElement("span",{style:{fontSize:13,fontWeight:600,fontFamily:V.b,color:pg===t.id?V.ac:V.md}},t.l),
      t.id==="saved"&&sc>0?React.createElement("span",{style:{marginLeft:"auto",background:V.wm,color:"#fff",fontSize:10,fontWeight:700,borderRadius:10,padding:"1px 7px",fontFamily:V.b}},sc):null)),
    React.createElement("div",{style:{marginTop:"auto",padding:12,borderTop:"1px solid "+V.bd}},
      React.createElement("div",{onClick:()=>go("profile"),style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}},
        React.createElement(Face,{src:P.me,size:32,name:"Alex James",hue:200}),
        React.createElement("div",null,React.createElement("div",{style:{fontSize:13,fontWeight:600,color:V.tx,fontFamily:V.b}},"Alex James"),React.createElement("div",{style:{fontSize:11,color:V.dm,fontFamily:V.b}},"Orange County")))));
  return React.createElement(React.Fragment,null,
    React.createElement("header",{style:{position:"sticky",top:0,zIndex:100,background:"rgba(10,10,10,0.92)",backdropFilter:"blur(20px)",borderBottom:"1px solid "+V.bd,padding:"0 16px",display:"flex",alignItems:"center",height:52}},
      React.createElement("div",{onClick:()=>go("discover"),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:8}},
        React.createElement("div",{style:{width:26,height:26,background:V.ac,borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",transform:"rotate(-3deg)"}},React.createElement("span",{style:{fontSize:12,fontWeight:900,color:V.bg,fontFamily:V.h}},"IB")),
        React.createElement("span",{style:{fontSize:18,fontFamily:V.h,color:V.tx,letterSpacing:3}},"INKBOOK")),
      React.createElement("div",{style:{marginLeft:"auto"}},React.createElement("span",{style:{fontSize:18}},"\u{1F514}"))),
    React.createElement("nav",{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:100,background:"rgba(10,10,10,0.95)",backdropFilter:"blur(20px)",borderTop:"1px solid "+V.bd,display:"flex",padding:"6px 0 max(env(safe-area-inset-bottom),8px)"}},
      tabs.map(t=>React.createElement("button",{key:t.id,onClick:()=>go(t.id),style:{flex:1,background:"none",border:"none",display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"6px 0",cursor:"pointer",position:"relative"}},
        React.createElement("span",{style:{fontSize:18}},t.i),React.createElement("span",{style:{fontSize:9,fontWeight:600,fontFamily:V.b,color:pg===t.id?V.ac:V.dm}},t.l),
        t.id==="saved"&&sc>0?React.createElement("div",{style:{position:"absolute",top:2,right:"25%",width:8,height:8,borderRadius:"50%",background:V.wm}}):null))))
}

// ─── DISCOVER ─────────────────────────────────────────
function Discover({onPick,wide,saved,onSave,toast}){
  const[f,setF]=useState("All");const[q,setQ]=useState("");const[sort,setSort]=useState("featured");
  let list=ARTISTS;
  if(f!=="All")list=list.filter(a=>a.styles.includes(f));
  if(q)list=list.filter(a=>a.name.toLowerCase().includes(q.toLowerCase())||a.styles.some(s=>s.toLowerCase().includes(q.toLowerCase()))||a.location.toLowerCase().includes(q.toLowerCase()));
  if(sort==="rating")list=[...list].sort((a,b)=>b.rating-a.rating);
  if(sort==="price-low")list=[...list].sort((a,b)=>a.hourly-b.hourly);
  if(sort==="price-high")list=[...list].sort((a,b)=>b.hourly-a.hourly);
  if(sort==="featured")list=[...list].sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
  return React.createElement("div",{style:{padding:wide?"32px 40px 40px":"16px 16px 100px"}},
    React.createElement("div",{style:{display:"flex",alignItems:wide?"flex-end":"flex-start",justifyContent:"space-between",flexDirection:wide?"row":"column",gap:8,marginBottom:wide?24:12}},
      React.createElement("div",null,
        React.createElement("h1",{style:{fontSize:wide?56:42,fontFamily:V.h,color:V.tx,letterSpacing:3,margin:0,lineHeight:1}},"FIND YOUR ",React.createElement("span",{style:{color:V.ac}},"ARTIST")),
        React.createElement("p",{style:{fontSize:wide?16:14,color:V.md,fontFamily:V.b,margin:"6px 0 0"}},"Browse portfolios. Book sessions. Pay your way.")),
      wide&&React.createElement("select",{value:sort,onChange:e=>setSort(e.target.value),style:{background:V.cd,border:"1px solid "+V.bd,borderRadius:8,padding:"8px 12px",color:V.tx,fontSize:13,fontFamily:V.b,cursor:"pointer"}},
        React.createElement("option",{value:"featured"},"Featured"),React.createElement("option",{value:"rating"},"Highest Rated"),React.createElement("option",{value:"price-low"},"Price: Low-High"),React.createElement("option",{value:"price-high"},"Price: High-Low"))),
    React.createElement("div",{style:{position:"relative",marginBottom:12}},
      React.createElement("input",{value:q,onChange:e=>setQ(e.target.value),placeholder:"Search artists, styles, locations...",style:{width:"100%",background:V.cd,border:"1px solid "+V.bd,borderRadius:12,padding:"12px 16px 12px 42px",fontSize:14,fontFamily:V.b,color:V.tx,outline:"none",boxSizing:"border-box"}}),
      React.createElement("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:16}},"\u{1F50D}")),
    React.createElement("div",{style:{display:"flex",gap:6,overflowX:"auto",paddingBottom:14,scrollbarWidth:"none"}},STY.map(s=>React.createElement(Tg,{key:s,active:f===s,onClick:()=>setF(s)},s))),
    list.length===0&&React.createElement("div",{style:{textAlign:"center",padding:"60px 0",color:V.dm,fontFamily:V.b,fontSize:15}},"No artists found. Try different filters."),
    React.createElement("div",{style:{display:"grid",gridTemplateColumns:wide?"repeat(auto-fill,minmax(340,1fr))":"1fr",gap:wide?20:14}},
      list.map(a=>{const sv=saved.includes(a.id);return React.createElement("div",{key:a.id,onClick:()=>onPick(a),style:{background:V.cd,borderRadius:14,overflow:"hidden",border:"1px solid "+V.bd,cursor:"pointer",transition:"all 0.2s",position:"relative"}},
        React.createElement("div",{style:{position:"absolute",top:10,right:10,zIndex:3}},React.createElement("button",{onClick:e=>{e.stopPropagation();onSave(a.id);toast(sv?"Removed":"Saved!")},style:{background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:36,height:36,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(8px)"}},sv?"\u2764\uFE0F":"\u{1F90D}")),
        a.featured&&React.createElement("div",{style:{position:"absolute",top:10,left:10,background:V.ac,color:V.bg,fontSize:9,fontWeight:800,padding:"2px 8px",borderRadius:4,fontFamily:V.b,zIndex:3,letterSpacing:1}},"FEATURED"),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:2,height:wide?160:120}},a.portfolio.slice(0,3).map(p=>React.createElement(Pic,{key:p.id,src:p.img,h:wide?160:120}))),
        React.createElement("div",{style:{padding:wide?"16px 18px":"12px 14px"}},
          React.createElement("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8}},
            React.createElement(Face,{src:a.avatar,size:wide?44:38,name:a.name,hue:a.hue}),
            React.createElement("div",{style:{flex:1}},React.createElement("span",{style:{fontSize:wide?17:15,fontWeight:700,color:V.tx,fontFamily:V.b}},a.name),React.createElement("div",{style:{fontSize:12,color:V.md,fontFamily:V.b}},a.location)),
            React.createElement("div",{style:{fontSize:wide?17:15,fontWeight:700,color:V.ac,fontFamily:V.m}},"$",a.hourly,React.createElement("span",{style:{fontSize:10,color:V.md}},"/hr"))),
          React.createElement("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:8}},a.styles.map(s=>React.createElement("span",{key:s,style:{background:V.sf,border:"1px solid "+V.bd,borderRadius:4,padding:"2px 8px",fontSize:10,color:V.md,fontFamily:V.b}},s))),
          React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:11,color:V.md,fontFamily:V.b}},
            React.createElement("span",null,"\u2B50 ",a.rating," (",a.reviews,")"),React.createElement("span",{style:{color:V.dm}},"\u00B7"),React.createElement("span",{style:{color:V.ac}},"Next: ",a.nextOpen),React.createElement("span",{style:{color:V.dm}},"\u00B7"),React.createElement("span",null,a.waitlist," waitlisted"))))})))
}

// ─── ARTIST PAGE ──────────────────────────────────────
function ArtistPage({a,onBack,wide,saved,onSave,toast}){
  const[tab,setTab]=useState("work");const[lb,setLb]=useState(null);const[sD,setSD]=useState(null);const[sT,setST]=useState(null);const[sP,setSP]=useState(2);const[booked,setBooked]=useState(false);const[liked,setLiked]=useState({});
  const sv=saved.includes(a.id);

  if(lb!==null){const p=a.portfolio[lb];const il=liked[p.id];
    return React.createElement("div",{onClick:()=>setLb(null),style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.95)",display:"flex",alignItems:"center",justifyContent:"center",padding:wide?40:16,cursor:"zoom-out",backdropFilter:"blur(4px)"}},
      React.createElement("div",{onClick:e=>e.stopPropagation(),style:{maxWidth:wide?800:480,width:"100%",display:wide?"flex":"block",gap:32,alignItems:"center",cursor:"default"}},
        React.createElement(Pic,{src:p.img,h:wide?480:300,style:{borderRadius:12,flex:wide?"1 1 50%":undefined,minWidth:wide?"50%":undefined}}),
        React.createElement("div",{style:{padding:wide?0:"20px 0 0",textAlign:wide?"left":"center"}},
          React.createElement("div",{style:{fontSize:wide?28:22,fontWeight:700,color:V.tx,fontFamily:V.b}},p.title),
          React.createElement("div",{style:{fontSize:14,color:V.ac,fontFamily:V.b,marginTop:4}},p.style),
          React.createElement("div",{style:{fontSize:14,color:V.md,fontFamily:V.b,marginTop:8,lineHeight:1.6}},p.desc),
          React.createElement("div",{style:{display:"flex",gap:12,marginTop:16,justifyContent:wide?"flex-start":"center"}},
            React.createElement("button",{onClick:()=>{setLiked(pr=>({...pr,[p.id]:!pr[p.id]}));toast(il?"Unliked":"Liked!")},style:{background:V.cd,border:"1px solid "+V.bd,borderRadius:10,padding:"10px 20px",cursor:"pointer",color:V.tx,fontSize:14,fontFamily:V.b}},il?"\u2764\uFE0F":"\u{1F90D}"," ",p.likes+(il?1:0)),
            React.createElement("button",{style:{background:V.cd,border:"1px solid "+V.bd,borderRadius:10,padding:"10px 20px",cursor:"pointer",color:V.tx,fontSize:14,fontFamily:V.b}},"\u{1F4AC} ",p.comments)),
          React.createElement("button",{onClick:()=>setLb(null),style:{marginTop:20,background:"none",border:"1px solid "+V.bd,borderRadius:8,padding:"8px 16px",color:V.md,fontSize:13,fontFamily:V.b,cursor:"pointer"}},"Close"))))}

  if(booked) return React.createElement("div",{style:{position:"fixed",inset:0,zIndex:250,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,backdropFilter:"blur(8px)"}},
    React.createElement("div",{style:{background:V.cd,borderRadius:20,padding:32,maxWidth:420,width:"100%",border:"1px solid "+V.bd,textAlign:"center"}},
      React.createElement("div",{style:{fontSize:48,marginBottom:12}},"\u2705"),
      React.createElement("h2",{style:{fontSize:28,fontFamily:V.h,color:V.tx,letterSpacing:2}},"BOOKING CONFIRMED"),
      React.createElement("p",{style:{fontSize:14,color:V.md,fontFamily:V.b,marginTop:8,lineHeight:1.6}},"Session with ",a.name," on April "+(sD+1)+", 2026 at "+TMS[sT]+"."),
      React.createElement("div",{style:{background:V.sf,borderRadius:12,padding:16,marginTop:20,textAlign:"left",border:"1px solid "+V.bd}},
        [{l:"Artist",v:a.name},{l:"Plan",v:PL[sP].n},{l:"Total",v:"$"+(a.hourly*3),c:V.ac}].map((r,i)=>React.createElement("div",{key:i,style:{display:"flex",justifyContent:"space-between",fontSize:13,color:V.md,fontFamily:V.b,marginBottom:i<2?6:0}},React.createElement("span",null,r.l),React.createElement("span",{style:{color:r.c||V.tx,fontWeight:600,fontFamily:r.c?V.m:V.b}},r.v)))),
      React.createElement("button",{onClick:()=>setBooked(false),style:{marginTop:20,width:"100%",background:V.ac,color:V.bg,border:"none",borderRadius:12,padding:"14px 0",fontSize:15,fontWeight:700,fontFamily:V.b,cursor:"pointer"}},"Done")));

  return React.createElement("div",{style:{paddingBottom:wide?40:100}},
    React.createElement("div",{style:{position:"relative",height:wide?280:220}},
      React.createElement(Pic,{src:a.portfolio[0].img,h:wide?280:220}),
      React.createElement("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(10,10,10,0.15),rgba(10,10,10,0.95))"}}),
      React.createElement("button",{onClick:onBack,style:{position:"absolute",top:wide?20:12,left:wide?20:12,background:"rgba(0,0,0,0.6)",border:"1px solid "+V.bd,borderRadius:8,padding:"8px 16px",color:V.tx,fontSize:13,fontFamily:V.b,cursor:"pointer",backdropFilter:"blur(10px)",zIndex:2}},"\u2190 Back"),
      React.createElement("div",{style:{position:"absolute",bottom:wide?24:16,left:wide?24:16,right:wide?24:16,zIndex:2,display:"flex",alignItems:"flex-end",gap:14}},
        React.createElement(Face,{src:a.avatar,size:wide?72:56,name:a.name,hue:a.hue}),
        React.createElement("div",{style:{flex:1}},
          React.createElement("h2",{style:{fontSize:wide?36:28,fontFamily:V.h,color:V.tx,margin:0,letterSpacing:2}},a.name.toUpperCase()),
          React.createElement("div",{style:{fontSize:13,color:V.md,fontFamily:V.b}},a.location," \u00B7 \u2B50 ",a.rating," \u00B7 ",React.createElement("span",{style:{color:V.ac,fontFamily:V.m}},"$"+a.hourly+"/hr"))))),
    React.createElement("div",{style:{padding:wide?"20px 32px":"14px 16px"}},
      React.createElement("p",{style:{fontSize:14,color:V.md,fontFamily:V.b,lineHeight:1.65,margin:"0 0 12px",maxWidth:600}},a.bio),
      React.createElement("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:14}},a.styles.map(s=>React.createElement("span",{key:s,style:{background:V.acD,border:"1px solid "+V.acB,borderRadius:5,padding:"3px 10px",fontSize:11,color:V.ac,fontFamily:V.b,fontWeight:600}},s))),
      React.createElement("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
        React.createElement("button",{onClick:()=>setTab("book"),style:{background:V.ac,color:V.bg,border:"none",borderRadius:10,padding:"12px 24px",fontSize:13,fontWeight:700,fontFamily:V.b,cursor:"pointer"}},"\u{1F4C5} Book Session"),
        React.createElement("button",{style:{background:V.cd,color:V.tx,border:"1px solid "+V.bd,borderRadius:10,padding:"12px 24px",fontSize:13,fontWeight:600,fontFamily:V.b,cursor:"pointer"}},"\u{1F4F9} FaceTime"),
        React.createElement("button",{style:{background:V.cd,color:V.tx,border:"1px solid "+V.bd,borderRadius:10,padding:"12px 24px",fontSize:13,fontWeight:600,fontFamily:V.b,cursor:"pointer"}},"\u{1F4AC} Message"),
        React.createElement("button",{onClick:()=>{onSave(a.id);toast(sv?"Removed":"Saved!")},style:{background:V.cd,color:sv?V.wm:V.tx,border:"1px solid "+V.bd,borderRadius:10,padding:"12px 24px",fontSize:13,fontWeight:600,fontFamily:V.b,cursor:"pointer"}},sv?"\u2764\uFE0F Saved":"\u{1F90D} Save"))),
    React.createElement("div",{style:{display:"flex",borderBottom:"1px solid "+V.bd,margin:wide?"0 32px":"0 16px",position:"sticky",top:wide?0:52,background:V.bg,zIndex:10,paddingTop:8}},
      ["work","reviews","book"].map(t=>React.createElement("button",{key:t,onClick:()=>setTab(t),style:{flex:wide?undefined:1,padding:"12px 24px",background:"none",border:"none",borderBottom:tab===t?"2px solid "+V.ac:"2px solid transparent",fontSize:13,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:tab===t?V.ac:V.dm,fontFamily:V.b,cursor:"pointer"}},t==="work"?"Portfolio":t==="reviews"?"Reviews":"Book Now"))),
    React.createElement("div",{style:{padding:wide?"16px 32px":"16px"}},
      tab==="work"&&React.createElement("div",{style:{display:"grid",gridTemplateColumns:wide?"repeat(3,1fr)":"1fr 1fr",gap:wide?12:8}},
        a.portfolio.map((p,i)=>React.createElement("div",{key:p.id,onClick:()=>setLb(i),style:{cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px solid "+V.bd,background:V.cd,transition:"all 0.2s"}},
          React.createElement(Pic,{src:p.img,h:wide?220:160}),
          React.createElement("div",{style:{padding:wide?"12px 14px":"8px 10px"}},
            React.createElement("div",{style:{fontSize:wide?15:13,fontWeight:700,color:V.tx,fontFamily:V.b}},p.title),
            React.createElement("div",{style:{fontSize:11,color:V.md,fontFamily:V.b,marginTop:2}},p.style),
            wide&&React.createElement("div",{style:{fontSize:12,color:V.dm,fontFamily:V.b,marginTop:4,lineHeight:1.5}},p.desc),
            React.createElement("div",{style:{display:"flex",gap:10,marginTop:8,fontSize:11,color:V.dm,fontFamily:V.b}},React.createElement("span",null,"\u2764\uFE0F ",p.likes),React.createElement("span",null,"\u{1F4AC} ",p.comments)))))),
      tab==="reviews"&&React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10,maxWidth:600}},
        [{u:"sammyinks",av:P.r1,r:5,t:"Incredible work. Took my vague idea and made something beyond imagination.",d:"2w"},{u:"firsttimer_k",av:P.r2,r:5,t:"First tattoo, couldn't have picked better. So patient and professional.",d:"1mo"},{u:"darksleeves",av:P.r3,r:4,t:"Great skill. Wait was long but worth it for the quality.",d:"2mo"},{u:"artcollector",av:P.r4,r:5,t:"Fourth piece. Consistency is incredible. Every one healed perfectly.",d:"3mo"}].map((r,i)=>React.createElement("div",{key:i,style:{background:V.cd,borderRadius:12,padding:wide?18:14,border:"1px solid "+V.bd}},
          React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},
            React.createElement(Face,{src:r.av,size:wide?32:28,name:r.u,hue:i*60}),
            React.createElement("span",{style:{fontSize:14,fontWeight:700,color:V.tx,fontFamily:V.b}},r.u),
            React.createElement("span",{style:{fontSize:12,color:V.ac,marginLeft:"auto"}},"\u2605".repeat(r.r),React.createElement("span",{style:{color:V.dm}},"\u2605".repeat(5-r.r))),
            React.createElement("span",{style:{fontSize:11,color:V.dm}},r.d)),
          React.createElement("p",{style:{fontSize:14,color:V.md,fontFamily:V.b,lineHeight:1.65,margin:0}},r.t)))),
      tab==="book"&&React.createElement("div",{style:{maxWidth:500}},
        React.createElement("h3",{style:{fontSize:22,fontFamily:V.h,color:V.tx,letterSpacing:2,margin:"0 0 12px"}},"PICK A DATE"),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:24}},
          ["S","M","T","W","T","F","S"].map((d,i)=>React.createElement("div",{key:i,style:{textAlign:"center",fontSize:11,color:V.dm,fontFamily:V.b,padding:"6px 0"}},d)),
          Array.from({length:28},(_,i)=>{const d=new Date(2026,3,1+i);const dn=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()];const ok=a.availability.includes(dn)&&i>=13;
            return React.createElement("button",{key:i,onClick:()=>ok&&setSD(i),style:{background:sD===i?V.ac:"transparent",color:sD===i?V.bg:ok?V.tx:V.dm,border:"none",borderRadius:8,padding:"11px 0",fontSize:14,fontWeight:sD===i?700:500,fontFamily:V.b,cursor:ok?"pointer":"default",opacity:ok?1:0.3}},i+1)})),
        sD!==null&&React.createElement(React.Fragment,null,
          React.createElement("h3",{style:{fontSize:22,fontFamily:V.h,color:V.tx,letterSpacing:2,margin:"0 0 10px"}},"PICK A TIME"),
          React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:24}},TMS.map((t,i)=>React.createElement("button",{key:i,onClick:()=>setST(i),style:{background:sT===i?V.ac:V.cd,color:sT===i?V.bg:V.tx,border:"1px solid "+(sT===i?V.ac:V.bd),borderRadius:10,padding:"12px 0",fontSize:14,fontWeight:600,fontFamily:V.m,cursor:"pointer"}},t)))),
        sT!==null&&React.createElement(React.Fragment,null,
          React.createElement("h3",{style:{fontSize:22,fontFamily:V.h,color:V.tx,letterSpacing:2,margin:"0 0 4px"}},"PAYMENT PLAN"),
          React.createElement("p",{style:{fontSize:13,color:V.md,fontFamily:V.b,margin:"0 0 10px"}},"Est. 3hrs = ",React.createElement("span",{style:{color:V.ac,fontFamily:V.m,fontWeight:700}},"$"+a.hourly*3)),
          React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:16}},PL.map((p,i)=>React.createElement("button",{key:i,onClick:()=>setSP(i),style:{background:sP===i?V.acD:V.cd,border:"1px solid "+(sP===i?V.ac:V.bd),borderRadius:12,padding:"14px 16px",textAlign:"left",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}},
            React.createElement("div",null,React.createElement("div",{style:{fontSize:15,fontWeight:700,color:sP===i?V.ac:V.tx,fontFamily:V.b}},p.n),React.createElement("div",{style:{fontSize:12,color:V.md,fontFamily:V.b}},p.d)),
            React.createElement("div",{style:{textAlign:"right"}},React.createElement("div",{style:{fontSize:18,fontWeight:700,color:sP===i?V.ac:V.tx,fontFamily:V.m}},"$"+Math.round(a.hourly*3/p.s)),p.s>1&&React.createElement("div",{style:{fontSize:11,color:V.md}},"x"+p.s),p.b&&React.createElement("span",{style:{fontSize:9,fontWeight:700,color:V.ac}},p.b))))),
          React.createElement("button",{onClick:()=>{setBooked(true);toast("Booking confirmed!")},style:{width:"100%",background:V.ac,color:V.bg,border:"none",borderRadius:12,padding:"16px 0",fontSize:16,fontWeight:700,fontFamily:V.b,cursor:"pointer"}},"CONFIRM \u2014 $"+a.hourly*3)))))
}

// ─── COMMUNITY ────────────────────────────────────────
function Community({onPick,wide}){
  const[lk,setLk]=useState({});
  return React.createElement("div",{style:{padding:wide?"32px 40px":"16px 16px 100px",maxWidth:wide?700:undefined}},
    React.createElement("h1",{style:{fontSize:wide?48:36,fontFamily:V.h,color:V.tx,letterSpacing:3,margin:"0 0 4px"}},"COMMUNITY"),
    React.createElement("p",{style:{fontSize:14,color:V.md,fontFamily:V.b,margin:"0 0 16px"}},"Fresh ink, healing updates, recs, and culture."),
    React.createElement("div",{style:{background:V.cd,borderRadius:12,padding:16,border:"1px solid "+V.bd,marginBottom:16}},
      React.createElement("div",{style:{background:V.sf,borderRadius:10,padding:"12px 14px",fontSize:14,color:V.dm,fontFamily:V.b,border:"1px solid "+V.bd}},"Share ink, ask for recs, post a healing update..."),
      React.createElement("div",{style:{display:"flex",gap:16,marginTop:10}},
        ["\u{1F4F7} Photo","\u{1F3F7}\uFE0F Tag Artist","\u{1F4CD} Location"].map(x=>React.createElement("span",{key:x,style:{fontSize:12,color:V.dm,fontFamily:V.b,cursor:"pointer"}},x)))),
    React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},POSTS.map((p,i)=>{
      const art=p.aId?ARTISTS.find(x=>x.id===p.aId):null;const il=lk[p.id];
      return React.createElement("div",{key:i,style:{background:V.cd,borderRadius:14,overflow:"hidden",border:"1px solid "+V.bd}},
        p.img&&React.createElement(Pic,{src:p.img,h:wide?280:200}),
        React.createElement("div",{style:{padding:wide?18:14}},
          React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},React.createElement(Face,{src:p.av,size:wide?34:30,name:p.user,hue:i*55}),React.createElement("span",{style:{fontSize:14,fontWeight:700,color:V.tx,fontFamily:V.b}},p.user),React.createElement("span",{style:{fontSize:12,color:V.dm,fontFamily:V.b,marginLeft:"auto"}},p.time)),
          React.createElement("p",{style:{fontSize:15,color:V.md,fontFamily:V.b,lineHeight:1.65,margin:"0 0 10px"}},p.text.split(/(@[\w.]+)/g).map((pt,j)=>pt.startsWith("@")?React.createElement("span",{key:j,style:{color:V.ac,fontWeight:600,cursor:"pointer"},onClick:()=>{if(art)onPick(art)}},pt):pt)),
          art&&React.createElement("div",{onClick:()=>onPick(art),style:{background:V.sf,borderRadius:10,padding:"8px 12px",display:"flex",alignItems:"center",gap:8,border:"1px solid "+V.bd,cursor:"pointer",marginBottom:10}},React.createElement(Face,{src:art.avatar,size:22,name:art.name,hue:art.hue}),React.createElement("span",{style:{fontSize:12,fontWeight:600,color:V.tx,fontFamily:V.b}},art.name),React.createElement("span",{style:{fontSize:11,color:V.ac,fontFamily:V.b,marginLeft:"auto"}},"View \u2192")),
          React.createElement("div",{style:{display:"flex",gap:20,fontSize:13,color:V.dm,fontFamily:V.b}},
            React.createElement("span",{onClick:()=>setLk(pr=>({...pr,[p.id]:!pr[p.id]})),style:{cursor:"pointer"}},il?"\u2764\uFE0F":"\u{1F90D}"," ",p.likes+(il?1:0)),React.createElement("span",{style:{cursor:"pointer"}},"\u{1F4AC} ",p.replies),React.createElement("span",{style:{cursor:"pointer"}},"\u2197\uFE0F Share"))))})))
}

// ─── BOOKINGS ─────────────────────────────────────────
function Bookings({wide}){
  const data=[{a:ARTISTS[0],dt:"Apr 22",tm:"2:30 PM",st:"confirmed",pc:"Botanical sleeve 3/5",tot:600,pl:"Split in 2"},{a:ARTISTS[4],dt:"May 1",tm:"10:00 AM",st:"pending",pc:"Constellation map",tot:360,pl:"4 Payments"},{a:ARTISTS[1],dt:"Mar 15",tm:"1:00 PM",st:"done",pc:"Neon panther forearm",tot:750,pl:"Paid"}];
  return React.createElement("div",{style:{padding:wide?"32px 40px":"16px 16px 100px",maxWidth:wide?700:undefined}},
    React.createElement("h1",{style:{fontSize:wide?48:36,fontFamily:V.h,color:V.tx,letterSpacing:3,margin:"0 0 4px"}},"MY BOOKINGS"),
    React.createElement("p",{style:{fontSize:14,color:V.md,fontFamily:V.b,margin:"0 0 16px"}},"Sessions, payments, history."),
    React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},data.map((b,i)=>React.createElement("div",{key:i,style:{background:V.cd,borderRadius:14,padding:wide?20:16,border:"1px solid "+V.bd,opacity:b.st==="done"?0.5:1}},
      React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12}},
        React.createElement(Face,{src:b.a.avatar,size:wide?48:40,name:b.a.name,hue:b.a.hue}),
        React.createElement("div",{style:{flex:1}},React.createElement("div",{style:{fontSize:wide?17:15,fontWeight:700,color:V.tx,fontFamily:V.b}},b.a.name),React.createElement("div",{style:{fontSize:13,color:V.md,fontFamily:V.b}},b.pc)),
        React.createElement("span",{style:{background:b.st==="confirmed"?V.acD:b.st==="pending"?V.wmD:V.sf,color:b.st==="confirmed"?V.ac:b.st==="pending"?V.wm:V.dm,padding:"4px 12px",borderRadius:6,fontSize:11,fontWeight:700,fontFamily:V.b,textTransform:"uppercase",letterSpacing:1}},b.st)),
      React.createElement("div",{style:{display:"flex",gap:wide?24:12,fontSize:13,color:V.md,fontFamily:V.b,flexWrap:"wrap",marginBottom:b.st!=="done"?14:0}},
        React.createElement("span",null,"\u{1F4C5} ",b.dt),React.createElement("span",null,"\u{1F551} ",b.tm),React.createElement("span",{style:{color:V.ac,fontFamily:V.m,fontWeight:700}},"$",b.tot),React.createElement("span",null,b.pl)),
      b.st!=="done"&&React.createElement("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},
        React.createElement("button",{style:{flex:wide?undefined:1,background:V.ac,color:V.bg,border:"none",borderRadius:8,padding:"10px 20px",fontSize:13,fontWeight:700,fontFamily:V.b,cursor:"pointer"}},"\u{1F4F9} FaceTime"),
        React.createElement("button",{style:{flex:wide?undefined:1,background:V.cd,color:V.tx,border:"1px solid "+V.bd,borderRadius:8,padding:"10px 20px",fontSize:13,fontWeight:600,fontFamily:V.b,cursor:"pointer"}},"\u{1F4AC} Message"),
        React.createElement("button",{style:{background:V.cd,color:V.rd,border:"1px solid "+V.bd,borderRadius:8,padding:"10px 20px",fontSize:13,fontWeight:600,fontFamily:V.b,cursor:"pointer",marginLeft:wide?"auto":0}},"Cancel"))))))
}

// ─── SAVED ────────────────────────────────────────────
function Saved({saved,onPick,onSave,wide,toast}){
  const list=ARTISTS.filter(a=>saved.includes(a.id));
  return React.createElement("div",{style:{padding:wide?"32px 40px":"16px 16px 100px"}},
    React.createElement("h1",{style:{fontSize:wide?48:36,fontFamily:V.h,color:V.tx,letterSpacing:3,margin:"0 0 4px"}},"SAVED ARTISTS"),
    React.createElement("p",{style:{fontSize:14,color:V.md,fontFamily:V.b,margin:"0 0 16px"}},list.length?list.length+" artists saved":"No saved artists yet. Tap \u{1F90D} on any artist."),
    list.length===0&&React.createElement("div",{style:{textAlign:"center",padding:"80px 0",color:V.dm,fontSize:48}},"\u{1F90D}"),
    React.createElement("div",{style:{display:"grid",gridTemplateColumns:wide?"repeat(auto-fill,minmax(340,1fr))":"1fr",gap:wide?16:12}},list.map(a=>React.createElement("div",{key:a.id,onClick:()=>onPick(a),style:{background:V.cd,borderRadius:14,border:"1px solid "+V.bd,cursor:"pointer",display:"flex",alignItems:"center",gap:16,padding:16}},
      React.createElement(Face,{src:a.avatar,size:56,name:a.name,hue:a.hue}),
      React.createElement("div",{style:{flex:1}},React.createElement("div",{style:{fontSize:16,fontWeight:700,color:V.tx,fontFamily:V.b}},a.name),React.createElement("div",{style:{fontSize:12,color:V.md,fontFamily:V.b}},a.location," \u00B7 $",a.hourly,"/hr"),React.createElement("div",{style:{fontSize:12,color:V.ac,fontFamily:V.b,marginTop:4}},"Next: ",a.nextOpen)),
      React.createElement("button",{onClick:e=>{e.stopPropagation();onSave(a.id);toast("Removed")},style:{background:V.cd,border:"1px solid "+V.bd,borderRadius:"50%",width:40,height:40,cursor:"pointer",fontSize:16}},"\u2764\uFE0F")))))
}

// ─── PROFILE ──────────────────────────────────────────
function MyProfile({wide}){
  return React.createElement("div",{style:{padding:wide?"32px 40px":"16px 16px 100px",maxWidth:500}},
    React.createElement("div",{style:{textAlign:"center",marginTop:16}},React.createElement(Face,{src:P.me,size:wide?96:80,name:"Alex James",hue:200})),
    React.createElement("h2",{style:{fontSize:wide?28:22,fontFamily:V.h,color:V.tx,letterSpacing:2,marginTop:12,textAlign:"center"}},"ALEX JAMES"),
    React.createElement("p",{style:{fontSize:14,color:V.md,fontFamily:V.b,margin:"2px 0 0",textAlign:"center"}},"Orange County, CA"),
    React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:20}},
      [["3","Tattoos"],["2","Artists"],["5","Reviews"]].map(([n,l],i)=>React.createElement("div",{key:i,style:{background:V.cd,borderRadius:12,padding:"16px 0",border:"1px solid "+V.bd,textAlign:"center"}},React.createElement("div",{style:{fontSize:24,fontWeight:700,color:V.ac,fontFamily:V.m}},n),React.createElement("div",{style:{fontSize:11,color:V.md,fontFamily:V.b,marginTop:2}},l)))),
    React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:20}},
      ["Saved Artists","Payment Methods","Healing Tracker","Notifications","Settings"].map((x,i)=>React.createElement("div",{key:i,style:{background:V.cd,borderRadius:10,padding:"14px 16px",border:"1px solid "+V.bd,display:"flex",justifyContent:"space-between",cursor:"pointer"}},React.createElement("span",{style:{fontSize:14,color:V.tx,fontFamily:V.b}},x),React.createElement("span",{style:{color:V.dm}},"\u203A")))))
}

// ─── APP ──────────────────────────────────────────────
function InkBook(){
  const w=useW();const wide=w>=768;
  const[pg,setPg]=useState("discover");const[art,setArt]=useState(null);const[saved,setSaved]=useState([]);const[toast,setToast]=useState(null);
  const go=p=>{setPg(p);setArt(null)};const pick=a=>{setArt(a);setPg("artist");window.scrollTo(0,0)};
  const toggleSave=id=>setSaved(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const showToast=m=>setToast(m);
  const navPg=art?"artist":pg;

  return React.createElement("div",{style:{minHeight:"100vh",background:V.bg,color:V.tx}},
    React.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap",rel:"stylesheet"}),
    React.createElement("style",null,"*{box-sizing:border-box;margin:0;padding:0}body{background:"+V.bg+"}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background:#333;border-radius:3px}::-webkit-scrollbar-track{background:transparent}input::placeholder{color:"+V.dm+"}select{-webkit-appearance:none}"),
    React.createElement("div",{style:{position:"fixed",inset:0,backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")',backgroundRepeat:"repeat",backgroundSize:512,pointerEvents:"none",zIndex:9999,mixBlendMode:"overlay"}}),
    React.createElement(Nav,{pg:navPg,go:go,wide:wide,sc:saved.length}),
    React.createElement("main",{style:wide?{marginLeft:220}:{}},
      art?React.createElement(ArtistPage,{a:art,onBack:()=>go("discover"),wide:wide,saved:saved,onSave:toggleSave,toast:showToast}):
      pg==="discover"?React.createElement(Discover,{onPick:pick,wide:wide,saved:saved,onSave:toggleSave,toast:showToast}):
      pg==="community"?React.createElement(Community,{onPick:pick,wide:wide}):
      pg==="bookings"?React.createElement(Bookings,{wide:wide}):
      pg==="saved"?React.createElement(Saved,{saved:saved,onPick:pick,onSave:toggleSave,wide:wide,toast:showToast}):
      React.createElement(MyProfile,{wide:wide})),
    toast&&React.createElement(Toast,{msg:toast,onClose:()=>setToast(null)}))
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(InkBook));
