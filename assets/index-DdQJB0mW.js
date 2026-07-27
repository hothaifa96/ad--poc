function zd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const a = Object.getOwnPropertyDescriptor(r, l);
          a &&
            Object.defineProperty(
              e,
              l,
              a.get ? a : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const a = {};
    return (
      l.integrity && (a.integrity = l.integrity),
      l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = n(l);
    fetch(l.href, a);
  }
})();
function Ad(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ho = { exports: {} },
  El = {},
  Qo = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr = Symbol.for("react.element"),
  Td = Symbol.for("react.portal"),
  Ld = Symbol.for("react.fragment"),
  Fd = Symbol.for("react.strict_mode"),
  Id = Symbol.for("react.profiler"),
  Rd = Symbol.for("react.provider"),
  Md = Symbol.for("react.context"),
  Od = Symbol.for("react.forward_ref"),
  Dd = Symbol.for("react.suspense"),
  Ud = Symbol.for("react.memo"),
  $d = Symbol.for("react.lazy"),
  wi = Symbol.iterator;
function Bd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wi && e[wi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ko = Object.assign,
  Xo = {};
function vn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Xo),
    (this.updater = n || Yo));
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Go() {}
Go.prototype = vn.prototype;
function ya(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Xo),
    (this.updater = n || Yo));
}
var wa = (ya.prototype = new Go());
wa.constructor = ya;
Ko(wa, vn.prototype);
wa.isPureReactComponent = !0;
var ji = Array.isArray,
  Zo = Object.prototype.hasOwnProperty,
  ja = { current: null },
  Jo = { key: !0, ref: !0, __self: !0, __source: !0 };
function qo(e, t, n) {
  var r,
    l = {},
    a = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Zo.call(t, r) && !Jo.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var o = Array(u), c = 0; c < u; c++) o[c] = arguments[c + 2];
    l.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: pr,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: ja.current,
  };
}
function Vd(e, t) {
  return {
    $$typeof: pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function Wd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ki = /\/+/g;
function Xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Wd("" + e.key)
    : t.toString(36);
}
function Vr(e, t, n, r, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (a) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pr:
          case Td:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Xl(i, 0) : r),
      ji(l)
        ? ((n = ""),
          e != null && (n = e.replace(ki, "$&/") + "/"),
          Vr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (ka(l) &&
            (l = Vd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ki, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ji(e)))
    for (var u = 0; u < e.length; u++) {
      a = e[u];
      var o = r + Xl(a, u);
      i += Vr(a, t, n, o, l);
    }
  else if (((o = Bd(e)), typeof o == "function"))
    for (e = o.call(e), u = 0; !(a = e.next()).done; )
      ((a = a.value), (o = r + Xl(a, u++)), (i += Vr(a, t, n, o, l)));
  else if (a === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Vr(e, r, "", "", function (a) {
      return t.call(n, a, l++);
    }),
    r
  );
}
function Hd(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Wr = { transition: null },
  Qd = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Wr,
    ReactCurrentOwner: ja,
  };
function eu() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ka(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = vn;
F.Fragment = Ld;
F.Profiler = Id;
F.PureComponent = ya;
F.StrictMode = Fd;
F.Suspense = Dd;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qd;
F.act = eu;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ko({}, e.props),
    l = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = ja.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (o in t)
      Zo.call(t, o) &&
        !Jo.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && u !== void 0 ? u[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    u = Array(o);
    for (var c = 0; c < o; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: pr, type: e.type, key: l, ref: a, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Md,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rd, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = qo;
F.createFactory = function (e) {
  var t = qo.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Od, render: e };
};
F.isValidElement = ka;
F.lazy = function (e) {
  return { $$typeof: $d, _payload: { _status: -1, _result: e }, _init: Hd };
};
F.memo = function (e, t) {
  return { $$typeof: Ud, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Wr.transition;
  Wr.transition = {};
  try {
    e();
  } finally {
    Wr.transition = t;
  }
};
F.unstable_act = eu;
F.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
F.useContext = function (e) {
  return de.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
F.useId = function () {
  return de.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return de.current.useRef(e);
};
F.useState = function (e) {
  return de.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return de.current.useTransition();
};
F.version = "18.3.1";
Qo.exports = F;
var k = Qo.exports;
const Yd = Ad(k),
  Kd = zd({ __proto__: null, default: Yd }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd = k,
  Gd = Symbol.for("react.element"),
  Zd = Symbol.for("react.fragment"),
  Jd = Object.prototype.hasOwnProperty,
  qd = Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function tu(e, t, n) {
  var r,
    l = {},
    a = null,
    i = null;
  (n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Jd.call(t, r) && !ef.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Gd,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: qd.current,
  };
}
El.Fragment = Zd;
El.jsx = tu;
El.jsxs = tu;
Ho.exports = El;
var s = Ho.exports,
  nu = { exports: {} },
  Ne = {},
  ru = { exports: {} },
  lu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, T) {
    var L = E.length;
    E.push(T);
    e: for (; 0 < L; ) {
      var Y = (L - 1) >>> 1,
        q = E[Y];
      if (0 < l(q, T)) ((E[Y] = T), (E[L] = q), (L = Y));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var T = E[0],
      L = E.pop();
    if (L !== T) {
      E[0] = L;
      e: for (var Y = 0, q = E.length, kr = q >>> 1; Y < kr; ) {
        var St = 2 * (Y + 1) - 1,
          Kl = E[St],
          _t = St + 1,
          Nr = E[_t];
        if (0 > l(Kl, L))
          _t < q && 0 > l(Nr, Kl)
            ? ((E[Y] = Nr), (E[_t] = L), (Y = _t))
            : ((E[Y] = Kl), (E[St] = L), (Y = St));
        else if (_t < q && 0 > l(Nr, L)) ((E[Y] = Nr), (E[_t] = L), (Y = _t));
        else break e;
      }
    }
    return T;
  }
  function l(E, T) {
    var L = E.sortIndex - T.sortIndex;
    return L !== 0 ? L : E.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var o = [],
    c = [],
    x = 1,
    f = null,
    p = 3,
    y = !1,
    w = !1,
    g = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= E)
        (r(c), (T.sortIndex = T.expirationTime), t(o, T));
      else break;
      T = n(c);
    }
  }
  function j(E) {
    if (((g = !1), m(E), !w))
      if (n(o) !== null) ((w = !0), Ql(S));
      else {
        var T = n(c);
        T !== null && Yl(j, T.startTime - E);
      }
  }
  function S(E, T) {
    ((w = !1), g && ((g = !1), h(A), (A = -1)), (y = !0));
    var L = p;
    try {
      for (
        m(T), f = n(o);
        f !== null && (!(f.expirationTime > T) || (E && !z()));
      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          ((f.callback = null), (p = f.priorityLevel));
          var q = Y(f.expirationTime <= T);
          ((T = e.unstable_now()),
            typeof q == "function" ? (f.callback = q) : f === n(o) && r(o),
            m(T));
        } else r(o);
        f = n(o);
      }
      if (f !== null) var kr = !0;
      else {
        var St = n(c);
        (St !== null && Yl(j, St.startTime - T), (kr = !1));
      }
      return kr;
    } finally {
      ((f = null), (p = L), (y = !1));
    }
  }
  var b = !1,
    P = null,
    A = -1,
    B = 5,
    v = -1;
  function z() {
    return !(e.unstable_now() - v < B);
  }
  function ve() {
    if (P !== null) {
      var E = e.unstable_now();
      v = E;
      var T = !0;
      try {
        T = P(!0, E);
      } finally {
        T ? Qe() : ((b = !1), (P = null));
      }
    } else b = !1;
  }
  var Qe;
  if (typeof d == "function")
    Qe = function () {
      d(ve);
    };
  else if (typeof MessageChannel < "u") {
    var yi = new MessageChannel(),
      Pd = yi.port2;
    ((yi.port1.onmessage = ve),
      (Qe = function () {
        Pd.postMessage(null);
      }));
  } else
    Qe = function () {
      C(ve, 0);
    };
  function Ql(E) {
    ((P = E), b || ((b = !0), Qe()));
  }
  function Yl(E, T) {
    A = C(function () {
      E(e.unstable_now());
    }, T);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), Ql(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var L = p;
      p = T;
      try {
        return E();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, T) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var L = p;
      p = E;
      try {
        return T();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (E, T, L) {
      var Y = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Y + L : Y))
          : (L = Y),
        E)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = L + q),
        (E = {
          id: x++,
          callback: T,
          priorityLevel: E,
          startTime: L,
          expirationTime: q,
          sortIndex: -1,
        }),
        L > Y
          ? ((E.sortIndex = L),
            t(c, E),
            n(o) === null &&
              E === n(c) &&
              (g ? (h(A), (A = -1)) : (g = !0), Yl(j, L - Y)))
          : ((E.sortIndex = q), t(o, E), w || y || ((w = !0), Ql(S))),
        E
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (E) {
      var T = p;
      return function () {
        var L = p;
        p = T;
        try {
          return E.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    }));
})(lu);
ru.exports = lu;
var tf = ru.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = k,
  ke = tf;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var su = new Set(),
  Qn = {};
function Bt(e, t) {
  (dn(e, t), dn(e + "Capture", t));
}
function dn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) su.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ns = Object.prototype.hasOwnProperty,
  rf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ni = {},
  bi = {};
function lf(e) {
  return Ns.call(bi, e)
    ? !0
    : Ns.call(Ni, e)
      ? !1
      : rf.test(e)
        ? (bi[e] = !0)
        : ((Ni[e] = !0), !1);
}
function sf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function af(e, t, n, r) {
  if (t === null || typeof t > "u" || sf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, a, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i));
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Na = /[\-:]([a-z])/g;
function ba(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Na, ba);
    le[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Na, ba);
    le[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Na, ba);
  le[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ca(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (af(t, n, l, r) && (n = null),
    r || l === null
      ? lf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cr = Symbol.for("react.element"),
  Ht = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  Sa = Symbol.for("react.strict_mode"),
  bs = Symbol.for("react.profiler"),
  au = Symbol.for("react.provider"),
  iu = Symbol.for("react.context"),
  _a = Symbol.for("react.forward_ref"),
  Cs = Symbol.for("react.suspense"),
  Ss = Symbol.for("react.suspense_list"),
  Ea = Symbol.for("react.memo"),
  lt = Symbol.for("react.lazy"),
  ou = Symbol.for("react.offscreen"),
  Ci = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ci && e[Ci]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Gl;
function Ln(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gl = (t && t[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Zl = !1;
function Jl(e, t) {
  if (!e || Zl) return "";
  Zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          a = r.stack.split(`
`),
          i = l.length - 1,
          u = a.length - 1;
        1 <= i && 0 <= u && l[i] !== a[u];
      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== a[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== a[u])) {
                var o =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    ((Zl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function of(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Jl(e.type, !1)), e);
    case 11:
      return ((e = Jl(e.type.render, !1)), e);
    case 1:
      return ((e = Jl(e.type, !0)), e);
    default:
      return "";
  }
}
function _s(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Ht:
      return "Portal";
    case bs:
      return "Profiler";
    case Sa:
      return "StrictMode";
    case Cs:
      return "Suspense";
    case Ss:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case iu:
        return (e.displayName || "Context") + ".Consumer";
      case au:
        return (e._context.displayName || "Context") + ".Provider";
      case _a:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ea:
        return (
          (t = e.displayName || null),
          t !== null ? t : _s(e.type) || "Memo"
        );
      case lt:
        ((t = e._payload), (e = e._init));
        try {
          return _s(e(t));
        } catch {}
    }
  return null;
}
function uf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _s(t);
    case 8:
      return t === Sa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function uu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cf(e) {
  var t = uu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          ((r = "" + i), a.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Sr(e) {
  e._valueTracker || (e._valueTracker = cf(e));
}
function cu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = uu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function tl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Es(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Si(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function du(e, t) {
  ((t = t.checked), t != null && Ca(e, "checked", t, !1));
}
function Ps(e, t) {
  du(e, t);
  var n = wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? zs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zs(e, t.type, wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function _i(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function zs(e, t, n) {
  (t !== "number" || tl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function As(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ei(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: wt(n) };
}
function fu(e, t) {
  var n = wt(t.value),
    r = wt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Pi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function pu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ts(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? pu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var _r,
  hu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _r = _r || document.createElement("div"),
          _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _r.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  df = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function (e) {
  df.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
  });
});
function mu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
      ? ("" + t).trim()
      : t + "px";
}
function xu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = mu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var ff = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ls(e, t) {
  if (t) {
    if (ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Fs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Is = null;
function Pa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rs = null,
  ln = null,
  sn = null;
function zi(e) {
  if ((e = xr(e))) {
    if (typeof Rs != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Ll(t)), Rs(e.stateNode, e.type, t));
  }
}
function gu(e) {
  ln ? (sn ? sn.push(e) : (sn = [e])) : (ln = e);
}
function vu() {
  if (ln) {
    var e = ln,
      t = sn;
    if (((sn = ln = null), zi(e), t)) for (e = 0; e < t.length; e++) zi(t[e]);
  }
}
function yu(e, t) {
  return e(t);
}
function wu() {}
var ql = !1;
function ju(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return yu(e, t, n);
  } finally {
    ((ql = !1), (ln !== null || sn !== null) && (wu(), vu()));
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ll(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Ms = !1;
if (Je)
  try {
    var Sn = {};
    (Object.defineProperty(Sn, "passive", {
      get: function () {
        Ms = !0;
      },
    }),
      window.addEventListener("test", Sn, Sn),
      window.removeEventListener("test", Sn, Sn));
  } catch {
    Ms = !1;
  }
function pf(e, t, n, r, l, a, i, u, o) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (x) {
    this.onError(x);
  }
}
var On = !1,
  nl = null,
  rl = !1,
  Os = null,
  hf = {
    onError: function (e) {
      ((On = !0), (nl = e));
    },
  };
function mf(e, t, n, r, l, a, i, u, o) {
  ((On = !1), (nl = null), pf.apply(hf, arguments));
}
function xf(e, t, n, r, l, a, i, u, o) {
  if ((mf.apply(this, arguments), On)) {
    if (On) {
      var c = nl;
      ((On = !1), (nl = null));
    } else throw Error(N(198));
    rl || ((rl = !0), (Os = c));
  }
}
function Vt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ku(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ai(e) {
  if (Vt(e) !== e) throw Error(N(188));
}
function gf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === n) return (Ai(l), e);
        if (a === r) return (Ai(l), t);
        a = a.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) ((n = l), (r = a));
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          ((i = !0), (n = l), (r = a));
          break;
        }
        if (u === r) {
          ((i = !0), (r = l), (n = a));
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = a.child; u; ) {
          if (u === n) {
            ((i = !0), (n = a), (r = l));
            break;
          }
          if (u === r) {
            ((i = !0), (r = a), (n = l));
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Nu(e) {
  return ((e = gf(e)), e !== null ? bu(e) : null);
}
function bu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cu = ke.unstable_scheduleCallback,
  Ti = ke.unstable_cancelCallback,
  vf = ke.unstable_shouldYield,
  yf = ke.unstable_requestPaint,
  K = ke.unstable_now,
  wf = ke.unstable_getCurrentPriorityLevel,
  za = ke.unstable_ImmediatePriority,
  Su = ke.unstable_UserBlockingPriority,
  ll = ke.unstable_NormalPriority,
  jf = ke.unstable_LowPriority,
  _u = ke.unstable_IdlePriority,
  Pl = null,
  We = null;
function kf(e) {
  if (We && typeof We.onCommitFiberRoot == "function")
    try {
      We.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Cf,
  Nf = Math.log,
  bf = Math.LN2;
function Cf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Nf(e) / bf) | 0)) | 0);
}
var Er = 64,
  Pr = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = In(u)) : ((a &= i), a !== 0 && (r = In(a)));
  } else ((i = n & ~l), i !== 0 ? (r = In(i)) : a !== 0 && (r = In(a)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Sf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function _f(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;
  ) {
    var i = 31 - Me(a),
      u = 1 << i,
      o = l[i];
    (o === -1
      ? (!(u & n) || u & r) && (l[i] = Sf(u, t))
      : o <= t && (e.expiredLanes |= u),
      (a &= ~u));
  }
}
function Ds(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Eu() {
  var e = Er;
  return ((Er <<= 1), !(Er & 4194240) && (Er = 64), e);
}
function es(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n));
}
function Ef(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      a = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a));
  }
}
function Aa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var M = 0;
function Pu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var zu,
  Ta,
  Au,
  Tu,
  Lu,
  Us = !1,
  zr = [],
  ft = null,
  pt = null,
  ht = null,
  Xn = new Map(),
  Gn = new Map(),
  at = [],
  Pf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Li(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function _n(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = xr(t)), t !== null && Ta(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function zf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((ft = _n(ft, e, t, n, r, l)), !0);
    case "dragenter":
      return ((pt = _n(pt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((ht = _n(ht, e, t, n, r, l)), !0);
    case "pointerover":
      var a = l.pointerId;
      return (Xn.set(a, _n(Xn.get(a) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (a = l.pointerId),
        Gn.set(a, _n(Gn.get(a) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Fu(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ku(n)), t !== null)) {
          ((e.blockedOn = t),
            Lu(e.priority, function () {
              Au(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $s(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Is = r), n.target.dispatchEvent(r), (Is = null));
    } else return ((t = xr(n)), t !== null && Ta(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Fi(e, t, n) {
  Hr(e) && n.delete(t);
}
function Af() {
  ((Us = !1),
    ft !== null && Hr(ft) && (ft = null),
    pt !== null && Hr(pt) && (pt = null),
    ht !== null && Hr(ht) && (ht = null),
    Xn.forEach(Fi),
    Gn.forEach(Fi));
}
function En(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Us ||
      ((Us = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Af)));
}
function Zn(e) {
  function t(l) {
    return En(l, e);
  }
  if (0 < zr.length) {
    En(zr[0], e);
    for (var n = 1; n < zr.length; n++) {
      var r = zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && En(ft, e),
      pt !== null && En(pt, e),
      ht !== null && En(ht, e),
      Xn.forEach(t),
      Gn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    ((r = at[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    (Fu(n), n.blockedOn === null && at.shift());
}
var an = nt.ReactCurrentBatchConfig,
  al = !0;
function Tf(e, t, n, r) {
  var l = M,
    a = an.transition;
  an.transition = null;
  try {
    ((M = 1), La(e, t, n, r));
  } finally {
    ((M = l), (an.transition = a));
  }
}
function Lf(e, t, n, r) {
  var l = M,
    a = an.transition;
  an.transition = null;
  try {
    ((M = 4), La(e, t, n, r));
  } finally {
    ((M = l), (an.transition = a));
  }
}
function La(e, t, n, r) {
  if (al) {
    var l = $s(e, t, n, r);
    if (l === null) (cs(e, t, r, il, n), Li(e, r));
    else if (zf(l, e, t, n, r)) r.stopPropagation();
    else if ((Li(e, r), t & 4 && -1 < Pf.indexOf(e))) {
      for (; l !== null; ) {
        var a = xr(l);
        if (
          (a !== null && zu(a),
          (a = $s(e, t, n, r)),
          a === null && cs(e, t, r, il, n),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else cs(e, t, r, null, n);
  }
}
var il = null;
function $s(e, t, n, r) {
  if (((il = null), (e = Pa(r)), (e = At(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ku(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((il = e), null);
}
function Iu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wf()) {
        case za:
          return 1;
        case Su:
          return 4;
        case ll:
        case jf:
          return 16;
        case _u:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  Fa = null,
  Qr = null;
function Ru() {
  if (Qr) return Qr;
  var e,
    t = Fa,
    n = t.length,
    r,
    l = "value" in ot ? ot.value : ot.textContent,
    a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[a - r]; r++);
  return (Qr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Yr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ar() {
  return !0;
}
function Ii() {
  return !1;
}
function be(e) {
  function t(n, r, l, a, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null));
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(a) : a[u]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Ar
        : Ii),
      (this.isPropagationStopped = Ii),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ar));
      },
      persist: function () {},
      isPersistent: Ar,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ia = be(yn),
  mr = H({}, yn, { view: 0, detail: 0 }),
  Ff = be(mr),
  ts,
  ns,
  Pn,
  zl = H({}, mr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ra,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Pn &&
            (Pn && e.type === "mousemove"
              ? ((ts = e.screenX - Pn.screenX), (ns = e.screenY - Pn.screenY))
              : (ns = ts = 0),
            (Pn = e)),
          ts);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ns;
    },
  }),
  Ri = be(zl),
  If = H({}, zl, { dataTransfer: 0 }),
  Rf = be(If),
  Mf = H({}, mr, { relatedTarget: 0 }),
  rs = be(Mf),
  Of = H({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Df = be(Of),
  Uf = H({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $f = be(Uf),
  Bf = H({}, yn, { data: 0 }),
  Mi = be(Bf),
  Vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Wf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Hf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Qf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hf[e]) ? !!t[e] : !1;
}
function Ra() {
  return Qf;
}
var Yf = H({}, mr, {
    key: function (e) {
      if (e.key) {
        var t = Vf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Wf[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ra,
    charCode: function (e) {
      return e.type === "keypress" ? Yr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Kf = be(Yf),
  Xf = H({}, zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Oi = be(Xf),
  Gf = H({}, mr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ra,
  }),
  Zf = be(Gf),
  Jf = H({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qf = be(Jf),
  ep = H({}, zl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tp = be(ep),
  np = [9, 13, 27, 32],
  Ma = Je && "CompositionEvent" in window,
  Dn = null;
Je && "documentMode" in document && (Dn = document.documentMode);
var rp = Je && "TextEvent" in window && !Dn,
  Mu = Je && (!Ma || (Dn && 8 < Dn && 11 >= Dn)),
  Di = " ",
  Ui = !1;
function Ou(e, t) {
  switch (e) {
    case "keyup":
      return np.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Du(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Yt = !1;
function lp(e, t) {
  switch (e) {
    case "compositionend":
      return Du(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ui = !0), Di);
    case "textInput":
      return ((e = t.data), e === Di && Ui ? null : e);
    default:
      return null;
  }
}
function sp(e, t) {
  if (Yt)
    return e === "compositionend" || (!Ma && Ou(e, t))
      ? ((e = Ru()), (Qr = Fa = ot = null), (Yt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Mu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ap = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $i(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ap[e.type] : t === "textarea";
}
function Uu(e, t, n, r) {
  (gu(r),
    (t = ol(t, "onChange")),
    0 < t.length &&
      ((n = new Ia("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Un = null,
  Jn = null;
function ip(e) {
  Zu(e, 0);
}
function Al(e) {
  var t = Gt(e);
  if (cu(t)) return e;
}
function op(e, t) {
  if (e === "change") return t;
}
var $u = !1;
if (Je) {
  var ls;
  if (Je) {
    var ss = "oninput" in document;
    if (!ss) {
      var Bi = document.createElement("div");
      (Bi.setAttribute("oninput", "return;"),
        (ss = typeof Bi.oninput == "function"));
    }
    ls = ss;
  } else ls = !1;
  $u = ls && (!document.documentMode || 9 < document.documentMode);
}
function Vi() {
  Un && (Un.detachEvent("onpropertychange", Bu), (Jn = Un = null));
}
function Bu(e) {
  if (e.propertyName === "value" && Al(Jn)) {
    var t = [];
    (Uu(t, Jn, e, Pa(e)), ju(ip, t));
  }
}
function up(e, t, n) {
  e === "focusin"
    ? (Vi(), (Un = t), (Jn = n), Un.attachEvent("onpropertychange", Bu))
    : e === "focusout" && Vi();
}
function cp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Al(Jn);
}
function dp(e, t) {
  if (e === "click") return Al(t);
}
function fp(e, t) {
  if (e === "input" || e === "change") return Al(t);
}
function pp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : pp;
function qn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ns.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function Wi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hi(e, t) {
  var n = Wi(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wi(n);
  }
}
function Vu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Vu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Wu() {
  for (var e = window, t = tl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = tl(e.document);
  }
  return t;
}
function Oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function hp(e) {
  var t = Wu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Oa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          a = Math.min(r.start, l);
        ((r = r.end === void 0 ? a : Math.min(r.end, l)),
          !e.extend && a > r && ((l = r), (r = a), (a = l)),
          (l = Hi(n, a)));
        var i = Hi(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var mp = Je && "documentMode" in document && 11 >= document.documentMode,
  Kt = null,
  Bs = null,
  $n = null,
  Vs = !1;
function Qi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vs ||
    Kt == null ||
    Kt !== tl(r) ||
    ((r = Kt),
    "selectionStart" in r && Oa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($n && qn($n, r)) ||
      (($n = r),
      (r = ol(Bs, "onSelect")),
      0 < r.length &&
        ((t = new Ia("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kt))));
}
function Tr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xt = {
    animationend: Tr("Animation", "AnimationEnd"),
    animationiteration: Tr("Animation", "AnimationIteration"),
    animationstart: Tr("Animation", "AnimationStart"),
    transitionend: Tr("Transition", "TransitionEnd"),
  },
  as = {},
  Hu = {};
Je &&
  ((Hu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function Tl(e) {
  if (as[e]) return as[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hu) return (as[e] = t[n]);
  return e;
}
var Qu = Tl("animationend"),
  Yu = Tl("animationiteration"),
  Ku = Tl("animationstart"),
  Xu = Tl("transitionend"),
  Gu = new Map(),
  Yi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function kt(e, t) {
  (Gu.set(e, t), Bt(t, [e]));
}
for (var is = 0; is < Yi.length; is++) {
  var os = Yi[is],
    xp = os.toLowerCase(),
    gp = os[0].toUpperCase() + os.slice(1);
  kt(xp, "on" + gp);
}
kt(Qu, "onAnimationEnd");
kt(Yu, "onAnimationIteration");
kt(Ku, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(Xu, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Rn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  vp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function Ki(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), xf(r, t, void 0, e), (e.currentTarget = null));
}
function Zu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            o = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), o !== a && l.isPropagationStopped())) break e;
          (Ki(l, u, c), (a = o));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (o = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            o !== a && l.isPropagationStopped())
          )
            break e;
          (Ki(l, u, c), (a = o));
        }
    }
  }
  if (rl) throw ((e = Os), (rl = !1), (Os = null), e);
}
function D(e, t) {
  var n = t[Ks];
  n === void 0 && (n = t[Ks] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ju(t, e, 2, !1), n.add(r));
}
function us(e, t, n) {
  var r = 0;
  (t && (r |= 4), Ju(n, e, r, t));
}
var Lr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Lr]) {
    ((e[Lr] = !0),
      su.forEach(function (n) {
        n !== "selectionchange" && (vp.has(n) || us(n, !1, e), us(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Lr] || ((t[Lr] = !0), us("selectionchange", !1, t));
  }
}
function Ju(e, t, n, r) {
  switch (Iu(t)) {
    case 1:
      var l = Tf;
      break;
    case 4:
      l = Lf;
      break;
    default:
      l = La;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ms ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function cs(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var o = i.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = i.stateNode.containerInfo),
              o === l || (o.nodeType === 8 && o.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = At(u)), i === null)) return;
          if (((o = i.tag), o === 5 || o === 6)) {
            r = a = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ju(function () {
    var c = a,
      x = Pa(n),
      f = [];
    e: {
      var p = Gu.get(e);
      if (p !== void 0) {
        var y = Ia,
          w = e;
        switch (e) {
          case "keypress":
            if (Yr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Kf;
            break;
          case "focusin":
            ((w = "focus"), (y = rs));
            break;
          case "focusout":
            ((w = "blur"), (y = rs));
            break;
          case "beforeblur":
          case "afterblur":
            y = rs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ri;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Rf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Zf;
            break;
          case Qu:
          case Yu:
          case Ku:
            y = Df;
            break;
          case Xu:
            y = qf;
            break;
          case "scroll":
            y = Ff;
            break;
          case "wheel":
            y = tp;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = $f;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Oi;
        }
        var g = (t & 4) !== 0,
          C = !g && e === "scroll",
          h = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var j = m.stateNode;
          if (
            (m.tag === 5 &&
              j !== null &&
              ((m = j),
              h !== null && ((j = Kn(d, h)), j != null && g.push(tr(d, j, m)))),
            C)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((p = new y(p, w, null, n, x)), f.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Is &&
            (w = n.relatedTarget || n.fromElement) &&
            (At(w) || w[qe]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            x.window === x
              ? x
              : (p = x.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = c),
              (w = w ? At(w) : null),
              w !== null &&
                ((C = Vt(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = c)),
          y !== w)
        ) {
          if (
            ((g = Ri),
            (j = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Oi),
              (j = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (C = y == null ? p : Gt(y)),
            (m = w == null ? p : Gt(w)),
            (p = new g(j, d + "leave", y, n, x)),
            (p.target = C),
            (p.relatedTarget = m),
            (j = null),
            At(x) === c &&
              ((g = new g(h, d + "enter", w, n, x)),
              (g.target = m),
              (g.relatedTarget = C),
              (j = g)),
            (C = j),
            y && w)
          )
            t: {
              for (g = y, h = w, d = 0, m = g; m; m = Wt(m)) d++;
              for (m = 0, j = h; j; j = Wt(j)) m++;
              for (; 0 < d - m; ) ((g = Wt(g)), d--);
              for (; 0 < m - d; ) ((h = Wt(h)), m--);
              for (; d--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                ((g = Wt(g)), (h = Wt(h)));
              }
              g = null;
            }
          else g = null;
          (y !== null && Xi(f, p, y, g, !1),
            w !== null && C !== null && Xi(f, C, w, g, !0));
        }
      }
      e: {
        if (
          ((p = c ? Gt(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var S = op;
        else if ($i(p))
          if ($u) S = fp;
          else {
            S = cp;
            var b = up;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = dp);
        if (S && (S = S(e, c))) {
          Uu(f, S, n, x);
          break e;
        }
        (b && b(e, p, c),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            zs(p, "number", p.value));
      }
      switch (((b = c ? Gt(c) : window), e)) {
        case "focusin":
          ($i(b) || b.contentEditable === "true") &&
            ((Kt = b), (Bs = c), ($n = null));
          break;
        case "focusout":
          $n = Bs = Kt = null;
          break;
        case "mousedown":
          Vs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Vs = !1), Qi(f, n, x));
          break;
        case "selectionchange":
          if (mp) break;
        case "keydown":
        case "keyup":
          Qi(f, n, x);
      }
      var P;
      if (Ma)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Yt
          ? Ou(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      (A &&
        (Mu &&
          n.locale !== "ko" &&
          (Yt || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Yt && (P = Ru())
            : ((ot = x),
              (Fa = "value" in ot ? ot.value : ot.textContent),
              (Yt = !0))),
        (b = ol(c, A)),
        0 < b.length &&
          ((A = new Mi(A, e, null, n, x)),
          f.push({ event: A, listeners: b }),
          P ? (A.data = P) : ((P = Du(n)), P !== null && (A.data = P)))),
        (P = rp ? lp(e, n) : sp(e, n)) &&
          ((c = ol(c, "onBeforeInput")),
          0 < c.length &&
            ((x = new Mi("onBeforeInput", "beforeinput", null, n, x)),
            f.push({ event: x, listeners: c }),
            (x.data = P))));
    }
    Zu(f, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    (l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = Kn(e, n)),
      a != null && r.unshift(tr(e, a, l)),
      (a = Kn(e, t)),
      a != null && r.push(tr(e, a, l))),
      (e = e.return));
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xi(e, t, n, r, l) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      o = u.alternate,
      c = u.stateNode;
    if (o !== null && o === r) break;
    (u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((o = Kn(n, a)), o != null && i.unshift(tr(n, o, u)))
        : l || ((o = Kn(n, a)), o != null && i.push(tr(n, o, u)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var yp = /\r\n?/g,
  wp = /\u0000|\uFFFD/g;
function Gi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      yp,
      `
`,
    )
    .replace(wp, "");
}
function Fr(e, t, n) {
  if (((t = Gi(t)), Gi(e) !== t && n)) throw Error(N(425));
}
function ul() {}
var Ws = null,
  Hs = null;
function Qs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ys = typeof setTimeout == "function" ? setTimeout : void 0,
  jp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zi = typeof Promise == "function" ? Promise : void 0,
  kp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zi < "u"
        ? function (e) {
            return Zi.resolve(null).then(e).catch(Np);
          }
        : Ys;
function Np(e) {
  setTimeout(function () {
    throw e;
  });
}
function ds(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Zn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Zn(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ji(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + wn,
  nr = "__reactProps$" + wn,
  qe = "__reactContainer$" + wn,
  Ks = "__reactEvents$" + wn,
  bp = "__reactListeners$" + wn,
  Cp = "__reactHandles$" + wn;
function At(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ji(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = Ji(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function xr(e) {
  return (
    (e = e[Ve] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Ll(e) {
  return e[nr] || null;
}
var Xs = [],
  Zt = -1;
function Nt(e) {
  return { current: e };
}
function U(e) {
  0 > Zt || ((e.current = Xs[Zt]), (Xs[Zt] = null), Zt--);
}
function O(e, t) {
  (Zt++, (Xs[Zt] = e.current), (e.current = t));
}
var jt = {},
  oe = Nt(jt),
  me = Nt(!1),
  Mt = jt;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    a;
  for (a in n) l[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function cl() {
  (U(me), U(oe));
}
function qi(e, t, n) {
  if (oe.current !== jt) throw Error(N(168));
  (O(oe, t), O(me, n));
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, uf(e) || "Unknown", l));
  return H({}, n, r);
}
function dl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (Mt = oe.current),
    O(oe, e),
    O(me, me.current),
    !0
  );
}
function eo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  (n
    ? ((e = qu(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(me),
      U(oe),
      O(oe, e))
    : U(me),
    O(me, n));
}
var Ke = null,
  Fl = !1,
  fs = !1;
function ec(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
function Sp(e) {
  ((Fl = !0), ec(e));
}
function bt() {
  if (!fs && Ke !== null) {
    fs = !0;
    var e = 0,
      t = M;
    try {
      var n = Ke;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ke = null), (Fl = !1));
    } catch (l) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), Cu(za, bt), l);
    } finally {
      ((M = t), (fs = !1));
    }
  }
  return null;
}
var Jt = [],
  qt = 0,
  fl = null,
  pl = 0,
  Ce = [],
  Se = 0,
  Ot = null,
  Xe = 1,
  Ge = "";
function Pt(e, t) {
  ((Jt[qt++] = pl), (Jt[qt++] = fl), (fl = e), (pl = t));
}
function tc(e, t, n) {
  ((Ce[Se++] = Xe), (Ce[Se++] = Ge), (Ce[Se++] = Ot), (Ot = e));
  var r = Xe;
  e = Ge;
  var l = 32 - Me(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var a = 32 - Me(t) + l;
  if (30 < a) {
    var i = l - (l % 5);
    ((a = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Xe = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (Ge = a + e));
  } else ((Xe = (1 << a) | (n << l) | r), (Ge = e));
}
function Da(e) {
  e.return !== null && (Pt(e, 1), tc(e, 1, 0));
}
function Ua(e) {
  for (; e === fl; )
    ((fl = Jt[--qt]), (Jt[qt] = null), (pl = Jt[--qt]), (Jt[qt] = null));
  for (; e === Ot; )
    ((Ot = Ce[--Se]),
      (Ce[Se] = null),
      (Ge = Ce[--Se]),
      (Ce[Se] = null),
      (Xe = Ce[--Se]),
      (Ce[Se] = null));
}
var je = null,
  we = null,
  $ = !1,
  Re = null;
function nc(e, t) {
  var n = _e(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function to(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (we = mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ot !== null ? { id: Xe, overflow: Ge } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zs(e) {
  if ($) {
    var t = we;
    if (t) {
      var n = t;
      if (!to(e, t)) {
        if (Gs(e)) throw Error(N(418));
        t = mt(n.nextSibling);
        var r = je;
        t && to(e, t)
          ? nc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (je = e));
      }
    } else {
      if (Gs(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), ($ = !1), (je = e));
    }
  }
}
function no(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Ir(e) {
  if (e !== je) return !1;
  if (!$) return (no(e), ($ = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qs(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Gs(e)) throw (rc(), Error(N(418)));
    for (; t; ) (nc(e, t), (t = mt(t.nextSibling)));
  }
  if ((no(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = je ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function rc() {
  for (var e = we; e; ) e = mt(e.nextSibling);
}
function pn() {
  ((we = je = null), ($ = !1));
}
function $a(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var _p = nt.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[a] : (u[a] = i);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Rr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ro(e) {
  var t = e._init;
  return t(e._payload);
}
function lc(e) {
  function t(h, d) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [d]), (h.flags |= 16)) : m.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) (t(h, d), (d = d.sibling));
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      (d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling));
    return h;
  }
  function l(h, d) {
    return ((h = yt(h, d)), (h.index = 0), (h.sibling = null), h);
  }
  function a(h, d, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((h.flags |= 2), d) : m)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function i(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function u(h, d, m, j) {
    return d === null || d.tag !== 6
      ? ((d = ys(m, h.mode, j)), (d.return = h), d)
      : ((d = l(d, m)), (d.return = h), d);
  }
  function o(h, d, m, j) {
    var S = m.type;
    return S === Qt
      ? x(h, d, m.props.children, j, m.key)
      : d !== null &&
          (d.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === lt &&
              ro(S) === d.type))
        ? ((j = l(d, m.props)), (j.ref = zn(h, d, m)), (j.return = h), j)
        : ((j = el(m.type, m.key, m.props, null, h.mode, j)),
          (j.ref = zn(h, d, m)),
          (j.return = h),
          j);
  }
  function c(h, d, m, j) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = ws(m, h.mode, j)), (d.return = h), d)
      : ((d = l(d, m.children || [])), (d.return = h), d);
  }
  function x(h, d, m, j, S) {
    return d === null || d.tag !== 7
      ? ((d = It(m, h.mode, j, S)), (d.return = h), d)
      : ((d = l(d, m)), (d.return = h), d);
  }
  function f(h, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = ys("" + d, h.mode, m)), (d.return = h), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Cr:
          return (
            (m = el(d.type, d.key, d.props, null, h.mode, m)),
            (m.ref = zn(h, null, d)),
            (m.return = h),
            m
          );
        case Ht:
          return ((d = ws(d, h.mode, m)), (d.return = h), d);
        case lt:
          var j = d._init;
          return f(h, j(d._payload), m);
      }
      if (Fn(d) || Cn(d))
        return ((d = It(d, h.mode, m, null)), (d.return = h), d);
      Rr(h, d);
    }
    return null;
  }
  function p(h, d, m, j) {
    var S = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : u(h, d, "" + m, j);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Cr:
          return m.key === S ? o(h, d, m, j) : null;
        case Ht:
          return m.key === S ? c(h, d, m, j) : null;
        case lt:
          return ((S = m._init), p(h, d, S(m._payload), j));
      }
      if (Fn(m) || Cn(m)) return S !== null ? null : x(h, d, m, j, null);
      Rr(h, m);
    }
    return null;
  }
  function y(h, d, m, j, S) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return ((h = h.get(m) || null), u(d, h, "" + j, S));
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Cr:
          return (
            (h = h.get(j.key === null ? m : j.key) || null),
            o(d, h, j, S)
          );
        case Ht:
          return (
            (h = h.get(j.key === null ? m : j.key) || null),
            c(d, h, j, S)
          );
        case lt:
          var b = j._init;
          return y(h, d, m, b(j._payload), S);
      }
      if (Fn(j) || Cn(j)) return ((h = h.get(m) || null), x(d, h, j, S, null));
      Rr(d, j);
    }
    return null;
  }
  function w(h, d, m, j) {
    for (
      var S = null, b = null, P = d, A = (d = 0), B = null;
      P !== null && A < m.length;
      A++
    ) {
      P.index > A ? ((B = P), (P = null)) : (B = P.sibling);
      var v = p(h, P, m[A], j);
      if (v === null) {
        P === null && (P = B);
        break;
      }
      (e && P && v.alternate === null && t(h, P),
        (d = a(v, d, A)),
        b === null ? (S = v) : (b.sibling = v),
        (b = v),
        (P = B));
    }
    if (A === m.length) return (n(h, P), $ && Pt(h, A), S);
    if (P === null) {
      for (; A < m.length; A++)
        ((P = f(h, m[A], j)),
          P !== null &&
            ((d = a(P, d, A)),
            b === null ? (S = P) : (b.sibling = P),
            (b = P)));
      return ($ && Pt(h, A), S);
    }
    for (P = r(h, P); A < m.length; A++)
      ((B = y(P, h, A, m[A], j)),
        B !== null &&
          (e && B.alternate !== null && P.delete(B.key === null ? A : B.key),
          (d = a(B, d, A)),
          b === null ? (S = B) : (b.sibling = B),
          (b = B)));
    return (
      e &&
        P.forEach(function (z) {
          return t(h, z);
        }),
      $ && Pt(h, A),
      S
    );
  }
  function g(h, d, m, j) {
    var S = Cn(m);
    if (typeof S != "function") throw Error(N(150));
    if (((m = S.call(m)), m == null)) throw Error(N(151));
    for (
      var b = (S = null), P = d, A = (d = 0), B = null, v = m.next();
      P !== null && !v.done;
      A++, v = m.next()
    ) {
      P.index > A ? ((B = P), (P = null)) : (B = P.sibling);
      var z = p(h, P, v.value, j);
      if (z === null) {
        P === null && (P = B);
        break;
      }
      (e && P && z.alternate === null && t(h, P),
        (d = a(z, d, A)),
        b === null ? (S = z) : (b.sibling = z),
        (b = z),
        (P = B));
    }
    if (v.done) return (n(h, P), $ && Pt(h, A), S);
    if (P === null) {
      for (; !v.done; A++, v = m.next())
        ((v = f(h, v.value, j)),
          v !== null &&
            ((d = a(v, d, A)),
            b === null ? (S = v) : (b.sibling = v),
            (b = v)));
      return ($ && Pt(h, A), S);
    }
    for (P = r(h, P); !v.done; A++, v = m.next())
      ((v = y(P, h, A, v.value, j)),
        v !== null &&
          (e && v.alternate !== null && P.delete(v.key === null ? A : v.key),
          (d = a(v, d, A)),
          b === null ? (S = v) : (b.sibling = v),
          (b = v)));
    return (
      e &&
        P.forEach(function (ve) {
          return t(h, ve);
        }),
      $ && Pt(h, A),
      S
    );
  }
  function C(h, d, m, j) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Qt &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Cr:
          e: {
            for (var S = m.key, b = d; b !== null; ) {
              if (b.key === S) {
                if (((S = m.type), S === Qt)) {
                  if (b.tag === 7) {
                    (n(h, b.sibling),
                      (d = l(b, m.props.children)),
                      (d.return = h),
                      (h = d));
                    break e;
                  }
                } else if (
                  b.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === lt &&
                    ro(S) === b.type)
                ) {
                  (n(h, b.sibling),
                    (d = l(b, m.props)),
                    (d.ref = zn(h, b, m)),
                    (d.return = h),
                    (h = d));
                  break e;
                }
                n(h, b);
                break;
              } else t(h, b);
              b = b.sibling;
            }
            m.type === Qt
              ? ((d = It(m.props.children, h.mode, j, m.key)),
                (d.return = h),
                (h = d))
              : ((j = el(m.type, m.key, m.props, null, h.mode, j)),
                (j.ref = zn(h, d, m)),
                (j.return = h),
                (h = j));
          }
          return i(h);
        case Ht:
          e: {
            for (b = m.key; d !== null; ) {
              if (d.key === b)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  (n(h, d.sibling),
                    (d = l(d, m.children || [])),
                    (d.return = h),
                    (h = d));
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            ((d = ws(m, h.mode, j)), (d.return = h), (h = d));
          }
          return i(h);
        case lt:
          return ((b = m._init), C(h, d, b(m._payload), j));
      }
      if (Fn(m)) return w(h, d, m, j);
      if (Cn(m)) return g(h, d, m, j);
      Rr(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = l(d, m)), (d.return = h), (h = d))
          : (n(h, d), (d = ys(m, h.mode, j)), (d.return = h), (h = d)),
        i(h))
      : n(h, d);
  }
  return C;
}
var hn = lc(!0),
  sc = lc(!1),
  hl = Nt(null),
  ml = null,
  en = null,
  Ba = null;
function Va() {
  Ba = en = ml = null;
}
function Wa(e) {
  var t = hl.current;
  (U(hl), (e._currentValue = t));
}
function Js(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function on(e, t) {
  ((ml = e),
    (Ba = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null)));
}
function Pe(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (ml === null) throw Error(N(308));
      ((en = e), (ml.dependencies = { lanes: 0, firstContext: e }));
    } else en = en.next = e;
  return t;
}
var Tt = null;
function Ha(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function ac(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ha(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    et(e, r)
  );
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function Qa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ic(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ha(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function Kr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Aa(e, n));
  }
}
function lo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (a === null ? (l = a = i) : (a = a.next = i), (n = n.next));
      } while (n !== null);
      a === null ? (l = a = t) : (a = a.next = t);
    } else l = a = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function xl(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var a = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var o = u,
      c = o.next;
    ((o.next = null), i === null ? (a = c) : (i.next = c), (i = o));
    var x = e.alternate;
    x !== null &&
      ((x = x.updateQueue),
      (u = x.lastBaseUpdate),
      u !== i &&
        (u === null ? (x.firstBaseUpdate = c) : (u.next = c),
        (x.lastBaseUpdate = o)));
  }
  if (a !== null) {
    var f = l.baseState;
    ((i = 0), (x = c = o = null), (u = a));
    do {
      var p = u.lane,
        y = u.eventTime;
      if ((r & p) === p) {
        x !== null &&
          (x = x.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            g = u;
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                f = w.call(y, f, p);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (p = typeof w == "function" ? w.call(y, f, p) : w),
                p == null)
              )
                break e;
              f = H({}, f, p);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        ((y = {
          eventTime: y,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          x === null ? ((c = x = y), (o = f)) : (x = x.next = y),
          (i |= p));
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        ((p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (x === null && (o = f),
      (l.baseState = o),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = x),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    ((Ut |= i), (e.lanes = i), (e.memoizedState = f));
  }
}
function so(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var gr = {},
  He = Nt(gr),
  rr = Nt(gr),
  lr = Nt(gr);
function Lt(e) {
  if (e === gr) throw Error(N(174));
  return e;
}
function Ya(e, t) {
  switch ((O(lr, t), O(rr, e), O(He, gr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ts(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ts(t, e)));
  }
  (U(He), O(He, t));
}
function mn() {
  (U(He), U(rr), U(lr));
}
function oc(e) {
  Lt(lr.current);
  var t = Lt(He.current),
    n = Ts(t, e.type);
  t !== n && (O(rr, e), O(He, n));
}
function Ka(e) {
  rr.current === e && (U(He), U(rr));
}
var V = Nt(0);
function gl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ps = [];
function Xa() {
  for (var e = 0; e < ps.length; e++)
    ps[e]._workInProgressVersionPrimary = null;
  ps.length = 0;
}
var Xr = nt.ReactCurrentDispatcher,
  hs = nt.ReactCurrentBatchConfig,
  Dt = 0,
  W = null,
  Z = null,
  ee = null,
  vl = !1,
  Bn = !1,
  sr = 0,
  Ep = 0;
function se() {
  throw Error(N(321));
}
function Ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Za(e, t, n, r, l, a) {
  if (
    ((Dt = a),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xr.current = e === null || e.memoizedState === null ? Tp : Lp),
    (e = n(r, l)),
    Bn)
  ) {
    a = 0;
    do {
      if (((Bn = !1), (sr = 0), 25 <= a)) throw Error(N(301));
      ((a += 1),
        (ee = Z = null),
        (t.updateQueue = null),
        (Xr.current = Fp),
        (e = n(r, l)));
    } while (Bn);
  }
  if (
    ((Xr.current = yl),
    (t = Z !== null && Z.next !== null),
    (Dt = 0),
    (ee = Z = W = null),
    (vl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Ja() {
  var e = sr !== 0;
  return ((sr = 0), e);
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ee === null ? (W.memoizedState = ee = e) : (ee = ee.next = e), ee);
}
function ze() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = ee === null ? W.memoizedState : ee.next;
  if (t !== null) ((ee = t), (Z = e));
  else {
    if (e === null) throw Error(N(310));
    ((Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ee === null ? (W.memoizedState = ee = e) : (ee = ee.next = e));
  }
  return ee;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ms(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      ((l.next = a.next), (a.next = i));
    }
    ((r.baseQueue = l = a), (n.pending = null));
  }
  if (l !== null) {
    ((a = l.next), (r = r.baseState));
    var u = (i = null),
      o = null,
      c = a;
    do {
      var x = c.lane;
      if ((Dt & x) === x)
        (o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: x,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (o === null ? ((u = o = f), (i = r)) : (o = o.next = f),
          (W.lanes |= x),
          (Ut |= x));
      }
      c = c.next;
    } while (c !== null && c !== a);
    (o === null ? (i = r) : (o.next = u),
      De(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = o),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((a = l.lane), (W.lanes |= a), (Ut |= a), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xs(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((a = e(a, i.action)), (i = i.next));
    while (i !== l);
    (De(a, t.memoizedState) || (he = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a));
  }
  return [a, r];
}
function uc() {}
function cc(e, t) {
  var n = W,
    r = ze(),
    l = t(),
    a = !De(r.memoizedState, l);
  if (
    (a && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    qa(pc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ir(9, fc.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(N(349));
    Dt & 30 || dc(n, t, l);
  }
  return l;
}
function dc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function fc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), hc(t) && mc(e));
}
function pc(e, t, n) {
  return n(function () {
    hc(t) && mc(e);
  });
}
function hc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function mc(e) {
  var t = et(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function ao(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ap.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function ir(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xc() {
  return ze().memoizedState;
}
function Gr(e, t, n, r) {
  var l = Be();
  ((W.flags |= e),
    (l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Il(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((a = i.destroy), r !== null && Ga(r, i.deps))) {
      l.memoizedState = ir(t, n, a, r);
      return;
    }
  }
  ((W.flags |= e), (l.memoizedState = ir(1 | t, n, a, r)));
}
function io(e, t) {
  return Gr(8390656, 8, e, t);
}
function qa(e, t) {
  return Il(2048, 8, e, t);
}
function gc(e, t) {
  return Il(4, 2, e, t);
}
function vc(e, t) {
  return Il(4, 4, e, t);
}
function yc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Il(4, 4, yc.bind(null, t, e), n)
  );
}
function ei() {}
function jc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function kc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nc(e, t, n) {
  return Dt & 21
    ? (De(n, t) || ((n = Eu()), (W.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function Pp(e, t) {
  var n = M;
  ((M = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = hs.transition;
  hs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((M = n), (hs.transition = r));
  }
}
function bc() {
  return ze().memoizedState;
}
function zp(e, t, n) {
  var r = vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cc(e))
  )
    Sc(t, n);
  else if (((n = ac(e, t, n, r)), n !== null)) {
    var l = ce();
    (Oe(n, e, r, l), _c(n, t, r));
  }
}
function Ap(e, t, n) {
  var r = vt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cc(e)) Sc(t, l);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = a(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var o = t.interleaved;
          (o === null
            ? ((l.next = l), Ha(t))
            : ((l.next = o.next), (o.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ac(e, t, l, r)),
      n !== null && ((l = ce()), Oe(n, e, r, l), _c(n, t, r)));
  }
}
function Cc(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Sc(e, t) {
  Bn = vl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function _c(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Aa(e, n));
  }
}
var yl = {
    readContext: Pe,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  Tp = {
    readContext: Pe,
    useCallback: function (e, t) {
      return ((Be().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Pe,
    useEffect: io,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gr(4194308, 4, yc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zp.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ao,
    useDebugValue: ei,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = ao(!1),
        t = e[0];
      return ((e = Pp.bind(null, e[1])), (Be().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Be();
      if ($) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(N(349));
        Dt & 30 || dc(r, t, n);
      }
      l.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (l.queue = a),
        io(pc.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        ir(9, fc.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = te.identifierPrefix;
      if ($) {
        var n = Ge,
          r = Xe;
        ((n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Ep++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lp = {
    readContext: Pe,
    useCallback: jc,
    useContext: Pe,
    useEffect: qa,
    useImperativeHandle: wc,
    useInsertionEffect: gc,
    useLayoutEffect: vc,
    useMemo: kc,
    useReducer: ms,
    useRef: xc,
    useState: function () {
      return ms(ar);
    },
    useDebugValue: ei,
    useDeferredValue: function (e) {
      var t = ze();
      return Nc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ms(ar)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: cc,
    useId: bc,
    unstable_isNewReconciler: !1,
  },
  Fp = {
    readContext: Pe,
    useCallback: jc,
    useContext: Pe,
    useEffect: qa,
    useImperativeHandle: wc,
    useInsertionEffect: gc,
    useLayoutEffect: vc,
    useMemo: kc,
    useReducer: xs,
    useRef: xc,
    useState: function () {
      return xs(ar);
    },
    useDebugValue: ei,
    useDeferredValue: function (e) {
      var t = ze();
      return Z === null ? (t.memoizedState = e) : Nc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = xs(ar)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: cc,
    useId: bc,
    unstable_isNewReconciler: !1,
  };
function Fe(e, t) {
  if (e && e.defaultProps) {
    ((t = H({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qs(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = vt(e),
      a = Ze(r, l);
    ((a.payload = t),
      n != null && (a.callback = n),
      (t = xt(e, a, l)),
      t !== null && (Oe(t, e, l, r), Kr(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = vt(e),
      a = Ze(r, l);
    ((a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = xt(e, a, l)),
      t !== null && (Oe(t, e, l, r), Kr(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = vt(e),
      l = Ze(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = xt(e, l, r)),
      t !== null && (Oe(t, e, r, n), Kr(t, e, r)));
  },
};
function oo(e, t, n, r, l, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !qn(n, r) || !qn(l, a)
        : !0
  );
}
function Ec(e, t, n) {
  var r = !1,
    l = jt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Pe(a))
      : ((l = xe(t) ? Mt : oe.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? fn(e, l) : jt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function uo(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null));
}
function ea(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Qa(e));
  var a = t.contextType;
  (typeof a == "object" && a !== null
    ? (l.context = Pe(a))
    : ((a = xe(t) ? Mt : oe.current), (l.context = fn(e, a))),
    (l.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (qs(e, t, a, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
      xl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function xn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += of(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (a) {
    l =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function gs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ta(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ip = typeof WeakMap == "function" ? WeakMap : Map;
function Pc(e, t, n) {
  ((n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (jl || ((jl = !0), (da = r)), ta(e, t));
    }),
    n
  );
}
function zc(e, t, n) {
  ((n = Ze(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ta(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        (ta(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function co(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ip();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Xp.bind(null, e, t, n)), t.then(e, e));
}
function fo(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function po(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rp = nt.ReactCurrentOwner,
  he = !1;
function ue(e, t, n, r) {
  t.child = e === null ? sc(t, null, n, r) : hn(t, e.child, n, r);
}
function ho(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return (
    on(t, l),
    (r = Za(e, t, n, r, a, l)),
    (n = Ja()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : ($ && n && Da(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function mo(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !oi(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Ac(e, t, a, r, l))
      : ((e = el(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & l))) {
    var i = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qn), n(i, r) && e.ref === t.ref)
    )
      return tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = yt(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ac(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (qn(a, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return ((t.lanes = e.lanes), tt(e, t, l));
  }
  return na(e, t, n, r, l);
}
function Tc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(nn, ye),
        (ye |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(nn, ye),
          (ye |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        O(nn, ye),
        (ye |= r));
    }
  else
    (a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(nn, ye),
      (ye |= r));
  return (ue(e, t, l, n), t.child);
}
function Lc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function na(e, t, n, r, l) {
  var a = xe(n) ? Mt : oe.current;
  return (
    (a = fn(t, a)),
    on(t, l),
    (n = Za(e, t, n, r, a, l)),
    (r = Ja()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : ($ && r && Da(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function xo(e, t, n, r, l) {
  if (xe(n)) {
    var a = !0;
    dl(t);
  } else a = !1;
  if ((on(t, l), t.stateNode === null))
    (Zr(e, t), Ec(t, n, r), ea(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var o = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Pe(c))
      : ((c = xe(n) ? Mt : oe.current), (c = fn(t, c)));
    var x = n.getDerivedStateFromProps,
      f =
        typeof x == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || o !== c) && uo(t, i, r, c)),
      (st = !1));
    var p = t.memoizedState;
    ((i.state = p),
      xl(t, r, i, l),
      (o = t.memoizedState),
      u !== r || p !== o || me.current || st
        ? (typeof x == "function" && (qs(t, n, x, r), (o = t.memoizedState)),
          (u = st || oo(t, n, u, r, p, o, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (i.props = r),
          (i.state = o),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      ic(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Fe(t.type, u)),
      (i.props = c),
      (f = t.pendingProps),
      (p = i.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = Pe(o))
        : ((o = xe(n) ? Mt : oe.current), (o = fn(t, o))));
    var y = n.getDerivedStateFromProps;
    ((x =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== f || p !== o) && uo(t, i, r, o)),
      (st = !1),
      (p = t.memoizedState),
      (i.state = p),
      xl(t, r, i, l));
    var w = t.memoizedState;
    u !== f || p !== w || me.current || st
      ? (typeof y == "function" && (qs(t, n, y, r), (w = t.memoizedState)),
        (c = st || oo(t, n, c, r, p, w, o) || !1)
          ? (x ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, o),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, o)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = o),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ra(e, t, n, r, a, l);
}
function ra(e, t, n, r, l, a) {
  Lc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && eo(t, n, !1), tt(e, t, a));
  ((r = t.stateNode), (Rp.current = t));
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = hn(t, e.child, null, a)), (t.child = hn(t, null, u, a)))
      : ue(e, t, u, a),
    (t.memoizedState = r.state),
    l && eo(t, n, !0),
    t.child
  );
}
function Fc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? qi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qi(e, t.context, !1),
    Ya(e, t.containerInfo));
}
function go(e, t, n, r, l) {
  return (pn(), $a(l), (t.flags |= 256), ue(e, t, n, r), t.child);
}
var la = { dehydrated: null, treeContext: null, retryLane: 0 };
function sa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ic(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(V, l & 1),
    e === null)
  )
    return (
      Zs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = Dl(i, r, 0, null)),
              (e = It(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = sa(n)),
              (t.memoizedState = la),
              e)
            : ti(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Mp(e, t, i, r, u, l, n);
  if (a) {
    ((a = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
    var o = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = yt(l, o)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (a = yt(u, a)) : ((a = It(a, i, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? sa(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = la),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = yt(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ti(e, t) {
  return (
    (t = Dl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mr(e, t, n, r) {
  return (
    r !== null && $a(r),
    hn(t, e.child, null, n),
    (e = ti(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Mp(e, t, n, r, l, a, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gs(Error(N(422)))), Mr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = r.fallback),
          (l = t.mode),
          (r = Dl({ mode: "visible", children: r.children }, l, 0, null)),
          (a = It(a, l, i, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          t.mode & 1 && hn(t, e.child, null, i),
          (t.child.memoizedState = sa(i)),
          (t.memoizedState = la),
          a);
  if (!(t.mode & 1)) return Mr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (
      (r = u),
      (a = Error(N(419))),
      (r = gs(a, r, void 0)),
      Mr(e, t, i, r)
    );
  }
  if (((u = (i & e.childLanes) !== 0), he || u)) {
    if (((r = te), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== a.retryLane &&
          ((a.retryLane = l), et(e, l), Oe(r, e, l, -1)));
    }
    return (ii(), (r = gs(Error(N(421)))), Mr(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (we = mt(l.nextSibling)),
      (je = t),
      ($ = !0),
      (Re = null),
      e !== null &&
        ((Ce[Se++] = Xe),
        (Ce[Se++] = Ge),
        (Ce[Se++] = Ot),
        (Xe = e.id),
        (Ge = e.overflow),
        (Ot = t)),
      (t = ti(t, r.children)),
      (t.flags |= 4096),
      t);
}
function vo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Js(e.return, t, n));
}
function vs(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = l));
}
function Rc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    a = r.tail;
  if ((ue(e, t, r.children, n), (r = V.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vo(e, n, t);
        else if (e.tag === 19) vo(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((O(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && gl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          vs(t, !1, l, n, a));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && gl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        vs(t, !0, n, null, a);
        break;
      case "together":
        vs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = yt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Op(e, t, n) {
  switch (t.tag) {
    case 3:
      (Fc(t), pn());
      break;
    case 5:
      oc(t);
      break;
    case 1:
      xe(t.type) && dl(t);
      break;
    case 4:
      Ya(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (O(hl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ic(e, t, n)
            : (O(V, V.current & 1),
              (e = tt(e, t, n)),
              e !== null ? e.sibling : null);
      O(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Tc(e, t, n));
  }
  return tt(e, t, n);
}
var Mc, aa, Oc, Dc;
Mc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
aa = function () {};
Oc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Lt(He.current));
    var a = null;
    switch (n) {
      case "input":
        ((l = Es(e, l)), (r = Es(e, r)), (a = []));
        break;
      case "select":
        ((l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((l = As(e, l)), (r = As(e, r)), (a = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ul);
    }
    Ls(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Qn.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in r) {
      var o = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && o !== u && (o != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (o && o.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in o)
              o.hasOwnProperty(i) &&
                u[i] !== o[i] &&
                (n || (n = {}), (n[i] = o[i]));
          } else (n || (a || (a = []), a.push(c, n)), (n = o));
        else
          c === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (u = u ? u.__html : void 0),
              o != null && u !== o && (a = a || []).push(c, o))
            : c === "children"
              ? (typeof o != "string" && typeof o != "number") ||
                (a = a || []).push(c, "" + o)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Qn.hasOwnProperty(c)
                  ? (o != null && c === "onScroll" && D("scroll", e),
                    a || u === o || (a = []))
                  : (a = a || []).push(c, o));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Dc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Dp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ua(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ae(t), null);
    case 1:
      return (xe(t.type) && cl(), ae(t), null);
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        U(me),
        U(oe),
        Xa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ir(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (ha(Re), (Re = null)))),
        aa(e, t),
        ae(t),
        null
      );
    case 5:
      Ka(t);
      var l = Lt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Oc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return (ae(t), null);
        }
        if (((e = Lt(He.current)), Ir(t))) {
          ((r = t.stateNode), (n = t.type));
          var a = t.memoizedProps;
          switch (((r[Ve] = t), (r[nr] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (D("cancel", r), D("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Rn.length; l++) D(Rn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (D("error", r), D("load", r));
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              (Si(r, a), D("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!a.multiple }),
                D("invalid", r));
              break;
            case "textarea":
              (Ei(r, a), D("invalid", r));
          }
          (Ls(n, a), (l = null));
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var u = a[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (a.suppressHydrationWarning !== !0 &&
                      Fr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (a.suppressHydrationWarning !== !0 &&
                      Fr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Qn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              (Sr(r), _i(r, a, !0));
              break;
            case "textarea":
              (Sr(r), Pi(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ul);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = pu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ve] = t),
            (e[nr] = r),
            Mc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Fs(n, r)), n)) {
              case "dialog":
                (D("cancel", e), D("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (D("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Rn.length; l++) D(Rn[l], e);
                l = r;
                break;
              case "source":
                (D("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (D("error", e), D("load", e), (l = r));
                break;
              case "details":
                (D("toggle", e), (l = r));
                break;
              case "input":
                (Si(e, r), (l = Es(e, r)), D("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  D("invalid", e));
                break;
              case "textarea":
                (Ei(e, r), (l = As(e, r)), D("invalid", e));
                break;
              default:
                l = r;
            }
            (Ls(n, l), (u = l));
            for (a in u)
              if (u.hasOwnProperty(a)) {
                var o = u[a];
                a === "style"
                  ? xu(e, o)
                  : a === "dangerouslySetInnerHTML"
                    ? ((o = o ? o.__html : void 0), o != null && hu(e, o))
                    : a === "children"
                      ? typeof o == "string"
                        ? (n !== "textarea" || o !== "") && Yn(e, o)
                        : typeof o == "number" && Yn(e, "" + o)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (Qn.hasOwnProperty(a)
                          ? o != null && a === "onScroll" && D("scroll", e)
                          : o != null && Ca(e, a, o, i));
              }
            switch (n) {
              case "input":
                (Sr(e), _i(e, r, !1));
                break;
              case "textarea":
                (Sr(e), Pi(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? rn(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ul);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ae(t), null);
    case 6:
      if (e && t.stateNode != null) Dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Lt(lr.current)), Lt(He.current), Ir(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (a = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r));
      }
      return (ae(t), null);
    case 13:
      if (
        (U(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128))
          (rc(), pn(), (t.flags |= 98560), (a = !1));
        else if (((a = Ir(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(N(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(N(317));
            a[Ve] = t;
          } else
            (pn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ae(t), (a = !1));
        } else (Re !== null && (ha(Re), (Re = null)), (a = !0));
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? J === 0 && (J = 3) : ii())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        mn(),
        aa(e, t),
        e === null && er(t.stateNode.containerInfo),
        ae(t),
        null
      );
    case 10:
      return (Wa(t.type._context), ae(t), null);
    case 17:
      return (xe(t.type) && cl(), ae(t), null);
    case 19:
      if ((U(V), (a = t.memoizedState), a === null)) return (ae(t), null);
      if (((r = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (r) An(a, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = gl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    An(a, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (i = a.alternate),
                    i === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (O(V, (V.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            K() > gn &&
            ((t.flags |= 128), (r = !0), An(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              An(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !$)
            )
              return (ae(t), null);
          } else
            2 * K() - a.renderingStartTime > gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), An(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = a.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (a.last = i));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = K()),
          (t.sibling = null),
          (n = V.current),
          O(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        ai(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Up(e, t) {
  switch ((Ua(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && cl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        U(me),
        U(oe),
        Xa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ka(t), null);
    case 13:
      if ((U(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        pn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (U(V), null);
    case 4:
      return (mn(), null);
    case 10:
      return (Wa(t.type._context), null);
    case 22:
    case 23:
      return (ai(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Or = !1,
  ie = !1,
  $p = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function ia(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var yo = !1;
function Bp(e, t) {
  if (((Ws = al), (e = Wu()), Oa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, a.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            o = -1,
            c = 0,
            x = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (l !== 0 && f.nodeType !== 3) || (u = i + l),
                f !== a || (r !== 0 && f.nodeType !== 3) || (o = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((p = f), (f = y));
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === a && ++x === r && (o = i),
                (y = f.nextSibling) !== null)
              )
                break;
              ((f = p), (p = f.parentNode));
            }
            f = y;
          }
          n = u === -1 || o === -1 ? null : { start: u, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hs = { focusedElem: e, selectionRange: n }, al = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (_ = e));
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    C = w.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Fe(t.type, g),
                      C,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (j) {
          Q(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (_ = e));
          break;
        }
        _ = t.return;
      }
  return ((w = yo), (yo = !1), w);
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        ((l.destroy = void 0), a !== void 0 && ia(t, n, a));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Uc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Uc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[nr], delete t[Ks], delete t[bp], delete t[Cp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function $c(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $c(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ul)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ua(e, t, n), e = e.sibling; e !== null; )
      (ua(e, t, n), (e = e.sibling));
}
function ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ca(e, t, n), e = e.sibling; e !== null; )
      (ca(e, t, n), (e = e.sibling));
}
var ne = null,
  Ie = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) (Bc(e, t, n), (n = n.sibling));
}
function Bc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function")
    try {
      We.onCommitFiberUnmount(Pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || tn(n, t);
    case 6:
      var r = ne,
        l = Ie;
      ((ne = null),
        rt(e, t, n),
        (ne = r),
        (Ie = l),
        ne !== null &&
          (Ie
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode)));
      break;
    case 18:
      ne !== null &&
        (Ie
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? ds(e.parentNode, n)
              : e.nodeType === 1 && ds(e, n),
            Zn(e))
          : ds(ne, n.stateNode));
      break;
    case 4:
      ((r = ne),
        (l = Ie),
        (ne = n.stateNode.containerInfo),
        (Ie = !0),
        rt(e, t, n),
        (ne = r),
        (Ie = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var a = l,
            i = a.destroy;
          ((a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && ia(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (u) {
          Q(n, t, u);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), rt(e, t, n), (ie = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function jo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new $p()),
      t.forEach(function (r) {
        var l = Zp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var a = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((ne = u.stateNode), (Ie = !1));
              break e;
            case 3:
              ((ne = u.stateNode.containerInfo), (Ie = !0));
              break e;
            case 4:
              ((ne = u.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(N(160));
        (Bc(a, i, l), (ne = null), (Ie = !1));
        var o = l.alternate;
        (o !== null && (o.return = null), (l.return = null));
      } catch (c) {
        Q(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Vc(t, e), (t = t.sibling));
}
function Vc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), $e(e), r & 4)) {
        try {
          (Vn(3, e, e.return), Ml(3, e));
        } catch (g) {
          Q(e, e.return, g);
        }
        try {
          Vn(5, e, e.return);
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 1:
      (Te(t, e), $e(e), r & 512 && n !== null && tn(n, n.return));
      break;
    case 5:
      if (
        (Te(t, e),
        $e(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          i = n !== null ? n.memoizedProps : a,
          u = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            (u === "input" && a.type === "radio" && a.name != null && du(l, a),
              Fs(u, i));
            var c = Fs(u, a);
            for (i = 0; i < o.length; i += 2) {
              var x = o[i],
                f = o[i + 1];
              x === "style"
                ? xu(l, f)
                : x === "dangerouslySetInnerHTML"
                  ? hu(l, f)
                  : x === "children"
                    ? Yn(l, f)
                    : Ca(l, x, f, c);
            }
            switch (u) {
              case "input":
                Ps(l, a);
                break;
              case "textarea":
                fu(l, a);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var y = a.value;
                y != null
                  ? rn(l, !!a.multiple, y, !1)
                  : p !== !!a.multiple &&
                    (a.defaultValue != null
                      ? rn(l, !!a.multiple, a.defaultValue, !0)
                      : rn(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[nr] = a;
          } catch (g) {
            Q(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Te(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((l = e.stateNode), (a = e.memoizedProps));
        try {
          l.nodeValue = a;
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zn(t.containerInfo);
        } catch (g) {
          Q(e, e.return, g);
        }
      break;
    case 4:
      (Te(t, e), $e(e));
      break;
    case 13:
      (Te(t, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (li = K())),
        r & 4 && jo(e));
      break;
    case 22:
      if (
        ((x = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || x), Te(t, e), (ie = c)) : Te(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !x && e.mode & 1)
        )
          for (_ = e, x = e.child; x !== null; ) {
            for (f = _ = x; _ !== null; ) {
              switch (((p = _), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, p, p.return);
                  break;
                case 1:
                  tn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (g) {
                      Q(r, n, g);
                    }
                  }
                  break;
                case 5:
                  tn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    No(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (_ = y)) : No(f);
            }
            x = x.sibling;
          }
        e: for (x = null, f = e; ; ) {
          if (f.tag === 5) {
            if (x === null) {
              x = f;
              try {
                ((l = f.stateNode),
                  c
                    ? ((a = l.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((u = f.stateNode),
                      (o = f.memoizedProps.style),
                      (i =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (u.style.display = mu("display", i))));
              } catch (g) {
                Q(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (x === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                Q(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (x === f && (x = null), (f = f.return));
          }
          (x === f && (x = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Te(t, e), $e(e), r & 4 && jo(e));
      break;
    case 21:
      break;
    default:
      (Te(t, e), $e(e));
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($c(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
          var a = wo(e);
          ca(e, a, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = wo(e);
          ua(e, u, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (o) {
      Q(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vp(e, t, n) {
  ((_ = e), Wc(e));
}
function Wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      a = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Or;
      if (!i) {
        var u = l.alternate,
          o = (u !== null && u.memoizedState !== null) || ie;
        u = Or;
        var c = ie;
        if (((Or = i), (ie = o) && !c))
          for (_ = l; _ !== null; )
            ((i = _),
              (o = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? bo(l)
                : o !== null
                  ? ((o.return = i), (_ = o))
                  : bo(l));
        for (; a !== null; ) ((_ = a), Wc(a), (a = a.sibling));
        ((_ = l), (Or = u), (ie = c));
      }
      ko(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (_ = a)) : ko(e);
  }
}
function ko(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && so(t, a, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                so(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var x = c.memoizedState;
                  if (x !== null) {
                    var f = x.dehydrated;
                    f !== null && Zn(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ie || (t.flags & 512 && oa(t));
      } catch (p) {
        Q(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function No(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function bo(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ml(4, t);
          } catch (o) {
            Q(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              Q(t, l, o);
            }
          }
          var a = t.return;
          try {
            oa(t);
          } catch (o) {
            Q(t, a, o);
          }
          break;
        case 5:
          var i = t.return;
          try {
            oa(t);
          } catch (o) {
            Q(t, i, o);
          }
      }
    } catch (o) {
      Q(t, t.return, o);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (_ = u));
      break;
    }
    _ = t.return;
  }
}
var Wp = Math.ceil,
  wl = nt.ReactCurrentDispatcher,
  ni = nt.ReactCurrentOwner,
  Ee = nt.ReactCurrentBatchConfig,
  R = 0,
  te = null,
  X = null,
  re = 0,
  ye = 0,
  nn = Nt(0),
  J = 0,
  or = null,
  Ut = 0,
  Ol = 0,
  ri = 0,
  Wn = null,
  pe = null,
  li = 0,
  gn = 1 / 0,
  Ye = null,
  jl = !1,
  da = null,
  gt = null,
  Dr = !1,
  ut = null,
  kl = 0,
  Hn = 0,
  fa = null,
  Jr = -1,
  qr = 0;
function ce() {
  return R & 6 ? K() : Jr !== -1 ? Jr : (Jr = K());
}
function vt(e) {
  return e.mode & 1
    ? R & 2 && re !== 0
      ? re & -re
      : _p.transition !== null
        ? (qr === 0 && (qr = Eu()), qr)
        : ((e = M),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Iu(e.type))),
          e)
    : 1;
}
function Oe(e, t, n, r) {
  if (50 < Hn) throw ((Hn = 0), (fa = null), Error(N(185)));
  (hr(e, n, r),
    (!(R & 2) || e !== te) &&
      (e === te && (!(R & 2) && (Ol |= n), J === 4 && it(e, re)),
      ge(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((gn = K() + 500), Fl && bt())));
}
function ge(e, t) {
  var n = e.callbackNode;
  _f(e, t);
  var r = sl(e, e === te ? re : 0);
  if (r === 0)
    (n !== null && Ti(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ti(n), t === 1))
      (e.tag === 0 ? Sp(Co.bind(null, e)) : ec(Co.bind(null, e)),
        kp(function () {
          !(R & 6) && bt();
        }),
        (n = null));
    else {
      switch (Pu(r)) {
        case 1:
          n = za;
          break;
        case 4:
          n = Su;
          break;
        case 16:
          n = ll;
          break;
        case 536870912:
          n = _u;
          break;
        default:
          n = ll;
      }
      n = Jc(n, Hc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Hc(e, t) {
  if (((Jr = -1), (qr = 0), R & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = sl(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var a = Yc();
    (te !== e || re !== t) && ((Ye = null), (gn = K() + 500), Ft(e, t));
    do
      try {
        Yp();
        break;
      } catch (u) {
        Qc(e, u);
      }
    while (!0);
    (Va(),
      (wl.current = a),
      (R = l),
      X !== null ? (t = 0) : ((te = null), (re = 0), (t = J)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ds(e)), l !== 0 && ((r = l), (t = pa(e, l)))), t === 1)
    )
      throw ((n = or), Ft(e, 0), it(e, r), ge(e, K()), n);
    if (t === 6) it(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Hp(l) &&
          ((t = Nl(e, r)),
          t === 2 && ((a = Ds(e)), a !== 0 && ((r = a), (t = pa(e, a)))),
          t === 1))
      )
        throw ((n = or), Ft(e, 0), it(e, r), ge(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          zt(e, pe, Ye);
          break;
        case 3:
          if (
            (it(e, r), (r & 130023424) === r && ((t = li + 500 - K()), 10 < t))
          ) {
            if (sl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ce(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Ys(zt.bind(null, e, pe, Ye), t);
            break;
          }
          zt(e, pe, Ye);
          break;
        case 4:
          if ((it(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            ((a = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~a));
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Wp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ys(zt.bind(null, e, pe, Ye), r);
            break;
          }
          zt(e, pe, Ye);
          break;
        case 5:
          zt(e, pe, Ye);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (ge(e, K()), e.callbackNode === n ? Hc.bind(null, e) : null);
}
function pa(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && ha(t)),
    e
  );
}
function ha(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function Hp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!De(a(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function it(e, t) {
  for (
    t &= ~ri,
      t &= ~Ol,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Co(e) {
  if (R & 6) throw Error(N(327));
  un();
  var t = sl(e, 0);
  if (!(t & 1)) return (ge(e, K()), null);
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ds(e);
    r !== 0 && ((t = r), (n = pa(e, r)));
  }
  if (n === 1) throw ((n = or), Ft(e, 0), it(e, t), ge(e, K()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, pe, Ye),
    ge(e, K()),
    null
  );
}
function si(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    ((R = n), R === 0 && ((gn = K() + 500), Fl && bt()));
  }
}
function $t(e) {
  ut !== null && ut.tag === 0 && !(R & 6) && un();
  var t = R;
  R |= 1;
  var n = Ee.transition,
    r = M;
  try {
    if (((Ee.transition = null), (M = 1), e)) return e();
  } finally {
    ((M = r), (Ee.transition = n), (R = t), !(R & 6) && bt());
  }
}
function ai() {
  ((ye = nn.current), U(nn));
}
function Ft(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jp(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Ua(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && cl());
          break;
        case 3:
          (mn(), U(me), U(oe), Xa());
          break;
        case 5:
          Ka(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          U(V);
          break;
        case 19:
          U(V);
          break;
        case 10:
          Wa(r.type._context);
          break;
        case 22:
        case 23:
          ai();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (X = e = yt(e.current, null)),
    (re = ye = t),
    (J = 0),
    (or = null),
    (ri = Ol = Ut = 0),
    (pe = Wn = null),
    Tt !== null)
  ) {
    for (t = 0; t < Tt.length; t++)
      if (((n = Tt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          a = n.pending;
        if (a !== null) {
          var i = a.next;
          ((a.next = l), (r.next = i));
        }
        n.pending = r;
      }
    Tt = null;
  }
  return e;
}
function Qc(e, t) {
  do {
    var n = X;
    try {
      if ((Va(), (Xr.current = yl), vl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        vl = !1;
      }
      if (
        ((Dt = 0),
        (ee = Z = W = null),
        (Bn = !1),
        (sr = 0),
        (ni.current = null),
        n === null || n.return === null)
      ) {
        ((J = 1), (or = t), (X = null));
        break;
      }
      e: {
        var a = e,
          i = n.return,
          u = n,
          o = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var c = o,
            x = u,
            f = x.tag;
          if (!(x.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = x.alternate;
            p
              ? ((x.updateQueue = p.updateQueue),
                (x.memoizedState = p.memoizedState),
                (x.lanes = p.lanes))
              : ((x.updateQueue = null), (x.memoizedState = null));
          }
          var y = fo(i);
          if (y !== null) {
            ((y.flags &= -257),
              po(y, i, u, a, t),
              y.mode & 1 && co(a, c, t),
              (t = y),
              (o = c));
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              (g.add(o), (t.updateQueue = g));
            } else w.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              (co(a, c, t), ii());
              break e;
            }
            o = Error(N(426));
          }
        } else if ($ && u.mode & 1) {
          var C = fo(i);
          if (C !== null) {
            (!(C.flags & 65536) && (C.flags |= 256),
              po(C, i, u, a, t),
              $a(xn(o, u)));
            break e;
          }
        }
        ((a = o = xn(o, u)),
          J !== 4 && (J = 2),
          Wn === null ? (Wn = [a]) : Wn.push(a),
          (a = i));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var h = Pc(a, o, t);
              lo(a, h);
              break e;
            case 1:
              u = o;
              var d = a.type,
                m = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (gt === null || !gt.has(m))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var j = zc(a, u, t);
                lo(a, j);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Xc(n);
    } catch (S) {
      ((t = S), X === n && n !== null && (X = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Yc() {
  var e = wl.current;
  return ((wl.current = yl), e === null ? yl : e);
}
function ii() {
  ((J === 0 || J === 3 || J === 2) && (J = 4),
    te === null || (!(Ut & 268435455) && !(Ol & 268435455)) || it(te, re));
}
function Nl(e, t) {
  var n = R;
  R |= 2;
  var r = Yc();
  (te !== e || re !== t) && ((Ye = null), Ft(e, t));
  do
    try {
      Qp();
      break;
    } catch (l) {
      Qc(e, l);
    }
  while (!0);
  if ((Va(), (R = n), (wl.current = r), X !== null)) throw Error(N(261));
  return ((te = null), (re = 0), J);
}
function Qp() {
  for (; X !== null; ) Kc(X);
}
function Yp() {
  for (; X !== null && !vf(); ) Kc(X);
}
function Kc(e) {
  var t = Zc(e.alternate, e, ye);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Xc(e) : (X = t),
    (ni.current = null));
}
function Xc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Up(n, t)), n !== null)) {
        ((n.flags &= 32767), (X = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((J = 6), (X = null));
        return;
      }
    } else if (((n = Dp(n, t, ye)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function zt(e, t, n) {
  var r = M,
    l = Ee.transition;
  try {
    ((Ee.transition = null), (M = 1), Kp(e, t, n, r));
  } finally {
    ((Ee.transition = l), (M = r));
  }
  return null;
}
function Kp(e, t, n, r) {
  do un();
  while (ut !== null);
  if (R & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = n.lanes | n.childLanes;
  if (
    (Ef(e, a),
    e === te && ((X = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      Jc(ll, function () {
        return (un(), null);
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    ((a = Ee.transition), (Ee.transition = null));
    var i = M;
    M = 1;
    var u = R;
    ((R |= 4),
      (ni.current = null),
      Bp(e, n),
      Vc(n, e),
      hp(Hs),
      (al = !!Ws),
      (Hs = Ws = null),
      (e.current = n),
      Vp(n),
      yf(),
      (R = u),
      (M = i),
      (Ee.transition = a));
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (ut = e), (kl = l)),
    (a = e.pendingLanes),
    a === 0 && (gt = null),
    kf(n.stateNode),
    ge(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (jl) throw ((jl = !1), (e = da), (da = null), e);
  return (
    kl & 1 && e.tag !== 0 && un(),
    (a = e.pendingLanes),
    a & 1 ? (e === fa ? Hn++ : ((Hn = 0), (fa = e))) : (Hn = 0),
    bt(),
    null
  );
}
function un() {
  if (ut !== null) {
    var e = Pu(kl),
      t = Ee.transition,
      n = M;
    try {
      if (((Ee.transition = null), (M = 16 > e ? 16 : e), ut === null))
        var r = !1;
      else {
        if (((e = ut), (ut = null), (kl = 0), R & 6)) throw Error(N(331));
        var l = R;
        for (R |= 4, _ = e.current; _ !== null; ) {
          var a = _,
            i = a.child;
          if (_.flags & 16) {
            var u = a.deletions;
            if (u !== null) {
              for (var o = 0; o < u.length; o++) {
                var c = u[o];
                for (_ = c; _ !== null; ) {
                  var x = _;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, x, a);
                  }
                  var f = x.child;
                  if (f !== null) ((f.return = x), (_ = f));
                  else
                    for (; _ !== null; ) {
                      x = _;
                      var p = x.sibling,
                        y = x.return;
                      if ((Uc(x), x === c)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = y), (_ = p));
                        break;
                      }
                      _ = y;
                    }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var C = g.sibling;
                    ((g.sibling = null), (g = C));
                  } while (g !== null);
                }
              }
              _ = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) ((i.return = a), (_ = i));
          else
            e: for (; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, a, a.return);
                }
              var h = a.sibling;
              if (h !== null) {
                ((h.return = a.return), (_ = h));
                break e;
              }
              _ = a.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          i = _;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) ((m.return = i), (_ = m));
          else
            e: for (i = d; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ml(9, u);
                  }
                } catch (S) {
                  Q(u, u.return, S);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var j = u.sibling;
              if (j !== null) {
                ((j.return = u.return), (_ = j));
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((R = l), bt(), We && typeof We.onPostCommitFiberRoot == "function")
        )
          try {
            We.onPostCommitFiberRoot(Pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((M = n), (Ee.transition = t));
    }
  }
  return !1;
}
function So(e, t, n) {
  ((t = xn(n, t)),
    (t = Pc(e, t, 1)),
    (e = xt(e, t, 1)),
    (t = ce()),
    e !== null && (hr(e, 1, t), ge(e, t)));
}
function Q(e, t, n) {
  if (e.tag === 3) So(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        So(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          ((e = xn(n, e)),
            (e = zc(t, e, 1)),
            (t = xt(t, e, 1)),
            (e = ce()),
            t !== null && (hr(t, 1, e), ge(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Xp(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > K() - li)
        ? Ft(e, 0)
        : (ri |= n)),
    ge(e, t));
}
function Gc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
      : (t = 1));
  var n = ce();
  ((e = et(e, t)), e !== null && (hr(e, t, n), ge(e, n)));
}
function Gp(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Gc(e, n));
}
function Zp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  (r !== null && r.delete(t), Gc(e, n));
}
var Zc;
Zc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((he = !1), Op(e, t, n));
      he = !!(e.flags & 131072);
    }
  else ((he = !1), $ && t.flags & 1048576 && tc(t, pl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Zr(e, t), (e = t.pendingProps));
      var l = fn(t, oe.current);
      (on(t, n), (l = Za(null, t, r, e, l, n)));
      var a = Ja();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((a = !0), dl(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Qa(t),
            (l.updater = Rl),
            (t.stateNode = l),
            (l._reactInternals = t),
            ea(t, r, e, n),
            (t = ra(null, t, r, !0, a, n)))
          : ((t.tag = 0), $ && a && Da(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = qp(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            t = na(null, t, r, e, n);
            break e;
          case 1:
            t = xo(null, t, r, e, n);
            break e;
          case 11:
            t = ho(null, t, r, e, n);
            break e;
          case 14:
            t = mo(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        na(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        xo(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Fc(t), e === null)) throw Error(N(387));
        ((r = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          ic(e, t),
          xl(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            ((l = xn(Error(N(423)), t)), (t = go(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = xn(Error(N(424)), t)), (t = go(e, t, r, n, l)));
            break e;
          } else
            for (
              we = mt(t.stateNode.containerInfo.firstChild),
                je = t,
                $ = !0,
                Re = null,
                n = sc(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((pn(), r === l)) {
            t = tt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        oc(t),
        e === null && Zs(t),
        (r = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Qs(r, l) ? (i = null) : a !== null && Qs(r, a) && (t.flags |= 32),
        Lc(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Zs(t), null);
    case 13:
      return Ic(e, t, n);
    case 4:
      return (
        Ya(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        ho(e, t, r, l, n)
      );
    case 7:
      return (ue(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ue(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ue(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (a = t.memoizedProps),
          (i = l.value),
          O(hl, r._currentValue),
          (r._currentValue = i),
          a !== null)
        )
          if (De(a.value, i)) {
            if (a.children === l.children && !me.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var u = a.dependencies;
              if (u !== null) {
                i = a.child;
                for (var o = u.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (a.tag === 1) {
                      ((o = Ze(-1, n & -n)), (o.tag = 2));
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var x = c.pending;
                        (x === null
                          ? (o.next = o)
                          : ((o.next = x.next), (x.next = o)),
                          (c.pending = o));
                      }
                    }
                    ((a.lanes |= n),
                      (o = a.alternate),
                      o !== null && (o.lanes |= n),
                      Js(a.return, n, t),
                      (u.lanes |= n));
                    break;
                  }
                  o = o.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(N(341));
                ((i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Js(i, n, t),
                  (i = a.sibling));
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    ((a.return = i.return), (i = a));
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        (ue(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        on(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Fe(r, t.pendingProps)),
        (l = Fe(r.type, l)),
        mo(e, t, r, l, n)
      );
    case 15:
      return Ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Zr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), dl(t)) : (e = !1),
        on(t, n),
        Ec(t, r, l),
        ea(t, r, l, n),
        ra(null, t, r, !0, e, n)
      );
    case 19:
      return Rc(e, t, n);
    case 22:
      return Tc(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Jc(e, t) {
  return Cu(e, t);
}
function Jp(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function _e(e, t, n, r) {
  return new Jp(e, t, n, r);
}
function oi(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function qp(e) {
  if (typeof e == "function") return oi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _a)) return 11;
    if (e === Ea) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function el(e, t, n, r, l, a) {
  var i = 2;
  if (((r = e), typeof e == "function")) oi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qt:
        return It(n.children, l, a, t);
      case Sa:
        ((i = 8), (l |= 8));
        break;
      case bs:
        return (
          (e = _e(12, n, t, l | 2)),
          (e.elementType = bs),
          (e.lanes = a),
          e
        );
      case Cs:
        return ((e = _e(13, n, t, l)), (e.elementType = Cs), (e.lanes = a), e);
      case Ss:
        return ((e = _e(19, n, t, l)), (e.elementType = Ss), (e.lanes = a), e);
      case ou:
        return Dl(n, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case au:
              i = 10;
              break e;
            case iu:
              i = 9;
              break e;
            case _a:
              i = 11;
              break e;
            case Ea:
              i = 14;
              break e;
            case lt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = a),
    t
  );
}
function It(e, t, n, r) {
  return ((e = _e(7, e, r, t)), (e.lanes = n), e);
}
function Dl(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = ou),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ys(e, t, n) {
  return ((e = _e(6, e, null, t)), (e.lanes = n), e);
}
function ws(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function eh(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = es(0)),
    (this.expirationTimes = es(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = es(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function ui(e, t, n, r, l, a, i, u, o) {
  return (
    (e = new eh(e, t, n, u, o)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = _e(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qa(a),
    e
  );
}
function th(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ht,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qc(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return qu(e, n, t);
  }
  return t;
}
function ed(e, t, n, r, l, a, i, u, o) {
  return (
    (e = ui(n, r, !0, e, l, a, i, u, o)),
    (e.context = qc(null)),
    (n = e.current),
    (r = ce()),
    (l = vt(n)),
    (a = Ze(r, l)),
    (a.callback = t ?? null),
    xt(n, a, l),
    (e.current.lanes = l),
    hr(e, l, r),
    ge(e, r),
    e
  );
}
function Ul(e, t, n, r) {
  var l = t.current,
    a = ce(),
    i = vt(l);
  return (
    (n = qc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(a, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xt(l, t, i)),
    e !== null && (Oe(e, l, i, a), Kr(e, l, i)),
    i
  );
}
function bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _o(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ci(e, t) {
  (_o(e, t), (e = e.alternate) && _o(e, t));
}
function nh() {
  return null;
}
var td =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function di(e) {
  this._internalRoot = e;
}
$l.prototype.render = di.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Ul(e, t, null, null);
};
$l.prototype.unmount = di.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ($t(function () {
      Ul(null, e, null, null);
    }),
      (t[qe] = null));
  }
};
function $l(e) {
  this._internalRoot = e;
}
$l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    (at.splice(n, 0, e), n === 0 && Fu(e));
  }
};
function fi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Eo() {}
function rh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var c = bl(i);
        a.call(c);
      };
    }
    var i = ed(t, r, e, 0, null, !1, !1, "", Eo);
    return (
      (e._reactRootContainer = i),
      (e[qe] = i.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = bl(o);
      u.call(c);
    };
  }
  var o = ui(e, 0, !1, null, null, !1, !1, "", Eo);
  return (
    (e._reactRootContainer = o),
    (e[qe] = o.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Ul(t, o, n, r);
    }),
    o
  );
}
function Vl(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var o = bl(i);
        u.call(o);
      };
    }
    Ul(t, i, e, l);
  } else i = rh(n, t, e, l, r);
  return bl(i);
}
zu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (Aa(t, n | 1), ge(t, K()), !(R & 6) && ((gn = K() + 500), bt()));
      }
      break;
    case 13:
      ($t(function () {
        var r = et(e, 1);
        if (r !== null) {
          var l = ce();
          Oe(r, e, 1, l);
        }
      }),
        ci(e, 1));
  }
};
Ta = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = ce();
      Oe(t, e, 134217728, n);
    }
    ci(e, 134217728);
  }
};
Au = function (e) {
  if (e.tag === 13) {
    var t = vt(e),
      n = et(e, t);
    if (n !== null) {
      var r = ce();
      Oe(n, e, t, r);
    }
    ci(e, t);
  }
};
Tu = function () {
  return M;
};
Lu = function (e, t) {
  var n = M;
  try {
    return ((M = e), t());
  } finally {
    M = n;
  }
};
Rs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ps(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ll(r);
            if (!l) throw Error(N(90));
            (cu(r), Ps(r, l));
          }
        }
      }
      break;
    case "textarea":
      fu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && rn(e, !!n.multiple, t, !1));
  }
};
yu = si;
wu = $t;
var lh = { usingClientEntryPoint: !1, Events: [xr, Gt, Ll, gu, vu, si] },
  Tn = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  sh = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Nu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || nh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber)
    try {
      ((Pl = Ur.inject(sh)), (We = Ur));
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lh;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fi(t)) throw Error(N(200));
  return th(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!fi(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = td;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ui(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new di(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return ((e = Nu(t)), (e = e === null ? null : e.stateNode), e);
};
Ne.flushSync = function (e) {
  return $t(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Bl(t)) throw Error(N(200));
  return Vl(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!fi(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    a = "",
    i = td;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ed(t, null, e, 1, n ?? null, l, !1, a, i)),
    (e[qe] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new $l(t);
};
Ne.render = function (e, t, n) {
  if (!Bl(t)) throw Error(N(200));
  return Vl(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Bl(e)) throw Error(N(40));
  return e._reactRootContainer
    ? ($t(function () {
        Vl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[qe] = null));
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = si;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Vl(e, t, n, !1, r);
};
Ne.version = "18.3.1-next-f1338f8080-20240426";
function nd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd);
    } catch (e) {
      console.error(e);
    }
}
(nd(), (nu.exports = Ne));
var ah = nu.exports,
  rd,
  Po = ah;
((rd = Po.createRoot), Po.hydrateRoot);
/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ur.apply(null, arguments)
  );
}
var ct;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(ct || (ct = {}));
const zo = "popstate";
function ih(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: a, search: i, hash: u } = r.location;
    return ma(
      "",
      { pathname: a, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : ld(l);
  }
  return uh(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function oh() {
  return Math.random().toString(36).substr(2, 8);
}
function Ao(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ma(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ur(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? jn(t) : t,
      { state: n, key: (t && t.key) || r || oh() },
    )
  );
}
function ld(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function jn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function uh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: a = !1 } = r,
    i = l.history,
    u = ct.Pop,
    o = null,
    c = x();
  c == null && ((c = 0), i.replaceState(ur({}, i.state, { idx: c }), ""));
  function x() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    u = ct.Pop;
    let C = x(),
      h = C == null ? null : C - c;
    ((c = C), o && o({ action: u, location: g.location, delta: h }));
  }
  function p(C, h) {
    u = ct.Push;
    let d = ma(g.location, C, h);
    c = x() + 1;
    let m = Ao(d, c),
      j = g.createHref(d);
    try {
      i.pushState(m, "", j);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      l.location.assign(j);
    }
    a && o && o({ action: u, location: g.location, delta: 1 });
  }
  function y(C, h) {
    u = ct.Replace;
    let d = ma(g.location, C, h);
    c = x();
    let m = Ao(d, c),
      j = g.createHref(d);
    (i.replaceState(m, "", j),
      a && o && o({ action: u, location: g.location, delta: 0 }));
  }
  function w(C) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof C == "string" ? C : ld(C);
    return (
      (d = d.replace(/ $/, "%20")),
      G(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          d,
      ),
      new URL(d, h)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(C) {
      if (o) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(zo, f),
        (o = C),
        () => {
          (l.removeEventListener(zo, f), (o = null));
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: w,
    encodeLocation(C) {
      let h = w(C);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: y,
    go(C) {
      return i.go(C);
    },
  };
  return g;
}
var To;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(To || (To = {}));
function ch(e, t, n) {
  return (n === void 0 && (n = "/"), dh(e, t, n));
}
function dh(e, t, n, r) {
  let l = typeof t == "string" ? jn(t) : t,
    a = id(l.pathname || "/", n);
  if (a == null) return null;
  let i = sd(e);
  fh(i);
  let u = null,
    o = bh(a);
  for (let c = 0; u == null && c < i.length; ++c) u = jh(i[c], o);
  return u;
}
function sd(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let l = (a, i, u) => {
    let o = {
      relativePath: u === void 0 ? a.path || "" : u,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: i,
      route: a,
    };
    o.relativePath.startsWith("/") &&
      (G(
        o.relativePath.startsWith(r),
        'Absolute route path "' +
          o.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let c = Rt([r, o.relativePath]),
      x = n.concat(o);
    (a.children &&
      a.children.length > 0 &&
      (G(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      sd(a.children, t, x, c)),
      !(a.path == null && !a.index) &&
        t.push({ path: c, score: yh(c, a.index), routesMeta: x }));
  };
  return (
    e.forEach((a, i) => {
      var u;
      if (a.path === "" || !((u = a.path) != null && u.includes("?"))) l(a, i);
      else for (let o of ad(a.path)) l(a, i, o);
    }),
    t
  );
}
function ad(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [a, ""] : [a];
  let i = ad(r.join("/")),
    u = [];
  return (
    u.push(...i.map((o) => (o === "" ? a : [a, o].join("/")))),
    l && u.push(...i),
    u.map((o) => (e.startsWith("/") && o === "" ? "/" : o))
  );
}
function fh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : wh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const ph = /^:[\w-]+$/,
  hh = 3,
  mh = 2,
  xh = 1,
  gh = 10,
  vh = -2,
  Lo = (e) => e === "*";
function yh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Lo) && (r += vh),
    t && (r += mh),
    n
      .filter((l) => !Lo(l))
      .reduce((l, a) => l + (ph.test(a) ? hh : a === "" ? xh : gh), r)
  );
}
function wh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function jh(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    a = "/",
    i = [];
  for (let u = 0; u < r.length; ++u) {
    let o = r[u],
      c = u === r.length - 1,
      x = a === "/" ? t : t.slice(a.length) || "/",
      f = kh(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: c },
        x,
      ),
      p = o.route;
    if (!f) return null;
    (Object.assign(l, f.params),
      i.push({
        params: l,
        pathname: Rt([a, f.pathname]),
        pathnameBase: Ph(Rt([a, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (a = Rt([a, f.pathnameBase])));
  }
  return i;
}
function kh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Nh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let a = l[0],
    i = a.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((c, x, f) => {
      let { paramName: p, isOptional: y } = x;
      if (p === "*") {
        let g = u[f] || "";
        i = a.slice(0, a.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const w = u[f];
      return (
        y && !w ? (c[p] = void 0) : (c[p] = (w || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: a,
    pathnameBase: i,
    pattern: e,
  };
}
function Nh(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pi(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, o) => (
            r.push({ paramName: u, isOptional: o != null }),
            o ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function bh(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      pi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function id(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Ch = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sh = (e) => Ch.test(e);
function _h(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: l = "",
    } = typeof e == "string" ? jn(e) : e,
    a;
  if (n)
    if (Sh(n)) a = n;
    else {
      if (n.includes("//")) {
        let i = n;
        ((n = cd(n)),
          pi(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (i + " -> " + n),
          ));
      }
      n.startsWith("/") ? (a = Fo(n.substring(1), "/")) : (a = Fo(n, t));
    }
  else a = t;
  return { pathname: a, search: zh(r), hash: Ah(l) };
}
function Fo(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function js(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Eh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function od(e, t) {
  let n = Eh(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ud(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = jn(e))
    : ((l = ur({}, e)),
      G(
        !l.pathname || !l.pathname.includes("?"),
        js("?", "pathname", "search", l),
      ),
      G(
        !l.pathname || !l.pathname.includes("#"),
        js("#", "pathname", "hash", l),
      ),
      G(!l.search || !l.search.includes("#"), js("#", "search", "hash", l)));
  let a = e === "" || l.pathname === "",
    i = a ? "/" : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) (p.shift(), (f -= 1));
      l.pathname = p.join("/");
    }
    u = f >= 0 ? t[f] : "/";
  }
  let o = _h(l, u),
    c = i && i !== "/" && i.endsWith("/"),
    x = (a || i === ".") && n.endsWith("/");
  return (!o.pathname.endsWith("/") && (c || x) && (o.pathname += "/"), o);
}
const cd = (e) => e.replace(/\/\/+/g, "/"),
  Rt = (e) => cd(e.join("/")),
  Ph = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  zh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Ah = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Th(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const dd = ["post", "put", "patch", "delete"];
new Set(dd);
const Lh = ["get", ...dd];
new Set(Lh);
/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cr.apply(null, arguments)
  );
}
const hi = k.createContext(null),
  Fh = k.createContext(null),
  vr = k.createContext(null),
  Wl = k.createContext(null),
  Ct = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fd = k.createContext(null);
function yr() {
  return k.useContext(Wl) != null;
}
function Hl() {
  return (yr() || G(!1), k.useContext(Wl).location);
}
function pd(e) {
  k.useContext(vr).static || k.useLayoutEffect(e);
}
function Ue() {
  let { isDataRoute: e } = k.useContext(Ct);
  return e ? Kh() : Ih();
}
function Ih() {
  yr() || G(!1);
  let e = k.useContext(hi),
    { basename: t, future: n, navigator: r } = k.useContext(vr),
    { matches: l } = k.useContext(Ct),
    { pathname: a } = Hl(),
    i = JSON.stringify(od(l, n.v7_relativeSplatPath)),
    u = k.useRef(!1);
  return (
    pd(() => {
      u.current = !0;
    }),
    k.useCallback(
      function (c, x) {
        if ((x === void 0 && (x = {}), !u.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = ud(c, JSON.parse(i), a, x.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Rt([t, f.pathname])),
          (x.replace ? r.replace : r.push)(f, x.state, x));
      },
      [t, r, i, a, e],
    )
  );
}
function Rh() {
  let { matches: e } = k.useContext(Ct),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Mh(e, t) {
  return Oh(e, t);
}
function Oh(e, t, n, r) {
  yr() || G(!1);
  let { navigator: l } = k.useContext(vr),
    { matches: a } = k.useContext(Ct),
    i = a[a.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let o = i ? i.pathnameBase : "/";
  i && i.route;
  let c = Hl(),
    x;
  if (t) {
    var f;
    let C = typeof t == "string" ? jn(t) : t;
    (o === "/" || ((f = C.pathname) != null && f.startsWith(o)) || G(!1),
      (x = C));
  } else x = c;
  let p = x.pathname || "/",
    y = p;
  if (o !== "/") {
    let C = o.replace(/^\//, "").split("/");
    y = "/" + p.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let w = ch(e, { pathname: y }),
    g = Vh(
      w &&
        w.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, u, C.params),
            pathname: Rt([
              o,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? o
                : Rt([
                    o,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          }),
        ),
      a,
      n,
      r,
    );
  return t && g
    ? k.createElement(
        Wl.Provider,
        {
          value: {
            location: cr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              x,
            ),
            navigationType: ct.Pop,
          },
        },
        g,
      )
    : g;
}
function Dh() {
  let e = Yh(),
    t = Th(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const Uh = k.createElement(Dh, null);
class $h extends k.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          Ct.Provider,
          { value: this.props.routeContext },
          k.createElement(fd.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Bh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(hi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Ct.Provider, { value: t }, r)
  );
}
function Vh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var a;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (a = r) != null &&
      a.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let x = i.findIndex(
      (f) => f.route.id && (u == null ? void 0 : u[f.route.id]) !== void 0,
    );
    (x >= 0 || G(!1), (i = i.slice(0, Math.min(i.length, x + 1))));
  }
  let o = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let x = 0; x < i.length; x++) {
      let f = i[x];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = x),
        f.route.id)
      ) {
        let { loaderData: p, errors: y } = n,
          w =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || w) {
          ((o = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((x, f, p) => {
    let y,
      w = !1,
      g = null,
      C = null;
    n &&
      ((y = u && f.route.id ? u[f.route.id] : void 0),
      (g = f.route.errorElement || Uh),
      o &&
        (c < 0 && p === 0
          ? (Xh("route-fallback"), (w = !0), (C = null))
          : c === p &&
            ((w = !0), (C = f.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, p + 1)),
      d = () => {
        let m;
        return (
          y
            ? (m = g)
            : w
              ? (m = C)
              : f.route.Component
                ? (m = k.createElement(f.route.Component, null))
                : f.route.element
                  ? (m = f.route.element)
                  : (m = x),
          k.createElement(Bh, {
            match: f,
            routeContext: { outlet: x, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? k.createElement($h, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: y,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var hd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(hd || {}),
  md = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(md || {});
function Wh(e) {
  let t = k.useContext(hi);
  return (t || G(!1), t);
}
function Hh(e) {
  let t = k.useContext(Fh);
  return (t || G(!1), t);
}
function Qh(e) {
  let t = k.useContext(Ct);
  return (t || G(!1), t);
}
function xd(e) {
  let t = Qh(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || G(!1), n.route.id);
}
function Yh() {
  var e;
  let t = k.useContext(fd),
    n = Hh(),
    r = xd();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Kh() {
  let { router: e } = Wh(hd.UseNavigateStable),
    t = xd(md.UseNavigateStable),
    n = k.useRef(!1);
  return (
    pd(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, a) {
        (a === void 0 && (a = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, cr({ fromRouteId: t }, a))));
      },
      [e, t],
    )
  );
}
const Io = {};
function Xh(e, t, n) {
  Io[e] || (Io[e] = !0);
}
function Gh(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Zh(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  yr() || G(!1);
  let { future: a, static: i } = k.useContext(vr),
    { matches: u } = k.useContext(Ct),
    { pathname: o } = Hl(),
    c = Ue(),
    x = ud(t, od(u, a.v7_relativeSplatPath), o, l === "path"),
    f = JSON.stringify(x);
  return (
    k.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: l }),
      [c, f, l, n, r],
    ),
    null
  );
}
function Le(e) {
  G(!1);
}
function Jh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ct.Pop,
    navigator: a,
    static: i = !1,
    future: u,
  } = e;
  yr() && G(!1);
  let o = t.replace(/^\/*/, "/"),
    c = k.useMemo(
      () => ({
        basename: o,
        navigator: a,
        static: i,
        future: cr({ v7_relativeSplatPath: !1 }, u),
      }),
      [o, u, a, i],
    );
  typeof r == "string" && (r = jn(r));
  let {
      pathname: x = "/",
      search: f = "",
      hash: p = "",
      state: y = null,
      key: w = "default",
    } = r,
    g = k.useMemo(() => {
      let C = id(x, o);
      return C == null
        ? null
        : {
            location: { pathname: C, search: f, hash: p, state: y, key: w },
            navigationType: l,
          };
    }, [o, x, f, p, y, w, l]);
  return g == null
    ? null
    : k.createElement(
        vr.Provider,
        { value: c },
        k.createElement(Wl.Provider, { children: n, value: g }),
      );
}
function qh(e) {
  let { children: t, location: n } = e;
  return Mh(xa(t), n);
}
new Promise(() => {});
function xa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let a = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, xa(r.props.children, a));
        return;
      }
      (r.type !== Le && G(!1), !r.props.index || !r.props.children || G(!1));
      let i = {
        id: r.props.id || a.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (i.children = xa(r.props.children, a)), n.push(i));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const e0 = "6";
try {
  window.__reactRouterVersion = e0;
} catch {}
const t0 = "startTransition",
  Ro = Kd[t0];
function n0(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    a = k.useRef();
  a.current == null && (a.current = ih({ window: l, v5Compat: !0 }));
  let i = a.current,
    [u, o] = k.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    x = k.useCallback(
      (f) => {
        c && Ro ? Ro(() => o(f)) : o(f);
      },
      [o, c],
    );
  return (
    k.useLayoutEffect(() => i.listen(x), [i, x]),
    k.useEffect(() => Gh(r), [r]),
    k.createElement(Jh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
var Mo;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Mo || (Mo = {}));
var Oo;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Oo || (Oo = {}));
const gd = k.createContext();
function r0({ children: e }) {
  const [t, n] = k.useState([]),
    [r, l] = k.useState(!1),
    a = k.useCallback((y, w = 1) => {
      n((g) =>
        g.find((h) => h.id === y.id)
          ? g.map((h) => (h.id === y.id ? { ...h, qty: h.qty + w } : h))
          : [...g, { ...y, qty: w }],
      );
    }, []),
    i = k.useCallback((y) => {
      n((w) => w.filter((g) => g.id !== y));
    }, []),
    u = k.useCallback((y, w) => {
      w <= 0
        ? n((g) => g.filter((C) => C.id !== y))
        : n((g) => g.map((C) => (C.id === y ? { ...C, qty: w } : C)));
    }, []),
    o = k.useCallback(() => n([]), []),
    c = t.reduce((y, w) => y + w.qty, 0),
    x = t.reduce((y, w) => y + w.price * w.qty, 0),
    f = x >= 200 ? 0 : 15,
    p = x + f;
  return s.jsx(gd.Provider, {
    value: {
      items: t,
      addItem: a,
      removeItem: i,
      updateQty: u,
      clearCart: o,
      totalItems: c,
      subtotal: x,
      deliveryFee: f,
      total: p,
      isOpen: r,
      setIsOpen: l,
    },
    children: e,
  });
}
const kn = () => k.useContext(gd),
  l0 = {
    ar: {
      storeName: "أبو دغش",
      storeTagline: "أجود اللحوم الطازجة",
      startShopping: "ابدأ التسوق",
      categories: "الفئات",
      ourProducts: "منتجاتنا",
      addToCart: "أضف للسلة",
      cart: "السلة",
      emptyCart: "السلة فارغة",
      subtotal: "المجموع الفرعي",
      delivery: "التوصيل",
      total: "الإجمالي",
      checkout: "إتمام الشراء",
      suggestedItems: "قد يعجبك أيضاً",
      signUp: "إنشاء حساب",
      login: "تسجيل الدخول",
      phone: "رقم الهاتف",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      fullName: "الاسم الكامل",
      continueAsGuest: "المتابعة كضيف",
      haveAccount: "لديك حساب؟",
      noAccount: "ليس لديك حساب؟",
      paymentMethod: "طريقة الدفع",
      selectPayment: "اختر طريقة الدفع",
      creditCard: "بطاقة ائتمان / ڤيزا",
      applePay: "Apple Pay",
      googlePay: "Google Pay",
      cash: "دفع نقدي عند الاستلام",
      placeOrder: "تأكيد الطلب",
      orderConfirmed: "تم تأكيد طلبك!",
      orderId: "رقم الطلب",
      estimatedDelivery: "وقت التوصيل المتوقع",
      backToShopping: "العودة للتسوق",
      items: "منتجات",
      gram: "غرام",
      perKg: "/كغ",
      nis: "₪",
      free: "مجاني",
      adminPanel: "لوحة الإدارة",
      manageCategories: "إدارة الفئات",
      manageProducts: "إدارة المنتجات",
      manageOrders: "إدارة الطلبات",
      addCategory: "إضافة فئة",
      addProduct: "إضافة منتج",
      categoryName: "اسم الفئة",
      productName: "اسم المنتج",
      price: "السعر",
      description: "الوصف",
      uploadImage: "رفع صورة",
      save: "حفظ",
      cancel: "إلغاء",
      delete: "حذف",
      edit: "تعديل",
      viewAll: "عرض الكل",
      fresh: "طازج",
      halal: "حلال",
      quantity: "الكمية",
      remove: "حذف",
      address: "العنوان",
      city: "المدينة",
      notes: "ملاحظات",
      deliveryTime: "وقت التوصيل",
      minutes: "دقيقة",
      orderDetails: "تفاصيل الطلب",
      status: "الحالة",
      pending: "قيد الانتظار",
      preparing: "جاري التحضير",
      onTheWay: "في الطريق",
      delivered: "تم التوصيل",
      aboutUs: "من نحن",
      ourStory: "قصتنا",
      ourValues: "قيمنا",
      customerReviews: "آراء عملائنا",
      deliveryPanel: "بوابة المندوب",
      myDeliveries: "توصيلاتي",
      activeDelivery: "التوصيل الحالي",
      completedDeliveries: "التوصيلات المكتملة",
      startDelivery: "بدء التوصيل",
      completeDelivery: "إتمام التوصيل",
      callCustomer: "اتصل بالعميل",
      navigate: "التنقل",
    },
    he: {
      storeName: "אבו דגש",
      storeTagline: "הבשר הטרי הטוב ביותר",
      startShopping: "התחל לקנות",
      categories: "קטגוריות",
      ourProducts: "המוצרים שלנו",
      addToCart: "הוסף לעגלה",
      cart: "עגלה",
      emptyCart: "העגלה ריקה",
      subtotal: "סכום ביניים",
      delivery: "משלוח",
      total: 'סה"כ',
      checkout: "לתשלום",
      suggestedItems: "אולי תאהב גם",
      signUp: "הרשמה",
      login: "התחברות",
      phone: "מספר טלפון",
      password: "סיסמה",
      confirmPassword: "אשר סיסמה",
      fullName: "שם מלא",
      continueAsGuest: "המשך כאורח",
      haveAccount: "יש לך חשבון?",
      noAccount: "אין לך חשבון?",
      paymentMethod: "אמצעי תשלום",
      selectPayment: "בחר אמצעי תשלום",
      creditCard: "כרטיס אשראי / ויזה",
      applePay: "Apple Pay",
      googlePay: "Google Pay",
      cash: "תשלום במזומן",
      placeOrder: "אשר הזמנה",
      orderConfirmed: "ההזמנה אושרה!",
      orderId: "מספר הזמנה",
      estimatedDelivery: "זמן אספקה משוער",
      backToShopping: "חזור לקניות",
      items: "פריטים",
      gram: "גרם",
      perKg: '/ק"ג',
      nis: "₪",
      free: "חינם",
      adminPanel: "פאנל ניהול",
      manageCategories: "ניהול קטגוריות",
      manageProducts: "ניהול מוצרים",
      manageOrders: "ניהול הזמנות",
      addCategory: "הוסף קטגוריה",
      addProduct: "הוסף מוצר",
      categoryName: "שם קטגוריה",
      productName: "שם מוצר",
      price: "מחיר",
      description: "תיאור",
      uploadImage: "העלה תמונה",
      save: "שמור",
      cancel: "ביטול",
      delete: "מחק",
      edit: "ערוך",
      viewAll: "הצג הכל",
      fresh: "טרי",
      halal: "חלאל",
      quantity: "כמות",
      remove: "הסר",
      address: "כתובת",
      city: "עיר",
      notes: "הערות",
      deliveryTime: "זמן משלוח",
      minutes: "דקות",
      orderDetails: "פרטי הזמנה",
      status: "סטטוס",
      pending: "ממתין",
      preparing: "בהכנה",
      onTheWay: "בדרך",
      delivered: "נמסר",
      aboutUs: "אודותינו",
      ourStory: "הסיפור שלנו",
      ourValues: "הערכים שלנו",
      customerReviews: "חוות דעת לקוחות",
      deliveryPanel: "פורטל שליח",
      myDeliveries: "המשלוחים שלי",
      activeDelivery: "משלוח פעיל",
      completedDeliveries: "משלוחים שהושלמו",
      startDelivery: "התחל משלוח",
      completeDelivery: "השלם משלוח",
      callCustomer: "התקשר ללקוח",
      navigate: "ניווט",
    },
  },
  Cl = [
    {
      id: 1,
      name_ar: "لحم بقري",
      name_he: "בקר",
      image:
        "https://images.unsplash.com/photo-1588347785102-2944afe78c95?w=400&h=300&fit=crop",
      count: 12,
      tag_ar: "الأكثر مبيعاً",
      tag_he: "הנמכר ביותר",
    },
    {
      id: 2,
      name_ar: "لحم غنم",
      name_he: "כבש",
      image:
        "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&h=300&fit=crop",
      count: 8,
      tag_ar: "",
      tag_he: "",
    },
    {
      id: 3,
      name_ar: "دجاج طازج",
      name_he: "עוף טרי",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop",
      count: 10,
      tag_ar: "جديد",
      tag_he: "חדש",
    },
    {
      id: 4,
      name_ar: "لحم عجل",
      name_he: "עגל",
      image:
        "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=400&h=300&fit=crop",
      count: 6,
      tag_ar: "",
      tag_he: "",
    },
    {
      id: 5,
      name_ar: "أسماك وأحياء بحرية",
      name_he: "דגים ופירות ים",
      image:
        "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&h=300&fit=crop",
      count: 9,
      tag_ar: "",
      tag_he: "",
    },
    {
      id: 6,
      name_ar: "منتجات مصنعة",
      name_he: "מוצרים מעובדים",
      image:
        "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?w=400&h=300&fit=crop",
      count: 15,
      tag_ar: "عرض خاص",
      tag_he: "מבצע",
    },
  ],
  dr = [
    {
      id: 1,
      categoryId: 1,
      name_ar: "ستيك ريبس عالي الجودة",
      name_he: "ריב-איי סטייק",
      description_ar:
        "ستيك ريبس طازج ممتاز، مثالي للشواء. قطع سميكة من أجود أنواع اللحم البقري.",
      description_he:
        "ריב-איי סטייק טרי ומעולה, מושלם לגריל. פרוסות עבות מהבשר הטוב ביותר.",
      price: 89,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1588347785102-2944afe78c95?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "الأكثر طلباً",
      badge_he: "הנדרש ביותר",
      rating: 4.9,
      reviews: 128,
    },
    {
      id: 2,
      categoryId: 1,
      name_ar: "لحم مفروم ممتاز",
      name_he: "בשר טחון מעולה",
      description_ar: "لحم مفروم طازج 100%، مناسب للكفتة والبرغر والمعجنات.",
      description_he: "100% בשר טחון טרי, מתאים לקציצות, המבורגר ומאפים.",
      price: 45,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",
      isFeatured: !1,
      badge_ar: "",
      badge_he: "",
      rating: 4.7,
      reviews: 89,
    },
    {
      id: 3,
      categoryId: 1,
      name_ar: "انتريكوت بقري",
      name_he: "אנטריקוט בקר",
      description_ar: "قطعة أنتريكوت طازجة لذيذة، مثالية للشواء والمشوي.",
      description_he: "אנטריקוט טרי וטעים, מושלם לגריל ולצלייה.",
      price: 75,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "طازج اليوم",
      badge_he: "טרי היום",
      rating: 4.8,
      reviews: 64,
    },
    {
      id: 4,
      categoryId: 1,
      name_ar: "فيليه بقري فاخر",
      name_he: "פילה בקר יוקרתי",
      description_ar: "فيليه بقري طري فاخر، أرق قطعة في جسم الحيوان.",
      description_he: "פילה בקר רך ויוקרתי, הנתח הרך ביותר.",
      price: 120,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "فاخر",
      badge_he: "יוקרתי",
      rating: 5,
      reviews: 47,
    },
    {
      id: 5,
      categoryId: 2,
      name_ar: "فخذ غنم كاملة",
      name_he: "כרע כבש שלמה",
      description_ar:
        "فخذ غنم طازجة كاملة، مثالية للمشاوي والطواجن والأطباق الاحتفالية.",
      description_he:
        "כרע כבש טרי שלמה, מושלמת לגריל, תבשילים ומאכלים חגיגיים.",
      price: 65,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "",
      badge_he: "",
      rating: 4.6,
      reviews: 45,
    },
    {
      id: 6,
      categoryId: 2,
      name_ar: "كتف غنم طازج",
      name_he: "כתף כבש טרי",
      description_ar: "كتف غنم طازج مثالي للطهي البطيء والشواء.",
      description_he: "כתף כבש טרי מושלם לבישול איטי ולגריל.",
      price: 55,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=300&fit=crop",
      isFeatured: !1,
      badge_ar: "طازج",
      badge_he: "טרי",
      rating: 4.5,
      reviews: 38,
    },
    {
      id: 7,
      categoryId: 3,
      name_ar: "دجاجة كاملة طازجة",
      name_he: "עוף שלם טרי",
      description_ar:
        "دجاجة كاملة طازجة حلال، معبأة بعناية للحفاظ على نضارتها.",
      description_he: "עוף שלם טרי חלאל, ארוז בקפידה לשמירה על טריות.",
      price: 28,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop",
      isFeatured: !1,
      badge_ar: "",
      badge_he: "",
      rating: 4.5,
      reviews: 203,
    },
    {
      id: 8,
      categoryId: 3,
      name_ar: "صدر دجاج طازج",
      name_he: "חזה עוף טרי",
      description_ar: "صدر دجاج طازج منزوع العظم والجلد، غني بالبروتين.",
      description_he: "חזה עוף טרי ללא עצם ועור, עשיר בחלבון.",
      price: 35,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1618897996318-5a901fa0b5cc?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "خالي من الدهون",
      badge_he: "דל שומן",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 9,
      categoryId: 3,
      name_ar: "أفخاذ دجاج مشوية",
      name_he: "ירכי עוף לגריל",
      description_ar: "أفخاذ دجاج طازجة بالتتبيلة الشرقية الأصيلة.",
      description_he: "ירכי עוף טריות עם מרינדה מזרחית מקורית.",
      price: 32,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "محضر طازج",
      badge_he: "טרי מוכן",
      rating: 4.8,
      reviews: 92,
    },
    {
      id: 10,
      categoryId: 4,
      name_ar: "اسكالوب عجل",
      name_he: "אסקלופ עגל",
      description_ar: "شرائح عجل رفيعة طرية، مثالية للطبخ السريع والمقلي.",
      description_he: "פרוסות עגל דקות ורכות, מושלמות לבישול מהיר וטיגון.",
      price: 95,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=400&h=300&fit=crop",
      isFeatured: !1,
      badge_ar: "فاخر",
      badge_he: "יוקרתי",
      rating: 4.9,
      reviews: 32,
    },
    {
      id: 11,
      categoryId: 4,
      name_ar: "كوتيليت عجل",
      name_he: "קוטלט עגל",
      description_ar: "كوتيليت عجل بالعظم، طري وشهي.",
      description_he: "קוטלט עגל עם עצם, רך וטעים.",
      price: 85,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop",
      isFeatured: !1,
      badge_ar: "",
      badge_he: "",
      rating: 4.6,
      reviews: 19,
    },
    {
      id: 12,
      categoryId: 5,
      name_ar: "سمك سلمون طازج",
      name_he: "סלמון טרי",
      description_ar: "سمك سلمون طازج عالي الجودة، غني بأوميغا 3.",
      description_he: "סלמון טרי באיכות גבוהה, עשיר באומגה 3.",
      price: 78,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "صحي",
      badge_he: "בריא",
      rating: 4.8,
      reviews: 61,
    },
    {
      id: 13,
      categoryId: 5,
      name_ar: "جمبري طازج كبير",
      name_he: "שרימפס טרי גדול",
      description_ar: "جمبري طازج حجم كبير، مناسب للشواء والمقلي.",
      description_he: "שרימפס טרי גדול, מתאים לגריל ולטיגון.",
      price: 95,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1565680018434-b6b9e5f37456?w=400&h=300&fit=crop",
      isFeatured: !1,
      badge_ar: "",
      badge_he: "",
      rating: 4.7,
      reviews: 44,
    },
    {
      id: 14,
      categoryId: 6,
      name_ar: "سجق عربي حلال",
      name_he: "נקניקיות ערביות חלאל",
      description_ar: "سجق عربي بالتوابل الشرقية الأصيلة، مثالي للشواء.",
      description_he:
        "נקניקיות ערביות עם תבלינים מזרחיים מקוריים, מושלמות לגריל.",
      price: 42,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "عرض خاص",
      badge_he: "מבצע",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 15,
      categoryId: 6,
      name_ar: "كباب مشكل",
      name_he: "קבב מעורב",
      description_ar: "كباب مشكل بالتوابل العربية الأصيلة، جاهز للشواء.",
      description_he: "קבב מעורב עם תבלינים ערביים מקוריים, מוכן לגריל.",
      price: 58,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1544025162-d76594e8efa5?w=400&h=300&fit=crop",
      isFeatured: !0,
      badge_ar: "جاهز للشواء",
      badge_he: "מוכן לגריל",
      rating: 4.9,
      reviews: 113,
    },
    {
      id: 16,
      categoryId: 6,
      name_ar: "شاورما دجاج",
      name_he: "שווארמה עוף",
      description_ar: "شاورما دجاج مبهرة بالتوابل الشرقية، جاهزة للطهي.",
      description_he: "שווארמה עוף מתובלת בתבלינים מזרחיים, מוכנה לבישול.",
      price: 38,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
      isFeatured: !1,
      badge_ar: "مبهر",
      badge_he: "מתובל",
      rating: 4.7,
      reviews: 88,
    },
  ],
  vd = [
    {
      id: "ORD-1001",
      customer: "محمد أحمد",
      phone: "050-1234567",
      total: 285,
      status: "delivering",
      time: "14:32",
      items: 4,
    },
    {
      id: "ORD-1002",
      customer: "سارة خالد",
      phone: "052-9876543",
      total: 147,
      status: "preparing",
      time: "14:10",
      items: 2,
    },
    {
      id: "ORD-1003",
      customer: "أحمد نصر",
      phone: "054-5554443",
      total: 320,
      status: "pending",
      time: "14:55",
      items: 5,
    },
    {
      id: "ORD-1004",
      customer: "فاطمة عمر",
      phone: "050-7778889",
      total: 95,
      status: "delivered",
      time: "13:22",
      items: 1,
    },
    {
      id: "ORD-1005",
      customer: "خالد سعيد",
      phone: "053-1112223",
      total: 210,
      status: "confirmed",
      time: "15:01",
      items: 3,
    },
  ],
  s0 = [
    {
      id: 1,
      name_ar: "محمد الحسن",
      name_he: "מוחמד אלחסן",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text_ar:
        "أفضل لحوم جربتها في حياتي! الجودة عالية جداً والتوصيل سريع. أنصح الجميع بالطلب من أبو دغش.",
      text_he:
        "הבשר הטוב ביותר שאי פעם טעמתי! איכות גבוהה מאוד והמשלוח מהיר. אני ממליץ לכולם.",
      date_ar: "منذ أسبوع",
      date_he: "לפני שבוע",
    },
    {
      id: 2,
      name_ar: "سارة إبراهيم",
      name_he: "שרה איברהים",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text_ar:
        "لحوم طازجة يومياً، المذاق رائع والأسعار معقولة. التوصيل وصل في وقته تماماً.",
      text_he: "בשר טרי כל יום, הטעם נהדר והמחירים סבירים. המשלוח הגיע בזמן.",
      date_ar: "منذ 3 أيام",
      date_he: "לפני 3 ימים",
    },
    {
      id: 3,
      name_ar: "أحمد يوسف",
      name_he: "אחמד יוסף",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text_ar:
        "ستيك الريبس كان استثنائياً! طرية جداً وطعمها لا يوصف. سأطلب مرة أخرى بالتأكيد.",
      text_he: "ריב-איי היה יוצא דופן! רך מאוד וטעמו לשבח. בהחלט אזמין שוב.",
      date_ar: "منذ يومين",
      date_he: "לפני יומיים",
    },
    {
      id: 4,
      name_ar: "فاطمة عمر",
      name_he: "פאטמה עומר",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      text_ar:
        "الدجاج الحلال طازج جداً، العائلة كلها أعجبها. خدمة ممتازة وسرعة في التوصيل.",
      text_he: "עוף החלאל טרי מאוד, כל המשפחה אהבה. שירות מעולה ומשלוח מהיר.",
      date_ar: "منذ 5 أيام",
      date_he: "לפני 5 ימים",
    },
    {
      id: 5,
      name_ar: "خالد محمود",
      name_he: "חאלד מחמוד",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text_ar:
        "الكباب المشكل أشهى ما أكلته، التتبيل مثالي والنكهة شرقية أصيلة.",
      text_he: "הקבב המעורב הכי טעים שאכלתי, התיבול מושלם והטעם מזרחי אותנטי.",
      date_ar: "منذ أسبوع",
      date_he: "לפני שבוע",
    },
    {
      id: 6,
      name_ar: "ليلى حسن",
      name_he: "ליילא חסן",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text_ar:
        "أبو دغش هو المتجر الوحيد الذي أثق به للحوم الطازجة. جودة لا تُضاهى!",
      text_he:
        "אבו דגש הוא החנות היחידה שאני סומכת עליה לבשר טרי. איכות שאין שני לה!",
      date_ar: "منذ 4 أيام",
      date_he: "לפני 4 ימים",
    },
  ],
  yd = k.createContext();
function a0({ children: e }) {
  const [t, n] = k.useState("ar"),
    r = l0[t];
  k.useEffect(() => {
    ((document.documentElement.lang = t),
      (document.documentElement.dir = "rtl"));
  }, [t]);
  const l = () => n((c) => (c === "ar" ? "he" : "ar")),
    a = (c) => (t === "ar" ? c.name_ar : c.name_he),
    i = (c) => (t === "ar" ? c.description_ar : c.description_he),
    u = (c) => (t === "ar" ? c.badge_ar : c.badge_he),
    o = (c) => (t === "ar" ? c.tag_ar : c.tag_he);
  return s.jsx(yd.Provider, {
    value: { lang: t, toggleLang: l, t: r, name: a, desc: i, badge: u, tag: o },
    children: e,
  });
}
const Ae = () => k.useContext(yd);
function i0() {
  const { t: e, toggleLang: t, lang: n } = Ae(),
    r = Ue(),
    [l, a] = k.useState(0);
  return (
    k.useEffect(() => {
      const i = [
        setTimeout(() => a(1), 300),
        setTimeout(() => a(2), 900),
        setTimeout(() => a(3), 1600),
        setTimeout(() => a(4), 2400),
      ];
      return () => i.forEach(clearTimeout);
    }, []),
    s.jsxs("div", {
      className:
        "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black",
      children: [
        s.jsxs("div", {
          className: "absolute inset-0 overflow-hidden",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 opacity-20",
              style: {
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, #CC0000 0%, transparent 70%)",
                animation: "pulse 4s ease-in-out infinite",
              },
            }),
            s.jsx("div", {
              className:
                "absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10",
              style: {
                background: "#CC0000",
                filter: "blur(80px)",
                animation: "float 6s ease-in-out infinite",
              },
            }),
            s.jsx("div", {
              className:
                "absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10",
              style: {
                background: "#CC0000",
                filter: "blur(80px)",
                animation: "float 8s ease-in-out infinite reverse",
              },
            }),
            [...Array(8)].map((i, u) =>
              s.jsx(
                "div",
                {
                  className: "absolute opacity-5",
                  style: {
                    width: "100%",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, #CC0000, transparent)",
                    top: `${12 + u * 12}%`,
                    animation: `shimmer ${2 + u * 0.3}s linear infinite`,
                  },
                },
                u,
              ),
            ),
          ],
        }),
        s.jsx("button", {
          onClick: t,
          className:
            "absolute top-6 left-6 z-20 glass rounded-full px-4 py-2 text-sm font-bold text-white border border-white/20 hover:border-brand-red transition-colors",
          children: n === "ar" ? "עברית" : "العربية",
        }),
        s.jsxs("div", {
          className: "absolute top-6 right-6 z-20 flex gap-2",
          children: [
            s.jsx("button", {
              onClick: () => r("/about"),
              className:
                "glass rounded-full px-3 py-2 text-xs text-brand-gray-light border border-white/10 hover:border-brand-red hover:text-white transition-colors",
              children: n === "ar" ? "من نحن" : "אודות",
            }),
            s.jsx("button", {
              onClick: () => r("/delivery"),
              className:
                "glass rounded-full px-3 py-2 text-xs text-orange-400 border border-orange-400/20 hover:border-orange-400 transition-colors",
              children: n === "ar" ? "المندوب" : "שליח",
            }),
            s.jsx("button", {
              onClick: () => r("/admin"),
              className:
                "glass rounded-full px-3 py-2 text-xs text-brand-gray-light border border-white/10 hover:border-brand-red hover:text-white transition-colors",
              children: n === "ar" ? "الإدارة" : "ניהול",
            }),
          ],
        }),
        s.jsx("div", {
          className:
            "absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none",
        }),
        s.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none",
        }),
        s.jsxs("div", {
          className:
            "relative z-20 flex flex-col items-center text-center px-8 max-w-md",
          children: [
            s.jsx("div", {
              className: "mb-6 transition-all duration-700",
              style: {
                opacity: l >= 1 ? 1 : 0,
                transform:
                  l >= 1
                    ? "scale(1) translateY(0)"
                    : "scale(0.5) translateY(20px)",
              },
              children: s.jsx("div", {
                className: "w-32 h-32 rounded-3xl mx-auto mb-4 overflow-hidden",
                style: {
                  boxShadow:
                    "0 0 40px rgba(204,0,0,0.6), 0 0 80px rgba(204,0,0,0.2)",
                  border: "2px solid rgba(204,0,0,0.5)",
                },
                children: s.jsx("img", {
                  src: "ad--poc/logo.jpeg",
                  alt: "أبو دغش",
                  className: "w-full h-full object-cover",
                }),
              }),
            }),
            s.jsxs("div", {
              className: "transition-all duration-700",
              style: {
                opacity: l >= 2 ? 1 : 0,
                transform: l >= 2 ? "translateY(0)" : "translateY(20px)",
              },
              children: [
                s.jsx("h1", {
                  className: "text-6xl font-black mb-2",
                  style: {
                    background:
                      "linear-gradient(135deg, #FFFFFF 30%, #CC0000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                  },
                  children: e.storeName,
                }),
                s.jsx("p", {
                  className:
                    "text-brand-gray-light text-lg tracking-widest uppercase font-light",
                  children: e.storeTagline,
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "my-8 flex items-center gap-3 w-full transition-all duration-700",
              style: {
                opacity: l >= 3 ? 1 : 0,
                transform: l >= 3 ? "scaleX(1)" : "scaleX(0)",
              },
              children: [
                s.jsx("div", {
                  className:
                    "flex-1 h-px bg-gradient-to-r from-transparent to-brand-red",
                }),
                s.jsx("span", {
                  className: "text-brand-red text-xs",
                  children: "◆",
                }),
                s.jsx("div", {
                  className:
                    "flex-1 h-px bg-gradient-to-l from-transparent to-brand-red",
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "flex gap-3 mb-10 flex-wrap justify-center transition-all duration-700",
              style: {
                opacity: l >= 3 ? 1 : 0,
                transform: l >= 3 ? "translateY(0)" : "translateY(15px)",
              },
              children: ["طازج يومياً", "توصيل سريع", "جودة عالية"].map(
                (i, u) =>
                  s.jsx(
                    "span",
                    {
                      className:
                        "glass px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/10",
                      children: i,
                    },
                    u,
                  ),
              ),
            }),
            s.jsxs("div", {
              className: "transition-all duration-700",
              style: {
                opacity: l >= 4 ? 1 : 0,
                transform:
                  l >= 4
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(0.9)",
              },
              children: [
                s.jsxs("button", {
                  onClick: () => r("/categories"),
                  className:
                    "relative group overflow-hidden rounded-full font-black text-xl px-12 py-5 text-white transition-all duration-300 hover:scale-105 active:scale-95",
                  style: {
                    background: "linear-gradient(135deg, #CC0000, #990000)",
                    boxShadow:
                      "0 0 30px rgba(204,0,0,0.5), 0 8px 32px rgba(0,0,0,0.4)",
                  },
                  children: [
                    s.jsxs("span", {
                      className: "relative z-10",
                      children: [e.startShopping, " ←"],
                    }),
                    s.jsx("div", {
                      className:
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      style: {
                        background: "linear-gradient(135deg, #FF1A1A, #CC0000)",
                      },
                    }),
                  ],
                }),
                s.jsx("p", {
                  className: "text-brand-gray-light text-xs mt-6 opacity-60",
                  children:
                    n === "ar"
                      ? "توصيل مجاني للطلبات فوق ₪200"
                      : "משלוח חינם להזמנות מעל ₪200",
                }),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className: "absolute bottom-10 flex gap-2 z-20",
          children: [0, 1, 2].map((i) =>
            s.jsx(
              "div",
              {
                className: "rounded-full transition-all duration-500",
                style: {
                  width: i === 1 ? "24px" : "6px",
                  height: "6px",
                  background: i === 1 ? "#CC0000" : "rgba(255,255,255,0.3)",
                },
              },
              i,
            ),
          ),
        }),
        s.jsx("style", {
          children: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `,
        }),
      ],
    })
  );
}
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  wd = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var u0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c0 = k.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: a,
      iconNode: i,
      ...u
    },
    o,
  ) =>
    k.createElement(
      "svg",
      {
        ref: o,
        ...u0,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: wd("lucide", l),
        ...u,
      },
      [
        ...i.map(([c, x]) => k.createElement(c, x)),
        ...(Array.isArray(a) ? a : [a]),
      ],
    ),
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = (e, t) => {
  const n = k.forwardRef(({ className: r, ...l }, a) =>
    k.createElement(c0, {
      ref: a,
      iconNode: t,
      className: wd(`lucide-${o0(e)}`, r),
      ...l,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jd = I("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d0 = I("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f0 = I("Banknote", [
  [
    "rect",
    { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" },
  ],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p0 = I("ChartNoAxesColumn", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h0 = I("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m0 = I("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cn = I("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = I("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mi = I("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x0 = I("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g0 = I("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v0 = I("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y0 = I("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w0 = I("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j0 = I("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k0 = I("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  [
    "rect",
    { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
  ],
  [
    "rect",
    { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
  ],
  [
    "rect",
    { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Do = I("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = I("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N0 = I("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bd = I("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cd = I("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xi = I("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay",
    },
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uo = I("Pen", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gi = I("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fr = I("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b0 = I("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
      key: "q3az6g",
    },
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C0 = I("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ga = I("ShoppingBag", [
  [
    "path",
    { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" },
  ],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sd = I("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nn = I("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S0 = I("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const va = I("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dt = I("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $o = I("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vi = I("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _d = I("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wr = I("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function bn() {
  const { totalItems: e, setIsOpen: t } = kn(),
    { t: n, toggleLang: r, lang: l } = Ae(),
    a = Ue(),
    i = Hl(),
    [u, o] = k.useState(!1),
    c = i.pathname.startsWith("/admin"),
    x = i.pathname.startsWith("/delivery");
  return s.jsxs("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-16",
    style: {
      background: "rgba(10,10,10,0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(204,0,0,0.2)",
    },
    children: [
      s.jsxs("button", {
        onClick: () => a("/"),
        className: "flex items-center gap-3 group",
        children: [
          s.jsx("div", {
            className:
              "w-9 h-9 rounded-xl overflow-hidden transition-transform group-hover:scale-110 border border-brand-red/40",
            children: s.jsx("img", {
              src: "ad--poc/logo.jpeg",
              alt: "أبو دغش",
              className: "w-full h-full object-cover",
            }),
          }),
          s.jsx("span", {
            className: "font-black text-lg text-white",
            children: n.storeName,
          }),
        ],
      }),
      !c &&
        !x &&
        s.jsxs("div", {
          className:
            "hidden md:flex items-center gap-3 text-sm text-brand-gray-light",
          children: [
            s.jsx("button", {
              onClick: () => a("/categories"),
              className: "hover:text-white transition-colors",
              children: n.categories,
            }),
            s.jsx("span", { className: "text-white/20", children: "|" }),
            s.jsx("button", {
              onClick: () => a("/about"),
              className: "hover:text-white transition-colors",
              children: n.aboutUs,
            }),
            s.jsx("span", { className: "text-white/20", children: "|" }),
            s.jsx("button", {
              onClick: () => a("/delivery"),
              className: "hover:text-orange-400 transition-colors",
              children: l === "ar" ? "بوابة المندوب" : "פורטל שליח",
            }),
          ],
        }),
      c &&
        s.jsx("span", {
          className: "hidden md:block text-brand-red font-bold text-sm",
          children: n.adminPanel,
        }),
      x &&
        s.jsx("span", {
          className: "hidden md:block text-orange-400 font-bold text-sm",
          children: l === "ar" ? "بوابة المندوب" : "פורטל שליח",
        }),
      s.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          s.jsx("button", {
            onClick: r,
            className:
              "hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border border-brand-gray-mid hover:border-brand-red text-white transition-colors",
            children: l === "ar" ? "עב" : "ع",
          }),
          !c &&
            s.jsxs("button", {
              onClick: () => t(!0),
              className:
                "relative flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95",
              style: {
                background:
                  e > 0
                    ? "linear-gradient(135deg, #CC0000, #990000)"
                    : "rgba(255,255,255,0.08)",
                border: e > 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
              },
              children: [
                s.jsx(Sd, { size: 16 }),
                s.jsx("span", {
                  className: "hidden sm:inline",
                  children: n.cart,
                }),
                e > 0 &&
                  s.jsx("span", {
                    className:
                      "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black",
                    style: { background: "#FFFFFF", color: "#CC0000" },
                    children: e,
                  }),
              ],
            }),
          s.jsx("button", {
            className: "md:hidden text-white",
            onClick: () => o((f) => !f),
            children: u ? s.jsx(wr, { size: 20 }) : s.jsx(N0, { size: 20 }),
          }),
        ],
      }),
      u &&
        s.jsxs("div", {
          className:
            "absolute top-16 left-0 right-0 py-4 px-6 flex flex-col gap-3 md:hidden",
          style: {
            background: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(204,0,0,0.2)",
          },
          children: [
            s.jsx("button", {
              onClick: r,
              className:
                "text-white text-sm font-bold text-right py-2 border-b border-white/10",
              children: l === "ar" ? "עברית" : "العربية",
            }),
            !c &&
              s.jsx("button", {
                onClick: () => {
                  (a("/admin"), o(!1));
                },
                className:
                  "text-brand-gray-light text-sm text-right py-2 border-b border-white/10",
                children: n.adminPanel,
              }),
            s.jsx("button", {
              onClick: () => {
                (a("/about"), o(!1));
              },
              className:
                "text-brand-gray-light text-sm text-right py-2 border-b border-white/10",
              children: n.aboutUs,
            }),
            s.jsx("button", {
              onClick: () => {
                (a("/delivery"), o(!1));
              },
              className: "text-orange-400 text-sm text-right py-2",
              children: l === "ar" ? "بوابة المندوب" : "פורטל שליח",
            }),
          ],
        }),
    ],
  });
}
function jr() {
  const {
      items: e,
      removeItem: t,
      updateQty: n,
      subtotal: r,
      deliveryFee: l,
      total: a,
      isOpen: i,
      setIsOpen: u,
    } = kn(),
    { t: o, name: c } = Ae(),
    x = Ue();
  return i
    ? s.jsxs(s.Fragment, {
        children: [
          s.jsx("div", {
            className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
            onClick: () => u(!1),
          }),
          s.jsxs("div", {
            className:
              "fixed top-0 left-0 h-full w-full max-w-sm z-50 flex flex-col",
            style: {
              background: "#111111",
              borderRight: "1px solid rgba(204,0,0,0.3)",
              boxShadow: "4px 0 40px rgba(0,0,0,0.8)",
              animation: "slideInFromLeft 0.35s ease-out",
            },
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-5 border-b",
                style: { borderColor: "rgba(204,0,0,0.2)" },
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      s.jsx("div", {
                        className:
                          "w-9 h-9 rounded-xl flex items-center justify-center",
                        style: {
                          background:
                            "linear-gradient(135deg, #CC0000, #990000)",
                        },
                        children: s.jsx(ga, {
                          size: 18,
                          className: "text-white",
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h2", {
                            className: "font-black text-white text-lg",
                            children: o.cart,
                          }),
                          s.jsxs("p", {
                            className: "text-brand-gray-light text-xs",
                            children: [e.length, " ", o.items],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: () => u(!1),
                    className:
                      "w-8 h-8 rounded-full flex items-center justify-center text-brand-gray-light hover:text-white hover:bg-white/10 transition-colors",
                    children: s.jsx(wr, { size: 18 }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-3",
                children:
                  e.length === 0
                    ? s.jsxs("div", {
                        className:
                          "flex flex-col items-center justify-center h-full gap-4 text-center",
                        children: [
                          s.jsx(Sd, {
                            size: 56,
                            className: "opacity-20 text-white",
                          }),
                          s.jsx("p", {
                            className: "text-brand-gray-light",
                            children: o.emptyCart,
                          }),
                        ],
                      })
                    : e.map((f) =>
                        s.jsxs(
                          "div",
                          {
                            className: "flex gap-3 p-3 rounded-xl",
                            style: {
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.06)",
                            },
                            children: [
                              s.jsx("img", {
                                src: f.image,
                                alt: c(f),
                                className:
                                  "w-16 h-16 rounded-lg object-cover flex-shrink-0",
                              }),
                              s.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  s.jsx("p", {
                                    className:
                                      "text-white font-semibold text-sm truncate",
                                    children: c(f),
                                  }),
                                  s.jsxs("p", {
                                    className:
                                      "text-brand-red font-black text-base",
                                    children: [o.nis, f.price],
                                  }),
                                  s.jsxs("div", {
                                    className: "flex items-center gap-2 mt-2",
                                    children: [
                                      s.jsx("button", {
                                        onClick: () => n(f.id, f.qty - 1),
                                        className:
                                          "w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors hover:bg-brand-red",
                                        style: {
                                          background: "rgba(255,255,255,0.1)",
                                        },
                                        children: s.jsx(bd, { size: 12 }),
                                      }),
                                      s.jsx("span", {
                                        className:
                                          "text-white font-bold text-sm w-6 text-center",
                                        children: f.qty,
                                      }),
                                      s.jsx("button", {
                                        onClick: () => n(f.id, f.qty + 1),
                                        className:
                                          "w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors hover:bg-brand-red",
                                        style: {
                                          background: "rgba(255,255,255,0.1)",
                                        },
                                        children: s.jsx(fr, { size: 12 }),
                                      }),
                                      s.jsx("button", {
                                        onClick: () => t(f.id),
                                        className:
                                          "mr-auto text-brand-gray-light hover:text-red-400 transition-colors",
                                        children: s.jsx(va, { size: 14 }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          f.id,
                        ),
                      ),
              }),
              e.length > 0 &&
                s.jsxs("div", {
                  className: "p-5 border-t space-y-3",
                  style: { borderColor: "rgba(204,0,0,0.2)" },
                  children: [
                    s.jsxs("div", {
                      className: "space-y-2 text-sm",
                      children: [
                        s.jsxs("div", {
                          className:
                            "flex justify-between text-brand-gray-light",
                          children: [
                            s.jsx("span", { children: o.subtotal }),
                            s.jsxs("span", {
                              className: "text-white",
                              children: [o.nis, r.toFixed(0)],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className:
                            "flex justify-between text-brand-gray-light",
                          children: [
                            s.jsx("span", { children: o.delivery }),
                            s.jsx("span", {
                              className:
                                l === 0
                                  ? "text-green-400 font-bold"
                                  : "text-white",
                              children: l === 0 ? o.free : `${o.nis}${l}`,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className:
                            "flex justify-between text-white font-black text-base border-t border-white/10 pt-2 mt-2",
                          children: [
                            s.jsx("span", { children: o.total }),
                            s.jsxs("span", {
                              className: "text-brand-red",
                              children: [o.nis, a.toFixed(0)],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("button", {
                      onClick: () => {
                        (u(!1), x("/auth"));
                      },
                      className:
                        "w-full py-4 rounded-xl font-black text-white text-lg transition-all hover:scale-[1.02] active:scale-95",
                      style: {
                        background: "linear-gradient(135deg, #CC0000, #990000)",
                        boxShadow: "0 4px 20px rgba(204,0,0,0.4)",
                      },
                      children: [o.checkout, " ←"],
                    }),
                  ],
                }),
            ],
          }),
          s.jsx("style", {
            children: `
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `,
          }),
        ],
      })
    : null;
}
function _0() {
  const e = Ue(),
    { t, name: n, badge: r, tag: l } = Ae(),
    { addItem: a, setIsOpen: i } = kn(),
    u = dr.filter((o) => o.isFeatured).slice(0, 4);
  return s.jsxs("div", {
    className: "min-h-screen bg-brand-black",
    children: [
      s.jsx(bn, {}),
      s.jsx(jr, {}),
      s.jsxs("div", {
        className: "pt-16 pb-24",
        children: [
          s.jsxs("div", {
            className: "relative overflow-hidden mx-4 mt-4 rounded-3xl mb-8",
            style: { minHeight: 180 },
            children: [
              s.jsx("div", {
                className: "absolute inset-0",
                style: {
                  background:
                    "linear-gradient(135deg, #0A0A0A 0%, #3D0000 50%, #CC0000 100%)",
                },
              }),
              s.jsx("div", {
                className: "absolute inset-0",
                style: {
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.15,
                },
              }),
              s.jsx("div", {
                className:
                  "relative z-10 p-8 flex items-center justify-between",
                children: s.jsxs("div", {
                  children: [
                    s.jsx("p", {
                      className: "text-brand-gray-light text-sm mb-1",
                      children: "مرحباً بك في",
                    }),
                    s.jsx("h1", {
                      className: "text-3xl font-black text-white mb-2",
                      children: t.storeName,
                    }),
                    s.jsx("p", {
                      className: "text-brand-red font-semibold",
                      children: t.storeTagline,
                    }),
                    s.jsxs("div", {
                      className: "flex gap-3 mt-4",
                      children: [
                        s.jsx("span", {
                          className:
                            "glass px-3 py-1 rounded-full text-xs text-white border border-white/10",
                          children: "طازج يومياً",
                        }),
                        s.jsx("span", {
                          className:
                            "glass px-3 py-1 rounded-full text-xs text-white border border-white/10",
                          children: "توصيل سريع",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "px-4 space-y-10",
            children: [
              s.jsxs("section", {
                children: [
                  s.jsx("div", {
                    className: "flex items-center justify-between mb-4",
                    children: s.jsxs("div", {
                      children: [
                        s.jsx("h2", {
                          className: "text-xl font-black text-white",
                          children: t.categories,
                        }),
                        s.jsxs("p", {
                          className: "text-brand-gray-light text-xs",
                          children: [Cl.length, " فئة متاحة"],
                        }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                    children: Cl.map((o, c) =>
                      s.jsxs(
                        "button",
                        {
                          onClick: () => e(`/items/${o.id}`),
                          className:
                            "relative group overflow-hidden rounded-2xl text-right transition-all duration-300 hover:scale-[1.03] hover:shadow-xl",
                          style: {
                            height: 140,
                            animation: `fadeSlideUp 0.5s ease-out ${c * 0.08}s both`,
                          },
                          children: [
                            s.jsx("img", {
                              src: o.image,
                              alt: n(o),
                              className:
                                "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                            }),
                            s.jsx("div", {
                              className: "absolute inset-0",
                              style: {
                                background:
                                  "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)",
                              },
                            }),
                            s.jsx("div", {
                              className:
                                "absolute inset-0 border-2 border-transparent group-hover:border-brand-red rounded-2xl transition-colors duration-300",
                            }),
                            l(o) &&
                              s.jsx("div", {
                                className:
                                  "absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-black",
                                style: { background: "#CC0000" },
                                children: l(o),
                              }),
                            s.jsxs("div", {
                              className: "absolute bottom-0 left-0 right-0 p-3",
                              children: [
                                s.jsx("p", {
                                  className:
                                    "text-white font-black text-base leading-tight",
                                  children: n(o),
                                }),
                                s.jsxs("p", {
                                  className: "text-white/60 text-xs",
                                  children: [o.count, " منتج"],
                                }),
                              ],
                            }),
                          ],
                        },
                        o.id,
                      ),
                    ),
                  }),
                ],
              }),
              s.jsxs("section", {
                children: [
                  s.jsx("div", {
                    className: "flex items-center justify-between mb-4",
                    children: s.jsxs("div", {
                      children: [
                        s.jsx("h2", {
                          className: "text-xl font-black text-white",
                          children: "الأكثر مبيعاً",
                        }),
                        s.jsx("p", {
                          className: "text-brand-gray-light text-xs",
                          children: "منتجاتنا المفضلة",
                        }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                    children: u.map((o, c) =>
                      s.jsxs(
                        "div",
                        {
                          className:
                            "relative rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.03]",
                          style: {
                            background: "#1A1A1A",
                            border: "1px solid rgba(255,255,255,0.06)",
                            animation: `fadeSlideUp 0.5s ease-out ${c * 0.1}s both`,
                          },
                          children: [
                            s.jsxs("div", {
                              className: "relative h-32 overflow-hidden",
                              children: [
                                s.jsx("img", {
                                  src: o.image,
                                  alt: n(o),
                                  className:
                                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                }),
                                r(o) &&
                                  s.jsx("span", {
                                    className:
                                      "absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-black",
                                    style: { background: "#CC0000" },
                                    children: r(o),
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "p-3",
                              children: [
                                s.jsx("p", {
                                  className:
                                    "text-white font-bold text-sm leading-tight mb-1 line-clamp-1",
                                  children: n(o),
                                }),
                                s.jsxs("div", {
                                  className: "flex items-center gap-1 mb-2",
                                  children: [
                                    s.jsx(Nn, {
                                      size: 11,
                                      className:
                                        "text-yellow-400 fill-yellow-400",
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "text-yellow-400 text-xs font-bold",
                                      children: o.rating,
                                    }),
                                    s.jsxs("span", {
                                      className: "text-white/30 text-xs",
                                      children: ["(", o.reviews, ")"],
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: s.jsxs("span", {
                                    className:
                                      "text-brand-red font-black text-base",
                                    children: [
                                      t.nis,
                                      o.price,
                                      s.jsx("span", {
                                        className:
                                          "text-xs font-normal text-brand-gray-light",
                                        children: t.perKg,
                                      }),
                                    ],
                                  }),
                                }),
                                s.jsxs("button", {
                                  onClick: () => {
                                    (a(o), i(!0));
                                  },
                                  className:
                                    "w-full mt-2 py-1.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 active:scale-95",
                                  style: {
                                    background:
                                      "linear-gradient(135deg, #CC0000, #990000)",
                                  },
                                  children: ["+ ", t.addToCart],
                                }),
                              ],
                            }),
                          ],
                        },
                        o.id,
                      ),
                    ),
                  }),
                ],
              }),
              s.jsx("section", {
                children: s.jsxs("div", {
                  className: "rounded-3xl p-6 relative overflow-hidden",
                  style: {
                    background: "linear-gradient(135deg, #1A0000, #3D0000)",
                  },
                  children: [
                    s.jsx("div", {
                      className: "absolute inset-0 opacity-10",
                      style: {
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1558030006-450675393462?w=800&fit=crop')",
                        backgroundSize: "cover",
                      },
                    }),
                    s.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        s.jsx("p", {
                          className: "text-brand-red font-black text-sm mb-1",
                          children: "عرض اليوم",
                        }),
                        s.jsx("h3", {
                          className: "text-white font-black text-2xl mb-2",
                          children: "توصيل مجاني",
                        }),
                        s.jsx("p", {
                          className: "text-white/70 text-sm",
                          children: "على جميع الطلبات فوق ₪200",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      s.jsx("style", {
        children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
      }),
    ],
  });
}
function E0({ product: e, onClose: t, onSelectSuggested: n }) {
  const { t: r, name: l, desc: a, badge: i } = Ae(),
    { addItem: u, setIsOpen: o } = kn(),
    [c, x] = k.useState(1);
  if (!e) return null;
  const f = dr
    .filter((p) => p.id !== e.id && p.categoryId === e.categoryId)
    .slice(0, 3);
  return s.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4",
    style: { background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" },
    onClick: t,
    children: s.jsxs("div", {
      className:
        "w-full max-w-md rounded-3xl overflow-hidden max-h-[92vh] flex flex-col",
      style: { background: "#1A1A1A", border: "1px solid rgba(204,0,0,0.3)" },
      onClick: (p) => p.stopPropagation(),
      children: [
        s.jsxs("div", {
          className: "relative h-52 flex-shrink-0",
          children: [
            s.jsx("img", {
              src: e.image,
              alt: l(e),
              className: "w-full h-full object-cover",
            }),
            s.jsx("div", {
              className: "absolute inset-0",
              style: {
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(26,26,26,1) 100%)",
              },
            }),
            i(e) &&
              s.jsx("span", {
                className:
                  "absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-black text-white",
                style: { background: "#CC0000" },
                children: i(e),
              }),
            s.jsx("button", {
              onClick: t,
              className:
                "absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white",
              style: { background: "rgba(0,0,0,0.6)" },
              children: s.jsx(wr, { size: 16 }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "overflow-y-auto",
          children: [
            s.jsxs("div", {
              className: "p-6",
              children: [
                s.jsx("h2", {
                  className: "text-white font-black text-xl mb-1",
                  children: l(e),
                }),
                s.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    s.jsx(Nn, {
                      size: 14,
                      className: "text-yellow-400 fill-yellow-400",
                    }),
                    s.jsx("span", {
                      className: "text-yellow-400 text-sm font-bold",
                      children: e.rating,
                    }),
                    s.jsxs("span", {
                      className: "text-white/40 text-sm",
                      children: ["(", e.reviews, " تقييم)"],
                    }),
                  ],
                }),
                s.jsx("p", {
                  className:
                    "text-brand-gray-light text-sm leading-relaxed mb-4",
                  children: a(e),
                }),
                s.jsxs("p", {
                  className: "text-brand-red font-black text-2xl mb-6",
                  children: [
                    r.nis,
                    e.price,
                    s.jsx("span", {
                      className: "text-sm text-white/50 font-normal",
                      children: r.perKg,
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex items-center gap-4 mb-6",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-3 p-2 rounded-2xl",
                      style: { background: "rgba(255,255,255,0.06)" },
                      children: [
                        s.jsx("button", {
                          onClick: () => x((p) => Math.max(1, p - 1)),
                          className:
                            "w-9 h-9 rounded-xl flex items-center justify-center text-white hover:bg-brand-red transition-colors",
                          style: { background: "rgba(255,255,255,0.1)" },
                          children: s.jsx(bd, { size: 16 }),
                        }),
                        s.jsx("span", {
                          className:
                            "text-white font-black text-lg w-8 text-center",
                          children: c,
                        }),
                        s.jsx("button", {
                          onClick: () => x((p) => p + 1),
                          className:
                            "w-9 h-9 rounded-xl flex items-center justify-center text-white hover:bg-brand-red transition-colors",
                          style: { background: "rgba(255,255,255,0.1)" },
                          children: s.jsx(fr, { size: 16 }),
                        }),
                      ],
                    }),
                    s.jsx("span", {
                      className: "text-white/50 text-sm",
                      children: "كغ",
                    }),
                  ],
                }),
                s.jsxs("button", {
                  onClick: () => {
                    (u(e, c), o(!0), t());
                  },
                  className:
                    "w-full py-4 rounded-2xl font-black text-white text-lg transition-all hover:scale-[1.02] active:scale-95",
                  style: {
                    background: "linear-gradient(135deg, #CC0000, #990000)",
                    boxShadow: "0 4px 20px rgba(204,0,0,0.4)",
                  },
                  children: [
                    r.addToCart,
                    " — ",
                    r.nis,
                    (e.price * c).toFixed(0),
                  ],
                }),
              ],
            }),
            f.length > 0 &&
              s.jsxs("div", {
                className: "px-6 pb-6 border-t",
                style: { borderColor: "rgba(255,255,255,0.06)" },
                children: [
                  s.jsx("p", {
                    className:
                      "text-white/50 text-xs font-bold uppercase tracking-widest mt-5 mb-3",
                    children: r.suggestedItems,
                  }),
                  s.jsx("div", {
                    className: "flex gap-3 overflow-x-auto no-scrollbar pb-1",
                    children: f.map((p) =>
                      s.jsxs(
                        "button",
                        {
                          onClick: () => n(p),
                          className:
                            "flex-shrink-0 w-32 rounded-2xl overflow-hidden text-right transition-all hover:scale-[1.04]",
                          style: {
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          },
                          children: [
                            s.jsx("img", {
                              src: p.image,
                              alt: l(p),
                              className: "w-full h-24 object-cover",
                            }),
                            s.jsxs("div", {
                              className: "p-2",
                              children: [
                                s.jsx("p", {
                                  className:
                                    "text-white text-xs font-bold line-clamp-2 leading-tight mb-1",
                                  children: l(p),
                                }),
                                s.jsxs("p", {
                                  className:
                                    "text-brand-red font-black text-sm",
                                  children: [r.nis, p.price],
                                }),
                              ],
                            }),
                          ],
                        },
                        p.id,
                      ),
                    ),
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function P0() {
  const { categoryId: e } = Rh(),
    t = Ue(),
    { t: n, name: r, badge: l } = Ae(),
    { addItem: a, setIsOpen: i } = kn(),
    [u, o] = k.useState(null),
    c = Cl.find((p) => p.id === Number(e)),
    x = dr.filter((p) => p.categoryId === Number(e)),
    f = dr
      .filter((p) => p.categoryId !== Number(e) && p.isFeatured)
      .slice(0, 4);
  return s.jsxs("div", {
    className: "min-h-screen bg-brand-black",
    children: [
      s.jsx(bn, {}),
      s.jsx(jr, {}),
      u &&
        s.jsx(E0, {
          product: u,
          onClose: () => o(null),
          onSelectSuggested: (p) => o(p),
        }),
      s.jsxs("div", {
        className: "pt-16 pb-24",
        children: [
          c &&
            s.jsxs("div", {
              className:
                "relative h-48 mx-4 mt-4 rounded-3xl overflow-hidden mb-6",
              children: [
                s.jsx("img", {
                  src: c.image,
                  alt: r(c),
                  className: "w-full h-full object-cover",
                }),
                s.jsx("div", {
                  className: "absolute inset-0",
                  style: {
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)",
                  },
                }),
                s.jsxs("div", {
                  className:
                    "absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("h1", {
                          className: "text-3xl font-black text-white",
                          children: r(c),
                        }),
                        s.jsxs("p", {
                          className: "text-white/60 text-sm",
                          children: [x.length, " منتج"],
                        }),
                      ],
                    }),
                    s.jsxs("button", {
                      onClick: () => t("/categories"),
                      className:
                        "flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white font-semibold",
                      style: {
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(8px)",
                      },
                      children: [s.jsx(jd, { size: 16 }), "رجوع"],
                    }),
                  ],
                }),
              ],
            }),
          s.jsxs("div", {
            className: "px-4 space-y-8",
            children: [
              s.jsx("section", {
                children: s.jsx("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
                  children: x.map((p, y) =>
                    s.jsxs(
                      "div",
                      {
                        className:
                          "rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1",
                        style: {
                          background: "#1A1A1A",
                          border: "1px solid rgba(255,255,255,0.06)",
                          animation: `fadeSlideUp 0.4s ease-out ${y * 0.07}s both`,
                        },
                        onClick: () => o(p),
                        children: [
                          s.jsxs("div", {
                            className: "relative h-36 overflow-hidden",
                            children: [
                              s.jsx("img", {
                                src: p.image,
                                alt: r(p),
                                className:
                                  "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                style: { background: "rgba(204,0,0,0.15)" },
                              }),
                              l(p) &&
                                s.jsx("span", {
                                  className:
                                    "absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-black text-white",
                                  style: { background: "#CC0000" },
                                  children: l(p),
                                }),
                              s.jsx("button", {
                                onClick: (w) => {
                                  (w.stopPropagation(), a(p), i(!0));
                                },
                                className:
                                  "absolute bottom-2 left-2 w-8 h-8 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110",
                                style: { background: "#CC0000" },
                                children: s.jsx(fr, { size: 16 }),
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "p-3",
                            children: [
                              s.jsx("p", {
                                className:
                                  "text-white font-bold text-sm leading-tight mb-1 line-clamp-2",
                                children: r(p),
                              }),
                              s.jsxs("div", {
                                className: "flex items-center gap-1 mb-2",
                                children: [
                                  s.jsx(Nn, {
                                    size: 11,
                                    className:
                                      "text-yellow-400 fill-yellow-400",
                                  }),
                                  s.jsx("span", {
                                    className:
                                      "text-yellow-400 text-xs font-bold",
                                    children: p.rating,
                                  }),
                                ],
                              }),
                              s.jsx("div", {
                                className: "flex items-center justify-between",
                                children: s.jsxs("span", {
                                  className: "text-brand-red font-black",
                                  children: [
                                    n.nis,
                                    p.price,
                                    s.jsx("span", {
                                      className: "text-xs text-white/40",
                                      children: n.perKg,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      p.id,
                    ),
                  ),
                }),
              }),
              f.length > 0 &&
                s.jsxs("section", {
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-3 mb-4",
                      children: [
                        s.jsx("div", {
                          className: "flex-1 h-px",
                          style: { background: "rgba(204,0,0,0.3)" },
                        }),
                        s.jsx("h2", {
                          className:
                            "text-white font-black text-lg whitespace-nowrap",
                          children: n.suggestedItems,
                        }),
                        s.jsx("div", {
                          className: "flex-1 h-px",
                          style: { background: "rgba(204,0,0,0.3)" },
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "flex gap-3 overflow-x-auto pb-2 no-scrollbar",
                      children: f.map((p) =>
                        s.jsxs(
                          "div",
                          {
                            className:
                              "flex-shrink-0 w-40 rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.03]",
                            style: {
                              background: "#1A1A1A",
                              border: "1px solid rgba(255,255,255,0.06)",
                            },
                            onClick: () => o(p),
                            children: [
                              s.jsx("img", {
                                src: p.image,
                                alt: r(p),
                                className: "w-full h-28 object-cover",
                              }),
                              s.jsxs("div", {
                                className: "p-2",
                                children: [
                                  s.jsx("p", {
                                    className:
                                      "text-white text-xs font-bold line-clamp-2 mb-1",
                                    children: r(p),
                                  }),
                                  s.jsxs("p", {
                                    className:
                                      "text-brand-red font-black text-sm",
                                    children: [n.nis, p.price],
                                  }),
                                ],
                              }),
                            ],
                          },
                          p.id,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      s.jsx("style", {
        children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
      }),
    ],
  });
}
function z0() {
  const { t: e } = Ae(),
    t = Ue(),
    [n, r] = k.useState(!1),
    [l, a] = k.useState(!1),
    [i, u] = k.useState({ name: "", phone: "", password: "", confirm: "" }),
    [o, c] = k.useState({}),
    x = (f) => {
      f.preventDefault();
      const p = {};
      if (
        (i.phone || (p.phone = "رقم الهاتف مطلوب"),
        i.password || (p.password = "كلمة المرور مطلوبة"),
        !n && !i.name && (p.name = "الاسم مطلوب"),
        !n &&
          i.password !== i.confirm &&
          (p.confirm = "كلمة المرور غير متطابقة"),
        Object.keys(p).length)
      ) {
        c(p);
        return;
      }
      t("/payment");
    };
  return s.jsxs("div", {
    className: "min-h-screen bg-brand-black",
    children: [
      s.jsx(bn, {}),
      s.jsx(jr, {}),
      s.jsxs("div", {
        className: "pt-20 pb-24 px-4 max-w-md mx-auto",
        children: [
          s.jsxs("div", {
            className: "text-center mb-8",
            style: { animation: "fadeSlideUp 0.5s ease-out" },
            children: [
              s.jsx("div", {
                className: "w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden",
                style: {
                  boxShadow: "0 0 30px rgba(204,0,0,0.4)",
                  border: "2px solid rgba(204,0,0,0.4)",
                },
                children: s.jsx("img", {
                  src: "ad--poc/logo.jpeg",
                  alt: "أبو دغش",
                  className: "w-full h-full object-cover",
                }),
              }),
              s.jsx("h1", {
                className: "text-2xl font-black text-white mb-1",
                children: n ? e.login : e.signUp,
              }),
              s.jsx("p", {
                className: "text-brand-gray-light text-sm",
                children: n
                  ? "سجل دخولك لإتمام الطلب"
                  : "أنشئ حساباً لإتمام الطلب",
              }),
            ],
          }),
          s.jsxs("form", {
            onSubmit: x,
            className: "space-y-4",
            style: { animation: "fadeSlideUp 0.5s ease-out 0.1s both" },
            children: [
              !n &&
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      className:
                        "block text-white/70 text-sm mb-2 font-semibold",
                      children: e.fullName,
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx(vi, {
                          size: 18,
                          className:
                            "absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light",
                        }),
                        s.jsx("input", {
                          type: "text",
                          placeholder: "محمد أحمد",
                          value: i.name,
                          onChange: (f) =>
                            u((p) => ({ ...p, name: f.target.value })),
                          className: "input-field pr-12",
                        }),
                      ],
                    }),
                    o.name &&
                      s.jsx("p", {
                        className: "text-red-400 text-xs mt-1",
                        children: o.name,
                      }),
                  ],
                }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-white/70 text-sm mb-2 font-semibold",
                    children: e.phone,
                  }),
                  s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx(gi, {
                        size: 18,
                        className:
                          "absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light",
                      }),
                      s.jsx("input", {
                        type: "tel",
                        placeholder: "050-0000000",
                        value: i.phone,
                        onChange: (f) =>
                          u((p) => ({ ...p, phone: f.target.value })),
                        className: "input-field pr-12",
                        dir: "ltr",
                      }),
                    ],
                  }),
                  o.phone &&
                    s.jsx("p", {
                      className: "text-red-400 text-xs mt-1",
                      children: o.phone,
                    }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-white/70 text-sm mb-2 font-semibold",
                    children: e.password,
                  }),
                  s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx(Do, {
                        size: 18,
                        className:
                          "absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light",
                      }),
                      s.jsx("input", {
                        type: l ? "text" : "password",
                        placeholder: "••••••••",
                        value: i.password,
                        onChange: (f) =>
                          u((p) => ({ ...p, password: f.target.value })),
                        className: "input-field pr-12 pl-12",
                      }),
                      s.jsx("button", {
                        type: "button",
                        onClick: () => a((f) => !f),
                        className:
                          "absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray-light hover:text-white transition-colors",
                        children: l
                          ? s.jsx(g0, { size: 18 })
                          : s.jsx(v0, { size: 18 }),
                      }),
                    ],
                  }),
                  o.password &&
                    s.jsx("p", {
                      className: "text-red-400 text-xs mt-1",
                      children: o.password,
                    }),
                ],
              }),
              !n &&
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      className:
                        "block text-white/70 text-sm mb-2 font-semibold",
                      children: e.confirmPassword,
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx(Do, {
                          size: 18,
                          className:
                            "absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light",
                        }),
                        s.jsx("input", {
                          type: l ? "text" : "password",
                          placeholder: "••••••••",
                          value: i.confirm,
                          onChange: (f) =>
                            u((p) => ({ ...p, confirm: f.target.value })),
                          className: "input-field pr-12",
                        }),
                      ],
                    }),
                    o.confirm &&
                      s.jsx("p", {
                        className: "text-red-400 text-xs mt-1",
                        children: o.confirm,
                      }),
                  ],
                }),
              s.jsxs("button", {
                type: "submit",
                className:
                  "w-full py-4 rounded-2xl font-black text-white text-lg mt-2 transition-all hover:scale-[1.02] active:scale-95",
                style: {
                  background: "linear-gradient(135deg, #CC0000, #990000)",
                  boxShadow: "0 4px 24px rgba(204,0,0,0.4)",
                },
                children: [n ? e.login : e.signUp, " ←"],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-3 my-2",
                children: [
                  s.jsx("div", { className: "flex-1 h-px bg-white/10" }),
                  s.jsx("span", {
                    className: "text-white/40 text-xs",
                    children: "أو",
                  }),
                  s.jsx("div", { className: "flex-1 h-px bg-white/10" }),
                ],
              }),
              s.jsx("button", {
                type: "button",
                onClick: () => t("/payment"),
                className:
                  "w-full py-3 rounded-2xl font-bold text-white/70 text-base transition-all hover:text-white hover:border-brand-red border border-white/10",
                children: e.continueAsGuest,
              }),
            ],
          }),
          s.jsxs("p", {
            className: "text-center text-brand-gray-light text-sm mt-6",
            children: [
              n ? e.noAccount : e.haveAccount,
              " ",
              s.jsx("button", {
                onClick: () => r((f) => !f),
                className: "text-brand-red font-bold hover:underline",
                children: n ? e.signUp : e.login,
              }),
            ],
          }),
        ],
      }),
      s.jsx("style", {
        children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
      }),
    ],
  });
}
const A0 = [
  {
    id: "card",
    icon: s.jsx(mi, { size: 24 }),
    label_ar: "بطاقة ائتمان / ڤيزا",
    label_he: "כרטיס אשראי / ויזה",
    desc_ar: "Visa • Mastercard • American Express",
    desc_he: "Visa • Mastercard • American Express",
    color: "#1A56DB",
    emoji: "💳",
  },
  {
    id: "apple",
    icon: null,
    label_ar: "Apple Pay",
    label_he: "Apple Pay",
    desc_ar: "الدفع السريع بجهاز Apple",
    desc_he: "תשלום מהיר עם מכשיר Apple",
    color: "#1A1A1A",
    emoji: "",
    appleIcon: !0,
  },
  {
    id: "google",
    icon: null,
    label_ar: "Google Pay",
    label_he: "Google Pay",
    desc_ar: "الدفع السريع بجهاز Android",
    desc_he: "תשלום מהיר עם מכשיר Android",
    color: "#1A1A1A",
    emoji: "",
    googleIcon: !0,
  },
  {
    id: "cash",
    icon: s.jsx(f0, { size: 24 }),
    label_ar: "دفع نقدي عند الاستلام",
    label_he: "תשלום במזומן",
    desc_ar: "ادفع نقداً عند وصول المندوب",
    desc_he: "שלם במזומן כשהשליח מגיע",
    color: "#16A34A",
    emoji: "💵",
  },
];
function T0() {
  const { t: e, lang: t, name: n } = Ae(),
    { items: r, subtotal: l, deliveryFee: a, total: i, clearCart: u } = kn(),
    o = Ue(),
    [c, x] = k.useState(null),
    [f, p] = k.useState(""),
    [y, w] = k.useState(""),
    [g, C] = k.useState(""),
    [h, d] = k.useState(""),
    [m, j] = k.useState(!1),
    S = () => {
      !c ||
        !f ||
        (j(!0),
        setTimeout(() => {
          (u(), o("/confirmation"));
        }, 2e3));
    };
  return s.jsxs("div", {
    className: "min-h-screen bg-brand-black",
    children: [
      s.jsx(bn, {}),
      s.jsx(jr, {}),
      s.jsxs("div", {
        className: "pt-20 pb-24 px-4 max-w-2xl mx-auto space-y-6",
        children: [
          s.jsxs("div", {
            className: "rounded-3xl p-6",
            style: {
              background: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.08)",
            },
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-3 mb-5",
                children: [
                  s.jsx("div", {
                    className:
                      "w-9 h-9 rounded-xl flex items-center justify-center",
                    style: {
                      background: "linear-gradient(135deg, #CC0000, #990000)",
                    },
                    children: s.jsx(Nd, { size: 18, className: "text-white" }),
                  }),
                  s.jsx("h2", {
                    className: "text-white font-black text-lg",
                    children: e.address,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "space-y-3",
                children: [
                  s.jsx("input", {
                    type: "text",
                    placeholder:
                      t === "ar"
                        ? "اسم الشارع ورقم البيت"
                        : "שם רחוב ומספר בית",
                    value: f,
                    onChange: (b) => p(b.target.value),
                    className: "input-field",
                  }),
                  s.jsx("input", {
                    type: "text",
                    placeholder: t === "ar" ? "المدينة" : "עיר",
                    value: y,
                    onChange: (b) => w(b.target.value),
                    className: "input-field",
                  }),
                  s.jsx("textarea", {
                    placeholder:
                      t === "ar"
                        ? "ملاحظات للمندوب (اختياري)"
                        : "הערות לשליח (אופציונלי)",
                    value: g,
                    onChange: (b) => C(b.target.value),
                    className: "input-field resize-none",
                    rows: 2,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-2 mt-4 p-3 rounded-xl",
                style: {
                  background: "rgba(204,0,0,0.1)",
                  border: "1px solid rgba(204,0,0,0.2)",
                },
                children: [
                  s.jsx(kd, { size: 16, className: "text-brand-red" }),
                  s.jsx("span", {
                    className: "text-white/70 text-sm",
                    children:
                      t === "ar" ? "وقت التوصيل المتوقع:" : "זמן אספקה משוער:",
                  }),
                  s.jsxs("span", {
                    className: "text-white font-bold text-sm",
                    children: ["30–45 ", t === "ar" ? "دقيقة" : "דקות"],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "rounded-3xl p-6",
            style: {
              background: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.08)",
            },
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-3 mb-5",
                children: [
                  s.jsx("div", {
                    className:
                      "w-9 h-9 rounded-xl flex items-center justify-center",
                    style: {
                      background: "linear-gradient(135deg, #CC0000, #990000)",
                    },
                    children: s.jsx(mi, { size: 18, className: "text-white" }),
                  }),
                  s.jsx("h2", {
                    className: "text-white font-black text-lg",
                    children: e.paymentMethod,
                  }),
                ],
              }),
              s.jsx("div", {
                className: "space-y-3",
                children: A0.map((b) =>
                  s.jsxs(
                    "button",
                    {
                      onClick: () => x(b.id),
                      className:
                        "w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 text-right",
                      style: {
                        background:
                          c === b.id
                            ? "rgba(204,0,0,0.1)"
                            : "rgba(255,255,255,0.04)",
                        border:
                          c === b.id
                            ? "2px solid #CC0000"
                            : "2px solid rgba(255,255,255,0.06)",
                        transform: c === b.id ? "scale(1.01)" : "scale(1)",
                      },
                      children: [
                        s.jsx("div", {
                          className:
                            "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-black",
                          style: { background: `${b.color}22`, color: b.color },
                          children: b.appleIcon
                            ? s.jsx("svg", {
                                viewBox: "0 0 24 24",
                                width: "24",
                                height: "24",
                                fill: "white",
                                children: s.jsx("path", {
                                  d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z",
                                }),
                              })
                            : b.googleIcon
                              ? s.jsxs("svg", {
                                  viewBox: "0 0 24 24",
                                  width: "24",
                                  height: "24",
                                  children: [
                                    s.jsx("path", {
                                      fill: "#4285F4",
                                      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                    }),
                                    s.jsx("path", {
                                      fill: "#34A853",
                                      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                    }),
                                    s.jsx("path", {
                                      fill: "#FBBC05",
                                      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                    }),
                                    s.jsx("path", {
                                      fill: "#EA4335",
                                      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                    }),
                                  ],
                                })
                              : s.jsx("span", {
                                  style: { fontSize: 22 },
                                  children: b.emoji,
                                }),
                        }),
                        s.jsxs("div", {
                          className: "flex-1",
                          children: [
                            s.jsx("p", {
                              className: "text-white font-bold text-base",
                              children: t === "ar" ? b.label_ar : b.label_he,
                            }),
                            s.jsx("p", {
                              className: "text-white/50 text-xs",
                              children: t === "ar" ? b.desc_ar : b.desc_he,
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className:
                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all",
                          style: {
                            background: c === b.id ? "#CC0000" : "transparent",
                            border:
                              c === b.id
                                ? "2px solid #CC0000"
                                : "2px solid rgba(255,255,255,0.3)",
                          },
                          children:
                            c === b.id &&
                            s.jsx(h0, { size: 12, className: "text-white" }),
                        }),
                      ],
                    },
                    b.id,
                  ),
                ),
              }),
              c === "card" &&
                s.jsxs("div", {
                  className: "mt-4 space-y-3",
                  style: { animation: "fadeSlideUp 0.3s ease-out" },
                  children: [
                    s.jsx("input", {
                      type: "text",
                      placeholder: "0000 0000 0000 0000",
                      value: h,
                      onChange: (b) =>
                        d(
                          b.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16)
                            .replace(/(.{4})/g, "$1 ")
                            .trim(),
                        ),
                      className:
                        "input-field text-center tracking-widest font-bold",
                      dir: "ltr",
                    }),
                    s.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          placeholder: "MM/YY",
                          className: "input-field text-center",
                          dir: "ltr",
                        }),
                        s.jsx("input", {
                          type: "text",
                          placeholder: "CVV",
                          className: "input-field text-center",
                          dir: "ltr",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center gap-2 p-3 rounded-xl",
                      style: {
                        background: "rgba(22,163,74,0.1)",
                        border: "1px solid rgba(22,163,74,0.3)",
                      },
                      children: [
                        s.jsx("span", {
                          className: "text-green-400 text-sm",
                          children: "🔒",
                        }),
                        s.jsx("span", {
                          className: "text-green-400 text-xs font-semibold",
                          children:
                            t === "ar"
                              ? "دفع آمن ومشفر بواسطة Tranzila"
                              : "תשלום מאובטח ומוצפן באמצעות Tranzila",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          s.jsxs("div", {
            className: "rounded-3xl p-6",
            style: {
              background: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.08)",
            },
            children: [
              s.jsx("h2", {
                className: "text-white font-black text-lg mb-4",
                children: e.orderDetails,
              }),
              s.jsxs("div", {
                className: "space-y-2 text-sm",
                children: [
                  r.map((b) =>
                    s.jsxs(
                      "div",
                      {
                        className: "flex justify-between text-white/70",
                        children: [
                          s.jsxs("span", { children: [n(b), " × ", b.qty] }),
                          s.jsxs("span", {
                            className: "text-white",
                            children: [e.nis, (b.price * b.qty).toFixed(0)],
                          }),
                        ],
                      },
                      b.id,
                    ),
                  ),
                  s.jsxs("div", {
                    className: "border-t border-white/10 pt-2 mt-2 space-y-2",
                    children: [
                      s.jsxs("div", {
                        className: "flex justify-between text-white/60",
                        children: [
                          s.jsx("span", { children: e.subtotal }),
                          s.jsxs("span", { children: [e.nis, l.toFixed(0)] }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex justify-between text-white/60",
                        children: [
                          s.jsx("span", { children: e.delivery }),
                          s.jsx("span", {
                            className: a === 0 ? "text-green-400" : "",
                            children: a === 0 ? e.free : `${e.nis}${a}`,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "flex justify-between text-white font-black text-lg pt-2 border-t border-white/10",
                        children: [
                          s.jsx("span", { children: e.total }),
                          s.jsxs("span", {
                            className: "text-brand-red",
                            children: [e.nis, i.toFixed(0)],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("button", {
            onClick: S,
            disabled: !c || !f || m,
            className:
              "w-full py-5 rounded-2xl font-black text-white text-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden",
            style: {
              background: "linear-gradient(135deg, #CC0000, #990000)",
              boxShadow: "0 4px 30px rgba(204,0,0,0.5)",
            },
            children: m
              ? s.jsxs("span", {
                  className: "flex items-center justify-center gap-3",
                  children: [
                    s.jsxs("svg", {
                      className: "animate-spin w-6 h-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        s.jsx("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "rgba(255,255,255,0.3)",
                          strokeWidth: "4",
                        }),
                        s.jsx("path", {
                          d: "M12 2a10 10 0 0110 10",
                          stroke: "white",
                          strokeWidth: "4",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                    t === "ar" ? "جاري المعالجة..." : "מעבד...",
                  ],
                })
              : s.jsxs("span", {
                  children: [e.placeOrder, " — ", e.nis, i.toFixed(0), " ←"],
                }),
          }),
          !c &&
            s.jsx("p", {
              className: "text-center text-red-400 text-sm",
              children: "* يرجى اختيار طريقة الدفع",
            }),
          c &&
            !f &&
            s.jsx("p", {
              className: "text-center text-red-400 text-sm",
              children: "* يرجى إدخال عنوان التوصيل",
            }),
        ],
      }),
      s.jsx("style", {
        children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
      }),
    ],
  });
}
const Bo = "ORD-" + Math.floor(1e3 + Math.random() * 9e3),
  Vo = [
    {
      icon: cn,
      label_ar: "تم تأكيد الطلب",
      label_he: "ההזמנה אושרה",
      done: !0,
    },
    { icon: xi, label_ar: "جاري التحضير", label_he: "בהכנה", done: !1 },
    { icon: dt, label_ar: "في الطريق إليك", label_he: "בדרך אליך", done: !1 },
    { icon: j0, label_ar: "تم التسليم", label_he: "נמסר", done: !1 },
  ];
function L0() {
  const { t: e, lang: t } = Ae(),
    n = Ue(),
    [r, l] = k.useState(0),
    [a, i] = k.useState(!1);
  return (
    k.useEffect(() => {
      i(!0);
      const u = setTimeout(() => i(!1), 3e3);
      return () => clearTimeout(u);
    }, []),
    s.jsxs("div", {
      className: "min-h-screen bg-brand-black",
      children: [
        s.jsx(bn, {}),
        a &&
          s.jsx("div", {
            className: "fixed inset-0 z-50 pointer-events-none overflow-hidden",
            children: [...Array(20)].map((u, o) =>
              s.jsx(
                "div",
                {
                  className: "absolute w-2 h-2 rounded-full",
                  style: {
                    left: `${Math.random() * 100}%`,
                    top: "-10px",
                    background:
                      o % 3 === 0
                        ? "#CC0000"
                        : o % 3 === 1
                          ? "#FFFFFF"
                          : "#990000",
                    animation: `confettiFall ${1 + Math.random() * 2}s ease-in ${Math.random() * 0.5}s forwards`,
                  },
                },
                o,
              ),
            ),
          }),
        s.jsxs("div", {
          className: "pt-20 pb-24 px-4 max-w-md mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center py-10",
              children: [
                s.jsx("div", {
                  className:
                    "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6",
                  style: {
                    background: "linear-gradient(135deg, #16A34A, #15803D)",
                    boxShadow: "0 0 40px rgba(22,163,74,0.5)",
                    animation: "scaleIn 0.5s ease-out",
                  },
                  children: s.jsx(cn, { size: 48, className: "text-white" }),
                }),
                s.jsx("h1", {
                  className: "text-3xl font-black text-white mb-2",
                  style: { animation: "fadeSlideUp 0.5s ease-out 0.2s both" },
                  children: e.orderConfirmed,
                }),
                s.jsxs("p", {
                  className: "text-brand-gray-light text-sm mb-1",
                  style: { animation: "fadeSlideUp 0.5s ease-out 0.3s both" },
                  children: [
                    e.orderId,
                    ":",
                    " ",
                    s.jsx("span", {
                      className: "text-brand-red font-black",
                      children: Bo,
                    }),
                  ],
                }),
                s.jsxs("p", {
                  className: "text-brand-gray-light text-sm",
                  style: { animation: "fadeSlideUp 0.5s ease-out 0.4s both" },
                  children: [
                    e.estimatedDelivery,
                    ":",
                    " ",
                    s.jsxs("span", {
                      className: "text-white font-bold",
                      children: ["30–45 ", e.minutes],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "rounded-3xl p-6 mb-6",
              style: {
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.08)",
                animation: "fadeSlideUp 0.5s ease-out 0.5s both",
              },
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-9 h-9 rounded-xl flex items-center justify-center",
                      style: { background: "rgba(255,255,255,0.06)" },
                      children: s.jsx(b0, {
                        size: 18,
                        className: "text-white/60",
                      }),
                    }),
                    s.jsx("h2", {
                      className: "text-white font-black",
                      children: t === "ar" ? "إيصال الطلب" : "קבלה",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "space-y-2 text-sm border-t border-white/10 pt-4",
                  children: [
                    s.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        s.jsx("span", {
                          className: "text-white/60",
                          children: e.orderId,
                        }),
                        s.jsx("span", {
                          className: "text-white font-mono",
                          children: Bo,
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        s.jsx("span", {
                          className: "text-white/60",
                          children: t === "ar" ? "التاريخ" : "תאריך",
                        }),
                        s.jsx("span", {
                          className: "text-white",
                          children: new Date().toLocaleDateString(
                            t === "ar" ? "ar-IL" : "he-IL",
                          ),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        s.jsx("span", {
                          className: "text-white/60",
                          children: t === "ar" ? "طريقة الدفع" : "אמצעי תשלום",
                        }),
                        s.jsxs("span", {
                          className: "text-white flex items-center gap-1.5",
                          children: [
                            s.jsx(mi, { size: 14, className: "inline" }),
                            " ",
                            t === "ar" ? "بطاقة ائتمان" : "כרטיס אשראי",
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "border-t border-white/10 pt-2 flex justify-between font-black text-base",
                      children: [
                        s.jsx("span", {
                          className: "text-white",
                          children: e.total,
                        }),
                        s.jsxs("span", {
                          className: "text-brand-red",
                          children: [e.nis, "285"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "rounded-3xl p-6 mb-8",
              style: {
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.08)",
                animation: "fadeSlideUp 0.5s ease-out 0.6s both",
              },
              children: [
                s.jsx("h2", {
                  className: "text-white font-black mb-6",
                  children: t === "ar" ? "تتبع طلبك" : "עקוב אחר ההזמנה",
                }),
                s.jsxs("div", {
                  className: "relative",
                  children: [
                    s.jsx("div", {
                      className: "absolute top-5 right-5 left-5 h-0.5",
                      style: { background: "rgba(255,255,255,0.1)" },
                    }),
                    s.jsx("div", {
                      className:
                        "absolute top-5 right-5 h-0.5 transition-all duration-1000",
                      style: {
                        background: "linear-gradient(90deg, #CC0000, #FF1A1A)",
                        width: `${(r / (Vo.length - 1)) * 80}%`,
                      },
                    }),
                    s.jsx("div", {
                      className: "flex justify-between relative z-10",
                      children: Vo.map((u, o) => {
                        const c = u.icon,
                          x = o === r,
                          f = o < r;
                        return s.jsxs(
                          "div",
                          {
                            className: "flex flex-col items-center gap-2 w-16",
                            children: [
                              s.jsx("button", {
                                onClick: () => l(o),
                                className:
                                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                                style: {
                                  background: f
                                    ? "#16A34A"
                                    : x
                                      ? "#CC0000"
                                      : "rgba(255,255,255,0.08)",
                                  border: x
                                    ? "2px solid rgba(204,0,0,0.5)"
                                    : "2px solid transparent",
                                  boxShadow: x
                                    ? "0 0 15px rgba(204,0,0,0.4)"
                                    : "none",
                                },
                                children: s.jsx(c, {
                                  size: 18,
                                  className: "text-white",
                                }),
                              }),
                              s.jsx("p", {
                                className:
                                  "text-white/60 text-xs text-center leading-tight",
                                children: t === "ar" ? u.label_ar : u.label_he,
                              }),
                            ],
                          },
                          o,
                        );
                      }),
                    }),
                  ],
                }),
                s.jsx("p", {
                  className: "text-center text-white/40 text-xs mt-6",
                  children:
                    t === "ar"
                      ? "* اضغط على مرحلة لمحاكاة التتبع"
                      : "* לחץ על שלב לסימולציית מעקב",
                }),
              ],
            }),
            s.jsx("button", {
              onClick: () => n("/categories"),
              className:
                "w-full py-4 rounded-2xl font-black text-white text-lg transition-all hover:scale-[1.02] active:scale-95",
              style: {
                background: "linear-gradient(135deg, #CC0000, #990000)",
                boxShadow: "0 4px 20px rgba(204,0,0,0.4)",
              },
              children: e.backToShopping,
            }),
          ],
        }),
        s.jsx("style", {
          children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes confettiFall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `,
        }),
      ],
    })
  );
}
const Et = {
    pending: "#F59E0B",
    confirmed: "#3B82F6",
    preparing: "#8B5CF6",
    delivering: "#F97316",
    delivered: "#16A34A",
  },
  $r = {
    pending: "قيد الانتظار",
    confirmed: "مؤكد",
    preparing: "جاري التحضير",
    delivering: "في التوصيل",
    delivered: "تم التوصيل",
  };
function Br({ icon: e, label: t, value: n, sub: r, color: l }) {
  return s.jsxs("div", {
    className: "rounded-2xl p-5",
    style: {
      background: "#1A1A1A",
      border: "1px solid rgba(255,255,255,0.06)",
    },
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
          s.jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center",
            style: { background: `${l}22` },
            children: s.jsx(e, { size: 20, style: { color: l } }),
          }),
          s.jsx("span", {
            className: "text-green-400 text-xs font-bold",
            children: "+12%",
          }),
        ],
      }),
      s.jsx("p", {
        className: "text-2xl font-black text-white mb-1",
        children: n,
      }),
      s.jsx("p", { className: "text-white/60 text-sm", children: t }),
      r && s.jsx("p", { className: "text-white/30 text-xs mt-1", children: r }),
    ],
  });
}
function Wo({ title: e, onClose: t, children: n }) {
  return s.jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: { background: "rgba(0,0,0,0.85)" },
    children: s.jsxs("div", {
      className: "w-full max-w-lg rounded-3xl overflow-hidden",
      style: { background: "#1A1A1A", border: "1px solid rgba(204,0,0,0.3)" },
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between p-6 border-b",
          style: { borderColor: "rgba(255,255,255,0.08)" },
          children: [
            s.jsx("h3", {
              className: "text-white font-black text-lg",
              children: e,
            }),
            s.jsx("button", {
              onClick: t,
              className: "text-white/40 hover:text-white transition-colors",
              children: s.jsx(wr, { size: 20 }),
            }),
          ],
        }),
        s.jsx("div", { className: "p-6", children: n }),
      ],
    }),
  });
}
function F0() {
  const { lang: e, toggleLang: t } = Ae(),
    n = Ue(),
    [r, l] = k.useState("dashboard"),
    [a, i] = k.useState(Cl),
    [u, o] = k.useState(dr),
    [c, x] = k.useState(vd),
    [f, p] = k.useState(!1),
    [y, w] = k.useState(!1),
    [g, C] = k.useState(null),
    [h, d] = k.useState({ name_ar: "", name_he: "", image: "" }),
    [m, j] = k.useState({
      name_ar: "",
      name_he: "",
      price: "",
      description_ar: "",
      image: "",
      categoryId: "",
    }),
    S = [
      { id: "dashboard", label: "لوحة التحكم", icon: k0 },
      { id: "categories", label: "الفئات", icon: S0 },
      { id: "products", label: "المنتجات", icon: xi },
      { id: "orders", label: "الطلبات", icon: ga },
    ],
    b = () => {
      (i(
        g
          ? (v) => v.map((z) => (z.id === g.id ? { ...z, ...h } : z))
          : (v) => [
              ...v,
              { id: Date.now(), ...h, count: 0, tag_ar: "", tag_he: "" },
            ],
      ),
        p(!1),
        C(null),
        d({ name_ar: "", name_he: "", image: "" }));
    },
    P = (v) => i((z) => z.filter((ve) => ve.id !== v)),
    A = (v) => o((z) => z.filter((ve) => ve.id !== v)),
    B = () => {
      (o(
        g
          ? (v) =>
              v.map((z) =>
                z.id === g.id ? { ...z, ...m, price: Number(m.price) } : z,
              )
          : (v) => [
              ...v,
              {
                id: Date.now(),
                ...m,
                price: Number(m.price),
                isFeatured: !1,
                badge_ar: "",
                badge_he: "",
                rating: 4.5,
                reviews: 0,
                description_he: m.description_ar,
              },
            ],
      ),
        w(!1),
        C(null),
        j({
          name_ar: "",
          name_he: "",
          price: "",
          description_ar: "",
          image: "",
          categoryId: "",
        }));
    };
  return s.jsxs("div", {
    className: "min-h-screen flex",
    style: { background: "#0A0A0A" },
    children: [
      s.jsxs("div", {
        className: "hidden md:flex flex-col w-64 border-r py-6",
        style: {
          background: "#111111",
          borderColor: "rgba(204,0,0,0.2)",
          position: "sticky",
          top: 0,
          height: "100vh",
        },
        children: [
          s.jsxs("div", {
            className: "px-6 mb-8",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-3 mb-1",
                children: [
                  s.jsx("div", {
                    className:
                      "w-9 h-9 rounded-xl flex items-center justify-center",
                    style: {
                      background: "linear-gradient(135deg, #CC0000, #990000)",
                    },
                    children: s.jsx("span", {
                      style: {
                        fontSize: "14px",
                        fontWeight: 900,
                        color: "white",
                        fontFamily: "Cairo, sans-serif",
                      },
                      children: "أد",
                    }),
                  }),
                  s.jsx("span", {
                    className: "font-black text-white text-lg",
                    children: "أبو دغش",
                  }),
                ],
              }),
              s.jsx("span", {
                className: "text-brand-red text-xs font-bold",
                children: "لوحة الإدارة",
              }),
            ],
          }),
          s.jsx("nav", {
            className: "flex-1 px-3 space-y-1",
            children: S.map((v) => {
              const z = v.icon;
              return s.jsxs(
                "button",
                {
                  onClick: () => l(v.id),
                  className:
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right transition-all duration-200 group",
                  style: {
                    background:
                      r === v.id ? "rgba(204,0,0,0.15)" : "transparent",
                    borderRight:
                      r === v.id
                        ? "3px solid #CC0000"
                        : "3px solid transparent",
                  },
                  children: [
                    s.jsx(z, {
                      size: 18,
                      className:
                        r === v.id
                          ? "text-brand-red"
                          : "text-white/40 group-hover:text-white/70",
                    }),
                    s.jsx("span", {
                      className: `text-sm font-bold ${r === v.id ? "text-white" : "text-white/50 group-hover:text-white/70"}`,
                      children: v.label,
                    }),
                  ],
                },
                v.id,
              );
            }),
          }),
          s.jsxs("div", {
            className: "px-3 space-y-2 mt-4",
            children: [
              s.jsxs("button", {
                onClick: t,
                className:
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right text-white/40 hover:text-white/70 transition-colors text-sm",
                children: [
                  s.jsx(y0, { size: 18 }),
                  s.jsx("span", { children: e === "ar" ? "עברית" : "العربية" }),
                ],
              }),
              s.jsxs("button", {
                onClick: () => n("/"),
                className:
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right text-white/40 hover:text-white/70 transition-colors text-sm",
                children: [
                  s.jsx(jd, { size: 18 }),
                  s.jsx("span", { children: "العودة للمتجر" }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14",
        style: {
          background: "#111111",
          borderBottom: "1px solid rgba(204,0,0,0.2)",
        },
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              s.jsx("div", {
                className:
                  "w-8 h-8 rounded-lg flex items-center justify-center",
                style: {
                  background: "linear-gradient(135deg, #CC0000, #990000)",
                },
                children: s.jsx("span", {
                  style: {
                    fontSize: "12px",
                    fontWeight: 900,
                    color: "white",
                    fontFamily: "Cairo, sans-serif",
                  },
                  children: "أد",
                }),
              }),
              s.jsx("span", {
                className: "text-white font-black text-sm",
                children: "لوحة الإدارة",
              }),
            ],
          }),
          s.jsx("button", {
            onClick: () => n("/"),
            className: "text-white/50 text-xs",
            children: "← المتجر",
          }),
        ],
      }),
      s.jsxs("div", {
        className: "flex-1 overflow-auto",
        children: [
          s.jsx("div", {
            className:
              "md:hidden flex gap-1 overflow-x-auto no-scrollbar p-2 mt-14",
            style: {
              background: "#111111",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            },
            children: S.map((v) =>
              s.jsx(
                "button",
                {
                  onClick: () => l(v.id),
                  className:
                    "flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                  style: {
                    background:
                      r === v.id ? "#CC0000" : "rgba(255,255,255,0.06)",
                    color: r === v.id ? "white" : "rgba(255,255,255,0.5)",
                  },
                  children: v.label,
                },
                v.id,
              ),
            ),
          }),
          s.jsxs("div", {
            className: "p-4 md:p-8 max-w-6xl",
            children: [
              r === "dashboard" &&
                s.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("h1", {
                          className: "text-2xl font-black text-white",
                          children: "مرحباً، أبو دغش",
                        }),
                        s.jsx("p", {
                          className: "text-white/50 text-sm",
                          children: "هذا ملخص نشاط المتجر اليوم",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                      children: [
                        s.jsx(Br, {
                          icon: x0,
                          label: "إجمالي المبيعات",
                          value: "₪3,240",
                          sub: "اليوم",
                          color: "#CC0000",
                        }),
                        s.jsx(Br, {
                          icon: ga,
                          label: "طلبات جديدة",
                          value: "18",
                          sub: "اليوم",
                          color: "#8B5CF6",
                        }),
                        s.jsx(Br, {
                          icon: _d,
                          label: "عملاء جدد",
                          value: "7",
                          sub: "اليوم",
                          color: "#3B82F6",
                        }),
                        s.jsx(Br, {
                          icon: dt,
                          label: "قيد التوصيل",
                          value: "5",
                          sub: "الآن",
                          color: "#F97316",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "rounded-2xl overflow-hidden",
                      style: {
                        background: "#1A1A1A",
                        border: "1px solid rgba(255,255,255,0.06)",
                      },
                      children: [
                        s.jsxs("div", {
                          className:
                            "flex items-center justify-between p-5 border-b",
                          style: { borderColor: "rgba(255,255,255,0.06)" },
                          children: [
                            s.jsx("h2", {
                              className: "text-white font-black",
                              children: "أحدث الطلبات",
                            }),
                            s.jsx("button", {
                              onClick: () => l("orders"),
                              className:
                                "text-brand-red text-sm font-bold hover:underline",
                              children: "عرض الكل",
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className: "divide-y",
                          style: { borderColor: "rgba(255,255,255,0.04)" },
                          children: c
                            .slice(0, 4)
                            .map((v) =>
                              s.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between px-5 py-4",
                                  children: [
                                    s.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white",
                                          style: { background: "#2A2A2A" },
                                          children: v.customer[0],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("p", {
                                              className:
                                                "text-white font-bold text-sm",
                                              children: v.customer,
                                            }),
                                            s.jsxs("p", {
                                              className:
                                                "text-white/40 text-xs",
                                              children: [
                                                v.id,
                                                " · ",
                                                v.items,
                                                " منتجات",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        s.jsxs("span", {
                                          className:
                                            "text-white font-bold text-sm",
                                          children: ["₪", v.total],
                                        }),
                                        s.jsx("span", {
                                          className:
                                            "px-3 py-1 rounded-full text-xs font-black",
                                          style: {
                                            background: `${Et[v.status]}22`,
                                            color: Et[v.status],
                                          },
                                          children: $r[v.status],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                v.id,
                              ),
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
              r === "categories" &&
                s.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("h1", {
                              className: "text-2xl font-black text-white",
                              children: "الفئات",
                            }),
                            s.jsxs("p", {
                              className: "text-white/50 text-sm",
                              children: [a.length, " فئة"],
                            }),
                          ],
                        }),
                        s.jsxs("button", {
                          onClick: () => {
                            (C(null),
                              d({ name_ar: "", name_he: "", image: "" }),
                              p(!0));
                          },
                          className:
                            "flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white transition-all hover:scale-105",
                          style: {
                            background:
                              "linear-gradient(135deg, #CC0000, #990000)",
                          },
                          children: [s.jsx(fr, { size: 18 }), "إضافة فئة"],
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: a.map((v) =>
                        s.jsxs(
                          "div",
                          {
                            className: "rounded-2xl overflow-hidden group",
                            style: {
                              background: "#1A1A1A",
                              border: "1px solid rgba(255,255,255,0.06)",
                            },
                            children: [
                              s.jsxs("div", {
                                className: "relative h-32 overflow-hidden",
                                children: [
                                  s.jsx("img", {
                                    src: v.image,
                                    alt: v.name_ar,
                                    className:
                                      "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                                  }),
                                  s.jsx("div", {
                                    className: "absolute inset-0",
                                    style: {
                                      background:
                                        "linear-gradient(180deg, transparent, rgba(0,0,0,0.6))",
                                    },
                                  }),
                                  s.jsxs("div", {
                                    className:
                                      "absolute top-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [
                                      s.jsx("button", {
                                        onClick: () => {
                                          (C(v),
                                            d({
                                              name_ar: v.name_ar,
                                              name_he: v.name_he,
                                              image: v.image,
                                            }),
                                            p(!0));
                                        },
                                        className:
                                          "w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors",
                                        style: {
                                          background: "rgba(0,0,0,0.7)",
                                        },
                                        children: s.jsx(Uo, { size: 14 }),
                                      }),
                                      s.jsx("button", {
                                        onClick: () => P(v.id),
                                        className:
                                          "w-8 h-8 rounded-lg flex items-center justify-center text-red-400 transition-colors",
                                        style: {
                                          background: "rgba(0,0,0,0.7)",
                                        },
                                        children: s.jsx(va, { size: 14 }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "p-4",
                                children: [
                                  s.jsx("p", {
                                    className: "text-white font-black",
                                    children: v.name_ar,
                                  }),
                                  s.jsx("p", {
                                    className: "text-white/40 text-sm",
                                    children: v.name_he,
                                  }),
                                  s.jsxs("p", {
                                    className: "text-white/30 text-xs mt-1",
                                    children: [v.count, " منتج"],
                                  }),
                                ],
                              }),
                            ],
                          },
                          v.id,
                        ),
                      ),
                    }),
                  ],
                }),
              r === "products" &&
                s.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("h1", {
                              className: "text-2xl font-black text-white",
                              children: "المنتجات",
                            }),
                            s.jsxs("p", {
                              className: "text-white/50 text-sm",
                              children: [u.length, " منتج"],
                            }),
                          ],
                        }),
                        s.jsxs("button", {
                          onClick: () => {
                            (C(null),
                              j({
                                name_ar: "",
                                name_he: "",
                                price: "",
                                description_ar: "",
                                image: "",
                                categoryId: "",
                              }),
                              w(!0));
                          },
                          className:
                            "flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white transition-all hover:scale-105",
                          style: {
                            background:
                              "linear-gradient(135deg, #CC0000, #990000)",
                          },
                          children: [s.jsx(fr, { size: 18 }), "إضافة منتج"],
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "rounded-2xl overflow-hidden",
                      style: {
                        background: "#1A1A1A",
                        border: "1px solid rgba(255,255,255,0.06)",
                      },
                      children: s.jsxs("table", {
                        className: "w-full",
                        children: [
                          s.jsx("thead", {
                            children: s.jsxs("tr", {
                              style: {
                                borderBottom:
                                  "1px solid rgba(255,255,255,0.06)",
                              },
                              children: [
                                s.jsx("th", {
                                  className:
                                    "text-right text-white/40 text-xs font-bold p-4",
                                  children: "المنتج",
                                }),
                                s.jsx("th", {
                                  className:
                                    "text-right text-white/40 text-xs font-bold p-4 hidden md:table-cell",
                                  children: "الفئة",
                                }),
                                s.jsx("th", {
                                  className:
                                    "text-right text-white/40 text-xs font-bold p-4",
                                  children: "السعر",
                                }),
                                s.jsx("th", {
                                  className:
                                    "text-right text-white/40 text-xs font-bold p-4 hidden md:table-cell",
                                  children: "التقييم",
                                }),
                                s.jsx("th", {
                                  className:
                                    "text-right text-white/40 text-xs font-bold p-4",
                                  children: "إجراءات",
                                }),
                              ],
                            }),
                          }),
                          s.jsx("tbody", {
                            children: u.map((v) => {
                              const z = a.find((ve) => ve.id === v.categoryId);
                              return s.jsxs(
                                "tr",
                                {
                                  className:
                                    "transition-colors hover:bg-white/[0.02]",
                                  style: {
                                    borderBottom:
                                      "1px solid rgba(255,255,255,0.04)",
                                  },
                                  children: [
                                    s.jsx("td", {
                                      className: "p-4",
                                      children: s.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          s.jsx("img", {
                                            src: v.image,
                                            alt: v.name_ar,
                                            className:
                                              "w-10 h-10 rounded-xl object-cover",
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className:
                                                  "text-white font-bold text-sm",
                                                children: v.name_ar,
                                              }),
                                              s.jsx("p", {
                                                className:
                                                  "text-white/40 text-xs line-clamp-1",
                                                children: v.name_he,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    s.jsx("td", {
                                      className: "p-4 hidden md:table-cell",
                                      children: s.jsx("span", {
                                        className: "text-white/60 text-sm",
                                        children:
                                          z == null ? void 0 : z.name_ar,
                                      }),
                                    }),
                                    s.jsx("td", {
                                      className: "p-4",
                                      children: s.jsxs("span", {
                                        className: "text-brand-red font-black",
                                        children: ["₪", v.price],
                                      }),
                                    }),
                                    s.jsx("td", {
                                      className: "p-4 hidden md:table-cell",
                                      children: s.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          s.jsx(Nn, {
                                            size: 13,
                                            className:
                                              "text-yellow-400 fill-yellow-400",
                                          }),
                                          s.jsx("span", {
                                            className: "text-white text-sm",
                                            children: v.rating,
                                          }),
                                        ],
                                      }),
                                    }),
                                    s.jsx("td", {
                                      className: "p-4",
                                      children: s.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          s.jsx("button", {
                                            onClick: () => {
                                              (C(v),
                                                j({
                                                  name_ar: v.name_ar,
                                                  name_he: v.name_he,
                                                  price: String(v.price),
                                                  description_ar:
                                                    v.description_ar,
                                                  image: v.image,
                                                  categoryId: String(
                                                    v.categoryId,
                                                  ),
                                                }),
                                                w(!0));
                                            },
                                            className:
                                              "w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors",
                                            children: s.jsx(Uo, { size: 14 }),
                                          }),
                                          s.jsx("button", {
                                            onClick: () => A(v.id),
                                            className:
                                              "w-8 h-8 rounded-lg flex items-center justify-center text-red-400/50 hover:text-red-400 hover:bg-red-400/10 transition-colors",
                                            children: s.jsx(va, { size: 14 }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                v.id,
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              r === "orders" &&
                s.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("h1", {
                          className: "text-2xl font-black text-white",
                          children: "الطلبات",
                        }),
                        s.jsxs("p", {
                          className: "text-white/50 text-sm",
                          children: [c.length, " طلبات نشطة"],
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "space-y-3",
                      children: c.map((v) =>
                        s.jsxs(
                          "div",
                          {
                            className: "rounded-2xl p-5",
                            style: {
                              background: "#1A1A1A",
                              border: "1px solid rgba(255,255,255,0.06)",
                            },
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex items-start justify-between mb-3",
                                children: [
                                  s.jsxs("div", {
                                    children: [
                                      s.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          s.jsx("span", {
                                            className: "text-white font-black",
                                            children: v.customer,
                                          }),
                                          s.jsx("span", {
                                            className:
                                              "px-3 py-0.5 rounded-full text-xs font-black",
                                            style: {
                                              background: `${Et[v.status]}22`,
                                              color: Et[v.status],
                                            },
                                            children: $r[v.status],
                                          }),
                                        ],
                                      }),
                                      s.jsxs("p", {
                                        className: "text-white/40 text-sm mt-1",
                                        children: [v.id, " · ", v.phone],
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      s.jsxs("p", {
                                        className:
                                          "text-brand-red font-black text-lg",
                                        children: ["₪", v.total],
                                      }),
                                      s.jsxs("p", {
                                        className: "text-white/40 text-xs",
                                        children: [
                                          v.time,
                                          " · ",
                                          v.items,
                                          " منتجات",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx("div", {
                                className: "flex gap-2",
                                children: Object.keys($r).map((z) =>
                                  s.jsx(
                                    "button",
                                    {
                                      onClick: () =>
                                        x((ve) =>
                                          ve.map((Qe) =>
                                            Qe.id === v.id
                                              ? { ...Qe, status: z }
                                              : Qe,
                                          ),
                                        ),
                                      className:
                                        "flex-1 py-1.5 rounded-lg text-xs font-bold transition-all",
                                      style: {
                                        background:
                                          v.status === z
                                            ? `${Et[z]}33`
                                            : "rgba(255,255,255,0.04)",
                                        color:
                                          v.status === z
                                            ? Et[z]
                                            : "rgba(255,255,255,0.3)",
                                        border:
                                          v.status === z
                                            ? `1px solid ${Et[z]}44`
                                            : "1px solid transparent",
                                      },
                                      children: $r[z],
                                    },
                                    z,
                                  ),
                                ),
                              }),
                            ],
                          },
                          v.id,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      f &&
        s.jsx(Wo, {
          title: g ? "تعديل الفئة" : "إضافة فئة جديدة",
          onClose: () => p(!1),
          children: s.jsxs("div", {
            className: "space-y-4",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-white/70 text-sm mb-2",
                    children: "اسم الفئة (عربي)",
                  }),
                  s.jsx("input", {
                    type: "text",
                    value: h.name_ar,
                    onChange: (v) =>
                      d((z) => ({ ...z, name_ar: v.target.value })),
                    className: "input-field",
                    placeholder: "مثال: لحم بقري",
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-white/70 text-sm mb-2",
                    children: "اسم الفئة (عبري)",
                  }),
                  s.jsx("input", {
                    type: "text",
                    value: h.name_he,
                    onChange: (v) =>
                      d((z) => ({ ...z, name_he: v.target.value })),
                    className: "input-field",
                    placeholder: "מثال: בקר",
                    dir: "rtl",
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-white/70 text-sm mb-2",
                    children: "رابط الصورة",
                  }),
                  s.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      s.jsx("input", {
                        type: "text",
                        value: h.image,
                        onChange: (v) =>
                          d((z) => ({ ...z, image: v.target.value })),
                        className: "input-field flex-1",
                        placeholder: "https://...",
                      }),
                      s.jsxs("button", {
                        className:
                          "px-4 py-3 rounded-xl text-white/50 border border-white/10 hover:border-brand-red hover:text-white transition-colors flex items-center gap-2 text-sm",
                        children: [s.jsx($o, { size: 16 }), "رفع"],
                      }),
                    ],
                  }),
                ],
              }),
              h.image &&
                s.jsx("img", {
                  src: h.image,
                  alt: "preview",
                  className: "w-full h-32 object-cover rounded-xl",
                }),
              s.jsxs("div", {
                className: "flex gap-3 pt-2",
                children: [
                  s.jsx("button", {
                    onClick: b,
                    className:
                      "flex-1 py-3 rounded-xl font-black text-white transition-all hover:scale-[1.02]",
                    style: {
                      background: "linear-gradient(135deg, #CC0000, #990000)",
                    },
                    children: "حفظ",
                  }),
                  s.jsx("button", {
                    onClick: () => p(!1),
                    className:
                      "flex-1 py-3 rounded-xl font-bold text-white/60 border border-white/10 hover:border-white/30 transition-colors",
                    children: "إلغاء",
                  }),
                ],
              }),
            ],
          }),
        }),
      y &&
        s.jsxs(Wo, {
          title: g ? "تعديل المنتج" : "إضافة منتج جديد",
          onClose: () => w(!1),
          children: [
            s.jsxs("div", {
              className: "space-y-4 max-h-96 overflow-y-auto",
              children: [
                s.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          className: "block text-white/70 text-sm mb-2",
                          children: "الاسم (عربي)",
                        }),
                        s.jsx("input", {
                          type: "text",
                          value: m.name_ar,
                          onChange: (v) =>
                            j((z) => ({ ...z, name_ar: v.target.value })),
                          className: "input-field",
                          placeholder: "اسم المنتج",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          className: "block text-white/70 text-sm mb-2",
                          children: "الاسم (عبري)",
                        }),
                        s.jsx("input", {
                          type: "text",
                          value: m.name_he,
                          onChange: (v) =>
                            j((z) => ({ ...z, name_he: v.target.value })),
                          className: "input-field",
                          placeholder: "שם המוצר",
                          dir: "rtl",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          className: "block text-white/70 text-sm mb-2",
                          children: "السعر (₪/كغ)",
                        }),
                        s.jsx("input", {
                          type: "number",
                          value: m.price,
                          onChange: (v) =>
                            j((z) => ({ ...z, price: v.target.value })),
                          className: "input-field",
                          placeholder: "0",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          className: "block text-white/70 text-sm mb-2",
                          children: "الفئة",
                        }),
                        s.jsxs("select", {
                          value: m.categoryId,
                          onChange: (v) =>
                            j((z) => ({ ...z, categoryId: v.target.value })),
                          className: "input-field",
                          children: [
                            s.jsx("option", {
                              value: "",
                              children: "اختر فئة",
                            }),
                            a.map((v) =>
                              s.jsx(
                                "option",
                                { value: v.id, children: v.name_ar },
                                v.id,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      className: "block text-white/70 text-sm mb-2",
                      children: "الوصف",
                    }),
                    s.jsx("textarea", {
                      value: m.description_ar,
                      onChange: (v) =>
                        j((z) => ({ ...z, description_ar: v.target.value })),
                      className: "input-field resize-none",
                      rows: 3,
                      placeholder: "وصف المنتج...",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      className: "block text-white/70 text-sm mb-2",
                      children: "رابط الصورة",
                    }),
                    s.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: m.image,
                          onChange: (v) =>
                            j((z) => ({ ...z, image: v.target.value })),
                          className: "input-field flex-1",
                          placeholder: "https://...",
                        }),
                        s.jsx("button", {
                          className:
                            "px-4 py-3 rounded-xl text-white/50 border border-white/10 hover:border-brand-red hover:text-white transition-colors flex items-center gap-2 text-sm",
                          children: s.jsx($o, { size: 16 }),
                        }),
                      ],
                    }),
                  ],
                }),
                m.image &&
                  s.jsx("img", {
                    src: m.image,
                    alt: "preview",
                    className: "w-full h-28 object-cover rounded-xl",
                  }),
              ],
            }),
            s.jsxs("div", {
              className: "flex gap-3 pt-4",
              children: [
                s.jsx("button", {
                  onClick: B,
                  className: "flex-1 py-3 rounded-xl font-black text-white",
                  style: {
                    background: "linear-gradient(135deg, #CC0000, #990000)",
                  },
                  children: "حفظ المنتج",
                }),
                s.jsx("button", {
                  onClick: () => w(!1),
                  className:
                    "flex-1 py-3 rounded-xl font-bold text-white/60 border border-white/10",
                  children: "إلغاء",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function I0({ rating: e }) {
  return s.jsx("div", {
    className: "flex gap-0.5",
    children: [1, 2, 3, 4, 5].map((t) =>
      s.jsx(
        Nn,
        {
          size: 14,
          className:
            t <= e ? "text-yellow-400 fill-yellow-400" : "text-white/20",
        },
        t,
      ),
    ),
  });
}
function R0() {
  const { t: e, lang: t } = Ae(),
    n = [
      {
        icon: C0,
        label_ar: "جودة مضمونة",
        label_he: "איכות מובטחת",
        desc_ar: "نضمن أعلى معايير الجودة في كل قطعة",
        desc_he: "אנו מבטיחים את הסטנדרטים הגבוהים ביותר",
        color: "#CC0000",
      },
      {
        icon: w0,
        label_ar: "حلال 100%",
        label_he: "100% חלאל",
        desc_ar: "جميع منتجاتنا مذبوحة وفق الشريعة الإسلامية",
        desc_he: "כל המוצרים שלנו שחוטים לפי השריעה האסלאמית",
        color: "#16A34A",
      },
      {
        icon: dt,
        label_ar: "توصيل سريع",
        label_he: "משלוח מהיר",
        desc_ar: "نوصل طلبك طازجاً إلى باب منزلك",
        desc_he: "אנו מספקים את הזמנתך טרי עד דלת ביתך",
        color: "#3B82F6",
      },
      {
        icon: d0,
        label_ar: "خبرة 20 عاماً",
        label_he: "20 שנות ניסיון",
        desc_ar: "أكثر من عقدين من الخبرة في تقديم أفضل اللحوم",
        desc_he: "יותר משני עשורים של ניסיון",
        color: "#F59E0B",
      },
    ],
    r = [
      { value: "20+", label_ar: "سنة خبرة", label_he: "שנות ניסיון" },
      { value: "5000+", label_ar: "عميل سعيد", label_he: "לקוחות מרוצים" },
      { value: "50+", label_ar: "منتج طازج", label_he: "מוצרים טריים" },
      { value: "4.9★", label_ar: "تقييم عملائنا", label_he: "דירוג לקוחות" },
    ];
  return s.jsxs("div", {
    className: "min-h-screen bg-brand-black",
    children: [
      s.jsx(bn, {}),
      s.jsx(jr, {}),
      s.jsxs("div", {
        className: "pt-16 pb-24",
        children: [
          s.jsxs("div", {
            className: "relative overflow-hidden mx-4 mt-4 rounded-3xl mb-10",
            style: { minHeight: 260 },
            children: [
              s.jsx("div", {
                className: "absolute inset-0",
                style: {
                  background:
                    "linear-gradient(135deg, #0A0A0A 0%, #3D0000 50%, #1A0000 100%)",
                },
              }),
              s.jsx("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1588347785102-2944afe78c95?w=800&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                },
              }),
              s.jsxs("div", {
                className:
                  "relative z-10 p-8 flex flex-col items-center text-center",
                children: [
                  s.jsx("div", {
                    className:
                      "w-24 h-24 rounded-2xl mx-auto mb-5 overflow-hidden",
                    style: {
                      boxShadow: "0 0 40px rgba(204,0,0,0.6)",
                      border: "2px solid rgba(204,0,0,0.5)",
                    },
                    children: s.jsx("img", {
                      src: "ad--poc/logo.jpeg",
                      alt: "أبو دغش",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                  s.jsx("h1", {
                    className: "text-4xl font-black mb-2",
                    style: {
                      background:
                        "linear-gradient(135deg, #FFFFFF 30%, #CC0000 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    },
                    children: t === "ar" ? "أبو دغش" : "אבו דגש",
                  }),
                  s.jsx("p", {
                    className: "text-brand-gray-light text-base max-w-sm",
                    children:
                      t === "ar"
                        ? "أجود اللحوم الطازجة، موصولة إلى باب منزلك منذ أكثر من 20 عاماً"
                        : "הבשר הטרי הטוב ביותר, מסופק לדלת ביתך כבר למעלה מ-20 שנה",
                  }),
                  s.jsx("div", {
                    className: "flex gap-3 mt-5 flex-wrap justify-center",
                    children: ["طازج يومياً", "حلال 100%", "توصيل سريع"].map(
                      (l, a) =>
                        s.jsx(
                          "span",
                          {
                            className:
                              "glass px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/10",
                            children: l,
                          },
                          a,
                        ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "px-4 space-y-10",
            children: [
              s.jsx("section", {
                children: s.jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                  children: r.map((l, a) =>
                    s.jsxs(
                      "div",
                      {
                        className: "rounded-2xl p-5 text-center",
                        style: {
                          background: "#1A1A1A",
                          border: "1px solid rgba(255,255,255,0.06)",
                          animation: `fadeSlideUp 0.4s ease-out ${a * 0.1}s both`,
                        },
                        children: [
                          s.jsx("p", {
                            className:
                              "text-3xl font-black text-brand-red mb-1",
                            children: l.value,
                          }),
                          s.jsx("p", {
                            className: "text-white/60 text-sm",
                            children: t === "ar" ? l.label_ar : l.label_he,
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
              }),
              s.jsxs("section", {
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-3 mb-5",
                    children: [
                      s.jsx("div", {
                        className: "w-1 h-8 rounded-full bg-brand-red",
                      }),
                      s.jsx("h2", {
                        className: "text-2xl font-black text-white",
                        children: e.ourStory,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "rounded-3xl p-6 relative overflow-hidden",
                    style: {
                      background: "#111",
                      border: "1px solid rgba(255,255,255,0.06)",
                    },
                    children: [
                      s.jsx("div", {
                        className:
                          "absolute top-0 left-0 w-32 h-32 rounded-full opacity-10",
                        style: { background: "#CC0000", filter: "blur(40px)" },
                      }),
                      s.jsxs("div", {
                        className: "relative z-10 space-y-4",
                        children: [
                          s.jsx("p", {
                            className: "text-white/80 leading-relaxed text-sm",
                            children:
                              t === "ar"
                                ? "بدأت قصة أبو دغش منذ أكثر من عشرين عاماً، حين قرر مؤسسنا تقديم أجود اللحوم الطازجة لأبناء المجتمع. بدأنا بمحل صغير وتوسعنا عاماً بعد عام بفضل ثقة عملائنا الكرام."
                                : "סיפורה של אבו דגש החל לפני יותר מעשרים שנה, כאשר המייסד שלנו החליט לספק את הבשר הטרי הטוב ביותר לבני הקהילה. התחלנו בחנות קטנה והתרחבנו שנה אחר שנה.",
                          }),
                          s.jsx("p", {
                            className: "text-white/80 leading-relaxed text-sm",
                            children:
                              t === "ar"
                                ? "اليوم نفخر بخدمة آلاف العملاء يومياً، مع الحفاظ على نفس المبادئ التي بُنينا عليها: الجودة، الطزاجة، والأمانة. كل قطعة لحم تمر من يدنا تحمل معها شغفنا والتزامنا بأعلى معايير الجودة."
                                : "היום אנו גאים לשרת אלפי לקוחות מדי יום, תוך שמירה על אותם עקרונות שעליהם נבנינו: איכות, טריות ויושרה. כל נתח בשר שעובר בידינו נושא את התשוקה שלנו.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("section", {
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-3 mb-5",
                    children: [
                      s.jsx("div", {
                        className: "w-1 h-8 rounded-full bg-brand-red",
                      }),
                      s.jsx("h2", {
                        className: "text-2xl font-black text-white",
                        children: e.ourValues,
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: n.map((l, a) =>
                      s.jsxs(
                        "div",
                        {
                          className: "rounded-2xl p-5",
                          style: {
                            background: "#1A1A1A",
                            border: "1px solid rgba(255,255,255,0.06)",
                            animation: `fadeSlideUp 0.4s ease-out ${a * 0.1}s both`,
                          },
                          children: [
                            s.jsx("div", {
                              className:
                                "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
                              style: { background: `${l.color}22` },
                              children: s.jsx(l.icon, {
                                size: 20,
                                style: { color: l.color },
                              }),
                            }),
                            s.jsx("p", {
                              className: "text-white font-bold text-sm mb-1",
                              children: t === "ar" ? l.label_ar : l.label_he,
                            }),
                            s.jsx("p", {
                              className:
                                "text-white/50 text-xs leading-relaxed",
                              children: t === "ar" ? l.desc_ar : l.desc_he,
                            }),
                          ],
                        },
                        a,
                      ),
                    ),
                  }),
                ],
              }),
              s.jsxs("section", {
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-3 mb-5",
                    children: [
                      s.jsx("div", {
                        className: "w-1 h-8 rounded-full bg-brand-red",
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h2", {
                            className: "text-2xl font-black text-white",
                            children: e.customerReviews,
                          }),
                          s.jsx("p", {
                            className: "text-brand-gray-light text-xs",
                            children:
                              t === "ar"
                                ? "ماذا يقول عملاؤنا"
                                : "מה אומרים הלקוחות שלנו",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "space-y-4",
                    children: s0.map((l, a) =>
                      s.jsx(
                        "div",
                        {
                          className: "rounded-2xl p-5",
                          style: {
                            background: "#1A1A1A",
                            border: "1px solid rgba(255,255,255,0.06)",
                            animation: `fadeSlideUp 0.4s ease-out ${a * 0.08}s both`,
                          },
                          children: s.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              s.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-red/30",
                                children: s.jsx("img", {
                                  src: l.image,
                                  alt: t === "ar" ? l.name_ar : l.name_he,
                                  className: "w-full h-full object-cover",
                                  onError: (i) => {
                                    ((i.target.style.display = "none"),
                                      (i.target.parentElement.style.background =
                                        "linear-gradient(135deg,#CC0000,#990000)"));
                                  },
                                }),
                              }),
                              s.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  s.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-1",
                                    children: [
                                      s.jsx("p", {
                                        className:
                                          "text-white font-bold text-sm",
                                        children:
                                          t === "ar" ? l.name_ar : l.name_he,
                                      }),
                                      s.jsx("span", {
                                        className: "text-white/30 text-xs",
                                        children:
                                          t === "ar" ? l.date_ar : l.date_he,
                                      }),
                                    ],
                                  }),
                                  s.jsx(I0, { rating: l.rating }),
                                  s.jsx("p", {
                                    className:
                                      "text-white/70 text-sm mt-2 leading-relaxed",
                                    children:
                                      t === "ar" ? l.text_ar : l.text_he,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        l.id,
                      ),
                    ),
                  }),
                ],
              }),
              s.jsx("section", {
                children: s.jsxs("div", {
                  className:
                    "rounded-3xl p-6 text-center relative overflow-hidden",
                  style: {
                    background: "linear-gradient(135deg, #1A0000, #3D0000)",
                  },
                  children: [
                    s.jsx("div", {
                      className: "absolute inset-0 opacity-10",
                      style: {
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1544025162-d76594e8efa5?w=800&fit=crop')",
                        backgroundSize: "cover",
                      },
                    }),
                    s.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        s.jsx(_d, {
                          size: 32,
                          className: "text-brand-red mx-auto mb-3",
                        }),
                        s.jsx("h3", {
                          className: "text-white font-black text-xl mb-2",
                          children: t === "ar" ? "تواصل معنا" : "צור קשר",
                        }),
                        s.jsx("p", {
                          className: "text-white/70 text-sm mb-4",
                          children:
                            t === "ar"
                              ? "نحن هنا لخدمتك على مدار الساعة"
                              : "אנחנו כאן לשירותך 24/7",
                        }),
                        s.jsxs("div", {
                          className: "flex gap-3 justify-center flex-wrap",
                          children: [
                            s.jsxs("a", {
                              href: "tel:+972501234567",
                              className:
                                "px-6 py-2.5 rounded-full font-bold text-white text-sm transition-all hover:scale-105",
                              style: {
                                background:
                                  "linear-gradient(135deg, #CC0000, #990000)",
                              },
                              children: [
                                "📞 ",
                                t === "ar" ? "اتصل بنا" : "התקשר אלינו",
                              ],
                            }),
                            s.jsx("a", {
                              href: "https://wa.me/972501234567",
                              className:
                                "px-6 py-2.5 rounded-full font-bold text-white text-sm border border-white/20 transition-all hover:scale-105 hover:border-brand-red",
                              children: "💬 WhatsApp",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      s.jsx("style", {
        children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
      }),
    ],
  });
}
const Sl = {
    pending: "#F59E0B",
    confirmed: "#3B82F6",
    preparing: "#8B5CF6",
    delivering: "#F97316",
    delivered: "#16A34A",
  },
  Ed = {
    pending: "قيد الانتظار",
    confirmed: "مؤكد",
    preparing: "جاري التحضير",
    delivering: "في التوصيل",
    delivered: "تم التوصيل",
  },
  _l = {
    "ORD-1001": "شارع الملك فيصل 14، الناصرة",
    "ORD-1002": "حي الزيتون، الطيبة",
    "ORD-1003": "شارع الاستقلال 7، باقة الغربية",
    "ORD-1004": "حي النزهة 22، أم الفحم",
    "ORD-1005": "شارع الأحرار 5، طمرة",
  };
function ks({ icon: e, label: t, value: n, color: r }) {
  return s.jsxs("div", {
    className: "rounded-2xl p-4",
    style: {
      background: "#1A1A1A",
      border: "1px solid rgba(255,255,255,0.06)",
    },
    children: [
      s.jsx("div", {
        className: "flex items-center justify-between mb-3",
        children: s.jsx("div", {
          className: "w-9 h-9 rounded-xl flex items-center justify-center",
          style: { background: `${r}22` },
          children: s.jsx(e, { size: 18, style: { color: r } }),
        }),
      }),
      s.jsx("p", {
        className: "text-2xl font-black text-white mb-0.5",
        children: n,
      }),
      s.jsx("p", { className: "text-white/50 text-xs", children: t }),
    ],
  });
}
function M0({ order: e, onClose: t, onStatusChange: n }) {
  const r = _l[e.id] || "عنوان التوصيل";
  return s.jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: { background: "rgba(0,0,0,0.85)" },
    children: s.jsxs("div", {
      className: "w-full max-w-lg rounded-3xl overflow-hidden",
      style: { background: "#1A1A1A", border: "1px solid rgba(204,0,0,0.3)" },
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between p-5 border-b",
          style: { borderColor: "rgba(255,255,255,0.08)" },
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("h3", {
                  className: "text-white font-black text-lg",
                  children: e.id,
                }),
                s.jsx("span", {
                  className: "text-xs font-bold px-2 py-0.5 rounded-full",
                  style: {
                    background: `${Sl[e.status]}22`,
                    color: Sl[e.status],
                  },
                  children: Ed[e.status],
                }),
              ],
            }),
            s.jsx("button", {
              onClick: t,
              className: "text-white/40 hover:text-white transition-colors",
              children: s.jsx(wr, { size: 20 }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "p-5 space-y-4",
          children: [
            s.jsxs("div", {
              className: "rounded-2xl p-4 flex items-center gap-4",
              style: { background: "rgba(255,255,255,0.04)" },
              children: [
                s.jsx("div", {
                  className:
                    "w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0",
                  style: { background: "rgba(204,0,0,0.2)" },
                  children: s.jsx(vi, {
                    size: 20,
                    className: "text-brand-red",
                  }),
                }),
                s.jsxs("div", {
                  className: "flex-1",
                  children: [
                    s.jsx("p", {
                      className: "text-white font-bold",
                      children: e.customer,
                    }),
                    s.jsx("p", {
                      className: "text-white/50 text-sm",
                      children: e.phone,
                    }),
                  ],
                }),
                s.jsx("a", {
                  href: `tel:${e.phone}`,
                  className:
                    "w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-green-500/20",
                  style: { background: "rgba(22,163,74,0.15)" },
                  children: s.jsx(gi, {
                    size: 16,
                    className: "text-green-400",
                  }),
                }),
              ],
            }),
            s.jsxs("div", {
              className: "rounded-2xl p-4 flex items-start gap-3",
              style: { background: "rgba(255,255,255,0.04)" },
              children: [
                s.jsx(Nd, {
                  size: 18,
                  className: "text-brand-red mt-0.5 flex-shrink-0",
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("p", {
                      className: "text-white/50 text-xs mb-0.5",
                      children: "عنوان التوصيل",
                    }),
                    s.jsx("p", {
                      className: "text-white font-semibold text-sm",
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "rounded-2xl p-4",
              style: { background: "rgba(255,255,255,0.04)" },
              children: [
                s.jsxs("div", {
                  className: "flex justify-between mb-2",
                  children: [
                    s.jsx("span", {
                      className: "text-white/50 text-sm",
                      children: "عدد المنتجات",
                    }),
                    s.jsxs("span", {
                      className: "text-white font-bold",
                      children: [e.items, " منتجات"],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    s.jsx("span", {
                      className: "text-white/50 text-sm",
                      children: "إجمالي الطلب",
                    }),
                    s.jsxs("span", {
                      className: "text-brand-red font-black",
                      children: ["₪", e.total],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex gap-3",
              children: [
                e.status === "delivering" &&
                  s.jsxs("button", {
                    onClick: () => n(e.id, "delivered"),
                    className:
                      "flex-1 py-3 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]",
                    style: {
                      background: "linear-gradient(135deg, #16A34A, #15803D)",
                    },
                    children: [s.jsx(cn, { size: 16 }), "إتمام التوصيل"],
                  }),
                e.status === "confirmed" || e.status === "preparing"
                  ? s.jsxs("button", {
                      onClick: () => n(e.id, "delivering"),
                      className:
                        "flex-1 py-3 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]",
                      style: {
                        background: "linear-gradient(135deg, #F97316, #EA6C00)",
                      },
                      children: [s.jsx(dt, { size: 16 }), "بدء التوصيل"],
                    })
                  : null,
                s.jsxs("a", {
                  href: `https://waze.com/ul?q=${encodeURIComponent(_l[e.id] || "")}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "flex-1 py-3 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]",
                  style: {
                    background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                  },
                  children: [s.jsx(Cd, { size: 16 }), "ملاحة"],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function O0() {
  const e = Ue(),
    { lang: t, toggleLang: n } = Ae(),
    [r, l] = k.useState(
      vd.filter((g) =>
        ["confirmed", "preparing", "delivering", "delivered"].includes(
          g.status,
        ),
      ),
    ),
    [a, i] = k.useState("active"),
    [u, o] = k.useState(null),
    [c] = k.useState("أحمد المندوب"),
    x = r.filter((g) => g.status !== "delivered"),
    f = r.filter((g) => g.status === "delivered"),
    p = a === "active" ? x : f,
    y = (g, C) => {
      (l((h) => h.map((d) => (d.id === g ? { ...d, status: C } : d))), o(null));
    },
    w = f.length * 25 + x.length * 15;
  return s.jsxs("div", {
    className: "min-h-screen",
    style: {
      background: "#0A0A0A",
      direction: "rtl",
      fontFamily: "Cairo, sans-serif",
    },
    children: [
      s.jsxs("div", {
        className:
          "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-16",
        style: {
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(204,0,0,0.2)",
        },
        children: [
          s.jsxs("button", {
            onClick: () => e("/"),
            className: "flex items-center gap-2 group",
            children: [
              s.jsx("div", {
                className:
                  "w-8 h-8 rounded-xl overflow-hidden border border-brand-red/40",
                children: s.jsx("img", {
                  src: "ad--poc/logo.jpeg",
                  alt: "أبو دغش",
                  className: "w-full h-full object-cover",
                }),
              }),
              s.jsx("span", {
                className: "font-black text-white text-sm hidden sm:block",
                children: "أبو دغش",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              s.jsx(dt, { size: 18, className: "text-brand-red" }),
              s.jsx("span", {
                className: "text-white font-black text-sm",
                children: t === "ar" ? "بوابة المندوب" : "פורטל שליח",
              }),
            ],
          }),
          s.jsx("button", {
            onClick: n,
            className:
              "px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 hover:border-brand-red text-white transition-colors",
            children: t === "ar" ? "עב" : "ع",
          }),
        ],
      }),
      s.jsxs("div", {
        className: "pt-20 pb-24 px-4 max-w-2xl mx-auto",
        children: [
          s.jsxs("div", {
            className:
              "rounded-3xl p-5 mb-6 flex items-center gap-4 relative overflow-hidden",
            style: {
              background: "linear-gradient(135deg, #1A0000, #3D0000)",
              border: "1px solid rgba(204,0,0,0.2)",
            },
            children: [
              s.jsx("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&fit=crop')",
                  backgroundSize: "cover",
                },
              }),
              s.jsx("div", {
                className:
                  "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10",
                style: {
                  background: "rgba(204,0,0,0.3)",
                  border: "1px solid rgba(204,0,0,0.4)",
                },
                children: s.jsx(dt, { size: 24, className: "text-brand-red" }),
              }),
              s.jsxs("div", {
                className: "relative z-10",
                children: [
                  s.jsx("p", {
                    className: "text-white/60 text-xs",
                    children: t === "ar" ? "مرحباً يا مندوب" : "ברוך הבא שליח",
                  }),
                  s.jsx("p", {
                    className: "text-white font-black text-lg",
                    children: c,
                  }),
                  s.jsx("p", {
                    className: "text-brand-red text-xs font-semibold",
                    children:
                      t === "ar"
                        ? `${x.length} توصيلات معلقة`
                        : `${x.length} משלוחים ממתינים`,
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "grid grid-cols-3 gap-3 mb-6",
            children: [
              s.jsx(ks, {
                icon: xi,
                label: t === "ar" ? "إجمالي" : 'סה"כ',
                value: r.length,
                color: "#3B82F6",
              }),
              s.jsx(ks, {
                icon: dt,
                label: t === "ar" ? "نشط" : "פעיל",
                value: x.length,
                color: "#F97316",
              }),
              s.jsx(ks, {
                icon: cn,
                label: t === "ar" ? "مكتمل" : "הושלם",
                value: f.length,
                color: "#16A34A",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "rounded-2xl p-4 flex items-center justify-between mb-6",
            style: {
              background: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.06)",
            },
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  s.jsx("div", {
                    className:
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                    style: { background: "rgba(251,191,36,0.15)" },
                    children: s.jsx(p0, {
                      size: 18,
                      className: "text-yellow-400",
                    }),
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("p", {
                        className: "text-white/50 text-xs",
                        children:
                          t === "ar"
                            ? "أرباح اليوم (تقديري)"
                            : "רווחי היום (משוער)",
                      }),
                      s.jsxs("p", {
                        className: "text-yellow-400 font-black text-lg",
                        children: ["₪", w],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx(Nn, {
                size: 20,
                className: "text-yellow-400 fill-yellow-400",
              }),
            ],
          }),
          s.jsx("div", {
            className: "flex rounded-2xl p-1 mb-5",
            style: { background: "#1A1A1A" },
            children: [
              {
                id: "active",
                label_ar: `نشط (${x.length})`,
                label_he: `פעיל (${x.length})`,
                color: "#F97316",
              },
              {
                id: "completed",
                label_ar: `مكتمل (${f.length})`,
                label_he: `הושלם (${f.length})`,
                color: "#16A34A",
              },
            ].map((g) =>
              s.jsx(
                "button",
                {
                  onClick: () => i(g.id),
                  className:
                    "flex-1 py-2.5 rounded-xl text-sm font-bold transition-all",
                  style:
                    a === g.id
                      ? { background: g.color, color: "#fff" }
                      : { color: "rgba(255,255,255,0.4)" },
                  children: t === "ar" ? g.label_ar : g.label_he,
                },
                g.id,
              ),
            ),
          }),
          s.jsx("div", {
            className: "space-y-3",
            children:
              p.length === 0
                ? s.jsxs("div", {
                    className: "text-center py-16",
                    children: [
                      s.jsx(cn, {
                        size: 48,
                        className: "text-green-500 mx-auto mb-3 opacity-60",
                      }),
                      s.jsx("p", {
                        className: "text-white/50 font-semibold",
                        children:
                          t === "ar"
                            ? "لا توجد توصيلات في هذا القسم"
                            : "אין משלוחים בקטגוריה זו",
                      }),
                    ],
                  })
                : p.map((g, C) =>
                    s.jsxs(
                      "div",
                      {
                        className:
                          "rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.01]",
                        style: {
                          background: "#1A1A1A",
                          border: `1px solid ${g.status === "delivering" ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.06)"}`,
                          animation: `fadeSlideUp 0.4s ease-out ${C * 0.07}s both`,
                        },
                        onClick: () => o(g),
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  s.jsx("span", {
                                    className: "text-white font-black text-sm",
                                    children: g.id,
                                  }),
                                  g.status === "delivering" &&
                                    s.jsx("span", {
                                      className:
                                        "text-xs px-2 py-0.5 rounded-full font-bold animate-pulse",
                                      style: {
                                        background: "rgba(249,115,22,0.2)",
                                        color: "#F97316",
                                      },
                                      children:
                                        t === "ar"
                                          ? "● نشط الآن"
                                          : "● פעיל עכשיו",
                                    }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [
                                  s.jsx(kd, {
                                    size: 12,
                                    className: "text-white/30",
                                  }),
                                  s.jsx("span", {
                                    className: "text-white/40 text-xs",
                                    children: g.time,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [
                              s.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                                style: { background: "rgba(204,0,0,0.15)" },
                                children: s.jsx(vi, {
                                  size: 18,
                                  className: "text-brand-red",
                                }),
                              }),
                              s.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  s.jsx("p", {
                                    className: "text-white font-bold text-sm",
                                    children: g.customer,
                                  }),
                                  s.jsx("p", {
                                    className: "text-white/40 text-xs truncate",
                                    children: _l[g.id] || "عنوان التوصيل",
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "text-left",
                                children: [
                                  s.jsxs("p", {
                                    className:
                                      "text-brand-red font-black text-base",
                                    children: ["₪", g.total],
                                  }),
                                  s.jsxs("p", {
                                    className: "text-white/40 text-xs",
                                    children: [g.items, " منتجات"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              s.jsx("span", {
                                className:
                                  "text-xs font-bold px-2.5 py-1 rounded-full",
                                style: {
                                  background: `${Sl[g.status]}22`,
                                  color: Sl[g.status],
                                },
                                children: Ed[g.status],
                              }),
                              s.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  s.jsx("a", {
                                    href: `tel:${g.phone}`,
                                    onClick: (h) => h.stopPropagation(),
                                    className:
                                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                    style: {
                                      background: "rgba(22,163,74,0.15)",
                                    },
                                    children: s.jsx(gi, {
                                      size: 14,
                                      className: "text-green-400",
                                    }),
                                  }),
                                  s.jsx("a", {
                                    href: `https://waze.com/ul?q=${encodeURIComponent(_l[g.id] || "")}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    onClick: (h) => h.stopPropagation(),
                                    className:
                                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                    style: {
                                      background: "rgba(59,130,246,0.15)",
                                    },
                                    children: s.jsx(Cd, {
                                      size: 14,
                                      className: "text-blue-400",
                                    }),
                                  }),
                                  g.status === "delivering" &&
                                    s.jsx("button", {
                                      onClick: (h) => {
                                        (h.stopPropagation(),
                                          y(g.id, "delivered"));
                                      },
                                      className:
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                      style: {
                                        background: "rgba(22,163,74,0.15)",
                                      },
                                      children: s.jsx(cn, {
                                        size: 14,
                                        className: "text-green-400",
                                      }),
                                    }),
                                  (g.status === "confirmed" ||
                                    g.status === "preparing") &&
                                    s.jsx("button", {
                                      onClick: (h) => {
                                        (h.stopPropagation(),
                                          y(g.id, "delivering"));
                                      },
                                      className:
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                      style: {
                                        background: "rgba(249,115,22,0.15)",
                                      },
                                      children: s.jsx(dt, {
                                        size: 14,
                                        className: "text-orange-400",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      g.id,
                    ),
                  ),
          }),
          s.jsxs("div", {
            className: "mt-6 rounded-2xl p-4 flex gap-3",
            style: {
              background: "rgba(251,191,36,0.08)",
              border: "1px solid rgba(251,191,36,0.2)",
            },
            children: [
              s.jsx(m0, {
                size: 18,
                className: "text-yellow-400 flex-shrink-0 mt-0.5",
              }),
              s.jsx("p", {
                className: "text-yellow-300/80 text-xs leading-relaxed",
                children:
                  t === "ar"
                    ? "تذكر: تأكد من هوية العميل قبل تسليم الطلب، وحافظ على برودة المنتجات أثناء التوصيل."
                    : "זכור: ודא את זהות הלקוח לפני מסירת ההזמנה, ושמור על קרירות המוצרים בזמן המשלוח.",
              }),
            ],
          }),
        ],
      }),
      u && s.jsx(M0, { order: u, onClose: () => o(null), onStatusChange: y }),
      s.jsx("style", {
        children: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
      }),
    ],
  });
}
function D0() {
  return s.jsx(a0, {
    children: s.jsx(r0, {
      children: s.jsxs(qh, {
        children: [
          s.jsx(Le, { path: "/", element: s.jsx(i0, {}) }),
          s.jsx(Le, { path: "/categories", element: s.jsx(_0, {}) }),
          s.jsx(Le, { path: "/items/:categoryId", element: s.jsx(P0, {}) }),
          s.jsx(Le, { path: "/auth", element: s.jsx(z0, {}) }),
          s.jsx(Le, { path: "/payment", element: s.jsx(T0, {}) }),
          s.jsx(Le, { path: "/confirmation", element: s.jsx(L0, {}) }),
          s.jsx(Le, { path: "/admin", element: s.jsx(F0, {}) }),
          s.jsx(Le, { path: "/about", element: s.jsx(R0, {}) }),
          s.jsx(Le, { path: "/delivery", element: s.jsx(O0, {}) }),
          s.jsx(Le, {
            path: "*",
            element: s.jsx(Zh, { to: "/", replace: !0 }),
          }),
        ],
      }),
    }),
  });
}
rd(document.getElementById("root")).render(
  s.jsx(k.StrictMode, { children: s.jsx(n0, { children: s.jsx(D0, {}) }) }),
);
