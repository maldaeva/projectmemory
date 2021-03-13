! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        f = d.toString,
        h = f.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var _ = function(e, t) {
            return new _.fn.init(e, t)
        },
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: "3.3.1",
        constructor: _,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (c && r && (_.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && _.isPlainObject(n) ? n : {}, a[t] = _.extend(c, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, _.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e)) && (!(t = i(e)) || "function" == typeof(n = d.call(t, "constructor") && t.constructor) && f.call(n) === h)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            y(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (w(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(x, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (w(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var S = function(e) {
        var t, n, r, i, o, a, s, l, c, u, d, f, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
            x = e.document,
            w = 0,
            S = 0,
            C = ae(),
            E = ae(),
            T = ae(),
            A = function(e, t) {
                return e === t && (d = !0), 0
            },
            k = {}.hasOwnProperty,
            j = [],
            D = j.pop,
            I = j.push,
            P = j.push,
            N = j.slice,
            L = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
            R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            U = new RegExp("^" + M + "*," + M + "*"),
            Q = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            W = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            $ = new RegExp(R),
            z = new RegExp("^" + H + "$"),
            V = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            G = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "пїЅ" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                f()
            },
            ie = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(j = N.call(x.childNodes), x.childNodes), j[x.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: j.length ? function(e, t) {
                    I.apply(e, N.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, c, u, d, p, v, y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
            if (!i && ((t ? t.ownerDocument || t : x) !== h && f(t), t = t || h, g)) {
                if (11 !== w && (d = J.exec(e)))
                    if (o = d[1]) {
                        if (9 === w) {
                            if (!(c = t.getElementById(o))) return r;
                            if (c.id === o) return r.push(c), r
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return r.push(c), r
                    } else {
                        if (d[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !T[e + " "] && (!m || !m.test(e))) {
                    if (1 !== w) y = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = _), s = (p = a(e)).length; s--;) p[s] = "#" + u + " " + ve(p[s]);
                        v = p.join(","), y = G.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return P.apply(r, y.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        u === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, r, i)
        }

        function ae() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function se(e) {
            return e[_] = !0, e
        }

        function le(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, f = oe.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : x;
                return a !== h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), x !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = le(function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Y.test(h.getElementsByClassName), n.getById = le(function(e) {
                    return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = Y.test(h.querySelectorAll)) && (le(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Y.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Y.test(p.compareDocumentPosition), b = t || Y.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === x && b(x, e) ? -1 : t === h || t.ownerDocument === x && b(x, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === h ? -1 : t === h ? 1 : i ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                    if (i === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ue(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
                }, h) : h
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && f(e), t = t.replace(W, "='$1']"), n.matchesSelector && g && !T[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return oe(t, h, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && f(e), b(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== h && f(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return u = null, e
            }, i = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = oe.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (h = (c = (u = (d = (f = m)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            u[e] = [w, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (c = (u = (d = (f = t)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && c[1]), !1 === b)
                                    for (;
                                        (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [w, b]), f !== t)););
                                return (b -= i) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[_] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = L(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(F, "$1"));
                        return r[_] ? se(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(Z, ee),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                    }),
                    lang: se(function(e) {
                        return z.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = fe(t);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = S++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var c, u, d, f = [w, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (u = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = u[o]) && c[0] === w && c[1] === s) return f[2] = c[2];
                                if (u[o] = f, f[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function _e(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function xe(e, t, n, r, i, o) {
            return r && !r[_] && (r = xe(r)), i && !i[_] && (i = xe(i, o)), se(function(o, a, s, l) {
                var c, u, d, f = [],
                    h = [],
                    p = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : _e(g, f, e, s, l),
                    v = n ? i || (o ? e : p || r) ? [] : a : m;
                if (n && n(m, v, s, l), r)
                    for (c = _e(v, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                            i(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && (c = i ? L(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                    }
                } else v = _e(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, l) : P.apply(a, v)
            })
        }

        function we(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = ye(function(e) {
                    return e === t
                }, s, !0), d = ye(function(e) {
                    return L(t, e) > -1
                }, s, !0), f = [function(e, n, r) {
                    var i = !a && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                    return t = null, i
                }]; l < o; l++)
                if (n = r.relative[e[l].type]) f = [ye(be(f), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                        return xe(l > 1 && be(f), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < i && we(e.slice(l, i)), i < o && we(e = e.slice(i)), i < o && ve(e))
                    }
                    f.push(n)
                } return be(f)
        }
        return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, l, c, u = E[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = r.preFilter; s;) {
                for (a in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = Q.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(F, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : E(e, l).slice(0)
        }, s = oe.compile = function(e, t) {
            var n, i = [],
                o = [],
                s = T[e + " "];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)(s = we(t[n]))[_] ? i.push(s) : o.push(s);
                (s = T(e, function(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, l, u) {
                            var d, p, m, v = 0,
                                y = "0",
                                b = o && [],
                                _ = [],
                                x = c,
                                S = o || i && r.find.TAG("*", u),
                                C = w += null == x ? 1 : Math.random() || .1,
                                E = S.length;
                            for (u && (c = a === h || a || u); y !== E && null != (d = S[y]); y++) {
                                if (i && d) {
                                    for (p = 0, a || d.ownerDocument === h || (f(d), s = !g); m = e[p++];)
                                        if (m(d, a || h, s)) {
                                            l.push(d);
                                            break
                                        } u && (w = C)
                                }
                                n && ((d = !m && d) && v--, o && b.push(d))
                            }
                            if (v += y, n && y !== v) {
                                for (p = 0; m = t[p++];) m(b, _, a, s);
                                if (o) {
                                    if (v > 0)
                                        for (; y--;) b[y] || _[y] || (_[y] = D.call(l));
                                    _ = _e(_)
                                }
                                P.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                            }
                            return u && (w = C, c = x), b
                        };
                    return n ? se(o) : o
                }(o, i))).selector = e
            }
            return s
        }, l = oe.select = function(e, t, n, i) {
            var o, l, c, u, d, f = "function" == typeof e && e,
                h = !i && a(e = f.selector || e);
            if (n = n || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);)
                    if ((d = r.find[u]) && (i = d(c.matches[0].replace(Z, ee), G.test(l[0].type) && ge(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = i.length && ve(l))) return P.apply(n, i), n;
                        break
                    }
            }
            return (f || s(e, h))(i, t, !g, n, !t || G.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(A).join("") === _, n.detectDuplicates = !!d, f(), n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(O, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    _.find = S, _.expr = S.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = S.uniqueSort, _.text = S.getText, _.isXMLDoc = S.isXML, _.contains = S.contains, _.escapeSelector = S.escape;
    var C = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && _(e).is(n)) break;
                    r.push(e)
                } return r
        },
        E = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        T = _.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? _.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (_.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
            return r > 1 ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && T.test(e) ? _(e) : e || [], !1).length
        }
    });
    var D, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), k.test(i[1]) && _.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, D = _(r);
    var P = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && _(e);
            if (!T.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(n, r) {
            var i = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), this.length > 1 && (N[e] || _.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function q(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return _.each(e.match(O) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : _.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            l = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        _.each(n, function(n, r) {
                            g(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var n;
                            (n = _.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? _.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, _.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _.Deferred(function(t) {
                            _.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? i ? c.call(e, a(o, n, M, i), a(o, n, H, i)) : (o++, c.call(e, a(o, n, M, i), a(o, n, H, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                        }
                                    },
                                    u = i ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (r !== H && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return _.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : M, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : M)), n[2][3].add(a(0, e, g(r) ? r : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, i) : i
                    }
                },
                o = {};
            return _.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = _.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (q(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            for (; n--;) q(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var B = _.Deferred();

    function F() {
        r.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), _.ready()
    }
    _.fn.ready = function(e) {
        return B.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || B.resolveWith(r, [_]))
        }
    }), _.ready.then = B.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(_.ready) : (r.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var U = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) U(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, g(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(_(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        Q = /^-ms-/,
        W = /-([a-z])/g;

    function $(e, t) {
        return t.toUpperCase()
    }

    function z(e) {
        return e.replace(Q, "ms-").replace(W, $)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function K() {
        this.expando = _.expando + K.uid++
    }
    K.uid = 1, K.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[z(t)] = n;
            else
                for (r in t) i[z(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in r ? [t] : t.match(O) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || _.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var X = new K,
        Y = new K,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return Y.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = z(r.slice(5)), Z(o, r, i[r]));
                    X.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Y.set(this, e)
            }) : U(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function() {
                    Y.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, _.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = _._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                _.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = _.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = X.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
        },
        ie = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function oe(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            u = (_.cssNumber[t] || "px" !== c && +l) && te.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) _.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, _.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
    }
    var ae = {};

    function se(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = ae[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = _.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ae[r] = i, i)
    }

    function le(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = X.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && re(r) && (i[o] = se(r))) : "none" !== n && (i[o] = "none", X.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    _.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function he(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? _.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
    var ge, me, ve = /<|&#?\w+;/;

    function ye(e, t, n, r, i) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) _.merge(f, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = fe[s] || fe._default, a.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            _.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", h = 0; o = f[h++];)
            if (r && _.inArray(o, r) > -1) i && i.push(o);
            else if (c = _.contains(o.ownerDocument, o), a = he(d.appendChild(o), "script"), c && pe(a), n)
            for (u = 0; o = a[u++];) de.test(o.type || "") && n.push(o);
        return d
    }
    ge = r.createDocumentFragment().appendChild(r.createElement("div")), (me = r.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), p.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;
    var be = r.documentElement,
        _e = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function Se() {
        return !0
    }

    function Ce() {
        return !1
    }

    function Ee() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function Te(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return _().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, i, r, n)
        })
    }
    _.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, h, p, g, m = X.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && _.find.matchesSelector(be, i), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(O) || [""]).length; c--;) h = g = (s = we.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = _.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, d = _.event.special[h] || {}, u = _.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && _.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), _.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, h, p, g, m = X.hasData(e) && X.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(O) || [""]).length; c--;)
                    if (h = g = (s = we.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = _.event.special[h] || {}, f = l[h = (r ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || _.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) _.event.remove(e, h + t[c], n, r, !0);
                _.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = _.event.fix(e),
                l = new Array(arguments.length),
                c = (X.get(this, "events") || {})[s.type] || [],
                u = _.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = _.event.handlers.call(this, s, c), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? _(i, this).index(c) > -1 : _.find(i, this, null, [c]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ee() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ee() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return A(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || _.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, r) {
            return Te(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Te(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e), a = X.set(t, o), c = o.events))
                for (i in delete a.handle, a.events = {}, c)
                    for (n = 0, r = c[i].length; n < r; n++) _.event.add(t, i, c[i][n]);
            Y.hasData(e) && (s = Y.access(e), l = _.extend({}, s), Y.set(t, l))
        }
    }

    function Oe(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, l, c, u, d = 0,
            f = e.length,
            h = f - 1,
            m = t[0],
            v = g(m);
        if (v || f > 1 && "string" == typeof m && !p.checkClone && je.test(m)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), Oe(o, t, n, r)
        });
        if (f && (o = (i = ye(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (l = (s = _.map(he(i, "script"), Pe)).length; d < f; d++) c = i, d !== h && (c = _.clone(c, !0, !0), l && _.merge(s, he(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument, _.map(s, Ne), d = 0; d < l; d++) c = s[d], de.test(c.type || "") && !X.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(c.src) : y(c.textContent.replace(De, ""), u, c))
        }
        return e
    }

    function Me(e, t, n) {
        for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || _.cleanData(he(r)), r.parentNode && (n && _.contains(r.ownerDocument, r) && pe(he(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ae, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, c, u = e.cloneNode(!0),
                d = _.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (a = he(u), r = 0, i = (o = he(e)).length; r < i; r++) s = o[r], l = a[r], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || he(e), a = a || he(u), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, u);
            return (a = he(u, "script")).length > 0 && pe(a, !d && he(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, r, i = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                        n[X.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Oe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Oe(this, arguments, function(t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(he(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, r = [], i = _(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), _(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        qe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Re = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (a = _.style(e, t)), !p.pixelBoxStyles() && He.test(a) && Re.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", a = 36 === u.offsetWidth || "absolute", be.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, l, c = r.createElement("div"),
            u = r.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        We = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ze = ["Webkit", "Moz", "ms"],
        Ve = r.createElement("div").style;

    function Ke(e) {
        var t = _.cssProps[e];
        return t || (t = _.cssProps[e] = function(e) {
            if (e in Ve) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                if ((e = ze[n] + t) in Ve) return e
        }(e) || e), t
    }

    function Xe(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ye(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += _.css(e, n + ne[a], !0, i)), r ? ("content" === n && (l -= _.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (l -= _.css(e, "border" + ne[a] + "Width", !0, i))) : (l += _.css(e, "padding" + ne[a], !0, i), "padding" !== n ? l += _.css(e, "border" + ne[a] + "Width", !0, i) : s += _.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))), l
    }

    function Je(e, t, n) {
        var r = qe(e),
            i = Be(e, t, r),
            o = "border-box" === _.css(e, "boxSizing", !1, r),
            a = o;
        if (He.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (p.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === _.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ye(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    function Ge(e, t, n, r, i) {
        return new Ge.prototype.init(e, t, n, r, i)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = z(t),
                    l = Qe.test(t),
                    c = e.style;
                if (l || (t = Ke(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = oe(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (_.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = z(t);
            return Qe.test(t) || (t = Ke(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in $e && (i = $e[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Ue.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, t, r) : ie(e, We, function() {
                    return Je(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = qe(e),
                    a = "border-box" === _.css(e, "boxSizing", !1, o),
                    s = r && Ye(e, t, r, a, o);
                return a && p.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ye(e, t, "border", !1, o) - .5)), s && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Xe(0, n, s)
            }
        }
    }), _.cssHooks.marginLeft = Fe(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Xe)
    }), _.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = qe(e), i = t.length; a < i; a++) o[t[a]] = _.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), _.Tween = Ge, Ge.prototype = {
        constructor: Ge,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
        }
    }, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = Ge.prototype.init, _.fx.step = {};
    var Ze, et, tt = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function rt() {
        et && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, _.fx.interval), _.fx.tick())
    }

    function it() {
        return e.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function ot(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function at(e, t, n) {
        for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function st(e, t, n) {
        var r, i, o = 0,
            a = st.prefilters.length,
            s = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = Ze || it(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || it(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = z(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = _.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(u, c.opts.specialEasing); o < a; o++)
            if (r = st.prefilters[o].call(c, e, u, c.opts)) return g(r.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        return _.map(u, at, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(st, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(O);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, l, c, u, d = "width" in t || "height" in t,
                    f = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && re(e),
                    m = X.get(e, "fxshow");
                for (r in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, f.always(function() {
                        f.always(function() {
                            a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (i = t[r], tt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            g = !0
                        }
                        h[r] = m && m[r] || _.style(e, r)
                    } if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(h))
                    for (r in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = X.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = _.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (f.done(function() {
                            p.display = c
                        }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                        display: c
                    }), o && (m.hidden = !g), g && le([e], !0), f.done(function() {
                        for (r in g || le([e]), X.remove(e, "fxshow"), h) _.style(e, r, h[r])
                    })), l = at(g ? m[r] : 0, r, f), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? st.prefilters.unshift(e) : st.prefilters.push(e)
            }
        }), _.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? _.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in _.fx.speeds ? r.duration = _.fx.speeds[r.duration] : r.duration = _.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                g(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue)
            }, r
        }, _.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = _.isEmptyObject(e),
                    o = _.speed(t, n, r),
                    a = function() {
                        var t = st(this, _.extend({}, e), o);
                        (i || X.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = _.timers,
                        a = X.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && nt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || _.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = X.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = _.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, _.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(e, t) {
            var n = _.fn[t];
            _.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, r, i)
            }
        }), _.each({
            slideDown: ot("show"),
            slideUp: ot("hide"),
            slideToggle: ot("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            _.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), _.timers = [], _.fx.tick = function() {
            var e, t = 0,
                n = _.timers;
            for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || _.fx.stop(), Ze = void 0
        }, _.fx.timer = function(e) {
            _.timers.push(e), _.fx.start()
        }, _.fx.interval = 13, _.fx.start = function() {
            et || (et = !0, rt())
        }, _.fx.stop = function() {
            et = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(t, n) {
            return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var lt, ct = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return U(this, _.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = _.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), lt = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ct[t] || _.find.attr;
        ct[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ct[a], ct[a] = i, i = null != n(e, t, r) ? a : null, ct[a] = o), i
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(O) || []).join(" ")
    }

    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function pt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return U(this, _.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, i = _.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, ht(this)))
            });
            if ((t = pt(e)).length)
                for (; n = this[l++];)
                    if (i = ht(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ft(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = pt(e)).length)
                for (; n = this[l++];)
                    if (i = ht(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = ft(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                _(this).toggleClass(e.call(this, n, ht(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = _(this), a = pt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = ht(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + ft(ht(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var gt = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = g(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, _(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = _.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : ft(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = _.makeArray(t), a = i.length; a--;)((r = i[a]).selected = _.inArray(_.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
            }
        }, p.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function(e) {
            e.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(t, n, i, o) {
            var a, s, l, c, u, f, h, p, v = [i || r],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = l = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !mt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : _.makeArray(n, [t]), h = _.event.special[y] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!o && !h.noBubble && !m(i)) {
                    for (c = h.delegateType || y, mt.test(c + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (i.ownerDocument || r) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (s = v[a++]) && !t.isPropagationStopped();) p = s, t.type = a > 1 ? c : h.bindType || y, (f = (X.get(s, "events") || {})[t.type] && X.get(s, "handle")) && f.apply(s, n), (f = u && s[u]) && f.apply && V(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !V(i) || u && g(i[y]) && !m(i) && ((l = i[u]) && (i[u] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), i[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), _.event.triggered = void 0, l && (i[u] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(r, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), p.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = X.access(r, t);
                i || r.addEventListener(e, n, !0), X.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = X.access(r, t) - 1;
                i ? X.access(r, t, i) : (r.removeEventListener(e, n, !0), X.remove(r, t))
            }
        }
    });
    var yt = e.location,
        bt = Date.now(),
        _t = /\?/;
    _.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n
    };
    var xt = /\[\]$/,
        wt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, r) {
        var i;
        if (Array.isArray(t)) _.each(t, function(t, i) {
            n || xt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) Et(e + "[" + i + "]", t[i], n, r)
    }
    _.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Et(n, e[n], t, i);
        return r.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(wt, "\r\n")
                }
            }).get()
        }
    });
    var Tt = /%20/g,
        At = /#.*$/,
        kt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Pt = {},
        Nt = {},
        Lt = "*/".concat("*"),
        Ot = r.createElement("a");

    function Mt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(O) || [];
            if (g(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Ht(e, t, n, r) {
        var i = {},
            o = e === Nt;

        function a(s) {
            var l;
            return i[s] = !0, _.each(e[s] || [], function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function qt(e, t) {
        var n, r, i = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && _.extend(!0, e, r), e
    }
    Ot.href = yt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, _.ajaxSettings), t) : qt(_.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(Pt),
        ajaxTransport: Mt(Nt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, l, c, u, d, f, h, p = _.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                b = p.statusCode || {},
                x = {},
                w = {},
                S = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = jt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || S;
                        return i && i.abort(t), E(0, t), this
                    }
                };
            if (v.promise(C), p.url = ((t || p.url || yt.href) + "").replace(It, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
                c = r.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Ot.protocol + "//" + Ot.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Ht(Pt, p, n, C), u) return C;
            for (f in (d = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Dt.test(p.type), o = p.url.replace(At, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Tt, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (_t.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(kt, "$1"), h = (_t.test(o) ? "&" : "?") + "_=" + bt++ + h), p.url = o + h), p.ifModified && (_.lastModified[o] && C.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && C.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || u)) return C.abort();
            if (S = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), i = Ht(Nt, p, n, C)) {
                if (C.readyState = 1, d && m.trigger("ajaxSend", [C, p]), u) return C;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, i.send(x, E)
                } catch (e) {
                    if (u) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(t, n, r, s) {
                var c, f, h, x, w, S = n;
                u || (u = !0, l && e.clearTimeout(l), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (x = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, C, r)), x = function(e, t, n, r) {
                    var i, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (i in c)
                                if ((s = i.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, x, C, c), c ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (_.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (_.etag[o] = w)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = x.state, f = x.data, c = !(h = x.error))) : (h = S, !t && S || (S = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || S) + "", c ? v.resolveWith(g, [f, S, C]) : v.rejectWith(g, [C, S, h]), C.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? f : h]), y.fireWith(g, [C, S]), d && (m.trigger("ajaxComplete", [C, p]), --_.active || _.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function(e) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Rt = {
            0: 200,
            1223: 204
        },
        Bt = _.ajaxSettings.xhr();
    p.cors = !!Bt && "withCredentials" in Bt, p.ajax = Bt = !!Bt, _.ajaxTransport(function(t) {
        var n, r;
        if (p.cors || Bt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(i, o) {
                t = _("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ft, Ut = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || _.expando + "_" + bt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || _.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? _(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ut.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((Ft = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), _.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = k.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = ye([e], t, a), a && a.length && _(a).remove(), _.merge([], o.childNodes)));
        var i, o, a
    }, _.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = ft(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && _.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, c = _.css(e, "position"),
                u = _(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (r = u.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), g(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0), i.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - _.css(r, "marginTop", !0),
                    left: t.left - i.left - _.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || be
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(r) {
            return U(this, function(e, r, i) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = Fe(p.pixelPosition, function(e, n) {
            if (n) return n = Be(e, t), He.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            _.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return U(this, function(t, n, i) {
                    var o;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? _.css(t, n, s) : _.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), _.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, i
    }, _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = A, _.isFunction = g, _.isWindow = m, _.camelCase = z, _.type = b, _.now = Date.now, _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Wt = e.jQuery,
        $t = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = $t), t && e.jQuery === _ && (e.jQuery = Wt), _
    }, t || (e.jQuery = e.$ = _), _
}),
function() {
    var e = new Image,
        t = document.querySelector("html").classList;
    e.onload = function() {
        if (e.width > 0 && e.height > 0) return t.add("webp");
        t.add("no-webp")
    }, e.onerror = function() {
        return t.add("no-webp")
    }, e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"
}(),
function(e, t) {
    var n = function(e, t, n) {
        "use strict";
        var r, i;
        if (function() {
                var t, n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (t in i = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in i || (i[t] = n[t])
            }(), !t || !t.getElementsByClassName) return {
            init: function() {},
            cfg: i,
            noSupport: !0
        };
        var o = t.documentElement,
            a = e.HTMLPictureElement,
            s = "addEventListener",
            l = "getAttribute",
            c = e[s].bind(e),
            u = e.setTimeout,
            d = e.requestAnimationFrame || u,
            f = e.requestIdleCallback,
            h = /^picture$/i,
            p = ["load", "error", "lazyincluded", "_lazyloaded"],
            g = {},
            m = Array.prototype.forEach,
            v = function(e, t) {
                return g[t] || (g[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), g[t].test(e[l]("class") || "") && g[t]
            },
            y = function(e, t) {
                v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
            },
            b = function(e, t) {
                var n;
                (n = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
            },
            _ = function(e, t, n) {
                var r = n ? s : "removeEventListener";
                n && _(e, t), p.forEach(function(n) {
                    e[r](n, t)
                })
            },
            x = function(e, n, i, o, a) {
                var s = t.createEvent("Event");
                return i || (i = {}), i.instance = r, s.initEvent(n, !o, !a), s.detail = i, e.dispatchEvent(s), s
            },
            w = function(t, n) {
                var r;
                !a && (r = e.picturefill || i.pf) ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src), r({
                    reevaluate: !0,
                    elements: [t]
                })) : n && n.src && (t.src = n.src)
            },
            S = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            C = function(e, t, n) {
                for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            },
            E = function() {
                var e, n, r = [],
                    i = [],
                    o = r,
                    a = function() {
                        var t = o;
                        for (o = r.length ? i : r, e = !0, n = !1; t.length;) t.shift()();
                        e = !1
                    },
                    s = function(r, i) {
                        e && !i ? r.apply(this, arguments) : (o.push(r), n || (n = !0, (t.hidden ? u : d)(a)))
                    };
                return s._lsFlush = a, s
            }(),
            T = function(e, t) {
                return t ? function() {
                    E(e)
                } : function() {
                    var t = this,
                        n = arguments;
                    E(function() {
                        e.apply(t, n)
                    })
                }
            },
            A = function(e) {
                var t, r = 0,
                    o = i.throttleDelay,
                    a = i.ricTimeout,
                    s = function() {
                        t = !1, r = n.now(), e()
                    },
                    l = f && a > 49 ? function() {
                        f(s, {
                            timeout: a
                        }), a !== i.ricTimeout && (a = i.ricTimeout)
                    } : T(function() {
                        u(s)
                    }, !0);
                return function(e) {
                    var i;
                    (e = !0 === e) && (a = 33), t || (t = !0, (i = o - (n.now() - r)) < 0 && (i = 0), e || i < 9 ? l() : u(l, i))
                }
            },
            k = function(e) {
                var t, r, i = function() {
                        t = null, e()
                    },
                    o = function() {
                        var e = n.now() - r;
                        e < 99 ? u(o, 99 - e) : (f || i)(i)
                    };
                return function() {
                    r = n.now(), t || (t = u(o, 99))
                }
            },
            j = function() {
                var a, f, p, g, C, j, I, P, N, L, O, M, H = /^img$/i,
                    q = /^iframe$/i,
                    R = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                    B = 0,
                    F = 0,
                    U = -1,
                    Q = function(e) {
                        F--, (!e || F < 0 || !e.target) && (F = 0)
                    },
                    W = function(e) {
                        return null == M && (M = "hidden" == S(t.body, "visibility")), M || !("hidden" == S(e.parentNode, "visibility") && "hidden" == S(e, "visibility"))
                    },
                    $ = function(e, n) {
                        var r, i = e,
                            a = W(e);
                        for (P -= n, O += n, N -= n, L += n; a && (i = i.offsetParent) && i != t.body && i != o;)(a = (S(i, "opacity") || 1) > 0) && "visible" != S(i, "overflow") && (r = i.getBoundingClientRect(), a = L > r.left && N < r.right && O > r.top - 1 && P < r.bottom + 1);
                        return a
                    },
                    z = function() {
                        var e, n, s, c, u, d, h, p, m, v, y, b, _ = r.elements;
                        if ((g = i.loadMode) && F < 8 && (e = _.length)) {
                            for (n = 0, U++; n < e; n++)
                                if (_[n] && !_[n]._lazyRace)
                                    if (!R || r.prematureUnveil && r.prematureUnveil(_[n])) Z(_[n]);
                                    else if ((p = _[n][l]("data-expand")) && (d = 1 * p) || (d = B), v || (v = !i.expand || i.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : i.expand, r._defEx = v, y = v * i.expFactor, b = i.hFac, M = null, B < y && F < 1 && U > 2 && g > 2 && !t.hidden ? (B = y, U = 0) : B = g > 1 && U > 1 && F < 6 ? v : 0), m !== d && (j = innerWidth + d * b, I = innerHeight + d, h = -1 * d, m = d), s = _[n].getBoundingClientRect(), (O = s.bottom) >= h && (P = s.top) <= I && (L = s.right) >= h * b && (N = s.left) <= j && (O || L || N || P) && (i.loadHidden || W(_[n])) && (f && F < 3 && !p && (g < 3 || U < 4) || $(_[n], d))) {
                                if (Z(_[n]), u = !0, F > 9) break
                            } else !u && f && !c && F < 4 && U < 4 && g > 2 && (a[0] || i.preloadAfterLoad) && (a[0] || !p && (O || L || N || P || "auto" != _[n][l](i.sizesAttr))) && (c = a[0] || _[n]);
                            c && !u && Z(c)
                        }
                    },
                    V = A(z),
                    K = function(e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (Q(e), y(t, i.loadedClass), b(t, i.loadingClass), _(t, Y), x(t, "lazyloaded"))
                    },
                    X = T(K),
                    Y = function(e) {
                        X({
                            target: e.target
                        })
                    },
                    J = function(e) {
                        var t, n = e[l](i.srcsetAttr);
                        (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                    },
                    G = T(function(e, t, n, r, o) {
                        var a, s, c, d, f, g;
                        (f = x(e, "lazybeforeunveil", t)).defaultPrevented || (r && (n ? y(e, i.autosizesClass) : e.setAttribute("sizes", r)), s = e[l](i.srcsetAttr), a = e[l](i.srcAttr), o && (c = e.parentNode, d = c && h.test(c.nodeName || "")), g = t.firesLoad || "src" in e && (s || a || d), f = {
                            target: e
                        }, y(e, i.loadingClass), g && (clearTimeout(p), p = u(Q, 2500), _(e, Y, !0)), d && m.call(c.getElementsByTagName("source"), J), s ? e.setAttribute("srcset", s) : a && !d && (q.test(e.nodeName) ? function(e, t) {
                            try {
                                e.contentWindow.location.replace(t)
                            } catch (n) {
                                e.src = t
                            }
                        }(e, a) : e.src = a), o && (s || d) && w(e, {
                            src: a
                        })), e._lazyRace && delete e._lazyRace, b(e, i.lazyClass), E(function() {
                            var t = e.complete && e.naturalWidth > 1;
                            g && !t || (t && y(e, "ls-is-cached"), K(f), e._lazyCache = !0, u(function() {
                                "_lazyCache" in e && delete e._lazyCache
                            }, 9)), "lazy" == e.loading && F--
                        }, !0)
                    }),
                    Z = function(e) {
                        if (!e._lazyRace) {
                            var t, n = H.test(e.nodeName),
                                r = n && (e[l](i.sizesAttr) || e[l]("sizes")),
                                o = "auto" == r;
                            (!o && f || !n || !e[l]("src") && !e.srcset || e.complete || v(e, i.errorClass) || !v(e, i.lazyClass)) && (t = x(e, "lazyunveilread").detail, o && D.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, F++, G(e, t, o, r, n))
                        }
                    },
                    ee = k(function() {
                        i.loadMode = 3, V()
                    }),
                    te = function() {
                        3 == i.loadMode && (i.loadMode = 2), ee()
                    },
                    ne = function() {
                        if (!f) {
                            if (n.now() - C < 999) return void u(ne, 999);
                            f = !0, i.loadMode = 3, V(), c("scroll", te, !0)
                        }
                    };
                return {
                    _: function() {
                        C = n.now(), r.elements = t.getElementsByClassName(i.lazyClass), a = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass), c("scroll", V, !0), c("resize", V, !0), c("pageshow", function(e) {
                            if (e.persisted) {
                                var n = t.querySelectorAll("." + i.loadingClass);
                                n.length && n.forEach && d(function() {
                                    n.forEach(function(e) {
                                        e.complete && Z(e)
                                    })
                                })
                            }
                        }), e.MutationObserver ? new MutationObserver(V).observe(o, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (o[s]("DOMNodeInserted", V, !0), o[s]("DOMAttrModified", V, !0), setInterval(V, 999)), c("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                            t[s](e, V, !0)
                        }), /d$|^c/.test(t.readyState) ? ne() : (c("load", ne), t[s]("DOMContentLoaded", V), u(ne, 2e4)), r.elements.length ? (z(), E._lsFlush()) : V()
                    },
                    checkElems: V,
                    unveil: Z,
                    _aLSL: te
                }
            }(),
            D = function() {
                var e, n = T(function(e, t, n, r) {
                        var i, o, a;
                        if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), h.test(t.nodeName || ""))
                            for (i = t.getElementsByTagName("source"), o = 0, a = i.length; o < a; o++) i[o].setAttribute("sizes", r);
                        n.detail.dataAttr || w(e, n.detail)
                    }),
                    r = function(e, t, r) {
                        var i, o = e.parentNode;
                        o && (r = C(e, o, r), (i = x(e, "lazybeforesizes", {
                            width: r,
                            dataAttr: !!t
                        })).defaultPrevented || (r = i.detail.width) && r !== e._lazysizesWidth && n(e, o, i, r))
                    },
                    o = k(function() {
                        var t, n = e.length;
                        if (n)
                            for (t = 0; t < n; t++) r(e[t])
                    });
                return {
                    _: function() {
                        e = t.getElementsByClassName(i.autosizesClass), c("resize", o)
                    },
                    checkElems: o,
                    updateElem: r
                }
            }(),
            I = function() {
                !I.i && t.getElementsByClassName && (I.i = !0, D._(), j._())
            };
        return u(function() {
            i.init && I()
        }), r = {
            cfg: i,
            autoSizer: D,
            loader: j,
            init: I,
            uP: w,
            aC: y,
            rC: b,
            hC: v,
            fire: x,
            gW: C,
            rAF: E
        }
    }(e, e.document, Date);
    e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}("undefined" != typeof window ? window : {}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach(function(t) {
                var r, i, o;
                r = e, o = n[i = t], i in r ? Object.defineProperty(r, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[i] = o
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = "transitionend";
    var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                r = t(e).css("transition-delay"),
                i = parseFloat(n),
                o = parseFloat(r);
            return i || o ? (n = n.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(r))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var i = n[r],
                        o = t[r],
                        a = o && l.isElement(o) ? "element" : (s = o, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(i).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + i + '".')
                } var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    l.jQueryDetection(), t.fn.emulateTransitionEnd = function(e) {
        var n = this,
            r = !1;
        return t(this).one(l.TRANSITION_END, function() {
            r = !0
        }), setTimeout(function() {
            r || l.triggerTransitionEnd(n)
        }, e), this
    }, t.event.special[l.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "alert",
        u = "bs.alert",
        d = "." + u,
        f = t.fn[c],
        h = {
            CLOSE: "close" + d,
            CLOSED: "closed" + d,
            CLICK_DATA_API: "click" + d + ".data-api"
        },
        p = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function() {
                t.removeData(this._element, u), this._element = null
            }, n._getRootElement = function(e) {
                var n = l.getSelectorFromElement(e),
                    r = !1;
                return n && (r = document.querySelector(n)), r || t(e).closest(".alert")[0]
            }, n._triggerCloseEvent = function(e) {
                var n = t.Event(h.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function(e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var r = l.getTransitionDurationFromElement(e);
                    t(e).one(l.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(r)
                } else this._destroyElement(e)
            }, n._destroyElement = function(e) {
                t(e).detach().trigger(h.CLOSED).remove()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        i = r.data(u);
                    i || (i = new e(this), r.data(u, i)), "close" === n && i[n](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), e
        }();
    t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), t.fn[c] = p._jQueryInterface, t.fn[c].Constructor = p, t.fn[c].noConflict = function() {
        return t.fn[c] = f, p._jQueryInterface
    };
    var g = "button",
        m = "bs.button",
        v = "." + m,
        y = ".data-api",
        b = t.fn[g],
        _ = "active",
        x = '[data-toggle^="button"]',
        w = 'input:not([type="hidden"])',
        S = ".btn",
        C = {
            CLICK_DATA_API: "click" + v + y,
            FOCUS_BLUR_DATA_API: "focus" + v + y + " blur" + v + y,
            LOAD_DATA_API: "load" + v + y
        },
        E = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function() {
                var e = !0,
                    n = !0,
                    r = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (r) {
                    var i = this._element.querySelector(w);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(_)) e = !1;
                            else {
                                var o = r.querySelector(".active");
                                o && t(o).removeClass(_)
                            }
                        else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(_) && (e = !1) : e = !1;
                        e && (i.checked = !this._element.classList.contains(_), t(i).trigger("change")), i.focus(), n = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), e && t(this._element).toggleClass(_))
            }, n.dispose = function() {
                t.removeData(this._element, m), this._element = null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(m);
                    r || (r = new e(this), t(this).data(m, r)), "toggle" === n && r[n]()
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), e
        }();
    t(document).on(C.CLICK_DATA_API, x, function(e) {
        var n = e.target;
        if (t(n).hasClass("btn") || (n = t(n).closest(S)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
        else {
            var r = n.querySelector(w);
            if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
            E._jQueryInterface.call(t(n), "toggle")
        }
    }).on(C.FOCUS_BLUR_DATA_API, x, function(e) {
        var n = t(e.target).closest(S)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t(window).on(C.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var r = e[t],
                i = r.querySelector(w);
            i.checked || i.hasAttribute("checked") ? r.classList.add(_) : r.classList.remove(_)
        }
        for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
            var s = e[o];
            "true" === s.getAttribute("aria-pressed") ? s.classList.add(_) : s.classList.remove(_)
        }
    }), t.fn[g] = E._jQueryInterface, t.fn[g].Constructor = E, t.fn[g].noConflict = function() {
        return t.fn[g] = b, E._jQueryInterface
    };
    var T = "carousel",
        A = "bs.carousel",
        k = "." + A,
        j = ".data-api",
        D = t.fn[T],
        I = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        P = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        N = "next",
        L = "prev",
        O = {
            SLIDE: "slide" + k,
            SLID: "slid" + k,
            KEYDOWN: "keydown" + k,
            MOUSEENTER: "mouseenter" + k,
            MOUSELEAVE: "mouseleave" + k,
            TOUCHSTART: "touchstart" + k,
            TOUCHMOVE: "touchmove" + k,
            TOUCHEND: "touchend" + k,
            POINTERDOWN: "pointerdown" + k,
            POINTERUP: "pointerup" + k,
            DRAG_START: "dragstart" + k,
            LOAD_DATA_API: "load" + k + j,
            CLICK_DATA_API: "click" + k + j
        },
        M = "active",
        H = ".active.carousel-item",
        q = ".carousel-indicators",
        R = {
            TOUCH: "touch",
            PEN: "pen"
        },
        B = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(q), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function() {
                this._isSliding || this._slide(N)
            }, n.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(L)
            }, n.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(H);
                var r = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(O.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (r === e) return this.pause(), void this.cycle();
                        var i = r < e ? N : L;
                        this._slide(i, this._items[e])
                    }
            }, n.dispose = function() {
                t(this._element).off(k), t.removeData(this._element, A), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(e) {
                return e = a({}, I, {}, e), l.typeCheckConfig(T, e, P), e
            }, n._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(O.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(O.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(O.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && R[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        r = function(t) {
                            e._pointerEvent && R[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(".carousel-item img")).on(O.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(O.POINTERDOWN, function(e) {
                        return n(e)
                    }), t(this._element).on(O.POINTERUP, function(e) {
                        return r(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(O.TOUCHSTART, function(e) {
                        return n(e)
                    }), t(this._element).on(O.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), t(this._element).on(O.TOUCHEND, function(e) {
                        return r(e)
                    }))
                }
            }, n._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function(e, t) {
                var n = e === N,
                    r = e === L,
                    i = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                var a = (i + (e === L ? -1 : 1)) % this._items.length;
                return -1 == a ? this._items[this._items.length - 1] : this._items[a]
            }, n._triggerSlideEvent = function(e, n) {
                var r = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(H)),
                    o = t.Event(O.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: i,
                        to: r
                    });
                return t(this._element).trigger(o), o
            }, n._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(M);
                    var r = this._indicatorsElement.children[this._getItemIndex(e)];
                    r && t(r).addClass(M)
                }
            }, n._slide = function(e, n) {
                var r, i, o, a = this,
                    s = this._element.querySelector(H),
                    c = this._getItemIndex(s),
                    u = n || s && this._getItemByDirection(e, s),
                    d = this._getItemIndex(u),
                    f = Boolean(this._interval);
                if (o = e === N ? (r = "carousel-item-left", i = "carousel-item-next", "left") : (r = "carousel-item-right", i = "carousel-item-prev", "right"), u && t(u).hasClass(M)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(u);
                    var h = t.Event(O.SLID, {
                        relatedTarget: u,
                        direction: o,
                        from: c,
                        to: d
                    });
                    if (t(this._element).hasClass("slide")) {
                        t(u).addClass(i), l.reflow(u), t(s).addClass(r), t(u).addClass(r);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = l.getTransitionDurationFromElement(s);
                        t(s).one(l.TRANSITION_END, function() {
                            t(u).removeClass(r + " " + i).addClass(M), t(s).removeClass(M + " " + i + " " + r), a._isSliding = !1, setTimeout(function() {
                                return t(a._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(s).removeClass(M), t(u).addClass(M), this._isSliding = !1, t(this._element).trigger(h);
                    f && this.cycle()
                }
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(A),
                        i = a({}, I, {}, t(this).data());
                    "object" == typeof n && (i = a({}, i, {}, n));
                    var o = "string" == typeof n ? n : i.slide;
                    if (r || (r = new e(this, i), t(this).data(A, r)), "number" == typeof n) r.to(n);
                    else if ("string" == typeof o) {
                        if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
                        r[o]()
                    } else i.interval && i.ride && (r.pause(), r.cycle())
                })
            }, e._dataApiClickHandler = function(n) {
                var r = l.getSelectorFromElement(this);
                if (r) {
                    var i = t(r)[0];
                    if (i && t(i).hasClass("carousel")) {
                        var o = a({}, t(i).data(), {}, t(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (o.interval = !1), e._jQueryInterface.call(t(i), o), s && t(i).data(A).to(s), n.preventDefault()
                    }
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return I
                }
            }]), e
        }();
    t(document).on(O.CLICK_DATA_API, "[data-slide], [data-slide-to]", B._dataApiClickHandler), t(window).on(O.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, r = e.length; n < r; n++) {
            var i = t(e[n]);
            B._jQueryInterface.call(i, i.data())
        }
    }), t.fn[T] = B._jQueryInterface, t.fn[T].Constructor = B, t.fn[T].noConflict = function() {
        return t.fn[T] = D, B._jQueryInterface
    };
    var F = "collapse",
        U = "bs.collapse",
        Q = "." + U,
        W = t.fn[F],
        $ = {
            toggle: !0,
            parent: ""
        },
        z = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        V = {
            SHOW: "show" + Q,
            SHOWN: "shown" + Q,
            HIDE: "hide" + Q,
            HIDDEN: "hidden" + Q,
            CLICK_DATA_API: "click" + Q + ".data-api"
        },
        K = "show",
        X = "collapse",
        Y = "collapsing",
        J = "collapsed",
        G = '[data-toggle="collapse"]',
        Z = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(G)), r = 0, i = n.length; r < i; r++) {
                    var o = n[r],
                        a = l.getSelectorFromElement(o),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                            return t === e
                        });
                    null !== a && 0 < s.length && (this._selector = a, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function() {
                t(this._element).hasClass(K) ? this.hide() : this.show()
            }, n.show = function() {
                var n, r, i = this;
                if (!(this._isTransitioning || t(this._element).hasClass(K) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(X)
                    })).length && (n = null), n && (r = t(n).not(this._selector).data(U)) && r._isTransitioning))) {
                    var o = t.Event(V.SHOW);
                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), r || t(n).data(U, null));
                        var a = this._getDimension();
                        t(this._element).removeClass(X).addClass(Y), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(J).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            c = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, function() {
                            t(i._element).removeClass(Y).addClass(X).addClass(K), i._element.style[a] = "", i.setTransitioning(!1), t(i._element).trigger(V.SHOWN)
                        }).emulateTransitionEnd(c), this._element.style[a] = this._element[s] + "px"
                    }
                }
            }, n.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(K)) {
                    var n = t.Event(V.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var r = this._getDimension();
                        this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", l.reflow(this._element), t(this._element).addClass(Y).removeClass(X).removeClass(K);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var a = this._triggerArray[o],
                                    s = l.getSelectorFromElement(a);
                                null !== s && (t([].slice.call(document.querySelectorAll(s))).hasClass(K) || t(a).addClass(J).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[r] = "";
                        var c = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(Y).addClass(X).trigger(V.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function(e) {
                this._isTransitioning = e
            }, n.dispose = function() {
                t.removeData(this._element, U), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(e) {
                return (e = a({}, $, {}, e)).toggle = Boolean(e.toggle), l.typeCheckConfig(F, e, z), e
            }, n._getDimension = function() {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function() {
                var n, r = this;
                l.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(n.querySelectorAll(i));
                return t(o).each(function(t, n) {
                    r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(e, n) {
                var r = t(e).hasClass(K);
                n.length && t(n).toggleClass(J, !r).attr("aria-expanded", r)
            }, e._getTargetFromElement = function(e) {
                var t = l.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        i = r.data(U),
                        o = a({}, $, {}, r.data(), {}, "object" == typeof n && n ? n : {});
                    if (!i && o.toggle && /show|hide/.test(n) && (o.toggle = !1), i || (i = new e(this, o), r.data(U, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return $
                }
            }]), e
        }();
    t(document).on(V.CLICK_DATA_API, G, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            r = l.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(r));
        t(i).each(function() {
            var e = t(this),
                r = e.data(U) ? "toggle" : n.data();
            Z._jQueryInterface.call(e, r)
        })
    }), t.fn[F] = Z._jQueryInterface, t.fn[F].Constructor = Z, t.fn[F].noConflict = function() {
        return t.fn[F] = W, Z._jQueryInterface
    };
    var ee = "dropdown",
        te = "bs.dropdown",
        ne = "." + te,
        re = ".data-api",
        ie = t.fn[ee],
        oe = new RegExp("38|40|27"),
        ae = {
            HIDE: "hide" + ne,
            HIDDEN: "hidden" + ne,
            SHOW: "show" + ne,
            SHOWN: "shown" + ne,
            CLICK: "click" + ne,
            CLICK_DATA_API: "click" + ne + re,
            KEYDOWN_DATA_API: "keydown" + ne + re,
            KEYUP_DATA_API: "keyup" + ne + re
        },
        se = "disabled",
        le = "show",
        ce = "dropdown-menu-right",
        ue = '[data-toggle="dropdown"]',
        de = ".dropdown-menu",
        fe = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        he = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        pe = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var r = e.prototype;
            return r.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(se)) {
                    var n = t(this._menu).hasClass(le);
                    e._clearMenus(), n || this.show(!0)
                }
            }, r.show = function(r) {
                if (void 0 === r && (r = !1), !(this._element.disabled || t(this._element).hasClass(se) || t(this._menu).hasClass(le))) {
                    var i = {
                            relatedTarget: this._element
                        },
                        o = t.Event(ae.SHOW, i),
                        a = e._getParentFromElement(this._element);
                    if (t(a).trigger(o), !o.isDefaultPrevented()) {
                        if (!this._inNavbar && r) {
                            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var s = this._element;
                            "parent" === this._config.reference ? s = a : l.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(a).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === t(a).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(le), t(a).toggleClass(le).trigger(t.Event(ae.SHOWN, i))
                    }
                }
            }, r.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(se) && t(this._menu).hasClass(le)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        r = t.Event(ae.HIDE, n),
                        i = e._getParentFromElement(this._element);
                    t(i).trigger(r), r.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass(le), t(i).toggleClass(le).trigger(t.Event(ae.HIDDEN, n)))
                }
            }, r.dispose = function() {
                t.removeData(this._element, te), t(this._element).off(ne), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, r.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, r._addEventListeners = function() {
                var e = this;
                t(this._element).on(ae.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, r._getConfig = function(e) {
                return e = a({}, this.constructor.Default, {}, t(this._element).data(), {}, e), l.typeCheckConfig(ee, e, this.constructor.DefaultType), e
            }, r._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(de))
                }
                return this._menu
            }, r._getPlacement = function() {
                var e = t(this._element.parentNode),
                    n = "bottom-start";
                return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(ce) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(ce) && (n = "bottom-end"), n
            }, r._detectNavbar = function() {
                return 0 < t(this._element).closest(".navbar").length
            }, r._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, r._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), a({}, e, {}, this._config.popperConfig)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(te);
                    if (r || (r = new e(this, "object" == typeof n ? n : null), t(this).data(te, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, e._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var r = [].slice.call(document.querySelectorAll(ue)), i = 0, o = r.length; i < o; i++) {
                        var a = e._getParentFromElement(r[i]),
                            s = t(r[i]).data(te),
                            l = {
                                relatedTarget: r[i]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), s) {
                            var c = s._menu;
                            if (t(a).hasClass(le) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
                                var u = t.Event(ae.HIDE, l);
                                t(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), r[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), t(c).removeClass(le), t(a).removeClass(le).trigger(t.Event(ae.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = l.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(de).length)) : oe.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(se))) {
                    var r = e._getParentFromElement(this),
                        i = t(r).hasClass(le);
                    if (i || 27 !== n.which)
                        if (i && (!i || 27 !== n.which && 32 !== n.which)) {
                            var o = [].slice.call(r.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                                return t(e).is(":visible")
                            });
                            if (0 !== o.length) {
                                var a = o.indexOf(n.target);
                                38 === n.which && 0 < a && a--, 40 === n.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                            }
                        } else {
                            if (27 === n.which) {
                                var s = r.querySelector(ue);
                                t(s).trigger("focus")
                            }
                            t(this).trigger("click")
                        }
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return fe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return he
                }
            }]), e
        }();
    t(document).on(ae.KEYDOWN_DATA_API, ue, pe._dataApiKeydownHandler).on(ae.KEYDOWN_DATA_API, de, pe._dataApiKeydownHandler).on(ae.CLICK_DATA_API + " " + ae.KEYUP_DATA_API, pe._clearMenus).on(ae.CLICK_DATA_API, ue, function(e) {
        e.preventDefault(), e.stopPropagation(), pe._jQueryInterface.call(t(this), "toggle")
    }).on(ae.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), t.fn[ee] = pe._jQueryInterface, t.fn[ee].Constructor = pe, t.fn[ee].noConflict = function() {
        return t.fn[ee] = ie, pe._jQueryInterface
    };
    var ge = "modal",
        me = "bs.modal",
        ve = "." + me,
        ye = t.fn[ge],
        be = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        _e = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        xe = {
            HIDE: "hide" + ve,
            HIDE_PREVENTED: "hidePrevented" + ve,
            HIDDEN: "hidden" + ve,
            SHOW: "show" + ve,
            SHOWN: "shown" + ve,
            FOCUSIN: "focusin" + ve,
            RESIZE: "resize" + ve,
            CLICK_DISMISS: "click.dismiss" + ve,
            KEYDOWN_DISMISS: "keydown.dismiss" + ve,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ve,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ve,
            CLICK_DATA_API: "click" + ve + ".data-api"
        },
        we = "modal-open",
        Se = "fade",
        Ce = "show",
        Ee = "modal-static",
        Te = ".modal-dialog",
        Ae = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ke = ".sticky-top",
        je = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Te), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(Se) && (this._isTransitioning = !0);
                    var r = t.Event(xe.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(xe.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                        return n.hide(e)
                    }), t(this._dialog).on(xe.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(xe.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var r = t.Event(xe.HIDE);
                    if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = t(this._element).hasClass(Se);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(xe.FOCUSIN), t(this._element).removeClass(Ce), t(this._element).off(xe.CLICK_DISMISS), t(this._dialog).off(xe.MOUSEDOWN_DISMISS), i) {
                            var o = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(ve)
                }), t(document).off(xe.FOCUSIN), t.removeData(this._element, me), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(e) {
                return e = a({}, be, {}, e), l.typeCheckConfig(ge, e, _e), e
            }, n._triggerBackdropTransition = function() {
                var e = this;
                if ("static" === this._config.backdrop) {
                    var n = t.Event(xe.HIDE_PREVENTED);
                    if (t(this._element).trigger(n), n.defaultPrevented) return;
                    this._element.classList.add(Ee);
                    var r = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, function() {
                        e._element.classList.remove(Ee)
                    }).emulateTransitionEnd(r), this._element.focus()
                } else this.hide()
            }, n._showElement = function(e) {
                var n = this,
                    r = t(this._element).hasClass(Se),
                    i = this._dialog ? this._dialog.querySelector(".modal-body") : null;

                function o() {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(a)
                }
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, r && l.reflow(this._element), t(this._element).addClass(Ce), this._config.focus && this._enforceFocus();
                var a = t.Event(xe.SHOWN, {
                    relatedTarget: e
                });
                if (r) {
                    var s = l.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, n._enforceFocus = function() {
                var e = this;
                t(document).off(xe.FOCUSIN).on(xe.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(xe.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && e._triggerBackdropTransition()
                }) : this._isShown || t(this._element).off(xe.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(xe.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(xe.RESIZE)
            }, n._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(we), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(xe.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(e) {
                var n = this,
                    r = t(this._element).hasClass(Se) ? Se : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", r && this._backdrop.classList.add(r), t(this._backdrop).appendTo(document.body), t(this._element).on(xe.CLICK_DISMISS, function(e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                        }), r && l.reflow(this._backdrop), t(this._backdrop).addClass(Ce), !e) return;
                    if (!r) return void e();
                    var i = l.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Ce);
                    var o = function() {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(Se)) {
                        var a = l.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                } else e && e()
            }, n._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(Ae)),
                        r = [].slice.call(document.querySelectorAll(ke));
                    t(n).each(function(n, r) {
                        var i = r.style.paddingRight,
                            o = t(r).css("padding-right");
                        t(r).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(r).each(function(n, r) {
                        var i = r.style.marginRight,
                            o = t(r).css("margin-right");
                        t(r).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight,
                        o = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(we)
            }, n._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(Ae));
                t(e).each(function(e, n) {
                    var r = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = r || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + ke));
                t(n).each(function(e, n) {
                    var r = t(n).data("margin-right");
                    void 0 !== r && t(n).css("margin-right", r).removeData("margin-right")
                });
                var r = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = r || ""
            }, n._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(n, r) {
                return this.each(function() {
                    var i = t(this).data(me),
                        o = a({}, be, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
                    if (i || (i = new e(this, o), t(this).data(me, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n](r)
                    } else o.show && i.show(r)
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return be
                }
            }]), e
        }();
    t(document).on(xe.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var n, r = this,
            i = l.getSelectorFromElement(this);
        i && (n = document.querySelector(i));
        var o = t(n).data(me) ? "toggle" : a({}, t(n).data(), {}, t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = t(n).one(xe.SHOW, function(e) {
            e.isDefaultPrevented() || s.one(xe.HIDDEN, function() {
                t(r).is(":visible") && r.focus()
            })
        });
        je._jQueryInterface.call(t(n), o, this)
    }), t.fn[ge] = je._jQueryInterface, t.fn[ge].Constructor = je, t.fn[ge].noConflict = function() {
        return t.fn[ge] = ye, je._jQueryInterface
    };
    var De = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ie = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Ne(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function(e) {
                var n = o[e],
                    r = n.nodeName.toLowerCase();
                if (-1 === i.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var a = [].slice.call(n.attributes),
                    s = [].concat(t["*"] || [], t[r] || []);
                a.forEach(function(e) {
                    ! function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === De.indexOf(n) || Boolean(e.nodeValue.match(Ie) || e.nodeValue.match(Pe));
                        for (var r = t.filter(function(e) {
                                return e instanceof RegExp
                            }), i = 0, o = r.length; i < o; i++)
                            if (n.match(r[i])) return !0;
                        return !1
                    }(e, s) && n.removeAttribute(e.nodeName)
                })
            }, s = 0, l = o.length; s < l; s++) a(s);
        return r.body.innerHTML
    }
    var Le = "tooltip",
        Oe = "bs.tooltip",
        Me = "." + Oe,
        He = t.fn[Le],
        qe = "bs-tooltip",
        Re = new RegExp("(^|\\s)" + qe + "\\S+", "g"),
        Be = ["sanitize", "whiteList", "sanitizeFn"],
        Fe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Ue = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Qe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        We = "show",
        $e = {
            HIDE: "hide" + Me,
            HIDDEN: "hidden" + Me,
            SHOW: "show" + Me,
            SHOWN: "shown" + Me,
            INSERTED: "inserted" + Me,
            CLICK: "click" + Me,
            FOCUSIN: "focusin" + Me,
            FOCUSOUT: "focusout" + Me,
            MOUSEENTER: "mouseenter" + Me,
            MOUSELEAVE: "mouseleave" + Me
        },
        ze = "fade",
        Ve = "show",
        Ke = "hover",
        Xe = "focus",
        Ye = function() {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var r = e.prototype;
            return r.enable = function() {
                this._isEnabled = !0
            }, r.disable = function() {
                this._isEnabled = !1
            }, r.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, r.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            r = t(e.currentTarget).data(n);
                        r || (r = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                    } else {
                        if (t(this.getTipElement()).hasClass(Ve)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, r.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, r.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var r = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(r);
                    var i = l.findShadowRoot(this.element),
                        o = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                    if (r.isDefaultPrevented() || !o) return;
                    var a = this.getTipElement(),
                        s = l.getUID(this.constructor.NAME);
                    a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(a).addClass(ze);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                        u = this._getAttachment(c);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, this._getPopperConfig(u)), t(a).addClass(Ve), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var f = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(ze)) {
                        var h = l.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(l.TRANSITION_END, f).emulateTransitionEnd(h)
                    } else f()
                }
            }, r.hide = function(e) {
                function n() {
                    r._hoverState !== We && i.parentNode && i.parentNode.removeChild(i), r._cleanTipClass(), r.element.removeAttribute("aria-describedby"), t(r.element).trigger(r.constructor.Event.HIDDEN), null !== r._popper && r._popper.destroy(), e && e()
                }
                var r = this,
                    i = this.getTipElement(),
                    o = t.Event(this.constructor.Event.HIDE);
                if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (t(i).removeClass(Ve), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[Xe] = !1, this._activeTrigger[Ke] = !1, t(this.tip).hasClass(ze)) {
                        var a = l.getTransitionDurationFromElement(i);
                        t(i).one(l.TRANSITION_END, n).emulateTransitionEnd(a)
                    } else n();
                    this._hoverState = ""
                }
            }, r.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, r.isWithContent = function() {
                return Boolean(this.getTitle())
            }, r.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(qe + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(ze + " " + Ve)
            }, r.setElementContent = function(e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Ne(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, r.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, r._getPopperConfig = function(e) {
                var t = this;
                return a({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, {}, this.config.popperConfig)
            }, r._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, r._getContainer = function() {
                return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, r._getAttachment = function(e) {
                return Ue[e.toUpperCase()]
            }, r._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== n) {
                        var r = n === Ke ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = n === Ke ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(r, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), this._hideModalHandler = function() {
                    e.element && e.hide()
                }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, r._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, r._enter = function(e, n) {
                var r = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusin" === e.type ? Xe : Ke] = !0), t(n.getTipElement()).hasClass(Ve) || n._hoverState === We ? n._hoverState = We : (clearTimeout(n._timeout), n._hoverState = We, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === We && n.show()
                }, n.config.delay.show) : n.show())
            }, r._leave = function(e, n) {
                var r = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusout" === e.type ? Xe : Ke] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    "out" === n._hoverState && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, r._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, r._getConfig = function(e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function(e) {
                    -1 !== Be.indexOf(e) && delete n[e]
                }), "number" == typeof(e = a({}, this.constructor.Default, {}, n, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l.typeCheckConfig(Le, e, this.constructor.DefaultType), e.sanitize && (e.template = Ne(e.template, e.whiteList, e.sanitizeFn)), e
            }, r._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, r._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Re);
                null !== n && n.length && e.removeClass(n.join(""))
            }, r._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, r._fixTransition = function() {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(ze), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(Oe),
                        i = "object" == typeof n && n;
                    if ((r || !/dispose|hide/.test(n)) && (r || (r = new e(this, i), t(this).data(Oe, r)), "string" == typeof n)) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Qe
                }
            }, {
                key: "NAME",
                get: function() {
                    return Le
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Oe
                }
            }, {
                key: "Event",
                get: function() {
                    return $e
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Me
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Fe
                }
            }]), e
        }();
    t.fn[Le] = Ye._jQueryInterface, t.fn[Le].Constructor = Ye, t.fn[Le].noConflict = function() {
        return t.fn[Le] = He, Ye._jQueryInterface
    };
    var Je = "popover",
        Ge = "bs.popover",
        Ze = "." + Ge,
        et = t.fn[Je],
        tt = "bs-popover",
        nt = new RegExp("(^|\\s)" + tt + "\\S+", "g"),
        rt = a({}, Ye.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        it = a({}, Ye.DefaultType, {
            content: "(string|element|function)"
        }),
        ot = {
            HIDE: "hide" + Ze,
            HIDDEN: "hidden" + Ze,
            SHOW: "show" + Ze,
            SHOWN: "shown" + Ze,
            INSERTED: "inserted" + Ze,
            CLICK: "click" + Ze,
            FOCUSIN: "focusin" + Ze,
            FOCUSOUT: "focusout" + Ze,
            MOUSEENTER: "mouseenter" + Ze,
            MOUSELEAVE: "mouseleave" + Ze
        },
        at = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }! function(e, t) {
                e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
            }(n, e);
            var r = n.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(tt + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(nt);
                null !== n && 0 < n.length && e.removeClass(n.join(""))
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var r = t(this).data(Ge),
                        i = "object" == typeof e ? e : null;
                    if ((r || !/dispose|hide/.test(e)) && (r || (r = new n(this, i), t(this).data(Ge, r)), "string" == typeof e)) {
                        if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e]()
                    }
                })
            }, i(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return rt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Je
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ge
                }
            }, {
                key: "Event",
                get: function() {
                    return ot
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Ze
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return it
                }
            }]), n
        }(Ye);
    t.fn[Je] = at._jQueryInterface, t.fn[Je].Constructor = at, t.fn[Je].noConflict = function() {
        return t.fn[Je] = et, at._jQueryInterface
    };
    var st = "scrollspy",
        lt = "bs.scrollspy",
        ct = "." + lt,
        ut = t.fn[st],
        dt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ft = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ht = {
            ACTIVATE: "activate" + ct,
            SCROLL: "scroll" + ct,
            LOAD_DATA_API: "load" + ct + ".data-api"
        },
        pt = "active",
        gt = ".nav, .list-group",
        mt = ".nav-link",
        vt = ".list-group-item",
        yt = ".dropdown-item",
        bt = "position",
        _t = function() {
            function e(e, n) {
                var r = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + mt + "," + this._config.target + " " + vt + "," + this._config.target + " " + yt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(ht.SCROLL, function(e) {
                    return r._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function() {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : bt,
                    r = "auto" === this._config.method ? n : this._config.method,
                    i = r === bt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var n, o = l.getSelectorFromElement(e);
                    if (o && (n = document.querySelector(o)), n) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height) return [t(n)[r]().top + i, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, lt), t(this._scrollElement).off(ct), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(e) {
                if ("string" != typeof(e = a({}, dt, {}, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = l.getUID(st), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return l.typeCheckConfig(st, e, ft), e
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                }
            }, n._activate = function(e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    r = t([].slice.call(document.querySelectorAll(n.join(","))));
                r.hasClass("dropdown-item") ? (r.closest(".dropdown").find(".dropdown-toggle").addClass(pt), r.addClass(pt)) : (r.addClass(pt), r.parents(gt).prev(mt + ", " + vt).addClass(pt), r.parents(gt).prev(".nav-item").children(mt).addClass(pt)), t(this._scrollElement).trigger(ht.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(pt)
                }).forEach(function(e) {
                    return e.classList.remove(pt)
                })
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(lt);
                    if (r || (r = new e(this, "object" == typeof n && n), t(this).data(lt, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return dt
                }
            }]), e
        }();
    t(window).on(ht.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
            var r = t(e[n]);
            _t._jQueryInterface.call(r, r.data())
        }
    }), t.fn[st] = _t._jQueryInterface, t.fn[st].Constructor = _t, t.fn[st].noConflict = function() {
        return t.fn[st] = ut, _t._jQueryInterface
    };
    var xt = "bs.tab",
        wt = "." + xt,
        St = t.fn.tab,
        Ct = {
            HIDE: "hide" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            CLICK_DATA_API: "click" + wt + ".data-api"
        },
        Et = "active",
        Tt = ".active",
        At = "> li > .active",
        kt = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Et) || t(this._element).hasClass("disabled"))) {
                    var n, r, i = t(this._element).closest(".nav, .list-group")[0],
                        o = l.getSelectorFromElement(this._element);
                    if (i) {
                        var a = "UL" === i.nodeName || "OL" === i.nodeName ? At : Tt;
                        r = (r = t.makeArray(t(i).find(a)))[r.length - 1]
                    }
                    var s = t.Event(Ct.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = t.Event(Ct.SHOW, {
                            relatedTarget: r
                        });
                    if (r && t(r).trigger(s), t(this._element).trigger(c), !c.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, i);
                        var u = function() {
                            var n = t.Event(Ct.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                i = t.Event(Ct.SHOWN, {
                                    relatedTarget: r
                                });
                            t(r).trigger(n), t(e._element).trigger(i)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function() {
                t.removeData(this._element, xt), this._element = null
            }, n._activate = function(e, n, r) {
                function i() {
                    return o._transitionComplete(e, a, r)
                }
                var o = this,
                    a = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Tt) : t(n).find(At))[0],
                    s = r && a && t(a).hasClass("fade");
                if (a && s) {
                    var c = l.getTransitionDurationFromElement(a);
                    t(a).removeClass("show").one(l.TRANSITION_END, i).emulateTransitionEnd(c)
                } else i()
            }, n._transitionComplete = function(e, n, r) {
                if (n) {
                    t(n).removeClass(Et);
                    var i = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    i && t(i).removeClass(Et), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(Et), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), l.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var o = t(e).closest(".dropdown")[0];
                    if (o) {
                        var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        t(a).addClass(Et)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                r && r()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        i = r.data(xt);
                    if (i || (i = new e(this), r.data(xt, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), e
        }();
    t(document).on(Ct.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), kt._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = kt._jQueryInterface, t.fn.tab.Constructor = kt, t.fn.tab.noConflict = function() {
        return t.fn.tab = St, kt._jQueryInterface
    };
    var jt = "toast",
        Dt = "bs.toast",
        It = "." + Dt,
        Pt = t.fn[jt],
        Nt = {
            CLICK_DISMISS: "click.dismiss" + It,
            HIDE: "hide" + It,
            HIDDEN: "hidden" + It,
            SHOW: "show" + It,
            SHOWN: "shown" + It
        },
        Lt = "hide",
        Ot = "show",
        Mt = "showing",
        Ht = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        qt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Rt = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this,
                    n = t.Event(Nt.SHOW);
                if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add("fade");
                    var r = function() {
                        e._element.classList.remove(Mt), e._element.classList.add(Ot), t(e._element).trigger(Nt.SHOWN), e._config.autohide && (e._timeout = setTimeout(function() {
                            e.hide()
                        }, e._config.delay))
                    };
                    if (this._element.classList.remove(Lt), l.reflow(this._element), this._element.classList.add(Mt), this._config.animation) {
                        var i = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, r).emulateTransitionEnd(i)
                    } else r()
                }
            }, n.hide = function() {
                if (this._element.classList.contains(Ot)) {
                    var e = t.Event(Nt.HIDE);
                    t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Ot) && this._element.classList.remove(Ot), t(this._element).off(Nt.CLICK_DISMISS), t.removeData(this._element, Dt), this._element = null, this._config = null
            }, n._getConfig = function(e) {
                return e = a({}, qt, {}, t(this._element).data(), {}, "object" == typeof e && e ? e : {}), l.typeCheckConfig(jt, e, this.constructor.DefaultType), e
            }, n._setListeners = function() {
                var e = this;
                t(this._element).on(Nt.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                    return e.hide()
                })
            }, n._close = function() {
                function e() {
                    n._element.classList.add(Lt), t(n._element).trigger(Nt.HIDDEN)
                }
                var n = this;
                if (this._element.classList.remove(Ot), this._config.animation) {
                    var r = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, e).emulateTransitionEnd(r)
                } else e()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        i = r.data(Dt);
                    if (i || (i = new e(this, "object" == typeof n && n), r.data(Dt, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n](this)
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ht
                }
            }, {
                key: "Default",
                get: function() {
                    return qt
                }
            }]), e
        }();
    t.fn[jt] = Rt._jQueryInterface, t.fn[jt].Constructor = Rt, t.fn[jt].noConflict = function() {
        return t.fn[jt] = Pt, Rt._jQueryInterface
    }, e.Alert = p, e.Button = E, e.Carousel = B, e.Collapse = Z, e.Dropdown = pe, e.Modal = je, e.Popover = at, e.Scrollspy = _t, e.Tab = kt, e.Toast = Rt, e.Tooltip = Ye, e.Util = l, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function(e, t, n) {
    var r = n(4),
        i = n(5),
        o = n(6);
    e.exports = function(e) {
        return r(e) || i(e) || o()
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    e.exports = function(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        i = n.n(r),
        o = n(1),
        a = n.n(o),
        s = n(2),
        l = n.n(s),
        c = function() {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a()(this, e), this.selectors = {
                    wrapper: n.wrapper || ".share-post",
                    button: n.button || ".share",
                    counter: n.counter || ".counter-block",
                    innerCounter: n.innerCounter || "social-counter"
                }, this.options = {
                    isSharedDisable: n.isSharedDisable || !1,
                    isDisplayCounter: n.isDisplayCounter || !1,
                    buttons: 0
                };
                new MutationObserver(this.observerHandler.bind(this)).observe(document.querySelector("body"), {
                    childList: !0,
                    subtree: !0
                });
                var r = document.querySelectorAll(this.selectors.wrapper);
                i()(r).forEach(function(e) {
                    t.initShareButtons(e)
                })
            }
            return l()(e, [{
                key: "observerHandler",
                value: function(e) {
                    var t = this,
                        n = this.selectors.wrapper;
                    e.forEach(function(e) {
                        i()(e.addedNodes).forEach(function(e) {
                            if (!e.querySelectorAll || !e.querySelectorAll(n)) return !1;
                            var r = i()(e.querySelectorAll(n)),
                                o = t.initShareButtons.bind(t);
                            r.forEach(o)
                        })
                    })
                }
            }, {
                key: "initShareButtons",
                value: function(e) {
                    var t = this,
                        n = this.selectors,
                        r = n.button,
                        o = n.counter,
                        a = this.options.isDisplayCounter,
                        s = i()(e.querySelectorAll(r));
                    e.querySelector(o) && (e.querySelector(o).innerText = 0), s.forEach(function(e) {
                        var n = Object.assign({}, e.dataset);
                        if (t.options.buttons += 1, e.dataset.id || (e.dataset.id = t.options.buttons), !(n.net && n.url && n.image && n.title)) return console.log("РќРµ СѓРєР°Р·Р°РЅС‹ РёР»Рё РЅРµ Р·Р°РїРѕР»РЅРµРЅС‹ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Рµ data-Р°С‚СЂРёР±СѓС‚С‹"), t.saveError("Check buttons data-attributes");
                        e.addEventListener("click", t.clickHandler(e)), a && t.receiveCounterValue(e)
                    })
                }
            }, {
                key: "clickHandler",
                value: function(e) {
                    var t = this;
                    return function(n) {
                        n.preventDefault();
                        var r = e.dataset.net,
                            i = t.options,
                            o = i.isSharedDisable,
                            a = i.isDisplayCounter;
                        if ("copy" === r) return t.copyToClipboard(e);
                        var s = t.createShareLink(e),
                            l = window.open(s, "new", "toolbar=0,status=0,width=626,height=436");
                        if (!a) return o && e.setAttribute("disabled", "disabled"), !1;
                        var c = setInterval(function() {
                            l.closed && (setTimeout(function() {
                                t.receiveCounterValue(e), o && e.setAttribute("disabled", "disabled")
                            }, 500), t.createCustomEvent(e), clearInterval(c))
                        }, 100)
                    }
                }
            }, {
                key: "createShareLink",
                value: function(e) {
                    var t = e.dataset,
                        n = t.url,
                        r = t.image,
                        i = t.title,
                        o = t.description,
                        a = t.net;
                    return {
                        vkontakte: ["https://vk.com/share.php", "?url=".concat(encodeURIComponent(n)), "&image=".concat(encodeURIComponent(r)), "&title=".concat(encodeURIComponent(i)), "&description=".concat(encodeURIComponent(o))],
                        ok: ["https://connect.ok.ru/dk?st.cmd=WidgetSharePreview", "&st.shareUrl=".concat(encodeURIComponent(n)), "&st.imageUrl=".concat(encodeURIComponent(r)), "&st.title=".concat(encodeURIComponent(i)), "&st.description=".concat(encodeURIComponent(o))],
                        moymir: ["https://connect.mail.ru/share", "?url=".concat(encodeURIComponent(n)), "&imageurl=".concat(encodeURIComponent(r)), "&title=".concat(encodeURIComponent(i)), "&description=".concat(encodeURIComponent(o))],
                        facebook: ["https://www.facebook.com/sharer.php", "?u=".concat(encodeURIComponent(n)), "&p[images][0]=".concat(encodeURIComponent(r))],
                        twitter: ["https://twitter.com/intent/tweet", "?url=".concat(n), "&text=".concat(i), "&hashtags="]
                    } [a].join("")
                }
            }, {
                key: "receiveCounterValue",
                value: function(e) {
                    var t = e.dataset,
                        n = t.net,
                        r = t.id,
                        i = t.url,
                        o = {
                            vkontakte: this.receiveVKCount,
                            ok: this.receiveOKCount,
                            moymir: this.receiveMMCount
                        };
                    if (!o[n]) return !1;
                    o[n] = o[n].bind(this), o[n]({
                        requestLink: i,
                        _index: r
                    })
                }
            }, {
                key: "receiveVKCount",
                value: function(e) {
                    var t = e.requestLink,
                        n = e._index;
                    window.VK && window.VK.Share && window.VK.Share.count || (window.VK = window.VK || {}, window.VK.Share = {}, window.VK.Share.count = this.updateCounterValue.bind(this));
                    var r = "".concat("https://vk.com/share.php?act=count", "&url=").concat(t, "&index=").concat(n);
                    this.requestJSONP(r)
                }
            }, {
                key: "receiveOKCount",
                value: function(e) {
                    var t = e.requestLink,
                        n = e._index;
                    window.ODKL && window.ODKL.updateCount || (window.ODKL = window.ODKL || {}, window.ODKL.updateCount = this.updateCounterValue.bind(this));
                    var r = "".concat("https://connect.ok.ru/dk?st.cmd=extLike", "&ref=").concat(t, "&uid=").concat(n);
                    this.requestJSONP(r)
                }
            }, {
                key: "receiveMMCount",
                value: function(e) {
                    var t = e.requestLink,
                        n = e._index,
                        r = this;
                    window["mm".concat(n)] = function(e) {
                        var t = e.share_mm;
                        r.updateCounterValue(n, Number(t))
                    };
                    var i = t.substr(t.indexOf("//") + 2),
                        o = "".concat("https://appsmail.ru/share/count", "/").concat(i, "?callback=mm").concat(n);
                    this.requestJSONP(o)
                }
            }, {
                key: "updateCounterValue",
                value: function(e, t) {
                    var n = this.selectors,
                        r = n.wrapper,
                        i = n.counter,
                        o = document.querySelector('[data-id="'.concat(e, '"]')),
                        a = o.closest(r).querySelector(i),
                        s = Number(t),
                        l = 0;
                    a && (l = Number(a.innerText));
                    var c = o.querySelector("span");
                    if (c && (l -= Number(c.innerText), o.removeChild(c)), a && (a.innerText = l + s), !s) return !1;
                    var u = this.createButtonCounter(o, s);
                    o.appendChild(u)
                }
            }, {
                key: "createButtonCounter",
                value: function(e, t) {
                    var n = e.dataset.net,
                        r = this.selectors.innerCounter,
                        i = document.createElement("span");
                    return i.innerText = String(t), i.classList.add("counter-".concat(n), r), i
                }
            }, {
                key: "requestJSONP",
                value: function(e) {
                    var t = document.createElement("script");
                    t.src = e, document.body.appendChild(t), setTimeout(function() {
                        document.body.removeChild(t)
                    }, 3e3)
                }
            }, {
                key: "copyToClipboard",
                value: function(e) {
                    var t = e.dataset.url;
                    if (this.createCustomEvent(e), window.clipboardData && window.clipboardData.setData) return this.options.isSharedDisable && e.setAttribute("disabled", "disabled"), window.clipboardData.setData("Text", t);
                    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                        var n = document.createElement("textarea");
                        n.textContent = t, n.style.position = "fixed", document.body.appendChild(n), n.select();
                        try {
                            return document.execCommand("copy")
                        } catch (e) {
                            return this.saveError("Copy clipboard error on: ".concat(t))
                        } finally {
                            this.options.isSharedDisable && e.setAttribute("disabled", "disabled"), document.body.removeChild(n)
                        }
                    }
                }
            }, {
                key: "createCustomEvent",
                value: function(e) {
                    document.dispatchEvent(new CustomEvent("shared", {
                        detail: {
                            button: e
                        }
                    }))
                }
            }, {
                key: "saveError",
                value: function(e) {
                    var t = this,
                        n = "".concat(navigator.userAgent, " \n ").concat(location.href),
                        r = "".concat(e, " \n ").concat(n),
                        i = {
                            method: "post",
                            body: JSON.stringify({
                                type: "share",
                                data: r
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        };
                    fetch("/api/common/clientLog", i).catch(function(e) {
                        t.saveError("Save to log error / ".concat(e))
                    })
                }
            }]), e
        }();
    window.Share = c
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}]);
class Loader {
    constructor(e) {
        let t = {
            action: "scroll",
            parameter: "page",
            startLoading: 0,
            onPageLoad: !1,
            isFullyRequested: !1
        };
        if (this.errors = [], !Loader.checkCustomOptions(e)) return this.saveError("РќРµРєРѕСЂСЂРµРєС‚РЅРѕ Р·Р°РґР°РЅС‹ РїР°СЂР°РјРµС‚СЂС‹ РёРЅС†РёР°Р»РёР·Р°С†РёРё");
        this.options = Object.assign(t, e), this.options.currentPage = this.options.initPage || 2, this.options.callbacks = Object.assign(Loader.callbacks, e.callbacks), this.elements = {
            trigger: document.querySelector(this.options.trigger),
            wrapper: document.querySelector(this.options.contentWrapper)
        }, this.options.callbacks.onInit.bind(this)(this.options), this.addActionListeners(), this.addContentOnPageLoad()
    }
    addContentOnPageLoad() {
        const {
            options: {
                onPageLoad: e
            }
        } = this;
        if (!e) return !1;
        setTimeout(() => {
            this.checkTriggerVisible() && (this.sendDataRequest(), this.addContentOnPageLoad())
        }, 100)
    }
    addActionListeners() {
        const {
            options: {
                action: e
            },
            elements: {
                trigger: t
            }
        } = this;
        "scroll" === e && (this.scrollActionHandler = this.scrollActionHandler.bind(this), window.addEventListener("scroll", this.scrollActionHandler)), "click" === e && (this.clickActionHandler = this.clickActionHandler.bind(this), t.addEventListener("click", this.clickActionHandler))
    }
    removeActionListeners() {
        const {
            options: {
                action: e
            },
            elements: {
                trigger: t
            }
        } = this;
        "scroll" === e && window.removeEventListener("scroll", this.scrollActionHandler), "click" === e && t.removeEventListener("click", this.clickActionHandler), this.isFullyRequested = !0, this.options.callbacks.destroyCallback.bind(this)(this.options)
    }
    scrollActionHandler() {
        this.options.callbacks.onScroll.bind(this)(this.options), this.checkTriggerVisible() && this.sendDataRequest()
    }
    clickActionHandler() {
        this.options.callbacks.onClick.bind(this)(this.options), this.sendDataRequest()
    }
    checkTriggerVisible() {
        const {
            options: {
                startLoading: e
            },
            elements: {
                trigger: t
            }
        } = this, {
            scrollY: n,
            innerHeight: r
        } = window;
        let i = t.getBoundingClientRect().top + n;
        t.getBoundingClientRect().left;
        return i - e - 1 <= n + r
    }
    sendDataRequest() {
        if (this.fetchRequest) return !1;
        this.options.callbacks.beforeLoad.bind(this)(this.options), this.fetchRequest = fetch(this.formLink()).then(e => e.text()).then(e => this.requestSuccessHandler(e)).catch(({
            message: e
        }) => this.saveError(e))
    }
    requestSuccessHandler(e) {
        const {
            elements: {
                wrapper: t
            }
        } = this;
        return !e || e.length <= 3 || e.trim().length <= 3 ? this.finishContentLoading() : (this.options.callbacks.receiveData.bind(this)(e), !this.isFullyRequested && ($(t).append(e), this.options.callbacks.afterLoad.bind(this)(this.options), this.options.currentPage += 1, void delete this.fetchRequest))
    }
    formLink() {
        const {
            options: {
                href: e,
                parameter: t,
                currentPage: n
            },
            elements: {
                trigger: r
            }
        } = this;
        if (!e) return console.log("РќРµ СѓРєР°Р·Р°РЅ loader => href");
        let i = r.getAttribute("href") || e;
        if (-1 !== i.indexOf("[%page%]")) return i.replace("[%page%]", n);
        i = (i += (-1 === i.indexOf("?") ? "?" : "&") + (r.getAttribute("data-parameter") || t) + "=" + n).replace("&amp;", "&");
        return i
    }
    finishContentLoading() {
        this.options.callbacks.requestEnd.bind(this)(this.options), this.removeActionListeners(), this.elements.trigger.classList.add("loader-hidden")
    }
    saveError(e) {
        this.errors.push(e)
    }
    static checkCustomOptions(e) {
        return !e || !e.trigger || e.contentWrapper
    }
    static get callbacks() {
        return {
            onClick: function() {},
            onScroll: function() {},
            onInit: function() {},
            beforeLoad: function() {},
            receiveData: function() {},
            afterLoad: function() {},
            requestEnd: function() {},
            destroyCallback: function() {}
        }
    }
}
void 0 !== History.Adapter && History.Adapter.bind(window, "statechange", function() {
        const {
            loaderElements: e
        } = window;
        if (e && e.length > 0) {
            for (let e = 0; e < window.loaderElements.length; e++) window.loaderElements[e].removeActionListeners();
            window.loaderElements = []
        }
    }), jQuery.fn.loader = function(e) {
        let t = this.selector;
        if (!t || "" === t) {
            if (("" === this[0].id || void 0 === this[0].id) && 0 === this[0].classList.length) return !1;
            t = void 0 !== this[0].id && "" !== this[0].id ? "#" + this[0].id : "." + this[0].classList[0]
        }
        let n = Object.assign({}, {
            contentWrapper: "#wrapper",
            trigger: t
        }, e);
        window.loaderElements = window.loaderElements || [], window.loaderElements.push(new Loader(n))
    }, "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, o, a, s = gap,
                l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (o = l.length, n = 0; n < o; n += 1) a[n] = str(n, l) || "null";
                        return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof rep[n] && (i = str(r = rep[n], l)) && a.push(quote(r) + (gap ? ": " : ":") + i);
                    else
                        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (i = str(r, l)) && a.push(quote(r) + (gap ? ": " : ":") + i);
                    return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
            }
        }
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)
                for (r = 0; r < n; r += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            var j;

            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (void 0 !== (r = walk(i, n)) ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {},
            r = e.jQuery;
        if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(e, t, n) {
                r(e).bind(t, n)
            },
            trigger: function(e, t, n) {
                r(e).trigger(t, n)
            },
            extractEventData: function(e, t, n) {
                return t && t.originalEvent && t.originalEvent[e] || n && n[e] || void 0
            },
            onDomLoad: function(e) {
                r(e)
            }
        }, void 0 !== n.init && n.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.document,
            r = e.setTimeout || r,
            i = e.clearTimeout || i,
            o = e.setInterval || o,
            a = e.History = e.History || {};
        if (void 0 !== a.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        a.initHtml4 = function() {
            if (void 0 !== a.initHtml4.initialized) return !1;
            a.initHtml4.initialized = !0, a.enabled = !0, a.savedHashes = [], a.isLastHash = function(e) {
                return e === a.getHashByIndex()
            }, a.isHashEqual = function(e, t) {
                return (e = encodeURIComponent(e).replace(/%25/g, "%")) === (t = encodeURIComponent(t).replace(/%25/g, "%"))
            }, a.saveHash = function(e) {
                return !a.isLastHash(e) && (a.savedHashes.push(e), !0)
            }, a.getHashByIndex = function(e) {
                return void 0 === e ? a.savedHashes[a.savedHashes.length - 1] : e < 0 ? a.savedHashes[a.savedHashes.length + e] : a.savedHashes[e]
            }, a.discardedHashes = {}, a.discardedStates = {}, a.discardState = function(e, t, n) {
                var r, i = a.getHashByState(e);
                return r = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, a.discardedStates[i] = r, !0
            }, a.discardHash = function(e, t, n) {
                var r = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return a.discardedHashes[e] = r, !0
            }, a.discardedState = function(e) {
                var t = a.getHashByState(e);
                return a.discardedStates[t] || !1
            }, a.discardedHash = function(e) {
                return a.discardedHashes[e] || !1
            }, a.recycleState = function(e) {
                var t = a.getHashByState(e);
                return a.discardedState(e) && delete a.discardedStates[t], !0
            }, a.emulated.hashChange && (a.hashChangeInit = function() {
                a.checkerFunction = null;
                var t, r, i, s, l = "",
                    c = Boolean(a.getHash());
                return a.isInternetExplorer() ? (t = "historyjs-iframe", (r = n.createElement("iframe")).setAttribute("id", t), r.setAttribute("src", "#"), r.style.display = "none", n.body.appendChild(r), r.contentWindow.document.open(), r.contentWindow.document.close(), i = "", s = !1, a.checkerFunction = function() {
                    if (s) return !1;
                    s = !0;
                    var t = a.getHash(),
                        n = a.getHash(r.contentWindow.document);
                    return t !== l ? (l = t, n !== t && (i = n = t, r.contentWindow.document.open(), r.contentWindow.document.close(), r.contentWindow.document.location.hash = a.escapeHash(t)), a.Adapter.trigger(e, "hashchange")) : n !== i && (i = n, c && "" === n ? a.back() : a.setHash(n, !1)), s = !1, !0
                }) : a.checkerFunction = function() {
                    var t = a.getHash() || "";
                    return t !== l && (l = t, a.Adapter.trigger(e, "hashchange")), !0
                }, a.intervalList.push(o(a.checkerFunction, a.options.hashChangeInterval)), !0
            }, a.Adapter.onDomLoad(a.hashChangeInit)), a.emulated.pushState && (a.onHashChange = function(t) {
                var n, r, i = t && t.newURL || a.getLocationHref(),
                    o = a.getHashByUrl(i);
                return a.isLastHash(o) ? (a.busy(!1), !1) : (a.doubleCheckComplete(), a.saveHash(o), o && a.isTraditionalAnchor(o) ? (a.Adapter.trigger(e, "anchorchange"), a.busy(!1), !1) : (n = a.extractState(a.getFullUrl(o || a.getLocationHref()), !0), a.isLastSavedState(n) ? (a.busy(!1), !1) : (a.getHashByState(n), (r = a.discardedState(n)) ? (a.getHashByIndex(-2) === a.getHashByState(r.forwardState) ? a.back(!1) : a.forward(!1), !1) : (a.pushState(n.data, n.title, encodeURI(n.url), !1), !0))))
            }, a.Adapter.bind(e, "hashchange", a.onHashChange), a.pushState = function(t, n, r, i) {
                if (r = encodeURI(r).replace(/%25/g, "%"), a.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== i && a.busy()) return a.pushQueue({
                    scope: a,
                    callback: a.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                a.busy(!0);
                var o = a.createStateObject(t, n, r),
                    s = a.getHashByState(o),
                    l = a.getState(!1),
                    c = a.getHashByState(l),
                    u = a.getHash(),
                    d = a.expectedStateId == o.id;
                return a.storeState(o), a.expectedStateId = o.id, a.recycleState(o), a.setTitle(o), s === c ? (a.busy(!1), !1) : (a.saveState(o), d || a.Adapter.trigger(e, "statechange"), a.isHashEqual(s, u) || a.isHashEqual(s, a.getShortUrl(a.getLocationHref())) || a.setHash(s, !1), a.busy(!1), !0)
            }, a.replaceState = function(t, n, r, i) {
                if (r = encodeURI(r).replace(/%25/g, "%"), a.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== i && a.busy()) return a.pushQueue({
                    scope: a,
                    callback: a.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                a.busy(!0);
                var o = a.createStateObject(t, n, r),
                    s = a.getHashByState(o),
                    l = a.getState(!1),
                    c = a.getHashByState(l),
                    u = a.getStateByIndex(-2);
                return a.discardState(l, o, u), s === c ? (a.storeState(o), a.expectedStateId = o.id, a.recycleState(o), a.setTitle(o), a.saveState(o), a.Adapter.trigger(e, "statechange"), a.busy(!1)) : a.pushState(o.data, o.title, o.url, !1), !0
            }), a.emulated.pushState && a.getHash() && !a.emulated.hashChange && a.Adapter.onDomLoad(function() {
                a.Adapter.trigger(e, "hashchange")
            })
        }, void 0 !== a.init && a.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.console || void 0,
            r = e.document,
            i = e.navigator,
            o = !1,
            a = e.setTimeout,
            s = e.clearTimeout,
            l = e.setInterval,
            c = e.clearInterval,
            u = e.JSON,
            d = e.alert,
            f = e.History = e.History || {},
            h = e.history;
        try {
            (o = e.sessionStorage).setItem("TEST", "1"), o.removeItem("TEST")
        } catch (e) {
            o = !1
        }
        if (u.stringify = u.stringify || u.encode, u.parse = u.parse || u.decode, void 0 !== f.init) throw new Error("History.js Core has already been loaded...");
        f.init = function(e) {
            return void 0 !== f.Adapter && (void 0 !== f.initCore && f.initCore(), void 0 !== f.initHtml4 && f.initHtml4(), !0)
        }, f.initCore = function(t) {
            if (void 0 !== f.initCore.initialized) return !1;
            if (f.initCore.initialized = !0, f.options = f.options || {}, f.options.hashChangeInterval = f.options.hashChangeInterval || 100, f.options.safariPollInterval = f.options.safariPollInterval || 500, f.options.doubleCheckInterval = f.options.doubleCheckInterval || 500, f.options.disableSuid = f.options.disableSuid || !1, f.options.storeInterval = f.options.storeInterval || 1e3, f.options.busyDelay = f.options.busyDelay || 250, f.options.debug = f.options.debug || !1, f.options.initialTitle = f.options.initialTitle || r.title, f.options.html4Mode = f.options.html4Mode || !1, f.options.delayInit = f.options.delayInit || !1, f.intervalList = [], f.clearAllIntervals = function() {
                    var e, t = f.intervalList;
                    if (void 0 !== t && null !== t) {
                        for (e = 0; e < t.length; e++) c(t[e]);
                        f.intervalList = null
                    }
                }, f.debug = function() {
                    f.options.debug && f.log.apply(f, arguments)
                }, f.log = function() {
                    var e, t, i, o, a, s = !(void 0 === n || void 0 === n.log || void 0 === n.log.apply),
                        l = r.getElementById("log");
                    for (s ? (e = (o = Array.prototype.slice.call(arguments)).shift(), void 0 !== n.debug ? n.debug.apply(n, [e, o]) : n.log.apply(n, [e, o])) : e = "\n" + arguments[0] + "\n", t = 1, i = arguments.length; t < i; ++t) {
                        if ("object" == typeof(a = arguments[t]) && void 0 !== u) try {
                            a = u.stringify(a)
                        } catch (e) {}
                        e += "\n" + a + "\n"
                    }
                    return l ? (l.value += e + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : s || d(e), !0
                }, f.getInternetExplorerMajorVersion = function() {
                    return f.getInternetExplorerMajorVersion.cached = void 0 !== f.getInternetExplorerMajorVersion.cached ? f.getInternetExplorerMajorVersion.cached : function() {
                        for (var e = 3, t = r.createElement("div"), n = t.getElementsByTagName("i");
                            (t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e") && n[0];);
                        return e > 4 && e
                    }()
                }, f.isInternetExplorer = function() {
                    return f.isInternetExplorer.cached = void 0 !== f.isInternetExplorer.cached ? f.isInternetExplorer.cached : Boolean(f.getInternetExplorerMajorVersion())
                }, f.options.html4Mode ? f.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : f.emulated = {
                    pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent))),
                    hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8)
                }, f.enabled = !f.emulated.pushState, f.bugs = {
                    setHash: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    safariPoll: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    ieDoubleCheck: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 7)
                }, f.isEmptyObject = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, f.cloneObject = function(e) {
                    var t, n;
                    return e ? (t = u.stringify(e), n = u.parse(t)) : n = {}, n
                }, f.getRootUrl = function() {
                    var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                    return r.location.port && (e += ":" + r.location.port), e += "/"
                }, f.getBaseHref = function() {
                    var e = r.getElementsByTagName("base"),
                        t = "";
                    return 1 === e.length && (t = e[0].href.replace(/[^\/]+$/, "")), (t = t.replace(/\/+$/, "")) && (t += "/"), t
                }, f.getBaseUrl = function() {
                    return f.getBaseHref() || f.getBasePageUrl() || f.getRootUrl()
                }, f.getPageUrl = function() {
                    return ((f.getState(!1, !1) || {}).url || f.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /\./.test(e) ? e : e + "/"
                    })
                }, f.getBasePageUrl = function() {
                    return f.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /[^\/]$/.test(e) ? "" : e
                    }).replace(/\/+$/, "") + "/"
                }, f.getFullUrl = function(e, t) {
                    var n = e,
                        r = e.substring(0, 1);
                    return t = void 0 === t || t, /[a-z]+\:\/\//.test(e) || (n = "/" === r ? f.getRootUrl() + e.replace(/^\/+/, "") : "#" === r ? f.getPageUrl().replace(/#.*/, "") + e : "?" === r ? f.getPageUrl().replace(/[\?#].*/, "") + e : t ? f.getBaseUrl() + e.replace(/^(\.\/)+/, "") : f.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, f.getShortUrl = function(e) {
                    var t = e,
                        n = f.getBaseUrl(),
                        r = f.getRootUrl();
                    return f.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), f.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, f.getLocationHref = function(e) {
                    return (e = e || r).URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href
                }, f.store = {}, f.idToState = f.idToState || {}, f.stateToId = f.stateToId || {}, f.urlToId = f.urlToId || {}, f.storedStates = f.storedStates || [], f.savedStates = f.savedStates || [], f.normalizeStore = function() {
                    f.store.idToState = f.store.idToState || {}, f.store.urlToId = f.store.urlToId || {}, f.store.stateToId = f.store.stateToId || {}
                }, f.getState = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = f.getLastSavedState();
                    return !n && t && (n = f.createStateObject()), e && ((n = f.cloneObject(n)).url = n.cleanUrl || n.url), n
                }, f.getIdByState = function(e) {
                    var t, n = f.extractId(e.url);
                    if (!n)
                        if (t = f.getStateString(e), void 0 !== f.stateToId[t]) n = f.stateToId[t];
                        else if (void 0 !== f.store.stateToId[t]) n = f.store.stateToId[t];
                    else {
                        for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== f.idToState[n] || void 0 !== f.store.idToState[n];);
                        f.stateToId[t] = n, f.idToState[n] = e
                    }
                    return n
                }, f.normalizeState = function(e) {
                    var t, n;
                    return e && "object" == typeof e || (e = {}), void 0 !== e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), (t = {}).normalized = !0, t.title = e.title || "", t.url = f.getFullUrl(e.url ? e.url : f.getLocationHref()), t.hash = f.getShortUrl(t.url), t.data = f.cloneObject(e.data), t.id = f.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !f.isEmptyObject(t.data), (t.title || n) && !0 !== f.options.disableSuid && (t.hash = f.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = f.getFullUrl(t.hash), (f.emulated.pushState || f.bugs.safariPoll) && f.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t)
                }, f.createStateObject = function(e, t, n) {
                    var r = {
                        data: e,
                        title: t,
                        url: n
                    };
                    return r = f.normalizeState(r)
                }, f.getStateById = function(e) {
                    return e = String(e), f.idToState[e] || f.store.idToState[e] || void 0
                }, f.getStateString = function(e) {
                    var t;
                    return t = {
                        data: f.normalizeState(e).data,
                        title: e.title,
                        url: e.url
                    }, u.stringify(t)
                }, f.getStateId = function(e) {
                    return f.normalizeState(e).id
                }, f.getHashByState = function(e) {
                    return f.normalizeState(e).hash
                }, f.extractId = function(e) {
                    var t, n;
                    return n = -1 != e.indexOf("#") ? e.split("#")[0] : e, (t = /(.*)\&_suid=([0-9]+)$/.exec(n)) && t[1] || e, (t ? String(t[2] || "") : "") || !1
                }, f.isTraditionalAnchor = function(e) {
                    return !/[\/\?\.]/.test(e)
                }, f.extractState = function(e, t) {
                    var n, r, i = null;
                    return t = t || !1, (n = f.extractId(e)) && (i = f.getStateById(n)), i || (r = f.getFullUrl(e), (n = f.getIdByUrl(r) || !1) && (i = f.getStateById(n)), i || !t || f.isTraditionalAnchor(e) || (i = f.createStateObject(null, null, r))), i
                }, f.getIdByUrl = function(e) {
                    return f.urlToId[e] || f.store.urlToId[e] || void 0
                }, f.getLastSavedState = function() {
                    return f.savedStates[f.savedStates.length - 1] || void 0
                }, f.getLastStoredState = function() {
                    return f.storedStates[f.storedStates.length - 1] || void 0
                }, f.hasUrlDuplicate = function(e) {
                    var t;
                    return (t = f.extractState(e.url)) && t.id !== e.id
                }, f.storeState = function(e) {
                    return f.urlToId[e.url] = e.id, f.storedStates.push(f.cloneObject(e)), e
                }, f.isLastSavedState = function(e) {
                    var t = !1;
                    return f.savedStates.length && (t = e.id === f.getLastSavedState().id), t
                }, f.saveState = function(e) {
                    return !f.isLastSavedState(e) && (f.savedStates.push(f.cloneObject(e)), !0)
                }, f.getStateByIndex = function(e) {
                    return void 0 === e ? f.savedStates[f.savedStates.length - 1] : e < 0 ? f.savedStates[f.savedStates.length + e] : f.savedStates[e]
                }, f.getCurrentIndex = function() {
                    return f.savedStates.length < 1 ? 0 : f.savedStates.length - 1
                }, f.getHash = function(e) {
                    var t = f.getLocationHref(e);
                    return f.getHashByUrl(t)
                }, f.unescapeHash = function(e) {
                    var t = f.normalizeHash(e);
                    return t = decodeURIComponent(t)
                }, f.normalizeHash = function(e) {
                    return e.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, f.setHash = function(e, t) {
                    var n, i;
                    return !1 !== t && f.busy() ? (f.pushQueue({
                        scope: f,
                        callback: f.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (f.busy(!0), (n = f.extractState(e, !0)) && !f.emulated.pushState ? f.pushState(n.data, n.title, n.url, !1) : f.getHash() !== e && (f.bugs.setHash ? (i = f.getPageUrl(), f.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), f)
                }, f.escapeHash = function(t) {
                    var n = f.normalizeHash(t);
                    return n = e.encodeURIComponent(n), f.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                }, f.getHashByUrl = function(e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return t = f.unescapeHash(t)
                }, f.setTitle = function(e) {
                    var t, n = e.title;
                    n || (t = f.getStateByIndex(0)) && t.url === e.url && (n = t.title || f.options.initialTitle);
                    try {
                        r.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (e) {}
                    return r.title = n, f
                }, f.queues = [], f.busy = function(e) {
                    if (void 0 !== e ? f.busy.flag = e : void 0 === f.busy.flag && (f.busy.flag = !1), !f.busy.flag) {
                        s(f.busy.timeout);
                        var t = function() {
                            var e, n, r;
                            if (!f.busy.flag)
                                for (e = f.queues.length - 1; e >= 0; --e) 0 !== (n = f.queues[e]).length && (r = n.shift(), f.fireQueueItem(r), f.busy.timeout = a(t, f.options.busyDelay))
                        };
                        f.busy.timeout = a(t, f.options.busyDelay)
                    }
                    return f.busy.flag
                }, f.busy.flag = !1, f.fireQueueItem = function(e) {
                    return e.callback.apply(e.scope || f, e.args || [])
                }, f.pushQueue = function(e) {
                    return f.queues[e.queue || 0] = f.queues[e.queue || 0] || [], f.queues[e.queue || 0].push(e), f
                }, f.queue = function(e, t) {
                    return "function" == typeof e && (e = {
                        callback: e
                    }), void 0 !== t && (e.queue = t), f.busy() ? f.pushQueue(e) : f.fireQueueItem(e), f
                }, f.clearQueue = function() {
                    return f.busy.flag = !1, f.queues = [], f
                }, f.stateChanged = !1, f.doubleChecker = !1, f.doubleCheckComplete = function() {
                    return f.stateChanged = !0, f.doubleCheckClear(), f
                }, f.doubleCheckClear = function() {
                    return f.doubleChecker && (s(f.doubleChecker), f.doubleChecker = !1), f
                }, f.doubleCheck = function(e) {
                    return f.stateChanged = !1, f.doubleCheckClear(), f.bugs.ieDoubleCheck && (f.doubleChecker = a(function() {
                        return f.doubleCheckClear(), f.stateChanged || e(), !0
                    }, f.options.doubleCheckInterval)), f
                }, f.safariStatePoll = function() {
                    var t = f.extractState(f.getLocationHref());
                    if (!f.isLastSavedState(t)) return t || f.createStateObject(), f.Adapter.trigger(e, "popstate"), f
                }, f.back = function(e) {
                    return !1 !== e && f.busy() ? (f.pushQueue({
                        scope: f,
                        callback: f.back,
                        args: arguments,
                        queue: e
                    }), !1) : (f.busy(!0), f.doubleCheck(function() {
                        f.back(!1)
                    }), h.go(-1), !0)
                }, f.forward = function(e) {
                    return !1 !== e && f.busy() ? (f.pushQueue({
                        scope: f,
                        callback: f.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (f.busy(!0), f.doubleCheck(function() {
                        f.forward(!1)
                    }), h.go(1), !0)
                }, f.go = function(e, t) {
                    var n;
                    if (e > 0)
                        for (n = 1; n <= e; ++n) f.forward(t);
                    else {
                        if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; n >= e; --n) f.back(t)
                    }
                    return f
                }, f.emulated.pushState) {
                var p = function() {};
                f.pushState = f.pushState || p, f.replaceState = f.replaceState || p
            } else f.onPopState = function(t, n) {
                var r, i, o, a = !1;
                return f.doubleCheckComplete(), (i = f.getHash()) ? ((o = f.extractState(i || f.getLocationHref(), !0)) ? f.replaceState(o.data, o.title, o.url, !1) : (f.Adapter.trigger(e, "anchorchange"), f.busy(!1)), f.expectedStateId = !1, !1) : ((a = (r = f.Adapter.extractEventData("state", t, n) || !1) ? f.getStateById(r) : f.expectedStateId ? f.getStateById(f.expectedStateId) : f.extractState(f.getLocationHref())) || (a = f.createStateObject(null, null, f.getLocationHref())), f.expectedStateId = !1, f.isLastSavedState(a) ? (f.busy(!1), !1) : (f.storeState(a), f.saveState(a), f.setTitle(a), f.Adapter.trigger(e, "statechange"), f.busy(!1), !0))
            }, f.Adapter.bind(e, "popstate", f.onPopState), f.pushState = function(t, n, r, i) {
                if (f.getHashByUrl(r) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== i && f.busy()) return f.pushQueue({
                    scope: f,
                    callback: f.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                f.busy(!0);
                var o = f.createStateObject(t, n, r);
                return f.isLastSavedState(o) ? f.busy(!1) : (f.storeState(o), f.expectedStateId = o.id, h.pushState(o.id, o.title, o.url), f.Adapter.trigger(e, "popstate")), !0
            }, f.replaceState = function(t, n, r, i) {
                if (f.getHashByUrl(r) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== i && f.busy()) return f.pushQueue({
                    scope: f,
                    callback: f.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                f.busy(!0);
                var o = f.createStateObject(t, n, r);
                return f.isLastSavedState(o) ? f.busy(!1) : (f.storeState(o), f.expectedStateId = o.id, h.replaceState(o.id, o.title, o.url), f.Adapter.trigger(e, "popstate")), !0
            };
            if (o) {
                try {
                    f.store = u.parse(o.getItem("History.store")) || {}
                } catch (e) {
                    f.store = {}
                }
                f.normalizeStore()
            } else f.store = {}, f.normalizeStore();
            f.Adapter.bind(e, "unload", f.clearAllIntervals), f.saveState(f.storeState(f.extractState(f.getLocationHref(), !0))), o && (f.onUnload = function() {
                var e, t, n;
                try {
                    e = u.parse(o.getItem("History.store")) || {}
                } catch (t) {
                    e = {}
                }
                for (t in e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {}, f.idToState) f.idToState.hasOwnProperty(t) && (e.idToState[t] = f.idToState[t]);
                for (t in f.urlToId) f.urlToId.hasOwnProperty(t) && (e.urlToId[t] = f.urlToId[t]);
                for (t in f.stateToId) f.stateToId.hasOwnProperty(t) && (e.stateToId[t] = f.stateToId[t]);
                f.store = e, f.normalizeStore(), n = u.stringify(e);
                try {
                    o.setItem("History.store", n)
                } catch (e) {
                    if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                    o.length && (o.removeItem("History.store"), o.setItem("History.store", n))
                }
            }, f.intervalList.push(l(f.onUnload, f.options.storeInterval)), f.Adapter.bind(e, "beforeunload", f.onUnload), f.Adapter.bind(e, "unload", f.onUnload)), f.emulated.pushState || (f.bugs.safariPoll && f.intervalList.push(l(f.safariStatePoll, f.options.safariPollInterval)), "Apple Computer, Inc." !== i.vendor && "Mozilla" !== (i.appCodeName || "") || (f.Adapter.bind(e, "hashchange", function() {
                f.Adapter.trigger(e, "popstate")
            }), f.getHash() && f.Adapter.onDomLoad(function() {
                f.Adapter.trigger(e, "hashchange")
            })))
        }, f.options && f.options.delayInit || f.init()
    }(window);
var MPAjax = {
    uriHash: parent.location.hash,
    clickHref: "",
    on: 1,
    debugMode: 0,
    excludeClass: "noajax",
    scope: "global",
    PlaceID: "",
    SourceID: "",
    ReplaceList: [],
    isHtml5: !1,
    logData: "",
    cover: null,
    links: 'a:not([class*="noajax"], [href*="#"]), .loadajax',
    loader: {
        src: "/static/js/library/mpajax/ajax-loader.gif",
        styles: "/static/js/library/mpajax/styles.css"
    },
    beforeInsertCallback: function() {},
    sendStats: !0,
    show_loader: !0,
    documentHtml: function(e) {
        return '<div class="document-html">' + String(e).replace(/.*<html([\s>])/gi, "").replace(/<(head|body|title|meta)([\s>])/gi, '<div class="document-$1"$2').replace(/<script([\s>])/gi, "<scripts $1").replace(/<\/script>/gi, "</scripts>").replace(/<\/html>.*/gi, "").replace(/<\/(head|body|title|meta|script)>/gi, "</div>") + "</div>"
    },
    dataLogger: function(e) {
        if (0 == this.debugMode) return !1;
        console.log ? console.log(e) : alert(e)
    },
    showLoader: function(e, t) {
        var n = e ? $(e.target) : null;
        t = t || MPAjax.PlaceID;
        var r = {
            src: "/static/js/library/mpajax/ajax-loader.gif",
            styles: "/static/js/library/mpajax/styles.css"
        };
        n && n.attr("data-loader-image") && (r.src = n.attr("data-loader-image")), n = $.extend({}, r, MPAjax.loader), (r = $("<div id='mpajax_cover' class='" + t + "'>")).append($("<img>").attr("src", n.src)), 1 != MPAjax.showLoader.inited && $('<link rel="stylesheet" type="text/css" href="' + n.styles + '">').appendTo("head"), $("#" + t).append(r), MPAjax.cover = r, MPAjax.cover.show(), MPAjax.showLoader.inited = !0
    },
    hideLoader: function() {
        MPAjax.cover.hide()
    },
    onSuccess: function(e) {
        "Explorer" == MP.BrowserDetect.browser && 0 < MPAjax.debugMode && MPAjax.dataLogger("Browser: IE" + MP.BrowserDetect.version), "local" != MPAjax.scope && $(window).scrollTop(0);
        var t = MPAjax.allData = jQuery(MPAjax.documentHtml(e));
        1 < MPAjax.debugMode && MPAjax.dataLogger("parseDOM:" + MPAjax.documentHtml(e)), "global" == MPAjax.scope && (document.title = t.find(".document-title:first").text()), jQuery.each(MPAjax.ReplaceList, function(e, n) {
            if (n.place = void 0 !== n.place && 0 < $("#" + n.place).length ? n.place : "mainBlock" == n.type ? MPAjax.PlaceID : "", n.source = void 0 !== n.source ? n.source : "mainBlock" == n.type ? MPAjax.SourceID : "", $placeBlock = null, "" != n.place ? ($placeBlock = jQuery("div[id=" + n.place + "]"), 0 == $placeBlock.length && ("mainBlock" == n.type ? ($placeBlock = jQuery("#" + MPAjax.PlaceID), 0 < MPAjax.debugMode && MPAjax.dataLogger("Р‘Р»РѕРє РѕР±РЅРѕРІР»РµРЅРёСЏ СЃ ID='" + n.place + "' РЅРµ РЅР°Р№РґРµРЅ. Р‘СѓРґРµС‚ РѕР±РЅРѕРІР»РµРЅ СЌР»РµРјРµРЅС‚ <BODY>.")) : $placeBlock = null)) : ($placeBlock = jQuery("#" + MPAjax.PlaceID), 0 == $placeBlock.length && ($placeBlock = jQuery("body")), 0 < MPAjax.debugMode && MPAjax.dataLogger("ID РѕР±РЅРѕРІР»СЏРµРјРѕРіРѕ Р±Р»РѕРєР° (PlaceID) РЅРµ Р·Р°РґР°РЅ. Р‘СѓРґРµС‚ РѕР±РЅРѕРІР»РµРЅ СЌР»РµРјРµРЅС‚ <BODY>.")), "" != n.source ? ($printData = t.find("#" + n.source), 0 == $printData.length && ("mainBlock" == n.type ? (0 < MPAjax.debugMode && MPAjax.dataLogger("Р‘Р»РѕРє РѕР±РЅРѕРІР»РµРЅРёСЏ СЃ ID='" + n.source + "' РЅРµ РЅР°Р№РґРµРЅ. Р‘СѓРґРµС‚ Р·Р°РіСЂСѓР¶РµРЅ РІРµСЃСЊ РїРѕР»СѓС‡РµРЅРЅС‹Р№ РґРѕРєСѓРјРµРЅС‚."), $dataBody = t.find(".document-body:first"), $printData = 0 == $dataBody.length ? t : $dataBody) : $printData = null)) : (0 < MPAjax.debugMode && MPAjax.dataLogger("ID Р±Р»РѕРєР° РѕР±РЅРѕРІР»РµРЅРёСЏ (SourceID) РЅРµ Р·Р°РґР°РЅ. Р‘СѓРґРµС‚ Р·Р°РіСЂСѓР¶РµРЅ РІРµСЃСЊ РїРѕР»СѓС‡РµРЅРЅС‹Р№ РґРѕРєСѓРјРµРЅС‚."), $dataBody = t.find(".document-body:first"), $printData = 0 == $dataBody.length ? t : $dataBody), null != $placeBlock && null != $printData) {
                var r = $printData.html();
                r = (r = r.replace(/<scripts/gi, "<script")).replace(/<\/scripts>/gi, "<\/script>"), 1 < MPAjax.debugMode && MPAjax.dataLogger("printData:" + r), MPAjax.beforeInsertCallback(n, r);
                try {
                    $placeBlock.empty().html(r)
                } catch (e) {
                    console.log(e.message)
                }
                MPAjax.commonCallback(n, r), MPAjax.specialCallback(n, r), $printData = null
            }
        }), dataBody = t = null
    },
    commonCallback: function(e) {},
    specialCallback: function(e) {
        var t = window[MPAjax.customCallback];
        "function" == typeof t && t(e)
    },
    getData: function(e) {
        var t = this;
        !0 === MPAjax.show_loader && MPAjax.showLoader(MPAjax.loader.currentProps.event, MPAjax.loader.currentProps.place), "undefined" != typeof mainSliderTimer && clearInterval(mainSliderTimer);
        var n = {
                "X-Requested-With": null
            },
            r = "html"; - 1 < e.indexOf("/api/outreach/go") && (n = {
            "X-Requested-With": "XMLHttpRequest"
        }, r = "json"), MPAjax.request && MPAjax.request.abort(), MPAjax.request = $.ajax({
            url: e,
            crossDomain: !0,
            headers: n,
            type: "GET",
            dataType: r,
            success: function(e) {
                if ("string" == typeof e) MPAjax.onSuccess(e);
                else {
                    MPAjax.getData(e.result.redirect);
                    try {
                        history.pushState("", !1, e.result.redirect)
                    } catch (e) {
                        MP.log(e.message)
                    }
                }
                MPAjax.scope = "global"
            },
            error: function(e, t, n) {
                "" !== e.responseText && MPAjax.onSuccess(e.responseText)
            },
            complete: function() {
                t.hideLoader(), MPAjax.request = null
            }
        })
    },
    checkLink: function(e) {
        try {
            var t = $(e)[0].href.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1]
        } catch (e) {
            console.log("РћС€РёР±РєР° РІ checkLink")
        }
        return t == location.host
    },
    serverName: function() {
        var e = document.location.protocol + "//" + (document.location.hostname || document.location.host);
        return document.location.port && (e += ":" + document.location.port), e
    },
    setHandler: function() {
        jQuery("body").on("click", MPAjax.links, MPAjax.clickHandler)
    },
    BindHref: function() {
        0 == MPAjax.on ? 0 < MPAjax.debugMode && MPAjax.dataLogger("Ajax mode is off: MPAjax.on=0;") : (0 < MPAjax.debugMode && ("" == MPAjax.PlaceID && MPAjax.dataLogger("MPAjax.PlaceID param is undefined"), "" == MPAjax.SourceID && MPAjax.dataLogger("MPAjax.SourceID param is undefined")), MPAjax.setHandler())
    },
    clickHandler: function(e) {
        if (MPAjax.$target = jQuery(this), 1 == MPAjax.sendStats && MPAjax.sendStat(this), !MPAjax.$target.data("href") && !MPAjax.checkLink(this)) return !0;
        if (MPAjax.customCallback = MPAjax.$target.attr("data-callback"), 0 < MPAjax.debugMode && MPAjax.dataLogger("click:" + MPAjax.$target.attr("href")), 2 == e.which || e.metaKey) return !0;
        var t = MPAjax.$target.attr("href") || MPAjax.$target.attr("data-href");
        "Explorer" != MP.BrowserDetect.browser && MPAjax.isHtml5 || "/" == t || (t = "" != (t = t.replace("/?", "")) ? "/index.php?" + t : "/"), 1 < MPAjax.debugMode && MPAjax.dataLogger("place:" + MPAjax.$target.data("place") + "; source:" + MPAjax.$target.data("source")), MPAjax.ReplaceList = [];
        var n = {};
        return "local" == MPAjax.$target.data("scope") ? (MPAjax.scope = "local", n.place = MPAjax.$target.data("place"), n.source = MPAjax.$target.data("source"), MPAjax.ReplaceList.unshift({
            place: MPAjax.$target.data("place"),
            source: MPAjax.$target.data("source"),
            type: "mainBlock"
        }), void 0 !== MPAjax.$target.data("extra") && jQuery.each(MPAjax.$target.data("extra"), function(e, t) {
            MPAjax.ReplaceList.push({
                place: e,
                source: t,
                type: "extra"
            })
        }), !0 === MPAjax.show_loader && (MPAjax.loader.currentProps = {
            event: e,
            place: n.place
        }), MPAjax.localAddHistory ? (n.replaces = MPAjax.ReplaceList, History.pushState(n, null, t)) : MPAjax.getData(t)) : (MPAjax.scope = "global", n.place = MPAjax.$target.data("place") || MPAjax.PlaceID, n.source = MPAjax.$target.data("source") || MPAjax.SourceID, MPAjax.ReplaceList.unshift({
            place: n.place,
            source: n.source,
            type: "mainBlock"
        }), void 0 !== MPAjax.$target.data("extra") && jQuery.each(MPAjax.$target.data("extra"), function(e, t) {
            MPAjax.ReplaceList.push({
                place: e,
                source: t,
                type: "extra"
            })
        }), !0 === MPAjax.show_loader && (MPAjax.loader.currentProps = {
            event: e,
            place: n.place
        }), n.replaces = MPAjax.ReplaceList, History.pushState(n, null, t)), !1
    },
    BindHistoryEvents: function() {
        var e = History.getState(),
            t = e.url;
        History.getHash(), MPAjax.ReplaceList = [], MPAjax.ReplaceList.push({
            place: e.data.place,
            source: e.data.source,
            type: "mainBlock"
        }), MPAjax.dataLogger({
            place: e.data.place,
            source: e.data.source,
            type: "mainBlock"
        }), MPAjax.dataLogger(MPAjax.ReplaceList), MPAjax.getData(t.replace(MPAjax.serverName(), ""))
    },
    sendStat: function(e) {
        e = MP.Base64.encode("referer=" + encodeURIComponent(location.href) + "&uri=" + encodeURIComponent(jQuery(e).attr("href"))), $.get("/api/statistics/pageStat/" + e + "/image.png")
    }
};
! function(e, t) {
    e.history && e.history.pushState && (MPAjax.isHtml5 = !0);
    var n = e.History;
    if (!n.enabled) return !1;
    n.Adapter.bind(e, "statechange", MPAjax.BindHistoryEvents)
}(window);
var start_time_reload_content = 0,
    MP = {
        preloadingimageajax: window.location.protocol + "//" + window.location.host + "/static/icon/ajax-loader.gif",
        preloadingtext: "Р—Р°РіСЂСѓР·РєР°...",
        showpreloadingimage: !0,
        datatypesend: "html",
        statusajaxquery: 0,
        checkstatusajaxquery: 1,
        resultData: !1,
        sync: !1,
        cache_query: !1,
        emptybeforequery: !0,
        LoadContent: function(e, t, n, r, i, o) {
            if (MP.checkstatusajaxquery && MP.statusajaxquery) return !1;
            if (MP.preloadingtext || (MP.preloadingtext = "Р—Р°РіСЂСѓР·РєР°..."), MP.statusajaxquery = 1, "object" == typeof e) {
                var a = jQuery(e).attr("target") || jQuery(e).attr("data-target");
                "_blank" != a && "_self" != a && "_parent" != a && "_top" != a && "" != a && (void 0 !== t && "" != t || (t = a)), e = e.href
            }
            if ("" == (e = jQuery.trim(e)) || "/" == e) return MP.statusajaxquery = 0, !1;
            if (void 0 !== r && "" != r || (r = MP.datatypesend), void 0 === t && (t = ""), void 0 === i && (i = ""), 1 == MP.emptybeforequery && 1 == MP.showpreloadingimage) {
                var s = '<div style="text-align:center;font-weight:bold;" class="loading-layer"><img src="' + MP.preloadingimageajax + '" border="0" style="vertical-align:middle;" hspace="5">' + MP.preloadingtext + "</div>";
                jQuery("#" + t).html(s)
            }
            void 0 !== n && n.length > 0 && "string" == typeof n && (n = MP.ParseQueryString(n));
            var l = "";
            "object" == typeof n && (jQuery.each(n, function(e, t) {
                l += e + "=" + t + "&"
            }), l = jQuery.trim(l.substring(0, l.length - 1))), o = void 0 === o || 1 != o, "json" == r && (MP.resultData = !1);
            var c = l.length < 1 ? "GET" : "POST";
            return jQuery.ajax({
                type: c,
                timeout: 1e4,
                dataType: r,
                url: e,
                data: l,
                complete: "",
                error: function(a) {
                    MP.statusajaxquery = 0;
                    var s = parseInt(a.status);
                    if (isNaN(s) && (s = 0), 0 == s) return setTimeout(function() {
                        MP.LoadContent(e, t, n, r, i, o)
                    }, 5e3), !1;
                    if ("json" == r) alert(200 == a.status ? "РћС€РёР±РєР° С„РѕСЂРјРёСЂРѕРІР°РЅРёСЏ JSON С„РѕСЂРјР°С‚Р°" : MP.SetErrorQuery(a)), 1 == MP.emptybeforequery && jQuery("#" + t).empty();
                    else {
                        var l = MP.SetErrorQuery(a);
                        l = '<div style="text-align:center;font-weight:bold;color:red;">' + l + "</div>", 1 == MP.emptybeforequery && jQuery("#" + t).html(l), l = null
                    }
                },
                cache: MP.cache_query,
                async: o,
                success: function(e) {
                    MP.statusajaxquery = 0;
                    var n = typeof i;
                    "html" == r ? "" != t && jQuery("#" + t).html(e) : "undefined" != n && "" != i || (MP.resultData = e), "function" == n && i(e), e = null
                }
            }), MP.cache_query = !1, MP.statusajaxquery = 0, MP.emptybeforequery = !0, !1
        },
        declension: function(e, t) {
            return cases = [2, 0, 1, 1, 1, 2], t[e % 100 > 4 && e % 100 < 20 ? 2 : cases[e % 10 < 5 ? e % 10 : 5]]
        },
        UploadMenu: function(e) {
            this.setActiveLink(e);
            var t = jQuery(e).attr("block-upload") || jQuery(e).attr("data-block-upload");
            return void 0 !== t && "" != t && this.LoadContent(e, t, "", "html", "", 0)
        },
        setActiveLink: function(e) {
            var t = jQuery(e).attr("act-class") || jQuery(e).attr("data-act-class"),
                n = (jQuery(e).attr("block-upload") || jQuery(e).attr("data-block-upload"), jQuery(e).closest(".parentmenu")),
                r = jQuery(n).attr("id") || jQuery(n).attr("data-id");
            return jQuery("#" + r + " a.uploadmenue").each(function(e, n) {
                jQuery(this).hasClass(t) && jQuery(this).removeClass(t)
            }), jQuery(e).addClass(t), !1
        },
        SetErrorQuery: function(e) {
            var t = new Array;
            t[0] = "Р’СЂРµРјСЏ РѕР¶РёРґР°РЅРёСЏ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР° РёСЃС‚РµРєР»Рѕ", t[200] = "OK", t[201] = "Created (РѕР±СЉРµРєС‚ СЃРѕР·РґР°РЅ)", t[202] = "Accepted (РёРЅС„РѕСЂРјР°С†РёСЏ РїСЂРёРЅСЏС‚Р°)", t[203] = "Non-Authoritative Information (РЅРµ Р·Р°СЃР»СѓР¶РёРІР°СЋС‰Р°СЏ РґРѕРІРµСЂРёСЏ РёРЅС„РѕСЂРјР°С†РёСЏ)", t[204] = "No Content (РЅРµС‚ СЃРѕРґРµСЂР¶Р°РЅРёСЏ)", t[205] = "Reset Content (РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚СЊ РёСЃС…РѕРґРЅРѕРµ СЃРѕРґРµСЂР¶Р°РЅРёРµ)", t[206] = "Partial Content (С‡Р°СЃС‚РёС‡РЅРѕРµ СЃРѕРґРµСЂР¶Р°РЅРёРµ)", t[300] = "Multiple Choices (РЅРµСЃРєРѕР»СЊРєРѕ РІР°СЂРёР°РЅС‚РѕРІ РЅР° РІС‹Р±РѕСЂ)", t[301] = "Moved Permanently (СЂРµСЃСѓСЂСЃ РїРµСЂРµРјРµС‰РµРЅ РЅР° РїРѕСЃС‚РѕСЏРЅРЅРѕР№ РѕСЃРЅРѕРІРµ)", t[302] = "Moved Temporarily (СЂРµСЃСѓСЂСЃ РІСЂРµРјРµРЅРЅРѕ РїРµСЂРµРјРµС‰РµРЅ)", t[303] = "See Other (СЃРјРѕС‚СЂРёС‚Рµ РґСЂСѓРіРѕР№ СЂРµСЃСѓСЂСЃ)", t[304] = "Not Modified (РЅРµ РёР·РјРµРЅРёР»СЃСЏ)", t[305] = "Use Proxy (РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РїСЂРѕРєСЃРё-СЃРµСЂРІРµСЂ)", t[400] = "Bad Request (РЅРµРєРѕСЂСЂРµРєС‚РЅС‹Р№ Р·Р°РїСЂРѕСЃ)", t[401] = "Unauthorized (РЅРµС‚ СЂР°Р·СЂРµС€РµРЅРёСЏ)", t[402] = "Payment Required (С‚СЂРµР±СѓРµС‚СЃСЏ РѕРїР»Р°С‚Р°)", t[403] = "Forbidden (РґРѕСЃС‚СѓРї Р·Р°РїСЂРµС‰РµРЅ)", t[404] = "Not Found (Р·Р°РїСЂР°С€РёРІР°РµРјС‹Р№ РґРѕРєСѓРјРµРЅС‚ РЅРµ РЅР°Р№РґРµРЅ)", t[405] = "Method Not Allowed (РЅРµРґРѕРїСѓСЃС‚РёРјС‹Р№ РјРµС‚РѕРґ)", t[406] = "Not Acceptable (РЅРµРїСЂРёРµРјР»РµРјС‹Р№ Р·Р°РїСЂРѕСЃ)", t[407] = "Proxy Authentication Required (РЅРµРѕР±С…РѕРґРёРјР° СЂРµРіРёСЃС‚СЂР°С†РёСЏ РЅР° СЃРµСЂРІРµСЂРµ-РїСЂРµРґСЃС‚Р°РІРёС‚РµР»Рµ)", t[408] = "Request Timeout (РІСЂРµРјСЏ РѕР±СЂР°Р±РѕС‚РєРё Р·Р°РїСЂРѕСЃР° РёСЃС‚РµРєР»Рѕ)", t[409] = "Conflict (РєРѕРЅС„Р»РёРєС‚)", t[410] = "Gone (СЂРµСЃСѓСЂСЃР° Р±РѕР»СЊС€Рµ РЅРµС‚)", t[411] = "Length Required (РЅРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР»РёРЅСѓ)", t[412] = "Precondition Failed (РЅРµ РІС‹РїРѕР»РЅРµРЅРѕ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅРѕРµ СѓСЃР»РѕРІРёРµ)", t[413] = "Request Entity Too Large (Р·Р°РїСЂР°С€РёРІР°РµРјС‹Р№ СЌР»РµРјРµРЅС‚ СЃР»РёС€РєРѕРј РІРµР»РёРє)", t[414] = "Request-URI Too Long (РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ СЂРµСЃСѓСЂСЃР° РІ Р·Р°РїСЂРѕСЃРµ СЃР»РёС€РєРѕРј РґР»РёРЅРЅС‹Р№)", t[415] = "Unsupported Media Type (РЅРµРїРѕРґРґРµСЂР¶РёРІР°РµРјС‹Р№ С‚РёРї СѓСЃС‚СЂРѕР№СЃС‚РІР°)", t[500] = "Internal Server Error (РІРЅСѓС‚СЂРµРЅРЅСЏСЏ РѕС€РёР±РєР° СЃРµСЂРІРµСЂР°)", t[501] = "Not Implemented (С„СѓРЅРєС†РёСЏ РЅРµ СЂРµР°Р»РёР·РѕРІР°РЅР°)", t[502] = "Bad Gateway (РґРµС„РµРєС‚ С€Р»СЋР·Р°)", t[503] = "Service Unavailable (СЃР»СѓР¶Р±Р° РЅРµРґРѕСЃС‚СѓРїРЅР°)", t[504] = "Gateway Timeout (РІСЂРµРјСЏ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‡РµСЂРµР· С€Р»СЋР· РёСЃС‚РµРєР»Рѕ)", t[505] = "HTTP Version Not Supported (РЅРµРїРѕРґРґРµСЂР¶РёРІР°РµРјР°СЏ РІРµСЂСЃРёСЏ HTTP)";
            var n = parseInt(e.status),
                r = "РћС€РёР±РєР° " + n + " - ";
            return void 0 !== t[n] && 200 != n ? r += t[n] : r += e.statusText, r
        },
        ParseQueryString: function(e) {
            var t, n, r;
            void 0 === e || "" === e ? (e = window.location.toString(), n = !0) : n = !1;
            var i = (e = (t = e.indexOf("?")) > -1 ? e.substring(t + 1, e.length) : MP.parseURI_CPU(e)).split("&"),
                o = new Object;
            for (x = 0; x < i.length; x++) r = i[x].split("="), o[unescape(r[0])] = n ? unescape(r[1]).replace(/[+]/g, " ") : r[1];
            return void 0 === o.an && (o.an = "index"), o
        },
        QuerySrtringParam: function(e) {
            for (var t = window.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                if (r[0] == e) return r[1]
            }
            return null
        },
        QueryStringHash: function() {
            return window.location.toString().split("#")[1]
        },
        parseURI_CPU: function(e) {
            var t = new Array; - 1 == e.indexOf(window.location.host) && (e = window.location.toString());
            for (var n = (e = e.substring(window.location.toString().indexOf(window.location.host) + window.location.host.length, window.location.toString().length)).split("/"), r = 0; r < e.length && void 0 !== n[r]; r += 2) t.push(("" == n[r] ? "an" : n[r]) + "=" + n[r + 1]);
            return t.join("&")
        },
        ConvertObjectToURI: function(e) {
            var t = [];
            return "object" == typeof e && (jQuery.each(e, function(e, n) {
                t.push(e + "=" + encodeURIComponent(n))
            }), "?" + t.join("&"))
        },
        HideBlock: function(e, t, n) {
            return void 0 !== t && "" != t || (t = 0), -1 == e.indexOf(".") && -1 == e.indexOf("#") && (e = "#" + e), n ? jQuery(e).animate({
                height: "hide",
                opacity: "hide"
            }, t) : jQuery(e).hide(t), !1
        },
        ShowBlock: function(e, t, n) {
            return void 0 !== t && "" != t || (t = 0), -1 == e.indexOf(".") && -1 == e.indexOf("#") && (e = "#" + e), n ? jQuery(e).animate({
                height: "show",
                opacity: "show"
            }, t) : jQuery(e).show(t), !1
        },
        getCookie: function(e) {
            var t = e + "=",
                n = document.cookie.indexOf(t);
            if (-1 == n) return null;
            var r = document.cookie.indexOf(";", n + t.length);
            return -1 == r && (r = document.cookie.length), unescape(document.cookie.substring(n + t.length, r))
        },
        setCookie: function(e, t, n) {
            valueEscaped = escape(t), expiresDate = new Date, expiresDate.setTime(expiresDate.getTime() + 24 * n * 3600 * 1e3), expires = expiresDate.toGMTString(), newCookie = e + "=" + valueEscaped + "; path=/; expires=" + expires + ";", valueEscaped.length <= 4e3 && (document.cookie = newCookie)
        },
        getPageSize: function() {
            var e, t, n, r;
            return window.innerHeight && window.scrollMaxY ? (e = document.body.scrollWidth, t = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (e = document.body.scrollWidth, t = document.body.scrollHeight) : document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight ? (e = document.documentElement.scrollWidth, t = document.documentElement.scrollHeight) : (e = document.body.offsetWidth, t = document.body.offsetHeight), self.innerHeight ? (n = self.innerWidth, r = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (n = document.documentElement.clientWidth, r = document.documentElement.clientHeight) : document.body && (n = document.body.clientWidth, r = document.body.clientHeight), pageHeight = t < r ? r : t, pageWidth = e < n ? n : e, [pageWidth, pageHeight, n, r]
        },
        getModal: function(e) {
            MP.getModal.buffer = MP.getModal.buffer || {};
            var t = jQuery.extend({}, {
                    animate: !0,
                    closeClass: "closeBtn",
                    defaultCss: !0,
                    onOpen: null,
                    onClose: null,
                    cloned: !1,
                    simpleStyles: !1
                }, e),
                n = jQuery(document.body),
                r = jQuery("#modal_overlay");
            if (void 0 !== MP.getModal.modal) return t.simpleStyles && i(MP.getModal.modal), MP.getModal.modal;

            function i(e) {
                jQuery('<style>.close-thik:after{content: "вњ–";}.close-thik:hover{color:red}</style>').appendTo("head"), e.find("#modal").css({
                    "background-color": "transparent",
                    "box-shadow": "none",
                    border: "none",
                    padding: "0"
                }), e.find(".closeBtn").css({
                    "background-image": "",
                    "background-position": "",
                    "background-color": ""
                }).addClass("close-thik")
            }
            return function() {
                r = jQuery("<div id='modal_overlay'></div>"), $modal = jQuery("<div id='modal'></div>");
                var e = jQuery("<div class='closeBtn'></div>");
                $modal_content = jQuery("<div id='modal_content'>"), $modal.append(e).append($modal_content), r.append($modal), t.defaultCss && (r.css({
                    display: "none",
                    position: "fixed",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    "z-index": "800",
                    "text-align": "center",
                    "background-color": "rgba(0, 0, 0, 0.5)"
                }), e.css({
                    width: "15px",
                    height: "15px",
                    display: "inline",
                    position: "absolute",
                    "background-image": "url('/static/js/library/poll/images/sprite_icontrols.png')",
                    "background-position": "-45px -217px",
                    "background-color": "black",
                    padding: "0",
                    "margin-top": "1px",
                    top: "10px",
                    right: "10px",
                    cursor: "pointer"
                }), $modal.css({
                    display: "inline-block",
                    "vertical-align": "middle",
                    "background-color": "#fff",
                    padding: "15px 25px 15px 20px",
                    position: "relative",
                    "text-align": "left",
                    "-webkit-box-shadow": "#FFF 0px 0px 10px",
                    "-moz-border-radius": "5px",
                    "-webkit-border-radius": "5px",
                    "border-radius": "5px",
                    border: "2px #AAA solid",
                    "z-index": "2147483647",
                    color: "#000"
                }), jQuery("<style>#modal_overlay:after{display: inline-block; width: 0;height: 100%;vertical-align: middle; content: '';}.close-thik:after{content: \"вњ–\";}.close-thik:hover{color:red}</style>").appendTo("head"));
                n.append(r)
            }(), t.simpleStyles && i(r), r.on("click", "." + t.closeClass, function(e) {
                r.close(), e.preventDefault()
            }), r.setHtml = function(e) {
                if (1 == t.cloned && (e = jQuery(e).clone()), void 0 === e || 0 == $(e).length) {
                    if (void 0 === MP.getModal.buffer[$(e).selector]) return console.log("РЁР°Р±Р»РѕРЅ РґР»СЏ РјРѕРґР°Р»СЊРЅРѕРіРѕ РѕРєРЅР° РЅРµ РѕР±РЅР°СЂСѓР¶РµРЅ. РћС‚РјРµРЅР° РґРµР№СЃС‚РІРёСЏ"), !1;
                    e = jQuery(MP.getModal.buffer[$(e).selector])
                }
                return MP.getModal.buffer[$(e).selector] = $(e).clone(), "object" == typeof e && e.show(), r.find("#modal_content").html(e), jQuery("body").on("keydown.modal", function(e) {
                    27 == e.keyCode && jQuery("." + t.closeClass).click()
                }), this
            }, r.open = function() {
                return t.animate ? jQuery(this).animate({
                    height: "show",
                    opacity: "show"
                }, 100) : r.show(), t.onOpen && "function" == typeof t.onOpen && t.onOpen(), this
            }, r.close = function() {
                return t.animate ? jQuery(this).animate({
                    height: "hide",
                    opacity: "hide"
                }, 100) : r.hide(), t.onClose && "function" == typeof t.onClose && t.onClose(), r.find("#modal_content").empty(), jQuery("body").off("keydown.modal"), this
            }, r.hideDefaultHideButton = function() {
                return jQuery(this).find(".closeBtn").hide(), this
            }, r.showDefaultHideButton = function() {
                return jQuery(this).find(".closeBtn").show(), this
            }, this.getModal.modal = r, r
        },
        checkFlashPlugin: function() {
            var ua = navigator.userAgent.toLowerCase(),
                isIE = -1 != ua.indexOf("msie") && -1 == ua.indexOf("opera") && -1 == ua.indexOf("webtv"),
                version = 0,
                newversion, lastVersion = 25,
                i, plugin;
            if (isIE) try {
                for (i = 10; i <= lastVersion; i++) eval('new ActiveXObject("ShockwaveFlash.ShockwaveFlash.' + i + '")') && (version = i)
            } catch (e) {} else
                for (i in navigator.plugins) plugin = navigator.plugins[i], void 0 != plugin.name && plugin.name.indexOf("Flash") > -1 && (newversion = /\d+/.exec(plugin.description), null == newversion && (newversion = 0), newversion > version && (version = newversion));
            return MP.checkFlashPlugin = function() {
                return !!version
            }, MP.checkFlashPlugin()
        },
        PaintDiv: function(e, t, n) {
            list = jQuery(document).find(e), jQuery.each(list, function(e, r) {
                e % 2 && ("class" == n ? jQuery(r).addClass(t) : jQuery(r).css("background", t))
            })
        },
        PaintTable: function(e, t, n) {
            "class" == n ? jQuery(e + " tr:nth-child(even)").addClass(t) : jQuery(e + " tr:nth-child(even)").css("background", t)
        },
        SetCityProfile: function(e, t) {
            var n, r = parseInt(jQuery("select#country_ank").val());
            return !isNaN(r) && r > 0 ? (url = "/api/sessauth/cityList/" + r, MP.preloadingtext = "Р—Р°РіСЂСѓР¶Р°РµРј СЃРїРёСЃРѕРє РіРѕСЂРѕРґРѕРІ...", setTimeout(function() {
                MP.preloadingtext = ""
            }, 500), MP.LoadContent(url, e, "", "html", function(t) {
                n = '<select id="city" name="city" class="select_city"><option value="0">Р’С‹Р±РµСЂРёС‚Рµ СЃС‚СЂР°РЅСѓ</option>', n += t, n += "</select>", jQuery("#" + e).html(n)
            })) : (n = '<select id="city" name="city" class="select_city"><option value="0">Р’С‹Р±РµСЂРёС‚Рµ СЃС‚СЂР°РЅСѓ</option></select>', jQuery("#" + e).html(n), n = null), !1
        },
        IncludeFile: function(file, type, onerror) {
            var script = document.createElement("script");
            type = type || "text/javascript", onerror = onerror || "", script.type = type, -1 == type.indexOf("javascript") ? (script.rel = "stylesheet", script.href = file) : (script.src = file, script.defer = !0, onerror && (script.onerror = function() {
                eval(onerror)
            })), document.getElementsByTagName("head").item(0).appendChild(script)
        },
        BindFormSubmit: function(e) {
            jQuery("#" + e.formID).bind("submit", function() {
                var t = jQuery("#" + e.formID).serialize(),
                    n = jQuery("#" + e.formID).attr("action") || jQuery("#" + e.formID).attr("data-action");
                return MP.LoadContent(n, e.errorBlock, t, "json", "", 1), 0 != MP.resultData && (1 == MP.resultData.error ? alert(MP.resultData.text) : MP.LoadContent(e.reloadFuncPage, e.updateBlock), MP.resultData = !1), !1
            })
        },
        GetStringTo1251: function(e) {
            return MP.CP1251ToUTF8(unescape(e))
        },
        CP1251ToUTF8: function(e) {
            for (var t = original = converted = "", n = e.length; n--;) original = e.charCodeAt(n), 184 === original ? converted = 1105 : 168 === original ? converted = 1025 : original > 191 && original < 256 ? converted = original + 848 : converted = original, t = String.fromCharCode(converted) + t;
            return t
        },
        UpdateContentAction: function(e, t, n, r) {
            var i = Math.floor((new Date).getTime() / 1e3);
            return !(start_time_reload_content - i + n > 0) && (start_time_reload_content = Math.floor((new Date).getTime() / 1e3), MP.LoadContent(e, t, "", r))
        },
        GetDescriptionDocumentMeta: function(e) {
            metas = document.getElementsByTagName("meta");
            for (var t = 0, n = metas.length; t < n; t++)
                if (metas[t].name.toLowerCase() == e) return metas[t].content;
            return ""
        },
        log: function(e) {
            "object" == typeof console && "function" == typeof console.log && console.log(e)
        },
        isInt: function(e) {
            return !isNaN(e) && parseInt(Number(e)) == e && !isNaN(parseInt(e, 10))
        },
        debug: function(e, t, n, r) {
            if ("1" == MP.isDebug) {
                var i = (new Date - MP.timer) / 1e3;
                r = r || "", "object" == typeof console && console.log("%c[ " + t + " " + i + " : " + e + " ]", n, r)
            }
        },
        consoleColors: {
            error: "background: red; color: #fff; font-weight: bolder",
            info: "background: aqua; color: #333; font-weight: bolder;"
        },
        Base64: {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t, n, r, i, o, a, s, l = "",
                    c = 0;
                for (e = MP.Base64._utf8_encode(e); c < e.length;) i = (t = e.charCodeAt(c++)) >> 2, o = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, a = (15 & n) << 2 | (r = e.charCodeAt(c++)) >> 6, s = 63 & r, isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64), l = l + this._keyStr.charAt(i) + this._keyStr.charAt(o) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
                return l
            },
            decode: function(e) {
                var t, n, r, i, o, a, s = "",
                    l = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) t = this._keyStr.indexOf(e.charAt(l++)) << 2 | (i = this._keyStr.indexOf(e.charAt(l++))) >> 4, n = (15 & i) << 4 | (o = this._keyStr.indexOf(e.charAt(l++))) >> 2, r = (3 & o) << 6 | (a = this._keyStr.indexOf(e.charAt(l++))), s += String.fromCharCode(t), 64 != o && (s += String.fromCharCode(n)), 64 != a && (s += String.fromCharCode(r));
                return s = MP.Base64._utf8_decode(s)
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                }
                return t
            },
            _utf8_decode: function(e) {
                for (var t = "", n = 0, r = c1 = c2 = 0; n < e.length;)(r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((31 & r) << 6 | 63 & c2), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((15 & r) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
                return t
            }
        },
        validate: {
            phone: function(e) {
                return /\+7\([\d]{3}\)[\d]{3}-[\d]{2}-[\d]{2}/.test(e.replace(/\s/g, ""))
            },
            email: function(e) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            },
            clearPhone: function(e) {
                return e.replace(/^(\+)|[\(\s\)\-]/g, "")
            }
        },
        notify: function(e, t, n, r) {
            if (!e) return console.error("РќРµ СѓРєР°Р·Р°РЅ С‚РµРєСЃС‚"), !1;
            t = void 0 !== t ? t : "def";
            var i = {
                delay: 3e3,
                top: 20,
                left: 20
            };
            MP.notify.styles = {
                def: {
                    "background-color": "rgba(255,255,255,0.85)",
                    color: "#000"
                },
                info: {
                    "background-color": "rgba(26, 152, 255,0.85)",
                    color: "#FFF"
                },
                error: {
                    "background-color": "rgba(255, 26, 26,0.85)",
                    color: "#FFF"
                }
            };
            var o = function() {
                    var e;
                    (r = r || {}) && r instanceof Object && (e = $.extend(!0, {}, i, r));
                    return e
                }(),
                a = function() {
                    var e;
                    if (void 0 !== n && n && n.target)(e = {
                        left: event.clientX + o.left,
                        top: event.clientY + o.top
                    }) || console.log("РљРѕРѕСЂРґРёРЅР°С‚С‹ РєР»РёРєР° РЅРµ РѕРїСЂРµРґРµР»РµРЅС‹");
                    else if (void 0 !== n && n) {
                        var t = $(n),
                            r = t.offset();
                        r || console.log("РљРѕРѕСЂРґРёРЅР°С‚С‹ СЌР»РµРјРµРЅС‚Р° " + n + "  РЅРµ РѕРїСЂРµРґРµР»РµРЅС‹", r), e = {
                            left: r.left + t.width() + o.left,
                            top: r.top + t.height() + o.top
                        }
                    } else e = {
                        left: document.documentElement.clientWidth - 300 + o.left,
                        top: 50 + o.top
                    };
                    return e
                }();
            void 0 === MP.notify.styles[t] && console.log("РќРµРєРѕСЂСЂРµРєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ: style + style", MP.notify.styles, t);
            var s = $("<div class='systemAlert'>").appendTo("body").css({
                position: "absolute",
                left: a.left + "px",
                top: a.top + "px",
                "z-index": "10000",
                padding: "4px 6px",
                border: "1px solid #B2B2B2",
                "border-radius": "4px",
                "text-align": "center",
                font: "normal 14px/1.3 arial, sans-serif",
                color: MP.notify.styles[t].color,
                "background-color": MP.notify.styles[t]["background-color"],
                "max-width": "300px",
                "box-shadow": "0 0 5px 0 rgba(0,0,0,0.25)"
            }).html(e);
            ! function() {
                var e = document.documentElement.clientHeight + window.pageYOffset,
                    t = document.documentElement.clientWidth,
                    n = s.offset();
                n.left < 0 && (n.left = 0);
                n.top < 0 && (n.top = 0);
                n.left + s.width() > t && (n.left = t - s.outerWidth());
                n.top + s.height() > e && (n.top = e - s.outerHeight());
                s.css({
                    left: n.left,
                    top: n.top
                })
            }(), setTimeout(function() {
                s.remove()
            }, o.delay)
        },
        checkAdBlock: function(e) {
            return null == MP.getCookie("checkAdBlock") && (0 != jQuery(".showMessageAdBlock").length && void window.setTimeout(function() {
                MP.showCheckResultAdBlock = function() {
                    jQuery(".showMessageAdBlock").slideDown(500), jQuery(".showMessageAdBlock .closeMessageAdBlock").on("click", function() {
                        jQuery(".showMessageAdBlock").hide(500).remove(), jQuery(".showMessageAdBlock .closeMessageAdBlock").off("click")
                    }), MP.setCookie("checkAdBlock", 1, 7)
                }, MP.IncludeFile("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "text/javascript", "MP.showCheckResultAdBlock()")
            }, e))
        }
    };
MP.isDebug = MP.ParseQueryString().debug, MP.timer = new Date, MP.BrowserDetect = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS"
        },
        searchString: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t].string,
                    r = e[t].prop;
                if (this.versionSearchString = e[t].versionSearch || e[t].identity, n) {
                    if (-1 != n.indexOf(e[t].subString)) return e[t].identity
                } else if (r) return e[t].identity
            }
        },
        searchVersion: function(e) {
            var t = e.indexOf(this.versionSearchString);
            if (-1 != t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    }, MP.BrowserDetect.init(), jQuery(document).ready(function() {
        "object" == typeof hs && (hs.graphicsDir = "/static/js/vendor/highslide/graphics", hs.outlineType = "rounded-white", hs.wrapperClassName = "wide-border", hs.creditsText = hs.creditsTitle = window.location.hostname, hs.creditsHref = "http://" + window.location.hostname, hs.closeTitle = hs.closeText = "Р—Р°РєСЂС‹С‚СЊ", hs.resizeTitle = "РР·РјРµРЅРёС‚СЊ СЂР°Р·РјРµСЂ", hs.loadingText = "Р—Р°РіСЂСѓР·РєР°...", hs.loadingTitle = "РљР»РёРєРЅРёС‚Рµ РґР»СЏ Р·Р°РєСЂС‹С‚РёСЏ", hs.moveText = hs.moveTitle = "РџРµСЂРµРјРµСЃС‚РёС‚СЊ", hs.fullExpandTitle = "Р Р°Р·РІРµСЂРЅСѓС‚СЊ РЅР° С„Р°РєС‚РёС‡РµСЃРєРёР№ СЂР°Р·РјРµСЂ"), jQuery(".uploadmenue").on("click", function() {
            return MP.UploadMenu(this)
        }), jQuery("iframe").each(function() {
            var e = jQuery(this).attr("src");
            void 0 !== e && e.indexOf("youtube") > 0 && e.indexOf("transparent") < 0 && jQuery(this).attr("src", e + "?wmode=transparent"), e = null
        }), jQuery.fn.setModal = function(e) {
            var t = MP.getModal(e);
            return t.setHtml(jQuery(this)), t.open(), t
        }, window.pagercounter = new Object, jQuery(document).on("click", ".pageruploadnext", function() {
            var e = this,
                t = jQuery(this).attr("data-url"),
                n = jQuery(this).attr("data-fredirect");
            return void 0 !== n && "1" == n ? (void 0 !== (n = jQuery(this).attr("data-redirect")) && "" != n && window.location.replace(n), !1) : (jQuery(".pagerloader").remove(), jQuery(e).after('<div class="pagerloader" id="pagerloader"></div>'), MP.LoadContent(t, "pagerloader", "", "html", function(t) {
                var n = jQuery(e).attr("data-changetext"),
                    r = jQuery(e).attr("data-dist"),
                    i = jQuery(e).attr("data-parent");
                void 0 !== i && "" != i ? jQuery(e).closest(i).remove() : jQuery(e).remove(), jQuery("#" + r).append(t), void 0 === window.pagercounter[r] && (window.pagercounter[r] = 1);
                var o = jQuery("#" + r).find(".pageruploadnext"),
                    a = parseInt(jQuery(e).attr("data-countupload"));
                !isNaN(a) && window.pagercounter[r] >= a ? (jQuery(o).attr("data-fredirect", 1), "submit" == e.type || "button" == e.type ? jQuery(o).val(n) : jQuery(o).text(n)) : window.pagercounter[r]++
            }), !1)
        }), jQuery("body").on("keydown", "input.numeric, input.phone, input.IP", function(e) {
            if (46 == e.keyCode || 8 == e.keyCode) return !0;
            if (jQuery(this).hasClass("numeric")) {
                if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) return !0
            } else if (jQuery(this).hasClass("phone")) {
                if (e.keyCode >= 48 && e.keyCode <= 57 || 45 == e.keyCode || 40 == e.keyCode || 41 == e.keyCode || 32 == e.keyCode || 173 == e.keyCode) return !0
            } else if (jQuery(this).hasClass("IP") && (e.keyCode >= 48 && e.keyCode <= 57 || 46 == e.keyCode || 190 == e.keyCode)) return !0;
            return !1
        })
    }),
    function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(r, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 9)
    }([function(e, t, n) {
        e.exports = n(8)
    }, function(e, t, n) {
        var r = n(5),
            i = n(6),
            o = n(7);
        e.exports = function(e) {
            return r(e) || i(e) || o()
        }
    }, function(e, t) {
        function n(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(r, i)
        }
        e.exports = function(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(i, o) {
                    var a = e.apply(t, r);

                    function s(e) {
                        n(a, i, o, s, l, "next", e)
                    }

                    function l(e) {
                        n(a, i, o, s, l, "throw", e)
                    }
                    s(void 0)
                })
            }
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        e.exports = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }
    }, function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function(e, t, n) {
        var r = function(e) {
            "use strict";
            var t, n = Object.prototype,
                r = n.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                o = i.iterator || "@@iterator",
                a = i.asyncIterator || "@@asyncIterator",
                s = i.toStringTag || "@@toStringTag";

            function l(e, t, n, r) {
                var i = t && t.prototype instanceof g ? t : g,
                    o = Object.create(i.prototype),
                    a = new A(r || []);
                return o._invoke = function(e, t, n) {
                    var r = u;
                    return function(i, o) {
                        if (r === f) throw new Error("Generator is already running");
                        if (r === h) {
                            if ("throw" === i) throw o;
                            return j()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = C(a, n);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === u) throw r = h, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = f;
                            var l = c(e, t, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? h : d, l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (r = h, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }(e, n, a), o
            }

            function c(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = l;
            var u = "suspendedStart",
                d = "suspendedYield",
                f = "executing",
                h = "completed",
                p = {};

            function g() {}

            function m() {}

            function v() {}
            var y = {};
            y[o] = function() {
                return this
            };
            var b = Object.getPrototypeOf,
                _ = b && b(b(k([])));
            _ && _ !== n && r.call(_, o) && (y = _);
            var x = v.prototype = g.prototype = Object.create(y);

            function w(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function S(e) {
                var t;
                this._invoke = function(n, i) {
                    function o() {
                        return new Promise(function(t, o) {
                            ! function t(n, i, o, a) {
                                var s = c(e[n], e, i);
                                if ("throw" !== s.type) {
                                    var l = s.arg,
                                        u = l.value;
                                    return u && "object" == typeof u && r.call(u, "__await") ? Promise.resolve(u.__await).then(function(e) {
                                        t("next", e, o, a)
                                    }, function(e) {
                                        t("throw", e, o, a)
                                    }) : Promise.resolve(u).then(function(e) {
                                        l.value = e, o(l)
                                    }, function(e) {
                                        return t("throw", e, o, a)
                                    })
                                }
                                a(s.arg)
                            }(n, i, t, o)
                        })
                    }
                    return t = t ? t.then(o, o) : o()
                }
            }

            function C(e, n) {
                var r = e.iterator[n.method];
                if (r === t) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (e.iterator.return && (n.method = "return", n.arg = t, C(e, n), "throw" === n.method)) return p;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var i = c(r, e.iterator, n.arg);
                if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, p;
                var o = i.arg;
                return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, p) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
            }

            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function T(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(E, this), this.reset(!0)
            }

            function k(e) {
                if (e) {
                    var n = e[o];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            a = function n() {
                                for (; ++i < e.length;)
                                    if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                                return n.value = t, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                return {
                    next: j
                }
            }

            function j() {
                return {
                    value: t,
                    done: !0
                }
            }
            return m.prototype = x.constructor = v, v.constructor = m, v[s] = m.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(x), e
            }, e.awrap = function(e) {
                return {
                    __await: e
                }
            }, w(S.prototype), S.prototype[a] = function() {
                return this
            }, e.AsyncIterator = S, e.async = function(t, n, r, i) {
                var o = new S(l(t, n, r, i));
                return e.isGeneratorFunction(n) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }, w(x), x[s] = "Generator", x[o] = function() {
                return this
            }, x.toString = function() {
                return "[object Generator]"
            }, e.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, e.values = k, A.prototype = {
                constructor: A,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var n = this;

                    function i(r, i) {
                        return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                            s = a.completion;
                        if ("root" === a.tryLoc) return i("end");
                        if (a.tryLoc <= this.prev) {
                            var l = r.call(a, "catchLoc"),
                                c = r.call(a, "finallyLoc");
                            if (l && c) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            } else if (l) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), p
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                T(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, n, r) {
                    return this.delegate = {
                        iterator: k(e),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = t), p
                }
            }, e
        }(e.exports);
        try {
            regeneratorRuntime = r
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(1),
            i = n.n(r),
            o = n(0),
            a = n.n(o),
            s = n(2),
            l = n.n(s),
            c = n(3),
            u = n.n(c),
            d = n(4),
            f = n.n(d),
            h = function(e) {
                return {
                    email: /\S+@\S+\.\S+/,
                    tel: /^[\s()+-]*([0-9][\s()+-]*){10,11}$/,
                    name: /^[a-zA-ZР°-СЏРђ-РЇ-]{1,20}$/,
                    fullname: /([a-zA-ZР°-СЏРђ-РЇ-]+[ ])[a-zA-ZР°-СЏРђ-РЇ-]+/,
                    city: /^[Р°-СЏРђ-РЇ]+(?:[\s-][Р°-СЏРђ-РЇ]+)*$/,
                    age: /^([0-9.,]{1,4})$/,
                    weight: /^([0-9.,]{2,5})$/,
                    height: /^([0-9.,]{2,5})$/
                } [e]
            },
            p = function() {
                var e = l()(a.a.mark(function e(t) {
                    var n, r, i, o, s, l, c;
                    return a.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.value, r = {
                                    field: "email",
                                    value: n,
                                    checkAccount: 0
                                }, i = {
                                    method: "POST",
                                    mode: "cors",
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(r)
                                }, e.next = 5, fetch("/api/sessauth/checkField/", i);
                            case 5:
                                return o = e.sent, e.next = 8, o.json();
                            case 8:
                                return s = e.sent, l = s.status, c = s.result.error, t.dataset.message = c, e.abrupt("return", 1 === l);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            g = function(e) {
                var t = e.value,
                    n = e.minLength,
                    r = void 0 === n ? 0 : n,
                    i = e.maxLength,
                    o = void 0 === i ? 0 : i;
                return t.length ? r && t.length < r ? (e.dataset.message = "РќСѓР¶РЅРѕ РІРІРµСЃС‚Рё РѕС‚ ".concat(r, " СЃРёРјРІРѕР»РѕРІ"), !1) : !(o && t.length > o && (e.dataset.message = "РќСѓР¶РЅРѕ РІРІРµСЃС‚Рё РґРѕ ".concat(o, " СЃРёРјРІРѕР»РѕРІ"), 1)) : (e.dataset.message = "РћС‚ ".concat(r, " РґРѕ ").concat(o, " СЃРёРјРІРѕР»РѕРІ"), !1)
            },
            m = function(e) {
                var t = {
                        en: /[a-z]/g,
                        EN: /[A-Z]/g,
                        ru: /[Р°-СЏ\С‘]/g,
                        RU: /[Рђ-РЇ\РЃ]/g,
                        number: /[0-9]/g,
                        space: /\s/g,
                        dash: /\-\вЂ”\вЂ“/g,
                        spec1: /[\-\+\(\)]/g,
                        spec2: /[\!\?\,\.\:\;\'\"\`\вЂ”\В«\В»]/g,
                        spec3: /[\=\[\]\{\}\@\#\$\%\в„–]/g,
                        spec4: /[\^\&\*\~\\\/\|\_\<\>]/g,
                        math: /[0-9\-\+\=\(\)\*\^]/g,
                        decimal: /[0-9\.\,]/g,
                        letter: /[a-zA-ZР°-СЏРђ-РЇ\С‘\РЃ]/g
                    },
                    n = e.value;
                return e.dataset.checkPatterns.split(" ").forEach(function(e) {
                    n = n.replace(t[e], "")
                }), n.length && (e.dataset.message = "РќРµ РїРѕРґС…РѕРґСЏС‚: ".concat(n)), !n.length
            },
            v = function() {
                function e(t) {
                    var n = t.node;
                    u()(this, e);
                    var r = n.querySelectorAll(this.checkSelectors);
                    this.form = n, this.initElements(r)
                }
                var t, n, r;
                return f()(e, [{
                    key: "initElements",
                    value: function(e) {
                        var t = this;
                        this.elements = [], i()(e).forEach(function(e) {
                            var n = e.type,
                                r = e.dataset,
                                i = r.fieldset,
                                o = r.required,
                                a = r.file;
                            e.isFieldset = i, e.required = e.required || o, e.isFile = "file" === n || a || !1, e.isTextarea = "textarea" === e.tagName.toLowerCase(), t.elements.push(e), e.required && e.classList.add("required")
                        }), this.addListeners(), this.elements.forEach(function(e) {
                            if (!e.value) return !1;
                            t.validate(e)()
                        })
                    }
                }, {
                    key: "addListeners",
                    value: function() {
                        var e = this;
                        this.button = this.form.querySelector('[type="submit"]'), this.button.addEventListener("submit", this.submitHandler.bind(this)), this.button.addEventListener("click", this.submitHandler.bind(this)), this.checkButton(), this.elements.forEach(function(t) {
                            return t.isFieldset ? i()(t.elements).forEach(function(n) {
                                n.addEventListener("change", e.validate(t))
                            }) : t.isFile ? t.addEventListener("change", e.validate(t)) : (t.addEventListener("input", e.validate(t)), t.addEventListener("invalid", e.validate(t)), void t.addEventListener("focusout", e.customValidate(t)))
                        })
                    }
                }, {
                    key: "validate",
                    value: function(e) {
                        var t = this;
                        return function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                preventDefault: function() {}
                            }).preventDefault(), e.isFieldset ? t.validateFieldset(e) : e.isFile ? t.validateFile(e) : t.validateField(e)
                        }
                    }
                }, {
                    key: "customValidate",
                    value: function(e) {
                        var t = this;
                        return l()(a.a.mark(function n() {
                            var r, i, o, s;
                            return a.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.type, i = e.dataset.type, (s = {
                                                email: p
                                            })[o = r || i]) {
                                            n.next = 5;
                                            break
                                        }
                                        return n.abrupt("return", !0);
                                    case 5:
                                        return n.next = 7, s[o](e);
                                    case 7:
                                        e.isValid = n.sent, t.showValidity(e);
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }, n)
                        }))
                    }
                }, {
                    key: "validateFieldset",
                    value: function(e) {
                        var t = e.dataset,
                            n = t.min,
                            r = t.max,
                            o = t.novalidate,
                            a = e.elements,
                            s = i()(a).filter(function(e) {
                                var t = e.tagName,
                                    n = e.checked;
                                return "input" === t.toLowerCase() && n
                            }).length;
                        e.value = s, e.isValid = o ? s >= 1 : n && r ? s >= n && s <= r : n ? s >= n : r ? s <= r : s >= 1, this.showValidity(e)
                    }
                }, {
                    key: "validateFile",
                    value: (r = l()(a.a.mark(function e(t) {
                        var n, r, o, s, l, c, u, d, f, h, p, g, m, v, y, b, _;
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = t.files, r = t.files.length, o = void 0 === r ? 0 : r, s = t.multiple, l = void 0 !== s && s, c = t.dataset, u = c.extension, d = void 0 === u ? "" : u, f = c.min, h = void 0 === f ? 1 : f, p = c.max, g = void 0 === p ? 100 : p, m = c.maxSize, v = void 0 === m ? 5120 : m, y = d.split(","), b = function(e) {
                                        var t = e.name,
                                            n = e.size,
                                            r = t.toLowerCase();
                                        return !!y.filter(function(e) {
                                            return r.includes(".".concat(e))
                                        }).length && n < 1024 * v * 1024
                                    }, _ = i()(n).filter(b).length, t.isValid = l ? o >= h && o <= g && o === _ : o === _, this.showValidity(t);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function(e) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "validateField",
                    value: (n = l()(a.a.mark(function e(t) {
                        var n, r, i, o, s, l, c, u, d, f, p, v;
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = t.value, r = t.pattern, i = t.type, o = t.validity.valid, s = t.dataset, l = s.type, c = s.novalidate, u = s.pattern, d = s.checkPatterns, f = t.minLength && -1 !== t.minLength ? t.minLength : 0, p = t.maxLength && -1 !== t.maxLength ? t.maxLength : 0, v = u ? new RegExp(u) : h(l || i), t.isValid = c ? n.length >= 1 : !r && d ? m(t) : !r && v ? v.test(n) : o, t.isValid = t.isValid && (f || p) ? g(t) : t.isValid, this.showValidity(t);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function(e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "showValidity",
                    value: function(e) {
                        var t = e.classList,
                            n = e.isValid,
                            r = e.required,
                            i = e.value;
                        if (t.remove("valid", "invalid"), !i && !r) return !1;
                        t.add(n ? "valid" : "invalid"), this.showError(e), this.checkButton()
                    }
                }, {
                    key: "showError",
                    value: function(e) {
                        if (e.errorNode && (e.parentNode.removeChild(e.errorNode), delete e.errorNode), e.isValid) return !0;
                        e.errorNode = this.createErrorElement(e), e.parentNode.insertBefore(e.errorNode, e.nextSibling)
                    }
                }, {
                    key: "createErrorElement",
                    value: function(e) {
                        var t = document.createElement("p");
                        return t.classList.add("error-message"), t.innerText = function(e) {
                            var t = e.type,
                                n = e.isFieldset,
                                r = e.isFile,
                                i = e.multiple,
                                o = void 0 !== i && i,
                                a = e.dataset,
                                s = a.type,
                                l = a.message,
                                c = a.min,
                                u = a.max,
                                d = a.maxSize,
                                f = {
                                    email: "РќР°РїСЂРёРјРµСЂ ivanov@yandex.ru",
                                    tel: "РќР°РїСЂРёРјРµСЂ +79123456789",
                                    fullname: "РќР°РїСЂРёРјРµСЂ РРІР°РЅРѕРІ РРІР°РЅ",
                                    weight: "РќР°РїСЂРёРјРµСЂ 55",
                                    height: "РќР°РїСЂРёРјРµСЂ 175",
                                    checkbox: {
                                        between: "РћС‚ ".concat(c, " РґРѕ ").concat(u, " РІР°СЂРёР°РЅС‚РѕРІ"),
                                        min: "РћС‚ ".concat(c, " РІР°СЂРёР°РЅС‚РѕРІ"),
                                        max: "Р”Рѕ ".concat(u, " РІР°СЂРёР°РЅС‚РѕРІ"),
                                        default: "РњРёРЅРёРјСѓРј РѕРґРёРЅ РІР°СЂРёР°РЅС‚"
                                    },
                                    files: {
                                        between: "РћС‚ ".concat(c, " РґРѕ ").concat(u, " С„Р°Р№Р»РѕРІ"),
                                        min: "РћС‚ ".concat(c, " С„Р°Р№Р»РѕРІ"),
                                        max: "Р”Рѕ ".concat(u, " С„Р°Р№Р»РѕРІ"),
                                        default: "Р’РѕР·РјРѕР¶РЅРѕ РЅРµСЃРєРѕР»СЊРєРѕ С„Р°Р№Р»РѕРІ",
                                        one: "РћРґРёРЅ С„Р°Р№Р»"
                                    },
                                    default: "РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ"
                                },
                                h = o ? c && u ? f.files.between : c ? f.files.min : u ? f.files.max : f.files.default : f.files.one;
                            h = d ? "".concat(h, " РґРѕ ").concat(d, " РњР‘") : h;
                            var p = c && u ? f.checkbox.between : c ? f.checkbox.min : u ? f.checkbox.max : f.checkbox.default;
                            return l || (t && f[t] ? f[t] : s && f[s] ? f[s] : n ? p : r ? h : f.default)
                        }(e), t
                    }
                }, {
                    key: "checkButton",
                    value: function() {
                        var e = this.button;
                        if (this.isValidForm) return e.removeAttribute("disabled");
                        e.setAttribute("disabled", "disabled")
                    }
                }, {
                    key: "submitHandler",
                    value: (t = l()(a.a.mark(function e(t) {
                        var n, r, i, o, s, l, c, u, d = this;
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.preventDefault(), this.isValidForm) {
                                        e.next = 4;
                                        break
                                    }
                                    return this.elements.forEach(function(e) {
                                        d.validate(e)({
                                            preventDefault: function() {}
                                        })
                                    }), e.abrupt("return", !1);
                                case 4:
                                    if (n = this.button, r = this.form, i = this.form, o = i.method, s = void 0 === o ? "POST" : o, l = i.action) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 7:
                                    return n.classList.add("loading"), e.next = 10, fetch(l, {
                                        method: s,
                                        body: new FormData(r)
                                    });
                                case 10:
                                    if (200 !== (c = e.sent).status) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 14, c.json();
                                case 14:
                                    e.t0 = e.sent, e.next = 18;
                                    break;
                                case 17:
                                    e.t0 = c.statusText;
                                case 18:
                                    u = e.t0, document.dispatchEvent(new CustomEvent("formResponse", {
                                        detail: {
                                            form: r,
                                            data: u
                                        }
                                    }));
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function(e) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "checkSelectors",
                    get: function() {
                        return ['input:not([type="radio"]):not([type="checkbox"])', "[data-fieldset]", "textarea"].join(",")
                    }
                }, {
                    key: "isValidForm",
                    get: function() {
                        return !this.elements.filter(function(e) {
                            return !e.isValid && e.required
                        }).length
                    }
                }]), e
            }(),
            y = [];
        i()(document.querySelectorAll("[data-check]")).forEach(function(e) {
            y.push(new v({
                node: e
            }))
        });
        var b = document.querySelector("body");
        new MutationObserver(function(e) {
            e.forEach(function(e) {
                var t = e.addedNodes,
                    n = e.type;
                i()(t).forEach(function(e) {
                    var t = e.dataset,
                        r = (t = void 0 === t ? {} : t).check;
                    void 0 !== r && r && "childList" === n && y.push(new v({
                        node: e
                    }))
                })
            })
        }).observe(b, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !0
        })
    }]);
