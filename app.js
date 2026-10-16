/**
 * Saffron & Hearth — Interactive Restaurant Slot Booking, Pre-Order & Call Hub
 */

// ---------------------------------------------------------------------------
// 1. Curated Seasonal Menu Data (Strictly 4 key data points per card)
// ---------------------------------------------------------------------------
const MENU_ITEMS = [
  {
    id: 'starter-1',
    title: 'Wood-Blistered Flatbread & Whipped Bone Marrow',
    price: 18,
    category: 'starters',
    desc: '24-hour fermented sourdough charred over white oak, roasted garlic confit, flaky sea salt.',
    tag: "Chef's Special",
    dietary: ["Chef's Special"],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'starter-2',
    title: 'Charred Heirloom Carrots & Pistachio Labneh',
    price: 19,
    category: 'starters',
    desc: 'Hearth-roasted rainbow carrots, citrus blossom honey, crushed Iranian pistachios, dill.',
    tag: 'Vegetarian',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'starter-3',
    title: 'Ember-Seared Hokkaido Scallops',
    price: 26,
    category: 'starters',
    desc: 'Saffron brown butter emulsion, crispy capers, charred Meyer lemon, sea fennel.',
    tag: 'Gluten-Free',
    dietary: ['Gluten-Free', "Chef's Special"],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'main-1',
    title: 'Saffron & Ember Smoked Lamb Rack',
    price: 42,
    category: 'mains',
    desc: 'Charred pomegranate glaze, whipped tahini labneh, crispy wild sage, coal-roasted shallots.',
    tag: "Chef's Special",
    dietary: ["Chef's Special", 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'main-2',
    title: 'Oak-Fired Wild Pacific Halibut',
    price: 38,
    category: 'mains',
    desc: 'Roasted fennel broth, blistered sungold tomatoes, saffron rouille, grilled sea beans.',
    tag: 'Gluten-Free',
    dietary: ['Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'main-3',
    title: 'Hearth-Roasted Maitake & Black Truffle Risotto',
    price: 32,
    category: 'mains',
    desc: 'Acquerello carnaroli rice, smoked pecorino, wood-charred maitake cluster, aged balsamic.',
    tag: 'Vegetarian',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'main-4',
    title: '36-Day Dry-Aged Ribeye for the Table',
    price: 68,
    category: 'mains',
    desc: '16oz bone-in prime ribeye crusted in smoked Tellicherry pepper, bone marrow jus, watercress.',
    tag: "Chef's Special",
    dietary: ["Chef's Special", 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'side-1',
    title: 'Crispy Duck-Fat Fingerling Potatoes',
    price: 14,
    category: 'sides',
    desc: 'Smashed & crisped in cast iron, smoked rosemary salt, roasted garlic aioli.',
    tag: 'Gluten-Free',
    dietary: ['Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'side-2',
    title: 'Coal-Charred Broccolini & Preserved Lemon',
    price: 15,
    category: 'sides',
    desc: 'Toasted Marcona almonds, Calabrian chili oil, aged ricotta salata shavings.',
    tag: 'Vegetarian',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dessert-1',
    title: 'Burnt Honey & Saffron Basque Cheesecake',
    price: 16,
    category: 'desserts',
    desc: 'Caramelized crust, warm cardamom fig compote, flaky Maldon sea salt.',
    tag: 'Vegetarian',
    dietary: ['Vegetarian', "Chef's Special"],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dessert-2',
    title: 'Smoked Dark Chocolate Tart & Olive Oil Gelato',
    price: 17,
    category: 'desserts',
    desc: '70% Valrhona ganache infused with ember smoke, cold-pressed Tuscan olive oil.',
    tag: 'Vegetarian',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dessert-3',
    title: 'Smoked Blood Orange & Saffron Negroni (Zero / Full)',
    price: 18,
    category: 'desserts',
    desc: 'Botanical gin or house non-alcoholic aperitivo, saffron vermouth, charred orange peel.',
    tag: 'Gluten-Free',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80'
  }
];

// ---------------------------------------------------------------------------
// 2. Base Time-Slot Definitions
// ---------------------------------------------------------------------------
const BASE_SLOTS = [
  { time: '12:00', service: 'lunch', baseState: 'available' },
  { time: '12:30', service: 'lunch', baseState: 'available' },
  { time: '13:00', service: 'lunch', baseState: 'limited' },
  { time: '13:30', service: 'lunch', baseState: 'available' },
  { time: '14:00', service: 'lunch', baseState: 'available' },
  { time: '14:30', service: 'lunch', baseState: 'booked' },
  { time: '17:30', service: 'dinner', baseState: 'available' },
  { time: '18:00', service: 'dinner', baseState: 'available' },
  { time: '18:30', service: 'dinner', baseState: 'available' },
  { time: '19:00', service: 'dinner', baseState: 'available' },
  { time: '19:30', service: 'dinner', baseState: 'limited' },
  { time: '20:00', service: 'dinner', baseState: 'booked' },
  { time: '20:15', service: 'dinner', baseState: 'available' },
  { time: '20:45', service: 'dinner', baseState: 'limited' },
  { time: '21:00', service: 'dinner', baseState: 'available' },
  { time: '21:30', service: 'dinner', baseState: 'available' }
];

// ---------------------------------------------------------------------------
// 3. Application State
// ---------------------------------------------------------------------------
const state = {
  // Booking selections
  selectedDateISO: '',
  selectedDateLabel: 'Today',
  guests: 2,
  zone: 'Main Hearth Room',
  table: 'Table H4 · Hearthside',
  serviceFilter: 'all',
  selectedSlot: '19:00',
  occasion: 'Casual Dining',

  // Menu & Pre-order state
  menuCategory: 'all',
  activeDietary: new Set(),
  searchQuery: '',
  preOrderCart: [], // Array of { id, title, price, qty }

  // Saved bookings in localStorage
  savedBookings: [],
  lastConfirmedBooking: null,

  // Callback widget state
  cbTopic: 'Book / Adjust Slot',
  cbUrgency: 'Immediately (~2 mins)',
  cbIntervalId: null,

  // Web call simulator timer
  webCallIntervalId: null,
  webCallSeconds: 4
};

// ---------------------------------------------------------------------------
// 4. Utility Helpers
// ---------------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

function formatDateDisplay(isoDateStr) {
  if (!isoDateStr) return 'Today';
  const [y, m, d] = isoDateStr.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const shortMonthDay = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
  const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

  if (dateObj.getTime() === today.getTime()) {
    return `Today, ${shortMonthDay}`;
  }
  if (dateObj.getTime() === tomorrow.getTime()) {
    return `Tomorrow, ${shortMonthDay}`;
  }
  return `${weekday}, ${shortMonthDay}`;
}

function toLocalISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function loadSavedBookings() {
  try {
    const raw = localStorage.getItem('saffron_hearth_bookings');
    if (raw) {
      state.savedBookings = JSON.parse(raw);
    }
  } catch (e) {
    state.savedBookings = [];
  }
  updateSavedBookingsBadge();
}

function saveBookingsToStorage() {
  try {
    localStorage.setItem('saffron_hearth_bookings', JSON.stringify(state.savedBookings));
  } catch (e) {
    // Ignore storage quota errors
  }
  updateSavedBookingsBadge();
}

function updateSavedBookingsBadge() {
  const badge = document.getElementById('savedBookingsBadge');
  if (badge) {
    badge.textContent = String(state.savedBookings.length);
  }
}

// ---------------------------------------------------------------------------
// 5. Initialize Date Pills & Date Picker
// ---------------------------------------------------------------------------
function initDateControls() {
  const pillsContainer = document.getElementById('dateQuickPills');
  const dateInput = document.getElementById('bookingDateInput');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const quickDates = [0, 1, 2].map((offset) => {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    const iso = toLocalISO(d);
    const label = offset === 0 ? 'Today' : offset === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const sub = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return { iso, label, sub };
  });

  state.selectedDateISO = quickDates[0].iso;
  state.selectedDateLabel = formatDateDisplay(state.selectedDateISO);

  if (dateInput) {
    dateInput.min = quickDates[0].iso;
    dateInput.value = state.selectedDateISO;
  }

  function renderQuickDatePills() {
    if (!pillsContainer) return;
    pillsContainer.innerHTML = '';
    quickDates.forEach((qd) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `date-pill-btn ${state.selectedDateISO === qd.iso ? 'active' : ''}`;
      btn.innerHTML = `
        <span>${qd.label}</span>
        <span class="date-pill-sub mono-text">${qd.sub}</span>
      `;
      btn.addEventListener('click', () => {
        state.selectedDateISO = qd.iso;
        state.selectedDateLabel = formatDateDisplay(qd.iso);
        if (dateInput) dateInput.value = qd.iso;
        renderQuickDatePills();
        renderTimeSlots();
        updateLiveTicket();
      });
      pillsContainer.appendChild(btn);
    });
  }

  renderQuickDatePills();

  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      if (!e.target.value) return;
      state.selectedDateISO = e.target.value;
      state.selectedDateLabel = formatDateDisplay(e.target.value);
      renderQuickDatePills();
      renderTimeSlots();
      updateLiveTicket();
    });
  }
}

// ---------------------------------------------------------------------------
// 6. Guest Stepper & Seating Zone Controls
// ---------------------------------------------------------------------------
function initGuestAndZoneControls() {
  const minusBtn = document.getElementById('guestMinusBtn');
  const plusBtn = document.getElementById('guestPlusBtn');
  const countDisplay = document.getElementById('guestCountDisplay');
  const unitDisplay = document.getElementById('guestUnitDisplay');
  const largePartyBanner = document.getElementById('largePartyBanner');
  const presetBtns = document.querySelectorAll('.preset-pill');

  function syncGuestUI() {
    if (countDisplay) countDisplay.textContent = String(state.guests);
    if (unitDisplay) unitDisplay.textContent = state.guests === 1 ? 'Guest' : 'Guests';

    presetBtns.forEach((btn) => {
      const val = Number(btn.dataset.guests);
      if ((val === 8 && state.guests >= 8) || val === state.guests) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (largePartyBanner) {
      if (state.guests >= 8) {
        largePartyBanner.classList.remove('hidden');
      } else {
        largePartyBanner.classList.add('hidden');
      }
    }

    // Update table assignment label for larger parties
    updateAssignedTableForZone();
    renderTimeSlots();
    updateLiveTicket();
  }

  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      if (state.guests > 1) {
        state.guests -= 1;
        syncGuestUI();
      }
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      if (state.guests < 14) {
        state.guests += 1;
        syncGuestUI();
      }
    });
  }

  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.guests = Number(btn.dataset.guests);
      syncGuestUI();
    });
  });

  // Seating Zone Cards
  const zoneCards = document.querySelectorAll('.zone-card');
  const zoneBadge = document.getElementById('selectedZoneBadge');

  zoneCards.forEach((card) => {
    card.addEventListener('click', () => {
      zoneCards.forEach((c) => {
        c.classList.remove('active');
        c.setAttribute('aria-checked', 'false');
      });
      card.classList.add('active');
      card.setAttribute('aria-checked', 'true');
      state.zone = card.dataset.zone;
      if (zoneBadge) zoneBadge.textContent = state.zone;
      updateAssignedTableForZone();
      renderTimeSlots();
      updateLiveTicket();
    });
  });

  // Service Filter Tabs
  const serviceTabs = document.querySelectorAll('.service-tab');
  serviceTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      serviceTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.serviceFilter = tab.dataset.service;
      renderTimeSlots();
    });
  });

  // Occasion Pills
  const occasionPills = document.querySelectorAll('.occasion-pill');
  occasionPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      occasionPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      state.occasion = pill.dataset.occasion;
      updateLiveTicket();
    });
  });
}

function updateAssignedTableForZone() {
  const g = state.guests;
  if (state.zone === 'Main Hearth Room') {
    state.table = g <= 2 ? 'Table H4 · Hearthside' : g <= 5 ? 'Table H8 · Center Hearth' : 'Long Oak Table H12';
  } else if (state.zone === "Chef's Counter") {
    state.table = g === 1 ? 'Counter Seat C1' : `Counter Seats C1–C${g}`;
  } else if (state.zone === 'Botanical Patio') {
    state.table = g <= 4 ? 'Pergola Table P2' : 'Olive Tree Table P7';
  } else {
    state.table = g <= 4 ? 'Booth B1 · Quiet Alcove' : 'Cellar Vault Booth B4';
  }
}

// ---------------------------------------------------------------------------
// 7. Interactive Time-Slot Grid Renderer
// ---------------------------------------------------------------------------
function getSlotDynamicStatus(slotObj) {
  // Check if user already booked this exact date + time + zone in savedBookings
  const isUserBooked = state.savedBookings.some(
    (b) => b.dateISO === state.selectedDateISO && b.time === slotObj.time && b.zone === state.zone
  );
  if (isUserBooked) return 'booked';

  // Deterministic variation by zone & date so switching zones feels alive
  const zoneHash = state.zone.length + (state.selectedDateISO.charCodeAt(9) || 0);
  if (slotObj.time === '20:00' && state.zone === 'Main Hearth Room') return 'booked';
  if (slotObj.time === '19:00' && state.zone === "Chef's Counter" && zoneHash % 2 === 0) return 'limited';
  if (slotObj.time === '18:30' && state.zone === 'Botanical Patio') return 'limited';

  return slotObj.baseState;
}

function renderTimeSlots() {
  const container = document.getElementById('timeSlotsContainer');
  if (!container) return;
  container.innerHTML = '';

  const filtered = BASE_SLOTS.filter((s) =>
    state.serviceFilter === 'all' ? true : s.service === state.serviceFilter
  );

  // Ensure selectedSlot is still valid/available; if booked, pick first available
  const currentSelectedSlotObj = BASE_SLOTS.find((s) => s.time === state.selectedSlot);
  if (currentSelectedSlotObj && getSlotDynamicStatus(currentSelectedSlotObj) === 'booked') {
    const firstAvail = filtered.find((s) => getSlotDynamicStatus(s) !== 'booked');
    if (firstAvail) state.selectedSlot = firstAvail.time;
  }

  filtered.forEach((slot) => {
    const status = getSlotDynamicStatus(slot);
    const isSelected = state.selectedSlot === slot.time && status !== 'booked';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `slot-pill ${status} ${isSelected ? 'selected' : ''}`;
    btn.disabled = status === 'booked';

    let metaLabel = 'Available';
    if (status === 'limited') metaLabel = '1 table left';
    if (status === 'booked') metaLabel = 'Booked';
    if (isSelected) metaLabel = '✓ Selected';

    btn.innerHTML = `
      <span class="slot-time">${slot.time}</span>
      <span class="slot-meta">${metaLabel}</span>
    `;

    btn.addEventListener('click', () => {
      state.selectedSlot = slot.time;
      // If user is currently viewing a confirmed card, switch back to live draft card
      showLiveDraftTicket();
      renderTimeSlots();
      updateLiveTicket();
    });

    container.appendChild(btn);
  });
}

// ---------------------------------------------------------------------------
// 8. Hero Instant Quick-Slots Bar
// ---------------------------------------------------------------------------
function initHeroQuickSlots() {
  const pills = document.querySelectorAll('#heroQuickSlots .quick-slot-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const time = pill.dataset.quickTime;
      if (time) {
        state.selectedSlot = time;
        state.serviceFilter = 'all';
        // Reset service tabs UI
        document.querySelectorAll('.service-tab').forEach((t) => {
          t.classList.toggle('active', t.dataset.service === 'all');
        });
        showLiveDraftTicket();
        renderTimeSlots();
        updateLiveTicket();

        const bookingSec = document.getElementById('booking-section');
        if (bookingSec) {
          bookingSec.scrollIntoView({ behavior: 'smooth' });
        }
        showToast(`Time slot ${time} selected! Complete your details below.`);
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 9. Live Ticket Summary & Pre-Order Synchronization
// ---------------------------------------------------------------------------
function updateLiveTicket() {
  const summaryDate = document.getElementById('summaryDate');
  const summaryTime = document.getElementById('summaryTime');
  const summaryGuests = document.getElementById('summaryGuests');
  const summaryOccasion = document.getElementById('summaryOccasion');
  const summaryZone = document.getElementById('summaryZone');
  const summaryTable = document.getElementById('summaryTable');
  const submitPreview = document.getElementById('submitBtnSlotPreview');

  if (summaryDate) summaryDate.textContent = state.selectedDateLabel;
  if (summaryTime) summaryTime.textContent = state.selectedSlot;
  if (summaryGuests) summaryGuests.textContent = `${state.guests} ${state.guests === 1 ? 'Guest' : 'Guests'}`;
  if (summaryOccasion) summaryOccasion.textContent = state.occasion;
  if (summaryZone) summaryZone.textContent = state.zone;
  if (summaryTable) summaryTable.textContent = state.table;
  if (submitPreview) {
    submitPreview.textContent = `· ${state.selectedDateLabel.split(',')[0]} at ${state.selectedSlot}`;
  }

  renderTicketPreorderTray();
}

function renderTicketPreorderTray() {
  const listEl = document.getElementById('ticketPreorderList');
  const clearBtn = document.getElementById('clearPreorderBtn');
  const headerCount = document.getElementById('headerTrayCount');

  const totalItems = state.preOrderCart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = state.preOrderCart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (headerCount) {
    headerCount.textContent = String(totalItems);
    headerCount.classList.toggle('has-items', totalItems > 0);
  }

  if (!listEl) return;

  if (state.preOrderCart.length === 0) {
    if (clearBtn) clearBtn.classList.add('hidden');
    listEl.innerHTML = `
      <p class="empty-preorder-hint">
        No dishes pre-selected yet. <a href="#menu-section">Browse the menu below</a> to pre-order dishes for your table!
      </p>
    `;
    return;
  }

  if (clearBtn) clearBtn.classList.remove('hidden');

  const rowsHtml = state.preOrderCart
    .map(
      (item) => `
      <div class="preorder-item-row">
        <span class="preorder-item-name">${item.qty}x ${item.title}</span>
        <div class="preorder-item-controls">
          <span class="mono-text">$${item.price * item.qty}</span>
          <button type="button" class="preorder-remove-btn" data-remove-id="${item.id}" aria-label="Remove ${item.title}">&times;</button>
        </div>
      </div>
    `
    )
    .join('');

  listEl.innerHTML = `
    ${rowsHtml}
    <div class="preorder-total-row">
      <span>Estimated Table Pre-Order</span>
      <span class="mono-text">$${totalPrice}</span>
    </div>
  `;

  listEl.querySelectorAll('[data-remove-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      removePreorderDish(btn.dataset.removeId);
    });
  });
}

function togglePreorderDish(dishId) {
  const dish = MENU_ITEMS.find((m) => m.id === dishId);
  if (!dish) return;

  const existingIndex = state.preOrderCart.findIndex((i) => i.id === dishId);
  if (existingIndex > -1) {
    state.preOrderCart.splice(existingIndex, 1);
    showToast(`Removed "${dish.title}" from table pre-order.`);
  } else {
    state.preOrderCart.push({
      id: dish.id,
      title: dish.title,
      price: dish.price,
      qty: 1
    });
    showToast(`Added "${dish.title}" to your table reservation tray!`);
  }

  renderMenuGrid();
  renderTicketPreorderTray();
  syncHeroSpecialBtn();
}

function removePreorderDish(dishId) {
  state.preOrderCart = state.preOrderCart.filter((i) => i.id !== dishId);
  renderMenuGrid();
  renderTicketPreorderTray();
  syncHeroSpecialBtn();
}

function syncHeroSpecialBtn() {
  const heroBtn = document.getElementById('heroAddSpecialBtn');
  if (!heroBtn) return;
  const inCart = state.preOrderCart.some((i) => i.id === 'main-1');
  heroBtn.innerHTML = inCart
    ? '<span>✓ Added to Table Pre-Order</span>'
    : '<span>+ Pre-Order for Your Table</span>';
}

// ---------------------------------------------------------------------------
// 10. Reservation Submission & Confirmation Workflow
// ---------------------------------------------------------------------------
function showLiveDraftTicket() {
  const liveCard = document.getElementById('liveTicketCard');
  const confCard = document.getElementById('confirmedTicketCard');
  if (liveCard) liveCard.classList.remove('hidden');
  if (confCard) confCard.classList.add('hidden');
}

function initReservationForm() {
  const form = document.getElementById('reservationForm');
  const nameInput = document.getElementById('guestNameInput');
  const phoneInput = document.getElementById('guestPhoneInput');
  const notesInput = document.getElementById('guestNotesInput');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');

  const clearBtn = document.getElementById('clearPreorderBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.preOrderCart = [];
      renderMenuGrid();
      renderTicketPreorderTray();
      syncHeroSpecialBtn();
    });
  }

  const headerTrayBtn = document.getElementById('headerTrayBtn');
  if (headerTrayBtn) {
    headerTrayBtn.addEventListener('click', () => {
      const ticketEl = document.getElementById('booking-section');
      if (ticketEl) ticketEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const phoneVal = phoneInput ? phoneInput.value.trim() : '';

    if (nameError) nameError.textContent = '';
    if (phoneError) phoneError.textContent = '';

    if (nameVal.length < 2) {
      if (nameError) nameError.textContent = 'Please enter your full name.';
      valid = false;
    }

    const digitsOnly = phoneVal.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      if (phoneError) phoneError.textContent = 'Please enter a valid contact phone number.';
      valid = false;
    }

    if (!valid) return;

    const refNum = Math.floor(1000 + Math.random() * 9000);
    const bookingRecord = {
      ref: `#SH-${refNum}`,
      name: nameVal,
      phone: phoneVal,
      dateISO: state.selectedDateISO,
      dateLabel: state.selectedDateLabel,
      time: state.selectedSlot,
      guests: state.guests,
      zone: state.zone,
      table: state.table,
      occasion: state.occasion,
      notes: notesInput ? notesInput.value.trim() : '',
      preOrder: [...state.preOrderCart],
      createdAt: new Date().toISOString()
    };

    state.lastConfirmedBooking = bookingRecord;
    state.savedBookings.unshift(bookingRecord);
    saveBookingsToStorage();

    renderConfirmedTicket(bookingRecord);
    renderTimeSlots();
    showToast(`Reservation ${bookingRecord.ref} confirmed for ${bookingRecord.time}!`);
  });

  // Confirmed Ticket Action Buttons
  const copyRefBtn = document.getElementById('copyRefBtn');
  if (copyRefBtn) {
    copyRefBtn.addEventListener('click', () => {
      if (!state.lastConfirmedBooking) return;
      navigator.clipboard?.writeText(state.lastConfirmedBooking.ref);
      copyRefBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyRefBtn.textContent = 'Copy Code';
      }, 2000);
    });
  }

  const downloadCalendarBtn = document.getElementById('downloadCalendarBtn');
  if (downloadCalendarBtn) {
    downloadCalendarBtn.addEventListener('click', () => {
      if (!state.lastConfirmedBooking) return;
      downloadICSFile(state.lastConfirmedBooking);
    });
  }

  const modifyBookingBtn = document.getElementById('modifyBookingBtn');
  if (modifyBookingBtn) {
    modifyBookingBtn.addEventListener('click', () => {
      if (state.lastConfirmedBooking) {
        // Remove the just-booked entry so user can pick a different time slot
        state.savedBookings = state.savedBookings.filter(
          (b) => b.ref !== state.lastConfirmedBooking.ref
        );
        saveBookingsToStorage();
      }
      showLiveDraftTicket();
      renderTimeSlots();
      showToast('Select your updated time slot or party size.');
    });
  }

  const cancelBookingBtn = document.getElementById('cancelBookingBtn');
  if (cancelBookingBtn) {
    cancelBookingBtn.addEventListener('click', () => {
      if (state.lastConfirmedBooking) {
        state.savedBookings = state.savedBookings.filter(
          (b) => b.ref !== state.lastConfirmedBooking.ref
        );
        saveBookingsToStorage();
      }
      showLiveDraftTicket();
      renderTimeSlots();
      showToast('Reservation slot released.');
    });
  }

  const newBookingBtn = document.getElementById('newBookingBtn');
  if (newBookingBtn) {
    newBookingBtn.addEventListener('click', () => {
      if (nameInput) nameInput.value = '';
      if (notesInput) notesInput.value = '';
      state.preOrderCart = [];
      showLiveDraftTicket();
      renderMenuGrid();
      renderTimeSlots();
      updateLiveTicket();
    });
  }
}

function renderConfirmedTicket(booking) {
  const liveCard = document.getElementById('liveTicketCard');
  const confCard = document.getElementById('confirmedTicketCard');
  if (liveCard) liveCard.classList.add('hidden');
  if (confCard) confCard.classList.remove('hidden');

  const firstName = booking.name.split(' ')[0];
  document.getElementById('confirmedGuestTitle').textContent = `See you soon, ${firstName}!`;
  document.getElementById('confirmedRefCode').textContent = booking.ref;
  document.getElementById('confDate').textContent = booking.dateLabel;
  document.getElementById('confTime').textContent = booking.time;
  document.getElementById('confGuests').textContent = `${booking.guests} ${booking.guests === 1 ? 'Guest' : 'Guests'}`;
  document.getElementById('confTable').textContent = booking.table.split('·')[0].trim();

  const extraEl = document.getElementById('confExtraDetails');
  if (extraEl) {
    const preorderText =
      booking.preOrder.length > 0
        ? `<div style="margin-top:6px;"><strong>Pre-Ordered Dishes (${booking.preOrder.length}):</strong> ${booking.preOrder
            .map((i) => `${i.qty}x ${i.title}`)
            .join(', ')}</div>`
        : '';
    const notesText = booking.notes
      ? `<div style="margin-top:4px;"><strong>Note:</strong> ${booking.notes}</div>`
      : '';

    extraEl.innerHTML = `
      <div><strong>Guest:</strong> ${booking.name} (<span class="mono-text">${booking.phone}</span>)</div>
      <div><strong>Atmosphere:</strong> ${booking.zone} · ${booking.occasion}</div>
      ${preorderText}
      ${notesText}
    `;
  }
}

function downloadICSFile(booking) {
  const [y, m, d] = booking.dateISO.split('-').map(Number);
  const [hr, min] = booking.time.split(':').map(Number);
  const start = new Date(y, m - 1, d, hr, min);
  const end = new Date(start.getTime() + 90 * 60000);

  const fmt = (dt) =>
    dt
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, '');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Saffron & Hearth//Table Reservations//EN',
    'BEGIN:VEVENT',
    `UID:${booking.ref}@saffronandhearth.local`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Dinner at Saffron & Hearth (${booking.guests} Guests - ${booking.ref})`,
    `LOCATION:742 Mercer St\\, Culinary District (Tel: 555-234-5678)`,
    `DESCRIPTION:Table Reservation ${booking.ref} in ${booking.zone} (${booking.table}). Host Desk: (555) 234-5678.`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Saffron-Hearth-${booking.ref.replace('#', '')}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Calendar invite (.ics) downloaded!');
}

// ---------------------------------------------------------------------------
// 11. Interactive Menu Filtering & Rendering
// ---------------------------------------------------------------------------
function initMenuShowcase() {
  const catTabs = document.querySelectorAll('#menuCategoryTabs .cat-tab');
  const dietPills = document.querySelectorAll('#dietaryFilterPills .diet-pill');
  const searchInput = document.getElementById('menuSearchInput');
  const heroAddBtn = document.getElementById('heroAddSpecialBtn');

  catTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      catTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.menuCategory = tab.dataset.category;
      renderMenuGrid();
    });
  });

  dietPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const diet = pill.dataset.diet;
      if (state.activeDietary.has(diet)) {
        state.activeDietary.delete(diet);
        pill.classList.remove('active');
      } else {
        state.activeDietary.add(diet);
        pill.classList.add('active');
      }
      renderMenuGrid();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      renderMenuGrid();
    });
  }

  if (heroAddBtn) {
    heroAddBtn.addEventListener('click', () => {
      togglePreorderDish('main-1');
    });
  }

  renderMenuGrid();
}

function renderMenuGrid() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const filtered = MENU_ITEMS.filter((item) => {
    if (state.menuCategory !== 'all' && item.category !== state.menuCategory) {
      return false;
    }
    if (state.activeDietary.size > 0) {
      for (const reqDiet of state.activeDietary) {
        if (!item.dietary.includes(reqDiet)) return false;
      }
    }
    if (state.searchQuery) {
      const hay = `${item.title} ${item.desc} ${item.tag}`.toLowerCase();
      if (!hay.includes(state.searchQuery)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-sand);">
        <p style="font-weight: 600; margin-bottom: 8px;">No dishes match your current filter combination.</p>
        <button type="button" class="btn btn-secondary btn-sm" id="resetMenuFiltersBtn">Reset Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetMenuFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.menuCategory = 'all';
        state.activeDietary.clear();
        state.searchQuery = '';
        const searchInput = document.getElementById('menuSearchInput');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('#menuCategoryTabs .cat-tab').forEach((t) =>
          t.classList.toggle('active', t.dataset.category === 'all')
        );
        document.querySelectorAll('#dietaryFilterPills .diet-pill').forEach((p) =>
          p.classList.remove('active')
        );
        renderMenuGrid();
      });
    }
    return;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const inCart = state.preOrderCart.some((c) => c.id === item.id);
      const badgeClass =
        item.tag === "Chef's Special" ? 'special' : item.tag === 'Vegetarian' ? 'veg' : '';

      return `
        <article class="menu-card">
          <div class="menu-card-img-wrap">
            <img src="${item.image}" alt="${item.title}" class="menu-card-img" loading="lazy" />
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-row">
              <h3 class="menu-card-title">${item.title}</h3>
              <span class="menu-card-price">$${item.price}</span>
            </div>
            <p class="menu-card-desc">${item.desc}</p>
            <div class="menu-card-footer">
              <span class="menu-tag-badge ${badgeClass}">${item.tag}</span>
              <button type="button" class="preorder-add-btn ${inCart ? 'added' : ''}" data-dish-id="${item.id}">
                ${inCart ? '✓ In Table Tray' : '+ Pre-Order'}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('.preorder-add-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      togglePreorderDish(btn.dataset.dishId);
    });
  });
}

// ---------------------------------------------------------------------------
// 12. Dedicated Call Hub, Copy Phone, Callback Tracker & Web Call Simulator
// ---------------------------------------------------------------------------
function initCallHub() {
  // Copy Phone Button
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  const copyPhoneText = document.getElementById('copyPhoneBtnText');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      const num = copyPhoneBtn.dataset.phone || '(555) 234-5678';
      navigator.clipboard?.writeText(num);
      if (copyPhoneText) copyPhoneText.textContent = 'Copied (555) 234-5678!';
      showToast('Host desk phone number copied to clipboard!');
      setTimeout(() => {
        if (copyPhoneText) copyPhoneText.textContent = 'Copy Number';
      }, 2500);
    });
  }

  // Callback Topic & Urgency Pills
  const topicPills = document.querySelectorAll('#cbTopicPills .cb-topic-pill');
  topicPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      topicPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      state.cbTopic = pill.dataset.topic;
    });
  });

  const urgencyPills = document.querySelectorAll('#cbUrgencyPills .cb-urgency-pill');
  urgencyPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      urgencyPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      state.cbUrgency = pill.dataset.urgency;
    });
  });

  // Callback Form Submission & Live Countdown
  const cbForm = document.getElementById('callbackForm');
  const cbTracker = document.getElementById('callbackLiveTracker');
  const cbNameInput = document.getElementById('cbNameInput');
  const cbPhoneInput = document.getElementById('cbPhoneInput');
  const cbPhoneError = document.getElementById('cbPhoneError');
  const resetCallbackBtn = document.getElementById('resetCallbackBtn');

  if (cbForm) {
    cbForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = cbNameInput ? cbNameInput.value.trim() : 'Guest';
      const phoneVal = cbPhoneInput ? cbPhoneInput.value.trim() : '';
      if (cbPhoneError) cbPhoneError.textContent = '';

      if (phoneVal.replace(/\D/g, '').length < 7) {
        if (cbPhoneError) cbPhoneError.textContent = 'Please enter a valid phone number for our host to call.';
        return;
      }

      cbForm.classList.add('hidden');
      if (cbTracker) cbTracker.classList.remove('hidden');

      document.getElementById('cbTrackerPhone').textContent = phoneVal;
      document.getElementById('cbTrackerSub').textContent = `${nameVal || 'Guest'} · ${state.cbTopic} (${state.cbUrgency})`;

      startCallbackCountdown();
      showToast(`Callback queued! Host Elena will call ${phoneVal} shortly.`);
    });
  }

  if (resetCallbackBtn) {
    resetCallbackBtn.addEventListener('click', () => {
      if (state.cbIntervalId) clearInterval(state.cbIntervalId);
      if (cbTracker) cbTracker.classList.add('hidden');
      if (cbForm) cbForm.classList.remove('hidden');
    });
  }

  // Interactive Web Call Modal
  const simulateCallBtn = document.getElementById('simulateCallBtn');
  const webCallModal = document.getElementById('webCallModal');
  const closeWebCallBtn = document.getElementById('closeWebCallBtn');
  const hangupWebCallBtn = document.getElementById('hangupWebCallBtn');
  const transcriptBox = document.getElementById('webCallTranscript');
  const statusText = document.getElementById('webCallStatusText');

  function openWebCallModal() {
    if (!webCallModal) return;
    webCallModal.classList.remove('hidden');
    state.webCallSeconds = 1;
    if (state.webCallIntervalId) clearInterval(state.webCallIntervalId);
    state.webCallIntervalId = setInterval(() => {
      state.webCallSeconds += 1;
      const mins = String(Math.floor(state.webCallSeconds / 60)).padStart(2, '0');
      const secs = String(state.webCallSeconds % 60).padStart(2, '0');
      if (statusText) statusText.textContent = `Connected · ${mins}:${secs}`;
    }, 1000);
  }

  function closeWebCallModal() {
    if (!webCallModal) return;
    webCallModal.classList.add('hidden');
    if (state.webCallIntervalId) clearInterval(state.webCallIntervalId);
  }

  if (simulateCallBtn) simulateCallBtn.addEventListener('click', openWebCallModal);
  if (closeWebCallBtn) closeWebCallBtn.addEventListener('click', closeWebCallModal);
  if (hangupWebCallBtn) {
    hangupWebCallBtn.addEventListener('click', () => {
      closeWebCallModal();
      showToast('Web call ended. Call (555) 234-5678 anytime!');
    });
  }

  // IVR Keypad responses inside Web Call Modal
  const ivrBtns = document.querySelectorAll('.ivr-btn');
  ivrBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.ivr;
      if (!transcriptBox) return;

      const responses = {
        '1': `<strong>Host Elena:</strong> "Tonight we have prime Hearth Room tables at <strong>18:00</strong> and <strong>19:30</strong>, plus Patio seating at <strong>18:30</strong>. Would you like me to lock 19:30 for you right now?" <br/><button type="button" class="btn btn-primary btn-sm" style="margin-top:8px;" id="ivrQuickLockBtn">Lock 19:30 Slot Now</button>`,
        '2': `<strong>Host Elena:</strong> "No problem at all! We hold all reserved tables for a full <strong>15 minutes</strong>, and if traffic is heavy we'll keep your table warm at the bar while you arrive."`,
        '3': `<strong>Host Elena:</strong> "Tonight's centerpiece is our <strong>Saffron &amp; Ember Smoked Lamb Rack ($42)</strong> and <strong>36-Day Dry-Aged Ribeye</strong> over white-oak coals."`,
        '4': `<strong>Host Elena:</strong> "We're at <strong>742 Mercer St</strong>. Pull right up to the brass lanterns out front—complimentary evening valet is on duty from 17:00."`
      };

      transcriptBox.innerHTML = `<p class="host-line">${responses[code] || responses['1']}</p>`;

      const quickLockBtn = document.getElementById('ivrQuickLockBtn');
      if (quickLockBtn) {
        quickLockBtn.addEventListener('click', () => {
          closeWebCallModal();
          state.selectedSlot = '19:30';
          showLiveDraftTicket();
          renderTimeSlots();
          updateLiveTicket();
          document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
          showToast('19:30 slot selected from Host Desk!');
        });
      }
    });
  });
}

function startCallbackCountdown() {
  if (state.cbIntervalId) clearInterval(state.cbIntervalId);
  let remaining = 115; // 01:55
  const timerEl = document.getElementById('cbCountdownTimer');
  const stepBadge = document.getElementById('cbStatusStep');

  state.cbIntervalId = setInterval(() => {
    remaining -= 1;
    if (remaining === 108 && stepBadge) {
      stepBadge.textContent = 'DIALING YOUR LINE SOON · HOST ELENA R.';
    }
    if (remaining <= 0) {
      clearInterval(state.cbIntervalId);
      if (timerEl) timerEl.textContent = 'CALLING NOW';
      return;
    }
    const m = String(Math.floor(remaining / 60)).padStart(2, '0');
    const s = String(remaining % 60).padStart(2, '0');
    if (timerEl) timerEl.textContent = `${m}:${s}`;
  }, 1000);
}

// ---------------------------------------------------------------------------
// 13. Saved Bookings Modal Drawer
// ---------------------------------------------------------------------------
function initSavedBookingsModal() {
  const openBtn = document.getElementById('openMyBookingsBtn');
  const closeBtn = document.getElementById('closeMyBookingsBtn');
  const modal = document.getElementById('myBookingsModal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      renderSavedBookingsDrawer();
      modal.classList.remove('hidden');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  // Close modals when clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
    const webModal = document.getElementById('webCallModal');
    if (e.target === webModal) {
      webModal.classList.add('hidden');
      if (state.webCallIntervalId) clearInterval(state.webCallIntervalId);
    }
  });
}

function renderSavedBookingsDrawer() {
  const listEl = document.getElementById('savedBookingsList');
  if (!listEl) return;

  if (state.savedBookings.length === 0) {
    listEl.innerHTML = `
      <p style="color: var(--text-secondary); padding: 16px 0;">
        You haven't booked a table slot yet. Select any available time slot on the page to lock your reservation!
      </p>
    `;
    return;
  }

  listEl.innerHTML = state.savedBookings
    .map(
      (b) => `
      <div class="saved-booking-item">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <strong class="mono-text" style="color:var(--accent-saffron); font-size:1rem;">${b.ref} · ${b.dateLabel} at ${b.time}</strong>
          <button type="button" class="btn-link-subtle danger" data-cancel-ref="${b.ref}">Cancel Slot</button>
        </div>
        <div style="font-size:0.86rem; color:var(--text-secondary);">
          <strong>${b.name}</strong> · ${b.guests} Guests · ${b.zone} (${b.table})
        </div>
        ${
          b.preOrder && b.preOrder.length > 0
            ? `<div style="font-size:0.8rem; color:var(--accent-sage); margin-top:4px;">Pre-Order: ${b.preOrder
                .map((i) => `${i.qty}x ${i.title}`)
                .join(', ')}</div>`
            : ''
        }
      </div>
    `
    )
    .join('');

  listEl.querySelectorAll('[data-cancel-ref]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const ref = btn.dataset.cancelRef;
      state.savedBookings = state.savedBookings.filter((b) => b.ref !== ref);
      saveBookingsToStorage();
      renderSavedBookingsDrawer();
      renderTimeSlots();
      showToast(`Cancelled reservation ${ref}.`);
    });
  });
}

// ---------------------------------------------------------------------------
// 14. Boot Application
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadSavedBookings();
  initDateControls();
  initGuestAndZoneControls();
  renderTimeSlots();
  initHeroQuickSlots();
  updateLiveTicket();
  initReservationForm();
  initMenuShowcase();
  initCallHub();
  initSavedBookingsModal();

  // Header scroll elevation
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 16);
  });
});
