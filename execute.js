// this code will be executed when the extension's button is clicked

(function () {
  !(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t || self).Lenis = e());
  })(this, function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function e(e, o, i) {
      return (
        o && t(e.prototype, o),
        i && t(e, i),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function o() {
      return (
        (o = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var i in o)
                  Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
              }
              return t;
            }),
        o.apply(this, arguments)
      );
    }
    function i(t, e) {
      return (
        (i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        i(t, e)
      );
    }
    function n() {}
    n.prototype = {
      on: function (t, e, o) {
        var i = this.e || (this.e = {});
        return (i[t] || (i[t] = [])).push({ fn: e, ctx: o }), this;
      },
      once: function (t, e, o) {
        var i = this;
        function n() {
          i.off(t, n), e.apply(o, arguments);
        }
        return (n._ = e), this.on(t, n, o);
      },
      emit: function (t) {
        for (
          var e = [].slice.call(arguments, 1),
            o = ((this.e || (this.e = {}))[t] || []).slice(),
            i = 0,
            n = o.length;
          i < n;
          i++
        )
          o[i].fn.apply(o[i].ctx, e);
        return this;
      },
      off: function (t, e) {
        var o = this.e || (this.e = {}),
          i = o[t],
          n = [];
        if (i && e)
          for (var r = 0, s = i.length; r < s; r++)
            i[r].fn !== e && i[r].fn._ !== e && n.push(i[r]);
        return n.length ? (o[t] = n) : delete o[t], this;
      },
    };
    var r = n;
    (r.TinyEmitter = n),
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self && self;
    var s = (function (t) {
        var e = { exports: {} };
        return (
          (function (t, e) {
            t.exports = (function () {
              var t = 0;
              function e(e) {
                return "__private_" + t++ + "_" + e;
              }
              function o(t, e) {
                if (!Object.prototype.hasOwnProperty.call(t, e))
                  throw new TypeError(
                    "attempted to use private field on non-instance"
                  );
                return t;
              }
              function i() {}
              i.prototype = {
                on: function (t, e, o) {
                  var i = this.e || (this.e = {});
                  return (i[t] || (i[t] = [])).push({ fn: e, ctx: o }), this;
                },
                once: function (t, e, o) {
                  var i = this;
                  function n() {
                    i.off(t, n), e.apply(o, arguments);
                  }
                  return (n._ = e), this.on(t, n, o);
                },
                emit: function (t) {
                  for (
                    var e = [].slice.call(arguments, 1),
                      o = ((this.e || (this.e = {}))[t] || []).slice(),
                      i = 0,
                      n = o.length;
                    i < n;
                    i++
                  )
                    o[i].fn.apply(o[i].ctx, e);
                  return this;
                },
                off: function (t, e) {
                  var o = this.e || (this.e = {}),
                    i = o[t],
                    n = [];
                  if (i && e)
                    for (var r = 0, s = i.length; r < s; r++)
                      i[r].fn !== e && i[r].fn._ !== e && n.push(i[r]);
                  return n.length ? (o[t] = n) : delete o[t], this;
                },
              };
              var n = i;
              n.TinyEmitter = i;
              var r,
                s = "virtualscroll",
                l = e("options"),
                h = e("el"),
                a = e("emitter"),
                c = e("event"),
                u = e("touchStart"),
                d = e("bodyTouchAction");
              return (function () {
                function t(t) {
                  var e = this;
                  Object.defineProperty(this, l, {
                    writable: !0,
                    value: void 0,
                  }),
                    Object.defineProperty(this, h, {
                      writable: !0,
                      value: void 0,
                    }),
                    Object.defineProperty(this, a, {
                      writable: !0,
                      value: void 0,
                    }),
                    Object.defineProperty(this, c, {
                      writable: !0,
                      value: void 0,
                    }),
                    Object.defineProperty(this, u, {
                      writable: !0,
                      value: void 0,
                    }),
                    Object.defineProperty(this, d, {
                      writable: !0,
                      value: void 0,
                    }),
                    (this._onWheel = function (t) {
                      var i = o(e, l)[l],
                        n = o(e, c)[c];
                      (n.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                        (n.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                        r.isFirefox &&
                          1 === t.deltaMode &&
                          ((n.deltaX *= i.firefoxMultiplier),
                          (n.deltaY *= i.firefoxMultiplier)),
                        (n.deltaX *= i.mouseMultiplier),
                        (n.deltaY *= i.mouseMultiplier),
                        e._notify(t);
                    }),
                    (this._onMouseWheel = function (t) {
                      var i = o(e, c)[c];
                      (i.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
                        (i.deltaY = t.wheelDeltaY
                          ? t.wheelDeltaY
                          : t.wheelDelta),
                        e._notify(t);
                    }),
                    (this._onTouchStart = function (t) {
                      var i = t.targetTouches ? t.targetTouches[0] : t;
                      (o(e, u)[u].x = i.pageX), (o(e, u)[u].y = i.pageY);
                    }),
                    (this._onTouchMove = function (t) {
                      var i = o(e, l)[l];
                      i.preventTouch &&
                        !t.target.classList.contains(i.unpreventTouchClass) &&
                        t.preventDefault();
                      var n = o(e, c)[c],
                        r = t.targetTouches ? t.targetTouches[0] : t;
                      (n.deltaX = (r.pageX - o(e, u)[u].x) * i.touchMultiplier),
                        (n.deltaY =
                          (r.pageY - o(e, u)[u].y) * i.touchMultiplier),
                        (o(e, u)[u].x = r.pageX),
                        (o(e, u)[u].y = r.pageY),
                        e._notify(t);
                    }),
                    (this._onKeyDown = function (t) {
                      var i = o(e, c)[c];
                      i.deltaX = i.deltaY = 0;
                      var n = window.innerHeight - 40;
                      switch (t.keyCode) {
                        case 37:
                        case 38:
                          i.deltaY = o(e, l)[l].keyStep;
                          break;
                        case 39:
                        case 40:
                          i.deltaY = -o(e, l)[l].keyStep;
                          break;
                        case 32:
                          i.deltaY = n * (t.shiftKey ? 1 : -1);
                          break;
                        default:
                          return;
                      }
                      e._notify(t);
                    }),
                    (o(this, h)[h] = window),
                    t && t.el && ((o(this, h)[h] = t.el), delete t.el),
                    r ||
                      (r = {
                        hasWheelEvent: "onwheel" in document,
                        hasMouseWheelEvent: "onmousewheel" in document,
                        hasTouch: "ontouchstart" in document,
                        hasTouchWin:
                          navigator.msMaxTouchPoints &&
                          navigator.msMaxTouchPoints > 1,
                        hasPointer: !!window.navigator.msPointerEnabled,
                        hasKeyDown: "onkeydown" in document,
                        isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
                      }),
                    (o(this, l)[l] = Object.assign(
                      {
                        mouseMultiplier: 1,
                        touchMultiplier: 2,
                        firefoxMultiplier: 15,
                        keyStep: 120,
                        preventTouch: !1,
                        unpreventTouchClass: "vs-touchmove-allowed",
                        useKeyboard: !0,
                        useTouch: !0,
                      },
                      t
                    )),
                    (o(this, a)[a] = new n()),
                    (o(this, c)[c] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
                    (o(this, u)[u] = { x: null, y: null }),
                    (o(this, d)[d] = null),
                    void 0 !== o(this, l)[l].passive &&
                      (this.listenerOptions = {
                        passive: o(this, l)[l].passive,
                      });
                }
                var e = t.prototype;
                return (
                  (e._notify = function (t) {
                    var e = o(this, c)[c];
                    (e.x += e.deltaX),
                      (e.y += e.deltaY),
                      o(this, a)[a].emit(s, {
                        x: e.x,
                        y: e.y,
                        deltaX: e.deltaX,
                        deltaY: e.deltaY,
                        originalEvent: t,
                      });
                  }),
                  (e._bind = function () {
                    r.hasWheelEvent &&
                      o(this, h)[h].addEventListener(
                        "wheel",
                        this._onWheel,
                        this.listenerOptions
                      ),
                      r.hasMouseWheelEvent &&
                        o(this, h)[h].addEventListener(
                          "mousewheel",
                          this._onMouseWheel,
                          this.listenerOptions
                        ),
                      r.hasTouch &&
                        o(this, l)[l].useTouch &&
                        (o(this, h)[h].addEventListener(
                          "touchstart",
                          this._onTouchStart,
                          this.listenerOptions
                        ),
                        o(this, h)[h].addEventListener(
                          "touchmove",
                          this._onTouchMove,
                          this.listenerOptions
                        )),
                      r.hasPointer &&
                        r.hasTouchWin &&
                        ((o(this, d)[d] = document.body.style.msTouchAction),
                        (document.body.style.msTouchAction = "none"),
                        o(this, h)[h].addEventListener(
                          "MSPointerDown",
                          this._onTouchStart,
                          !0
                        ),
                        o(this, h)[h].addEventListener(
                          "MSPointerMove",
                          this._onTouchMove,
                          !0
                        )),
                      r.hasKeyDown &&
                        o(this, l)[l].useKeyboard &&
                        document.addEventListener("keydown", this._onKeyDown);
                  }),
                  (e._unbind = function () {
                    r.hasWheelEvent &&
                      o(this, h)[h].removeEventListener("wheel", this._onWheel),
                      r.hasMouseWheelEvent &&
                        o(this, h)[h].removeEventListener(
                          "mousewheel",
                          this._onMouseWheel
                        ),
                      r.hasTouch &&
                        (o(this, h)[h].removeEventListener(
                          "touchstart",
                          this._onTouchStart
                        ),
                        o(this, h)[h].removeEventListener(
                          "touchmove",
                          this._onTouchMove
                        )),
                      r.hasPointer &&
                        r.hasTouchWin &&
                        ((document.body.style.msTouchAction = o(this, d)[d]),
                        o(this, h)[h].removeEventListener(
                          "MSPointerDown",
                          this._onTouchStart,
                          !0
                        ),
                        o(this, h)[h].removeEventListener(
                          "MSPointerMove",
                          this._onTouchMove,
                          !0
                        )),
                      r.hasKeyDown &&
                        o(this, l)[l].useKeyboard &&
                        document.removeEventListener(
                          "keydown",
                          this._onKeyDown
                        );
                  }),
                  (e.on = function (t, e) {
                    o(this, a)[a].on(s, t, e);
                    var i = o(this, a)[a].e;
                    i && i[s] && 1 === i[s].length && this._bind();
                  }),
                  (e.off = function (t, e) {
                    o(this, a)[a].off(s, t, e);
                    var i = o(this, a)[a].e;
                    (!i[s] || i[s].length <= 0) && this._unbind();
                  }),
                  (e.destroy = function () {
                    o(this, a)[a].off(), this._unbind();
                  }),
                  t
                );
              })();
            })();
          })(e),
          e.exports
        );
      })(),
      l = "0.2.7";
    function h(t, e, o) {
      return Math.max(t, Math.min(e, o));
    }
    var a = ["duration", "easing"],
      c = /*#__PURE__*/ (function () {
        function t() {}
        var i = t.prototype;
        return (
          (i.to = function (t, e) {
            var i = this,
              n = void 0 === e ? {} : e,
              r = n.duration,
              s = void 0 === r ? 1 : r,
              l = n.easing,
              h =
                void 0 === l
                  ? function (t) {
                      return t;
                    }
                  : l,
              c = (function (t, e) {
                if (null == t) return {};
                var o,
                  i,
                  n = {},
                  r = Object.keys(t);
                for (i = 0; i < r.length; i++)
                  e.indexOf((o = r[i])) >= 0 || (n[o] = t[o]);
                return n;
              })(n, a);
            (this.target = t),
              (this.fromKeys = o({}, c)),
              (this.toKeys = o({}, c)),
              (this.keys = Object.keys(o({}, c))),
              this.keys.forEach(function (e) {
                i.fromKeys[e] = t[e];
              }),
              (this.duration = s),
              (this.easing = h),
              (this.currentTime = 0),
              (this.isRunning = !0);
          }),
          (i.raf = function (t) {
            var e = this;
            if (this.isRunning) {
              this.currentTime = Math.min(
                this.currentTime + 0.001 * t,
                this.duration
              );
              var o = this.easing(this.progress);
              this.keys.forEach(function (t) {
                var i = e.fromKeys[t];
                e.target[t] = i + (e.toKeys[t] - i) * o;
              }),
                1 === o && (this.isRunning = !1);
            }
          }),
          e(t, [
            {
              key: "progress",
              get: function () {
                return this.currentTime / this.duration;
              },
            },
          ]),
          t
        );
      })(),
      u = /*#__PURE__*/ (function (t) {
        var o, n;
        function r(e) {
          var o,
            i,
            n,
            r,
            a = void 0 === e ? {} : e,
            u = a.duration,
            d = void 0 === u ? 1.2 : u,
            p = a.easing,
            f =
              void 0 === p
                ? function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                  }
                : p,
            v = a.smooth,
            y = void 0 === v || v,
            w = a.smoothTouch,
            g = void 0 !== w && w,
            m = a.touchMultiplier,
            b = void 0 === m ? 2 : m,
            T = a.direction,
            S = void 0 === T ? "vertical" : T,
            M = a.wrapper,
            _ = void 0 === M ? window : M,
            O = a.content,
            E = void 0 === O ? document.body : O;
          ((r = t.call(this) || this).onWindowResize = function () {
            (r.wrapperWidth = window.innerWidth),
              (r.wrapperHeight = window.innerHeight);
          }),
            (r.onWrapperResize = function (t) {
              var e = t[0];
              if (e) {
                var o = e.contentRect;
                (r.wrapperWidth = o.width), (r.wrapperHeight = o.height);
              }
            }),
            (r.onContentResize = function (t) {
              var e = t[0];
              if (e) {
                var o = e.contentRect;
                (r.contentWidth = o.width), (r.contentHeight = o.height);
              }
            }),
            (r.onVirtualScroll = function (t) {
              var e = t.deltaY,
                o = t.originalEvent;
              o.ctrlKey ||
                ((r.smooth = o.changedTouches
                  ? r.smoothTouch
                  : r.options.smooth),
                r.stopped
                  ? o.preventDefault()
                  : r.smooth &&
                    4 !== o.buttons &&
                    (r.smooth && o.preventDefault(),
                    (r.targetScroll -= e),
                    (r.targetScroll = h(0, r.targetScroll, r.limit)),
                    r.scrollTo(r.targetScroll)));
            }),
            (r.onScroll = function (t) {
              (r.isScrolling && r.smooth) ||
                ((r.targetScroll =
                  r.scroll =
                  r.lastScroll =
                    r.wrapperNode[r.scrollProperty]),
                r.notify());
            }),
            void 0 !== arguments[0].lerp &&
              console.warn(
                "Lenis: lerp option is deprecated, you must use duration and easing options instead. See documentation https://github.com/studio-freight/lenis"
              ),
            (window.lenisVersion = l),
            (r.options = {
              duration: d,
              easing: f,
              smooth: y,
              smoothTouch: g,
              touchMultiplier: b,
              direction: S,
              wrapper: _,
              content: E,
            }),
            (r.wrapperNode = _),
            (r.contentNode = E),
            (r.duration = d),
            (r.easing = f),
            (r.smooth = y),
            (r.smoothTouch = g),
            (r.touchMultiplier = b),
            (r.direction = S),
            r.wrapperNode.addEventListener("scroll", r.onScroll),
            r.wrapperNode === window
              ? (r.wrapperNode.addEventListener("resize", r.onWindowResize),
                r.onWindowResize())
              : ((r.wrapperHeight = r.wrapperNode.offsetHeight),
                (r.wrapperWidth = r.wrapperNode.offsetWidth),
                (r.wrapperObserver = new ResizeObserver(r.onWrapperResize)),
                r.wrapperObserver.observe(r.wrapperNode)),
            (r.contentHeight = r.contentNode.offsetHeight),
            (r.contentWidth = r.contentNode.offsetWidth),
            (r.contentObserver = new ResizeObserver(r.onContentResize)),
            r.contentObserver.observe(r.contentNode),
            (r.targetScroll =
              r.scroll =
              r.lastScroll =
                r.wrapperNode[r.scrollProperty]),
            (r.animate = new c());
          var W =
            (null == (o = navigator) || null == (i = o.userAgentData)
              ? void 0
              : i.platform) ||
            (null == (n = navigator) ? void 0 : n.platform) ||
            "unknown";
          return (
            (r.virtualScroll = new s({
              el: r.wrapperNode,
              firefoxMultiplier: 50,
              mouseMultiplier: W.includes("Win") ? 1 : 0.4,
              useKeyboard: !1,
              touchMultiplier: r.touchMultiplier,
              useTouch: !0,
              passive: !1,
            })),
            r.virtualScroll.on(r.onVirtualScroll),
            r
          );
        }
        (n = t),
          ((o = r).prototype = Object.create(n.prototype)),
          (o.prototype.constructor = o),
          i(o, n);
        var a = r.prototype;
        return (
          (a.start = function () {
            this.stopped = !1;
          }),
          (a.stop = function () {
            this.stopped = !0;
          }),
          (a.destroy = function () {
            var t;
            this.wrapperNode === window &&
              this.wrapperNode.removeEventListener(
                "resize",
                this.onWindowResize
              ),
              this.wrapperNode.removeEventListener("scroll", this.onScroll),
              this.virtualScroll.destroy(),
              null == (t = this.wrapperObserver) || t.disconnect(),
              this.contentObserver.disconnect();
          }),
          (a.raf = function (t) {
            var e = t - (this.now || 0);
            (this.now = t),
              !this.stopped &&
                this.smooth &&
                ((this.lastScroll = this.scroll),
                this.animate.raf(e),
                Math.round(this.scroll) === Math.round(this.targetScroll) &&
                  (this.lastScroll = this.targetScroll),
                this.isScrolling &&
                  (this.setScroll(this.scroll), this.notify()),
                (this.isScrolling = this.scroll !== this.targetScroll));
          }),
          (a.setScroll = function (t) {
            "horizontal" === this.direction
              ? this.wrapperNode.scrollTo(t, 0)
              : this.wrapperNode.scrollTo(0, t);
          }),
          (a.notify = function () {
            this.emit("scroll", {
              scroll: this.scroll,
              limit: this.limit,
              velocity: this.velocity,
              direction: this.direction,
              progress: this.scroll / this.limit,
            });
          }),
          (a.scrollTo = function (t, e) {
            var o,
              i = void 0 === e ? {} : e,
              n = i.offset,
              r = void 0 === n ? 0 : n,
              s = i.immediate,
              l = void 0 !== s && s,
              h = i.duration,
              a = void 0 === h ? this.duration : h,
              c = i.easing,
              u = void 0 === c ? this.easing : c;
            if ("number" == typeof t) o = t;
            else if ("top" === t || "#top" === t) o = 0;
            else if ("bottom" === t) o = this.limit;
            else {
              var d;
              if ("string" == typeof t) d = document.querySelector(t);
              else {
                if (null == t || !t.nodeType) return;
                d = t;
              }
              if (!t) return;
              var p = 0;
              if (this.wrapperNode !== window) {
                var f = this.wrapperNode.getBoundingClientRect();
                p = "horizontal" === this.direction ? f.left : f.top;
              }
              var v = d.getBoundingClientRect();
              o =
                ("horizontal" === this.direction ? v.left : v.top) +
                this.scroll -
                p;
            }
            (this.targetScroll = o += r),
              !this.smooth || l
                ? this.setScroll(this.targetScroll)
                : this.animate.to(this, {
                    duration: a,
                    easing: u,
                    scroll: this.targetScroll,
                  });
          }),
          e(r, [
            {
              key: "scrollProperty",
              get: function () {
                return this.wrapperNode === window
                  ? "horizontal" === this.direction
                    ? "scrollX"
                    : "scrollY"
                  : "horizontal" === this.direction
                  ? "scrollLeft"
                  : "scrollTop";
              },
            },
            {
              key: "limit",
              get: function () {
                return "horizontal" === this.direction
                  ? this.contentWidth - this.wrapperWidth
                  : this.contentHeight - this.wrapperHeight;
              },
            },
            {
              key: "velocity",
              get: function () {
                return this.scroll - this.lastScroll;
              },
            },
          ]),
          r
        );
      })(r);
    return u;
  });

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    smooth: true,
    direction: "vertical",
  });

  chrome.storage.local.get(["smooth"], function (result) {
    if (result.smooth) {
      chrome.storage.local.set({ smooth: false });
      location.reload();
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      chrome.storage.local.set({ smooth: true });
      console.log("Smooth scrolling enabled", true);
    }
  });
})();
