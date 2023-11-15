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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"fCtjV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "471b2038194d643e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
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
    let inputText = "\u10D2\u10D0\u10DB\u10D0\u10E0\u10EF\u10DD\u10D1\u10D0";
    if (inputArea.value != "") inputText = inputArea.value;
    let scripts = Object.keys((0, _anbaniDefault.default).data.alphabets).concat([
        "khutsuri",
        "shanidziseuli",
        "tfileliseuli"
    ]);
    let georgian = (0, _anbaniDefault.default).core.interpret(inputText, "mkhedruli");
    scripts.forEach((script)=>{
        document.querySelector(`#${script}Btn`).innerHTML = (0, _anbaniDefault.default).core.convert(georgian, "mkhedruli", script);
    });
}
function copyWithAPI(e) {
    let content = e.target.innerHTML;
    navigator.clipboard.writeText(content).catch((e)=>{
        console.log("\u10D0\u10E1\u10D4 \u10D5\u10D4\u10E0 \u10D2\u10D0\u10D5\u10E4\u10E0\u10D8\u10DC\u10D3\u10D4\u10D1\u10D8\u10D7", e);
    });
}
function copyWithExec(e) {
    let content = e.target.innerHTML;
    const area = document.createElement("textarea");
    document.body.appendChild(area);
    area.value = content;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
}
function copy(e) {
    if (navigator.clipboard) copyWithExec(e);
    else copyWithExec(e);
    debugMsg("\u10E2\u10D4\u10E5\u10E1\u10E2\u10D8 \u10D9\u10DD\u10DE\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0 \u10FB " + e.target.innerHTML.slice(0, 30));
}
window.addEventListener("DOMContentLoaded", (event)=>{
    window.copy = copy;
    window.anbani = (0, _anbaniDefault.default);
    inputArea = document.querySelector("#inputArea");
    debugEl = document.querySelector("#debug");
    inputArea.addEventListener("input", inputListener);
});

},{"anbani":"cL7lt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cL7lt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "core", ()=>(0, _coreMjsDefault.default));
parcelHelpers.export(exports, "lorem", ()=>(0, _loremMjsDefault.default));
parcelHelpers.export(exports, "toolkit", ()=>(0, _toolkitMjsDefault.default));
parcelHelpers.export(exports, "data", ()=>(0, _dataMjsDefault.default));
parcelHelpers.export(exports, "utils", ()=>(0, _utilsMjsDefault.default));
parcelHelpers.export(exports, "ab", ()=>ab);
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
(0, _coreMjsDefault.default).$ = {
    classifyText: (0, _utilsMjsDefault.default).classifyText
};
let scripts = Object.keys((0, _dataMjsDefault.default).alphabets).slice(0, 4).concat([
    "khutsuri",
    "shanidziseuli",
    "tfileliseuli",
    "anbanismtavruli"
]).concat(Object.keys((0, _dataMjsDefault.default).alphabets).slice(4));
// Convenience module 
let ab = {
    letters: {
        mkhedruli: (0, _dataMjsDefault.default).alphabets.mkhedruli.join(""),
        asomtavruli: (0, _dataMjsDefault.default).alphabets.asomtavruli.join(""),
        nuskhuri: (0, _dataMjsDefault.default).alphabets.nuskhuri.join(""),
        mtavruli: (0, _dataMjsDefault.default).alphabets.mtavruli.join("")
    },
    keys: scripts,
    caps: (text)=>(0, _coreMjsDefault.default).convert(text, "mkhedruli", "mtavruli"),
    bicam: (text)=>(0, _coreMjsDefault.default).convert(text, "mkhedruli", "shanidziseuli"),
    bicaps: (text)=>(0, _coreMjsDefault.default).convert(text, "mkhedruli", "anbanismtavruli")
};
// Abstract anbani
const anbani = {
    core: (0, _coreMjsDefault.default),
    lorem: (0, _loremMjsDefault.default),
    toolkit: (0, _toolkitMjsDefault.default),
    data: (0, _dataMjsDefault.default),
    utils: (0, _utilsMjsDefault.default),
    ab
};
exports.default = anbani;

},{"./lib/core.mjs":"6TXHd","./lib/lorem.mjs":"avRLe","./lib/toolkit.mjs":"gPc38","./lib/data.mjs":"k1LU2","./lib/utils.mjs":"jptLJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TXHd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convert", ()=>convert);
parcelHelpers.export(exports, "interpret", ()=>interpret);
parcelHelpers.export(exports, "convertUnicameral", ()=>convertUnicameral);
parcelHelpers.export(exports, "convertBicameral", ()=>convertBicameral);
parcelHelpers.export(exports, "safeConvert", ()=>safeConvert);
var _dataMjs = require("./data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
var _utilsMjs = require("./utils.mjs");
const convert = (str, from, to)=>{
    let dir = {
        from,
        to
    };
    (0, _utilsMjs.checkForAliases)(dir);
    (0, _utilsMjs.checkForDirection)(dir);
    return safeConvert(str, dir.from, dir.to);
};
const interpret = (str, to)=>{
    let dir = {
        to
    };
    (0, _utilsMjs.checkForAliases)(dir);
    if (str != null) {
        if ((0, _utilsMjs.isBicameral)(dir.to)) return convertBicameral(str, (0, _utilsMjs.detectAlphabet)(str, str.length - 1), dir.to);
        else return convertUnicameral(str, (0, _utilsMjs.detectAlphabet)(str, str.length - 1), dir.to);
    }
};
const convertUnicameral = (str, from, to)=>{
    let converted = "";
    for(let i = 0, len = str.length; i < len; i++){
        let key = (0, _dataMjsDefault.default).alphabets[to][(0, _dataMjsDefault.default).alphabets[from].indexOf(str[i])];
        converted += key === undefined ? str[i] : key;
    }
    return converted;
};
const convertBicameral = (str, from, to)=>{
    const rules = {
        "anbanismtavruli": {
            upper: "asomtavruli",
            lower: "mtavruli"
        },
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
        let key = (0, _dataMjsDefault.default).alphabets[lowerScript][(0, _dataMjsDefault.default).alphabets[from].indexOf(str[i])];
        converted += key === undefined ? str[i] : key;
    }
    // First Letter
    converted = (0, _utilsMjs.toUpperCase)(converted, lowerScript, upperScript);
    // Letters after punctuation 
    let matched = converted.match(/[?.!]\s+[A-zႠ-ჰⴀ-ⴠᲐ-Ჰ0-9]/g);
    if (matched != null) for(let i = 0; i < matched.length; i++)converted = converted.setCharAt(converted.indexOf(matched[i]), matched[i].substring(0, matched[i].length - 1).concat((0, _utilsMjs.toUpperCase)(matched[i][matched[i].length - 1], lowerScript, upperScript)));
    // Letters after special character ' apostrophe
    matched = converted.match(/[Ⴀ-ჰⴀ-ⴠᲐ-Ჰ]\'/g);
    if (matched != null) for(let i = 0; i < matched.length; i++)converted = converted.setCharAt(converted.indexOf(matched[i]), (0, _utilsMjs.toUpperCase)(matched[i][0], lowerScript, upperScript), 1);
    return converted;
};
const safeConvert = (str, from, to)=>{
    if (str != null) {
        if (!(0, _utilsMjs.isBicameral)(to)) return convertUnicameral(str, from, to);
        else return convertBicameral(str, from, to);
    }
};
exports.default = {
    convert,
    interpret,
    $: (0, _utilsMjs.classifyText)
};

},{"./data.mjs":"k1LU2","./utils.mjs":"jptLJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1LU2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    alphabets: {
        // Modern unicameral Georgian script developed in 10th century 
        // ან ბან გან დონ ენ ვინ ზენ თან ინ კან ლას მან ნარ ონ პარ ჟან რაე სან ტარ უნ ფარ ქან ღან ყარ შინ ჩინ ცან ძილ წილ ჭარ ხან ჯან ჰაე
        names: [
            "\u10D0\u10DC",
            "\u10D1\u10D0\u10DC",
            "\u10D2\u10D0\u10DC",
            "\u10D3\u10DD\u10DC",
            "\u10D4\u10DC",
            "\u10D5\u10D8\u10DC",
            "\u10D6\u10D4\u10DC",
            "\u10D7\u10D0\u10DC",
            "\u10D8\u10DC",
            "\u10D9\u10D0\u10DC",
            "\u10DA\u10D0\u10E1",
            "\u10DB\u10D0\u10DC",
            "\u10DC\u10D0\u10E0",
            "\u10DD\u10DC",
            "\u10DE\u10D0\u10E0",
            "\u10DF\u10D0\u10DC",
            "\u10E0\u10D0\u10D4",
            "\u10E1\u10D0\u10DC",
            "\u10E2\u10D0\u10E0",
            "\u10E3\u10DC",
            "\u10E4\u10D0\u10E0",
            "\u10E5\u10D0\u10DC",
            "\u10E6\u10D0\u10DC",
            "\u10E7\u10D0\u10E0",
            "\u10E8\u10D8\u10DC",
            "\u10E9\u10D8\u10DC",
            "\u10EA\u10D0\u10DC",
            "\u10EB\u10D8\u10DA",
            "\u10EC\u10D8\u10DA",
            "\u10ED\u10D0\u10E0",
            "\u10EE\u10D0\u10DC",
            "\u10EF\u10D0\u10DC",
            "\u10F0\u10D0\u10D4",
            "\u10D4\u10F2",
            "\u10F2\u10D4",
            "\u10F3\u10D4",
            "\u10F4\u10D0\u10E0",
            "\u10F0\u10DD\u10D4",
            "\u10F6\u10D8",
            "\u10F7\u10DC",
            "\u10F8\u10D8\u10DC",
            "\u10D2\u10D0\u10DC \u10D0\u10DB\u10DD\u10E2\u10E0\u10D8\u10D0\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8",
            "\u10D0\u10D8\u10DC \u10D0\u10DB\u10DD\u10E2\u10E0\u10D8\u10D0\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8",
            "\u10D2\u10D0\u10DB\u10E7\u10DD\u10E4\u10D8",
            "\u10DC\u10D0\u10E0 \u10DB\u10DD\u10D3\u10D8\u10E4\u10D8\u10D9\u10D0\u10E2\u10DD\u10E0\u10D8",
            "\u10D0\u10D4\u10DC",
            "\u10E1\u10D8\u10DB\u10D0\u10D2\u10E0\u10D8\u10E1 \u10DC\u10D8\u10E8\u10D0\u10DC\u10D8",
            "\u10DA\u10D0\u10D1\u10D8\u10D0\u10DA\u10D8\u10D6\u10D0\u10EA\u10D8\u10D8\u10E1 \u10DC\u10D8\u10E8\u10D0\u10DC\u10D8",
            "\u10D0-\u10E3\u10DB\u10DA\u10D0\u10E3\u10E2\u10D8",
            "\u10D0-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC\u10D8",
            "\u10D0-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC-\u10E3\u10DB\u10DA\u10D0\u10E3\u10E2\u10D8",
            "\u10D4-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC\u10D8",
            "\u10D8-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC\u10D8",
            "\u10DD-\u10E3\u10DB\u10DA\u10D0\u10E3\u10E2\u10D8",
            "\u10DD-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC\u10D8",
            "\u10DD-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC-\u10E3\u10DB\u10DA\u10D0\u10E3\u10E2\u10D8",
            "\u10E3-\u10E3\u10DB\u10DA\u10D0\u10E3\u10E2\u10D8",
            "\u10E3-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC\u10D8",
            "\u10E3-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC-\u10E3\u10DB\u10DA\u10D0\u10E3\u10E2\u10D8",
            "\u10E3-\u10D1\u10E0\u10EF\u10D2\u10E3",
            "\u10F7\u10DC-\u10DB\u10D0\u10D9\u10E0\u10DD\u10DC\u10D8"
        ],
        // Modern unicameral Georgian script developed in 10th century 
        mkhedruli: [
            "\u10D0",
            "\u10D1",
            "\u10D2",
            "\u10D3",
            "\u10D4",
            "\u10D5",
            "\u10D6",
            "\u10D7",
            "\u10D8",
            "\u10D9",
            "\u10DA",
            "\u10DB",
            "\u10DC",
            "\u10DD",
            "\u10DE",
            "\u10DF",
            "\u10E0",
            "\u10E1",
            "\u10E2",
            "\u10E3",
            "\u10E4",
            "\u10E5",
            "\u10E6",
            "\u10E7",
            "\u10E8",
            "\u10E9",
            "\u10EA",
            "\u10EB",
            "\u10EC",
            "\u10ED",
            "\u10EE",
            "\u10EF",
            "\u10F0",
            "\u10F1",
            "\u10F2",
            "\u10F3",
            "\u10F4",
            "\u10F5",
            "\u10F6",
            "\u10F7",
            "\u10F8",
            "\u10F9",
            "\u10FA",
            "\u10FB",
            "\u10FC",
            "\u10FD",
            "\u10FE",
            "\u10FF",
            "\u10D0\u0308",
            "\u10D0\u0304",
            "\u10D0\u0304\u0308",
            "\u10D4\u0304",
            "\u10D8\u0304",
            "\u10DD\u0308",
            "\u10DD\u0304",
            "\u10DD\u0304\u0308",
            "\u10E3\u0308",
            "\u10E3\u0304",
            "\u10E3\u0304\u0308",
            "\u10E3\u0302",
            "\u10F7\u0304"
        ],
        // Modern unicameral derivative script of Mkhedruli only used for headlines in all-caps
        mtavruli: [
            "\u1C90",
            "\u1C91",
            "\u1C92",
            "\u1C93",
            "\u1C94",
            "\u1C95",
            "\u1C96",
            "\u1C97",
            "\u1C98",
            "\u1C99",
            "\u1C9A",
            "\u1C9B",
            "\u1C9C",
            "\u1C9D",
            "\u1C9E",
            "\u1C9F",
            "\u1CA0",
            "\u1CA1",
            "\u1CA2",
            "\u1CA3",
            "\u1CA4",
            "\u1CA5",
            "\u1CA6",
            "\u1CA7",
            "\u1CA8",
            "\u1CA9",
            "\u1CAA",
            "\u1CAB",
            "\u1CAC",
            "\u1CAD",
            "\u1CAE",
            "\u1CAF",
            "\u1CB0",
            "\u1CB1",
            "\u1CB2",
            "\u1CB3",
            "\u1CB4",
            "\u1CB5",
            "\u1CB6",
            "\u1CB7",
            "\u1CB8",
            "\u1CB9",
            "\u1CBA",
            "",
            "",
            "\u1CBD",
            "\u1CBE",
            "\u1CBF",
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
            ""
        ],
        // Original Georgian alphabet from 5th century
        asomtavruli: [
            "\u10A0",
            "\u10A1",
            "\u10A2",
            "\u10A3",
            "\u10A4",
            "\u10A5",
            "\u10A6",
            "\u10A7",
            "\u10A8",
            "\u10A9",
            "\u10AA",
            "\u10AB",
            "\u10AC",
            "\u10AD",
            "\u10AE",
            "\u10AF",
            "\u10B0",
            "\u10B1",
            "\u10B2",
            "\u10B3",
            "\u10B4",
            "\u10B5",
            "\u10B6",
            "\u10B7",
            "\u10B8",
            "\u10B9",
            "\u10BA",
            "\u10BB",
            "\u10BC",
            "\u10BD",
            "\u10BE",
            "\u10BF",
            "\u10C0",
            "\u10C1",
            "\u10C2",
            "\u10C3",
            "\u10C4",
            "\u10C5",
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
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        // Second script of Georgian alphabet first appearing in 9th century
        nuskhuri: [
            "\u2D00",
            "\u2D01",
            "\u2D02",
            "\u2D03",
            "\u2D04",
            "\u2D05",
            "\u2D06",
            "\u2D07",
            "\u2D08",
            "\u2D09",
            "\u2D0A",
            "\u2D0B",
            "\u2D0C",
            "\u2D0D",
            "\u2D0E",
            "\u2D0F",
            "\u2D10",
            "\u2D11",
            "\u2D12",
            "\u2D13",
            "\u2D14",
            "\u2D15",
            "\u2D16",
            "\u2D17",
            "\u2D18",
            "\u2D19",
            "\u2D1A",
            "\u2D1B",
            "\u2D1C",
            "\u2D1D",
            "\u2D1E",
            "\u2D1F",
            "\u2D20",
            "\u2D21",
            "\u2D22",
            "\u2D23",
            "\u2D24",
            "\u2D25",
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
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        // Collection of letters from all around the world that resemble Mkhedruli
        homoglyph: [
            "\u2D22",
            "\u0571",
            "\u0B0C",
            "\u1566",
            "\u1045",
            "\u19C6",
            "\u0B6B",
            "\u198E",
            "\u200E\u19B5",
            "\u0AE9",
            "\u2D1D",
            "\u2D0B",
            "\u099A",
            "\u1982",
            "\u1CB4",
            "\u0AB3",
            "\u199D",
            "\u1491",
            "\u0B95\u0BC1",
            "\u19D7",
            "\u1980",
            "\u2D15",
            "\u2D1C",
            "\u19C7",
            "\uD804\uDDE4",
            "\u2D0C",
            "\u0A89",
            "\u147B",
            "\u10EC",
            "\u10ED",
            "\u1579",
            "\u2D1F",
            "\u1CB1",
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
            ""
        ],
        // Zalgo crazy text using diacritics
        // zalgo : [],
        // International Phonetic Association (IPA) 
        phonetic: [
            "\u0251",
            "b",
            "g",
            "d",
            "\u025B",
            "v",
            "z",
            "t\u02B0",
            "i",
            "k'",
            "l",
            "m",
            "n",
            "\u0254",
            "p'",
            "\u0292",
            "r",
            "s",
            "t'",
            "u",
            "p\u02B0",
            "k\u02B0",
            "\u0281",
            "q'",
            "\u0283",
            "t\u0361\u0283",
            "t\u0361s",
            "d\u0361z",
            "t\u0361s\u02BC",
            "t\u0361\u0283\u02BC",
            "\u03C7",
            "d\u0361\u0292",
            "h",
            "e\u026A",
            "j",
            "w",
            "q\u02B0",
            "o\u02D0",
            "f",
            "\u0259",
            "\u0294",
            "\u0262",
            "\u0295",
            "",
            "\u25CC\u0303",
            "\u0259",
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
            ""
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
            ""
        ],
        // Georgian alphabet cyrillization 
        cyrillic: [
            "\u0430",
            "\u0431",
            "\u0433",
            "\u0434",
            "\u0435",
            "\u0432",
            "\u0437",
            "\u0442",
            "\u0438",
            "\u043A",
            "\u043B",
            "\u043C",
            "\u043D",
            "\u043E",
            "\u043F",
            "\u0436",
            "\u0440",
            "\u0441",
            "\u0442",
            "\u0443",
            "\u0444",
            "\u043A",
            "\u0433",
            "\u043A",
            "\u0448",
            "\u0447",
            "\u0446",
            "\u0434\u0437",
            "\u0442\u0446",
            "\u0442\u0447",
            "\u0445",
            "\u0434\u0436",
            "\u0445",
            "\u0435",
            "\u0439",
            "\u0443\u0439",
            "\u0445",
            "\u0445\u043E",
            "\u0444",
            "\u043E\u0430",
            "\u0445",
            "\u0433",
            "\u0440\u0433",
            "",
            "",
            "\u043E\u0430",
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
            ""
        ],
        // Georgian alphabet hellenization 
        greek: [
            "\u03B1",
            "\u03BC\u03C0",
            "\u03B3\u03B3",
            "\u03BD\u03C4",
            "\u03B5",
            "\u03B2",
            "\u03B6",
            "\u03C4",
            "\u03B7",
            "\u03BA",
            "\u03BB",
            "\u03BC",
            "\u03BD",
            "\u03BF",
            "\u03C0",
            "\u03B6\u0371",
            "\u03C1",
            "\u03C3",
            "\u03C4",
            "\u03BF\u03C5",
            "\u03C8",
            "\u03BA",
            "\u03B3",
            "\u03BA\u0371",
            "\u03C3\u0371",
            "\u03C4\u03C3",
            "\u03C4\u03C3",
            "\u03B4\u03B6",
            "\u03C4\u03C3",
            "\u03C4\u03C3\u0371",
            "\u03B3\u03C7",
            "\u03C4\u03B6",
            "\u0371",
            "\u03B5",
            "\u03B9",
            "\u03C5\u03B9",
            "\u03BA\u03C7",
            "\u0371\u03BF\u03B9",
            "\u03C6",
            "\u03BF\u03B1",
            "\u0371",
            "\u03B3",
            "\u03C1\u03B3",
            "",
            "",
            "\u03BF\u03B1",
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
            ""
        ],
        // Georgian alphabet armenianization 
        armenian: [
            "\u0561",
            "\u0562",
            "\u0563",
            "\u0564",
            "\u0567",
            "\u057E",
            "\u0566",
            "\u0569",
            "\u056B",
            "\u056F",
            "\u056C",
            "\u0574",
            "\u0576",
            "\u0585",
            "\u057A",
            "\u056A",
            "\u057C",
            "\u057D",
            "\u057F",
            "\u0578\u0582",
            "\u0583",
            "\u0584",
            "\u0572",
            "\u056F\u0570",
            "\u0577",
            "\u0579",
            "\u0581",
            "\u0571",
            "\u056E",
            "\u0573",
            "\u056D",
            "\u057B",
            "\u0570",
            "\u0567",
            "\u056B",
            "\u0578\u0582\u056B",
            "\u056D",
            "\u0570\u0585\u056B",
            "\u0586",
            "\u0568",
            "\u0570",
            "\u0572",
            "\u057C\u0572",
            "",
            "",
            "\u0568",
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
            ""
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
            "\u017E",
            "r",
            "s",
            "t",
            "u",
            "p'",
            "k'",
            "\u1E21",
            "q",
            "\u0161",
            "\u010D'",
            "c'",
            "j",
            "c",
            "\u010D",
            "x",
            "\u01F0",
            "h",
            "\u0113",
            "y",
            "w",
            "\u1E96'",
            "\u014D",
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
            ""
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
            ""
        ],
        // Iberiul-K’avk’asiuri enatmetsnierebis ts’elits’deuli [Annual of Ibero-Caucasian Linguistics] as shown in The World’s Writing Systems. Variant forms separated with a slash
        // ike : [],
        // American Library Association/Library of Congress.
        // ala_lc : [],
        // Kohanimeandmebaas (Place Names Database) of Eesti Keele Instituut (Institute of the Estonian Language) (http://www.eki.ee).
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
            ""
        ],
        // Thesaurus Indogermanischer Text- und Sprachmaterialien (http://titus.uni-frankfurt.de)
        titus: [
            "a",
            "b",
            "g",
            "d",
            "e",
            "v",
            "z",
            "t",
            "i",
            "\u1E33",
            "l",
            "m",
            "n",
            "o",
            "\u1E57",
            "\u017E",
            "r",
            "s",
            "\u1E6D",
            "u",
            "p",
            "k",
            "\u0121",
            "q\u0307",
            "\u0161",
            "\u010D",
            "c",
            "\u04E1",
            "c\u0323",
            "\u010D\u0323",
            "x",
            "\u01EF",
            "h",
            "\u0113",
            "y",
            "w",
            "q",
            "\u014D",
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
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
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
            ""
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
            ""
        ]
    },
    start: {
        mkhedruli: 4304,
        mtavruli: 7312,
        asomtavruli: 4256,
        nuskhuri: 11520,
        latin: 97
    },
    regex: {
        mkhedruli: /[ა-ჿ]/,
        mtavruli: /[Ა-Ჿ]/,
        asomtavruli: /[Ⴀ-Ⴥ]/,
        nuskhuri: /[ⴀ-ⴥ]/,
        latin: /[a-zA-Z]/,
        cyrillic: /[А-Яа-я]/
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"jptLJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkForAliases", ()=>checkForAliases);
parcelHelpers.export(exports, "checkForDirection", ()=>checkForDirection);
parcelHelpers.export(exports, "isUnsupported", ()=>isUnsupported);
parcelHelpers.export(exports, "isBicameral", ()=>isBicameral);
parcelHelpers.export(exports, "toUpperCase", ()=>toUpperCase);
parcelHelpers.export(exports, "detectAlphabet", ()=>detectAlphabet);
parcelHelpers.export(exports, "classifyText", ()=>classifyText);
parcelHelpers.export(exports, "cca", ()=>cca);
parcelHelpers.export(exports, "fcc", ()=>fcc);
parcelHelpers.export(exports, "isSame", ()=>isSame);
var _dataMjs = require("./data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
const checkForAliases = (dir)=>{
    var aliases = {
        "\u10DB\u10EE\u10D4\u10D3\u10E0\u10E3\u10DA\u10D8": "mkhedruli",
        "\u10D0\u10E1\u10DD\u10DB\u10D7\u10D0\u10D5\u10E0\u10E3\u10DA\u10D8": "asomtavruli",
        "\u10DC\u10E3\u10E1\u10EE\u10E3\u10E0\u10D8": "nuskhuri",
        "\u10DB\u10D7\u10D0\u10D5\u10E0\u10E3\u10DA\u10D8": "mtavruli",
        "\u10EE\u10E3\u10EA\u10E3\u10E0\u10D8": "khutsuri",
        "\u10E8\u10D0\u10DC\u10D8\u10EB\u10D8\u10E1\u10D4\u10E3\u10DA\u10D8": "shanidziseuli",
        "\u10E2\u10E4\u10D8\u10DA\u10D4\u10DA\u10D8\u10E1\u10D4\u10E3\u10DA\u10D8": "tfileliseuli",
        "\u10D0\u10DC\u10D1\u10D0\u10DC\u10D8\u10E1 \u10DB\u10D7\u10D0\u10D5\u10E0\u10E3\u10DA\u10D8": "anbanismtavruli",
        "\u10F0\u10DD\u10DB\u10DD\u10D2\u10DA\u10D8\u10E4\u10D8": "homoglyph",
        "\u10E4\u10DD\u10DC\u10D4\u10E2\u10D8\u10D9\u10E3\u10E0\u10D8": "phonetic",
        "\u10DA\u10D0\u10D7\u10D8\u10DC\u10E3\u10E0\u10D8": "qwerty",
        "\u10D9\u10D8\u10E0\u10D8\u10DA\u10D8\u10EA\u10D0": "cyrillic",
        "\u10D1\u10D4\u10E0\u10EB\u10DC\u10E3\u10DA\u10D8": "greek",
        "\u10E1\u10DD\u10DB\u10EE\u10E3\u10E0\u10D8": "armenian",
        "\u10DC\u10D0\u10EA\u10D8\u10DD\u10DC\u10D0\u10DA\u10E3\u10E0\u10D8": "national",
        "\u10E5\u10D5\u10D4\u10E0\u10D7\u10D8": "qwerty",
        "\u10D6\u10DD\u10D2\u10D0\u10D3\u10D8": "common",
        "\u10E2\u10E0\u10D0\u10DC\u10E1\u10D9\u10E0\u10D8\u10E4\u10EA\u10D8\u10D0": "common",
        "\u10D8\u10E1\u10DD": "iso_9984",
        "\u10D1\u10D2\u10DC": "bgn"
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
        "qwerty"
    ];
    let permitted_to = [];
    if (permitted_from.indexOf(dir.from) == -1) throw `Text conversion from '${dir.from}' is not supported.`;
// if (permitted_to.indexOf(dir.to) == -1)
//     throw `Text conversion to '${dir.to}' is not supported.`;
};
const isUnsupported = (str)=>{
    return [
        (0, _dataMjsDefault.default).regex.cyrillic.test(str)
    ].some((testResult)=>testResult == true);
};
const isBicameral = (to)=>{
    return to == "tfileliseuli" || to == "shanidziseuli" || to == "khutsuri" || to == "anbanismtavruli";
};
String.prototype.setCharAt = function(where, what, offset) {
    offset = offset || 0;
    if (where > this.length - 1) return this;
    return this.substring(0, where) + what + this.substring(where + what.length + offset);
};
const toUpperCase = (word, from, to)=>{
    let char = (0, _dataMjsDefault.default).alphabets[to][(0, _dataMjsDefault.default).alphabets[from].indexOf(word[0])];
    char = char == undefined ? word[0] : char;
    return word.setCharAt(0, char);
};
const detectAlphabet = (str, idx)=>{
    if (idx < 0) return "qwerty";
    if ((0, _dataMjsDefault.default).regex.mkhedruli.test(str[idx])) return "mkhedruli";
    if ((0, _dataMjsDefault.default).regex.latin.test(str[idx])) return "qwerty";
    if ((0, _dataMjsDefault.default).regex.asomtavruli.test(str[idx])) return "asomtavruli";
    if ((0, _dataMjsDefault.default).regex.mtavruli.test(str[idx])) return "mtavruli";
    if ((0, _dataMjsDefault.default).regex.nuskhuri.test(str[idx])) return "nuskhuri";
    return detectAlphabet(str, idx - 1);
};
const classifyText = (str)=>{
    /* MATCHES ALPHABETS [Mkhedruli, Mtavruli, Asomtavruli, Nuskhuri, Latin, Cyrillic] */ let vector = [
        (0, _dataMjsDefault.default).regex.mkhedruli.test(str),
        (0, _dataMjsDefault.default).regex.mtavruli.test(str),
        (0, _dataMjsDefault.default).regex.asomtavruli.test(str),
        (0, _dataMjsDefault.default).regex.nuskhuri.test(str),
        (0, _dataMjsDefault.default).regex.latin.test(str),
        (0, _dataMjsDefault.default).regex.cyrillic.test(str)
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
    if (isSame(vector, [
        false,
        true,
        true,
        false,
        false,
        false
    ])) return "anbanismtavruli";
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
const cca = (char)=>char.charCodeAt(0);
const fcc = (code)=>String.fromCharCode(code);
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

},{"./data.mjs":"k1LU2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avRLe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const data = {};
/* Frequencies for (for Vefxistyaosani)
- words - 40989
- dot - 1878
- comma - 8479
- exclamation - 588
- question - 286
*/ data.frequency = {
    general: {
        ".": 0.0458171705,
        ",": 0.206860377,
        "!": 0.0143453122,
        "?": 0.00697748176
    },
    summed: [
        [
            "?",
            0.00697748176
        ],
        [
            "!",
            0.02132279396
        ],
        [
            ".",
            0.06713996445
        ],
        [
            ",",
            0.27400034145
        ]
    ]
};
// 100 random words generated using char-rnn 
data.vefxwords = [
    "\u10D2\u10D0\u10DB\u10D8\u10E8\u10D5\u10E8\u10D4\u10E1",
    "\u10DB\u10D0\u10E0\u10D7\u10D0\u10DA\u10D8\u10DE\u10D8",
    "\u10E8\u10D4\u10DB\u10DD\u10DB\u10DD\u10EA\u10D8\u10D5\u10D4",
    "\u10D5\u10E3\u10EE\u10D5\u10D0",
    "\u10D2\u10D0\u10D5\u10DA\u10E1\u10DD\u10D1\u10D0",
    "\u10D2\u10D0\u10DC\u10D3\u10D4\u10D5\u10D0\u10DC\u10D2\u10D0\u10D0",
    "\u10DB\u10DD\u10D0\u10E1\u10D4\u10EE\u10D4\u10E1",
    "\u10D0\u10E5\u10D0\u10DB\u10D3\u10E1\u10D0\u10D2\u10D4\u10D1\u10D4\u10DC",
    "\u10E8\u10D5\u10D4\u10DC\u10D8\u10DC\u10D4",
    "\u10E3\u10D2\u10D0\u10DC\u10D3\u10D4\u10D2\u10DD",
    "\u10E5\u10D0\u10DC\u10E3\u10DA\u10D9\u10E3\u10DA\u10DC\u10D8",
    "\u10D2\u10D4\u10DB\u10E0\u10E3\u10E4\u10D4\u10DC",
    "\u10D5\u10D4\u10E6\u10D0\u10D7",
    "\u10DB\u10D8\u10D5\u10D8\u10E1\u10EA\u10D0",
    "\u10DB\u10E3\u10D9\u10D0\u10DB\u10D3\u10D8\u10E1",
    "\u10DB\u10D8\u10D5\u10D8\u10DB\u10DD\u10EC\u10E3\u10E5\u10D0\u10DA\u10E1\u10D0",
    "\u10DB\u10D6\u10DA\u10DD\u10E1",
    "\u10DB\u10DD\u10D5\u10DA\u10D4\u10EE\u10D5\u10D4",
    "\u10D5\u10D8\u10DB\u10D0\u10E5\u10D4\u10D1\u10D3\u10D0",
    "\u10E2\u10D0\u10E2\u10E0\u10D4\u10E1\u10E2\u10D8\u10DC\u10D8",
    "\u10DB\u10DD\u10D8\u10D7\u10E5\u10DD\u10D9\u10D0",
    "\u10DB\u10D3\u10D0\u10D2\u10D4\u10D1\u10D4\u10DC",
    "\u10D5\u10D8\u10DB\u10EA\u10D4",
    "\u10E1\u10D4\u10D5\u10D0",
    "\u10E1\u10D0\u10D7\u10D8\u10DC\u10D4\u10E1\u10DC\u10D8",
    "\u10E1\u10D0\u10D3\u10D2\u10DB\u10DD",
    "\u10D2\u10D0\u10E1\u10E9\u10D5\u10D0\u10D3\u10D4\u10D7",
    "\u10DB\u10D4\u10E1\u10DB\u10D0\u10DC\u10EA\u10D0",
    "\u10DB\u10D8\u10D5\u10E1\u10EA\u10D0\u10D5\u10D4",
    "\u10EC\u10D4\u10D8\u10D7\u10DD",
    "\u10EB\u10D5\u10D8\u10DA\u10DC\u10D8",
    "\u10D2\u10D0\u10DB\u10D8\u10D6\u10E0\u10D8\u10D0\u10DC",
    "\u10D3\u10D0\u10D5\u10D0\u10D7\u10E5\u10D5\u10D4\u10DC\u10DD",
    "\u10D6\u10D8\u10EA\u10D8",
    "\u10DB\u10D8\u10E1\u10EA\u10D4\u10D3\u10D8",
    "\u10DB\u10DD\u10DC\u10D4\u10D1\u10D0\u10DC\u10D8",
    "\u10D3\u10D0\u10DC\u10D0\u10DB\u10E0\u10D8\u10E1\u10D0",
    "\u10E1\u10E0\u10EA\u10DD\u10E2\u10D8",
    "\u10F0\u10E5\u10DD\u10DC\u10D7\u10D0\u10D5\u10D8\u10E1\u10D7\u10D0\u10DC",
    "\u10DB\u10D1\u10E0\u10EB\u10D4\u10DC\u10D8\u10D0",
    "\u10EC\u10D0\u10EE\u10E1\u10D8\u10DA\u10D7\u10D0",
    "\u10DB\u10D8\u10EE\u10E1\u10D4\u10DC\u10D8\u10D7",
    "\u10E1\u10D4\u10D5\u10DC\u10D0",
    "\u10D2\u10D0\u10E0\u10D3\u10E3\u10D9\u10D5\u10E0\u10D8\u10D3\u10D3\u10D0",
    "\u10DB\u10D8\u10D3\u10D0\u10DB\u10DD\u10D3\u10D4\u10E1",
    "\u10E1\u10D8\u10DE\u10E7\u10E0\u10DD",
    "\u10E8\u10D4\u10DB\u10EC\u10DD\u10D5\u10DA\u10D8\u10E1\u10D0",
    "\u10DB\u10D0\u10DB\u10D3\u10D8\u10F0\u10EE\u10DA\u10D4\u10D0\u10DC",
    "\u10D1\u10E0\u10ED\u10DC\u10D8\u10D0",
    "\u10D3\u10D0\u10DC\u10D4\u10DC\u10D0\u10E2\u10D0\u10DC\u10DC\u10D8",
    "\u10E3\u10D9\u10E0\u10D7\u10D4\u10D1\u10DD\u10D3\u10D4\u10DB\u10DC\u10D8",
    "\u10D8\u10EA\u10D8\u10EA\u10DD\u10D3\u10D0",
    "\u10E1\u10D0\u10DB\u10D0\u10E2\u10D0",
    "\u10E3\u10E4\u10E0\u10DC\u10D0",
    "\u10D2\u10D0\u10D4\u10D2\u10D0\u10E0\u10DC\u10D4\u10D1\u10D8\u10E1",
    "\u10D3\u10D0\u10D5\u10D4\u10EF\u10D0\u10E0\u10D4\u10DC\u10D0",
    "\u10DB\u10E2\u10D4\u10DB\u10E3\u10E0\u10E1\u10D0",
    "\u10DB\u10E8\u10D5\u10D4\u10DC\u10DD\u10D3\u10D4\u10DC\u10DD",
    "\u10D2\u10D8\u10DB\u10EB\u10D8\u10DB\u10DC\u10DD",
    "\u10E1\u10D0\u10DB\u10D5\u10D6\u10D8\u10DC\u10DD",
    "\u10DB\u10DD\u10D5\u10DA\u10DD\u10EA\u10D7\u10D0",
    "\u10D2\u10D8\u10E8\u10D5\u10D8\u10DA\u10D0",
    "\u10D3\u10D0\u10D0\u10DB\u10ED\u10D4\u10D1\u10D8\u10DC",
    "\u10DB\u10D8\u10D7\u10EE\u10E0\u10DD\u10E1",
    "\u10DB\u10DF\u10D0\u10D5\u10D0\u10DA\u10D8\u10D0",
    "\u10DB\u10E6\u10E3\u10E0\u10D0",
    "\u10E6\u10D8\u10DC\u10D3\u10D4\u10E1",
    "\u10DB\u10DD\u10D0\u10D2\u10EE\u10D4\u10D1\u10D0",
    "\u10D2\u10D0\u10D5\u10D8\u10EA\u10D4\u10EA\u10EE\u10DA\u10D8",
    "\u10E2\u10D8\u10E0\u10E1\u10DA\u10D8\u10D7",
    "\u10D2\u10D0\u10D5\u10EC\u10E7\u10E0\u10D4\u10E2\u10D0",
    "\u10DB\u10E7\u10D8\u10D5\u10DC\u10D4\u10DC",
    "\u10E5\u10D0\u10E4\u10D8\u10DC\u10E1",
    "\u10D1\u10D0\u10DC\u10D2\u10E1\u10D0",
    "\u10E8\u10D4\u10DB\u10DD\u10EE\u10D0\u10DC\u10D0",
    "\u10E8\u10D4\u10DB\u10DD\u10D5\u10E1\u10ED\u10D5\u10E0\u10D4\u10E2\u10D8\u10D7",
    "\u10D0\u10DB\u10DD\u10D5\u10F0\u10E6\u10D4\u10E0\u10D7\u10DD",
    "\u10DB\u10DD\u10EA\u10D0\u10D3\u10D8\u10D0",
    "\u10DB\u10DD\u10D4\u10EE\u10D5\u10D8\u10D3\u10D4\u10E1",
    "\u10D7\u10E5\u10DB\u10D8\u10D0",
    "\u10D0\u10E6\u10D5\u10D8\u10D0",
    "\u10D5\u10DA\u10D0\u10DB\u10E1",
    "\u10DB\u10DD\u10EE\u10D3\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8",
    "\u10D2\u10DD\u10E0\u10E1\u10D5\u10DA\u10D8\u10D7\u10D0",
    "\u10D2\u10D5\u10D7\u10E5\u10D5\u10D0\u10E1",
    "\u10D2\u10D0\u10E3\u10D6\u10D0\u10D3\u10D0",
    "\u10D3\u10D0\u10D1\u10D8\u10D7\u10E5\u10D8\u10E1",
    "\u10D0\u10DC\u10D5\u10D8\u10DC\u10D0",
    "\u10E8\u10E0\u10D8\u10D3\u10DD\u10DC\u10D8",
    "\u10D2\u10D0\u10D5\u10EC\u10D8\u10D3\u10DC\u10D8\u10D0",
    "\u10D0\u10DA\u10D5\u10D8\u10D7\u10D0\u10DC\u10D8",
    "\u10DB\u10DD\u10DC\u10D8\u10DD",
    "\u10E1\u10D8\u10E2\u10D8\u10E0\u10D4\u10DC",
    "\u10D2\u10D8\u10E8\u10D8\u10EE\u10D0\u10E0\u10DC\u10D8",
    "\u10D3\u10D0\u10DB\u10D8\u10E4\u10D4\u10DB\u10D8",
    "\u10DB\u10D4\u10D2\u10E0\u10D4\u10EA\u10D0",
    "\u10E4\u10D8\u10D7\u10EF\u10D8",
    "\u10DB\u10E1\u10D3\u10D4\u10D5\u10D0\u10E0\u10E1\u10D0",
    "\u10D2\u10D0\u10DC\u10D0\u10D6\u10D0\u10DC\u10D3\u10D0",
    "\u10E1\u10D0\u10E5\u10DB\u10D8\u10DC"
];
data.fnames = [
    "\u10D7\u10D0\u10D5\u10D0\u10DC",
    "\u10D4\u10DA\u10D8\u10D9\u10DD\u10DC",
    "\u10D9\u10D0\u10DC\u10E2\u10DA\u10D8\u10DD\u10DC",
    "\u10D2\u10D5\u10D4\u10DA\u10D4",
    "\u10DA\u10D0\u10D3\u10D8\u10D0\u10DC",
    "\u10DA\u10DD\u10E2\u10D8\u10DC\u10D4",
    "\u10D2\u10D8\u10DD\u10DA\u10D2\u10D5\u10D8",
    "\u10D2\u10D0\u10E0\u10E1\u10D0",
    "\u10D7\u10D4\u10D3\u10D0",
    "\u10DB\u10D4\u10D6\u10DC\u10D0\u10DC",
    "\u10DB\u10D0\u10E0\u10E2\u10D0",
    "\u10D0\u10E3\u10E0\u10D0\u10D6\u10D2\u10E0",
    "\u10DB\u10D0\u10D3\u10E0\u10D0",
    "\u10D2\u10D8\u10DD\u10D2\u10D8\u10DA\u10D8",
    "\u10E1\u10DD\u10DC\u10D8\u10D9\u10D4\u10DA\u10D8\u10D6\u10D0\u10DC\u10D8",
    "\u10D0\u10E1\u10E1\u10D0\u10DC\u10DD",
    "\u10DC\u10D8\u10D2\u10DD\u10DA\u10D8\u10E2\u10D8",
    "\u10D0\u10D5\u10D0\u10D9\u10D5\u10D0\u10DC",
    "\u10DB\u10DD\u10DC\u10E1",
    "\u10DC\u10D0\u10D3\u10E0\u10D8\u10DC",
    "\u10DC\u10D8\u10E4\u10DD\u10DA",
    "\u10D4\u10DA\u10D8\u10D9\u10DD\u10E0",
    "\u10D3\u10D0\u10DB\u10D0\u10E1",
    "\u10D2\u10D8\u10DB\u10E0\u10D8",
    "\u10DD\u10D1\u10D0\u10E0\u10EE\u10D8",
    "\u10D2\u10D0\u10DB\u10DD\u10DC",
    "\u10DD\u10DC\u10D4\u10E1",
    "\u10D6\u10D8\u10EE\u10E2\u10D8\u10DC\u10D4",
    "\u10D8\u10DD\u10D9\u10D4\u10DA",
    "\u10E1\u10D0\u10E2\u10D3\u10D0",
    "\u10DE\u10D0\u10E0\u10D0",
    "\u10D8\u10D0\u10DC\u10D4\u10D6",
    "\u10D6\u10D8\u10DC\u10D0",
    "\u10E0\u10D0\u10DC\u10D2\u10D8",
    "\u10D8\u10D0\u10DC\u10D2\u10DD\u10E0",
    "\u10D0\u10D1\u10E1\u10D8\u10DC\u10D4",
    "\u10DA\u10D4\u10DC\u10E2\u10D0\u10DC",
    "\u10D6\u10D8\u10E1\u10E2\u10D8\u10D9\u10DD\u10D1",
    "\u10DC\u10D8\u10D2\u10DD\u10DA\u10DD",
    "\u10D3\u10D0\u10E2\u10D8\u10D7\u10DC\u10D8",
    "\u10DB\u10D0\u10DC\u10D7\u10D0",
    "\u10D0\u10E0\u10D2\u10D8\u10E5",
    "\u10D6\u10D8\u10D9\u10DD",
    "\u10D4\u10E0\u10DA\u10D4",
    "\u10D8\u10D0\u10DC\u10D4",
    "\u10DB\u10D4\u10D5\u10E0\u10D4\u10DC",
    "\u10D0\u10DA\u10E2\u10D8\u10E1\u10D0",
    "\u10DB\u10D0\u10E0\u10D3\u10D8\u10D0",
    "\u10E1\u10D8\u10E1\u10D4\u10DA",
    "\u10EE\u10D4\u10D8\u10E1\u10D0",
    "\u10D4\u10DA\u10E3\u10D0\u10DC",
    "\u10D3\u10D4\u10DA\u10DD",
    "\u10D8\u10D4\u10D9\u10DA\u10D4\u10D1",
    "\u10D2\u10E3\u10E9\u10D8\u10DA\u10D8",
    "\u10E2\u10D0\u10DB\u10D0",
    "\u10DC\u10DD\u10D9\u10D2\u10DD\u10DA",
    "\u10D8\u10D0\u10D9\u10D8\u10E1\u10D4",
    "\u10D3\u10D0\u10D3\u10DD",
    "\u10D0\u10E0\u10D7\u10D4\u10DB\u10E0\u10D0\u10E1",
    "\u10D0\u10DC\u10D0\u10D8\u10D9\u10DD\u10D1\u10D4",
    "\u10D2\u10E2\u10D8\u10E2",
    "\u10D7\u10D0\u10EE\u10E1\u10D0\u10DC",
    "\u10D6\u10D0\u10DC\u10D0",
    "\u10DC\u10E3\u10D3\u10DD",
    "\u10D2\u10D8\u10DD\u10D3\u10D0",
    "\u10D8\u10E1\u10E1\u10DA\u10D8\u10D9\u10DD\u10DC",
    "\u10D0\u10DA\u10E1\u10D0\u10DC",
    "\u10E0\u10D0\u10DB\u10DD\u10DA\u10D4",
    "\u10D2\u10E3\u10DB\u10D0\u10DC",
    "\u10DC\u10E3\u10E0\u10DB\u10D2\u10D8\u10DC",
    "\u10D7\u10DD\u10DB\u10D8\u10D7\u10D0\u10DC\u10D8",
    "\u10D3\u10D4\u10D5\u10D0\u10DC\u10D4",
    "\u10D4\u10DA\u10D4\u10D3\u10D4\u10D8\u10DC",
    "\u10D2\u10D8\u10DB\u10DD\u10E2",
    "\u10D0\u10E0\u10D0\u10E0",
    "\u10DD\u10E0\u10DB\u10DD\u10DC",
    "\u10DC\u10D4\u10D3\u10E0\u10D8",
    "\u10D3\u10D8\u10DB\u10DD",
    "\u10EE\u10DD\u10D7\u10D8\u10D0\u10DC\u10D4\u10D8",
    "\u10D2\u10D8\u10D5\u10D0",
    "\u10DC\u10D0\u10DC\u10E2\u10E0\u10D4",
    "\u10D2\u10D8\u10DB\u10DD\u10DA",
    "\u10D3\u10DD\u10E1\u10DD\u10DC",
    "\u10D8\u10D9\u10D0\u10DC\u10D4\u10DC",
    "\u10D8\u10D9\u10E5\u10DD\u10E0\u10D8\u10D6\u10D4",
    "\u10D2\u10D8\u10DA\u10E2\u10DD\u10E0\u10D2",
    "\u10D3\u10D4\u10E2\u10DD\u10DC",
    "\u10D4\u10E0\u10D3\u10D4\u10D0",
    "\u10D8\u10E0\u10D4\u10D2\u10DA\u10D8\u10D6",
    "\u10E0\u10D8\u10D3\u10D4\u10DA\u10E3\u10D3\u10D0\u10DC",
    "\u10D7\u10DD\u10D9\u10D0\u10DC",
    "\u10D8\u10D0\u10DC\u10D4\u10D1\u10D4\u10DC\u10E2\u10D8\u10D0\u10DC\u10D0",
    "\u10E1\u10D8\u10D1\u10DD",
    "\u10D2\u10D8\u10DD\u10E0\u10E2\u10D8\u10DC",
    "\u10DC\u10D8\u10D9\u10D8\u10DA\u10D0\u10DC",
    "\u10D4\u10DA\u10D0\u10D9\u10DD\u10DC",
    "\u10D2\u10D8\u10D3\u10E0\u10D0\u10D1",
    "\u10DA\u10D4\u10EA\u10D7\u10D4\u10E2\u10D0\u10DC\u10E2\u10D4\u10DC\u10D3\u10D4\u10E0\u10D8\u10D1",
    "\u10D3\u10D0\u10DB\u10D4\u10E0",
    "\u10D8\u10D4\u10D2\u10DD"
];
data.lnames = [
    "\u10DB\u10D0\u10EE\u10D0\u10D3\u10D4\u10DC\u10D8\u10D0",
    "\u10D1\u10E1\u10D4\u10DA\u10E0\u10D8\u10D0",
    "\u10E5\u10D0\u10D5\u10D8\u10D0",
    "\u10D9\u10DD\u10E0\u10D4\u10D9\u10D8\u10D0",
    "\u10DB\u10D0\u10E0\u10D3\u10D8\u10D0",
    "\u10D1\u10D0\u10E0\u10D3\u10D8\u10DD\u10DC\u10D8\u10D0",
    "\u10D2\u10D5\u10D8\u10DE\u10D8\u10D0\u10DC\u10D3\u10D8\u10D0",
    "\u10D4\u10E0\u10D7\u10D4\u10DA\u10D8\u10D0",
    "\u10DC\u10D7\u10EE\u10D0\u10D8\u10D0",
    "\u10D7\u10D4\u10D3\u10D8\u10D0",
    "\u10D1\u10DD\u10EE\u10D0\u10D8\u10D0",
    "\u10D1\u10D0\u10E0\u10D8\u10D0",
    "\u10ED\u10D0\u10E0\u10E2\u10D8\u10DC\u10D8\u10D0",
    "\u10D0\u10E0\u10DE\u10D0\u10DC\u10D8\u10D0",
    "\u10E9\u10E3\u10E0\u10D8\u10D0",
    "\u10DB\u10DD\u10E0\u10EA\u10D0\u10EC\u10D0\u10D6\u10D8\u10D0",
    "\u10D0\u10E0\u10DB\u10D4\u10DA\u10D8\u10D0",
    "\u10DB\u10D8\u10E0\u10D1\u10D0\u10E0\u10D8\u10D0",
    "\u10ED\u10D5\u10D4\u10DA\u10D0\u10E5\u10D8\u10D0",
    "\u10E5\u10D0\u10E0\u10D8\u10D7\u10D8\u10D0",
    "\u10D2\u10D0\u10E0\u10D7\u10D4\u10DA\u10D8\u10D0",
    "\u10D8\u10D0\u10DC\u10D8\u10D0",
    "\u10D3\u10D5\u10D0\u10DC\u10E2\u10DD\u10DC\u10D4\u10D8\u10D0\u10DC\u10D8\u10D0",
    "\u10DE\u10E3\u10E9\u10D8\u10D0",
    "\u10D3\u10D0\u10E2\u10D8\u10DA\u10D8\u10D0",
    "\u10D9\u10D0\u10DC\u10D8\u10D0",
    "\u10D5\u10D0\u10E0\u10D3\u10E1\u10D5\u10D0\u10DA\u10D8\u10D0",
    "\u10E7\u10DD\u10E0\u10D7\u10D4\u10DA\u10D8\u10D0",
    "\u10D0\u10E0\u10D3\u10DD\u10DA\u10D8\u10D0",
    "\u10E0\u10D8\u10D9\u10E1\u10E5\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D2\u10D0\u10DB\u10D4\u10E5\u10DD\u10DC\u10D7\u10D4\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10DA\u10E3\u10E9\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10DB\u10D0\u10E0\u10D3\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10DE\u10D0\u10D1\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D0\u10E0\u10D1\u10D4\u10E0\u10D4\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E4\u10DD\u10E1\u10E3\u10E0\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D5\u10D0\u10EC\u10DD\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E9\u10E0\u10D8\u10DA\u10D8\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E2\u10D8\u10DB\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10DB\u10D0\u10D5\u10D0\u10DC\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10DB\u10D0\u10D3\u10E1\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E0\u10D4\u10D3\u10D4\u10DA\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D7\u10D4\u10D7\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D2\u10D0\u10E0\u10D0\u10D5\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D3\u10D0\u10E0\u10D0\u10EE\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D1\u10D0\u10E0\u10ED\u10D0\u10DB\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D1\u10D0\u10E0\u10D0\u10EE\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D0\u10DC\u10E6\u10D4\u10DA\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10DB\u10D4\u10D1\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E1\u10E3\u10E0\u10D4\u10EF\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D0\u10D9\u10D1\u10D7\u10D0\u10D9\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E2\u10E3\u10E1\u10DD\u10DC\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E2\u10DD\u10D3\u10D4\u10E0\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D6\u10D0\u10D1\u10EE\u10D0\u10E1\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E5\u10E3\u10E0\u10D0\u10D1\u10D4\u10E0\u10D8\u10DC\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D4\u10D1\u10D5\u10D4\u10D9\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10D4\u10E0\u10D3\u10D8\u10D7\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10E3\u10E0\u10D1\u10D4\u10DA\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10DB\u10D4\u10DC\u10E0\u10DB\u10D0\u10E8\u10D5\u10D8\u10DA\u10D8",
    "\u10EF\u10D5\u10D8\u10DA\u10DD\u10EB\u10D4",
    "\u10D1\u10D0\u10D3\u10D8\u10D0\u10EB\u10D4",
    "\u10E8\u10D5\u10D8\u10E0\u10D8\u10EB\u10D4",
    "\u10E1\u10D0\u10E1\u10D0\u10DC\u10D0\u10EB\u10D4",
    "\u10D2\u10D8\u10DB\u10D0\u10D0\u10DC\u10D8\u10EB\u10D4",
    "\u10D2\u10D5\u10D0\u10DB\u10D0\u10D5\u10D8\u10EB\u10D4",
    "\u10D0\u10E0\u10DB\u10D4\u10DB\u10D8\u10EB\u10E1\u10EB\u10D4",
    "\u10D1\u10D0\u10E0\u10D0\u10EB\u10D4",
    "\u10D0\u10D1\u10D4\u10D0\u10DC\u10D8\u10EB\u10D4",
    "\u10DD\u10D5\u10DD\u10DC\u10D8\u10EB\u10D4",
    "\u10DA\u10D0\u10DB\u10D0\u10E8\u10D5\u10D8\u10EB\u10D4",
    "\u10DD\u10D1\u10D7\u10D0\u10EE\u10E3\u10E0\u10D0\u10EB\u10D4",
    "\u10D9\u10D4\u10E0\u10D4\u10EB\u10D4",
    "\u10E4\u10D5\u10D4\u10E0\u10D8\u10EB\u10D4",
    "\u10DB\u10D0\u10D2\u10D8\u10EB\u10D4",
    "\u10D9\u10D0\u10D3\u10D8\u10D0\u10E8\u10D8\u10EB\u10D4",
    "\u10D2\u10D0\u10DB\u10E1\u10D0\u10DC\u10D8\u10EB\u10D4",
    "\u10DB\u10D4\u10E0\u10E2\u10D8\u10DC\u10D8\u10EB\u10D4",
    "\u10D1\u10D4\u10DB\u10D4\u10D4\u10DA\u10D8\u10EB\u10D4",
    "\u10E2\u10DD\u10EE\u10D8\u10EB\u10D4",
    "\u10ED\u10D0\u10E0\u10D0\u10E2\u10D8\u10EB\u10D4",
    "\u10D1\u10D0\u10D3\u10DD\u10E1\u10D4\u10DA\u10D8",
    "\u10D5\u10D0\u10E0\u10D8\u10E1\u10D4\u10DA\u10D8",
    "\u10E1\u10D8\u10E0\u10EE\u10D4\u10DA\u10D8",
    "\u10E1\u10DD\u10E0\u10EE\u10D4\u10DA\u10D8",
    "\u10DB\u10D0\u10E0\u10D3\u10D4\u10DA\u10D8",
    "\u10D2\u10D0\u10E8\u10D5\u10D8\u10D7\u10D4\u10DA\u10D8",
    "\u10D9\u10DD\u10D7\u10D0\u10D5\u10D4\u10DA\u10D8",
    "\u10DD\u10E1\u10D7\u10DB\u10D8\u10DC\u10D4\u10DA\u10D8",
    "\u10D4\u10E0\u10D8\u10E1\u10D4\u10DA\u10D8",
    "\u10D6\u10D7\u10D4\u10E0\u10E2\u10D4\u10DA\u10D8",
    "\u10EE\u10D0\u10DB\u10D8\u10D9\u10D4\u10DA\u10D8",
    "\u10DB\u10D8\u10D1\u10D0\u10EB\u10D4\u10E8\u10D8\u10D4\u10DA\u10D8",
    "\u10D8\u10D9\u10D7\u10D4\u10DA\u10D8",
    "\u10D2\u10D7\u10EA\u10D8\u10E2\u10D0\u10D1\u10D4\u10DA\u10D8",
    "\u10D0\u10E1\u10D8\u10EA\u10D4\u10DA\u10D8",
    "\u10DD\u10D1\u10D0\u10D8\u10ED\u10D4\u10DA\u10D8",
    "\u10DA\u10D4\u10DC\u10D7\u10D4\u10DA\u10D8",
    "\u10DB\u10D4\u10DB\u10E9\u10D0\u10D7\u10D4\u10E0\u10D8\u10DC\u10DD\u10DC\u10D2\u10D1\u10D0\u10DC\u10D8\u10DC\u10D8\u10EB\u10D4",
    "\u10D0\u10DB\u10D4\u10D3\u10D5\u10D0\u10E5\u10E1\u10D8\u10D9\u10DD\u10D2\u10D4\u10D8\u10E8\u10D5\u10D8\u10E0\u10D8",
    "\u10DB\u10DD\u10E0\u10DF\u10D5\u10DD\u10DC\u10D0\u10DC\u10D3\u10D8\u10E8\u10D5\u10D8\u10DA\u10D8"
];
let dataset = data.vefxwords;
const freqs = data.frequency.summed;
const loadWordlist = (wordlist)=>{
    dataset = wordlist;
};
const sentences = (nwords)=>{
    return createSentences(createWords(nwords));
};
const paragraphs = (nwords, npar, newline = "\n\n")=>{
    let paragraphs = "";
    for(let i = 0; i < npar; i++)paragraphs += createSentences(createWords(nwords)) + newline;
    return paragraphs;
};
const createSentences = (words)=>{
    let sentences = "";
    for(let i = 0; i < words.length; i++)sentences += words[i] + randomMark();
    sentences = sentences.trim();
    sentences = sentences.setCharAt(sentences.length - 1, ".", 1);
    return sentences;
};
const names = (nnames)=>{
    let results = [];
    for(let i = 0; i < nnames; i++)results.push(randomFirstName() + " " + randomLastName());
    return results;
};
const randomFirstName = ()=>{
    return data.fnames[randomNumber(0, data.fnames.length)];
};
const randomLastName = ()=>{
    return data.lnames[randomNumber(0, data.lnames.length)];
};
String.prototype.setCharAt = function(where, what, offset) {
    offset = offset || 0;
    if (where > this.length - 1) return this;
    return this.substring(0, where) + what + this.substring(where + what.length + offset);
};
const randomMark = ()=>{
    let r = Math.random();
    for(let i = 0; i < freqs.length; i++){
        if (r < freqs[i][1]) return freqs[i][0] + " ";
    }
    return " ";
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
    sentences,
    paragraphs,
    loadWordlist,
    names,
    $
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPc38":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const frequency = (text, miss = "[\u10D0-\u10F0\u1C90-\u1CB0\u10A0-\u10C0\u2D00-\u2D20a-zA-Z\u0410-\u042F\u0430-\u044F]")=>{
    let splitted = text.toUpperCase().split("");
    let length = splitted.length;
    let table = {};
    let r = new RegExp(miss);
    for(let i = 0; i < length; i++){
        if (!r.test(splitted[i])) continue;
        if (!table[splitted[i]]) table[splitted[i]] = 1;
        else table[splitted[i]]++;
    }
    for(let key in table)table[key] /= length;
    return table;
};
const count = (text, miss = "[\u10D0-\u10F0\u1C90-\u1CB0\u10A0-\u10C0\u2D00-\u2D20a-zA-Z\u0410-\u042F\u0430-\u044F]")=>{
    let splitted = text.toUpperCase().split("");
    let length = splitted.length;
    let table = {};
    let r = new RegExp(miss);
    for(let i = 0; i < length; i++){
        if (!r.test(splitted[i])) continue;
        if (!table[splitted[i]]) table[splitted[i]] = 1;
        else table[splitted[i]]++;
    }
    return table;
};
const friedman = (text, miss = "[\u10D0-\u10F0\u1C90-\u1CB0\u10A0-\u10C0\u2D00-\u2D20a-zA-Z\u0410-\u042F\u0430-\u044F]")=>{
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fCtjV","bNKaB"], "bNKaB", "parcelRequire729f")

//# sourceMappingURL=index.194d643e.js.map
