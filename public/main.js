const $673cc58ccc248e92$export$5d5c23288d7d853 = (root)=>{
    root.innerHTML = `
  <div class="page main-page">
    <div class="container">
      <h2 class="title main-title">Checkers</h2>
      <div class="wrapper main____wrapper">
        <a class="btn main__item create" href="#">Create</a>
        <a class="btn main__item join" href="#">Join</a>
      </div>
    </div>
  </div>
  `;
};
const $673cc58ccc248e92$export$c23b5a45687815e7 = (root)=>{
    root.innerHTML = `
  <div class="page multiplayer-create__page">
    <div class="multiplayer-create__copy-modal">Copied</div>
    <div class="container">
    <h2 class="title multiplayer-create__title">Create Room</h2>
      <div class="wrapper multiplayer-create__wrapper">
        <div class="multiplayer-create__subtitle">Click to copy</div>
        <div class="multiplayer-create__item multiplayer-create__code">z3qssffc</div>
        <div class="multiplayer-create__item multiplayer-create__link">https://stackoverflow.com#z3qssffc</div>
        <div class="multiplayer-create__waiting">Waiting for second player...</div>
      </div>
    </div>
  </div>
  `;
};
const $673cc58ccc248e92$export$4a9a3fc575e7937 = (root)=>{
    root.innerHTML = `
  <div class="page multiplayer-join__page">
    <div class="container">
      <h2 class="title multiplayer-join__title">Join Room</h2>
      <div class="wrapper multiplayer-join__wrapper">
        <input class="multiplayer-join__input" type="text" placeholder="room code">   
        <a class="btn multiplayer-join__button" href="#">Join</a>
      </div>
      
    </div>
  </div>
  `;
};
const $673cc58ccc248e92$export$3f52ba45a502cedb = (root)=>{
    root.innerHTML = `
  <div class="page game__page">
    <div class="game__end-wrapper">
      <div class="game__end-title">White (Opponent) Win</div>
      <a class="game__end-btn restart" href="#">Play Again</a>
      <a class="game__end-btn menu" href="#">To Menu</a>
    </div>
    <div class="container">
      <div class="game-info__wrapper">
        <div class="game-info__player"></div>
        <div class="game-info__move"></div>
      </div>
      <div class="game__board"></div>
    </div>
  </div>
  `;
};


var $2da645054219ac63$exports = {};
/*!
 * Socket.IO v4.6.0
 * (c) 2014-2023 Guillermo Rauch
 * Released under the MIT License.
 */ !function(t, e) {
    $2da645054219ac63$exports = e();
}($2da645054219ac63$exports, function() {
    "use strict";
    function t1(e) {
        return t1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t1(e);
    }
    function e1(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function n1(t, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
    }
    function r1(t, e, r) {
        return e && n1(t.prototype, e), r && n1(t, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t;
    }
    function i1() {
        return i1 = Object.assign ? Object.assign.bind() : function(t) {
            for(var e = 1; e < arguments.length; e++){
                var n = arguments[e];
                for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
        }, i1.apply(this, arguments);
    }
    function o1(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && a1(t, e);
    }
    function s1(t2) {
        return s1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, s1(t2);
    }
    function a1(t3, e2) {
        return a1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t;
        }, a1(t3, e2);
    }
    function c1() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function u1(t4, e3, n2) {
        return u1 = c1() ? Reflect.construct.bind() : function(t, e, n) {
            var r = [
                null
            ];
            r.push.apply(r, e);
            var i = new (Function.bind.apply(t, r))();
            return n && a1(i, n.prototype), i;
        }, u1.apply(null, arguments);
    }
    function h1(t5) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return h1 = function(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            var n;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
            }
            function r() {
                return u1(t, arguments, s1(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), a1(r, t);
        }, h1(t5);
    }
    function f1(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function l(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return f1(t);
    }
    function p(t) {
        var e = c1();
        return function() {
            var n, r = s1(t);
            if (e) {
                var i = s1(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return l(this, n);
        };
    }
    function d(t, e) {
        for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s1(t)););
        return t;
    }
    function y() {
        return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = d(t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
            }
        }, y.apply(this, arguments);
    }
    function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var n = 0, r = new Array(e); n < e; n++)r[n] = t[n];
        return r;
    }
    function g(t6, e4) {
        var n3 = "undefined" != typeof Symbol && t6[Symbol.iterator] || t6["@@iterator"];
        if (!n3) {
            if (Array.isArray(t6) || (n3 = function(t, e) {
                if (t) {
                    if ("string" == typeof t) return v(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0;
                }
            }(t6)) || e4 && t6 && "number" == typeof t6.length) {
                n3 && (t6 = n3);
                var r = 0, i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t6.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t6[r++]
                        };
                    },
                    e: function(t) {
                        throw t;
                    },
                    f: i
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, s = !0, a = !1;
        return {
            s: function() {
                n3 = n3.call(t6);
            },
            n: function() {
                var t = n3.next();
                return s = t.done, t;
            },
            e: function(t) {
                a = !0, o = t;
            },
            f: function() {
                try {
                    s || null == n3.return || n3.return();
                } finally{
                    if (a) throw o;
                }
            }
        };
    }
    var m = Object.create(null);
    m.open = "0", m.close = "1", m.ping = "2", m.pong = "3", m.message = "4", m.upgrade = "5", m.noop = "6";
    var k = Object.create(null);
    Object.keys(m).forEach(function(t) {
        k[m[t]] = t;
    });
    for(var b = {
        type: "error",
        data: "parser error"
    }, w = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), _ = "function" == typeof ArrayBuffer, E = function(t, e, n) {
        var r, i = t.type, o = t.data;
        return w && o instanceof Blob ? e ? n(o) : O(o, n) : _ && (o instanceof ArrayBuffer || (r = o, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer)) ? e ? n(o) : O(new Blob([
            o
        ]), n) : n(m[i] + (o || ""));
    }, O = function(t7, e) {
        var n = new FileReader();
        return n.onload = function() {
            var t = n.result.split(",")[1];
            e("b" + t);
        }, n.readAsDataURL(t7);
    }, A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", R = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), T = 0; T < A.length; T++)R[A.charCodeAt(T)] = T;
    var C = "function" == typeof ArrayBuffer, B = function(t, e) {
        if ("string" != typeof t) return {
            type: "message",
            data: N(t, e)
        };
        var n = t.charAt(0);
        return "b" === n ? {
            type: "message",
            data: S(t.substring(1), e)
        } : k[n] ? t.length > 1 ? {
            type: k[n],
            data: t.substring(1)
        } : {
            type: k[n]
        } : b;
    }, S = function(t8, e5) {
        if (C) {
            var n4 = function(t) {
                var e, n, r, i, o, s = 0.75 * t.length, a = t.length, c = 0;
                "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
                var u = new ArrayBuffer(s), h = new Uint8Array(u);
                for(e = 0; e < a; e += 4)n = R[t.charCodeAt(e)], r = R[t.charCodeAt(e + 1)], i = R[t.charCodeAt(e + 2)], o = R[t.charCodeAt(e + 3)], h[c++] = n << 2 | r >> 4, h[c++] = (15 & r) << 4 | i >> 2, h[c++] = (3 & i) << 6 | 63 & o;
                return u;
            }(t8);
            return N(n4, e5);
        }
        return {
            base64: !0,
            data: t8
        };
    }, N = function(t, e) {
        return "blob" === e && t instanceof ArrayBuffer ? new Blob([
            t
        ]) : t;
    }, x = String.fromCharCode(30);
    function L(t9) {
        if (t9) return function(t) {
            for(var e in L.prototype)t[e] = L.prototype[e];
            return t;
        }(t9);
    }
    L.prototype.on = L.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }, L.prototype.once = function(t, e) {
        function n() {
            this.off(t, n), e.apply(this, arguments);
        }
        return n.fn = e, this.on(t, n), this;
    }, L.prototype.off = L.prototype.removeListener = L.prototype.removeAllListeners = L.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + t];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for(var i = 0; i < r.length; i++)if ((n = r[i]) === e || n.fn === e) {
            r.splice(i, 1);
            break;
        }
        return 0 === r.length && delete this._callbacks["$" + t], this;
    }, L.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for(var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)e[r - 1] = arguments[r];
        if (n) {
            r = 0;
            for(var i = (n = n.slice(0)).length; r < i; ++r)n[r].apply(this, e);
        }
        return this;
    }, L.prototype.emitReserved = L.prototype.emit, L.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
    }, L.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length;
    };
    var P = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
    function j(t) {
        for(var e6 = arguments.length, n6 = new Array(e6 > 1 ? e6 - 1 : 0), r = 1; r < e6; r++)n6[r - 1] = arguments[r];
        return n6.reduce(function(e, n) {
            return t.hasOwnProperty(n) && (e[n] = t[n]), e;
        }, {});
    }
    var q = P.setTimeout, I = P.clearTimeout;
    function D(t, e) {
        e.useNativeTimers ? (t.setTimeoutFn = q.bind(P), t.clearTimeoutFn = I.bind(P)) : (t.setTimeoutFn = P.setTimeout.bind(P), t.clearTimeoutFn = P.clearTimeout.bind(P));
    }
    var F, M = function(t10) {
        o1(i, t10);
        var n = p(i);
        function i(t, r, o) {
            var s;
            return e1(this, i), (s = n.call(this, t)).description = r, s.context = o, s.type = "TransportError", s;
        }
        return r1(i);
    }(h1(Error)), U = function(t11) {
        o1(i, t11);
        var n7 = p(i);
        function i(t) {
            var r;
            return e1(this, i), (r = n7.call(this)).writable = !1, D(f1(r), t), r.opts = t, r.query = t.query, r.socket = t.socket, r;
        }
        return r1(i, [
            {
                key: "onError",
                value: function(t, e, n) {
                    return y(s1(i.prototype), "emitReserved", this).call(this, "error", new M(t, e, n)), this;
                }
            },
            {
                key: "open",
                value: function() {
                    return this.readyState = "opening", this.doOpen(), this;
                }
            },
            {
                key: "close",
                value: function() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
                }
            },
            {
                key: "send",
                value: function(t) {
                    "open" === this.readyState && this.write(t);
                }
            },
            {
                key: "onOpen",
                value: function() {
                    this.readyState = "open", this.writable = !0, y(s1(i.prototype), "emitReserved", this).call(this, "open");
                }
            },
            {
                key: "onData",
                value: function(t) {
                    var e = B(t, this.socket.binaryType);
                    this.onPacket(e);
                }
            },
            {
                key: "onPacket",
                value: function(t) {
                    y(s1(i.prototype), "emitReserved", this).call(this, "packet", t);
                }
            },
            {
                key: "onClose",
                value: function(t) {
                    this.readyState = "closed", y(s1(i.prototype), "emitReserved", this).call(this, "close", t);
                }
            },
            {
                key: "pause",
                value: function(t) {}
            }, 
        ]), i;
    }(L), V = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), H = {}, K = 0, Y = 0;
    function z(t) {
        var e = "";
        do e = V[t % 64] + e, t = Math.floor(t / 64);
        while (t > 0);
        return e;
    }
    function W() {
        var t = z(+new Date());
        return t !== F ? (K = 0, F = t) : t + "." + z(K++);
    }
    for(; Y < 64; Y++)H[V[Y]] = Y;
    function $(t) {
        var e = "";
        for(var n in t)t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return e;
    }
    function J(t) {
        for(var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++){
            var o = n[r].split("=");
            e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
        }
        return e;
    }
    var Q = !1;
    try {
        Q = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (t12) {}
    var X = Q;
    function G(t) {
        var e = t.xdomain;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!e || X)) return new XMLHttpRequest();
        } catch (t13) {}
        if (!e) try {
            return new P[[
                "Active"
            ].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (t14) {}
    }
    function Z() {}
    var tt = null != new G({
        xdomain: !1
    }).responseType, et = function(t15) {
        o1(s, t15);
        var n8 = p(s);
        function s(t) {
            var r;
            if (e1(this, s), (r = n8.call(this, t)).polling = !1, "undefined" != typeof location) {
                var i = "https:" === location.protocol, o = location.port;
                o || (o = i ? "443" : "80"), r.xd = "undefined" != typeof location && t.hostname !== location.hostname || o !== t.port, r.xs = t.secure !== i;
            }
            var a = t && t.forceBase64;
            return r.supportsBinary = tt && !a, r;
        }
        return r1(s, [
            {
                key: "name",
                get: function() {
                    return "polling";
                }
            },
            {
                key: "doOpen",
                value: function() {
                    this.poll();
                }
            },
            {
                key: "pause",
                value: function(t) {
                    var e = this;
                    this.readyState = "pausing";
                    var n = function() {
                        e.readyState = "paused", t();
                    };
                    if (this.polling || !this.writable) {
                        var r = 0;
                        this.polling && (r++, this.once("pollComplete", function() {
                            --r || n();
                        })), this.writable || (r++, this.once("drain", function() {
                            --r || n();
                        }));
                    } else n();
                }
            },
            {
                key: "poll",
                value: function() {
                    this.polling = !0, this.doPoll(), this.emitReserved("poll");
                }
            },
            {
                key: "onData",
                value: function(t16) {
                    var e7 = this;
                    (function(t, e) {
                        for(var n = t.split(x), r = [], i = 0; i < n.length; i++){
                            var o = B(n[i], e);
                            if (r.push(o), "error" === o.type) break;
                        }
                        return r;
                    })(t16, this.socket.binaryType).forEach(function(t) {
                        if ("opening" === e7.readyState && "open" === t.type && e7.onOpen(), "close" === t.type) return e7.onClose({
                            description: "transport closed by the server"
                        }), !1;
                        e7.onPacket(t);
                    }), "closed" !== this.readyState && (this.polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll());
                }
            },
            {
                key: "doClose",
                value: function() {
                    var t = this, e = function() {
                        t.write([
                            {
                                type: "close"
                            }
                        ]);
                    };
                    "open" === this.readyState ? e() : this.once("open", e);
                }
            },
            {
                key: "write",
                value: function(t17) {
                    var e8 = this;
                    this.writable = !1, function(t18, e) {
                        var n = t18.length, r = new Array(n), i = 0;
                        t18.forEach(function(t19, o) {
                            E(t19, !1, function(t) {
                                r[o] = t, ++i === n && e(r.join(x));
                            });
                        });
                    }(t17, function(t) {
                        e8.doWrite(t, function() {
                            e8.writable = !0, e8.emitReserved("drain");
                        });
                    });
                }
            },
            {
                key: "uri",
                value: function() {
                    var t = this.query || {}, e = this.opts.secure ? "https" : "http", n = "";
                    !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = W()), this.supportsBinary || t.sid || (t.b64 = 1), this.opts.port && ("https" === e && 443 !== Number(this.opts.port) || "http" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port);
                    var r = $(t);
                    return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "");
                }
            },
            {
                key: "request",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return i1(t, {
                        xd: this.xd,
                        xs: this.xs
                    }, this.opts), new nt(this.uri(), t);
                }
            },
            {
                key: "doWrite",
                value: function(t20, e9) {
                    var n = this, r = this.request({
                        method: "POST",
                        data: t20
                    });
                    r.on("success", e9), r.on("error", function(t, e) {
                        n.onError("xhr post error", t, e);
                    });
                }
            },
            {
                key: "doPoll",
                value: function() {
                    var t = this, e10 = this.request();
                    e10.on("data", this.onData.bind(this)), e10.on("error", function(e, n) {
                        t.onError("xhr poll error", e, n);
                    }), this.pollXhr = e10;
                }
            }, 
        ]), s;
    }(U), nt = function(t21) {
        o1(i, t21);
        var n9 = p(i);
        function i(t, r) {
            var o;
            return e1(this, i), D(f1(o = n9.call(this)), r), o.opts = r, o.method = r.method || "GET", o.uri = t, o.async = !1 !== r.async, o.data = void 0 !== r.data ? r.data : null, o.create(), o;
        }
        return r1(i, [
            {
                key: "create",
                value: function() {
                    var t = this, e = j(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
                    var n = this.xhr = new G(e);
                    try {
                        n.open(this.method, this.uri, this.async);
                        try {
                            if (this.opts.extraHeaders) for(var r in n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0), this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this.opts.extraHeaders[r]);
                        } catch (t24) {}
                        if ("POST" === this.method) try {
                            n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                        } catch (t22) {}
                        try {
                            n.setRequestHeader("Accept", "*/*");
                        } catch (t23) {}
                        "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = function() {
                            4 === n.readyState && (200 === n.status || 1223 === n.status ? t.onLoad() : t.setTimeoutFn(function() {
                                t.onError("number" == typeof n.status ? n.status : 0);
                            }, 0));
                        }, n.send(this.data);
                    } catch (e11) {
                        return void this.setTimeoutFn(function() {
                            t.onError(e11);
                        }, 0);
                    }
                    "undefined" != typeof document && (this.index = i.requestsCount++, i.requests[this.index] = this);
                }
            },
            {
                key: "onError",
                value: function(t) {
                    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
                }
            },
            {
                key: "cleanup",
                value: function(t) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.xhr.onreadystatechange = Z, t) try {
                            this.xhr.abort();
                        } catch (t) {}
                        "undefined" != typeof document && delete i.requests[this.index], this.xhr = null;
                    }
                }
            },
            {
                key: "onLoad",
                value: function() {
                    var t = this.xhr.responseText;
                    null !== t && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
                }
            },
            {
                key: "abort",
                value: function() {
                    this.cleanup();
                }
            }, 
        ]), i;
    }(L);
    if (nt.requestsCount = 0, nt.requests = {}, "undefined" != typeof document) {
        if ("function" == typeof attachEvent) attachEvent("onunload", rt);
        else if ("function" == typeof addEventListener) addEventListener("onpagehide" in P ? "pagehide" : "unload", rt, !1);
    }
    function rt() {
        for(var t in nt.requests)nt.requests.hasOwnProperty(t) && nt.requests[t].abort();
    }
    var it = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(t) {
        return Promise.resolve().then(t);
    } : function(t, e) {
        return e(t, 0);
    }, ot = P.WebSocket || P.MozWebSocket, st = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), at = function(t25) {
        o1(i2, t25);
        var n10 = p(i2);
        function i2(t) {
            var r;
            return e1(this, i2), (r = n10.call(this, t)).supportsBinary = !t.forceBase64, r;
        }
        return r1(i2, [
            {
                key: "name",
                get: function() {
                    return "websocket";
                }
            },
            {
                key: "doOpen",
                value: function() {
                    if (this.check()) {
                        var t = this.uri(), e = this.opts.protocols, n = st ? {} : j(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                        this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                        try {
                            this.ws = st ? new ot(t, e, n) : e ? new ot(t, e) : new ot(t);
                        } catch (t26) {
                            return this.emitReserved("error", t26);
                        }
                        this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners();
                    }
                }
            },
            {
                key: "addEventListeners",
                value: function() {
                    var t = this;
                    this.ws.onopen = function() {
                        t.opts.autoUnref && t.ws._socket.unref(), t.onOpen();
                    }, this.ws.onclose = function(e) {
                        return t.onClose({
                            description: "websocket connection closed",
                            context: e
                        });
                    }, this.ws.onmessage = function(e) {
                        return t.onData(e.data);
                    }, this.ws.onerror = function(e) {
                        return t.onError("websocket error", e);
                    };
                }
            },
            {
                key: "write",
                value: function(t27) {
                    var e = this;
                    this.writable = !1;
                    for(var n11 = function(n) {
                        var r = t27[n], i = n === t27.length - 1;
                        E(r, e.supportsBinary, function(t) {
                            try {
                                e.ws.send(t);
                            } catch (t28) {}
                            i && it(function() {
                                e.writable = !0, e.emitReserved("drain");
                            }, e.setTimeoutFn);
                        });
                    }, r2 = 0; r2 < t27.length; r2++)n11(r2);
                }
            },
            {
                key: "doClose",
                value: function() {
                    void 0 !== this.ws && (this.ws.close(), this.ws = null);
                }
            },
            {
                key: "uri",
                value: function() {
                    var t = this.query || {}, e = this.opts.secure ? "wss" : "ws", n = "";
                    this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = W()), this.supportsBinary || (t.b64 = 1);
                    var r = $(t);
                    return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "");
                }
            },
            {
                key: "check",
                value: function() {
                    return !!ot;
                }
            }, 
        ]), i2;
    }(U), ct = {
        websocket: at,
        polling: et
    }, ut = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ht = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor", 
    ];
    function ft(t) {
        var e12 = t, n12 = t.indexOf("["), r3 = t.indexOf("]");
        -1 != n12 && -1 != r3 && (t = t.substring(0, n12) + t.substring(n12, r3).replace(/:/g, ";") + t.substring(r3, t.length));
        for(var i, o, s = ut.exec(t || ""), a = {}, c = 14; c--;)a[ht[c]] = s[c] || "";
        return -1 != n12 && -1 != r3 && (a.source = e12, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = function(t, e) {
            var n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
            "/" != e.slice(0, 1) && 0 !== e.length || r.splice(0, 1);
            "/" == e.slice(-1) && r.splice(r.length - 1, 1);
            return r;
        }(0, a.path), a.queryKey = (i = a.query, o = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, e, n) {
            e && (o[e] = n);
        }), o), a;
    }
    var lt = function(n13) {
        o1(a, n13);
        var s2 = p(a);
        function a(n) {
            var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e1(this, a), (r = s2.call(this)).writeBuffer = [], n && "object" === t1(n) && (o = n, n = null), n ? (n = ft(n), o.hostname = n.host, o.secure = "https" === n.protocol || "wss" === n.protocol, o.port = n.port, n.query && (o.query = n.query)) : o.host && (o.hostname = ft(o.host).host), D(f1(r), o), r.secure = null != o.secure ? o.secure : "undefined" != typeof location && "https:" === location.protocol, o.hostname && !o.port && (o.port = r.secure ? "443" : "80"), r.hostname = o.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), r.port = o.port || ("undefined" != typeof location && location.port ? location.port : r.secure ? "443" : "80"), r.transports = o.transports || [
                "polling",
                "websocket"
            ], r.writeBuffer = [], r.prevBufferLen = 0, r.opts = i1({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !0
            }, o), r.opts.path = r.opts.path.replace(/\/$/, "") + (r.opts.addTrailingSlash ? "/" : ""), "string" == typeof r.opts.query && (r.opts.query = J(r.opts.query)), r.id = null, r.upgrades = null, r.pingInterval = null, r.pingTimeout = null, r.pingTimeoutTimer = null, "function" == typeof addEventListener && (r.opts.closeOnBeforeunload && (r.beforeunloadEventListener = function() {
                r.transport && (r.transport.removeAllListeners(), r.transport.close());
            }, addEventListener("beforeunload", r.beforeunloadEventListener, !1)), "localhost" !== r.hostname && (r.offlineEventListener = function() {
                r.onClose("transport close", {
                    description: "network connection lost"
                });
            }, addEventListener("offline", r.offlineEventListener, !1))), r.open(), r;
        }
        return r1(a, [
            {
                key: "createTransport",
                value: function(t) {
                    var e = i1({}, this.opts.query);
                    e.EIO = 4, e.transport = t, this.id && (e.sid = this.id);
                    var n = i1({}, this.opts.transportOptions[t], this.opts, {
                        query: e,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    });
                    return new ct[t](n);
                }
            },
            {
                key: "open",
                value: function() {
                    var t, e = this;
                    if (this.opts.rememberUpgrade && a.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                    else {
                        if (0 === this.transports.length) return void this.setTimeoutFn(function() {
                            e.emitReserved("error", "No transports available");
                        }, 0);
                        t = this.transports[0];
                    }
                    this.readyState = "opening";
                    try {
                        t = this.createTransport(t);
                    } catch (t29) {
                        return this.transports.shift(), void this.open();
                    }
                    t.open(), this.setTransport(t);
                }
            },
            {
                key: "setTransport",
                value: function(t30) {
                    var e = this;
                    this.transport && this.transport.removeAllListeners(), this.transport = t30, t30.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function(t) {
                        return e.onClose("transport close", t);
                    });
                }
            },
            {
                key: "probe",
                value: function(t31) {
                    var e = this, n = this.createTransport(t31), r4 = !1;
                    a.priorWebsocketSuccess = !1;
                    var i3 = function() {
                        r4 || (n.send([
                            {
                                type: "ping",
                                data: "probe"
                            }
                        ]), n.once("packet", function(t) {
                            if (!r4) {
                                if ("pong" === t.type && "probe" === t.data) {
                                    if (e.upgrading = !0, e.emitReserved("upgrading", n), !n) return;
                                    a.priorWebsocketSuccess = "websocket" === n.name, e.transport.pause(function() {
                                        r4 || "closed" !== e.readyState && (f(), e.setTransport(n), n.send([
                                            {
                                                type: "upgrade"
                                            }
                                        ]), e.emitReserved("upgrade", n), n = null, e.upgrading = !1, e.flush());
                                    });
                                } else {
                                    var i = new Error("probe error");
                                    i.transport = n.name, e.emitReserved("upgradeError", i);
                                }
                            }
                        }));
                    };
                    function o() {
                        r4 || (r4 = !0, f(), n.close(), n = null);
                    }
                    var s = function(t) {
                        var r = new Error("probe error: " + t);
                        r.transport = n.name, o(), e.emitReserved("upgradeError", r);
                    };
                    function c() {
                        s("transport closed");
                    }
                    function u() {
                        s("socket closed");
                    }
                    function h(t) {
                        n && t.name !== n.name && o();
                    }
                    var f = function() {
                        n.removeListener("open", i3), n.removeListener("error", s), n.removeListener("close", c), e.off("close", u), e.off("upgrading", h);
                    };
                    n.once("open", i3), n.once("error", s), n.once("close", c), this.once("close", u), this.once("upgrading", h), n.open();
                }
            },
            {
                key: "onOpen",
                value: function() {
                    if (this.readyState = "open", a.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade) for(var t = 0, e = this.upgrades.length; t < e; t++)this.probe(this.upgrades[t]);
                }
            },
            {
                key: "onPacket",
                value: function(t) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch(this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type){
                        case "open":
                            this.onHandshake(JSON.parse(t.data));
                            break;
                        case "ping":
                            this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                            break;
                        case "error":
                            var e = new Error("server error");
                            e.code = t.data, this.onError(e);
                            break;
                        case "message":
                            this.emitReserved("data", t.data), this.emitReserved("message", t.data);
                    }
                }
            },
            {
                key: "onHandshake",
                value: function(t) {
                    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout();
                }
            },
            {
                key: "resetPingTimeout",
                value: function() {
                    var t = this;
                    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(function() {
                        t.onClose("ping timeout");
                    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
                }
            },
            {
                key: "onDrain",
                value: function() {
                    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
                }
            },
            {
                key: "flush",
                value: function() {
                    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        var t = this.getWritablePackets();
                        this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush");
                    }
                }
            },
            {
                key: "getWritablePackets",
                value: function() {
                    if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
                    for(var t32, e13 = 1, n14 = 0; n14 < this.writeBuffer.length; n14++){
                        var r5 = this.writeBuffer[n14].data;
                        if (r5 && (e13 += "string" == typeof (t32 = r5) ? function(t) {
                            for(var e = 0, n = 0, r = 0, i = t.length; r < i; r++)(e = t.charCodeAt(r)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
                            return n;
                        }(t32) : Math.ceil(1.33 * (t32.byteLength || t32.size))), n14 > 0 && e13 > this.maxPayload) return this.writeBuffer.slice(0, n14);
                        e13 += 2;
                    }
                    return this.writeBuffer;
                }
            },
            {
                key: "write",
                value: function(t, e, n) {
                    return this.sendPacket("message", t, e, n), this;
                }
            },
            {
                key: "send",
                value: function(t, e, n) {
                    return this.sendPacket("message", t, e, n), this;
                }
            },
            {
                key: "sendPacket",
                value: function(t, e, n, r) {
                    if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                        (n = n || {}).compress = !1 !== n.compress;
                        var i = {
                            type: t,
                            data: e,
                            options: n
                        };
                        this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush();
                    }
                }
            },
            {
                key: "close",
                value: function() {
                    var t = this, e = function() {
                        t.onClose("forced close"), t.transport.close();
                    }, n15 = function n() {
                        t.off("upgrade", n), t.off("upgradeError", n), e();
                    }, r = function() {
                        t.once("upgrade", n15), t.once("upgradeError", n15);
                    };
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function() {
                        t.upgrading ? r() : e();
                    }) : this.upgrading ? r() : e()), this;
                }
            },
            {
                key: "onError",
                value: function(t) {
                    a.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
                }
            },
            {
                key: "onClose",
                value: function(t, e) {
                    "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0);
                }
            },
            {
                key: "filterUpgrades",
                value: function(t) {
                    for(var e = [], n = 0, r = t.length; n < r; n++)~this.transports.indexOf(t[n]) && e.push(t[n]);
                    return e;
                }
            }, 
        ]), a;
    }(L);
    lt.protocol = 4, lt.protocol;
    var pt = "function" == typeof ArrayBuffer, dt = Object.prototype.toString, yt = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === dt.call(Blob), vt = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === dt.call(File);
    function gt(t33) {
        return pt && (t33 instanceof ArrayBuffer || function(t) {
            return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
        }(t33)) || yt && t33 instanceof Blob || vt && t33 instanceof File;
    }
    function mt(e, n) {
        if (!e || "object" !== t1(e)) return !1;
        if (Array.isArray(e)) {
            for(var r = 0, i = e.length; r < i; r++)if (mt(e[r])) return !0;
            return !1;
        }
        if (gt(e)) return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return mt(e.toJSON(), !0);
        for(var o in e)if (Object.prototype.hasOwnProperty.call(e, o) && mt(e[o])) return !0;
        return !1;
    }
    function kt(t) {
        var e = [], n = t.data, r = t;
        return r.data = bt(n, e), r.attachments = e.length, {
            packet: r,
            buffers: e
        };
    }
    function bt(e, n) {
        if (!e) return e;
        if (gt(e)) {
            var r = {
                _placeholder: !0,
                num: n.length
            };
            return n.push(e), r;
        }
        if (Array.isArray(e)) {
            for(var i = new Array(e.length), o = 0; o < e.length; o++)i[o] = bt(e[o], n);
            return i;
        }
        if ("object" === t1(e) && !(e instanceof Date)) {
            var s = {};
            for(var a in e)Object.prototype.hasOwnProperty.call(e, a) && (s[a] = bt(e[a], n));
            return s;
        }
        return e;
    }
    function wt(t, e) {
        return t.data = _t(t.data, e), delete t.attachments, t;
    }
    function _t(e, n) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
            if ("number" == typeof e.num && e.num >= 0 && e.num < n.length) return n[e.num];
            throw new Error("illegal attachments");
        }
        if (Array.isArray(e)) for(var r = 0; r < e.length; r++)e[r] = _t(e[r], n);
        else if ("object" === t1(e)) for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && (e[i] = _t(e[i], n));
        return e;
    }
    var Et;
    !function(t) {
        t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
    }(Et || (Et = {}));
    var Ot = function() {
        function t34(n) {
            e1(this, t34), this.replacer = n;
        }
        return r1(t34, [
            {
                key: "encode",
                value: function(t) {
                    return t.type !== Et.EVENT && t.type !== Et.ACK || !mt(t) ? [
                        this.encodeAsString(t)
                    ] : this.encodeAsBinary({
                        type: t.type === Et.EVENT ? Et.BINARY_EVENT : Et.BINARY_ACK,
                        nsp: t.nsp,
                        data: t.data,
                        id: t.id
                    });
                }
            },
            {
                key: "encodeAsString",
                value: function(t) {
                    var e = "" + t.type;
                    return t.type !== Et.BINARY_EVENT && t.type !== Et.BINARY_ACK || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data, this.replacer)), e;
                }
            },
            {
                key: "encodeAsBinary",
                value: function(t) {
                    var e = kt(t), n = this.encodeAsString(e.packet), r = e.buffers;
                    return r.unshift(n), r;
                }
            }, 
        ]), t34;
    }(), At = function(n16) {
        o1(a, n16);
        var i4 = p(a);
        function a(t) {
            var n;
            return e1(this, a), (n = i4.call(this)).reviver = t, n;
        }
        return r1(a, [
            {
                key: "add",
                value: function(t) {
                    var e;
                    if ("string" == typeof t) {
                        if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                        var n = (e = this.decodeString(t)).type === Et.BINARY_EVENT;
                        n || e.type === Et.BINARY_ACK ? (e.type = n ? Et.EVENT : Et.ACK, this.reconstructor = new Rt(e), 0 === e.attachments && y(s1(a.prototype), "emitReserved", this).call(this, "decoded", e)) : y(s1(a.prototype), "emitReserved", this).call(this, "decoded", e);
                    } else {
                        if (!gt(t) && !t.base64) throw new Error("Unknown type: " + t);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, y(s1(a.prototype), "emitReserved", this).call(this, "decoded", e));
                    }
                }
            },
            {
                key: "decodeString",
                value: function(t) {
                    var e = 0, n = {
                        type: Number(t.charAt(0))
                    };
                    if (void 0 === Et[n.type]) throw new Error("unknown packet type " + n.type);
                    if (n.type === Et.BINARY_EVENT || n.type === Et.BINARY_ACK) {
                        for(var r = e + 1; "-" !== t.charAt(++e) && e != t.length;);
                        var i = t.substring(r, e);
                        if (i != Number(i) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
                        n.attachments = Number(i);
                    }
                    if ("/" === t.charAt(e + 1)) {
                        for(var o = e + 1; ++e;){
                            if ("," === t.charAt(e)) break;
                            if (e === t.length) break;
                        }
                        n.nsp = t.substring(o, e);
                    } else n.nsp = "/";
                    var s = t.charAt(e + 1);
                    if ("" !== s && Number(s) == s) {
                        for(var c = e + 1; ++e;){
                            var u = t.charAt(e);
                            if (null == u || Number(u) != u) {
                                --e;
                                break;
                            }
                            if (e === t.length) break;
                        }
                        n.id = Number(t.substring(c, e + 1));
                    }
                    if (t.charAt(++e)) {
                        var h = this.tryParse(t.substr(e));
                        if (!a.isPayloadValid(n.type, h)) throw new Error("invalid payload");
                        n.data = h;
                    }
                    return n;
                }
            },
            {
                key: "tryParse",
                value: function(t) {
                    try {
                        return JSON.parse(t, this.reviver);
                    } catch (t35) {
                        return !1;
                    }
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
                }
            }, 
        ], [
            {
                key: "isPayloadValid",
                value: function(e, n) {
                    switch(e){
                        case Et.CONNECT:
                            return "object" === t1(n);
                        case Et.DISCONNECT:
                            return void 0 === n;
                        case Et.CONNECT_ERROR:
                            return "string" == typeof n || "object" === t1(n);
                        case Et.EVENT:
                        case Et.BINARY_EVENT:
                            return Array.isArray(n) && n.length > 0;
                        case Et.ACK:
                        case Et.BINARY_ACK:
                            return Array.isArray(n);
                    }
                }
            }, 
        ]), a;
    }(L), Rt = function() {
        function t36(n) {
            e1(this, t36), this.packet = n, this.buffers = [], this.reconPack = n;
        }
        return r1(t36, [
            {
                key: "takeBinaryData",
                value: function(t) {
                    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                        var e = wt(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), e;
                    }
                    return null;
                }
            },
            {
                key: "finishedReconstruction",
                value: function() {
                    this.reconPack = null, this.buffers = [];
                }
            }, 
        ]), t36;
    }(), Tt = Object.freeze({
        __proto__: null,
        protocol: 5,
        get PacketType () {
            return Et;
        },
        Encoder: Ot,
        Decoder: At
    });
    function Ct(t, e, n) {
        return t.on(e, n), function() {
            t.off(e, n);
        };
    }
    var Bt = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
    }), St = function(t37) {
        o1(a2, t37);
        var n17 = p(a2);
        function a2(t, r, o) {
            var s;
            return e1(this, a2), (s = n17.call(this)).connected = !1, s.recovered = !1, s.receiveBuffer = [], s.sendBuffer = [], s._queue = [], s.ids = 0, s.acks = {}, s.flags = {}, s.io = t, s.nsp = r, o && o.auth && (s.auth = o.auth), s._opts = i1({}, o), s.io._autoConnect && s.open(), s;
        }
        return r1(a2, [
            {
                key: "disconnected",
                get: function() {
                    return !this.connected;
                }
            },
            {
                key: "subEvents",
                value: function() {
                    if (!this.subs) {
                        var t = this.io;
                        this.subs = [
                            Ct(t, "open", this.onopen.bind(this)),
                            Ct(t, "packet", this.onpacket.bind(this)),
                            Ct(t, "error", this.onerror.bind(this)),
                            Ct(t, "close", this.onclose.bind(this)), 
                        ];
                    }
                }
            },
            {
                key: "active",
                get: function() {
                    return !!this.subs;
                }
            },
            {
                key: "connect",
                value: function() {
                    return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
                }
            },
            {
                key: "open",
                value: function() {
                    return this.connect();
                }
            },
            {
                key: "send",
                value: function() {
                    for(var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n];
                    return e.unshift("message"), this.emit.apply(this, e), this;
                }
            },
            {
                key: "emit",
                value: function(t) {
                    if (Bt.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
                    for(var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r];
                    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(n), this;
                    var i = {
                        type: Et.EVENT,
                        data: n,
                        options: {}
                    };
                    if (i.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1]) {
                        var o = this.ids++, s = n.pop();
                        this._registerAckCallback(o, s), i.id = o;
                    }
                    var a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable, c = this.flags.volatile && (!a || !this.connected);
                    return c || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
                }
            },
            {
                key: "_registerAckCallback",
                value: function(t38, e) {
                    var n18, r = this, i5 = null !== (n18 = this.flags.timeout) && void 0 !== n18 ? n18 : this._opts.ackTimeout;
                    if (void 0 !== i5) {
                        var o = this.io.setTimeoutFn(function() {
                            delete r.acks[t38];
                            for(var n = 0; n < r.sendBuffer.length; n++)r.sendBuffer[n].id === t38 && r.sendBuffer.splice(n, 1);
                            e.call(r, new Error("operation has timed out"));
                        }, i5);
                        this.acks[t38] = function() {
                            r.io.clearTimeoutFn(o);
                            for(var t = arguments.length, n = new Array(t), i = 0; i < t; i++)n[i] = arguments[i];
                            e.apply(r, [
                                null
                            ].concat(n));
                        };
                    } else this.acks[t38] = e;
                }
            },
            {
                key: "emitWithAck",
                value: function(t39) {
                    for(var e14 = this, n19 = arguments.length, r = new Array(n19 > 1 ? n19 - 1 : 0), i6 = 1; i6 < n19; i6++)r[i6 - 1] = arguments[i6];
                    var o = void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
                    return new Promise(function(n, i) {
                        r.push(function(t, e) {
                            return o ? t ? i(t) : n(e) : n(t);
                        }), e14.emit.apply(e14, [
                            t39
                        ].concat(r));
                    });
                }
            },
            {
                key: "_addToQueue",
                value: function(t40) {
                    var e, n = this;
                    "function" == typeof t40[t40.length - 1] && (e = t40.pop());
                    var r = {
                        id: this.ids++,
                        tryCount: 0,
                        pending: !1,
                        args: t40,
                        flags: i1({
                            fromQueue: !0
                        }, this.flags)
                    };
                    t40.push(function(t) {
                        if (r === n._queue[0]) {
                            var i = null !== t;
                            if (i) r.tryCount > n._opts.retries && (n._queue.shift(), e && e(t));
                            else if (n._queue.shift(), e) {
                                for(var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)s[a - 1] = arguments[a];
                                e.apply(void 0, [
                                    null
                                ].concat(s));
                            }
                            return r.pending = !1, n._drainQueue();
                        }
                    }), this._queue.push(r), this._drainQueue();
                }
            },
            {
                key: "_drainQueue",
                value: function() {
                    if (0 !== this._queue.length) {
                        var t = this._queue[0];
                        if (!t.pending) {
                            t.pending = !0, t.tryCount++;
                            var e = this.ids;
                            this.ids = t.id, this.flags = t.flags, this.emit.apply(this, t.args), this.ids = e;
                        }
                    }
                }
            },
            {
                key: "packet",
                value: function(t) {
                    t.nsp = this.nsp, this.io._packet(t);
                }
            },
            {
                key: "onopen",
                value: function() {
                    var t = this;
                    "function" == typeof this.auth ? this.auth(function(e) {
                        t._sendConnectPacket(e);
                    }) : this._sendConnectPacket(this.auth);
                }
            },
            {
                key: "_sendConnectPacket",
                value: function(t) {
                    this.packet({
                        type: Et.CONNECT,
                        data: this._pid ? i1({
                            pid: this._pid,
                            offset: this._lastOffset
                        }, t) : t
                    });
                }
            },
            {
                key: "onerror",
                value: function(t) {
                    this.connected || this.emitReserved("connect_error", t);
                }
            },
            {
                key: "onclose",
                value: function(t, e) {
                    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, e);
                }
            },
            {
                key: "onpacket",
                value: function(t) {
                    if (t.nsp === this.nsp) switch(t.type){
                        case Et.CONNECT:
                            t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case Et.EVENT:
                        case Et.BINARY_EVENT:
                            this.onevent(t);
                            break;
                        case Et.ACK:
                        case Et.BINARY_ACK:
                            this.onack(t);
                            break;
                        case Et.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case Et.CONNECT_ERROR:
                            this.destroy();
                            var e = new Error(t.data.message);
                            e.data = t.data.data, this.emitReserved("connect_error", e);
                    }
                }
            },
            {
                key: "onevent",
                value: function(t) {
                    var e = t.data || [];
                    null != t.id && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
                }
            },
            {
                key: "emitEvent",
                value: function(t) {
                    if (this._anyListeners && this._anyListeners.length) {
                        var e, n = g(this._anyListeners.slice());
                        try {
                            for(n.s(); !(e = n.n()).done;)e.value.apply(this, t);
                        } catch (t) {
                            n.e(t);
                        } finally{
                            n.f();
                        }
                    }
                    y(s1(a2.prototype), "emit", this).apply(this, t), this._pid && t.length && "string" == typeof t[t.length - 1] && (this._lastOffset = t[t.length - 1]);
                }
            },
            {
                key: "ack",
                value: function(t) {
                    var e = this, n = !1;
                    return function() {
                        if (!n) {
                            n = !0;
                            for(var r = arguments.length, i = new Array(r), o = 0; o < r; o++)i[o] = arguments[o];
                            e.packet({
                                type: Et.ACK,
                                id: t,
                                data: i
                            });
                        }
                    };
                }
            },
            {
                key: "onack",
                value: function(t) {
                    var e = this.acks[t.id];
                    "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id]);
                }
            },
            {
                key: "onconnect",
                value: function(t, e) {
                    this.id = t, this.recovered = e && this._pid === e, this._pid = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect");
                }
            },
            {
                key: "emitBuffered",
                value: function() {
                    var t = this;
                    this.receiveBuffer.forEach(function(e) {
                        return t.emitEvent(e);
                    }), this.receiveBuffer = [], this.sendBuffer.forEach(function(e) {
                        t.notifyOutgoingListeners(e), t.packet(e);
                    }), this.sendBuffer = [];
                }
            },
            {
                key: "ondisconnect",
                value: function() {
                    this.destroy(), this.onclose("io server disconnect");
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.subs && (this.subs.forEach(function(t) {
                        return t();
                    }), this.subs = void 0), this.io._destroy(this);
                }
            },
            {
                key: "disconnect",
                value: function() {
                    return this.connected && this.packet({
                        type: Et.DISCONNECT
                    }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
                }
            },
            {
                key: "close",
                value: function() {
                    return this.disconnect();
                }
            },
            {
                key: "compress",
                value: function(t) {
                    return this.flags.compress = t, this;
                }
            },
            {
                key: "volatile",
                get: function() {
                    return this.flags.volatile = !0, this;
                }
            },
            {
                key: "timeout",
                value: function(t) {
                    return this.flags.timeout = t, this;
                }
            },
            {
                key: "onAny",
                value: function(t) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
                }
            },
            {
                key: "prependAny",
                value: function(t) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
                }
            },
            {
                key: "offAny",
                value: function(t) {
                    if (!this._anyListeners) return this;
                    if (t) {
                        for(var e = this._anyListeners, n = 0; n < e.length; n++)if (t === e[n]) return e.splice(n, 1), this;
                    } else this._anyListeners = [];
                    return this;
                }
            },
            {
                key: "listenersAny",
                value: function() {
                    return this._anyListeners || [];
                }
            },
            {
                key: "onAnyOutgoing",
                value: function(t) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
                }
            },
            {
                key: "prependAnyOutgoing",
                value: function(t) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
                }
            },
            {
                key: "offAnyOutgoing",
                value: function(t) {
                    if (!this._anyOutgoingListeners) return this;
                    if (t) {
                        for(var e = this._anyOutgoingListeners, n = 0; n < e.length; n++)if (t === e[n]) return e.splice(n, 1), this;
                    } else this._anyOutgoingListeners = [];
                    return this;
                }
            },
            {
                key: "listenersAnyOutgoing",
                value: function() {
                    return this._anyOutgoingListeners || [];
                }
            },
            {
                key: "notifyOutgoingListeners",
                value: function(t) {
                    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                        var e, n = g(this._anyOutgoingListeners.slice());
                        try {
                            for(n.s(); !(e = n.n()).done;)e.value.apply(this, t.data);
                        } catch (t) {
                            n.e(t);
                        } finally{
                            n.f();
                        }
                    }
                }
            }, 
        ]), a2;
    }(L);
    function Nt(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
    }
    Nt.prototype.duration = function() {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(), n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
        }
        return 0 | Math.min(t, this.max);
    }, Nt.prototype.reset = function() {
        this.attempts = 0;
    }, Nt.prototype.setMin = function(t) {
        this.ms = t;
    }, Nt.prototype.setMax = function(t) {
        this.max = t;
    }, Nt.prototype.setJitter = function(t) {
        this.jitter = t;
    };
    var xt = function(n20) {
        o1(s3, n20);
        var i7 = p(s3);
        function s3(n, r) {
            var o, a;
            e1(this, s3), (o = i7.call(this)).nsps = {}, o.subs = [], n && "object" === t1(n) && (r = n, n = void 0), (r = r || {}).path = r.path || "/socket.io", o.opts = r, D(f1(o), r), o.reconnection(!1 !== r.reconnection), o.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), o.reconnectionDelay(r.reconnectionDelay || 1e3), o.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), o.randomizationFactor(null !== (a = r.randomizationFactor) && void 0 !== a ? a : 0.5), o.backoff = new Nt({
                min: o.reconnectionDelay(),
                max: o.reconnectionDelayMax(),
                jitter: o.randomizationFactor()
            }), o.timeout(null == r.timeout ? 2e4 : r.timeout), o._readyState = "closed", o.uri = n;
            var c = r.parser || Tt;
            return o.encoder = new c.Encoder(), o.decoder = new c.Decoder(), o._autoConnect = !1 !== r.autoConnect, o._autoConnect && o.open(), o;
        }
        return r1(s3, [
            {
                key: "reconnection",
                value: function(t) {
                    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
                }
            },
            {
                key: "reconnectionAttempts",
                value: function(t) {
                    return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
                }
            },
            {
                key: "reconnectionDelay",
                value: function(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this);
                }
            },
            {
                key: "randomizationFactor",
                value: function(t) {
                    var e;
                    return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this);
                }
            },
            {
                key: "reconnectionDelayMax",
                value: function(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this);
                }
            },
            {
                key: "timeout",
                value: function(t) {
                    return arguments.length ? (this._timeout = t, this) : this._timeout;
                }
            },
            {
                key: "maybeReconnectOnOpen",
                value: function() {
                    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
                }
            },
            {
                key: "open",
                value: function(t) {
                    var e = this;
                    if (~this._readyState.indexOf("open")) return this;
                    this.engine = new lt(this.uri, this.opts);
                    var n21 = this.engine, r = this;
                    this._readyState = "opening", this.skipReconnect = !1;
                    var i = Ct(n21, "open", function() {
                        r.onopen(), t && t();
                    }), o = Ct(n21, "error", function(n) {
                        r.cleanup(), r._readyState = "closed", e.emitReserved("error", n), t ? t(n) : r.maybeReconnectOnOpen();
                    });
                    if (!1 !== this._timeout) {
                        var s = this._timeout;
                        0 === s && i();
                        var a = this.setTimeoutFn(function() {
                            i(), n21.close(), n21.emit("error", new Error("timeout"));
                        }, s);
                        this.opts.autoUnref && a.unref(), this.subs.push(function() {
                            clearTimeout(a);
                        });
                    }
                    return this.subs.push(i), this.subs.push(o), this;
                }
            },
            {
                key: "connect",
                value: function(t) {
                    return this.open(t);
                }
            },
            {
                key: "onopen",
                value: function() {
                    this.cleanup(), this._readyState = "open", this.emitReserved("open");
                    var t = this.engine;
                    this.subs.push(Ct(t, "ping", this.onping.bind(this)), Ct(t, "data", this.ondata.bind(this)), Ct(t, "error", this.onerror.bind(this)), Ct(t, "close", this.onclose.bind(this)), Ct(this.decoder, "decoded", this.ondecoded.bind(this)));
                }
            },
            {
                key: "onping",
                value: function() {
                    this.emitReserved("ping");
                }
            },
            {
                key: "ondata",
                value: function(t) {
                    try {
                        this.decoder.add(t);
                    } catch (t41) {
                        this.onclose("parse error", t41);
                    }
                }
            },
            {
                key: "ondecoded",
                value: function(t) {
                    var e = this;
                    it(function() {
                        e.emitReserved("packet", t);
                    }, this.setTimeoutFn);
                }
            },
            {
                key: "onerror",
                value: function(t) {
                    this.emitReserved("error", t);
                }
            },
            {
                key: "socket",
                value: function(t, e) {
                    var n = this.nsps[t];
                    return n || (n = new St(this, t, e), this.nsps[t] = n), this._autoConnect && n.connect(), n;
                }
            },
            {
                key: "_destroy",
                value: function(t) {
                    for(var e = 0, n = Object.keys(this.nsps); e < n.length; e++){
                        var r = n[e];
                        if (this.nsps[r].active) return;
                    }
                    this._close();
                }
            },
            {
                key: "_packet",
                value: function(t) {
                    for(var e = this.encoder.encode(t), n = 0; n < e.length; n++)this.engine.write(e[n], t.options);
                }
            },
            {
                key: "cleanup",
                value: function() {
                    this.subs.forEach(function(t) {
                        return t();
                    }), this.subs.length = 0, this.decoder.destroy();
                }
            },
            {
                key: "_close",
                value: function() {
                    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
                }
            },
            {
                key: "disconnect",
                value: function() {
                    return this._close();
                }
            },
            {
                key: "onclose",
                value: function(t, e) {
                    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect();
                }
            },
            {
                key: "reconnect",
                value: function() {
                    var t = this;
                    if (this._reconnecting || this.skipReconnect) return this;
                    var e = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
                    else {
                        var n22 = this.backoff.duration();
                        this._reconnecting = !0;
                        var r = this.setTimeoutFn(function() {
                            e.skipReconnect || (t.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open(function(n) {
                                n ? (e._reconnecting = !1, e.reconnect(), t.emitReserved("reconnect_error", n)) : e.onreconnect();
                            }));
                        }, n22);
                        this.opts.autoUnref && r.unref(), this.subs.push(function() {
                            clearTimeout(r);
                        });
                    }
                }
            },
            {
                key: "onreconnect",
                value: function() {
                    var t = this.backoff.attempts;
                    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
                }
            }, 
        ]), s3;
    }(L), Lt = {};
    function Pt(e15, n24) {
        "object" === t1(e15) && (n24 = e15, e15 = void 0);
        var r7, i8 = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, r = t;
            n = n || "undefined" != typeof location && location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t), r = ft(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
            var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return r.id = r.protocol + "://" + i + ":" + r.port + e, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
        }(e15, (n24 = n24 || {}).path || "/socket.io"), o = i8.source, s = i8.id, a = i8.path, c = Lt[s] && a in Lt[s].nsps;
        return n24.forceNew || n24["force new connection"] || !1 === n24.multiplex || c ? r7 = new xt(o, n24) : (Lt[s] || (Lt[s] = new xt(o, n24)), r7 = Lt[s]), i8.query && !n24.query && (n24.query = i8.queryKey), r7.socket(i8.path, n24);
    }
    return i1(Pt, {
        Manager: xt,
        Socket: St,
        io: Pt,
        connect: Pt
    }), Pt;
}); //# sourceMappingURL=socket.io.min.js.map


class $fc689fb0b2557ee7$export$985739bfa5723e08 {
    constructor(player, playerColor){
        this.player = player;
        this.playerColor = playerColor;
        this.move = 1;
    }
}
class $fc689fb0b2557ee7$export$820c702ddd5a7343 {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.isKing = false;
    }
}
class $fc689fb0b2557ee7$export$f6f0c3fe4ec306ea {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = null;
    }
    getFigure() {
        return this.figure;
    }
}
class $fc689fb0b2557ee7$export$dc537a3a3893548e {
    constructor(container, game){
        this.game = game;
        this.size = 8;
        this.cells = [];
        this.container = container;
        this.selectedCell = null;
        this.selectedFigure = null;
        this.possibleMoves = [];
        this.possibleAttacks = [];
        this.figureLastAttacked = null;
    }
    initCells() {
        for(let i = 0; i < this.size; i++){
            const row = [];
            for(let j = 0; j < this.size; j++)row.push(new $fc689fb0b2557ee7$export$f6f0c3fe4ec306ea(i, j, (i + j) % 2 === 0 ? "white" : "black"));
            this.cells.push(row);
        }
    }
    initFigures() {
        for(let i = 0; i < this.size; i++)for(let j = 0; j < this.size; j++){
            if ((i + j) % 2 !== 0 && i < 3) this.cells[i][j].figure = new $fc689fb0b2557ee7$export$820c702ddd5a7343(i, j, "black");
            else if ((i + j) % 2 !== 0 && i > 4) this.cells[i][j].figure = new $fc689fb0b2557ee7$export$820c702ddd5a7343(i, j, "white");
        }
    }
    getPossbleKingMovesTopLeft(i, j) {
        const arr = [];
        for(let a = 1; a <= this.size; a++){
            if (i - a < 0 || j - a < 0 || this.cells[i - a][j - a].figure !== null) return arr;
            else arr.push(this.cells[i - a][j - a]);
        }
        return arr;
    }
    getPossbleKingMovesTopRight(i, j) {
        const arr = [];
        for(let a = 1; a <= this.size; a++){
            if (i - a < 0 || j + a >= this.size || this.cells[i - a][j + a].figure !== null) return arr;
            else arr.push(this.cells[i - a][j + a]);
        }
        return arr;
    }
    getPossbleKingMovesBottomLeft(i, j) {
        const arr = [];
        for(let a = 1; a <= this.size; a++){
            if (i + a >= this.size || j - a < 0 || this.cells[i + a][j - a].figure !== null) return arr;
            else arr.push(this.cells[i + a][j - a]);
        }
        return arr;
    }
    getPossbleKingMovesBottomRight(i, j) {
        const arr = [];
        for(let a = 1; a <= this.size; a++){
            if (i + a >= this.size || j + a >= this.size || this.cells[i + a][j + a].figure !== null) return arr;
            else arr.push(this.cells[i + a][j + a]);
        }
        return arr;
    }
    getPossibleMoves() {
        const possibleMoves = [];
        const figureCords = [
            this.selectedFigure.x,
            this.selectedFigure.y
        ];
        let cof;
        if (this.selectedFigure.isKing) possibleMoves.push(...this.getPossbleKingMovesTopLeft(figureCords[0], figureCords[1]), ...this.getPossbleKingMovesTopRight(figureCords[0], figureCords[1]), ...this.getPossbleKingMovesBottomLeft(figureCords[0], figureCords[1]), ...this.getPossbleKingMovesBottomRight(figureCords[0], figureCords[1]));
        else {
            this.game.player === "white" ? cof = 1 : cof = -1;
            figureCords[1] - 1 >= 0 && this.cells[figureCords[0] - cof][figureCords[1] - 1].figure === null && possibleMoves.push(this.cells[figureCords[0] - cof][figureCords[1] - 1]);
            figureCords[1] + 1 < this.size && this.cells[figureCords[0] - cof][figureCords[1] + 1].figure === null && possibleMoves.push(this.cells[figureCords[0] - cof][figureCords[1] + 1]);
        }
        this.possibleMoves = possibleMoves;
    }
    canAttackTopLeft(i, j) {
        if (i - 2 < 0 || j - 2 < 0) return false;
        else if (this.cells[i - 1][j - 1].figure !== null && this.cells[i - 1][j - 1].figure.color !== this.game.player && this.cells[i - 2][j - 2].figure === null) return [
            this.cells[i - 1][j - 1],
            [
                this.cells[i - 2][j - 2]
            ]
        ];
        return false;
    }
    canAttackTopRight(i, j) {
        if (i - 2 < 0 || j + 2 >= this.size) return false;
        else if (this.cells[i - 1][j + 1].figure !== null && this.cells[i - 1][j + 1].figure.color !== this.game.player && this.cells[i - 2][j + 2].figure === null) return [
            this.cells[i - 1][j + 1],
            [
                this.cells[i - 2][j + 2]
            ]
        ];
        return false;
    }
    canAttackBottomLeft(i, j) {
        if (i + 2 >= this.size || j - 2 < 0) return false;
        else if (this.cells[i + 1][j - 1].figure !== null && this.cells[i + 1][j - 1].figure.color !== this.game.player && this.cells[i + 2][j - 2].figure === null) return [
            this.cells[i + 1][j - 1],
            [
                this.cells[i + 2][j - 2]
            ]
        ];
        return false;
    }
    canAttackBottomRight(i, j) {
        if (i + 2 >= this.size || j + 2 >= this.size) return false;
        else if (this.cells[i + 1][j + 1].figure !== null && this.cells[i + 1][j + 1].figure.color !== this.game.player && this.cells[i + 2][j + 2].figure === null) return [
            this.cells[i + 1][j + 1],
            [
                this.cells[i + 2][j + 2]
            ]
        ];
        return false;
    }
    canKingAttackTopLeft(i, j) {
        const arr = [];
        let found = false;
        let cell;
        for(let a = 1; a <= this.size; a++){
            if (i - a < 0 || j - a < 0) return [
                cell,
                arr
            ];
            else if (!found && this.cells[i - a][j - a].figure !== null) {
                if (this.cells[i - a][j - a].figure.color === this.game.player) return [
                    cell,
                    arr
                ];
                found = true;
                cell = this.cells[i - a][j - a];
            } else if (found && this.cells[i - a][j - a].figure === null) arr.push(this.cells[i - a][j - a]);
            else if (found && this.cells[i - a][j - a].figure !== null) return [
                cell,
                arr
            ];
        }
        return [
            cell,
            arr
        ];
    }
    canKingAttackTopRight(i, j) {
        let found = false;
        let cell;
        const arr = [];
        for(let a = 1; a <= this.size; a++){
            if (i - a < 0 || j + a >= this.size) return [
                cell,
                arr
            ];
            else if (!found && this.cells[i - a][j + a].figure !== null) {
                if (this.cells[i - a][j + a].figure.color === this.game.player) return [
                    cell,
                    arr
                ];
                found = true;
                cell = this.cells[i - a][j + a];
            } else if (found && this.cells[i - a][j + a].figure === null) arr.push(this.cells[i - a][j + a]);
            else if (found && this.cells[i - a][j + a].figure !== null) return [
                cell,
                arr
            ];
        }
        return [
            cell,
            arr
        ];
    }
    canKingAttackBottomLeft(i, j) {
        let found = false;
        let cell;
        const arr = [];
        for(let a = 1; a <= this.size; a++){
            if (i + a >= this.size || j - a < 0) return [
                cell,
                arr
            ];
            else if (!found && this.cells[i + a][j - a].figure !== null) {
                if (this.cells[i + a][j - a].figure.color === this.game.player) return [
                    cell,
                    arr
                ];
                found = true;
                cell = this.cells[i + a][j - a];
            } else if (found && this.cells[i + a][j - a].figure === null) arr.push(this.cells[i + a][j - a]);
            else if (found && this.cells[i + a][j - a].figure !== null) return [
                cell,
                arr
            ];
        }
        return [
            cell,
            arr
        ];
    }
    canKingAttackBottomRight(i, j) {
        let found = false;
        let cell;
        const arr = [];
        for(let a = 1; a <= this.size; a++){
            if (i + a >= this.size || j + a >= this.size) return [
                cell,
                arr
            ];
            else if (!found && this.cells[i + a][j + a].figure !== null) {
                if (this.cells[i + a][j + a].figure.color === this.game.player) return [
                    cell,
                    arr
                ];
                found = true;
                cell = this.cells[i + a][j + a];
            } else if (found && this.cells[i + a][j + a].figure === null) arr.push(this.cells[i + a][j + a]);
            else if (found && this.cells[i + a][j + a].figure !== null) return [
                cell,
                arr
            ];
        }
        return [
            cell,
            arr
        ];
    }
    getPossibleAttacks() {
        const possibleAttacks = [];
        for(let i = 0; i < this.size; i++)for(let j = 0; j < this.size; j++){
            if (this.cells[i][j].figure === null || this.cells[i][j].figure.color !== this.game.player) continue;
            if (this.cells[i][j].figure.isKing && this.figureLastAttacked === null || this.figureLastAttacked !== null && this.figureLastAttacked.isKing && JSON.stringify(this.figureLastAttacked) === JSON.stringify(this.cells[i][j].figure)) {
                let figurePossibleAttacks = [
                    this.canKingAttackTopLeft(i, j),
                    this.canKingAttackTopRight(i, j),
                    this.canKingAttackBottomLeft(i, j),
                    this.canKingAttackBottomRight(i, j), 
                ];
                figurePossibleAttacks = figurePossibleAttacks.filter((item)=>item[0] && item[1].length);
                if (figurePossibleAttacks.length) possibleAttacks.push([
                    this.cells[i][j].figure,
                    ...figurePossibleAttacks, 
                ]);
            } else if (!this.cells[i][j].figure.isKing && this.figureLastAttacked === null || this.figureLastAttacked !== null && !this.figureLastAttacked.isKing && JSON.stringify(this.figureLastAttacked) === JSON.stringify(this.cells[i][j].figure)) {
                let figurePossibleAttacks = [
                    this.canAttackTopLeft(i, j),
                    this.canAttackTopRight(i, j),
                    this.canAttackBottomLeft(i, j),
                    this.canAttackBottomRight(i, j), 
                ];
                figurePossibleAttacks = figurePossibleAttacks.filter((el)=>!!el);
                if (figurePossibleAttacks.length) possibleAttacks.push([
                    this.cells[i][j].figure,
                    ...figurePossibleAttacks, 
                ]);
            }
        }
        this.possibleAttacks = possibleAttacks;
    }
    markPossibleAttacks() {
        this.possibleAttacks.forEach((item)=>{
            item.forEach((posAtt, index)=>{
                if (index) posAtt[1].forEach((cell)=>{
                    document.querySelector(`[data-cell-cord="${cell.x},${cell.y}"]`).classList.add("dot_red");
                });
            });
        });
    }
    clearCellStyles(styles) {
        document.querySelectorAll(".game__cell").forEach((cell)=>cell.classList.remove(...styles));
    }
    markPossibleMoves() {
        document.querySelectorAll(".game__cell").forEach((cell)=>{
            const cellCords = cell.getAttribute("data-cell-cord");
            this.possibleMoves.forEach((posCell)=>{
                if (cellCords === `${posCell.x},${posCell.y}`) cell.classList.add("dot_green");
            });
        });
    }
    markSelectedFigureCell() {
        document.querySelector(`[data-cell-cord="${this.selectedFigure.x},${this.selectedFigure.y}"]`).classList.add("mark");
    }
    checkFigureGameColor(target) {
        const cellCords = target.parentElement.getAttribute("data-cell-cord").split(",").map((i)=>+i);
        return this.cells[cellCords[0]][cellCords[1]].figure.color === this.game.player;
    }
    checkCellMoveTo(target) {
        const cellCords = target.getAttribute("data-cell-cord").split(",").map((i)=>+i);
        const cell = this.cells[cellCords[0]][cellCords[1]];
        return this.possibleMoves.some((posCell)=>JSON.stringify(posCell) === JSON.stringify(cell));
    }
    checkCellAttackTo() {
        let correct = false;
        this.possibleAttacks.forEach((item)=>{
            if (JSON.stringify(item[0]) === JSON.stringify(this.selectedFigure)) item.forEach((posArr, index)=>{
                if (index) posArr[1].forEach((possAttackCell)=>{
                    if (JSON.stringify(this.selectedCell) === JSON.stringify(possAttackCell)) correct = true;
                });
            });
        });
        return correct;
    }
    moveFigure() {
        const figure = this.selectedFigure;
        const cell = this.selectedCell;
        this.cells[figure.x][figure.y].figure = null;
        figure.x = cell.x;
        figure.y = cell.y;
        this.cells[cell.x][cell.y].figure = figure;
        this.figureLastAttacked = null;
    }
    attackFigure() {
        this.possibleAttacks.forEach((posAtt, index)=>{
            if (JSON.stringify(posAtt[0]) === JSON.stringify(this.selectedFigure)) posAtt.forEach((a)=>{
                if (a.length) // console.log(a);
                a.forEach((b)=>{
                    let foundFigureToDelete = false;
                    // console.log(b);
                    if (b.length) b.forEach((c)=>{
                        // console.log(c);
                        if (JSON.stringify(c) === JSON.stringify(this.selectedCell)) foundFigureToDelete = true;
                    });
                    if (foundFigureToDelete) {
                        const figureToDelete = a[0];
                        this.cells[this.selectedFigure.x][this.selectedFigure.y].figure = null;
                        this.cells[figureToDelete.x][figureToDelete.y].figure = null;
                        this.cells[this.selectedCell.x][this.selectedCell.y].figure = this.selectedFigure;
                        this.cells[this.selectedCell.x][this.selectedCell.y].figure.x = this.selectedCell.x;
                        this.cells[this.selectedCell.x][this.selectedCell.y].figure.y = this.selectedCell.y;
                        this.figureLastAttacked = this.cells[this.selectedCell.x][this.selectedCell.y].figure;
                    }
                });
            });
        });
    }
    setKing() {
        this.cells.forEach((row)=>{
            row.forEach((cell)=>{
                if (cell.figure !== null && (cell.x === 0 && cell.figure.color === "white" || cell.x === this.size - 1 && cell.figure.color === "black") && !cell.figure.isKing) this.cells[cell.x][cell.y].figure.isKing = true;
            });
        });
    }
    renderBoard() {
        let html = "";
        this.cells.forEach((row, rowIndex)=>{
            row.forEach((cell, cellIndex)=>{
                let kingClass = "";
                if (cell.figure && cell.figure.isKing) cell.figure.color === "white" ? kingClass = "king black-crown" : kingClass = "king white-crown";
                const cellHTML = `
          <div class="game__cell ${cell.color}" data-cell-cord="${[
                    rowIndex,
                    cellIndex, 
                ]}">
            ${cell.figure ? `<div class="game__figure ${cell.figure.color} ${kingClass}" data-figure-cord="${[
                    rowIndex,
                    cellIndex
                ]}">
                    ${kingClass ? `
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="1280pt" height="815pt" viewBox="0 0 1280.000000 815.000000"
                    preserveAspectRatio="xMidYMid meet">
                      <metadata>
                      Created by potrace 1.15, written by Peter Selinger 2001-2017
                      </metadata>
                      <g transform="translate(0.000000,815.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M6224 8131 c-137 -37 -202 -83 -331 -229 -139 -159 -190 -310 -179
                      -527 9 -184 62 -316 185 -461 38 -44 91 -97 118 -117 55 -40 169 -97 195 -97
                      9 0 19 -4 22 -9 10 -16 -743 -2610 -779 -2686 -48 -100 -88 -150 -141 -176
                      -41 -19 -50 -20 -86 -10 -55 17 -124 88 -185 191 -27 47 -343 465 -702 929
                      l-652 845 46 39 c209 179 315 387 315 617 0 172 -47 303 -159 442 -132 164
                      -238 240 -389 279 -133 34 -263 18 -402 -49 -58 -28 -93 -55 -159 -122 -136
                      -139 -209 -256 -242 -390 -17 -71 -17 -249 0 -320 19 -77 81 -207 132 -276
                      116 -158 250 -254 404 -291 39 -9 71 -17 72 -18 3 -2 -194 -1964 -203 -2020
                      -12 -74 -54 -192 -84 -233 -75 -104 -178 -97 -335 23 -38 29 -385 259 -770
                      510 -385 251 -706 463 -713 470 -11 10 -8 21 22 63 142 197 175 498 79 726
                      -83 199 -274 374 -468 432 -73 21 -217 24 -295 5 -30 -7 -93 -31 -140 -53 -71
                      -35 -100 -56 -180 -137 -74 -74 -105 -115 -137 -176 -68 -131 -78 -178 -78
                      -355 0 -135 3 -165 24 -230 98 -314 354 -513 661 -513 109 -1 171 15 268 68
                      35 20 65 35 67 33 5 -7 275 -516 383 -723 327 -629 481 -1071 562 -1610 6 -38
                      13 -82 16 -98 l6 -27 4398 0 4397 0 7 52 c12 95 76 400 112 535 77 294 201
                      611 374 962 103 209 458 890 471 905 4 5 21 -1 37 -13 80 -56 244 -98 346 -87
                      174 20 302 81 426 206 47 47 100 111 119 142 197 336 129 725 -172 978 -77 65
                      -183 121 -267 141 -71 17 -200 17 -270 0 -127 -31 -278 -131 -375 -249 -124
                      -150 -172 -298 -162 -504 7 -163 52 -301 134 -416 25 -36 30 -49 20 -58 -6 -6
                      -330 -218 -718 -471 -388 -254 -737 -485 -775 -514 -89 -67 -137 -89 -200 -89
                      -94 0 -157 69 -194 214 -14 57 -48 371 -115 1089 -52 555 -95 1013 -95 1018 0
                      5 7 9 14 9 38 0 179 54 233 89 118 76 246 231 299 363 69 168 72 395 7 558
                      -39 98 -87 165 -193 271 -107 107 -188 155 -315 185 -135 31 -299 2 -432 -78
                      -70 -42 -202 -174 -258 -258 -147 -223 -146 -563 4 -792 49 -76 137 -171 206
                      -225 l40 -30 -31 -39 c-288 -365 -1292 -1681 -1329 -1743 -56 -93 -138 -175
                      -185 -184 -77 -16 -158 60 -216 203 -12 30 -76 240 -142 465 -66 226 -238 810
                      -382 1300 -143 489 -258 895 -256 902 3 7 12 13 20 13 7 0 51 18 96 41 100 50
                      237 180 294 279 116 199 139 467 59 670 -74 188 -263 377 -432 431 -96 31
                      -271 36 -367 10z"/>
                      <path d="M1990 660 l0 -660 4395 0 4395 0 2 660 3 660 -4397 0 -4398 0 0 -660z"/>
                      </g>
                    </svg>
                  </div>
                    ` : ""}
                  </div>
                  ` : ""}
          </div>
        `;
                html += cellHTML;
            });
        });
        this.container.innerHTML = html;
    }
}


const $2d2a4bce24eb15d9$var$socket = (0, $2da645054219ac63$exports.io)();
const $2d2a4bce24eb15d9$var$root = document.getElementById("root");
const $2d2a4bce24eb15d9$var$url = window.location.origin;
const $2d2a4bce24eb15d9$var$hashCode = window.location.hash.substring(1);
let $2d2a4bce24eb15d9$var$roomCode;
$2d2a4bce24eb15d9$var$main();
function $2d2a4bce24eb15d9$var$main() {
    if ($2d2a4bce24eb15d9$var$hashCode.length === 0) $2d2a4bce24eb15d9$var$mainPage();
    else {
        history.replaceState(null, null, " ");
        $2d2a4bce24eb15d9$var$joinMulPage();
        let joinInput = document.querySelector(".multiplayer-join__input");
        joinInput.value = $2d2a4bce24eb15d9$var$hashCode;
    }
}
function $2d2a4bce24eb15d9$var$mainPage() {
    (0, $673cc58ccc248e92$export$5d5c23288d7d853)($2d2a4bce24eb15d9$var$root);
    document.querySelector(".main__item.create").addEventListener("click", (e)=>{
        e.preventDefault();
        $2d2a4bce24eb15d9$var$createMulPage();
    });
    document.querySelector(".main__item.join").addEventListener("click", (e)=>{
        e.preventDefault();
        $2d2a4bce24eb15d9$var$joinMulPage();
    });
}
function $2d2a4bce24eb15d9$var$createMulPage() {
    (0, $673cc58ccc248e92$export$c23b5a45687815e7)($2d2a4bce24eb15d9$var$root);
    $2d2a4bce24eb15d9$var$goToMainMenu();
    const codeBlock = document.querySelector(".multiplayer-create__code");
    const linkBlock = document.querySelector(".multiplayer-create__link");
    const copyModal = document.querySelector(".multiplayer-create__copy-modal");
    $2d2a4bce24eb15d9$var$roomCode = Math.random().toString(36).substr(2, 8);
    codeBlock.innerText = $2d2a4bce24eb15d9$var$roomCode;
    linkBlock.innerText = `${$2d2a4bce24eb15d9$var$url}#${$2d2a4bce24eb15d9$var$roomCode}`;
    $2d2a4bce24eb15d9$var$copyText(codeBlock, copyModal);
    $2d2a4bce24eb15d9$var$copyText(linkBlock, copyModal);
    $2d2a4bce24eb15d9$var$socket.emit("joinRoom", $2d2a4bce24eb15d9$var$roomCode);
    $2d2a4bce24eb15d9$var$socket.on("player1", ({ firstPlayerColor: firstPlayerColor , currentRoom: currentRoom  })=>{
        if (currentRoom === $2d2a4bce24eb15d9$var$roomCode) $2d2a4bce24eb15d9$var$gamePage(firstPlayerColor);
    });
}
function $2d2a4bce24eb15d9$var$copyText(DOMElement, modal) {
    DOMElement.addEventListener("click", ()=>{
        let range = document.createRange();
        range.selectNode(DOMElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        modal.classList.add("active");
        setTimeout(()=>{
            modal.classList.remove("active");
        }, 2000);
    });
}
function $2d2a4bce24eb15d9$var$joinMulPage() {
    (0, $673cc58ccc248e92$export$4a9a3fc575e7937)($2d2a4bce24eb15d9$var$root);
    $2d2a4bce24eb15d9$var$goToMainMenu();
    const joinInput = document.querySelector(".multiplayer-join__input");
    const joinRoomBtn = document.querySelector(".multiplayer-join__button");
    joinRoomBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        const joinInputVal = joinInput.value;
        $2d2a4bce24eb15d9$var$roomCode = joinInputVal;
        $2d2a4bce24eb15d9$var$socket.emit("joinRoom", $2d2a4bce24eb15d9$var$roomCode);
    });
    $2d2a4bce24eb15d9$var$socket.on("player2", ({ secondPlayerColor: secondPlayerColor , currentRoom: currentRoom  })=>{
        if (currentRoom === $2d2a4bce24eb15d9$var$roomCode) $2d2a4bce24eb15d9$var$gamePage(secondPlayerColor);
    });
}
function $2d2a4bce24eb15d9$var$goToMainMenu() {
    const btnToMain = document.getElementById("to-main");
    btnToMain.style.display = "block";
    btnToMain.addEventListener("click", (e)=>{
        e.preventDefault();
        $2d2a4bce24eb15d9$var$mainPage();
        btnToMain.style.display = "none";
    });
}
function $2d2a4bce24eb15d9$var$gamePage(playerColor1) {
    const btnToMain = document.getElementById("to-main");
    if (btnToMain) btnToMain.style.display = "none";
    (0, $673cc58ccc248e92$export$3f52ba45a502cedb)($2d2a4bce24eb15d9$var$root);
    const boardWrapper = document.querySelector(".game__board");
    if (playerColor1 === "black") boardWrapper.classList.add("black");
    let board;
    function restartGame(playerColor) {
        const game = new (0, $fc689fb0b2557ee7$export$985739bfa5723e08)("white", playerColor);
        const boardContainer = document.querySelector(".game__board");
        board = new (0, $fc689fb0b2557ee7$export$dc537a3a3893548e)(boardContainer, game);
        board.initCells();
        board.initFigures();
    }
    restartGame(playerColor1);
    $2d2a4bce24eb15d9$var$gameCycle(board);
}
function $2d2a4bce24eb15d9$var$displayGameInfo(board) {
    const moveBlock = document.querySelector(".game-info__move");
    const playerBlock = document.querySelector(".game-info__player");
    let myColor;
    board.game.playerColor === board.game.player ? myColor = "You" : myColor = "Opponent";
    moveBlock.innerText = `Move: ${board.game.move}`;
    playerBlock.innerText = `Player: ${board.game.player} (${myColor})`;
}
function $2d2a4bce24eb15d9$var$gameClick(target, board) {
    if (!target) return;
    if (target.classList.contains("game__figure") && target !== board.selectedFigure && board.checkFigureGameColor(target)) {
        const figureCords = target.getAttribute("data-figure-cord").split(",").map((i)=>+i);
        board.selectedFigure = board.cells[figureCords[0]][figureCords[1]].figure;
        if (board.possibleAttacks.length) {
            board.clearCellStyles([
                "dot_green",
                "mark"
            ]);
            board.markSelectedFigureCell();
        } else {
            board.clearCellStyles([
                "dot_green",
                "dot_red",
                "mark"
            ]);
            board.markSelectedFigureCell();
            board.getPossibleMoves();
            board.markPossibleMoves();
        }
    } else if (target.classList.contains("game__cell") && !target.children.length && board.selectedFigure !== null) {
        const cellCords = target.getAttribute("data-cell-cord").split(",").map((i)=>+i);
        board.selectedCell = board.cells[cellCords[0]][cellCords[1]];
        if (board.possibleAttacks.length && board.checkCellAttackTo()) {
            board.attackFigure();
            board.setKing();
            board.getPossibleAttacks();
            if (board.figureLastAttacked !== null && !board.possibleAttacks.length) {
                board.game.player = $2d2a4bce24eb15d9$var$changeColor(board);
                board.figureLastAttacked = null;
                board.possibleAttacks = [];
                board.game.move++;
            }
            const props = {
                playerColor: board.game.player,
                cells: board.cells,
                figureLastAttacked: board.figureLastAttacked,
                possibleAttacks: board.possibleAttacks,
                move: board.game.move
            };
            const room = $2d2a4bce24eb15d9$var$roomCode;
            $2d2a4bce24eb15d9$var$playerTurn({
                props: props,
                room: room
            });
        } else if (board.checkCellMoveTo(target) && !board.possibleAttacks.length) {
            board.moveFigure();
            board.game.player = $2d2a4bce24eb15d9$var$changeColor(board);
            board.figureLastAttacked = null;
            board.possibleAttacks = [];
            board.game.move++;
            const props = {
                playerColor: board.game.player,
                cells: board.cells,
                figureLastAttacked: board.figureLastAttacked,
                possibleAttacks: board.possibleAttacks,
                move: board.game.move++
            };
            const room = $2d2a4bce24eb15d9$var$roomCode;
            $2d2a4bce24eb15d9$var$playerTurn({
                props: props,
                room: room
            });
        }
    }
}
function $2d2a4bce24eb15d9$var$gameCycle(board) {
    $2d2a4bce24eb15d9$var$socket.on("turnPlay", ({ props: props , room: room  })=>{
        if ($2d2a4bce24eb15d9$var$roomCode === room) {
            board.cells = props.cells;
            board.game.player = props.playerColor;
            board.possibleAttacks = props.possibleAttacks;
            board.figureLastAttacked = props.figureLastAttacked;
            board.game.move = props.move;
            $2d2a4bce24eb15d9$var$gameTurn(board);
        }
    });
    if (board.game.move === 1) $2d2a4bce24eb15d9$var$gameTurn(board);
    $2d2a4bce24eb15d9$var$socket.on("playerDisconect", (room)=>{
        if (room === $2d2a4bce24eb15d9$var$roomCode) $2d2a4bce24eb15d9$var$playerDisconnected();
    });
}
function $2d2a4bce24eb15d9$var$gameTurn(board) {
    let gameEnd = false;
    board.selectedCell = null;
    board.selectedFigure = null;
    board.renderBoard();
    board.setKing();
    board.getPossibleAttacks();
    board.markPossibleAttacks();
    if (board.game.move > 100) $2d2a4bce24eb15d9$var$endScreen(board, "draw");
    $2d2a4bce24eb15d9$var$gameOver(board).forEach((item, index)=>{
        if (item) {
            gameEnd = true;
            let playerWinColor;
            index === 0 ? playerWinColor = "black" : playerWinColor = "white";
            $2d2a4bce24eb15d9$var$endScreen(board, playerWinColor);
        }
    });
    if (board.game.player === board.game.playerColor && !gameEnd) document.querySelectorAll(".game__cell").forEach((item)=>{
        item.addEventListener("click", (event)=>$2d2a4bce24eb15d9$var$gameClick(event.target, board));
    });
    $2d2a4bce24eb15d9$var$displayGameInfo(board);
}
function $2d2a4bce24eb15d9$var$changeColor(board) {
    return board.game.player === "white" ? "black" : "white";
}
function $2d2a4bce24eb15d9$var$playerTurn(params) {
    $2d2a4bce24eb15d9$var$socket.emit("playTurn", params);
}
function $2d2a4bce24eb15d9$var$gameOver(board) {
    let whiteLose = true;
    let blackLose = true;
    board.cells.forEach((row)=>{
        row.forEach((cell)=>{
            if (cell.figure !== null) {
                if (cell.figure.color === "white") whiteLose = false;
                else blackLose = false;
            }
        });
    });
    return [
        whiteLose,
        blackLose
    ];
}
function $2d2a4bce24eb15d9$var$endScreen(board, playerWinColor) {
    const endScreenWrapper = document.querySelector(".game__end-wrapper");
    const endScreenTitle = document.querySelector(".game__end-title");
    const endRestartBtn = document.querySelector(".game__end-btn.restart");
    const endMenuBtn = document.querySelector(".game__end-btn.menu");
    endScreenWrapper.style.display = "flex";
    let myColor;
    if (playerWinColor === "draw") myColor = "";
    else if (playerWinColor === board.game.playerColor) myColor = "(You)";
    else myColor = "(Opponent)";
    endScreenTitle.innerText = `${playerWinColor.toUpperCase()} ${myColor} Win`;
    endRestartBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        $2d2a4bce24eb15d9$var$socket.emit("restartGame", $2d2a4bce24eb15d9$var$roomCode);
    });
    endMenuBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        endScreenWrapper.style.display = "none";
    });
    $2d2a4bce24eb15d9$var$socket.on("restartPlayer1", ({ firstPlayerColor: firstPlayerColor , room: room  })=>{
        endScreenWrapper.style.display = "none";
        if (room === $2d2a4bce24eb15d9$var$roomCode) $2d2a4bce24eb15d9$var$gamePage(firstPlayerColor);
    });
    $2d2a4bce24eb15d9$var$socket.on("restartPlayer2", ({ secondPlayerColor: secondPlayerColor , room: room  })=>{
        endScreenWrapper.style.display = "none";
        if (room === $2d2a4bce24eb15d9$var$roomCode) $2d2a4bce24eb15d9$var$gamePage(secondPlayerColor);
    });
}
function $2d2a4bce24eb15d9$var$playerDisconnected() {
    const endScreenWrapper = document.querySelector(".game__end-wrapper");
    const endScreenTitle = document.querySelector(".game__end-title");
    const endRestartBtn = document.querySelector(".game__end-btn.restart");
    const endMenuBtn = document.querySelector(".game__end-btn.menu");
    endScreenWrapper.style.display = "flex";
    endRestartBtn.style.display = "none";
    endScreenTitle.innerText = "Opponent Left The Game";
    endMenuBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        endScreenWrapper.style.display = "none";
        $2d2a4bce24eb15d9$var$mainPage();
    });
}
$2d2a4bce24eb15d9$var$main();


