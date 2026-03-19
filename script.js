const STORAGE_KEY = 'naseej_prototype_mobile_v1';

const COPY = {
  en: {
    welcomeTitle: 'Welcome to Naseej Emirates', welcomeSub: 'One Community Woven Together', joinUs: 'Join Us In Naseej Emirates', back: 'Back',
    beforeContinue: 'Before you continue', termsTitle: 'Terms of Service', termsSub: 'This is a competition prototype. It presents the experience only, not real identity verification.',
    termsInside: 'What this prototype includes', termsItem1: 'Digital identity sign-in concept with OTP confirmation.', termsItem2: 'Community event discovery across family, men, women, and kids categories.',
    termsItem3: 'Access rules, driver request, friends chat, rewards, and settings flows.', termsItem4: 'Humaid AI as an in-app conversation assistant.', termsAccept: 'I accept the prototype terms.', continue: 'Continue',
    signinTitle: 'Sign in with Digital ID', signinSub: 'In the real product, name, age, and gender are resolved automatically from the digital identity provider.', connectedIdentity: 'Connected identity', verified: 'Verified',
    eidLabel: 'Emirates ID', autoName: 'Name auto-filled', autoAge: 'Age auto-filled', autoGender: 'Gender auto-filled', profileSource: 'Profile source', accessRules: 'Access rules',
    digitalIdentityLinked: 'Digital identity linked', accessResolved: 'Profile access resolved from linked identity', continueOtp: 'Continue to OTP', verifyTitle: 'Verify ID', otpSub: 'Demo OTP step for the competition flow.', login: 'Login',
    appTag: 'Competition prototype', smartMatching: 'Smart matching', heroTitle: 'Find trusted community events near you', heroSub: 'Family, men, women, and kids experiences with clear rules and transport support.',
    points: 'Points', joined: 'Joined', categoriesLabel: 'Categories', eventPreview: 'Community event preview', mapTitle: 'Map', mapSub: 'Tap a pin to preview an event and open directions.',
    createTitle: 'Create event', createSub: 'Publish a new event in the prototype and earn points.', eventTitle: 'Event title', categoryLabel: 'Category', dateLabel: 'Date', timeLabel: 'Time', locationLabel: 'Location', descriptionLabel: 'Description', publishEvent: 'Publish event',
    friendsTitle: 'Friends', friendsSub: 'Add by name, send invites, and chat inside the prototype.', sendInvite: 'Send invite', send: 'Send', createdEvents: 'Created events', joinedEvents: 'Joined events', ridesTitle: 'Driver requests',
    rewardsTitle: 'Rewards Store', settingsTitle: 'Settings', profileMeta: 'Digital identity linked • access rules resolved automatically', languageLabel: 'Language', mapStyleLabel: 'Map style',
    friendSearchPlaceholder: 'Search a friend by name', friendMessagePlaceholder: 'Type a message…', humaidPlaceholder: 'Ask Humaid about events, rules, or suggestions…', createTitlePlaceholder: 'Neighborhood community gathering', createLocationPlaceholder: 'Al Majaz Waterfront', createDescriptionPlaceholder: 'Short welcoming description for the event.',
    humaidTitle: 'Humaid AI', humaidIntro: 'Ask about events, rules, categories, or transport. This is an in-app conversation flow for the prototype.', navHome: 'Home', navMap: 'Map', navCreate: 'Create', navFriends: 'Friends', navProfile: 'Profile',
    family: 'Family', men: 'Men', women: 'Women', kids: 'Kids', all: 'All', host: 'Hosted by', join: 'Join', details: 'Details', driver: 'Driver', directions: 'Directions',
    alreadyJoined: 'You already joined this event.', joinSuccess: 'Joined successfully. +10 points', menOnly: 'This is a men-only event.', womenOnly: 'This is a women-only event.', ageGate: 'Your profile does not match the age requirement.',
    mapEmpty: 'Tap any pin to preview the event here.', rideConfirmed: 'Driver confirmed. Arrival in {eta} min.', friendAdded: 'Friend added to the prototype.', messageEmpty: 'Type a message first.', inviteSent: 'Invite sent.', buy: 'Buy', owned: 'Owned', rewardPurchased: 'Reward purchased.', rewardLocked: 'Not enough points yet.', none: 'None yet.', noEvents: 'No events for this filter.', eventPublished: 'Event published. +25 points', fillCreate: 'Complete title, date, location, and description first.',
    createMenOnly: 'Men events are available for male-linked profiles only.', createWomenOnly: 'Women events are available for female-linked profiles only.', createAdultOnly: 'You must be 18+ for men or women events.', createRuleDefault: 'Family and kids events stay open. Men and women events become 18+ automatically.', createRuleMen: 'Men events are 18+ and limited to male-linked profiles.', createRuleWomen: 'Women events are 18+ and limited to female-linked profiles.',
    humaidWelcome: 'Salam. I can suggest events, explain the rules, and help with transport inside Naseej Emirates.', humaidRules: 'Inside Naseej Emirates: men events are for male-linked profiles, women events are for female-linked profiles, and 18+ rules apply automatically. Family and kids stay open to the wider community.',
    humaidTransport: 'Open any event card and tap Driver for a demo request, or Directions to open Google Maps.', humaidSuggest: 'Based on your linked profile, these are the best choices for you:', humaidFallback: 'Try: suggest events I can join, explain the rules, or how do I request a driver?',
    identityRequired: 'Enter your Emirates ID first.', linkedMeta: 'Gender and age come from the linked digital identity.', languageSaved: 'Settings updated.'
  },
  ar: {
    welcomeTitle: 'مرحباً بك في نسيج الإمارات', welcomeSub: 'مجتمع واحد منسوج معًا', joinUs: 'انضم إلى نسيج الإمارات', back: 'رجوع',
    beforeContinue: 'قبل ما تكمل', termsTitle: 'شروط الخدمة', termsSub: 'هذا بروتوتايب للمسابقة ويعرض التجربة فقط، وليس تحققًا حقيقيًا.', termsInside: 'ماذا يعرض هذا البروتوتايب',
    termsItem1: 'فكرة تسجيل الدخول بالهوية الرقمية مع خطوة OTP.', termsItem2: 'اكتشاف فعاليات المجتمع بفئات العائلة والرجال والنساء والأطفال.', termsItem3: 'قواعد الدخول وطلب السائق وشات الأصدقاء والجوائز والإعدادات.', termsItem4: 'حميد AI كمساعد محادثة داخل التطبيق.', termsAccept: 'أوافق على شروط البروتوتايب.', continue: 'متابعة',
    signinTitle: 'تسجيل الدخول بالهوية الرقمية', signinSub: 'في المنتج الحقيقي يتم جلب الاسم والعمر والجنس تلقائيًا من مزود الهوية الرقمية.', connectedIdentity: 'الهوية المرتبطة', verified: 'موثقة', eidLabel: 'رقم الهوية', autoName: 'الاسم تلقائي', autoAge: 'العمر تلقائي', autoGender: 'الجنس تلقائي', profileSource: 'مصدر الملف', accessRules: 'قواعد الدخول', digitalIdentityLinked: 'تم ربط الهوية الرقمية', accessResolved: 'تم تحديد الصلاحيات من الهوية المرتبطة', continueOtp: 'المتابعة إلى OTP', verifyTitle: 'تحقق من الهوية', otpSub: 'هذه خطوة OTP تجريبية خاصة بعرض المسابقة.', login: 'دخول',
    appTag: 'بروتوتايب للمسابقة', smartMatching: 'مطابقة ذكية', heroTitle: 'اكتشف فعاليات مجتمعية موثوقة بالقرب منك', heroSub: 'فعاليات للعائلة والرجال والنساء والأطفال مع قواعد واضحة ودعم للمواصلات.', points: 'نقاط', joined: 'انضممت', categoriesLabel: 'الفئات', eventPreview: 'معاينة الفعاليات', mapTitle: 'الخريطة', mapSub: 'اضغط على أي دبوس لمعاينة الفعالية وفتح الاتجاهات.',
    createTitle: 'إنشاء فعالية', createSub: 'انشر فعالية جديدة في البروتوتايب واكسب نقاطًا.', eventTitle: 'عنوان الفعالية', categoryLabel: 'الفئة', dateLabel: 'التاريخ', timeLabel: 'الوقت', locationLabel: 'الموقع', descriptionLabel: 'الوصف', publishEvent: 'نشر الفعالية',
    friendsTitle: 'الأصدقاء', friendsSub: 'أضف بالاسم، وأرسل دعوات، وادخل شات داخل البروتوتايب.', sendInvite: 'إرسال دعوة', send: 'إرسال', createdEvents: 'فعاليات أنشأتها', joinedEvents: 'فعاليات انضممت لها', ridesTitle: 'طلبات السائق', rewardsTitle: 'متجر الجوائز', settingsTitle: 'الإعدادات', profileMeta: 'الهوية الرقمية مرتبطة • الصلاحيات محددة تلقائيًا', languageLabel: 'اللغة', mapStyleLabel: 'ستايل الخريطة',
    friendSearchPlaceholder: 'ابحث عن صديق بالاسم', friendMessagePlaceholder: 'اكتب رسالة…', humaidPlaceholder: 'اسأل حميد عن الفعاليات أو القوانين أو الاقتراحات…', createTitlePlaceholder: 'لقاء مجتمعي في الحي', createLocationPlaceholder: 'واجهة المجاز', createDescriptionPlaceholder: 'وصف قصير ومرحب للفعالية.',
    humaidTitle: 'حميد AI', humaidIntro: 'اسأل عن الفعاليات أو القوانين أو الفئات أو المواصلات. هذا مسار محادثة داخل البروتوتايب.', navHome: 'الرئيسية', navMap: 'الخريطة', navCreate: 'إضافة', navFriends: 'الأصدقاء', navProfile: 'البروفايل',
    family: 'العائلة', men: 'الرجال', women: 'النساء', kids: 'الأطفال', all: 'الكل', host: 'المستضيف', join: 'انضم', details: 'التفاصيل', driver: 'سائق', directions: 'الاتجاهات', alreadyJoined: 'أنت منضم لهذه الفعالية مسبقًا.', joinSuccess: 'تم الانضمام. +10 نقاط', menOnly: 'هذه فعالية للرجال فقط.', womenOnly: 'هذه فعالية للنساء فقط.', ageGate: 'عمرك لا يطابق شرط الدخول.', mapEmpty: 'اضغط أي دبوس لمعاينة الفعالية هنا.', rideConfirmed: 'تم تأكيد السائق. الوصول خلال {eta} دقيقة.', friendAdded: 'تمت إضافة الصديق داخل البروتوتايب.', messageEmpty: 'اكتب رسالة أولاً.', inviteSent: 'تم إرسال الدعوة.', buy: 'شراء', owned: 'تمت', rewardPurchased: 'تم شراء الجائزة.', rewardLocked: 'النقاط غير كافية حالياً.', none: 'لا يوجد بعد.', noEvents: 'لا توجد فعاليات لهذا الفلتر.', eventPublished: 'تم نشر الفعالية. +25 نقطة', fillCreate: 'كمّل العنوان والتاريخ والموقع والوصف أولاً.', createMenOnly: 'فعاليات الرجال متاحة للملفات الرجالية فقط.', createWomenOnly: 'فعاليات النساء متاحة للملفات النسائية فقط.', createAdultOnly: 'لازم يكون عمرك 18+ لفعاليات الرجال أو النساء.', createRuleDefault: 'فعاليات العائلة والأطفال مفتوحة. فعاليات الرجال والنساء تصبح +18 تلقائيًا.', createRuleMen: 'فعاليات الرجال +18 ومخصصة للملفات الرجالية فقط.', createRuleWomen: 'فعاليات النساء +18 ومخصصة للملفات النسائية فقط.', humaidWelcome: 'السلام عليكم. أقدر أقترح لك فعاليات، وأشرح القوانين، وأساعدك في المواصلات داخل نسيج الإمارات.', humaidRules: 'داخل نسيج الإمارات: فعاليات الرجال للملفات الرجالية، وفعاليات النساء للملفات النسائية، وشروط +18 تتطبق تلقائيًا. أما العائلة والأطفال فتبقى مفتوحة للمجتمع بشكل عام.', humaidTransport: 'افتح أي كرت فعالية واضغط سائق لطلب مشوار تجريبي، أو الاتجاهات لفتح خرائط جوجل.', humaidSuggest: 'حسب ملفك المرتبط، هذه أفضل الخيارات لك:', humaidFallback: 'جرّب: اقترح فعاليات أقدر أنضم لها، اشرح القوانين، أو كيف أطلب سائق؟', identityRequired: 'اكتب رقم الهوية أولاً.', linkedMeta: 'العمر والجنس يأتون تلقائيًا من الهوية الرقمية المرتبطة.', languageSaved: 'تم تحديث الإعدادات.'
  }
};

const BASE_EVENTS = [
  { id:'ev1', title:'Beach Clean-up', category:'family', description:'A light volunteering activity, open to the wider community.', place:'Al Khan Beach', date:'2026-01-10', time:'08:00', host:'Ahmed', minAge:0, lat:21, top:46 },
  { id:'ev2', title:'Family Park Picnic', category:'family', description:'Bring your family for games and shared moments.', place:'Al Majaz Park', date:'2026-01-12', time:'17:30', host:'Maryam', minAge:0, lat:36, top:61 },
  { id:'ev3', title:'Men Majlis', category:'men', description:'Men-only discussion session with community hosts.', place:'Heart of Sharjah', date:'2026-01-15', time:'19:30', host:'Ahmed', minAge:18, lat:63, top:34 },
  { id:'ev4', title:'Women Wellness Session', category:'women', description:'Women-only wellness session with privacy-first support.', place:'Corniche', date:'2026-01-18', time:'06:45', host:'Maryam', minAge:18, lat:69, top:56 },
  { id:'ev5', title:'Kids Art Workshop', category:'kids', description:'Creative art activities for children with guardian support.', place:'Al Majaz Waterfront', date:'2026-01-20', time:'16:00', host:'Noora', minAge:0, lat:47, top:73 }
];
const FRIENDS = [
  { id:'f1', name:'Ahmed', subtitle:'Volunteer friend', avatar:'A' },
  { id:'f2', name:'Maryam', subtitle:'Culture friend', avatar:'M' },
  { id:'f3', name:'Noora', subtitle:'Family events', avatar:'N' },
  { id:'f4', name:'Salem', subtitle:'Majlis friend', avatar:'S' }
];
const REWARDS = [
  { id:'rw1', cost:60, title:{en:'Coffee Voucher', ar:'قسيمة قهوة'}, description:{en:'Redeem for coffee at a partner cafe.', ar:'استبدلها بقهوة من مقهى شريك.'}},
  { id:'rw2', cost:120, title:{en:'Featured Event Ticket', ar:'تذكرة فعالية مميزة'}, description:{en:'Demo ticket for a featured community event.', ar:'تذكرة تجريبية لفعالية مجتمعية مميزة.'}},
  { id:'rw3', cost:200, title:{en:'Premium Badge', ar:'شارة مميزة'}, description:{en:'Unlock a premium badge in the profile.', ar:'افتح شارة مميزة في البروفايل.'}}
];
const IDENTITIES = [
  { name:'Nasser', gender:'male', age:21, badges:['Starter','Explorer'], points:120 },
  { name:'Maryam', gender:'female', age:24, badges:['Culture Lover','Organizer'], points:180 },
  { name:'Ahmed', gender:'male', age:27, badges:['Volunteer'], points:160 },
  { name:'Noora', gender:'female', age:19, badges:['Starter','Helper'], points:140 }
];

const el = {
  appRoot: document.getElementById('appRoot'),
  overlay: document.getElementById('overlay'), aiSheet: document.getElementById('aiSheet'), openAi: document.getElementById('openAi'), closeAi: document.getElementById('closeAi'),
  aiChat: document.getElementById('aiChat'), aiInput: document.getElementById('aiInput'), sendAi: document.getElementById('sendAi'),
  termsCheckbox: document.getElementById('termsCheckbox'), termsContinue: document.getElementById('termsContinue'), eidInput: document.getElementById('eidInput'),
  identityName: document.getElementById('identityName'), identityMeta: document.getElementById('identityMeta'), continueOtp: document.getElementById('continueOtp'), loginBtn: document.getElementById('loginBtn'),
  pageTitle: document.getElementById('pageTitle'), topEyebrow: document.getElementById('topEyebrow'), langToggle: document.getElementById('langToggle'), settingsLangToggle: document.getElementById('settingsLangToggle'), mapStyleToggle: document.getElementById('mapStyleToggle'),
  categoryChips: document.getElementById('categoryChips'), homeEvents: document.getElementById('homeEvents'), mapFilterRow: document.getElementById('mapFilterRow'), mapBoard: document.getElementById('mapBoard'), mapDetail: document.getElementById('mapDetail'), goMapFromHome: document.getElementById('goMapFromHome'),
  heroPoints: document.getElementById('heroPoints'), heroJoined: document.getElementById('heroJoined'), profileAvatar: document.getElementById('profileAvatar'), profileName: document.getElementById('profileName'), profileMeta: document.getElementById('profileMeta'), profileEid: document.getElementById('profileEid'), profilePoints: document.getElementById('profilePoints'), profileJoined: document.getElementById('profileJoined'), profileCreated: document.getElementById('profileCreated'), badgeList: document.getElementById('badgeList'), joinedList: document.getElementById('joinedList'), createdList: document.getElementById('createdList'), ridesList: document.getElementById('ridesList'), rewardsList: document.getElementById('rewardsList'),
  createTitleInput: document.getElementById('createTitleInput'), createCategory: document.getElementById('createCategory'), createDate: document.getElementById('createDate'), createTime: document.getElementById('createTime'), createLocation: document.getElementById('createLocation'), createDescription: document.getElementById('createDescription'), createRuleBanner: document.getElementById('createRuleBanner'), publishEvent: document.getElementById('publishEvent'),
  friendSearch: document.getElementById('friendSearch'), friendResults: document.getElementById('friendResults'), chatFriendTitle: document.getElementById('chatFriendTitle'), chatMessages: document.getElementById('chatMessages'), friendMessage: document.getElementById('friendMessage'), sendChat: document.getElementById('sendChat'), sendInvite: document.getElementById('sendInvite'),
  toast: document.getElementById('toast')
};

function defaultState() {
  return {
    lang: 'en', screen: 'splash', page: 'home', termsAccepted: false, mapStyle: 'light', eid: '', categoryFilter: 'all', mapFilter: 'all',
    selectedFriend: 'f1', selectedMapEvent: null,
    profile: { name:'Nasser', gender:'male', age:21, badges:['Starter','Explorer'], points:120 },
    events: [...BASE_EVENTS], joinedEventIds: [], createdEventIds: [], rides: [], friendsAdded: ['f1','f2'],
    chats: { f1:[{by:'them', text:'Looking for family events this week?'},{by:'me', text:'Yes, send me the best one.'}], f2:[{by:'them', text:'There is a wellness session soon.'}] },
    aiMessages: [{by:'them', text:COPY.en.humaidWelcome}],
    rewardsOwned: []
  };
}
function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; }
  catch { return defaultState(); }
}
let state = loadState();
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function t(key) { return (COPY[state.lang] && COPY[state.lang][key]) || COPY.en[key] || key; }
function showToast(msg) { el.toast.textContent = msg; el.toast.classList.add('show'); clearTimeout(showToast._t); showToast._t = setTimeout(()=>el.toast.classList.remove('show'), 2200); }
function setDir() { document.documentElement.lang = state.lang; document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr'; document.body.dir = document.documentElement.dir; el.langToggle.textContent = state.lang === 'en' ? 'AR' : 'EN'; }

function applyI18n() {
  setDir();
  document.querySelectorAll('[data-i18n]').forEach(node => node.textContent = t(node.dataset.i18n));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => node.placeholder = t(node.dataset.i18nPlaceholder));
  el.identityMeta.textContent = t('linkedMeta');
}
function switchScreen(name) {
  document.querySelectorAll('.onboarding-screen, .app-screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
  state.screen = name; saveState();
}
function openApp() { switchScreen('app'); renderAll(); }

function resolveIdentity(eid) {
  const last = String(eid).replace(/\D/g,'').slice(-1) || '0';
  return IDENTITIES[Number(last) % IDENTITIES.length];
}
function categoryLabel(cat) { return t(cat); }
function canJoin(event) {
  const p = state.profile;
  if (event.category === 'men' && p.gender !== 'male') return {ok:false, reason:t('menOnly')};
  if (event.category === 'women' && p.gender !== 'female') return {ok:false, reason:t('womenOnly')};
  if (p.age < (event.minAge || 0)) return {ok:false, reason:t('ageGate')};
  return {ok:true, reason:''};
}
function joinEvent(id) {
  if (state.joinedEventIds.includes(id)) return showToast(t('alreadyJoined'));
  const event = state.events.find(e => e.id === id); if (!event) return;
  const access = canJoin(event); if (!access.ok) return showToast(access.reason);
  state.joinedEventIds.push(id); state.profile.points += 10; saveState(); renderAll(); showToast(t('joinSuccess'));
}
function requestDriver(id) {
  const event = state.events.find(e => e.id === id); if (!event) return;
  const eta = Math.floor(Math.random()*11)+7;
  state.rides.unshift({ id:`r${Date.now()}`, eventTitle:event.title, eta, driver:['Salem','Rashed','Noora','Mariam'][Math.floor(Math.random()*4)] });
  saveState(); renderProfile(); showToast(t('rideConfirmed').replace('{eta}', eta));
}
function directionsLink(event) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.place)}`;
}

function renderCategoryChips() {
  const cats = ['all','family','men','women','kids'];
  const btns = cats.map(cat => `<button class="chip ${state.categoryFilter===cat?'active':''}" data-cat="${cat}">${categoryLabel(cat)}</button>`).join('');
  el.categoryChips.innerHTML = btns;
  el.categoryChips.querySelectorAll('[data-cat]').forEach(btn => btn.onclick = () => { state.categoryFilter = btn.dataset.cat; saveState(); renderHome(); });
}
function renderEventCard(event, withDetails=false) {
  const access = canJoin(event);
  return `
    <article class="event-card">
      <div class="event-top">
        <div>
          <div class="event-title-row">
            <h4>${event.title}</h4>
            <span class="mini-tag">${categoryLabel(event.category)}</span>
            ${event.minAge >= 18 ? `<span class="mini-tag">18+</span>` : ''}
          </div>
          <p class="event-meta">${event.place} • ${event.date} ${event.time} • ${t('host')}: ${event.host}</p>
          <p class="event-meta">${event.description}</p>
          ${!access.ok ? `<p class="event-meta" style="color:#9b4b31;font-weight:700;">${access.reason}</p>` : ''}
        </div>
      </div>
      <div class="event-actions three">
        <button class="primary-action" data-join="${event.id}">${t('join')}</button>
        <button class="soft-action" data-driver="${event.id}">${t('driver')}</button>
        <a class="ghost-action" href="${directionsLink(event)}" target="_blank" rel="noreferrer">${t('directions')}</a>
      </div>
    </article>`;
}
function renderHome() {
  renderCategoryChips();
  const filtered = state.events.filter(e => state.categoryFilter === 'all' || e.category === state.categoryFilter);
  el.homeEvents.innerHTML = filtered.length ? filtered.map(e => renderEventCard(e)).join('') : `<div class="list-card">${t('noEvents')}</div>`;
  el.homeEvents.querySelectorAll('[data-join]').forEach(btn => btn.onclick = () => joinEvent(btn.dataset.join));
  el.homeEvents.querySelectorAll('[data-driver]').forEach(btn => btn.onclick = () => requestDriver(btn.dataset.driver));
  el.heroPoints.textContent = state.profile.points;
  el.heroJoined.textContent = state.joinedEventIds.length;
}
function renderMap() {
  const cats = ['all','family','men','women','kids'];
  el.mapFilterRow.innerHTML = cats.map(cat => `<button class="chip ${state.mapFilter===cat?'active':''}" data-map-cat="${cat}">${categoryLabel(cat)}</button>`).join('');
  el.mapFilterRow.querySelectorAll('[data-map-cat]').forEach(btn => btn.onclick = () => { state.mapFilter = btn.dataset.mapCat; saveState(); renderMap(); });
  const filtered = state.events.filter(e => state.mapFilter === 'all' || e.category === state.mapFilter);
  el.mapBoard.innerHTML = filtered.map(e => `<button class="map-pin ${state.selectedMapEvent===e.id?'active':''}" style="left:${e.lat}%; top:${e.top}%;" data-pin="${e.id}" aria-label="${e.title}"></button>`).join('');
  el.mapBoard.querySelectorAll('[data-pin]').forEach(pin => pin.onclick = () => { state.selectedMapEvent = pin.dataset.pin; saveState(); renderMap(); });
  const selected = filtered.find(e => e.id === state.selectedMapEvent) || filtered[0];
  if (selected) {
    el.mapDetail.innerHTML = `<h4 style="margin:0 0 6px;">${selected.title}</h4><p>${selected.place} • ${selected.date} ${selected.time}</p><div class="event-actions" style="margin-top:12px;"><button class="primary-action" id="mapJoin">${t('join')}</button><a class="ghost-action" href="${directionsLink(selected)}" target="_blank" rel="noreferrer">${t('directions')}</a></div>`;
    document.getElementById('mapJoin').onclick = () => joinEvent(selected.id);
  } else {
    el.mapDetail.innerHTML = `<p>${t('mapEmpty')}</p>`;
  }
}
function renderCreate() {
  const options = ['family','men','women','kids'].map(c => `<option value="${c}">${categoryLabel(c)}</option>`).join('');
  el.createCategory.innerHTML = options;
  const updateRule = () => {
    const cat = el.createCategory.value;
    let msg = t('createRuleDefault');
    if (cat === 'men') msg = t('createRuleMen');
    if (cat === 'women') msg = t('createRuleWomen');
    el.createRuleBanner.textContent = msg;
  };
  el.createCategory.onchange = updateRule; updateRule();
}
function publishEvent() {
  const title = el.createTitleInput.value.trim(); const category = el.createCategory.value; const date = el.createDate.value; const time = el.createTime.value; const place = el.createLocation.value.trim(); const description = el.createDescription.value.trim();
  if (!title || !date || !place || !description) return showToast(t('fillCreate'));
  if (category === 'men' && state.profile.gender !== 'male') return showToast(t('createMenOnly'));
  if (category === 'women' && state.profile.gender !== 'female') return showToast(t('createWomenOnly'));
  if ((category === 'men' || category === 'women') && state.profile.age < 18) return showToast(t('createAdultOnly'));
  state.events.unshift({ id:`ev${Date.now()}`, title, category, date, time, place, description, host:state.profile.name, minAge:(category==='men'||category==='women')?18:0, lat:Math.floor(Math.random()*58)+20, top:Math.floor(Math.random()*46)+24 });
  state.createdEventIds.unshift(state.events[0].id); state.profile.points += 25; saveState();
  el.createTitleInput.value=''; el.createLocation.value=''; el.createDescription.value=''; showToast(t('eventPublished')); renderAll(); goPage('home');
}
function renderFriends() {
  const q = el.friendSearch.value.trim().toLowerCase();
  const items = FRIENDS.filter(f => (state.friendsAdded.includes(f.id) || f.name.toLowerCase().includes(q)) && f.name.toLowerCase().includes(q || '') );
  el.friendResults.innerHTML = FRIENDS.filter(f => f.name.toLowerCase().includes(q || '')).map(f => `
    <div class="friend-card">
      <div style="display:flex; gap:12px; align-items:center;">
        <div class="avatar-circle">${f.avatar}</div>
        <div>
          <div class="friend-name">${f.name}</div>
          <div class="friend-sub">${f.subtitle}</div>
        </div>
      </div>
      <button class="secondary-btn small-btn" data-friend="${f.id}">${state.friendsAdded.includes(f.id) ? 'Open' : '+'}</button>
    </div>`).join('');
  el.friendResults.querySelectorAll('[data-friend]').forEach(btn => btn.onclick = () => {
    state.selectedFriend = btn.dataset.friend; if (!state.friendsAdded.includes(btn.dataset.friend)) { state.friendsAdded.push(btn.dataset.friend); showToast(t('friendAdded')); }
    saveState(); renderFriendsChat(); renderFriends();
  });
  renderFriendsChat();
}
function renderFriendsChat() {
  const friend = FRIENDS.find(f => f.id === state.selectedFriend) || FRIENDS[0];
  el.chatFriendTitle.textContent = friend.name;
  const messages = state.chats[friend.id] || [];
  el.chatMessages.innerHTML = messages.map(m => `<div class="chat-bubble ${m.by==='me'?'me':'them'}">${m.text}</div>`).join('');
  el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
}
function sendFriendMessage() {
  const text = el.friendMessage.value.trim(); if (!text) return showToast(t('messageEmpty'));
  const id = state.selectedFriend; state.chats[id] = state.chats[id] || []; state.chats[id].push({by:'me', text}); state.chats[id].push({by:'them', text: state.lang==='ar' ? 'وصلتني، شكلها فعالية حلوة.' : 'Got it, that looks like a good event.'});
  el.friendMessage.value = ''; saveState(); renderFriendsChat();
}
function sendInvite() {
  const event = state.events[0]; const id = state.selectedFriend; state.chats[id] = state.chats[id] || []; const line = `${state.lang==='ar' ? 'تعال معي إلى' : 'Join me at'} ${event.title} • ${event.date}`; state.chats[id].push({by:'me', text: line}); saveState(); renderFriendsChat(); showToast(t('inviteSent')); }
function renderProfile() {
  const p = state.profile; const eidTail = state.eid ? state.eid.slice(-4) : '4567';
  el.profileAvatar.textContent = p.name.slice(0,1).toUpperCase(); el.profileName.textContent = p.name; el.profileMeta.textContent = t('profileMeta'); el.profileEid.textContent = `Emirates ID: …${eidTail}`;
  el.profilePoints.textContent = p.points; el.profileJoined.textContent = state.joinedEventIds.length; el.profileCreated.textContent = state.createdEventIds.length; el.badgeList.innerHTML = p.badges.map(b => `<span class="badge">${b}</span>`).join('');
  const byId = Object.fromEntries(state.events.map(e => [e.id, e]));
  const renderSimple = (ids) => ids.length ? ids.map(id => { const e = byId[id]; return e ? `<div class="list-card"><strong>${e.title}</strong><p class="event-meta">${e.place} • ${e.date} ${e.time}</p></div>` : ''; }).join('') : `<div class="list-card">${t('none')}</div>`;
  el.joinedList.innerHTML = renderSimple(state.joinedEventIds);
  el.createdList.innerHTML = renderSimple(state.createdEventIds);
  el.ridesList.innerHTML = state.rides.length ? state.rides.map(r => `<div class="ride-card"><strong>${r.eventTitle}</strong><p class="event-meta">${r.driver} • ETA ${r.eta} min</p></div>`).join('') : `<div class="list-card">${t('none')}</div>`;
  el.rewardsList.innerHTML = REWARDS.map(r => {
    const owned = state.rewardsOwned.includes(r.id); return `<div class="reward-card"><div class="section-head"><div><h4 style="margin:0;">${r.title[state.lang]}</h4><p>${r.description[state.lang]}</p></div><span class="mini-tag">${r.cost}</span></div><div class="reward-actions"><button class="primary-action" data-buy="${r.id}">${owned ? t('owned') : t('buy')}</button></div></div>`;
  }).join('');
  el.rewardsList.querySelectorAll('[data-buy]').forEach(btn => btn.onclick = () => buyReward(btn.dataset.buy));
}
function buyReward(id) { const reward = REWARDS.find(r => r.id===id); if (!reward) return; if (state.rewardsOwned.includes(id)) return; if (state.profile.points < reward.cost) return showToast(t('rewardLocked')); state.profile.points -= reward.cost; state.rewardsOwned.push(id); if (id==='rw3' && !state.profile.badges.includes('Premium')) state.profile.badges.push('Premium'); saveState(); renderProfile(); renderHome(); showToast(t('rewardPurchased')); }
function aiReply(text) {
  const q = text.toLowerCase();
  if (/rule|rules|قانون|قوانين|men|women|رجال|نساء|18/.test(q)) return t('humaidRules');
  if (/driver|transport|ride|سائق|مواصلات|اتجاه/.test(q)) return t('humaidTransport');
  if (/event|suggest|join|فعاليات|اقترح|انضم/.test(q)) {
    const joinable = state.events.filter(e => canJoin(e).ok).slice(0,3).map(e => `• ${e.title} — ${e.place}`).join('\n');
    return `${t('humaidSuggest')}\n${joinable || t('noEvents')}`;
  }
  return t('humaidFallback');
}
function sendAiMessage() {
  const text = el.aiInput.value.trim(); if (!text) return;
  state.aiMessages.push({by:'me', text}); state.aiMessages.push({by:'them', text: aiReply(text)}); el.aiInput.value=''; saveState(); renderAi();
}
function renderAi() { el.aiChat.innerHTML = state.aiMessages.map(m => `<div class="chat-bubble ${m.by==='me'?'me':'them'}">${m.text.replace(/\n/g,'<br>')}</div>`).join(''); el.aiChat.scrollTop = el.aiChat.scrollHeight; }
function goPage(page) {
  state.page = page; saveState();
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.dataset.page===page));
  document.querySelectorAll('[data-page-btn]').forEach(b => b.classList.toggle('active', b.dataset.pageBtn===page));
  const titles = { home:'Naseej Emirates', map:t('mapTitle'), create:t('createTitle'), friends:t('friendsTitle'), profile:'Profile' };
  el.pageTitle.textContent = titles[page] || 'Naseej Emirates';
}
function renderAll() { applyI18n(); renderHome(); renderMap(); renderCreate(); renderFriends(); renderProfile(); renderAi(); goPage(state.page || 'home'); saveState(); }

function setupEvents() {
  document.querySelectorAll('[data-next-screen]').forEach(btn => btn.addEventListener('click', () => switchScreen(btn.dataset.nextScreen)));
  el.termsCheckbox.addEventListener('change', () => { el.termsContinue.disabled = !el.termsCheckbox.checked; });
  el.termsContinue.addEventListener('click', () => { state.termsAccepted = true; switchScreen('signin'); saveState(); });
  el.continueOtp.addEventListener('click', () => {
    const eid = el.eidInput.value.trim(); if (!eid) return showToast(t('identityRequired'));
    state.eid = eid; state.profile = { ...resolveIdentity(eid) }; el.identityName.textContent = state.profile.name; saveState(); showToast(t('linkedMeta')); switchScreen('otp');
  });
  el.loginBtn.addEventListener('click', () => openApp());
  document.querySelectorAll('[data-page-btn]').forEach(btn => btn.addEventListener('click', () => goPage(btn.dataset.pageBtn)));
  el.goMapFromHome.addEventListener('click', () => goPage('map'));
  el.publishEvent.addEventListener('click', publishEvent);
  el.friendSearch.addEventListener('input', renderFriends);
  el.sendChat.addEventListener('click', sendFriendMessage);
  el.sendInvite.addEventListener('click', sendInvite);
  el.openAi.addEventListener('click', () => { el.overlay.classList.remove('hidden'); el.aiSheet.classList.remove('hidden'); renderAi(); });
  const closeAi = () => { el.overlay.classList.add('hidden'); el.aiSheet.classList.add('hidden'); };
  el.closeAi.addEventListener('click', closeAi); el.overlay.addEventListener('click', closeAi);
  el.sendAi.addEventListener('click', sendAiMessage);
  el.langToggle.addEventListener('click', () => { state.lang = state.lang==='en' ? 'ar' : 'en'; saveState(); renderAll(); showToast(t('languageSaved')); });
  el.settingsLangToggle.addEventListener('click', () => { state.lang = state.lang==='en' ? 'ar' : 'en'; saveState(); renderAll(); showToast(t('languageSaved')); });
  el.mapStyleToggle.addEventListener('click', () => { state.mapStyle = state.mapStyle === 'light' ? 'dark' : 'light'; el.mapStyleToggle.textContent = state.mapStyle; document.documentElement.style.setProperty('--page', state.mapStyle==='dark' ? '#ece4de' : '#efe4db'); saveState(); });
}

function init() {
  setupEvents(); applyI18n();
  if (state.screen === 'app') openApp();
  else switchScreen(state.screen || 'splash');
  if (state.eid) {
    const p = resolveIdentity(state.eid); state.profile = { ...state.profile, ...p }; el.identityName.textContent = p.name;
  }
  renderAll();
  if (state.screen !== 'app') {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  }
}
init();
