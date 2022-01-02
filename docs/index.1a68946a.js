// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5DYht":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "6e08fa121a68946a";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5HwUs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _anbani = require("anbani");
var _anbaniDefault = parcelHelpers.interopDefault(_anbani);
var inputArea, debugEl;
function debugMsg(msg) {
    debugEl.innerHTML = msg + (msg.length > 50 ? "..." : "");
}
String.prototype.toElement = function() {
    var template = document.createElement("template");
    var html = this.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};
function inputListener() {
    let inputText = "გამარჯობა";
    if (inputArea.value != "") inputText = inputArea.value;
    let scripts = _anbaniDefault.default.data.keys;
    let georgian = _anbaniDefault.default.core.interpret(inputText, "mkhedruli");
    scripts.forEach((script)=>{
        document.querySelector(`#${script}Btn`).innerHTML = _anbaniDefault.default.core.convert(georgian, "mkhedruli", script);
    });
}
function copyWithAPI(e1) {
    let content = e1.target.innerHTML;
    navigator.clipboard.writeText(content).catch((e)=>{
        console.log('ასე ვერ გავფრინდებით', e);
    });
}
function copyWithExec(e) {
    let content = e.target.innerHTML;
    const area = document.createElement('textarea');
    document.body.appendChild(area);
    area.value = content;
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
}
function copy(e) {
    if (navigator.clipboard) copyWithExec(e);
    else copyWithExec(e);
    debugMsg("ტექსტი კოპირებულია ჻ " + e.target.innerHTML.slice(0, 30));
}
window.addEventListener("DOMContentLoaded", (event)=>{
    window.copy = copy;
    inputArea = document.querySelector("#inputArea");
    debugEl = document.querySelector("#debug");
    inputArea.addEventListener("input", inputListener);
});

},{"anbani":"k3ljl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k3ljl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "core", ()=>_coreMjsDefault.default
);
parcelHelpers.export(exports, "lorem", ()=>_loremMjsDefault.default
);
parcelHelpers.export(exports, "toolkit", ()=>_toolkitMjsDefault.default
);
parcelHelpers.export(exports, "data", ()=>_dataMjsDefault.default
);
var _coreMjs = require("./lib/core.mjs");
var _coreMjsDefault = parcelHelpers.interopDefault(_coreMjs);
var _loremMjs = require("./lib/lorem.mjs");
var _loremMjsDefault = parcelHelpers.interopDefault(_loremMjs);
var _toolkitMjs = require("./lib/toolkit.mjs");
var _toolkitMjsDefault = parcelHelpers.interopDefault(_toolkitMjs);
var _dataMjs = require("./lib/data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
var _utilsMjs = require("./lib/utils.mjs");
var _utilsMjsDefault = parcelHelpers.interopDefault(_utilsMjs);
_coreMjsDefault.default.$ = {
    classifyText: _utilsMjsDefault.default.classifyText
};
let scripts = Object.keys(_dataMjsDefault.default.alphabets).slice(0, 4).concat([
    "khutsuri",
    "shanidziseuli",
    "tfileliseuli"
]).concat(Object.keys(_dataMjsDefault.default.alphabets).slice(4));
// Abstract anbani
const anbani = {
    core: _coreMjsDefault.default,
    lorem: _loremMjsDefault.default,
    toolkit: _toolkitMjsDefault.default,
    data: {
        ab: {
            mkhedruli: _dataMjsDefault.default.alphabets.mkhedruli.join(''),
            asomtavruli: _dataMjsDefault.default.alphabets.asomtavruli.join(''),
            nuskhuri: _dataMjsDefault.default.alphabets.nuskhuri.join(''),
            mtavruli: _dataMjsDefault.default.alphabets.mtavruli.join('')
        },
        keys: scripts,
        lorem: {
            firstNames: _dataMjsDefault.default.fnames,
            lastNames: _dataMjsDefault.default.lnames,
            words: _dataMjsDefault.default.vefxwords
        }
    }
};
exports.default = anbani;

},{"./lib/core.mjs":"8PdIK","./lib/lorem.mjs":"1btpQ","./lib/toolkit.mjs":"77zQf","./lib/data.mjs":"7ChY7","./lib/utils.mjs":"eDhIa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8PdIK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convert", ()=>convert
);
parcelHelpers.export(exports, "interpret", ()=>interpret
);
parcelHelpers.export(exports, "convertUnicameral", ()=>convertUnicameral
);
parcelHelpers.export(exports, "convertBicameral", ()=>convertBicameral
);
parcelHelpers.export(exports, "safeConvert", ()=>safeConvert
);
var _dataMjs = require("./data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
var _utilsMjs = require("./utils.mjs");
const convert = (str, from, to)=>{
    let dir = {
        from,
        to
    };
    _utilsMjs.checkForAliases(dir);
    _utilsMjs.checkForDirection(dir);
    return safeConvert(str, dir.from, dir.to);
};
const interpret = (str, to)=>{
    let dir = {
        to
    };
    _utilsMjs.checkForAliases(dir);
    if (str != null) {
        if (_utilsMjs.isBicameral(dir.to)) return convertBicameral(str, _utilsMjs.detectAlphabet(str, str.length - 1), dir.to);
        else return convertUnicameral(str, _utilsMjs.detectAlphabet(str, str.length - 1), dir.to);
    }
};
const convertUnicameral = (str, from, to)=>{
    let converted = "";
    for(let i = 0, len = str.length; i < len; i++){
        let key = _dataMjsDefault.default.alphabets[to][_dataMjsDefault.default.alphabets[from].indexOf(str[i])];
        converted += key === undefined ? str[i] : key;
    }
    return converted;
};
const convertBicameral = (str, from, to)=>{
    const rules = {
        "tfileliseuli": {
            upper: "mtavruli",
            lower: "mkhedruli"
        },
        "shanidziseuli": {
            upper: "asomtavruli",
            lower: "mkhedruli"
        },
        "khutsuri": {
            upper: "asomtavruli",
            lower: "nuskhuri"
        }
    };
    let upperScript = rules[to].upper;
    let lowerScript = rules[to].lower;
    let converted = "";
    for(let i = 0, len = str.length; i < len; i++){
        let key = _dataMjsDefault.default.alphabets[lowerScript][_dataMjsDefault.default.alphabets[from].indexOf(str[i])];
        converted += key === undefined ? str[i] : key;
    }
    // First Letter
    converted = _utilsMjs.toUpperCase(converted, lowerScript, upperScript);
    let matched = converted.match(/[?.!]\s+[A-zႠ-ჰⴀ-ⴠ0-9]/g);
    if (matched != null) for(let i1 = 0; i1 < matched.length; i1++)converted = converted.setCharAt(converted.indexOf(matched[i1]), matched[i1].substr(0, matched[i1].length - 1).concat(_utilsMjs.toUpperCase(matched[i1][matched[i1].length - 1], lowerScript, upperScript)));
    matched = converted.match(/[Ⴀ-ჰⴀ-ⴠ]\'/g);
    if (matched != null) for(let i2 = 0; i2 < matched.length; i2++)converted = converted.setCharAt(converted.indexOf(matched[i2]), _utilsMjs.toUpperCase(matched[i2][0], lowerScript, upperScript), 1);
    return converted;
};
const safeConvert = (str, from, to)=>{
    if (str != null) {
        if (!_utilsMjs.isBicameral(to)) return convertUnicameral(str, from, to);
        else return convertBicameral(str, from, to);
    }
};
exports.default = {
    convert,
    interpret,
    $: _utilsMjs.classifyText
};

},{"./data.mjs":"7ChY7","./utils.mjs":"eDhIa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7ChY7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const data = {
};
data.alphabets = {
    // Modern unicameral Georgian script developed in 10th century 
    mkhedruli: [
        'ა',
        'ბ',
        'გ',
        'დ',
        'ე',
        'ვ',
        'ზ',
        'თ',
        'ი',
        'კ',
        'ლ',
        'მ',
        'ნ',
        'ო',
        'პ',
        'ჟ',
        'რ',
        'ს',
        'ტ',
        'უ',
        'ფ',
        'ქ',
        'ღ',
        'ყ',
        'შ',
        'ჩ',
        'ც',
        'ძ',
        'წ',
        'ჭ',
        'ხ',
        'ჯ',
        'ჰ',
        'ჱ',
        'ჲ',
        'ჳ',
        'ჴ',
        'ჵ',
        'ჶ',
        'ჷ',
        'ჸ',
        'ჹ',
        'ჺ',
        '჻',
        'ჼ',
        'ჽ',
        'ჾ',
        'ჿ', 
    ],
    // Modern unicameral derivative script of Mkhedruli only used for headlines in all-caps
    mtavruli: [
        'Ა',
        'Ბ',
        'Გ',
        'Დ',
        'Ე',
        'Ვ',
        'Ზ',
        'Თ',
        'Ი',
        'Კ',
        'Ლ',
        'Მ',
        'Ნ',
        'Ო',
        'Პ',
        'Ჟ',
        'Რ',
        'Ს',
        'Ტ',
        'Უ',
        'Ფ',
        'Ქ',
        'Ღ',
        'Ყ',
        'Შ',
        'Ჩ',
        'Ც',
        'Ძ',
        'Წ',
        'Ჭ',
        'Ხ',
        'Ჯ',
        'Ჰ',
        'Ჱ',
        'Ჲ',
        'Ჳ',
        'Ჴ',
        'Ჵ',
        'Ჶ',
        'Ჷ',
        'Ჸ',
        'Ჹ',
        'Ჺ',
        '᲻',
        '᲼',
        'Ჽ',
        'Ჾ',
        'Ჿ', 
    ],
    // Original Georgian alphabet from 5th century
    asomtavruli: [
        'Ⴀ',
        'Ⴁ',
        'Ⴂ',
        'Ⴃ',
        'Ⴄ',
        'Ⴅ',
        'Ⴆ',
        'Ⴇ',
        'Ⴈ',
        'Ⴉ',
        'Ⴊ',
        'Ⴋ',
        'Ⴌ',
        'Ⴍ',
        'Ⴎ',
        'Ⴏ',
        'Ⴐ',
        'Ⴑ',
        'Ⴒ',
        'Ⴓ',
        'Ⴔ',
        'Ⴕ',
        'Ⴖ',
        'Ⴗ',
        'Ⴘ',
        'Ⴙ',
        'Ⴚ',
        'Ⴛ',
        'Ⴜ',
        'Ⴝ',
        'Ⴞ',
        'Ⴟ',
        'Ⴠ',
        'Ⴡ',
        'Ⴢ',
        'Ⴣ',
        'Ⴤ',
        'Ⴥ',
        '჆',
        'Ⴧ',
        '჈',
        '჉',
        '჊',
        '჋',
        '჌',
        'Ⴭ',
        '჎',
        '჏', 
    ],
    // Second script of Georgian alphabet first appearing in 9th century
    nuskhuri: [
        'ⴀ',
        'ⴁ',
        'ⴂ',
        'ⴃ',
        'ⴄ',
        'ⴅ',
        'ⴆ',
        'ⴇ',
        'ⴈ',
        'ⴉ',
        'ⴊ',
        'ⴋ',
        'ⴌ',
        'ⴍ',
        'ⴎ',
        'ⴏ',
        'ⴐ',
        'ⴑ',
        'ⴒ',
        'ⴓ',
        'ⴔ',
        'ⴕ',
        'ⴖ',
        'ⴗ',
        'ⴘ',
        'ⴙ',
        'ⴚ',
        'ⴛ',
        'ⴜ',
        'ⴝ',
        'ⴞ',
        'ⴟ',
        'ⴠ',
        'ⴡ',
        'ⴢ',
        'ⴣ',
        'ⴤ',
        'ⴥ',
        '⴦',
        'ⴧ',
        '⴨',
        '⴩',
        '⴪',
        '⴫',
        '⴬',
        'ⴭ',
        '⴮',
        '⴯', 
    ],
    // Collection of letters from all around the world that resemble Mkhedruli
    homoglyph: [
        'ⴢ',
        'ձ',
        'ଌ',
        'ᕦ',
        '၅',
        'ᧆ',
        '୫',
        'ᦎ',
        '\u200Eᦵ',
        '૩',
        'ⴝ',
        'ⴋ',
        'চ',
        'ᦂ',
        'Ჴ',
        'ળ',
        'ᦝ',
        'ᒑ',
        'கு',
        '᧗',
        'ᦀ',
        'ⴕ',
        'ⴜ',
        'ᧇ',
        '𑇤',
        'ⴌ',
        'ઉ',
        'ᑻ',
        'წ',
        'ჭ',
        'ᕹ',
        'ⴟ',
        'Ჱ',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '', 
    ],
    // Zalgo crazy text using diacritics
    // zalgo : [],
    // International Phonetic Association (IPA) 
    phonetic: [
        "ɑ",
        "b",
        "g",
        "d",
        "ɛ",
        "v",
        "z",
        "tʰ",
        "i",
        "k'",
        "l",
        "m",
        "n",
        "ɔ",
        "p'",
        "ʒ",
        "r",
        "s",
        "t'",
        "u",
        "pʰ",
        "kʰ",
        "ʁ",
        "q'",
        "ʃ",
        "t͡ʃ",
        "t͡s",
        "d͡z",
        "t͡sʼ'",
        "t͡ʃʼ",
        "χ",
        "d͡ʒ",
        "h",
        "eɪ",
        "j",
        "w",
        "qʰ",
        "oː",
        "f",
        "ə",
        "ʔ",
        "ɢ",
        "ʕ",
        "",
        "◌̃",
        "ə",
        "",
        "", 
    ],
    // Commonly adopted romanization as seen on social media
    common: [
        "a",
        "b",
        "g",
        "d",
        "e",
        "v",
        "z",
        "t",
        "i",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "zh",
        "r",
        "s",
        "t",
        "u",
        "f",
        "q",
        "gh",
        "y",
        "sh",
        "ch",
        "c",
        "dz",
        "ts",
        "tch",
        "x",
        "j",
        "h",
        "e",
        "i",
        "ui",
        "x",
        "hoi",
        "f",
        "oa",
        "h",
        "gh",
        "rgh",
        "",
        "",
        "oa",
        "",
        "", 
    ],
    // Georgian alphabet cyrillization 
    cyrillic: [
        "а",
        "б",
        "г",
        "д",
        "е",
        "в",
        "з",
        "т",
        "и",
        "к",
        "л",
        "м",
        "н",
        "о",
        "п",
        "ж",
        "р",
        "с",
        "т",
        "у",
        "ф",
        "к",
        "г",
        "к",
        "ш",
        "ч",
        "ц",
        "дз",
        "тц",
        "тч",
        "х",
        "дж",
        "х",
        "е",
        "й",
        "уй",
        "х",
        "хо",
        "ф",
        "оа",
        "х",
        "г",
        "рг",
        "",
        "",
        "оа",
        "",
        "", 
    ],
    // Georgian alphabet hellenization 
    greek: [
        'α',
        'μπ',
        'γγ',
        'ντ',
        'ε',
        'β',
        'ζ',
        'τ',
        'η',
        'κ',
        'λ',
        'μ',
        'ν',
        'ο',
        'π',
        'ζͱ',
        'ρ',
        'σ',
        'τ',
        'ου',
        'ψ',
        'κ',
        'γ',
        'κͱ',
        'σͱ',
        'τσ',
        'τσ',
        'δζ',
        'τσ',
        'τσͱ',
        'γχ',
        'τζ',
        'ͱ',
        'ε',
        'ι',
        'υι',
        'κχ',
        'ͱοι',
        'φ',
        'οα',
        'ͱ',
        'γ',
        'ργ',
        '',
        '',
        'οα',
        '',
        ''
    ],
    // Georgian alphabet armenianization 
    armenian: [
        'ա',
        'բ',
        'գ',
        'դ',
        'է',
        'վ',
        'զ',
        'թ',
        'ի',
        'կ',
        'լ',
        'մ',
        'ն',
        'օ',
        'պ',
        'ժ',
        'ռ',
        'ս',
        'տ',
        'ու',
        'փ',
        'ք',
        'ղ',
        'կհ',
        'շ',
        'չ',
        'ց',
        'ձ',
        'ծ',
        'ճ',
        'խ',
        'ջ',
        'հ',
        'է',
        'ի',
        'ուի',
        'խ',
        'հօի',
        'ֆ',
        'ը',
        'հ',
        'ղ',
        'ռղ',
        '',
        '',
        'ը',
        '',
        '', 
    ],
    // International Standards Organization (http://www.iso.ch) as shown in Apridonidze et al. and UNGEGN
    iso_9984: [
        "a",
        "b",
        "g",
        "d",
        "e",
        "v",
        "z",
        "t'",
        "i",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "ž",
        "r",
        "s",
        "t",
        "u",
        "p'",
        "k'",
        "ḡ",
        "q",
        "š",
        "č'",
        "c'",
        "j",
        "c",
        "č",
        "x",
        "ǰ",
        "h",
        "ē",
        "y",
        "w",
        "ẖ'",
        "ō",
        "f",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", 
    ],
    //  The national system of romanization adopted in February 2002 by the State Department of Geodesy and Cartography of Georgia and the Institute of Linguistics, Georgian Academy of Sciences
    national: [
        "a",
        "b",
        "g",
        "d",
        "e",
        "v",
        "z",
        "t",
        "i",
        "k'",
        "l",
        "m",
        "n",
        "o",
        "p'",
        "zh",
        "r",
        "s",
        "t'",
        "u",
        "p",
        "k",
        "gh",
        "q'",
        "sh",
        "ch",
        "ts",
        "dz",
        "ts'",
        "ch'",
        "kh",
        "j",
        "h",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", 
    ],
    // Iberiul-K’avk’asiuri enatmetsnierebis ts’elits’deuli [Annual of Ibero-Caucasian Linguistics] as shown in The World’s Writing Systems. Variant forms separated with a slash
    // ike : [],
    // American Library Association/Library of Congress.
    // ala_lc : [],
    // Kohanimeandmebaas (Place Names Database) of Eesti Keele Instituut (Institute of the Estonian Language) (http://www.eki.ee).
    // knab : [],
    // United States Board on Geographic Names and the Permanent Committee on Geographical Names for British Official Use
    bgn: [
        "a",
        "b",
        "g",
        "d",
        "e",
        "v",
        "z",
        "t'",
        "i",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "zh",
        "r",
        "s",
        "t",
        "u",
        "p'",
        "k'",
        "gh",
        "q",
        "sh",
        "ch'",
        "ts'",
        "dz",
        "ts",
        "ch",
        "kh",
        "j",
        "h",
        "ey",
        "j",
        "",
        "q'",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", 
    ],
    // Thesaurus Indogermanischer Text- und Sprachmaterialien (http://titus.uni-frankfurt.de)
    // titus : []
    // Latin to Georgian QWERTY keyboard mapping used for older fonts
    qwerty: [
        "a",
        "b",
        "g",
        "d",
        "e",
        "v",
        "z",
        "T",
        "i",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "J",
        "r",
        "s",
        "t",
        "u",
        "f",
        "q",
        "R",
        "y",
        "S",
        "C",
        "c",
        "Z",
        "w",
        "W",
        "x",
        "j",
        "h",
        "E",
        "I",
        "V",
        "X",
        "H",
        "F",
        "D",
        "Y",
        "G",
        "L",
        ">",
        "N",
        "<",
        "{",
        "}", 
    ],
    // Numeric values
    numeric: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "9",
        "10",
        "20",
        "30",
        "40",
        "50",
        "70",
        "80",
        "90",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "1000",
        "2000",
        "3000",
        "4000",
        "5000",
        "6000",
        "8000",
        "9000",
        "8",
        "60",
        "400",
        "7000",
        "10000",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", 
    ]
};
data.start = {
    mkhedruli: 4304,
    mtavruli: 7312,
    asomtavruli: 4256,
    nuskhuri: 11520,
    latin: 97
};
data.regex = {
    mkhedruli: /[ა-ჰ]/,
    mtavruli: /[Ა-Ჰ]/,
    asomtavruli: /[Ⴀ-Ⴠ]/,
    nuskhuri: /[ⴀ-ⴠ]/,
    latin: /[a-zA-Z]/,
    cyrillic: /[А-Яа-я]/
};
/* Frequencies for (for Vefxistyaosani)
- words - 40989
- dot - 1878
- comma - 8479
- exclamation - 588
- question - 286
*/ data.frequency = {
    general: {
        '.': 0.0458171705,
        ',': 0.206860377,
        '!': 0.0143453122,
        '?': 0.00697748176
    },
    summed: [
        [
            '?',
            0.00697748176
        ],
        [
            '!',
            0.02132279396
        ],
        [
            '.',
            0.06713996445
        ],
        [
            ',',
            0.27400034145
        ]
    ]
};
// 100 random words generated using char-rnn 
data.vefxwords = [
    'გამიშვშეს',
    'მართალიპი',
    'შემომოცივე',
    'ვუხვა',
    'გავლსობა',
    'განდევანგაა',
    'მოასეხეს',
    'აქამდსაგებენ',
    'შვენინე',
    'უგანდეგო',
    'ქანულკულნი',
    'გემრუფენ',
    'ვეღათ',
    'მივისცა',
    'მუკამდის',
    'მივიმოწუქალსა',
    'მზლოს',
    'მოვლეხვე',
    'ვიმაქებდა',
    'ტატრესტინი',
    'მოითქოკა',
    'მდაგებენ',
    'ვიმცე',
    'სევა',
    'სათინესნი',
    'სადგმო',
    'გასჩვადეთ',
    'მესმანცა',
    'მივსცავე',
    'წეითო',
    'ძვილნი',
    'გამიზრიან',
    'დავათქვენო',
    'ზიცი',
    'მისცედი',
    'მონებანი',
    'დანამრისა',
    'სრცოტი',
    'ჰქონთავისთან',
    'მბრძენია',
    'წახსილთა',
    'მიხსენით',
    'სევნა',
    'გარდუკვრიდდა',
    'მიდამოდეს',
    'სიპყრო',
    'შემწოვლისა',
    'მამდიჰხლეან',
    'ბრჭნია',
    'დანენატანნი',
    'უკრთებოდემნი',
    'იციცოდა',
    'სამატა',
    'უფრნა',
    'გაეგარნების',
    'დავეჯარენა',
    'მტემურსა',
    'მშვენოდენო',
    'გიმძიმნო',
    'სამვზინო',
    'მოვლოცთა',
    'გიშვილა',
    'დაამჭებინ',
    'მითხროს',
    'მჟავალია',
    'მღურა',
    'ღინდეს',
    'მოაგხება',
    'გავიცეცხლი',
    'ტირსლით',
    'გავწყრეტა',
    'მყივნენ',
    'ქაფინს',
    'ბანგსა',
    'შემოხანა',
    'შემოვსჭვრეტით',
    'ამოვჰღერთო',
    'მოცადია',
    'მოეხვიდეს',
    'თქმია',
    'აღვია',
    'ვლამს',
    'მოხდიანები',
    'გორსვლითა',
    'გვთქვას',
    'გაუზადა',
    'დაბითქის',
    'ანვინა',
    'შრიდონი',
    'გავწიდნია',
    'ალვითანი',
    'მონიო',
    'სიტირენ',
    'გიშიხარნი',
    'დამიფემი',
    'მეგრეცა',
    'ფითჯი',
    'მსდევარსა',
    'განაზანდა',
    'საქმინ', 
];
data.fnames = [
    'თავან',
    'ელიკონ',
    'კანტლიონ',
    'გველე',
    'ლადიან',
    'ლოტინე',
    'გიოლგვი',
    'გარსა',
    'თედა',
    'მეზნან',
    'მარტა',
    'აურაზგრ',
    'მადრა',
    'გიოგილი',
    'სონიკელიზანი',
    'ასსანო',
    'ნიგოლიტი',
    'ავაკვან',
    'მონს',
    'ნადრინ',
    'ნიფოლ',
    'ელიკორ',
    'დამას',
    'გიმრი',
    'ობარხი',
    'გამონ',
    'ონეს',
    'ზიხტინე',
    'იოკელ',
    'სატდა',
    'პარა',
    'იანეზ',
    'ზინა',
    'რანგი',
    'იანგორ',
    'აბსინე',
    'ლენტან',
    'ზისტიკობ',
    'ნიგოლო',
    'დატითნი',
    'მანთა',
    'არგიქ',
    'ზიკო',
    'ერლე',
    'იანე',
    'მევრენ',
    'ალტისა',
    'მარდია',
    'სისელ',
    'ხეისა',
    'ელუან',
    'დელო',
    'იეკლებ',
    'გუჩილი',
    'ტამა',
    'ნოკგოლ',
    'იაკისე',
    'დადო',
    'ართემრას',
    'ანაიკობე',
    'გტიტ',
    'თახსან',
    'ზანა',
    'ნუდო',
    'გიოდა',
    'ისსლიკონ',
    'ალსან',
    'რამოლე',
    'გუმან',
    'ნურმგინ',
    'თომითანი',
    'დევანე',
    'ელედეინ',
    'გიმოტ',
    'არარ',
    'ორმონ',
    'ნედრი',
    'დიმო',
    'ხოთიანეი',
    'გივა',
    'ნანტრე',
    'გიმოლ',
    'დოსონ',
    'იკანენ',
    'იკქორიზე',
    'გილტორგ',
    'დეტონ',
    'ერდეა',
    'ირეგლიზ',
    'რიდელუდან',
    'თოკან',
    'იანებენტიანა',
    'სიბო',
    'გიორტინ',
    'ნიკილან',
    'ელაკონ',
    'გიდრაბ',
    'ლეცთეტანტენდერიბ',
    'დამერ',
    'იეგო', 
];
data.lnames = [
    'მახადენია',
    'ბსელრია',
    'ქავია',
    'კორეკია',
    'მარდია',
    'ბარდიონია',
    'გვიპიანდია',
    'ერთელია',
    'ნთხაია',
    'თედია',
    'ბოხაია',
    'ბარია',
    'ჭარტინია',
    'არპანია',
    'ჩურია',
    'მორცაწაზია',
    'არმელია',
    'მირბარია',
    'ჭველაქია',
    'ქარითია',
    'გართელია',
    'იანია',
    'დვანტონეიანია',
    'პუჩია',
    'დატილია',
    'კანია',
    'ვარდსვალია',
    'ყორთელია',
    'არდოლია',
    'რიკსქაშვილი',
    'გამექონთეშვილი',
    'ლუჩაშვილი',
    'მარდაშვილი',
    'პაბიშვილი',
    'არბერეშვილი',
    'ფოსურიშვილი',
    'ვაწოშვილი',
    'ჩრილიაშვილი',
    'ტიმაშვილი',
    'მავანიშვილი',
    'მადსიშვილი',
    'რედელიშვილი',
    'თეთაშვილი',
    'გარავაშვილი',
    'დარახაშვილი',
    'ბარჭამიშვილი',
    'ბარახაშვილი',
    'ანღელიშვილი',
    'მებაშვილი',
    'სურეჯიშვილი',
    'აკბთაკიშვილი',
    'ტუსონიშვილი',
    'ტოდერაშვილი',
    'ზაბხასიშვილი',
    'ქურაბერინიშვილი',
    'ებვეკაშვილი',
    'ერდითაშვილი',
    'ურბელიშვილი',
    'მენრმაშვილი',
    'ჯვილოძე',
    'ბადიაძე',
    'შვირიძე',
    'სასანაძე',
    'გიმაანიძე',
    'გვამავიძე',
    'არმემიძსძე',
    'ბარაძე',
    'აბეანიძე',
    'ოვონიძე',
    'ლამაშვიძე',
    'ობთახურაძე',
    'კერეძე',
    'ფვერიძე',
    'მაგიძე',
    'კადიაშიძე',
    'გამსანიძე',
    'მერტინიძე',
    'ბემეელიძე',
    'ტოხიძე',
    'ჭარატიძე',
    'ბადოსელი',
    'ვარისელი',
    'სირხელი',
    'სორხელი',
    'მარდელი',
    'გაშვითელი',
    'კოთაველი',
    'ოსთმინელი',
    'ერისელი',
    'ზთერტელი',
    'ხამიკელი',
    'მიბაძეშიელი',
    'იკთელი',
    'გთციტაბელი',
    'ასიცელი',
    'ობაიჭელი',
    'ლენთელი',
    'მემჩათერინონგბანინიძე',
    'ამედვაქსიკოგეიშვირი',
    'მორჟვონანდიშვილი', 
];
exports.default = data;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eDhIa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkForAliases", ()=>checkForAliases
);
parcelHelpers.export(exports, "checkForDirection", ()=>checkForDirection
);
parcelHelpers.export(exports, "isUnsupported", ()=>isUnsupported
);
parcelHelpers.export(exports, "isBicameral", ()=>isBicameral
);
parcelHelpers.export(exports, "toUpperCase", ()=>toUpperCase
);
parcelHelpers.export(exports, "detectAlphabet", ()=>detectAlphabet
);
parcelHelpers.export(exports, "classifyText", ()=>classifyText
);
parcelHelpers.export(exports, "cca", ()=>cca
);
parcelHelpers.export(exports, "fcc", ()=>fcc
);
parcelHelpers.export(exports, "isSame", ()=>isSame
);
var _dataMjs = require("./data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
const checkForAliases = (dir)=>{
    var aliases = {
        მხედრული: "mkhedruli",
        ასომთავრული: "asomtavruli",
        ნუსხური: "nuskhuri",
        მთავრული: "mtavruli",
        ხუცური: "khutsuri",
        შანიძისეული: "shanidziseuli",
        ტფილელისეული: "tfileliseuli",
        ჰომოგლიფი: "homoglyph",
        ფონეტიკური: "phonetic",
        ლათინური: "qwerty",
        კირილიცა: "cyrillic",
        ბერძნული: "greek",
        სომხური: "armenian",
        ნაციონალური: "national",
        ქვერთი: "qwerty",
        ზოგადი: "common",
        ტრანსკრიფცია: "common",
        ისო: "iso_9984",
        ბგნ: "bgn"
    };
    Object.keys(aliases).forEach(function(key) {
        if (key == dir.from) dir.from = aliases[key];
        if (key == dir.to) dir.to = aliases[key];
    });
};
const checkForDirection = (dir)=>{
    let permitted_from = [
        "mkhedruli",
        "asomtavruli",
        "nuskhuri",
        "mtavruli",
        "qwerty", 
    ];
    let permitted_to = [];
    if (permitted_from.indexOf(dir.from) == -1) throw `Text conversion from '${dir.from}' is not supported.`;
// if (permitted_to.indexOf(dir.to) == -1)
//     throw `Text conversion to '${dir.to}' is not supported.`;
};
const isUnsupported = (str)=>{
    return [
        _dataMjsDefault.default.regex.cyrillic.test(str)
    ].some((testResult)=>testResult == true
    );
};
const isBicameral = (to)=>{
    return to == "tfileliseuli" || to == "shanidziseuli" || to == "khutsuri";
};
String.prototype.setCharAt = function(where, what, offset) {
    offset = offset || 0;
    if (where > this.length - 1) return this;
    return this.substr(0, where) + what + this.substr(where + what.length + offset);
};
const toUpperCase = (word, from, to)=>{
    let char = _dataMjsDefault.default.alphabets[to][_dataMjsDefault.default.alphabets[from].indexOf(word[0])];
    char = char == undefined ? word[0] : char;
    return word.setCharAt(0, char);
};
const detectAlphabet = (str, idx)=>{
    if (idx < 0) return "qwerty";
    if (_dataMjsDefault.default.regex.mkhedruli.test(str[idx])) return "mkhedruli";
    if (_dataMjsDefault.default.regex.latin.test(str[idx])) return "qwerty";
    if (_dataMjsDefault.default.regex.asomtavruli.test(str[idx])) return "asomtavruli";
    if (_dataMjsDefault.default.regex.mtavruli.test(str[idx])) return "mtavruli";
    if (_dataMjsDefault.default.regex.nuskhuri.test(str[idx])) return "nuskhuri";
    return detectAlphabet(str, idx - 1);
};
const classifyText = (str)=>{
    /* MATCHES ALPHABETS [Mkhedruli, Mtavruli, Asomtavruli, Nuskhuri, Latin, Cyrillic] */ let vector = [
        _dataMjsDefault.default.regex.mkhedruli.test(str),
        _dataMjsDefault.default.regex.mtavruli.test(str),
        _dataMjsDefault.default.regex.asomtavruli.test(str),
        _dataMjsDefault.default.regex.nuskhuri.test(str),
        _dataMjsDefault.default.regex.latin.test(str),
        _dataMjsDefault.default.regex.cyrillic.test(str), 
    ];
    // Georgian alphabets
    if (isSame(vector, [
        true,
        false,
        false,
        false,
        false,
        false
    ])) return "mkhedruli";
    if (isSame(vector, [
        false,
        true,
        false,
        false,
        false,
        false
    ])) return "mtavruli";
    if (isSame(vector, [
        false,
        false,
        true,
        false,
        false,
        false
    ])) return "asomtavruli";
    if (isSame(vector, [
        false,
        false,
        false,
        true,
        false,
        false
    ])) return "nuskhuri";
    // Georgian bicameral writings
    if (isSame(vector, [
        true,
        true,
        false,
        false,
        false,
        false
    ])) return "tfileliseuli";
    if (isSame(vector, [
        true,
        false,
        true,
        false,
        false,
        false
    ])) return "shanidziseuli";
    if (isSame(vector, [
        false,
        false,
        true,
        true,
        false,
        false
    ])) return "khutsuri";
    // Non-Georgian alphabets
    if (isSame(vector, [
        false,
        false,
        false,
        false,
        true,
        false
    ])) return "latin";
    if (isSame(vector, [
        false,
        false,
        false,
        false,
        false,
        true
    ])) return "cyrillic";
    return vector;
};
const cca = (char)=>char.charCodeAt(0)
;
const fcc = (code)=>String.fromCharCode(code)
;
const isSame = (b1, b2)=>{
    for(let i = 0, len = b1.length; i < len; i++){
        if (b1[i] != b2[i]) return false;
    }
    return true;
};
exports.default = {
    checkForAliases,
    checkForDirection,
    isUnsupported,
    isBicameral,
    toUpperCase,
    detectAlphabet,
    classifyText,
    cca,
    fcc,
    isSame
};

},{"./data.mjs":"7ChY7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1btpQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataMjs = require("./data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
const freqs = _dataMjsDefault.default.frequency.summed;
var dataset = _dataMjsDefault.default.vefxwords;
const loadWordlist = (wordlist)=>{
    dataset = wordlist;
};
const sentences1 = (nwords)=>{
    return createSentences(createWords(nwords));
};
const paragraphs1 = (nwords, npar, newline = "\n\n")=>{
    let paragraphs = "";
    for(let i = 0; i < npar; i++)paragraphs += createSentences(createWords(nwords)) + newline;
    return paragraphs;
};
const createSentences = (words)=>{
    let sentences = "";
    for(let i = 0; i < words.length; i++)sentences += words[i] + randomMark();
    sentences = sentences.trim();
    sentences = sentences.setCharAt(sentences.length - 1, '.', 1);
    return sentences;
};
const names = (nnames)=>{
    let results = [];
    for(let i = 0; i < nnames; i++)results.push(randomFirstName() + ' ' + randomLastName());
    return results;
};
const randomFirstName = ()=>{
    return _dataMjsDefault.default.fnames[randomNumber(0, _dataMjsDefault.default.fnames.length)];
};
const randomLastName = ()=>{
    return _dataMjsDefault.default.lnames[randomNumber(0, _dataMjsDefault.default.lnames.length)];
};
String.prototype.setCharAt = function(where, what, offset) {
    offset = offset || 0;
    if (where > this.length - 1) return this;
    return this.substr(0, where) + what + this.substr(where + what.length + offset);
};
const randomMark = ()=>{
    let r = Math.random();
    for(let i = 0; i < freqs.length; i++){
        if (r < freqs[i][1]) return freqs[i][0] + ' ';
    }
    return ' ';
};
const randomWord = ()=>{
    return dataset[randomNumber(0, dataset.length)];
};
const createWords = (nwords)=>{
    let words = [];
    for(let i = 0; i < nwords; i++)words.push(randomWord());
    return words;
};
// Random number [min, max)
const randomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min) + min);
};
const $ = {
    randomFirstName,
    randomLastName,
    randomWord
};
exports.default = {
    sentences: sentences1,
    paragraphs: paragraphs1,
    loadWordlist,
    names,
    $
};

},{"./data.mjs":"7ChY7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"77zQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const frequency = (text, miss = "[ა-ჰᲐ-ᲰႠ-Ⴠⴀ-ⴠa-zA-ZА-Яа-я]")=>{
    let splitted = text.toUpperCase().split('');
    let length = splitted.length;
    let table = {
    };
    let r = new RegExp(miss);
    for(let i = 0; i < length; i++){
        if (!r.test(splitted[i])) continue;
        if (!table[splitted[i]]) table[splitted[i]] = 1;
        else table[splitted[i]]++;
    }
    for(let key in table)table[key] /= length;
    return table;
};
const count = (text, miss = "[ა-ჰᲐ-ᲰႠ-Ⴠⴀ-ⴠa-zA-ZА-Яа-я]")=>{
    let splitted = text.toUpperCase().split('');
    let length = splitted.length;
    let table = {
    };
    let r = new RegExp(miss);
    for(let i = 0; i < length; i++){
        if (!r.test(splitted[i])) continue;
        if (!table[splitted[i]]) table[splitted[i]] = 1;
        else table[splitted[i]]++;
    }
    return table;
};
const friedman = (text, miss = "[ა-ჰᲐ-ᲰႠ-Ⴠⴀ-ⴠa-zA-ZА-Яа-я]")=>{
    let table = count(text, miss);
    let sum = 0;
    let total = 0;
    for(let key in table){
        sum += table[key] * (table[key] - 1);
        total += table[key];
    }
    return total > 1 ? sum / (total * (total - 1)) : 0;
};
exports.default = {
    friedman,
    frequency,
    count
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["5DYht","5HwUs"], "5HwUs", "parcelRequire729f")

//# sourceMappingURL=index.1a68946a.js.map
