(() => {
  const phoneHref = "tel:9188846615";
  const phoneDisplay = "918-884-6615";
  function normalizePath(pathname) {
    let normalized = pathname || "/";
    if (normalized === "/index.html") return "/";
    normalized = normalized.replace(/\.html$/, "");
    normalized = normalized.replace(/\/+$/, "");
    return normalized || "/";
  }

  const currentPath = normalizePath(window.location.pathname);

  function pathEquals(pathA, pathB) {
    return normalizePath(pathA) === normalizePath(pathB);
  }

  const navConfig = [
    { href: "/", label: "Home", match: ["/"] },
    {
      href: "/services",
      label: "Services",
      match: [
        "/services",
        "/remodels",
        "/structural",
        "/repairs",
        "/drywall-repair",
        "/maintenance",
        "/renovation-consultation",
        "/projects/tulsa-full-home-remodel",
      ],
      children: [
        { href: "/remodels", label: "Remodels & Additions" },
        { href: "/structural", label: "Structural & Water Management" },
        { href: "/repairs", label: "Skilled Repairs" },
        { href: "/drywall-repair", label: "Drywall Repair" },
        { href: "/maintenance", label: "Home Maintenance Plan" },
        { href: "/renovation-consultation", label: "Renovation Consultation" },
      ],
    },
    { href: "/process", label: "Process", match: ["/process"] },
    {
      href: "/about",
      label: "About",
      match: ["/about", "/reviews", "/service-area"],
      children: [
        { href: "/about", label: "Common Philosophy" },
        { href: "/reviews", label: "Reviews" },
        { href: "/service-area", label: "Service Area" },
      ],
    },
    { href: "/schedule", label: "Contact", match: ["/schedule"] },
  ];

  function isActive(item) {
    return (item.match || [item.href]).some((matchPath) => pathEquals(matchPath, currentPath));
  }

  function renderMainNavigation() {
    return navConfig
      .map((item) => {
        const activeClass = isActive(item) ? " class=\"active\" aria-current=\"page\"" : "";
        if (!item.children) {
          return `<li><a href="${item.href}"${activeClass}>${item.label}</a></li>`;
        }

        const dropdownLinks = item.children
          .map((child) => {
            const childActive = pathEquals(child.href, currentPath) ? " class=\"active\" aria-current=\"page\"" : "";
            return `<a href="${child.href}"${childActive}>${child.label}</a>`;
          })
          .join("");

        return `
          <li class="nav-item">
            <a href="${item.href}"${activeClass}>${item.label}</a>
            <div class="dropdown-menu" role="menu" aria-label="${item.label} submenu">
              ${dropdownLinks}
            </div>
          </li>
        `;
      })
      .join("");
  }

  function renderMobileNavigation() {
    const groups = navConfig
      .map((item) => {
        const activeClass = isActive(item) ? " class=\"active\" aria-current=\"page\"" : "";
        const subItems = (item.children || [])
          .map((child) => {
            const childActive = pathEquals(child.href, currentPath) ? " class=\"active\" aria-current=\"page\"" : "";
            return `<a href="${child.href}"${childActive}>${child.label}</a>`;
          })
          .join("");

        return `
          <div class="nav-group">
            <a href="${item.href}"${activeClass}>${item.label === "Process" ? "Our Process" : item.label}</a>
            ${subItems ? `<div class="sub-items">${subItems}</div>` : ""}
          </div>
        `;
      })
      .join("");

    return `
      <div class="mobile-nav-drawer" id="mobileDrawer" aria-label="Mobile navigation">
        <nav aria-label="Mobile main navigation">
          ${groups}
          <a href="${phoneHref}" class="btn btn-primary mobile-nav-cta">Call or Text for a Quote</a>
        </nav>
      </div>
    `;
  }

  function renderAppHeader() {
    return `
      ${renderMobileNavigation()}
      <header class="site-header">
        <div class="container header-inner">
          <div class="logo-group" aria-label="Level and Anvil header branding and contact">
            <a href="/" class="logo-home-link" aria-label="Level and Anvil home">
              <img src="/images/logo.png" alt="Level & Anvil Logo" class="logo-img" loading="eager" fetchpriority="high" decoding="async" width="1536" height="1024">
              <div class="logo-group-text">
                <div class="logo-text">LEVEL <span>&</span> ANVIL</div>
              </div>
            </a>
            <a class="brand-phone" href="${phoneHref}" aria-label="Text a human now at ${phoneDisplay}">
              <span class="brand-phone-label">Text a human now:</span>
              <span class="brand-phone-number">${phoneDisplay}</span>
            </a>
          </div>
          <nav class="main-nav" aria-label="Main navigation">
            <ul>
              ${renderMainNavigation()}
              <li><a href="${phoneHref}" class="btn btn-primary nav-cta-btn">Call or Text for a Quote</a></li>
            </ul>
          </nav>
          <button class="nav-toggle" id="navToggle" type="button" aria-label="Toggle navigation menu" aria-controls="mobileDrawer" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    `;
  }

  function renderBreadcrumbs() {
    const container = document.querySelector("[data-breadcrumbs]");
    if (!container) return;
    if (currentPath === "/") {
      container.innerHTML = "";
      return;
    }

    const pathParts = currentPath.split("/").filter(Boolean);
    const crumbs = [{ href: "/", label: "Home" }];
    let aggregatePath = "";

    pathParts.forEach((part) => {
      aggregatePath += `/${part}`;
      const matchingTopNav = navConfig.find((item) => item.href === aggregatePath);
      const matchingChildNav = navConfig
        .flatMap((item) => item.children || [])
        .find((child) => child.href === aggregatePath);
      const labelSource = matchingTopNav || matchingChildNav;
      const label = labelSource ? labelSource.label : part.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
      crumbs.push({ href: aggregatePath, label });
    });

    container.innerHTML = `
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          ${crumbs
            .map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              if (isLast) return `<li><span aria-current="page">${crumb.label}</span></li>`;
              return `<li><a href="${crumb.href}">${crumb.label}</a></li>`;
            })
            .join("")}
        </ol>
      </nav>
    `;
  }

  function renderAppFooter() {
    return `
      <div class="mobile-conversion-bar" role="complementary" aria-label="Mobile contact shortcut">
        <a href="/schedule" class="btn-sticky">Contact Us</a>
      </div>
      <footer class="site-footer">
        <div class="container">
          <div class="footer-cta-form" id="leadForm">
            <span class="eyebrow">Contact</span>
            <h3>Need Help With a Repair or Project?</h3>
            <p>Call or text for a quote, or use our contact page to share project details.</p>
            <div class="footer-cta-actions">
              <a href="${phoneHref}" class="btn btn-primary">Call or Text for a Quote</a>
              <a href="/schedule" class="btn btn-outline">Contact Us</a>
            </div>
          </div>
          <div class="footer-map">
            <div class="footer-col">
              <img src="/images/logo.png" alt="Level & Anvil Logo" class="logo-img-footer" loading="lazy" decoding="async" width="1536" height="1024">
              <p class="footer-description">Level & Anvil provides practical residential solutions across Tulsa and Green Country.</p>
            </div>
            <div class="footer-col">
              <h4>Services</h4>
              <ul class="footer-links">
                <li><a href="/remodels">Remodels & Additions</a></li>
                <li><a href="/structural">Structural & Water</a></li>
                <li><a href="/repairs">Skilled Repairs</a></li>
                <li><a href="/drywall-repair">Drywall Repair</a></li>
                <li><a href="/maintenance">Home Maintenance Plan</a></li>
                <li><a href="/renovation-consultation">Renovation Consultation</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul class="footer-links">
                <li><a href="/process">Our Process</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/service-area">Service Area</a></li>
                <li><a href="/schedule">Contact Us</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Credentials</h4>
              <ul class="footer-links">
                <li>Licensed and Insured</li>
                <li>Tulsa General Contractor License #CON-013639-2026</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p style="margin-bottom: 1.5rem; color: var(--color-primary); font-weight: 600;">Residential repair, drywall, restoration, and project help across Tulsa and Green Country.</p>
            &copy; 2026 Level & Anvil Solutions. Practical repair, remodeling, and problem-solving help for Tulsa-area homeowners.
          </div>
        </div>
      </footer>
    `;
  }

  function initializeNavigationA11y() {
    const navToggle = document.getElementById("navToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    if (!navToggle || !mobileDrawer) return;

    function closeDrawer() {
      mobileDrawer.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }

    navToggle.addEventListener("click", () => {
      const nextOpenState = !mobileDrawer.classList.contains("active");
      mobileDrawer.classList.toggle("active");
      navToggle.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", String(nextOpenState));
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    });
  }

  function renderPageShell() {
    const headerMount = document.getElementById("app-header");
    const footerMount = document.getElementById("app-footer");
    if (!headerMount || !footerMount) return;
    headerMount.innerHTML = renderAppHeader();
    footerMount.innerHTML = renderAppFooter();
    renderBreadcrumbs();
    initializeNavigationA11y();
  }

  document.addEventListener("DOMContentLoaded", renderPageShell);
})();
