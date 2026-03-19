const STORAGE_KEY = 'naseej_prototype_mobile_v3';

const COPY = {
  en: {
    welcomeTitle: 'Welcome to Naseej Emirates',
    welcomeSub: 'One Community Woven Together',
    joinUs: 'Join Us In Naseej Emirates',
    back: 'Back',
    beforeContinue: 'Before you continue',
    termsTitle: 'Terms of Service',
    termsSub: 'This is a competition prototype. It presents the experience only, not real identity verification.',
    termsInside: 'What this prototype includes',
    termsItem1: 'Digital identity sign-in concept with OTP confirmation.',
    termsItem2: 'Community event discovery across family, men, women, and kids categories.',
    termsItem3: 'Access rules, driver request, friends chat, rewards, and settings flows.',
    termsItem4: 'Humaid AI as an in-app conversation assistant.',
    termsAccept: 'I accept the prototype terms.',
    continue: 'Continue',
    signinTitle: 'Sign in with Digital ID',
    signinSub: 'In the real product, name, age, and gender are resolved automatically from the digital identity provider.',
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
    otpSub: 'Complete the OTP step to continue to the prototype app.',
    otpHelper: 'Use demo code 123456',
    otpError: 'Incorrect OTP. Try again.',
    resendOtp: 'Resend OTP',
    login: 'Login',
    headerKicker: 'Community app',
    smartMatching: 'Smart matching',
    heroTitle: 'Find trusted community events near you',
    heroSub: 'Family, men, women, and kids experiences with clear rules and transport support.',
    points: 'Points',
    joined: 'Joined',
    categoriesLabel: 'Categories',
    eventPreview: 'Community event preview',
    mapTitle: 'Map',
    mapSub: 'Tap a pin to preview an event and open directions.',
    createTitle: 'Create event',
    createSub: 'Publish a new event in the prototype and earn points.',
    eventTitle: 'Event title',
    categoryLabel: 'Category',
    dateLabel: 'Date',
    timeLabel: 'Time',
    locationLabel: 'Location',
    descriptionLabel: 'Description',
    publishEvent: 'Publish event',
    friendsTitle: 'Friends',
    friendsSub: 'Add by name, send invites, and chat inside the prototype.',
    sendInvite: 'Send invite',
    send: 'Send',
    createdEvents: 'Created events',
    joinedEvents: 'Joined events',
    ridesTitle: 'Driver requests',
    rewardsTitle: 'Rewards Store',
    rewardsSub: 'Use your points to unlock rewards',
    ownedRewards: 'Owned rewards',
    settingsTitle: 'Settings',
    settingsSub: 'Language, theme, and account actions',
    profileMeta: 'Digital identity linked • access rules resolved automatically',
    profileShortcuts: 'Profile shortcuts',
    languageLabel: 'Language',
    languageSub: 'Switch between English and Arabic',
    mapStyleLabel: 'Map style',
    mapStyleSub: 'Change the prototype map surface',
    mapStyleClassic: 'Classic',
    mapStyleContrast: 'Contrast',
    backToProfile: 'Back to profile',
    logout: 'Log out',
    friendSearchPlaceholder: 'Search a friend by name',
    friendMessagePlaceholder: 'Type a message…',
    humaidPlaceholder: 'Ask Humaid about events, rules, or suggestions…',
    createTitlePlaceholder: 'Neighborhood community gathering',
    createLocationPlaceholder: 'Al Majaz Waterfront',
    createDescriptionPlaceholder: 'Short welcoming description for the event.',
    humaidTitle: 'Humaid AI',
    humaidIntro: 'Ask about events, rules, categories, or transport. This is an in-app conversation flow for the prototype.',
    navHome: 'Home',
    navMap: 'Map',
    navCreate: 'Create',
    navFriends: 'Friends',
    navProfile: 'Profile',
    family: 'Family',
    men: 'Men',
    women: 'Women',
    kids: 'Kids',
    all: 'All',
    host: 'Hosted by',
    join: 'Join',
    driver: 'Driver',
    directions: 'Directions',
    buy: 'Buy',
    owned: 'Owned',
    open: 'Open',
    none: 'None yet.',
    noEvents: 'No events for this filter.',
    alreadyJoined: 'You already joined this event.',
    joinSuccess: 'Joined successfully. +10 points',
    menOnly: 'This is a men-only event.',
    womenOnly: 'This is a women-only event.',
    ageGate: 'Your profile does not match the age requirement.',
    mapEmpty: 'Tap any pin to preview the event here.',
    rideConfirmed: 'Driver confirmed. Arrival in {eta} min.',
    friendAdded: 'Friend added to the prototype.',
    messageEmpty: 'Type a message first.',
    inviteSent: 'Invite sent.',
    rewardPurchased: 'Reward purchased.',
    rewardLocked: 'Not enough points yet.',
    eventPublished: 'Event published. +25 points',
    fillCreate: 'Complete title, date, location, and description first.',
    createMenOnly: 'Men events are available for male-linked profiles only.',
    createWomenOnly: 'Women events are available for female-linked profiles only.',
    createAdultOnly: 'You must be 18+ for men or women events.',
    createRuleDefault: 'Family and kids events stay open. Men and women events become 18+ automatically.',
    createRuleMen: 'Men events are 18+ and limited to male-linked profiles.',
    createRuleWomen: 'Women events are 18+ and limited to female-linked profiles.',
    humaidWelcome: 'Salam. I can suggest events, explain the rules, and help with transport inside Naseej Emirates.',
    humaidRules: 'Inside Naseej Emirates: men events are for male-linked profiles, women events are for female-linked profiles, and 18+ rules apply automatically. Family and kids stay open to the wider community.',
    humaidTransport: 'Open any event card and tap Driver for a demo request, or Directions to open Google Maps.',
    humaidSuggest: 'Based on your linked profile, these are the best choices for you:',
    humaidFallback: 'Try: suggest events I can join, explain the rules, or how do I request a driver?',
    identityRequired: 'Enter your Emirates ID first.',
    otpResent: 'A new demo OTP is ready.',
    linkedMeta: 'Gender and age come from the linked digital identity.',
    languageSaved: 'Settings updated.',
    loggedOut: 'Logged out.',
    rewardCoffeeTitle: 'Coffee Voucher',
    rewardCoffeeDesc: 'Redeem for a coffee at a partner café.',
    rewardTicketTitle: 'Special Event Ticket',
    rewardTicketDesc: 'Unlock access to a premium prototype event.',
    rewardBadgeTitle: 'Premium Badge',
    rewardBadgeDesc: 'Add a premium badge to your profile.'
  },
  ar: {
    welcomeTitle: 'مرحباً بك في نسيج الإمارات',
    welcomeSub: 'مجتمع واحد منسوج معًا',
    joinUs: 'انضم إلى نسيج الإمارات',
    back: 'رجوع',
    beforeContinue: 'قبل ما تكمل',
    termsTitle: 'شروط الخدمة',
    termsSub: 'هذا بروتوتايب للمسابقة ويعرض التجربة فقط، وليس تحققًا حقيقيًا.',
    termsInside: 'ماذا يعرض هذا البروتوتايب',
    termsItem1: 'فكرة تسجيل الدخول بالهوية الرقمية مع خطوة OTP.',
    termsItem2: 'اكتشاف فعاليات المجتمع بفئات العائلة والرجال والنساء والأطفال.',
    termsItem3: 'قواعد الدخول وطلب السائق وشات الأصدقاء والجوائز والإعدادات.',
    termsItem4: 'حميد AI كمساعد محادثة داخل التطبيق.',
    termsAccept: 'أوافق على شروط البروتوتايب.',
    continue: 'متابعة',
    signinTitle: 'تسجيل الدخول بالهوية الرقمية',
    signinSub: 'في المنتج الحقيقي يتم جلب الاسم والعمر والجنس تلقائيًا من مزود الهوية الرقمية.',
    connectedIdentity: 'الهوية المرتبطة',
    verified: 'موثقة',
    eidLabel: 'رقم الهوية',
    autoName: 'الاسم تلقائي',
    autoAge: 'العمر تلقائي',
    autoGender: 'الجنس تلقائي',
    profileSource: 'مصدر الملف',
    accessRules: 'قواعد الدخول',
    digitalIdentityLinked: 'تم ربط الهوية الرقمية',
    accessResolved: 'تم تحديد الصلاحيات من الهوية المرتبطة',
    continueOtp: 'المتابعة إلى OTP',
    verifyTitle: 'تحقق من الهوية',
    otpSub: 'أكمل خطوة OTP للانتقال إلى التطبيق التجريبي.',
    otpHelper: 'استخدم الرمز التجريبي 123456',
    otpError: 'رمز OTP غير صحيح. حاول مرة ثانية.',
    resendOtp: 'إعادة إرسال OTP',
    login: 'دخول',
    headerKicker: 'تطبيق مجتمعي',
    smartMatching: 'مطابقة ذكية',
    heroTitle: 'اكتشف فعاليات مجتمعية موثوقة بالقرب منك',
    heroSub: 'فعاليات للعائلة والرجال والنساء والأطفال مع قواعد واضحة ودعم للمواصلات.',
    points: 'نقاط',
    joined: 'انضممت',
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
    createdEvents: 'فعاليات أنشأتها',
    joinedEvents: 'فعاليات انضممت لها',
    ridesTitle: 'طلبات السائق',
    rewardsTitle: 'متجر الجوائز',
    rewardsSub: 'استخدم نقاطك للحصول على جوائز',
    ownedRewards: 'جوائزك',
    settingsTitle: 'الإعدادات',
    settingsSub: 'اللغة، الستايل، وإجراءات الحساب',
    profileMeta: 'الهوية الرقمية مرتبطة • الصلاحيات محددة تلقائيًا',
    profileShortcuts: 'اختصارات البروفايل',
    languageLabel: 'اللغة',
    languageSub: 'بدّل بين العربية والإنجليزية',
    mapStyleLabel: 'ستايل الخريطة',
    mapStyleSub: 'غيّر شكل سطح الخريطة في البروتوتايب',
    mapStyleClassic: 'كلاسيك',
    mapStyleContrast: 'أوضح',
    backToProfile: 'رجوع للبروفايل',
    logout: 'تسجيل خروج',
    friendSearchPlaceholder: 'ابحث عن صديق بالاسم',
    friendMessagePlaceholder: 'اكتب رسالة…',
    humaidPlaceholder: 'اسأل حميد عن الفعاليات أو القوانين أو الاقتراحات…',
    createTitlePlaceholder: 'لقاء مجتمعي في الحي',
    createLocationPlaceholder: 'واجهة المجاز',
    createDescriptionPlaceholder: 'وصف قصير ومرحب للفعالية.',
    humaidTitle: 'حميد AI',
    humaidIntro: 'اسأل عن الفعاليات أو القوانين أو الفئات أو المواصلات. هذا مسار محادثة داخل البروتوتايب.',
    navHome: 'الرئيسية',
    navMap: 'الخريطة',
    navCreate: 'إضافة',
    navFriends: 'الأصدقاء',
    navProfile: 'البروفايل',
    family: 'العائلة',
    men: 'الرجال',
    women: 'النساء',
    kids: 'الأطفال',
    all: 'الكل',
    host: 'المستضيف',
    join: 'انضم',
    driver: 'سائق',
    directions: 'الاتجاهات',
    buy: 'شراء',
    owned: 'تمت',
    open: 'فتح',
    none: 'لا يوجد بعد.',
    noEvents: 'لا توجد فعاليات لهذا الفلتر.',
    alreadyJoined: 'أنت منضم لهذه الفعالية مسبقًا.',
    joinSuccess: 'تم الانضمام. +10 نقاط',
    menOnly: 'هذه فعالية للرجال فقط.',
    womenOnly: 'هذه فعالية للنساء فقط.',
    ageGate: 'عمرك لا يطابق شرط الدخول.',
    mapEmpty: 'اضغط أي دبوس لمعاينة الفعالية هنا.',
    rideConfirmed: 'تم تأكيد السائق. الوصول خلال {eta} دقيقة.',
    friendAdded: 'تمت إضافة الصديق داخل البروتوتايب.',
    messageEmpty: 'اكتب رسالة أولاً.',
    inviteSent: 'تم إرسال الدعوة.',
    rewardPurchased: 'تم شراء الجائزة.',
    rewardLocked: 'النقاط غير كافية حالياً.',
    eventPublished: 'تم نشر الفعالية. +25 نقطة',
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
    humaidSuggest: 'حسب ملفك المرتبط، هذه أفضل الفعاليات المناسبة لك:',
    humaidFallback: 'جرّب: اقترح لي فعاليات مناسبة، اشرح القوانين، أو كيف أطلب سائق؟',
    identityRequired: 'أدخل رقم الهوية أولاً.',
    otpResent: 'تم تجهيز OTP تجريبي جديد.',
    linkedMeta: 'العمر والجنس يتم جلبهما من الهوية الرقمية المرتبطة.',
    languageSaved: 'تم تحديث الإعدادات.',
    loggedOut: 'تم تسجيل الخروج.',
    rewardCoffeeTitle: 'قسيمة قهوة',
    rewardCoffeeDesc: 'استبدلها بقهوة من مقهى شريك.',
    rewardTicketTitle: 'تذكرة فعالية خاصة',
    rewardTicketDesc: 'افتح دخولًا لفعالية بروتوتايب مميزة.',
    rewardBadgeTitle: 'شارة مميزة',
    rewardBadgeDesc: 'أضف شارة مميزة إلى بروفايلك.'
  }
};

const IDENTITIES = [
  { name: 'Nasser Alkarbi', gender: 'male', age: 21, badges: ['Starter', 'Explorer'], points: 120 },
  { name: 'Ahmed Salem', gender: 'male', age: 27, badges: ['Volunteer'], points: 180 },
  { name: 'Maryam Saif', gender: 'female', age: 24, badges: ['Organizer'], points: 200 },
  { name: 'Noora Khaled', gender: 'female', age: 19, badges: ['Culture Lover'], points: 140 }
];

const BASE_EVENTS = [
  { id: 'ev1', title: 'Beach Clean-up', category: 'family', date: '2026-01-10', time: '08:00', place: 'Al Khan Beach', description: 'A light volunteering activity open to everyone.', host: 'Ahmed', minAge: 0, left: 24, top: 34 },
  { id: 'ev2', title: 'Family Park Picnic', category: 'family', date: '2026-01-12', time: '17:30', place: 'Al Majaz Park', description: 'Games, food corners, and time together for all ages.', host: 'Maryam', minAge: 0, left: 58, top: 42 },
  { id: 'ev3', title: 'Men Majlis Talk', category: 'men', date: '2026-01-15', time: '19:30', place: 'Heart of Sharjah', description: 'Men-only community discussion session.', host: 'Ahmed', minAge: 18, left: 42, top: 68 },
  { id: 'ev4', title: 'Women Wellness Session', category: 'women', date: '2026-01-18', time: '06:45', place: 'Corniche', description: 'Women-only wellness activity with guided coaching.', host: 'Maryam', minAge: 18, left: 72, top: 24 },
  { id: 'ev5', title: 'Kids Art Workshop', category: 'kids', date: '2026-01-20', time: '16:00', place: 'Al Majaz Waterfront', description: 'Creative workshop for children with guardian support.', host: 'Noora', minAge: 0, left: 22, top: 56 }
];

const FRIENDS = [
  { id: 'f1', name: 'Ahmed', avatar: 'A', subtitle: 'Volunteering and men events' },
  { id: 'f2', name: 'Maryam', avatar: 'M', subtitle: 'Culture and women wellness' },
  { id: 'f3', name: 'Noora', avatar: 'N', subtitle: 'Kids and family activities' }
];

function getRewards(lang) {
  return [
    { id: 'rw1', cost: 60, title: COPY[lang].rewardCoffeeTitle, desc: COPY[lang].rewardCoffeeDesc },
    { id: 'rw2', cost: 120, title: COPY[lang].rewardTicketTitle, desc: COPY[lang].rewardTicketDesc },
    { id: 'rw3', cost: 200, title: COPY[lang].rewardBadgeTitle, desc: COPY[lang].rewardBadgeDesc }
  ];
}

const el = {
  termsCheckbox: document.getElementById('termsCheckbox'),
  termsContinue: document.getElementById('termsContinue'),
  eidInput: document.getElementById('eidInput'),
  identityName: document.getElementById('identityName'),
  identityMeta: document.getElementById('identityMeta'),
  continueOtp: document.getElementById('continueOtp'),
  otpInputs: Array.from(document.querySelectorAll('.otp-input')),
  otpError: document.getElementById('otpError'),
  otpHelper: document.getElementById('otpHelper'),
  resendOtp: document.getElementById('resendOtp'),
  loginBtn: document.getElementById('loginBtn'),
  pageTitle: document.getElementById('pageTitle'),
  categoryChips: document.getElementById('categoryChips'),
  homeEvents: document.getElementById('homeEvents'),
  heroPoints: document.getElementById('heroPoints'),
  heroJoined: document.getElementById('heroJoined'),
  goMapFromHome: document.getElementById('goMapFromHome'),
  mapFilterRow: document.getElementById('mapFilterRow'),
  mapBoard: document.getElementById('mapBoard'),
  mapDetail: document.getElementById('mapDetail'),
  createCategory: document.getElementById('createCategory'),
  createTitleInput: document.getElementById('createTitleInput'),
  createDate: document.getElementById('createDate'),
  createTime: document.getElementById('createTime'),
  createLocation: document.getElementById('createLocation'),
  createDescription: document.getElementById('createDescription'),
  createRuleBanner: document.getElementById('createRuleBanner'),
  publishEvent: document.getElementById('publishEvent'),
  friendSearch: document.getElementById('friendSearch'),
  friendResults: document.getElementById('friendResults'),
  chatFriendTitle: document.getElementById('chatFriendTitle'),
  chatMessages: document.getElementById('chatMessages'),
  friendMessage: document.getElementById('friendMessage'),
  sendChat: document.getElementById('sendChat'),
  sendInvite: document.getElementById('sendInvite'),
  profileAvatar: document.getElementById('profileAvatar'),
  profileName: document.getElementById('profileName'),
  profileMeta: document.getElementById('profileMeta'),
  profileEid: document.getElementById('profileEid'),
  profilePoints: document.getElementById('profilePoints'),
  profileJoined: document.getElementById('profileJoined'),
  profileCreated: document.getElementById('profileCreated'),
  badgeList: document.getElementById('badgeList'),
  joinedList: document.getElementById('joinedList'),
  createdList: document.getElementById('createdList'),
  ridesList: document.getElementById('ridesList'),
  settingsLangToggle: document.getElementById('settingsLangToggle'),
  mapStyleToggle: document.getElementById('mapStyleToggle'),
  logoutBtn: document.getElementById('logoutBtn'),
  rewardPoints: document.getElementById('rewardPoints'),
  rewardsStoreList: document.getElementById('rewardsStoreList'),
  ownedRewardsList: document.getElementById('ownedRewardsList'),
  openAi: document.getElementById('openAi'),
  closeAi: document.getElementById('closeAi'),
  overlay: document.getElementById('overlay'),
  aiSheet: document.getElementById('aiSheet'),
  aiChat: document.getElementById('aiChat'),
  aiInput: document.getElementById('aiInput'),
  sendAi: document.getElementById('sendAi'),
  toast: document.getElementById('toast')
};

function defaultState() {
  return {
    lang: 'en',
    screen: 'splash',
    page: 'home',
    termsAccepted: false,
    eid: '',
    pendingOtp: '123456',
    categoryFilter: 'all',
    mapFilter: 'all',
    mapStyle: 'classic',
    selectedFriend: 'f1',
    selectedMapEvent: 'ev1',
    profile: { ...IDENTITIES[0] },
    events: [...BASE_EVENTS],
    joinedEventIds: [],
    createdEventIds: [],
    rides: [],
    friendsAdded: ['f1', 'f2'],
    chats: {
      f1: [{ by: 'them', text: 'Looking for family events this week?' }, { by: 'me', text: 'Yes, show me the best one.' }],
      f2: [{ by: 'them', text: 'There is a wellness session soon.' }],
      f3: [{ by: 'them', text: 'The kids art workshop looks fun.' }]
    },
    rewardsOwned: [],
    aiMessages: [{ by: 'them', text: COPY.en.humaidWelcome }]
  };
}

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const merged = { ...defaultState(), ...raw };
    merged.profile = { ...defaultState().profile, ...(raw.profile || {}) };
    merged.events = Array.isArray(raw.events) && raw.events.length ? raw.events : [...BASE_EVENTS];
    merged.aiMessages = Array.isArray(raw.aiMessages) && raw.aiMessages.length ? raw.aiMessages : [{ by: 'them', text: COPY[merged.lang || 'en'].humaidWelcome }];
    return merged;
  } catch {
    return defaultState();
  }
}

let state = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return (COPY[state.lang] && COPY[state.lang][key]) || COPY.en[key] || key;
}

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => el.toast.classList.remove('show'), 2300);
}

function setDir() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = document.documentElement.dir;
}

function applyI18n() {
  setDir();
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  el.identityMeta.textContent = t('linkedMeta');
  el.otpHelper.textContent = t('otpHelper');
  el.settingsLangToggle.textContent = state.lang === 'en' ? 'AR' : 'EN';
  el.mapStyleToggle.textContent = state.mapStyle === 'classic' ? t('mapStyleClassic') : t('mapStyleContrast');
}

function switchScreen(name) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
  state.screen = name;
  saveState();
}

function resolveIdentity(eid, currentProfile = {}) {
  const digits = String(eid).replace(/\D/g, '');
  const pick = Number(digits.slice(-1) || '0') % IDENTITIES.length;
  const linked = { ...IDENTITIES[pick] };
  const mergedBadges = Array.from(new Set([...(currentProfile.badges || []), ...(linked.badges || [])]));
  return {
    ...linked,
    ...currentProfile,
    name: linked.name,
    gender: linked.gender,
    age: linked.age,
    badges: mergedBadges,
    points: Number.isFinite(currentProfile.points) ? currentProfile.points : linked.points
  };
}

function categoryLabel(category) {
  return t(category);
}

function directionsLink(event) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.place)}`;
}

function canJoin(event) {
  const profile = state.profile;
  if (event.category === 'men' && profile.gender !== 'male') return { ok: false, reason: t('menOnly') };
  if (event.category === 'women' && profile.gender !== 'female') return { ok: false, reason: t('womenOnly') };
  if (profile.age < (event.minAge || 0)) return { ok: false, reason: t('ageGate') };
  return { ok: true, reason: '' };
}

function renderEventCard(event) {
  const access = canJoin(event);
  return `
    <article class="event-card">
      <div class="event-title-row">
        <h4>${event.title}</h4>
        <span class="mini-tag">${categoryLabel(event.category)}</span>
        ${event.minAge >= 18 ? '<span class="mini-tag">18+</span>' : ''}
      </div>
      <p class="event-meta">${event.place} • ${event.date} ${event.time} • ${t('host')}: ${event.host}</p>
      <p class="event-meta">${event.description}</p>
      ${!access.ok ? `<p class="event-meta" style="color:#9b4b31;font-weight:700;">${access.reason}</p>` : ''}
      <div class="action-row">
        <button class="action-btn primary" data-join="${event.id}">${t('join')}</button>
        <button class="action-btn secondary" data-driver="${event.id}">${t('driver')}</button>
        <a class="action-link" href="${directionsLink(event)}" target="_blank" rel="noreferrer">${t('directions')}</a>
      </div>
    </article>`;
}

function renderHome() {
  const categories = ['all', 'family', 'men', 'women', 'kids'];
  el.categoryChips.innerHTML = categories.map(cat => `
    <button class="chip ${state.categoryFilter === cat ? 'active' : ''}" data-cat="${cat}">${categoryLabel(cat)}</button>`).join('');
  el.categoryChips.querySelectorAll('[data-cat]').forEach(btn => {
    btn.onclick = () => {
      state.categoryFilter = btn.dataset.cat;
      saveState();
      renderHome();
    };
  });

  const filtered = state.events.filter(event => state.categoryFilter === 'all' || event.category === state.categoryFilter);
  el.homeEvents.innerHTML = filtered.length ? filtered.map(renderEventCard).join('') : `<div class="list-card">${t('noEvents')}</div>`;
  attachEventCardActions(el.homeEvents);
  el.heroPoints.textContent = state.profile.points;
  el.heroJoined.textContent = state.joinedEventIds.length;
}

function renderMap() {
  const categories = ['all', 'family', 'men', 'women', 'kids'];
  el.mapFilterRow.innerHTML = categories.map(cat => `
    <button class="chip ${state.mapFilter === cat ? 'active' : ''}" data-map-cat="${cat}">${categoryLabel(cat)}</button>`).join('');
  el.mapFilterRow.querySelectorAll('[data-map-cat]').forEach(btn => {
    btn.onclick = () => {
      state.mapFilter = btn.dataset.mapCat;
      saveState();
      renderMap();
    };
  });

  el.mapBoard.classList.toggle('is-contrast', state.mapStyle === 'contrast');
  const filtered = state.events.filter(event => state.mapFilter === 'all' || event.category === state.mapFilter);
  if (!filtered.some(event => event.id === state.selectedMapEvent) && filtered[0]) {
    state.selectedMapEvent = filtered[0].id;
  }
  el.mapBoard.innerHTML = filtered.map(event => `
    <button class="map-pin ${state.selectedMapEvent === event.id ? 'active' : ''}" style="left:${event.left}%; top:${event.top}%;" data-pin="${event.id}" aria-label="${event.title}"></button>`).join('');
  el.mapBoard.querySelectorAll('[data-pin]').forEach(pin => {
    pin.onclick = () => {
      state.selectedMapEvent = pin.dataset.pin;
      saveState();
      renderMap();
    };
  });

  const selected = filtered.find(event => event.id === state.selectedMapEvent);
  if (!selected) {
    el.mapDetail.innerHTML = `<p>${t('mapEmpty')}</p>`;
    return;
  }
  el.mapDetail.innerHTML = `
    <div class="event-title-row">
      <h4>${selected.title}</h4>
      <span class="mini-tag">${categoryLabel(selected.category)}</span>
    </div>
    <p>${selected.place} • ${selected.date} ${selected.time}</p>
    <div class="action-row" style="margin-top:12px; grid-template-columns: repeat(2,1fr);">
      <button class="action-btn primary" id="mapJoinBtn">${t('join')}</button>
      <a class="action-link" href="${directionsLink(selected)}" target="_blank" rel="noreferrer">${t('directions')}</a>
    </div>`;
  document.getElementById('mapJoinBtn').onclick = () => joinEvent(selected.id);
}

function renderCreate() {
  const categories = ['family', 'men', 'women', 'kids'];
  const current = el.createCategory.value || categories[0];
  el.createCategory.innerHTML = categories.map(cat => `<option value="${cat}">${categoryLabel(cat)}</option>`).join('');
  el.createCategory.value = categories.includes(current) ? current : categories[0];
  const updateRule = () => {
    const category = el.createCategory.value;
    let msg = t('createRuleDefault');
    if (category === 'men') msg = t('createRuleMen');
    if (category === 'women') msg = t('createRuleWomen');
    el.createRuleBanner.textContent = msg;
  };
  el.createCategory.onchange = updateRule;
  updateRule();
}

function publishEvent() {
  const title = el.createTitleInput.value.trim();
  const category = el.createCategory.value;
  const date = el.createDate.value;
  const time = el.createTime.value;
  const place = el.createLocation.value.trim();
  const description = el.createDescription.value.trim();
  if (!title || !date || !place || !description) return showToast(t('fillCreate'));
  if (category === 'men' && state.profile.gender !== 'male') return showToast(t('createMenOnly'));
  if (category === 'women' && state.profile.gender !== 'female') return showToast(t('createWomenOnly'));
  if ((category === 'men' || category === 'women') && state.profile.age < 18) return showToast(t('createAdultOnly'));

  const event = {
    id: `ev${Date.now()}`,
    title,
    category,
    date,
    time,
    place,
    description,
    host: state.profile.name.split(' ')[0],
    minAge: category === 'men' || category === 'women' ? 18 : 0,
    left: Math.floor(Math.random() * 56) + 22,
    top: Math.floor(Math.random() * 48) + 22
  };

  state.events.unshift(event);
  state.createdEventIds.unshift(event.id);
  state.profile.points += 25;
  saveState();

  el.createTitleInput.value = '';
  el.createLocation.value = '';
  el.createDescription.value = '';
  showToast(t('eventPublished'));
  renderAll();
  goPage('home');
}

function renderFriends() {
  const query = el.friendSearch.value.trim().toLowerCase();
  const filtered = FRIENDS.filter(friend => !query || friend.name.toLowerCase().includes(query));
  el.friendResults.innerHTML = filtered.map(friend => `
    <div class="friend-card">
      <div style="display:flex; gap:12px; align-items:center; justify-content:space-between;">
        <div style="display:flex; gap:12px; align-items:center;">
          <div class="avatar-circle">${friend.avatar}</div>
          <div>
            <div class="friend-name">${friend.name}</div>
            <div class="friend-sub">${friend.subtitle}</div>
          </div>
        </div>
        <button class="secondary-btn compact-btn" data-friend="${friend.id}">${state.friendsAdded.includes(friend.id) ? t('open') : '+'}</button>
      </div>
    </div>`).join('');

  el.friendResults.querySelectorAll('[data-friend]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.friend;
      state.selectedFriend = id;
      if (!state.friendsAdded.includes(id)) {
        state.friendsAdded.push(id);
        showToast(t('friendAdded'));
      }
      saveState();
      renderFriends();
      renderFriendsChat();
    };
  });
  renderFriendsChat();
}

function renderFriendsChat() {
  const friend = FRIENDS.find(item => item.id === state.selectedFriend) || FRIENDS[0];
  el.chatFriendTitle.textContent = friend.name;
  const messages = state.chats[friend.id] || [];
  el.chatMessages.innerHTML = messages.map(message => `<div class="chat-bubble ${message.by === 'me' ? 'me' : 'them'}">${message.text}</div>`).join('');
  el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
}

function sendFriendMessage() {
  const text = el.friendMessage.value.trim();
  if (!text) return showToast(t('messageEmpty'));
  const id = state.selectedFriend;
  state.chats[id] = state.chats[id] || [];
  state.chats[id].push({ by: 'me', text });
  state.chats[id].push({ by: 'them', text: state.lang === 'ar' ? 'وصلتني، خلنا نرتبها.' : 'Got it, let us plan it.' });
  el.friendMessage.value = '';
  saveState();
  renderFriendsChat();
}

function sendInvite() {
  const event = state.events[0];
  const id = state.selectedFriend;
  state.chats[id] = state.chats[id] || [];
  const line = state.lang === 'ar'
    ? `تعال معي إلى ${event.title} • ${event.date}`
    : `Join me at ${event.title} • ${event.date}`;
  state.chats[id].push({ by: 'me', text: line });
  saveState();
  renderFriendsChat();
  showToast(t('inviteSent'));
}

function renderProfile() {
  const profile = state.profile;
  const eidTail = state.eid ? state.eid.slice(-4) : '4567';
  el.profileAvatar.textContent = profile.name.charAt(0).toUpperCase();
  el.profileName.textContent = profile.name;
  el.profileMeta.textContent = t('profileMeta');
  el.profileEid.textContent = `Emirates ID: …${eidTail}`;
  el.profilePoints.textContent = profile.points;
  el.profileJoined.textContent = state.joinedEventIds.length;
  el.profileCreated.textContent = state.createdEventIds.length;
  el.badgeList.innerHTML = profile.badges.map(badge => `<span>${badge}</span>`).join('');

  const byId = Object.fromEntries(state.events.map(event => [event.id, event]));
  const renderList = ids => ids.length
    ? ids.map(id => {
        const event = byId[id];
        return event ? `<div class="list-card"><strong>${event.title}</strong><p class="event-meta">${event.place} • ${event.date} ${event.time}</p></div>` : '';
      }).join('')
    : `<div class="list-card">${t('none')}</div>`;

  el.joinedList.innerHTML = renderList(state.joinedEventIds);
  el.createdList.innerHTML = renderList(state.createdEventIds);
  el.ridesList.innerHTML = state.rides.length
    ? state.rides.map(ride => `<div class="ride-card"><strong>${ride.eventTitle}</strong><p class="event-meta">${ride.driver} • ETA ${ride.eta} min</p></div>`).join('')
    : `<div class="list-card">${t('none')}</div>`;
}

function renderRewards() {
  const rewards = getRewards(state.lang);
  el.rewardPoints.textContent = state.profile.points;
  el.rewardsStoreList.innerHTML = rewards.map(reward => {
    const owned = state.rewardsOwned.includes(reward.id);
    return `
      <div class="reward-card">
        <div class="section-head">
          <div>
            <h4 style="margin:0;">${reward.title}</h4>
            <p>${reward.desc}</p>
          </div>
          <span class="mini-tag">${reward.cost}</span>
        </div>
        <div class="action-row" style="grid-template-columns:1fr;">
          <button class="action-btn primary" data-buy="${reward.id}">${owned ? t('owned') : t('buy')}</button>
        </div>
      </div>`;
  }).join('');

  el.rewardsStoreList.querySelectorAll('[data-buy]').forEach(btn => {
    btn.onclick = () => buyReward(btn.dataset.buy);
  });

  el.ownedRewardsList.innerHTML = state.rewardsOwned.length
    ? state.rewardsOwned.map(id => {
        const reward = rewards.find(item => item.id === id);
        return reward ? `<div class="list-card"><strong>${reward.title}</strong><p class="event-meta">${reward.desc}</p></div>` : '';
      }).join('')
    : `<div class="list-card">${t('none')}</div>`;
}

function buyReward(id) {
  const reward = getRewards(state.lang).find(item => item.id === id);
  if (!reward) return;
  if (state.rewardsOwned.includes(id)) return;
  if (state.profile.points < reward.cost) return showToast(t('rewardLocked'));
  state.profile.points -= reward.cost;
  state.rewardsOwned.push(id);
  if (id === 'rw3' && !state.profile.badges.includes('Premium')) {
    state.profile.badges.push('Premium');
  }
  saveState();
  renderProfile();
  renderRewards();
  renderHome();
  showToast(t('rewardPurchased'));
}

function aiReply(text) {
  const q = text.toLowerCase();
  if (/rule|rules|قانون|قوانين|men|women|رجال|نساء|18/.test(q)) return t('humaidRules');
  if (/driver|transport|ride|سائق|مواصلات|اتجاه/.test(q)) return t('humaidTransport');
  if (/event|suggest|join|فعاليات|اقترح|انضم/.test(q)) {
    const joinable = state.events.filter(event => canJoin(event).ok).slice(0, 3).map(event => `• ${event.title} — ${event.place}`).join('\n');
    return `${t('humaidSuggest')}\n${joinable || t('noEvents')}`;
  }
  return t('humaidFallback');
}

function renderAi() {
  el.aiChat.innerHTML = state.aiMessages.map(message => `
    <div class="chat-bubble ${message.by === 'me' ? 'me' : 'them'}">${message.text.replace(/\n/g, '<br>')}</div>`).join('');
  el.aiChat.scrollTop = el.aiChat.scrollHeight;
}

function sendAiMessage() {
  const text = el.aiInput.value.trim();
  if (!text) return;
  state.aiMessages.push({ by: 'me', text });
  state.aiMessages.push({ by: 'them', text: aiReply(text) });
  el.aiInput.value = '';
  saveState();
  renderAi();
}

function attachEventCardActions(root) {
  root.querySelectorAll('[data-join]').forEach(btn => {
    btn.onclick = () => joinEvent(btn.dataset.join);
  });
  root.querySelectorAll('[data-driver]').forEach(btn => {
    btn.onclick = () => requestDriver(btn.dataset.driver);
  });
}

function joinEvent(id) {
  if (state.joinedEventIds.includes(id)) return showToast(t('alreadyJoined'));
  const event = state.events.find(item => item.id === id);
  if (!event) return;
  const access = canJoin(event);
  if (!access.ok) return showToast(access.reason);
  state.joinedEventIds.push(id);
  state.profile.points += 10;
  saveState();
  renderAll();
  showToast(t('joinSuccess'));
}

function requestDriver(id) {
  const event = state.events.find(item => item.id === id);
  if (!event) return;
  const eta = Math.floor(Math.random() * 11) + 7;
  const drivers = ['Salem', 'Rashed', 'Noora', 'Mariam'];
  state.rides.unshift({ id: `r${Date.now()}`, eventTitle: event.title, eta, driver: drivers[Math.floor(Math.random() * drivers.length)] });
  saveState();
  renderProfile();
  showToast(t('rideConfirmed').replace('{eta}', eta));
}

function goPage(page) {
  state.page = page;
  document.querySelectorAll('.page').forEach(section => {
    section.classList.toggle('active', section.dataset.page === page);
  });
  document.querySelectorAll('[data-page-btn]').forEach(btn => {
    const isProfileSubpage = (page === 'settings' || page === 'rewards') && btn.dataset.pageBtn === 'profile';
    btn.classList.toggle('active', btn.dataset.pageBtn === page || isProfileSubpage);
  });

  const titles = {
    home: 'Naseej Emirates',
    map: t('mapTitle'),
    create: t('createTitle'),
    friends: t('friendsTitle'),
    profile: t('navProfile'),
    settings: t('settingsTitle'),
    rewards: t('rewardsTitle')
  };
  el.pageTitle.textContent = titles[page] || 'Naseej Emirates';
  saveState();
}

function renderAll() {
  applyI18n();
  renderHome();
  renderMap();
  renderCreate();
  renderFriends();
  renderProfile();
  renderRewards();
  renderAi();
  goPage(state.page || 'home');
  saveState();
}

function clearOtpInputs() {
  el.otpInputs.forEach(input => { input.value = ''; });
  el.otpError.classList.add('hidden');
}

function getOtpValue() {
  return el.otpInputs.map(input => input.value).join('');
}

function setupOtpInputs() {
  el.otpInputs.forEach((input, index) => {
    input.addEventListener('input', event => {
      const value = event.target.value.replace(/\D/g, '').slice(0, 1);
      event.target.value = value;
      if (value && index < el.otpInputs.length - 1) {
        el.otpInputs[index + 1].focus();
      }
      el.otpError.classList.add('hidden');
    });

    input.addEventListener('keydown', event => {
      if (event.key === 'Backspace' && !input.value && index > 0) {
        el.otpInputs[index - 1].focus();
      }
    });

    input.addEventListener('paste', event => {
      event.preventDefault();
      const pasted = (event.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6).split('');
      if (!pasted.length) return;
      el.otpInputs.forEach((box, i) => { box.value = pasted[i] || ''; });
      const focusIndex = Math.min(pasted.length, el.otpInputs.length - 1);
      el.otpInputs[focusIndex].focus();
      el.otpError.classList.add('hidden');
    });
  });
}

function openApp() {
  switchScreen('app');
  renderAll();
}

function resetToDefault() {
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  applyI18n();
  el.eidInput.value = '';
  el.identityName.textContent = t('digitalIdentityLinked');
  clearOtpInputs();
  switchScreen('splash');
}

function handleLogout() {
  resetToDefault();
  showToast(t('loggedOut'));
}

function setupEvents() {
  document.querySelectorAll('[data-screen]').forEach(btn => {
    btn.addEventListener('click', () => switchScreen(btn.dataset.screen));
  });

  document.querySelectorAll('[data-page-btn]').forEach(btn => {
    btn.addEventListener('click', () => goPage(btn.dataset.pageBtn));
  });

  document.querySelectorAll('[data-page-link]').forEach(btn => {
    btn.addEventListener('click', () => goPage(btn.dataset.pageLink));
  });

  el.termsCheckbox.addEventListener('change', () => {
    el.termsContinue.disabled = !el.termsCheckbox.checked;
  });

  el.termsContinue.addEventListener('click', () => {
    state.termsAccepted = true;
    saveState();
    switchScreen('signin');
  });

  el.continueOtp.addEventListener('click', () => {
    const eid = el.eidInput.value.trim();
    if (!eid) return showToast(t('identityRequired'));
    state.eid = eid;
    state.profile = resolveIdentity(eid, state.profile);
    state.pendingOtp = '123456';
    state.aiMessages = [{ by: 'them', text: t('humaidWelcome') }];
    el.identityName.textContent = state.profile.name;
    clearOtpInputs();
    saveState();
    showToast(t('linkedMeta'));
    switchScreen('otp');
    el.otpInputs[0].focus();
  });

  el.resendOtp.addEventListener('click', () => {
    state.pendingOtp = '123456';
    clearOtpInputs();
    saveState();
    showToast(t('otpResent'));
    el.otpInputs[0].focus();
  });

  el.loginBtn.addEventListener('click', () => {
    const entered = getOtpValue();
    if (entered !== state.pendingOtp) {
      el.otpError.classList.remove('hidden');
      return;
    }
    el.otpError.classList.add('hidden');
    openApp();
  });

  el.goMapFromHome.addEventListener('click', () => goPage('map'));
  el.publishEvent.addEventListener('click', publishEvent);
  el.friendSearch.addEventListener('input', renderFriends);
  el.sendChat.addEventListener('click', sendFriendMessage);
  el.sendInvite.addEventListener('click', sendInvite);

  el.openAi.addEventListener('click', () => {
    el.overlay.classList.remove('hidden');
    el.aiSheet.classList.remove('hidden');
    renderAi();
  });
  const closeAi = () => {
    el.overlay.classList.add('hidden');
    el.aiSheet.classList.add('hidden');
  };
  el.closeAi.addEventListener('click', closeAi);
  el.overlay.addEventListener('click', closeAi);
  el.sendAi.addEventListener('click', sendAiMessage);

  el.settingsLangToggle.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'ar' : 'en';
    saveState();
    renderAll();
    showToast(t('languageSaved'));
  });

  el.mapStyleToggle.addEventListener('click', () => {
    state.mapStyle = state.mapStyle === 'classic' ? 'contrast' : 'classic';
    saveState();
    renderMap();
    applyI18n();
  });

  el.logoutBtn.addEventListener('click', handleLogout);
}

function init() {
  setupOtpInputs();
  setupEvents();
  applyI18n();

  if (state.eid) {
    state.profile = resolveIdentity(state.eid, state.profile);
    el.identityName.textContent = state.profile.name;
  }

  if (state.screen === 'app') {
    openApp();
  } else {
    switchScreen(state.screen || 'splash');
  }

  renderAll();

  if (state.screen !== 'app') {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  }
}

init();
