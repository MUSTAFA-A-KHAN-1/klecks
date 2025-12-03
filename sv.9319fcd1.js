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
})({"iWwnm":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "39d2ebc39319fcd1";
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

},{}],"gk47B":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Gr\xe4nssnitt \xe5t v\xe4nster/h\xf6ger","toggle-show-tools":"Visa/g\xf6m gr\xe4nssnittet","scroll":"Rulla","donate":"Donera","home":"Huvudsida","modal-new-tab":"\xd6ppna i ny flik","tab-edit":"Redigera","tab-file":"Arkiv","tool-brush":"Pensel","tool-paint-bucket":"Fyll i","tool-gradient":"Toning","tool-shape":"Former","tool-text":"Text","tool-hand":"Handverktyg","tool-select":"Omr\xe5desverktyg","tool-zoom":"Zooma","tool-more-tools":"Fler verktyg","undo":"\xc5ngra","redo":"G\xf6r om","brush-pen":"Penna","brush-blend":"Blandad","brush-sketchy":"Skiss","brush-pixel":"Pixelerad","brush-chemy":"Kemi","brush-smudge":"Smeta ut","brush-size":"Storlek","brush-blending":"Fuktighet","brush-toggle-pressure":"Tryckk\xe4nslighet av/p\xe5","brush-pen-circle":"Cirkel","brush-pen-chalk":"Krita","brush-pen-calligraphy":"Kalligrafisk","brush-pen-square":"Kvadrat","brush-sketchy-scale":"Skala","brush-pixel-dither":"Gitter","brush-chemy-fill":"Fyll","brush-chemy-stroke":"Linje","brush-chemy-mirror-x":"Horisontal symmetri","brush-chemy-mirror-y":"Vertikal symmetri","brush-chemy-gradient":"Toning","brush-eraser-transparent-bg":"Genomskinlig bakgrund","stabilizer":"Stabilisering","stabilizer-title":"Linjesstabilisering","eyedropper":"Pipett","secondary-color":"Sekund\xe4rf\xe4rg","manual-color-input":"V\xe4lj f\xe4rg manuellt","mci-hex":"HTML-kod","mci-copy":"Till urklipp","modal-ok":"Ok","modal-cancel":"Avbryt","modal-close":"St\xe4ng","layers-active-layer":"Valt lager","layers-layer":"Lager","layers-copy":"kopia","layers-blending":"Blandning","layers-new":"Nytt lager","layers-remove":"Ta bort lager","layers-duplicate":"Duplicera lager","layers-merge":"Sl\xe5 ihop med lagret under","layers-clear":"Rensa lager","layers-merge-all":"Sl\xe5 ihop alla lager","layers-rename":"D\xf6p om","layers-active-layer-visible":"Detta lager \xe4r synligt","layers-active-layer-hidden":"Detta lager \xe4r inte synligt","layers-visibility-toggle":"Visa/g\xf6m lagret","layers-blend-normal":"normal","layers-blend-darken":"m\xf6rkare","layers-blend-multiply":"multiplicera","layers-blend-color-burn":"efterbelys f\xe4rg","layers-blend-lighten":"ljusare","layers-blend-screen":"raster","layers-blend-color-dodge":"f\xe4rgskugga","layers-blend-overlay":"t\xe4cka \xf6ver","layers-blend-soft-light":"mjukt ljus","layers-blend-hard-light":"skarpt ljus","layers-blend-difference":"differens","layers-blend-exclusion":"uteslutning","layers-blend-hue":"nyans","layers-blend-saturation":"m\xe4ttnad","layers-blend-color":"f\xe4rg","layers-blend-luminosity":"luminiscens","layers-rename-title":"D\xf6p om lager","layers-rename-name":"Namn","layers-rename-clear":"Rensa namnet","layers-rename-sketch":"Skiss","layers-rename-colors":"F\xe4rger","layers-rename-shading":"Skuggning","layers-rename-lines":"Linjer","layers-rename-effects":"Effekter","layers-rename-foreground":"F\xf6rgrund","layers-merge-modal-title":"Sl\xe5 ihop/blanda lager","layers-merge-description":"Sl\xe5r ihop det valda lagret med det lager som ligger under. V\xe4lj metod:","file-no-autosave":"Obs! Sparas inte automatiskt.","file-new":"Ny","file-import":"\xd6ppna","file-save":"Spara","file-format":"Filformat","file-show-save-dialog":"Visa sparf\xf6nster","file-copy":"Till urklipp","file-copy-title":"Kopiera till urklipp","file-paste":"Klistra in","file-share":"Dela","file-storage":"Webbl\xe4sarlagring","file-storage-about":"Om webbl\xe4sarlagring","file-storage-cant-access":"Kunde inte komma \xe5t lagring.","file-storage-empty":"Tomt","file-storage-store":"Lagra","file-storage-open":"Ladda in","file-storage-open-confirmation":"Den h\xe4r bilden visas redan i en annan flik. Ladda in den h\xe4r ocks\xe5?","file-storage-open-failed":"Kunde inte ladda in bild.","file-storage-clear":"Rensa","file-storage-clear-prompt":"Rensa webbl\xe4sarlagring? \xc5tg\xe4rden kan inte \xe5ngras.","file-storage-storing":"Lagrar","file-storage-overwrite":"Skriv \xf6ver","file-storage-min-ago":"{x} min sedan","file-storage-hours-ago":"{x} tim sedan","file-storage-days-ago":"{x} dagar sedan","file-storage-month-ago":"Mer \xe4n 1 m\xe5n sedan","file-storage-restored":"\xc5terst\xe4llde fr\xe5n webbl\xe4sarlagring","file-storage-stored":"Lagrade i webbl\xe4sare","file-storage-failed":"Webbl\xe4sarlagring misslyckades","file-storage-failed-1":"Lagring misslyckades. M\xf6jliga anledningar:","file-storage-failed-2":"Fullt lagringsminne","file-storage-failed-3":"Lagring \xe4r blockerat i inkognitoflikar","file-storage-failed-4":"Webbl\xe4saren st\xf6der inte lagring","file-storage-failed-clear":"Rensning misslyckades.","file-upload":"Ladda upp","tab-recovery-recover-tabs":"\xc5terst\xe4ll st\xe4ngda flikar","tab-recovery-explanation":"\xc5terst\xe4llningsdata finns bara i en liten stund. Spara s\xe5 att ditt arbete inte g\xe5r f\xf6rlorat.","tab-recovery-total-quota-label":"Totalt:","tab-recovery-empty":"Det finns inget att \xe5terst\xe4lla.","tab-recovery-recover":"\xc5terst\xe4ll","tab-recovery-delete":"Radera","tab-recovery-delete-confirmation":"Radera denna \xe5terst\xe4llning? Detta kan inte \xe5ngras.","tab-recovery-failed-to-recover":"Kunde inte \xe5terst\xe4lla flik.","tab-recovery-recovered":"Flik \xe5terst\xe4lld.","cleared-layer":"Rensade lagret","cleared-selected-area":"Rensade det valda omr\xe5det","filled":"Fyllde i","filled-selected-area":"Fyllde i omr\xe5det","new-title":"Ny bild","new-current":"Befintlig","new-fit":"Passa","new-oversize":"Enorm","new-square":"Kvadratisk","new-landscape":"Landskapsbild","new-portrait":"Portr\xe4ttbild","new-screen":"Bildsk\xe4rm","new-video":"Video","new-din-paper":"A4-papper","new-px":"px","new-ratio":"Bildf\xf6rh\xe5llande","upload-title":"Ladda upp till Imgur","upload-link-notice":"Bilden kan ses av alla som har tillg\xe5ng till l\xe4nken.","upload-name":"Titel","upload-title-untitled":"Ingen titel","upload-caption":"Beskrivning","upload-submit":"Ladda upp","upload-uploading":"Laddar upp...","upload-success":"Uppladdning lyckades","upload-failed":"Uppladdning misslyckades","upload-delete":"Bes\xf6k denna hemsida f\xf6r att ta bort din bild fr\xe5n Imgur:","cropcopy-title-copy":"Kopiera till urklipp","cropcopy-title-crop":"Besk\xe4r","cropcopy-click-hold":"H\xf6gerklicka eller tryck och h\xe5ll in f\xf6r att kopiera.","cropcopy-btn-copy":"Till urklipp","cropcopy-copied":"Kopierat","cropcopy-btn-crop":"Bekr\xe4fta","crop-drag-to-crop":"Dra f\xf6r att besk\xe4ra","filter-crop-extend":"Besk\xe4r/f\xf6rstora","filter-flip":"V\xe4nd om","filter-perspective":"Vinkel","filter-resize":"\xc4ndra storlek","filter-rotate":"Rotera","filter-transform":"Omforma","filter-bright-contrast":"Ljusst./kontrast","filter-curves":"Kurvor","filter-hue-sat":"Nyans/m\xe4ttnad","filter-invert":"Invertera","filter-tilt-shift":"Lutn./f\xf6rskjutn.","filter-to-alpha":"Till alfa","filter-triangle-blur":"Triangelosk\xe4rpa","filter-unsharp-mask":"Oskarp mask","filter-crop-title":"Besk\xe4r / f\xf6rstora","filter-crop-description":"Besk\xe4r eller f\xf6rl\xe4ng bilden.","filter-crop-left":"\xc5t v\xe4nster","filter-crop-right":"\xc5t h\xf6ger","filter-crop-top":"Upp\xe5t","filter-crop-bottom":"Ned\xe5t","filter-crop-rule-thirds":"Tredjedelsregeln","filter-crop-fill":"Fyll i","filter-flip-title":"V\xe4nd om","filter-flip-description":"V\xe4nder lagret eller hela bilden.","filter-flip-horizontal":"Horisontalt","filter-flip-vertical":"Vertikalt","filter-flip-image":"V\xe4nd om bilden","filter-flip-layer":"V\xe4nd om lagret","filter-perspective-title":"Vinkel","filter-perspective-description":"Vinklar bilden p\xe5 valt lager","filter-resize-title":"\xc4ndra storlek","filter-resize-description":"\xc4ndrar bildens storlek","filter-rotate-title":"Rotera","filter-rotate-description":"Roterar bilden","filter-transform-empty":"Lagret \xe4r tomt.","filter-transform-title":"Omforma","filter-transform-description":"H\xe5ll in Skift f\xf6r ytterligare funktioner","filter-transform-rotation":"Rotation","filter-transform-flip":"V\xe4nd om","filter-transform-center":"Centrera","filter-transform-constrain":"L\xe5s f\xf6rh\xe5llande","filter-transform-snap":"F\xe4st","filter-transform-snap-title":"F\xe4st i rotation och position","filter-bright-contrast-title":"Ljusstyrka / kontrast","filter-bright-contrast-description":"\xc4ndrar det valda lagrets ljusstyrka och kontrast.","filter-bright-contrast-brightness":"Ljusstyrka","filter-bright-contrast-contrast":"Kontrast","filter-curves-title":"F\xe4rgkurvor","filter-curves-description":"\xc4ndrar f\xe4rgkurvor p\xe5 valt lager.","filter-curves-all":"Alla","filter-hue-sat-title":"Nyans / m\xe4ttnad","filter-hue-sat-description":"\xc4ndrar det valda lagrets nyans och m\xe4ttnad.","filter-hue-sat-hue":"Nyans","filter-hue-sat-saturation":"M\xe4ttnad","filter-applied":"applicerat","filter-tilt-shift-title":"Lutning / f\xf6rskjutning","filter-tilt-shift-description":"Till\xe4mpar en lutning/f\xf6rskjutningseffekt p\xe5 valt lager.","filter-tilt-shift-blur":"Osk\xe4rperadie","filter-tilt-shift-gradient":"Toningsradie","filter-to-alpha-title":"Till alfakanal","filter-to-alpha-description":"Genererar en alfakanal f\xf6r valt lager via:","filter-to-alpha-inverted-lum":"Inverterad luminiscens","filter-to-alpha-lum":"Luminiscens","filter-to-alpha-replace":"Byt ut RGB","filter-triangle-blur-title":"Triangelosk\xe4rpa","filter-triangle-blur-description":"Till\xe4mpar triangelosk\xe4rpa p\xe5 valt lager.","filter-unsharp-mask-title":"Oskarp mask","filter-unsharp-mask-description":"G\xf6r bilden p\xe5 lagret skarpare genom att skilja pixlar fr\xe5n den genomsnittliga f\xe4rgen av dess grannar.","filter-unsharp-mask-strength":"Styrka","filter-grid":"Rutn\xe4t","filter-grid-description":"Ritar ett rutn\xe4t p\xe5 det valda lagret.","filter-noise":"Visuellt brus","filter-noise-description":"L\xe4gger till brus p\xe5 det valda lagret.","filter-noise-scale":"Skala","filter-noise-alpha":"Alfa","filter-pattern":"M\xf6nster","filter-pattern-description":"Skapar ett m\xf6nster p\xe5 valt lager. Dra i f\xf6rhandsvisningen f\xf6r att flytta m\xf6nstret.","filter-distort":"Distorsion","filter-distort-description":"F\xf6rvr\xe4nger det valda lagret.","filter-distort-phase":"Fas","filter-distort-stepsize":"Stegstorlek","filter-distort-sync-xy":"Synka XY","filter-vanish-point":"Flyktpunkt","filter-vanish-point-title":"Flyktpunkt","filter-vanish-point-description":"L\xe4gger till en flyktpunkt till det valda lagret. Dra i f\xf6rhandsvisningen f\xf6r att flytta runt den.","filter-vanish-point-lines":"M\xe4ngd linjer","dropper-drop":"Sl\xe4pp filen f\xf6r att \xf6ppna","dropper-as-image":"Som ny bild","dropper-as-layer":"Som lager","import-opening":"Filen \xf6ppnas...","import-title":"\xd6ppna bild","import-too-large":"F\xf6r stor bild, kommer g\xf6ras mindre.","import-btn-as-layer":"Som lager","import-btn-as-image":"Som bild","import-as-layer-title":"\xd6ppna bild som nytt lager","import-as-layer-description":"\xc4ndra positionen p\xe5 din bild.","import-as-layer-limit-reached":"Gr\xe4nsen p\xe5 lager har uppn\xe5tts. Bilden kommer infogas p\xe5 befintligt lager.","import-as-layer-fit":"Passa","import-flatten":"Platta till bilden","import-unsupported-file":"Kleki st\xf6der inte denna filtyp. Se Hj\xe4lpsidan f\xf6r st\xf6dda filtyper.","import-broken-file":"Kunde ej \xf6ppna fil. Den m\xe5 vara korrupterad.","import-psd-unsupported":"Ost\xf6dda funktioner uppt\xe4cktes. PSD-filen beh\xf6vde plattas till.","import-psd-limited-support":"St\xf6d f\xf6r PSD-filer har vissa gr\xe4nser. En tillplattad bild kommer h\xf6gst sannolikt se b\xe4ttre ut.","import-psd-too-large":"Kunde inte \xf6ppna filen. Bilden \xf6verskrider gr\xe4nsen p\xe5 {x} x {x} pixlar.","import-psd-size":"Bildstorlek","clipboard-read-fail":"Kunde inte l\xe4sa urklipp.","clipboard-no-image":"Kunde inte hitta n\xe5gon bild i urklipp.","hand-reset":"\xc5terst\xe4ll","hand-fit":"Passa","hand-inertia-scrolling":"Tr\xf6ghetsrullning","bucket-tolerance":"K\xe4nslighet","bucket-sample":"Lyder lager","bucket-sample-title":"Vilka lager som fyllverktyget kommer ha som referens n\xe4r den fyller i.","bucket-sample-all":"Alla","bucket-sample-active":"Nuvarande","bucket-sample-above":"Lager ovan","bucket-grow":"V\xe4x","bucket-grow-title":"(I pixlar) Expanderar utanf\xf6r fyllningsomr\xe5det","bucket-contiguous":"Kr\xe4ver angr\xe4nsning","bucket-contiguous-title":"Fyller bara i kopplade omr\xe5den","gradient-linear":"Linj\xe4r","gradient-linear-mirror":"Speglad linj\xe4r","gradient-radial":"Sf\xe4risk","shape-stroke":"Linje","shape-fill":"Ifylld","shape-rect":"Rektangel","shape-ellipse":"Ellips","shape-line":"Linje","shape-line-width":"Linjebredd","shape-outwards":"Inifr\xe5n ut","shape-fixed":"L\xe5st i 1:1","shape-auto-pan":"Panorering","shape-auto-pan-title":"Automatisk panorering r\xf6r runt bilden medans du ritar","text-instruction":"Klicka p\xe5 bilden f\xf6r att l\xe4gga till en textruta","text-title":"L\xe4gg till textruta","text-text":"Text","text-font":"Typsnitt","text-placeholder":"Din text h\xe4r","text-color":"F\xe4rg","text-size":"Storlek","text-line-height":"Radavst\xe5nd","text-letter-spacing":"Teckenavst\xe5nd","text-left":"V\xe4nsterjustera","text-center":"Centrera","text-right":"H\xf6gerjustera","text-italic":"Kursiv","text-bold":"Fetstil","select-select":"Omr\xe5de","select-transform":"Omforma","select-lasso":"Lasso","select-polygon":"M\xe5ngh\xf6rning","select-boolean-replace":"Byt ut","select-boolean-add":"Addera","select-boolean-subtract":"Subtrahera","select-all":"Allting","select-invert":"Invertera omr\xe5de","select-reset":"Rensa","select-fill":"Fyll i","select-erase":"Sudda","select-transform-clone":"Klona","select-transform-clone-applied":"Klonade omr\xe5de","select-transform-move-to-layer":"Flytta till lager:","select-transform-applied":"\xc4ndringar till\xe4mpade","select-transform-empty":"Detta lager har ingenting i det valda omr\xe5det.","save-reminder-title":"Osparat arbete","save-reminder-text":"Bilden har inte sparats p\xe5 {a} minuter{b}. F\xf6r att undvika att du f\xf6rlorar arbete borde du spara nu.","save-reminder-save-psd":"Spara som PSD-fil","save-reminder-psd-layers":"PSD-filer minns alla lager!","backup-drawing":"Du kan g\xf6ra en backup av din bild.","submit":"Skicka in","submit-title":"Skicka in bild","submit-prompt":"Vill du skicka in den h\xe4r bilden?","submit-submitting":"Skickar in","embed-init-loading":"Laddar","embed-init-waiting":"Laddar din bild","help":"Hj\xe4lp","tab-settings":"Inst\xe4llningar","settings-language":"Spr\xe5k","settings-language-reload":"Ladda om sidan f\xf6r att till\xe4mpa \xe4ndringar.","settings-theme":"Tema","settings-save-reminder-label":"Sparp\xe5minnelse","settings-save-reminder-disabled":"deaktiverad","settings-save-reminder-confirm-title":"Deaktivera sparp\xe5minnelser?","settings-save-reminder-confirm-a":"Det finns ingen automatisk sparfunktion och webbl\xe4sarflikar kan l\xe4tt f\xf6rsvinna. Sparar du inte med j\xe4mna mellanrum s\xe5 kan du f\xf6rlora ditt arbete.","settings-save-reminder-confirm-b":"Vill du verkligen deaktivera? (p\xe5 egen risk!)","settings-save-reminder-confirm-disable":"Deaktivera","theme-dark":"M\xf6rkt","theme-light":"Ljust","terms-of-service":"Anv\xe4ndarvillkor","licenses":"Licenser","source-code":"K\xe4llkod","auto":"automatiskt","zoom-in":"Zooma in","zoom-out":"Zooma ut","radius":"Radie","constrain-proportions":"Beh\xe5ll bildf\xf6rh\xe5llande","width":"Bredd","height":"H\xf6jd","opacity":"Synlighet","scatter":"Utspriddhet","red":"R\xf6d","green":"Gr\xf6n","blue":"Bl\xe5","eraser":"Sudd","center":"Centrera","layers":"Lager","background":"Bakgrund","scaling-algorithm":"Skalningsalgoritm","algorithm-smooth":"Utj\xe4mnad","algorithm-pixelated":"Pixelerad","preview":"F\xf6rhandsvisning","angle-snap":"F\xe4st","angle-snap-title":"F\xe4st i vinkel","lock-alpha":"L\xe5s alfa","lock-alpha-title":"L\xe5ser lagrets alfakanal","reverse":"Invertera","compare-before":"F\xf6re","compare-after":"Efter","loading":"Laddar","more":"Mer","x-minutes":"{x} min","wip":"Arbete p\xe5g\xe5r","browser-zoom-help":"Tryck tv\xe5 g\xe5nger eller nyp in\xe5t f\xf6r att \xe5terst\xe4lla vanlig webbl\xe4sarzoomniv\xe5.","dismiss":"Avf\xe4rda"}');

},{}]},["iWwnm"], null, "parcelRequire94c2", {})

//# sourceMappingURL=sv.9319fcd1.js.map
