# Naseej Emirates — iOS Competition Prototype (Final)

This is a **mobile-first static prototype** for **GitHub Pages**.
It is built to look and behave like an **iPhone prototype**, not a production app.

## What is included
- Splash / Home screen
- Terms screen
- **Digital ID sign in** using Emirates ID only
- OTP verification screen
- Main app with bottom navigation like the mockup
- Feed with category filters: All / Family / Men / Women / Kids
- Map preview with event pins and directions link
- Create event flow with access restrictions
- Friends page with add/search, invite, and chat
- Profile page with Settings and Rewards shortcuts
- Rewards store with points logic
- Humaid AI **chat conversation** screen
- Local demo state using `localStorage`

## Important competition notes
- This is a **prototype** only
- Name / age / gender are **not manually entered** in onboarding
- They are treated as **linked from digital identity**
- Men / Women / 18+ access rules are simulated from the linked identity profile

## Files
- `index.html`
- `styles.css`
- `script.js`

## GitHub Pages deployment
1. Create a GitHub repository
2. Upload all files from this folder to the repo root
3. In GitHub: **Settings → Pages**
4. Set source to **Deploy from branch**
5. Choose **main** branch and `/root`
6. Save and wait for the Pages link

## Best demo flow for judges
1. Splash
2. Terms
3. Digital ID sign in
4. OTP
5. Feed
6. Map
7. Create
8. Friends
9. Profile → Settings / Rewards
10. Humaid AI
