/*!
 * simply v0.4.0
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */ !(function n(r, i, a) {
  function l(t, e) {
    if (!i[t]) {
      if (!r[t]) {
        var o = "function" == typeof require && require;
        if (!e && o) return o(t, !0);
        if (d) return d(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (o = i[t] = { exports: {} }),
        r[t][0].call(
          o.exports,
          function (e) {
            return l(r[t][1][e] || e);
          },
          o,
          o.exports,
          n,
          r,
          i,
          a
        );
    }
    return i[t].exports;
  }
  for (
    var d = "function" == typeof require && require, e = 0;
    e < a.length;
    e++
  )
    l(a[e]);
  return l;
})(
  {
    1: [
      function (e, t, o) {
        (t.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
          return n;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    2: [
      function (e, t, o) {
        (t.exports = function (e) {
          if (Array.isArray(e)) return e;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    3: [
      function (e, t, o) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    4: [
      function (e, t, o) {
        (t.exports = function (e, t) {
          var o =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != o) {
            var n,
              r,
              i = [],
              a = !0,
              l = !1;
            try {
              for (
                o = o.call(e);
                !(a = (n = o.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (e) {
              (l = !0), (r = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (l) throw r;
              }
            }
            return i;
          }
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    5: [
      function (e, t, o) {
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
      function (e, t, o) {
        var n = e("./arrayWithHoles.js"),
          r = e("./iterableToArrayLimit.js"),
          i = e("./unsupportedIterableToArray.js"),
          a = e("./nonIterableRest.js");
        (t.exports = function (e, t) {
          return n(e) || r(e, t) || i(e, t) || a();
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
      function (e, t, o) {
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
      function (e, t, o) {
        var n = e("./arrayLikeToArray.js");
        (t.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return n(e, t);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" ===
              (o = "Object" === o && e.constructor ? e.constructor.name : o) ||
              "Set" === o
              ? Array.from(e)
              : "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
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
      function (e, t, o) {
        var n = "undefined" != typeof window ? window : {},
          r = function (n, m, i) {
            "use strict";
            var f,
              p,
              e,
              q = {
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
            for (e in ((p = n.lazySizesConfig || n.lazysizesConfig || {}), q))
              e in p || (p[e] = q[e]);
            if (!m || !m.getElementsByClassName)
              return { init: function () {}, cfg: p, noSupport: !0 };
            function c(e, t) {
              l(e, t) ||
                e.setAttribute("class", (e[y]("class") || "").trim() + " " + t);
            }
            function u(e, t) {
              (t = l(e, t)) &&
                e.setAttribute("class", (e[y]("class") || "").replace(t, " "));
            }
            function D(e, t) {
              var o;
              !P && (o = n.picturefill || p.pf)
                ? (t &&
                    t.src &&
                    !e[y]("srcset") &&
                    e.setAttribute("srcset", t.src),
                  o({ reevaluate: !0, elements: [e] }))
                : t && t.src && (e.src = t.src);
            }
            var R,
              I,
              W,
              B,
              o,
              h = m.documentElement,
              P = n.HTMLPictureElement,
              r = "addEventListener",
              y = "getAttribute",
              t = n[r].bind(n),
              v = n.setTimeout,
              F = n.requestAnimationFrame || v,
              $ = n.requestIdleCallback,
              U = /^picture$/i,
              Y = ["load", "error", "lazyincluded", "_lazyloaded"],
              a = {},
              J = Array.prototype.forEach,
              l = function (e, t) {
                return (
                  a[t] || (a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                  a[t].test(e[y]("class") || "") && a[t]
                );
              },
              Z = function (t, o, e) {
                var n = e ? r : "removeEventListener";
                e && Z(t, o),
                  Y.forEach(function (e) {
                    t[n](e, o);
                  });
              },
              g = function (e, t, o, n, r) {
                var i = m.createEvent("Event");
                return (
                  ((o = o || {}).instance = f),
                  i.initEvent(t, !n, !r),
                  (i.detail = o),
                  e.dispatchEvent(i),
                  i
                );
              },
              z = function (e, t) {
                return (getComputedStyle(e, null) || {})[t];
              },
              G = function (e, t, o) {
                for (
                  o = o || e.offsetWidth;
                  o < p.minSize && t && !e._lazysizesWidth;

                )
                  (o = t.offsetWidth), (t = t.parentNode);
                return o;
              },
              b = ((B = []), (o = W = []), (K._lsFlush = X), K);
            function X() {
              var e = o;
              for (o = W.length ? B : W, I = !(R = !0); e.length; ) e.shift()();
              R = !1;
            }
            function K(e, t) {
              R && !t
                ? e.apply(this, arguments)
                : (o.push(e), I || ((I = !0), (m.hidden ? v : F)(X)));
            }
            function d(o, e) {
              return e
                ? function () {
                    b(o);
                  }
                : function () {
                    var e = this,
                      t = arguments;
                    b(function () {
                      o.apply(e, t);
                    });
                  };
            }
            function Q(e) {
              function t() {
                var e = i.now() - n;
                e < 99 ? v(t, 99 - e) : ($ || r)(r);
              }
              var o,
                n,
                r = function () {
                  (o = null), e();
                };
              return function () {
                (n = i.now()), (o = o || v(t, 99));
              };
            }
            (de = /^img$/i),
              (se = /^iframe$/i),
              (ce =
                "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent)),
              (k = -1),
              (ue = function (e) {
                return (
                  (M = null == M ? "hidden" == z(m.body, "visibility") : M) ||
                  !(
                    "hidden" == z(e.parentNode, "visibility") &&
                    "hidden" == z(e, "visibility")
                  )
                );
              }),
              (ne = ge),
              (ie = H = S = 0),
              (ae = p.throttleDelay),
              (s = p.ricTimeout),
              (le =
                $ && 49 < s
                  ? function () {
                      $(ze, { timeout: s }),
                        s !== p.ricTimeout && (s = p.ricTimeout);
                    }
                  : d(function () {
                      v(ze);
                    }, !0)),
              (me = d(be)),
              (fe = function (e) {
                me({ target: e.target });
              }),
              (pe = d(function (t, e, o, n, r) {
                var i, a, l, d, s;
                (a = g(t, "lazybeforeunveil", e)).defaultPrevented ||
                  (n &&
                    (o ? c(t, p.autosizesClass) : t.setAttribute("sizes", n)),
                  (o = t[y](p.srcsetAttr)),
                  (n = t[y](p.srcAttr)),
                  r && (i = (d = t.parentNode) && U.test(d.nodeName || "")),
                  (l = e.firesLoad || ("src" in t && (o || n || i))),
                  (a = { target: t }),
                  c(t, p.loadingClass),
                  l && (clearTimeout(V), (V = v(ve, 2500)), Z(t, fe, !0)),
                  i && J.call(d.getElementsByTagName("source"), Ee),
                  o
                    ? t.setAttribute("srcset", o)
                    : n &&
                      !i &&
                      (se.test(t.nodeName)
                        ? ((e = n),
                          0 ==
                          (s =
                            (d = t).getAttribute("data-load-mode") ||
                            p.iframeLoadMode)
                            ? d.contentWindow.location.replace(e)
                            : 1 == s && (d.src = e))
                        : (t.src = n)),
                  r && (o || i) && D(t, { src: n })),
                  t._lazyRace && delete t._lazyRace,
                  u(t, p.lazyClass),
                  b(function () {
                    var e = t.complete && 1 < t.naturalWidth;
                    (l && !e) ||
                      (e && c(t, p.fastLoadedClass),
                      be(a),
                      (t._lazyCache = !0),
                      v(function () {
                        "_lazyCache" in t && delete t._lazyCache;
                      }, 9)),
                      "lazy" == t.loading && H--;
                  }, !0);
              })),
              (he = Q(function () {
                (p.loadMode = 3), O();
              }));
            var E,
              w,
              V,
              L,
              ee,
              te,
              oe,
              x,
              C,
              A,
              _,
              M,
              ne,
              re,
              ie,
              ae,
              s,
              le,
              de,
              se,
              ce,
              S,
              H,
              k,
              ue,
              O,
              me,
              fe,
              pe,
              j,
              he,
              ye = {
                _: function () {
                  (ee = i.now()),
                    (f.elements = m.getElementsByClassName(p.lazyClass)),
                    (E = m.getElementsByClassName(
                      p.lazyClass + " " + p.preloadClass
                    )),
                    t("scroll", O, !0),
                    t("resize", O, !0),
                    t("pageshow", function (e) {
                      var t;
                      e.persisted &&
                        (t = m.querySelectorAll("." + p.loadingClass)).length &&
                        t.forEach &&
                        F(function () {
                          t.forEach(function (e) {
                            e.complete && j(e);
                          });
                        });
                    }),
                    n.MutationObserver
                      ? new MutationObserver(O).observe(h, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (h[r]("DOMNodeInserted", O, !0),
                        h[r]("DOMAttrModified", O, !0),
                        setInterval(O, 999)),
                    t("hashchange", O, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (e) {
                      m[r](e, O, !0);
                    }),
                    /d$|^c/.test(m.readyState)
                      ? T()
                      : (t("load", T), m[r]("DOMContentLoaded", O), v(T, 2e4)),
                    f.elements.length ? (ge(), b._lsFlush()) : O();
                },
                checkElems: (O = function (e) {
                  var t;
                  (e = !0 === e) && (s = 33),
                    re ||
                      ((re = !0),
                      (t = ae - (i.now() - ie)) < 0 && (t = 0),
                      e || t < 9 ? le() : v(le, t));
                }),
                unveil: (j = function (e) {
                  var t, o, n, r;
                  e._lazyRace ||
                    (((!(r =
                      "auto" ==
                      (n =
                        (o = de.test(e.nodeName)) &&
                        (e[y](p.sizesAttr) || e[y]("sizes")))) &&
                      w) ||
                      !o ||
                      (!e[y]("src") && !e.srcset) ||
                      e.complete ||
                      l(e, p.errorClass) ||
                      !l(e, p.lazyClass)) &&
                      ((t = g(e, "lazyunveilread").detail),
                      r && Ae.updateElem(e, !0, e.offsetWidth),
                      (e._lazyRace = !0),
                      H++,
                      pe(e, t, r, n, o)));
                }),
                _aLSL: we,
              };
            function ve(e) {
              H--, (e && !(H < 0) && e.target) || (H = 0);
            }
            function ge() {
              var e,
                t,
                o,
                n,
                r,
                i,
                a,
                l,
                d,
                s,
                c,
                u = f.elements;
              if ((L = p.loadMode) && H < 8 && (e = u.length)) {
                for (t = 0, k++; t < e; t++)
                  if (u[t] && !u[t]._lazyRace)
                    if (!ce || (f.prematureUnveil && f.prematureUnveil(u[t])))
                      j(u[t]);
                    else if (
                      (((a = u[t][y]("data-expand")) && (r = +a)) || (r = S),
                      d ||
                        ((d =
                          !p.expand || p.expand < 1
                            ? 500 < h.clientHeight && 500 < h.clientWidth
                              ? 500
                              : 370
                            : p.expand),
                        (s = (f._defEx = d) * p.expFactor),
                        (c = p.hFac),
                        (M = null),
                        S < s && H < 1 && 2 < k && 2 < L && !m.hidden
                          ? ((S = s), (k = 0))
                          : (S = 1 < L && 1 < k && H < 6 ? d : 0)),
                      l !== r &&
                        ((te = innerWidth + r * c),
                        (oe = innerHeight + r),
                        (i = -1 * r),
                        (l = r)),
                      (s = u[t].getBoundingClientRect()),
                      (_ = s.bottom) >= i &&
                        (x = s.top) <= oe &&
                        (A = s.right) >= i * c &&
                        (C = s.left) <= te &&
                        (_ || A || C || x) &&
                        (p.loadHidden || ue(u[t])) &&
                        ((w && H < 3 && !a && (L < 3 || k < 4)) ||
                          (function (e, t) {
                            var o,
                              n = e,
                              r = ue(e);
                            for (
                              x -= t, _ += t, C -= t, A += t;
                              r &&
                              (n = n.offsetParent) &&
                              n != m.body &&
                              n != h;

                            )
                              (r = 0 < (z(n, "opacity") || 1)) &&
                                "visible" != z(n, "overflow") &&
                                ((o = n.getBoundingClientRect()),
                                (r =
                                  A > o.left &&
                                  C < o.right &&
                                  _ > o.top - 1 &&
                                  x < o.bottom + 1));
                            return r;
                          })(u[t], r)))
                    ) {
                      if ((j(u[t]), (n = !0), 9 < H)) break;
                    } else
                      !n &&
                        w &&
                        !o &&
                        H < 4 &&
                        k < 4 &&
                        2 < L &&
                        (E[0] || p.preloadAfterLoad) &&
                        (E[0] ||
                          (!a &&
                            (_ ||
                              A ||
                              C ||
                              x ||
                              "auto" != u[t][y](p.sizesAttr)))) &&
                        (o = E[0] || u[t]);
                o && !n && j(o);
              }
            }
            function ze() {
              (re = !1), (ie = i.now()), ne();
            }
            function be(e) {
              var t = e.target;
              t._lazyCache
                ? delete t._lazyCache
                : (ve(e),
                  c(t, p.loadedClass),
                  u(t, p.loadingClass),
                  Z(t, fe),
                  g(t, "lazyloaded"));
            }
            function Ee(e) {
              var t,
                o = e[y](p.srcsetAttr);
              (t = p.customMedia[e[y]("data-media") || e[y]("media")]) &&
                e.setAttribute("media", t),
                o && e.setAttribute("srcset", o);
            }
            function we() {
              3 == p.loadMode && (p.loadMode = 2), he();
            }
            function T() {
              w ||
                (i.now() - ee < 999
                  ? v(T, 999)
                  : ((w = !0), (p.loadMode = 3), O(), t("scroll", we, !0)));
            }
            xe = d(function (e, t, o, n) {
              var r, i, a;
              if (
                ((e._lazysizesWidth = n),
                e.setAttribute("sizes", (n += "px")),
                U.test(t.nodeName || ""))
              )
                for (
                  i = 0, a = (r = t.getElementsByTagName("source")).length;
                  i < a;
                  i++
                )
                  r[i].setAttribute("sizes", n);
              o.detail.dataAttr || D(e, o.detail);
            });
            var Le,
              xe,
              Ce,
              Ae = {
                _: function () {
                  (Le = m.getElementsByClassName(p.autosizesClass)),
                    t("resize", Ce);
                },
                checkElems: (Ce = Q(function () {
                  var e,
                    t = Le.length;
                  if (t) for (e = 0; e < t; e++) _e(Le[e]);
                })),
                updateElem: _e,
              };
            function _e(e, t, o) {
              var n = e.parentNode;
              n &&
                ((o = G(e, n, o)),
                (t = g(e, "lazybeforesizes", { width: o, dataAttr: !!t }))
                  .defaultPrevented ||
                  ((o = t.detail.width) &&
                    o !== e._lazysizesWidth &&
                    xe(e, n, t, o)));
            }
            function N() {
              !N.i && m.getElementsByClassName && ((N.i = !0), Ae._(), ye._());
            }
            return (
              v(function () {
                p.init && N();
              }),
              (f = {
                cfg: p,
                autoSizer: Ae,
                loader: ye,
                init: N,
                uP: D,
                aC: c,
                rC: u,
                hC: l,
                fire: g,
                gW: G,
                rAF: b,
              })
            );
          };
        (r = r(n, n.document, Date)),
          (n.lazySizes = r),
          "object" == typeof t && t.exports && (t.exports = r);
      },
      {},
    ],
    10: [
      function (e, t, o) {
        var n, r;
        (n = this),
          (r = function () {
            "use strict";
            function s(e) {
              return (
                ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase()
              );
            }
            function d(e) {
              try {
                return Array.isArray(e)
                  ? e.filter(r)
                  : NodeList.prototype.isPrototypeOf(e)
                  ? [].slice.call(e).filter(r)
                  : w(e)
                  ? [e].filter(r)
                  : "string" == typeof e
                  ? [].slice.call(document.querySelectorAll(e)).filter(r)
                  : [];
              } catch (e) {
                throw new TypeError(
                  "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
                );
              }
            }
            function b(e, t) {
              if (
                ((t = E({ bubbles: !1, cancelable: !1, detail: void 0 }, t)),
                "function" == typeof window.CustomEvent)
              )
                return new CustomEvent(e, t);
              var o = document.createEvent("CustomEvent");
              return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o;
            }
            var e,
              t,
              o,
              n,
              E =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var o,
                      n = arguments[t];
                    for (o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              r = function (e) {
                return "IMG" === e.tagName;
              },
              w = function (e) {
                return e && 1 === e.nodeType;
              };
            return (
              (e =
                ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),
              (t = (t = void 0 === t ? {} : t).insertAt),
              "undefined" != typeof document &&
                ((o =
                  document.head || document.getElementsByTagName("head")[0]),
                ((n = document.createElement("style")).type = "text/css"),
                "top" === t && o.firstChild
                  ? o.insertBefore(n, o.firstChild)
                  : o.appendChild(n),
                n.styleSheet
                  ? (n.styleSheet.cssText = e)
                  : n.appendChild(document.createTextNode(e))),
              function e(t, o) {
                function n() {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  var r = t.reduce(function (e, t) {
                    return [].concat(e, d(t));
                  }, []);
                  return (
                    r
                      .filter(function (e) {
                        return -1 === f.indexOf(e);
                      })
                      .forEach(function (e) {
                        f.push(e), e.classList.add("medium-zoom-image");
                      }),
                    l.forEach(function (e) {
                      var t = e.type,
                        o = e.listener,
                        n = e.options;
                      r.forEach(function (e) {
                        e.addEventListener(t, o, n);
                      });
                    }),
                    z
                  );
                }
                function r() {
                  var e = (
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  ).target;
                  return v.original ? m() : a({ target: e });
                }
                var i =
                    window.Promise ||
                    function (e) {
                      function t() {}
                      e(t, t);
                    },
                  a = function () {
                    function c() {
                      var e = {
                          width: document.documentElement.clientWidth,
                          height: document.documentElement.clientHeight,
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                        },
                        t = void 0,
                        o = void 0,
                        n =
                          (y.container &&
                            (y.container instanceof Object
                              ? ((t =
                                  (e = E({}, e, y.container)).width -
                                  e.left -
                                  e.right -
                                  2 * y.margin),
                                (o =
                                  e.height - e.top - e.bottom - 2 * y.margin))
                              : ((n = (d = (
                                  w(y.container)
                                    ? y.container
                                    : document.querySelector(y.container)
                                ).getBoundingClientRect()).width),
                                (r = d.height),
                                (i = d.left),
                                (d = d.top),
                                (e = E({}, e, {
                                  width: n,
                                  height: r,
                                  left: i,
                                  top: d,
                                })))),
                          (t = t || e.width - 2 * y.margin),
                          (o = o || e.height - 2 * y.margin),
                          v.zoomedHd || v.original),
                        r = (!s(n) && n.naturalWidth) || t,
                        i = (!s(n) && n.naturalHeight) || o,
                        n = (d = n.getBoundingClientRect()).top,
                        a = d.left,
                        l = d.width,
                        d = d.height,
                        r = Math.min(r, t) / l,
                        i = Math.min(i, o) / d,
                        i =
                          "scale(" +
                          (r = Math.min(r, i)) +
                          ") translate3d(" +
                          ((t - l) / 2 - a + y.margin + e.left) / r +
                          "px, " +
                          ((o - d) / 2 - n + y.margin + e.top) / r +
                          "px, 0)";
                      (v.zoomed.style.transform = i),
                        v.zoomedHd && (v.zoomedHd.style.transform = i);
                    }
                    var u = (
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                    ).target;
                    return new i(function (t) {
                      if (u && -1 === f.indexOf(u)) t(z);
                      else if (v.zoomed) t(z);
                      else {
                        if (u) v.original = u;
                        else {
                          if (!(0 < f.length)) return void t(z);
                          var e = f;
                          v.original = e[0];
                        }
                        var o, n;
                        v.original.dispatchEvent(
                          b("medium-zoom:open", { detail: { zoom: z } })
                        ),
                          (h =
                            window.pageYOffset ||
                            document.documentElement.scrollTop ||
                            document.body.scrollTop ||
                            0),
                          (p = !0),
                          (v.zoomed =
                            ((e = v.original),
                            (r = e.getBoundingClientRect()),
                            (i = r.top),
                            (a = r.left),
                            (l = r.width),
                            (r = r.height),
                            (e = e.cloneNode()),
                            (d =
                              window.pageYOffset ||
                              document.documentElement.scrollTop ||
                              document.body.scrollTop ||
                              0),
                            (s =
                              window.pageXOffset ||
                              document.documentElement.scrollLeft ||
                              document.body.scrollLeft ||
                              0),
                            e.removeAttribute("id"),
                            (e.style.position = "absolute"),
                            (e.style.top = i + d + "px"),
                            (e.style.left = a + s + "px"),
                            (e.style.width = l + "px"),
                            (e.style.height = r + "px"),
                            (e.style.transform = ""),
                            e)),
                          document.body.appendChild(g),
                          y.template &&
                            ((i = w(y.template)
                              ? y.template
                              : document.querySelector(y.template)),
                            (v.template = document.createElement("div")),
                            v.template.appendChild(i.content.cloneNode(!0)),
                            document.body.appendChild(v.template)),
                          document.body.appendChild(v.zoomed),
                          window.requestAnimationFrame(function () {
                            document.body.classList.add("medium-zoom--opened");
                          }),
                          v.original.classList.add("medium-zoom-image--hidden"),
                          v.zoomed.classList.add("medium-zoom-image--opened"),
                          v.zoomed.addEventListener("click", m),
                          v.zoomed.addEventListener(
                            "transitionend",
                            function e() {
                              (p = !1),
                                v.zoomed.removeEventListener(
                                  "transitionend",
                                  e
                                ),
                                v.original.dispatchEvent(
                                  b("medium-zoom:opened", {
                                    detail: { zoom: z },
                                  })
                                ),
                                t(z);
                            }
                          ),
                          v.original.getAttribute("data-zoom-src")
                            ? ((v.zoomedHd = v.zoomed.cloneNode()),
                              v.zoomedHd.removeAttribute("srcset"),
                              v.zoomedHd.removeAttribute("sizes"),
                              (v.zoomedHd.src =
                                v.zoomed.getAttribute("data-zoom-src")),
                              (v.zoomedHd.onerror = function () {
                                clearInterval(o),
                                  console.warn(
                                    "Unable to reach the zoom image target " +
                                      v.zoomedHd.src
                                  ),
                                  (v.zoomedHd = null),
                                  c();
                              }),
                              (o = setInterval(function () {
                                v.zoomedHd.complete &&
                                  (clearInterval(o),
                                  v.zoomedHd.classList.add(
                                    "medium-zoom-image--opened"
                                  ),
                                  v.zoomedHd.addEventListener("click", m),
                                  document.body.appendChild(v.zoomedHd),
                                  c());
                              }, 10)))
                            : v.original.hasAttribute("srcset")
                            ? ((v.zoomedHd = v.zoomed.cloneNode()),
                              v.zoomedHd.removeAttribute("sizes"),
                              v.zoomedHd.removeAttribute("loading"),
                              (n = v.zoomedHd.addEventListener(
                                "load",
                                function () {
                                  v.zoomedHd.removeEventListener("load", n),
                                    v.zoomedHd.classList.add(
                                      "medium-zoom-image--opened"
                                    ),
                                    v.zoomedHd.addEventListener("click", m),
                                    document.body.appendChild(v.zoomedHd),
                                    c();
                                }
                              )))
                            : c();
                      }
                      var r, i, a, l, d, s;
                    });
                  },
                  m = function () {
                    return new i(function (t) {
                      !p && v.original
                        ? ((p = !0),
                          document.body.classList.remove("medium-zoom--opened"),
                          (v.zoomed.style.transform = ""),
                          v.zoomedHd && (v.zoomedHd.style.transform = ""),
                          v.template &&
                            ((v.template.style.transition = "opacity 150ms"),
                            (v.template.style.opacity = 0)),
                          v.original.dispatchEvent(
                            b("medium-zoom:close", { detail: { zoom: z } })
                          ),
                          v.zoomed.addEventListener(
                            "transitionend",
                            function e() {
                              v.original.classList.remove(
                                "medium-zoom-image--hidden"
                              ),
                                document.body.removeChild(v.zoomed),
                                v.zoomedHd &&
                                  document.body.removeChild(v.zoomedHd),
                                document.body.removeChild(g),
                                v.zoomed.classList.remove(
                                  "medium-zoom-image--opened"
                                ),
                                v.template &&
                                  document.body.removeChild(v.template),
                                (p = !1),
                                v.zoomed.removeEventListener(
                                  "transitionend",
                                  e
                                ),
                                v.original.dispatchEvent(
                                  b("medium-zoom:closed", {
                                    detail: { zoom: z },
                                  })
                                ),
                                (v.original = null),
                                (v.zoomed = null),
                                (v.zoomedHd = null),
                                (v.template = null),
                                t(z);
                            }
                          ))
                        : t(z);
                    });
                  },
                  f = [],
                  l = [],
                  p = !1,
                  h = 0,
                  y = 1 < arguments.length && void 0 !== o ? o : {},
                  v = {
                    original: null,
                    zoomed: null,
                    zoomedHd: null,
                    template: null,
                  },
                  g =
                    ("[object Object]" === Object.prototype.toString.call(t)
                      ? (y = t)
                      : (!t && "string" != typeof t) || n(t),
                    (y = E(
                      {
                        margin: 0,
                        background: "#fff",
                        scrollOffset: 40,
                        container: null,
                        template: null,
                      },
                      y
                    )),
                    (o = y.background),
                    (t = document.createElement("div")).classList.add(
                      "medium-zoom-overlay"
                    ),
                    (t.style.background = o),
                    t),
                  z =
                    (document.addEventListener("click", function (e) {
                      e = e.target;
                      e !== g ? -1 !== f.indexOf(e) && r({ target: e }) : m();
                    }),
                    document.addEventListener("keyup", function (e) {
                      e = e.key || e.keyCode;
                      ("Escape" !== e && "Esc" !== e && 27 !== e) || m();
                    }),
                    document.addEventListener("scroll", function () {
                      var e;
                      !p &&
                        v.original &&
                        ((e =
                          window.pageYOffset ||
                          document.documentElement.scrollTop ||
                          document.body.scrollTop ||
                          0),
                        Math.abs(h - e) > y.scrollOffset && setTimeout(m, 150));
                    }),
                    window.addEventListener("resize", m),
                    {
                      open: a,
                      close: m,
                      toggle: r,
                      update: function () {
                        var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = e;
                        return (
                          e.background && (g.style.background = e.background),
                          e.container &&
                            e.container instanceof Object &&
                            (t.container = E({}, y.container, e.container)),
                          e.template &&
                            ((e = w(e.template)
                              ? e.template
                              : document.querySelector(e.template)),
                            (t.template = e)),
                          (y = E({}, y, t)),
                          f.forEach(function (e) {
                            e.dispatchEvent(
                              b("medium-zoom:update", { detail: { zoom: z } })
                            );
                          }),
                          z
                        );
                      },
                      clone: function () {
                        return e(
                          E(
                            {},
                            y,
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                          )
                        );
                      },
                      attach: n,
                      detach: function () {
                        for (
                          var e = arguments.length, t = Array(e), o = 0;
                          o < e;
                          o++
                        )
                          t[o] = arguments[o];
                        v.zoomed && m();
                        var n =
                          0 < t.length
                            ? t.reduce(function (e, t) {
                                return [].concat(e, d(t));
                              }, [])
                            : f;
                        return (
                          n.forEach(function (e) {
                            e.classList.remove("medium-zoom-image"),
                              e.dispatchEvent(
                                b("medium-zoom:detach", { detail: { zoom: z } })
                              );
                          }),
                          (f = f.filter(function (e) {
                            return -1 === n.indexOf(e);
                          })),
                          z
                        );
                      },
                      on: function (t, o) {
                        var n =
                          2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        return (
                          f.forEach(function (e) {
                            e.addEventListener("medium-zoom:" + t, o, n);
                          }),
                          l.push({
                            type: "medium-zoom:" + t,
                            listener: o,
                            options: n,
                          }),
                          z
                        );
                      },
                      off: function (t, o) {
                        var n =
                          2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        return (
                          f.forEach(function (e) {
                            e.removeEventListener("medium-zoom:" + t, o, n);
                          }),
                          (l = l.filter(function (e) {
                            return !(
                              e.type === "medium-zoom:" + t &&
                              e.listener.toString() === o.toString()
                            );
                          })),
                          z
                        );
                      },
                      getOptions: function () {
                        return y;
                      },
                      getImages: function () {
                        return f;
                      },
                      getZoomedImage: function () {
                        return v.original;
                      },
                    });
                return z;
              }
            );
          }),
          "object" == typeof o && void 0 !== t
            ? (t.exports = r())
            : "function" == typeof define && define.amd
            ? define(r)
            : ((n = n || self).mediumZoom = r());
      },
      {},
    ],
    11: [
      function (e, t, o) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          l = n(e("@babel/runtime/helpers/slicedToArray")),
          d = n(e("@babel/runtime/helpers/typeof")),
          s = (e("lazysizes"), n(e("./util/url-regular-expression"))),
          c = n(e("./util/document-query-selector-all"));
        document.addEventListener("DOMContentLoaded", function () {
          var n,
            t,
            o,
            e,
            r,
            i = document.documentElement,
            a = document.body;
          "object" ===
            ("undefined" == typeof menuDropdown
              ? "undefined"
              : (0, d.default)(menuDropdown)) &&
            null !== menuDropdown &&
            (n = document.querySelector(".js-dropdown-menu")) &&
            Object.entries(menuDropdown).forEach(function (e) {
              var t,
                e = (0, l.default)(e, 2),
                o = e[0],
                e = e[1];
              ("string" !== o && !(0, s.default)(e)) ||
                (((t = document.createElement("a")).href = e),
                (t.classList =
                  "dropdown-item block py-2 leading-tight px-5 hover:text-primary"),
                (t.innerText = o),
                n.appendChild(t));
            }),
            "object" ===
              ("undefined" == typeof followSocialMedia
                ? "undefined"
                : (0, d.default)(followSocialMedia)) &&
              null !== followSocialMedia &&
              (e = (0, c.default)(".js-social-media")).length &&
              e.forEach(function (r) {
                Object.entries(followSocialMedia).forEach(function (e) {
                  var t,
                    e = (0, l.default)(e, 2),
                    o = e[0],
                    e = e[1],
                    n = e[0];
                  (0, s.default)(n) &&
                    (((t = document.createElement("a")).href = n),
                    (t.title = e[1]),
                    (t.classList = "p-2 inline-block hover:opacity-70"),
                    (t.target = "_blank"),
                    (t.rel = "noopener noreferrer"),
                    (t.innerHTML =
                      '<svg class="icon"><use xlink:href="#icon-'.concat(
                        o,
                        '"></use></svg>'
                      )),
                    r.appendChild(t));
                });
              }),
            (t = a.closest(".has-cover")),
            (o = document.querySelector(".js-header")),
            window.addEventListener(
              "scroll",
              function () {
                var e = window.scrollY;
                5 < e
                  ? o.classList.add("shadow-header", "header-bg")
                  : o.classList.remove("shadow-header", "header-bg"),
                  t &&
                    (20 <= e
                      ? a.classList.remove("is-head-transparent")
                      : a.classList.add("is-head-transparent"));
              },
              { passive: !0 }
            ),
            (e = (0, c.default)(".js-dark-mode")).length &&
              e.forEach(function (e) {
                return e.addEventListener("click", function (e) {
                  e.preventDefault(),
                    i.classList.contains("dark")
                      ? (i.classList.remove("dark"),
                        (localStorage.theme = "light"))
                      : (i.classList.add("dark"),
                        (localStorage.theme = "dark"));
                });
              });
          (r = (0, c.default)(".dropdown:not(.is-hoverable)")).length &&
            (r.forEach(function (t) {
              t.addEventListener("click", function (e) {
                e.stopPropagation(),
                  t.classList.toggle("is-active"),
                  a.classList.remove("has-menu");
              });
            }),
            document.addEventListener("click", function () {
              return r.forEach(function (e) {
                e.classList.remove("is-active");
              });
            })),
            document
              .querySelector(".js-menu-toggle")
              .addEventListener("click", function (e) {
                e.preventDefault(), a.classList.toggle("has-menu");
              });
        });
      },
      {
        "./util/document-query-selector-all": 13,
        "./util/url-regular-expression": 15,
        "@babel/runtime/helpers/interopRequireDefault": 3,
        "@babel/runtime/helpers/slicedToArray": 6,
        "@babel/runtime/helpers/typeof": 7,
        lazysizes: 9,
      },
    ],
    12: [
      function (e, t, o) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          r = (e("./main"), n(e("medium-zoom"))),
          i = n(e("./util/load-script")),
          a = n(e("./util/document-query-selector-all"));
        document.addEventListener("DOMContentLoaded", function () {
          var e;
          (e = (0, a.default)(
            [
              'iframe[src*="player.vimeo.com"]',
              'iframe[src*="dailymotion.com"]',
              'iframe[src*="youtube.com"]',
              'iframe[src*="youtube-nocookie.com"]',
              'iframe[src*="player.twitch.tv"]',
              'iframe[src*="kickstarter.com"][src*="video.html"]',
            ].join(",")
          )).length &&
            e.forEach(function (e) {
              e.classList.add("aspect-video", "w-full"),
                e.removeAttribute("height"),
                e.removeAttribute("width");
            });
          (0, a.default)(".post-body img").forEach(function (e) {
            return !e.closest("a") && e.classList.add("simply-zoom");
          }),
            (0, r.default)(".simply-zoom", {
              margin: 20,
              background: "hsla(0,0%,100%,.85)",
            }),
            (0, a.default)("code[class*=language-]").length &&
              "undefined" != typeof prismJs &&
              (0, i.default)(prismJs);
        });
      },
      {
        "./main": 11,
        "./util/document-query-selector-all": 13,
        "./util/load-script": 14,
        "@babel/runtime/helpers/interopRequireDefault": 3,
        "medium-zoom": 10,
      },
    ],
    13: [
      function (e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = void 0);
        o.default = function (e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : document;
          return Array.prototype.slice.call(t.querySelectorAll(e), 0);
        };
      },
      {},
    ],
    14: [
      function (e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = void 0);
        o.default = function (e, t) {
          var o = document.createElement("script");
          (o.src = e),
            (o.defer = !0),
            (o.async = !0),
            t && o.addEventListener("load", t),
            document.body.appendChild(o);
        };
      },
      {},
    ],
    15: [
      function (e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = void 0);
        o.default = function (e) {
          return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/.test(
            e
          );
        };
      },
      {},
    ],
  },
  {},
  [12]
);
