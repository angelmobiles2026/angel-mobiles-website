import { useState, useEffect, useRef } from "react";

const COLORS = {
  primary: "#e30613",
  secondary: "#111111",
  accent: "#f5f5f5",
  success: "#22c55e",
  warning: "#f59e0b",
  textPrimary: "#1f2937",
  textSecondary: "#6b7280",
  border: "#e5e7eb",
  white: "#ffffff",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; color: #1f2937; background: #fff; }

  .angle-app { max-width: 100%; overflow-x: hidden; }

  /* Announcement Bar */


  /* Header */
  

  /* Hero Slider */
  .hero {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a0505 40%, #2a0808 100%);
    min-height: 480px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .hero-slide {
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 48px 24px;
    width: 100%;
    gap: 40px;
  }
  .hero-content { flex: 1; z-index: 2; }
  .hero-eyebrow {
    display: inline-block;
    background: #e30613;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(42px, 6vw, 72px);
    font-weight: 800;
    color: #fff;
    line-height: 1.05;
    margin-bottom: 12px;
  }
  .hero-title .accent { color: #e30613; }
  .hero-sub {
    font-size: 15px;
    color: rgba(255,255,255,0.65);
    margin-bottom: 8px;
    font-style: italic;
    letter-spacing: 0.5px;
  }
  .hero-sub strong { color: #e30613; font-style: normal; }
  .hero-badges {
    display: flex;
    gap: 20px;
    margin: 24px 0 32px;
    flex-wrap: wrap;
  }
  .hero-badge {
    display: flex;
    align-items: center;
    gap: 7px;
    color: rgba(255,255,255,0.8);
    font-size: 12px;
    font-weight: 500;
  }
  .hero-badge .dot {
    width: 28px;
    height: 28px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #e30613;
    color: #fff;
    padding: 14px 32px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 15px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    letter-spacing: 0.3px;
  }
  .btn-primary:hover { background: #c0050f; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(227,6,19,0.4); }

  .hero-visual {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    min-height: 360px;
  }
  .hero-circle {
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(227,6,19,0.15) 0%, transparent 70%);
    border-radius: 50%;
    position: absolute;
    right: -40px;
  }
  .hero-phones {
    display: flex;
    gap: -20px;
    position: relative;
    z-index: 2;
  }
  .phone-mock {
    width: 100px;
    height: 200px;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border-radius: 16px;
    border: 2px solid rgba(255,255,255,0.1);
    position: relative;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }
  .phone-mock:nth-child(1) { transform: rotate(-8deg) translateY(20px); }
  .phone-mock:nth-child(2) { transform: rotate(0deg) scale(1.1); z-index: 2; background: linear-gradient(145deg, #3a0808, #1a0303); border-color: rgba(227,6,19,0.3); }
  .phone-mock:nth-child(3) { transform: rotate(8deg) translateY(20px); }
  .phone-screen {
    position: absolute;
    inset: 8px;
    background: linear-gradient(135deg, #e30613 0%, #8b0000 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }
  .offer-badge {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 90px;
    height: 90px;
    background: #e30613;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 8px 24px rgba(227,6,19,0.5);
    z-index: 3;
  }
  .offer-badge .exc { font-size: 10px; font-weight: 600; text-align: center; letter-spacing: 1px; }
  .offer-badge .ofs { font-size: 18px; font-weight: 800; }

  .hero-dots {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  }
  .hero-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    cursor: pointer;
    transition: all 0.2s;
  }
  .hero-dot.active { background: #e30613; width: 24px; border-radius: 4px; }

  /* Promo Cards */
  .promo-cards {
    max-width: 1280px;
    margin: 32px auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .promo-card {
    background: #f5f5f5;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    transition: all 0.2s;
    overflow: hidden;
    position: relative;
  }
  .promo-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
  .promo-card.red { background: #e30613; color: #fff; }
  .promo-card-icon { font-size: 28px; flex-shrink: 0; }
  .promo-card-text .label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #e30613;
    margin-bottom: 4px;
  }
  .promo-card.red .label { color: rgba(255,255,255,0.7); }
  .promo-card-text .title { font-size: 14px; font-weight: 700; color: #111; line-height: 1.2; }
  .promo-card.red .title { color: #fff; }
  .promo-card-text .desc { font-size: 11px; color: #6b7280; margin-top: 2px; }
  .promo-card.red .desc { color: rgba(255,255,255,0.8); }
  .shop-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 8px;
    font-size: 11px;
    font-weight: 700;
    color: #e30613;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
  .promo-card.red .shop-link { color: rgba(255,255,255,0.9); }
  .big-savings-pct {
    font-size: 64px;
    font-weight: 900;
    color: rgba(255,255,255,0.15);
    position: absolute;
    right: -8px;
    bottom: -8px;
    font-family: 'Poppins', sans-serif;
    line-height: 1;
  }

  /* Section Header */
  .section { max-width: 1280px; margin: 48px auto; padding: 0 24px; }
  .section-header { text-align: center; margin-bottom: 36px; }
  .section-header h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #111;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
  }
  .section-header .underline {
    width: 48px;
    height: 3px;
    background: #e30613;
    border-radius: 2px;
    margin: 0 auto;
  }

  /* Categories */
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 16px;
  }
  .cat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cat-card:hover { transform: translateY(-4px); }
  .cat-icon {
    width: 76px;
    height: 76px;
    background: #f5f5f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    transition: all 0.2s;
    border: 2px solid transparent;
  }
  .cat-card:hover .cat-icon { border-color: #e30613; background: #fff5f5; }
  .cat-card span { font-size: 12px; font-weight: 600; color: #1f2937; text-align: center; }

  /* Products */
  .products-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  .products-header h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #111;
  }
  .view-all {
    color: #e30613;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }
  .product-card {
    background: #fff;
    border: 1.5px solid #e5e7eb;
    border-radius: 12px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
  }
  .product-card:hover { border-color: #e30613; box-shadow: 0 8px 32px rgba(227,6,19,0.12); transform: translateY(-4px); }
  .wishlist-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #fff;
    border: 1.5px solid #e5e7eb;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
  }
  .wishlist-btn:hover, .wishlist-btn.active { border-color: #e30613; color: #e30613; }
  .product-img {
    aspect-ratio: 1;
    background: #f9fafb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin-bottom: 14px;
  }
  .product-name { font-size: 13px; font-weight: 600; color: #1f2937; margin-bottom: 8px; line-height: 1.4; }
  .product-prices { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
  .price-current { font-size: 16px; font-weight: 700; color: #111; font-family: 'Poppins', sans-serif; }
  .price-original { font-size: 12px; color: #9ca3af; text-decoration: line-through; }
  .price-off { font-size: 11px; font-weight: 700; color: #22c55e; background: #f0fdf4; padding: 2px 6px; border-radius: 4px; }
  .add-cart-btn {
    width: 100%;
    padding: 9px;
    background: #111;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .add-cart-btn:hover { background: #e30613; }

  /* Features Strip */
  .features-strip {
    background: #f5f5f5;
    padding: 24px 0;
    margin: 40px 0;
  }
  .features-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  .feature-item {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .feature-icon {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  .feature-text .f-title { font-size: 14px; font-weight: 700; color: #111; margin-bottom: 2px; }
  .feature-text .f-desc { font-size: 12px; color: #6b7280; }

  /* Promo Banner */
  .promo-banner {
    background: linear-gradient(135deg, #0a0a0a 0%, #1e0000 100%);
    padding: 60px 24px;
    position: relative;
    overflow: hidden;
    margin: 0 0 48px;
  }
  .promo-banner-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 48px;
  }
  .promo-banner-text { flex: 1; }
  .promo-banner-text .eyebrow { font-size: 12px; font-weight: 700; color: #e30613; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
  .promo-banner-text h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    color: #fff;
    line-height: 1.1;
    margin-bottom: 12px;
  }
  .promo-banner-text p { font-size: 14px; color: rgba(255,255,255,0.65); margin-bottom: 28px; }
  .promo-banner-text strong { color: #e30613; }
  .promo-visual { display: flex; gap: 16px; align-items: center; }
  .headphone-mock {
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, #333, #111);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    box-shadow: 0 20px 60px rgba(227,6,19,0.3);
  }
  .neckband-mock {
    width: 80px;
    height: 140px;
    background: linear-gradient(145deg, #2a2a2a, #111);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.5);
  }
  .promo-banner-circles {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.07;
  }
  .circle-ring {
    position: absolute;
    border: 2px solid #e30613;
    border-radius: 50%;
  }

  /* Newsletter */
  .newsletter {
    background: #e30613;
    padding: 48px 24px;
  }
  .newsletter-inner {
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 48px;
  }
  .newsletter-icon { font-size: 52px; flex-shrink: 0; }
  .newsletter-text h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 6px;
  }
  .newsletter-text p { font-size: 14px; color: rgba(255,255,255,0.8); }
  .newsletter-form {
    display: flex;
    gap: 0;
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .newsletter-form input {
    flex: 1;
    padding: 14px 20px;
    border: none;
    font-size: 14px;
    outline: none;
  }
  .newsletter-form button {
    background: #111;
    color: #fff;
    border: none;
    padding: 14px 24px;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .newsletter-form button:hover { background: #333; }

  /* Footer */


  /* Cart Toast */
  .cart-toast {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #22c55e;
    color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    z-index: 999;
    transform: translateY(80px);
    opacity: 0;
    transition: all 0.3s;
    box-shadow: 0 8px 24px rgba(34,197,94,0.4);
  }
  .cart-toast.show { transform: translateY(0); opacity: 1; }
`;

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,29,999",
    original: "₹1,39,999",
    off: "7% OFF",
    emoji: "📱",
    brand: "Samsung",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: "₹1,34,900",
    original: "₹1,44,900",
    off: "7% OFF",
    emoji: "📱",
    brand: "Apple",
  },
  {
    id: 3,
    name: "OnePlus 12 5G",
    price: "₹64,999",
    original: "₹69,999",
    off: "7% OFF",
    emoji: "📱",
    brand: "OnePlus",
  },
  {
    id: 4,
    name: "Vivo V30 Pro",
    price: "₹41,999",
    original: "₹46,999",
    off: "11% OFF",
    emoji: "📱",
    brand: "Vivo",
  },
  {
    id: 5,
    name: "Redmi Note 13 Pro+ 5G",
    price: "₹31,999",
    original: "₹34,999",
    off: "9% OFF",
    emoji: "📱",
    brand: "Redmi",
  },
];

const categories = [
  { emoji: "📱", name: "Smartphones" },
  { emoji: "🎧", name: "Neckbands" },
  { emoji: "🎵", name: "Headphones" },
  { emoji: "⌚", name: "Smartwatches" },
  { emoji: "🔌", name: "Accessories" },
  { emoji: "💻", name: "Tablets" },
  { emoji: "🔊", name: "Audio Speakers" },
];

export default function AngleMobileStore() {
  const [wishlist, setWishlist] = useState(new Set());
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setHeroSlide((s) => (s + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (name) => {
    setCartCount((c) => c + 1);
    setToastMsg(`${name} added to cart! 🛒`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const toggleWishlist = (id) => {
    setWishlist((w) => {
      const n = new Set(w);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  return (
    <>
      <style>{styles}</style>
      <div className="angle-app">
        {/* Announcement Bar */}

        {/* Header */}

        {/* Hero */}

        {/* Promo Cards */}
        <div className="promo-cards">
          {[
            {
              label: "NEW LAUNCHES",
              title: "Latest Mobiles In Store",
              desc: "Explore Now →",
              emoji: "📱",
              red: false,
            },
            {
              label: "NECKBANDS",
              title: "Wireless Freedom All Day Long",
              desc: "Shop Now →",
              emoji: "🎧",
              red: false,
            },
            {
              label: "HEADPHONES",
              title: "Feel Every Beat Pure Sound",
              desc: "Shop Now →",
              emoji: "🎵",
              red: false,
            },
            {
              label: "BIG SAVINGS",
              title: "On Top Brands Limited Time Offers",
              desc: "View Offers →",
              emoji: "%",
              red: true,
            },
          ].map((c, i) => (
            <div key={i} className={`promo-card ${c.red ? "red" : ""}`}>
              <div className="promo-card-icon">
                {c.emoji !== "%" ? c.emoji : null}
              </div>
              <div className="promo-card-text">
                <div className="label">{c.label}</div>
                <div className="title">{c.title}</div>
                <button className="shop-link">{c.desc}</button>
              </div>
              {c.red && <div className="big-savings-pct">%</div>}
            </div>
          ))}
        </div>

        {/* Categories */}
        <section className="section">
          <div className="section-header">
            <h2>SHOP BY CATEGORY</h2>
            <div className="underline" />
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div key={cat.name} className="cat-card">
                <div className="cat-icon">{cat.emoji}</div>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className="section">
          <div className="products-header">
            <h2>BEST SELLING MOBILES</h2>
            <button className="view-all">View All →</button>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <button
                  className={`wishlist-btn ${wishlist.has(p.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(p.id)}
                >
                  {wishlist.has(p.id) ? "❤️" : "🤍"}
                </button>
                <div className="product-img">{p.emoji}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-prices">
                  <span className="price-current">{p.price}</span>
                  <span className="price-original">{p.original}</span>
                  <span className="price-off">{p.off}</span>
                </div>
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(p.name)}
                >
                  🛒 ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Strip */}
        <div className="features-strip">
          <div className="features-inner">
            {[
              {
                icon: "0%",
                title: "No Cost EMI",
                desc: "Easy EMIs on Leading Bank Cards",
              },
              {
                icon: "🔄",
                title: "Exchange Offer",
                desc: "Best Value for Your Old Device",
              },
              {
                icon: "🔒",
                title: "Safe & Secure",
                desc: "100% Secured Payment Gateway",
              },
              {
                icon: "✅",
                title: "Quality Assured",
                desc: "Genuine Products You Can Trust",
              },
            ].map((f) => (
              <div key={f.title} className="feature-item">
                <div
                  className="feature-icon"
                  style={
                    f.icon === "0%"
                      ? { fontSize: 16, fontWeight: 800, color: "#e30613" }
                      : {}
                  }
                >
                  {f.icon}
                </div>
                <div className="feature-text">
                  <div className="f-title">{f.title}</div>
                  <div className="f-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="promo-banner">
          <div className="promo-banner-inner">
            <div className="promo-banner-text">
              <div className="eyebrow">FEATURED COLLECTION</div>
              <h2>
                SOUND THAT
                <br />
                MOVES YOU
              </h2>
              <p>
                Neckbands & Headphones
                <br />
                Starting at just <strong>₹999</strong>
              </p>
              <button className="btn-primary">SHOP NOW →</button>
            </div>
            <div className="promo-visual">
              <div className="neckband-mock">🎧</div>
              <div className="headphone-mock">🎵</div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <div className="newsletter-inner">
            <div className="newsletter-icon">✉️</div>
            <div className="newsletter-text">
              <h3>STAY UPDATED</h3>
              <p>
                Subscribe to get the latest offers, new arrivals and exclusive
                deals.
              </p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={() => {
                  setEmail("");
                  setToastMsg("Subscribed! 🎉");
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 2500);
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Features */}
        <div className="footer-features">
          <div className="footer-features-inner">
            {[
              {
                icon: "🚚",
                title: "FREE DELIVERY",
                desc: "On Orders Above ₹999",
              },
              {
                icon: "↩️",
                title: "EASY RETURNS",
                desc: "7 Days Return Policy",
              },
              { icon: "💳", title: "PAY ON DELIVERY", desc: "Available" },
              { icon: "🎧", title: "24/7 SUPPORT", desc: "We're Here to Help" },
            ].map((f) => (
              <div key={f.title} className="ft-feat">
                <div className="icon">{f.icon}</div>
                <div className="text">
                  <div className="title">{f.title}</div>
                  <div className="desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}

        {/* Cart Toast */}
        <div className={`cart-toast ${showToast ? "show" : ""}`}>
          ✓ {toastMsg}
        </div>
      </div>
    </>
  );
}
