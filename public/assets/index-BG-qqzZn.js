function ay(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var fm = { exports: {} },
  Uo = {},
  dm = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ts = Symbol.for('react.element'),
  ly = Symbol.for('react.portal'),
  uy = Symbol.for('react.fragment'),
  cy = Symbol.for('react.strict_mode'),
  fy = Symbol.for('react.profiler'),
  dy = Symbol.for('react.provider'),
  hy = Symbol.for('react.context'),
  py = Symbol.for('react.forward_ref'),
  my = Symbol.for('react.suspense'),
  gy = Symbol.for('react.memo'),
  vy = Symbol.for('react.lazy'),
  Hf = Symbol.iterator;
function yy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hf && e[Hf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var hm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pm = Object.assign,
  mm = {};
function $r(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = mm), (this.updater = n || hm);
}
$r.prototype.isReactComponent = {};
$r.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
$r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function gm() {}
gm.prototype = $r.prototype;
function ec(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = mm), (this.updater = n || hm);
}
var tc = (ec.prototype = new gm());
tc.constructor = ec;
pm(tc, $r.prototype);
tc.isPureReactComponent = !0;
var Gf = Array.isArray,
  vm = Object.prototype.hasOwnProperty,
  nc = { current: null },
  ym = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
      vm.call(t, r) && !ym.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: ts, type: e, key: s, ref: o, props: i, _owner: nc.current };
}
function xy(e, t) {
  return {
    $$typeof: ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function rc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ts;
}
function wy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Kf = /\/+/g;
function xa(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? wy('' + e.key)
    : t.toString(36);
}
function Fs(e, t, n, r, i) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ts:
          case ly:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + xa(o, 0) : r),
      Gf(i)
        ? ((n = ''),
          e != null && (n = e.replace(Kf, '$&/') + '/'),
          Fs(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (rc(i) &&
            (i = xy(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Kf, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Gf(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + xa(s, a);
      o += Fs(s, t, n, l, i);
    }
  else if (((l = yy(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + xa(s, a++)), (o += Fs(s, t, n, l, i));
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function vs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fs(e, r, '', '', function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Sy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Vs = { transition: null },
  by = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: Vs, ReactCurrentOwner: nc };
function wm() {
  throw Error('act(...) is not supported in production builds of React.');
}
z.Children = {
  map: vs,
  forEach: function (e, t, n) {
    vs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!rc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
z.Component = $r;
z.Fragment = uy;
z.Profiler = fy;
z.PureComponent = ec;
z.StrictMode = cy;
z.Suspense = my;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by;
z.act = wm;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = pm({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = nc.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      vm.call(t, l) &&
        !ym.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ts, type: e.type, key: i, ref: s, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: hy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dy, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = xm;
z.createFactory = function (e) {
  var t = xm.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: py, render: e };
};
z.isValidElement = rc;
z.lazy = function (e) {
  return { $$typeof: vy, _payload: { _status: -1, _result: e }, _init: Sy };
};
z.memo = function (e, t) {
  return { $$typeof: gy, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Vs.transition;
  Vs.transition = {};
  try {
    e();
  } finally {
    Vs.transition = t;
  }
};
z.unstable_act = wm;
z.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Ae.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
z.useId = function () {
  return Ae.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Ae.current.useRef(e);
};
z.useState = function (e) {
  return Ae.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Ae.current.useTransition();
};
z.version = '18.3.1';
dm.exports = z;
var b = dm.exports;
const $o = cm(b),
  Cy = ay({ __proto__: null, default: $o }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ky = b,
  Ey = Symbol.for('react.element'),
  Py = Symbol.for('react.fragment'),
  Ty = Object.prototype.hasOwnProperty,
  Ay = ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ny = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ty.call(t, r) && !Ny.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Ey, type: e, key: s, ref: o, props: i, _owner: Ay.current };
}
Uo.Fragment = Py;
Uo.jsx = Sm;
Uo.jsxs = Sm;
fm.exports = Uo;
var p = fm.exports,
  bm = { exports: {} },
  $e = {},
  Cm = { exports: {} },
  km = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, _) {
    var L = T.length;
    T.push(_);
    e: for (; 0 < L; ) {
      var B = (L - 1) >>> 1,
        fe = T[B];
      if (0 < i(fe, _)) (T[B] = _), (T[L] = fe), (L = B);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var _ = T[0],
      L = T.pop();
    if (L !== _) {
      T[0] = L;
      e: for (var B = 0, fe = T.length, ms = fe >>> 1; B < ms; ) {
        var kn = 2 * (B + 1) - 1,
          ya = T[kn],
          En = kn + 1,
          gs = T[En];
        if (0 > i(ya, L))
          En < fe && 0 > i(gs, ya)
            ? ((T[B] = gs), (T[En] = L), (B = En))
            : ((T[B] = ya), (T[kn] = L), (B = kn));
        else if (En < fe && 0 > i(gs, L)) (T[B] = gs), (T[En] = L), (B = En);
        else break e;
      }
    }
    return _;
  }
  function i(T, _) {
    var L = T.sortIndex - _.sortIndex;
    return L !== 0 ? L : T.id - _.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    v = !1,
    y = !1,
    x = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= T) r(u), (_.sortIndex = _.expirationTime), t(l, _);
      else break;
      _ = n(u);
    }
  }
  function S(T) {
    if (((x = !1), g(T), !y))
      if (n(l) !== null) (y = !0), St(C);
      else {
        var _ = n(u);
        _ !== null && ie(S, _.startTime - T);
      }
  }
  function C(T, _) {
    (y = !1), x && ((x = !1), m(E), (E = -1)), (v = !0);
    var L = d;
    try {
      for (g(_), f = n(l); f !== null && (!(f.expirationTime > _) || (T && !re())); ) {
        var B = f.callback;
        if (typeof B == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var fe = B(f.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof fe == 'function' ? (f.callback = fe) : f === n(l) && r(l),
            g(_);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var ms = !0;
      else {
        var kn = n(u);
        kn !== null && ie(S, kn.startTime - _), (ms = !1);
      }
      return ms;
    } finally {
      (f = null), (d = L), (v = !1);
    }
  }
  var P = !1,
    A = null,
    E = -1,
    I = 5,
    M = -1;
  function re() {
    return !(e.unstable_now() - M < I);
  }
  function F() {
    if (A !== null) {
      var T = e.unstable_now();
      M = T;
      var _ = !0;
      try {
        _ = A(!0, T);
      } finally {
        _ ? at() : ((P = !1), (A = null));
      }
    } else P = !1;
  }
  var at;
  if (typeof h == 'function')
    at = function () {
      h(F);
    };
  else if (typeof MessageChannel < 'u') {
    var lt = new MessageChannel(),
      Xr = lt.port2;
    (lt.port1.onmessage = F),
      (at = function () {
        Xr.postMessage(null);
      });
  } else
    at = function () {
      w(F, 0);
    };
  function St(T) {
    (A = T), P || ((P = !0), at());
  }
  function ie(T, _) {
    E = w(function () {
      T(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), St(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = d;
      }
      var L = d;
      d = _;
      try {
        return T();
      } finally {
        d = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, _) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var L = d;
      d = T;
      try {
        return _();
      } finally {
        d = L;
      }
    }),
    (e.unstable_scheduleCallback = function (T, _, L) {
      var B = e.unstable_now();
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? B + L : B))
          : (L = B),
        T)
      ) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return (
        (fe = L + fe),
        (T = {
          id: c++,
          callback: _,
          priorityLevel: T,
          startTime: L,
          expirationTime: fe,
          sortIndex: -1,
        }),
        L > B
          ? ((T.sortIndex = L),
            t(u, T),
            n(l) === null &&
              T === n(u) &&
              (x ? (m(E), (E = -1)) : (x = !0), ie(S, L - B)))
          : ((T.sortIndex = fe), t(l, T), y || v || ((y = !0), St(C))),
        T
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (T) {
      var _ = d;
      return function () {
        var L = d;
        d = _;
        try {
          return T.apply(this, arguments);
        } finally {
          d = L;
        }
      };
    });
})(km);
Cm.exports = km;
var jy = Cm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var My = b,
  Be = jy;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Em = new Set(),
  Ni = {};
function Zn(e, t) {
  Mr(e, t), Mr(e + 'Capture', t);
}
function Mr(e, t) {
  for (Ni[e] = t, e = 0; e < t.length; e++) Em.add(t[e]);
}
var Rt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  gl = Object.prototype.hasOwnProperty,
  _y =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yf = {},
  Xf = {};
function Ry(e) {
  return gl.call(Xf, e)
    ? !0
    : gl.call(Yf, e)
    ? !1
    : _y.test(e)
    ? (Xf[e] = !0)
    : ((Yf[e] = !0), !1);
}
function Ly(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Dy(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ly(e, t, n, r)) return !0;
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
function Ne(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ve = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ve[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ve[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    ve[e] = new Ne(e, 2, !1, e, null, !1, !1);
  }
);
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ve[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ve[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ve[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ve[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ve[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ic = /[\-:]([a-z])/g;
function sc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ic, sc);
    ve[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ic, sc);
    ve[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ic, sc);
  ve[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Ne(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oc(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Dy(t, n, i, r) && (n = null),
    r || i === null
      ? Ry(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ys = Symbol.for('react.element'),
  ir = Symbol.for('react.portal'),
  sr = Symbol.for('react.fragment'),
  ac = Symbol.for('react.strict_mode'),
  vl = Symbol.for('react.profiler'),
  Pm = Symbol.for('react.provider'),
  Tm = Symbol.for('react.context'),
  lc = Symbol.for('react.forward_ref'),
  yl = Symbol.for('react.suspense'),
  xl = Symbol.for('react.suspense_list'),
  uc = Symbol.for('react.memo'),
  Kt = Symbol.for('react.lazy'),
  Am = Symbol.for('react.offscreen'),
  Qf = Symbol.iterator;
function Qr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Qf && e[Qf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ne = Object.assign,
  wa;
function ai(e) {
  if (wa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wa = (t && t[1]) || '';
    }
  return (
    `
` +
    wa +
    e
  );
}
var Sa = !1;
function ba(e, t) {
  if (!e || Sa) return '';
  Sa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Sa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ai(e) : '';
}
function Iy(e) {
  switch (e.tag) {
    case 5:
      return ai(e.type);
    case 16:
      return ai('Lazy');
    case 13:
      return ai('Suspense');
    case 19:
      return ai('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ba(e.type, !1)), e;
    case 11:
      return (e = ba(e.type.render, !1)), e;
    case 1:
      return (e = ba(e.type, !0)), e;
    default:
      return '';
  }
}
function wl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case sr:
      return 'Fragment';
    case ir:
      return 'Portal';
    case vl:
      return 'Profiler';
    case ac:
      return 'StrictMode';
    case yl:
      return 'Suspense';
    case xl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Tm:
        return (e.displayName || 'Context') + '.Consumer';
      case Pm:
        return (e._context.displayName || 'Context') + '.Provider';
      case lc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case uc:
        return (t = e.displayName || null), t !== null ? t : wl(e.type) || 'Memo';
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return wl(e(t));
        } catch {}
    }
  return null;
}
function Oy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return wl(t);
    case 8:
      return t === ac ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Nm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  );
}
function zy(e) {
  var t = Nm(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xs(e) {
  e._valueTracker || (e._valueTracker = zy(e));
}
function jm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Nm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ro(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sl(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = fn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Mm(e, t) {
  (t = t.checked), t != null && oc(e, 'checked', t, !1);
}
function bl(e, t) {
  Mm(e, t);
  var n = fn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Cl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Cl(e, t.type, fn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null)))
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Cl(e, t, n) {
  (t !== 'number' || ro(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var li = Array.isArray;
function Cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + fn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Jf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (li(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: fn(n) };
}
function _m(e, t) {
  var n = fn(t.value),
    r = fn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ed(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Rm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function El(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Rm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ws,
  Lm = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ws = ws || document.createElement('div'),
          ws.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ws.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ji(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mi = {
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
  Fy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(mi).forEach(function (e) {
  Fy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mi[t] = mi[e]);
  });
});
function Dm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (mi.hasOwnProperty(e) && mi[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Im(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Dm(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Vy = ne(
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
  }
);
function Pl(e, t) {
  if (t) {
    if (Vy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function Tl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Al = null;
function cc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nl = null,
  kr = null,
  Er = null;
function td(e) {
  if ((e = is(e))) {
    if (typeof Nl != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Yo(t)), Nl(e.stateNode, e.type, t));
  }
}
function Om(e) {
  kr ? (Er ? Er.push(e) : (Er = [e])) : (kr = e);
}
function zm() {
  if (kr) {
    var e = kr,
      t = Er;
    if (((Er = kr = null), td(e), t)) for (e = 0; e < t.length; e++) td(t[e]);
  }
}
function Fm(e, t) {
  return e(t);
}
function Vm() {}
var Ca = !1;
function Bm(e, t, n) {
  if (Ca) return e(t, n);
  Ca = !0;
  try {
    return Fm(e, t, n);
  } finally {
    (Ca = !1), (kr !== null || Er !== null) && (Vm(), zm());
  }
}
function Mi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var jl = !1;
if (Rt)
  try {
    var qr = {};
    Object.defineProperty(qr, 'passive', {
      get: function () {
        jl = !0;
      },
    }),
      window.addEventListener('test', qr, qr),
      window.removeEventListener('test', qr, qr);
  } catch {
    jl = !1;
  }
function By(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gi = !1,
  io = null,
  so = !1,
  Ml = null,
  Uy = {
    onError: function (e) {
      (gi = !0), (io = e);
    },
  };
function $y(e, t, n, r, i, s, o, a, l) {
  (gi = !1), (io = null), By.apply(Uy, arguments);
}
function Wy(e, t, n, r, i, s, o, a, l) {
  if (($y.apply(this, arguments), gi)) {
    if (gi) {
      var u = io;
      (gi = !1), (io = null);
    } else throw Error(k(198));
    so || ((so = !0), (Ml = u));
  }
}
function Jn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Um(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function nd(e) {
  if (Jn(e) !== e) throw Error(k(188));
}
function Hy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return nd(i), e;
        if (s === r) return nd(i), t;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function $m(e) {
  return (e = Hy(e)), e !== null ? Wm(e) : null;
}
function Wm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hm = Be.unstable_scheduleCallback,
  rd = Be.unstable_cancelCallback,
  Gy = Be.unstable_shouldYield,
  Ky = Be.unstable_requestPaint,
  ae = Be.unstable_now,
  Yy = Be.unstable_getCurrentPriorityLevel,
  fc = Be.unstable_ImmediatePriority,
  Gm = Be.unstable_UserBlockingPriority,
  oo = Be.unstable_NormalPriority,
  Xy = Be.unstable_LowPriority,
  Km = Be.unstable_IdlePriority,
  Wo = null,
  mt = null;
function Qy(e) {
  if (mt && typeof mt.onCommitFiberRoot == 'function')
    try {
      mt.onCommitFiberRoot(Wo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : Jy,
  qy = Math.log,
  Zy = Math.LN2;
function Jy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qy(e) / Zy) | 0)) | 0;
}
var Ss = 64,
  bs = 4194304;
function ui(e) {
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
function ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = ui(a)) : ((s &= o), s !== 0 && (r = ui(s)));
  } else (o = n & ~i), o !== 0 ? (r = ui(o)) : s !== 0 && (r = ui(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ex(e, t) {
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
function tx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - it(s),
      a = 1 << o,
      l = i[o];
    l === -1 ? (!(a & n) || a & r) && (i[o] = ex(a, t)) : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function _l(e) {
  return (
    (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ym() {
  var e = Ss;
  return (Ss <<= 1), !(Ss & 4194240) && (Ss = 64), e;
}
function ka(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ns(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function nx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - it(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function dc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function Xm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qm,
  hc,
  qm,
  Zm,
  Jm,
  Rl = !1,
  Cs = [],
  en = null,
  tn = null,
  nn = null,
  _i = new Map(),
  Ri = new Map(),
  Xt = [],
  rx =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function id(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      en = null;
      break;
    case 'dragenter':
    case 'dragleave':
      tn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      nn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      _i.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ri.delete(t.pointerId);
  }
}
function Zr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = is(t)), t !== null && hc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ix(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (en = Zr(en, e, t, n, r, i)), !0;
    case 'dragenter':
      return (tn = Zr(tn, e, t, n, r, i)), !0;
    case 'mouseover':
      return (nn = Zr(nn, e, t, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return _i.set(s, Zr(_i.get(s) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (s = i.pointerId), Ri.set(s, Zr(Ri.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function eg(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = Jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Um(n)), t !== null)) {
          (e.blockedOn = t),
            Jm(e.priority, function () {
              qm(n);
            });
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
function Bs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Al = r), n.target.dispatchEvent(r), (Al = null);
    } else return (t = is(n)), t !== null && hc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sd(e, t, n) {
  Bs(e) && n.delete(t);
}
function sx() {
  (Rl = !1),
    en !== null && Bs(en) && (en = null),
    tn !== null && Bs(tn) && (tn = null),
    nn !== null && Bs(nn) && (nn = null),
    _i.forEach(sd),
    Ri.forEach(sd);
}
function Jr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rl || ((Rl = !0), Be.unstable_scheduleCallback(Be.unstable_NormalPriority, sx)));
}
function Li(e) {
  function t(i) {
    return Jr(i, e);
  }
  if (0 < Cs.length) {
    Jr(Cs[0], e);
    for (var n = 1; n < Cs.length; n++) {
      var r = Cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && Jr(en, e),
      tn !== null && Jr(tn, e),
      nn !== null && Jr(nn, e),
      _i.forEach(t),
      Ri.forEach(t),
      n = 0;
    n < Xt.length;
    n++
  )
    (r = Xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xt.length && ((n = Xt[0]), n.blockedOn === null); )
    eg(n), n.blockedOn === null && Xt.shift();
}
var Pr = Vt.ReactCurrentBatchConfig,
  lo = !0;
function ox(e, t, n, r) {
  var i = $,
    s = Pr.transition;
  Pr.transition = null;
  try {
    ($ = 1), pc(e, t, n, r);
  } finally {
    ($ = i), (Pr.transition = s);
  }
}
function ax(e, t, n, r) {
  var i = $,
    s = Pr.transition;
  Pr.transition = null;
  try {
    ($ = 4), pc(e, t, n, r);
  } finally {
    ($ = i), (Pr.transition = s);
  }
}
function pc(e, t, n, r) {
  if (lo) {
    var i = Ll(e, t, n, r);
    if (i === null) La(e, t, r, uo, n), id(e, r);
    else if (ix(i, e, t, n, r)) r.stopPropagation();
    else if ((id(e, r), t & 4 && -1 < rx.indexOf(e))) {
      for (; i !== null; ) {
        var s = is(i);
        if (
          (s !== null && Qm(s),
          (s = Ll(e, t, n, r)),
          s === null && La(e, t, r, uo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else La(e, t, r, null, n);
  }
}
var uo = null;
function Ll(e, t, n, r) {
  if (((uo = null), (e = cc(r)), (e = Ln(e)), e !== null))
    if (((t = Jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Um(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (uo = e), null;
}
function tg(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Yy()) {
        case fc:
          return 1;
        case Gm:
          return 4;
        case oo:
        case Xy:
          return 16;
        case Km:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  mc = null,
  Us = null;
function ng() {
  if (Us) return Us;
  var e,
    t = mc,
    n = t.length,
    r,
    i = 'value' in qt ? qt.value : qt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Us = i.slice(e, 1 < r ? 1 - r : void 0));
}
function $s(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ks() {
  return !0;
}
function od() {
  return !1;
}
function We(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ks
        : od),
      (this.isPropagationStopped = od),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ks));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ks));
      },
      persist: function () {},
      isPersistent: ks,
    }),
    t
  );
}
var Wr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  gc = We(Wr),
  rs = ne({}, Wr, { view: 0, detail: 0 }),
  lx = We(rs),
  Ea,
  Pa,
  ei,
  Ho = ne({}, rs, {
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
    getModifierState: vc,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== ei &&
            (ei && e.type === 'mousemove'
              ? ((Ea = e.screenX - ei.screenX), (Pa = e.screenY - ei.screenY))
              : (Pa = Ea = 0),
            (ei = e)),
          Ea);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Pa;
    },
  }),
  ad = We(Ho),
  ux = ne({}, Ho, { dataTransfer: 0 }),
  cx = We(ux),
  fx = ne({}, rs, { relatedTarget: 0 }),
  Ta = We(fx),
  dx = ne({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hx = We(dx),
  px = ne({}, Wr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mx = We(px),
  gx = ne({}, Wr, { data: 0 }),
  ld = We(gx),
  vx = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  yx = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  xx = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function wx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xx[e]) ? !!t[e] : !1;
}
function vc() {
  return wx;
}
var Sx = ne({}, rs, {
    key: function (e) {
      if (e.key) {
        var t = vx[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = $s(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? yx[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vc,
    charCode: function (e) {
      return e.type === 'keypress' ? $s(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? $s(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  bx = We(Sx),
  Cx = ne({}, Ho, {
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
  ud = We(Cx),
  kx = ne({}, rs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vc,
  }),
  Ex = We(kx),
  Px = ne({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tx = We(Px),
  Ax = ne({}, Ho, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nx = We(Ax),
  jx = [9, 13, 27, 32],
  yc = Rt && 'CompositionEvent' in window,
  vi = null;
Rt && 'documentMode' in document && (vi = document.documentMode);
var Mx = Rt && 'TextEvent' in window && !vi,
  rg = Rt && (!yc || (vi && 8 < vi && 11 >= vi)),
  cd = ' ',
  fd = !1;
function ig(e, t) {
  switch (e) {
    case 'keyup':
      return jx.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function sg(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var or = !1;
function _x(e, t) {
  switch (e) {
    case 'compositionend':
      return sg(t);
    case 'keypress':
      return t.which !== 32 ? null : ((fd = !0), cd);
    case 'textInput':
      return (e = t.data), e === cd && fd ? null : e;
    default:
      return null;
  }
}
function Rx(e, t) {
  if (or)
    return e === 'compositionend' || (!yc && ig(e, t))
      ? ((e = ng()), (Us = mc = qt = null), (or = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return rg && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Lx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function dd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Lx[e.type] : t === 'textarea';
}
function og(e, t, n, r) {
  Om(r),
    (t = co(t, 'onChange')),
    0 < t.length &&
      ((n = new gc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yi = null,
  Di = null;
function Dx(e) {
  vg(e, 0);
}
function Go(e) {
  var t = ur(e);
  if (jm(t)) return e;
}
function Ix(e, t) {
  if (e === 'change') return t;
}
var ag = !1;
if (Rt) {
  var Aa;
  if (Rt) {
    var Na = 'oninput' in document;
    if (!Na) {
      var hd = document.createElement('div');
      hd.setAttribute('oninput', 'return;'), (Na = typeof hd.oninput == 'function');
    }
    Aa = Na;
  } else Aa = !1;
  ag = Aa && (!document.documentMode || 9 < document.documentMode);
}
function pd() {
  yi && (yi.detachEvent('onpropertychange', lg), (Di = yi = null));
}
function lg(e) {
  if (e.propertyName === 'value' && Go(Di)) {
    var t = [];
    og(t, Di, e, cc(e)), Bm(Dx, t);
  }
}
function Ox(e, t, n) {
  e === 'focusin'
    ? (pd(), (yi = t), (Di = n), yi.attachEvent('onpropertychange', lg))
    : e === 'focusout' && pd();
}
function zx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Go(Di);
}
function Fx(e, t) {
  if (e === 'click') return Go(t);
}
function Vx(e, t) {
  if (e === 'input' || e === 'change') return Go(t);
}
function Bx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == 'function' ? Object.is : Bx;
function Ii(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!gl.call(t, i) || !ot(e[i], t[i])) return !1;
  }
  return !0;
}
function md(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gd(e, t) {
  var n = md(e);
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
    n = md(n);
  }
}
function ug(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ug(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cg() {
  for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ro(e.document);
  }
  return t;
}
function xc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Ux(e) {
  var t = cg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ug(n.ownerDocument.documentElement, n)) {
    if (r !== null && xc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = gd(n, s));
        var o = gd(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var $x = Rt && 'documentMode' in document && 11 >= document.documentMode,
  ar = null,
  Dl = null,
  xi = null,
  Il = !1;
function vd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Il ||
    ar == null ||
    ar !== ro(r) ||
    ((r = ar),
    'selectionStart' in r && xc(r)
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
    (xi && Ii(xi, r)) ||
      ((xi = r),
      (r = co(Dl, 'onSelect')),
      0 < r.length &&
        ((t = new gc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ar))));
}
function Es(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var lr = {
    animationend: Es('Animation', 'AnimationEnd'),
    animationiteration: Es('Animation', 'AnimationIteration'),
    animationstart: Es('Animation', 'AnimationStart'),
    transitionend: Es('Transition', 'TransitionEnd'),
  },
  ja = {},
  fg = {};
Rt &&
  ((fg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  'TransitionEvent' in window || delete lr.transitionend.transition);
function Ko(e) {
  if (ja[e]) return ja[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fg) return (ja[e] = t[n]);
  return e;
}
var dg = Ko('animationend'),
  hg = Ko('animationiteration'),
  pg = Ko('animationstart'),
  mg = Ko('transitionend'),
  gg = new Map(),
  yd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function xn(e, t) {
  gg.set(e, t), Zn(t, [e]);
}
for (var Ma = 0; Ma < yd.length; Ma++) {
  var _a = yd[Ma],
    Wx = _a.toLowerCase(),
    Hx = _a[0].toUpperCase() + _a.slice(1);
  xn(Wx, 'on' + Hx);
}
xn(dg, 'onAnimationEnd');
xn(hg, 'onAnimationIteration');
xn(pg, 'onAnimationStart');
xn('dblclick', 'onDoubleClick');
xn('focusin', 'onFocus');
xn('focusout', 'onBlur');
xn(mg, 'onTransitionEnd');
Mr('onMouseEnter', ['mouseout', 'mouseover']);
Mr('onMouseLeave', ['mouseout', 'mouseover']);
Mr('onPointerEnter', ['pointerout', 'pointerover']);
Mr('onPointerLeave', ['pointerout', 'pointerover']);
Zn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Zn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Zn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Zn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Zn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Zn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var ci =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Gx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ci));
function xd(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Wy(r, t, void 0, e), (e.currentTarget = null);
}
function vg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          xd(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          xd(i, a, u), (s = l);
        }
    }
  }
  if (so) throw ((e = Ml), (so = !1), (Ml = null), e);
}
function K(e, t) {
  var n = t[Bl];
  n === void 0 && (n = t[Bl] = new Set());
  var r = e + '__bubble';
  n.has(r) || (yg(t, e, 2, !1), n.add(r));
}
function Ra(e, t, n) {
  var r = 0;
  t && (r |= 4), yg(n, e, r, t);
}
var Ps = '_reactListening' + Math.random().toString(36).slice(2);
function Oi(e) {
  if (!e[Ps]) {
    (e[Ps] = !0),
      Em.forEach(function (n) {
        n !== 'selectionchange' && (Gx.has(n) || Ra(n, !1, e), Ra(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ps] || ((t[Ps] = !0), Ra('selectionchange', !1, t));
  }
}
function yg(e, t, n, r) {
  switch (tg(t)) {
    case 1:
      var i = ox;
      break;
    case 4:
      i = ax;
      break;
    default:
      i = pc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !jl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function La(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Ln(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Bm(function () {
    var u = s,
      c = cc(n),
      f = [];
    e: {
      var d = gg.get(e);
      if (d !== void 0) {
        var v = gc,
          y = e;
        switch (e) {
          case 'keypress':
            if ($s(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = bx;
            break;
          case 'focusin':
            (y = 'focus'), (v = Ta);
            break;
          case 'focusout':
            (y = 'blur'), (v = Ta);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Ta;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = ad;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = cx;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = Ex;
            break;
          case dg:
          case hg:
          case pg:
            v = hx;
            break;
          case mg:
            v = Tx;
            break;
          case 'scroll':
            v = lx;
            break;
          case 'wheel':
            v = Nx;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = mx;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = ud;
        }
        var x = (t & 4) !== 0,
          w = !x && e === 'scroll',
          m = x ? (d !== null ? d + 'Capture' : null) : d;
        x = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S), m !== null && ((S = Mi(h, m)), S != null && x.push(zi(h, S, g)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((d = new v(d, y, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d && n !== Al && (y = n.relatedTarget || n.fromElement) && (Ln(y) || y[Lt]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? Ln(y) : null),
              y !== null &&
                ((w = Jn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((x = ad),
            (S = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = ud), (S = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
            (w = v == null ? d : ur(v)),
            (g = y == null ? d : ur(y)),
            (d = new x(S, h + 'leave', v, n, c)),
            (d.target = w),
            (d.relatedTarget = g),
            (S = null),
            Ln(c) === u &&
              ((x = new x(m, h + 'enter', y, n, c)),
              (x.target = g),
              (x.relatedTarget = w),
              (S = x)),
            (w = S),
            v && y)
          )
            t: {
              for (x = v, m = y, h = 0, g = x; g; g = nr(g)) h++;
              for (g = 0, S = m; S; S = nr(S)) g++;
              for (; 0 < h - g; ) (x = nr(x)), h--;
              for (; 0 < g - h; ) (m = nr(m)), g--;
              for (; h--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = nr(x)), (m = nr(m));
              }
              x = null;
            }
          else x = null;
          v !== null && wd(f, d, v, x, !1),
            y !== null && w !== null && wd(f, w, y, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? ur(u) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var C = Ix;
        else if (dd(d))
          if (ag) C = Vx;
          else {
            C = zx;
            var P = Ox;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (C = Fx);
        if (C && (C = C(e, u))) {
          og(f, C, n, c);
          break e;
        }
        P && P(e, d, u),
          e === 'focusout' &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === 'number' &&
            Cl(d, 'number', d.value);
      }
      switch (((P = u ? ur(u) : window), e)) {
        case 'focusin':
          (dd(P) || P.contentEditable === 'true') && ((ar = P), (Dl = u), (xi = null));
          break;
        case 'focusout':
          xi = Dl = ar = null;
          break;
        case 'mousedown':
          Il = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Il = !1), vd(f, n, c);
          break;
        case 'selectionchange':
          if ($x) break;
        case 'keydown':
        case 'keyup':
          vd(f, n, c);
      }
      var A;
      if (yc)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart';
              break e;
            case 'compositionend':
              E = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              E = 'onCompositionUpdate';
              break e;
          }
          E = void 0;
        }
      else
        or
          ? ig(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart');
      E &&
        (rg &&
          n.locale !== 'ko' &&
          (or || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && or && (A = ng())
            : ((qt = c), (mc = 'value' in qt ? qt.value : qt.textContent), (or = !0))),
        (P = co(u, E)),
        0 < P.length &&
          ((E = new ld(E, e, null, n, c)),
          f.push({ event: E, listeners: P }),
          A ? (E.data = A) : ((A = sg(n)), A !== null && (E.data = A)))),
        (A = Mx ? _x(e, n) : Rx(e, n)) &&
          ((u = co(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new ld('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = A)));
    }
    vg(f, t);
  });
}
function zi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function co(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Mi(e, n)),
      s != null && r.unshift(zi(e, s, i)),
      (s = Mi(e, t)),
      s != null && r.push(zi(e, s, i))),
      (e = e.return);
  }
  return r;
}
function nr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wd(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Mi(n, s)), l != null && o.unshift(zi(n, l, a)))
        : i || ((l = Mi(n, s)), l != null && o.push(zi(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Kx = /\r\n?/g,
  Yx = /\u0000|\uFFFD/g;
function Sd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Kx,
      `
`
    )
    .replace(Yx, '');
}
function Ts(e, t, n) {
  if (((t = Sd(t)), Sd(e) !== t && n)) throw Error(k(425));
}
function fo() {}
var Ol = null,
  zl = null;
function Fl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Xx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  bd = typeof Promise == 'function' ? Promise : void 0,
  Qx =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof bd < 'u'
      ? function (e) {
          return bd.resolve(null).then(e).catch(qx);
        }
      : Vl;
function qx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Da(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Li(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Li(t);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Cd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hr = Math.random().toString(36).slice(2),
  dt = '__reactFiber$' + Hr,
  Fi = '__reactProps$' + Hr,
  Lt = '__reactContainer$' + Hr,
  Bl = '__reactEvents$' + Hr,
  Zx = '__reactListeners$' + Hr,
  Jx = '__reactHandles$' + Hr;
function Ln(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Lt] || n[dt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Cd(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = Cd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function is(e) {
  return (
    (e = e[dt] || e[Lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Yo(e) {
  return e[Fi] || null;
}
var Ul = [],
  cr = -1;
function wn(e) {
  return { current: e };
}
function X(e) {
  0 > cr || ((e.current = Ul[cr]), (Ul[cr] = null), cr--);
}
function H(e, t) {
  cr++, (Ul[cr] = e.current), (e.current = t);
}
var dn = {},
  Ee = wn(dn),
  _e = wn(!1),
  Hn = dn;
function _r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function ho() {
  X(_e), X(Ee);
}
function kd(e, t, n) {
  if (Ee.current !== dn) throw Error(k(168));
  H(Ee, t), H(_e, n);
}
function xg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Oy(e) || 'Unknown', i));
  return ne({}, n, r);
}
function po(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (Hn = Ee.current),
    H(Ee, e),
    H(_e, _e.current),
    !0
  );
}
function Ed(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = xg(e, t, Hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(_e),
      X(Ee),
      H(Ee, e))
    : X(_e),
    H(_e, n);
}
var kt = null,
  Xo = !1,
  Ia = !1;
function wg(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function e2(e) {
  (Xo = !0), wg(e);
}
function Sn() {
  if (!Ia && kt !== null) {
    Ia = !0;
    var e = 0,
      t = $;
    try {
      var n = kt;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kt = null), (Xo = !1);
    } catch (i) {
      throw (kt !== null && (kt = kt.slice(e + 1)), Hm(fc, Sn), i);
    } finally {
      ($ = t), (Ia = !1);
    }
  }
  return null;
}
var fr = [],
  dr = 0,
  mo = null,
  go = 0,
  Ye = [],
  Xe = 0,
  Gn = null,
  Et = 1,
  Pt = '';
function An(e, t) {
  (fr[dr++] = go), (fr[dr++] = mo), (mo = e), (go = t);
}
function Sg(e, t, n) {
  (Ye[Xe++] = Et), (Ye[Xe++] = Pt), (Ye[Xe++] = Gn), (Gn = e);
  var r = Et;
  e = Pt;
  var i = 32 - it(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - it(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Et = (1 << (32 - it(t) + i)) | (n << i) | r),
      (Pt = s + e);
  } else (Et = (1 << s) | (n << i) | r), (Pt = e);
}
function wc(e) {
  e.return !== null && (An(e, 1), Sg(e, 1, 0));
}
function Sc(e) {
  for (; e === mo; ) (mo = fr[--dr]), (fr[dr] = null), (go = fr[--dr]), (fr[dr] = null);
  for (; e === Gn; )
    (Gn = Ye[--Xe]),
      (Ye[Xe] = null),
      (Pt = Ye[--Xe]),
      (Ye[Xe] = null),
      (Et = Ye[--Xe]),
      (Ye[Xe] = null);
}
var ze = null,
  Ie = null,
  q = !1,
  rt = null;
function bg(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Pd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ie = rn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gn !== null ? { id: Et, overflow: Pt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wl(e) {
  if (q) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Pd(e, t)) {
        if ($l(e)) throw Error(k(418));
        t = rn(n.nextSibling);
        var r = ze;
        t && Pd(e, t)
          ? bg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e));
      }
    } else {
      if ($l(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e);
    }
  }
}
function Td(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function As(e) {
  if (e !== ze) return !1;
  if (!q) return Td(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Fl(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if ($l(e)) throw (Cg(), Error(k(418)));
    for (; t; ) bg(e, t), (t = rn(t.nextSibling));
  }
  if ((Td(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ie = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = ze ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Cg() {
  for (var e = Ie; e; ) e = rn(e.nextSibling);
}
function Rr() {
  (Ie = ze = null), (q = !1);
}
function bc(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var t2 = Vt.ReactCurrentBatchConfig;
function ti(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        s = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Ns(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Ad(e) {
  var t = e._init;
  return t(e._payload);
}
function kg(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = ln(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, g, S) {
    return h === null || h.tag !== 6
      ? ((h = $a(g, m.mode, S)), (h.return = m), h)
      : ((h = i(h, g)), (h.return = m), h);
  }
  function l(m, h, g, S) {
    var C = g.type;
    return C === sr
      ? c(m, h, g.props.children, S, g.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == 'object' && C !== null && C.$$typeof === Kt && Ad(C) === h.type))
      ? ((S = i(h, g.props)), (S.ref = ti(m, h, g)), (S.return = m), S)
      : ((S = Qs(g.type, g.key, g.props, null, m.mode, S)),
        (S.ref = ti(m, h, g)),
        (S.return = m),
        S);
  }
  function u(m, h, g, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Wa(g, m.mode, S)), (h.return = m), h)
      : ((h = i(h, g.children || [])), (h.return = m), h);
  }
  function c(m, h, g, S, C) {
    return h === null || h.tag !== 7
      ? ((h = Vn(g, m.mode, S, C)), (h.return = m), h)
      : ((h = i(h, g)), (h.return = m), h);
  }
  function f(m, h, g) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = $a('' + h, m.mode, g)), (h.return = m), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case ys:
          return (
            (g = Qs(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = ti(m, null, h)),
            (g.return = m),
            g
          );
        case ir:
          return (h = Wa(h, m.mode, g)), (h.return = m), h;
        case Kt:
          var S = h._init;
          return f(m, S(h._payload), g);
      }
      if (li(h) || Qr(h)) return (h = Vn(h, m.mode, g, null)), (h.return = m), h;
      Ns(m, h);
    }
    return null;
  }
  function d(m, h, g, S) {
    var C = h !== null ? h.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return C !== null ? null : a(m, h, '' + g, S);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case ys:
          return g.key === C ? l(m, h, g, S) : null;
        case ir:
          return g.key === C ? u(m, h, g, S) : null;
        case Kt:
          return (C = g._init), d(m, h, C(g._payload), S);
      }
      if (li(g) || Qr(g)) return C !== null ? null : c(m, h, g, S, null);
      Ns(m, g);
    }
    return null;
  }
  function v(m, h, g, S, C) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (m = m.get(g) || null), a(h, m, '' + S, C);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case ys:
          return (m = m.get(S.key === null ? g : S.key) || null), l(h, m, S, C);
        case ir:
          return (m = m.get(S.key === null ? g : S.key) || null), u(h, m, S, C);
        case Kt:
          var P = S._init;
          return v(m, h, g, P(S._payload), C);
      }
      if (li(S) || Qr(S)) return (m = m.get(g) || null), c(h, m, S, C, null);
      Ns(h, S);
    }
    return null;
  }
  function y(m, h, g, S) {
    for (
      var C = null, P = null, A = h, E = (h = 0), I = null;
      A !== null && E < g.length;
      E++
    ) {
      A.index > E ? ((I = A), (A = null)) : (I = A.sibling);
      var M = d(m, A, g[E], S);
      if (M === null) {
        A === null && (A = I);
        break;
      }
      e && A && M.alternate === null && t(m, A),
        (h = s(M, h, E)),
        P === null ? (C = M) : (P.sibling = M),
        (P = M),
        (A = I);
    }
    if (E === g.length) return n(m, A), q && An(m, E), C;
    if (A === null) {
      for (; E < g.length; E++)
        (A = f(m, g[E], S)),
          A !== null &&
            ((h = s(A, h, E)), P === null ? (C = A) : (P.sibling = A), (P = A));
      return q && An(m, E), C;
    }
    for (A = r(m, A); E < g.length; E++)
      (I = v(A, m, E, g[E], S)),
        I !== null &&
          (e && I.alternate !== null && A.delete(I.key === null ? E : I.key),
          (h = s(I, h, E)),
          P === null ? (C = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        A.forEach(function (re) {
          return t(m, re);
        }),
      q && An(m, E),
      C
    );
  }
  function x(m, h, g, S) {
    var C = Qr(g);
    if (typeof C != 'function') throw Error(k(150));
    if (((g = C.call(g)), g == null)) throw Error(k(151));
    for (
      var P = (C = null), A = h, E = (h = 0), I = null, M = g.next();
      A !== null && !M.done;
      E++, M = g.next()
    ) {
      A.index > E ? ((I = A), (A = null)) : (I = A.sibling);
      var re = d(m, A, M.value, S);
      if (re === null) {
        A === null && (A = I);
        break;
      }
      e && A && re.alternate === null && t(m, A),
        (h = s(re, h, E)),
        P === null ? (C = re) : (P.sibling = re),
        (P = re),
        (A = I);
    }
    if (M.done) return n(m, A), q && An(m, E), C;
    if (A === null) {
      for (; !M.done; E++, M = g.next())
        (M = f(m, M.value, S)),
          M !== null &&
            ((h = s(M, h, E)), P === null ? (C = M) : (P.sibling = M), (P = M));
      return q && An(m, E), C;
    }
    for (A = r(m, A); !M.done; E++, M = g.next())
      (M = v(A, m, E, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && A.delete(M.key === null ? E : M.key),
          (h = s(M, h, E)),
          P === null ? (C = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        A.forEach(function (F) {
          return t(m, F);
        }),
      q && An(m, E),
      C
    );
  }
  function w(m, h, g, S) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === sr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case ys:
          e: {
            for (var C = g.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = g.type), C === sr)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (h = i(P, g.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Kt &&
                    Ad(C) === P.type)
                ) {
                  n(m, P.sibling),
                    (h = i(P, g.props)),
                    (h.ref = ti(m, P, g)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            g.type === sr
              ? ((h = Vn(g.props.children, m.mode, S, g.key)), (h.return = m), (m = h))
              : ((S = Qs(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = ti(m, h, g)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case ir:
          e: {
            for (P = g.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(m, h.sibling), (h = i(h, g.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Wa(g, m.mode, S)), (h.return = m), (m = h);
          }
          return o(m);
        case Kt:
          return (P = g._init), w(m, h, P(g._payload), S);
      }
      if (li(g)) return y(m, h, g, S);
      if (Qr(g)) return x(m, h, g, S);
      Ns(m, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, g)), (h.return = m), (m = h))
          : (n(m, h), (h = $a(g, m.mode, S)), (h.return = m), (m = h)),
        o(m))
      : n(m, h);
  }
  return w;
}
var Lr = kg(!0),
  Eg = kg(!1),
  vo = wn(null),
  yo = null,
  hr = null,
  Cc = null;
function kc() {
  Cc = hr = yo = null;
}
function Ec(e) {
  var t = vo.current;
  X(vo), (e._currentValue = t);
}
function Hl(e, t, n) {
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
function Tr(e, t) {
  (yo = e),
    (Cc = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (Cc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (yo === null) throw Error(k(308));
      (hr = e), (yo.dependencies = { lanes: 0, firstContext: e });
    } else hr = hr.next = e;
  return t;
}
var Dn = null;
function Pc(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function Pg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Pc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Tc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function At(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Pc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function Ws(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), dc(e, n);
  }
}
function Nd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xo(e, t, n, r) {
  var i = e.updateQueue;
  Yt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var d = a.lane,
        v = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            x = a;
          switch (((d = t), (v = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == 'function')) {
                f = y.call(v, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (d = typeof y == 'function' ? y.call(v, f, d) : y),
                d == null)
              )
                break e;
              f = ne({}, f, d);
              break e;
            case 2:
              Yt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [a]) : d.push(a));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = f)) : (c = c.next = v),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Yn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function jd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var ss = {},
  gt = wn(ss),
  Vi = wn(ss),
  Bi = wn(ss);
function In(e) {
  if (e === ss) throw Error(k(174));
  return e;
}
function Ac(e, t) {
  switch ((H(Bi, t), H(Vi, e), H(gt, ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = El(t, e));
  }
  X(gt), H(gt, t);
}
function Dr() {
  X(gt), X(Vi), X(Bi);
}
function Ag(e) {
  In(Bi.current);
  var t = In(gt.current),
    n = El(t, e.type);
  t !== n && (H(Vi, e), H(gt, n));
}
function Nc(e) {
  Vi.current === e && (X(gt), X(Vi));
}
var J = wn(0);
function wo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Oa = [];
function jc() {
  for (var e = 0; e < Oa.length; e++) Oa[e]._workInProgressVersionPrimary = null;
  Oa.length = 0;
}
var Hs = Vt.ReactCurrentDispatcher,
  za = Vt.ReactCurrentBatchConfig,
  Kn = 0,
  te = null,
  ue = null,
  de = null,
  So = !1,
  wi = !1,
  Ui = 0,
  n2 = 0;
function ye() {
  throw Error(k(321));
}
function Mc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ot(e[n], t[n])) return !1;
  return !0;
}
function _c(e, t, n, r, i, s) {
  if (
    ((Kn = s),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hs.current = e === null || e.memoizedState === null ? o2 : a2),
    (e = n(r, i)),
    wi)
  ) {
    s = 0;
    do {
      if (((wi = !1), (Ui = 0), 25 <= s)) throw Error(k(301));
      (s += 1),
        (de = ue = null),
        (t.updateQueue = null),
        (Hs.current = l2),
        (e = n(r, i));
    } while (wi);
  }
  if (
    ((Hs.current = bo),
    (t = ue !== null && ue.next !== null),
    (Kn = 0),
    (de = ue = te = null),
    (So = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Rc() {
  var e = Ui !== 0;
  return (Ui = 0), e;
}
function ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (te.memoizedState = de = e) : (de = de.next = e), de;
}
function Je() {
  if (ue === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) (de = t), (ue = e);
  else {
    if (e === null) throw Error(k(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      de === null ? (te.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function $i(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Fa(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ue,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Kn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (te.lanes |= c),
          (Yn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      ot(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (te.lanes |= s), (Yn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Va(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    ot(s, t.memoizedState) || (Me = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Ng() {}
function jg(e, t) {
  var n = te,
    r = Je(),
    i = t(),
    s = !ot(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Me = !0)),
    (r = r.queue),
    Lc(Rg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Wi(9, _g.bind(null, n, r, i, t), void 0, null), he === null))
      throw Error(k(349));
    Kn & 30 || Mg(n, t, i);
  }
  return i;
}
function Mg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (te.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _g(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Lg(t) && Dg(e);
}
function Rg(e, t, n) {
  return n(function () {
    Lg(t) && Dg(e);
  });
}
function Lg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Dg(e) {
  var t = Dt(e, 1);
  t !== null && st(t, e, 1, -1);
}
function Md(e) {
  var t = ct();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $i,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = s2.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Wi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ig() {
  return Je().memoizedState;
}
function Gs(e, t, n, r) {
  var i = ct();
  (te.flags |= e), (i.memoizedState = Wi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qo(e, t, n, r) {
  var i = Je();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ue !== null) {
    var o = ue.memoizedState;
    if (((s = o.destroy), r !== null && Mc(r, o.deps))) {
      i.memoizedState = Wi(t, n, s, r);
      return;
    }
  }
  (te.flags |= e), (i.memoizedState = Wi(1 | t, n, s, r));
}
function _d(e, t) {
  return Gs(8390656, 8, e, t);
}
function Lc(e, t) {
  return Qo(2048, 8, e, t);
}
function Og(e, t) {
  return Qo(4, 2, e, t);
}
function zg(e, t) {
  return Qo(4, 4, e, t);
}
function Fg(e, t) {
  if (typeof t == 'function')
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
function Vg(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Qo(4, 4, Fg.bind(null, t, e), n);
}
function Dc() {}
function Bg(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ug(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $g(e, t, n) {
  return Kn & 21
    ? (ot(n, t) || ((n = Ym()), (te.lanes |= n), (Yn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function r2(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = za.transition;
  za.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (za.transition = r);
  }
}
function Wg() {
  return Je().memoizedState;
}
function i2(e, t, n) {
  var r = an(e);
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Hg(e))
  )
    Gg(t, n);
  else if (((n = Pg(e, t, n, r)), n !== null)) {
    var i = Te();
    st(n, e, r, i), Kg(n, t, r);
  }
}
function s2(e, t, n) {
  var r = an(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hg(e)) Gg(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ot(a, o))) {
          var l = t.interleaved;
          l === null ? ((i.next = i), Pc(t)) : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pg(e, t, i, r)), n !== null && ((i = Te()), st(n, e, r, i), Kg(n, t, r));
  }
}
function Hg(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function Gg(e, t) {
  wi = So = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Kg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), dc(e, n);
  }
}
var bo = {
    readContext: Ze,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  o2 = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: _d,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Gs(4194308, 4, Fg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = ct();
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
        (e = e.dispatch = i2.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Md,
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = Md(!1),
        t = e[0];
      return (e = r2.bind(null, e[1])), (ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        i = ct();
      if (q) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(k(349));
        Kn & 30 || Mg(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        _d(Rg.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Wi(9, _g.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = he.identifierPrefix;
      if (q) {
        var n = Pt,
          r = Et;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ui++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = n2++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  a2 = {
    readContext: Ze,
    useCallback: Bg,
    useContext: Ze,
    useEffect: Lc,
    useImperativeHandle: Vg,
    useInsertionEffect: Og,
    useLayoutEffect: zg,
    useMemo: Ug,
    useReducer: Fa,
    useRef: Ig,
    useState: function () {
      return Fa($i);
    },
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      var t = Je();
      return $g(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Fa($i)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Ng,
    useSyncExternalStore: jg,
    useId: Wg,
    unstable_isNewReconciler: !1,
  },
  l2 = {
    readContext: Ze,
    useCallback: Bg,
    useContext: Ze,
    useEffect: Lc,
    useImperativeHandle: Vg,
    useInsertionEffect: Og,
    useLayoutEffect: zg,
    useMemo: Ug,
    useReducer: Va,
    useRef: Ig,
    useState: function () {
      return Va($i);
    },
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      var t = Je();
      return ue === null ? (t.memoizedState = e) : $g(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Va($i)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Ng,
    useSyncExternalStore: jg,
    useId: Wg,
    unstable_isNewReconciler: !1,
  };
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = an(e),
      s = At(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = sn(e, s, i)),
      t !== null && (st(t, e, i, r), Ws(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = an(e),
      s = At(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = sn(e, s, i)),
      t !== null && (st(t, e, i, r), Ws(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = an(e),
      i = At(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = sn(e, i, r)),
      t !== null && (st(t, e, r, n), Ws(t, e, r));
  },
};
function Rd(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ii(n, r) || !Ii(i, s)
      : !0
  );
}
function Yg(e, t, n) {
  var r = !1,
    i = dn,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Ze(s))
      : ((i = Re(t) ? Hn : Ee.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? _r(e, i) : dn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Ld(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qo.enqueueReplaceState(t, t.state, null);
}
function Kl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Tc(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = Ze(s))
    : ((s = Re(t) ? Hn : Ee.current), (i.context = _r(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (Gl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && qo.enqueueReplaceState(i, i.state, null),
      xo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ir(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Iy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ba(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var u2 = typeof WeakMap == 'function' ? WeakMap : Map;
function Xg(e, t, n) {
  (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ko || ((ko = !0), (iu = r)), Yl(e, t);
    }),
    n
  );
}
function Qg(e, t, n) {
  (n = At(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Yl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Yl(e, t),
          typeof r != 'function' && (on === null ? (on = new Set([this])) : on.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function Dd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new u2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = C2.bind(null, e, t, n)), t.then(e, e));
}
function Id(e) {
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
function Od(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = At(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var c2 = Vt.ReactCurrentOwner,
  Me = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? Eg(t, null, n, r) : Lr(t, e.child, n, r);
}
function zd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Tr(t, i),
    (r = _c(e, t, n, r, s, i)),
    (n = Rc()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        It(e, t, i))
      : (q && n && wc(t), (t.flags |= 1), Pe(e, t, r, i), t.child)
  );
}
function Fd(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !$c(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), qg(e, t, s, r, i))
      : ((e = Qs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ii), n(o, r) && e.ref === t.ref))
      return It(e, t, i);
  }
  return (t.flags |= 1), (e = ln(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function qg(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ii(s, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), It(e, t, i);
  }
  return Xl(e, t, n, r, i);
}
function Zg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(mr, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          H(mr, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        H(mr, De),
        (De |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(mr, De),
      (De |= r);
  return Pe(e, t, i, n), t.child;
}
function Jg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xl(e, t, n, r, i) {
  var s = Re(n) ? Hn : Ee.current;
  return (
    (s = _r(t, s)),
    Tr(t, i),
    (n = _c(e, t, n, r, s, i)),
    (r = Rc()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        It(e, t, i))
      : (q && r && wc(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
  );
}
function Vd(e, t, n, r, i) {
  if (Re(n)) {
    var s = !0;
    po(t);
  } else s = !1;
  if ((Tr(t, i), t.stateNode === null)) Ks(e, t), Yg(t, n, r), Kl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Ze(u))
      : ((u = Re(n) ? Hn : Ee.current), (u = _r(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Ld(t, o, r, u)),
      (Yt = !1);
    var d = t.memoizedState;
    (o.state = d),
      xo(t, r, o, i),
      (l = t.memoizedState),
      a !== r || d !== l || _e.current || Yt
        ? (typeof c == 'function' && (Gl(t, n, c, r), (l = t.memoizedState)),
          (a = Yt || Rd(t, n, a, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      Tg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : tt(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Ze(l))
        : ((l = Re(n) ? Hn : Ee.current), (l = _r(t, l)));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== f || d !== l) && Ld(t, o, r, l)),
      (Yt = !1),
      (d = t.memoizedState),
      (o.state = d),
      xo(t, r, o, i);
    var y = t.memoizedState;
    a !== f || d !== y || _e.current || Yt
      ? (typeof v == 'function' && (Gl(t, n, v, r), (y = t.memoizedState)),
        (u = Yt || Rd(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ql(e, t, n, r, s, i);
}
function Ql(e, t, n, r, i, s) {
  Jg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Ed(t, n, !1), It(e, t, s);
  (r = t.stateNode), (c2.current = t);
  var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Lr(t, e.child, null, s)), (t.child = Lr(t, null, a, s)))
      : Pe(e, t, a, s),
    (t.memoizedState = r.state),
    i && Ed(t, n, !0),
    t.child
  );
}
function e0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? kd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kd(e, t.context, !1),
    Ac(e, t.containerInfo);
}
function Bd(e, t, n, r, i) {
  return Rr(), bc(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function t0(e, t, n) {
  var r = t.pendingProps,
    i = J.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    H(J, i & 1),
    e === null)
  )
    return (
      Wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = ea(o, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Zl(n)),
              (t.memoizedState = ql),
              e)
            : Ic(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return f2(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = ln(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = ln(a, s)) : ((s = Vn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Zl(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ql),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = ln(s, { mode: 'visible', children: r.children })),
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
function Ic(e, t) {
  return (
    (t = ea({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function js(e, t, n, r) {
  return (
    r !== null && bc(r),
    Lr(t, e.child, null, n),
    (e = Ic(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function f2(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ba(Error(k(422)))), js(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = ea({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = Vn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Lr(t, e.child, null, o),
        (t.child.memoizedState = Zl(o)),
        (t.memoizedState = ql),
        s);
  if (!(t.mode & 1)) return js(e, t, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(k(419))), (r = Ba(s, r, void 0)), js(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Me || a)) {
    if (((r = he), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), Dt(e, i), st(r, e, i, -1));
    }
    return Uc(), (r = Ba(Error(k(421)))), js(e, t, o, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = k2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ie = rn(i.nextSibling)),
      (ze = t),
      (q = !0),
      (rt = null),
      e !== null &&
        ((Ye[Xe++] = Et),
        (Ye[Xe++] = Pt),
        (Ye[Xe++] = Gn),
        (Et = e.id),
        (Pt = e.overflow),
        (Gn = t)),
      (t = Ic(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ud(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hl(e.return, t, n);
}
function Ua(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function n0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Pe(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ud(e, n, t);
        else if (e.tag === 19) Ud(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && wo(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ua(t, !1, i, n, s);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && wo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ua(t, !0, n, null, s);
        break;
      case 'together':
        Ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ks(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function d2(e, t, n) {
  switch (t.tag) {
    case 3:
      e0(t), Rr();
      break;
    case 5:
      Ag(t);
      break;
    case 1:
      Re(t.type) && po(t);
      break;
    case 4:
      Ac(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      H(vo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? t0(e, t, n)
          : (H(J, J.current & 1), (e = It(e, t, n)), e !== null ? e.sibling : null);
      H(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return n0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        H(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zg(e, t, n);
  }
  return It(e, t, n);
}
var r0, Jl, i0, s0;
r0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Jl = function () {};
i0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), In(gt.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = Sl(e, i)), (r = Sl(e, r)), (s = []);
        break;
      case 'select':
        (i = ne({}, i, { value: void 0 })), (r = ne({}, r, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (i = kl(e, i)), (r = kl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = fo);
    }
    Pl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ni.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in l)
              l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (s = s || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Ni.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && K('scroll', e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
s0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ni(e, t) {
  if (!q)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function h2(e, t, n) {
  var r = t.pendingProps;
  switch ((Sc(t), t.tag)) {
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
      return xe(t), null;
    case 1:
      return Re(t.type) && ho(), xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dr(),
        X(_e),
        X(Ee),
        jc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (As(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (au(rt), (rt = null)))),
        Jl(e, t),
        xe(t),
        null
      );
    case 5:
      Nc(t);
      var i = In(Bi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        i0(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return xe(t), null;
        }
        if (((e = In(gt.current)), As(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[dt] = t), (r[Fi] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              K('cancel', r), K('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              K('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < ci.length; i++) K(ci[i], r);
              break;
            case 'source':
              K('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              K('error', r), K('load', r);
              break;
            case 'details':
              K('toggle', r);
              break;
            case 'input':
              qf(r, s), K('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }), K('invalid', r);
              break;
            case 'textarea':
              Jf(r, s), K('invalid', r);
          }
          Pl(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && Ts(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 && Ts(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : Ni.hasOwnProperty(o) && a != null && o === 'onScroll' && K('scroll', r);
            }
          switch (n) {
            case 'input':
              xs(r), Zf(r, s, !0);
              break;
            case 'textarea':
              xs(r), ed(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = fo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Rm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[dt] = t),
            (e[Fi] = r),
            r0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Tl(n, r)), n)) {
              case 'dialog':
                K('cancel', e), K('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                K('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < ci.length; i++) K(ci[i], e);
                i = r;
                break;
              case 'source':
                K('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                K('error', e), K('load', e), (i = r);
                break;
              case 'details':
                K('toggle', e), (i = r);
                break;
              case 'input':
                qf(e, r), (i = Sl(e, r)), K('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ne({}, r, { value: void 0 })),
                  K('invalid', e);
                break;
              case 'textarea':
                Jf(e, r), (i = kl(e, r)), K('invalid', e);
                break;
              default:
                i = r;
            }
            Pl(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === 'style'
                  ? Im(e, l)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Lm(e, l))
                  : s === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && ji(e, l)
                    : typeof l == 'number' && ji(e, '' + l)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Ni.hasOwnProperty(s)
                      ? l != null && s === 'onScroll' && K('scroll', e)
                      : l != null && oc(e, s, l, o));
              }
            switch (n) {
              case 'input':
                xs(e), Zf(e, r, !1);
                break;
              case 'textarea':
                xs(e), ed(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + fn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Cr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null && Cr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = fo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) s0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = In(Bi.current)), In(gt.current), As(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (s = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ts(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ts(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r);
      }
      return xe(t), null;
    case 13:
      if (
        (X(J),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Ie !== null && t.mode & 1 && !(t.flags & 128))
          Cg(), Rr(), (t.flags |= 98560), (s = !1);
        else if (((s = As(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(k(318));
            if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
              throw Error(k(317));
            s[dt] = t;
          } else Rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xe(t), (s = !1);
        } else rt !== null && (au(rt), (rt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || J.current & 1 ? ce === 0 && (ce = 3) : Uc())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return Dr(), Jl(e, t), e === null && Oi(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return Ec(t.type._context), xe(t), null;
    case 17:
      return Re(t.type) && ho(), xe(t), null;
    case 19:
      if ((X(J), (s = t.memoizedState), s === null)) return xe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ni(s, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = wo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ni(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return H(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ae() > Or &&
            ((t.flags |= 128), (r = !0), ni(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = wo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ni(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !q)
            )
              return xe(t), null;
          } else
            2 * ae() - s.renderingStartTime > Or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ni(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ae()),
          (t.sibling = null),
          (n = J.current),
          H(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        Bc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function p2(e, t) {
  switch ((Sc(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dr(),
        X(_e),
        X(Ee),
        jc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nc(t), null;
    case 13:
      if ((X(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Rr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return X(J), null;
    case 4:
      return Dr(), null;
    case 10:
      return Ec(t.type._context), null;
    case 22:
    case 23:
      return Bc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ms = !1,
  Se = !1,
  m2 = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null;
function pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function eu(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var $d = !1;
function g2(e, t) {
  if (((Ol = lo), (e = cg()), xc(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (d = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zl = { focusedElem: e, selectionRange: n }, lo = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    w = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : tt(t.type, x),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (S) {
          se(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (y = $d), ($d = !1), y;
}
function Si(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && eu(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Zo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function tu(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function o0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), o0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[Fi], delete t[Bl], delete t[Zx], delete t[Jx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function a0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || a0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; ) nu(e, t, n), (e = e.sibling);
}
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), (e = e.sibling);
}
var pe = null,
  nt = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) l0(e, t, n), (n = n.sibling);
}
function l0(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == 'function')
    try {
      mt.onCommitFiberUnmount(Wo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || pr(n, t);
    case 6:
      var r = pe,
        i = nt;
      (pe = null),
        Ut(e, t, n),
        (pe = r),
        (nt = i),
        pe !== null &&
          (nt
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (nt
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8 ? Da(e.parentNode, n) : e.nodeType === 1 && Da(e, n),
            Li(e))
          : Da(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (i = nt),
        (pe = n.stateNode.containerInfo),
        (nt = !0),
        Ut(e, t, n),
        (pe = r),
        (nt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && eu(n, t, o), (i = i.next);
        } while (i !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (pr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          se(n, t, a);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), Ut(e, t, n), (Se = r))
        : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function Hd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new m2()),
      t.forEach(function (r) {
        var i = E2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (pe = a.stateNode), (nt = !1);
              break e;
            case 3:
              (pe = a.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (pe = a.stateNode.containerInfo), (nt = !0);
              break e;
          }
          a = a.return;
        }
        if (pe === null) throw Error(k(160));
        l0(s, o, i), (pe = null), (nt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        se(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) u0(t, e), (t = t.sibling);
}
function u0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), ut(e), r & 4)) {
        try {
          Si(3, e, e.return), Zo(3, e);
        } catch (x) {
          se(e, e.return, x);
        }
        try {
          Si(5, e, e.return);
        } catch (x) {
          se(e, e.return, x);
        }
      }
      break;
    case 1:
      et(t, e), ut(e), r & 512 && n !== null && pr(n, n.return);
      break;
    case 5:
      if ((et(t, e), ut(e), r & 512 && n !== null && pr(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          ji(i, '');
        } catch (x) {
          se(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && Mm(i, s), Tl(a, o);
            var u = Tl(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === 'style'
                ? Im(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? Lm(i, f)
                : c === 'children'
                ? ji(i, f)
                : oc(i, c, f, u);
            }
            switch (a) {
              case 'input':
                bl(i, s);
                break;
              case 'textarea':
                _m(i, s);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? Cr(i, !!s.multiple, v, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Cr(i, !!s.multiple, s.defaultValue, !0)
                      : Cr(i, !!s.multiple, s.multiple ? [] : '', !1));
            }
            i[Fi] = s;
          } catch (x) {
            se(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((et(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          se(e, e.return, x);
        }
      }
      break;
    case 3:
      if ((et(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Li(t.containerInfo);
        } catch (x) {
          se(e, e.return, x);
        }
      break;
    case 4:
      et(t, e), ut(e);
      break;
    case 13:
      et(t, e),
        ut(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fc = ae())),
        r & 4 && Hd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (u = Se) || c), et(t, e), (Se = u)) : et(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((d = N), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Si(4, d, d.return);
                  break;
                case 1:
                  pr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      se(r, n, x);
                    }
                  }
                  break;
                case 5:
                  pr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Kd(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (N = v)) : Kd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (a.style.display = Dm('display', o)));
              } catch (x) {
                se(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (x) {
                se(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      et(t, e), ut(e), r & 4 && Hd(e);
      break;
    case 21:
      break;
    default:
      et(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (a0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ji(i, ''), (r.flags &= -33));
          var s = Wd(e);
          ru(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Wd(e);
          nu(e, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function v2(e, t, n) {
  (N = e), c0(e);
}
function c0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ms;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Se;
        a = Ms;
        var u = Se;
        if (((Ms = o), (Se = l) && !u))
          for (N = i; N !== null; )
            (o = N),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Yd(i)
                : l !== null
                ? ((l.return = o), (N = l))
                : Yd(i);
        for (; s !== null; ) (N = s), c0(s), (s = s.sibling);
        (N = i), (Ms = a), (Se = u);
      }
      Gd(e);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (N = s)) : Gd(e);
  }
}
function Gd(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || Zo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && jd(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                jd(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Li(f);
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
              throw Error(k(163));
          }
        Se || (t.flags & 512 && tu(t));
      } catch (d) {
        se(t, t.return, d);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Kd(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Yd(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Zo(4, t);
          } catch (l) {
            se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              se(t, i, l);
            }
          }
          var s = t.return;
          try {
            tu(t);
          } catch (l) {
            se(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            tu(t);
          } catch (l) {
            se(t, o, l);
          }
      }
    } catch (l) {
      se(t, t.return, l);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (N = a);
      break;
    }
    N = t.return;
  }
}
var y2 = Math.ceil,
  Co = Vt.ReactCurrentDispatcher,
  Oc = Vt.ReactCurrentOwner,
  qe = Vt.ReactCurrentBatchConfig,
  V = 0,
  he = null,
  le = null,
  ge = 0,
  De = 0,
  mr = wn(0),
  ce = 0,
  Hi = null,
  Yn = 0,
  Jo = 0,
  zc = 0,
  bi = null,
  je = null,
  Fc = 0,
  Or = 1 / 0,
  Ct = null,
  ko = !1,
  iu = null,
  on = null,
  _s = !1,
  Zt = null,
  Eo = 0,
  Ci = 0,
  su = null,
  Ys = -1,
  Xs = 0;
function Te() {
  return V & 6 ? ae() : Ys !== -1 ? Ys : (Ys = ae());
}
function an(e) {
  return e.mode & 1
    ? V & 2 && ge !== 0
      ? ge & -ge
      : t2.transition !== null
      ? (Xs === 0 && (Xs = Ym()), Xs)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tg(e.type))),
        e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < Ci) throw ((Ci = 0), (su = null), Error(k(185)));
  ns(e, n, r),
    (!(V & 2) || e !== he) &&
      (e === he && (!(V & 2) && (Jo |= n), ce === 4 && Qt(e, ge)),
      Le(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Or = ae() + 500), Xo && Sn()));
}
function Le(e, t) {
  var n = e.callbackNode;
  tx(e, t);
  var r = ao(e, e === he ? ge : 0);
  if (r === 0) n !== null && rd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rd(n), t === 1))
      e.tag === 0 ? e2(Xd.bind(null, e)) : wg(Xd.bind(null, e)),
        Qx(function () {
          !(V & 6) && Sn();
        }),
        (n = null);
    else {
      switch (Xm(r)) {
        case 1:
          n = fc;
          break;
        case 4:
          n = Gm;
          break;
        case 16:
          n = oo;
          break;
        case 536870912:
          n = Km;
          break;
        default:
          n = oo;
      }
      n = y0(n, f0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function f0(e, t) {
  if (((Ys = -1), (Xs = 0), V & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Ar() && e.callbackNode !== n) return null;
  var r = ao(e, e === he ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Po(e, r);
  else {
    t = r;
    var i = V;
    V |= 2;
    var s = h0();
    (he !== e || ge !== t) && ((Ct = null), (Or = ae() + 500), Fn(e, t));
    do
      try {
        S2();
        break;
      } catch (a) {
        d0(e, a);
      }
    while (!0);
    kc(),
      (Co.current = s),
      (V = i),
      le !== null ? (t = 0) : ((he = null), (ge = 0), (t = ce));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = _l(e)), i !== 0 && ((r = i), (t = ou(e, i)))), t === 1))
      throw ((n = Hi), Fn(e, 0), Qt(e, r), Le(e, ae()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !x2(i) &&
          ((t = Po(e, r)),
          t === 2 && ((s = _l(e)), s !== 0 && ((r = s), (t = ou(e, s)))),
          t === 1))
      )
        throw ((n = Hi), Fn(e, 0), Qt(e, r), Le(e, ae()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Nn(e, je, Ct);
          break;
        case 3:
          if ((Qt(e, r), (r & 130023424) === r && ((t = Fc + 500 - ae()), 10 < t))) {
            if (ao(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Vl(Nn.bind(null, e, je, Ct), t);
            break;
          }
          Nn(e, je, Ct);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - it(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ae() - r),
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
                : 1960 * y2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vl(Nn.bind(null, e, je, Ct), r);
            break;
          }
          Nn(e, je, Ct);
          break;
        case 5:
          Nn(e, je, Ct);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Le(e, ae()), e.callbackNode === n ? f0.bind(null, e) : null;
}
function ou(e, t) {
  var n = bi;
  return (
    e.current.memoizedState.isDehydrated && (Fn(e, t).flags |= 256),
    (e = Po(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && au(t)),
    e
  );
}
function au(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function x2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~zc, t &= ~Jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xd(e) {
  if (V & 6) throw Error(k(327));
  Ar();
  var t = ao(e, 0);
  if (!(t & 1)) return Le(e, ae()), null;
  var n = Po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _l(e);
    r !== 0 && ((t = r), (n = ou(e, r)));
  }
  if (n === 1) throw ((n = Hi), Fn(e, 0), Qt(e, t), Le(e, ae()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nn(e, je, Ct),
    Le(e, ae()),
    null
  );
}
function Vc(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((Or = ae() + 500), Xo && Sn());
  }
}
function Xn(e) {
  Zt !== null && Zt.tag === 0 && !(V & 6) && Ar();
  var t = V;
  V |= 1;
  var n = qe.transition,
    r = $;
  try {
    if (((qe.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (qe.transition = n), (V = t), !(V & 6) && Sn();
  }
}
function Bc() {
  (De = mr.current), X(mr);
}
function Fn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xx(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Sc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ho();
          break;
        case 3:
          Dr(), X(_e), X(Ee), jc();
          break;
        case 5:
          Nc(r);
          break;
        case 4:
          Dr();
          break;
        case 13:
          X(J);
          break;
        case 19:
          X(J);
          break;
        case 10:
          Ec(r.type._context);
          break;
        case 22:
        case 23:
          Bc();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (le = e = ln(e.current, null)),
    (ge = De = t),
    (ce = 0),
    (Hi = null),
    (zc = Jo = Yn = 0),
    (je = bi = null),
    Dn !== null)
  ) {
    for (t = 0; t < Dn.length; t++)
      if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return e;
}
function d0(e, t) {
  do {
    var n = le;
    try {
      if ((kc(), (Hs.current = bo), So)) {
        for (var r = te.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        So = !1;
      }
      if (
        ((Kn = 0),
        (de = ue = te = null),
        (wi = !1),
        (Ui = 0),
        (Oc.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Hi = t), (le = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ge),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Id(o);
          if (v !== null) {
            (v.flags &= -257),
              Od(v, o, a, s, t),
              v.mode & 1 && Dd(s, u, t),
              (t = v),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Dd(s, u, t), Uc();
              break e;
            }
            l = Error(k(426));
          }
        } else if (q && a.mode & 1) {
          var w = Id(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Od(w, o, a, s, t), bc(Ir(l, a));
            break e;
          }
        }
        (s = l = Ir(l, a)),
          ce !== 4 && (ce = 2),
          bi === null ? (bi = [s]) : bi.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = Xg(s, l, t);
              Nd(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (on === null || !on.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = Qg(s, a, t);
                Nd(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      m0(n);
    } catch (C) {
      (t = C), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function h0() {
  var e = Co.current;
  return (Co.current = bo), e === null ? bo : e;
}
function Uc() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    he === null || (!(Yn & 268435455) && !(Jo & 268435455)) || Qt(he, ge);
}
function Po(e, t) {
  var n = V;
  V |= 2;
  var r = h0();
  (he !== e || ge !== t) && ((Ct = null), Fn(e, t));
  do
    try {
      w2();
      break;
    } catch (i) {
      d0(e, i);
    }
  while (!0);
  if ((kc(), (V = n), (Co.current = r), le !== null)) throw Error(k(261));
  return (he = null), (ge = 0), ce;
}
function w2() {
  for (; le !== null; ) p0(le);
}
function S2() {
  for (; le !== null && !Gy(); ) p0(le);
}
function p0(e) {
  var t = v0(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps), t === null ? m0(e) : (le = t), (Oc.current = null);
}
function m0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = p2(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (le = null);
        return;
      }
    } else if (((n = h2(n, t, De)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function Nn(e, t, n) {
  var r = $,
    i = qe.transition;
  try {
    (qe.transition = null), ($ = 1), b2(e, t, n, r);
  } finally {
    (qe.transition = i), ($ = r);
  }
  return null;
}
function b2(e, t, n, r) {
  do Ar();
  while (Zt !== null);
  if (V & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (nx(e, s),
    e === he && ((le = he = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _s ||
      ((_s = !0),
      y0(oo, function () {
        return Ar(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = qe.transition), (qe.transition = null);
    var o = $;
    $ = 1;
    var a = V;
    (V |= 4),
      (Oc.current = null),
      g2(e, n),
      u0(n, e),
      Ux(zl),
      (lo = !!Ol),
      (zl = Ol = null),
      (e.current = n),
      v2(n),
      Ky(),
      (V = a),
      ($ = o),
      (qe.transition = s);
  } else e.current = n;
  if (
    (_s && ((_s = !1), (Zt = e), (Eo = i)),
    (s = e.pendingLanes),
    s === 0 && (on = null),
    Qy(n.stateNode),
    Le(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ko) throw ((ko = !1), (e = iu), (iu = null), e);
  return (
    Eo & 1 && e.tag !== 0 && Ar(),
    (s = e.pendingLanes),
    s & 1 ? (e === su ? Ci++ : ((Ci = 0), (su = e))) : (Ci = 0),
    Sn(),
    null
  );
}
function Ar() {
  if (Zt !== null) {
    var e = Xm(Eo),
      t = qe.transition,
      n = $;
    try {
      if (((qe.transition = null), ($ = 16 > e ? 16 : e), Zt === null)) var r = !1;
      else {
        if (((e = Zt), (Zt = null), (Eo = 0), V & 6)) throw Error(k(331));
        var i = V;
        for (V |= 4, N = e.current; N !== null; ) {
          var s = N,
            o = s.child;
          if (N.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Si(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (N = f);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var d = c.sibling,
                        v = c.return;
                      if ((o0(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (N = d);
                        break;
                      }
                      N = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var w = x.sibling;
                    (x.sibling = null), (x = w);
                  } while (x !== null);
                }
              }
              N = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (N = o);
          else
            e: for (; N !== null; ) {
              if (((s = N), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Si(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (N = m);
                break e;
              }
              N = s.return;
            }
        }
        var h = e.current;
        for (N = h; N !== null; ) {
          o = N;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (N = g);
          else
            e: for (o = h; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zo(9, a);
                  }
                } catch (C) {
                  se(a, a.return, C);
                }
              if (a === o) {
                N = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (N = S);
                break e;
              }
              N = a.return;
            }
        }
        if (((V = i), Sn(), mt && typeof mt.onPostCommitFiberRoot == 'function'))
          try {
            mt.onPostCommitFiberRoot(Wo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (qe.transition = t);
    }
  }
  return !1;
}
function Qd(e, t, n) {
  (t = Ir(n, t)),
    (t = Xg(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Te()),
    e !== null && (ns(e, 1, t), Le(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Qd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (on === null || !on.has(r)))
        ) {
          (e = Ir(n, e)),
            (e = Qg(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Te()),
            t !== null && (ns(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function C2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ge & n) === n &&
      (ce === 4 || (ce === 3 && (ge & 130023424) === ge && 500 > ae() - Fc)
        ? Fn(e, 0)
        : (zc |= n)),
    Le(e, t);
}
function g0(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = bs), (bs <<= 1), !(bs & 130023424) && (bs = 4194304)) : (t = 1));
  var n = Te();
  (e = Dt(e, t)), e !== null && (ns(e, t, n), Le(e, n));
}
function k2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), g0(e, n);
}
function E2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), g0(e, n);
}
var v0;
v0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), d2(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), q && t.flags & 1048576 && Sg(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ks(e, t), (e = t.pendingProps);
      var i = _r(t, Ee.current);
      Tr(t, n), (i = _c(null, t, r, e, i, n));
      var s = Rc();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((s = !0), po(t)) : (s = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Tc(t),
            (i.updater = qo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Kl(t, r, e, n),
            (t = Ql(null, t, r, !0, s, n)))
          : ((t.tag = 0), q && s && wc(t), Pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ks(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = T2(r)),
          (e = tt(r, e)),
          i)
        ) {
          case 0:
            t = Xl(null, t, r, e, n);
            break e;
          case 1:
            t = Vd(null, t, r, e, n);
            break e;
          case 11:
            t = zd(null, t, r, e, n);
            break e;
          case 14:
            t = Fd(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Xl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Vd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((e0(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Tg(e, t),
          xo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Ir(Error(k(423)), t)), (t = Bd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ir(Error(k(424)), t)), (t = Bd(e, t, r, n, i));
            break e;
          } else
            for (
              Ie = rn(t.stateNode.containerInfo.firstChild),
                ze = t,
                q = !0,
                rt = null,
                n = Eg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rr(), r === i)) {
            t = It(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ag(t),
        e === null && Wl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Fl(r, i) ? (o = null) : s !== null && Fl(r, s) && (t.flags |= 32),
        Jg(e, t),
        Pe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Wl(t), null;
    case 13:
      return t0(e, t, n);
    case 4:
      return (
        Ac(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Lr(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        zd(e, t, r, i, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          H(vo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ot(s.value, o)) {
            if (s.children === i.children && !_e.current) {
              t = It(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = At(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Hl(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Hl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Tr(t, n),
        (i = Ze(i)),
        (r = r(i)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type), (i = tt(r, t.pendingProps)), (i = tt(r.type, i)), Fd(e, t, r, i, n)
      );
    case 15:
      return qg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Ks(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), po(t)) : (e = !1),
        Tr(t, n),
        Yg(t, r, i),
        Kl(t, r, i, n),
        Ql(null, t, r, !0, e, n)
      );
    case 19:
      return n0(e, t, n);
    case 22:
      return Zg(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function y0(e, t) {
  return Hm(e, t);
}
function P2(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function Qe(e, t, n, r) {
  return new P2(e, t, n, r);
}
function $c(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function T2(e) {
  if (typeof e == 'function') return $c(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lc)) return 11;
    if (e === uc) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
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
function Qs(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == 'function')) $c(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case sr:
        return Vn(n.children, i, s, t);
      case ac:
        (o = 8), (i |= 8);
        break;
      case vl:
        return (e = Qe(12, n, t, i | 2)), (e.elementType = vl), (e.lanes = s), e;
      case yl:
        return (e = Qe(13, n, t, i)), (e.elementType = yl), (e.lanes = s), e;
      case xl:
        return (e = Qe(19, n, t, i)), (e.elementType = xl), (e.lanes = s), e;
      case Am:
        return ea(n, i, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Pm:
              o = 10;
              break e;
            case Tm:
              o = 9;
              break e;
            case lc:
              o = 11;
              break e;
            case uc:
              o = 14;
              break e;
            case Kt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return (t = Qe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function Vn(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function ea(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = Am),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $a(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function Wa(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function A2(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ka(0)),
    (this.expirationTimes = ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ka(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Wc(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new A2(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Qe(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tc(s),
    e
  );
}
function N2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ir,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function x0(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Jn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return xg(e, n, t);
  }
  return t;
}
function w0(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Wc(n, r, !0, e, i, s, o, a, l)),
    (e.context = x0(null)),
    (n = e.current),
    (r = Te()),
    (i = an(n)),
    (s = At(r, i)),
    (s.callback = t ?? null),
    sn(n, s, i),
    (e.current.lanes = i),
    ns(e, i, r),
    Le(e, r),
    e
  );
}
function ta(e, t, n, r) {
  var i = t.current,
    s = Te(),
    o = an(i);
  return (
    (n = x0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = At(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(i, t, o)),
    e !== null && (st(e, i, o, s), Ws(e, i, o)),
    o
  );
}
function To(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hc(e, t) {
  qd(e, t), (e = e.alternate) && qd(e, t);
}
function j2() {
  return null;
}
var S0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gc(e) {
  this._internalRoot = e;
}
na.prototype.render = Gc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  ta(e, t, null, null);
};
na.prototype.unmount = Gc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xn(function () {
      ta(null, e, null, null);
    }),
      (t[Lt] = null);
  }
};
function na(e) {
  this._internalRoot = e;
}
na.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++);
    Xt.splice(n, 0, e), n === 0 && eg(e);
  }
};
function Kc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ra(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Zd() {}
function M2(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = To(o);
        s.call(u);
      };
    }
    var o = w0(t, r, e, 0, null, !1, !1, '', Zd);
    return (
      (e._reactRootContainer = o),
      (e[Lt] = o.current),
      Oi(e.nodeType === 8 ? e.parentNode : e),
      Xn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = To(l);
      a.call(u);
    };
  }
  var l = Wc(e, 0, !1, null, null, !1, !1, '', Zd);
  return (
    (e._reactRootContainer = l),
    (e[Lt] = l.current),
    Oi(e.nodeType === 8 ? e.parentNode : e),
    Xn(function () {
      ta(t, l, n, r);
    }),
    l
  );
}
function ia(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = To(o);
        a.call(l);
      };
    }
    ta(t, o, e, i);
  } else o = M2(n, t, e, i, r);
  return To(o);
}
Qm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ui(t.pendingLanes);
        n !== 0 && (dc(t, n | 1), Le(t, ae()), !(V & 6) && ((Or = ae() + 500), Sn()));
      }
      break;
    case 13:
      Xn(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var i = Te();
          st(r, e, 1, i);
        }
      }),
        Hc(e, 1);
  }
};
hc = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = Te();
      st(t, e, 134217728, n);
    }
    Hc(e, 134217728);
  }
};
qm = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = Te();
      st(n, e, t, r);
    }
    Hc(e, t);
  }
};
Zm = function () {
  return $;
};
Jm = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
Nl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((bl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Yo(r);
            if (!i) throw Error(k(90));
            jm(r), bl(r, i);
          }
        }
      }
      break;
    case 'textarea':
      _m(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Cr(e, !!n.multiple, t, !1);
  }
};
Fm = Vc;
Vm = Xn;
var _2 = { usingClientEntryPoint: !1, Events: [is, ur, Yo, Om, zm, Vc] },
  ri = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  R2 = {
    bundleType: ri.bundleType,
    version: ri.version,
    rendererPackageName: ri.rendererPackageName,
    rendererConfig: ri.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $m(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ri.findFiberByHostInstance || j2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rs.isDisabled && Rs.supportsFiber)
    try {
      (Wo = Rs.inject(R2)), (mt = Rs);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _2;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kc(t)) throw Error(k(200));
  return N2(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!Kc(e)) throw Error(k(299));
  var n = !1,
    r = '',
    i = S0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Wc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Lt] = t.current),
    Oi(e.nodeType === 8 ? e.parentNode : e),
    new Gc(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return (e = $m(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return Xn(e);
};
$e.hydrate = function (e, t, n) {
  if (!ra(t)) throw Error(k(200));
  return ia(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!Kc(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = S0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = w0(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Lt] = t.current),
    Oi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new na(t);
};
$e.render = function (e, t, n) {
  if (!ra(t)) throw Error(k(200));
  return ia(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!ra(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Xn(function () {
        ia(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Lt] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = Vc;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ra(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return ia(e, t, n, !1, r);
};
$e.version = '18.3.1-next-f1338f8080-20240426';
function b0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0);
    } catch (e) {
      console.error(e);
    }
}
b0(), (bm.exports = $e);
var L2 = bm.exports,
  C0,
  Jd = L2;
(C0 = Jd.createRoot), Jd.hydrateRoot;
function D2(e) {
  if (typeof Proxy > 'u') return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) => (i === 'create' ? e : (t.has(i) || t.set(i, e(i)), t.get(i))),
  });
}
function Gi(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const lu = (e) => Array.isArray(e);
function k0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ki(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function eh(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Yc(e, t, n, r) {
  if (typeof t == 'function') {
    const [i, s] = eh(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]), typeof t == 'function')
  ) {
    const [i, s] = eh(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function sa(e, t, n) {
  const r = e.getProps();
  return Yc(r, t, n !== void 0 ? n : r.custom, e);
}
const Xc = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  Qc = ['initial', ...Xc],
  os = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  bn = new Set(os),
  Nt = (e) => e * 1e3,
  jt = (e) => e / 1e3,
  I2 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  O2 = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  z2 = { type: 'keyframes', duration: 0.8 },
  F2 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  V2 = (e, { keyframes: t }) =>
    t.length > 2 ? z2 : bn.has(e) ? (e.startsWith('scale') ? O2(t[1]) : I2) : F2;
function qc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const B2 = { skipAnimations: !1, useManualTiming: !1 },
  U2 = (e) => e !== null;
function oa(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(U2),
    s = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const Ce = (e) => e;
function $2(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const v = f && r ? t : n;
      return c && s.add(u), v.has(u) || v.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const Ls = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
  W2 = 40;
function E0(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ls.reduce((m, h) => ((m[h] = $2(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = o,
    v = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, W2), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(v);
    };
  return {
    schedule: Ls.reduce((m, h) => {
      const g = o[h];
      return (m[h] = (S, C = !1, P = !1) => (n || y(), g.schedule(S, C, P))), m;
    }, {}),
    cancel: (m) => {
      for (let h = 0; h < Ls.length; h++) o[Ls[h]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: W,
    cancel: hn,
    state: me,
    steps: Ha,
  } = E0(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : Ce, !0),
  P0 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  H2 = 1e-7,
  G2 = 12;
function K2(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = P0(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > H2 && ++a < G2);
  return o;
}
function as(e, t, n, r) {
  if (e === t && n === r) return Ce;
  const i = (s) => K2(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : P0(i(s), t, r));
}
const T0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  A0 = (e) => (t) => 1 - e(1 - t),
  N0 = as(0.33, 1.53, 0.69, 0.99),
  Zc = A0(N0),
  j0 = T0(Zc),
  M0 = (e) => ((e *= 2) < 1 ? 0.5 * Zc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  Jc = (e) => 1 - Math.sin(Math.acos(e)),
  _0 = A0(Jc),
  R0 = T0(Jc),
  L0 = (e) => /^0[^.\s]+$/u.test(e);
function Y2(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
    ? e === 'none' || e === '0' || L0(e)
    : !0;
}
let uu = Ce;
const D0 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  I0 = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  O0 = I0('--'),
  X2 = I0('var(--'),
  ef = (e) => (X2(e) ? Q2.test(e.split('/*')[0].trim()) : !1),
  Q2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  q2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Z2(e) {
  const t = q2.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function z0(e, t, n = 1) {
  const [r, i] = Z2(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return D0(o) ? parseFloat(o) : o;
  }
  return ef(i) ? z0(i, t, n + 1) : i;
}
const pn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Gr = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  Yi = { ...Gr, transform: (e) => pn(0, 1, e) },
  Ds = { ...Gr, default: 1 },
  ls = (e) => ({
    test: (t) => typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Gt = ls('deg'),
  vt = ls('%'),
  R = ls('px'),
  J2 = ls('vh'),
  ew = ls('vw'),
  th = {
    ...vt,
    parse: (e) => vt.parse(e) / 100,
    transform: (e) => vt.transform(e * 100),
  },
  tw = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  nh = (e) => e === Gr || e === R,
  rh = (e, t) => parseFloat(e.split(', ')[t]),
  ih =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return rh(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? rh(s[1], e) : 0;
      }
    },
  nw = new Set(['x', 'y', 'z']),
  rw = os.filter((e) => !nw.has(e));
function iw(e) {
  const t = [];
  return (
    rw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const zr = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: ih(4, 13),
  y: ih(5, 14),
};
zr.translateX = zr.x;
zr.translateY = zr.y;
const F0 = (e) => (t) => t.test(e),
  sw = { test: (e) => e === 'auto', parse: (e) => e },
  V0 = [Gr, R, vt, Gt, ew, J2, sw],
  sh = (e) => V0.find(F0(e)),
  Bn = new Set();
let cu = !1,
  fu = !1;
function B0() {
  if (fu) {
    const e = Array.from(Bn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = iw(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (fu = !1), (cu = !1), Bn.forEach((e) => e.complete()), Bn.clear();
}
function U0() {
  Bn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (fu = !0);
  });
}
function ow() {
  U0(), B0();
}
class tf {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Bn.add(this), cu || ((cu = !0), W.read(U0), W.resolveKeyframes(B0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Bn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Bn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ki = (e) => Math.round(e * 1e5) / 1e5,
  nf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function aw(e) {
  return e == null;
}
const lw =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  rf = (e, t) => (n) =>
    !!(
      (typeof n == 'string' && lw.test(n) && n.startsWith(e)) ||
      (t && !aw(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  $0 = (e, t, n) => (r) => {
    if (typeof r != 'string') return r;
    const [i, s, o, a] = r.match(nf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  uw = (e) => pn(0, 255, e),
  Ga = { ...Gr, transform: (e) => Math.round(uw(e)) },
  On = {
    test: rf('rgb', 'red'),
    parse: $0('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      Ga.transform(e) +
      ', ' +
      Ga.transform(t) +
      ', ' +
      Ga.transform(n) +
      ', ' +
      ki(Yi.transform(r)) +
      ')',
  };
function cw(e) {
  let t = '',
    n = '',
    r = '',
    i = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const du = { test: rf('#'), parse: cw, transform: On.transform },
  gr = {
    test: rf('hsl', 'hue'),
    parse: $0('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      vt.transform(ki(t)) +
      ', ' +
      vt.transform(ki(n)) +
      ', ' +
      ki(Yi.transform(r)) +
      ')',
  },
  we = {
    test: (e) => On.test(e) || du.test(e) || gr.test(e),
    parse: (e) => (On.test(e) ? On.parse(e) : gr.test(e) ? gr.parse(e) : du.parse(e)),
    transform: (e) =>
      typeof e == 'string'
        ? e
        : e.hasOwnProperty('red')
        ? On.transform(e)
        : gr.transform(e),
  },
  fw =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function dw(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(nf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(fw)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const W0 = 'number',
  H0 = 'color',
  hw = 'var',
  pw = 'var(',
  oh = '${}',
  mw =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Xi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      mw,
      (l) => (
        we.test(l)
          ? (r.color.push(s), i.push(H0), n.push(we.parse(l)))
          : l.startsWith(pw)
          ? (r.var.push(s), i.push(hw), n.push(l))
          : (r.number.push(s), i.push(W0), n.push(parseFloat(l))),
        ++s,
        oh
      )
    )
    .split(oh);
  return { values: n, split: a, indexes: r, types: i };
}
function G0(e) {
  return Xi(e).values;
}
function K0(e) {
  const { split: t, types: n } = Xi(e),
    r = t.length;
  return (i) => {
    let s = '';
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === W0 ? (s += ki(i[o])) : a === H0 ? (s += we.transform(i[o])) : (s += i[o]);
      }
    return s;
  };
}
const gw = (e) => (typeof e == 'number' ? 0 : e);
function vw(e) {
  const t = G0(e);
  return K0(e)(t.map(gw));
}
const mn = { test: dw, parse: G0, createTransformer: K0, getAnimatableNone: vw },
  yw = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function xw(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(nf) || [];
  if (!r) return e;
  const i = n.replace(r, '');
  let s = yw.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + '(' + s + i + ')';
}
const ww = /\b([a-z-]*)\(.*?\)/gu,
  hu = {
    ...mn,
    getAnimatableNone: (e) => {
      const t = e.match(ww);
      return t ? t.map(xw).join(' ') : e;
    },
  },
  Sw = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    radius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    backgroundPositionX: R,
    backgroundPositionY: R,
  },
  bw = {
    rotate: Gt,
    rotateX: Gt,
    rotateY: Gt,
    rotateZ: Gt,
    scale: Ds,
    scaleX: Ds,
    scaleY: Ds,
    scaleZ: Ds,
    skew: Gt,
    skewX: Gt,
    skewY: Gt,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: Yi,
    originX: th,
    originY: th,
    originZ: R,
  },
  ah = { ...Gr, transform: Math.round },
  sf = {
    ...Sw,
    ...bw,
    zIndex: ah,
    size: R,
    fillOpacity: Yi,
    strokeOpacity: Yi,
    numOctaves: ah,
  },
  Cw = {
    ...sf,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: hu,
    WebkitFilter: hu,
  },
  of = (e) => Cw[e];
function Y0(e, t) {
  let n = of(e);
  return n !== hu && (n = mn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const kw = new Set(['auto', 'none', '0']);
function Ew(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == 'string' && !kw.has(s) && Xi(s).values.length && (i = e[r]), r++;
  }
  if (i && n) for (const s of t) e[s] = Y0(n, i);
}
class X0 extends tf {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == 'string' && ((u = u.trim()), ef(u))) {
        const c = z0(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !tw.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = sh(i),
      a = sh(s);
    if (o !== a)
      if (nh(o) && nh(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == 'string' && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Y2(t[i]) && r.push(i);
    r.length && Ew(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = zr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = zr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function af(e) {
  return typeof e == 'function';
}
let qs;
function Pw() {
  qs = void 0;
}
const yt = {
    now: () => (
      qs === void 0 &&
        yt.set(me.isProcessing || B2.useManualTiming ? me.timestamp : performance.now()),
      qs
    ),
    set: (e) => {
      (qs = e), queueMicrotask(Pw);
    },
  },
  lh = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' && (mn.test(e) || e === '0') && !e.startsWith('url('))
        );
function Tw(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Aw(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const s = e[e.length - 1],
    o = lh(i, t),
    a = lh(s, t);
  return !o || !a ? !1 : Tw(e) || ((n === 'spring' || af(n)) && r);
}
const Nw = 40;
class Q0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = 'loop',
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = yt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Nw
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ow(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = yt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Aw(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(oa(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function q0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const jw = 5;
function Z0(e, t, n) {
  const r = Math.max(t - jw, 0);
  return q0(n - e(r), t - r);
}
const Ka = 0.001,
  Mw = 0.01,
  _w = 10,
  Rw = 0.05,
  Lw = 1;
function Dw({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i,
    s,
    o = 1 - t;
  (o = pn(Rw, Lw, o)),
    (e = pn(Mw, _w, jt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            v = pu(u, o),
            y = Math.exp(-f);
          return Ka - (d / v) * y;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            v = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            x = pu(Math.pow(u, 2), o);
          return ((-i(u) + Ka > 0 ? -1 : 1) * ((d - v) * y)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ka + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = Ow(i, s, a);
  if (((e = Nt(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Iw = 12;
function Ow(e, t, n) {
  let r = n;
  for (let i = 1; i < Iw; i++) r = r - e(r) / t(r);
  return r;
}
function pu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const zw = ['duration', 'bounce'],
  Fw = ['stiffness', 'damping', 'mass'];
function uh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Vw(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!uh(e, Fw) && uh(e, zw)) {
    const n = Dw(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function J0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = Vw({ ...r, velocity: -jt(r.velocity || 0) }),
    v = f || 0,
    y = l / (2 * Math.sqrt(a * u)),
    x = s - i,
    w = jt(Math.sqrt(a / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const g = pu(w, y);
    h = (S) => {
      const C = Math.exp(-y * w * S);
      return s - C * (((v + y * w * x) / g) * Math.sin(g * S) + x * Math.cos(g * S));
    };
  } else if (y === 1) h = (g) => s - Math.exp(-w * g) * (x + (v + w * x) * g);
  else {
    const g = w * Math.sqrt(y * y - 1);
    h = (S) => {
      const C = Math.exp(-y * w * S),
        P = Math.min(g * S, 300);
      return s - (C * ((v + y * w * x) * Math.sinh(P) + g * x * Math.cosh(P))) / g;
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (g) => {
      const S = h(g);
      if (d) o.done = g >= c;
      else {
        let C = 0;
        y < 1 && (C = g === 0 ? Nt(v) : Z0(h, g, S));
        const P = Math.abs(C) <= n,
          A = Math.abs(s - S) <= t;
        o.done = P && A;
      }
      return (o.value = o.done ? s : S), o;
    },
  };
}
function ch({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    v = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) =>
      a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let x = n * t;
  const w = f + x,
    m = o === void 0 ? w : o(w);
  m !== w && (x = m - f);
  const h = (E) => -x * Math.exp(-E / r),
    g = (E) => m + h(E),
    S = (E) => {
      const I = h(E),
        M = g(E);
      (d.done = Math.abs(I) <= u), (d.value = d.done ? m : M);
    };
  let C, P;
  const A = (E) => {
    v(d.value) &&
      ((C = E),
      (P = J0({
        keyframes: [d.value, y(d.value)],
        velocity: Z0(g, E, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let I = !1;
        return (
          !P && C === void 0 && ((I = !0), S(E), A(E)),
          C !== void 0 && E >= C ? P.next(E - C) : (!I && S(E), d)
        );
      },
    }
  );
}
const Bw = as(0.42, 0, 1, 1),
  Uw = as(0, 0, 0.58, 1),
  e1 = as(0.42, 0, 0.58, 1),
  $w = (e) => Array.isArray(e) && typeof e[0] != 'number',
  lf = (e) => Array.isArray(e) && typeof e[0] == 'number',
  fh = {
    linear: Ce,
    easeIn: Bw,
    easeInOut: e1,
    easeOut: Uw,
    circIn: Jc,
    circInOut: R0,
    circOut: _0,
    backIn: Zc,
    backInOut: j0,
    backOut: N0,
    anticipate: M0,
  },
  dh = (e) => {
    if (lf(e)) {
      uu(e.length === 4);
      const [t, n, r, i] = e;
      return as(t, n, r, i);
    } else if (typeof e == 'string') return uu(fh[e] !== void 0), fh[e];
    return e;
  },
  Ww = (e, t) => (n) => t(e(n)),
  Mt = (...e) => e.reduce(Ww),
  Fr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ee = (e, t, n) => e + (t - e) * n;
function Ya(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Hw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ya(l, a, e + 1 / 3)), (s = Ya(l, a, e)), (o = Ya(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ao(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Xa = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Gw = [du, On, gr],
  Kw = (e) => Gw.find((t) => t.test(e));
function hh(e) {
  const t = Kw(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === gr && (n = Hw(n)), n;
}
const ph = (e, t) => {
    const n = hh(e),
      r = hh(t);
    if (!n || !r) return Ao(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Xa(n.red, r.red, s)),
      (i.green = Xa(n.green, r.green, s)),
      (i.blue = Xa(n.blue, r.blue, s)),
      (i.alpha = ee(n.alpha, r.alpha, s)),
      On.transform(i)
    );
  },
  mu = new Set(['none', 'hidden']);
function Yw(e, t) {
  return mu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Xw(e, t) {
  return (n) => ee(e, t, n);
}
function uf(e) {
  return typeof e == 'number'
    ? Xw
    : typeof e == 'string'
    ? ef(e)
      ? Ao
      : we.test(e)
      ? ph
      : Zw
    : Array.isArray(e)
    ? t1
    : typeof e == 'object'
    ? we.test(e)
      ? ph
      : Qw
    : Ao;
}
function t1(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => uf(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Qw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = uf(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function qw(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const Zw = (e, t) => {
  const n = mn.createTransformer(t),
    r = Xi(e),
    i = Xi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (mu.has(e) && !i.values.length) || (mu.has(t) && !r.values.length)
      ? Yw(e, t)
      : Mt(t1(qw(r, i), i.values), n)
    : Ao(e, t);
};
function n1(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? ee(e, t, n)
    : uf(e)(e, t);
}
function Jw(e, t, n) {
  const r = [],
    i = n || n1,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ce : t;
      a = Mt(l, a);
    }
    r.push(a);
  }
  return r;
}
function eS(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((uu(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = Jw(t, r, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Fr(e[c], e[c + 1], u);
      return o[c](f);
    };
  return n ? (u) => l(pn(e[0], e[s - 1], u)) : l;
}
function tS(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Fr(0, t, r);
    e.push(ee(n, 1, i));
  }
}
function nS(e) {
  const t = [0];
  return tS(t, e.length - 1), t;
}
function rS(e, t) {
  return e.map((n) => n * t);
}
function iS(e, t) {
  return e.map(() => t || e1).splice(0, e.length - 1);
}
function No({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
  const i = $w(r) ? r.map(dh) : dh(r),
    s = { done: !1, value: t[0] },
    o = rS(n && n.length === t.length ? n : nS(t), e),
    a = eS(o, t, { ease: Array.isArray(i) ? i : iS(t, i) });
  return { calculatedDuration: e, next: (l) => ((s.value = a(l)), (s.done = l >= e), s) };
}
const mh = 2e4;
function sS(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < mh; ) (t += n), (r = e.next(t));
  return t >= mh ? 1 / 0 : t;
}
const oS = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => W.update(t, !0),
      stop: () => hn(t),
      now: () => (me.isProcessing ? me.timestamp : yt.now()),
    };
  },
  aS = { decay: ch, inertia: ch, tween: No, keyframes: No, spring: J0 },
  lS = (e) => e / 100;
class cf extends Q0 {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || tf,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = af(n) ? n : aS[n] || No;
    let l, u;
    a !== No && typeof t[0] != 'number' && ((l = Mt(lS, n1(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === 'mirror' &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = sS(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      v = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: d,
      repeat: v,
      repeatType: y,
      repeatDelay: x,
      onUpdate: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = c);
    let g = this.currentTime,
      S = s;
    if (v) {
      const E = Math.min(this.currentTime, c) / f;
      let I = Math.floor(E),
        M = E % 1;
      !M && E >= 1 && (M = 1),
        M === 1 && I--,
        (I = Math.min(I, v + 1)),
        !!(I % 2) &&
          (y === 'reverse'
            ? ((M = 1 - M), x && (M -= x / f))
            : y === 'mirror' && (S = o)),
        (g = pn(0, 1, M) * f);
    }
    const C = h ? { done: !1, value: l[0] } : S.next(g);
    a && (C.value = a(C.value));
    let { done: P } = C;
    !h &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && P));
    return (
      A && i !== void 0 && (C.value = oa(l, this.options, i)),
      w && w(C.value),
      A && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? jt(t.calculatedDuration) : 0;
  }
  get time() {
    return jt(this.currentTime);
  }
  set time(t) {
    (t = Nt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = jt(this.currentTime));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = 'running';
      return;
    }
    if (this.isStopped) return;
    const { driver: t = oS, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === 'finished' && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = 'paused';
      return;
    }
    (this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = 'finished');
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const r1 = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  uS = 10,
  cS = (e, t) => {
    let n = '';
    const r = Math.max(Math.round(t / uS), 2);
    for (let i = 0; i < r; i++) n += e(Fr(0, r - 1, i)) + ', ';
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function ff(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const fS = { linearEasing: void 0 };
function dS(e, t) {
  const n = ff(e);
  return () => {
    var r;
    return (r = fS[t]) !== null && r !== void 0 ? r : n();
  };
}
const jo = dS(() => {
  try {
    document.createElement('div').animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
  } catch {
    return !1;
  }
  return !0;
}, 'linearEasing');
function i1(e) {
  return !!(
    (typeof e == 'function' && jo()) ||
    !e ||
    (typeof e == 'string' && (e in gu || jo())) ||
    lf(e) ||
    (Array.isArray(e) && e.every(i1))
  );
}
const fi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  gu = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: fi([0, 0.65, 0.55, 1]),
    circOut: fi([0.55, 0, 1, 0.45]),
    backIn: fi([0.31, 0.01, 0.66, -0.59]),
    backOut: fi([0.33, 1.53, 0.69, 0.99]),
  };
function s1(e, t) {
  if (e)
    return typeof e == 'function' && jo()
      ? cS(e, t)
      : lf(e)
      ? fi(e)
      : Array.isArray(e)
      ? e.map((n) => s1(n, t) || gu.easeOut)
      : gu[e];
}
function hS(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = 'loop',
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = s1(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: s + 1,
      direction: o === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
function gh(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const pS = ff(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  Mo = 10,
  mS = 2e4;
function gS(e) {
  return af(e.type) || e.type === 'spring' || !i1(e.ease);
}
function vS(e, t) {
  const n = new cf({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < mS; ) (r = n.sample(s)), i.push(r.value), (s += Mo);
  return { times: void 0, keyframes: i, duration: s - Mo, ease: 'linear' };
}
const o1 = { anticipate: M0, backInOut: j0, circInOut: R0 };
function yS(e) {
  return e in o1;
}
class vh extends Q0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new X0(s, (o, a) => this.onKeyframesResolved(o, a), n, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if ((typeof o == 'string' && jo() && yS(o) && (o = o1[o]), gS(this.options))) {
      const {
          onComplete: d,
          onUpdate: v,
          motionValue: y,
          element: x,
          ...w
        } = this.options,
        m = vS(t, w);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = m.duration),
        (s = m.times),
        (o = m.ease),
        (a = 'keyframes');
    }
    const f = hS(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (gh(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(oa(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return jt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return jt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Nt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return 'idle';
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ce;
      const { animation: r } = n;
      gh(r, t);
    }
    return Ce;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === 'finished' && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: a } = t;
    if (n.playState === 'idle' || n.playState === 'finished') return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...v
        } = this.options,
        y = new cf({
          ...v,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        x = Nt(this.time);
      u.setWithVelocity(y.sample(x - Mo).value, y.sample(x).value, Mo);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      pS() &&
      r &&
      r1.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== 'mirror' &&
      o !== 0 &&
      a !== 'inertia'
    );
  }
}
const xS = ff(() => window.ScrollTimeline !== void 0);
class wS {
  constructor(t) {
    (this.stop = () => this.runAll('stop')), (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      xS() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll('time');
  }
  set time(t) {
    this.setAll('time', t);
  }
  get speed() {
    return this.getAll('speed');
  }
  set speed(t) {
    this.setAll('speed', t);
  }
  get startTime() {
    return this.getAll('startTime');
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll('play');
  }
  pause() {
    this.runAll('pause');
  }
  cancel() {
    this.runAll('cancel');
  }
  complete() {
    this.runAll('complete');
  }
}
function SS({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const df =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const a = qc(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Nt(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          o(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      SS(a) || (c = { ...c, ...V2(e, c) }),
        c.duration && (c.duration = Nt(c.duration)),
        c.repeatDelay && (c.repeatDelay = Nt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !s && t.get() !== void 0)
      ) {
        const d = oa(c.keyframes, a);
        if (d !== void 0)
          return (
            W.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new wS([])
          );
      }
      return !s && vh.supports(c) ? new vh(c) : new cf(c);
    },
  bS = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  CS = (e) => (lu(e) ? e[e.length - 1] || 0 : e);
function hf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hf(this.subscriptions, t), () => pf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const yh = 30,
  kS = (e) => !isNaN(parseFloat(e));
class ES {
  constructor(t, n = {}) {
    (this.version = '11.11.9'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = yt.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = yt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = kS(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mf());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          r(),
            W.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = yt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > yh
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, yh);
    return q0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Qi(e, t) {
  return new ES(e, t);
}
function PS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Qi(n));
}
function gf(e, t) {
  const n = sa(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = CS(s[o]);
    PS(e, o, a);
  }
}
const aa = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  TS = 'framerAppearId',
  a1 = 'data-' + aa(TS);
function l1(e) {
  return e.props[a1];
}
const be = (e) => !!(e && e.getVelocity);
function AS(e) {
  return !!(be(e) && e.add);
}
function vu(e, t) {
  if (!e.applyWillChange) return;
  const n = e.getValue('willChange');
  if (AS(n)) return n.add(t);
}
function NS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function u1(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null),
      v = l[f];
    if (v === void 0 || (c && NS(c, f))) continue;
    const y = { delay: n, ...qc(o || {}, f) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = l1(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, f, W);
        h !== null && ((y.startTime = h), (x = !0));
      }
    }
    vu(e, f),
      d.start(df(f, d, v, e.shouldReduceMotion && bn.has(f) ? { type: !1 } : y, e, x));
    const w = d.animation;
    w && u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        W.update(() => {
          a && gf(e, a);
        });
      }),
    u
  );
}
function yu(e, t, n = {}) {
  var r;
  const i = sa(
    e,
    t,
    n.type === 'exit'
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(u1(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = s;
            return jS(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === 'beforeChildren' ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function jS(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(MS)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          o.push(
            yu(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(o)
  );
}
function MS(e, t) {
  return e.sortNodePosition(t);
}
function c1(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => yu(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == 'string') r = yu(e, t, n);
  else {
    const i = typeof t == 'function' ? sa(e, t, n.custom) : t;
    r = Promise.all(u1(e, i, n));
  }
  return r.then(() => {
    e.notify('AnimationComplete', t);
  });
}
const _S = Qc.length;
function f1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? f1(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < _S; n++) {
    const r = Qc[n],
      i = e.props[r];
    (Ki(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const RS = [...Xc].reverse(),
  LS = Xc.length;
function DS(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => c1(e, n, r)));
}
function IS(e) {
  let t = DS(e),
    n = xh(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = sa(
      e,
      c,
      l === 'exit'
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: v, transitionEnd: y, ...x } = d;
      u = { ...u, ...x, ...y };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = f1(e.parent) || {},
      f = [],
      d = new Set();
    let v = {},
      y = 1 / 0;
    for (let w = 0; w < LS; w++) {
      const m = RS[w],
        h = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        S = Ki(g),
        C = m === l ? h.isActive : null;
      C === !1 && (y = w);
      let P = g === c[m] && g !== u[m] && S;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (h.protectedKeys = { ...v }),
        (!h.isActive && C === null) ||
          (!g && !h.prevProp) ||
          Gi(g) ||
          typeof g == 'boolean')
      )
        continue;
      const A = OS(h.prevProp, g);
      let E = A || (m === l && h.isActive && !P && S) || (w > y && S),
        I = !1;
      const M = Array.isArray(g) ? g : [g];
      let re = M.reduce(i(m), {});
      C === !1 && (re = {});
      const { prevResolvedValues: F = {} } = h,
        at = { ...F, ...re },
        lt = (ie) => {
          (E = !0), d.has(ie) && ((I = !0), d.delete(ie)), (h.needsAnimating[ie] = !0);
          const T = e.getValue(ie);
          T && (T.liveStyle = !1);
        };
      for (const ie in at) {
        const T = re[ie],
          _ = F[ie];
        if (v.hasOwnProperty(ie)) continue;
        let L = !1;
        lu(T) && lu(_) ? (L = !k0(T, _)) : (L = T !== _),
          L
            ? T != null
              ? lt(ie)
              : d.add(ie)
            : T !== void 0 && d.has(ie)
            ? lt(ie)
            : (h.protectedKeys[ie] = !0);
      }
      (h.prevProp = g),
        (h.prevResolvedValues = re),
        h.isActive && (v = { ...v, ...re }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!(P && A) || I) &&
          f.push(...M.map((ie) => ({ animation: ie, options: { type: m } })));
    }
    if (d.size) {
      const w = {};
      d.forEach((m) => {
        const h = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (w[m] = h ?? null);
      }),
        f.push({ animation: w });
    }
    let x = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var v;
        return (v = d.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = o(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = xh()), (r = !0);
    },
  };
}
function OS(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !k0(t, e) : !1;
}
function Pn(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function xh() {
  return {
    animate: Pn(!0),
    whileInView: Pn(),
    whileHover: Pn(),
    whileTap: Pn(),
    whileDrag: Pn(),
    whileFocus: Pn(),
    exit: Pn(),
  };
}
class Cn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class zS extends Cn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = IS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Gi(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let FS = 0;
class VS extends Cn {
  constructor() {
    super(...arguments), (this.id = FS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive('exit', !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const BS = { animation: { Feature: zS }, exit: { Feature: VS } },
  d1 = (e) =>
    e.pointerType === 'mouse'
      ? typeof e.button != 'number' || e.button <= 0
      : e.isPrimary !== !1;
function la(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const US = (e) => (t) => d1(t) && e(t, la(t));
function Tt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function _t(e, t, n, r) {
  return Tt(e, t, US(n), r);
}
const wh = (e, t) => Math.abs(e - t);
function $S(e, t) {
  const n = wh(e.x, t.x),
    r = wh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class h1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = qa(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          v = $S(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !v) return;
        const { point: y } = f,
          { timestamp: x } = me;
        this.history.push({ ...y, timestamp: x });
        const { onStart: w, onMove: m } = this.handlers;
        d || (w && w(this.lastMoveEvent, f), (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Qa(d, this.transformPagePoint)),
          W.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = qa(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : Qa(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(f, w), y && y(f, w);
      }),
      !d1(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = la(t),
      a = Qa(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = me;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, qa(a, this.history)),
      (this.removeListeners = Mt(
        _t(this.contextWindow, 'pointermove', this.handlePointerMove),
        _t(this.contextWindow, 'pointerup', this.handlePointerUp),
        _t(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), hn(this.updatePoint);
  }
}
function Qa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Sh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function qa({ point: e }, t) {
  return { point: e, delta: Sh(e, p1(t)), offset: Sh(e, WS(t)), velocity: HS(t, 0.1) };
}
function WS(e) {
  return e[0];
}
function p1(e) {
  return e[e.length - 1];
}
function HS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = p1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Nt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = jt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function m1(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const bh = m1('dragHorizontal'),
  Ch = m1('dragVertical');
function g1(e) {
  let t = !1;
  if (e === 'y') t = Ch();
  else if (e === 'x') t = bh();
  else {
    const n = bh(),
      r = Ch();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function v1() {
  const e = g1(!0);
  return e ? (e(), !1) : !0;
}
function vr(e) {
  return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
const y1 = 1e-4,
  GS = 1 - y1,
  KS = 1 + y1,
  x1 = 0.01,
  YS = 0 - x1,
  XS = 0 + x1;
function Ue(e) {
  return e.max - e.min;
}
function QS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function kh(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ee(t.min, t.max, e.origin)),
    (e.scale = Ue(n) / Ue(t)),
    (e.translate = ee(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= GS && e.scale <= KS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= YS && e.translate <= XS) || isNaN(e.translate)) && (e.translate = 0);
}
function Ei(e, t, n, r) {
  kh(e.x, t.x, n.x, r ? r.originX : void 0), kh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Eh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ue(t));
}
function qS(e, t, n) {
  Eh(e.x, t.x, n.x), Eh(e.y, t.y, n.y);
}
function Ph(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ue(t));
}
function Pi(e, t, n) {
  Ph(e.x, t.x, n.x), Ph(e.y, t.y, n.y);
}
function ZS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ee(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ee(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Th(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function JS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Th(e.x, n, i), y: Th(e.y, t, r) };
}
function Ah(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function e3(e, t) {
  return { x: Ah(e.x, t.x), y: Ah(e.y, t.y) };
}
function t3(e, t) {
  let n = 0.5;
  const r = Ue(e),
    i = Ue(t);
  return (
    i > r
      ? (n = Fr(t.min, t.max - r, e.min))
      : r > i && (n = Fr(e.min, e.max - i, t.min)),
    pn(0, 1, n)
  );
}
function n3(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const xu = 0.35;
function r3(e = xu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = xu),
    { x: Nh(e, 'left', 'right'), y: Nh(e, 'top', 'bottom') }
  );
}
function Nh(e, t, n) {
  return { min: jh(e, t), max: jh(e, n) };
}
function jh(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const Mh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  yr = () => ({ x: Mh(), y: Mh() }),
  _h = () => ({ min: 0, max: 0 }),
  oe = () => ({ x: _h(), y: _h() });
function Ke(e) {
  return [e('x'), e('y')];
}
function w1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function i3({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function s3(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Za(e) {
  return e === void 0 || e === 1;
}
function wu({ scale: e, scaleX: t, scaleY: n }) {
  return !Za(e) || !Za(t) || !Za(n);
}
function jn(e) {
  return (
    wu(e) || S1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
  );
}
function S1(e) {
  return Rh(e.x) || Rh(e.y);
}
function Rh(e) {
  return e && e !== '0%';
}
function _o(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Lh(e, t, n, r, i) {
  return i !== void 0 && (e = _o(e, i, r)), _o(e, n, r) + t;
}
function Su(e, t = 0, n = 1, r, i) {
  (e.min = Lh(e.min, t, n, r, i)), (e.max = Lh(e.max, t, n, r, i));
}
function b1(e, { x: t, y: n }) {
  Su(e.x, t.translate, t.scale, t.originPoint),
    Su(e.y, n.translate, n.scale, n.originPoint);
}
const Dh = 0.999999999999,
  Ih = 1.0000000000001;
function o3(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        wr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), b1(e, o)),
      r && jn(s.latestValues) && wr(e, s.latestValues));
  }
  t.x < Ih && t.x > Dh && (t.x = 1), t.y < Ih && t.y > Dh && (t.y = 1);
}
function xr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Oh(e, t, n, r, i = 0.5) {
  const s = ee(e.min, e.max, i);
  Su(e, t, n, s, r);
}
function wr(e, t) {
  Oh(e.x, t.x, t.scaleX, t.scale, t.originX), Oh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function C1(e, t) {
  return w1(s3(e.getBoundingClientRect(), t));
}
function a3(e, t, n) {
  const r = C1(e, n),
    { scroll: i } = t;
  return i && (xr(r.x, i.offset.x), xr(r.y, i.offset.y)), r;
}
const k1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  l3 = new WeakMap();
class u3 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = oe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(la(c, 'page').point);
      },
      s = (c, f) => {
        const { drag: d, dragPropagation: v, onDragStart: y } = this.getProps();
        if (
          d &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = g1(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ke((w) => {
            let m = this.getAxisMotionValue(w).get() || 0;
            if (vt.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const g = h.layout.layoutBox[w];
                g && (m = Ue(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[w] = m;
          }),
          y && W.postRender(() => y(c, f)),
          vu(this.visualElement, 'transform');
        const { animationState: x } = this.visualElement;
        x && x.setActive('whileDrag', !0);
      },
      o = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: w } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = c3(w)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis('x', f.point, w),
          this.updateAxis('y', f.point, w),
          this.visualElement.render(),
          x && x(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        Ke((c) => {
          var f;
          return (
            this.getAnimationState(c) === 'paused' &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new h1(
      t,
      { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: a, resumeAnimation: l },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: k1(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && W.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Is(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = ZS(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && vr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = JS(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = r3(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ke((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = n3(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !vr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = a3(r, i.root, this.visualElement.getTransformPagePoint());
    let o = e3(i.layout.layoutBox, s);
    if (n) {
      const a = n(i3(o));
      (this.hasMutatedConstraints = !!a), a && (o = w1(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ke((c) => {
        if (!Is(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        o && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          y = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return vu(this.visualElement, t), r.start(df(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Ke((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ke((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ke((n) => {
      const { drag: r } = this.getProps();
      if (!Is(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - ee(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!vr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ke((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = t3({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ke((o) => {
        if (!Is(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(ee(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    l3.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = _t(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        vr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener('measure', r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), W.read(r);
    const o = Tt(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (Ke((c) => {
            const f = this.getAxisMotionValue(c);
            f &&
              ((this.originPoint[c] += l[c].translate), f.set(f.get() + l[c].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = xu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Is(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function c3(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class f3 extends Cn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ce),
      (this.removeListeners = Ce),
      (this.controls = new u3(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ce);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const zh = (e) => (t, n) => {
  e && W.postRender(() => e(t, n));
};
class d3 extends Cn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ce);
  }
  onPointerDown(t) {
    this.session = new h1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: k1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: zh(t),
      onStart: zh(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && W.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = _t(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ua = b.createContext(null);
function h3() {
  const e = b.useContext(ua);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = b.useId();
  b.useEffect(() => r(i), []);
  const s = b.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const vf = b.createContext({}),
  E1 = b.createContext({}),
  Zs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Fh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ii = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (R.test(e)) e = parseFloat(e);
        else return e;
      const n = Fh(e, t.target.x),
        r = Fh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  p3 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = mn.parse(e);
      if (i.length > 5) return r;
      const s = mn.createTransformer(e),
        o = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = ee(a, l, 0.5);
      return (
        typeof i[2 + o] == 'number' && (i[2 + o] /= u),
        typeof i[3 + o] == 'number' && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Ro = {};
function m3(e) {
  Object.assign(Ro, e);
}
const { schedule: yf, cancel: cT } = E0(queueMicrotask, !1);
class g3 extends b.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    m3(v3),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        s.setOptions({ ...s.options, onExitComplete: () => this.safeToRemove() })),
      (Zs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              W.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      yf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function P1(e) {
  const [t, n] = h3(),
    r = b.useContext(vf);
  return p.jsx(g3, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: b.useContext(E1),
    isPresent: t,
    safeToRemove: n,
  });
}
const v3 = {
    borderRadius: {
      ...ii,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: ii,
    borderTopRightRadius: ii,
    borderBottomLeftRadius: ii,
    borderBottomRightRadius: ii,
    boxShadow: p3,
  },
  T1 = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  y3 = T1.length,
  Vh = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  Bh = (e) => typeof e == 'number' || R.test(e);
function x3(e, t, n, r, i, s) {
  i
    ? ((e.opacity = ee(0, n.opacity !== void 0 ? n.opacity : 1, w3(r))),
      (e.opacityExit = ee(t.opacity !== void 0 ? t.opacity : 1, 0, S3(r))))
    : s &&
      (e.opacity = ee(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < y3; o++) {
    const a = `border${T1[o]}Radius`;
    let l = Uh(t, a),
      u = Uh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Bh(l) === Bh(u)
        ? ((e[a] = Math.max(ee(Vh(l), Vh(u), r), 0)),
          (vt.test(u) || vt.test(l)) && (e[a] += '%'))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ee(t.rotate || 0, n.rotate || 0, r));
}
function Uh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const w3 = A1(0, 0.5, _0),
  S3 = A1(0.5, 0.95, Ce);
function A1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Fr(e, t, r)));
}
function $h(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ge(e, t) {
  $h(e.x, t.x), $h(e.y, t.y);
}
function Wh(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Hh(e, t, n, r, i) {
  return (e -= t), (e = _o(e, 1 / n, r)), i !== void 0 && (e = _o(e, 1 / i, r)), e;
}
function b3(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (vt.test(t) && ((t = parseFloat(t)), (t = ee(o.min, o.max, t / 100) - o.min)),
    typeof t != 'number')
  )
    return;
  let a = ee(s.min, s.max, r);
  e === s && (a -= t), (e.min = Hh(e.min, t, n, a, i)), (e.max = Hh(e.max, t, n, a, i));
}
function Gh(e, t, [n, r, i], s, o) {
  b3(e, t[n], t[r], t[i], t.scale, s, o);
}
const C3 = ['x', 'scaleX', 'originX'],
  k3 = ['y', 'scaleY', 'originY'];
function Kh(e, t, n, r) {
  Gh(e.x, t, C3, n ? n.x : void 0, r ? r.x : void 0),
    Gh(e.y, t, k3, n ? n.y : void 0, r ? r.y : void 0);
}
function Yh(e) {
  return e.translate === 0 && e.scale === 1;
}
function N1(e) {
  return Yh(e.x) && Yh(e.y);
}
function Xh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function E3(e, t) {
  return Xh(e.x, t.x) && Xh(e.y, t.y);
}
function Qh(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
  );
}
function j1(e, t) {
  return Qh(e.x, t.x) && Qh(e.y, t.y);
}
function qh(e) {
  return Ue(e.x) / Ue(e.y);
}
function Zh(e, t) {
  return (
    e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
  );
}
class P3 {
  constructor() {
    this.members = [];
  }
  add(t) {
    hf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (pf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function T3(e, t, n) {
  let r = '';
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: v,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      v && (r += `skewX(${v}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || 'none';
}
const A3 = (e, t) => e.depth - t.depth;
class N3 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    hf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    pf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(A3), (this.isDirty = !1), this.children.forEach(t);
  }
}
function Js(e) {
  const t = be(e) ? e.get() : e;
  return bS(t) ? t.toValue() : t;
}
function j3(e, t) {
  const n = yt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (hn(r), e(s - t));
    };
  return W.read(r, !0), () => hn(r);
}
function M3(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function _3(e, t, n) {
  const r = be(e) ? e : Qi(e);
  return r.start(df('', r, t, n)), r.animation;
}
const Mn = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  di = typeof window < 'u' && window.MotionDebug !== void 0,
  Ja = ['', 'X', 'Y', 'Z'],
  R3 = { visibility: 'hidden' },
  Jh = 1e3;
let L3 = 0;
function el(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function M1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = l1(t);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', W, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && M1(r);
}
function _1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = L3++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            di &&
              (Mn.totalNodes = Mn.resolvedTargetDeltas = Mn.recalculatedProjection = 0),
            this.nodes.forEach(O3),
            this.nodes.forEach(U3),
            this.nodes.forEach($3),
            this.nodes.forEach(z3),
            di && window.MotionDebug.record(Mn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new N3());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new mf()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = M3(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = j3(d, 250)),
            Zs.hasAnimatedSinceResize &&
              ((Zs.hasAnimatedSinceResize = !1), this.nodes.forEach(tp));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x = this.options.transition || c.getDefaultTransition() || Y3,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !j1(this.targetLayout, y) || v,
                g = !d && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const S = { ...qc(x, 'layout'), onPlay: w, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || tp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        hn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(W3),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          M1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ep);
        return;
      }
      this.isUpdating || this.nodes.forEach(V3),
        (this.isUpdating = !1),
        this.nodes.forEach(B3),
        this.nodes.forEach(D3),
        this.nodes.forEach(I3),
        this.clearAllSnapshots();
      const a = yt.now();
      (me.delta = pn(0, 1e3 / 60, a - me.timestamp)),
        (me.timestamp = a),
        (me.isProcessing = !0),
        Ha.update.process(me),
        Ha.preRender.process(me),
        Ha.render.process(me),
        (me.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), yf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(F3), this.sharedNodes.forEach(H3);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = oe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify('LayoutMeasure', this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !N1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || jn(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        X3(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return oe();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(Q3)
        )
      ) {
        const { scroll: c } = this.root;
        c && (xr(l.x, c.offset.x), xr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = oe();
      if ((Ge(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot))
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Ge(l, o), xr(l.x, f.offset.x), xr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = oe();
      Ge(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          wr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          jn(c.latestValues) && wr(l, c.latestValues);
      }
      return jn(this.latestValues) && wr(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = oe();
      Ge(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !jn(u.latestValues)) continue;
        wu(u.latestValues) && u.updateSnapshot();
        const c = oe(),
          f = u.measurePageBox();
        Ge(c, f), Kh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return jn(this.latestValues) && Kh(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = me.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = oe()),
              (this.relativeTargetOrigin = oe()),
              Pi(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox),
              Ge(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = oe()), (this.targetWithTransforms = oe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                qS(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ge(this.target, this.layout.layoutBox),
                b1(this.target, this.targetDelta))
              : Ge(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = oe()),
                (this.relativeTargetOrigin = oe()),
                Pi(this.relativeTargetOrigin, this.target, v.target),
                Ge(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          di && Mn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || wu(this.parent.latestValues) || S1(this.parent.latestValues)))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) && o.isProjectionDirty)) &&
          (u = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === me.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Ge(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        v = this.treeScale.y;
      o3(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = oe()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Wh(this.prevProjectionDelta.x, this.projectionDelta.x),
          Wh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ei(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== v ||
          !Zh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Zh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', y)),
        di && Mn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = yr()),
        (this.projectionDelta = yr()),
        (this.projectionDeltaWithTransform = yr());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = yr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = oe(),
        v = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = v !== y,
        w = this.getStack(),
        m = !w || w.members.length <= 1,
        h = !!(x && !m && this.options.crossfade === !0 && !this.path.some(K3));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        np(f.x, o.x, C),
          np(f.y, o.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            G3(this.relativeTarget, this.relativeTargetOrigin, d, C),
            g && E3(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = oe()),
            Ge(g, this.relativeTarget)),
          x && ((this.animationValues = c), x3(c, u, this.latestValues, C, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (hn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = W.update(() => {
          (Zs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = _3(0, Jh, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Jh), this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          R1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || oe();
          const f = Ue(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
          const d = Ue(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + d);
        }
        Ge(a, l),
          wr(a, c),
          Ei(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new P3()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && el('z', o, u, this.animationValues);
      for (let c = 0; c < Ja.length; c++)
        el(`rotate${Ja[c]}`, o, u, this.animationValues),
          el(`skew${Ja[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return R3;
      const u = { visibility: '' },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = Js(o == null ? void 0 : o.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (x.pointerEvents = Js(o == null ? void 0 : o.pointerEvents) || '')),
          this.hasProjected &&
            !jn(this.latestValues) &&
            ((x.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          x
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = T3(this.projectionDeltaWithTransform, this.treeScale, d)),
        c && (u.transform = c(d, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const x in Ro) {
        if (d[x] === void 0) continue;
        const { correct: w, applyTo: m } = Ro[x],
          h = u.transform === 'none' ? d[x] : w(d[x], f);
        if (m) {
          const g = m.length;
          for (let S = 0; S < g; S++) u[m[S]] = h;
        } else u[x] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this ? Js(o == null ? void 0 : o.pointerEvents) || '' : 'none'),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(ep),
        this.root.sharedNodes.clear();
    }
  };
}
function D3(e) {
  e.updateLayout();
}
function I3(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === 'size'
      ? Ke((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            v = Ue(d);
          (d.min = r[f].min), (d.max = d.min + v);
        })
      : R1(s, n.layoutBox, r) &&
        Ke((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            v = Ue(r[f]);
          (d.max = d.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + v));
        });
    const a = yr();
    Ei(a, r, n.layoutBox);
    const l = yr();
    o ? Ei(l, e.applyTransform(i, !0), n.measuredBox) : Ei(l, r, n.layoutBox);
    const u = !N1(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: v } = f;
        if (d && v) {
          const y = oe();
          Pi(y, n.layoutBox, d.layoutBox);
          const x = oe();
          Pi(x, r, v.layoutBox),
            j1(y, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function O3(e) {
  di && Mn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function z3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function F3(e) {
  e.clearSnapshot();
}
function ep(e) {
  e.clearMeasurements();
}
function V3(e) {
  e.isLayoutDirty = !1;
}
function B3(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function tp(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function U3(e) {
  e.resolveTargetDelta();
}
function $3(e) {
  e.calcProjection();
}
function W3(e) {
  e.resetSkewAndRotation();
}
function H3(e) {
  e.removeLeadSnapshot();
}
function np(e, t, n) {
  (e.translate = ee(t.translate, 0, n)),
    (e.scale = ee(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function rp(e, t, n, r) {
  (e.min = ee(t.min, n.min, r)), (e.max = ee(t.max, n.max, r));
}
function G3(e, t, n, r) {
  rp(e.x, t.x, n.x, r), rp(e.y, t.y, n.y, r);
}
function K3(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Y3 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  ip = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  sp = ip('applewebkit/') && !ip('chrome/') ? Math.round : Ce;
function op(e) {
  (e.min = sp(e.min)), (e.max = sp(e.max));
}
function X3(e) {
  op(e.x), op(e.y);
}
function R1(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !QS(qh(t), qh(n), 0.2));
}
function Q3(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const q3 = _1({
    attachResizeListener: (e, t) => Tt(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  tl = { current: void 0 },
  L1 = _1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!tl.current) {
        const e = new q3({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (tl.current = e);
      }
      return tl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  Z3 = {
    pan: { Feature: d3 },
    drag: { Feature: f3, ProjectionNode: L1, MeasureLayout: P1 },
  };
function ap(e, t) {
  const n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd',
    i = (s, o) => {
      if (s.pointerType === 'touch' || v1()) return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive('whileHover', t);
      const l = a[r];
      l && W.postRender(() => l(s, o));
    };
  return _t(e.current, n, i, { passive: !e.getProps()[r] });
}
class J3 extends Cn {
  mount() {
    this.unmount = Mt(ap(this.node, !0), ap(this.node, !1));
  }
  unmount() {}
}
class eb extends Cn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Mt(
      Tt(this.node.current, 'focus', () => this.onFocus()),
      Tt(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
const D1 = (e, t) => (t ? (e === t ? !0 : D1(e, t.parentElement)) : !1);
function nl(e, t) {
  if (!t) return;
  const n = new PointerEvent('pointer' + e);
  t(n, la(n));
}
class tb extends Cn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ce),
      (this.removeEndListeners = Ce),
      (this.removeAccessibleListeners = Ce),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = _t(
            window,
            'pointerup',
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !D1(this.node.current, a.target) ? c : u;
              d && W.update(() => d(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = _t(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Mt(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== 'Enter' || this.isPressing) return;
            const o = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                nl('up', (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && W.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Tt(this.node.current, 'keyup', o)),
              nl('down', (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Tt(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && nl('cancel', (s, o) => this.cancelPress(s, o));
          },
          i = Tt(this.node.current, 'blur', r);
        this.removeAccessibleListeners = Mt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      r && W.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !v1()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && W.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = _t(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Tt(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = Mt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const bu = new WeakMap(),
  rl = new WeakMap(),
  nb = (e) => {
    const t = bu.get(e.target);
    t && t(e);
  },
  rb = (e) => {
    e.forEach(nb);
  };
function ib({ root: e, ...t }) {
  const n = e || document;
  rl.has(n) || rl.set(n, {});
  const r = rl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(rb, { root: e, ...t })), r[i];
}
function sb(e, t, n) {
  const r = ib(t);
  return (
    bu.set(e, n),
    r.observe(e),
    () => {
      bu.delete(e), r.unobserve(e);
    }
  );
}
const ob = { some: 0, all: 1 };
class ab extends Cn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : ob[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || ((this.isInView = u), s && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return sb(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(lb(t, n)) && this.startObserver();
  }
  unmount() {}
}
function lb({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const ub = {
    inView: { Feature: ab },
    tap: { Feature: tb },
    focus: { Feature: eb },
    hover: { Feature: J3 },
  },
  cb = { layout: { ProjectionNode: L1, MeasureLayout: P1 } },
  xf = b.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  ca = b.createContext({}),
  wf = typeof window < 'u',
  Sf = wf ? b.useLayoutEffect : b.useEffect,
  I1 = b.createContext({ strict: !1 });
function fb(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = b.useContext(ca),
    l = b.useContext(I1),
    u = b.useContext(ua),
    c = b.useContext(xf).reducedMotion,
    f = b.useRef();
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    v = b.useContext(E1);
  d &&
    !d.projection &&
    i &&
    (d.type === 'html' || d.type === 'svg') &&
    db(f.current, n, i, v),
    b.useInsertionEffect(() => {
      d && d.update(n, u);
    });
  const y = n[a1],
    x = b.useRef(
      !!y &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, y)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, y))
    );
  return (
    Sf(() => {
      d &&
        ((window.MotionIsMounted = !0),
        d.updateFeatures(),
        yf.render(d.render),
        x.current && d.animationState && d.animationState.animateChanges());
    }),
    b.useEffect(() => {
      d &&
        (!x.current && d.animationState && d.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var w;
            (w = window.MotionHandoffMarkAsComplete) === null ||
              w === void 0 ||
              w.call(window, y);
          }),
          (x.current = !1)));
    }),
    d
  );
}
function db(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t['data-framer-portal-id'] ? void 0 : O1(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && vr(a)),
      visualElement: e,
      animationType: typeof s == 'string' ? s : 'both',
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function O1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : O1(e.parent);
}
function hb(e, t, n) {
  return b.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : vr(n) && (n.current = r));
    },
    [t]
  );
}
function fa(e) {
  return Gi(e.animate) || Qc.some((t) => Ki(e[t]));
}
function z1(e) {
  return !!(fa(e) || e.variants);
}
function pb(e, t) {
  if (fa(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || Ki(n) ? n : void 0, animate: Ki(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function mb(e) {
  const { initial: t, animate: n } = pb(e, b.useContext(ca));
  return b.useMemo(() => ({ initial: t, animate: n }), [lp(t), lp(n)]);
}
function lp(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const up = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Vr = {};
for (const e in up) Vr[e] = { isEnabled: (t) => up[e].some((n) => !!t[n]) };
function gb(e) {
  for (const t in e) Vr[t] = { ...Vr[t], ...e[t] };
}
const vb = Symbol.for('motionComponentSymbol');
function yb({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && gb(e);
  function s(a, l) {
    let u;
    const c = { ...b.useContext(xf), ...a, layoutId: xb(a) },
      { isStatic: f } = c,
      d = mb(a),
      v = r(a, f);
    if (!f && wf) {
      wb();
      const y = Sb(c);
      (u = y.MeasureLayout), (d.visualElement = fb(i, v, c, t, y.ProjectionNode));
    }
    return p.jsxs(ca.Provider, {
      value: d,
      children: [
        u && d.visualElement ? p.jsx(u, { visualElement: d.visualElement, ...c }) : null,
        n(i, a, hb(v, d.visualElement, l), v, f, d.visualElement),
      ],
    });
  }
  const o = b.forwardRef(s);
  return (o[vb] = i), o;
}
function xb({ layoutId: e }) {
  const t = b.useContext(vf).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function wb(e, t) {
  b.useContext(I1).strict;
}
function Sb(e) {
  const { drag: t, layout: n } = Vr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const bb = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function bf(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(bb.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function F1(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const V1 = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function B1(e, t, n, r) {
  F1(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(V1.has(i) ? i : aa(i), t.attrs[i]);
}
function U1(e, { layout: t, layoutId: n }) {
  return (
    bn.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!Ro[e] || e === 'opacity'))
  );
}
function Cf(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (be(i[o]) ||
      (t.style && be(t.style[o])) ||
      U1(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return n && i && typeof i.willChange == 'string' && (n.applyWillChange = !1), s;
}
function $1(e, t, n) {
  const r = Cf(e, t, n);
  for (const i in e)
    if (be(e[i]) || be(t[i])) {
      const s =
        os.indexOf(i) !== -1 ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function da(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Cb(e) {
  if (bn.has(e)) return 'transform';
  if (r1.has(e)) return aa(e);
}
function kb(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  s,
  o,
  a
) {
  const l = { latestValues: Eb(i, s, o, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(i, u, l)), l;
}
const W1 = (e) => (t, n) => {
  const r = b.useContext(ca),
    i = b.useContext(ua),
    s = () => kb(e, t, r, i, n);
  return n ? s() : da(s);
};
function cp(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const s = Yc(e, r[i]);
    if (s) {
      const { transitionEnd: o, transition: a, ...l } = s;
      n(l, o);
    }
  }
}
function Eb(e, t, n, r, i) {
  var s;
  const o = {},
    a = new Set(),
    l = r && ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) === void 0,
    u = i(e, {});
  for (const w in u) o[w] = Js(u[w]);
  let { initial: c, animate: f } = e;
  const d = fa(e),
    v = z1(e);
  t &&
    v &&
    !d &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), f === void 0 && (f = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || c === !1;
  const x = y ? f : c;
  return (
    x &&
      typeof x != 'boolean' &&
      !Gi(x) &&
      cp(e, x, (w, m) => {
        for (const h in w) {
          let g = w[h];
          if (Array.isArray(g)) {
            const S = y ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (o[h] = g);
        }
        for (const h in m) o[h] = m[h];
      }),
    l &&
      (f &&
        c !== !1 &&
        !Gi(f) &&
        cp(e, f, (w) => {
          for (const m in w) {
            const h = Cb(m);
            h && a.add(h);
          }
        }),
      a.size && (o.willChange = Array.from(a).join(','))),
    o
  );
}
const kf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  H1 = () => ({ ...kf(), attrs: {} }),
  G1 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Pb = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  Tb = os.length;
function Ab(e, t, n) {
  let r = '',
    i = !0;
  for (let s = 0; s < Tb; s++) {
    const o = os[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == 'number'
        ? (l = a === (o.startsWith('scale') ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = G1(a, sf[o]);
      if (!l) {
        i = !1;
        const c = Pb[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r;
}
function Ef(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (bn.has(l)) {
      o = !0;
      continue;
    } else if (O0(l)) {
      i[l] = u;
      continue;
    } else {
      const c = G1(u, sf[l]);
      l.startsWith('origin') ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Ab(t, e.transform, n))
        : r.transform && (r.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: u = '50%', originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function fp(e, t, n) {
  return typeof e == 'string' ? e : R.transform(t + n * e);
}
function Nb(e, t, n) {
  const r = fp(t, e.x, e.width),
    i = fp(n, e.y, e.height);
  return `${r} ${i}`;
}
const jb = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Mb = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function _b(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? jb : Mb;
  e[s.offset] = R.transform(-r);
  const o = R.transform(t),
    a = R.transform(n);
  e[s.array] = `${o} ${a}`;
}
function Pf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f
) {
  if ((Ef(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: v, dimensions: y } = e;
  d.transform && (y && (v.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = Nb(y, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && _b(d, o, a, l, !1);
}
const Tf = (e) => typeof e == 'string' && e.toLowerCase() === 'svg',
  Rb = {
    useVisualState: W1({
      scrapeMotionValuesFromProps: $1,
      createRenderState: H1,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        W.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          W.render(() => {
            Pf(n, r, Tf(t.tagName), e.transformTemplate), B1(t, n);
          });
      },
    }),
  },
  Lb = {
    useVisualState: W1({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: Cf,
      createRenderState: kf,
    }),
  };
function K1(e, t, n) {
  for (const r in t) !be(t[r]) && !U1(r, n) && (e[r] = t[r]);
}
function Db({ transformTemplate: e }, t) {
  return b.useMemo(() => {
    const n = kf();
    return Ef(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Ib(e, t) {
  const n = e.style || {},
    r = {};
  return K1(r, n, e), Object.assign(r, Db(e, t)), r;
}
function Ob(e, t) {
  const n = {},
    r = Ib(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const zb = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function Lo(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    zb.has(e)
  );
}
let Y1 = (e) => !Lo(e);
function Fb(e) {
  e && (Y1 = (t) => (t.startsWith('on') ? !Lo(t) : e(t)));
}
try {
  Fb(require('@emotion/is-prop-valid').default);
} catch {}
function Vb(e, t, n) {
  const r = {};
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((Y1(i) ||
        (n === !0 && Lo(i)) ||
        (!t && !Lo(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]));
  return r;
}
function Bb(e, t, n, r) {
  const i = b.useMemo(() => {
    const s = H1();
    return Pf(s, t, Tf(r), e.transformTemplate), { ...s.attrs, style: { ...s.style } };
  }, [t]);
  if (e.style) {
    const s = {};
    K1(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function Ub(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (bf(n) ? Bb : Ob)(r, s, o, n),
      u = Vb(r, typeof n == 'string', e),
      c = n !== b.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = b.useMemo(() => (be(f) ? f.get() : f), [f]);
    return b.createElement(n, { ...c, children: d });
  };
}
function $b(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(bf(r) ? Rb : Lb),
      preloadedFeatures: e,
      useRender: Ub(i),
      createVisualElement: t,
      Component: r,
    };
    return yb(o);
  };
}
const Cu = { current: null },
  X1 = { current: !1 };
function Wb() {
  if (((X1.current = !0), !!wf))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Cu.current = e.matches);
      e.addListener(t), t();
    } else Cu.current = !1;
}
function Hb(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (be(i)) e.addValue(r, i);
    else if (be(s)) e.addValue(r, Qi(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Qi(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const dp = new WeakMap(),
  Gb = [...V0, we, mn],
  Kb = (e) => Gb.find(F0(e)),
  hp = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ];
class Yb {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = tf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = yt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), W.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = fa(n)),
      (this.isVariantNode = z1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const v = f[d];
      l[d] !== void 0 && be(v) && v.set(l[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      dp.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      X1.current || Wb(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Cu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    dp.delete(this.current),
      this.projection && this.projection.unmount(),
      hn(this.notifyUpdate),
      hn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = bn.has(t),
      i = n.on('change', (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && W.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on('renderRequest', this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = 'animation';
    for (t in Vr) {
      const n = Vr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : oe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < hp.length; r++) {
      const i = hp[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = 'on' + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Hb(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Qi(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == 'string' && (D0(i) || L0(i))
          ? (i = parseFloat(i))
          : !Kb(i) && mn.test(n) && (i = Y0(t, n)),
        this.setBaseTarget(t, be(i) ? i.get() : i)),
      be(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == 'string' || typeof r == 'object') {
      const o = Yc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !be(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Q1 extends Yb {
  constructor() {
    super(...arguments), (this.KeyframeResolver = X0);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function Xb(e) {
  return window.getComputedStyle(e);
}
class Qb extends Q1 {
  constructor() {
    super(...arguments),
      (this.type = 'html'),
      (this.applyWillChange = !0),
      (this.renderInstance = F1);
  }
  readValueFromInstance(t, n) {
    if (bn.has(n)) {
      const r = of(n);
      return (r && r.default) || 0;
    } else {
      const r = Xb(t),
        i = (O0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == 'string' ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return C1(t, n);
  }
  build(t, n, r) {
    Ef(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Cf(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    be(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class qb extends Q1 {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = oe);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (bn.has(n)) {
      const r = of(n);
      return (r && r.default) || 0;
    }
    return (n = V1.has(n) ? n : aa(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $1(t, n, r);
  }
  build(t, n, r) {
    Pf(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    B1(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Tf(t.tagName)), super.mount(t);
  }
}
const Zb = (e, t) =>
    bf(e) ? new qb(t) : new Qb(t, { allowProjection: e !== b.Fragment }),
  Jb = $b({ ...BS, ...ub, ...Z3, ...cb }, Zb),
  U = D2(Jb);
class eC extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function tC({ children: e, isPresent: t }) {
  const n = b.useId(),
    r = b.useRef(null),
    i = b.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = b.useContext(xf);
  return (
    b.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement('style');
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    p.jsx(eC, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: b.cloneElement(e, { ref: r }),
    })
  );
}
const nC = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = da(rC),
    l = b.useId(),
    u = b.useCallback(
      (f) => {
        a.set(f, !0);
        for (const d of a.values()) if (!d) return;
        r && r();
      },
      [a, r]
    ),
    c = b.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      s ? [Math.random(), u] : [n, u]
    );
  return (
    b.useMemo(() => {
      a.forEach((f, d) => a.set(d, !1));
    }, [n]),
    b.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === 'popLayout' && (e = p.jsx(tC, { isPresent: n, children: e })),
    p.jsx(ua.Provider, { value: c, children: e })
  );
};
function rC() {
  return new Map();
}
const Os = (e) => e.key || '';
function pp(e) {
  const t = [];
  return (
    b.Children.forEach(e, (n) => {
      b.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const ha = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: s = !0,
  mode: o = 'sync',
}) => {
  const a = b.useMemo(() => pp(e), [e]),
    l = a.map(Os),
    u = b.useRef(!0),
    c = b.useRef(a),
    f = da(() => new Map()),
    [d, v] = b.useState(a),
    [y, x] = b.useState(a);
  Sf(() => {
    (u.current = !1), (c.current = a);
    for (let h = 0; h < y.length; h++) {
      const g = Os(y[h]);
      l.includes(g) ? f.delete(g) : f.get(g) !== !0 && f.set(g, !1);
    }
  }, [y, l.length, l.join('-')]);
  const w = [];
  if (a !== d) {
    let h = [...a];
    for (let g = 0; g < y.length; g++) {
      const S = y[g],
        C = Os(S);
      l.includes(C) || (h.splice(g, 0, S), w.push(S));
    }
    o === 'wait' && w.length && (h = w), x(pp(h)), v(a);
    return;
  }
  const { forceRender: m } = b.useContext(vf);
  return p.jsx(p.Fragment, {
    children: y.map((h) => {
      const g = Os(h),
        S = a === y || l.includes(g),
        C = () => {
          if (f.has(g)) f.set(g, !0);
          else return;
          let P = !0;
          f.forEach((A) => {
            A || (P = !1);
          }),
            P && (m == null || m(), x(c.current), i && i());
        };
      return p.jsx(
        nC,
        {
          isPresent: S,
          initial: !u.current || r ? void 0 : !1,
          custom: S ? void 0 : n,
          presenceAffectsLayout: s,
          mode: o,
          onExitComplete: S ? void 0 : C,
          children: h,
        },
        g
      );
    }),
  });
};
function iC(e) {
  e.values.forEach((t) => t.stop());
}
function ku(e, t) {
  [...t].reverse().forEach((r) => {
    const i = e.getVariant(r);
    i && gf(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((s) => {
          ku(s, t);
        });
  });
}
function sC(e, t) {
  if (Array.isArray(t)) return ku(e, t);
  if (typeof t == 'string') return ku(e, [t]);
  gf(e, t);
}
function oC() {
  const e = new Set(),
    t = {
      subscribe(n) {
        return e.add(n), () => void e.delete(n);
      },
      start(n, r) {
        const i = [];
        return (
          e.forEach((s) => {
            i.push(c1(s, n, { transitionOverride: r }));
          }),
          Promise.all(i)
        );
      },
      set(n) {
        return e.forEach((r) => {
          sC(r, n);
        });
      },
      stop() {
        e.forEach((n) => {
          iC(n);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function aC() {
  const e = da(oC);
  return Sf(e.mount, []), e;
}
const Af = aC;
function q1(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = q1(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function lC() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = q1(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Nf = '-',
  uC = (e) => {
    const t = fC(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(Nf);
        return a[0] === '' && a.length !== 1 && a.shift(), Z1(a, t) || cC(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  Z1 = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? Z1(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const s = e.join(Nf);
    return (o = t.validators.find(({ validator: a }) => a(s))) == null
      ? void 0
      : o.classGroupId;
  },
  mp = /^\[(.+)\]$/,
  cC = (e) => {
    if (mp.test(e)) {
      const t = mp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
      if (n) return 'arbitrary..' + n;
    }
  },
  fC = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      hC(Object.entries(e.classGroups), n).forEach(([s, o]) => {
        Eu(o, r, s, t);
      }),
      r
    );
  },
  Eu = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == 'string') {
        const s = i === '' ? t : gp(t, i);
        s.classGroupId = n;
        return;
      }
      if (typeof i == 'function') {
        if (dC(i)) {
          Eu(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([s, o]) => {
        Eu(o, gp(t, s), n, r);
      });
    });
  },
  gp = (e, t) => {
    let n = e;
    return (
      t.split(Nf).forEach((r) => {
        n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  dC = (e) => e.isThemeGetter,
  hC = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((s) =>
            typeof s == 'string'
              ? t + s
              : typeof s == 'object'
              ? Object.fromEntries(Object.entries(s).map(([o, a]) => [t + o, a]))
              : s
          );
          return [n, i];
        })
      : e,
  pC = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (s, o) => {
      n.set(s, o), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let o = n.get(s);
        if (o !== void 0) return o;
        if ((o = r.get(s)) !== void 0) return i(s, o), o;
      },
      set(s, o) {
        n.has(s) ? n.set(s, o) : i(s, o);
      },
    };
  },
  J1 = '!',
  mC = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      s = t.length,
      o = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          f;
        for (let w = 0; w < a.length; w++) {
          let m = a[w];
          if (u === 0) {
            if (m === i && (r || a.slice(w, w + s) === t)) {
              l.push(a.slice(c, w)), (c = w + s);
              continue;
            }
            if (m === '/') {
              f = w;
              continue;
            }
          }
          m === '[' ? u++ : m === ']' && u--;
        }
        const d = l.length === 0 ? a : a.substring(c),
          v = d.startsWith(J1),
          y = v ? d.substring(1) : d,
          x = f && f > c ? f - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: v,
          baseClassName: y,
          maybePostfixModifierPosition: x,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  gC = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  vC = (e) => ({ cache: pC(e.cacheSize), parseClassName: mC(e), ...uC(e) }),
  yC = /\s+/,
  xC = (e, t) => {
    const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t,
      s = [],
      o = e.trim().split(yC);
    let a = '';
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: d,
          maybePostfixModifierPosition: v,
        } = n(u);
      let y = !!v,
        x = r(y ? d.substring(0, v) : d);
      if (!x) {
        if (!y) {
          a = u + (a.length > 0 ? ' ' + a : a);
          continue;
        }
        if (((x = r(d)), !x)) {
          a = u + (a.length > 0 ? ' ' + a : a);
          continue;
        }
        y = !1;
      }
      const w = gC(c).join(':'),
        m = f ? w + J1 : w,
        h = m + x;
      if (s.includes(h)) continue;
      s.push(h);
      const g = i(x, y);
      for (let S = 0; S < g.length; ++S) {
        const C = g[S];
        s.push(m + C);
      }
      a = u + (a.length > 0 ? ' ' + a : a);
    }
    return a;
  };
function wC() {
  let e = 0,
    t,
    n,
    r = '';
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ev(t)) && (r && (r += ' '), (r += n));
  return r;
}
const ev = (e) => {
  if (typeof e == 'string') return e;
  let t,
    n = '';
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ev(e[r])) && (n && (n += ' '), (n += t));
  return n;
};
function SC(e, ...t) {
  let n,
    r,
    i,
    s = o;
  function o(l) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = vC(u)), (r = n.cache.get), (i = n.cache.set), (s = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = xC(l, n);
    return i(l, c), c;
  }
  return function () {
    return s(wC.apply(null, arguments));
  };
}
const G = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  tv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  bC = /^\d+\/\d+$/,
  CC = new Set(['px', 'full', 'screen']),
  kC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  EC =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  PC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  TC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  AC =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  bt = (e) => Nr(e) || CC.has(e) || bC.test(e),
  $t = (e) => Kr(e, 'length', IC),
  Nr = (e) => !!e && !Number.isNaN(Number(e)),
  il = (e) => Kr(e, 'number', Nr),
  si = (e) => !!e && Number.isInteger(Number(e)),
  NC = (e) => e.endsWith('%') && Nr(e.slice(0, -1)),
  D = (e) => tv.test(e),
  Wt = (e) => kC.test(e),
  jC = new Set(['length', 'size', 'percentage']),
  MC = (e) => Kr(e, jC, nv),
  _C = (e) => Kr(e, 'position', nv),
  RC = new Set(['image', 'url']),
  LC = (e) => Kr(e, RC, zC),
  DC = (e) => Kr(e, '', OC),
  oi = () => !0,
  Kr = (e, t, n) => {
    const r = tv.exec(e);
    return r ? (r[1] ? (typeof t == 'string' ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
  },
  IC = (e) => EC.test(e) && !PC.test(e),
  nv = () => !1,
  OC = (e) => TC.test(e),
  zC = (e) => AC.test(e),
  FC = () => {
    const e = G('colors'),
      t = G('spacing'),
      n = G('blur'),
      r = G('brightness'),
      i = G('borderColor'),
      s = G('borderRadius'),
      o = G('borderSpacing'),
      a = G('borderWidth'),
      l = G('contrast'),
      u = G('grayscale'),
      c = G('hueRotate'),
      f = G('invert'),
      d = G('gap'),
      v = G('gradientColorStops'),
      y = G('gradientColorStopPositions'),
      x = G('inset'),
      w = G('margin'),
      m = G('opacity'),
      h = G('padding'),
      g = G('saturate'),
      S = G('scale'),
      C = G('sepia'),
      P = G('skew'),
      A = G('space'),
      E = G('translate'),
      I = () => ['auto', 'contain', 'none'],
      M = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      re = () => ['auto', D, t],
      F = () => [D, t],
      at = () => ['', bt, $t],
      lt = () => ['auto', Nr, D],
      Xr = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      St = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      ie = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      T = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
      _ = () => ['', '0', D],
      L = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      B = () => [Nr, D];
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [oi],
        spacing: [bt, $t],
        blur: ['none', '', Wt, D],
        brightness: B(),
        borderColor: [e],
        borderRadius: ['none', '', 'full', Wt, D],
        borderSpacing: F(),
        borderWidth: at(),
        contrast: B(),
        grayscale: _(),
        hueRotate: B(),
        invert: _(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [NC, $t],
        inset: re(),
        margin: re(),
        opacity: B(),
        padding: F(),
        saturate: B(),
        scale: B(),
        sepia: _(),
        skew: B(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', D] }],
        container: ['container'],
        columns: [{ columns: [Wt] }],
        'break-after': [{ 'break-after': L() }],
        'break-before': [{ 'break-before': L() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: [...Xr(), D] }],
        overflow: [{ overflow: M() }],
        'overflow-x': [{ 'overflow-x': M() }],
        'overflow-y': [{ 'overflow-y': M() }],
        overscroll: [{ overscroll: I() }],
        'overscroll-x': [{ 'overscroll-x': I() }],
        'overscroll-y': [{ 'overscroll-y': I() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [x] }],
        'inset-x': [{ 'inset-x': [x] }],
        'inset-y': [{ 'inset-y': [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', si, D] }],
        basis: [{ basis: re() }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', D] }],
        grow: [{ grow: _() }],
        shrink: [{ shrink: _() }],
        order: [{ order: ['first', 'last', 'none', si, D] }],
        'grid-cols': [{ 'grid-cols': [oi] }],
        'col-start-end': [{ col: ['auto', { span: ['full', si, D] }, D] }],
        'col-start': [{ 'col-start': lt() }],
        'col-end': [{ 'col-end': lt() }],
        'grid-rows': [{ 'grid-rows': [oi] }],
        'row-start-end': [{ row: ['auto', { span: [si, D] }, D] }],
        'row-start': [{ 'row-start': lt() }],
        'row-end': [{ 'row-end': lt() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', D] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', D] }],
        gap: [{ gap: [d] }],
        'gap-x': [{ 'gap-x': [d] }],
        'gap-y': [{ 'gap-y': [d] }],
        'justify-content': [{ justify: ['normal', ...T()] }],
        'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
        'justify-self': [
          { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
        ],
        'align-content': [{ content: ['normal', ...T(), 'baseline'] }],
        'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'align-self': [
          { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
        ],
        'place-content': [{ 'place-content': [...T(), 'baseline'] }],
        'place-items': [
          { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
        ],
        'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        'space-x': [{ 'space-x': [A] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [A] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', D, t] }],
        'min-w': [{ 'min-w': [D, t, 'min', 'max', 'fit'] }],
        'max-w': [
          {
            'max-w': [
              D,
              t,
              'none',
              'full',
              'min',
              'max',
              'fit',
              'prose',
              { screen: [Wt] },
              Wt,
            ],
          },
        ],
        h: [{ h: [D, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [{ 'min-h': [D, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'max-h': [{ 'max-h': [D, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        size: [{ size: [D, t, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', Wt, $t] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          {
            font: [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
              il,
            ],
          },
        ],
        'font-family': [{ font: [oi] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
        tracking: [
          { tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', D] },
        ],
        'line-clamp': [{ 'line-clamp': ['none', Nr, il] }],
        leading: [
          { leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', bt, D] },
        ],
        'list-image': [{ 'list-image': ['none', D] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', D] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [m] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [m] }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...St(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: ['auto', 'from-font', bt, $t] }],
        'underline-offset': [{ 'underline-offset': ['auto', bt, D] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: F() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              D,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', D] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [m] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...Xr(), _C] }],
        'bg-repeat': [
          { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
        ],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', MC] }],
        'bg-image': [
          {
            bg: [
              'none',
              { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
              LC,
            ],
          },
        ],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [y] }],
        'gradient-via-pos': [{ via: [y] }],
        'gradient-to-pos': [{ to: [y] }],
        'gradient-from': [{ from: [v] }],
        'gradient-via': [{ via: [v] }],
        'gradient-to': [{ to: [v] }],
        rounded: [{ rounded: [s] }],
        'rounded-s': [{ 'rounded-s': [s] }],
        'rounded-e': [{ 'rounded-e': [s] }],
        'rounded-t': [{ 'rounded-t': [s] }],
        'rounded-r': [{ 'rounded-r': [s] }],
        'rounded-b': [{ 'rounded-b': [s] }],
        'rounded-l': [{ 'rounded-l': [s] }],
        'rounded-ss': [{ 'rounded-ss': [s] }],
        'rounded-se': [{ 'rounded-se': [s] }],
        'rounded-ee': [{ 'rounded-ee': [s] }],
        'rounded-es': [{ 'rounded-es': [s] }],
        'rounded-tl': [{ 'rounded-tl': [s] }],
        'rounded-tr': [{ 'rounded-tr': [s] }],
        'rounded-br': [{ 'rounded-br': [s] }],
        'rounded-bl': [{ 'rounded-bl': [s] }],
        'border-w': [{ border: [a] }],
        'border-w-x': [{ 'border-x': [a] }],
        'border-w-y': [{ 'border-y': [a] }],
        'border-w-s': [{ 'border-s': [a] }],
        'border-w-e': [{ 'border-e': [a] }],
        'border-w-t': [{ 'border-t': [a] }],
        'border-w-r': [{ 'border-r': [a] }],
        'border-w-b': [{ 'border-b': [a] }],
        'border-w-l': [{ 'border-l': [a] }],
        'border-opacity': [{ 'border-opacity': [m] }],
        'border-style': [{ border: [...St(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [a] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [a] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [m] }],
        'divide-style': [{ divide: St() }],
        'border-color': [{ border: [i] }],
        'border-color-x': [{ 'border-x': [i] }],
        'border-color-y': [{ 'border-y': [i] }],
        'border-color-s': [{ 'border-s': [i] }],
        'border-color-e': [{ 'border-e': [i] }],
        'border-color-t': [{ 'border-t': [i] }],
        'border-color-r': [{ 'border-r': [i] }],
        'border-color-b': [{ 'border-b': [i] }],
        'border-color-l': [{ 'border-l': [i] }],
        'divide-color': [{ divide: [i] }],
        'outline-style': [{ outline: ['', ...St()] }],
        'outline-offset': [{ 'outline-offset': [bt, D] }],
        'outline-w': [{ outline: [bt, $t] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: at() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [m] }],
        'ring-offset-w': [{ 'ring-offset': [bt, $t] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: ['', 'inner', 'none', Wt, DC] }],
        'shadow-color': [{ shadow: [oi] }],
        opacity: [{ opacity: [m] }],
        'mix-blend': [{ 'mix-blend': [...ie(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': ie() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', Wt, D] }],
        grayscale: [{ grayscale: [u] }],
        'hue-rotate': [{ 'hue-rotate': [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [C] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [n] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
        'backdrop-invert': [{ 'backdrop-invert': [f] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [m] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [g] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [C] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [o] }],
        'border-spacing-x': [{ 'border-spacing-x': [o] }],
        'border-spacing-y': [{ 'border-spacing-y': [o] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              'none',
              'all',
              '',
              'colors',
              'opacity',
              'shadow',
              'transform',
              D,
            ],
          },
        ],
        duration: [{ duration: B() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', D] }],
        delay: [{ delay: B() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', D] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [S] }],
        'scale-x': [{ 'scale-x': [S] }],
        'scale-y': [{ 'scale-y': [S] }],
        rotate: [{ rotate: [si, D] }],
        'translate-x': [{ 'translate-x': [E] }],
        'translate-y': [{ 'translate-y': [E] }],
        'skew-x': [{ 'skew-x': [P] }],
        'skew-y': [{ 'skew-y': [P] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              D,
            ],
          },
        ],
        accent: [{ accent: ['auto', e] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              D,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': F() }],
        'scroll-mx': [{ 'scroll-mx': F() }],
        'scroll-my': [{ 'scroll-my': F() }],
        'scroll-ms': [{ 'scroll-ms': F() }],
        'scroll-me': [{ 'scroll-me': F() }],
        'scroll-mt': [{ 'scroll-mt': F() }],
        'scroll-mr': [{ 'scroll-mr': F() }],
        'scroll-mb': [{ 'scroll-mb': F() }],
        'scroll-ml': [{ 'scroll-ml': F() }],
        'scroll-p': [{ 'scroll-p': F() }],
        'scroll-px': [{ 'scroll-px': F() }],
        'scroll-py': [{ 'scroll-py': F() }],
        'scroll-ps': [{ 'scroll-ps': F() }],
        'scroll-pe': [{ 'scroll-pe': F() }],
        'scroll-pt': [{ 'scroll-pt': F() }],
        'scroll-pr': [{ 'scroll-pr': F() }],
        'scroll-pb': [{ 'scroll-pb': F() }],
        'scroll-pl': [{ 'scroll-pl': F() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          { 'will-change': ['auto', 'scroll', 'contents', 'transform', D] },
        ],
        fill: [{ fill: [e, 'none'] }],
        'stroke-w': [{ stroke: [bt, $t, il] }],
        stroke: [{ stroke: [e, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    };
  },
  VC = SC(FC);
function Oe(...e) {
  return VC(lC(e));
}
const Pu = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  rv = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  BC = ({ className: e, children: t }) => {
    const n = Af(),
      r = b.useRef(null),
      [i, s] = b.useState(!1);
    return (
      b.useEffect(() => {
        const o = () => {
          if (!r.current) return;
          r.current.getBoundingClientRect().top < window.innerHeight - 100 &&
            (s(!0), n.start('visible'));
        };
        return (
          window.addEventListener('scroll', o),
          () => window.removeEventListener('scroll', o)
        );
      }, [n]),
      p.jsx(U.div, {
        ref: r,
        initial: 'hidden',
        animate: i ? n : 'hidden',
        variants: rv,
        transition: { duration: 0.5, type: 'spring', damping: 10, bounce: 100 },
        className: Oe(
          'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto ',
          e
        ),
        children: t,
      })
    );
  },
  UC = ({ className: e, title: t, description: n, header: r, icon: i }) =>
    p.jsxs('div', {
      className: Oe(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-neutral-100 border-white/[0.2] border justify-between flex flex-col space-y-4',
        e
      ),
      children: [
        r,
        p.jsxs('div', {
          className: 'group-hover/bento:translate-x-2 transition duration-200',
          children: [
            i,
            p.jsx('div', {
              className: 'font-sans font-bold text-neutral-900 mb-2 mt-2',
              children: t,
            }),
            p.jsx('div', {
              className: 'font-sans font-normaltext-xs text-neutral-600',
              children: n,
            }),
          ],
        }),
      ],
    });
function $C(e) {
  return p.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
    ...e,
    children: [
      p.jsx('defs', {
        children: p.jsxs('linearGradient', {
          id: 'angularGradient',
          x1: '0%',
          y1: '0%',
          x2: '100%',
          y2: '100%',
          children: [
            p.jsx('stop', {
              offset: '0%',
              style: { stopColor: '#DD0031', stopOpacity: 1 },
            }),
            p.jsx('stop', {
              offset: '100%',
              style: { stopColor: '#C3002F', stopOpacity: 1 },
            }),
          ],
        }),
      }),
      p.jsx('path', {
        fill: 'url(#angularGradient)',
        d: 'm12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7zm0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05zm1.62 7.9h-3.23L12 8.63z',
      }),
    ],
  });
}
function WC(e) {
  return p.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
    ...e,
    children: [
      p.jsx('defs', {
        children: p.jsxs('linearGradient', {
          id: 'reactGradient',
          x1: '0%',
          y1: '0%',
          x2: '100%',
          y2: '100%',
          children: [
            p.jsx('stop', {
              offset: '0%',
              style: { stopColor: '#61DAFB', stopOpacity: 1 },
            }),
            p.jsx('stop', {
              offset: '100%',
              style: { stopColor: '#2188B6', stopOpacity: 1 },
            }),
          ],
        }),
      }),
      p.jsx('path', {
        fill: 'url(#reactGradient)',
        d: 'M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9',
      }),
    ],
  });
}
function HC(e) {
  return p.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
    ...e,
    children: [
      p.jsx('defs', {
        children: p.jsxs('linearGradient', {
          id: 'tailwindGradient',
          x1: '0%',
          y1: '0%',
          x2: '100%',
          y2: '100%',
          children: [
            p.jsx('stop', {
              offset: '0%',
              style: { stopColor: '#06B6D4', stopOpacity: 1 },
            }),
            p.jsx('stop', {
              offset: '100%',
              style: { stopColor: '#0EA5E9', stopOpacity: 1 },
            }),
          ],
        }),
      }),
      p.jsx('path', {
        fill: 'url(#tailwindGradient)',
        d: 'M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12',
      }),
    ],
  });
}
const vp = () => {};
let jf = {},
  iv = {},
  sv = null,
  ov = { mark: vp, measure: vp };
try {
  typeof window < 'u' && (jf = window),
    typeof document < 'u' && (iv = document),
    typeof MutationObserver < 'u' && (sv = MutationObserver),
    typeof performance < 'u' && (ov = performance);
} catch {}
const { userAgent: yp = '' } = jf.navigator || {},
  gn = jf,
  Q = iv,
  xp = sv,
  zs = ov;
gn.document;
const Bt =
    !!Q.documentElement &&
    !!Q.head &&
    typeof Q.addEventListener == 'function' &&
    typeof Q.createElement == 'function',
  av = ~yp.indexOf('MSIE') || ~yp.indexOf('Trident/');
var Z = 'classic',
  lv = 'duotone',
  Fe = 'sharp',
  Ve = 'sharp-duotone',
  GC = [Z, lv, Fe, Ve],
  KC = {
    classic: { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
    sharp: { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' },
    'sharp-duotone': { 900: 'fasds' },
  },
  wp = {
    kit: { fak: 'kit', 'fa-kit': 'kit' },
    'kit-duotone': { fakd: 'kit-duotone', 'fa-kit-duotone': 'kit-duotone' },
  },
  YC = ['kit'],
  XC = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  QC =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  qC = {
    'Font Awesome 5 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 5 Pro': { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal' },
    'Font Awesome 5 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 5 Duotone': { 900: 'fad' },
  },
  ZC = {
    'Font Awesome 6 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 6 Pro': {
      900: 'fas',
      400: 'far',
      normal: 'far',
      300: 'fal',
      100: 'fat',
    },
    'Font Awesome 6 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 6 Duotone': { 900: 'fad' },
    'Font Awesome 6 Sharp': {
      900: 'fass',
      400: 'fasr',
      normal: 'fasr',
      300: 'fasl',
      100: 'fast',
    },
    'Font Awesome 6 Sharp Duotone': { 900: 'fasds' },
  },
  JC = {
    classic: {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    },
    sharp: {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast',
    },
    'sharp-duotone': { 'fa-solid': 'fasds' },
  },
  e4 = {
    classic: ['fas', 'far', 'fal', 'fat'],
    sharp: ['fass', 'fasr', 'fasl', 'fast'],
    'sharp-duotone': ['fasds'],
  },
  t4 = {
    classic: {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    },
    sharp: { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' },
    'sharp-duotone': { fasds: 'fa-solid' },
  },
  n4 = {
    classic: {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
    },
    sharp: { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' },
    'sharp-duotone': { solid: 'fasds' },
  },
  uv = {
    classic: {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
    },
    sharp: {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    },
    'sharp-duotone': { fa: 'solid', fasds: 'solid', 'fa-solid': 'solid' },
  },
  r4 = ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'],
  cv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  i4 = cv.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  hi = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  s4 = [
    ...Object.keys(e4),
    ...r4,
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    'beat',
    'border',
    'fade',
    'beat-fade',
    'bounce',
    'flip-both',
    'flip-horizontal',
    'flip-vertical',
    'flip',
    'fw',
    'inverse',
    'layers-counter',
    'layers-text',
    'layers',
    'li',
    'pull-left',
    'pull-right',
    'pulse',
    'rotate-180',
    'rotate-270',
    'rotate-90',
    'rotate-by',
    'shake',
    'spin-pulse',
    'spin-reverse',
    'spin',
    'stack-1x',
    'stack-2x',
    'stack',
    'ul',
    hi.GROUP,
    hi.SWAP_OPACITY,
    hi.PRIMARY,
    hi.SECONDARY,
  ]
    .concat(cv.map((e) => ''.concat(e, 'x')))
    .concat(i4.map((e) => 'w-'.concat(e))),
  o4 = {
    'Font Awesome Kit': { 400: 'fak', normal: 'fak' },
    'Font Awesome Kit Duotone': { 400: 'fakd', normal: 'fakd' },
  },
  a4 = { kit: { 'fa-kit': 'fak' }, 'kit-duotone': { 'fa-kit-duotone': 'fakd' } },
  l4 = { kit: { fak: 'fa-kit' }, 'kit-duotone': { fakd: 'fa-kit-duotone' } },
  Sp = { kit: { kit: 'fak' }, 'kit-duotone': { 'kit-duotone': 'fakd' } };
const Ot = '___FONT_AWESOME___',
  Tu = 16,
  fv = 'fa',
  dv = 'svg-inline--fa',
  Qn = 'data-fa-i2svg',
  Au = 'data-fa-pseudo-element',
  u4 = 'data-fa-pseudo-element-pending',
  Mf = 'data-prefix',
  _f = 'data-icon',
  bp = 'fontawesome-i2svg',
  c4 = 'async',
  f4 = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  hv = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  pv = [Z, Fe, Ve];
function us(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Z];
    },
  });
}
const mv = { ...uv };
mv[Z] = { ...uv[Z], ...wp.kit, ...wp['kit-duotone'] };
const Un = us(mv),
  Nu = { ...n4 };
Nu[Z] = { ...Nu[Z], ...Sp.kit, ...Sp['kit-duotone'] };
const qi = us(Nu),
  ju = { ...t4 };
ju[Z] = { ...ju[Z], ...l4.kit };
const $n = us(ju),
  Mu = { ...JC };
Mu[Z] = { ...Mu[Z], ...a4.kit };
const d4 = us(Mu),
  h4 = XC,
  gv = 'fa-layers-text',
  p4 = QC,
  m4 = { ...KC };
us(m4);
const g4 = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  sl = hi,
  Br = new Set();
Object.keys(qi[Z]).map(Br.add.bind(Br));
Object.keys(qi[Fe]).map(Br.add.bind(Br));
Object.keys(qi[Ve]).map(Br.add.bind(Br));
const v4 = [...YC, ...s4],
  Ti = gn.FontAwesomeConfig || {};
function y4(e) {
  var t = Q.querySelector('script[' + e + ']');
  if (t) return t.getAttribute(e);
}
function x4(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
Q &&
  typeof Q.querySelector == 'function' &&
  [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ].forEach((t) => {
    let [n, r] = t;
    const i = x4(y4(n));
    i != null && (Ti[r] = i);
  });
const vv = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: fv,
  replacementClass: dv,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Ti.familyPrefix && (Ti.cssPrefix = Ti.familyPrefix);
const Ur = { ...vv, ...Ti };
Ur.autoReplaceSvg || (Ur.observeMutations = !1);
const j = {};
Object.keys(vv).forEach((e) => {
  Object.defineProperty(j, e, {
    enumerable: !0,
    set: function (t) {
      (Ur[e] = t), Ai.forEach((n) => n(j));
    },
    get: function () {
      return Ur[e];
    },
  });
});
Object.defineProperty(j, 'familyPrefix', {
  enumerable: !0,
  set: function (e) {
    (Ur.cssPrefix = e), Ai.forEach((t) => t(j));
  },
  get: function () {
    return Ur.cssPrefix;
  },
});
gn.FontAwesomeConfig = j;
const Ai = [];
function w4(e) {
  return (
    Ai.push(e),
    () => {
      Ai.splice(Ai.indexOf(e), 1);
    }
  );
}
const Ht = Tu,
  ht = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function S4(e) {
  if (!e || !Bt) return;
  const t = Q.createElement('style');
  t.setAttribute('type', 'text/css'), (t.innerHTML = e);
  const n = Q.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const s = n[i],
      o = (s.tagName || '').toUpperCase();
    ['STYLE', 'LINK'].indexOf(o) > -1 && (r = s);
  }
  return Q.head.insertBefore(t, r), e;
}
const b4 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Zi() {
  let e = 12,
    t = '';
  for (; e-- > 0; ) t += b4[(Math.random() * 62) | 0];
  return t;
}
function Yr(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Rf(e) {
  return e.classList
    ? Yr(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter((t) => t);
}
function yv(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function C4(e) {
  return Object.keys(e || {})
    .reduce((t, n) => t + ''.concat(n, '="').concat(yv(e[n]), '" '), '')
    .trim();
}
function pa(e) {
  return Object.keys(e || {}).reduce(
    (t, n) => t + ''.concat(n, ': ').concat(e[n].trim(), ';'),
    ''
  );
}
function Lf(e) {
  return (
    e.size !== ht.size ||
    e.x !== ht.x ||
    e.y !== ht.y ||
    e.rotate !== ht.rotate ||
    e.flipX ||
    e.flipY
  );
}
function k4(e) {
  let { transform: t, containerWidth: n, iconWidth: r } = e;
  const i = { transform: 'translate('.concat(n / 2, ' 256)') },
    s = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    o = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    a = 'rotate('.concat(t.rotate, ' 0 0)'),
    l = { transform: ''.concat(s, ' ').concat(o, ' ').concat(a) },
    u = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
  return { outer: i, inner: l, path: u };
}
function E4(e) {
  let { transform: t, width: n = Tu, height: r = Tu, startCentered: i = !1 } = e,
    s = '';
  return (
    i && av
      ? (s += 'translate('
          .concat(t.x / Ht - n / 2, 'em, ')
          .concat(t.y / Ht - r / 2, 'em) '))
      : i
      ? (s += 'translate(calc(-50% + '
          .concat(t.x / Ht, 'em), calc(-50% + ')
          .concat(t.y / Ht, 'em)) '))
      : (s += 'translate('.concat(t.x / Ht, 'em, ').concat(t.y / Ht, 'em) ')),
    (s += 'scale('
      .concat((t.size / Ht) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / Ht) * (t.flipY ? -1 : 1), ') ')),
    (s += 'rotate('.concat(t.rotate, 'deg) ')),
    s
  );
}
var P4 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function xv() {
  const e = fv,
    t = dv,
    n = j.cssPrefix,
    r = j.replacementClass;
  let i = P4;
  if (n !== e || r !== t) {
    const s = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      a = new RegExp('\\.'.concat(t), 'g');
    i = i
      .replace(s, '.'.concat(n, '-'))
      .replace(o, '--'.concat(n, '-'))
      .replace(a, '.'.concat(r));
  }
  return i;
}
let Cp = !1;
function ol() {
  j.autoAddCss && !Cp && (S4(xv()), (Cp = !0));
}
var T4 = {
  mixout() {
    return { dom: { css: xv, insertCss: ol } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ol();
      },
      beforeI2svg() {
        ol();
      },
    };
  },
};
const zt = gn || {};
zt[Ot] || (zt[Ot] = {});
zt[Ot].styles || (zt[Ot].styles = {});
zt[Ot].hooks || (zt[Ot].hooks = {});
zt[Ot].shims || (zt[Ot].shims = []);
var pt = zt[Ot];
const wv = [],
  Sv = function () {
    Q.removeEventListener('DOMContentLoaded', Sv), (Do = 1), wv.map((e) => e());
  };
let Do = !1;
Bt &&
  ((Do = (Q.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Q.readyState
  )),
  Do || Q.addEventListener('DOMContentLoaded', Sv));
function A4(e) {
  Bt && (Do ? setTimeout(e, 0) : wv.push(e));
}
function cs(e) {
  const { tag: t, attributes: n = {}, children: r = [] } = e;
  return typeof e == 'string'
    ? yv(e)
    : '<'
        .concat(t, ' ')
        .concat(C4(n), '>')
        .concat(r.map(cs).join(''), '</')
        .concat(t, '>');
}
function kp(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var al = function (t, n, r, i) {
  var s = Object.keys(t),
    o = s.length,
    a = n,
    l,
    u,
    c;
  for (r === void 0 ? ((l = 1), (c = t[s[0]])) : ((l = 0), (c = r)); l < o; l++)
    (u = s[l]), (c = a(c, t[u], u, t));
  return c;
};
function N4(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (s & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function _u(e) {
  const t = N4(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function j4(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Ep(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Ru(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: r = !1 } = n,
    i = Ep(t);
  typeof pt.hooks.addPack == 'function' && !r
    ? pt.hooks.addPack(e, Ep(t))
    : (pt.styles[e] = { ...(pt.styles[e] || {}), ...i }),
    e === 'fas' && Ru('fa', t);
}
const { styles: Rn, shims: M4 } = pt,
  _4 = {
    [Z]: Object.values($n[Z]),
    [Fe]: Object.values($n[Fe]),
    [Ve]: Object.values($n[Ve]),
  };
let Df = null,
  bv = {},
  Cv = {},
  kv = {},
  Ev = {},
  Pv = {};
const R4 = {
  [Z]: Object.keys(Un[Z]),
  [Fe]: Object.keys(Un[Fe]),
  [Ve]: Object.keys(Un[Ve]),
};
function L4(e) {
  return ~v4.indexOf(e);
}
function D4(e, t) {
  const n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-');
  return r === e && i !== '' && !L4(i) ? i : null;
}
const Tv = () => {
  const e = (r) => al(Rn, (i, s, o) => ((i[o] = al(s, r, {})), i), {});
  (bv = e(
    (r, i, s) => (
      i[3] && (r[i[3]] = s),
      i[2] &&
        i[2]
          .filter((a) => typeof a == 'number')
          .forEach((a) => {
            r[a.toString(16)] = s;
          }),
      r
    )
  )),
    (Cv = e(
      (r, i, s) => (
        (r[s] = s),
        i[2] &&
          i[2]
            .filter((a) => typeof a == 'string')
            .forEach((a) => {
              r[a] = s;
            }),
        r
      )
    )),
    (Pv = e((r, i, s) => {
      const o = i[2];
      return (
        (r[s] = s),
        o.forEach((a) => {
          r[a] = s;
        }),
        r
      );
    }));
  const t = 'far' in Rn || j.autoFetchSvg,
    n = al(
      M4,
      (r, i) => {
        const s = i[0];
        let o = i[1];
        const a = i[2];
        return (
          o === 'far' && !t && (o = 'fas'),
          typeof s == 'string' && (r.names[s] = { prefix: o, iconName: a }),
          typeof s == 'number' &&
            (r.unicodes[s.toString(16)] = { prefix: o, iconName: a }),
          r
        );
      },
      { names: {}, unicodes: {} }
    );
  (kv = n.names),
    (Ev = n.unicodes),
    (Df = ma(j.styleDefault, { family: j.familyDefault }));
};
w4((e) => {
  Df = ma(e.styleDefault, { family: j.familyDefault });
});
Tv();
function If(e, t) {
  return (bv[e] || {})[t];
}
function I4(e, t) {
  return (Cv[e] || {})[t];
}
function Jt(e, t) {
  return (Pv[e] || {})[t];
}
function Av(e) {
  return kv[e] || { prefix: null, iconName: null };
}
function O4(e) {
  const t = Ev[e],
    n = If('fas', e);
  return (
    t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null }
  );
}
function vn() {
  return Df;
}
const Of = () => ({ prefix: null, iconName: null, rest: [] });
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: n = Z } = t,
    r = Un[n][e],
    i = qi[n][e] || qi[n][r],
    s = e in pt.styles ? e : null;
  return i || s || null;
}
const z4 = {
  [Z]: Object.keys($n[Z]),
  [Fe]: Object.keys($n[Fe]),
  [Ve]: Object.keys($n[Ve]),
};
function ga(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: n = !1 } = t,
    r = {
      [Z]: ''.concat(j.cssPrefix, '-').concat(Z),
      [Fe]: ''.concat(j.cssPrefix, '-').concat(Fe),
      [Ve]: ''.concat(j.cssPrefix, '-').concat(Ve),
    };
  let i = null,
    s = Z;
  const o = GC.filter((l) => l !== lv);
  o.forEach((l) => {
    (e.includes(r[l]) || e.some((u) => z4[l].includes(u))) && (s = l);
  });
  const a = e.reduce((l, u) => {
    const c = D4(j.cssPrefix, u);
    if (
      (Rn[u]
        ? ((u = _4[s].includes(u) ? d4[s][u] : u), (i = u), (l.prefix = u))
        : R4[s].indexOf(u) > -1
        ? ((i = u), (l.prefix = ma(u, { family: s })))
        : c
        ? (l.iconName = c)
        : u !== j.replacementClass && !o.some((f) => u === r[f]) && l.rest.push(u),
      !n && l.prefix && l.iconName)
    ) {
      const f = i === 'fa' ? Av(l.iconName) : {},
        d = Jt(l.prefix, l.iconName);
      f.prefix && (i = null),
        (l.iconName = f.iconName || d || l.iconName),
        (l.prefix = f.prefix || l.prefix),
        l.prefix === 'far' && !Rn.far && Rn.fas && !j.autoFetchSvg && (l.prefix = 'fas');
    }
    return l;
  }, Of());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (a.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (a.prefix = 'fad'),
    !a.prefix &&
      s === Fe &&
      (Rn.fass || j.autoFetchSvg) &&
      ((a.prefix = 'fass'), (a.iconName = Jt(a.prefix, a.iconName) || a.iconName)),
    !a.prefix &&
      s === Ve &&
      (Rn.fasds || j.autoFetchSvg) &&
      ((a.prefix = 'fasds'), (a.iconName = Jt(a.prefix, a.iconName) || a.iconName)),
    (a.prefix === 'fa' || i === 'fa') && (a.prefix = vn() || 'fas'),
    a
  );
}
class F4 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((s) => {
      (this.definitions[s] = { ...(this.definitions[s] || {}), ...i[s] }), Ru(s, i[s]);
      const o = $n[Z][s];
      o && Ru(o, i[s]), Tv();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? { 0: n } : n;
    return (
      Object.keys(r).map((i) => {
        const { prefix: s, iconName: o, icon: a } = r[i],
          l = a[2];
        t[s] || (t[s] = {}),
          l.length > 0 &&
            l.forEach((u) => {
              typeof u == 'string' && (t[s][u] = a);
            }),
          (t[s][o] = a);
      }),
      t
    );
  }
}
let Pp = [],
  Sr = {};
const jr = {},
  V4 = Object.keys(jr);
function B4(e, t) {
  let { mixoutsTo: n } = t;
  return (
    (Pp = e),
    (Sr = {}),
    Object.keys(jr).forEach((r) => {
      V4.indexOf(r) === -1 && delete jr[r];
    }),
    Pp.forEach((r) => {
      const i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach((s) => {
          typeof i[s] == 'function' && (n[s] = i[s]),
            typeof i[s] == 'object' &&
              Object.keys(i[s]).forEach((o) => {
                n[s] || (n[s] = {}), (n[s][o] = i[s][o]);
              });
        }),
        r.hooks)
      ) {
        const s = r.hooks();
        Object.keys(s).forEach((o) => {
          Sr[o] || (Sr[o] = []), Sr[o].push(s[o]);
        });
      }
      r.provides && r.provides(jr);
    }),
    n
  );
}
function Lu(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (
    (Sr[e] || []).forEach((o) => {
      t = o.apply(null, [t, ...r]);
    }),
    t
  );
}
function qn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Sr[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function yn() {
  const e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return jr[e] ? jr[e].apply(null, t) : void 0;
}
function Du(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  let { iconName: t } = e;
  const n = e.prefix || vn();
  if (t) return (t = Jt(n, t) || t), kp(Nv.definitions, n, t) || kp(pt.styles, n, t);
}
const Nv = new F4(),
  U4 = () => {
    (j.autoReplaceSvg = !1), (j.observeMutations = !1), qn('noAuto');
  },
  $4 = {
    i2svg: function () {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Bt
        ? (qn('beforeI2svg', e), yn('pseudoElements2svg', e), yn('i2svg', e))
        : Promise.reject(new Error('Operation requires a DOM of some kind.'));
    },
    watch: function () {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: t } = e;
      j.autoReplaceSvg === !1 && (j.autoReplaceSvg = !0),
        (j.observeMutations = !0),
        A4(() => {
          H4({ autoReplaceSvgRoot: t }), qn('watch', e);
        });
    },
  },
  W4 = {
    icon: (e) => {
      if (e === null) return null;
      if (typeof e == 'object' && e.prefix && e.iconName)
        return { prefix: e.prefix, iconName: Jt(e.prefix, e.iconName) || e.iconName };
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf('fa-') === 0 ? e[1].slice(3) : e[1],
          n = ma(e[0]);
        return { prefix: n, iconName: Jt(n, t) || t };
      }
      if (
        typeof e == 'string' &&
        (e.indexOf(''.concat(j.cssPrefix, '-')) > -1 || e.match(h4))
      ) {
        const t = ga(e.split(' '), { skipLookups: !0 });
        return {
          prefix: t.prefix || vn(),
          iconName: Jt(t.prefix, t.iconName) || t.iconName,
        };
      }
      if (typeof e == 'string') {
        const t = vn();
        return { prefix: t, iconName: Jt(t, e) || e };
      }
    },
  },
  He = {
    noAuto: U4,
    config: j,
    dom: $4,
    parse: W4,
    library: Nv,
    findIconDefinition: Du,
    toHtml: cs,
  },
  H4 = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: t = Q } = e;
    (Object.keys(pt.styles).length > 0 || j.autoFetchSvg) &&
      Bt &&
      j.autoReplaceSvg &&
      He.dom.i2svg({ node: t });
  };
function va(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map((n) => cs(n));
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (!Bt) return;
        const n = Q.createElement('div');
        return (n.innerHTML = e.html), n.children;
      },
    }),
    e
  );
}
function G4(e) {
  let { children: t, main: n, mask: r, attributes: i, styles: s, transform: o } = e;
  if (Lf(o) && n.found && !r.found) {
    const { width: a, height: l } = n,
      u = { x: a / l / 2, y: 0.5 };
    i.style = pa({
      ...s,
      'transform-origin': ''.concat(u.x + o.x / 16, 'em ').concat(u.y + o.y / 16, 'em'),
    });
  }
  return [{ tag: 'svg', attributes: i, children: t }];
}
function K4(e) {
  let { prefix: t, iconName: n, children: r, attributes: i, symbol: s } = e;
  const o = s === !0 ? ''.concat(t, '-').concat(j.cssPrefix, '-').concat(n) : s;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: { ...i, id: o }, children: r }],
    },
  ];
}
function zf(e) {
  const {
      icons: { main: t, mask: n },
      prefix: r,
      iconName: i,
      transform: s,
      symbol: o,
      title: a,
      maskId: l,
      titleId: u,
      extra: c,
      watchable: f = !1,
    } = e,
    { width: d, height: v } = n.found ? n : t,
    y = r === 'fak',
    x = [j.replacementClass, i ? ''.concat(j.cssPrefix, '-').concat(i) : '']
      .filter((C) => c.classes.indexOf(C) === -1)
      .filter((C) => C !== '' || !!C)
      .concat(c.classes)
      .join(' ');
  let w = {
    children: [],
    attributes: {
      ...c.attributes,
      'data-prefix': r,
      'data-icon': i,
      class: x,
      role: c.attributes.role || 'img',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 '.concat(d, ' ').concat(v),
    },
  };
  const m =
    y && !~c.classes.indexOf('fa-fw')
      ? { width: ''.concat((d / v) * 16 * 0.0625, 'em') }
      : {};
  f && (w.attributes[Qn] = ''),
    a &&
      (w.children.push({
        tag: 'title',
        attributes: { id: w.attributes['aria-labelledby'] || 'title-'.concat(u || Zi()) },
        children: [a],
      }),
      delete w.attributes.title);
  const h = {
      ...w,
      prefix: r,
      iconName: i,
      main: t,
      mask: n,
      maskId: l,
      transform: s,
      symbol: o,
      styles: { ...m, ...c.styles },
    },
    { children: g, attributes: S } =
      n.found && t.found
        ? yn('generateAbstractMask', h) || { children: [], attributes: {} }
        : yn('generateAbstractIcon', h) || { children: [], attributes: {} };
  return (h.children = g), (h.attributes = S), o ? K4(h) : G4(h);
}
function Tp(e) {
  const {
      content: t,
      width: n,
      height: r,
      transform: i,
      title: s,
      extra: o,
      watchable: a = !1,
    } = e,
    l = { ...o.attributes, ...(s ? { title: s } : {}), class: o.classes.join(' ') };
  a && (l[Qn] = '');
  const u = { ...o.styles };
  Lf(i) &&
    ((u.transform = E4({ transform: i, startCentered: !0, width: n, height: r })),
    (u['-webkit-transform'] = u.transform));
  const c = pa(u);
  c.length > 0 && (l.style = c);
  const f = [];
  return (
    f.push({ tag: 'span', attributes: l, children: [t] }),
    s && f.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [s] }),
    f
  );
}
function Y4(e) {
  const { content: t, title: n, extra: r } = e,
    i = { ...r.attributes, ...(n ? { title: n } : {}), class: r.classes.join(' ') },
    s = pa(r.styles);
  s.length > 0 && (i.style = s);
  const o = [];
  return (
    o.push({ tag: 'span', attributes: i, children: [t] }),
    n && o.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    o
  );
}
const { styles: ll } = pt;
function Iu(e) {
  const t = e[0],
    n = e[1],
    [r] = e.slice(4);
  let i = null;
  return (
    Array.isArray(r)
      ? (i = {
          tag: 'g',
          attributes: { class: ''.concat(j.cssPrefix, '-').concat(sl.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(j.cssPrefix, '-').concat(sl.SECONDARY),
                fill: 'currentColor',
                d: r[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(j.cssPrefix, '-').concat(sl.PRIMARY),
                fill: 'currentColor',
                d: r[1],
              },
            },
          ],
        })
      : (i = { tag: 'path', attributes: { fill: 'currentColor', d: r } }),
    { found: !0, width: t, height: n, icon: i }
  );
}
const X4 = { found: !1, width: 512, height: 512 };
function Q4(e, t) {
  !hv &&
    !j.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Ou(e, t) {
  let n = t;
  return (
    t === 'fa' && j.styleDefault !== null && (t = vn()),
    new Promise((r, i) => {
      if (n === 'fa') {
        const s = Av(e) || {};
        (e = s.iconName || e), (t = s.prefix || t);
      }
      if (e && t && ll[t] && ll[t][e]) {
        const s = ll[t][e];
        return r(Iu(s));
      }
      Q4(e, t),
        r({
          ...X4,
          icon: j.showMissingIcons && e ? yn('missingIconAbstract') || {} : {},
        });
    })
  );
}
const Ap = () => {},
  zu =
    j.measurePerformance && zs && zs.mark && zs.measure ? zs : { mark: Ap, measure: Ap },
  pi = 'FA "6.6.0"',
  q4 = (e) => (zu.mark(''.concat(pi, ' ').concat(e, ' begins')), () => jv(e)),
  jv = (e) => {
    zu.mark(''.concat(pi, ' ').concat(e, ' ends')),
      zu.measure(
        ''.concat(pi, ' ').concat(e),
        ''.concat(pi, ' ').concat(e, ' begins'),
        ''.concat(pi, ' ').concat(e, ' ends')
      );
  };
var Ff = { begin: q4, end: jv };
const eo = () => {};
function Np(e) {
  return typeof (e.getAttribute ? e.getAttribute(Qn) : null) == 'string';
}
function Z4(e) {
  const t = e.getAttribute ? e.getAttribute(Mf) : null,
    n = e.getAttribute ? e.getAttribute(_f) : null;
  return t && n;
}
function J4(e) {
  return (
    e && e.classList && e.classList.contains && e.classList.contains(j.replacementClass)
  );
}
function e5() {
  return j.autoReplaceSvg === !0 ? to.replace : to[j.autoReplaceSvg] || to.replace;
}
function t5(e) {
  return Q.createElementNS('http://www.w3.org/2000/svg', e);
}
function n5(e) {
  return Q.createElement(e);
}
function Mv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: n = e.tag === 'svg' ? t5 : n5 } = t;
  if (typeof e == 'string') return Q.createTextNode(e);
  const r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (s) {
      r.setAttribute(s, e.attributes[s]);
    }),
    (e.children || []).forEach(function (s) {
      r.appendChild(Mv(s, { ceFn: n }));
    }),
    r
  );
}
function r5(e) {
  let t = ' '.concat(e.outerHTML, ' ');
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t;
}
const to = {
  replace: function (e) {
    const t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach((n) => {
          t.parentNode.insertBefore(Mv(n), t);
        }),
        t.getAttribute(Qn) === null && j.keepOriginalSource)
      ) {
        let n = Q.createComment(r5(t));
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    const t = e[0],
      n = e[1];
    if (~Rf(t).indexOf(j.replacementClass)) return to.replace(e);
    const r = new RegExp(''.concat(j.cssPrefix, '-.*'));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      const s = n[0].attributes.class
        .split(' ')
        .reduce(
          (o, a) => (
            a === j.replacementClass || a.match(r) ? o.toSvg.push(a) : o.toNode.push(a), o
          ),
          { toNode: [], toSvg: [] }
        );
      (n[0].attributes.class = s.toSvg.join(' ')),
        s.toNode.length === 0
          ? t.removeAttribute('class')
          : t.setAttribute('class', s.toNode.join(' '));
    }
    const i = n.map((s) => cs(s)).join(`
`);
    t.setAttribute(Qn, ''), (t.innerHTML = i);
  },
};
function jp(e) {
  e();
}
function _v(e, t) {
  const n = typeof t == 'function' ? t : eo;
  if (e.length === 0) n();
  else {
    let r = jp;
    j.mutateApproach === c4 && (r = gn.requestAnimationFrame || jp),
      r(() => {
        const i = e5(),
          s = Ff.begin('mutate');
        e.map(i), s(), n();
      });
  }
}
let Vf = !1;
function Rv() {
  Vf = !0;
}
function Fu() {
  Vf = !1;
}
let Io = null;
function Mp(e) {
  if (!xp || !j.observeMutations) return;
  const {
    treeCallback: t = eo,
    nodeCallback: n = eo,
    pseudoElementsCallback: r = eo,
    observeMutationsRoot: i = Q,
  } = e;
  (Io = new xp((s) => {
    if (Vf) return;
    const o = vn();
    Yr(s).forEach((a) => {
      if (
        (a.type === 'childList' &&
          a.addedNodes.length > 0 &&
          !Np(a.addedNodes[0]) &&
          (j.searchPseudoElements && r(a.target), t(a.target)),
        a.type === 'attributes' &&
          a.target.parentNode &&
          j.searchPseudoElements &&
          r(a.target.parentNode),
        a.type === 'attributes' && Np(a.target) && ~g4.indexOf(a.attributeName))
      )
        if (a.attributeName === 'class' && Z4(a.target)) {
          const { prefix: l, iconName: u } = ga(Rf(a.target));
          a.target.setAttribute(Mf, l || o), u && a.target.setAttribute(_f, u);
        } else J4(a.target) && n(a.target);
    });
  })),
    Bt &&
      Io.observe(i, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
}
function i5() {
  Io && Io.disconnect();
}
function s5(e) {
  const t = e.getAttribute('style');
  let n = [];
  return (
    t &&
      (n = t.split(';').reduce((r, i) => {
        const s = i.split(':'),
          o = s[0],
          a = s.slice(1);
        return o && a.length > 0 && (r[o] = a.join(':').trim()), r;
      }, {})),
    n
  );
}
function o5(e) {
  const t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '';
  let i = ga(Rf(e));
  return (
    i.prefix || (i.prefix = vn()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName = I4(i.prefix, e.innerText) || If(i.prefix, _u(e.innerText))),
      !i.iconName &&
        j.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function a5(e) {
  const t = Yr(e.attributes).reduce(
      (i, s) => (i.name !== 'class' && i.name !== 'style' && (i[s.name] = s.value), i),
      {}
    ),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    j.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(j.replacementClass, '-title-')
            .concat(r || Zi()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function l5() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ht,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function _p(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 };
  const { iconName: n, prefix: r, rest: i } = o5(e),
    s = a5(e),
    o = Lu('parseNodeAttributes', {}, e);
  let a = t.styleParser ? s5(e) : [];
  return {
    iconName: n,
    title: e.getAttribute('title'),
    titleId: e.getAttribute('data-fa-title-id'),
    prefix: r,
    transform: ht,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: i, styles: a, attributes: s },
    ...o,
  };
}
const { styles: u5 } = pt;
function Lv(e) {
  const t = j.autoReplaceSvg === 'nest' ? _p(e, { styleParser: !1 }) : _p(e);
  return ~t.extra.classes.indexOf(gv)
    ? yn('generateLayersText', e, t)
    : yn('generateSvgReplacementMutation', e, t);
}
let xt = new Set();
pv.map((e) => {
  xt.add('fa-'.concat(e));
});
Object.keys(Un[Z]).map(xt.add.bind(xt));
Object.keys(Un[Fe]).map(xt.add.bind(xt));
Object.keys(Un[Ve]).map(xt.add.bind(xt));
xt = [...xt];
function Rp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Bt) return Promise.resolve();
  const n = Q.documentElement.classList,
    r = (c) => n.add(''.concat(bp, '-').concat(c)),
    i = (c) => n.remove(''.concat(bp, '-').concat(c)),
    s = j.autoFetchSvg ? xt : pv.map((c) => 'fa-'.concat(c)).concat(Object.keys(u5));
  s.includes('fa') || s.push('fa');
  const o = ['.'.concat(gv, ':not([').concat(Qn, '])')]
    .concat(s.map((c) => '.'.concat(c, ':not([').concat(Qn, '])')))
    .join(', ');
  if (o.length === 0) return Promise.resolve();
  let a = [];
  try {
    a = Yr(e.querySelectorAll(o));
  } catch {}
  if (a.length > 0) r('pending'), i('complete');
  else return Promise.resolve();
  const l = Ff.begin('onTree'),
    u = a.reduce((c, f) => {
      try {
        const d = Lv(f);
        d && c.push(d);
      } catch (d) {
        hv || (d.name === 'MissingIcon' && console.error(d));
      }
      return c;
    }, []);
  return new Promise((c, f) => {
    Promise.all(u)
      .then((d) => {
        _v(d, () => {
          r('active'),
            r('complete'),
            i('pending'),
            typeof t == 'function' && t(),
            l(),
            c();
        });
      })
      .catch((d) => {
        l(), f(d);
      });
  });
}
function c5(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Lv(e).then((n) => {
    n && _v([n], t);
  });
}
function f5(e) {
  return function (t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Du(t || {});
    let { mask: i } = n;
    return i && (i = (i || {}).icon ? i : Du(i || {})), e(r, { ...n, mask: i });
  };
}
const d5 = function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = ht,
    symbol: r = !1,
    mask: i = null,
    maskId: s = null,
    title: o = null,
    titleId: a = null,
    classes: l = [],
    attributes: u = {},
    styles: c = {},
  } = t;
  if (!e) return;
  const { prefix: f, iconName: d, icon: v } = e;
  return va(
    { type: 'icon', ...e },
    () => (
      qn('beforeDOMElementCreation', { iconDefinition: e, params: t }),
      j.autoA11y &&
        (o
          ? (u['aria-labelledby'] = ''
              .concat(j.replacementClass, '-title-')
              .concat(a || Zi()))
          : ((u['aria-hidden'] = 'true'), (u.focusable = 'false'))),
      zf({
        icons: {
          main: Iu(v),
          mask: i ? Iu(i.icon) : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: f,
        iconName: d,
        transform: { ...ht, ...n },
        symbol: r,
        title: o,
        maskId: s,
        titleId: a,
        extra: { attributes: u, styles: c, classes: l },
      })
    )
  );
};
var h5 = {
    mixout() {
      return { icon: f5(d5) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.treeCallback = Rp), (e.nodeCallback = c5), e;
        },
      };
    },
    provides(e) {
      (e.i2svg = function (t) {
        const { node: n = Q, callback: r = () => {} } = t;
        return Rp(n, r);
      }),
        (e.generateSvgReplacementMutation = function (t, n) {
          const {
            iconName: r,
            title: i,
            titleId: s,
            prefix: o,
            transform: a,
            symbol: l,
            mask: u,
            maskId: c,
            extra: f,
          } = n;
          return new Promise((d, v) => {
            Promise.all([
              Ou(r, o),
              u.iconName
                ? Ou(u.iconName, u.prefix)
                : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then((y) => {
                let [x, w] = y;
                d([
                  t,
                  zf({
                    icons: { main: x, mask: w },
                    prefix: o,
                    iconName: r,
                    transform: a,
                    symbol: l,
                    maskId: c,
                    title: i,
                    titleId: s,
                    extra: f,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(v);
          });
        }),
        (e.generateAbstractIcon = function (t) {
          let { children: n, attributes: r, main: i, transform: s, styles: o } = t;
          const a = pa(o);
          a.length > 0 && (r.style = a);
          let l;
          return (
            Lf(s) &&
              (l = yn('generateAbstractTransformGrouping', {
                main: i,
                transform: s,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            n.push(l || i.icon),
            { children: n, attributes: r }
          );
        });
    },
  },
  p5 = {
    mixout() {
      return {
        layer(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: n = [] } = t;
          return va({ type: 'layer' }, () => {
            qn('beforeDOMElementCreation', { assembler: e, params: t });
            let r = [];
            return (
              e((i) => {
                Array.isArray(i)
                  ? i.map((s) => {
                      r = r.concat(s.abstract);
                    })
                  : (r = r.concat(i.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(j.cssPrefix, '-layers'), ...n].join(' '),
                  },
                  children: r,
                },
              ]
            );
          });
        },
      };
    },
  },
  m5 = {
    mixout() {
      return {
        counter(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: n = null,
            classes: r = [],
            attributes: i = {},
            styles: s = {},
          } = t;
          return va(
            { type: 'counter', content: e },
            () => (
              qn('beforeDOMElementCreation', { content: e, params: t }),
              Y4({
                content: e.toString(),
                title: n,
                extra: {
                  attributes: i,
                  styles: s,
                  classes: [''.concat(j.cssPrefix, '-layers-counter'), ...r],
                },
              })
            )
          );
        },
      };
    },
  },
  g5 = {
    mixout() {
      return {
        text(e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: n = ht,
            title: r = null,
            classes: i = [],
            attributes: s = {},
            styles: o = {},
          } = t;
          return va(
            { type: 'text', content: e },
            () => (
              qn('beforeDOMElementCreation', { content: e, params: t }),
              Tp({
                content: e,
                transform: { ...ht, ...n },
                title: r,
                extra: {
                  attributes: s,
                  styles: o,
                  classes: [''.concat(j.cssPrefix, '-layers-text'), ...i],
                },
              })
            )
          );
        },
      };
    },
    provides(e) {
      e.generateLayersText = function (t, n) {
        const { title: r, transform: i, extra: s } = n;
        let o = null,
          a = null;
        if (av) {
          const l = parseInt(getComputedStyle(t).fontSize, 10),
            u = t.getBoundingClientRect();
          (o = u.width / l), (a = u.height / l);
        }
        return (
          j.autoA11y && !r && (s.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            t,
            Tp({
              content: t.innerHTML,
              width: o,
              height: a,
              transform: i,
              title: r,
              extra: s,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const v5 = new RegExp('"', 'ug'),
  Lp = [1105920, 1112319],
  Dp = { FontAwesome: { normal: 'fas', 400: 'fas' }, ...ZC, ...qC, ...o4 },
  Vu = Object.keys(Dp).reduce((e, t) => ((e[t.toLowerCase()] = Dp[t]), e), {}),
  y5 = Object.keys(Vu).reduce((e, t) => {
    const n = Vu[t];
    return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
  }, {});
function x5(e) {
  const t = e.replace(v5, ''),
    n = j4(t, 0),
    r = n >= Lp[0] && n <= Lp[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: _u(i ? t[0] : t), isSecondary: r || i };
}
function w5(e, t) {
  const n = e.replace(/^['"]|['"]$/g, '').toLowerCase(),
    r = parseInt(t),
    i = isNaN(r) ? 'normal' : r;
  return (Vu[n] || {})[i] || y5[n];
}
function Ip(e, t) {
  const n = ''.concat(u4).concat(t.replace(':', '-'));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null) return r();
    const o = Yr(e.children).filter((d) => d.getAttribute(Au) === t)[0],
      a = gn.getComputedStyle(e, t),
      l = a.getPropertyValue('font-family'),
      u = l.match(p4),
      c = a.getPropertyValue('font-weight'),
      f = a.getPropertyValue('content');
    if (o && !u) return e.removeChild(o), r();
    if (u && f !== 'none' && f !== '') {
      const d = a.getPropertyValue('content');
      let v = w5(l, c);
      const { value: y, isSecondary: x } = x5(d),
        w = u[0].startsWith('FontAwesome');
      let m = If(v, y),
        h = m;
      if (w) {
        const g = O4(y);
        g.iconName && g.prefix && ((m = g.iconName), (v = g.prefix));
      }
      if (m && !x && (!o || o.getAttribute(Mf) !== v || o.getAttribute(_f) !== h)) {
        e.setAttribute(n, h), o && e.removeChild(o);
        const g = l5(),
          { extra: S } = g;
        (S.attributes[Au] = t),
          Ou(m, v)
            .then((C) => {
              const P = zf({
                  ...g,
                  icons: { main: C, mask: Of() },
                  prefix: v,
                  iconName: h,
                  extra: S,
                  watchable: !0,
                }),
                A = Q.createElementNS('http://www.w3.org/2000/svg', 'svg');
              t === '::before' ? e.insertBefore(A, e.firstChild) : e.appendChild(A),
                (A.outerHTML = P.map((E) => cs(E)).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function S5(e) {
  return Promise.all([Ip(e, '::before'), Ip(e, '::after')]);
}
function b5(e) {
  return (
    e.parentNode !== document.head &&
    !~f4.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Au) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  );
}
function Op(e) {
  if (Bt)
    return new Promise((t, n) => {
      const r = Yr(e.querySelectorAll('*')).filter(b5).map(S5),
        i = Ff.begin('searchPseudoElements');
      Rv(),
        Promise.all(r)
          .then(() => {
            i(), Fu(), t();
          })
          .catch(() => {
            i(), Fu(), n();
          });
    });
}
var C5 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return (e.pseudoElementsCallback = Op), e;
      },
    };
  },
  provides(e) {
    e.pseudoElements2svg = function (t) {
      const { node: n = Q } = t;
      j.searchPseudoElements && Op(n);
    };
  },
};
let zp = !1;
var k5 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Rv(), (zp = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        Mp(Lu('mutationObserverCallbacks', {}));
      },
      noAuto() {
        i5();
      },
      watch(e) {
        const { observeMutationsRoot: t } = e;
        zp ? Fu() : Mp(Lu('mutationObserverCallbacks', { observeMutationsRoot: t }));
      },
    };
  },
};
const Fp = (e) => {
  let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return e
    .toLowerCase()
    .split(' ')
    .reduce((n, r) => {
      const i = r.toLowerCase().split('-'),
        s = i[0];
      let o = i.slice(1).join('-');
      if (s && o === 'h') return (n.flipX = !0), n;
      if (s && o === 'v') return (n.flipY = !0), n;
      if (((o = parseFloat(o)), isNaN(o))) return n;
      switch (s) {
        case 'grow':
          n.size = n.size + o;
          break;
        case 'shrink':
          n.size = n.size - o;
          break;
        case 'left':
          n.x = n.x - o;
          break;
        case 'right':
          n.x = n.x + o;
          break;
        case 'up':
          n.y = n.y - o;
          break;
        case 'down':
          n.y = n.y + o;
          break;
        case 'rotate':
          n.rotate = n.rotate + o;
          break;
      }
      return n;
    }, t);
};
var E5 = {
  mixout() {
    return { parse: { transform: (e) => Fp(e) } };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute('data-fa-transform');
        return n && (e.transform = Fp(n)), e;
      },
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function (t) {
      let { main: n, transform: r, containerWidth: i, iconWidth: s } = t;
      const o = { transform: 'translate('.concat(i / 2, ' 256)') },
        a = 'translate('.concat(r.x * 32, ', ').concat(r.y * 32, ') '),
        l = 'scale('
          .concat((r.size / 16) * (r.flipX ? -1 : 1), ', ')
          .concat((r.size / 16) * (r.flipY ? -1 : 1), ') '),
        u = 'rotate('.concat(r.rotate, ' 0 0)'),
        c = { transform: ''.concat(a, ' ').concat(l, ' ').concat(u) },
        f = { transform: 'translate('.concat((s / 2) * -1, ' -256)') },
        d = { outer: o, inner: c, path: f };
      return {
        tag: 'g',
        attributes: { ...d.outer },
        children: [
          {
            tag: 'g',
            attributes: { ...d.inner },
            children: [
              {
                tag: n.icon.tag,
                children: n.icon.children,
                attributes: { ...n.icon.attributes, ...d.path },
              },
            ],
          },
        ],
      };
    };
  },
};
const ul = { x: 0, y: 0, width: '100%', height: '100%' };
function Vp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e;
}
function P5(e) {
  return e.tag === 'g' ? e.children : [e];
}
var T5 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute('data-fa-mask'),
            r = n ? ga(n.split(' ').map((i) => i.trim())) : Of();
          return (
            r.prefix || (r.prefix = vn()),
            (e.mask = r),
            (e.maskId = t.getAttribute('data-fa-mask-id')),
            e
          );
        },
      };
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let { children: n, attributes: r, main: i, mask: s, maskId: o, transform: a } = t;
        const { width: l, icon: u } = i,
          { width: c, icon: f } = s,
          d = k4({ transform: a, containerWidth: c, iconWidth: l }),
          v = { tag: 'rect', attributes: { ...ul, fill: 'white' } },
          y = u.children ? { children: u.children.map(Vp) } : {},
          x = {
            tag: 'g',
            attributes: { ...d.inner },
            children: [
              Vp({ tag: u.tag, attributes: { ...u.attributes, ...d.path }, ...y }),
            ],
          },
          w = { tag: 'g', attributes: { ...d.outer }, children: [x] },
          m = 'mask-'.concat(o || Zi()),
          h = 'clip-'.concat(o || Zi()),
          g = {
            tag: 'mask',
            attributes: {
              ...ul,
              id: m,
              maskUnits: 'userSpaceOnUse',
              maskContentUnits: 'userSpaceOnUse',
            },
            children: [v, w],
          },
          S = {
            tag: 'defs',
            children: [{ tag: 'clipPath', attributes: { id: h }, children: P5(f) }, g],
          };
        return (
          n.push(S, {
            tag: 'rect',
            attributes: {
              fill: 'currentColor',
              'clip-path': 'url(#'.concat(h, ')'),
              mask: 'url(#'.concat(m, ')'),
              ...ul,
            },
          }),
          { children: n, attributes: r }
        );
      };
    },
  },
  A5 = {
    provides(e) {
      let t = !1;
      gn.matchMedia && (t = gn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (e.missingIconAbstract = function () {
          const n = [],
            r = { fill: 'currentColor' },
            i = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          n.push({
            tag: 'path',
            attributes: {
              ...r,
              d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
            },
          });
          const s = { ...i, attributeName: 'opacity' },
            o = {
              tag: 'circle',
              attributes: { ...r, cx: '256', cy: '364', r: '28' },
              children: [],
            };
          return (
            t ||
              o.children.push(
                {
                  tag: 'animate',
                  attributes: { ...i, attributeName: 'r', values: '28;14;28;28;14;28;' },
                },
                { tag: 'animate', attributes: { ...s, values: '1;0;1;1;0;1;' } }
              ),
            n.push(o),
            n.push({
              tag: 'path',
              attributes: {
                ...r,
                opacity: '1',
                d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
              },
              children: t
                ? []
                : [{ tag: 'animate', attributes: { ...s, values: '1;0;0;0;0;1;' } }],
            }),
            t ||
              n.push({
                tag: 'path',
                attributes: {
                  ...r,
                  opacity: '0',
                  d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                },
                children: [
                  { tag: 'animate', attributes: { ...s, values: '0;0;1;1;0;0;' } },
                ],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: n }
          );
        });
    },
  },
  N5 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute('data-fa-symbol'),
            r = n === null ? !1 : n === '' ? !0 : n;
          return (e.symbol = r), e;
        },
      };
    },
  },
  j5 = [T4, h5, p5, m5, g5, C5, k5, E5, T5, A5, N5];
B4(j5, { mixoutsTo: He });
He.noAuto;
He.config;
He.library;
He.dom;
const Bu = He.parse;
He.findIconDefinition;
He.toHtml;
const M5 = He.icon;
He.layer;
He.text;
He.counter;
var Dv = { exports: {} },
  _5 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  R5 = _5,
  L5 = R5;
function Iv() {}
function Ov() {}
Ov.resetWarningCache = Iv;
var D5 = function () {
  function e(r, i, s, o, a, l) {
    if (l !== L5) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ov,
    resetWarningCache: Iv,
  };
  return (n.PropTypes = n), n;
};
Dv.exports = D5();
var I5 = Dv.exports;
const O = cm(I5);
function Bp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bp(Object(n), !0).forEach(function (r) {
          br(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Bp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Oo(e) {
  '@babel/helpers - typeof';
  return (
    (Oo =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Oo(e)
  );
}
function br(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function O5(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function z5(e, t) {
  if (e == null) return {};
  var n = O5(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Uu(e) {
  return F5(e) || V5(e) || B5(e) || U5();
}
function F5(e) {
  if (Array.isArray(e)) return $u(e);
}
function V5(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function B5(e, t) {
  if (e) {
    if (typeof e == 'string') return $u(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $u(e, t);
  }
}
function $u(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function U5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $5(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    s = e.bounce,
    o = e.shake,
    a = e.flash,
    l = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    d = e.fixedWidth,
    v = e.inverse,
    y = e.border,
    x = e.listItem,
    w = e.flip,
    m = e.size,
    h = e.rotation,
    g = e.pull,
    S =
      ((t = {
        'fa-beat': n,
        'fa-fade': r,
        'fa-beat-fade': i,
        'fa-bounce': s,
        'fa-shake': o,
        'fa-flash': a,
        'fa-spin': l,
        'fa-spin-reverse': c,
        'fa-spin-pulse': u,
        'fa-pulse': f,
        'fa-fw': d,
        'fa-inverse': v,
        'fa-border': y,
        'fa-li': x,
        'fa-flip': w === !0,
        'fa-flip-horizontal': w === 'horizontal' || w === 'both',
        'fa-flip-vertical': w === 'vertical' || w === 'both',
      }),
      br(t, 'fa-'.concat(m), typeof m < 'u' && m !== null),
      br(t, 'fa-rotate-'.concat(h), typeof h < 'u' && h !== null && h !== 0),
      br(t, 'fa-pull-'.concat(g), typeof g < 'u' && g !== null),
      br(t, 'fa-swap-opacity', e.swapOpacity),
      t);
  return Object.keys(S)
    .map(function (C) {
      return S[C] ? C : null;
    })
    .filter(function (C) {
      return C;
    });
}
function W5(e) {
  return (e = e - 0), e === e;
}
function zv(e) {
  return W5(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var H5 = ['style'];
function G5(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function K5(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        i = zv(n.slice(0, r)),
        s = n.slice(r + 1).trim();
      return i.startsWith('webkit') ? (t[G5(i)] = s) : (t[i] = s), t;
    }, {});
}
function Fv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == 'string') return t;
  var r = (t.children || []).map(function (l) {
      return Fv(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case 'class':
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case 'style':
            l.attrs.style = K5(c);
            break;
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[zv(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    s = n.style,
    o = s === void 0 ? {} : s,
    a = z5(n, H5);
  return (
    (i.attrs.style = ft(ft({}, i.attrs.style), o)),
    e.apply(void 0, [t.tag, ft(ft({}, i.attrs), a)].concat(Uu(r)))
  );
}
var Vv = !1;
try {
  Vv = !0;
} catch {}
function Y5() {
  if (!Vv && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Up(e) {
  if (e && Oo(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
  if (Bu.icon) return Bu.icon(e);
  if (e === null) return null;
  if (e && Oo(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function cl(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? br({}, e, t)
    : {};
}
var $p = {
    border: !1,
    className: '',
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: '',
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  wt = $o.forwardRef(function (e, t) {
    var n = ft(ft({}, $p), e),
      r = n.icon,
      i = n.mask,
      s = n.symbol,
      o = n.className,
      a = n.title,
      l = n.titleId,
      u = n.maskId,
      c = Up(r),
      f = cl('classes', [].concat(Uu($5(n)), Uu((o || '').split(' ')))),
      d = cl(
        'transform',
        typeof n.transform == 'string' ? Bu.transform(n.transform) : n.transform
      ),
      v = cl('mask', Up(i)),
      y = M5(
        c,
        ft(ft(ft(ft({}, f), d), v), {}, { symbol: s, title: a, titleId: l, maskId: u })
      );
    if (!y) return Y5('Could not find icon', c), null;
    var x = y.abstract,
      w = { ref: t };
    return (
      Object.keys(n).forEach(function (m) {
        $p.hasOwnProperty(m) || (w[m] = n[m]);
      }),
      X5(x[0], w)
    );
  });
wt.displayName = 'FontAwesomeIcon';
wt.propTypes = {
  beat: O.bool,
  border: O.bool,
  beatFade: O.bool,
  bounce: O.bool,
  className: O.string,
  fade: O.bool,
  flash: O.bool,
  mask: O.oneOfType([O.object, O.array, O.string]),
  maskId: O.string,
  fixedWidth: O.bool,
  inverse: O.bool,
  flip: O.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: O.oneOfType([O.object, O.array, O.string]),
  listItem: O.bool,
  pull: O.oneOf(['right', 'left']),
  pulse: O.bool,
  rotation: O.oneOf([0, 90, 180, 270]),
  shake: O.bool,
  size: O.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  spin: O.bool,
  spinPulse: O.bool,
  spinReverse: O.bool,
  symbol: O.oneOfType([O.bool, O.string]),
  title: O.string,
  titleId: O.string,
  transform: O.oneOfType([O.string, O.object]),
  swapOpacity: O.bool,
};
var X5 = Fv.bind(null, $o.createElement);
const Q5 = {
    prefix: 'fas',
    iconName: 'people-carry-box',
    icon: [
      640,
      512,
      ['people-carry'],
      'f4ce',
      'M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm64 193.7l0 65.1 51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.3-85.9L66.8 320C54.8 308 48 291.7 48 274.7l0-88.1c0-32.4 26.2-58.6 58.6-58.6c24.1 0 46.5 12 59.9 32l47.4 71.1 10.1 5 0-76.2c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 76.2 10.1-5L473.5 160c13.3-20 35.8-32 59.9-32c32.4 0 58.6 26.2 58.6 58.6l0 88.1c0 17-6.7 33.3-18.7 45.3l-79.4 79.4-14.3 85.9c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l15.2-90.9c1.6-9.9 6.3-19 13.4-26.1l51-51 0-65.1-19 28.5c-4.6 7-11 12.6-18.5 16.3l-59.6 29.8c-2.4 1.3-4.9 2.2-7.6 2.8c-2.6 .6-5.3 .9-7.9 .8l-126.7 0c-2.5 .1-5-.2-7.5-.7c-2.9-.6-5.6-1.6-8.1-3l-59.5-29.8c-7.5-3.7-13.8-9.4-18.5-16.3l-19-28.5zM2.3 468.1L50.1 348.6l49.2 49.2-37.6 94c-6.6 16.4-25.2 24.4-41.6 17.8S-4.3 484.5 2.3 468.1zM512 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm77.9 348.6l47.8 119.5c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-37.6-94 49.2-49.2z',
    ],
  },
  q5 = Q5,
  Z5 = {
    prefix: 'fas',
    iconName: 'handshake',
    icon: [
      640,
      512,
      [],
      'f2b5',
      'M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z',
    ],
  },
  J5 = {
    prefix: 'fas',
    iconName: 'circle-check',
    icon: [
      512,
      512,
      [61533, 'check-circle'],
      'f058',
      'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z',
    ],
  },
  ek = J5,
  tk = {
    prefix: 'fas',
    iconName: 'compass-drafting',
    icon: [
      512,
      512,
      ['drafting-compass'],
      'f568',
      'M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192c0 0 0 0 0 0s0 0 0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496l0-55.4c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1l0 55.4c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z',
    ],
  },
  nk = tk,
  rk = {
    prefix: 'fas',
    iconName: 'code',
    icon: [
      640,
      512,
      [],
      'f121',
      'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z',
    ],
  },
  ik = {
    prefix: 'fas',
    iconName: 'arrow-right',
    icon: [
      448,
      512,
      [8594],
      'f061',
      'M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z',
    ],
  },
  sk = {
    prefix: 'fas',
    iconName: 'arrow-left',
    icon: [
      448,
      512,
      [8592],
      'f060',
      'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    ],
  },
  ok = {
    prefix: 'fas',
    iconName: 'list-check',
    icon: [
      512,
      512,
      ['tasks'],
      'f0ae',
      'M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z',
    ],
  },
  ak = ok,
  lk = {
    prefix: 'fas',
    iconName: 'user-large',
    icon: [
      512,
      512,
      ['user-alt'],
      'f406',
      'M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7l450.6 0c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320l-189.4 0z',
    ],
  },
  Wp = lk;
function uk() {
  return p.jsx('section', {
    className: 'bg-white',
    children: p.jsxs('div', {
      className: 'container h-full py-[100px]',
      children: [
        p.jsxs('h1', {
          className: 'text-4xl text-center font-bold mb-[100px] text-neutral-900',
          children: [
            'O que faz ',
            p.jsx('span', { className: 'text-primary', children: 'Booreal' }),
            ' especial',
          ],
        }),
        p.jsx(BC, {
          className: 'mx-auto md:auto-rows-[20rem]',
          children: mk.map((e, t) =>
            p.jsx(
              UC,
              {
                title: e.title,
                description: e.description,
                header: e.header,
                className: Oe('[&>p:text-lg]', e.className),
                icon: e.icon,
              },
              t
            )
          ),
        }),
      ],
    }),
  });
}
const ck = () => {
    const [e, t] = b.useState({ x: 0, y: 0 }),
      n = (r) => {
        const i = r.currentTarget.getBoundingClientRect(),
          s = r.clientX - i.left - i.width / 2,
          o = r.clientY - i.top - i.height / 2;
        t({ x: s * 0.1, y: o * 0.1 });
      };
    return p.jsxs('div', {
      className:
        'flex space-x-4 justify-center items-center w-full h-64 bg-dot-thick-black/20',
      onMouseMove: n,
      children: [
        p.jsx('div', {
          className:
            'relative w-16 h-16 bg-white rounded-full flex justify-center items-center border-2 border-gray-600',
          children: p.jsx(U.div, {
            className: 'w-6 h-6 bg-black rounded-full',
            style: { x: e.x, y: e.y },
          }),
        }),
        p.jsx('div', {
          className:
            'relative w-16 h-16 bg-white rounded-full flex justify-center items-center border-2 border-gray-600',
          children: p.jsx(U.div, {
            className: 'w-6 h-6 bg-black rounded-full',
            style: { x: e.x, y: e.y },
          }),
        }),
      ],
    });
  },
  fk = () => {
    const e = {
        initial: { width: 0 },
        animate: { width: '100%', transition: { duration: 0.2 } },
        hover: { width: ['0%', '100%'], transition: { duration: 2 } },
      },
      t = new Array(6).fill(0);
    return p.jsx(U.div, {
      initial: 'initial',
      animate: 'animate',
      whileHover: 'hover',
      whileTap: 'hover',
      className:
        'flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 flex-col space-y-2',
      children: t.map((n, r) =>
        p.jsx(
          U.div,
          {
            variants: e,
            style: { maxWidth: Math.random() * 60 + 40 + '%' },
            className:
              'flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-black w-full h-4',
          },
          'skelenton-two' + r
        )
      ),
    });
  },
  dk = () => {
    const e = { initial: { y: 0, rotate: 0 }, hover: { y: 0, rotate: -5 } };
    return p.jsx(U.div, {
      className:
        'flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 rounded-lg flex-col space-y-2',
      initial: 'initial',
      animate: 'animate',
      whileTap: 'hover',
      whileHover: 'hover',
      children: p.jsx(U.div, {
        variants: e,
        className: 'm-4 h-full w-auto rounded-lg animated-gradient-shift',
        whileHover: { scale: 1.05, rotate: 5 },
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }),
    });
  },
  hk = () => {
    const e = { initial: { x: 0, rotate: 0 }, hover: { x: 20, rotate: -5 } },
      t = { initial: { x: 0, rotate: 0 }, hover: { x: -20, rotate: 5 } };
    return p.jsxs(U.div, {
      initial: 'initial',
      animate: 'animate',
      whileTap: 'hover',
      whileHover: 'hover',
      className:
        'flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 flex-row space-x-2',
      children: [
        p.jsxs(U.div, {
          variants: e,
          className:
            'h-full w-1/3 rounded-2xl p-4 bg-neutral-100/50 border-angular-dark-red border-2 flex flex-col items-center justify-center',
          children: [
            p.jsx('div', {
              className:
                'relative flex items-center justify-center p-1 rounded-lg bg-angular-gradient max-w-[8rem] max-h-[8rem] w-full h-full',
              children: p.jsx('div', {
                className: 'flex items-center justify-center w-full h-full',
                children: p.jsx($C, {
                  className: 'w-full h-full bg-neutral-100 rounded',
                }),
              }),
            }),
            p.jsx('p', {
              className:
                'border border-angular-red bg-angular-red/20 text-angular-dark-red text-sm rounded-full px-2 py-0.5 mt-4',
              children: 'Angular',
            }),
          ],
        }),
        p.jsxs(U.div, {
          className:
            'h-full relative z-20 w-1/3 rounded-2xl p-4 bg-neutral-100/50 border-react-dark-blue border-2 flex flex-col items-center justify-center',
          children: [
            p.jsx('div', {
              className:
                'relative flex items-center justify-center p-1 rounded-lg bg-gradient-to-r from-react-light-blue via-react-dark-blue to-react-light-blue max-w-[8rem] max-h-[8rem] w-full h-full',
              children: p.jsx('div', {
                className: 'flex items-center justify-center w-full h-full',
                children: p.jsx(WC, {
                  className: 'w-full h-full bg-neutral-100 rounded',
                }),
              }),
            }),
            p.jsx('p', {
              className:
                'border border-react-light-blue bg-react-light-blue/20 text-react-dark-blue text-sm rounded-full px-2 py-0.5 mt-4',
              children: 'React',
            }),
          ],
        }),
        p.jsxs(U.div, {
          variants: t,
          className:
            'h-full w-1/3 rounded-2xl p-4 bg-neutral-100/50 border-tailwind-blue border-2 flex flex-col items-center justify-center',
          children: [
            p.jsx('div', {
              className:
                'relative flex items-center justify-center p-1 rounded-lg bg-gradient-to-r from-tailwind-teal via-tailwind-blue to-tailwind-teal max-w-[8rem] max-h-[8rem] w-full h-full',
              children: p.jsx('div', {
                className: 'flex items-center justify-center w-full h-full',
                children: p.jsx(HC, {
                  className: 'w-full h-full bg-neutral-100 rounded',
                }),
              }),
            }),
            p.jsx('p', {
              className:
                'border border-tailwind-teal bg-tailwind-teal/20 text-tailwind-blue text-sm rounded-full px-2 py-0.5 mt-4',
              children: 'Tailwind',
            }),
          ],
        }),
      ],
    });
  },
  pk = () => {
    const e = {
        initial: { x: 0 },
        animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
      },
      t = {
        initial: { x: 0 },
        animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
      };
    return p.jsxs(U.div, {
      initial: 'initial',
      whileHover: 'animate',
      whileTap: 'animate',
      className:
        'flex flex-1 w-full h-full min-h-[6rem] bg-dot-thick-black/20 flex-col space-y-2',
      children: [
        p.jsxs(U.div, {
          variants: e,
          className:
            'flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black',
          children: [
            p.jsx('div', {
              className:
                'h-10 w-10 rounded-full bg-gradient-to-r from-primary to-gradient-3 flex-shrink-0 grid place-items-center',
              children: p.jsx(wt, { icon: Wp }),
            }),
            p.jsx('p', {
              className: 'text-xs text-neutral-300',
              children:
                'Quero um site mágico que transforme visitantes em clientes fiéis.',
            }),
          ],
        }),
        p.jsxs(U.div, {
          variants: t,
          className:
            'flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-5/6 ml-auto bg-black',
          children: [
            p.jsx('p', {
              className: 'text-xs text-neutral-300 text-right',
              children: 'Vamos tornar esse sonho realidade juntos!',
            }),
            p.jsx('div', {
              className:
                'h-6 w-6 rounded-full bg-gradient-to-r from-gradient-5 to-accent flex-shrink-0',
            }),
          ],
        }),
        p.jsxs(U.div, {
          variants: e,
          className:
            'flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black',
          children: [
            p.jsx('div', {
              className:
                'h-10 w-10 rounded-full bg-gradient-to-r from-primary to-gradient-3 flex-shrink-0 grid place-items-center',
              children: p.jsx(wt, { icon: Wp }),
            }),
            p.jsx('p', {
              className: 'text-xs text-neutral-300',
              children: 'Mal posso esperar para ver minha marca ganhando vida!',
            }),
          ],
        }),
      ],
    });
  },
  mk = [
    {
      title: 'Nossas Competências',
      description: p.jsx('span', {
        className: 'text-sm',
        children: 'Dominando as melhores práticas.',
      }),
      header: p.jsx(hk, {}),
      className: 'md:col-span-2',
      icon: '',
    },
    {
      title: 'Nossa Visão',
      description: p.jsx('span', {
        className: 'text-sm',
        children: 'Ferramentas que transformam.',
      }),
      header: p.jsx(ck, {}),
      className: 'md:col-span-1',
      icon: '',
    },
    {
      title: 'Nossa Filosofia',
      description: p.jsx('span', {
        className: 'text-sm',
        children: 'Co-criar para dominar.',
      }),
      header: p.jsx(fk, {}),
      className: 'md:col-span-1',
      icon: '',
    },
    {
      title: 'O método',
      description: p.jsx('span', {
        className: 'text-sm',
        children: 'Criatividade com propósito.',
      }),
      header: p.jsx(dk, {}),
      className: 'md:col-span-1',
      icon: '',
    },
    {
      title: 'A conversão',
      description: p.jsx('span', {
        className: 'text-sm',
        children: 'Transformando cliques em clientes',
      }),
      header: p.jsx(pk, {}),
      className: 'md:col-span-1',
      icon: '',
    },
  ];
function gk() {
  return p.jsx('section', {
    className: 'sticky -z-10 bottom-0 py-[50px] bg-black',
    children: p.jsx('div', {
      className: 'container overflow-hidden',
      children: p.jsxs('div', {
        className:
          'flex flex-col-reverse gap-4 items-center justify-center md:flex-row md:justify-between',
        children: [
          p.jsx('p', {
            className: 'text-neutral-200',
            children: '© 2024 Booreal. Todos os direitos reservados.',
          }),
          p.jsxs('div', {
            className: 'flex gap-4',
            children: [
              p.jsx('a', {
                href: '#',
                className: 'text-neutral-400 hover:text-primary transition-colors',
                children: 'Instagram',
              }),
              p.jsx('a', {
                href: '#',
                className: 'text-neutral-400 hover:text-primary transition-colors',
                children: 'LinkedIn',
              }),
              p.jsx('a', {
                href: '#',
                className: 'text-neutral-400 hover:text-primary transition-colors',
                children: 'WhatsApp',
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const vk = ({ words: e, className: t, duration: n = 3 }) => {
    const [r, i] = b.useState(0);
    return (
      b.useEffect(() => {
        const s = setInterval(() => {
          i((o) => (o + 1) % e.length);
        }, n * 1e3);
        return () => clearInterval(s);
      }, [e.length]),
      p.jsx('div', {
        className: `relative flex items-center justify-center w-full h-7 lg:h-11 ${t}`,
        children: p.jsx(ha, {
          mode: 'wait',
          children: p.jsx(
            U.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.5 },
              className: 'absolute text-lg text-neutral-700 lg:text-2xl',
              children: e[r],
            },
            r
          ),
        }),
      })
    );
  },
  Wu = ({ children: e, className: t = '', theme: n = 'primary' }) => {
    const r =
        n === 'primary'
          ? 'bg-primary/10 border-primary/20 text-primary'
          : n === 'secondary'
          ? 'bg-gradient-5/10 border-gradient-5/20 text-gradient-5'
          : '',
      i = n === 'primary' ? 'via-primary' : n === 'secondary' ? 'via-gradient-5' : '';
    return p.jsxs(U.button, {
      className: Oe(
        'text-xl px-6 py-3 backdrop-blur-sm border text-center rounded-2xl relative overflow-hidden flex justify-center group/modal-btn',
        t,
        r
      ),
      children: [
        p.jsx('span', {
          className:
            'group-hover/modal-btn:translate-y-10 text-center transition duration-300',
          children: e,
        }),
        p.jsx('div', {
          className:
            '-translate-y-10 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-300 z-20',
          children: e,
        }),
        p.jsx('div', {
          className: Oe(
            'absolute inset-x-0  h-[3px] -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent to-transparent',
            i
          ),
        }),
      ],
    });
  },
  Bv = {
    prefix: 'fab',
    iconName: 'whatsapp',
    icon: [
      448,
      512,
      [],
      'f232',
      'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
    ],
  };
function yk() {
  const e = [
    'Desenvolvimento Web',
    'Landing Pages',
    'Wireframes',
    'Portifolios',
    'Branding',
    'UI/UX',
    'SEO',
  ];
  return p.jsxs('section', {
    className: 'bg-white text-neutral-900 relative',
    children: [
      p.jsxs('div', {
        className: 'absolute inset-0 overflow-hidden',
        children: [
          p.jsx('div', {
            className:
              'absolute top-5 left-5 lg:top-20 lg:left-20 w-52 h-52 lg:w-96 lg:h-96 bg-gradient-1 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob1',
          }),
          p.jsx('div', {
            className:
              'absolute top-5 right-5 lg:top-40 lg:right-40 w-60 h-60 lg:w-96 lg:h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob2',
          }),
          p.jsx('div', {
            className:
              'absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 lg:w-96 lg:h-96 bg-gradient-3 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob3',
          }),
          p.jsx('div', {
            className:
              'absolute bottom-5 left-5 lg:bottom-20 lg:left-10 w-64 h-64 lg:w-96 lg:h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slower',
          }),
          p.jsx('div', {
            className:
              'absolute bottom-5 right-5 lg:bottom-20 lg:left-2/3 w-60 h-60 lg:w-96 lg:h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow',
          }),
        ],
      }),
      p.jsx('div', {
        className: 'container h-dvh relative',
        children: p.jsx('div', {
          className:
            'h-full flex items-center justify-center relative z-10 md:justify-around',
          children: p.jsxs('div', {
            className: 'grid place-items-center text-center',
            children: [
              p.jsxs('div', {
                className: 'relative',
                children: [
                  p.jsx('h2', {
                    className:
                      'text-2xl text-neutral-600 px-1 md:px-2 lg:px-4 lg:text-3xl',
                    children: 'Booreal',
                  }),
                  p.jsx('div', {
                    className:
                      'absolute -bottom-1 left-0 w-full h-1 animated-gradient rounded-full',
                  }),
                ],
              }),
              p.jsxs('h1', {
                className:
                  'text-4xl font-bold leading-tight mt-2 md:text-5xl lg:text-7xl lg:my-4',
                children: [
                  'Transformando ',
                  p.jsx('br', { className: 'hidden md:block' }),
                  p.jsx('b', {
                    className: 'text-primary font-bold',
                    children: 'visitantes',
                  }),
                  ' em',
                  ' ',
                  p.jsx('b', {
                    className: 'text-primary font-bold',
                    children: 'clientes',
                  }),
                ],
              }),
              p.jsx('div', {
                className: 'w-full mb-4 flex text-lg text-neutral-700',
                children: p.jsx(vk, { words: e, className: 'w-full text-3xl' }),
              }),
              p.jsxs('div', {
                className: 'relative group',
                children: [
                  p.jsxs(Wu, {
                    children: [
                      p.jsx(wt, { icon: Bv, className: 'mr-2' }),
                      'Comece seu projeto agora',
                    ],
                  }),
                  p.jsx('p', {
                    className:
                      'text-sm text-neutral-600 absolute -bottom-6 left-1/2 -translate-x-1/2 lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-all duration-300 lg:-translate-y-2 lg:group-hover:translate-y-0 w-full text-center',
                    children: 'Atendimento rápido, em horário flexível',
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function xk() {
  const e = [
      {
        title: 'Reunião de Briefing',
        icon: Z5,
        text: 'A gente não quer só ouvir suas ideias, queremos entender o que te move. Essa conversa inicial é onde descobrimos como fazer sua marca ser inesquecível..',
      },
      {
        title: 'Planejamento do Projeto',
        icon: ak,
        text: 'Com o destino traçado, criamos um plano claro e sem firulas. Escopo? Check. Prazos? Check. O resto é suor e entrega.',
      },
      {
        title: 'Criação do Wireframe',
        icon: nk,
        text: 'A base de tudo é uma estrutura bem feita. Esboçamos o fluxo ideal, sem enrolação, pra mostrar exatamente como sua presença online vai se destacar.',
      },
      {
        title: 'Desenvolvimento',
        icon: rk,
        text: 'Hora de fazer acontecer. Misturamos design arrojado com tecnologia funcional para criar algo que vai muito além do bonito — é inesquecível.',
      },
      {
        title: 'Revisão e Testes',
        icon: ek,
        text: 'Revisamos tudo até cada detalhe estar no ponto. Se algo não impressiona, volta pra bancada. Simples assim.',
      },
      {
        title: 'Entrega e Suporte',
        icon: q5,
        text: 'Lançamos sua ideia para o mundo e ficamos ao seu lado. Porque o sucesso do seu projeto é tão nosso quanto seu.',
      },
    ],
    t = b.useRef(null),
    [n, r] = b.useState(!1),
    i = Af();
  b.useEffect(() => {
    const a = () => {
      if (!t.current) return;
      t.current.getBoundingClientRect().top < window.innerHeight - 100 &&
        (r(!0), i.start('visible'));
    };
    return (
      window.addEventListener('scroll', a), () => window.removeEventListener('scroll', a)
    );
  }, [i]);
  const [s, o] = b.useState(null);
  return p.jsx('section', {
    className: 'bg-white',
    children: p.jsxs('div', {
      className: 'container h-full py-[100px]',
      children: [
        p.jsxs('h1', {
          className: 'text-4xl text-center font-bold mb-[100px] lg:mb-2 text-black',
          children: [
            'Como trabalhamos em ',
            p.jsx('span', { className: 'text-primary', children: '6' }),
            ' passos',
          ],
        }),
        p.jsx('p', {
          className: 'hidden lg:block text-center text-neutral-600 mb-[100px]',
          children: 'Passe o mouse sobre os cards para mais detalhes',
        }),
        p.jsx(U.div, {
          className:
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-full content-end items-end gap-2',
          ref: t,
          initial: 'hidden',
          animate: n ? i : 'hidden',
          variants: Pu,
          transition: { duration: 0.5, type: 'spring', damping: 15, stiffness: 100 },
          children: e.map((a, l) =>
            p.jsxs(
              'div',
              {
                onMouseOver: () => window.innerWidth > 768 && o(l),
                onMouseLeave: () => window.innerWidth > 768 && o(null),
                className: Oe(
                  'flex flex-col justify-start text-black bg-white relative py-8 px-4 min-h-[440px] h-full overflow-hidden transition-all duration-500 rounded-xl',
                  s === l && 'text-white h-[110%]'
                ),
                children: [
                  p.jsx('div', {
                    className:
                      'bg-primary/20 z-[2] w-12 h-12 flex justify-center items-center relative rounded-3xl text-[20px]',
                    children: p.jsx(wt, { icon: a.icon }),
                  }),
                  p.jsx('div', {
                    className: 'relative z-[2] mt-6',
                    children: p.jsx('h3', {
                      className: 'font-semibold text-3xl',
                      children: a.title,
                    }),
                  }),
                  p.jsx('div', {
                    className: Oe(
                      'relative z-[2] overflow-hidden transition-all duration-300 h-full lg:h-0',
                      s === l && 'text-white lg:h-full'
                    ),
                    children: p.jsx('p', {
                      className: 'mt-4 mb-6 text-lg font-normal',
                      children: a.text,
                    }),
                  }),
                  p.jsxs('div', {
                    className:
                      'absolute flex justify-center items-end top-[0%] bottom-[0%] left-[0%] right-[0%] custom-translate-1',
                    children: [
                      p.jsx('div', {
                        className: Oe(
                          'bg-black z-[1] rounded-[150px] absolute -bottom-72 w-[300px] h-[300px] custom-translate-2 transition-all duration-500 delay-100',
                          s === l && 'custom-translate-2--hover'
                        ),
                      }),
                      p.jsx('div', {
                        className: Oe(
                          'bg-accent z-0 rounded-[150px] absolute -bottom-72 w-[300px] h-[300px] custom-translate-2 transition-all duration-500',
                          s === l && 'custom-translate-2--hover',
                          l % 2 == 1 && 'bg-primary'
                        ),
                      }),
                    ],
                  }),
                  p.jsx('div', {
                    className:
                      'border border-neutral-700 absolute inset-0 z-0 rounded-xl',
                  }),
                ],
              },
              l
            )
          ),
        }),
      ],
    }),
  });
}
const wk = ({ words: e, duration: t = 3e3, className: n }) => {
  const [r, i] = b.useState(e[0]),
    [s, o] = b.useState(!1),
    a = b.useCallback(() => {
      const l = e[e.indexOf(r) + 1] || e[0];
      i(l), o(!0);
    }, [r, e]);
  return (
    b.useEffect(() => {
      s ||
        setTimeout(() => {
          a();
        }, t);
    }, [s, t, a]),
    p.jsx(ha, {
      onExitComplete: () => {
        o(!1);
      },
      children: p.jsx(
        U.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { type: 'spring', stiffness: 100, damping: 10 },
          exit: {
            opacity: 0,
            y: -40,
            x: 40,
            filter: 'blur(8px)',
            scale: 2,
            position: 'absolute',
          },
          className: Oe('z-10 inline-block relative text-left px-2', n),
          children: r.split(' ').map((l, u) =>
            p.jsxs(
              U.span,
              {
                initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
                animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
                transition: { delay: u * 0.3, duration: 0.3 },
                className: 'inline-block whitespace-nowrap',
                children: [
                  l.split('').map((c, f) =>
                    p.jsx(
                      U.span,
                      {
                        initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
                        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
                        transition: { delay: u * 0.3 + f * 0.05, duration: 0.2 },
                        className: 'inline-block',
                        children: c,
                      },
                      l + f
                    )
                  ),
                  p.jsx('span', { className: 'inline-block', children: ' ' }),
                ],
              },
              l + u
            )
          ),
        },
        r
      ),
    })
  );
};
function Sk() {
  const e = [
      {
        title: 'Desenvolvimento Web',
        text: p.jsxs(p.Fragment, {
          children: [
            p.jsx('p', {
              className: 'mb-2',
              children:
                'Não adianta ter um site bonito se ele não converte. Aqui, beleza e funcionalidade andam de mãos dadas. Porque o que importa é o resultado — e resultados gritam.',
            }),
            p.jsx('p', { children: 'Veja como vamos elevar sua presença online:' }),
            p.jsxs('div', {
              className: 'mt-4 w-full',
              children: [
                p.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    p.jsx(Tn, {}),
                    p.jsx('p', { className: 'ml-2', children: 'Websites responsivos' }),
                  ],
                }),
                p.jsxs('div', {
                  className: 'flex items-center mt-4',
                  children: [
                    p.jsx(Tn, {}),
                    p.jsx('p', {
                      className: 'ml-2',
                      children: 'Landing Pages que vendem',
                    }),
                  ],
                }),
                p.jsxs('div', {
                  className: 'flex items-center mt-4',
                  children: [
                    p.jsx(Tn, {}),
                    p.jsx('p', {
                      className: 'ml-2',
                      children: 'Portfólios que impressionam',
                    }),
                  ],
                }),
                p.jsxs('div', {
                  className: 'flex items-center mt-4',
                  children: [
                    p.jsx(Tn, {}),
                    p.jsx('p', {
                      className: 'ml-2',
                      children: 'Prototipagem e Wireframes',
                    }),
                  ],
                }),
                p.jsxs('div', {
                  className: 'flex items-center mt-4',
                  children: [
                    p.jsx(Tn, {}),
                    p.jsx('p', { className: 'ml-2', children: 'UI/UX com impacto' }),
                  ],
                }),
              ],
            }),
          ],
        }),
        imgSrc: '/assets/booreal.png',
      },
      {
        title: 'Branding',
        text: p.jsxs(p.Fragment, {
          children: [
            p.jsx('p', {
              children:
                'Se a sua marca não está marcando ninguém, qual o ponto? Construímos identidades que falam alto, que conectam e que deixam sua concorrência no chinelo.',
            }),
            p.jsxs('div', {
              className: 'mt-2',
              children: [
                p.jsx('p', {
                  className: 'font-bold',
                  children: 'Aqui está o que vai fazer sua marca estourar:',
                }),
                p.jsxs('div', {
                  className: 'mt-4 w-full',
                  children: [
                    p.jsxs('div', {
                      className: 'flex items-center',
                      children: [
                        p.jsx(Tn, {}),
                        p.jsx('p', {
                          className: 'ml-2',
                          children:
                            'Logotipos que ninguém esquece: a cara da sua marca com atitude.',
                        }),
                      ],
                    }),
                    p.jsxs('div', {
                      className: 'flex items-center mt-4',
                      children: [
                        p.jsx(Tn, {}),
                        p.jsx('p', {
                          className: 'ml-2',
                          children:
                            'Paleta de cores e tipografia: estética que traduz personalidade.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        imgSrc: '/assets/booreal.png',
      },
    ],
    t = ['você', 'sua empresa'];
  return p.jsx('section', {
    className: 'bg-primary',
    children: p.jsxs('div', {
      className: 'container py-[100px]',
      children: [
        p.jsxs('h1', {
          className: 'text-4xl text-center font-bold mb-[100px]',
          children: [
            'O que podemos fazer para',
            p.jsx('br', {}),
            p.jsx('span', {
              className: 'text-accent hidden md:block',
              children: p.jsx(wk, { words: t, duration: 5e3 }),
            }),
            p.jsx('span', {
              className: 'text-accent md:hidden',
              children: 'você/sua empresa',
            }),
          ],
        }),
        p.jsx('div', {
          className: 'grid gap-2',
          children: e.map((n, r) =>
            p.jsx(bk, { title: n.title, text: n.text, imgSrc: n.imgSrc, sequence: r }, r)
          ),
        }),
      ],
    }),
  });
}
const bk = ({ title: e, text: t, imgSrc: n, sequence: r = 1 }) => {
    const i = r % 2 !== 0,
      s = Af(),
      o = b.useRef(null),
      [a, l] = b.useState(!1);
    return (
      b.useEffect(() => {
        const u = () => {
          if (!o.current) return;
          o.current.getBoundingClientRect().top < window.innerHeight - 100 &&
            (l(!0), s.start('visible'));
        };
        return (
          window.addEventListener('scroll', u),
          () => window.removeEventListener('scroll', u)
        );
      }, [s]),
      p.jsxs(U.div, {
        ref: o,
        initial: 'hidden',
        animate: a ? s : 'hidden',
        variants: rv,
        transition: { duration: 0.5, type: 'spring', damping: 15, stiffness: 100 },
        className: Oe(
          'bg-neutral-100 text-black rounded-xl flex items-center content-center min-h-[500px] flex-col md:flex-row',
          i && 'md:flex-row-reverse'
        ),
        children: [
          p.jsxs(U.div, {
            className: 'md:w-7/12 p-4 md:px-8 md:py-0',
            variants: Pu,
            transition: {
              duration: 0.5,
              delay: a ? 0.1 : 0,
              type: 'spring',
              damping: 12,
              stiffness: 100,
            },
            children: [
              p.jsx('h2', {
                className: 'text-3xl mb-4 font-medium text-neutral-950',
                children: e,
              }),
              p.jsx('div', { className: 'text-neutral-800', children: t }),
            ],
          }),
          p.jsx(U.div, {
            className:
              'w-full md:w-5/12 h-full bg-dot-thick-black/20 grid place-items-center transition-all duration-150 hover:bg-dot-thick-black/30',
            children: p.jsx('div', {
              className: 'p-4 h-full md:w-2/3 md:h-auto md:p-0',
              children: p.jsx(U.img, {
                className: 'object-cover rounded-lg max-w-64 md:max-w-full',
                src: n,
                alt: e,
                variants: Pu,
                transition: {
                  duration: 0.5,
                  delay: a ? 0.1 : 0,
                  type: 'spring',
                  damping: 12,
                  stiffness: 100,
                },
              }),
            }),
          }),
        ],
      })
    );
  },
  Tn = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className:
        'lucide lucide-check h-7 w-7 flex-none rounded-full bg-accent p-1 text-black',
      children: p.jsx('path', { d: 'M20 6 9 17l-5-5' }),
    }),
  Ck = {
    prefix: 'far',
    iconName: 'circle-question',
    icon: [
      512,
      512,
      [62108, 'question-circle'],
      'f059',
      'M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z',
    ],
  },
  kk = Ck;
function Ek() {
  return p.jsx('section', {
    className: 'bg-white text-black rounded-b-3xl',
    children: p.jsxs('div', {
      className: 'container py-[100px]',
      children: [
        p.jsxs('h1', {
          className: 'text-4xl text-center font-bold mb-[50px]',
          children: [
            'Pronto para elevar ',
            p.jsx('span', { className: 'text-primary', children: 'sua marca' }),
            ' a outro nível?',
          ],
        }),
        p.jsx('div', {
          className: 'flex w-full items-center justify-center',
          children: p.jsxs('div', {
            className: 'flex flex-col justify-center text-center gap-2 md:flex-row',
            children: [
              p.jsxs(Wu, {
                className: 'm-0',
                children: [
                  p.jsx(wt, { icon: Bv, className: 'mr-2' }),
                  'Entrar em contato',
                ],
              }),
              p.jsxs(Wu, {
                className: 'm-0',
                theme: 'secondary',
                children: [
                  p.jsx(wt, { icon: kk, className: 'mr-2' }),
                  'Ainda tenho dúvidas',
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const rr = ({ upsideDown: e, className: t }) =>
    p.jsx('div', {
      className: Oe('relative', t),
      children: p.jsx('div', { className: Oe('separator', e && 'rotate-180') }),
    }),
  Pk = ({ testimonials: e, autoplay: t = !1 }) => {
    const [n, r] = b.useState(0),
      i = () => {
        r((l) => (l + 1) % e.length);
      },
      s = () => {
        r((l) => (l - 1 + e.length) % e.length);
      },
      o = (l) => l === n;
    b.useEffect(() => {
      if (t) {
        const l = setInterval(i, 5e3);
        return () => clearInterval(l);
      }
    }, [t]);
    const a = () => Math.floor(Math.random() * 21) - 10;
    return p.jsx('div', {
      className: 'px-6 md:px-0 md:max-w-6xl mx-auto antialiased font-sans',
      children: p.jsxs('div', {
        className: 'relative grid grid-cols-1 md:grid-cols-2 gap-20',
        children: [
          p.jsx('div', {
            children: p.jsx('div', {
              className: 'relative h-80 w-full',
              children: p.jsx(ha, {
                children: e.map((l, u) =>
                  p.jsx(
                    U.div,
                    {
                      initial: { opacity: 0, scale: 0.9, z: -100, rotate: a() },
                      animate: {
                        opacity: o(u) ? 1 : 0.7,
                        scale: o(u) ? 1 : 0.95,
                        z: o(u) ? 0 : -100,
                        rotate: o(u) ? 0 : a(),
                        zIndex: o(u) ? 999 : e.length + 2 - u,
                        y: o(u) ? [0, -80, 0] : 0,
                      },
                      exit: { opacity: 0, scale: 0.9, z: 100, rotate: a() },
                      transition: { duration: 0.4, ease: 'easeInOut' },
                      className: 'absolute inset-0 origin-bottom',
                      children: p.jsx('img', {
                        src: l.src,
                        alt: l.name,
                        width: 500,
                        height: 500,
                        draggable: !1,
                        className: 'h-full w-full rounded-3xl object-cover object-center',
                      }),
                    },
                    l.src
                  )
                ),
              }),
            }),
          }),
          p.jsxs('div', {
            className: 'flex justify-between flex-col py-4',
            children: [
              p.jsxs(
                U.div,
                {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: -20, opacity: 0 },
                  transition: { duration: 0.2, ease: 'easeInOut' },
                  children: [
                    p.jsx('h3', {
                      className: 'text-2xl font-bold text-white',
                      children: e[n].name,
                    }),
                    p.jsx('p', {
                      className: 'text-sm text-neutral-200',
                      children: e[n].designation,
                    }),
                    p.jsx(U.p, {
                      className: 'text-lg mt-8 text-neutral-300',
                      children: e[n].quote.split(' ').map((l, u) =>
                        p.jsxs(
                          U.span,
                          {
                            initial: { filter: 'blur(10px)', opacity: 0, y: 5 },
                            animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
                            transition: {
                              duration: 0.2,
                              ease: 'easeInOut',
                              delay: 0.02 * u,
                            },
                            className: 'inline-block',
                            children: [l, ' '],
                          },
                          u
                        )
                      ),
                    }),
                  ],
                },
                n
              ),
              p.jsxs('div', {
                className: 'flex gap-4 pt-12 md:pt-0',
                children: [
                  p.jsx('button', {
                    onClick: s,
                    className:
                      'h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button',
                    children: p.jsx(wt, {
                      icon: sk,
                      className:
                        'h-5 w-5 text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300',
                    }),
                  }),
                  p.jsx('button', {
                    onClick: i,
                    className:
                      'h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button',
                    children: p.jsx(wt, {
                      icon: ik,
                      className:
                        'h-5 w-5 text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Tk = () => {
    const e = [
      {
        quote:
          'O cuidado com os detalhes e as funcionalidades inovadoras transformaram completamente a forma como apresentamos nossos serviços online. Era exatamente o que precisávamos.',
        name: 'Sheila Karmen Silva',
        designation: 'Gerente de Recursos Humanos na Empresa Xerecas',
        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          'A implementação foi rápida e os resultados superaram nossas expectativas. A flexibilidade do design foi impressionante.',
        name: 'Maicon Douglas',
        designation: 'CEO da Maicon Motos',
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          'O site criado pela Booreal melhorou significativamente a percepção da nossa marca. A interface intuitiva foi um diferencial enorme.',
        name: 'Aisha Vasca',
        designation: 'CEO da Aisha Manicure e Pedicure',
        src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          'Um suporte excepcional e funcionalidades robustas. É raro encontrar uma empresa que entrega tudo o que promete com tanta dedicação.',
        name: 'Nadia Réia',
        designation: 'Diretora de Marketing na WEG Vendas',
        src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          'Meu site ficou tão **** que até eu não consigo parar de olhar pra ele. Sério, Booreal, vocês fazem milagres... e não, Kyle, você não vai conseguir um site igual ao meu, seu ***!',
        name: 'Eric Cartman',
        designation: 'CEO da DikenBaus',
        src: '/assets/EricCartman.png',
      },
    ];
    return p.jsx('section', {
      className: 'bg-primary',
      children: p.jsxs('div', {
        className: 'container py-[100px]',
        children: [
          p.jsxs('h1', {
            className: 'text-4xl text-center font-bold mb-2',
            children: [
              'Projetos Que Fazem a ',
              p.jsx('span', { className: 'text-accent', children: 'Diferença' }),
            ],
          }),
          p.jsxs('h2', {
            className: 'text-lg text-center mb-[100px] text-neutral-200',
            children: [
              'De startups a empresas consolidadas, ajudamos marcas a saírem do comum.',
              p.jsx('br', {}),
              'Confira alguns dos nossos trabalhos mais recentes e inspire-se.',
            ],
          }),
          p.jsx(Pk, { testimonials: e }),
        ],
      }),
    });
  },
  Ak = () => {
    const e = [
      { bg: 'bg-red-500', name: 'Rafael Pereira', title: 'Desenvolvedor Full Stack' },
      { bg: 'bg-blue-500', name: 'Mia Sotel', title: 'Diretora Criativa' },
      { bg: 'bg-green-500', name: 'Millan Buzando Diporra', title: 'Web Designer' },
      { bg: 'bg-yellow-500', name: 'Tetanic', title: 'Web designer' },
    ];
    return p.jsx('div', {
      className: 'bg-primary',
      children: p.jsxs('div', {
        className: 'container py-[100px]',
        children: [
          p.jsxs('h1', {
            className: 'text-4xl text-center font-bold mb-2',
            children: [
              'Quem somos ',
              p.jsx('span', { className: 'text-accent', children: 'nós' }),
              '?',
            ],
          }),
          p.jsx('h2', {
            className: 'text-lg text-center mb-[100px] text-neutral-200',
            children: 'Conheça quem está preparado para moldar o futuro.',
          }),
          p.jsxs('div', {
            children: [
              p.jsx('div', {
                className: 'grid gap-2 sm:hidden',
                children: e.map((t, n) =>
                  p.jsxs(
                    'div',
                    {
                      className: 'transition-all duration-300 ease-in-out',
                      children: [
                        p.jsx('div', { className: `${t.bg} h-[590px] rounded-xl` }),
                        p.jsx('span', {
                          className: 'block text-center font-bold',
                          children: t.name,
                        }),
                        p.jsx('p', { className: 'text-center', children: t.title }),
                      ],
                    },
                    n
                  )
                ),
              }),
              p.jsx('div', {
                className: 'hidden sm:flex gap-2 lg:hidden',
                children: e.slice(0, 2).map((t, n) =>
                  p.jsxs(
                    'div',
                    {
                      className:
                        'flex-1 group transition-all duration-300 ease-in-out hover:flex-[2]',
                      children: [
                        p.jsx('div', { className: `${t.bg} h-[590px] rounded-xl` }),
                        p.jsx('span', {
                          className: 'block text-center font-bold',
                          children: t.name,
                        }),
                        p.jsx('p', { className: 'text-center', children: t.title }),
                      ],
                    },
                    n
                  )
                ),
              }),
              p.jsx('div', {
                className: 'hidden sm:flex gap-2 lg:hidden',
                children: e.slice(2, 4).map((t, n) =>
                  p.jsxs(
                    'div',
                    {
                      className:
                        'flex-1 group transition-all duration-300 ease-in-out hover:flex-[2]',
                      children: [
                        p.jsx('div', { className: `${t.bg} h-[590px] rounded-xl` }),
                        p.jsx('span', {
                          className: 'block text-center font-bold',
                          children: t.name,
                        }),
                        p.jsx('p', { className: 'text-center', children: t.title }),
                      ],
                    },
                    n
                  )
                ),
              }),
              p.jsx('div', {
                className: 'hidden lg:flex gap-2',
                children: e.map((t, n) =>
                  p.jsxs(
                    'div',
                    {
                      className:
                        'flex-1 group transition-all duration-300 ease-in-out hover:flex-[2]',
                      children: [
                        p.jsx('div', { className: `${t.bg} h-[590px] rounded-xl` }),
                        p.jsx('span', {
                          className: 'block text-center font-bold',
                          children: t.name,
                        }),
                        p.jsx('p', { className: 'text-center', children: t.title }),
                      ],
                    },
                    n
                  )
                ),
              }),
            ],
          }),
          p.jsxs('div', {
            className: 'mt-[50px]',
            children: [
              p.jsxs('h3', {
                className: 'text-2xl font-semibold mb-[50px] text-center',
                children: [
                  'No que ',
                  p.jsx('span', { className: 'text-accent', children: 'acreditamos' }),
                ],
              }),
              p.jsxs('div', {
                className: 'grid gap-4 grid-cols-1 md:grid-cols-2',
                children: [
                  p.jsxs('p', {
                    className:
                      'text-lg text-neutral-200 rounded-xl p-4 bg-gradient-1 self-center',
                    children: [
                      'Não acreditamos em complicar demais as coisas, usando as ferramentas e estratégias que fazem mais sentido para seus objetivos. ',
                      p.jsx('br', {}),
                      'Se um código personalizado for necessário, nós o escrevemos. Se algo funciona imediatamente, não o reinventaremos.',
                    ],
                  }),
                  p.jsxs('p', {
                    className: 'text-lg text-neutral-300',
                    children: [
                      'Abordamos cada projeto com as mesmas perguntas:',
                      p.jsxs('div', {
                        className: 'flex flex-col gap-2 my-4',
                        children: [
                          p.jsxs('div', {
                            className: 'flex',
                            children: [
                              p.jsx('div', {
                                className:
                                  'bg-accent p-1 text-sm rounded-full text-black mr-2',
                                children: p.jsx(Nk, {}),
                              }),
                              p.jsx('p', { children: 'O que isso precisa fazer?' }),
                            ],
                          }),
                          p.jsxs('div', {
                            className: 'flex',
                            children: [
                              p.jsx('div', {
                                className:
                                  'bg-accent p-1 text-sm rounded-full text-black mr-2',
                                children: p.jsx(Mk, {}),
                              }),
                              p.jsx('p', { children: 'Quem vai usar?' }),
                            ],
                          }),
                          p.jsxs('div', {
                            className: 'flex',
                            children: [
                              p.jsx('div', {
                                className:
                                  'bg-accent p-1 text-sm rounded-full text-black mr-2 h-fit',
                                children: p.jsx(jk, {}),
                              }),
                              p.jsx('p', {
                                children: 'Como torná-lo o mais simples e eficaz?',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Nk = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: 1.5,
      stroke: 'currentColor',
      className: 'size-6',
      children: p.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10',
      }),
    }),
  jk = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: 1.5,
      stroke: 'currentColor',
      className: 'size-6',
      children: p.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
      }),
    }),
  Mk = () =>
    p.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: 1.5,
      stroke: 'currentColor',
      className: 'size-6',
      children: p.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
      }),
    });
function _k() {
  return p.jsxs(p.Fragment, {
    children: [
      p.jsxs('div', {
        className: 'overflow-clip bg-black',
        children: [
          p.jsx(yk, {}),
          p.jsx(rr, { className: '-top-[1px]', upsideDown: !0 }),
          p.jsx(Ak, {}),
          p.jsx(rr, { className: '-top-2' }),
          p.jsx(uk, {}),
          p.jsx(rr, { className: '-top-[1px]', upsideDown: !0 }),
          p.jsx(Sk, {}),
          p.jsx(rr, { className: '-top-2' }),
          p.jsx(xk, {}),
          p.jsx(rr, { className: '-top-[1px]', upsideDown: !0 }),
          p.jsx(Tk, {}),
          p.jsx(rr, { className: '-top-2' }),
          p.jsx(Ek, {}),
        ],
      }),
      p.jsx(gk, {}),
    ],
  });
}
function Rk() {
  return p.jsx('div', { children: ' about sexo ' });
}
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ji() {
  return (
    (Ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ji.apply(this, arguments)
  );
}
var zn;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(zn || (zn = {}));
const Hp = 'popstate';
function Lk(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Hu(
      '',
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : zo(i);
  }
  return Ik(t, n, null, e);
}
function ke(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Uv(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Dk() {
  return Math.random().toString(36).substr(2, 8);
}
function Gp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Hu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ji(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? fs(t) : t,
      { state: n, key: (t && t.key) || r || Dk() }
    )
  );
}
function zo(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function fs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Ik(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = zn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Ji({}, o.state, { idx: u }), ''));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = zn.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: x.location, delta: m });
  }
  function d(w, m) {
    a = zn.Push;
    let h = Hu(x.location, w, m);
    u = c() + 1;
    let g = Gp(h, u),
      S = x.createHref(h);
    try {
      o.pushState(g, '', S);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      i.location.assign(S);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function v(w, m) {
    a = zn.Replace;
    let h = Hu(x.location, w, m);
    u = c();
    let g = Gp(h, u),
      S = x.createHref(h);
    o.replaceState(g, '', S), s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function y(w) {
    let m = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      h = typeof w == 'string' ? w : zo(w);
    return (
      (h = h.replace(/ $/, '%20')),
      ke(m, 'No window.location.(origin|href) available to create URL for href: ' + h),
      new URL(h, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(w) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(Hp, f),
        (l = w),
        () => {
          i.removeEventListener(Hp, f), (l = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: y,
    encodeLocation(w) {
      let m = y(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: v,
    go(w) {
      return o.go(w);
    },
  };
  return x;
}
var Kp;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Kp || (Kp = {}));
function Ok(e, t, n) {
  return n === void 0 && (n = '/'), zk(e, t, n, !1);
}
function zk(e, t, n, r) {
  let i = typeof t == 'string' ? fs(t) : t,
    s = Bf(i.pathname || '/', n);
  if (s == null) return null;
  let o = $v(e);
  Fk(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = Qk(s);
    a = Yk(o[l], u, r);
  }
  return a;
}
function $v(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || '' : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith('/') &&
      (ke(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = un([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (ke(
        s.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      $v(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Gk(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === '' || !((a = s.path) != null && a.includes('?'))) i(s, o);
      else for (let l of Wv(s.path)) i(s, o, l);
    }),
    t
  );
}
function Wv(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    s = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [s, ''] : [s];
  let o = Wv(r.join('/')),
    a = [];
  return (
    a.push(...o.map((l) => (l === '' ? s : [s, l].join('/')))),
    i && a.push(...o),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function Fk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Kk(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Vk = /^:[\w-]+$/,
  Bk = 3,
  Uk = 2,
  $k = 1,
  Wk = 10,
  Hk = -2,
  Yp = (e) => e === '*';
function Gk(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Yp) && (r += Hk),
    t && (r += Uk),
    n
      .filter((i) => !Yp(i))
      .reduce((i, s) => i + (Vk.test(s) ? Bk : s === '' ? $k : Wk), r)
  );
}
function Kk(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Yk(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = '/',
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = s === '/' ? t : t.slice(s.length) || '/',
      f = Xp({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, c),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Xp({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, c)),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: un([s, f.pathname]),
        pathnameBase: eE(un([s, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== '/' && (s = un([s, f.pathnameBase]));
  }
  return o;
}
function Xp(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Xk(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, '$1'),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: v } = c;
      if (d === '*') {
        let x = a[f] || '';
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const y = a[f];
      return v && !y ? (u[d] = void 0) : (u[d] = (y || '').replace(/%2F/g, '/')), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function Xk(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Uv(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function Qk(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Uv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Bf(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function qk(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? fs(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Zk(n, t)) : t,
    search: tE(r),
    hash: nE(i),
  };
}
function Zk(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function fl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jk(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Hv(e, t) {
  let n = Jk(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Gv(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = fs(e))
    : ((i = Ji({}, e)),
      ke(!i.pathname || !i.pathname.includes('?'), fl('?', 'pathname', 'search', i)),
      ke(!i.pathname || !i.pathname.includes('#'), fl('#', 'pathname', 'hash', i)),
      ke(!i.search || !i.search.includes('#'), fl('#', 'search', 'hash', i)));
  let s = e === '' || i.pathname === '',
    o = s ? '/' : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith('..')) {
      let d = o.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      i.pathname = d.join('/');
    }
    a = f >= 0 ? t[f] : '/';
  }
  let l = qk(i, a),
    u = o && o !== '/' && o.endsWith('/'),
    c = (s || o === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const un = (e) => e.join('/').replace(/\/\/+/g, '/'),
  eE = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  tE = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  nE = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function rE(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Kv = ['post', 'put', 'patch', 'delete'];
new Set(Kv);
const iE = ['get', ...Kv];
new Set(iE);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fo() {
  return (
    (Fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fo.apply(this, arguments)
  );
}
const Uf = b.createContext(null),
  sE = b.createContext(null),
  er = b.createContext(null),
  $f = b.createContext(null),
  tr = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Yv = b.createContext(null);
function oE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ds() || ke(!1);
  let { basename: r, navigator: i } = b.useContext(er),
    { hash: s, pathname: o, search: a } = Qv(e, { relative: n }),
    l = o;
  return (
    r !== '/' && (l = o === '/' ? r : un([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function ds() {
  return b.useContext($f) != null;
}
function hs() {
  return ds() || ke(!1), b.useContext($f).location;
}
function Xv(e) {
  b.useContext(er).static || b.useLayoutEffect(e);
}
function aE() {
  let { isDataRoute: e } = b.useContext(tr);
  return e ? wE() : lE();
}
function lE() {
  ds() || ke(!1);
  let e = b.useContext(Uf),
    { basename: t, future: n, navigator: r } = b.useContext(er),
    { matches: i } = b.useContext(tr),
    { pathname: s } = hs(),
    o = JSON.stringify(Hv(i, n.v7_relativeSplatPath)),
    a = b.useRef(!1);
  return (
    Xv(() => {
      a.current = !0;
    }),
    b.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let f = Gv(u, JSON.parse(o), s, c.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : un([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, o, s, e]
    )
  );
}
function Qv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = b.useContext(er),
    { matches: i } = b.useContext(tr),
    { pathname: s } = hs(),
    o = JSON.stringify(Hv(i, r.v7_relativeSplatPath));
  return b.useMemo(() => Gv(e, JSON.parse(o), s, n === 'path'), [e, o, s, n]);
}
function uE(e, t) {
  return cE(e);
}
function cE(e, t, n, r) {
  ds() || ke(!1);
  let { navigator: i } = b.useContext(er),
    { matches: s } = b.useContext(tr),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : '/';
  o && o.route;
  let u = hs(),
    c;
  c = u;
  let f = c.pathname || '/',
    d = f;
  if (l !== '/') {
    let x = l.replace(/^\//, '').split('/');
    d = '/' + f.replace(/^\//, '').split('/').slice(x.length).join('/');
  }
  let v = Ok(e, { pathname: d });
  return mE(
    v &&
      v.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, a, x.params),
          pathname: un([
            l,
            i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === '/'
              ? l
              : un([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r
  );
}
function fE() {
  let e = xE(),
    t = rE(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement('h2', null, 'Unexpected Application Error!'),
    b.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? b.createElement('pre', { style: i }, n) : null,
    null
  );
}
const dE = b.createElement(fE, null);
class hE extends b.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          tr.Provider,
          { value: this.props.routeContext },
          b.createElement(Yv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function pE(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = b.useContext(Uf);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(tr.Provider, { value: t }, r)
  );
}
function mE(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || ke(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: v } = n,
          y =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, f, d) => {
    let v,
      y = !1,
      x = null,
      w = null;
    n &&
      ((v = a && f.route.id ? a[f.route.id] : void 0),
      (x = f.route.errorElement || dE),
      l &&
        (u < 0 && d === 0
          ? (SE('route-fallback'), (y = !0), (w = null))
          : u === d && ((y = !0), (w = f.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, d + 1)),
      h = () => {
        let g;
        return (
          v
            ? (g = x)
            : y
            ? (g = w)
            : f.route.Component
            ? (g = b.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = c),
          b.createElement(pE, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? b.createElement(hE, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: v,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var qv = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(qv || {}),
  Vo = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Vo || {});
function gE(e) {
  let t = b.useContext(Uf);
  return t || ke(!1), t;
}
function vE(e) {
  let t = b.useContext(sE);
  return t || ke(!1), t;
}
function yE(e) {
  let t = b.useContext(tr);
  return t || ke(!1), t;
}
function Zv(e) {
  let t = yE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ke(!1), n.route.id;
}
function xE() {
  var e;
  let t = b.useContext(Yv),
    n = vE(Vo.UseRouteError),
    r = Zv(Vo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function wE() {
  let { router: e } = gE(qv.UseNavigateStable),
    t = Zv(Vo.UseNavigateStable),
    n = b.useRef(!1);
  return (
    Xv(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, Fo({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Qp = {};
function SE(e, t, n) {
  Qp[e] || (Qp[e] = !0);
}
function bE(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = zn.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  ds() && ke(!1);
  let l = t.replace(/^\/*/, '/'),
    u = b.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Fo({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == 'string' && (r = fs(r));
  let {
      pathname: c = '/',
      search: f = '',
      hash: d = '',
      state: v = null,
      key: y = 'default',
    } = r,
    x = b.useMemo(() => {
      let w = Bf(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: d, state: v, key: y },
            navigationType: i,
          };
    }, [l, c, f, d, v, y, i]);
  return x == null
    ? null
    : b.createElement(
        er.Provider,
        { value: u },
        b.createElement($f.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gu() {
  return (
    (Gu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gu.apply(this, arguments)
  );
}
function CE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function kE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function EE(e, t) {
  return e.button === 0 && (!t || t === '_self') && !kE(e);
}
const PE = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  TE = '6';
try {
  window.__reactRouterVersion = TE;
} catch {}
const AE = 'startTransition',
  qp = Cy[AE];
function NE(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = b.useRef();
  s.current == null && (s.current = Lk({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = b.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = b.useCallback(
      (f) => {
        u && qp ? qp(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    b.useLayoutEffect(() => o.listen(c), [o, c]),
    b.createElement(bE, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const jE =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ME = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _E = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      d = CE(t, PE),
      { basename: v } = b.useContext(er),
      y,
      x = !1;
    if (typeof u == 'string' && ME.test(u) && ((y = u), jE))
      try {
        let g = new URL(window.location.href),
          S = u.startsWith('//') ? new URL(g.protocol + u) : new URL(u),
          C = Bf(S.pathname, v);
        S.origin === g.origin && C != null ? (u = C + S.search + S.hash) : (x = !0);
      } catch {}
    let w = oE(u, { relative: i }),
      m = RE(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function h(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return b.createElement(
      'a',
      Gu({}, d, { href: y || w, onClick: x || s ? r : h, ref: n, target: l })
    );
  });
var Zp;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Zp || (Zp = {}));
var Jp;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Jp || (Jp = {}));
function RE(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = aE(),
    u = hs(),
    c = Qv(e, { relative: o });
  return b.useCallback(
    (f) => {
      if (EE(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : zo(u) === zo(c);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, s, o, a]
  );
}
const LE = [
  { name: 'booreal', path: '/' },
  { name: 'serviços', path: '/' },
  { name: 'sobre', path: '/' },
  { name: 'contato', path: '/sobre' },
];
function DE() {
  const [e, t] = b.useState(!1);
  return (
    b.useEffect(() => {
      const n = () => {
        const r = window.scrollY > 100;
        t(r);
      };
      return (
        window.addEventListener('scroll', n),
        () => window.removeEventListener('scroll', n)
      );
    }, []),
    p.jsx('header', {
      children: p.jsx('nav', {
        className: `mx-auto flex justify-evenly max-w-sm fixed inset-0 rounded-2xl z-50 h-fit md:max-w-lg transition-all duration-200 ${
          e ? 'my-4 py-4 bg-glass' : 'my-0 py-4'
        }`,
        children: LE.map((n, r) =>
          p.jsx(
            _E,
            {
              to: n.path,
              className:
                'capitalize text-black font-medium text-lg hover:scale-105 transition-all rounded-2xl',
              children: n.name,
            },
            r
          )
        ),
      }),
    })
  );
}
var em = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jv = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  IE = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          a = e[n++],
          l = (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) - 65536;
        (t[r++] = String.fromCharCode(55296 + (l >> 10))),
          (t[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(((i & 15) << 12) | ((s & 63) << 6) | (o & 63));
      }
    }
    return t.join('');
  },
  ey = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(e, t) {
      if (!Array.isArray(e)) throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          a = o ? e[i + 1] : 0,
          l = i + 2 < e.length,
          u = l ? e[i + 2] : 0,
          c = s >> 2,
          f = ((s & 3) << 4) | (a >> 4);
        let d = ((a & 15) << 2) | (u >> 6),
          v = u & 63;
        l || ((v = 64), o || (d = 64)), r.push(n[c], n[f], n[d], n[v]);
      }
      return r.join('');
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(Jv(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : IE(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          a = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const f = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || a == null || u == null || f == null)) throw new OE();
        const d = (s << 2) | (a >> 4);
        if ((r.push(d), u !== 64)) {
          const v = ((a << 4) & 240) | (u >> 2);
          if ((r.push(v), f !== 64)) {
            const y = ((u << 6) & 192) | f;
            r.push(y);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class OE extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const zE = function (e) {
    const t = Jv(e);
    return ey.encodeByteArray(t, !0);
  },
  ty = function (e) {
    return zE(e).replace(/\./g, '');
  },
  FE = function (e) {
    try {
      return ey.decodeString(e, !0);
    } catch (t) {
      console.error('base64Decode failed: ', t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function VE() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BE = () => VE().__FIREBASE_DEFAULTS__,
  UE = () => {
    if (typeof process > 'u' || typeof em > 'u') return;
    const e = em.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  $E = () => {
    if (typeof document > 'u') return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && FE(e[1]);
    return t && JSON.parse(t);
  },
  WE = () => {
    try {
      return BE() || UE() || $E();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  HE = () => {
    var e;
    return (e = WE()) === null || e === void 0 ? void 0 : e.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GE {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == 'function' &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
function KE() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function YE() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '');
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XE = 'FirebaseError';
class ps extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = XE),
      Object.setPrototypeOf(this, ps.prototype),
      Error.captureStackTrace && Error.captureStackTrace(this, ny.prototype.create);
  }
}
class ny {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? QE(s, r) : 'Error',
      a = `${this.serviceName}: ${o} (${i}).`;
    return new ps(i, a, r);
  }
}
function QE(e, t) {
  return e.replace(qE, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const qE = /\{\$([^}]+)}/g;
function Ku(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      o = t[i];
    if (tm(s) && tm(o)) {
      if (!Ku(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function tm(e) {
  return e !== null && typeof e == 'object';
}
class Bo {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _n = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZE {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new GE();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier),
      i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (eP(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: _n });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = _n) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => '_delete' in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = _n) {
    return this.instances.has(t);
  }
  getOptions(t = _n) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({ instanceIdentifier: r, options: n });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: JE(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = _n) {
    return this.component ? (this.component.multipleInstances ? t : _n) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function JE(e) {
  return e === _n ? void 0 : e;
}
function eP(e) {
  return e.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tP {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new ZE(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Y;
(function (e) {
  (e[(e.DEBUG = 0)] = 'DEBUG'),
    (e[(e.VERBOSE = 1)] = 'VERBOSE'),
    (e[(e.INFO = 2)] = 'INFO'),
    (e[(e.WARN = 3)] = 'WARN'),
    (e[(e.ERROR = 4)] = 'ERROR'),
    (e[(e.SILENT = 5)] = 'SILENT');
})(Y || (Y = {}));
const nP = {
    debug: Y.DEBUG,
    verbose: Y.VERBOSE,
    info: Y.INFO,
    warn: Y.WARN,
    error: Y.ERROR,
    silent: Y.SILENT,
  },
  rP = Y.INFO,
  iP = {
    [Y.DEBUG]: 'log',
    [Y.VERBOSE]: 'log',
    [Y.INFO]: 'info',
    [Y.WARN]: 'warn',
    [Y.ERROR]: 'error',
  },
  sP = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = iP[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
  };
class oP {
  constructor(t) {
    (this.name = t),
      (this._logLevel = rP),
      (this._logHandler = sP),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in Y)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == 'string' ? nP[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.DEBUG, ...t),
      this._logHandler(this, Y.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.VERBOSE, ...t),
      this._logHandler(this, Y.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.INFO, ...t),
      this._logHandler(this, Y.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.WARN, ...t),
      this._logHandler(this, Y.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.ERROR, ...t),
      this._logHandler(this, Y.ERROR, ...t);
  }
}
const aP = (e, t) => t.some((n) => e instanceof n);
let nm, rm;
function lP() {
  return nm || (nm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function uP() {
  return (
    rm ||
    (rm = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const ry = new WeakMap(),
  Yu = new WeakMap(),
  iy = new WeakMap(),
  dl = new WeakMap(),
  Wf = new WeakMap();
function cP(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener('success', s), e.removeEventListener('error', o);
      },
      s = () => {
        n(cn(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener('success', s), e.addEventListener('error', o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && ry.set(n, e);
      })
      .catch(() => {}),
    Wf.set(t, e),
    t
  );
}
function fP(e) {
  if (Yu.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener('complete', s),
          e.removeEventListener('error', o),
          e.removeEventListener('abort', o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException('AbortError', 'AbortError')), i();
      };
    e.addEventListener('complete', s),
      e.addEventListener('error', o),
      e.addEventListener('abort', o);
  });
  Yu.set(e, t);
}
let Xu = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return Yu.get(e);
      if (t === 'objectStoreNames') return e.objectStoreNames || iy.get(e);
      if (t === 'store')
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return cn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === 'done' || t === 'store') ? !0 : t in e;
  },
};
function dP(e) {
  Xu = e(Xu);
}
function hP(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(hl(this), t, ...n);
        return iy.set(r, t.sort ? t.sort() : [t]), cn(r);
      }
    : uP().includes(e)
    ? function (...t) {
        return e.apply(hl(this), t), cn(ry.get(this));
      }
    : function (...t) {
        return cn(e.apply(hl(this), t));
      };
}
function pP(e) {
  return typeof e == 'function'
    ? hP(e)
    : (e instanceof IDBTransaction && fP(e), aP(e, lP()) ? new Proxy(e, Xu) : e);
}
function cn(e) {
  if (e instanceof IDBRequest) return cP(e);
  if (dl.has(e)) return dl.get(e);
  const t = pP(e);
  return t !== e && (dl.set(e, t), Wf.set(t, e)), t;
}
const hl = (e) => Wf.get(e);
function mP(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    a = cn(o);
  return (
    r &&
      o.addEventListener('upgradeneeded', (l) => {
        r(cn(o.result), l.oldVersion, l.newVersion, cn(o.transaction), l);
      }),
    n && o.addEventListener('blocked', (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        s && l.addEventListener('close', () => s()),
          i &&
            l.addEventListener('versionchange', (u) => i(u.oldVersion, u.newVersion, u));
      })
      .catch(() => {}),
    a
  );
}
const gP = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  vP = ['put', 'add', 'delete', 'clear'],
  pl = new Map();
function im(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return;
  if (pl.get(t)) return pl.get(t);
  const n = t.replace(/FromIndex$/, ''),
    r = t !== n,
    i = vP.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || gP.includes(n))) return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? 'readwrite' : 'readonly');
    let u = l.store;
    return (
      r && (u = u.index(a.shift())), (await Promise.all([u[n](...a), i && l.done]))[0]
    );
  };
  return pl.set(t, s), s;
}
dP((e) => ({
  ...e,
  get: (t, n, r) => im(t, n) || e.get(t, n, r),
  has: (t, n) => !!im(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yP {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (xP(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(' ');
  }
}
function xP(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === 'VERSION';
}
const Qu = '@firebase/app',
  sm = '0.10.17';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ft = new oP('@firebase/app'),
  wP = '@firebase/app-compat',
  SP = '@firebase/analytics-compat',
  bP = '@firebase/analytics',
  CP = '@firebase/app-check-compat',
  kP = '@firebase/app-check',
  EP = '@firebase/auth',
  PP = '@firebase/auth-compat',
  TP = '@firebase/database',
  AP = '@firebase/data-connect',
  NP = '@firebase/database-compat',
  jP = '@firebase/functions',
  MP = '@firebase/functions-compat',
  _P = '@firebase/installations',
  RP = '@firebase/installations-compat',
  LP = '@firebase/messaging',
  DP = '@firebase/messaging-compat',
  IP = '@firebase/performance',
  OP = '@firebase/performance-compat',
  zP = '@firebase/remote-config',
  FP = '@firebase/remote-config-compat',
  VP = '@firebase/storage',
  BP = '@firebase/storage-compat',
  UP = '@firebase/firestore',
  $P = '@firebase/vertexai',
  WP = '@firebase/firestore-compat',
  HP = 'firebase';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GP = '[DEFAULT]',
  KP = {
    [Qu]: 'fire-core',
    [wP]: 'fire-core-compat',
    [bP]: 'fire-analytics',
    [SP]: 'fire-analytics-compat',
    [kP]: 'fire-app-check',
    [CP]: 'fire-app-check-compat',
    [EP]: 'fire-auth',
    [PP]: 'fire-auth-compat',
    [TP]: 'fire-rtdb',
    [AP]: 'fire-data-connect',
    [NP]: 'fire-rtdb-compat',
    [jP]: 'fire-fn',
    [MP]: 'fire-fn-compat',
    [_P]: 'fire-iid',
    [RP]: 'fire-iid-compat',
    [LP]: 'fire-fcm',
    [DP]: 'fire-fcm-compat',
    [IP]: 'fire-perf',
    [OP]: 'fire-perf-compat',
    [zP]: 'fire-rc',
    [FP]: 'fire-rc-compat',
    [VP]: 'fire-gcs',
    [BP]: 'fire-gcs-compat',
    [UP]: 'fire-fst',
    [WP]: 'fire-fst-compat',
    [$P]: 'fire-vertex',
    'fire-js': 'fire-js',
    [HP]: 'fire-js-all',
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qu = new Map(),
  YP = new Map(),
  Zu = new Map();
function om(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
  }
}
function Ju(e) {
  const t = e.name;
  if (Zu.has(t))
    return Ft.debug(`There were multiple attempts to register component ${t}.`), !1;
  Zu.set(t, e);
  for (const n of qu.values()) om(n, e);
  for (const n of YP.values()) om(n, e);
  return !0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XP = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument': 'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  Wn = new ny('app', 'Firebase', XP);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QP {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Bo('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Wn.create('app-deleted', { appName: this._name });
  }
}
function qP(e, t = {}) {
  let n = e;
  typeof t != 'object' && (t = { name: t });
  const r = Object.assign({ name: GP, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != 'string' || !i) throw Wn.create('bad-app-name', { appName: String(i) });
  if ((n || (n = HE()), !n)) throw Wn.create('no-options');
  const s = qu.get(i);
  if (s) {
    if (Ku(n, s.options) && Ku(r, s.config)) return s;
    throw Wn.create('duplicate-app', { appName: i });
  }
  const o = new tP(i);
  for (const l of Zu.values()) o.addComponent(l);
  const a = new QP(n, r, o);
  return qu.set(i, a), a;
}
function no(e, t, n) {
  var r;
  let i = (r = KP[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${t}":`];
    s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
      s && o && a.push('and'),
      o && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
      Ft.warn(a.join(' '));
    return;
  }
  Ju(new Bo(`${i}-version`, () => ({ library: i, version: t }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ZP = 'firebase-heartbeat-database',
  JP = 1,
  es = 'firebase-heartbeat-store';
let ml = null;
function sy() {
  return (
    ml ||
      (ml = mP(ZP, JP, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(es);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Wn.create('idb-open', { originalErrorMessage: e.message });
      })),
    ml
  );
}
async function eT(e) {
  try {
    const n = (await sy()).transaction(es),
      r = await n.objectStore(es).get(oy(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof ps) Ft.warn(t.message);
    else {
      const n = Wn.create('idb-get', {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Ft.warn(n.message);
    }
  }
}
async function am(e, t) {
  try {
    const r = (await sy()).transaction(es, 'readwrite');
    await r.objectStore(es).put(t, oy(e)), await r.done;
  } catch (n) {
    if (n instanceof ps) Ft.warn(n.message);
    else {
      const r = Wn.create('idb-set', {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Ft.warn(r.message);
    }
  }
}
function oy(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tT = 1024,
  nT = 30 * 24 * 60 * 60 * 1e3;
class rT {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider('app').getImmediate();
    (this._storage = new sT(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    try {
      const i = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        s = lm();
      return (((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) ==
          null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
          (this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(
            (o) => {
              const a = new Date(o.date).valueOf();
              return Date.now() - a <= nT;
            }
          )),
          this._storage.overwrite(this._heartbeatsCache));
    } catch (r) {
      Ft.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) ==
          null || this._heartbeatsCache.heartbeats.length === 0)
      )
        return '';
      const n = lm(),
        { heartbeatsToSend: r, unsentEntries: i } = iT(this._heartbeatsCache.heartbeats),
        s = ty(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      );
    } catch (n) {
      return Ft.warn(n), '';
    }
  }
}
function lm() {
  return new Date().toISOString().substring(0, 10);
}
function iT(e, t = tT) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), um(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), um(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class sT {
  constructor(t) {
    (this.app = t), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return KE()
      ? YE()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await eT(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return am(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return am(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function um(e) {
  return ty(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oT(e) {
  Ju(new Bo('platform-logger', (t) => new yP(t), 'PRIVATE')),
    Ju(new Bo('heartbeat', (t) => new rT(t), 'PRIVATE')),
    no(Qu, sm, e),
    no(Qu, sm, 'esm2017'),
    no('fire-js', '');
}
oT('');
var aT = 'firebase',
  lT = '11.1.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ no(aT, lT, 'app');
function uT() {
  const e = uE([
    { path: '/', element: p.jsx(_k, {}) },
    { path: 'sobre', element: p.jsx(Rk, {}) },
  ]);
  qP({
    apiKey: 'AIzaSyDTpVx-XUizFRwwUYvxE8fpI5aghSBf11g',
    authDomain: 'booreal-lab.firebaseapp.com',
    projectId: 'booreal-lab',
    storageBucket: 'booreal-lab.firebasestorage.app',
    messagingSenderId: '224509341196',
    appId: '1:224509341196:web:ea3a20c1ae5cd7c2938829',
  });
  const n = hs();
  return e
    ? p.jsxs(p.Fragment, {
        children: [
          p.jsx(DE, {}),
          p.jsx(ha, {
            mode: 'wait',
            initial: !1,
            children: $o.cloneElement(e, { key: n.pathname }),
          }),
        ],
      })
    : null;
}
C0(document.getElementById('root')).render(
  p.jsx(b.StrictMode, { children: p.jsx(NE, { children: p.jsx(uT, {}) }) })
);
