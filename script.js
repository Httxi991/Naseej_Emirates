const STORAGE_KEY = 'naseej-ios-prototype-v2';

const LINKED_IDENTITIES = {
  '784-1990-1234567-1': {
    name: 'Nasser User',
    eid: '784-1990-1234567-1',
    gender: 'Male',
    age: 22,
    bioEn: 'Designing for connection and community.',
    bioAr: 'أصمم من أجل الترابط والمجتمع.',
    points: 120,
    badges: ['Starter', 'Helper'],
    joinedEventIds: ['ev2']
  },
  '784-1995-5555555-3': {
    name: 'Maryam Ali',
    eid: '784-1995-5555555-3',
    gender: 'Female',
    age: 24,
    bioEn: 'Culture connects generations.',
    bioAr: 'الثقافة تربط الأجيال.',
    points: 140,
    badges: ['Starter', 'Culture Lover'],
    joinedEventIds: ['ev4']
  }
};

const BASE_EVENTS = [
  {
    id: 'ev1',
    title: 'Beach Clean-up',
    category: 'family',
    place: 'Al Khan Beach',
    city: 'Sharjah',
    date: '10 Jan 2026',
    time: '8:00 AM',
    minAge: 0,
    gender: 'all',
    description: 'A light volunteering activity for the whole community.',
    lat: 25.3226,
    lon: 55.3522
  },
  {
    id: 'ev2',
    title: 'Family Park Picnic',
    category: 'family',
    place: 'Al Majaz Park',
    city: 'Sharjah',
    date: '12 Jan 2026',
    time: '5:30 PM',
    minAge: 0,
    gender: 'all',
    description: 'Games, food, and shared moments for families and friends.',
    lat: 25.3338,
    lon: 55.3846
  },
  {
    id: 'ev3',
    title: 'Men Majlis',
    category: 'men',
    place: 'Heart of Sharjah',
    city: 'Sharjah',
    date: '15 Jan 2026',
    time: '7:30 PM',
    minAge: 18,
    gender: 'Male',
    description: 'Men-only community talk with respectful discussion space.',
    lat: 25.3573,
    lon: 55.3906
  },
  {
    id: 'ev4',
    title: 'Women Wellness Session',
    category: 'women',
    place: 'Corniche',
    city: 'Sharjah',
    date: '18 Jan 2026',
    time: '6:45 AM',
    minAge: 18,
    gender: 'Female',
    description: 'Women-only wellness session with privacy-first flow.',
    lat: 25.3436,
    lon: 55.3940
  },
  {
    id: 'ev5',
    title: 'Kids Art Workshop',
    category: 'kids',
    place: 'Al Majaz Waterfront',
    city: 'Sharjah',
    date: '20 Jan 2026',
    time: '4:00 PM',
    minAge: 0,
    gender: 'all',
    description: 'Creative art activities for children with guardian support.',
    lat: 25.3349,
    lon: 55.3832
  }
];

const REWARDS = [
  {
    id: 'rw1',
    cost: 60,
    title: { en: 'Coffee Voucher', ar: 'قسيمة قهوة' },
    description: { en: 'Redeem for coffee at a partner cafe.', ar: 'استبدلها بقهوة من مقهى شريك.' }
  },
  {
    id: 'rw2',
    cost: 120,
    title: { en: 'Special Event Ticket', ar: 'تذكرة فعالية خاصة' },
    description: { en: 'Demo ticket for a featured event.', ar: 'تذكرة تجريبية لفعالية مميزة.' }
  },
  {
    id: 'rw3',
    cost: 200,
    title: { en: 'Premium Badge', ar: 'شارة مميزة' },
    description: { en: 'Unlock a premium badge in the profile.', ar: 'افتح شارة مميزة في البروفايل.' }
  }
];

const FRIEND_POOL = [
  { id: 'f1', name: 'Ahmed', avatar: 'A' },
  { id: 'f2', name: 'Maryam', avatar: 'M' },
  { id: 'f3', name: 'Salem', avatar: 'S' },
  { id: 'f4', name: 'Noora', avatar: 'N' }
];

const UI = {
  en: {
    feedTitle: 'Naseej Emirates',
    searchPlaceholder: 'Search title, place, date, category…',
    noEvents: 'No events found for this filter.',
    join: 'Join',
    joined: 'Joined',
    details: 'Details',
    driver: 'Driver',
    points: 'Points',
    joinedEvents: 'Joined',
    created: 'Created',
    rewards: 'Rewards',
    mapPreview: 'Tap a pin to preview an event.',
    availablePoints: 'Available Points',
    buy: 'Buy',
    owned: 'Owned',
    locked: 'Locked',
    inviteSent: 'Invite sent.',
    eventPublished: 'Event published! +25 points',
    driverConfirmed: 'Driver confirmed. ETA {eta} minutes.',
    alreadyJoined: 'You already joined this event.',
    joinSuccess: 'Joined event! +10 points',
    menOnly: 'This event is for men only.',
    womenOnly: 'This event is for women only.',
    ageGate: 'You do not meet the age requirement.',
    humaidName: 'Humaid AI',
    humaidWelcome: 'Salam. I can suggest events, explain rules, or help with transport inside Naseej Emirates.',
    humaidPlaceholder: 'Ask Humaid about events, rules, or suggestions…',
    settingsSaved: 'Settings updated.',
    resetDone: 'Prototype data reset.',
    addedFriend: 'Friend added to the prototype list.',
    rewardPurchased: 'Reward purchased.',
    eventSheetMeta: 'Community event preview',
    requestRide: 'Request Driver',
    directions: 'Directions',
    close: 'Close',
    digitalIdentityRequired: 'Enter an Emirates ID to continue.',
    digitalIdentityLinked: 'Digital identity linked for prototype demo.',
    none: 'None yet.',
    profileLinked: 'Digital identity linked',
    profileBioDefault: 'Designing for connection and community.'
  },
  ar: {
    feedTitle: 'نسيج الإمارات',
    searchPlaceholder: 'ابحث بالعنوان أو المكان أو التاريخ أو التصنيف…',
    noEvents: 'ما فيه فعاليات لهذا الفلتر.',
    join: 'انضم',
    joined: 'تم',
    details: 'تفاصيل',
    driver: 'سائق',
    points: 'نقاط',
    joinedEvents: 'منضم',
    created: 'أنشأت',
    rewards: 'جوائز',
    mapPreview: 'اضغط على دبوس لمعاينة فعالية.',
    availablePoints: 'النقاط المتوفرة',
    buy: 'شراء',
    owned: 'تمت',
    locked: 'مقفلة',
    inviteSent: 'تم إرسال الدعوة.',
    eventPublished: 'تم نشر الفعالية! +25 نقطة',
    driverConfirmed: 'تم تأكيد السائق. الوصول خلال {eta} دقائق.',
    alreadyJoined: 'أنت منضم لهذه الفعالية من قبل.',
    joinSuccess: 'تم الانضمام! +10 نقاط',
    menOnly: 'هذه الفعالية للرجال فقط.',
    womenOnly: 'هذه الفعالية للنساء فقط.',
    ageGate: 'عمرك لا يسمح لهذه الفعالية.',
    humaidName: 'حميد AI',
    humaidWelcome: 'هلا. أقدر أقترح فعاليات، أشرح القوانين، أو أساعدك بالمواصلات داخل نسيج الإمارات.',
    humaidPlaceholder: 'اسأل حميد عن الفعاليات أو القوانين أو الاقتراحات…',
    settingsSaved: 'تم تحديث الإعدادات.',
    resetDone: 'تم تصفير بيانات البروتوتايب.',
    addedFriend: 'تمت إضافة الصديق في البروتوتايب.',
    rewardPurchased: 'تم شراء الجائزة.',
    eventSheetMeta: 'معاينة فعالية مجتمعية',
    requestRide: 'اطلب سائق',
    directions: 'الاتجاهات',
    close: 'إغلاق',
    digitalIdentityRequired: 'أدخل رقم الهوية للمتابعة.',
    digitalIdentityLinked: 'تم ربط الهوية الرقمية في البروتوتايب.',
    none: 'لا يوجد.',
    profileLinked: 'الهوية الرقمية مرتبطة',
    profileBioDefault: 'أصمم من أجل الترابط والمجتمع.'
  }
};

const els = {
  screens: {
    splash: document.getElementById('screen-splash'),
    terms: document.getElementById('screen-terms'),
    signin: document.getElementById('screen-signin'),
    otp: document.getElementById('screen-otp'),
    app: document.getElementById('screen-app'),
    chat: document.getElementById('screen-chat')
  },
  jumpButtons: document.querySelectorAll('.jump-btn'),
  nextScreenButtons: document.querySelectorAll('[data-next-screen]'),
  tabButtons: document.querySelectorAll('.tab-item'),
  appPages: document.querySelectorAll('.app-page'),
  termsCheck: document.getElementById('terms-check'),
  termsContinue: document.getElementById('terms-continue'),
  signinEid: document.getElementById('signin-eid'),
  signinVerify: document.getElementById('signin-verify'),
  otpLogin: document.getElementById('otp-login'),
  appTitle: document.getElementById('app-title'),
  openHumaid: document.getElementById('open-humaid'),
  feedSearch: document.getElementById('feed-search'),
  categoryFilters: document.getElementById('category-filters'),
  feedEvents: document.getElementById('feed-events'),
  heroPoints: document.getElementById('hero-points'),
  mapPreview: document.getElementById('map-preview'),
  mapEventList: document.getElementById('map-event-list'),
  publishEvent: document.getElementById('publish-event'),
  createTitle: document.getElementById('create-title'),
  createDate: document.getElementById('create-date'),
  createTime: document.getElementById('create-time'),
  createLocation: document.getElementById('create-location'),
  createDescription: document.getElementById('create-description'),
  friendSearch: document.getElementById('friend-search'),
  friendSearchResults: document.getElementById('friend-search-results'),
  sendInvite: document.getElementById('send-invite'),
  friendChat: document.getElementById('friend-chat'),
  friendMessage: document.getElementById('friend-message'),
  sendFriendMessage: document.getElementById('send-friend-message'),
  profileAvatar: document.getElementById('profile-avatar'),
  profileName: document.getElementById('profile-name'),
  profileEid: document.getElementById('profile-eid'),
  profileBio: document.getElementById('profile-bio'),
  profileStats: document.getElementById('profile-stats'),
  badgeRow: document.getElementById('badge-row'),
  joinedList: document.getElementById('joined-list'),
  ridesList: document.getElementById('rides-list'),
  openSettings: document.getElementById('open-settings'),
  openRewards: document.getElementById('open-rewards'),
  saveSettings: document.getElementById('save-settings'),
  resetDemo: document.getElementById('reset-demo'),
  rewardPoints: document.getElementById('reward-points'),
  rewardList: document.getElementById('reward-list'),
  humaidChatLog: document.getElementById('humaid-chat-log'),
  humaidInput: document.getElementById('humaid-input'),
  sendHumaid: document.getElementById('send-humaid'),
  eventSheetTitle: document.getElementById('sheet-event-title'),
  eventSheetBody: document.getElementById('event-sheet-body'),
  closeSheetButtons: document.querySelectorAll('[data-close-sheet]'),
  toast: document.getElementById('toast')
};

let state = loadState();
let activeScreen = 'splash';
let activePage = 'feed';
let activeFilter = 'all';

function defaultState() {
  const linked = LINKED_IDENTITIES['784-1990-1234567-1'];
  return {
    termsAccepted: false,
    signedIn: false,
    language: 'en',
    mapStyle: 'dark',
    profile: {
      name: linked.name,
      eid: linked.eid,
      gender: linked.gender,
      age: linked.age,
      bio: linked.bioEn
    },
    points: linked.points,
    badges: [...linked.badges],
    joinedEventIds: [...linked.joinedEventIds],
    createdEventIds: [],
    rewardsOwned: [],
    rides: [],
    events: [...BASE_EVENTS],
    friendIds: ['f1', 'f2'],
    friendMessages: [
      { id: 'm1', from: 'them', text: 'Are you joining the picnic tomorrow?' },
      { id: 'm2', from: 'me', text: 'Yes, send me the details and I might request a driver.' }
    ],
    humaidMessages: [
      { role: 'assistant', text: UI.en.humaidWelcome }
    ]
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return {
      ...defaultState(),
      ...parsed,
      profile: { ...defaultState().profile, ...(parsed.profile || {}) }
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return UI[state.language]?.[key] || UI.en[key] || key;
}

function categoryLabel(code) {
  const labels = {
    en: { all: 'All', family: 'Family', men: 'Men', women: 'Women', kids: 'Kids' },
    ar: { all: 'الكل', family: 'عائلة', men: 'رجال', women: 'نساء', kids: 'أطفال' }
  };
  return labels[state.language][code] || code;
}

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'NU';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

function applyTheme() {
  document.body.classList.toggle('rtl', state.language === 'ar');
  document.body.classList.toggle('map-light', state.mapStyle === 'light');
  els.feedSearch.placeholder = t('searchPlaceholder');
  els.humaidInput.placeholder = t('humaidPlaceholder');
  els.appTitle.textContent = t('feedTitle');
  document.querySelector('.reward-header span').textContent = t('availablePoints');
  document.querySelector('#screen-chat .chat-header-bar h4').textContent = t('humaidName');
}

function showScreen(name) {
  activeScreen = name;
  Object.entries(els.screens).forEach(([key, screen]) => {
    screen.classList.toggle('active', key === name);
  });
  els.jumpButtons.forEach(btn => {
    const target = btn.dataset.screen;
    btn.classList.toggle('active', target === name || (name === 'chat' && target === 'app'));
  });
}

function showAppPage(name) {
  activePage = name;
  els.appPages.forEach(page => page.classList.toggle('active', page.dataset.page === name));
  els.tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.pageTarget === name));
}

function selectedValue(groupName) {
  const active = document.querySelector(`[data-group="${groupName}"] .chip-btn.active`);
  return active?.dataset.value || '';
}

function setGroupValue(groupName, value) {
  document.querySelectorAll(`[data-group="${groupName}"] .chip-btn`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === value);
  });
}

function canJoin(eventObj) {
  const { gender, age } = state.profile;
  if (eventObj.gender === 'Male' && gender !== 'Male') return { ok: false, reason: t('menOnly') };
  if (eventObj.gender === 'Female' && gender !== 'Female') return { ok: false, reason: t('womenOnly') };
  if (Number(age) < Number(eventObj.minAge || 0)) return { ok: false, reason: t('ageGate') };
  return { ok: true, reason: '' };
}

function findEvent(eventId) {
  return state.events.find(eventObj => eventObj.id === eventId);
}

function identityFromEid(eid) {
  const clean = String(eid || '').trim();
  return LINKED_IDENTITIES[clean] || {
    name: 'Digital ID User',
    eid: clean || '784-1990-1234567-1',
    gender: 'Male',
    age: 22,
    bioEn: UI.en.profileBioDefault,
    bioAr: UI.ar.profileBioDefault,
    points: 120,
    badges: ['Starter'],
    joinedEventIds: []
  };
}

function renderFeed() {
  const filterButtons = ['all', 'family', 'men', 'women', 'kids']
    .map(code => `<button class="filter-chip ${activeFilter === code ? 'active' : ''}" data-filter="${code}">${categoryLabel(code)}</button>`)
    .join('');
  els.categoryFilters.innerHTML = filterButtons;

  const query = els.feedSearch.value.trim().toLowerCase();
  const filtered = state.events.filter(eventObj => {
    const matchesFilter = activeFilter === 'all' || eventObj.category === activeFilter;
    const blob = `${eventObj.title} ${eventObj.place} ${eventObj.date} ${eventObj.city} ${eventObj.category}`.toLowerCase();
    const matchesQuery = !query || blob.includes(query);
    return matchesFilter && matchesQuery;
  });

  els.heroPoints.textContent = state.points;

  if (!filtered.length) {
    els.feedEvents.innerHTML = `<div class="event-card">${t('noEvents')}</div>`;
    return;
  }

  els.feedEvents.innerHTML = filtered.map(eventObj => {
    const joined = state.joinedEventIds.includes(eventObj.id);
    const access = canJoin(eventObj);
    return `
      <article class="event-card">
        <div class="pill-row">
          <span class="pill">${categoryLabel(eventObj.category)}</span>
          <span class="pill alt">${eventObj.city}</span>
          ${eventObj.minAge >= 18 ? `<span class="pill">18+</span>` : ''}
        </div>
        <h5 class="event-title">${eventObj.title}</h5>
        <p class="event-detail">${eventObj.place} • ${eventObj.date} • ${eventObj.time}</p>
        <p class="event-detail">${eventObj.description}</p>
        ${!access.ok ? `<p class="helper-text">${access.reason}</p>` : ''}
        <div class="event-actions">
          <button class="primary-mini" data-action="join" data-id="${eventObj.id}" ${joined || !access.ok ? 'disabled' : ''}>${joined ? t('joined') : t('join')}</button>
          <button class="ghost-btn" data-action="details" data-id="${eventObj.id}">${t('details')}</button>
          <button class="ghost-btn" data-action="driver" data-id="${eventObj.id}">${t('driver')}</button>
        </div>
      </article>
    `;
  }).join('');
}

function renderMap() {
  const first = state.events[0];
  if (!first) return;
  els.mapPreview.innerHTML = `<strong>${first.title}</strong><span>${first.place} • ${first.date} • ${first.time}</span>`;
  els.mapEventList.innerHTML = state.events.slice(0, 4).map(eventObj => `
    <div class="mini-list-item">
      <div>
        <strong>${eventObj.title}</strong>
        <span>${eventObj.place}</span>
      </div>
      <button class="ghost-btn small" data-action="details" data-id="${eventObj.id}">${t('details')}</button>
    </div>
  `).join('');
}

function renderProfile() {
  els.profileAvatar.textContent = initials(state.profile.name);
  els.profileName.textContent = state.profile.name;
  els.profileEid.textContent = `${t('profileLinked')} • …${state.profile.eid.slice(-4)}`;
  els.profileBio.textContent = state.profile.bio || t('profileBioDefault');
  els.profileStats.innerHTML = `
    <div><strong>${state.points}</strong><span>${t('points')}</span></div>
    <div><strong>${state.joinedEventIds.length}</strong><span>${t('joinedEvents')}</span></div>
    <div><strong>${state.createdEventIds.length}</strong><span>${t('created')}</span></div>
    <div><strong>${state.rewardsOwned.length}</strong><span>${t('rewards')}</span></div>
  `;

  els.badgeRow.innerHTML = state.badges.map(badge => `<span class="badge-chip">${badge}</span>`).join('');

  const joinedEvents = state.joinedEventIds.map(findEvent).filter(Boolean);
  els.joinedList.innerHTML = joinedEvents.length
    ? joinedEvents.map(eventObj => `<div class="mini-list-item"><div><strong>${eventObj.title}</strong><span>${eventObj.place} • ${eventObj.date}</span></div></div>`).join('')
    : `<div class="mini-list-item"><span>${t('none')}</span></div>`;

  els.ridesList.innerHTML = state.rides.length
    ? state.rides.map(ride => `<div class="mini-list-item"><div><strong>${ride.eventTitle}</strong><span>${ride.driver} • ETA ${ride.eta} min</span></div></div>`).join('')
    : `<div class="mini-list-item"><span>${t('none')}</span></div>`;
}

function renderRewards() {
  els.rewardPoints.textContent = state.points;
  els.rewardList.innerHTML = REWARDS.map(reward => {
    const owned = state.rewardsOwned.includes(reward.id);
    const tooExpensive = state.points < reward.cost;
    const btnLabel = owned ? t('owned') : tooExpensive ? t('locked') : t('buy');
    const cls = owned || tooExpensive ? 'reward-buy locked' : 'reward-buy';
    return `
      <article class="reward-item">
        <div>
          <strong>${reward.title[state.language]}</strong>
          <p>${reward.description[state.language]} • ${reward.cost} pts</p>
        </div>
        <button class="${cls}" data-buy-reward="${reward.id}" ${owned || tooExpensive ? 'disabled' : ''}>${btnLabel}</button>
      </article>
    `;
  }).join('');
}

function renderFriends() {
  els.friendChat.innerHTML = state.friendMessages.map(message => `
    <div class="chat-bubble ${message.from === 'me' ? 'me' : ''}">${message.text}</div>
  `).join('');

  const query = els.friendSearch.value.trim().toLowerCase();
  const results = FRIEND_POOL.filter(friend => !state.friendIds.includes(friend.id) && (!query || friend.name.toLowerCase().includes(query)));
  els.friendSearchResults.innerHTML = results.length
    ? results.map(friend => `
      <div class="result-row">
        <div class="friend-row">
          <div class="result-avatar">${friend.avatar}</div>
          <div>
            <strong>${friend.name}</strong>
            <p>Community member</p>
          </div>
        </div>
        <button class="ghost-btn small" data-add-friend="${friend.id}">Add</button>
      </div>
    `).join('')
    : `<div class="mini-list-item"><span>${state.language === 'ar' ? 'ما فيه نتائج حالياً.' : 'No results right now.'}</span></div>`;
}

function renderHumaid() {
  els.humaidChatLog.innerHTML = state.humaidMessages.map(message => `
    <div class="chat-bubble ${message.role === 'user' ? 'me' : ''}">${message.text}</div>
  `).join('');
  els.humaidChatLog.scrollTop = els.humaidChatLog.scrollHeight;
}

function openSheet(id) {
  document.getElementById(id).classList.add('open');
}

function closeSheet(id) {
  document.getElementById(id).classList.remove('open');
}

function eventGoogleMapsUrl(eventObj) {
  return `https://www.google.com/maps/dir/?api=1&destination=${eventObj.lat},${eventObj.lon}`;
}

function openEventSheet(eventId) {
  const eventObj = findEvent(eventId);
  if (!eventObj) return;
  const joined = state.joinedEventIds.includes(eventObj.id);
  const access = canJoin(eventObj);
  els.eventSheetTitle.textContent = eventObj.title;
  els.eventSheetBody.innerHTML = `
    <div class="event-detail-grid">
      <div class="event-detail-card">
        <div class="pill-row">
          <span class="pill">${categoryLabel(eventObj.category)}</span>
          <span class="pill alt">${eventObj.place}</span>
          ${eventObj.minAge >= 18 ? `<span class="pill">18+</span>` : ''}
        </div>
        <p>${eventObj.description}</p>
        <p>${eventObj.date} • ${eventObj.time}</p>
        <p>${t('eventSheetMeta')}</p>
        ${!access.ok ? `<p class="helper-text">${access.reason}</p>` : ''}
        <div class="sheet-action-row">
          <button class="sheet-action" data-sheet-action="join" data-id="${eventObj.id}" ${joined || !access.ok ? 'disabled' : ''}>${joined ? t('joined') : t('join')}</button>
          <button class="sheet-action" data-sheet-action="driver" data-id="${eventObj.id}">${t('requestRide')}</button>
        </div>
        <div class="sheet-action-row">
          <button class="secondary-btn wide" data-sheet-action="directions" data-id="${eventObj.id}">${t('directions')}</button>
          <button class="secondary-btn wide" data-sheet-close>${t('close')}</button>
        </div>
      </div>
    </div>
  `;
  openSheet('event-sheet');
}

function joinEvent(eventId, showFeedback = true) {
  const eventObj = findEvent(eventId);
  if (!eventObj) return;
  if (state.joinedEventIds.includes(eventId)) {
    if (showFeedback) showToast(t('alreadyJoined'));
    return;
  }
  const access = canJoin(eventObj);
  if (!access.ok) {
    showToast(access.reason);
    return;
  }
  state.joinedEventIds.unshift(eventId);
  state.points += 10;
  if (!state.badges.includes('Participant')) state.badges.push('Participant');
  saveState();
  renderAll();
  if (showFeedback) showToast(t('joinSuccess'));
}

function requestDriver(eventId, showFeedback = true) {
  const eventObj = findEvent(eventId);
  if (!eventObj) return;
  const eta = 6 + Math.floor(Math.random() * 8);
  const ride = {
    id: `ride-${Date.now()}`,
    eventId,
    eventTitle: eventObj.title,
    driver: ['Salem', 'Rashed', 'Ali', 'Noora'][Math.floor(Math.random() * 4)],
    eta
  };
  state.rides.unshift(ride);
  saveState();
  renderProfile();
  if (showFeedback) showToast(t('driverConfirmed').replace('{eta}', eta));
}

function publishEvent() {
  const title = els.createTitle.value.trim();
  const location = els.createLocation.value.trim();
  const description = els.createDescription.value.trim();
  const date = els.createDate.value.trim() || '24 Jan 2026';
  const time = els.createTime.value.trim() || '6:00 PM';
  const category = selectedValue('create-category') || 'family';

  if (!title || !location || !description) {
    showToast(state.language === 'ar' ? 'كمّل العنوان والموقع والوصف.' : 'Complete title, location, and description.');
    return;
  }

  const eventId = `ev-${Date.now()}`;
  state.events.unshift({
    id: eventId,
    title,
    category,
    place: location,
    city: 'Sharjah',
    date,
    time,
    minAge: ['men', 'women'].includes(category) ? 18 : 0,
    gender: category === 'men' ? 'Male' : category === 'women' ? 'Female' : 'all',
    description,
    lat: 25.34,
    lon: 55.39
  });
  state.createdEventIds.unshift(eventId);
  state.points += 25;
  if (!state.badges.includes('Organizer')) state.badges.push('Organizer');
  saveState();
  els.createTitle.value = '';
  els.createLocation.value = '';
  els.createDescription.value = '';
  els.createDate.value = '';
  els.createTime.value = '';
  activeFilter = 'all';
  renderAll();
  showAppPage('feed');
  showToast(t('eventPublished'));
}

function addFriend(friendId) {
  if (!state.friendIds.includes(friendId)) {
    state.friendIds.push(friendId);
    saveState();
    renderFriends();
    showToast(t('addedFriend'));
  }
}

function sendFriendMessage() {
  const text = els.friendMessage.value.trim();
  if (!text) return;
  state.friendMessages.push({ id: `msg-${Date.now()}`, from: 'me', text });
  els.friendMessage.value = '';
  saveState();
  renderFriends();
}

function inviteFriend() {
  const eventObj = state.events[0];
  if (!eventObj) return;
  const inviteText = state.language === 'ar'
    ? `تعال معي إلى ${eventObj.title} في ${eventObj.place}.`
    : `Join me at ${eventObj.title} in ${eventObj.place}.`;
  state.friendMessages.push({ id: `inv-${Date.now()}`, from: 'me', text: inviteText });
  saveState();
  renderFriends();
  showToast(t('inviteSent'));
}

function humaidReply(input) {
  const text = input.toLowerCase();
  const joinable = state.events.filter(eventObj => canJoin(eventObj).ok).slice(0, 3);

  if (/rule|rules|men|women|18|قانون|رجال|نساء|العمر/.test(text)) {
    return state.language === 'ar'
      ? 'القوانين بسيطة: فعاليات الرجال للرجال فقط، وفعاليات النساء للنساء فقط، وإذا كانت الفعالية +18 فالعمر يتحقق تلقائياً من الهوية الرقمية.'
      : 'Rules are simple: men events are for male users, women events are for female users, and 18+ eligibility is resolved from digital identity.';
  }

  if (/family|suggest|recommend|event|join|اقتراح|اقترح|فعاليات|انضم/.test(text)) {
    if (!joinable.length) {
      return state.language === 'ar'
        ? 'حالياً ما لقيت فعاليات مناسبة لبياناتك.'
        : 'I could not find joinable events for your profile right now.';
    }
    const summary = joinable.map(eventObj => `${eventObj.title} • ${eventObj.place}`).join(' — ');
    return state.language === 'ar'
      ? `أرشح لك هذي الفعاليات: ${summary}`
      : `I recommend these events: ${summary}`;
  }

  if (/driver|ride|map|direction|سائق|خريطة|اتجاه/.test(text)) {
    return state.language === 'ar'
      ? 'افتح بطاقة الفعالية ثم اختر الاتجاهات أو اطلب سائق.'
      : 'Open any event card, then choose Directions or Request Driver.';
  }

  if (/reward|points|badge|نقاط|جائزة|شارة/.test(text)) {
    return state.language === 'ar'
      ? `عندك حالياً ${state.points} نقطة، وتقدر تفتح متجر الجوائز من البروفايل.`
      : `You currently have ${state.points} points, and you can open the rewards store from the profile.`;
  }

  return state.language === 'ar'
    ? 'اسألني عن الفعاليات، القوانين، السائق، أو النقاط وأنا أرتبها لك.'
    : 'Ask me about events, rules, driver requests, or points and I will guide you.';
}

function sendHumaidMessage() {
  const text = els.humaidInput.value.trim();
  if (!text) return;
  state.humaidMessages.push({ role: 'user', text });
  state.humaidMessages.push({ role: 'assistant', text: humaidReply(text) });
  els.humaidInput.value = '';
  saveState();
  renderHumaid();
}

function saveSettings() {
  state.language = selectedValue('language') || 'en';
  state.mapStyle = selectedValue('mapstyle') || 'dark';
  if (!state.profile.bio || state.profile.bio === UI.en.profileBioDefault || state.profile.bio === UI.ar.profileBioDefault) {
    state.profile.bio = t('profileBioDefault');
  }
  if (state.humaidMessages.length === 1 && state.humaidMessages[0].role === 'assistant') {
    state.humaidMessages[0].text = t('humaidWelcome');
  }
  saveState();
  applyTheme();
  renderAll();
  showToast(t('settingsSaved'));
  closeSheet('settings-sheet');
}

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  els.signinEid.value = '';
  setGroupValue('create-category', 'family');
  setGroupValue('language', 'en');
  setGroupValue('mapstyle', 'dark');
  applyTheme();
  renderAll();
  showScreen('splash');
  closeSheet('settings-sheet');
  showToast(t('resetDone'));
}

function renderAll() {
  applyTheme();
  renderFeed();
  renderMap();
  renderProfile();
  renderRewards();
  renderFriends();
  renderHumaid();
}

function bindEvents() {
  els.termsCheck.addEventListener('change', () => {
    els.termsContinue.disabled = !els.termsCheck.checked;
  });

  els.termsContinue.addEventListener('click', () => {
    state.termsAccepted = true;
    saveState();
    showScreen('signin');
  });

  els.signinVerify.addEventListener('click', () => {
    const eid = els.signinEid.value.trim();
    if (!eid) {
      showToast(t('digitalIdentityRequired'));
      return;
    }
    const linked = identityFromEid(eid);
    state.profile = {
      name: linked.name,
      eid: linked.eid,
      gender: linked.gender,
      age: linked.age,
      bio: state.language === 'ar' ? linked.bioAr : linked.bioEn
    };
    state.points = linked.points;
    state.badges = [...new Set(linked.badges)];
    state.joinedEventIds = [...linked.joinedEventIds];
    saveState();
    renderProfile();
    showToast(t('digitalIdentityLinked'));
    showScreen('otp');
  });

  els.otpLogin.addEventListener('click', () => {
    state.signedIn = true;
    saveState();
    renderAll();
    showScreen('app');
    showAppPage('feed');
  });

  els.jumpButtons.forEach(btn => btn.addEventListener('click', () => {
    const target = btn.dataset.screen;
    showScreen(target);
    if (target === 'app') showAppPage('feed');
  }));

  els.nextScreenButtons.forEach(btn => btn.addEventListener('click', () => {
    const target = btn.dataset.nextScreen;
    showScreen(target);
  }));

  document.querySelectorAll('.chip-group').forEach(group => {
    group.addEventListener('click', event => {
      const button = event.target.closest('.chip-btn');
      if (!button) return;
      group.querySelectorAll('.chip-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  els.tabButtons.forEach(btn => btn.addEventListener('click', () => {
    showScreen('app');
    showAppPage(btn.dataset.pageTarget);
  }));

  els.feedSearch.addEventListener('input', renderFeed);
  els.openHumaid.addEventListener('click', () => showScreen('chat'));
  els.publishEvent.addEventListener('click', publishEvent);
  els.sendInvite.addEventListener('click', inviteFriend);
  els.sendFriendMessage.addEventListener('click', sendFriendMessage);
  els.friendMessage.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendFriendMessage();
    }
  });
  els.friendSearch.addEventListener('input', renderFriends);
  els.openSettings.addEventListener('click', () => openSheet('settings-sheet'));
  els.openRewards.addEventListener('click', () => openSheet('rewards-sheet'));
  els.saveSettings.addEventListener('click', saveSettings);
  els.resetDemo.addEventListener('click', resetDemo);
  els.sendHumaid.addEventListener('click', sendHumaidMessage);
  els.humaidInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendHumaidMessage();
    }
  });

  els.closeSheetButtons.forEach(btn => btn.addEventListener('click', () => closeSheet(btn.dataset.closeSheet)));
  document.querySelectorAll('.sheet-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', event => {
      if (event.target === backdrop) backdrop.classList.remove('open');
    });
  });

  document.addEventListener('click', event => {
    const filterBtn = event.target.closest('[data-filter]');
    if (filterBtn) {
      activeFilter = filterBtn.dataset.filter;
      renderFeed();
      return;
    }

    const pageAction = event.target.closest('[data-action]');
    if (pageAction) {
      const { action, id } = pageAction.dataset;
      if (action === 'join') joinEvent(id);
      if (action === 'details') openEventSheet(id);
      if (action === 'driver') requestDriver(id);
      return;
    }

    const mapPin = event.target.closest('.map-pin');
    if (mapPin) {
      const eventObj = findEvent(mapPin.dataset.eventId);
      if (eventObj) {
        els.mapPreview.innerHTML = `<strong>${eventObj.title}</strong><span>${eventObj.place} • ${eventObj.date} • ${eventObj.time}</span>`;
      }
      return;
    }

    const rewardBtn = event.target.closest('[data-buy-reward]');
    if (rewardBtn) {
      const rewardId = rewardBtn.dataset.buyReward;
      const reward = REWARDS.find(item => item.id === rewardId);
      if (!reward || state.rewardsOwned.includes(rewardId) || state.points < reward.cost) return;
      state.points -= reward.cost;
      state.rewardsOwned.push(rewardId);
      if (rewardId === 'rw3' && !state.badges.includes('Premium')) state.badges.push('Premium');
      saveState();
      renderAll();
      showToast(t('rewardPurchased'));
      return;
    }

    const addFriendBtn = event.target.closest('[data-add-friend]');
    if (addFriendBtn) {
      addFriend(addFriendBtn.dataset.addFriend);
      return;
    }

    const sheetAction = event.target.closest('[data-sheet-action]');
    if (sheetAction) {
      const { sheetAction: action, id } = sheetAction.dataset;
      if (action === 'join') joinEvent(id);
      if (action === 'driver') requestDriver(id);
      if (action === 'directions') {
        const eventObj = findEvent(id);
        if (eventObj) window.open(eventGoogleMapsUrl(eventObj), '_blank');
      }
      return;
    }

    const closeBtn = event.target.closest('[data-sheet-close]');
    if (closeBtn) closeSheet('event-sheet');
  });
}

function boot() {
  els.signinEid.value = '';
  setGroupValue('create-category', 'family');
  setGroupValue('language', state.language);
  setGroupValue('mapstyle', state.mapStyle);
  bindEvents();
  renderAll();

  if (state.signedIn) {
    showScreen('app');
    showAppPage('feed');
  } else if (state.termsAccepted) {
    showScreen('signin');
  } else {
    showScreen('splash');
  }
}

boot();
