(function () {
  "use strict";

  var STORAGE_KEY = "weaver-theme";
  var link = document.getElementById("weaver-theme");
  var select = document.getElementById("theme-select");
  var basePath = window.__weaverThemesPath || "/themes/";

  function applyTheme(theme) {
    if (theme) {
      link.setAttribute("href", basePath + theme + ".css");
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      link.removeAttribute("href");
      document.documentElement.removeAttribute("data-theme");
    }
  }

  // Load saved theme or fall back to data-theme from HTML
  var saved = localStorage.getItem(STORAGE_KEY);
  var initial = saved !== null ? saved : (document.documentElement.getAttribute("data-theme") || "");
  applyTheme(initial);

  if (select) {
    select.value = initial;

    select.addEventListener("change", function () {
      var theme = select.value;
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);

      // Announce change to screen readers
      var msg = theme ? "Theme changed to " + theme : "Theme removed, showing unstyled HTML";
      var announcement = document.createElement("div");
      announcement.setAttribute("role", "status");
      announcement.setAttribute("aria-live", "polite");
      announcement.className = "sr-only";
      announcement.textContent = msg;
      document.body.appendChild(announcement);
      setTimeout(function () { document.body.removeChild(announcement); }, 1000);
    });
  }
})();
