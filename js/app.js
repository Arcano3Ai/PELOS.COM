/**
 * PELOS.COM — CORE APPLICATION SCRIPT
 * Filosofía: “El nombre es el chiste. La ejecución es seria.”
 * 80% Premium / 20% Absurdo — Experiencia E-commerce Viral y Memorable
 */

// 1. DATA: Catálogo Comercial Boutique de Pelo Humano (Lotes 2026)
const PRODUCTS = [
  {
    id: 'prod-01',
    name: 'Pelo de Pecho — Collection 001',
    category: 'pecho',
    categoryLabel: 'Pelo de Pecho',
    price: 49,
    badge: 'BEST SELLER',
    rating: '5.0 (148 reacciones)',
    specs: {
      packaging: 'Frasco de borosilicato 60ml con tapa torneada',
      hebras: 'Aprox. 120 folículos pectorales curados',
      textura: 'Ondulación natural suave y elástica',
      origen: 'Donantes certificados clase A'
    },
    desc: 'Selección natural cuidadosamente preparada. Hebra pectoral virgen con curvatura elástica en atmósfera libre de oxígeno.',
    image: 'assets/images/products/product_chest.jpg',
    fullDesc: 'La referencia fundacional de Pelos.com. Seleccionada meticulosamente hebra por hebra bajo espectrometría de queratina. Presentada en nuestro frasco cilíndrico de boticario de diseño con etiqueta minimalista y número de espécimen garantizado.',
    presentation: 'Incluye frasco de borosilicato con sello de lacre negro, tarjeta de procedencia numerada y caja rígida forrada en lino.'
  },
  {
    id: 'prod-02',
    name: 'Pelo de Espalda — Collection 001',
    category: 'espalda',
    categoryLabel: 'Pelo de Espalda',
    price: 65,
    badge: 'LIMITED',
    rating: '4.9 (92 reacciones)',
    specs: {
      packaging: 'Vial cilíndrico de espécimen con corcho',
      hebras: 'Longitud uniforme 4.8 cm',
      textura: 'Lacio sedoso, ultra-suave',
      origen: 'Corte en frío sin tratamiento térmico'
    },
    desc: 'Fibra dorsal de máxima suavidad y caída homogénea. Sometida a técnica de corte en frío para conservar la cutícula.',
    image: 'assets/img/pelos_vials_set.jpg',
    fullDesc: 'Extraída de la zona interescapular superior de donantes certificados. Cada vial incluye soporte de corcho de nogal y certificado de corte artesanal. Una suavidad táctil comparable a fibras nobles de cachemira.',
    presentation: 'Vial de laboratorio óptico, soporte de corcho grabado a fuego, precinto de seguridad y estuche de apertura magnética.'
  },
  {
    id: 'prod-03',
    name: 'Pelo de Axila — Collection 001',
    category: 'axila',
    categoryLabel: 'Pelo de Axilas',
    price: 52,
    badge: 'ALTA MEMORIA',
    rating: '4.8 (84 reacciones)',
    specs: {
      packaging: 'Sobre kraft sellado con cera negra artesanal',
      hebras: 'Espirales tridimensionales elásticas',
      textura: 'Rizado compacto de alta resiliencia',
      origen: 'Autoclave neutro farmacopea'
    },
    desc: 'Espirales compactas de gran resiliencia elástica. Esterilizado en autoclave farmacéutico con aroma neutro patentado.',
    image: 'assets/images/packaging/packaging_unboxing.jpg',
    fullDesc: 'El pelo axilar ofrece una fascinante curvatura helicoidal resistente a la compresión continuada. Cada sobre de papel verjurado contiene una cápsula protectora hermética y precinto de autenticidad Pelos.com.',
    presentation: 'Sobre verjurado de 280g con cera negra, cápsula interior hermética antiradiación UV y ficha técnica de torsión.'
  },
  {
    id: 'prod-04',
    name: 'Pelo de Barba — Collection 001',
    category: 'barba',
    categoryLabel: 'Pelo de Barba',
    price: 79,
    badge: 'NEW',
    rating: '4.9 (165 reacciones)',
    specs: {
      packaging: 'Frasco boticario ámbar con tapón moleteado',
      hebras: 'Cerdas recias 0.12mm diámetro',
      textura: 'Firmeza estructurada y brillo profundo',
      origen: 'Barberías de autor de Milán y Barcelona'
    },
    desc: 'Cerdas faciales de calibre superior y brillo natural. Cosechadas con técnica de barbero artesanal y peine de cuerno.',
    image: 'assets/images/products/product_beard.jpg',
    fullDesc: 'Hebra facial masculina de presencia contundente y estructura recia. Ideal para proyectos de diseño, coleccionismo botánico-folicular o apreciación táctil de alta textura y pureza queratínica.',
    presentation: 'Frasco de vidrio ámbar farmacéutico de 100ml, tapón estriado de latón mate y tarjeta de catalogación de barbero.'
  },
  {
    id: 'prod-05',
    name: 'Pelo de Brazos — Collection 001',
    category: 'brazos',
    categoryLabel: 'Pelo de Brazos',
    price: 49,
    badge: 'MICRO-FIBRA',
    rating: '4.9 (116 reacciones)',
    specs: {
      packaging: 'Vial minimalista numerado al vacío',
      hebras: 'Longitud sutil 2.2 cm',
      textura: 'Micro-ondulado aterciopelado',
      origen: 'Antebrazo radial libre de agentes'
    },
    desc: 'Vello sutil de antebrazo con reflejos dorados naturales. Tacto de terciopelo y pureza biológica impecable.',
    image: 'assets/images/products/product_arm.jpg',
    fullDesc: 'La opción más delicada y etérea de nuestro catálogo. Cosechado del antebrazo radial, libre de agentes contaminantes y protegido en viales de borosilicato sellados al vacío.',
    presentation: 'Tubo de ensayo graduado con soporte de aluminio anodizado negro y tarjeta de graduación micrométrica.'
  },
  {
    id: 'prod-06',
    name: 'Pelo de Piernas — Collection 001',
    category: 'piernas',
    categoryLabel: 'Pelo de Piernas',
    price: 58,
    badge: 'RESISTENCIA MAX',
    rating: '5.0 (104 reacciones)',
    specs: {
      packaging: 'Estuche cilíndrico protector negro mate',
      hebras: 'Calibre robusto 3.2 cm',
      textura: 'Firme e inalterable',
      origen: 'Atletas certificados de pista'
    },
    desc: 'Fibra tibial con elevado contenido de queratina pura. Estructura robusta, consistente y de durabilidad inalterable.',
    image: 'assets/img/pelos_packaging_set.jpg',
    fullDesc: 'Extraído de la pantorrilla y tibia de deportistas de alto rendimiento. Posee un calibre transversal notable que resiste la tracción y conserva su porte bajo cualquier clima o condición ambiental.',
    presentation: 'Cilindro termoaislado con tapa roscada, sello de garantía inviolable y tarjeta con índice de elasticidad.'
  },
  {
    id: 'prod-07',
    name: 'Pack Degustación Cuatro Regiones',
    category: 'mixto',
    categoryLabel: 'Pack Mixto',
    price: 89,
    badge: 'BEST SELLER',
    rating: '5.0 (210 reacciones)',
    specs: {
      packaging: 'Caja rígida imantada con 4 micro-frascos',
      hebras: 'Pecho, Espalda, Brazos y Piernas',
      textura: 'Cuádruple contraste táctil de queratina',
      origen: 'Lotes emparejados armónicamente'
    },
    desc: 'La experiencia sensorial definitiva: reúne muestras curadas de 4 zonas anatómicas en frascos individuales independientes.',
    image: 'assets/images/packaging/packaging_unboxing.jpg',
    fullDesc: 'El pack predilecto para el comprador curioso o el regalo más inesperado del año. Incluye cofre rígido negro con 4 mini-frascos de 15ml etiquetados y una guía de apreciación folicular explicativa.',
    presentation: 'Cofre maestro con compartimentos de espuma de alta densidad, 4 micro-viales y folleto desplegable.'
  },
  {
    id: 'prod-08',
    name: 'Supreme Collection 2026 — Lote de Oro',
    category: 'premium',
    categoryLabel: 'Colección Premium',
    price: 120,
    badge: 'LIMITED',
    rating: '5.0 (178 reacciones)',
    specs: {
      packaging: 'Cofre de roble ahumado + lacre dorado',
      hebras: 'Selección microscópica 1 a 1',
      textura: 'Grado Folículo Dorado Grado AAA+',
      origen: 'Lote numerado 001/500 mundial'
    },
    desc: 'Probablemente el pelo más inesperado de tu carrito. Hebras irrepetibles presentadas en estuche de absoluto lujo.',
    image: 'assets/images/hero/hero_specimen.jpg',
    fullDesc: 'Porque nadie necesita otro producto aburrido. Cada hebra ha superado más de 14 pruebas de resistencia, simetría y luminosidad. Empaquetada en cofre rígido forrado en lino con precinto dorado de edición 2026.',
    presentation: 'Cofre artesanal de edición limitada, frasco joya con detalles en oro cepillado y certificado firmado.'
  },

  // COLECCIONES ESPECIALES (HÉROES)
  {
    id: 'prof-01',
    name: 'Bombero Primera Respuesta — Pectoral Ígneo',
    category: 'profesiones',
    categoryLabel: 'Colección Especial • Bombero',
    price: 89,
    badge: 'HÉROE CERTIFICADO',
    rating: '5.0 (230 reacciones)',
    specs: {
      packaging: 'Frasco térmico blindado con base de acero',
      hebras: 'Donante bombero de rescate físico',
      textura: 'Ondulado recio de alta tenacidad',
      origen: 'Brigada Forestal y Urbana'
    },
    desc: 'Pelo de pecho cosechado de bomberos de rescate físico. Fibras con alta resistencia térmica y porte inquebrantable.',
    image: 'assets/images/hero/hero_specimen.jpg',
    fullDesc: 'Cosechado tras intensas jornadas de entrenamiento táctico en estaciones de bomberos de montaña. Donantes atléticos de complexión fornida, con hebras pectorales gruesas de elasticidad y vigor superior.',
    presentation: 'Frasco resistente a impactos con precinto ignífugo y placa metálica conmemorativa de la brigada de honor.'
  },
  {
    id: 'prof-02',
    name: 'Policía Táctico — Antebrazo Disciplinado',
    category: 'profesiones',
    categoryLabel: 'Colección Especial • Policía',
    price: 79,
    badge: 'LIMITED',
    rating: '4.9 (184 reacciones)',
    specs: {
      packaging: 'Vial táctico con funda de silicona mate',
      hebras: 'Agente táctico fuerzas de intervención',
      textura: 'Micro-ondulado firme y rectilíneo',
      origen: 'Academia de Alta Seguridad'
    },
    desc: 'Vello de antebrazo y hombro de agentes tácticos. Folículos moldeados bajo rutina rigurosa y disciplina férrea.',
    image: 'assets/img/pelos_vials_set.jpg',
    fullDesc: 'Cada milímetro de esta hebra refleja disciplina espartana y rigor físico. Procedente de agentes con riguroso entrenamiento físico. Textura firme, tonalidad oscura intensa y presencia arrolladora.',
    presentation: 'Vial táctico antirreflejos, estuche rígido negro balístico y certificado de procedencia del servicio.'
  },
  {
    id: 'prof-03',
    name: 'Leñador Boreal — Torso Rústico Nórdico',
    category: 'profesiones',
    categoryLabel: 'Colección Especial • Leñador',
    price: 75,
    badge: 'EDICIÓN RÚSTICA',
    rating: '5.0 (312 reacciones)',
    specs: {
      packaging: 'Estuche kraft con viruta de pino aromático',
      hebras: 'Leñador de bosque subártico',
      textura: 'Cerdas gruesas, tupidas y recias',
      origen: 'Corte artesanal al aire libre'
    },
    desc: 'Auténtico pelo de pecho de leñadores del bosque boreal. Fuerza bruta, torso amplio y 100% corte al aire libre.',
    image: 'assets/images/products/product_chest.jpg',
    fullDesc: 'Cosechado en aserraderos artesanales de clima subártico. Fibras con una queratina ultrapesada y textura vigorosa curtida por el viento frío del norte y el esfuerzo físico sostenido.',
    presentation: 'Caja de madera con virutas protectoras de pino nórdico, frasco con tapón de cera y tarjeta rústica numerada.'
  },
  {
    id: 'prof-04',
    name: 'Cirujano Cardiovascular — Pectoral Clínico',
    category: 'profesiones',
    categoryLabel: 'Colección Especial • Doctor',
    price: 95,
    badge: 'NEW',
    rating: '4.9 (147 reacciones)',
    specs: {
      packaging: 'Frasco sellado aséptico grado laboratorio',
      hebras: 'Cirujano especialista certificado',
      textura: 'Fina, simétrica y de brillo prístino',
      origen: 'Protocolo de higiene hospitalaria'
    },
    desc: 'Pelo de pecho y cuello de distinguidos médicos especialistas. Manos firmes, mente brillante y porte refinado.',
    image: 'assets/images/hero/hero_specimen.jpg',
    fullDesc: 'La combinación definitiva de mente brillante y rigor estético. Extraído en condiciones de asepsia médica absoluta tras guardias hospitalarias. Simetría folicular calibrada milimétricamente.',
    presentation: 'Estuche blanco perla con sello de esterilidad hospitalaria, frasco de cuarzo óptico y tarjeta holográfica.'
  }
];

// 2. STATE MANAGEMENT: Carrito Persistente
class CartState {
  constructor() {
    this.items = this.loadCart();
    this.listeners = [];
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('pelos_cart_v3');
      if (saved) return JSON.parse(saved);
      const old = localStorage.getItem('pelos_cart_v2') || localStorage.getItem('pelos_cart');
      return old ? JSON.parse(old) : [];
    } catch (e) {
      console.warn('LocalStorage no disponible.', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('pelos_cart_v3', JSON.stringify(this.items));
    } catch (e) {
      console.warn('Error al guardar carrito', e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  addItem(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const qty = Math.max(1, parseInt(quantity, 10) || 1);
    const existing = this.items.find(item => item.id === productId);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.categoryLabel,
        quantity: qty
      });
    }
    this.saveCart();
  }

  updateQuantity(productId, delta) {
    const item = this.items.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    this.saveCart();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  clear() {
    this.items = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}

// 3. UI CONTROLLER & FILTROS
const cart = new CartState();
let activeCategory = 'todos';
let searchQuery = '';
let activeSort = 'featured';
const cardQuantities = {};

// Elementos del DOM
const productsGrid = document.getElementById('products-grid');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartOpenBtn = document.getElementById('cart-open-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartBadge = document.getElementById('cart-badge');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartCheckoutBtn = document.getElementById('cart-checkout-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const toastNotice = document.getElementById('toast-notice');
const toastMsg = document.getElementById('toast-msg');

// Modales
const quickViewModal = document.getElementById('quick-view-modal');
const checkoutModal = document.getElementById('checkout-modal');
const quickViewContent = document.getElementById('quick-view-content');
const isRealModal = document.getElementById('is-real-modal');
const openIsRealBtn = document.getElementById('open-is-real-btn');
const closeIsRealBtn = document.getElementById('close-is-real-btn');

// 4. LOADING SCREEN CORTO: "PEINANDO EL SITIO..." -> "LISTO."
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingStatusText = document.getElementById('loading-status-text');
  const progressBar = document.getElementById('loading-progress-bar');

  if (!loadingScreen) return;

  if (progressBar) progressBar.style.width = '70%';

  setTimeout(() => {
    if (loadingStatusText) loadingStatusText.textContent = 'LISTO. BIENVENIDO.';
    if (progressBar) progressBar.style.width = '100%';
  }, 450);

  setTimeout(() => {
    loadingScreen.classList.add('loading-fade-out');
    setTimeout(() => {
      loadingScreen.remove();
    }, 400);
  }, 850);
}

// 5. FILTRADO, BÚSQUEDA Y ORDENAMIENTO
function getFilteredAndSortedProducts() {
  let list = [...PRODUCTS];

  if (activeCategory === 'pecho') {
    list = list.filter(p => p.category === 'pecho');
  } else if (activeCategory === 'espalda') {
    list = list.filter(p => p.category === 'espalda');
  } else if (activeCategory === 'axila') {
    list = list.filter(p => p.category === 'axila');
  } else if (activeCategory === 'barba') {
    list = list.filter(p => p.category === 'barba');
  } else if (activeCategory === 'brazos') {
    list = list.filter(p => p.category === 'brazos');
  } else if (activeCategory === 'piernas') {
    list = list.filter(p => p.category === 'piernas');
  } else if (activeCategory === 'profesiones') {
    list = list.filter(p => p.category === 'profesiones');
  } else if (activeCategory === 'mixto') {
    list = list.filter(p => p.category === 'mixto' || p.category === 'premium');
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.fullDesc.toLowerCase().includes(q)
    );
  }

  if (activeSort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'newest') {
    list.reverse();
  }

  return list;
}

function renderProducts() {
  if (!productsGrid) return;
  const filtered = getFilteredAndSortedProducts();

  productsGrid.innerHTML = '';

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products-box" style="grid-column: 1/-1; text-align: center; padding: 70px 20px; background: #FFFFFF; border: 1px dashed var(--border-light); border-radius: var(--radius-md);">
        <div style="font-size: 2.2rem; margin-bottom: 12px; color: var(--accent-gold);">🔍</div>
        <h4 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700;">No encontramos pelos para "${searchQuery}"</h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 6px; max-width: 440px; margin-left: auto; margin-right: auto;">
          Intenta con términos como "pecho", "barba", "espalda", "axila" o "héroes".
        </p>
        <button class="btn-secondary" style="margin-top: 18px;" onclick="window.resetFilters()">
          Restablecer Búsqueda
        </button>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    if (!cardQuantities[product.id]) {
      cardQuantities[product.id] = 1;
    }

    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-media">
        <span class="product-badge-overlay badge ${product.badge === 'BEST SELLER' || product.badge === 'LIMITED' ? 'badge-gold' : 'badge-dark'}">
          ${product.badge}
        </span>
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy" />
        <button class="quick-view-btn" data-product-id="${product.id}" type="button" aria-label="Ver detalles de ${product.name}">
          Detalle de Pieza
        </button>
      </div>

      <div class="product-body">
        <div class="product-header-line">
          <span class="product-category-tag">${product.categoryLabel}</span>
          <span class="product-origin-pill">Lote 2026</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        
        <div class="product-specs">
          <span><strong>Empaque:</strong> ${product.specs.packaging}</span>
        </div>

        <div class="product-price-row">
          <div class="price-box">
            <span class="price-currency">Precio Oficial</span>
            <span class="price-amount">$${product.price} <small>USD</small></span>
          </div>
          <span class="product-stock-status">✓ En stock</span>
        </div>

        <!-- Selector de Cantidad y Botón de Compra -->
        <div class="product-card-controls">
          <div class="card-qty-wrapper">
            <span class="card-qty-label">Cant:</span>
            <div class="card-qty-box">
              <button type="button" class="card-qty-btn" onclick="window.changeCardQty('${product.id}', -1)" aria-label="Restar 1">-</button>
              <span class="card-qty-display" id="card-qty-${product.id}">${cardQuantities[product.id]}</span>
              <button type="button" class="card-qty-btn" onclick="window.changeCardQty('${product.id}', 1)" aria-label="Sumar 1">+</button>
            </div>
          </div>

          <button class="btn-add-cart" data-product-id="${product.id}" type="button" aria-label="Agregar ${product.name} al carrito">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  attachProductEvents();
}

function attachProductEvents() {
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-product-id');
      const qty = cardQuantities[id] || 1;
      cart.addItem(id, qty);
      const product = PRODUCTS.find(p => p.id === id);
      showToast(`PELO AGREGADO: ${qty}x "${product.name}". Tu carrito acaba de ponerse interesante.`);
      
      btn.style.transform = 'scale(0.97)';
      setTimeout(() => { btn.style.transform = ''; }, 150);
    });
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-product-id');
      openQuickView(id);
    });
  });
}

// 6. RENDER DEL CARRITO
function renderCart(state) {
  const count = state.getTotalCount();
  if (cartBadge) {
    cartBadge.textContent = count;
    cartBadge.style.transform = 'scale(1.25)';
    setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
  }

  const subtotal = state.getSubtotal();
  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `$${subtotal} USD`;
  }

  const freeShippingBar = document.getElementById('free-shipping-tracker');
  if (freeShippingBar) {
    if (subtotal >= 100) {
      freeShippingBar.innerHTML = '✨ <strong>¡Felicidades!</strong> Tu pedido califica para <strong>Envío Internacional Gratuito</strong> y empaque sellado.';
    } else {
      const diff = 100 - subtotal;
      freeShippingBar.innerHTML = `📦 Agrega <strong>$${diff} USD</strong> más para obtener <strong>Envío Internacional Gratuito</strong>.`;
    }
  }

  if (!cartItemsContainer) return;

  if (state.items.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-msg">
        <div class="empty-cart-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <h4>Tu bolsa de pelos está vacía</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          Explora nuestras colecciones. Recuerda: <strong>Compras pelos, ayudas a un peludo.</strong>
        </p>
      </div>
    `;
    if (cartCheckoutBtn) cartCheckoutBtn.disabled = true;
    return;
  }

  if (cartCheckoutBtn) cartCheckoutBtn.disabled = false;

  cartItemsContainer.innerHTML = state.items.map(item => `
    <div class="cart-item-row" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">$${item.price} USD</div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn" onclick="window.cartApp.updateQty('${item.id}', -1)" aria-label="Disminuir cantidad">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="window.cartApp.updateQty('${item.id}', 1)" aria-label="Aumentar cantidad">+</button>
          </div>
          <button class="remove-item-btn" onclick="window.cartApp.removeItem('${item.id}')">Eliminar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// 7. MODALES & QUICK VIEW
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !quickViewModal || !quickViewContent) return;

  const currentQty = cardQuantities[product.id] || 1;

  quickViewContent.innerHTML = `
    <div class="modal-content-grid">
      <div class="modal-media">
        <img src="${product.image}" alt="${product.name}" />
        <div class="modal-media-caption">
          <span>Auténtica pieza de colección • Pelos.com</span>
        </div>
      </div>
      <div class="modal-details">
        <div class="modal-tags-row">
          <span class="badge ${product.badge === 'BEST SELLER' || product.badge === 'LIMITED' ? 'badge-gold' : 'badge-dark'}">
            ${product.badge}
          </span>
          <span class="product-category-tag">${product.categoryLabel}</span>
        </div>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-rating-row">
          <span class="modal-rating">★ ${product.rating}</span>
          <span class="modal-pill-tag">Edición Folicular</span>
        </div>

        <p class="modal-desc-lead">
          ${product.fullDesc}
        </p>

        <div class="modal-info-tabs">
          <div class="modal-info-block">
            <h4 class="modal-info-title">SOBRE ESTA COLECCIÓN</h4>
            <p class="modal-info-text">${product.specs.hebras} — Textura: ${product.specs.textura}. ${product.specs.origen}.</p>
          </div>
          <div class="modal-info-block">
            <h4 class="modal-info-title">PRESENTACIÓN & PACKAGING</h4>
            <p class="modal-info-text">${product.presentation}</p>
          </div>
        </div>

        <div class="modal-impact-note">
          <span class="impact-heart">🐾</span>
          <div style="font-size: 0.8rem; line-height: 1.4;">
            <strong>Compras pelos, ayudas a un peludo:</strong> El excedente operativo de esta compra apoya iniciativas de bienestar animal en <em>Pelos y Más Pelos</em>.
          </div>
        </div>

        <div class="modal-footer-cta">
          <div>
            <span style="font-size: 0.75rem; color: var(--text-muted); display: block; text-transform: uppercase; letter-spacing: 0.05em;">Tarifa Oficial</span>
            <span style="font-family: var(--font-heading); font-size: 1.7rem; font-weight: 800;">$${product.price} <small style="font-size: 0.9rem; font-weight: 600;">USD</small></span>
          </div>
          <button class="btn-primary" style="padding: 13px 26px;" onclick="window.cartApp.addToCartAndCloseModal('${product.id}', ${currentQty})">
            AGREGAR ${currentQty} A LA BOLSA
          </button>
        </div>
      </div>
    </div>
  `;

  quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

// 8. TOAST NOTIFICATIONS
let toastTimeout;
function showToast(message) {
  if (!toastNotice || !toastMsg) return;
  toastMsg.textContent = message;
  toastNotice.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastNotice.classList.remove('show');
  }, 3600);
}

// 9. FUNCIONALIDAD PARA COMPARTIR VIRAL
function setupShareActions() {
  const shareData = {
    title: 'Pelos.com — Sí. Vendemos pelos.',
    text: '¿De verdad alguien vende pelos? Sí. Y cada compra ayuda a un peludo. Descubre Pelos.com.',
    url: window.location.href
  };

  const nativeShareBtn = document.getElementById('share-native-btn');
  if (nativeShareBtn) {
    nativeShareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share(shareData);
          showToast('¡Gracias por compartir esta historia!');
        } catch (err) {
          if (err.name !== 'AbortError') copyToClipboard(shareData.url);
        }
      } else {
        copyToClipboard(shareData.url);
      }
    });
  }

  const copyLinkBtn = document.getElementById('share-copy-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      copyToClipboard(window.location.href);
    });
  }

  const shareWa = document.getElementById('share-wa-btn');
  if (shareWa) {
    shareWa.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent('Oye, no me vas a creer esto... Mira lo que venden en Pelos.com (¡y el excedente ayuda a un peludo!): ' + window.location.href);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }

  const shareX = document.getElementById('share-x-btn');
  if (shareX) {
    shareX.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent('“Compras pelos, ayudas a un peludo.” La tienda más inesperada que verás hoy: Pelos.com #PelosYMasPelos');
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    });
  }

  const shareFb = document.getElementById('share-fb-btn');
  if (shareFb) {
    shareFb.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    });
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('¡Enlace copiado! Mándaselo a quien no te va a creer.');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('¡Enlace copiado al portapapeles!');
}

// 10. EVENT LISTENERS GENERALES
function setupEvents() {
  // Drawer de Carrito
  if (cartOpenBtn) {
    cartOpenBtn.addEventListener('click', () => {
      cartDrawer.classList.add('active');
      cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeCart = () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Modal "¿ESTO ES REAL?"
  if (openIsRealBtn && isRealModal) {
    openIsRealBtn.addEventListener('click', () => {
      isRealModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeIsRealBtn) {
    closeIsRealBtn.addEventListener('click', () => {
      closeModals();
      const tienda = document.getElementById('tienda');
      if (tienda) tienda.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Cerrar modales con botones de cierre
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  // Tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeModals();
    }
  });

  // Filtros por Categoría
  const currentFilterBtns = document.querySelectorAll('.filter-btn');
  currentFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Buscador en tiempo real
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Ordenamiento select
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }

  // Menú Mobile
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Checkout Simulado: “UNA ÚLTIMA COSA.”
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      if (cart.items.length === 0) return;
      closeCart();
      if (checkoutModal) {
        checkoutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  const confirmOrderBtn = document.getElementById('confirm-order-btn');
  if (confirmOrderBtn) {
    confirmOrderBtn.addEventListener('click', () => {
      showToast('¡FINALIZADO! Gracias por creer en este proyecto absurdo y hermoso. ¡Ayudas a un peludo!');
      cart.clear();
      closeModals();
    });
  }

  // Newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && input.value) {
        showToast('¡Suscrito! Recibirás los reportes de cosecha y avances de la causa.');
        input.value = '';
      }
    });
  }

  setupShareActions();
}

// 11. HELPERS GLOBALES
window.changeCardQty = (productId, delta) => {
  const current = cardQuantities[productId] || 1;
  const updated = Math.max(1, current + delta);
  cardQuantities[productId] = updated;
  const el = document.getElementById(`card-qty-${productId}`);
  if (el) {
    el.textContent = updated;
    el.style.transform = 'scale(1.2)';
    setTimeout(() => { el.style.transform = 'scale(1)'; }, 150);
  }
};

window.filterByCat = (category) => {
  const target = document.getElementById('tienda');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  const btn = document.querySelector(`.filter-btn[data-category="${category}"]`);
  if (btn) {
    btn.click();
  }
};

window.resetFilters = () => {
  activeCategory = 'todos';
  searchQuery = '';
  activeSort = 'featured';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'todos');
  });
  renderProducts();
};

window.cartApp = {
  updateQty: (id, delta) => cart.updateQuantity(id, delta),
  removeItem: (id) => {
    cart.removeItem(id);
    showToast('Producto removido de la bolsa');
  },
  addToCartAndCloseModal: (id, qty = 1) => {
    cart.addItem(id, qty);
    closeModals();
    const product = PRODUCTS.find(p => p.id === id);
    showToast(`PELO AGREGADO: ${qty}x "${product.name}". Tu compra ayuda a un peludo.`);
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  }
};

// 12. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  renderProducts();
  cart.subscribe(renderCart);
  setupEvents();
});
