/* ==========================================================================
   〈육고(肉庫)〉 YUK.GO — SIR.LOIN × BORN & BRED Interactive Engine (v2.0)
   ========================================================================== */

const VAULT_PRODUCTS = [
  {
    id: "yg-best-01",
    isBest: true,
    category: "gift",
    categoryLabel: "PRIVATE GIFT · 마스터 금고",
    miniTag: "BEST 01",
    tagStyle: "gold",
    title: "[마스터 금고] 1++ 한우 암소 6구 블랙 트레이 샘플러 (1.2kg)",
    spec: "꽃등심·안심·채끝·살치·새우·갈비살 각 200g · 100% 한우 암소",
    unitPriceText: "100g당 18,250원 (백화점 대비 -50%)",
    rating: "4.9",
    reviews: 842,
    originPrice: 440000,
    vaultPrice: 219000,
    discountRate: "50%",
    image: "assets/bnb-tray-set.jpg",
    lotCode: "NH-ANSIM-VIP01",
    traceNo: "002-1498-8821",
    description: "본앤브레드·설로인 최상위 라인업을 넘어서는 육고의 시그니처 6구 블랙 트레이. 직영 도축장에서 당일 발골한 농협 안심 한우 납품 동일 원육(100% 암소) 6대 부위를 한 상자에 담았습니다."
  },
  {
    id: "yg-best-02",
    isBest: true,
    category: "secret",
    categoryLabel: "SECRET DROP · 시크릿 코드",
    miniTag: "DROP 한정",
    tagStyle: "red",
    title: "[시크릿 코드] 1++(No.9) 한우 암소 황제 새우살 단독 컷 (300g)",
    spec: "등심 캡(새우살) 100% 정형 · 당일 도축장 긴급 반출 한정 로트",
    unitPriceText: "100g당 26,300원 (시중가 대비 -53%)",
    rating: "5.0",
    reviews: 519,
    originPrice: 168000,
    vaultPrice: 79000,
    discountRate: "53%",
    image: "assets/cut-shrimp-cap.jpg",
    lotCode: "SECRET-DROP-09",
    traceNo: "002-1489-7742",
    description: "소 한 마리에서 극소량만 나오는 루비빛 초승달 모양의 새우살 단독 구성. 농협 안심 한우 특등 코너 납품 초과 물량을 중간 유통 마진 0원에 긴급 방출합니다."
  },
  {
    id: "yg-best-03",
    isBest: true,
    category: "daily",
    categoryLabel: "DAILY CUT · 일상 반출",
    miniTag: "BEST 03",
    tagStyle: "gold",
    title: "[일상 반출] 100% 한우 암소 샤토브리앙 통안심 & 채끝 (500g)",
    spec: "통안심 250g + 채끝 스테이크 250g · 농협 안심 한우 동일 로트",
    unitPriceText: "100g당 15,800원 (도축장 직출고 원가)",
    rating: "4.9",
    reviews: 1290,
    originPrice: 165000,
    vaultPrice: 79000,
    discountRate: "52%",
    image: "assets/cut-chateaubriand.jpg",
    lotCode: "NH-ANSIM-2611A",
    traceNo: "002-1502-3910",
    description: "자체 도축장 직출고로 경매·중도매·백화점 수수료를 모두 잠갔습니다. 지방 융점 28°C의 순수 한우 암소 안심과 채끝을 동시에 즐기는 구이용 베스트셀러입니다."
  },
  {
    id: "yg-all-04",
    isBest: false,
    category: "secret",
    categoryLabel: "SECRET DROP · 시크릿 코드",
    miniTag: "DROP 특가",
    tagStyle: "red",
    title: "[시크릿 코드] 한우 암소 1++ 눈꽃 살치살 & 꽃갈비살 모둠 (500g)",
    spec: "살치살 250g + 꽃갈비살 250g · BMS No.9 최상위 마블링",
    unitPriceText: "100g당 17,600원 (노마진 도매 반출)",
    rating: "4.9",
    reviews: 674,
    originPrice: 190000,
    vaultPrice: 88000,
    discountRate: "54%",
    image: "assets/cut-galbi-special.jpg",
    lotCode: "SECRET-DROP-14",
    traceNo: "002-1504-6612",
    description: "입안에 넣는 순간 눈처럼 녹아내리는 1++ 한우 암소 살치살과 쫄깃한 육즙의 꽃갈비살을 정교한 바둑판 컷으로 손질해 스킨팩 봉인 출고합니다."
  },
  {
    id: "yg-all-05",
    isBest: false,
    category: "daily",
    categoryLabel: "DAILY CUT · 일상 반출",
    miniTag: "1++ 암소",
    tagStyle: "gold",
    title: "[일상 반출] 100% 한우 암소 1++ 꽃등심 · 살치 정석 구이팩 (600g)",
    spec: "꽃등심 400g + 살치살 200g · 온 가족 미식 & 캠핑 반출팩",
    unitPriceText: "100g당 13,900원 (유통 마진 ₩0)",
    rating: "4.9",
    reviews: 1540,
    originPrice: 174000,
    vaultPrice: 83400,
    discountRate: "52%",
    image: "assets/bnb-raw-cuts.jpg",
    lotCode: "NH-ANSIM-2611B",
    traceNo: "002-1495-1108",
    description: "백화점 쇼케이스에서 100g당 28,500원에 판매되는 바로 그 농협 안심 한우 납품 스펙 암소 꽃등심을 직영 도축장 원가 그대로 반출합니다."
  },
  {
    id: "yg-all-06",
    isBest: false,
    category: "gift",
    categoryLabel: "PRIVATE GIFT · 마스터 금고",
    miniTag: "VVIP GIFT",
    tagStyle: "gold",
    title: "[마스터 금고] 차콜 실크 보자기 & 肉庫 황동 인장 기프트 (1.6kg)",
    spec: "안심·새우살·살치살·채끝 각 400g · 수령인 성함 단독 각인 봉인",
    unitPriceText: "100g당 18,600원 (실크 보자기 + 황동 인장 포함)",
    rating: "5.0",
    reviews: 418,
    originPrice: 620000,
    vaultPrice: 298000,
    discountRate: "52%",
    image: "assets/master-gift-set.jpg",
    lotCode: "MASTER-VAULT-01",
    traceNo: "002-1501-0094",
    description: "“아무나 못 구하는 비밀 금고의 최상급 한우 암소를 선물합니다.” 차콜 실크 보자기와 황동 인장 태그, 마스터 친필 출고 승인서가 동봉되는 최고급 선물 세트."
  },
  {
    id: "yg-all-07",
    isBest: false,
    category: "daily",
    categoryLabel: "DAILY CUT · 일상 반출",
    miniTag: "VERIFIED",
    tagStyle: "gold",
    title: "[일상 반출] YUK-GO VERIFIED 코퍼 봉인 암소 스테이크 팩 (500g)",
    spec: "두께 3cm 시어링 컷 · 브러시드 코퍼 출고 승인 라벨 부착",
    unitPriceText: "100g당 14,400원 (스킨팩 진공 숙성)",
    rating: "4.9",
    reviews: 930,
    originPrice: 148000,
    vaultPrice: 72000,
    discountRate: "51%",
    image: "assets/verified-package.jpg",
    lotCode: "NH-ANSIM-2611C",
    traceNo: "002-1498-8821",
    description: "진공 스킨팩 위 브러시드 코퍼 ‘YUK-GO VERIFIED’ 봉인 라벨이 부착되어 출고됩니다. 인스타그램 스토리 인증율 1위 시그니처 구이팩."
  },
  {
    id: "yg-all-08",
    isBest: false,
    category: "secret",
    categoryLabel: "SECRET DROP · 시크릿 코드",
    miniTag: "BMS No.9",
    tagStyle: "red",
    title: "[시크릿 코드] 마스터 부처 선별 한우 암소 3대 구이 정점 팩 (700g)",
    spec: "알등심 300g + 새우살 200g + 안심 200g · 1++ No.9",
    unitPriceText: "100g당 16,800원 (당일 도축장 직송)",
    rating: "5.0",
    reviews: 385,
    originPrice: 245000,
    vaultPrice: 118000,
    discountRate: "52%",
    image: "assets/marbling-closeup.jpg",
    lotCode: "SECRET-DROP-18",
    traceNo: "002-1489-7742",
    description: "파인다이닝 오마카세로 납품되던 BMS No.9 최상위 한우 암소 원육 3종을 중간 유통 거품 없이 한 번에 경험하는 미식 패키지."
  },
  {
    id: "yg-all-09",
    isBest: false,
    category: "gift",
    categoryLabel: "PRIVATE GIFT · 마스터 금고",
    miniTag: "PRESTIGE",
    tagStyle: "gold",
    title: "[마스터 금고] 프라이빗 금고 원육 통등심 홀크라운 에디션 (2.0kg)",
    spec: "1++(No.9) 한우 암소 새우살 포함 통등심 · VVIP 전용 금고 박스",
    unitPriceText: "100g당 17,900원 (전담 마스터 정형)",
    rating: "5.0",
    reviews: 214,
    originPrice: 750000,
    vaultPrice: 358000,
    discountRate: "52%",
    image: "assets/vault-hero.jpg",
    lotCode: "MASTER-VAULT-99",
    traceNo: "002-1501-0094",
    description: "육고의 지하 숙성 금고(-1.2°C)에서 가장 완벽하게 웻에이징된 상위 0.1% 한우 암소 홀크라운 에디션. 기업 대표님 및 양가 최고급 예단 선물용."
  }
];

let vaultCart = [];
let currentHeroSlide = 0;
let heroSlideInterval = null;

function formatKRW(num) {
  return "₩" + num.toLocaleString("ko-KR");
}

function createBnbCardHTML(item) {
  const tagClass = item.tagStyle === "red" ? "bnb-mini-tag red-tag" : "bnb-mini-tag";
  return `
    <article class="bnb-card" onclick="openProductSpecModal('${item.id}')">
      <div class="bnb-square-thumb">
        <span class="${tagClass}">${item.miniTag}</span>
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <button class="bnb-quick-add" onclick="event.stopPropagation(); addToVaultBag('${item.id}')">
          + 담기
        </button>
      </div>
      <div class="bnb-card-info">
        <h3 class="bnb-card-title">${item.title}</h3>
        <p class="bnb-card-spec">${item.spec}</p>
        <div class="bnb-card-price-wrap">
          <span class="bnb-discount">${item.discountRate}</span>
          <span class="bnb-price">${formatKRW(item.vaultPrice)}</span>
          <span class="bnb-origin-price">${formatKRW(item.originPrice)}</span>
        </div>
        <div class="bnb-unit-meta">
          <span>${item.unitPriceText.split(' (')[0]}</span>
          <span class="bnb-rating">★ ${item.rating} (${item.reviews})</span>
        </div>
      </div>
    </article>
  `;
}

function renderBestSellers() {
  const bestGrid = document.getElementById("best-seller-grid");
  if (!bestGrid) return;
  const bestItems = VAULT_PRODUCTS.filter((p) => p.isBest);
  bestGrid.innerHTML = bestItems.map(createBnbCardHTML).join("");
}

function filterVaultProducts(category = "all") {
  const allGrid = document.getElementById("all-products-grid");
  if (!allGrid) return;

  const list = category === "all"
    ? VAULT_PRODUCTS
    : VAULT_PRODUCTS.filter((p) => p.category === category);

  allGrid.innerHTML = list.map(createBnbCardHTML).join("");

  document.querySelectorAll(".bnb-filter-btn[data-cat]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-cat") === category);
  });
}

function handleGnbClick(category, targetSelector) {
  filterVaultProducts(category);

  document.querySelectorAll(".gnb-tab-link").forEach((tab) => {
    const navType = tab.getAttribute("data-nav");
    tab.classList.toggle("active", navType === category || (category === "all" && targetSelector === "#top" && navType === "all"));
  });

  scrollToSection(targetSelector);
}

function handleBottomTab(tabId, category, targetSelector) {
  document.querySelectorAll(".bottom-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-bnav") === tabId);
  });
  handleGnbClick(category, targetSelector);
}

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================================================
// HERO SLIDER + TOUCH SWIPE FOR MOBILE
// ==========================================================================
function showHeroSlide(index) {
  const slides = document.querySelectorAll(".hero-slide-item");
  if (!slides.length) return;

  currentHeroSlide = (index + slides.length) % slides.length;
  slides.forEach((s, idx) => {
    s.classList.toggle("active", idx === currentHeroSlide);
  });

  const numEl = document.getElementById("current-slide-num");
  if (numEl) numEl.textContent = String(currentHeroSlide + 1);
}

function changeHeroSlide(delta) {
  showHeroSlide(currentHeroSlide + delta);
  resetHeroAutoSlide();
}

function resetHeroAutoSlide() {
  if (heroSlideInterval) clearInterval(heroSlideInterval);
  heroSlideInterval = setInterval(() => {
    showHeroSlide(currentHeroSlide + 1);
  }, 5500);
}

function initHeroTouchSwipe() {
  const area = document.getElementById("hero-touch-area");
  if (!area) return;
  let startX = 0;

  area.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  area.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) changeHeroSlide(1);
      else changeHeroSlide(-1);
    }
  }, { passive: true });
}

// ==========================================================================
// 3-SECOND VAULT DOOR HOOK & METALLIC SOUND
// ==========================================================================
function playVaultClunkSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(135, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.38);
    gain.gain.setValueAtTime(0.65, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.44);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sawtooth";
    osc2.frequency.setValueAtTime(260, now + 0.2);
    osc2.frequency.exponentialRampToValueAtTime(52, now + 0.46);
    gain2.gain.setValueAtTime(0.4, now + 0.2);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.2);
    osc2.stop(now + 0.5);
  } catch (e) {}
}

function triggerVaultHookWithSound() {
  const hero = document.getElementById("hero-vault");
  if (!hero) return;
  showHeroSlide(0);
  hero.scrollIntoView({ behavior: "smooth" });
  hero.classList.add("vault-locked");

  setTimeout(() => {
    unlockVaultHero();
  }, 900);
}

function unlockVaultHero() {
  const hero = document.getElementById("hero-vault");
  if (!hero) return;
  playVaultClunkSound();
  setTimeout(() => {
    hero.classList.remove("vault-locked");
  }, 350);
}

// ==========================================================================
// LIVE "YUK-GO VERIFIED" SEAL PREVIEW & TRADEMARK SWITCHER
// ==========================================================================
function updateSealPreview() {
  const input = document.getElementById("recipient-name-input");
  const target = document.getElementById("seal-recipient-val");
  if (!input || !target) return;
  const val = input.value.trim() || "VIP 고객님";
  target.textContent = `${val} 귀하`;
}

const TRADEMARK_TITLES = ["육고 1++", "원육금고 육고", "더 육고"];
function switchTrademarkMode(idx) {
  const titleEl = document.getElementById("dynamic-brand-title");
  if (titleEl && TRADEMARK_TITLES[idx]) {
    titleEl.textContent = TRADEMARK_TITLES[idx];
  }
  document.querySelectorAll("[data-tm]").forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
  });
}

// ==========================================================================
// FULL PDP SLIDE-OVER MODAL, TRACEABILITY LOOKUP & CART
// ==========================================================================
function addToVaultBag(productId) {
  const item = VAULT_PRODUCTS.find((p) => p.id === productId);
  if (!item) return;

  const existing = vaultCart.find((c) => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    vaultCart.push({ ...item, qty: 1 });
  }
  updateCartBadge();
  openCartModal();
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count-badge");
  if (!badge) return;
  badge.textContent = vaultCart.reduce((acc, item) => acc + item.qty, 0);
}

function openProductSpecModal(productId) {
  const item = VAULT_PRODUCTS.find((p) => p.id === productId);
  if (!item) return;

  const modalBody = document.getElementById("modal-body-inner");
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (!modalBody || !backdrop) return;

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 120px 1fr; gap: 16px; align-items: center; margin-bottom: 18px;">
      <img src="${item.image}" alt="${item.title}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 6px; border: 1px solid var(--vault-border);" />
      <div>
        <div style="font-size: 0.72rem; font-weight: 800; color: var(--seal-gold); margin-bottom: 4px;">
          ${item.categoryLabel} · ★ ${item.rating} (${item.reviews}개 리뷰)
        </div>
        <h3 style="font-size: 1.15rem; font-weight: 800; line-height: 1.35; margin-bottom: 6px;">${item.title}</h3>
        <div style="font-size: 0.78rem; color: var(--seal-gold-light); font-weight: 700;">${item.unitPriceText}</div>
      </div>
    </div>

    <p style="color: var(--text-secondary); font-size: 0.86rem; margin-bottom: 16px; line-height: 1.6;">
      ${item.description}
    </p>

    <!-- Option Selectors -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
      <div>
        <label style="font-size: 0.72rem; color: var(--text-muted); display: block; margin-bottom: 4px;">구이 두께 선택</label>
        <select style="width: 100%; background: #121214; border: 1px solid var(--vault-border); color: var(--text-primary); padding: 8px 10px; border-radius: 4px; font-size: 0.82rem;">
          <option>정석 구이 컷 (1.5cm)</option>
          <option>시어링 스테이크 컷 (3.0cm)</option>
        </select>
      </div>
      <div>
        <label style="font-size: 0.72rem; color: var(--text-muted); display: block; margin-bottom: 4px;">패키지 & 보자기 옵션</label>
        <select style="width: 100%; background: #121214; border: 1px solid var(--vault-border); color: var(--text-primary); padding: 8px 10px; border-radius: 4px; font-size: 0.82rem;">
          <option>기본 YUK-GO VERIFIED 블랙팩</option>
          <option>차콜 실크 보자기 + 肉庫 황동인장 (+₩15,000)</option>
        </select>
      </div>
    </div>

    <!-- Spec & Traceability Box -->
    <div style="background: #121214; border: 1px solid var(--vault-border-subtle); border-radius: 6px; padding: 14px; margin-bottom: 16px; font-size: 0.8rem;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
        <span style="color: var(--text-muted);">원육 성별 / 등급</span>
        <strong style="color: var(--seal-gold-light);">100% 순수 한우 암소 · 1++ (BMS No.9)</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
        <span style="color: var(--text-muted);">도축 및 납품처</span>
        <strong>육고 직영 도축장 · 농협 안심 한우 공식 납품 원육</strong>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: var(--text-muted);">축산물 이력번호</span>
        <button onclick="openTraceabilityModal('${item.traceNo}')" style="background: rgba(198,147,91,0.15); border: 1px solid var(--seal-gold); color: var(--seal-gold-light); padding: 2px 8px; border-radius: 3px; font-size: 0.74rem; cursor: pointer;">
          ${item.traceNo} 인증서 조회 ›
        </button>
      </div>
    </div>

    <!-- Verified Review Snippet -->
    <div style="background: rgba(198,147,91,0.06); border-left: 3px solid var(--seal-gold); padding: 10px 12px; margin-bottom: 18px; font-size: 0.78rem; color: var(--text-secondary);">
      <strong style="color: var(--text-primary);">★ 5.0 [실구매 인증]</strong> “백화점 명절 한우 세트보다 마블링이 훨씬 촘촘하고 암소라 그런지 입에서 진짜 사르르 녹습니다. YUK-GO VERIFIED 코퍼 봉인 스티커 덕분에 선물드리니 반응이 폭발적이었어요.”
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--vault-border-subtle); padding-top: 16px;">
      <div>
        <span style="font-size: 0.74rem; color: var(--text-muted); text-decoration: line-through; display: block;">백화점 기준가 ${formatKRW(item.originPrice)}</span>
        <span style="font-size: 1.25rem; font-weight: 800; color: var(--meat-red-bright); margin-right: 6px;">${item.discountRate}</span>
        <strong style="font-size: 1.35rem; font-weight: 800; color: var(--seal-gold-light);">${formatKRW(item.vaultPrice)}</strong>
      </div>
      <button class="hero-slide-cta" onclick="addToVaultBag('${item.id}')">
        + 금고 반출 담기
      </button>
    </div>
  `;
  backdrop.classList.add("open");
}

function openTraceabilityModal(traceNo = "002-1498-8821") {
  const modalBody = document.getElementById("modal-body-inner");
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (!modalBody || !backdrop) return;

  modalBody.innerHTML = `
    <div style="font-size: 0.74rem; font-weight: 800; color: #2ecc71; letter-spacing: 0.08em; margin-bottom: 6px;">
      ✓ OFFICIAL CATTLE TRACEABILITY & NONGHYUP ANSIM VERIFIED
    </div>
    <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 12px;">축산물 이력번호 & 농협 안심 한우 납품 검증서</h3>
    <div style="background: #121214; border: 1.5px solid var(--seal-gold); border-radius: 6px; padding: 16px; margin-bottom: 16px; font-size: 0.82rem; display: flex; flex-direction: column; gap: 9px;">
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--vault-border-subtle); padding-bottom: 7px;">
        <span style="color: var(--text-muted);">개체식별번호 (이력번호)</span>
        <strong style="font-family: var(--font-mono); color: var(--seal-gold-light);">${traceNo}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--vault-border-subtle); padding-bottom: 7px;">
        <span style="color: var(--text-muted);">식육의 종류 / 성별</span>
        <strong>국내산 한우 / 순수 암소 (Female Hanwoo 100%)</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--vault-border-subtle); padding-bottom: 7px;">
        <span style="color: var(--text-muted);">등급 판정 결과</span>
        <strong style="color: var(--seal-gold-light);">1++ 등급 (근내지방도 BMS No.9 최상위)</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--vault-border-subtle); padding-bottom: 7px;">
        <span style="color: var(--text-muted);">도축장명 (직영 인프라)</span>
        <strong>육고(肉庫) 제1직영 HACCP 도축·가공장</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="color: var(--text-muted);">농협 안심 한우 4대 검사</span>
        <strong style="color: #2ecc71;">무항생제 · DNA 동일성 · 위생검사 적합 ✓</strong>
      </div>
    </div>
    <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 18px;">
      육고에서 출고되는 모든 원육은 농협 안심 한우 공식 납품 원육과 100% 동일한 로트이며, 자체 도축장 직출고를 통해 중간 유통 마진 0원에 공급됩니다.
    </p>
    <div style="text-align: right;">
      <button class="hero-slide-cta" onclick="closeVaultModal()">확인 완료</button>
    </div>
  `;
  backdrop.classList.add("open");
}

function openCartModal() {
  const modalBody = document.getElementById("modal-body-inner");
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (!modalBody || !backdrop) return;

  if (vaultCart.length === 0) {
    modalBody.innerHTML = `
      <div style="text-align: center; padding: 24px 0;">
        <div style="color: var(--seal-gold); font-size: 0.78rem; font-weight: 800; margin-bottom: 8px;">VAULT BAG EMPTY</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 10px;">장바구니에 담긴 원육이 없습니다.</h3>
        <p style="color: var(--text-secondary); font-size: 0.86rem; margin-bottom: 22px;">
          직영 도축장 노마진 100% 한우 암소 라인업을 확인해 보세요.
        </p>
        <button class="hero-slide-cta" onclick="closeVaultModal(); handleGnbClick('all', '#all-products-section');">
          전체 상품 보기
        </button>
      </div>
    `;
  } else {
    const totalOrigin = vaultCart.reduce((acc, i) => acc + i.originPrice * i.qty, 0);
    const totalVault = vaultCart.reduce((acc, i) => acc + i.vaultPrice * i.qty, 0);

    modalBody.innerHTML = `
      <div style="font-size: 0.74rem; font-weight: 800; color: var(--seal-gold); margin-bottom: 6px;">YUK.GO VAULT RELEASE</div>
      <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 16px;">금고 반출 장바구니</h3>
      <div style="display: flex; flex-direction: column; gap: 10px; max-height: 220px; overflow-y: auto; margin-bottom: 16px;">
        ${vaultCart
          .map(
            (item) => `
          <div style="background: #121214; border: 1px solid var(--vault-border-subtle); border-radius: 4px; padding: 11px 13px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
            <div>
              <div style="font-weight: 700; font-size: 0.86rem;">${item.title}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">수량 ${item.qty}개 · ${formatKRW(item.vaultPrice * item.qty)}</div>
            </div>
            <button onclick="removeFromVaultBag('${item.id}')" style="background: transparent; border: 1px solid var(--vault-border-subtle); color: var(--text-muted); padding: 4px 8px; border-radius: 3px; cursor: pointer; font-size: 0.72rem; flex-shrink: 0;">삭제</button>
          </div>
        `
          )
          .join("")}
      </div>
      <div style="background: rgba(198, 147, 91, 0.1); border: 1px solid var(--seal-gold); border-radius: 6px; padding: 14px 16px; margin-bottom: 18px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 4px;">
          <span>백화점 5단계 유통 기준가</span>
          <span style="text-decoration: line-through;">${formatKRW(totalOrigin)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: 8px; border-top: 1px solid var(--vault-border);">
          <span style="font-weight: 700; font-size: 0.9rem;">도축장 직출고 노마진 결제금액</span>
          <strong style="font-size: 1.3rem; color: var(--seal-gold-light);">${formatKRW(totalVault)}</strong>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="bnb-filter-btn" onclick="closeVaultModal()">계속 쇼핑</button>
        <button class="hero-slide-cta" onclick="completeOrder()">YUK-GO VERIFIED 반출 신청</button>
      </div>
    `;
  }
  backdrop.classList.add("open");
}

function removeFromVaultBag(id) {
  vaultCart = vaultCart.filter((i) => i.id !== id);
  updateCartBadge();
  openCartModal();
}

function completeOrder() {
  const modalBody = document.getElementById("modal-body-inner");
  vaultCart = [];
  updateCartBadge();
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 20px 8px;">
      <div style="color: var(--seal-gold-light); font-weight: 800; font-size: 0.8rem; margin-bottom: 8px;">YUK-GO VERIFIED™ APPROVED</div>
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 10px;">금고 반출 승인이 완료되었습니다.</h3>
      <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.65; margin-bottom: 22px;">
        자체 도축장에서 농협 안심 한우 납품 동일 등급의 100% 한우 암소 원육을 선별하여<br />
        코퍼 봉인 라벨 부착 후 당일 콜드체인으로 직송합니다.
      </p>
      <button class="hero-slide-cta" onclick="closeVaultModal()">확인</button>
    </div>
  `;
}

function openAuthorityBenefitModal() {
  const modalBody = document.getElementById("modal-body-inner");
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (!modalBody || !backdrop) return;

  modalBody.innerHTML = `
    <div style="font-size: 0.74rem; font-weight: 800; color: var(--seal-gold); margin-bottom: 6px;">YUK.GO VAULT MEMBERSHIP & ZERO-MARGIN POLICY</div>
    <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 10px;">육고 금고 등급제 & 3대 노마진 원칙 안내</h3>
    <p style="color: var(--text-secondary); font-size: 0.86rem; line-height: 1.6; margin-bottom: 16px;">
      육고는 첫 구매 고객부터 VVIP 마스터 등급까지 모든 회원에게 <strong>백화점 대비 50% 이상 저렴한 직영 도축장 원가</strong>를 기본 제공합니다.
    </p>
    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; font-size: 0.83rem;">
      <div style="background: #121214; padding: 12px 14px; border-left: 3px solid #e09f67;">
        <strong>[V] VAULT MASTER (누적 100만 원 이상)</strong> · 매주 도축장 당일 새우살·샤토브리앙 시크릿 코드 우선 반출권 + 보자기 무료 업그레이드
      </div>
      <div style="background: #121214; padding: 12px 14px; border-left: 3px solid #d2d2d8;">
        <strong>[S] SILVER VAULT (누적 50만 원 이상)</strong> · 농협 안심 한우 동일 로트 1++ 암소 상시 5% 추가 적립
      </div>
      <div style="background: #121214; padding: 12px 14px; border-left: 3px solid #efd29b;">
        <strong>[G] GOLD PASS (첫 반출 회원 전원)</strong> · 중간 유통 마진 0원 직출고가 즉시 적용 + YUK-GO VERIFIED 성함 각인 무료
      </div>
    </div>
    <div style="text-align: right;">
      <button class="hero-slide-cta" onclick="closeVaultModal()">확인</button>
    </div>
  `;
  backdrop.classList.add("open");
}

function openConciergeModal() {
  const modalBody = document.getElementById("modal-body-inner");
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (!modalBody || !backdrop) return;

  modalBody.innerHTML = `
    <div style="font-size: 0.74rem; font-weight: 800; color: var(--seal-gold); margin-bottom: 6px;">CORPORATE & VIP GIFT CONCIERGE</div>
    <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 10px;">기업 · 대량 마스터 금고 선물 문의</h3>
    <p style="color: var(--text-secondary); font-size: 0.86rem; line-height: 1.6; margin-bottom: 16px;">
      자체 도축장 직공급으로 백화점 명절 선물 세트 절반 예산으로 <strong>100% 한우 암소 1++ + 실크 보자기 + 대표자 성함 단독 봉인 라벨</strong> 맞춤 제작이 가능합니다.
    </p>
    <div style="background: #121214; border: 1px solid var(--vault-border); border-radius: 6px; padding: 14px; margin-bottom: 18px; font-size: 0.83rem; line-height: 1.75;">
      <div>• <strong>전품목 원육 스펙:</strong> 농협 안심 한우 공식 납품 원육 · 100% 한우 암소</div>
      <div>• <strong>맞춤 봉인 각인:</strong> 기업 로고 및 임원 성함 YUK-GO VERIFIED 라벨 인쇄</div>
      <div>• <strong>전담 컨시어지 직통:</strong> <span style="color: var(--seal-gold-light); font-weight: 700;">02-1588-YUKGO</span></div>
    </div>
    <div style="text-align: right;">
      <button class="hero-slide-cta" onclick="closeVaultModal()">닫기</button>
    </div>
  `;
  backdrop.classList.add("open");
}

function closeVaultModal() {
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (backdrop) backdrop.classList.remove("open");
}

function closeModalOnBackdrop(e) {
  if (e.target.id === "vault-modal-backdrop") closeVaultModal();
}

// Live Secret Drop Timer
let dropSeconds = 2 * 3600 + 38 * 60 + 45;
function startDropCountdown() {
  const el = document.getElementById("drop-countdown");
  if (!el) return;
  setInterval(() => {
    if (dropSeconds > 0) dropSeconds--;
    const h = String(Math.floor(dropSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((dropSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(dropSeconds % 60).padStart(2, "0");
    el.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderBestSellers();
  filterVaultProducts("all");
  resetHeroAutoSlide();
  initHeroTouchSwipe();
  startDropCountdown();

  const now = new Date();
  const sealDateEl = document.getElementById("seal-date-val");
  if (sealDateEl) {
    sealDateEl.textContent = `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(2, "0")}. ${String(now.getDate()).padStart(2, "0")}`;
  }
});
