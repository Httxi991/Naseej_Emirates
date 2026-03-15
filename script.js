const STORAGE_KEY = 'naseej-ios-prototype-final';

const LINKED_IDENTITIES = {
  '784-1990-1234567-1': {
    eid: '784-1990-1234567-1',
    name: 'Nasser',
    gender: 'Male',
    age: 22,
    bioEn: 'Designing for connection and community.',
    bioAr: 'أصمم من أجل الترابط وخدمة المجتمع.',
    points: 120,
    badges: ['Starter', 'Helper'],
    joinedEventIds: ['ev2']
  },
  '784-1992-7654321-2': {
    eid: '784-1992-7654321-2',
    name: 'Ahmed',
    gender: 'Male',
    age: 27,
    bioEn: 'Volunteering makes a stronger UAE.',
    bioAr: 'التطوع يصنع مجتمعًا إماراتيًا أقوى.',
    points: 240,
    badges: ['Volunteer'],
    joinedEventIds: ['ev1', 'ev3']
  },
  '784-1995-5555555-3': {
    eid: '784-1995-5555555-3',
    name: 'Maryam',
    gender: 'Female',
    age: 24,
    bioEn: 'Culture connects generations.',
    bioAr: 'الثقافة تصل بين الأجيال.',
    points: 310,
    badges: ['Culture Lover', 'Organizer'],
    joinedEventIds: ['ev4']
  }
};

const BASE_EVENTS = [
  {
    id: 'ev1',
    title: 'Beach Clean-up',
    category: 'family',
    description: 'A light volunteering activity open to the whole community.',
    place: 'Al Khan Beach',
    date: '2026-01-10',
    time: '08:00 AM',
    host: 'Ahmed',
    city: 'Sharjah',
    minAge: 0,
    lat: 25.3226,
    lon: 55.3522
  },
  {
    id: 'ev2',
    title: 'Family Park Picnic',
    category: 'family',
    description: 'Bring your family for games, food, and shared moments.',
    place: 'Al Majaz Park',
    date: '2026-01-12',
    time: '05:30 PM',
    host: 'Maryam',
    city: 'Sharjah',
    minAge: 0,
    lat: 25.3338,
    lon: 55.3846
  },
  {
    id: 'ev3',
    title: 'Men Majlis',
    category: 'men',
    description: 'A men-only community talk with respectful discussion space.',
    place: 'Heart of Sharjah',
    date: '2026-01-15',
    time: '07:30 PM',
    host: 'Ahmed',
    city: 'Sharjah',
    minAge: 18,
    lat: 25.3573,
    lon: 55.3906
  },
  {
    id: 'ev4',
    title: 'Women Wellness Session',
    category: 'women',
    description: 'Women-only wellness session with privacy-first community support.',
    place: 'Corniche',
    date: '2026-01-18',
    time: '06:45 AM',
    host: 'Maryam',
    city: 'Sharjah',
    minAge: 18,
    lat: 25.3436,
    lon: 55.3940
  },
  {
    id: 'ev5',
    title: 'Kids Art Workshop',
    category: 'kids',
    description: 'Creative art activities for children with guardian support.',
    place: 'Al Majaz Waterfront',
    date: '2026-01-20',
    time: '04:00 PM',
    host: 'Maryam',
    city: 'Sharjah',
    minAge: 0,
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
    description: { en: 'Demo ticket for a featured community event.', ar: 'تذكرة تجريبية لفعالية مجتمعية مميزة.' }
  },
  {
    id: 'rw3',
    cost: 200,
    title: { en: 'Premium Badge', ar: 'شارة مميزة' },
    description: { en: 'Unlock a premium badge in the profile.', ar: 'افتح شارة مميزة في البروفايل.' }
  }
];

const FRIEND_POOL = [
  { id: 'f1', name: 'Ahmed', subtitle: 'Volunteer friend', avatar: 'A' },
  { id: 'f2', name: 'Maryam', subtitle: 'Culture friend', avatar: 'M' },
  { id: 'f3', name: 'Noora', subtitle: 'Family events', avatar: 'N' },
  { id: 'f4', name: 'Salem', subtitle: 'Majlis friend', avatar: 'S' }
];

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
    autoResolved: 'Resolved automatically',
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
    communityFriend: 'Community friend',
    send: 'Send',
    badgesTitle: 'Badges',
    joinedEvents: 'Joined events',
    createdEvents: 'Created events',
    ridesTitle: 'Driver requests',
    assistant: 'Assistant',
    humaidTitle: 'Humaid AI',
    humaidIntro: 'Ask about events, rules, categories, or transport. This is a prototype conversation flow.',
    rideTitle: 'Request driver',
    pickupLabel: 'Pickup location',
    passengersLabel: 'Passengers',
    rideNotes: 'Notes',
    confirmRide: 'Confirm driver request',
    settingsTitle: 'Settings',
    languageLabel: 'Language',
    mapStyleLabel: 'Map style',
    saveChanges: 'Save changes',
    resetDemo: 'Reset demo data',
    rewardsTitle: 'Rewards Store',
    availablePoints: 'Available points',
    feedSearchPlaceholder: 'Search title, place, date, category…',
    friendSearchPlaceholder: 'Search a friend by name',
    friendMessagePlaceholder: 'Type a message…',
    humaidPlaceholder: 'Ask Humaid about events, rules, or suggestions…',
    createTitlePlaceholder: 'Neighborhood Gathering',
    createLocationPlaceholder: 'Al Majaz Waterfront',
    createDescriptionPlaceholder: 'A short, welcoming description for the event.',
    ridePickupPlaceholder: 'Home / University / Mall',
    rideNotesPlaceholder: 'Any notes for the driver',
    noEvents: 'No events found for this filter.',
    none: 'None yet.',
    digitalIdentityLinked: 'Digital identity linked',
    accessResolved: 'Profile access resolved from linked identity',
    identityRequired: 'Enter an Emirates ID to continue.',
    identityLinkedToast: 'Digital identity linked for the prototype.',
    termsNeeded: 'Accept the terms first.',
    join: 'Join',
    joined: 'Joined',
    details: 'Details',
    driver: 'Driver',
    directions: 'Directions',
    alreadyJoined: 'You already joined this event.',
    joinSuccess: 'Joined event! +10 points',
    menOnly: 'This event is for men only.',
    womenOnly: 'This event is for women only.',
    ageGate: 'You do not meet the age requirement.',
    inviteSent: 'Invite sent.',
    friendAdded: 'Friend added to the prototype list.',
    messageEmpty: 'Write a message first.',
    rewardPurchased: 'Reward purchased.',
    rewardLocked: 'Not enough points yet.',
    eventPublished: 'Event published! +25 points',
    fillCreate: 'Fill in the title, date, location, and description first.',
    createMenOnly: 'Only male users can create men events.',
    createWomenOnly: 'Only female users can create women events.',
    createAdultOnly: 'You must be 18+ for men or women events.',
    family: 'Family',
    men: 'Men',
    women: 'Women',
    kids: 'Kids',
    all: 'All',
    host: 'Host',
    eventPreview: 'Community event preview',
    openDirections: 'Open directions',
    lockedByRules: 'Locked by access rules',
    requestDriver: 'Request driver',
    mapEmpty: 'Tap any event pin to preview it here.',
    rideConfirmed: 'Driver confirmed. ETA {eta} minutes.',
    languageSaved: 'Settings updated.',
    resetDone: 'Prototype data reset.',
    buy: 'Buy',
    owned: 'Owned',
    linkedMeta: 'Gender and age come from the linked digital identity.',
    createRuleDefault: 'Family and kids events stay open. Men and women events are automatically 18+.',
    createRuleMen: 'Men events are 18+ and only available for male profiles.',
    createRuleWomen: 'Women events are 18+ and only available for female profiles.',
    profileMeta: 'Digital identity linked • access auto-resolved',
    humaidWelcome: 'Salam. I can suggest events, explain rules, or help with transport inside Naseej Emirates.',
    humaidRules: 'Inside Naseej Emirates, men-only events are for male users, women-only events are for female users, and 18+ rules are applied automatically. Family and kids flows stay open for general community participation.',
    humaidTransport: 'Open any event card and tap Driver for a demo ride request, or Directions to launch Google Maps.',
    humaidFallback: 'Try asking: “Suggest events I can join”, “Explain the rules”, or “How do I request a driver?”',
    humaidSuggest: 'Based on your linked profile, here are good matches:',
    rewardOwnedLabel: 'Owned rewards',
    rewardPrice: 'Cost',
    rideMeta: 'Destination',
    chatInvitePrefix: 'Join me at',
    logoutDemo: 'Reset demo data from Settings to restart the full flow.'
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
    autoResolved: 'تُحدد تلقائيًا',
    continueOtp: 'المتابعة إلى OTP',
    verifyTitle: 'تحقق من الهوية',
    otpSub: 'هذه خطوة OTP تجريبية خاصة بعرض المسابقة.',
    login: 'دخول',
    appTag: 'مسار البروتوتايب',
    smartMatching: 'مطابقة ذكية',
    heroTitle: 'اكتشف فعاليات مجتمعية موثوقة بالقرب منك',
    heroSub: 'فعاليات للعائلة والرجال والنساء والأطفال مع قواعد واضحة ودعم للمواصلات.',
    points: 'نقاط',
    categoriesLabel: 'فئات',
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
    friendsSub: 'أضف بالاسم وأرسل دعوات وتحدث داخل البروتوتايب.',
    sendInvite: 'إرسال دعوة',
    communityFriend: 'صديق مجتمعي',
    send: 'إرسال',
    badgesTitle: 'الشارات',
    joinedEvents: 'فعاليات انضممت لها',
    createdEvents: 'فعاليات أنشأتها',
    ridesTitle: 'طلبات السائق',
    assistant: 'المساعد',
    humaidTitle: 'حميد AI',
    humaidIntro: 'اسأل عن الفعاليات أو القوانين أو الفئات أو المواصلات. هذه محادثة بروتوتايب.',
    rideTitle: 'طلب سائق',
    pickupLabel: 'موقع الالتقاط',
    passengersLabel: 'عدد الركاب',
    rideNotes: 'ملاحظات',
    confirmRide: 'تأكيد طلب السائق',
    settingsTitle: 'الإعدادات',
    languageLabel: 'اللغة',
    mapStyleLabel: 'ستايل الخريطة',
    saveChanges: 'حفظ التغييرات',
    resetDemo: 'إعادة ضبط البروتوتايب',
    rewardsTitle: 'متجر الجوائز',
    availablePoints: 'النقاط المتاحة',
    feedSearchPlaceholder: 'ابحث بالعنوان أو المكان أو التاريخ أو الفئة…',
    friendSearchPlaceholder: 'ابحث عن صديق بالاسم',
    friendMessagePlaceholder: 'اكتب رسالة…',
    humaidPlaceholder: 'اسأل حميد عن الفعاليات أو القوانين أو الاقتراحات…',
    createTitlePlaceholder: 'تجمع الحي',
    createLocationPlaceholder: 'واجهة المجاز',
    createDescriptionPlaceholder: 'وصف قصير ومرحب للفعالية.',
    ridePickupPlaceholder: 'البيت / الجامعة / مول',
    rideNotesPlaceholder: 'أي ملاحظات للسائق',
    noEvents: 'لا توجد فعاليات لهذا الفلتر.',
    none: 'لا يوجد حالياً.',
    digitalIdentityLinked: 'الهوية الرقمية مرتبطة',
    accessResolved: 'قواعد الدخول محددة تلقائيًا من الهوية المرتبطة',
    identityRequired: 'أدخل رقم هوية للمتابعة.',
    identityLinkedToast: 'تم ربط الهوية الرقمية داخل البروتوتايب.',
    termsNeeded: 'وافق على الشروط أولاً.',
    join: 'انضم',
    joined: 'تم',
    details: 'تفاصيل',
    driver: 'سائق',
    directions: 'الاتجاهات',
    alreadyJoined: 'أنت منضم لهذه الفعالية مسبقًا.',
    joinSuccess: 'تم الانضمام! +10 نقاط',
    menOnly: 'هذه الفعالية للرجال فقط.',
    womenOnly: 'هذه الفعالية للنساء فقط.',
    ageGate: 'عمرك لا يسمح بهذه الفعالية.',
    inviteSent: 'تم إرسال الدعوة.',
    friendAdded: 'تمت إضافة الصديق في البروتوتايب.',
    messageEmpty: 'اكتب رسالة أولاً.',
    rewardPurchased: 'تم شراء الجائزة.',
    rewardLocked: 'نقاطك لا تكفي حالياً.',
    eventPublished: 'تم نشر الفعالية! +25 نقطة',
    fillCreate: 'أكمل العنوان والتاريخ والموقع والوصف أولاً.',
    createMenOnly: 'فقط الملفات الذكورية تستطيع إنشاء فعاليات الرجال.',
    createWomenOnly: 'فقط الملفات الأنثوية تستطيع إنشاء فعاليات النساء.',
    createAdultOnly: 'لازم تكون +18 لفعاليات الرجال أو النساء.',
    family: 'عائلة',
    men: 'رجال',
    women: 'نساء',
    kids: 'أطفال',
    all: 'الكل',
    host: 'المضيف',
    eventPreview: 'معاينة فعالية مجتمعية',
    openDirections: 'فتح الاتجاهات',
    lockedByRules: 'مقفلة بسبب القواعد',
    requestDriver: 'اطلب سائق',
    mapEmpty: 'اضغط على أي فعالية في الخريطة لمعاينتها هنا.',
    rideConfirmed: 'تم تأكيد السائق. الوصول خلال {eta} دقائق.',
    languageSaved: 'تم تحديث الإعدادات.',
    resetDone: 'تمت إعادة ضبط البروتوتايب.',
    buy: 'شراء',
    owned: 'تمت',
    linkedMeta: 'الجنس والعمر يأتيان من الهوية الرقمية المرتبطة.',
    createRuleDefault: 'فعاليات العائلة والأطفال مفتوحة. فعاليات الرجال والنساء تكون +18 تلقائيًا.',
    createRuleMen: 'فعاليات الرجال تكون +18 ومتاحة فقط للملفات الذكورية.',
    createRuleWomen: 'فعاليات النساء تكون +18 ومتاحة فقط للملفات الأنثوية.',
    profileMeta: 'هوية رقمية مرتبطة • القواعد محددة تلقائيًا',
    humaidWelcome: 'هلا. أقدر أقترح فعاليات، أشرح القوانين، أو أساعدك بالمواصلات داخل نسيج الإمارات.',
    humaidRules: 'داخل نسيج الإمارات، فعاليات الرجال للذكور فقط، وفعاليات النساء للإناث فقط، وقاعدة +18 تطبق تلقائيًا. أما فعاليات العائلة والأطفال فتبقى مفتوحة للمشاركة المجتمعية.',
    humaidTransport: 'افتح أي كرت فعالية واضغط سائق لطلب تجريبي، أو الاتجاهات لفتح Google Maps.',
    humaidFallback: 'جرّب تسأل: «اقترح فعاليات أقدر أنضم لها» أو «اشرح القوانين» أو «كيف أطلب سائق؟»',
    humaidSuggest: 'بناءً على ملفك المرتبط، هذه أفضل الفعاليات المناسبة لك:',
    rewardOwnedLabel: 'جوائزك',
    rewardPrice: 'السعر',
    rideMeta: 'الوجهة',
    chatInvitePrefix: 'انضم معي إلى',
    logoutDemo: 'من الإعدادات تقدر تعيد ضبط البيانات وتبدأ العرض من البداية.'
  }
};

const els = {
  phoneScreen: document.getElementById('phone-screen'),
  screens: Array.from(document.querySelectorAll('.screen')),
  flowPills: Array.from(document.querySelectorAll('.flow-pill')),
  nextButtons: Array.from(document.querySelectorAll('[data-next-screen]')),
  termsCheck: document.getElementById('terms-check'),
  termsContinue: document.getElementById('terms-continue'),
  signinEid: document.getElementById('signin-eid'),
  signinContinue: document.getElementById('signin-continue'),
  identityPreviewName: document.querySelector('[data-preview-name]'),
  identityPreviewMeta: document.querySelector('[data-preview-meta]'),
  otpLogin: document.getElementById('otp-login'),
  appTitle: document.getElementById('app-page-title'),
  heroPoints: document.getElementById('hero-points'),
  openHumaid: document.getElementById('open-humaid'),
  navButtons: Array.from(document.querySelectorAll('.nav-icon')),
  appPages: Array.from(document.querySelectorAll('.app-page')),
  feedFilters: document.getElementById('feed-filters'),
  feedSearch: document.getElementById('feed-search'),
  feedEvents: document.getElementById('feed-events'),
  mapPins: document.getElementById('map-pins'),
  mapSelectedCard: document.getElementById('map-selected-card'),
  mapEventList: document.getElementById('map-event-list'),
  createCategories: document.getElementById('create-categories'),
  createRuleNote: document.getElementById('create-rule-note'),
  createTitle: document.getElementById('create-title'),
  createDate: document.getElementById('create-date'),
  createTime: document.getElementById('create-time'),
  createLocation: document.getElementById('create-location'),
  createDescription: document.getElementById('create-description'),
  publishEvent: document.getElementById('publish-event'),
  friendChips: document.getElementById('friend-chips'),
  friendSearch: document.getElementById('friend-search'),
  friendResults: document.getElementById('friend-results'),
  inviteEventSelect: document.getElementById('invite-event-select'),
  sendInvite: document.getElementById('send-invite'),
  chatFriendAvatar: document.getElementById('chat-friend-avatar'),
  chatFriendName: document.getElementById('chat-friend-name'),
  friendChatLog: document.getElementById('friend-chat-log'),
  friendMessage: document.getElementById('friend-message'),
  sendFriendMessage: document.getElementById('send-friend-message'),
  profileAvatar: document.getElementById('profile-avatar'),
  profileName: document.getElementById('profile-name'),
  profileMeta: document.getElementById('profile-meta'),
  profileBio: document.getElementById('profile-bio'),
  profileStats: document.getElementById('profile-stats'),
  badgeRow: document.getElementById('badge-row'),
  joinedList: document.getElementById('joined-list'),
  createdList: document.getElementById('created-list'),
  ridesList: document.getElementById('rides-list'),
  openSettings: document.getElementById('open-settings'),
  openRewards: document.getElementById('open-rewards'),
  languageChips: document.getElementById('language-chips'),
  mapstyleChips: document.getElementById('mapstyle-chips'),
  saveSettings: document.getElementById('save-settings'),
  resetDemo: document.getElementById('reset-demo'),
  rewardPoints: document.getElementById('reward-points'),
  rewardList: document.getElementById('reward-list'),
  humaidChatLog: document.getElementById('humaid-chat-log'),
  humaidInput: document.getElementById('humaid-input'),
  sendHumaid: document.getElementById('send-humaid'),
  eventSheet: document.getElementById('event-sheet'),
  eventSheetTitle: document.getElementById('event-sheet-title'),
  eventSheetBody: document.getElementById('event-sheet-body'),
  rideSheet: document.getElementById('ride-sheet'),
  rideTarget: document.getElementById('ride-target'),
  ridePickup: document.getElementById('ride-pickup'),
  ridePassengers: document.getElementById('ride-passengers'),
  rideNotes: document.getElementById('ride-notes'),
  confirmRide: document.getElementById('confirm-ride'),
  settingsSheet: document.getElementById('settings-sheet'),
  rewardsSheet: document.getElementById('rewards-sheet'),
  closeSheetButtons: Array.from(document.querySelectorAll('[data-close-sheet]')),
  toast: document.getElementById('toast')
};

let activeScreen = 'splash';
let activePage = 'feed';
let activeFilter = 'all';
let selectedCreateCategory = 'family';
let selectedMapEventId = null;
let rideEventId = null;
let state = loadState();

function defaultState() {
  const linked = LINKED_IDENTITIES['784-1990-1234567-1'];
  return {
    termsAccepted: false,
    signedIn: false,
    language: 'en',
    mapStyle: 'dark',
    activeIdentity: linked.eid,
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
    events: BASE_EVENTS.map(event => ({ ...event })),
    friendIds: ['f1', 'f2'],
    selectedFriendId: 'f1',
    friendMessages: {
      f1: [
        { id: 'm1', from: 'them', text: 'Are you joining the picnic tomorrow?' },
        { id: 'm2', from: 'me', text: 'Yes, send me the details and I might request a driver.' }
      ],
      f2: [
        { id: 'm3', from: 'them', text: 'There is a women wellness event next week.' }
      ]
    },
    humaidMessages: [
      { role: 'assistant', text: COPY.en.humaidWelcome }
    ]
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const base = defaultState();
    return {
      ...base,
      ...parsed,
      profile: { ...base.profile, ...(parsed.profile || {}) },
      friendMessages: { ...base.friendMessages, ...(parsed.friendMessages || {}) },
      humaidMessages: Array.isArray(parsed.humaidMessages) && parsed.humaidMessages.length
        ? parsed.humaidMessages
        : base.humaidMessages,
      events: Array.isArray(parsed.events) && parsed.events.length ? parsed.events : base.events
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function text(key) {
  return COPY[state.language]?.[key] || COPY.en[key] || key;
}

function formatText(key, vars = {}) {
  let value = text(key);
  Object.entries(vars).forEach(([name, replacement]) => {
    value = value.replace(`{${name}}`, String(replacement));
  });
  return value;
}

function categoryLabel(code) {
  return text(code);
}

function getFriend(id) {
  return FRIEND_POOL.find(friend => friend.id === id);
}

function getEvent(id) {
  return state.events.find(event => event.id === id);
}

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'NE';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove('show'), 2300);
}

function showScreen(name) {
  activeScreen = name;
  els.screens.forEach(screen => {
    screen.classList.toggle('active', screen.id === `screen-${name}`);
  });
  els.flowPills.forEach(button => {
    button.classList.toggle('active', button.dataset.flowScreen === name);
  });
}

function showAppPage(page) {
  activePage = page;
  const titles = {
    feed: 'Naseej Emirates',
    map: text('mapTitle'),
    create: text('createTitle'),
    friends: text('friendsTitle'),
    profile: text('profileMeta').split('•')[0].trim()
  };
  els.appTitle.textContent = titles[page] || 'Naseej Emirates';
  els.appPages.forEach(appPage => {
    appPage.classList.toggle('active', appPage.dataset.page === page);
  });
  els.navButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.pageTarget === page);
  });
}

function openSheet(sheet) {
  sheet.classList.add('open');
}

function closeSheet(sheet) {
  sheet.classList.remove('open');
}

function directionsUrl(event) {
  return `https://www.google.com/maps/dir/?api=1&destination=${event.lat},${event.lon}`;
}

function seedFromIdentity(eid) {
  return LINKED_IDENTITIES[eid] || {
    eid,
    name: state.language === 'ar' ? 'مستخدم مرتبط' : 'Linked User',
    gender: 'Male',
    age: 21,
    bioEn: 'Digital identity linked for prototype access.',
    bioAr: 'هوية رقمية مرتبطة لدخول البروتوتايب.',
    points: 90,
    badges: ['Starter'],
    joinedEventIds: []
  };
}

function applyIdentity(eid) {
  const linked = seedFromIdentity(eid);
  state.activeIdentity = linked.eid;
  state.profile = {
    name: linked.name,
    eid: linked.eid,
    gender: linked.gender,
    age: linked.age,
    bio: state.language === 'ar' ? linked.bioAr : linked.bioEn
  };
  state.points = linked.points;
  state.badges = [...linked.badges];
  state.joinedEventIds = [...linked.joinedEventIds];
  state.createdEventIds = [];
  state.rewardsOwned = [];
  state.rides = [];
  state.selectedFriendId = 'f1';
  state.humaidMessages = [{ role: 'assistant', text: text('humaidWelcome') }];
  saveState();
}

function canJoinEvent(event) {
  const { gender, age } = state.profile;
  if (event.category === 'men' && gender !== 'Male') return { ok: false, reason: text('menOnly') };
  if (event.category === 'women' && gender !== 'Female') return { ok: false, reason: text('womenOnly') };
  if (Number(age) < Number(event.minAge || 0)) return { ok: false, reason: text('ageGate') };
  return { ok: true, reason: '' };
}

function canCreateCategory(category) {
  const { gender, age } = state.profile;
  if (category === 'men') {
    if (gender !== 'Male') return { ok: false, reason: text('createMenOnly') };
    if (Number(age) < 18) return { ok: false, reason: text('createAdultOnly') };
  }
  if (category === 'women') {
    if (gender !== 'Female') return { ok: false, reason: text('createWomenOnly') };
    if (Number(age) < 18) return { ok: false, reason: text('createAdultOnly') };
  }
  return { ok: true, reason: '' };
}

function updateDirectionAndLanguage() {
  const isArabic = state.language === 'ar';
  document.documentElement.lang = state.language;
  els.phoneScreen.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = text(node.dataset.i18n);
  });

  els.feedSearch.placeholder = text('feedSearchPlaceholder');
  els.friendSearch.placeholder = text('friendSearchPlaceholder');
  els.friendMessage.placeholder = text('friendMessagePlaceholder');
  els.humaidInput.placeholder = text('humaidPlaceholder');
  els.createTitle.placeholder = text('createTitlePlaceholder');
  els.createLocation.placeholder = text('createLocationPlaceholder');
  els.createDescription.placeholder = text('createDescriptionPlaceholder');
  els.ridePickup.placeholder = text('ridePickupPlaceholder');
  els.rideNotes.placeholder = text('rideNotesPlaceholder');

  renderFeedFilters();
  renderCreateCategories();
  renderSettingsSheet();
  renderFeed();
  renderMap();
  renderFriends();
  renderProfile();
  renderRewards();
  renderHumaid();
}

function renderFeedFilters() {
  const categories = ['all', 'family', 'men', 'women', 'kids'];
  els.feedFilters.innerHTML = '';
  categories.forEach(code => {
    const button = document.createElement('button');
    button.className = `chip-button ${activeFilter === code ? 'active' : ''}`;
    button.textContent = categoryLabel(code);
    button.addEventListener('click', () => {
      activeFilter = code;
      renderFeedFilters();
      renderFeed();
    });
    els.feedFilters.appendChild(button);
  });
}

function renderFeed() {
  els.heroPoints.textContent = state.points;
  const query = els.feedSearch.value.trim().toLowerCase();
  const visible = state.events.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.category === activeFilter;
    const blob = `${event.title} ${event.place} ${event.date} ${event.category} ${event.description}`.toLowerCase();
    return matchesFilter && (!query || blob.includes(query));
  });

  els.feedEvents.innerHTML = '';
  if (!visible.length) {
    els.feedEvents.innerHTML = `<div class="simple-item"><span>${text('noEvents')}</span></div>`;
    return;
  }

  visible.forEach(event => {
    const access = canJoinEvent(event);
    const joined = state.joinedEventIds.includes(event.id);
    const card = document.createElement('article');
    card.className = 'event-card';
    card.innerHTML = `
      <div>
        <span class="category-pill ${joined ? 'active' : ''}">${categoryLabel(event.category)}</span>
        ${event.minAge >= 18 ? '<span class="category-pill">18+</span>' : ''}
      </div>
      <h5>${event.title}</h5>
      <div class="event-meta">${event.place} • ${event.city} • ${event.date} • ${event.time}<br>${text('host')}: ${event.host}</div>
      <p>${event.description}</p>
      ${!access.ok ? `<div class="lock-note">${text('lockedByRules')}: ${access.reason}</div>` : ''}
      <div class="event-actions">
        <button class="primary-mini">${joined ? text('joined') : text('join')}</button>
        <button class="secondary-mini">${text('details')}</button>
        <button class="secondary-mini">${text('driver')}</button>
      </div>
    `;

    const [joinBtn, detailsBtn, driverBtn] = card.querySelectorAll('button');
    joinBtn.disabled = joined || !access.ok;
    joinBtn.addEventListener('click', () => joinEvent(event.id));
    detailsBtn.addEventListener('click', () => openEventDetails(event.id));
    driverBtn.addEventListener('click', () => openRideRequest(event.id));

    els.feedEvents.appendChild(card);
  });
}

function joinEvent(eventId) {
  const event = getEvent(eventId);
  if (!event) return;
  if (state.joinedEventIds.includes(eventId)) {
    showToast(text('alreadyJoined'));
    return;
  }
  const access = canJoinEvent(event);
  if (!access.ok) {
    showToast(access.reason);
    return;
  }
  state.joinedEventIds.push(eventId);
  state.points += 10;
  if (!state.badges.includes('Participant')) state.badges.push('Participant');
  saveState();
  renderFeed();
  renderFriends();
  renderProfile();
  renderRewards();
  showToast(text('joinSuccess'));
}

function openEventDetails(eventId) {
  const event = getEvent(eventId);
  if (!event) return;
  els.eventSheetTitle.textContent = event.title;
  els.eventSheetBody.innerHTML = `
    <div class="stacked-gap">
      <div class="simple-item">
        <strong>${text('eventPreview')}</strong>
        <span>${event.place} • ${event.city} • ${event.date} • ${event.time}</span>
      </div>
      <p>${event.description}</p>
      <div class="simple-item">
        <strong>${text('host')}</strong>
        <span>${event.host}</span>
      </div>
      <div class="event-sheet-actions">
        <button class="primary-mini" id="sheet-join">${state.joinedEventIds.includes(event.id) ? text('joined') : text('join')}</button>
        <button class="secondary-mini" id="sheet-ride">${text('requestDriver')}</button>
        <button class="secondary-mini" id="sheet-directions">${text('openDirections')}</button>
      </div>
    </div>
  `;
  const joinBtn = document.getElementById('sheet-join');
  const rideBtn = document.getElementById('sheet-ride');
  const dirBtn = document.getElementById('sheet-directions');
  joinBtn.disabled = state.joinedEventIds.includes(event.id) || !canJoinEvent(event).ok;
  joinBtn.addEventListener('click', () => {
    joinEvent(event.id);
    closeSheet(els.eventSheet);
  });
  rideBtn.addEventListener('click', () => {
    closeSheet(els.eventSheet);
    openRideRequest(event.id);
  });
  dirBtn.addEventListener('click', () => window.open(directionsUrl(event), '_blank'));
  openSheet(els.eventSheet);
}

function renderMap() {
  const events = state.events;
  const mapCard = document.querySelector('.map-card');
  mapCard.style.background = state.mapStyle === 'dark'
    ? 'linear-gradient(180deg, rgba(76, 88, 84, 0.92), rgba(45, 49, 47, 0.96))'
    : 'linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.3))';
  els.mapPins.innerHTML = '';
  els.mapEventList.innerHTML = '';
  const lats = events.map(event => event.lat);
  const lons = events.map(event => event.lon);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);

  events.forEach(event => {
    const top = 16 + ((maxLat - event.lat) / (maxLat - minLat || 1)) * 180;
    const left = 20 + ((event.lon - minLon) / (maxLon - minLon || 1)) * 280;
    const pin = document.createElement('button');
    pin.className = `map-pin ${selectedMapEventId === event.id ? 'active' : ''}`;
    pin.style.top = `${top}px`;
    pin.style.left = `${left}px`;
    pin.title = event.title;
    pin.addEventListener('click', () => {
      selectedMapEventId = event.id;
      renderMap();
    });
    els.mapPins.appendChild(pin);

    const item = document.createElement('div');
    item.className = 'simple-item';
    item.innerHTML = `<strong>${event.title}</strong><span>${event.place} • ${event.date}</span>`;
    item.addEventListener('click', () => {
      selectedMapEventId = event.id;
      renderMap();
    });
    els.mapEventList.appendChild(item);
  });

  const selectedEvent = getEvent(selectedMapEventId || events[0]?.id);
  selectedMapEventId = selectedEvent?.id || null;
  if (!selectedEvent) {
    els.mapSelectedCard.className = 'map-selected-card empty';
    els.mapSelectedCard.textContent = text('mapEmpty');
    return;
  }
  els.mapSelectedCard.className = 'map-selected-card';
  els.mapSelectedCard.innerHTML = `
    <h5>${selectedEvent.title}</h5>
    <p>${selectedEvent.place} • ${selectedEvent.city} • ${selectedEvent.date} • ${selectedEvent.time}</p>
    <div class="event-actions">
      <button class="primary-mini" id="map-details">${text('details')}</button>
      <button class="secondary-mini" id="map-driver">${text('driver')}</button>
      <button class="secondary-mini" id="map-directions">${text('directions')}</button>
    </div>
  `;
  document.getElementById('map-details').addEventListener('click', () => openEventDetails(selectedEvent.id));
  document.getElementById('map-driver').addEventListener('click', () => openRideRequest(selectedEvent.id));
  document.getElementById('map-directions').addEventListener('click', () => window.open(directionsUrl(selectedEvent), '_blank'));
}

function renderCreateCategories() {
  const categories = ['family', 'men', 'women', 'kids'];
  els.createCategories.innerHTML = '';
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = `category-pill ${selectedCreateCategory === category ? 'active' : ''}`;
    button.textContent = categoryLabel(category);
    button.addEventListener('click', () => {
      selectedCreateCategory = category;
      renderCreateCategories();
      updateCreateRuleNote();
    });
    els.createCategories.appendChild(button);
  });
  updateCreateRuleNote();
}

function updateCreateRuleNote() {
  if (selectedCreateCategory === 'men') {
    els.createRuleNote.textContent = text('createRuleMen');
  } else if (selectedCreateCategory === 'women') {
    els.createRuleNote.textContent = text('createRuleWomen');
  } else {
    els.createRuleNote.textContent = text('createRuleDefault');
  }
}

function publishEvent() {
  const title = els.createTitle.value.trim();
  const date = els.createDate.value;
  const time = els.createTime.value.trim() || '06:00 PM';
  const place = els.createLocation.value.trim();
  const description = els.createDescription.value.trim();

  if (!title || !date || !place || !description) {
    showToast(text('fillCreate'));
    return;
  }
  const createAccess = canCreateCategory(selectedCreateCategory);
  if (!createAccess.ok) {
    showToast(createAccess.reason);
    return;
  }

  const event = {
    id: `ev${Date.now()}`,
    title,
    category: selectedCreateCategory,
    description,
    place,
    date,
    time,
    host: state.profile.name,
    city: 'Sharjah',
    minAge: ['men', 'women'].includes(selectedCreateCategory) ? 18 : 0,
    lat: 25.333 + Math.random() * 0.03,
    lon: 55.37 + Math.random() * 0.03
  };

  state.events.unshift(event);
  state.createdEventIds.unshift(event.id);
  state.points += 25;
  if (!state.badges.includes('Organizer')) state.badges.push('Organizer');
  saveState();
  renderFeed();
  renderMap();
  renderFriends();
  renderProfile();
  renderRewards();
  els.createTitle.value = '';
  els.createDate.value = '';
  els.createTime.value = '';
  els.createLocation.value = '';
  els.createDescription.value = '';
  showToast(text('eventPublished'));
  showAppPage('feed');
}

function renderFriends() {
  const query = els.friendSearch.value.trim().toLowerCase();
  const currentFriend = getFriend(state.selectedFriendId) || FRIEND_POOL[0];
  els.friendChips.innerHTML = '';
  state.friendIds.forEach(friendId => {
    const friend = getFriend(friendId);
    if (!friend) return;
    const chip = document.createElement('button');
    chip.className = `chip-button ${state.selectedFriendId === friendId ? 'active' : ''}`;
    chip.textContent = friend.name;
    chip.addEventListener('click', () => {
      state.selectedFriendId = friendId;
      saveState();
      renderFriends();
    });
    els.friendChips.appendChild(chip);
  });
  const already = new Set(state.friendIds);
  const candidates = FRIEND_POOL.filter(friend => !already.has(friend.id) && (!query || friend.name.toLowerCase().includes(query)));
  els.friendResults.innerHTML = '';

  if (query && !candidates.length) {
    els.friendResults.innerHTML = `<div class="simple-item"><span>${text('none')}</span></div>`;
  } else {
    candidates.forEach(friend => {
      const button = document.createElement('button');
      button.innerHTML = `${friend.name}<small>${friend.subtitle}</small>`;
      button.addEventListener('click', () => {
        state.friendIds.push(friend.id);
        state.selectedFriendId = friend.id;
        state.friendMessages[friend.id] = state.friendMessages[friend.id] || [];
        saveState();
        renderFriends();
        showToast(text('friendAdded'));
      });
      els.friendResults.appendChild(button);
    });
  }

  els.inviteEventSelect.innerHTML = '';
  const joinedAndCreated = [...new Set([...state.joinedEventIds, ...state.createdEventIds])].map(getEvent).filter(Boolean);
  const inviteOptions = joinedAndCreated.length ? joinedAndCreated : state.events.slice(0, 5);
  inviteOptions.forEach(event => {
    const option = document.createElement('option');
    option.value = event.id;
    option.textContent = `${event.title} • ${event.date}`;
    els.inviteEventSelect.appendChild(option);
  });

  els.chatFriendAvatar.textContent = currentFriend.avatar;
  els.chatFriendName.textContent = currentFriend.name;
  const messages = state.friendMessages[currentFriend.id] || [];
  els.friendChatLog.innerHTML = '';
  if (!messages.length) {
    els.friendChatLog.innerHTML = `<div class="simple-item"><span>${text('none')}</span></div>`;
  } else {
    messages.forEach(message => {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${message.from === 'me' ? 'me' : 'them'}`;
      bubble.textContent = message.text;
      els.friendChatLog.appendChild(bubble);
    });
  }
}

function sendInvite() {
  const friend = getFriend(state.selectedFriendId);
  const event = getEvent(els.inviteEventSelect.value);
  if (!friend || !event) return;
  const message = `${text('chatInvitePrefix')} “${event.title}” — ${event.place} — ${event.date}. ${directionsUrl(event)}`;
  state.friendMessages[friend.id] = state.friendMessages[friend.id] || [];
  state.friendMessages[friend.id].push({ id: `m${Date.now()}`, from: 'me', text: message });
  saveState();
  renderFriends();
  showToast(text('inviteSent'));
}

function sendFriendMessage() {
  const friend = getFriend(state.selectedFriendId);
  const message = els.friendMessage.value.trim();
  if (!friend || !message) {
    showToast(text('messageEmpty'));
    return;
  }
  state.friendMessages[friend.id] = state.friendMessages[friend.id] || [];
  state.friendMessages[friend.id].push({ id: `m${Date.now()}`, from: 'me', text: message });
  saveState();
  els.friendMessage.value = '';
  renderFriends();
}

function renderProfile() {
  els.profileAvatar.textContent = initials(state.profile.name);
  els.profileName.textContent = state.profile.name;
  els.profileMeta.textContent = `${text('profileMeta')} • ${state.profile.eid.slice(-4)}`;
  els.profileBio.textContent = state.profile.bio;
  els.profileStats.innerHTML = '';
  const stats = [
    [text('points'), state.points],
    [text('joinedEvents'), state.joinedEventIds.length],
    [text('createdEvents'), state.createdEventIds.length],
    [text('rewardsTitle'), state.rewardsOwned.length]
  ];
  stats.forEach(([label, value]) => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    els.profileStats.appendChild(card);
  });

  els.badgeRow.innerHTML = '';
  state.badges.forEach(badge => {
    const chip = document.createElement('span');
    chip.className = 'badge-pill';
    chip.textContent = badge;
    els.badgeRow.appendChild(chip);
  });

  fillSimpleList(els.joinedList, state.joinedEventIds.map(getEvent).filter(Boolean), event => `${event.title} • ${event.place} • ${event.date}`);
  fillSimpleList(els.createdList, state.createdEventIds.map(getEvent).filter(Boolean), event => `${event.title} • ${event.place} • ${event.date}`);
  fillSimpleList(els.ridesList, state.rides, ride => `${ride.eventTitle} • ${ride.driverName} • ETA ${ride.eta}`);
}

function fillSimpleList(container, items, formatter) {
  container.innerHTML = '';
  if (!items.length) {
    container.innerHTML = `<div class="simple-item"><span>${text('none')}</span></div>`;
    return;
  }
  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'simple-item';
    row.innerHTML = `<strong>${formatter(item)}</strong>`;
    container.appendChild(row);
  });
}

function renderSettingsSheet() {
  els.languageChips.innerHTML = '';
  [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربية' }
  ].forEach(option => {
    const button = document.createElement('button');
    button.className = `setting-chip ${state.language === option.value ? 'active' : ''}`;
    button.textContent = option.label;
    button.addEventListener('click', () => {
      state.language = option.value;
      state.profile.bio = option.value === 'ar'
        ? seedFromIdentity(state.activeIdentity).bioAr
        : seedFromIdentity(state.activeIdentity).bioEn;
      state.humaidMessages = [{ role: 'assistant', text: text('humaidWelcome') }];
      saveState();
      updateDirectionAndLanguage();
    });
    els.languageChips.appendChild(button);
  });

  els.mapstyleChips.innerHTML = '';
  [
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' }
  ].forEach(option => {
    const button = document.createElement('button');
    button.className = `setting-chip ${state.mapStyle === option.value ? 'active' : ''}`;
    button.textContent = state.language === 'ar'
      ? (option.value === 'dark' ? 'غامق' : 'فاتح')
      : option.label;
    button.addEventListener('click', () => {
      state.mapStyle = option.value;
      saveState();
      renderMap();
      renderSettingsSheet();
    });
    els.mapstyleChips.appendChild(button);
  });
}

function renderRewards() {
  els.rewardPoints.textContent = state.points;
  els.rewardList.innerHTML = '';
  REWARDS.forEach(reward => {
    const owned = state.rewardsOwned.includes(reward.id);
    const locked = state.points < reward.cost;
    const card = document.createElement('div');
    card.className = 'reward-card';
    card.innerHTML = `
      <div class="reward-card-top">
        <div>
          <h5>${reward.title[state.language]}</h5>
          <p>${reward.description[state.language]}</p>
        </div>
        <span class="price-chip">${text('rewardPrice')}: ${reward.cost}</span>
      </div>
      <button class="${owned ? 'secondary-button' : 'primary-button'} wide">${owned ? text('owned') : text('buy')}</button>
    `;
    const button = card.querySelector('button');
    button.disabled = owned || locked;
    button.addEventListener('click', () => buyReward(reward.id));
    els.rewardList.appendChild(card);
  });
}

function buyReward(rewardId) {
  const reward = REWARDS.find(item => item.id === rewardId);
  if (!reward) return;
  if (state.rewardsOwned.includes(reward.id)) return;
  if (state.points < reward.cost) {
    showToast(text('rewardLocked'));
    return;
  }
  state.points -= reward.cost;
  state.rewardsOwned.push(reward.id);
  if (reward.id === 'rw3' && !state.badges.includes('Premium')) {
    state.badges.push('Premium');
  }
  saveState();
  renderFeed();
  renderProfile();
  renderRewards();
  showToast(text('rewardPurchased'));
}

function openRideRequest(eventId) {
  const event = getEvent(eventId);
  if (!event) return;
  rideEventId = eventId;
  els.rideTarget.innerHTML = `<div class="simple-item"><strong>${text('rideMeta')}</strong><span>${event.title} • ${event.place}</span></div>`;
  els.ridePickup.value = '';
  els.ridePassengers.value = '1';
  els.rideNotes.value = '';
  openSheet(els.rideSheet);
}

function confirmRide() {
  const event = getEvent(rideEventId);
  if (!event) return;
  const names = ['Salem', 'Rashed', 'Mohammed', 'Ali', 'Khaled', 'Noora'];
  const cars = ['Nissan Patrol', 'Toyota Land Cruiser', 'Toyota Camry', 'Lexus RX'];
  const eta = 6 + Math.floor(Math.random() * 12);
  state.rides.unshift({
    id: `r${Date.now()}`,
    eventTitle: event.title,
    destination: event.place,
    driverName: `${names[Math.floor(Math.random() * names.length)]} • ${cars[Math.floor(Math.random() * cars.length)]}`,
    eta: `${eta} min`
  });
  saveState();
  renderProfile();
  closeSheet(els.rideSheet);
  showToast(formatText('rideConfirmed', { eta }));
}

function aiReply(userText) {
  const input = userText.toLowerCase();
  if (!input.trim()) return text('humaidFallback');
  if (input.includes('rule') || input.includes('قانون') || input.includes('رجال') || input.includes('نساء') || input.includes('18')) {
    return text('humaidRules');
  }
  if (input.includes('driver') || input.includes('ride') || input.includes('transport') || input.includes('سائق') || input.includes('مواصلات')) {
    return text('humaidTransport');
  }
  if (input.includes('suggest') || input.includes('event') || input.includes('فعال') || input.includes('اقترح') || input.includes('وش')) {
    const joinable = state.events.filter(event => canJoinEvent(event).ok).slice(0, 4);
    const summary = joinable.map(event => `• ${event.title} — ${event.place} — ${event.date}`).join('\n');
    return `${text('humaidSuggest')}\n${summary || text('none')}`;
  }
  return text('humaidFallback');
}

function renderHumaid() {
  els.humaidChatLog.innerHTML = '';
  state.humaidMessages.forEach(message => {
    const bubble = document.createElement('div');
    bubble.className = message.role === 'assistant' ? 'ai-bubble' : 'user-bubble';
    bubble.textContent = message.text;
    els.humaidChatLog.appendChild(bubble);
  });
}

function sendHumaid() {
  const prompt = els.humaidInput.value.trim();
  if (!prompt) return;
  state.humaidMessages.push({ role: 'user', text: prompt });
  state.humaidMessages.push({ role: 'assistant', text: aiReply(prompt) });
  saveState();
  els.humaidInput.value = '';
  renderHumaid();
  els.humaidChatLog.scrollTop = els.humaidChatLog.scrollHeight;
}

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  activeScreen = 'splash';
  activePage = 'feed';
  activeFilter = 'all';
  selectedCreateCategory = 'family';
  selectedMapEventId = null;
  rideEventId = null;
  renderAll();
  showScreen('splash');
  showToast(text('resetDone'));
}

function renderAll() {
  updateDirectionAndLanguage();
  showAppPage(activePage);
  showScreen(activeScreen);
  renderFeed();
  renderMap();
  renderFriends();
  renderProfile();
  renderRewards();
  renderHumaid();
  renderSettingsSheet();
  els.termsCheck.checked = state.termsAccepted;
  els.termsContinue.disabled = !state.termsAccepted;
  els.signinEid.value = state.activeIdentity || '';
  previewIdentity(els.signinEid.value || state.activeIdentity);
}

function previewIdentity(rawEid) {
  const eid = rawEid.trim();
  const linked = seedFromIdentity(eid || state.activeIdentity);
  els.identityPreviewName.textContent = eid ? linked.name : text('digitalIdentityLinked');
  els.identityPreviewMeta.textContent = text('accessResolved');
}

function attachEvents() {
  els.flowPills.forEach(button => {
    button.addEventListener('click', () => showScreen(button.dataset.flowScreen));
  });

  els.nextButtons.forEach(button => {
    button.addEventListener('click', () => showScreen(button.dataset.nextScreen));
  });

  els.termsCheck.addEventListener('change', () => {
    state.termsAccepted = els.termsCheck.checked;
    saveState();
    els.termsContinue.disabled = !state.termsAccepted;
  });

  els.termsContinue.addEventListener('click', () => {
    if (!state.termsAccepted) {
      showToast(text('termsNeeded'));
      return;
    }
    showScreen('signin');
  });

  els.signinEid.addEventListener('input', () => previewIdentity(els.signinEid.value));

  els.signinContinue.addEventListener('click', () => {
    const eid = els.signinEid.value.trim();
    if (!eid) {
      showToast(text('identityRequired'));
      return;
    }
    applyIdentity(eid);
    previewIdentity(eid);
    showToast(text('identityLinkedToast'));
    showScreen('otp');
  });

  els.otpLogin.addEventListener('click', () => {
    state.signedIn = true;
    saveState();
    showScreen('app');
    showAppPage('feed');
  });

  els.navButtons.forEach(button => {
    button.addEventListener('click', () => showAppPage(button.dataset.pageTarget));
  });

  els.openHumaid.addEventListener('click', () => showScreen('ai'));
  els.feedSearch.addEventListener('input', renderFeed);
  els.publishEvent.addEventListener('click', publishEvent);
  els.friendSearch.addEventListener('input', renderFriends);
  els.sendInvite.addEventListener('click', sendInvite);
  els.sendFriendMessage.addEventListener('click', sendFriendMessage);
  els.openSettings.addEventListener('click', () => openSheet(els.settingsSheet));
  els.openRewards.addEventListener('click', () => openSheet(els.rewardsSheet));
  els.saveSettings.addEventListener('click', () => {
    saveState();
    closeSheet(els.settingsSheet);
    showToast(text('languageSaved'));
  });
  els.resetDemo.addEventListener('click', resetDemo);
  els.confirmRide.addEventListener('click', confirmRide);
  els.sendHumaid.addEventListener('click', sendHumaid);
  els.humaidInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') sendHumaid();
  });
  els.friendMessage.addEventListener('keydown', event => {
    if (event.key === 'Enter') sendFriendMessage();
  });

  els.closeSheetButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.closeSheet);
      if (target) closeSheet(target);
    });
  });

  [els.eventSheet, els.rideSheet, els.settingsSheet, els.rewardsSheet].forEach(sheet => {
    sheet.addEventListener('click', event => {
      if (event.target === sheet) closeSheet(sheet);
    });
  });
}

attachEvents();
renderAll();
