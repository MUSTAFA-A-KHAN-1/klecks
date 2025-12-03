// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"cW76H":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f44e7587f9f11996";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"cYOZ3":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"UI links/rechts verwisselen","toggle-show-tools":"Toon/verberg Hulpmiddelen","scroll":"Scroll","donate":"Doneer","home":"Startpagina","modal-new-tab":"Open in nieuw tabblad","tab-edit":"Bewerken","tab-file":"Bestand","tool-brush":"Borstel","tool-paint-bucket":"Verfpot","tool-gradient":"Gradi\xebnt","tool-shape":"Vorm","tool-text":"Tekst","tool-hand":"Hand Hulpmiddel","tool-select":"Selecteer Hulpmiddel","tool-zoom":"Zoom","tool-more-tools":"Meer Hulpmiddelen","undo":"Ongedaan maken","redo":"Opnieuw doen","brush-pen":"Pen","brush-blend":"Blend","brush-sketchy":"Sketchie","brush-pixel":"Pixel","brush-chemy":"Chemie","brush-smudge":"Vlek","brush-size":"Grootte","brush-blending":"Meng","brush-toggle-pressure":"Drukgevoeligheid In-/Uitschakelen","brush-pen-circle":"Cirkel","brush-pen-chalk":"Krijt","brush-pen-calligraphy":"Kalligrafie","brush-pen-square":"Vierkant","brush-sketchy-scale":"Schaal","brush-pixel-dither":"Dither","brush-chemy-fill":"Vullen","brush-chemy-stroke":"Lijn","brush-chemy-mirror-x":"Horizontale symmetrie","brush-chemy-mirror-y":"Verticale symmetrie","brush-chemy-gradient":"Gradi\xebnt","brush-eraser-transparent-bg":"Transparante Achtergrond","stabilizer":"Stabilisator","stabilizer-title":"Lijnstabilisator","eyedropper":"Pipet","secondary-color":"Secundaire Kleur","manual-color-input":"Handmatige Kleurinvoer","mci-hex":"Hex","mci-copy":"Kopi\xebren","modal-ok":"Ok","modal-cancel":"Annuleren","modal-close":"Sluiten","layers-active-layer":"Actieve Laag","layers-layer":"Laag","layers-copy":"Kopi\xebren","layers-blending":"Mengen","layers-new":"Nieuwe Laag","layers-remove":"Laag Verwijderen","layers-duplicate":"Laag Dupliceren","layers-merge":"Samenvoegen met onderliggende laag","layers-clear":"Laag Wissen","layers-merge-all":"Alles samenvoegen","layers-rename":"Hernoemen","layers-active-layer-visible":"Actieve laag is zichtbaar","layers-active-layer-hidden":"Actieve laag is verborgen","layers-visibility-toggle":"Laagzichtbaarheid","layers-blend-normal":"normaal","layers-blend-darken":"donkerder maken","layers-blend-multiply":"vermenigvuldigen","layers-blend-color-burn":"verbrandkleur","layers-blend-lighten":"verlichten","layers-blend-screen":"scherm","layers-blend-color-dodge":"kleur ontwijken","layers-blend-overlay":"overlay","layers-blend-soft-light":"zacht licht","layers-blend-hard-light":"hard licht","layers-blend-difference":"verschil","layers-blend-exclusion":"uitsluiting","layers-blend-hue":"tint","layers-blend-saturation":"verzadiging","layers-blend-color":"kleur","layers-blend-luminosity":"helderheid","layers-rename-title":"Laag Hernoemen","layers-rename-name":"Naam","layers-rename-clear":"Naam Wissen","layers-rename-sketch":"Schets","layers-rename-colors":"Kleuren","layers-rename-shading":"Arcering","layers-rename-lines":"Lijnen","layers-rename-effects":"Effecten","layers-rename-foreground":"Voorgrond","layers-merge-modal-title":"Lagen Samenvoegen/Mixen","layers-merge-description":"Voegt de geselecteerde laag samen met de laag eronder. Selecteer de mixmodus:","file-no-autosave":"Geen automatische opslag, geen cloudopslag","file-new":"Nieuw","file-import":"Importeren","file-save":"Opslaan","file-format":"Bestandsformaat","file-show-save-dialog":"Opslagdialoogvenster weergeven","file-copy":"Kopi\xebren","file-copy-title":"Kopi\xebren naar klembord","file-paste":"Plakken","file-share":"Delen","file-storage":"Browseropslag","file-storage-about":"Over Browseropslag","file-storage-cant-access":"Kan geen toegang krijgen tot opslag","file-storage-empty":"Leeg","file-storage-store":"Opslaan","file-storage-open":"Openen","file-storage-open-confirmation":"Deze afbeelding is al geopend in een ander tabblad. Ook hier openen?","file-storage-open-failed":"Kan niet laden.","file-storage-clear":"Wissen","file-storage-clear-prompt":"Browseropslag Wissen? Kan niet ongedaan worden gemaakt.","file-storage-storing":"Opslaan","file-storage-overwrite":"Overschrijven","file-storage-overwrite-confirm":"Browseropslag overschrijven? Overschreven gegevens worden definitief verwijderd.","file-storage-min-ago":"{x}min geleden","file-storage-hours-ago":"{x}u geleden","file-storage-days-ago":"{x}d geleden","file-storage-month-ago":"> 1 maand geleden","file-storage-restored":"Hersteld uit browseropslag","file-storage-stored":"Opgeslagen in browseropslag","file-storage-failed":"Opslaan in browseropslag mislukt","file-storage-failed-1":"Opslaan mislukt. Mogelijke oorzaken:","file-storage-failed-2":"Onvoldoende schijfruimte","file-storage-failed-3":"Opslag uitgeschakeld in incognitotabblad","file-storage-failed-4":"Browser ondersteunt geen opslag","file-storage-failed-clear":"Wissen mislukt.","file-upload":"Uploaden","tab-recovery-recover-tabs":"Gesloten tabbladen herstellen","tab-recovery-explanation":"Herstelgegevens worden slechts korte tijd bewaard. Sla uw werk op om te voorkomen dat het verloren gaat.","tab-recovery-total-quota-label":"Totaal:","tab-recovery-empty":"Niets te herstellen.","tab-recovery-recover":"Herstellen","tab-recovery-delete":"Verwijderen","tab-recovery-delete-confirmation":"Deze herstelbewerking verwijderen? Verwijderen kan niet ongedaan worden gemaakt.","tab-recovery-failed-to-recover":"Tabblad kan niet worden hersteld.","tab-recovery-recovered":"Tabblad hersteld.","cleared-layer":"Laag gewist","cleared-selected-area":"Geselecteerd gebied gewist","filled":"Gevuld","filled-selected-area":"Selectie gevuld","new-title":"Nieuwe afbeelding","new-current":"Huidige","new-fit":"Pasvorm","new-oversize":"Oversize","new-square":"Vierkant","new-landscape":"Liggend","new-portrait":"Staand","new-screen":"Scherm","new-video":"Video","new-din-paper":"DIN-papier","new-px":"px","new-ratio":"Verhouding","upload-title":"Uploaden naar Imgur","upload-link-notice":"Iedereen met de link naar uw ge\xfcploade afbeelding kan deze bekijken.","upload-name":"Titel","upload-title-untitled":"Titelloos","upload-caption":"Bijschrift","upload-submit":"Uploaden","upload-uploading":"Bezig met uploaden...","upload-success":"Uploaden gelukt","upload-failed":"Uploaden mislukt.","upload-delete":"Om uw afbeelding van Imgur te verwijderen, gaat u naar:","cropcopy-title-copy":"Kopi\xebren naar klembord","cropcopy-title-crop":"Bijsnijden","cropcopy-click-hold":"Klik met de rechtermuisknop of houd ingedrukt om te kopi\xebren.","cropcopy-btn-copy":"Naar klembord","cropcopy-copied":"Gekopieerd.","cropcopy-btn-crop":"Bijsnijden toepassen","crop-drag-to-crop":"Slepen om bij te snijden","filter-crop-extend":"Bijsnijden/Uitbreiden","filter-flip":"Spiegelen","filter-perspective":"Perspectief","filter-resize":"Grootte wijzigen","filter-rotate":"Draaien","filter-transform":"Transformeren","filter-bright-contrast":"Helderheid/Contrast","filter-curves":"Curves","filter-hue-sat":"Tint/Verzadiging","filter-invert":"Inverteren","filter-tilt-shift":"Tilt Shift","filter-to-alpha":"Naar Alpha","filter-triangle-blur":"Driehoekige vervaging","filter-unsharp-mask":"Onscherp masker","filter-crop-title":"Bijsnijden/Uitbreiden","filter-crop-description":"Bijsnijden of uitbreiden van de afbeelding.","filter-crop-left":"Links","filter-crop-right":"Rechts","filter-crop-top":"Boven","filter-crop-bottom":"Onder","filter-crop-rule-thirds":"Regel van derden","filter-crop-fill":"Vullen","filter-flip-title":"Spiegelen","filter-flip-description":"Spiegelt laag of hele afbeelding.","filter-flip-horizontal":"Horizontaal","filter-flip-vertical":"Verticaal","filter-flip-image":"Afbeelding spiegelen","filter-flip-layer":"Laag spiegelen","filter-perspective-title":"Perspectief","filter-perspective-description":"Transformeert de geselecteerde laag.","filter-resize-title":"Grootte wijzigen","filter-resize-description":"Wijzigt de grootte van de afbeelding.","filter-rotate-title":"Draaien","filter-rotate-description":"Draait de afbeelding.","filter-transform-empty":"Laag is leeg.","filter-transform-title":"Transformeren","filter-transform-description":"Transformeert de geselecteerde laag. Houd Shift ingedrukt voor extra functies.","filter-transform-rotation":"Rotatie","filter-transform-flip":"Omdraaien","filter-transform-center":"Centraal","filter-transform-constrain":"Beperken","filter-transform-snap":"Klik","filter-transform-snap-title":"Rotatie en positie uitlijnen","filter-bright-contrast-title":"Helderheid / Contrast","filter-bright-contrast-description":"Wijzig de helderheid en het contrast van de geselecteerde laag.","filter-bright-contrast-brightness":"Helderheid","filter-bright-contrast-contrast":"Contrast","filter-curves-title":"Curves","filter-curves-description":"Pas curves toe op de geselecteerde laag.","filter-curves-all":"Alles","filter-hue-sat-title":"Tint / Verzadiging","filter-hue-sat-description":"Wijzig de tint en verzadiging voor de geselecteerde laag.","filter-hue-sat-hue":"Tint","filter-hue-sat-saturation":"Verzadiging","filter-applied":"toegepast","filter-tilt-shift-title":"Tilt Shift","filter-tilt-shift-description":"Past tilt shift toe op de geselecteerde laag.","filter-tilt-shift-blur":"Vervagingsradius","filter-tilt-shift-gradient":"Gradi\xebntradius","filter-to-alpha-title":"Naar Alpha","filter-to-alpha-description":"Genereert een alphakanaal voor de geselecteerde laag op basis van:","filter-to-alpha-inverted-lum":"Omgekeerde luminantie","filter-to-alpha-lum":"Luminantie","filter-to-alpha-replace":"RGB vervangen","filter-triangle-blur-title":"Driehoekige vervaging","filter-triangle-blur-description":"Past driehoekige vervaging toe op de geselecteerde laag.","filter-unsharp-mask-title":"Onscherp masker","filter-unsharp-mask-description":"Maakt de geselecteerde laag scherper door pixels weg te schalen van het gemiddelde van hun buren.","filter-unsharp-mask-strength":"Sterkte","filter-grid":"Raster","filter-grid-description":"Teken een raster op de geselecteerde laag.","filter-noise":"Ruis","filter-noise-description":"Voegt ruis toe aan de geselecteerde laag.","filter-noise-scale":"Schaal","filter-noise-alpha":"Alpha","filter-pattern":"Patroon","filter-pattern-description":"Genereert een patroon op de geselecteerde laag. Sleep het voorbeeld voor meer bedieningsmogelijkheden.","filter-distort":"Vervormen","filter-distort-description":"Vervormt de geselecteerde laag.","filter-distort-phase":"Fase","filter-distort-stepsize":"Stapgrootte","filter-distort-sync-xy":"Synchroniseer XY","filter-vanish-point":"Verdwijnpunt","filter-vanish-point-title":"Verdwijnpunt","filter-vanish-point-description":"Voegt een verdwijnpunt toe aan de geselecteerde laag. Sleep het voorbeeld om te verplaatsen.","filter-vanish-point-lines":"Lijnen","dropper-drop":"Drop om te importeren","dropper-as-image":"Als nieuwe afbeelding","dropper-as-layer":"Als laag","import-opening":"Bestand wordt geopend...","import-title":"Afbeelding importeren","import-too-large":"Afbeelding te groot, wordt verkleind.","import-btn-as-layer":"Als laag","import-btn-as-image":"Als afbeelding","import-as-layer-title":"Afbeelding importeren als nieuwe laag","import-as-layer-description":"Pas de positie van de ge\xefmporteerde afbeelding aan.","import-as-layer-limit-reached":"Laaglimiet bereikt. Afbeelding wordt op bestaande laag geplaatst.","import-as-layer-fit":"Aanpassen","import-flatten":"Afbeelding samenvoegen","import-unsupported-file":"Niet-ondersteund bestandstype. Zie Help voor ondersteunde typen.","import-broken-file":"Afbeelding kan niet worden geladen. Bestand is mogelijk beschadigd.","import-psd-unsupported":"Niet-ondersteunde functies. PSD moest worden samengevoegd.","import-psd-limited-support":"PSD-ondersteuning is beperkt. Samengevoegd ziet er waarschijnlijk correcter uit.","import-psd-too-large":"Afbeelding overschrijdt maximale afmetingen van {x} x {x} pixels. Kan niet worden ge\xefmporteerd.","import-psd-size":"Afbeeldingsgrootte","clipboard-read-fail":"Kan niet lezen vanuit klembord.","clipboard-no-image":"Geen afbeelding gevonden in klembord.","hand-reset":"Reset","hand-fit":"Aanpassen","hand-inertia-scrolling":"Inertia Scrolling","bucket-tolerance":"Tolerantie","bucket-sample":"Sample","bucket-sample-title":"Van welke lagen moet de kleur worden bemonsterd?","bucket-sample-all":"Alle","bucket-sample-active":"Actief","bucket-sample-above":"Boven","bucket-grow":"Groei","bucket-grow-title":"Groei gevuld gebied (in pixels)","bucket-contiguous":"Aaneengesloten","bucket-contiguous-title":"Vul alleen aaneengesloten gebieden","gradient-linear":"Lineair","gradient-linear-mirror":"Lineair-spiegel","gradient-radial":"Radiaal","shape-stroke":"Lijn","shape-fill":"Vulling","shape-rect":"Rechthoek","shape-ellipse":"Ellips","shape-line":"Lijn","shape-line-width":"Lijnbreedte","shape-outwards":"Naar buiten","shape-fixed":"Vast 1:1","shape-auto-pan":"Automatisch pannen","shape-auto-pan-title":"Beweegt automatisch terwijl u tekent","text-instruction":"Klik op het canvas om tekst te plaatsen","text-title":"Tekst toevoegen","text-text":"Tekst","text-font":"Lettertype","text-placeholder":"Uw tekst","text-color":"Kleur","text-size":"Grootte","text-line-height":"Regelhoogte","text-letter-spacing":"Letterafstand","text-left":"Links","text-center":"Midden","text-right":"Rechts","text-italic":"Cursief","text-bold":"Vet","select-select":"Selecteren","select-transform":"Transformeren","select-lasso":"Lasso","select-polygon":"Veelhoek","select-boolean-replace":"Vervangen","select-boolean-add":"Toevoegen","select-boolean-subtract":"Aftrekken","select-all":"Alles","select-invert":"Omkeren","select-reset":"Resetten","select-fill":"Vullen","select-erase":"Wissen","select-transform-clone":"Kloon","select-transform-clone-applied":"Gekloond","select-transform-move-to-layer":"Verplaatsen naar laag:","select-transform-applied":"Transformatie toegepast","select-transform-empty":"Geselecteerd gebied op actieve laag is leeg.","save-reminder-title":"Onopgeslagen werk","save-reminder-text":"Afbeelding is niet opgeslagen in {a} minuten{b}. Sla nu op om eventueel verlies te voorkomen.","save-reminder-save-psd":"Opslaan als PSD","save-reminder-psd-layers":"PSD onthoudt alle lagen.","backup-drawing":"U kunt een back-up van uw tekening maken.","submit":"Verzenden","submit-title":"Tekening verzenden","submit-prompt":"Tekening verzenden?","submit-submitting":"Verzenden","embed-init-loading":"App laden","embed-init-waiting":"Wachten op afbeelding","help":"Help","tab-settings":"Instellingen","settings-language":"Taal","settings-language-reload":"Wordt bijgewerkt na opnieuw laden.","settings-theme":"Thema","settings-save-reminder-label":"Opslaan herinnering","settings-save-reminder-disabled":"uitgeschakeld","settings-save-reminder-confirm-title":"Opslaan herinnering uitschakelen?","settings-save-reminder-confirm-a":"Er is geen automatische opslag en browsertabs blijven niet eeuwig bestaan. Als u niet regelmatig opslaat, raakt u waarschijnlijk uw werk kwijt.","settings-save-reminder-confirm-b":"Uitschakelen op eigen risico?","settings-save-reminder-confirm-disable":"Uitschakelen","theme-dark":"Donker","theme-light":"Licht","terms-of-service":"Servicevoorwaarden","licenses":"Licenties","source-code":"Broncode","auto":"auto","zoom-in":"Inzoomen","zoom-out":"Uitzoomen","radius":"Straal","constrain-proportions":"Verhoudingen behouden","width":"Breedte","height":"Hoogte","opacity":"Dekking","scatter":"Verspreiden","red":"Rood","green":"Groen","blue":"Blauw","eraser":"Gum","center":"Centreren","layers":"Lagen","background":"Achtergrond","scaling-algorithm":"Schaalalgoritme","algorithm-smooth":"Vloeiend","algorithm-pixelated":"Gepixeld","preview":"Voorbeeld","angle-snap":"Uitlijnen","angle-snap-title":"45\xb0-hoekuitlijning","lock-alpha":"Alpha vergrendelen","lock-alpha-title":"Vergrendelt het alphakanaal van de laag","reverse":"Omkeren","compare-before":"Voor","compare-after":"Na","loading":"Bezig met laden","more":"Meer","x-minutes":"{x}min","wip":"In bewerking","browser-zoom-help":"Dubbel tikken of uit elkaar trekken om de zoom van de browser te resetten.","dismiss":"Sluiten"}');

},{}]},["cW76H"], null, "parcelRequire94c2", {})

//# sourceMappingURL=nl.f9f11996.js.map
