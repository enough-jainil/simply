/*!
 * simply v0.4.0
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */ !(function n(o, a, i) {
  function s(t, e) {
    if (!a[t]) {
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
      (r = a[t] = { exports: {} }),
        o[t][0].call(
          r.exports,
          function (e) {
            return s(o[t][1][e] || e);
          },
          r,
          r.exports,
          n,
          o,
          a,
          i
        );
    }
    return a[t].exports;
  }
  for (
    var l = "function" == typeof require && require, e = 0;
    e < i.length;
    e++
  )
    s(i[e]);
  return s;
})(
  {
    1: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    2: [
      function (e, t, r) {
        (t.exports = function (e) {
          if (Array.isArray(e)) return e;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    3: [
      function (e, t, r) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    4: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != r) {
            var n,
              o,
              a = [],
              i = !0,
              s = !1;
            try {
              for (
                r = r.call(e);
                !(i = (n = r.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                i = !0
              );
            } catch (e) {
              (s = !0), (o = e);
            } finally {
              try {
                i || null == r.return || r.return();
              } finally {
                if (s) throw o;
              }
            }
            return a;
          }
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    5: [
      function (e, t, r) {
        (t.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    6: [
      function (e, t, r) {
        var n = e("./arrayWithHoles.js"),
          o = e("./iterableToArrayLimit.js"),
          a = e("./unsupportedIterableToArray.js"),
          i = e("./nonIterableRest.js");
        (t.exports = function (e, t) {
          return n(e) || o(e, t) || a(e, t) || i();
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {
        "./arrayWithHoles.js": 2,
        "./iterableToArrayLimit.js": 4,
        "./nonIterableRest.js": 5,
        "./unsupportedIterableToArray.js": 8,
      },
    ],
    7: [
      function (e, t, r) {
        function n(e) {
          return (
            (t.exports = n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            n(e)
          );
        }
        (t.exports = n),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    8: [
      function (e, t, r) {
        var n = e("./arrayLikeToArray.js");
        (t.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" ===
              (r = "Object" === r && e.constructor ? e.constructor.name : r) ||
              "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0;
          }
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      { "./arrayLikeToArray.js": 1 },
    ],
    9: [
      function (e, t, r) {
        var n = "undefined" != typeof window ? window : {},
          o = function (n, f, a) {
            "use strict";
            var p,
              m,
              e,
              O = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                fastLoadedClass: "ls-is-cached",
                iframeLoadMode: 0,
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: 0.8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125,
              };
            for (e in ((m = n.lazySizesConfig || n.lazysizesConfig || {}), O))
              e in m || (m[e] = O[e]);
            if (!f || !f.getElementsByClassName)
              return { init: function () {}, cfg: m, noSupport: !0 };
            function c(e, t) {
              s(e, t) ||
                e.setAttribute("class", (e[h]("class") || "").trim() + " " + t);
            }
            function d(e, t) {
              (t = s(e, t)) &&
                e.setAttribute("class", (e[h]("class") || "").replace(t, " "));
            }
            function W(e, t) {
              var r;
              !H && (r = n.picturefill || m.pf)
                ? (t &&
                    t.src &&
                    !e[h]("srcset") &&
                    e.setAttribute("srcset", t.src),
                  r({ reevaluate: !0, elements: [e] }))
                : t && t.src && (e.src = t.src);
            }
            var R,
              I,
              B,
              F,
              r,
              y = f.documentElement,
              H = n.HTMLPictureElement,
              o = "addEventListener",
              h = "getAttribute",
              t = n[o].bind(n),
              v = n.setTimeout,
              P = n.requestAnimationFrame || v,
              $ = n.requestIdleCallback,
              U = /^picture$/i,
              Y = ["load", "error", "lazyincluded", "_lazyloaded"],
              i = {},
              G = Array.prototype.forEach,
              s = function (e, t) {
                return (
                  i[t] || (i[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                  i[t].test(e[h]("class") || "") && i[t]
                );
              },
              J = function (t, r, e) {
                var n = e ? o : "removeEventListener";
                e && J(t, r),
                  Y.forEach(function (e) {
                    t[n](e, r);
                  });
              },
              g = function (e, t, r, n, o) {
                var a = f.createEvent("Event");
                return (
                  ((r = r || {}).instance = p),
                  a.initEvent(t, !n, !o),
                  (a.detail = r),
                  e.dispatchEvent(a),
                  a
                );
              },
              b = function (e, t) {
                return (getComputedStyle(e, null) || {})[t];
              },
              K = function (e, t, r) {
                for (
                  r = r || e.offsetWidth;
                  r < m.minSize && t && !e._lazysizesWidth;

                )
                  (r = t.offsetWidth), (t = t.parentNode);
                return r;
              },
              z = ((F = []), (r = B = []), (V._lsFlush = Q), V);
            function Q() {
              var e = r;
              for (r = B.length ? F : B, I = !(R = !0); e.length; ) e.shift()();
              R = !1;
            }
            function V(e, t) {
              R && !t
                ? e.apply(this, arguments)
                : (r.push(e), I || ((I = !0), (f.hidden ? v : P)(Q)));
            }
            function l(r, e) {
              return e
                ? function () {
                    z(r);
                  }
                : function () {
                    var e = this,
                      t = arguments;
                    z(function () {
                      r.apply(e, t);
                    });
                  };
            }
            function X(e) {
              function t() {
                var e = a.now() - n;
                e < 99 ? v(t, 99 - e) : ($ || o)(o);
              }
              var r,
                n,
                o = function () {
                  (r = null), e();
                };
              return function () {
                (n = a.now()), (r = r || v(t, 99));
              };
            }
            (le = /^img$/i),
              (ue = /^iframe$/i),
              (ce =
                "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent)),
              (T = -1),
              (de = function (e) {
                return (
                  (M = null == M ? "hidden" == b(f.body, "visibility") : M) ||
                  !(
                    "hidden" == b(e.parentNode, "visibility") &&
                    "hidden" == b(e, "visibility")
                  )
                );
              }),
              (ne = ge),
              (ae = j = S = 0),
              (ie = m.throttleDelay),
              (u = m.ricTimeout),
              (se =
                $ && 49 < u
                  ? function () {
                      $(be, { timeout: u }),
                        u !== m.ricTimeout && (u = m.ricTimeout);
                    }
                  : l(function () {
                      v(be);
                    }, !0)),
              (fe = l(ze)),
              (pe = function (e) {
                fe({ target: e.target });
              }),
              (me = l(function (t, e, r, n, o) {
                var a, i, s, l, u;
                (i = g(t, "lazybeforeunveil", e)).defaultPrevented ||
                  (n &&
                    (r ? c(t, m.autosizesClass) : t.setAttribute("sizes", n)),
                  (r = t[h](m.srcsetAttr)),
                  (n = t[h](m.srcAttr)),
                  o && (a = (l = t.parentNode) && U.test(l.nodeName || "")),
                  (s = e.firesLoad || ("src" in t && (r || n || a))),
                  (i = { target: t }),
                  c(t, m.loadingClass),
                  s && (clearTimeout(Z), (Z = v(ve, 2500)), J(t, pe, !0)),
                  a && G.call(l.getElementsByTagName("source"), xe),
                  r
                    ? t.setAttribute("srcset", r)
                    : n &&
                      !a &&
                      (ue.test(t.nodeName)
                        ? ((e = n),
                          0 ==
                          (u =
                            (l = t).getAttribute("data-load-mode") ||
                            m.iframeLoadMode)
                            ? l.contentWindow.location.replace(e)
                            : 1 == u && (l.src = e))
                        : (t.src = n)),
                  o && (r || a) && W(t, { src: n })),
                  t._lazyRace && delete t._lazyRace,
                  d(t, m.lazyClass),
                  z(function () {
                    var e = t.complete && 1 < t.naturalWidth;
                    (s && !e) ||
                      (e && c(t, m.fastLoadedClass),
                      ze(i),
                      (t._lazyCache = !0),
                      v(function () {
                        "_lazyCache" in t && delete t._lazyCache;
                      }, 9)),
                      "lazy" == t.loading && j--;
                  }, !0);
              })),
              (ye = X(function () {
                (m.loadMode = 3), k();
              }));
            var x,
              _,
              Z,
              C,
              ee,
              te,
              re,
              A,
              E,
              w,
              L,
              M,
              ne,
              oe,
              ae,
              ie,
              u,
              se,
              le,
              ue,
              ce,
              S,
              j,
              T,
              de,
              k,
              fe,
              pe,
              me,
              N,
              ye,
              he = {
                _: function () {
                  (ee = a.now()),
                    (p.elements = f.getElementsByClassName(m.lazyClass)),
                    (x = f.getElementsByClassName(
                      m.lazyClass + " " + m.preloadClass
                    )),
                    t("scroll", k, !0),
                    t("resize", k, !0),
                    t("pageshow", function (e) {
                      var t;
                      e.persisted &&
                        (t = f.querySelectorAll("." + m.loadingClass)).length &&
                        t.forEach &&
                        P(function () {
                          t.forEach(function (e) {
                            e.complete && N(e);
                          });
                        });
                    }),
                    n.MutationObserver
                      ? new MutationObserver(k).observe(y, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (y[o]("DOMNodeInserted", k, !0),
                        y[o]("DOMAttrModified", k, !0),
                        setInterval(k, 999)),
                    t("hashchange", k, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (e) {
                      f[o](e, k, !0);
                    }),
                    /d$|^c/.test(f.readyState)
                      ? D()
                      : (t("load", D), f[o]("DOMContentLoaded", k), v(D, 2e4)),
                    p.elements.length ? (ge(), z._lsFlush()) : k();
                },
                checkElems: (k = function (e) {
                  var t;
                  (e = !0 === e) && (u = 33),
                    oe ||
                      ((oe = !0),
                      (t = ie - (a.now() - ae)) < 0 && (t = 0),
                      e || t < 9 ? se() : v(se, t));
                }),
                unveil: (N = function (e) {
                  var t, r, n, o;
                  e._lazyRace ||
                    (((!(o =
                      "auto" ==
                      (n =
                        (r = le.test(e.nodeName)) &&
                        (e[h](m.sizesAttr) || e[h]("sizes")))) &&
                      _) ||
                      !r ||
                      (!e[h]("src") && !e.srcset) ||
                      e.complete ||
                      s(e, m.errorClass) ||
                      !s(e, m.lazyClass)) &&
                      ((t = g(e, "lazyunveilread").detail),
                      o && we.updateElem(e, !0, e.offsetWidth),
                      (e._lazyRace = !0),
                      j++,
                      me(e, t, o, n, r)));
                }),
                _aLSL: _e,
              };
            function ve(e) {
              j--, (e && !(j < 0) && e.target) || (j = 0);
            }
            function ge() {
              var e,
                t,
                r,
                n,
                o,
                a,
                i,
                s,
                l,
                u,
                c,
                d = p.elements;
              if ((C = m.loadMode) && j < 8 && (e = d.length)) {
                for (t = 0, T++; t < e; t++)
                  if (d[t] && !d[t]._lazyRace)
                    if (!ce || (p.prematureUnveil && p.prematureUnveil(d[t])))
                      N(d[t]);
                    else if (
                      (((i = d[t][h]("data-expand")) && (o = +i)) || (o = S),
                      l ||
                        ((l =
                          !m.expand || m.expand < 1
                            ? 500 < y.clientHeight && 500 < y.clientWidth
                              ? 500
                              : 370
                            : m.expand),
                        (u = (p._defEx = l) * m.expFactor),
                        (c = m.hFac),
                        (M = null),
                        S < u && j < 1 && 2 < T && 2 < C && !f.hidden
                          ? ((S = u), (T = 0))
                          : (S = 1 < C && 1 < T && j < 6 ? l : 0)),
                      s !== o &&
                        ((te = innerWidth + o * c),
                        (re = innerHeight + o),
                        (a = -1 * o),
                        (s = o)),
                      (u = d[t].getBoundingClientRect()),
                      (L = u.bottom) >= a &&
                        (A = u.top) <= re &&
                        (w = u.right) >= a * c &&
                        (E = u.left) <= te &&
                        (L || w || E || A) &&
                        (m.loadHidden || de(d[t])) &&
                        ((_ && j < 3 && !i && (C < 3 || T < 4)) ||
                          (function (e, t) {
                            var r,
                              n = e,
                              o = de(e);
                            for (
                              A -= t, L += t, E -= t, w += t;
                              o &&
                              (n = n.offsetParent) &&
                              n != f.body &&
                              n != y;

                            )
                              (o = 0 < (b(n, "opacity") || 1)) &&
                                "visible" != b(n, "overflow") &&
                                ((r = n.getBoundingClientRect()),
                                (o =
                                  w > r.left &&
                                  E < r.right &&
                                  L > r.top - 1 &&
                                  A < r.bottom + 1));
                            return o;
                          })(d[t], o)))
                    ) {
                      if ((N(d[t]), (n = !0), 9 < j)) break;
                    } else
                      !n &&
                        _ &&
                        !r &&
                        j < 4 &&
                        T < 4 &&
                        2 < C &&
                        (x[0] || m.preloadAfterLoad) &&
                        (x[0] ||
                          (!i &&
                            (L ||
                              w ||
                              E ||
                              A ||
                              "auto" != d[t][h](m.sizesAttr)))) &&
                        (r = x[0] || d[t]);
                r && !n && N(r);
              }
            }
            function be() {
              (oe = !1), (ae = a.now()), ne();
            }
            function ze(e) {
              var t = e.target;
              t._lazyCache
                ? delete t._lazyCache
                : (ve(e),
                  c(t, m.loadedClass),
                  d(t, m.loadingClass),
                  J(t, pe),
                  g(t, "lazyloaded"));
            }
            function xe(e) {
              var t,
                r = e[h](m.srcsetAttr);
              (t = m.customMedia[e[h]("data-media") || e[h]("media")]) &&
                e.setAttribute("media", t),
                r && e.setAttribute("srcset", r);
            }
            function _e() {
              3 == m.loadMode && (m.loadMode = 2), ye();
            }
            function D() {
              _ ||
                (a.now() - ee < 999
                  ? v(D, 999)
                  : ((_ = !0), (m.loadMode = 3), k(), t("scroll", _e, !0)));
            }
            Ae = l(function (e, t, r, n) {
              var o, a, i;
              if (
                ((e._lazysizesWidth = n),
                e.setAttribute("sizes", (n += "px")),
                U.test(t.nodeName || ""))
              )
                for (
                  a = 0, i = (o = t.getElementsByTagName("source")).length;
                  a < i;
                  a++
                )
                  o[a].setAttribute("sizes", n);
              r.detail.dataAttr || W(e, r.detail);
            });
            var Ce,
              Ae,
              Ee,
              we = {
                _: function () {
                  (Ce = f.getElementsByClassName(m.autosizesClass)),
                    t("resize", Ee);
                },
                checkElems: (Ee = X(function () {
                  var e,
                    t = Ce.length;
                  if (t) for (e = 0; e < t; e++) Le(Ce[e]);
                })),
                updateElem: Le,
              };
            function Le(e, t, r) {
              var n = e.parentNode;
              n &&
                ((r = K(e, n, r)),
                (t = g(e, "lazybeforesizes", { width: r, dataAttr: !!t }))
                  .defaultPrevented ||
                  ((r = t.detail.width) &&
                    r !== e._lazysizesWidth &&
                    Ae(e, n, t, r)));
            }
            function q() {
              !q.i && f.getElementsByClassName && ((q.i = !0), we._(), he._());
            }
            return (
              v(function () {
                m.init && q();
              }),
              (p = {
                cfg: m,
                autoSizer: we,
                loader: he,
                init: q,
                uP: W,
                aC: c,
                rC: d,
                hC: s,
                fire: g,
                gW: K,
                rAF: z,
              })
            );
          };
        (o = o(n, n.document, Date)),
          (n.lazySizes = o),
          "object" == typeof t && t.exports && (t.exports = o);
      },
      {},
    ],
    10: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          s = n(e("@babel/runtime/helpers/slicedToArray")),
          l = n(e("@babel/runtime/helpers/typeof")),
          u = (e("lazysizes"), n(e("./util/url-regular-expression"))),
          c = n(e("./util/document-query-selector-all"));
        document.addEventListener("DOMContentLoaded", function () {
          var n,
            t,
            r,
            e,
            o,
            a = document.documentElement,
            i = document.body;
          "object" ===
            ("undefined" == typeof menuDropdown
              ? "undefined"
              : (0, l.default)(menuDropdown)) &&
            null !== menuDropdown &&
            (n = document.querySelector(".js-dropdown-menu")) &&
            Object.entries(menuDropdown).forEach(function (e) {
              var t,
                e = (0, s.default)(e, 2),
                r = e[0],
                e = e[1];
              ("string" !== r && !(0, u.default)(e)) ||
                (((t = document.createElement("a")).href = e),
                (t.classList =
                  "dropdown-item block py-2 leading-tight px-5 hover:text-primary"),
                (t.innerText = r),
                n.appendChild(t));
            }),
            "object" ===
              ("undefined" == typeof followSocialMedia
                ? "undefined"
                : (0, l.default)(followSocialMedia)) &&
              null !== followSocialMedia &&
              (e = (0, c.default)(".js-social-media")).length &&
              e.forEach(function (o) {
                Object.entries(followSocialMedia).forEach(function (e) {
                  var t,
                    e = (0, s.default)(e, 2),
                    r = e[0],
                    e = e[1],
                    n = e[0];
                  (0, u.default)(n) &&
                    (((t = document.createElement("a")).href = n),
                    (t.title = e[1]),
                    (t.classList = "p-2 inline-block hover:opacity-70"),
                    (t.target = "_blank"),
                    (t.rel = "noopener noreferrer"),
                    (t.innerHTML =
                      '<svg class="icon"><use xlink:href="#icon-'.concat(
                        r,
                        '"></use></svg>'
                      )),
                    o.appendChild(t));
                });
              }),
            (t = i.closest(".has-cover")),
            (r = document.querySelector(".js-header")),
            window.addEventListener(
              "scroll",
              function () {
                var e = window.scrollY;
                5 < e
                  ? r.classList.add("shadow-header", "header-bg")
                  : r.classList.remove("shadow-header", "header-bg"),
                  t &&
                    (20 <= e
                      ? i.classList.remove("is-head-transparent")
                      : i.classList.add("is-head-transparent"));
              },
              { passive: !0 }
            ),
            (e = (0, c.default)(".js-dark-mode")).length &&
              e.forEach(function (e) {
                return e.addEventListener("click", function (e) {
                  e.preventDefault(),
                    a.classList.contains("dark")
                      ? (a.classList.remove("dark"),
                        (localStorage.theme = "light"))
                      : (a.classList.add("dark"),
                        (localStorage.theme = "dark"));
                });
              });
          (o = (0, c.default)(".dropdown:not(.is-hoverable)")).length &&
            (o.forEach(function (t) {
              t.addEventListener("click", function (e) {
                e.stopPropagation(),
                  t.classList.toggle("is-active"),
                  i.classList.remove("has-menu");
              });
            }),
            document.addEventListener("click", function () {
              return o.forEach(function (e) {
                e.classList.remove("is-active");
              });
            })),
            document
              .querySelector(".js-menu-toggle")
              .addEventListener("click", function (e) {
                e.preventDefault(), i.classList.toggle("has-menu");
              });
        });
      },
      {
        "./util/document-query-selector-all": 11,
        "./util/url-regular-expression": 12,
        "@babel/runtime/helpers/interopRequireDefault": 3,
        "@babel/runtime/helpers/slicedToArray": 6,
        "@babel/runtime/helpers/typeof": 7,
        lazysizes: 9,
      },
    ],
    11: [
      function (e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.default = void 0);
        r.default = function (e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : document;
          return Array.prototype.slice.call(t.querySelectorAll(e), 0);
        };
      },
      {},
    ],
    12: [
      function (e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.default = void 0);
        r.default = function (e) {
          return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/.test(
            e
          );
        };
      },
      {},
    ],
  },
  {},
  [10]
);
