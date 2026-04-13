# Zerise CV Maker - Complete Design Guide

## 🎨 Brand Identity

### Brand Personality
- **Professional** but not corporate
- **Helpful** and educational
- **Modern** but clean
- **Trustworthy** - this is about people's careers

### Color Palette

**Primary Colors:**
- **Main Brand:** Deep Blue `#2563EB` (trust, professional)
- **Accent:** Emerald Green `#10B981` (success, growth)
- **Background:** Soft Gray `#F9FAFB`

**Supporting Colors:**
- Success: `#22C55E` (green checkmarks, positive feedback)
- Warning: `#F59E0B` (ATS warnings)
- Error: `#EF4444` (critical issues)
- Text Dark: `#1F2937`
- Text Light: `#6B7280`

### Typography

**Headings:**
- Font: Inter or Poppins (modern, clean)
- Weight: Bold (700) for main headings
- Weight: SemiBold (600) for subheadings

**Body Text:**
- Font: Inter or System fonts
- Weight: Regular (400)
- Size: 16px base (readable, accessible)

**Resume Preview:**
- Fonts: Calibri, Arial, Georgia (ATS-safe only!)
- Professional, boring fonts on purpose

---

## 📱 Layout Structure

### Main Screen Layout (Desktop)

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
│  [Logo: Zerise]  [Home] [Features] [Pricing] [Get Started]  │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┬──────────────────┬──────────────────────┐
│                  │                  │                      │
│   LEFT SIDEBAR   │  MAIN EDITOR     │   RIGHT PREVIEW      │
│                  │                  │                      │
│  Form Inputs     │  Live Editing    │   Resume Preview     │
│  - Contact       │  Area            │   (looks like PDF)   │
│  - Experience    │                  │                      │
│  - Education     │                  │                      │
│  - Skills        │                  │                      │
│                  │                  │                      │
│  [ATS Score: 85] │                  │   [Download PDF]     │
│                  │                  │                      │
└──────────────────┴──────────────────┴──────────────────────┘
```

**Proportions:**
- Left Sidebar: 30%
- Main Editor: 35%
- Right Preview: 35%

---

## 🎯 Key Screens Design

### 1. Landing Page

**Hero Section:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│     Beat the ATS. Land the Interview.              │
│     ─────────────────────────────────              │
│                                                     │
│     Free resume builder optimized for              │
│     Applicant Tracking Systems                     │
│                                                     │
│     [Create My Resume →]  [See Example]            │
│                                                     │
│          [Screenshot of Resume Preview]            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Features Section:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   [Icon]              [Icon]           [Icon]      │
│   ATS Optimized      Free Forever     Fast Export  │
│   Get past bots      No hidden fees   Download PDF │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Social Proof:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   "Got 3 interviews in one week after              │
│    rebuilding my resume with Zerise"               │
│    - Sarah M., Software Engineer                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 2. Editor Screen (Main App)

**Left Sidebar - Input Forms:**

```
┌─────────────────────┐
│ 📋 SECTIONS         │
│                     │
│ ✓ Contact Info      │
│ ✓ Summary          │
│ → Work Experience   │ ← Active
│   Education         │
│   Skills            │
│   + Add Section     │
│                     │
├─────────────────────┤
│                     │
│ 🎯 ATS SCORE: 85/100│
│                     │
│ ✓ 12 Good practices │
│ ⚠ 2 Warnings        │
│ ✗ 1 Critical issue  │
│                     │
│ [View Details]      │
│                     │
└─────────────────────┘
```

**Center - Active Form:**

```
┌─────────────────────────────────┐
│ Work Experience                 │
│                                 │
│ Job Title                       │
│ [Senior Developer          ]    │
│                                 │
│ Company                         │
│ [Tech Corp                 ]    │
│                                 │
│ Duration                        │
│ [Jan 2020] to [Present]         │
│                                 │
│ Description                     │
│ [• Led team of 5 developers]   │
│ [• Built 3 major features  ]   │
│ [                          ]   │
│                                 │
│ 💡 ATS Tip: Use bullet points  │
│    and action verbs            │
│                                 │
│ [+ Add Another Position]        │
└─────────────────────────────────┘
```

**Right - Live Preview:**

```
┌─────────────────────────────────┐
│ JOHN SMITH                      │
│ john@email.com | 555-1234       │
│ ────────────────────────────    │
│                                 │
│ PROFESSIONAL SUMMARY            │
│ Experienced developer...        │
│                                 │
│ WORK EXPERIENCE                 │
│ Senior Developer                │
│ Tech Corp | Jan 2020 - Present  │
│ • Led team of 5 developers      │
│ • Built 3 major features        │
│                                 │
│          [Download PDF]         │
│          [Save Progress]        │
└─────────────────────────────────┘
```

---

### 3. ATS Score Breakdown Screen

```
┌─────────────────────────────────────────────┐
│                                             │
│        Your ATS Score: 85/100               │
│        ████████████████░░░░░                │
│                                             │
│  ✓ PASSING (12)                             │
│  • Standard section headings                │
│  • Clean formatting                         │
│  • Appropriate font                         │
│  • Contact info in header                   │
│                                             │
│  ⚠ WARNINGS (2)                             │
│  • Multiple columns detected                │
│    → Fix: Use single column layout          │
│  • Low keyword match (45%)                  │
│    → Fix: Add more relevant keywords        │
│                                             │
│  ✗ CRITICAL (1)                             │
│  • Table detected in work section           │
│    → Fix: Remove table, use bullet points   │
│                                             │
│        [Apply Quick Fixes]                  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🎨 Visual Design Elements

### Buttons

**Primary Button (Call to Action):**
- Background: Deep Blue `#2563EB`
- Text: White
- Padding: 12px 24px
- Border Radius: 8px
- Hover: Slightly darker blue
- Shadow: Subtle

**Secondary Button:**
- Background: White
- Border: 1px solid gray
- Text: Dark gray
- Same sizing as primary

**Danger/Delete Button:**
- Background: Red `#EF4444`
- Text: White

### Cards & Sections

**Card Style:**
- Background: White
- Border: 1px solid `#E5E7EB`
- Border Radius: 12px
- Padding: 24px
- Shadow: Very subtle `0 1px 3px rgba(0,0,0,0.1)`

**Section Headers:**
- Font: Bold, 18px
- Color: `#1F2937`
- Bottom Border: Thin gray line
- Padding: 16px

### Form Inputs

**Text Input:**
- Border: 1px solid `#D1D5DB`
- Border Radius: 6px
- Padding: 10px 12px
- Focus: Blue border `#2563EB`
- Background: White

**Textarea:**
- Same as text input
- Min height: 100px
- Resizable

### Icons

**Use Icons For:**
- Section types (briefcase, graduation cap, tools)
- Success/warning/error states
- Navigation
- Actions (download, save, delete)

**Icon Style:**
- Outlined (not filled)
- Size: 20-24px
- Color: Match section or action

---

## 📊 ATS Optimization Visual Feedback

### Real-time Indicators

**Good (Green):**
```
✓ Using ATS-safe font
✓ Single column layout
✓ Standard section headings
```

**Warning (Yellow):**
```
⚠ Low keyword density
⚠ Date format may cause issues
```

**Critical (Red):**
```
✗ Images detected - remove immediately
✗ Table layout - will break ATS parsing
```

### Score Visualization

**Progress Ring:**
```
        85
    ████░░░░░
   Score: Good
```

**Color Coding:**
- 0-50: Red (Poor)
- 51-70: Orange (Needs Work)
- 71-85: Yellow (Good)
- 86-100: Green (Excellent)

---

## 📱 Mobile Design

### Stacked Layout

```
┌─────────────────┐
│     HEADER      │
├─────────────────┤
│                 │
│  FORM INPUTS    │
│  (Accordion)    │
│                 │
├─────────────────┤
│                 │
│  PREVIEW        │
│  (Collapsible)  │
│                 │
├─────────────────┤
│                 │
│  ATS SCORE      │
│                 │
└─────────────────┘
```

**Mobile Priorities:**
- Forms expand one at a time
- Preview is collapsible
- Sticky "Save" button at bottom
- Bigger touch targets (48px minimum)

---

## 🎯 User Experience Flow

### First-Time User:

1. **Landing** → See value immediately
2. **Click "Create Resume"** → No signup required
3. **Guided Tour** → "Start with contact info"
4. **Fill Section** → See live preview
5. **See ATS Score** → Understand optimization
6. **Fix Issues** → One-click improvements
7. **Download** → Get PDF instantly
8. **Prompt Save** → "Save for later? Create account"

### Returning User:

1. **Login** → See saved resumes
2. **Pick Resume** → Continue editing
3. **Make Changes** → Auto-save
4. **Download** → Export updated version

---

## 💡 Design Principles

1. **Clarity Over Cleverness**
   - Everything should be obvious
   - No hidden features
   - Clear labels, clear actions

2. **ATS First, Pretty Second**
   - Function beats form
   - Boring is good for resumes
   - Optimization visible everywhere

3. **Progressive Disclosure**
   - Don't overwhelm with options
   - Show advanced features when needed
   - Guide users step by step

4. **Instant Feedback**
   - Live preview updates
   - Real-time ATS scoring
   - Immediate validation

5. **Fast & Responsive**
   - No loading spinners
   - Everything feels instant
   - Smooth transitions

---

## 🎨 Sample Resume Template Design

### Template: "Professional"

**Layout:**
- Single column (ATS-safe)
- Contact at top
- Clear section divisions
- Bullet points for experiences
- Clean typography

**Spacing:**
- Margins: 0.75 inches all sides
- Line height: 1.15
- Section spacing: 12pt
- No wasted space

**Font Sizes:**
- Name: 20pt
- Section headers: 14pt, bold
- Body: 11pt
- Dates: 10pt, italic

**This is intentionally boring!**
It works with ATS, that's what matters.

---

## 🚀 Design Deliverables Needed

### Before You Code:

1. **Wireframes** (sketch or Figma)
   - Landing page
   - Editor screen
   - Mobile view

2. **Color Palette** (save hex codes)

3. **Font Choices** (Google Fonts)

4. **Icon Set** (Lucide, Heroicons, or similar)

5. **Resume Template** (Word doc first, to visualize)

### Want me to:
- Help you sketch specific screens?
- Refine any section above?
- Design the resume template layout?
- Plan the mobile experience?
- Something else?

**What part of the design do you want to work on first?**