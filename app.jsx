const { useState } = React;

/* ═══════════════════════════════════════════════════════
   INKBOOK — Tattoo Artist Platform (Mobile-First)
   Real photos via picsum.photos + error fallbacks.
   Grungy modern: dark base, neon chartreuse, grain.
   ═══════════════════════════════════════════════════════ */

// Photo URLs using picsum with specific image IDs for consistency
const P = {
  // Artist avatars — face-like photos
  av1: "https://i.pravatar.cc/200?img=11",
  av2: "https://i.pravatar.cc/200?img=33",
  av3: "https://i.pravatar.cc/200?img=32",
  av4: "https://i.pravatar.cc/200?img=53",
  av5: "https://i.pravatar.cc/200?img=23",
  // Community avatars
  c1: "https://i.pravatar.cc/200?img=12",
  c2: "https://i.pravatar.cc/200?img=26",
  c3: "https://i.pravatar.cc/200?img=44",
  c4: "https://i.pravatar.cc/200?img=59",
  c5: "https://i.pravatar.cc/200?img=20",
  // Review avatars
  r1: "https://i.pravatar.cc/200?img=15",
  r2: "https://i.pravatar.cc/200?img=38",
  r3: "https://i.pravatar.cc/200?img=48",
  r4: "https://i.pravatar.cc/200?img=41",
  // User
  me: "https://i.pravatar.cc/200?img=68",
  // Portfolio tattoo images
  t1: "https://picsum.photos/seed/skull1/600/600",
  t2: "https://picsum.photos/seed/koi22/600/600",
  t3: "https://picsum.photos/seed/geo33/600/600",
  t4: "https://picsum.photos/seed/port4/600/600",
  t5: "https://picsum.photos/seed/botan5/600/600",
  t6: "https://picsum.photos/seed/cosmic6/600/600",
  t7: "https://picsum.photos/seed/tiger7/600/600",
  t8: "https://picsum.photos/seed/crane8/600/600",
  t9: "https://picsum.photos/seed/dragon9/600/600",
  t10: "https://picsum.photos/seed/panth10/600/600",
  t11: "https://picsum.photos/seed/virgen11/600/600",
  t12: "https://picsum.photos/seed/script12/600/600",
  t13: "https://picsum.photos/seed/family13/600/600",
  t14: "https://picsum.photos/seed/rose14/600/600",
  t15: "https://picsum.photos/seed/chaos15/600/600",
  t16: "https://picsum.photos/seed/void16/600/600",
  t17: "https://picsum.photos/seed/redcol17/600/600",
  t18: "https://picsum.photos/seed/line18/600/600",
  t19: "https://picsum.photos/seed/micro19/600/600",
  t20: "https://picsum.photos/seed/star20/600/600",
};

const ARTISTS = [
  {
    id: 1, name: "Mika Santoro", handle: "@mikasantoro", location: "Brooklyn, NY",
    rating: 4.9, reviews: 247, hourly: 200, avatar: P.av1, hue: 265,
    bio: "Black & grey realism with a dark surrealist edge. 12 years in the game. Former apprentice at Sacred Tattoo NYC.",
    styles: ["Black & Grey", "Realism", "Dotwork"], featured: true,
    portfolio: [
      { id: 1, title: "Memento Mori", style: "Black & Grey", likes: 342, comments: 28, desc: "Full sleeve skull composition with smoke and roses", img: P.t1 },
      { id: 2, title: "Koi Ascension", style: "Japanese", likes: 518, comments: 45, desc: "Back piece with modern shading techniques", img: P.t2 },
      { id: 3, title: "Sacred Geometry", style: "Geometric", likes: 201, comments: 12, desc: "Forearm mandala with impossible triangles", img: P.t3 },
      { id: 4, title: "Portrait Study", style: "Realism", likes: 876, comments: 67, desc: "Hyperrealistic portrait with decay elements", img: P.t4 },
      { id: 5, title: "Botanical Dark", style: "Black & Grey", likes: 445, comments: 31, desc: "Peony and serpent half-sleeve", img: P.t5 },
      { id: 6, title: "Cosmic Skull", style: "Dotwork", likes: 623, comments: 52, desc: "Stippled skull with galaxy fill — 40hrs", img: P.t6 },
    ],
    availability: ["Mon", "Tue", "Thu", "Fri", "Sat"], nextOpen: "Apr 22", waitlist: 14,
  },
  {
    id: 2, name: "Jae Kim", handle: "@jaekim.ink", location: "Los Angeles, CA",
    rating: 4.8, reviews: 183, hourly: 250, avatar: P.av2, hue: 38,
    bio: "Neo-traditional meets Korean folk art. Color is my weapon. Walk-ins welcome Saturdays.",
    styles: ["Neo-Traditional", "Watercolor", "Japanese"], featured: true,
    portfolio: [
      { id: 7, title: "Tiger Spirit", style: "Neo-Traditional", likes: 721, comments: 54, desc: "Korean tiger with chrysanthemum border", img: P.t7 },
      { id: 8, title: "Watercolor Crane", style: "Watercolor", likes: 445, comments: 33, desc: "Loose watercolor crane with ink splatter", img: P.t8 },
      { id: 9, title: "Dragon Sleeve", style: "Japanese", likes: 932, comments: 78, desc: "Full traditional sleeve — 60+ hours", img: P.t9 },
      { id: 10, title: "Neon Panther", style: "Neo-Traditional", likes: 567, comments: 41, desc: "Panther head with neon color palette", img: P.t10 },
    ],
    availability: ["Tue", "Wed", "Thu", "Sat"], nextOpen: "Apr 19", waitlist: 8,
  },
  {
    id: 3, name: "Rosa Delgado", handle: "@rosa.needles", location: "Austin, TX",
    rating: 4.95, reviews: 312, hourly: 175, avatar: P.av3, hue: 0,
    bio: "Chicano heritage meets fine art. Portraits, lettering, and religious iconography. 15 years experience.",
    styles: ["Chicano", "Realism", "Black & Grey"], featured: true,
    portfolio: [
      { id: 11, title: "La Virgen", style: "Chicano", likes: 1203, comments: 94, desc: "Virgin Mary back piece with rose border", img: P.t11 },
      { id: 12, title: "Script Crown", style: "Chicano", likes: 445, comments: 22, desc: "Custom lettering with crown and scroll", img: P.t12 },
      { id: 13, title: "Family Portrait", style: "Realism", likes: 678, comments: 51, desc: "Three-generation portrait on forearm", img: P.t13 },
      { id: 14, title: "Rose Sleeve", style: "Black & Grey", likes: 892, comments: 63, desc: "Full grey-wash rose sleeve", img: P.t14 },
    ],
    availability: ["Mon", "Wed", "Fri"], nextOpen: "Apr 25", waitlist: 22,
  },
  {
    id: 4, name: "Tomasz Wojcik", handle: "@tomasz.trash", location: "Chicago, IL",
    rating: 4.7, reviews: 98, hourly: 225, avatar: P.av4, hue: 160,
    bio: "Trash polka and abstract expressionism on skin. Every piece is a conversation. Consultations required.",
    styles: ["Trash Polka", "Geometric", "Minimalist"], featured: false,
    portfolio: [
      { id: 15, title: "Chaos Theory", style: "Trash Polka", likes: 345, comments: 29, desc: "Full chest — collage meets anatomy", img: P.t15 },
      { id: 16, title: "Void", style: "Geometric", likes: 234, comments: 18, desc: "Negative space geometric ribcage", img: P.t16 },
      { id: 17, title: "Red Collage", style: "Trash Polka", likes: 412, comments: 35, desc: "Abstract red and black composition", img: P.t17 },
    ],
    availability: ["Thu", "Fri", "Sat"], nextOpen: "Apr 20", waitlist: 5,
  },
  {
    id: 5, name: "Priya Sharma", handle: "@priya.lines", location: "San Francisco, CA",
    rating: 4.85, reviews: 156, hourly: 180, avatar: P.av5, hue: 240,
    bio: "Minimalist and fine-line specialist. Less is everything. Bookings open first of each month.",
    styles: ["Minimalist", "Dotwork", "Geometric"], featured: false,
    portfolio: [
      { id: 18, title: "Single Line Face", style: "Minimalist", likes: 892, comments: 63, desc: "Continuous line portrait — one take", img: P.t18 },
      { id: 19, title: "Micro Botanical", style: "Minimalist", likes: 567, comments: 44, desc: "Tiny wildflower bouquet behind ear", img: P.t19 },
      { id: 20, title: "Constellation", style: "Dotwork", likes: 334, comments: 21, desc: "Custom star chart with dotwork fill", img: P.t20 },
    ],
    availability: ["Mon", "Tue", "Wed", "Sat"], nextOpen: "May 1", waitlist: 31,
  },
];

const POSTS = [
  { user: "alexthunder", av: P.c1, text: "Just finished my sleeve with @mikasantoro — 6 sessions, 3 months. The smoke detail is insane.", img: P.t1, likes: 89, replies: 12, time: "2h", aId: 1 },
  { user: "inkdreamer22", av: P.c2, text: "Anyone got recs for neo-trad artists in LA? Bold color, saturated palettes.", img: null, likes: 34, replies: 23, time: "4h", aId: null },
  { user: "tattoo_virgin", av: P.c3, text: "First tattoo next week with @rosa.needles. So patient during the consult. Tips for first-timers?", img: null, likes: 156, replies: 47, time: "6h", aId: 3 },
  { user: "blackworkonly", av: P.c4, text: "Tomasz's Chaos Theory is the best trash polka I've seen this year. The texture is unreal.", img: P.t15, likes: 67, replies: 8, time: "9h", aId: 4 },
  { user: "healingcheck", av: P.c5, text: "Week 3 healing on my Priya piece. Fine lines holding up beautifully. Aquaphor gang rise up.", img: P.t18, likes: 201, replies: 31, time: "12h", aId: 5 },
];

const STYLES_LIST = ["All","Black & Grey","Neo-Traditional","Japanese","Realism","Geometric","Trash Polka","Watercolor","Minimalist","Chicano","Dotwork"];
const PLANS = [
  { name: "Pay in Full", desc: "One payment before session", badge: null, split: 1 },
  { name: "Split in 2", desc: "50% now, 50% after", badge: null, split: 2 },
  { name: "4 Payments", desc: "25% every 2 weeks", badge: "Popular", split: 4 },
  { name: "Monthly x6", desc: "Large pieces $1k+", badge: "Large", split: 6 },
];
const TIMES = ["10:00 AM","11:30 AM","1:00 PM","2:30 PM","4:00 PM"];

const V = {
  bg:"#0A0A0A",sf:"#131313",cd:"#181818",bd:"#252525",
  tx:"#E8E4DF",md:"#8A857F",dm:"#4A4744",
  ac:"#CCFF00",acD:"rgba(204,255,0,0.08)",acB:"rgba(204,255,0,0.2)",
  wm:"#FF6B35",wmD:"rgba(255,107,53,0.1)",rd:"#FF4040",
  h:"'Bebas Neue',Impact,sans-serif",
  b:"'DM Sans',system-ui,sans-serif",
  m:"'DM Mono','SF Mono',monospace",
};

// ─── Image with gradient fallback ─────────────────────
function Pic({ src, h = 160, style = {}, rounded }) {
  const [err, setErr] = useState(false);
  const fallbackBg = `linear-gradient(135deg, hsl(${(src||"").length * 7 % 360}, 20%, 16%), hsl(${(src||"").length * 13 % 360}, 25%, 22%))`;
  return (
    <div style={{ height: h, width: "100%", overflow: "hidden", background: fallbackBg, position: "relative", borderRadius: rounded || 0, ...style }}>
      {!err && src && (
        <img
          src={src} alt="" referrerPolicy="no-referrer"
          onError={() => setErr(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      )}
    </div>
  );
}

function Face({ src, size = 36, name = "", hue = 200 }) {
  const [err, setErr] = useState(false);
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2);
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: `hsl(${hue},50%,35%)`, display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${V.bd}` }}>
      {!err && src ? (
        <img src={src} alt="" referrerPolicy="no-referrer" onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span style={{ color: "#fff", fontSize: size * 0.35, fontWeight: 700, fontFamily: V.b }}>{initials}</span>
      )}
    </div>
  );
}

function Tag({ children, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: active ? V.ac : V.cd, color: active ? V.bg : V.md,
      border: `1px solid ${active ? V.ac : V.bd}`, borderRadius: 20,
      padding: "7px 16px", fontSize: 12, fontWeight: 600, fontFamily: V.b,
      cursor: "pointer", whiteSpace: "nowrap",
    }}>{children}</button>
  );
}

// ─── NAV ──────────────────────────────────────────────
function Nav({ page, go }) {
  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${V.bd}`, padding: "0 16px", display: "flex", alignItems: "center", height: 52 }}>
        <div onClick={() => go("discover")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, background: V.ac, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-3deg)" }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: V.bg, fontFamily: V.h }}>IB</span>
          </div>
          <span style={{ fontSize: 18, fontFamily: V.h, color: V.tx, letterSpacing: 3 }}>INKBOOK</span>
        </div>
        <div style={{ marginLeft: "auto", position: "relative" }}>
          <span style={{ fontSize: 18 }}>🔔</span>
          <div style={{ position: "absolute", top: -1, right: -3, width: 7, height: 7, borderRadius: "50%", background: V.wm }} />
        </div>
      </header>
      <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)", borderTop: `1px solid ${V.bd}`, display: "flex", padding: "6px 0 max(env(safe-area-inset-bottom),8px)" }}>
        {[{id:"discover",i:"🔍",l:"Discover"},{id:"community",i:"💬",l:"Community"},{id:"bookings",i:"📅",l:"Bookings"},{id:"profile",i:"👤",l:"Profile"}].map(t => (
          <button key={t.id} onClick={() => go(t.id)} style={{ flex: 1, background: "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "6px 0", cursor: "pointer" }}>
            <span style={{ fontSize: 18 }}>{t.i}</span>
            <span style={{ fontSize: 9, fontWeight: 600, fontFamily: V.b, color: page === t.id ? V.ac : V.dm }}>{t.l}</span>
          </button>
        ))}
      </nav>
    </>
  );
}

// ─── DISCOVER ─────────────────────────────────────────
function Discover({ onPick }) {
  const [f, setF] = useState("All");
  const list = f === "All" ? ARTISTS : ARTISTS.filter(a => a.styles.includes(f));
  return (
    <div style={{ padding: "16px 16px 100px" }}>
      <h1 style={{ fontSize: 42, fontFamily: V.h, color: V.tx, letterSpacing: 3, margin: 0, lineHeight: 1 }}>FIND YOUR <span style={{ color: V.ac }}>ARTIST</span></h1>
      <p style={{ fontSize: 14, color: V.md, fontFamily: V.b, margin: "4px 0 14px" }}>Browse portfolios. Book sessions. Pay your way.</p>
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 14, scrollbarWidth: "none" }}>
        {STYLES_LIST.map(s => <Tag key={s} active={f === s} onClick={() => setF(s)}>{s}</Tag>)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {list.map(a => (
          <div key={a.id} onClick={() => onPick(a)} style={{ background: V.cd, borderRadius: 14, overflow: "hidden", border: `1px solid ${V.bd}`, cursor: "pointer" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, height: 120 }}>
              {a.portfolio.slice(0, 3).map(p => <Pic key={p.id} src={p.img} h={120} />)}
            </div>
            <div style={{ padding: "12px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <Face src={a.avatar} size={38} name={a.name} hue={a.hue} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: V.tx, fontFamily: V.b }}>{a.name}</span>
                    {a.featured && <span style={{ background: V.ac, color: V.bg, fontSize: 8, fontWeight: 800, padding: "1px 6px", borderRadius: 3, fontFamily: V.b }}>FEATURED</span>}
                  </div>
                  <div style={{ fontSize: 12, color: V.md, fontFamily: V.b }}>{a.location}</div>
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: V.ac, fontFamily: V.m }}>${a.hourly}<span style={{ fontSize: 10, color: V.md }}>/hr</span></div>
              </div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 8 }}>
                {a.styles.map(s => <span key={s} style={{ background: V.sf, border: `1px solid ${V.bd}`, borderRadius: 4, padding: "2px 8px", fontSize: 10, color: V.md, fontFamily: V.b }}>{s}</span>)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: V.md, fontFamily: V.b }}>
                <span>⭐ {a.rating} ({a.reviews})</span><span style={{ color: V.dm }}>·</span>
                <span style={{ color: V.ac }}>Next: {a.nextOpen}</span><span style={{ color: V.dm }}>·</span>
                <span>{a.waitlist} waitlisted</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ARTIST PROFILE ───────────────────────────────────
function ArtistPage({ a, onBack }) {
  const [tab, setTab] = useState("work");
  const [lb, setLb] = useState(null);
  const [sDate, setSDate] = useState(null);
  const [sTime, setSTime] = useState(null);
  const [sPlan, setSPlan] = useState(2);

  return (
    <div style={{ paddingBottom: 100 }}>
      {lb !== null && (
        <div onClick={() => setLb(null)} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.95)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, cursor: "zoom-out" }}>
          <Pic src={a.portfolio[lb].img} h={320} style={{ width: "100%", maxWidth: 400, borderRadius: 12 }} />
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: V.tx, fontFamily: V.b }}>{a.portfolio[lb].title}</div>
            <div style={{ fontSize: 13, color: V.md, fontFamily: V.b, marginTop: 4 }}>{a.portfolio[lb].desc}</div>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 10, fontSize: 13, color: V.dm, fontFamily: V.b }}>
              <span>❤️ {a.portfolio[lb].likes}</span><span>💬 {a.portfolio[lb].comments}</span>
            </div>
          </div>
        </div>
      )}

      <div style={{ position: "relative", height: 220 }}>
        <Pic src={a.portfolio[0].img} h={220} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.95) 100%)" }} />
        <button onClick={onBack} style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.6)", border: `1px solid ${V.bd}`, borderRadius: 8, padding: "8px 14px", color: V.tx, fontSize: 13, fontFamily: V.b, cursor: "pointer", backdropFilter: "blur(10px)", zIndex: 2 }}>← Back</button>
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, zIndex: 2, display: "flex", alignItems: "flex-end", gap: 12 }}>
          <Face src={a.avatar} size={56} name={a.name} hue={a.hue} />
          <div>
            <h2 style={{ fontSize: 28, fontFamily: V.h, color: V.tx, margin: 0, letterSpacing: 2 }}>{a.name.toUpperCase()}</h2>
            <div style={{ fontSize: 12, color: V.md, fontFamily: V.b }}>{a.location} · ⭐ {a.rating} · <span style={{ color: V.ac, fontFamily: V.m }}>${a.hourly}/hr</span></div>
          </div>
        </div>
      </div>

      <div style={{ padding: "14px 16px" }}>
        <p style={{ fontSize: 13, color: V.md, fontFamily: V.b, lineHeight: 1.65, margin: "0 0 12px" }}>{a.bio}</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
          {a.styles.map(s => <span key={s} style={{ background: V.acD, border: `1px solid ${V.acB}`, borderRadius: 5, padding: "3px 10px", fontSize: 11, color: V.ac, fontFamily: V.b, fontWeight: 600 }}>{s}</span>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          <button onClick={() => setTab("book")} style={{ background: V.ac, color: V.bg, border: "none", borderRadius: 10, padding: "12px 0", fontSize: 12, fontWeight: 700, fontFamily: V.b, cursor: "pointer" }}>📅 Book</button>
          <button style={{ background: V.cd, color: V.tx, border: `1px solid ${V.bd}`, borderRadius: 10, padding: "12px 0", fontSize: 12, fontWeight: 600, fontFamily: V.b, cursor: "pointer" }}>📹 FaceTime</button>
          <button style={{ background: V.cd, color: V.tx, border: `1px solid ${V.bd}`, borderRadius: 10, padding: "12px 0", fontSize: 12, fontWeight: 600, fontFamily: V.b, cursor: "pointer" }}>💬 Chat</button>
        </div>
      </div>

      <div style={{ display: "flex", borderBottom: `1px solid ${V.bd}`, padding: "0 16px" }}>
        {["work","reviews","book"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, background: "none", border: "none", padding: "12px 0",
            borderBottom: tab === t ? `2px solid ${V.ac}` : "2px solid transparent",
            fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: tab === t ? V.ac : V.dm, fontFamily: V.b, cursor: "pointer",
          }}>{t === "work" ? "Portfolio" : t === "reviews" ? `Reviews` : "Book Now"}</button>
        ))}
      </div>

      <div style={{ padding: 16 }}>
        {tab === "work" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {a.portfolio.map((p, i) => (
              <div key={p.id} onClick={() => setLb(i)} style={{ cursor: "pointer", borderRadius: 10, overflow: "hidden", border: `1px solid ${V.bd}`, background: V.cd }}>
                <Pic src={p.img} h={160} />
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: V.tx, fontFamily: V.b }}>{p.title}</div>
                  <div style={{ fontSize: 10, color: V.md, fontFamily: V.b, marginTop: 2 }}>{p.style}</div>
                  <div style={{ display: "flex", gap: 10, marginTop: 6, fontSize: 10, color: V.dm, fontFamily: V.b }}>
                    <span>❤️ {p.likes}</span><span>💬 {p.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "reviews" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { u: "sammyinks", av: P.r1, r: 5, t: "Incredible work. Took my vague idea and made something beyond what I imagined. Healing perfectly at 3 weeks.", d: "2w" },
              { u: "firsttimer_k", av: P.r2, r: 5, t: "First tattoo and couldn't have picked better. So patient with my questions, made me feel totally comfortable.", d: "1mo" },
              { u: "darksleeves", av: P.r3, r: 4, t: "Great technical skill. Wait time was long but worth it for quality. Studio is clean and professional.", d: "2mo" },
              { u: "artcollector", av: P.r4, r: 5, t: "Fourth piece from this artist. Consistency is incredible. Every one healed perfectly.", d: "3mo" },
            ].map((r, i) => (
              <div key={i} style={{ background: V.cd, borderRadius: 12, padding: 14, border: `1px solid ${V.bd}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Face src={r.av} size={28} name={r.u} hue={i * 60} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: V.tx, fontFamily: V.b }}>{r.u}</span>
                  <span style={{ fontSize: 11, color: V.ac, marginLeft: "auto" }}>{"★".repeat(r.r)}<span style={{ color: V.dm }}>{"★".repeat(5 - r.r)}</span></span>
                  <span style={{ fontSize: 10, color: V.dm }}>{r.d}</span>
                </div>
                <p style={{ fontSize: 13, color: V.md, fontFamily: V.b, lineHeight: 1.65, margin: 0 }}>{r.t}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "book" && (
          <div>
            <h3 style={{ fontSize: 20, fontFamily: V.h, color: V.tx, letterSpacing: 2, margin: "0 0 12px" }}>PICK A DATE</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 20 }}>
              {["S","M","T","W","T","F","S"].map((d,i) => <div key={i} style={{ textAlign: "center", fontSize: 10, color: V.dm, fontFamily: V.b, padding: "4px 0" }}>{d}</div>)}
              {Array.from({ length: 28 }, (_, i) => {
                const d = new Date(2026, 3, 1 + i);
                const dn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()];
                const ok = a.availability.includes(dn) && i >= 13;
                return (
                  <button key={i} onClick={() => ok && setSDate(i)} style={{
                    background: sDate === i ? V.ac : "transparent", color: sDate === i ? V.bg : ok ? V.tx : V.dm,
                    border: "none", borderRadius: 8, padding: "10px 0", fontSize: 13,
                    fontWeight: sDate === i ? 700 : 500, fontFamily: V.b, cursor: ok ? "pointer" : "default",
                    opacity: ok ? 1 : 0.3,
                  }}>{i + 1}</button>
                );
              })}
            </div>

            {sDate !== null && <>
              <h3 style={{ fontSize: 20, fontFamily: V.h, color: V.tx, letterSpacing: 2, margin: "0 0 10px" }}>PICK A TIME</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 20 }}>
                {TIMES.map((t, i) => (
                  <button key={i} onClick={() => setSTime(i)} style={{
                    background: sTime === i ? V.ac : V.cd, color: sTime === i ? V.bg : V.tx,
                    border: `1px solid ${sTime === i ? V.ac : V.bd}`, borderRadius: 10,
                    padding: "12px 0", fontSize: 14, fontWeight: 600, fontFamily: V.m, cursor: "pointer",
                  }}>{t}</button>
                ))}
              </div>
            </>}

            {sTime !== null && <>
              <h3 style={{ fontSize: 20, fontFamily: V.h, color: V.tx, letterSpacing: 2, margin: "0 0 4px" }}>PAYMENT PLAN</h3>
              <p style={{ fontSize: 12, color: V.md, fontFamily: V.b, margin: "0 0 10px" }}>Est. 3hrs = <span style={{ color: V.ac, fontFamily: V.m, fontWeight: 700 }}>${a.hourly * 3}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {PLANS.map((p, i) => (
                  <button key={i} onClick={() => setSPlan(i)} style={{
                    background: sPlan === i ? V.acD : V.cd,
                    border: `1px solid ${sPlan === i ? V.ac : V.bd}`,
                    borderRadius: 12, padding: "14px 16px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: sPlan === i ? V.ac : V.tx, fontFamily: V.b }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: V.md, fontFamily: V.b }}>{p.desc}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: sPlan === i ? V.ac : V.tx, fontFamily: V.m }}>${Math.round(a.hourly * 3 / p.split)}</div>
                      {p.split > 1 && <div style={{ fontSize: 10, color: V.md }}>x{p.split}</div>}
                      {p.badge && <span style={{ fontSize: 9, fontWeight: 700, color: V.ac }}>{p.badge}</span>}
                    </div>
                  </button>
                ))}
              </div>
              <button style={{ width: "100%", background: V.ac, color: V.bg, border: "none", borderRadius: 12, padding: "16px 0", fontSize: 16, fontWeight: 700, fontFamily: V.b, cursor: "pointer" }}>
                CONFIRM — ${a.hourly * 3}
              </button>
            </>}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── COMMUNITY ────────────────────────────────────────
function Community({ onPick }) {
  return (
    <div style={{ padding: "16px 16px 100px" }}>
      <h1 style={{ fontSize: 36, fontFamily: V.h, color: V.tx, letterSpacing: 3, margin: "0 0 4px" }}>COMMUNITY</h1>
      <p style={{ fontSize: 13, color: V.md, fontFamily: V.b, margin: "0 0 16px" }}>Fresh ink, healing updates, recs, and culture.</p>
      <div style={{ background: V.cd, borderRadius: 12, padding: 14, border: `1px solid ${V.bd}`, marginBottom: 16 }}>
        <div style={{ background: V.sf, borderRadius: 10, padding: "12px 14px", fontSize: 13, color: V.dm, fontFamily: V.b, border: `1px solid ${V.bd}` }}>Share ink, ask for recs, post a healing update...</div>
        <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
          {["📷 Photo","🏷️ Tag Artist","📍 Location"].map(x => <span key={x} style={{ fontSize: 11, color: V.dm, fontFamily: V.b }}>{x}</span>)}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {POSTS.map((p, i) => {
          const art = p.aId ? ARTISTS.find(x => x.id === p.aId) : null;
          return (
            <div key={i} style={{ background: V.cd, borderRadius: 14, overflow: "hidden", border: `1px solid ${V.bd}` }}>
              {p.img && <Pic src={p.img} h={200} />}
              <div style={{ padding: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Face src={p.av} size={30} name={p.user} hue={i * 55} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: V.tx, fontFamily: V.b }}>{p.user}</span>
                  <span style={{ fontSize: 11, color: V.dm, fontFamily: V.b, marginLeft: "auto" }}>{p.time}</span>
                </div>
                <p style={{ fontSize: 14, color: V.md, fontFamily: V.b, lineHeight: 1.6, margin: "0 0 10px" }}>
                  {p.text.split(/(@[\w.]+)/g).map((part, j) =>
                    part.startsWith("@") ? <span key={j} style={{ color: V.ac, fontWeight: 600, cursor: "pointer" }} onClick={() => { if (art) onPick(art); }}>{part}</span> : part
                  )}
                </p>
                {art && (
                  <div onClick={() => onPick(art)} style={{ background: V.sf, borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, border: `1px solid ${V.bd}`, cursor: "pointer", marginBottom: 10 }}>
                    <Face src={art.avatar} size={22} name={art.name} hue={art.hue} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: V.tx, fontFamily: V.b }}>{art.name}</span>
                    <span style={{ fontSize: 11, color: V.ac, fontFamily: V.b, marginLeft: "auto" }}>View →</span>
                  </div>
                )}
                <div style={{ display: "flex", gap: 16, fontSize: 12, color: V.dm, fontFamily: V.b }}>
                  <span>❤️ {p.likes}</span><span>💬 {p.replies}</span><span>↗️</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── BOOKINGS ─────────────────────────────────────────
function Bookings() {
  const data = [
    { a: ARTISTS[0], date: "Apr 22", time: "2:30 PM", status: "confirmed", piece: "Botanical sleeve 3/5", total: 600, plan: "Split in 2" },
    { a: ARTISTS[4], date: "May 1", time: "10:00 AM", status: "pending", piece: "Constellation map", total: 360, plan: "4 Payments" },
    { a: ARTISTS[1], date: "Mar 15", time: "1:00 PM", status: "done", piece: "Neon panther forearm", total: 750, plan: "Paid" },
  ];
  return (
    <div style={{ padding: "16px 16px 100px" }}>
      <h1 style={{ fontSize: 36, fontFamily: V.h, color: V.tx, letterSpacing: 3, margin: "0 0 4px" }}>MY BOOKINGS</h1>
      <p style={{ fontSize: 13, color: V.md, fontFamily: V.b, margin: "0 0 16px" }}>Sessions, payments, history.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.map((b, i) => (
          <div key={i} style={{ background: V.cd, borderRadius: 14, padding: 16, border: `1px solid ${V.bd}`, opacity: b.status === "done" ? 0.5 : 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <Face src={b.a.avatar} size={40} name={b.a.name} hue={b.a.hue} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: V.tx, fontFamily: V.b }}>{b.a.name}</div>
                <div style={{ fontSize: 12, color: V.md, fontFamily: V.b }}>{b.piece}</div>
              </div>
              <span style={{
                background: b.status === "confirmed" ? V.acD : b.status === "pending" ? V.wmD : V.sf,
                color: b.status === "confirmed" ? V.ac : b.status === "pending" ? V.wm : V.dm,
                padding: "3px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700, fontFamily: V.b, textTransform: "uppercase", letterSpacing: 1,
              }}>{b.status}</span>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 12, color: V.md, fontFamily: V.b, marginBottom: b.status !== "done" ? 12 : 0 }}>
              <span>{b.date} · {b.time}</span>
              <span style={{ color: V.ac, fontFamily: V.m }}>${b.total}</span>
              <span>{b.plan}</span>
            </div>
            {b.status !== "done" && (
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ flex: 1, background: V.ac, color: V.bg, border: "none", borderRadius: 8, padding: "10px 0", fontSize: 12, fontWeight: 700, fontFamily: V.b, cursor: "pointer" }}>📹 FaceTime</button>
                <button style={{ flex: 1, background: V.cd, color: V.tx, border: `1px solid ${V.bd}`, borderRadius: 8, padding: "10px 0", fontSize: 12, fontWeight: 600, fontFamily: V.b, cursor: "pointer" }}>💬 Message</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PROFILE ──────────────────────────────────────────
function MyProfile() {
  return (
    <div style={{ padding: "16px 16px 100px", textAlign: "center" }}>
      <div style={{ marginTop: 16 }}><Face src={P.me} size={80} name="Alex James" hue={200} /></div>
      <h2 style={{ fontSize: 22, fontFamily: V.h, color: V.tx, letterSpacing: 2, marginTop: 10 }}>ALEX JAMES</h2>
      <p style={{ fontSize: 13, color: V.md, fontFamily: V.b, margin: "2px 0 0" }}>Orange County, CA</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 16 }}>
        {[["3","Tattoos"],["2","Artists"],["5","Reviews"]].map(([n,l],i) => (
          <div key={i} style={{ background: V.cd, borderRadius: 12, padding: "14px 0", border: `1px solid ${V.bd}` }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: V.ac, fontFamily: V.m }}>{n}</div>
            <div style={{ fontSize: 10, color: V.md, fontFamily: V.b, marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16, textAlign: "left" }}>
        {["Saved Artists","Payment Methods","Healing Tracker","Notifications","Settings"].map((x,i) => (
          <div key={i} style={{ background: V.cd, borderRadius: 10, padding: "14px 16px", border: `1px solid ${V.bd}`, display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
            <span style={{ fontSize: 14, color: V.tx, fontFamily: V.b }}>{x}</span>
            <span style={{ color: V.dm }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────
function InkBook() {
  const [page, setPage] = useState("discover");
  const [artist, setArtist] = useState(null);
  const go = (p) => { setPage(p); setArtist(null); };
  const pick = (a) => { setArtist(a); setPage("artist"); };

  return (
    <div style={{ minHeight: "100vh", background: V.bg, maxWidth: 480, margin: "0 auto", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: 512, pointerEvents: "none", zIndex: 9999, mixBlendMode: "overlay" }} />
      <Nav page={artist ? "artist" : page} go={go} />
      {artist ? <ArtistPage a={artist} onBack={() => go("discover")} /> :
       page === "discover" ? <Discover onPick={pick} /> :
       page === "community" ? <Community onPick={pick} /> :
       page === "bookings" ? <Bookings /> :
       <MyProfile />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(InkBook));
