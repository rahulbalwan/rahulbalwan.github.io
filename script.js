(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const research = {
    cohort: {
      title: 'Study design & data',
      text: 'Worked with large-scale longitudinal epidemiological and epigenetic data from the ALSPAC/ARIES cohort, with offspring DNA methylation measured across multiple life stages.'
    },
    model: {
      title: 'Regression modelling',
      text: 'Prepared exposures and covariates, fitted regression models and adjusted for potential confounding factors using epidemiological reasoning.'
    },
    multiple: {
      title: 'Multiple-testing considerations',
      text: 'Applied multiple-testing considerations appropriate to high-dimensional epigenome-wide analyses and interpreted results within that statistical context.'
    },
    repro: {
      title: 'Reproducible analysis',
      text: 'Used R for scripted statistical analysis, diagnostic outputs and scientific summaries designed to support transparent and reproducible interpretation.'
    }
  };

  const detail = document.getElementById('research-detail');
  document.querySelectorAll('.research-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.research-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const item = research[btn.dataset.key];
      if (item && detail) {
        detail.innerHTML = `<h4>${item.title}</h4><p>${item.text}</p>`;
      }
    });
  });

  document.querySelectorAll('.project-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.project-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.project-pane').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const pane = document.getElementById(`pane-${tab.dataset.project}`);
      if (pane) pane.classList.add('active');
    });
  });

  const filters = document.querySelectorAll('.method-filter');
  const cards = document.querySelectorAll('.method-card');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        card.hidden = !(f === 'all' || card.dataset.cat === f);
      });
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
