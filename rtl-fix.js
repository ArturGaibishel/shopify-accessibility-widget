/*!
 * RTL Fix + Hebrew Font + Payment Icons
 * תחליף חינמי ל-Sense RTL
 * Luna Soul Store
 */
(function (window, document) {
  'use strict';

  // ============================================================
  // CSS — RTL + פונט עברי
  // ============================================================
  var STYLES = [

    /* Hebrew font — Heebo from Google Fonts */
    '@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap");',

    /* RTL base */
    'html { direction: rtl !important; }',
    'body { direction: rtl !important; font-family: "Heebo", Arial, sans-serif !important; }',

    /* Text alignment */
    'p, h1, h2, h3, h4, h5, h6, li, td, th, label, span, div { text-align: right; }',

    /* Inputs & forms */
    'input, textarea, select {',
      'direction: rtl !important;',
      'text-align: right !important;',
      'font-family: "Heebo", Arial, sans-serif !important;',
    '}',

    /* Fix Shopify breadcrumbs */
    '.breadcrumb, .breadcrumbs { direction: rtl; }',

    /* Fix Shopify cart */
    '.cart__item, .cart-item { direction: rtl; }',

    /* Fix flex rows that assume LTR */
    '.header__inline-menu, .list-menu--inline { flex-direction: row-reverse; }',

    /* Fix icon+text pairs */
    '.icon-with-text { flex-direction: row-reverse; }',

    /* Pagination */
    '.pagination { direction: rtl; }',

    /* ── Payment icons container ──────────────────────────── */
    '#luna-payment-icons {',
      'display: flex;',
      'align-items: center;',
      'justify-content: center;',
      'flex-wrap: wrap;',
      'gap: 8px;',
      'padding: 16px 0 8px;',
      'direction: ltr;',
    '}',

    '.luna-pay-icon {',
      'display: inline-flex;',
      'align-items: center;',
      'justify-content: center;',
      'border-radius: 6px;',
      'width: 52px;',
      'height: 32px;',
      'overflow: hidden;',
      'box-shadow: 0 1px 4px rgba(0,0,0,0.15);',
    '}',

    '.luna-pay-icon svg { width: 100%; height: 100%; }',

  ].join('');

  // ============================================================
  // PAYMENT ICONS SVG
  // ============================================================
  var PAYMENT_ICONS = [

    /* Visa */
    '<span class="luna-pay-icon" title="Visa">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#1A1F71"/>',
        '<text x="26" y="22" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1">VISA</text>',
      '</svg>',
    '</span>',

    /* Mastercard */
    '<span class="luna-pay-icon" title="Mastercard">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#252525"/>',
        '<circle cx="20" cy="16" r="9" fill="#EB001B"/>',
        '<circle cx="32" cy="16" r="9" fill="#F79E1B"/>',
        '<path d="M26 8.8a9 9 0 0 1 0 14.4A9 9 0 0 1 26 8.8z" fill="#FF5F00"/>',
      '</svg>',
    '</span>',

    /* Apple Pay */
    '<span class="luna-pay-icon" title="Apple Pay">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#000"/>',
        '<text x="26" y="13" font-family="Arial,sans-serif" font-size="7" fill="white" text-anchor="middle"></text>',
        '<path d="M19.5 9.5c.6-.7 1-1.6.9-2.5-.9.1-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 0 2-.5 2.7-1.3z" fill="white"/>',
        '<path d="M20.4 11c-1.5-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.6 0-2.3 1.8-3.3 1.9-3.4-.9-1.4-2.4-1.7-2.4-1.7z" fill="white"/>',
        '<text x="34" y="20" font-family="Arial,sans-serif" font-size="8" font-weight="600" fill="white" text-anchor="middle">Pay</text>',
      '</svg>',
    '</span>',

    /* Google Pay */
    '<span class="luna-pay-icon" title="Google Pay">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="white" stroke="#e0e0e0" stroke-width="1"/>',
        '<text x="10" y="21" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#4285F4">G</text>',
        '<text x="18" y="21" font-family="Arial,sans-serif" font-size="9" font-weight="500" fill="#5F6368">Pay</text>',
      '</svg>',
    '</span>',

    /* Bit */
    '<span class="luna-pay-icon" title="Bit">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#0E4C96"/>',
        '<text x="26" y="21" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="white" text-anchor="middle">bit</text>',
      '</svg>',
    '</span>',

  ].join('');

  // ============================================================
  // INJECT PAYMENT ICONS INTO FOOTER
  // ============================================================
  function injectPaymentIcons() {
    var selectors = [
      '.footer__content',
      '.footer',
      'footer',
      '.site-footer',
      '#shopify-section-footer',
      '.footer-block',
    ];

    var footer = null;
    for (var i = 0; i < selectors.length; i++) {
      footer = document.querySelector(selectors[i]);
      if (footer) break;
    }

    if (!footer) return;

    var container = document.createElement('div');
    container.id = 'luna-payment-icons';
    container.setAttribute('aria-label', 'אמצעי תשלום מקובלים');
    container.innerHTML = PAYMENT_ICONS;
    footer.appendChild(container);
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    /* Inject CSS */
    var style = document.createElement('style');
    style.id = 'luna-rtl-css';
    style.textContent = STYLES;
    document.head.appendChild(style);

    /* Inject payment icons */
    injectPaymentIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}(window, document));
