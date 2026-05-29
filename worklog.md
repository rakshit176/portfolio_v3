---
Task ID: 1
Agent: Main Agent
Task: Fix all critical, content, and design issues on the portfolio website + brighten text

Work Log:
- Fixed hero title: removed curly braces from `{Rakshith Kumar}` → `Rakshith Kumar`
- Fixed stats inconsistency: changed "2,500+ Daily AI Calls" → "10K+ Daily AI Queries" to match About section
- Fixed experience dates: changed "Oct 2024 – Present" → "Oct 2025 – Present" for Gruve AI (in both Experience.tsx and AIChat.tsx)
- Optimized profile.png: resized from 1402x1122 (2.2MB) → 700x560 (616KB) for faster loading
- Fixed duplicate "Contact →" button: replaced fragile case-sensitive string matching with explicit {query, label} objects for all 4 quick-action buttons
- Fixed AI chat JSON-wrapped response parsing: added `extractContent()` function that detects and unwraps JSON responses with `reply`, `content`, `message`, or `text` keys before markdown rendering
- Applied `extractContent()` in both the main chat handler and form submission handler
- Added noscript fallback for Skills graph canvas with fallback skill chips display
- Verified title consistency: "Senior AI/ML Engineer" used uniformly across all files
- BRIGHTENED ALL TEXT: replaced `#9C7E5A` (dull brown) → `#C4A265` (bright warm gold) across ALL 10 component files + CSS variables + prose-answer styles
- Verified no remaining `#9C7E5A` references in source
- Build verified successfully with `next build`
- Dev server running on port 3000, all changes confirmed live

Stage Summary:
- All critical fixes applied and live
- All text significantly brighter and more visible against dark background
- Color upgrade: body text from `#9C7E5A` → `#C4A265` (roughly 40% brighter)
- CSS variable `--muted-foreground` updated to match
