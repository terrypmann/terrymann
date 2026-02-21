// ============================================================
// render.js — BUILDS THE PAGE FROM data.js
// You should never need to edit this file.
// All content changes go in data.js.
// ============================================================

(function () {
  'use strict';

  const d = SITE_DATA;
  const main = document.getElementById('site-main');

  // ── Helpers ─────────────────────────────────────────────

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else node.setAttribute(k, v);
      });
    }
    children.forEach(child => {
      if (child == null) return;
      if (typeof child === 'string') node.appendChild(document.createTextNode(child));
      else node.appendChild(child);
    });
    return node;
  }

  function section(id, titleText, bgClass) {
    const sec = el('section', { id });
    if (bgClass) sec.classList.add(bgClass);
    const inner = el('div', { class: 'section-inner' });
    if (titleText) {
      inner.appendChild(el('h2', { class: 'section-title' }, titleText));
    }
    sec.appendChild(inner);
    return { sec, inner };
  }

  function backToTop() {
    return el('a', { href: '#top', class: 'back-to-top' }, '🔝 Back to top');
  }

  // ── Video facade (click-to-play) ────────────────────────

  function videoFacade(youtubeId, label) {
    const isPlaceholder = !youtubeId || youtubeId.startsWith('YOUTUBE_ID');
    const wrapper = el('div', { class: 'video-wrapper' });

    if (isPlaceholder) {
      // Show a muted placeholder so the layout looks right
      const ph = el('div', { class: 'video-placeholder' });
      ph.innerHTML = '<span>Video coming soon</span>';
      wrapper.appendChild(ph);
      return wrapper;
    }

    const facade = el('div', {
      class: 'video-facade',
      'data-youtube-id': youtubeId,
      role: 'button',
      tabindex: '0',
      'aria-label': label || 'Play video'
    });

    const img = el('img', {
      src: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
      alt: label || 'Video thumbnail'
    });
    const btn = el('div', { class: 'play-btn' });

    facade.appendChild(img);
    facade.appendChild(btn);
    wrapper.appendChild(facade);
    return wrapper;
  }

  // ── Work item (shared by Ads, TV, Orchestral, Memes) ───

  function workItem(item, index) {
    const div = el('div', { class: 'work-item' });

    // Header: number + title
    const header = el('div', { class: 'work-item-header' });
    header.appendChild(el('span', { class: 'work-item-number' }, String(index + 1).padStart(2, '0')));
    const titleEl = el('h3', { class: 'work-item-title' });
    if (item.comingSoon) {
      titleEl.innerHTML = `${item.title} <em style="font-weight:400;font-size:0.9em;">(coming soon)</em>`;
    } else {
      titleEl.textContent = item.title;
    }
    header.appendChild(titleEl);
    div.appendChild(header);

    // Description
    if (item.desc) {
      div.appendChild(el('p', { class: 'work-item-desc' }, item.desc));
    }

    // Extended credits (orchestral)
    if (item.credits) {
      div.appendChild(el('p', { class: 'work-item-credits', html: item.credits }));
    }

    // Credit line
    if (item.credit) {
      div.appendChild(el('p', { class: 'work-credit', html: item.credit }));
    }

    // Visual: video, link-image, or still image
    if (item.youtubeId) {
      div.appendChild(videoFacade(item.youtubeId, item.title));
    } else if (item.type === 'link-image') {
      const link = el('a', {
        href: item.href,
        target: '_blank',
        rel: 'noopener',
        class: 'work-item-link-image'
      });
      link.appendChild(el('img', { src: item.image, alt: item.title }));
      div.appendChild(link);
    } else if (item.type === 'image') {
      div.appendChild(el('img', { class: 'work-item-image', src: item.image, alt: item.title }));
    }

    return div;
  }

  // ══════════════════════════════════════════════════════════
  // SECTION 1: BIO & REEL
  // ══════════════════════════════════════════════════════════
  (function renderBio() {
    const { sec, inner } = section('bioandreel', null);
    sec.classList.add('bio-section');

    const layout = el('div', { class: 'bio-layout' });

    // Photo
    layout.appendChild(el('img', {
      class: 'bio-photo',
      src: d.bio.photo,
      alt: d.bio.photoAlt
    }));

    // Text
    const textDiv = el('div', { class: 'bio-text' });
    textDiv.appendChild(el('h1', {}, 'Terry Mann'));
    d.bio.paragraphs.forEach(p => {
      textDiv.appendChild(el('p', { html: p }));
    });
    layout.appendChild(textDiv);
    inner.appendChild(layout);

    // Reel
    if (d.reel && d.reel.youtubeId) {
      const reelDiv = el('div', { class: 'reel-embed' });
      reelDiv.appendChild(videoFacade(d.reel.youtubeId, d.reel.label));
      inner.appendChild(reelDiv);
    }

    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 2: ADS
  // ══════════════════════════════════════════════════════════
  (function renderAds() {
    const { sec, inner } = section('ads', 'Music for Ads');
    const grid = el('div', { class: 'work-grid' });
    d.ads.forEach((item, i) => grid.appendChild(workItem(item, i)));
    inner.appendChild(grid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 3: TV & FILM
  // ══════════════════════════════════════════════════════════
  (function renderTV() {
    const { sec, inner } = section('tv', 'Music for TV & Film');
    const grid = el('div', { class: 'work-grid' });
    d.tv.forEach((item, i) => grid.appendChild(workItem(item, i)));
    inner.appendChild(grid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 4: ORCHESTRAL
  // ══════════════════════════════════════════════════════════
  (function renderOrchestral() {
    const { sec, inner } = section('orchestral', 'Orchestral Compositions');
    const grid = el('div', { class: 'work-grid' });
    d.orchestral.forEach((item, i) => grid.appendChild(workItem(item, i)));
    inner.appendChild(grid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 5: RELEASES
  // ══════════════════════════════════════════════════════════
  (function renderReleases() {
    const { sec, inner } = section('releases', 'Personal Releases');
    const grid = el('div', { class: 'releases-grid' });

    d.releases.forEach(item => {
      const div = el('div', { class: 'release-item' });

      const titleEl = el('p', { class: 'release-title' });
      titleEl.innerHTML = `${item.title} <span style="font-weight:400">(${item.year})</span>`;
      div.appendChild(titleEl);

      const meta = el('p', { class: 'release-meta' });
      meta.innerHTML = item.meta + (item.guests ? `<br>${item.guests}` : '');
      div.appendChild(meta);

      if (item.embed) {
        const embedDiv = el('div', { class: 'release-embed', html: item.embed });
        div.appendChild(embedDiv);
      }

      grid.appendChild(div);
    });

    inner.appendChild(grid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 6: LIBRARIES
  // ══════════════════════════════════════════════════════════
  (function renderLibraries() {
    const { sec, inner } = section('libraries', 'Libraries');
    const grid = el('div', { class: 'libraries-grid' });

    d.libraries.forEach(item => {
      const div = el('div', { class: 'library-item' });
      div.appendChild(el('h3', {}, item.heading));
      div.appendChild(el('p', {}, item.desc));
      div.appendChild(el('p', { html: `<a href="mailto:${d.contact.email}">Contact ${d.contact.email}</a> for further details.` }));
      if (item.embed) {
        div.appendChild(el('div', { class: 'library-embed', html: item.embed }));
      }
      grid.appendChild(div);
    });

    inner.appendChild(grid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 7: MEMES
  // ══════════════════════════════════════════════════════════
  (function renderMemes() {
    const { sec, inner } = section('memes', 'Memes');

    const intro = el('p', { class: 'section-intro' });
    intro.innerHTML = `If you've known me a while, you know that I love to make memes, parody videos, and other silly things in my spare time. No idea is too niche or too time consuming if I want to see it come to life. You can find most of them <a href="https://twisterandjumanji.wordpress.com/" target="_blank" rel="noopener">here</a>, but below are a few that involved some form of music production.`;
    inner.appendChild(intro);

    const grid = el('div', { class: 'work-grid' });
    d.memes.forEach((item, i) => grid.appendChild(workItem(item, i)));
    inner.appendChild(grid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 8: STUDIO
  // ══════════════════════════════════════════════════════════
  (function renderStudio() {
    const { sec, inner } = section('studio', 'Home Studio');
    const s = d.studio;

    inner.appendChild(el('img', {
      class: 'studio-photo',
      src: s.photo,
      alt: s.photoAlt
    }));

    const specsGrid = el('div', { class: 'studio-specs' });
    s.specs.forEach(spec => {
      const cat = el('div', { class: 'spec-category' });
      cat.appendChild(el('h3', {}, spec.heading));
      cat.appendChild(el('p', {}, spec.text));
      specsGrid.appendChild(cat);
    });

    inner.appendChild(specsGrid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 9: TESTIMONIALS
  // ══════════════════════════════════════════════════════════
  (function renderTestimonials() {
    const { sec, inner } = section('testimonials', 'Testimonials');
    const grid = el('div', { class: 'testimonials-grid' });

    d.testimonials.forEach(item => {
      const card = el('div', { class: 'testimonial-card' });
      card.appendChild(el('p', { class: 'testimonial-body' }, `"${item.quote}"`));

      const footer = el('div', { class: 'testimonial-footer' });
      footer.appendChild(el('img', { class: 'testimonial-photo', src: item.photo, alt: item.name }));

      const attr = el('div', { class: 'testimonial-attribution' });
      attr.appendChild(el('strong', {}, item.name));
      attr.appendChild(el('span', {}, item.title));
      footer.appendChild(attr);

      card.appendChild(footer);
      grid.appendChild(card);
    });

    inner.appendChild(grid);
    inner.appendChild(backToTop());
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // SECTION 10: CONTACT
  // ══════════════════════════════════════════════════════════
  (function renderContact() {
    const { sec, inner } = section('contact', null);
    sec.classList.add('contact-section');

    const contactInner = el('div', { class: 'contact-inner' });
    contactInner.appendChild(el('h2', { class: 'section-title contact-title' }, 'Get in Touch'));
    contactInner.appendChild(el('p', {}, 'For all project enquiries:'));
    contactInner.appendChild(el('a', {
      href: `mailto:${d.contact.email}`,
      class: 'contact-email'
    }, d.contact.email));

    const socialDiv = el('div', { class: 'contact-social' });
    d.contact.social.forEach(s => {
      socialDiv.appendChild(el('a', { href: s.href, target: '_blank', rel: 'noopener' }, s.label));
    });
    contactInner.appendChild(socialDiv);
    contactInner.appendChild(backToTop());

    inner.appendChild(contactInner);
    main.appendChild(sec);
  })();


  // ══════════════════════════════════════════════════════════
  // FOOTER
  // ══════════════════════════════════════════════════════════
  (function renderFooter() {
    const footer = document.getElementById('site-footer');
    const inner = el('div', { class: 'footer-inner' });

    // Footer nav
    const navLinks = [
      ['#bioandreel', 'Bio & Reel'], ['#ads', 'Ads'], ['#tv', 'TV & Film'],
      ['#orchestral', 'Orchestral'], ['#releases', 'Releases'], ['#libraries', 'Libraries'],
      ['#memes', 'Memes'], ['#studio', 'Studio'], ['#testimonials', 'Testimonials'],
      ['#contact', 'Contact']
    ];
    const ul = el('ul', { class: 'footer-nav' });
    navLinks.forEach(([href, label]) => {
      const li = el('li');
      li.appendChild(el('a', { href }, label));
      ul.appendChild(li);
    });
    inner.appendChild(ul);

    inner.appendChild(el('p', { class: 'footer-acknowledgement' }, d.footer.acknowledgement));
    inner.appendChild(el('p', { class: 'footer-acknowledgement' }, d.footer.charitiesNote));

    inner.appendChild(el('div', { class: 'footer-charities' },
      el('img', { src: d.footer.charitiesImage, alt: d.footer.charitiesImageAlt })
    ));

    const copy = el('p', { class: 'footer-copy' });
    copy.innerHTML = `&copy; ${new Date().getFullYear()} Terry Mann. All rights reserved.`;
    inner.appendChild(copy);

    footer.appendChild(inner);
  })();


  // ══════════════════════════════════════════════════════════
  // INTERACTIONS
  // ══════════════════════════════════════════════════════════

  // Nav shadow on scroll
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Mobile hamburger
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Video facade: click-to-play
  // Uses event delegation so it works for dynamically rendered facades
  document.addEventListener('click', handleVideoClick);
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') handleVideoClick(e);
  });

  function handleVideoClick(e) {
    const facade = e.target.closest('.video-facade');
    if (!facade) return;
    if (e.type === 'keydown') e.preventDefault();
    const id = facade.dataset.youtubeId;
    if (!id || id.startsWith('YOUTUBE_ID')) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('title', facade.getAttribute('aria-label') || 'YouTube video');
    facade.parentNode.replaceChild(iframe, facade);
  }

})();
