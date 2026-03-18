const STORAGE_KEY = 'naseej-ios-competition-elite';

const COPY = {
  en: {
    welcomeTitle: 'Welcome to Naseej Emirates',
    welcomeSub: 'One Community Woven Together',
    joinUs: 'Join Us In Naseej Emirates',
    back: 'Back',
    beforeContinue: 'Before you continue',
    termsTitle: 'Terms of Service',
    termsSub: 'This is a judged prototype. It demonstrates the concept only, not real identity verification.',
    termsInside: 'What this prototype includes',
    termsItem1: 'Digital identity sign in concept with OTP confirmation.',
    termsItem2: 'Community event discovery with family, men, women, and kids categories.',
    termsItem3: 'Access rules, driver request, rewards, settings, and friends chat flow.',
    termsItem4: 'Humaid AI as an in-app conversation assistant.',
    termsAccept: 'I accept the prototype terms.',
    continue: 'Continue',
    signinTitle: 'Sign in with Digital ID',
    signinSub: 'In the real product, name, age, and gender are pulled automatically from digital identity.',
    connectedIdentity: 'Connected identity',
    verified: 'Verified',
    eidLabel: 'Emirates ID',
    autoName: 'Name auto-filled',
    autoAge: 'Age auto-filled',
    autoGender: 'Gender auto-filled',
    profileSource: 'Profile source',
    accessRules: 'Access rules',
    digitalIdentityLinked: 'Digital identity linked',
    accessResolved: 'Profile access resolved from linked identity',
    continueOtp: 'Continue to OTP',
    verifyTitle: 'Verify ID',
    otpSub: 'Demo OTP step for the competition flow.',
    login: 'Login',
    appTag: 'Prototype flow',
    smartMatching: 'Smart matching',
    heroTitle: 'Find trusted community events near you',
    heroSub: 'Family, men, women, and kids experiences with clear rules and transport support.',
    points: 'Points',
    categoriesLabel: 'Categories',
    eventPreview: 'Community event preview',
    mapTitle: 'Map',
    mapSub: 'Tap a pin to preview an event and open directions.',
    createTitle: 'Create event',
    createSub: 'Publish a new event as a prototype flow and earn points.',
    eventTitle: 'Event title',
    categoryLabel: 'Category',
    dateLabel: 'Date',
    timeLabel: 'Time',
    locationLabel: 'Location',
    descriptionLabel: 'Description',
    publishEvent: 'Publish event',
    friendsTitle: 'Friends',
    friendsSub: 'Add by name, send event invites, and chat inside the prototype.',
    sendInvite: 'Send invite',
    send: 'Send',
    badgesTitle: 'Badges',
    joined: 'Joined',
    joinedEvents: 'Joined events',
    createdEvents: 'Created events',
    ridesTitle: 'Driver requests',
    settingsTitle: 'Settings',
    rewardsTitle: 'Rewards Store',
    profileMeta: 'Digital identity linked • access auto-resolved',
    feedSearchPlaceholder: 'Search title, place, date, category…',
    friendSearchPlaceholder: 'Search a friend by name',
    friendMessagePlaceholder: 'Type a message…',
    humaidPlaceholder: 'Ask Humaid about events, rules, or suggestions…',
    createTitlePlaceholder: 'Neighborhood Gathering',
    createLocationPlaceholder: 'Al Majaz Waterfront',
    createDescriptionPlaceholder: 'A short, welcoming description for the event.',
    ridePickupPlaceholder: 'Home / University / Mall',
    rideNotesPlaceholder: 'Any notes for the driver',
    rideTitle: 'Request driver',
    pickupLabel: 'Pickup location',
    passengersLabel: 'Passengers',
    rideNotes: 'Notes',
    confirmRide: 'Confirm driver request',
    languageLabel: 'Language',
    mapStyleLabel: 'Map style',
    saveChanges: 'Save changes',
    resetDemo: 'Reset demo data',
    availablePoints: 'Available points',
    rewardOwnedLabel: 'Owned rewards',
    humaidTitle: 'Humaid AI',
    humaidIntro: 'Ask about events, rules, categories, or transport. This is a prototype conversation flow.',
    identityRequired: 'Enter an Emirates ID to continue.',
    identityLinkedToast: 'Digital identity linked for the prototype.',
    termsNeeded: 'Accept the terms first.',
    family: 'Family',
    men: 'Men',
    women: 'Women',
    kids: 'Kids',
    all: 'All',
    host: 'Host',
    join: 'Join',
    details: 'Details',
    driver: 'Driver',
    directions: 'Directions',
    alreadyJoined: 'You already joined this event.',
    joinSuccess: 'Joined event! +10 points',
    menOnly: 'This event is for men only.',
    womenOnly: 'This event is for women only.',
    ageGate: 'You do not meet the age requirement.',
    mapEmpty: 'Tap any event pin to preview it here.',
    requestDriver: 'Request driver',
    rideConfirmed: 'Driver confirmed. ETA {eta} minutes.',
    friendAdded: 'Friend added to the prototype list.',
    messageEmpty: 'Write a message first.',
    inviteSent: 'Invite sent.',
    buy: 'Buy',
    owned: 'Owned',
    rewardPurchased: 'Reward purchased.',
    rewardLocked: 'Not enough points yet.',
    none: 'None yet.',
    noEvents: 'No events found for this filter.',
    eventPublished: 'Event published! +25 points',
    fillCreate: 'Fill in the title, date, location, and description first.',
    createMenOnly: 'Only male users can create men events.',
    createWomenOnly: 'Only female users can create women events.',
    createAdultOnly: 'You must be 18+ for men or women events.',
    createRuleDefault: 'Family and kids events stay open. Men and women events are automatically 18+.',
    createRuleMen: 'Men events are 18+ and only available for male profiles.',
    createRuleWomen: 'Women events are 18+ and only available for female profiles.',
    humaidWelcome: 'Salam. I can suggest events, explain rules, or help with transport inside Naseej Emirates.',
    humaidRules: 'Inside Naseej Emirates, men-only events are for male users, women-only events are for female users, and 18+ rules are applied automatically. Family and kids flows stay open for general community participation.',
    humaidTransport: 'Open any event card and tap Driver for a demo ride request, or Directions to launch Google Maps.',
    humaidSuggest: 'Based on your linked profile, these are strong matches:',
    humaidFallback: 'Try asking: Suggest events I can join, Explain the rules, or How do I request a driver?',
    linkedMeta: 'Gender and age come from the linked digital identity.',
    languageSaved: 'Settings updated.',
    resetDone: 'Prototype data reset.',
    chatInvitePrefix: 'Join me at'
  },
  ar: {
    welcomeTitle: 'مرحباً بك في نسيج الإمارات',
    welcomeSub: 'مجتمع واحد منسوج معًا',
    joinUs: 'انضم إلى نسيج الإمارات',
    back: 'رجوع',
    beforeContinue: 'قبل ما تكمل',
    termsTitle: 'شروط الخدمة',
    termsSub: 'هذا بروتوتايب للمسابقة ويعرض الفكرة فقط، وليس تحققًا حقيقيًا.',
    termsInside: 'ماذا يعرض هذا البروتوتايب',
    termsItem1: 'فكرة تسجيل الدخول بالهوية الرقمية مع خطوة OTP.',
    termsItem2: 'اكتشاف فعاليات المجتمع بفئات العائلة والرجال والنساء والأطفال.',
    termsItem3: 'قواعد الدخول وطلب السائق والجوائز والإعدادات وشات الأصدقاء.',
    termsItem4: 'حميد AI كمساعد محادثة داخل التطبيق.',
    termsAccept: 'أوافق على شروط البروتوتايب.',
    continue: 'متابعة',
    signinTitle: 'تسجيل الدخول بالهوية الرقمية',
    signinSub: 'في المنتج الحقيقي يتم جلب الاسم والعمر والجنس تلقائيًا من الهوية الرقمية.',
    connectedIdentity: 'الهوية المرتبطة',
    verified: 'موثقة',
    eidLabel: 'رقم الهوية',
    autoName: 'الاسم تلقائي',
    autoAge: 'العمر تلقائي',
    autoGender: 'الجنس تلقائي',
    profileSource: 'مصدر الملف',
    accessRules: 'قواعد الدخول',
    digitalIdentityLinked: 'تم ربط الهوية الرقمية',
    accessResolved: 'تحديد صلاحيات الملف تلقائيًا',
    continueOtp: 'المتابعة إلى OTP',
    verifyTitle: 'تحقق من الهوية',
    otpSub: 'هذه خطوة OTP تجريبية خاصة بعرض المسابقة.',
    login: 'دخول',
    appTag: 'مسار البروتوتايب',
    smartMatching: 'مطابقة ذكية',
    heroTitle: 'اكتشف فعاليات مجتمعية موثوقة بالقرب منك',
    heroSub: 'فعاليات للعائلة والرجال والنساء والأطفال مع قواعد واضحة ودعم للمواصلات.',
    points: 'نقاط',
    categoriesLabel: 'الفئات',
    eventPreview: 'معاينة الفعاليات',
    mapTitle: 'الخريطة',
    mapSub: 'اضغط على أي دبوس لمعاينة الفعالية وفتح الاتجاهات.',
    createTitle: 'إنشاء فعالية',
    createSub: 'انشر فعالية جديدة في البروتوتايب واكسب نقاطًا.',
    eventTitle: 'عنوان الفعالية',
    categoryLabel: 'الفئة',
    dateLabel: 'التاريخ',
    timeLabel: 'الوقت',
    locationLabel: 'الموقع',
    descriptionLabel: 'الوصف',
    publishEvent: 'نشر الفعالية',
    friendsTitle: 'الأصدقاء',
    friendsSub: 'أضف بالاسم، وأرسل دعوات، وادخل شات داخل البروتوتايب.',
    sendInvite: 'إرسال دعوة',
    send: 'إرسال',
    badgesTitle: 'الشارات',
    joined: 'انضممت',
    joinedEvents: 'فعاليات انضممت لها',
    createdEvents: 'فعاليات أنشأتها',
    ridesTitle: 'طلبات السائق',
    settingsTitle: 'الإعدادات',
    rewardsTitle: 'متجر الجوائز',
    profileMeta: 'الهوية الرقمية مرتبطة • الصلاحيات محددة تلقائيًا',
    feedSearchPlaceholder: 'ابحث بالعنوان أو المكان أو التاريخ أو الفئة…',
    friendSearchPlaceholder: 'ابحث عن صديق بالاسم',
    friendMessagePlaceholder: 'اكتب رسالة…',
    humaidPlaceholder: 'اسأل حميد عن الفعاليات أو القوانين أو الاقتراحات…',
    createTitlePlaceholder: 'لقاء مجتمعي في الحي',
    createLocationPlaceholder: 'واجهة المجاز',
    createDescriptionPlaceholder: 'وصف قصير ومرحب للفعالية.',
    ridePickupPlaceholder: 'البيت / الجامعة / مول',
    rideNotesPlaceholder: 'أي ملاحظات للسائق',
    rideTitle: 'طلب سائق',
    pickupLabel: 'مكان الالتقاط',
    passengersLabel: 'عدد الركاب',
    rideNotes: 'ملاحظات',
    confirmRide: 'تأكيد طلب السائق',
    languageLabel: 'اللغة',
    mapStyleLabel: 'ستايل الخريطة',
    saveChanges: 'حفظ التغييرات',
    resetDemo: 'تصفير بيانات البروتوتايب',
    availablePoints: 'النقاط المتوفرة',
    rewardOwnedLabel: 'جوائزك',
    humaidTitle: 'حميد AI',
    humaidIntro: 'اسأل عن الفعاليات أو القوانين أو الفئات أو المواصلات. هذا تدفق محادثة داخل البروتوتايب.',
    identityRequired: 'اكتب رقم الهوية أولاً.',
    identityLinkedToast: 'تم ربط الهوية الرقمية داخل البروتوتايب.',
    termsNeeded: 'وافق على الشروط أولاً.',
    family: 'العائلة',
    men: 'الرجال',
    women: 'النساء',
    kids: 'الأطفال',
    all: 'الكل',
    host: 'المستضيف',
    join: 'انضم',
    details: 'التفاصيل',
    driver: 'سائق',
    directions: 'الاتجاهات',
    alreadyJoined: 'أنت منضم لهذه الفعالية مسبقًا.',
    joinSuccess: 'تم الانضمام! +10 نقاط',
    menOnly: 'هذه فعالية للرجال فقط.',
    womenOnly: 'هذه فعالية للنساء فقط.',
    ageGate: 'عمرك لا يطابق شرط الدخول.',
    mapEmpty: 'اضغط أي دبوس لمعاينة الفعالية هنا.',
    requestDriver: 'اطلب سائق',
    rideConfirmed: 'تم تأكيد السائق. الوصول خلال {eta} دقيقة.',
    friendAdded: 'تمت إضافة الصديق داخل البروتوتايب.',
    messageEmpty: 'اكتب رسالة أولاً.',
    inviteSent: 'تم إرسال الدعوة.',
    buy: 'شراء',
    owned: 'تمت',
    rewardPurchased: 'تم شراء الجائزة.',
    rewardLocked: 'النقاط غير كافية حالياً.',
    none: 'لا يوجد بعد.',
    noEvents: 'لا توجد فعاليات لهذا الفلتر.',
    eventPublished: 'تم نشر الفعالية! +25 نقطة',
    fillCreate: 'كمّل العنوان والتاريخ والموقع والوصف أولاً.',
    createMenOnly: 'فعاليات الرجال متاحة للملفات الرجالية فقط.',
    createWomenOnly: 'فعاليات النساء متاحة للملفات النسائية فقط.',
    createAdultOnly: 'لازم يكون عمرك 18+ لفعاليات الرجال أو النساء.',
    createRuleDefault: 'فعاليات العائلة والأطفال مفتوحة. فعاليات الرجال والنساء تصبح +18 تلقائيًا.',
    createRuleMen: 'فعاليات الرجال +18 ومخصصة للملفات الرجالية فقط.',
    createRuleWomen: 'فعاليات النساء +18 ومخصصة للملفات النسائية فقط.',
    humaidWelcome: 'السلام عليكم. أقدر أقترح لك فعاليات، وأشرح القوانين، وأساعدك في المواصلات داخل نسيج الإمارات.',
    humaidRules: 'داخل نسيج الإمارات: فعاليات الرجال للملفات الرجالية، وفعاليات النساء للملفات النسائية، وشروط +18 تتطبق تلقائيًا. أما العائلة والأطفال فتبقى مفتوحة للمجتمع بشكل عام.',
    humaidTransport: 'افتح أي كرت فعالية واضغط سائق لطلب مشوار تجريبي، أو الاتجاهات لفتح خرائط جوجل.',
    humaidSuggest: 'حسب ملفك المرتبط، هذه أفضل الخيارات لك:',
    humaidFallback: 'جرّب: اقترح فعاليات أقدر أنضم لها، اشرح القوانين، أو كيف أطلب سائق؟',
    linkedMeta: 'العمر والجنس يأتون تلقائيًا من الهوية الرقمية المرتبطة.',
    languageSaved: 'تم تحديث الإعدادات.',
    resetDone: 'تم تصفير بيانات البروتوتايب.',
    chatInvitePrefix: 'تعال معي إلى'
  }
};

const BASE_EVENTS = [
  { id: 'ev1', title: 'Beach Clean-up', category: 'family', description: 'A light volunteering activity, open to the wider community.', place: 'Al Khan Beach', date: '2026-01-10', time: '08:00', host: 'Ahmed', minAge: 0, lat: 25.3226, lon: 55.3522 },
  { id: 'ev2', title: 'Family Park Picnic', category: 'family', description: 'Bring your family for games and shared moments.', place: 'Al Majaz Park', date: '2026-01-12', time: '17:30', host: 'Maryam', minAge: 0, lat: 25.3338, lon: 55.3846 },
  { id: 'ev3', title: 'Men Majlis', category: 'men', description: 'Men-only discussion session with community hosts.', place: 'Heart of Sharjah', date: '2026-01-15', time: '19:30', host: 'Ahmed', minAge: 18, lat: 25.3573, lon: 55.3906 },
  { id: 'ev4', title: 'Women Wellness Session', category: 'women', description: 'Women-only wellness session with privacy-first community support.', place: 'Corniche', date: '2026-01-18', time: '06:45', host: 'Maryam', minAge: 18, lat: 25.3436, lon: 55.394 },
  { id: 'ev5', title: 'Kids Art Workshop', category: 'kids', description: 'Creative art activities for children with guardian support.', place: 'Al Majaz Waterfront', date: '2026-01-20', time: '16:00', host: 'Maryam', minAge: 0, lat: 25.3349, lon: 55.3832 }
];

const FRIEND_POOL = [
  { id: 'f1', name: 'Ahmed', subtitle: 'Volunteer friend', avatar: 'A' },
  { id: 'f2', name: 'Maryam', subtitle: 'Culture friend', avatar: 'M' },
  { id: 'f3', name: 'Noora', subtitle: 'Family events', avatar: 'N' },
  { id: 'f4', name: 'Salem', subtitle: 'Majlis friend', avatar: 'S' }
];

const REWARDS = [
  { id: 'rw1', cost: 60, title: { en: 'Coffee Voucher', ar: 'قسيمة قهوة' }, description: { en: 'Redeem for coffee at a partner cafe.', ar: 'استبدلها بقهوة من مقهى شريك.' } },
  { id: 'rw2', cost: 120, title: { en: 'Featured Event Ticket', ar: 'تذكرة فعالية مميزة' }, description: { en: 'Demo ticket for a featured community event.', ar: 'تذكرة تجريبية لفعالية مجتمعية مميزة.' } },
  { id: 'rw3', cost: 200, title: { en: 'Premium Badge', ar: 'شارة مميزة' }, description: { en: 'Unlock a premium badge in the profile.', ar: 'افتح شارة مميزة في البروفايل.' } }
];

const IDENTITY_POOL = [
  { name: 'Nasser', gender: 'male', age: 21, badges: ['Starter', 'Explorer'], points: 120 },
  { name: 'Maryam', gender: 'female', age: 24, badges: ['Culture Lover', 'Organizer'], points: 180 },
  { name: 'Ahmed', gender: 'male', age: 27, badges: ['Volunteer'], points: 160 },
  { name: 'Noora', gender: 'female', age: 19, badges: ['Starter', 'Helper'], points: 140 }
];

const els = {
  screens: document.querySelectorAll('.screen'),
  pages: document.querySelectorAll('.page'),
  navBtns: document.querySelectorAll('[data-page-btn]'),
  categoryChips: document.getElementById('category-chips'),
  homeEvents: document.getElementById('home-events'),
  mapPreview: document.getElementById('map-preview'),
  searchEvents: document.getElementById('search-events'),
  friendResults: document.getElementById('friend-results'),
  friendSearch: document.getElementById('friend-search'),
  chatMessages: document.getElementById('chat-messages'),
  friendMessage: document.getElementById('friend-message'),
  sendChat: document.getElementById('send-chat'),
  sendInvite: document.getElementById('send-invite'),
  pageTitle: document.getElementById('page-title'),
  heroPoints: document.getElementById('hero-points'),
  profileName: document.getElementById('profile-name'),
  profileAvatar: document.getElementById('profile-avatar'),
  profileEid: document.getElementById('profile-eid'),
  profilePoints: document.getElementById('profile-points'),
  profileJoined: document.getElementById('profile-joined'),
  profileCreated: document.getElementById('profile-created'),
  badgeList: document.getElementById('badge-list'),
  joinedList: document.getElementById('joined-list'),
  createdList: document.getElementById('created-list'),
  ridesList: document.getElementById('rides-list'),
  rewardPoints: document.getElementById('reward-points'),
  rewardList: document.getElementById('reward-list'),
  ownedRewards: document.getElementById('owned-rewards'),
  driverTarget: document.getElementById('driver-target'),
  toast: document.getElementById('toast'),
  overlay: document.getElementById('overlay'),
  driverSheet: document.getElementById('driver-sheet'),
  settingsSheet: document.getElementById('settings-sheet'),
  rewardsSheet: document.getElementById('rewards-sheet'),
  humaidSheet: document.getElementById('humaid-sheet'),
  quickPrompts: document.getElementById('quick-prompts'),
  humaidMessages: document.getElementById('humaid-messages'),
  humaidInput: document.getElementById('humaid-input'),
  languageSelect: document.getElementById('language-select'),
  mapStyle: document.getElementById('map-style'),
  createRuleBox: document.getElementById('create-rule-box'),
  chatTitle: document.getElementById('chat-title'),
  identityName: document.getElementById('identity-name'),
  identityMeta: document.getElementById('identity-meta'),
  eidInput: document.getElementById('eid-input')
};

function defaultState() {
  return {
    lang: 'en',
    mapStyle: 'light',
    currentScreen: 'splash',
    currentPage: 'home',
    activeCategory: 'all',
    activeFriendId: 'f1',
    addedFriendIds: ['f1', 'f2'],
    searchQuery: '',
    friendSearch: '',
    identity: null,
    eid: '',
    joinedEventIds: [],
    createdEvents: [],
    rides: [],
    ownedRewards: [],
    points: 120,
    badges: ['Starter', 'Explorer'],
    messages: {
      f1: [{ from: 'them', text: 'Salam, let me know if you want to join the beach clean-up.' }],
      f2: [{ from: 'them', text: 'I saved a family picnic spot for the prototype demo.' }],
      f3: [{ from: 'them', text: 'Kids workshop looks good for family flow.' }],
      f4: [{ from: 'them', text: 'Majlis event is ready if your profile can access it.' }]
    },
    humaid: [{ from: 'them', textKey: 'humaidWelcome' }]
  };
}

let state = loadState();
let currentRideEvent = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch (err) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return COPY[state.lang][key] || COPY.en[key] || key;
}

function categoryLabel(category) {
  return t(category);
}

function allEvents() {
  return [...BASE_EVENTS, ...state.createdEvents];
}

function resolveIdentity(eid) {
  const digits = (eid || '').replace(/\D/g, '');
  const last = digits ? Number(digits[digits.length - 1]) : 1;
  const seed = IDENTITY_POOL[last % IDENTITY_POOL.length];
  return {
    ...seed,
    badges: [...seed.badges],
    points: state.identity?.name === seed.name ? state.points : seed.points
  };
}

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(x => x[0]).join('').toUpperCase();
}

function setScreen(screenId) {
  state.currentScreen = screenId;
  els.screens.forEach(screen => screen.classList.toggle('active', screen.id === `screen-${screenId}`));
  saveState();
}

function setPage(pageId) {
  state.currentPage = pageId;
  els.pages.forEach(page => page.classList.toggle('active', page.dataset.page === pageId));
  els.navBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.pageBtn === pageId));
  const titles = {
    home: 'Naseej Emirates',
    explore: t('mapTitle'),
    create: t('createTitle'),
    friends: t('friendsTitle'),
    profile: t('settingsTitle') === 'Settings' ? 'Profile' : 'البروفايل'
  };
  els.pageTitle.textContent = titles[pageId] || 'Naseej Emirates';
  saveState();
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', state.lang === 'ar');
  document.body.classList.toggle('map-dark', state.mapStyle === 'dark');
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  els.languageSelect.value = state.lang;
  els.mapStyle.value = state.mapStyle;
  renderIdentityPreview();
  renderAll();
}

function filteredEvents() {
  const query = state.searchQuery.trim().toLowerCase();
  return allEvents().filter(event => {
    const categoryOk = state.activeCategory === 'all' || event.category === state.activeCategory;
    const queryOk = !query || [event.title, event.description, event.place, event.date, event.category].join(' ').toLowerCase().includes(query);
    return categoryOk && queryOk;
  });
}

function canJoin(event) {
  if (!state.identity) return { ok: false, reason: t('identityRequired') };
  if (event.category === 'men' && state.identity.gender !== 'male') return { ok: false, reason: t('menOnly') };
  if (event.category === 'women' && state.identity.gender !== 'female') return { ok: false, reason: t('womenOnly') };
  if (state.identity.age < event.minAge) return { ok: false, reason: t('ageGate') };
  return { ok: true, reason: '' };
}

function createDirectionsLink(event) {
  return `https://www.google.com/maps/dir/?api=1&destination=${event.lat},${event.lon}`;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove('show'), 2500);
}

function renderCategoryChips() {
  const categories = ['all', 'family', 'men', 'women', 'kids'];
  els.categoryChips.innerHTML = categories.map(cat => `
    <button class="chip-btn ${state.activeCategory === cat ? 'active' : ''}" data-category="${cat}">${categoryLabel(cat)}</button>
  `).join('');
  els.categoryChips.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.category;
      renderHomeEvents();
      renderCategoryChips();
      saveState();
    });
  });
}

function renderHomeEvents() {
  const items = filteredEvents();
  if (!items.length) {
    els.homeEvents.innerHTML = `<div class="event-card"><div class="tiny-meta">${t('noEvents') || t('mapEmpty')}</div></div>`;
    return;
  }

  els.homeEvents.innerHTML = items.map(event => {
    const joinState = canJoin(event);
    const joined = state.joinedEventIds.includes(event.id);
    return `
      <article class="event-card">
        <div class="event-topline">
          <div>
            <h4>${event.title}</h4>
            <div class="event-meta">${event.place} • ${event.date} • ${event.time}<br>${t('host')}: ${event.host}</div>
          </div>
          <div>
            <span class="event-tag">${categoryLabel(event.category)}</span>
            ${!joinState.ok ? `<div class="lock-tag" style="margin-top:8px;">18+</div>` : ''}
          </div>
        </div>
        <div class="event-meta" style="margin-top:10px;">${event.description}</div>
        ${!joinState.ok ? `<div class="tiny-meta" style="margin-top:10px; color:#7a4e22;">${joinState.reason}</div>` : ''}
        <div class="card-actions">
          <button class="small-action ${joinState.ok && !joined ? 'primary' : ''}" data-action="join" data-event-id="${event.id}">${joined ? t('joined') : t('join')}</button>
          <button class="small-action" data-action="driver" data-event-id="${event.id}">${t('driver')}</button>
          <button class="small-action" data-action="directions" data-event-id="${event.id}">${t('directions')}</button>
        </div>
      </article>
    `;
  }).join('');

  els.homeEvents.querySelectorAll('[data-action]').forEach(btn => {
    const event = allEvents().find(item => item.id === btn.dataset.eventId);
    if (!event) return;
    btn.addEventListener('click', () => handleEventAction(btn.dataset.action, event));
  });
}

function renderMapPreview(selectedId) {
  const items = filteredEvents();
  const event = items.find(item => item.id === selectedId) || items[0];
  if (!event) {
    els.mapPreview.innerHTML = `<div class="tiny-meta">${t('mapEmpty')}</div>`;
    return;
  }
  const joinState = canJoin(event);
  els.mapPreview.innerHTML = `
    <div class="event-topline">
      <div>
        <h4>${event.title}</h4>
        <div class="event-meta">${event.place} • ${event.date} • ${event.time}</div>
      </div>
      <span class="event-tag">${categoryLabel(event.category)}</span>
    </div>
    <div class="event-meta" style="margin-top:10px;">${event.description}</div>
    <div class="tiny-meta" style="margin-top:10px;">${joinState.ok ? t('requestDriver') : joinState.reason}</div>
    <div class="card-actions" style="margin-top:12px;">
      <button class="small-action primary" data-action="join" data-event-id="${event.id}">${state.joinedEventIds.includes(event.id) ? t('joined') : t('join')}</button>
      <button class="small-action" data-action="driver" data-event-id="${event.id}">${t('driver')}</button>
      <button class="small-action" data-action="directions" data-event-id="${event.id}">${t('directions')}</button>
    </div>
  `;
  els.mapPreview.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => handleEventAction(btn.dataset.action, event));
  });
}

function handleEventAction(action, event) {
  if (action === 'join') {
    if (state.joinedEventIds.includes(event.id)) {
      showToast(t('alreadyJoined'));
      return;
    }
    const allowed = canJoin(event);
    if (!allowed.ok) {
      showToast(allowed.reason);
      return;
    }
    state.joinedEventIds.push(event.id);
    state.points += 10;
    if (!state.badges.includes('Participant')) state.badges.push('Participant');
    if (state.identity) state.identity.points = state.points;
    saveState();
    renderAll();
    showToast(t('joinSuccess'));
  }
  if (action === 'driver') {
    currentRideEvent = event;
    els.driverTarget.textContent = `${event.title} • ${event.place}`;
    openSheet('driver');
  }
  if (action === 'directions') {
    window.open(createDirectionsLink(event), '_blank');
  }
}

function renderFriends() {
  const q = state.friendSearch.trim().toLowerCase();
  const entries = FRIEND_POOL.filter(friend => friend.name.toLowerCase().includes(q));
  els.friendResults.innerHTML = entries.map(friend => {
    const added = state.addedFriendIds.includes(friend.id);
    return `
      <div class="friend-entry ${state.activeFriendId === friend.id ? 'selected' : ''}" data-friend-id="${friend.id}">
        <div class="friend-main">
          <div class="avatar small-avatar">${friend.avatar}</div>
          <div>
            <h4>${friend.name}</h4>
            <div class="tiny-meta">${friend.subtitle}</div>
          </div>
        </div>
        <button class="small-action">${added ? '✓' : '+'}</button>
      </div>
    `;
  }).join('');

  els.friendResults.querySelectorAll('[data-friend-id]').forEach(entry => {
    entry.addEventListener('click', () => {
      const friendId = entry.dataset.friendId;
      if (!state.addedFriendIds.includes(friendId)) {
        state.addedFriendIds.push(friendId);
        showToast(t('friendAdded'));
      }
      state.activeFriendId = friendId;
      renderFriends();
      renderFriendChat();
      saveState();
    });
  });

  renderFriendChat();
}

function renderFriendChat() {
  const friend = FRIEND_POOL.find(item => item.id === state.activeFriendId) || FRIEND_POOL[0];
  els.chatTitle.textContent = friend.name;
  const messages = state.messages[friend.id] || [];
  els.chatMessages.innerHTML = messages.map(msg => `<div class="bubble ${msg.from === 'me' ? 'me' : 'them'}">${msg.text}</div>`).join('');
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function renderProfile() {
  if (!state.identity) return;
  els.profileName.textContent = state.identity.name;
  els.profileAvatar.textContent = initials(state.identity.name);
  els.profileEid.textContent = `…${state.eid.slice(-4) || '5671'}`;
  els.profilePoints.textContent = state.points;
  els.heroPoints.textContent = state.points;
  els.profileJoined.textContent = String(state.joinedEventIds.length);
  els.profileCreated.textContent = String(state.createdEvents.length);
  els.badgeList.innerHTML = state.badges.map(badge => `<span class="badge-chip">${badge}</span>`).join('');

  const joinedEvents = allEvents().filter(event => state.joinedEventIds.includes(event.id));
  els.joinedList.innerHTML = joinedEvents.length ? joinedEvents.map(event => `<div class="tiny-item"><div><strong>${event.title}</strong><div class="tiny-meta">${event.place} • ${event.date}</div></div></div>`).join('') : `<div class="tiny-item"><div class="tiny-meta">${t('none')}</div></div>`;
  els.createdList.innerHTML = state.createdEvents.length ? state.createdEvents.map(event => `<div class="tiny-item"><div><strong>${event.title}</strong><div class="tiny-meta">${event.place} • ${event.date}</div></div></div>`).join('') : `<div class="tiny-item"><div class="tiny-meta">${t('none')}</div></div>`;
  els.ridesList.innerHTML = state.rides.length ? state.rides.map(ride => `<div class="tiny-item"><div><strong>${ride.eventTitle}</strong><div class="tiny-meta">ETA ${ride.eta} min • ${ride.pickup || ride.place}</div></div></div>`).join('') : `<div class="tiny-item"><div class="tiny-meta">${t('none')}</div></div>`;
}

function renderRewards() {
  els.rewardPoints.textContent = state.points;
  els.rewardList.innerHTML = REWARDS.map(reward => {
    const owned = state.ownedRewards.some(item => item.id === reward.id);
    return `
      <div class="reward-card">
        <div>
          <h4>${reward.title[state.lang]}</h4>
          <div class="reward-meta">${reward.description[state.lang]}<br>${t('points')}: ${reward.cost}</div>
        </div>
        <button class="small-action ${owned ? '' : 'primary'}" data-reward-id="${reward.id}">${owned ? t('owned') : t('buy')}</button>
      </div>
    `;
  }).join('');
  els.rewardList.querySelectorAll('[data-reward-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const reward = REWARDS.find(item => item.id === btn.dataset.rewardId);
      if (!reward) return;
      if (state.ownedRewards.some(item => item.id === reward.id)) return;
      if (state.points < reward.cost) {
        showToast(t('rewardLocked'));
        return;
      }
      state.points -= reward.cost;
      state.ownedRewards.push({ id: reward.id, title: reward.title[state.lang], cost: reward.cost });
      if (reward.id === 'rw3' && !state.badges.includes('Premium')) state.badges.push('Premium');
      saveState();
      renderAll();
      showToast(t('rewardPurchased'));
    });
  });

  els.ownedRewards.innerHTML = state.ownedRewards.length
    ? state.ownedRewards.map(item => `<div class="tiny-item"><div><strong>${item.title}</strong><div class="tiny-meta">${t('points')}: ${item.cost}</div></div></div>`).join('')
    : `<div class="tiny-item"><div class="tiny-meta">${t('none')}</div></div>`;
}

function renderIdentityPreview() {
  const eid = els.eidInput.value.trim() || state.eid;
  if (!eid) {
    els.identityName.textContent = t('digitalIdentityLinked');
    els.identityMeta.textContent = t('accessResolved');
    return;
  }
  const identity = resolveIdentity(eid);
  const genderLabel = identity.gender === 'male' ? (state.lang === 'ar' ? 'ذكر' : 'Male') : (state.lang === 'ar' ? 'أنثى' : 'Female');
  els.identityName.textContent = identity.name;
  els.identityMeta.textContent = `${genderLabel} • ${identity.age}+ • ${t('linkedMeta')}`;
}

function renderCreateRule() {
  const cat = document.getElementById('create-category').value;
  if (cat === 'men') els.createRuleBox.textContent = t('createRuleMen');
  else if (cat === 'women') els.createRuleBox.textContent = t('createRuleWomen');
  else els.createRuleBox.textContent = t('createRuleDefault');
}

function renderHumaid() {
  els.quickPrompts.innerHTML = [
    state.lang === 'ar' ? 'اقترح فعاليات مناسبة' : 'Suggest joinable events',
    state.lang === 'ar' ? 'اشرح القوانين' : 'Explain the rules',
    state.lang === 'ar' ? 'كيف أطلب سائق؟' : 'How do I request a driver?'
  ].map(text => `<button class="quick-chip" data-prompt="${text}">${text}</button>`).join('');
  els.quickPrompts.querySelectorAll('[data-prompt]').forEach(btn => {
    btn.addEventListener('click', () => submitHumaid(btn.dataset.prompt));
  });
  els.humaidMessages.innerHTML = state.humaid.map(item => {
    const text = item.textKey ? t(item.textKey) : item.text;
    return `<div class="bubble ${item.from === 'me' ? 'me' : 'them'}">${text}</div>`;
  }).join('');
  els.humaidMessages.scrollTop = els.humaidMessages.scrollHeight;
}

function humaidReply(input) {
  const text = input.toLowerCase();
  if (text.includes('rule') || text.includes('قانون') || text.includes('رجال') || text.includes('نساء') || text.includes('18')) return t('humaidRules');
  if (text.includes('driver') || text.includes('transport') || text.includes('سائق') || text.includes('مواصلات')) return t('humaidTransport');
  if (text.includes('suggest') || text.includes('event') || text.includes('فعال')) {
    const matches = allEvents().filter(event => canJoin(event).ok).slice(0, 3);
    const lines = matches.map(event => `• ${event.title} — ${event.place} — ${categoryLabel(event.category)}`);
    return `${t('humaidSuggest')}\n${lines.join('\n')}`;
  }
  return t('humaidFallback');
}

function submitHumaid(rawText) {
  const text = rawText.trim();
  if (!text) return;
  state.humaid.push({ from: 'me', text });
  state.humaid.push({ from: 'them', text: humaidReply(text) });
  saveState();
  renderHumaid();
  els.humaidInput.value = '';
}

function renderAll() {
  renderCategoryChips();
  renderHomeEvents();
  renderMapPreview(state.selectedMapEventId || filteredEvents()[0]?.id);
  renderFriends();
  renderProfile();
  renderRewards();
  renderHumaid();
}

function openSheet(type) {
  els.overlay.classList.add('active');
  closeSheets();
  const target = type === 'driver' ? els.driverSheet : type === 'settings' ? els.settingsSheet : type === 'rewards' ? els.rewardsSheet : els.humaidSheet;
  target.classList.add('open');
}

function closeSheets() {
  [els.driverSheet, els.settingsSheet, els.rewardsSheet, els.humaidSheet].forEach(sheet => sheet.classList.remove('open'));
}

function attachEvents() {
  document.querySelectorAll('[data-screen]').forEach(btn => {
    btn.addEventListener('click', () => setScreen(btn.dataset.screen));
  });

  document.getElementById('terms-checkbox').addEventListener('change', e => {
    document.getElementById('terms-continue').disabled = !e.target.checked;
  });

  document.getElementById('terms-continue').addEventListener('click', () => setScreen('signin'));

  els.eidInput.addEventListener('input', renderIdentityPreview);

  document.getElementById('signin-continue').addEventListener('click', () => {
    const eid = els.eidInput.value.trim();
    if (!eid) {
      showToast(t('identityRequired'));
      return;
    }
    state.eid = eid;
    state.identity = resolveIdentity(eid);
    state.points = state.identity.points;
    state.badges = [...state.identity.badges];
    saveState();
    renderIdentityPreview();
    showToast(t('identityLinkedToast'));
    setScreen('otp');
  });

  document.getElementById('otp-login').addEventListener('click', () => {
    if (!state.identity) {
      showToast(t('identityRequired'));
      return;
    }
    setScreen('app');
    setPage(state.currentPage || 'home');
    renderAll();
  });

  els.navBtns.forEach(btn => btn.addEventListener('click', () => setPage(btn.dataset.pageBtn)));
  document.getElementById('home-open-map').addEventListener('click', () => setPage('explore'));

  els.searchEvents.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    renderHomeEvents();
    renderMapPreview(filteredEvents()[0]?.id);
    saveState();
  });

  document.querySelectorAll('.map-pin').forEach(pin => pin.addEventListener('click', () => {
    state.selectedMapEventId = pin.dataset.eventId;
    renderMapPreview(pin.dataset.eventId);
    saveState();
  }));

  els.friendSearch.addEventListener('input', e => {
    state.friendSearch = e.target.value;
    renderFriends();
    saveState();
  });

  els.sendChat.addEventListener('click', () => {
    const text = els.friendMessage.value.trim();
    if (!text) {
      showToast(t('messageEmpty'));
      return;
    }
    const friendId = state.activeFriendId;
    state.messages[friendId] = state.messages[friendId] || [];
    state.messages[friendId].push({ from: 'me', text });
    state.messages[friendId].push({ from: 'them', text: state.lang === 'ar' ? 'تمت، نشوفك هناك.' : 'Done, see you there.' });
    els.friendMessage.value = '';
    saveState();
    renderFriendChat();
  });

  els.sendInvite.addEventListener('click', () => {
    const friendId = state.activeFriendId;
    const event = filteredEvents()[0] || allEvents()[0];
    state.messages[friendId] = state.messages[friendId] || [];
    state.messages[friendId].push({ from: 'me', text: `${t('chatInvitePrefix')} ${event.title}` });
    saveState();
    renderFriendChat();
    showToast(t('inviteSent'));
  });

  document.getElementById('create-category').addEventListener('change', renderCreateRule);

  document.getElementById('publish-event').addEventListener('click', () => {
    if (!state.identity) {
      showToast(t('identityRequired'));
      return;
    }
    const title = document.getElementById('create-title').value.trim();
    const category = document.getElementById('create-category').value;
    const date = document.getElementById('create-date').value;
    const time = document.getElementById('create-time').value || '18:00';
    const place = document.getElementById('create-location').value.trim();
    const description = document.getElementById('create-description').value.trim();
    if (!title || !date || !place || !description) {
      showToast(t('fillCreate'));
      return;
    }
    if (category === 'men' && state.identity.gender !== 'male') { showToast(t('createMenOnly')); return; }
    if (category === 'women' && state.identity.gender !== 'female') { showToast(t('createWomenOnly')); return; }
    if ((category === 'men' || category === 'women') && state.identity.age < 18) { showToast(t('createAdultOnly')); return; }
    const id = `ev${Date.now()}`;
    state.createdEvents.unshift({ id, title, category, description, place, date, time, host: state.identity.name, minAge: category === 'men' || category === 'women' ? 18 : 0, lat: 25.34, lon: 55.39 });
    state.points += 25;
    if (!state.badges.includes('Organizer')) state.badges.push('Organizer');
    document.getElementById('create-title').value = '';
    document.getElementById('create-location').value = '';
    document.getElementById('create-description').value = '';
    document.getElementById('create-time').value = '';
    saveState();
    renderAll();
    setPage('home');
    showToast(t('eventPublished'));
  });

  document.getElementById('open-settings').addEventListener('click', () => openSheet('settings'));
  document.getElementById('open-rewards').addEventListener('click', () => openSheet('rewards'));
  document.getElementById('open-humaid').addEventListener('click', () => openSheet('humaid'));

  els.overlay.addEventListener('click', () => {
    closeSheets();
    els.overlay.classList.remove('active');
  });

  document.getElementById('confirm-ride').addEventListener('click', () => {
    if (!currentRideEvent) return;
    const eta = 6 + Math.floor(Math.random() * 11);
    state.rides.unshift({ eventTitle: currentRideEvent.title, place: currentRideEvent.place, pickup: document.getElementById('ride-pickup').value.trim(), eta });
    saveState();
    renderAll();
    closeSheets();
    els.overlay.classList.remove('active');
    showToast(t('rideConfirmed').replace('{eta}', eta));
  });

  document.getElementById('save-settings').addEventListener('click', () => {
    state.lang = els.languageSelect.value;
    state.mapStyle = els.mapStyle.value;
    saveState();
    applyLanguage();
    closeSheets();
    els.overlay.classList.remove('active');
    showToast(t('languageSaved'));
  });

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState();
    saveState();
    els.eidInput.value = '';
    document.getElementById('terms-checkbox').checked = false;
    document.getElementById('terms-continue').disabled = true;
    applyLanguage();
    setScreen('splash');
    setPage('home');
    closeSheets();
    els.overlay.classList.remove('active');
    showToast(t('resetDone'));
  };

  document.getElementById('reset-demo').addEventListener('click', reset);
  document.getElementById('outside-reset').addEventListener('click', reset);

  document.getElementById('send-humaid').addEventListener('click', () => submitHumaid(els.humaidInput.value));
  els.humaidInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitHumaid(els.humaidInput.value);
    }
  });
}

function boot() {
  if (state.eid && !state.identity) state.identity = resolveIdentity(state.eid);
  els.eidInput.value = state.eid || '';
  renderIdentityPreview();
  applyLanguage();
  setScreen(state.currentScreen || 'splash');
  setPage(state.currentPage || 'home');
  renderCreateRule();
  attachEvents();
}

boot();
