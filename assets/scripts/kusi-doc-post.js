/*!
 * simply v0.4.0
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */ !(function n(o, i, c) {
  function s(t, e) {
    if (!i[t]) {
      if (!o[t]) {
        var r = "function" == typeof require && require;
        if (!e && r) return r(t, !0);
        if (l) return l(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (r = i[t] = { exports: {} }),
        o[t][0].call(
          r.exports,
          function (e) {
            return s(o[t][1][e] || e);
          },
          r,
          r.exports,
          n,
          o,
          i,
          c
        );
    }
    return i[t].exports;
  }
  for (
    var l = "function" == typeof require && require, e = 0;
    e < c.length;
    e++
  )
    s(c[e]);
  return s;
})(
  {
    1: [
      function (e, t, r) {
        "use strict";
        document.addEventListener("DOMContentLoaded", function () {
          var i,
            e,
            t = document.querySelector(".js-kusi-doc");
          !t ||
            ((t = t.querySelectorAll(["h2", "h3"].join(","))).length &&
              ((i = document.querySelector(".js-table-content")),
              (e = document.querySelector(".js-sidebar-right")) &&
                e.classList.add("lg:block"),
              t.forEach(function (e) {
                e.classList = "hover-title";
                var t,
                  r,
                  n,
                  o = document.createElement("a");
                (o.href = "#".concat(e.getAttribute("id"))),
                  (r = o.cloneNode(!0)),
                  (n = e),
                  i &&
                    ((r.textContent = n.textContent),
                    (t = document.createElement("li")),
                    n.closest("h3")
                      ? (r.classList =
                          "py-2 px-3 docstoc block hover:text-primary")
                      : (r.classList = "py-2 px-3 block hover:text-primary"),
                    t.appendChild(r),
                    i.appendChild(t)),
                  (n = e),
                  (r = o).setAttribute("aria-hidden", "true"),
                  (r.innerHTML =
                    '<svg class="icon is-stroke" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>'),
                  (r.classList =
                    "anchor px-3 inline-block invisible opacity-0 -ml-12 text-gray-500"),
                  n.insertBefore(r, n.childNodes[0]);
              })));
        });
      },
      {},
    ],
  },
  {},
  [1]
);
