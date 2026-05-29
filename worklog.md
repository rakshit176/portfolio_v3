---
Task ID: 1
Agent: Main Agent
Task: Fix all critical, content, and design issues on the portfolio website

Work Log:
- Read all portfolio component files to understand current state
- Fixed hero title: removed curly braces from `{Rakshith Kumar}` → `Rakshith Kumar`
- Fixed stats inconsistency: changed "2,500+ Daily AI Calls" → "10K+ Daily AI Queries" to match About section
- Fixed experience dates: changed "Oct 2024 – Present" → "Oct 2025 – Present" for Gruve AI (in both Experience.tsx and AIChat.tsx resume text)
- Optimized profile.png: resized from 1402x1122 (2.2MB) → 700x560 (616KB) for faster loading
- Fixed duplicate "Contact →" button: replaced fragile case-sensitive string matching with explicit {query, label} objects for all 4 quick-action buttons
- Fixed AI chat JSON-wrapped response parsing: added `extractContent()` function that detects and unwraps JSON responses with `reply`, `content`, `message`, or `text` keys before markdown rendering
- Applied `extractContent()` in both the main chat handler and form submission handler
- Added noscript fallback for Skills graph canvas with fallback skill chips display
- Verified title consistency: "Senior AI/ML Engineer" used uniformly across all files
- Verified no remaining cold blue (#60A5FA) palette references
- Build verified successfully with `next build`

Stage Summary:
- All critical fixes applied (hero braces, profile image, duplicate buttons, JSON parsing)
- All content inconsistencies resolved (title unified, stats consistent, dates corrected)
- All design issues addressed (canvas fallback added, palette verified warm amber)
- User confirmed to keep both photos (hero + About section)
- Build passes cleanly
