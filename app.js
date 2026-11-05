/* ==========================================================================
   〈육고(肉庫)〉 YUK.GO — SIR.LOIN × BORN & BRED E-Commerce & PDP Engine (v3.0)
   Supports both Main Storefront (index.html) and Dedicated PDP (product.html)
   ========================================================================== */

const VAULT_PRODUCTS = [
  {
    id: "yg-best-01",
    isBest: true,
    category: "gift",
    categoryLabel: "PRESTIGE GIFT · 프레스티지 선물",
    miniTag: "BEST",
    tagStyle: "gold",
    title: "[프레스티지] 1++ 한우 암소 6구 블랙 트레이 에디션 (1.2kg)",
    subtitle: "꽃등심·안심·채끝·살치·새우·갈비살 6대 부위 마스터 컬렉션",
    spec: "꽃등심·안심·채끝·살치·새우·갈비살 각 200g · 100% 한우 암소",
    weightGrams: 1200,
    unitPriceText: "100g당 18,250원 (백화점 대비 -50%)",
    rating: "4.9",
    reviews: 842,
    originPrice: 440000,
    vaultPrice: 219000,
    discountRate: "50%",
    image: "assets/bnb-tray-set.jpg",
    gallery: [
      "assets/bnb-tray-set.jpg",
      "assets/master-gift-set.jpg",
      "assets/verified-package.jpg",
      "assets/marbling-closeup.jpg"
    ],
    lotCode: "NH-ANSIM-VIP01",
    traceNo: "002-1498-8821",
    cutGuide: "등심·안심·채끝 스테이크 컷 + 살치·새우·갈비살 구이 컷",
    agingSpec: "-1.2°C 전용 숙성고 14일 웻에이징 (Wet-Aging)",
    description: "본앤브레드와 파인다이닝 오마카세의 감동을 집과 선물 자리에서 그대로 경험할 수 있는 육고의 시그니처 6구 블랙 트레이입니다. 자체 직영 도축장에서 당일 발골한 농협 안심 한우 납품 동일 원육(100% 순수 한우 암소 1++ 등급) 중 가장 귀한 6가지 부위만을 정교하게 담았습니다."
  },
  {
    id: "yg-best-02",
    isBest: true,
    category: "special",
    categoryLabel: "BUTCHER'S RESERVE · 당일도축 특선",
    miniTag: "한정특선",
    tagStyle: "red",
    title: "[당일도축 특선] 1++(No.9) 한우 암소 황제 새우살 단독 컷 (300g)",
    subtitle: "소 한 마리에서 단 1%만 허락된 루비빛 초승달 로열 컷",
    spec: "등심 캡(새우살) 100% 정형 · 당일 도축장 한정 수량 직송",
    weightGrams: 300,
    unitPriceText: "100g당 26,300원 (시중가 대비 -53%)",
    rating: "5.0",
    reviews: 519,
    originPrice: 168000,
    vaultPrice: 79000,
    discountRate: "53%",
    image: "assets/cut-shrimp-cap.jpg",
    gallery: [
      "assets/cut-shrimp-cap.jpg",
      "assets/marbling-closeup.jpg",
      "assets/verified-package.jpg",
      "assets/bnb-raw-cuts.jpg"
    ],
    lotCode: "RESERVE-LOT-09",
    traceNo: "002-1489-7742",
    cutGuide: "두께 2.2cm 황제 새우살 단독 시어링 컷",
    agingSpec: "당일 도축장 직출고 · 초신선 골든타임 스킨팩",
    description: "미식가들이 한우의 모든 부위 중 단연 최고로 꼽는 ‘새우살(Ribeye Cap)’ 단독 구성입니다. 농협 안심 한우 특등 코너와 호텔 파인다이닝으로 향하던 BMS No.9 최상위 암소 원육을 중간 유통 마진 0원의 도축장 직공급가로 선보입니다."
  },
  {
    id: "yg-best-03",
    isBest: true,
    category: "dining",
    categoryLabel: "TABLE DINING · 구이·스테이크",
    miniTag: "BEST",
    tagStyle: "gold",
    title: "[시그니처 구이] 100% 한우 암소 샤토브리앙 통안심 & 채끝 (500g)",
    subtitle: "지방 융점 28°C, 입안에서 눈처럼 녹는 암소 정통 스테이크 듀오",
    spec: "샤토브리앙 통안심 250g + 채끝 250g · 농협 안심 한우 원육",
    weightGrams: 500,
    unitPriceText: "100g당 15,800원 (도축장 직공급가)",
    rating: "4.9",
    reviews: 1290,
    originPrice: 165000,
    vaultPrice: 79000,
    discountRate: "52%",
    image: "assets/cut-chateaubriand.jpg",
    gallery: [
      "assets/cut-chateaubriand.jpg",
      "assets/marbling-closeup.jpg",
      "assets/verified-package.jpg",
      "assets/bnb-tray-set.jpg"
    ],
    lotCode: "NH-ANSIM-2611A",
    traceNo: "002-1502-3910",
    cutGuide: "안심 정중앙 샤토브리앙 3cm + 채끝 2cm 컷",
    agingSpec: "-1.2°C 14일 숙성 · 올레인산 풍미 극대화",
    description: "거세우(수소)에서는 결코 느낄 수 없는 순수 한우 암소만의 극강의 부드러움. 안심 중에서도 가장 두툼하고 연한 정중앙 ‘샤토브리앙’과 짙은 육향의 ‘채끝’을 한 세트로 구성해 가정에서도 완벽한 스테이크 다이닝을 완성합니다."
  },
  {
    id: "yg-all-04",
    isBest: false,
    category: "special",
    categoryLabel: "BUTCHER'S RESERVE · 당일도축 특선",
    miniTag: "특수부위",
    tagStyle: "red",
    title: "[당일도축 특선] 한우 암소 1++ 눈꽃 살치살 & 꽃갈비살 (500g)",
    subtitle: "화려한 눈꽃 마블링의 정점, 입안 가득 터지는 고소한 육즙",
    spec: "살치살 250g + 꽃갈비살 250g · BMS No.9 최상위 마블링",
    weightGrams: 500,
    unitPriceText: "100g당 17,600원 (노마진 직공급)",
    rating: "4.9",
    reviews: 674,
    originPrice: 190000,
    vaultPrice: 88000,
    discountRate: "54%",
    image: "assets/cut-galbi-special.jpg",
    gallery: [
      "assets/cut-galbi-special.jpg",
      "assets/cut-shrimp-cap.jpg",
      "assets/verified-package.jpg",
      "assets/marbling-closeup.jpg"
    ],
    lotCode: "RESERVE-LOT-14",
    traceNo: "002-1504-6612",
    cutGuide: "한 입 크기의 정교한 다이아몬드 구이 컷",
    agingSpec: "도축 직후 4시간 이내 입고 · 콜드체인 직송",
    description: "마블링의 밀도가 가장 높은 1++ 한우 암소 살치살과 쫄깃한 식감 뒤로 단맛이 감도는 꽃갈비살을 마스터 부처가 정교하게 손질했습니다. 숯불이나 무쇠 팬 위에서 짧게 구워냈을 때 최상의 감동을 선사합니다."
  },
  {
    id: "yg-all-05",
    isBest: false,
    category: "dining",
    categoryLabel: "TABLE DINING · 구이·스테이크",
    miniTag: "1++ 암소",
    tagStyle: "gold",
    title: "[시그니처 구이] 100% 한우 암소 1++ 꽃등심 & 살치 다이닝팩 (600g)",
    subtitle: "백화점 VIP 쇼케이스 원육 그대로, 온 가족이 즐기는 정석 구이",
    spec: "꽃등심 400g + 살치살 200g · 농협 안심 한우 동일 로트",
    weightGrams: 600,
    unitPriceText: "100g당 13,900원 (유통 마진 ₩0)",
    rating: "4.9",
    reviews: 1540,
    originPrice: 174000,
    vaultPrice: 83400,
    discountRate: "52%",
    image: "assets/bnb-raw-cuts.jpg",
    gallery: [
      "assets/bnb-raw-cuts.jpg",
      "assets/marbling-closeup.jpg",
      "assets/verified-package.jpg",
      "assets/cut-chateaubriand.jpg"
    ],
    lotCode: "NH-ANSIM-2611B",
    traceNo: "002-1495-1108",
    cutGuide: "구이용 정석 1.5cm 컷 (옵션에서 두께 변경 가능)",
    agingSpec: "-1.2°C 정온 숙성 · 진공 스킨팩 포장",
    description: "백화점 쇼케이스에서 100g당 28,500원에 판매되는 바로 그 농협 안심 한우 납품 스펙의 암소 꽃등심을 자체 도축장 직공급 원가(100g당 13,900원)로 제공합니다. 육고의 재구매율 1위 베스트셀러입니다."
  },
  {
    id: "yg-all-06",
    isBest: false,
    category: "gift",
    categoryLabel: "PRESTIGE GIFT · 프레스티지 선물",
    miniTag: "VVIP 선물",
    tagStyle: "gold",
    title: "[프레스티지] 차콜 실크 보자기 & 肉庫 황동 인장 기프트 (1.6kg)",
    subtitle: "가장 귀한 분께 바치는 상위 1% 한우 암소 황제 부위 4종",
    spec: "안심·새우살·살치살·채끝 각 400g · 수령인 성함 단독 각인",
    weightGrams: 1600,
    unitPriceText: "100g당 18,600원 (실크 보자기 + 황동 인장 포함)",
    rating: "5.0",
    reviews: 418,
    originPrice: 620000,
    vaultPrice: 298000,
    discountRate: "52%",
    image: "assets/master-gift-set.jpg",
    gallery: [
      "assets/master-gift-set.jpg",
      "assets/bnb-tray-set.jpg",
      "assets/verified-package.jpg",
      "assets/cut-shrimp-cap.jpg"
    ],
    lotCode: "PRESTIGE-GIFT-01",
    traceNo: "002-1501-0094",
    cutGuide: "각 부위별 400g 개별 스킨팩 + 코퍼 봉인 라벨",
    agingSpec: "마스터 부처 단독 선별 · VVIP 보자기 수작업 포장",
    description: "백화점 60만 원대 명절 선물 세트의 절반은 유통 수수료입니다. 육고 프레스티지 기프트는 직영 도축장에서 당일 선별한 1++(No.9) 한우 암소 최고급 부위 1.6kg을 차콜 실크 보자기와 ‘肉庫’ 황동 인장 패키지에 담아 압도적인 품격을 전합니다."
  },
  {
    id: "yg-all-07",
    isBest: false,
    category: "dining",
    categoryLabel: "TABLE DINING · 구이·스테이크",
    miniTag: "시그니처",
    tagStyle: "gold",
    title: "[시그니처 구이] YUK-GO VERIFIED 코퍼 봉인 암소 채끝 스테이크 (500g)",
    subtitle: "진한 육향과 부드러운 육질의 황금 밸런스, 두툼한 시어링 컷",
    spec: "두께 3cm 시어링 스테이크 컷 · 코퍼 출고 승인 라벨 부착",
    weightGrams: 500,
    unitPriceText: "100g당 14,400원 (스킨팩 진공 숙성)",
    rating: "4.9",
    reviews: 930,
    originPrice: 148000,
    vaultPrice: 72000,
    discountRate: "51%",
    image: "assets/verified-package.jpg",
    gallery: [
      "assets/verified-package.jpg",
      "assets/cut-chateaubriand.jpg",
      "assets/marbling-closeup.jpg",
      "assets/bnb-raw-cuts.jpg"
    ],
    lotCode: "NH-ANSIM-2611C",
    traceNo: "002-1498-8821",
    cutGuide: "스테이크 최적화 2.5~3.0cm 시어링 컷",
    agingSpec: "14일 정온 숙성 · YUK-GO VERIFIED 봉인",
    description: "진공 스킨팩 위 브러시드 코퍼 ‘YUK-GO VERIFIED’ 봉인 라벨이 부착되어 출고됩니다. 겉은 바삭하게 시어링하고 속은 미디엄 레어로 구웠을 때 한우 암소 특유의 감칠맛이 폭발합니다."
  },
  {
    id: "yg-all-08",
    isBest: false,
    category: "special",
    categoryLabel: "BUTCHER'S RESERVE · 당일도축 특선",
    miniTag: "BMS No.9",
    tagStyle: "red",
    title: "[당일도축 특선] 마스터 선별 한우 암소 3대 구이 오마카세 팩 (700g)",
    subtitle: "알등심 · 새우살 · 샤토브리앙 안심을 한 번에 즐기는 미식 코스",
    spec: "알등심 300g + 새우살 200g + 안심 200g · 1++ No.9",
    weightGrams: 700,
    unitPriceText: "100g당 16,800원 (당일 도축장 직송)",
    rating: "5.0",
    reviews: 385,
    originPrice: 245000,
    vaultPrice: 118000,
    discountRate: "52%",
    image: "assets/marbling-closeup.jpg",
    gallery: [
      "assets/marbling-closeup.jpg",
      "assets/cut-shrimp-cap.jpg",
      "assets/cut-chateaubriand.jpg",
      "assets/verified-package.jpg"
    ],
    lotCode: "RESERVE-LOT-18",
    traceNo: "002-1489-7742",
    cutGuide: "오마카세 코스 순서에 맞춘 3종 정밀 정형",
    agingSpec: "농협 안심 한우 최상위 1% 로트 선별",
    description: "청담동 한우 오마카세에서 1인 25만 원 이상에 제공되는 최상위 BMS No.9 한우 암소 핵심 부위 3종을 중간 유통 거품 없이 집에서 코스처럼 즐길 수 있도록 구성했습니다."
  },
  {
    id: "yg-all-09",
    isBest: false,
    category: "gift",
    categoryLabel: "PRESTIGE GIFT · 프레스티지 선물",
    miniTag: "PRESTIGE",
    tagStyle: "gold",
    title: "[프레스티지] 상위 0.1% 한우 암소 통등심 홀크라운 에디션 (2.0kg)",
    subtitle: "기업 VIP · 양가 부모님 예단을 위한 육고의 최고 권위 기프트",
    spec: "1++(No.9) 한우 암소 새우살 포함 통등심 · 전용 블랙 금고 박스",
    weightGrams: 2000,
    unitPriceText: "100g당 17,900원 (전담 마스터 정형)",
    rating: "5.0",
    reviews: 214,
    originPrice: 750000,
    vaultPrice: 358000,
    discountRate: "52%",
    image: "assets/vault-hero.jpg",
    gallery: [
      "assets/vault-hero.jpg",
      "assets/master-gift-set.jpg",
      "assets/bnb-tray-set.jpg",
      "assets/verified-package.jpg"
    ],
    lotCode: "PRESTIGE-VIP-99",
    traceNo: "002-1501-0094",
    cutGuide: "새우살·알등심·살치살 풀 스펙 정형 (8팩 개별 스킨포장)",
    agingSpec: "-1.2°C 전용 금고 숙성 · 마스터 친필 보증서 동봉",
    description: "육고의 직영 도축장에서 한 달에 단 10두 미만으로 나오는 상위 0.1% 한우 암소(BMS No.9)의 등심 전체를 담아낸 하이엔드 선물 세트입니다."
  }
];

// ==========================================================================
// PERSISTENT CART ENGINE (localStorage synced across index.html & product.html)
// ==========================================================================
const CART_STORAGE_KEY = "yukgo_vault_cart_v3";

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCartToStorage(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {}
}

let vaultCart = loadCartFromStorage();

function formatKRW(num) {
  return "₩" + Number(num).toLocaleString("ko-KR");
}

function updateCartBadge() {
  vaultCart = loadCartFromStorage();
  const badges = document.querySelectorAll("#cart-count-badge, .cart-count-sync");
  const totalQty = vaultCart.reduce((acc, item) => acc + item.qty, 0);
  badges.forEach((b) => {
    b.textContent = totalQty;
  });
}

function addToVaultBag(productId, qtyToAdd = 1, customOptionText = "") {
  const item = VAULT_PRODUCTS.find((p) => p.id === productId);
  if (!item) return;

  vaultCart = loadCartFromStorage();
  const key = customOptionText ? `${productId}__${customOptionText}` : productId;
  const existing = vaultCart.find((c) => c.cartKey === key);

  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    vaultCart.push({
      ...item,
      cartKey: key,
      qty: qtyToAdd,
      selectedOption: customOptionText || "기본 정석 구이컷 · 매트블랙 스킨팩"
    });
  }

  saveCartToStorage(vaultCart);
  updateCartBadge();
  openCartModal();
}

function removeFromVaultBag(cartKey) {
  vaultCart = loadCartFromStorage().filter((i) => (i.cartKey || i.id) !== cartKey);
  saveCartToStorage(vaultCart);
  updateCartBadge();
  openCartModal();
}

// ==========================================================================
// STOREFRONT PRODUCT CARD RENDERING (Navigates to product.html?id=...)
// ==========================================================================
function goToProductDetail(productId) {
  window.location.href = `product.html?id=${encodeURIComponent(productId)}`;
}

function createBnbCardHTML(item) {
  const tagClass = item.tagStyle === "red" ? "bnb-mini-tag red-tag" : "bnb-mini-tag";
  return `
    <article class="bnb-card" onclick="goToProductDetail('${item.id}')">
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
          <span>${item.unitPriceText.split(" (")[0]}</span>
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
    tab.classList.toggle(
      "active",
      navType === category || (category === "all" && targetSelector === "#top" && navType === "all")
    );
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
// HERO SLIDER + TOUCH SWIPE
// ==========================================================================
let currentHeroSlide = 0;
let heroSlideInterval = null;

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
  const slides = document.querySelectorAll(".hero-slide-item");
  if (!slides.length) return;
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

function updateSealPreview() {
  const input = document.getElementById("recipient-name-input");
  const target = document.getElementById("seal-recipient-val");
  if (!input || !target) return;
  const val = input.value.trim() || "VIP 고객님";
  target.textContent = `${val} 귀하`;
}

// ==========================================================================
// DEDICATED PRODUCT DETAIL PAGE (product.html) ENGINE
// ==========================================================================
let activePdpProduct = null;
let pdpQty = 1;
let pdpPackageExtra = 0;

function initProductDetailPage() {
  const pdpRoot = document.getElementById("pdp-page-root");
  if (!pdpRoot) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "yg-best-01";
  const product = VAULT_PRODUCTS.find((p) => p.id === productId) || VAULT_PRODUCTS[0];
  activePdpProduct = product;
  pdpQty = 1;
  pdpPackageExtra = 0;

  document.title = `${product.title} | YUK.GO 육고(肉庫)`;

  const headerTitle = document.getElementById("pdp-header-title");
  if (headerTitle) headerTitle.textContent = product.title;

  // Populate Gallery
  const mainImg = document.getElementById("pdp-main-img");
  const thumbsWrap = document.getElementById("pdp-thumbs-row");
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.title;
  }
  if (thumbsWrap && product.gallery) {
    thumbsWrap.innerHTML = product.gallery
      .map(
        (imgSrc, idx) => `
      <button class="pdp-thumb-btn ${idx === 0 ? "active" : ""}" onclick="switchPdpGalleryImage('${imgSrc}', this)">
        <img src="${imgSrc}" alt="상품 이미지 ${idx + 1}" />
      </button>
    `
      )
      .join("");
  }

  // Populate Summary Info
  const setTxt = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };

  setTxt("pdp-cat-label", product.categoryLabel);
  setTxt("pdp-rating-top", `★ ${product.rating} (${product.reviews}개 리뷰)`);
  setTxt("pdp-title", product.title);
  setTxt("pdp-subtitle", product.subtitle);
  setTxt("pdp-discount", product.discountRate);
  setTxt("pdp-vault-price", formatKRW(product.vaultPrice));
  setTxt("pdp-origin-price", `백화점 기준가 ${formatKRW(product.originPrice)}`);
  setTxt("pdp-unit-price", product.unitPriceText);
  setTxt("pdp-spec-line", product.spec);
  setTxt("pdp-cut-guide", product.cutGuide);
  setTxt("pdp-aging-spec", product.agingSpec);
  setTxt("pdp-trace-no", `${product.traceNo} (100% 한우 암소 1++)`);
  setTxt("pdp-lot-code", product.lotCode);
  setTxt("pdp-desc-lead", product.description);
  setTxt("pdp-review-count-tab", product.reviews);

  const storyImg = document.getElementById("pdp-story-main-img");
  if (storyImg) storyImg.src = product.image;

  updatePdpTotalPrice();

  // Render Related Products (Other items)
  const relatedGrid = document.getElementById("pdp-related-grid");
  if (relatedGrid) {
    const others = VAULT_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = others.map(createBnbCardHTML).join("");
  }
}

function switchPdpGalleryImage(src, btnEl) {
  const mainImg = document.getElementById("pdp-main-img");
  if (mainImg) mainImg.src = src;
  document.querySelectorAll(".pdp-thumb-btn").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
}

function changePdpQty(delta) {
  pdpQty = Math.max(1, pdpQty + delta);
  const qtyEl = document.getElementById("pdp-qty-val");
  if (qtyEl) qtyEl.textContent = String(pdpQty);
  updatePdpTotalPrice();
}

function handlePdpOptionChange() {
  const pkgSelect = document.getElementById("pdp-pkg-select");
  if (pkgSelect) {
    pdpPackageExtra = Number(pkgSelect.value) || 0;
  }
  updatePdpTotalPrice();
}

function updatePdpTotalPrice() {
  if (!activePdpProduct) return;
  const unitFinal = activePdpProduct.vaultPrice + pdpPackageExtra;
  const total = unitFinal * pdpQty;

  const totalEl = document.getElementById("pdp-total-price");
  const bottomBtnPrice = document.getElementById("pdp-sticky-price");
  if (totalEl) totalEl.textContent = formatKRW(total);
  if (bottomBtnPrice) bottomBtnPrice.textContent = formatKRW(total);
}

function submitPdpAction(mode) {
  if (!activePdpProduct) return;
  const cutSelect = document.getElementById("pdp-cut-select");
  const pkgSelect = document.getElementById("pdp-pkg-select");
  const engraveInput = document.getElementById("pdp-engrave-input");

  const cutTxt = cutSelect ? cutSelect.options[cutSelect.selectedIndex].text : "정석 구이컷";
  const pkgTxt = pkgSelect ? pkgSelect.options[pkgSelect.selectedIndex].text : "기본 스킨팩";
  const engraveTxt = engraveInput && engraveInput.value.trim() ? `각인: ${engraveInput.value.trim()}` : "기본 승인라벨";

  const optionSummary = `${cutTxt} / ${pkgTxt} (${engraveTxt})`;
  addToVaultBag(activePdpProduct.id, pdpQty, optionSummary);

  if (mode === "buy" || mode === "gift") {
    // Cart modal is already opened by addToVaultBag
  }
}

function shareCurrentProduct() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      alert("상품 페이지 링크가 복사되었습니다. 카카오톡이나 문자로 공유해 보세요!");
    });
  }
}

// ==========================================================================
// MODALS: TRACEABILITY, CART, MEMBERSHIP, CONCIERGE
// ==========================================================================
function openTraceabilityModal(traceNo = "002-1498-8821") {
  const modalBody = document.getElementById("modal-body-inner");
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (!modalBody || !backdrop) return;

  modalBody.innerHTML = `
    <div style="font-size: 0.74rem; font-weight: 800; color: #2ecc71; letter-spacing: 0.08em; margin-bottom: 6px;">
      ✓ OFFICIAL CATTLE TRACEABILITY & NONGHYUP ANSIM VERIFIED
    </div>
    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 12px;">축산물 이력번호 & 농협 안심 한우 납품 검증서</h3>
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

  vaultCart = loadCartFromStorage();

  if (vaultCart.length === 0) {
    modalBody.innerHTML = `
      <div style="text-align: center; padding: 24px 0;">
        <div style="color: var(--seal-gold); font-size: 0.78rem; font-weight: 800; margin-bottom: 8px;">SHOPPING BAG EMPTY</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 10px;">장바구니에 담긴 상품이 없습니다.</h3>
        <p style="color: var(--text-secondary); font-size: 0.86rem; margin-bottom: 22px;">
          직영 도축장 노마진 100% 한우 암소 컬렉션을 확인해 보세요.
        </p>
        <button class="hero-slide-cta" onclick="closeVaultModal();">
          계속 둘러보기
        </button>
      </div>
    `;
  } else {
    const totalOrigin = vaultCart.reduce((acc, i) => acc + i.originPrice * i.qty, 0);
    const totalVault = vaultCart.reduce((acc, i) => acc + i.vaultPrice * i.qty, 0);

    modalBody.innerHTML = `
      <div style="font-size: 0.74rem; font-weight: 800; color: var(--seal-gold); margin-bottom: 6px;">YUK.GO ORDER BAG</div>
      <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 16px;">장바구니 (${vaultCart.reduce((a, b) => a + b.qty, 0)})</h3>
      <div style="display: flex; flex-direction: column; gap: 10px; max-height: 240px; overflow-y: auto; margin-bottom: 16px;">
        ${vaultCart
          .map(
            (item) => `
          <div style="background: #121214; border: 1px solid var(--vault-border-subtle); border-radius: 6px; padding: 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
            <img src="${item.image}" alt="" style="width: 48px; height: 48px; border-radius: 4px; object-fit: cover; flex-shrink: 0;" />
            <div style="flex: 1; min-width: 0;">
              <div style="font-weight: 700; font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted); margin: 2px 0;">${item.selectedOption || ""}</div>
              <div style="font-size: 0.78rem; color: var(--seal-gold-light); font-weight: 700;">수량 ${item.qty}개 · ${formatKRW(item.vaultPrice * item.qty)}</div>
            </div>
            <button onclick="removeFromVaultBag('${item.cartKey || item.id}')" style="background: transparent; border: 1px solid var(--vault-border-subtle); color: var(--text-muted); padding: 4px 8px; border-radius: 3px; cursor: pointer; font-size: 0.72rem; flex-shrink: 0;">삭제</button>
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
          <span style="font-weight: 700; font-size: 0.9rem;">도축장 직송 노마진 결제금액</span>
          <strong style="font-size: 1.3rem; color: var(--seal-gold-light);">${formatKRW(totalVault)}</strong>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="bnb-filter-btn" style="padding: 10px 14px;" onclick="closeVaultModal()">계속 쇼핑</button>
        <button class="hero-slide-cta" onclick="completeOrder()">주문 및 봉인 출고 신청</button>
      </div>
    `;
  }
  backdrop.classList.add("open");
}

function completeOrder() {
  const modalBody = document.getElementById("modal-body-inner");
  vaultCart = [];
  saveCartToStorage([]);
  updateCartBadge();
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 20px 8px;">
      <div style="color: var(--seal-gold-light); font-weight: 800; font-size: 0.8rem; margin-bottom: 8px;">YUK-GO VERIFIED™ APPROVED</div>
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 10px;">주문 및 출고 승인이 완료되었습니다.</h3>
      <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.65; margin-bottom: 22px;">
        직영 도축장에서 농협 안심 한우 납품 동일 등급의 100% 한우 암소 원육을 선별하여<br />
        코퍼 봉인 라벨 부착 후 당일 콜드체인으로 안전하게 직송합니다.
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
    <div style="font-size: 0.74rem; font-weight: 800; color: var(--seal-gold); margin-bottom: 6px;">YUK.GO MEMBERSHIP & ZERO-MARGIN POLICY</div>
    <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 10px;">육고 멤버십 등급제 & 노마진 혜택 안내</h3>
    <p style="color: var(--text-secondary); font-size: 0.86rem; line-height: 1.6; margin-bottom: 16px;">
      육고는 첫 구매 고객부터 VVIP 등급까지 모든 회원에게 <strong>백화점 대비 50% 이상 저렴한 직영 도축장 원가</strong>를 기본 제공합니다.
    </p>
    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; font-size: 0.83rem;">
      <div style="background: #121214; padding: 12px 14px; border-left: 3px solid #e09f67;">
        <strong>[V] PRESTIGE VIP (누적 100만 원 이상)</strong> · 매주 도축장 당일 새우살·샤토브리앙 한정 특선 우선 예약권 + 실크 보자기 무료 업그레이드
      </div>
      <div style="background: #121214; padding: 12px 14px; border-left: 3px solid #d2d2d8;">
        <strong>[S] SILVER SUITE (누적 50만 원 이상)</strong> · 농협 안심 한우 동일 로트 1++ 암소 상시 5% 추가 적립
      </div>
      <div style="background: #121214; padding: 12px 14px; border-left: 3px solid #efd29b;">
        <strong>[G] GOLD PASS (신규 가입 전원)</strong> · 중간 유통 마진 0원 직공급가 즉시 적용 + YUK-GO VERIFIED 성함 각인 무료
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
    <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 10px;">기업 · 대량 프레스티지 선물 문의</h3>
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

// Live Countdown Timer
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
  updateCartBadge();
  renderBestSellers();
  filterVaultProducts("all");
  resetHeroAutoSlide();
  initHeroTouchSwipe();
  startDropCountdown();
  initProductDetailPage();

  const now = new Date();
  const sealDateEl = document.getElementById("seal-date-val");
  if (sealDateEl) {
    sealDateEl.textContent = `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(2, "0")}. ${String(now.getDate()).padStart(2, "0")}`;
  }
});
