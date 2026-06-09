# הוראות התקנה — שופיפיי

מדריך שלב-אחר-שלב להוספת הפלאגין לאתר שופיפיי שלך.

---

## שלב 1 — העלה את הקובץ לשופיפיי

1. כנס ל-**Shopify Admin** שלך
2. לך ל: **Online Store → Themes**
3. ליד הת'ים הפעיל, לחץ על **⋯ → Edit code**
4. בצד שמאל, תחת **Assets**, לחץ על **Add a new asset**
5. בחר **Create a blank file**
6. שם הקובץ: `accessibility-widget.js`
7. לחץ **Add asset**
8. העתק-הדבק את כל תוכן הקובץ `accessibility-widget.js` לתוך העורך
9. לחץ **Save**

---

## שלב 2 — הוסף את הקובץ לכל עמודי האתר

1. בצד שמאל, תחת **Layout**, לחץ על **theme.liquid**
2. מצא את השורה `</body>` (בסוף הקובץ)
3. הוסף את השורות הבאות **מעל** `</body>`:

```liquid
{%- comment -%} Accessibility Widget IS 5568 {%- endcomment -%}
<script src="{{ 'accessibility-widget.js' | asset_url }}" defer></script>
```

לדוגמה, הקובץ יראה כך בסוף:

```liquid
    ...
    {{ content_for_layout }}

    {%- comment -%} Accessibility Widget IS 5568 {%- endcomment -%}
    <script src="{{ 'accessibility-widget.js' | asset_url }}" defer></script>
  </body>
</html>
```

4. לחץ **Save**

---

## שלב 3 — צור עמוד הצהרת נגישות

1. ב-Shopify Admin, לך ל: **Online Store → Pages**
2. לחץ **Add page**
3. כותרת: `הצהרת נגישות`
4. ב-Handle (כתובת URL), שנה ל: `hagashat-negishut`
5. העתק את תוכן `accessibility-statement-template.html` למקטע ה-HTML
6. מלא את הפרטים הייחודיים לאתר שלך (שם, כתובת, פרטי קשר)
7. לחץ **Save**

---

## שלב 4 — עדכן את כתובת הצהרת הנגישות בפלאגין

בקובץ `accessibility-widget.js`, שנה את:

```javascript
statementUrl: '/pages/hagashat-negishut',
```

לכתובת הנכונה של עמוד הנגישות שלך (אם שינית את ה-Handle).

---

## שלב 5 — וידוא

1. פתח את האתר בדפדפן
2. ודא שמופיע כפתור עגול כחול בפינה השמאלית התחתונה ♿
3. לחץ עליו — אמור להיפתח תפריט הנגישות
4. בדוק כמה תכונות (גודל טקסט, ניגודיות) — ודא שהן עובדות
5. רענן עמוד — ודא שההגדרות נשמרות

---

## שינוי מיקום הכפתור

ברירת המחדל: פינה שמאלית תחתונה.
לשינוי לפינה ימנית:

בקובץ `accessibility-widget.js`, שנה:
```javascript
position: 'bottom-left',
```
ל:
```javascript
position: 'bottom-right',
```

---

## בעיות נפוצות

| בעיה | פתרון |
|------|--------|
| הכפתור לא מופיע | ודא שהוספת את שורת ה-`<script>` ב-`theme.liquid` לפני `</body>` |
| ניגודיות גבוהה משבשת את ממשק השופיפיי | זה תקין — מצב ניגודיות גבוהה מיועד לנגישות מקסימלית ומשנה את כל הצבעים |
| "דלג לתוכן" לא עובד | הוסף ידנית `id="main-content"` לאלמנט `<main>` ב-`theme.liquid` |
| הגדרות לא נשמרות | ודא שדפדפן המשתמש מאפשר localStorage (לא במצב גלישה פרטית) |

---

## בדיקת נגישות נוספת (מומלץ)

אחרי ההתקנה, מומלץ לבדוק את האתר עם:

- **WAVE** — [wave.webaim.org](https://wave.webaim.org) — זיהוי בעיות נגישות
- **axe DevTools** — תוסף לכרום לבדיקה מפורטת
- **Lighthouse** — כלוי בדפדפן כרום (F12 → Lighthouse → Accessibility)
- **Screen reader** — NVDA (חינמי) לבדיקה עם קורא מסך
