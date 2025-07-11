/*!
 * simply v0.4.0
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */ !(function n(r, s, i) {
  function l(t, e) {
    if (!s[t]) {
      if (!r[t]) {
        var a = "function" == typeof require && require;
        if (!e && a) return a(t, !0);
        if (o) return o(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (a = s[t] = { exports: {} }),
        r[t][0].call(
          a.exports,
          function (e) {
            return l(r[t][1][e] || e);
          },
          a,
          a.exports,
          n,
          r,
          s,
          i
        );
    }
    return s[t].exports;
  }
  for (
    var o = "function" == typeof require && require, e = 0;
    e < i.length;
    e++
  )
    l(i[e]);
  return l;
})(
  {
    1: [
      function (e, t, a) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    2: [
      function (e, t, a) {
        function p(e) {
          if (0 <= e.indexOf("!")) return !1;
          if ((e = h[e] || e) in Prism.languages) return !0;
          e = f[e];
          return e && !e.error && !1 === e.loading;
        }
        function g(e, t, n) {
          var a = (e = "string" == typeof e ? [e] : e).length,
            r = 0,
            u = !1;
          function c() {
            u || (++r === a && t && t(e));
          }
          0 === a
            ? t && setTimeout(t, 0)
            : e.forEach(function (e) {
                function t() {
                  var e,
                    t,
                    a,
                    n,
                    r = f[s];
                  (r = r || (f[s] = { callbacks: [] })).callbacks.push({
                    success: i,
                    error: l,
                  }),
                    !o && p(s)
                      ? d(s, "success")
                      : !o && r.error
                      ? d(s, "error")
                      : (!o && r.loading) ||
                        ((r.loading = !0),
                        (r.error = !1),
                        (n = s),
                        (n =
                          k.languages_path +
                          "prism-" +
                          n +
                          (k.use_minified ? ".min" : "") +
                          ".js"),
                        (e = function () {
                          (r.loading = !1), d(s, "success");
                        }),
                        (t = function () {
                          (r.loading = !1), (r.error = !0), d(s, "error");
                        }),
                        ((a = document.createElement("script")).src = n),
                        (a.async = !0),
                        (a.onload = function () {
                          document.body.removeChild(a), e && e();
                        }),
                        (a.onerror = function () {
                          document.body.removeChild(a), t && t();
                        }),
                        document.body.appendChild(a));
                }
                var s, i, l, o, a;
                (i = c),
                  (l = function () {
                    u || ((u = !0), n && n(e));
                  }),
                  (o = 0 <= (s = e).indexOf("!")),
                  (s = s.replace("!", "")),
                  (s = h[s] || s),
                  (a = m[s]) && a.length ? g(a, t, l) : t();
              });
        }
        function d(e, t) {
          if (f[e]) {
            for (var a = f[e].callbacks, n = 0, r = a.length; n < r; n++) {
              var s = a[n][t];
              s && setTimeout(s, 0);
            }
            a.length = 0;
          }
        }
        var m, h, f, n, r, s, i, l, k;
        "undefined" != typeof Prism &&
          "undefined" != typeof document &&
          ((m = {
            javascript: "clike",
            actionscript: "javascript",
            apex: ["clike", "sql"],
            arduino: "cpp",
            aspnet: ["markup", "csharp"],
            birb: "clike",
            bison: "c",
            c: "clike",
            csharp: "clike",
            cpp: "c",
            cfscript: "clike",
            chaiscript: ["clike", "cpp"],
            coffeescript: "javascript",
            crystal: "ruby",
            "css-extras": "css",
            d: "clike",
            dart: "clike",
            django: "markup-templating",
            ejs: ["javascript", "markup-templating"],
            etlua: ["lua", "markup-templating"],
            erb: ["ruby", "markup-templating"],
            fsharp: "clike",
            "firestore-security-rules": "clike",
            flow: "javascript",
            ftl: "markup-templating",
            gml: "clike",
            glsl: "c",
            go: "clike",
            groovy: "clike",
            haml: "ruby",
            handlebars: "markup-templating",
            haxe: "clike",
            hlsl: "c",
            idris: "haskell",
            java: "clike",
            javadoc: ["markup", "java", "javadoclike"],
            jolie: "clike",
            jsdoc: ["javascript", "javadoclike", "typescript"],
            "js-extras": "javascript",
            json5: "json",
            jsonp: "json",
            "js-templates": "javascript",
            kotlin: "clike",
            latte: ["clike", "markup-templating", "php"],
            less: "css",
            lilypond: "scheme",
            liquid: "markup-templating",
            markdown: "markup",
            "markup-templating": "markup",
            mongodb: "javascript",
            n4js: "javascript",
            objectivec: "c",
            opencl: "c",
            parser: "markup",
            php: "markup-templating",
            phpdoc: ["php", "javadoclike"],
            "php-extras": "php",
            plsql: "sql",
            processing: "clike",
            protobuf: "clike",
            pug: ["markup", "javascript"],
            purebasic: "clike",
            purescript: "haskell",
            qsharp: "clike",
            qml: "javascript",
            qore: "clike",
            racket: "scheme",
            cshtml: ["markup", "csharp"],
            jsx: ["markup", "javascript"],
            tsx: ["jsx", "typescript"],
            reason: "clike",
            ruby: "clike",
            sass: "css",
            scss: "css",
            scala: "java",
            "shell-session": "bash",
            smarty: "markup-templating",
            solidity: "clike",
            soy: "markup-templating",
            sparql: "turtle",
            sqf: "clike",
            squirrel: "clike",
            stata: ["mata", "java", "python"],
            "t4-cs": ["t4-templating", "csharp"],
            "t4-vb": ["t4-templating", "vbnet"],
            tap: "yaml",
            tt2: ["clike", "markup-templating"],
            textile: "markup",
            twig: "markup-templating",
            typescript: "javascript",
            v: "clike",
            vala: "clike",
            vbnet: "basic",
            velocity: "markup",
            wiki: "markup",
            xeora: "markup",
            "xml-doc": "markup",
            xquery: "markup",
          }),
          (h = {
            html: "markup",
            xml: "markup",
            svg: "markup",
            mathml: "markup",
            ssml: "markup",
            atom: "markup",
            rss: "markup",
            js: "javascript",
            g4: "antlr4",
            ino: "arduino",
            "arm-asm": "armasm",
            art: "arturo",
            adoc: "asciidoc",
            avs: "avisynth",
            avdl: "avro-idl",
            gawk: "awk",
            shell: "bash",
            shortcode: "bbcode",
            rbnf: "bnf",
            oscript: "bsl",
            cs: "csharp",
            dotnet: "csharp",
            cfc: "cfscript",
            coffee: "coffeescript",
            conc: "concurnas",
            jinja2: "django",
            "dns-zone": "dns-zone-file",
            dockerfile: "docker",
            gv: "dot",
            eta: "ejs",
            xlsx: "excel-formula",
            xls: "excel-formula",
            gamemakerlanguage: "gml",
            po: "gettext",
            gni: "gn",
            ld: "linker-script",
            "go-mod": "go-module",
            hbs: "handlebars",
            mustache: "handlebars",
            hs: "haskell",
            idr: "idris",
            gitignore: "ignore",
            hgignore: "ignore",
            npmignore: "ignore",
            webmanifest: "json",
            kt: "kotlin",
            kts: "kotlin",
            kum: "kumir",
            tex: "latex",
            context: "latex",
            ly: "lilypond",
            emacs: "lisp",
            elisp: "lisp",
            "emacs-lisp": "lisp",
            md: "markdown",
            moon: "moonscript",
            n4jsd: "n4js",
            nani: "naniscript",
            objc: "objectivec",
            qasm: "openqasm",
            objectpascal: "pascal",
            px: "pcaxis",
            pcode: "peoplecode",
            plantuml: "plant-uml",
            pq: "powerquery",
            mscript: "powerquery",
            pbfasm: "purebasic",
            purs: "purescript",
            py: "python",
            qs: "qsharp",
            rkt: "racket",
            razor: "cshtml",
            rpy: "renpy",
            res: "rescript",
            robot: "robotframework",
            rb: "ruby",
            "sh-session": "shell-session",
            shellsession: "shell-session",
            smlnj: "sml",
            sol: "solidity",
            sln: "solution-file",
            rq: "sparql",
            sclang: "supercollider",
            t4: "t4-cs",
            trickle: "tremor",
            troy: "tremor",
            trig: "turtle",
            ts: "typescript",
            tsconfig: "typoscript",
            uscript: "unrealscript",
            uc: "unrealscript",
            url: "uri",
            vb: "visual-basic",
            vba: "visual-basic",
            webidl: "web-idl",
            mathematica: "wolfram",
            nb: "wolfram",
            wl: "wolfram",
            xeoracube: "xeora",
            yml: "yaml",
          }),
          (f = {}),
          (n = "components/"),
          (r = Prism.util.currentScript()) &&
            ((s =
              /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i),
            (i = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i),
            null != (l = r.getAttribute("data-autoloader-path"))
              ? (n = l.trim().replace(/\/?$/, "/"))
              : ((l = r.src),
                s.test(l)
                  ? (n = l.replace(s, "components/"))
                  : i.test(l) && (n = l.replace(i, "$1components/")))),
          (k = Prism.plugins.autoloader =
            { languages_path: n, use_minified: !0, loadLanguages: g }),
          Prism.hooks.add("complete", function (e) {
            var t,
              a,
              n = e.element,
              e = e.language;
            n &&
              e &&
              "none" !== e &&
              ((a = ((t = n).getAttribute("data-dependencies") || "").trim()) ||
                ((t = t.parentElement) &&
                  "pre" === t.tagName.toLowerCase() &&
                  (a = (t.getAttribute("data-dependencies") || "").trim())),
              (t = a ? a.split(/\s*,\s*/g) : []),
              /^diff-./i.test(e)
                ? (t.push("diff"), t.push(e.substr("diff-".length)))
                : t.push(e),
              t.every(p) ||
                g(t, function () {
                  Prism.highlightElement(n);
                }));
          }));
      },
      {},
    ],
    3: [
      function (e, r, t) {
        !function (n) {
          !function () {
            var e,
              t,
              o,
              u,
              c,
              p,
              a,
              g = (function (o) {
                var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                  t = 0,
                  e = {},
                  q = {
                    manual: o.Prism && o.Prism.manual,
                    disableWorkerMessageHandler:
                      o.Prism && o.Prism.disableWorkerMessageHandler,
                    util: {
                      encode: function e(t) {
                        return t instanceof C
                          ? new C(t.type, e(t.content), t.alias)
                          : Array.isArray(t)
                          ? t.map(e)
                          : t
                              .replace(/&/g, "&amp;")
                              .replace(/</g, "&lt;")
                              .replace(/\u00a0/g, " ");
                      },
                      type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                      },
                      objId: function (e) {
                        return (
                          e.__id ||
                            Object.defineProperty(e, "__id", { value: ++t }),
                          e.__id
                        );
                      },
                      clone: function a(e, n) {
                        var r, t;
                        switch (((n = n || {}), q.util.type(e))) {
                          case "Object":
                            if (((t = q.util.objId(e)), n[t])) return n[t];
                            for (var s in ((r = {}), (n[t] = r), e))
                              e.hasOwnProperty(s) && (r[s] = a(e[s], n));
                            return r;
                          case "Array":
                            return ((t = q.util.objId(e)), n[t])
                              ? n[t]
                              : ((r = []),
                                (n[t] = r),
                                e.forEach(function (e, t) {
                                  r[t] = a(e, n);
                                }),
                                r);
                          default:
                            return e;
                        }
                      },
                      getLanguage: function (e) {
                        for (; e; ) {
                          var t = a.exec(e.className);
                          if (t) return t[1].toLowerCase();
                          e = e.parentElement;
                        }
                        return "none";
                      },
                      setLanguage: function (e, t) {
                        (e.className = e.className.replace(
                          RegExp(a, "gi"),
                          ""
                        )),
                          e.classList.add("language-" + t);
                      },
                      currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document)
                          return document.currentScript;
                        try {
                          throw new Error();
                        } catch (e) {
                          var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                            e.stack
                          ) || [])[1];
                          if (t) {
                            var a,
                              n = document.getElementsByTagName("script");
                            for (a in n) if (n[a].src == t) return n[a];
                          }
                          return null;
                        }
                      },
                      isActive: function (e, t, a) {
                        for (var n = "no-" + t; e; ) {
                          var r = e.classList;
                          if (r.contains(t)) return !0;
                          if (r.contains(n)) return !1;
                          e = e.parentElement;
                        }
                        return !!a;
                      },
                    },
                    languages: {
                      plain: e,
                      plaintext: e,
                      text: e,
                      txt: e,
                      extend: function (e, t) {
                        var a,
                          n = q.util.clone(q.languages[e]);
                        for (a in t) n[a] = t[a];
                        return n;
                      },
                      insertBefore: function (a, e, t, n) {
                        var r,
                          s = (n = n || q.languages)[a],
                          i = {};
                        for (r in s)
                          if (s.hasOwnProperty(r)) {
                            if (r == e)
                              for (var l in t)
                                t.hasOwnProperty(l) && (i[l] = t[l]);
                            t.hasOwnProperty(r) || (i[r] = s[r]);
                          }
                        var o = n[a];
                        return (
                          (n[a] = i),
                          q.languages.DFS(q.languages, function (e, t) {
                            t === o && e != a && (this[e] = i);
                          }),
                          i
                        );
                      },
                      DFS: function e(t, a, n, r) {
                        r = r || {};
                        var s,
                          i,
                          l,
                          o = q.util.objId;
                        for (s in t)
                          t.hasOwnProperty(s) &&
                            (a.call(t, s, t[s], n || s),
                            (i = t[s]),
                            "Object" !== (l = q.util.type(i)) || r[o(i)]
                              ? "Array" !== l ||
                                r[o(i)] ||
                                ((r[o(i)] = !0), e(i, a, s, r))
                              : ((r[o(i)] = !0), e(i, a, null, r)));
                      },
                    },
                    plugins: {},
                    highlightAll: function (e, t) {
                      q.highlightAllUnder(document, e, t);
                    },
                    highlightAllUnder: function (e, t, a) {
                      var n = {
                        callback: a,
                        container: e,
                        selector:
                          'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                      };
                      q.hooks.run("before-highlightall", n),
                        (n.elements = Array.prototype.slice.apply(
                          n.container.querySelectorAll(n.selector)
                        )),
                        q.hooks.run("before-all-elements-highlight", n);
                      for (var r, s = 0; (r = n.elements[s++]); )
                        q.highlightElement(r, !0 === t, n.callback);
                    },
                    highlightElement: function (e, t, a) {
                      var n = q.util.getLanguage(e),
                        r = q.languages[n],
                        s = (q.util.setLanguage(e, n), e.parentElement);
                      s &&
                        "pre" === s.nodeName.toLowerCase() &&
                        q.util.setLanguage(s, n);
                      var i = {
                        element: e,
                        language: n,
                        grammar: r,
                        code: e.textContent,
                      };
                      function l(e) {
                        (i.highlightedCode = e),
                          q.hooks.run("before-insert", i),
                          (i.element.innerHTML = i.highlightedCode),
                          q.hooks.run("after-highlight", i),
                          q.hooks.run("complete", i),
                          a && a.call(i.element);
                      }
                      if (
                        (q.hooks.run("before-sanity-check", i),
                        (s = i.element.parentElement) &&
                          "pre" === s.nodeName.toLowerCase() &&
                          !s.hasAttribute("tabindex") &&
                          s.setAttribute("tabindex", "0"),
                        !i.code)
                      )
                        return (
                          q.hooks.run("complete", i),
                          void (a && a.call(i.element))
                        );
                      q.hooks.run("before-highlight", i),
                        i.grammar
                          ? t && o.Worker
                            ? (((n = new Worker(q.filename)).onmessage =
                                function (e) {
                                  l(e.data);
                                }),
                              n.postMessage(
                                JSON.stringify({
                                  language: i.language,
                                  code: i.code,
                                  immediateClose: !0,
                                })
                              ))
                            : l(q.highlight(i.code, i.grammar, i.language))
                          : l(q.util.encode(i.code));
                    },
                    highlight: function (e, t, a) {
                      e = { code: e, grammar: t, language: a };
                      if ((q.hooks.run("before-tokenize", e), e.grammar))
                        return (
                          (e.tokens = q.tokenize(e.code, e.grammar)),
                          q.hooks.run("after-tokenize", e),
                          C.stringify(q.util.encode(e.tokens), e.language)
                        );
                      throw new Error(
                        'The language "' + e.language + '" has no grammar.'
                      );
                    },
                    tokenize: function (e, t) {
                      var a = t.rest;
                      if (a) {
                        for (var n in a) t[n] = a[n];
                        delete t.rest;
                      }
                      for (
                        var r = new u(),
                          s =
                            (O(r, r.head, e),
                            !(function e(t, a, n, r, s, i) {
                              for (var l in n)
                                if (n.hasOwnProperty(l) && n[l]) {
                                  var o = n[l];
                                  o = Array.isArray(o) ? o : [o];
                                  for (var u = 0; u < o.length; ++u) {
                                    if (i && i.cause == l + "," + u) return;
                                    for (
                                      var c,
                                        p = o[u],
                                        g = p.inside,
                                        d = !!p.lookbehind,
                                        m = !!p.greedy,
                                        h = p.alias,
                                        f =
                                          (m &&
                                            !p.pattern.global &&
                                            ((c = p.pattern
                                              .toString()
                                              .match(/[imsuy]*$/)[0]),
                                            (p.pattern = RegExp(
                                              p.pattern.source,
                                              c + "g"
                                            ))),
                                          p.pattern || p),
                                        k = r.next,
                                        b = s;
                                      k !== a.tail && !(i && b >= i.reach);
                                      b += k.value.length, k = k.next
                                    ) {
                                      var y = k.value;
                                      if (a.length > t.length) return;
                                      if (!(y instanceof C)) {
                                        var v,
                                          x = 1;
                                        if (m) {
                                          if (
                                            !(v = P(f, b, t, d)) ||
                                            v.index >= t.length
                                          )
                                            break;
                                          var w = v.index,
                                            F = v.index + v[0].length,
                                            A = b;
                                          for (A += k.value.length; A <= w; )
                                            (k = k.next), (A += k.value.length);
                                          if (
                                            ((A -= k.value.length),
                                            (b = A),
                                            k.value instanceof C)
                                          )
                                            continue;
                                          for (
                                            var j = k;
                                            j !== a.tail &&
                                            (A < F ||
                                              "string" == typeof j.value);
                                            j = j.next
                                          )
                                            x++, (A += j.value.length);
                                          x--,
                                            (y = t.slice(b, A)),
                                            (v.index -= b);
                                        } else if (!(v = P(f, 0, y, d)))
                                          continue;
                                        var w = v.index,
                                          $ = v[0],
                                          E = y.slice(0, w),
                                          S = y.slice(w + $.length),
                                          y = b + y.length,
                                          _ =
                                            (i && y > i.reach && (i.reach = y),
                                            k.prev),
                                          E =
                                            (E &&
                                              ((_ = O(a, _, E)),
                                              (b += E.length)),
                                            L(a, _, x),
                                            new C(
                                              l,
                                              g ? q.tokenize($, g) : $,
                                              h,
                                              $
                                            ));
                                        (k = O(a, _, E)),
                                          S && O(a, k, S),
                                          1 < x &&
                                            (($ = {
                                              cause: l + "," + u,
                                              reach: y,
                                            }),
                                            e(t, a, n, k.prev, b, $),
                                            i &&
                                              $.reach > i.reach &&
                                              (i.reach = $.reach));
                                      }
                                    }
                                  }
                                }
                            })(e, r, t, r.head, 0),
                            r),
                          i = [],
                          l = s.head.next;
                        l !== s.tail;

                      )
                        i.push(l.value), (l = l.next);
                      return i;
                    },
                    hooks: {
                      all: {},
                      add: function (e, t) {
                        var a = q.hooks.all;
                        (a[e] = a[e] || []), a[e].push(t);
                      },
                      run: function (e, t) {
                        var a = q.hooks.all[e];
                        if (a && a.length)
                          for (var n, r = 0; (n = a[r++]); ) n(t);
                      },
                    },
                    Token: C,
                  };
                function C(e, t, a, n) {
                  (this.type = e),
                    (this.content = t),
                    (this.alias = a),
                    (this.length = 0 | (n || "").length);
                }
                function P(e, t, a, n) {
                  e.lastIndex = t;
                  t = e.exec(a);
                  return (
                    t &&
                      n &&
                      t[1] &&
                      ((e = t[1].length),
                      (t.index += e),
                      (t[0] = t[0].slice(e))),
                    t
                  );
                }
                function u() {
                  var e = { value: null, prev: null, next: null },
                    t = { value: null, prev: e, next: null };
                  (e.next = t),
                    (this.head = e),
                    (this.tail = t),
                    (this.length = 0);
                }
                function O(e, t, a) {
                  var n = t.next,
                    a = { value: a, prev: t, next: n };
                  return (t.next = a), (n.prev = a), e.length++, a;
                }
                function L(e, t, a) {
                  for (var n = t.next, r = 0; r < a && n !== e.tail; r++)
                    n = n.next;
                  ((t.next = n).prev = t), (e.length -= r);
                }
                if (
                  ((o.Prism = q),
                  (C.stringify = function t(e, a) {
                    if ("string" == typeof e) return e;
                    var n;
                    if (Array.isArray(e))
                      return (
                        (n = ""),
                        e.forEach(function (e) {
                          n += t(e, a);
                        }),
                        n
                      );
                    var r,
                      s = {
                        type: e.type,
                        content: t(e.content, a),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: a,
                      },
                      e = e.alias,
                      i =
                        (e &&
                          (Array.isArray(e)
                            ? Array.prototype.push.apply(s.classes, e)
                            : s.classes.push(e)),
                        q.hooks.run("wrap", s),
                        "");
                    for (r in s.attributes)
                      i +=
                        " " +
                        r +
                        '="' +
                        (s.attributes[r] || "").replace(/"/g, "&quot;") +
                        '"';
                    return (
                      "<" +
                      s.tag +
                      ' class="' +
                      s.classes.join(" ") +
                      '"' +
                      i +
                      ">" +
                      s.content +
                      "</" +
                      s.tag +
                      ">"
                    );
                  }),
                  !o.document)
                )
                  return (
                    o.addEventListener &&
                      (q.disableWorkerMessageHandler ||
                        o.addEventListener(
                          "message",
                          function (e) {
                            var e = JSON.parse(e.data),
                              t = e.language,
                              a = e.code,
                              e = e.immediateClose;
                            o.postMessage(q.highlight(a, q.languages[t], t)),
                              e && o.close();
                          },
                          !1
                        )),
                    q
                  );
                var n,
                  e = q.util.currentScript();
                function r() {
                  q.manual || q.highlightAll();
                }
                return (
                  e &&
                    ((q.filename = e.src),
                    e.hasAttribute("data-manual") && (q.manual = !0)),
                  q.manual ||
                    ("loading" === (n = document.readyState) ||
                    ("interactive" === n && e && e.defer)
                      ? document.addEventListener("DOMContentLoaded", r)
                      : window.requestAnimationFrame
                      ? window.requestAnimationFrame(r)
                      : window.setTimeout(r, 16)),
                  q
                );
              })(
                "undefined" != typeof window
                  ? window
                  : "undefined" != typeof WorkerGlobalScope &&
                    self instanceof WorkerGlobalScope
                  ? self
                  : {}
              );
            void 0 !== r && r.exports && (r.exports = g),
              void 0 !== n && (n.Prism = g),
              (g.languages.markup = {
                comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
                prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
                doctype: {
                  pattern:
                    /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                  greedy: !0,
                  inside: {
                    "internal-subset": {
                      pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                      lookbehind: !0,
                      greedy: !0,
                      inside: null,
                    },
                    string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                    punctuation: /^<!|>$|[[\]]/,
                    "doctype-tag": /^DOCTYPE/i,
                    name: /[^\s<>'"]+/,
                  },
                },
                cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
                tag: {
                  pattern:
                    /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                  greedy: !0,
                  inside: {
                    tag: {
                      pattern: /^<\/?[^\s>\/]+/,
                      inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/,
                      },
                    },
                    "special-attr": [],
                    "attr-value": {
                      pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                      inside: {
                        punctuation: [
                          { pattern: /^=/, alias: "attr-equals" },
                          /"|'/,
                        ],
                      },
                    },
                    punctuation: /\/?>/,
                    "attr-name": {
                      pattern: /[^\s>\/]+/,
                      inside: { namespace: /^[^\s>\/:]+:/ },
                    },
                  },
                },
                entity: [
                  { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
                  /&#x?[\da-f]{1,8};/i,
                ],
              }),
              (g.languages.markup.tag.inside["attr-value"].inside.entity =
                g.languages.markup.entity),
              (g.languages.markup.doctype.inside["internal-subset"].inside =
                g.languages.markup),
              g.hooks.add("wrap", function (e) {
                "entity" === e.type &&
                  (e.attributes.title = e.content.replace(/&amp;/, "&"));
              }),
              Object.defineProperty(g.languages.markup.tag, "addInlined", {
                value: function (e, t) {
                  var a = {},
                    a =
                      ((a["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: g.languages[t],
                      }),
                      (a.cdata = /^<!\[CDATA\[|\]\]>$/i),
                      {
                        "included-cdata": {
                          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                          inside: a,
                        },
                      }),
                    t =
                      ((a["language-" + t] = {
                        pattern: /[\s\S]+/,
                        inside: g.languages[t],
                      }),
                      {});
                  (t[e] = {
                    pattern: RegExp(
                      /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                        /__/g,
                        function () {
                          return e;
                        }
                      ),
                      "i"
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: a,
                  }),
                    g.languages.insertBefore("markup", "cdata", t);
                },
              }),
              Object.defineProperty(g.languages.markup.tag, "addAttribute", {
                value: function (e, t) {
                  g.languages.markup.tag.inside["special-attr"].push({
                    pattern: RegExp(
                      /(^|["'\s])/.source +
                        "(?:" +
                        e +
                        ")" +
                        /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                      "i"
                    ),
                    lookbehind: !0,
                    inside: {
                      "attr-name": /^[^\s=]+/,
                      "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                          value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [t, "language-" + t],
                            inside: g.languages[t],
                          },
                          punctuation: [
                            { pattern: /^=/, alias: "attr-equals" },
                            /"|'/,
                          ],
                        },
                      },
                    },
                  });
                },
              }),
              (g.languages.html = g.languages.markup),
              (g.languages.mathml = g.languages.markup),
              (g.languages.svg = g.languages.markup),
              (g.languages.xml = g.languages.extend("markup", {})),
              (g.languages.ssml = g.languages.xml),
              (g.languages.atom = g.languages.xml),
              (g.languages.rss = g.languages.xml),
              (t =
                /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/),
              ((e = g).languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                  pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                  inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                      pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                      lookbehind: !0,
                      alias: "selector",
                    },
                    keyword: {
                      pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                      lookbehind: !0,
                    },
                  },
                },
                url: {
                  pattern: RegExp(
                    "\\burl\\((?:" +
                      t.source +
                      "|" +
                      /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                      ")\\)",
                    "i"
                  ),
                  greedy: !0,
                  inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                      pattern: RegExp("^" + t.source + "$"),
                      alias: "url",
                    },
                  },
                },
                selector: {
                  pattern: RegExp(
                    "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                      t.source +
                      ")*(?=\\s*\\{)"
                  ),
                  lookbehind: !0,
                },
                string: { pattern: t, greedy: !0 },
                property: {
                  pattern:
                    /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                  lookbehind: !0,
                },
                important: /!important\b/i,
                function: {
                  pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                  lookbehind: !0,
                },
                punctuation: /[(){};:,]/,
              }),
              (e.languages.css.atrule.inside.rest = e.languages.css),
              (t = e.languages.markup) &&
                (t.tag.addInlined("style", "css"),
                t.tag.addAttribute("style", "css")),
              (g.languages.clike = {
                comment: [
                  {
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    greedy: !0,
                  },
                  { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                ],
                string: {
                  pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  greedy: !0,
                },
                "class-name": {
                  pattern:
                    /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                  lookbehind: !0,
                  inside: { punctuation: /[.\\]/ },
                },
                keyword:
                  /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                boolean: /\b(?:false|true)\b/,
                function: /\b\w+(?=\()/,
                number:
                  /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/,
              }),
              (g.languages.javascript = g.languages.extend("clike", {
                "class-name": [
                  g.languages.clike["class-name"],
                  {
                    pattern:
                      /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                    lookbehind: !0,
                  },
                ],
                keyword: [
                  { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
                  {
                    pattern:
                      /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0,
                  },
                ],
                function:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: {
                  pattern: RegExp(
                    /(^|[^\w$])/.source +
                      "(?:" +
                      /NaN|Infinity/.source +
                      "|" +
                      /0[bB][01]+(?:_[01]+)*n?/.source +
                      "|" +
                      /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                      "|" +
                      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                      "|" +
                      /\d+(?:_\d+)*n/.source +
                      "|" +
                      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                        .source +
                      ")" +
                      /(?![\w$])/.source
                  ),
                  lookbehind: !0,
                },
                operator:
                  /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
              })),
              (g.languages.javascript["class-name"][0].pattern =
                /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
              g.languages.insertBefore("javascript", "keyword", {
                regex: {
                  pattern: RegExp(
                    /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/
                      .source +
                      /\//.source +
                      "(?:" +
                      /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
                        .source +
                      "|" +
                      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                        .source +
                      ")" +
                      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
                        .source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    "regex-source": {
                      pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                      lookbehind: !0,
                      alias: "language-regex",
                      inside: g.languages.regex,
                    },
                    "regex-delimiter": /^\/|\/$/,
                    "regex-flags": /^[a-z]+$/,
                  },
                },
                "function-variable": {
                  pattern:
                    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                  alias: "function",
                },
                parameter: [
                  {
                    pattern:
                      /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: !0,
                    inside: g.languages.javascript,
                  },
                  {
                    pattern:
                      /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: g.languages.javascript,
                  },
                  {
                    pattern:
                      /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: g.languages.javascript,
                  },
                  {
                    pattern:
                      /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: g.languages.javascript,
                  },
                ],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
              }),
              g.languages.insertBefore("javascript", "string", {
                hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
                "template-string": {
                  pattern:
                    /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                  greedy: !0,
                  inside: {
                    "template-punctuation": {
                      pattern: /^`|`$/,
                      alias: "string",
                    },
                    interpolation: {
                      pattern:
                        /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                      lookbehind: !0,
                      inside: {
                        "interpolation-punctuation": {
                          pattern: /^\$\{|\}$/,
                          alias: "punctuation",
                        },
                        rest: g.languages.javascript,
                      },
                    },
                    string: /[\s\S]+/,
                  },
                },
                "string-property": {
                  pattern:
                    /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                  lookbehind: !0,
                  greedy: !0,
                  alias: "property",
                },
              }),
              g.languages.insertBefore("javascript", "operator", {
                "literal-property": {
                  pattern:
                    /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                  lookbehind: !0,
                  alias: "property",
                },
              }),
              g.languages.markup &&
                (g.languages.markup.tag.addInlined("script", "javascript"),
                g.languages.markup.tag.addAttribute(
                  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                    .source,
                  "javascript"
                )),
              (g.languages.js = g.languages.javascript),
              void 0 !== g &&
                "undefined" != typeof document &&
                (Element.prototype.matches ||
                  (Element.prototype.matches =
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector),
                (o = {
                  js: "javascript",
                  py: "python",
                  rb: "ruby",
                  ps1: "powershell",
                  psm1: "powershell",
                  sh: "bash",
                  bat: "batch",
                  h: "c",
                  tex: "latex",
                }),
                (p =
                  "pre[data-src]:not([" +
                  (u = "data-src-status") +
                  '="loaded"]):not([' +
                  u +
                  '="' +
                  (c = "loading") +
                  '"])'),
                g.hooks.add("before-highlightall", function (e) {
                  e.selector += ", " + p;
                }),
                g.hooks.add("before-sanity-check", function (e) {
                  var r,
                    t,
                    a,
                    n,
                    s,
                    i,
                    l = e.element;
                  l.matches(p) &&
                    ((e.code = ""),
                    l.setAttribute(u, c),
                    ((r = l.appendChild(
                      document.createElement("CODE")
                    )).textContent = "Loading…"),
                    (t = l.getAttribute("data-src")),
                    "none" === (e = e.language) &&
                      ((a = (/\.(\w+)$/.exec(t) || [, "none"])[1]),
                      (e = o[a] || a)),
                    g.util.setLanguage(r, e),
                    g.util.setLanguage(l, e),
                    (a = g.plugins.autoloader) && a.loadLanguages(e),
                    (a = t),
                    (n = function (e) {
                      l.setAttribute(u, "loaded");
                      var t,
                        a,
                        n = (function (e) {
                          var t, a;
                          if (
                            (e = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(
                              e || ""
                            ))
                          )
                            return (
                              (t = Number(e[1])),
                              (a = e[2]),
                              (e = e[3]),
                              a ? (e ? [t, Number(e)] : [t, void 0]) : [t, t]
                            );
                        })(l.getAttribute("data-range"));
                      n &&
                        ((t = e.split(/\r\n?|\n/g)),
                        (a = n[0]),
                        (n = null == n[1] ? t.length : n[1]),
                        a < 0 && (a += t.length),
                        (a = Math.max(0, Math.min(a - 1, t.length))),
                        n < 0 && (n += t.length),
                        (n = Math.max(0, Math.min(n, t.length))),
                        (e = t.slice(a, n).join("\n")),
                        l.hasAttribute("data-start") ||
                          l.setAttribute("data-start", String(a + 1))),
                        (r.textContent = e),
                        g.highlightElement(r);
                    }),
                    (s = function (e) {
                      l.setAttribute(u, "failed"), (r.textContent = e);
                    }),
                    (i = new XMLHttpRequest()).open("GET", a, !0),
                    (i.onreadystatechange = function () {
                      4 == i.readyState &&
                        (i.status < 400 && i.responseText
                          ? n(i.responseText)
                          : 400 <= i.status
                          ? s(
                              "✖ Error " +
                                i.status +
                                " while fetching file: " +
                                i.statusText
                            )
                          : s("✖ Error: File does not exist or is empty"));
                    }),
                    i.send(null));
                }),
                (a = !(g.plugins.fileHighlight = {
                  highlight: function (e) {
                    for (
                      var t, a = (e || document).querySelectorAll(p), n = 0;
                      (t = a[n++]);

                    )
                      g.highlightElement(t);
                  },
                })),
                (g.fileHighlight = function () {
                  a ||
                    (console.warn(
                      "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
                    ),
                    (a = !0)),
                    g.plugins.fileHighlight.highlight.apply(this, arguments);
                }));
          }.call(this);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      {},
    ],
    4: [
      function (e, t, a) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("prismjs"));
        e("prismjs/plugins/autoloader/prism-autoloader"),
          (e = n.default),
          "undefined" != typeof prismJsComponents &&
            ((e.plugins.autoloader.languages_path = prismJsComponents),
            e.highlightAll());
      },
      {
        "@babel/runtime/helpers/interopRequireDefault": 1,
        prismjs: 3,
        "prismjs/plugins/autoloader/prism-autoloader": 2,
      },
    ],
  },
  {},
  [4]
);
