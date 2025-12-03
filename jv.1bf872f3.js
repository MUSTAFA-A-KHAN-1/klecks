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
})({"4j0mf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6eaf38ec1bf872f3";
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

},{}],"8pbYd":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Ngalih UI kiwa/tengen","toggle-show-tools":"Tampilake/Singidaken Piranti","scroll":"Gulung","donate":"Nyumbang","home":"Ngarep","modal-new-tab":"Bukak ing tab anyar","tab-edit":"Nyunting","tab-file":"File","tool-brush":"Sikat","tool-paint-bucket":"Ember Cat","tool-gradient":"Gradien","tool-shape":"Wangun","tool-text":"Teks","tool-hand":"Alat tangan","tool-select":"Milih Alat","tool-zoom":"Zoom","tool-more-tools":"Piranti Liyane","tool-more-tools-click-again":"Klik maneh kanggo alat liyane","undo":"Batalaken","redo":"Baleni maneh","brush-pen":"Pen","brush-blend":"Nyampur","brush-sketchy":"Sketsa","brush-pixel":"Piksel","brush-chemy":"Kimia","brush-smudge":"Smudge","brush-size":"Ukuran","brush-blending":"Nyampur","brush-toggle-pressure":"Ngalih Sensitivitas Tekanan","brush-pen-circle":"Lingkaran","brush-pen-chalk":"Kapur","brush-pen-calligraphy":"Kaligrafi","brush-pen-square":"Kothak","brush-sketchy-scale":"Skala","brush-pixel-dither":"Dither","brush-chemy-fill":"Isi","brush-chemy-stroke":"Stroke","brush-chemy-mirror-x":"Simetri Horisontal","brush-chemy-mirror-y":"Simetri Vertikal","brush-chemy-gradient":"Gradien","brush-eraser-transparent-bg":"Latar mburi Transparan","stabilizer":"Penstabil","stabilizer-title":"Stroke Stabiliser","eyedropper":"Eyedropper","secondary-color":"Warna Sekunder","manual-color-input":"Input Warna Manual","mci-hex":"Hex","mci-copy":"Nyalin","modal-ok":"Nggih","modal-cancel":"Mbatalake","modal-close":"Nutup","layers-active-layer":"Lapisan Aktif","layers-layer":"Lapisan","layers-copy":"salinan","layers-blending":"Nyampur","layers-new":"Lapisan Anyar","layers-remove":"Mbusak Lapisan","layers-duplicate":"Duplikat Lapisan","layers-merge":"Gabung karo lapisan ngisor","layers-clear":"Lapisan sing cetha","layers-merge-advanced":"Maju gabungan","layers-merge-all":"Gabung kabeh","layers-rename":"Ganti jeneng","layers-active-layer-visible":"Lapisan aktif katon","layers-active-layer-hidden":"Lapisan aktif didhelikake","layers-visibility-toggle":"Visibilitas Lapisan","layers-blend-normal":"lumrah","layers-blend-darken":"peteng","layers-blend-multiply":"multiply","layers-blend-color-burn":"bakar werna","layers-blend-lighten":"ngenthengake","layers-blend-screen":"layar","layers-blend-color-dodge":"werna ngindari","layers-blend-overlay":"overlay","layers-blend-soft-light":"cahya alus","layers-blend-hard-light":"meh ora cahya","layers-blend-difference":"prab\xe9dan","layers-blend-exclusion":"pangecualian","layers-blend-hue":"werna","layers-blend-saturation":"kejenuhan","layers-blend-color":"werna","layers-blend-luminosity":"padhang","layers-rename-title":"Ganti Jeneng Layer","layers-rename-name":"Jeneng","layers-rename-clear":"Cetha Jeneng","layers-rename-sketch":"Sketsa","layers-rename-colors":"Werna-werna","layers-rename-shading":"Shading","layers-rename-lines":"Garis-garis","layers-rename-effects":"Efek-efek","layers-rename-foreground":"Latar ngarep","layers-merge-modal-title":"Gabung/Nyampur Lapisan","layers-merge-description":"Nggabungake lapisan sing dipilih karo sing ana ing ngisor. Pilih mode campuran:","file-no-autosave":"Ora ana autosave, ora ana panyimpenan awan","file-new":"Anyar","file-import":"Ngimpor","file-save":"Simpen","file-format":"Format file","file-show-save-dialog":"Tampilake dialog simpen","file-copy":"Nyalin","file-copy-title":"Nyalin Menyang Clipboard","file-paste":"Tempel","file-share":"Nuduhake","file-storage":"Panyimpenan Browser","file-storage-about":"Babagan Panyimpenan Browser","file-storage-cant-access":"Ora bisa ngakses panyimpenan.","file-storage-empty":"Kosong","file-storage-store":"Nyimpen","file-storage-open":"Mbukak","file-storage-open-confirmation":"Gambar iki wis mbukak ing tab liyane. Bukak kene uga?","file-storage-open-failed":"Gagal mbukak.","file-storage-clear":"Cetha","file-storage-clear-prompt":"Mbusak Panyimpenan Browser? Mbusak ora bisa dibatalake.","file-storage-storing":"Nyimpen","file-storage-overwrite":"Nimpa","file-storage-overwrite-confirm":"Nimpa Panyimpenan Browser? Data sing ditumpuk bakal dibusak kanthi permanen.","file-storage-min-ago":"{x}min kepungkur","file-storage-hours-ago":"{x}h kepungkur","file-storage-days-ago":"{x}d biyen","file-storage-month-ago":"> 1wulan kepungkur","file-storage-restored":"Dipulihake saka Panyimpenan Browser","file-storage-stored":"Disimpen menyang Panyimpenan Browser","file-storage-failed":"Gagal nyimpen menyang Panyimpenan Browser","file-storage-failed-1":"Gagal nyimpen. Penyebab sing bisa ditindakake:","file-storage-failed-2":"Metu saka papan disk","file-storage-failed-3":"Panyimpenan dipateni ing tab incognito","file-storage-failed-4":"Browser ora ndhukung panyimpenan","file-storage-failed-clear":"Gagal mbusak.","file-upload":"Unggahan","tab-recovery-recover-tabs":"Waras tab sing ditutup","tab-recovery-explanation":"Data recovery mung disimpen kanggo sawetara wektu. Simpen kanggo mesthekake karya sampeyan ora ilang.","tab-recovery-total-quota-label":"Total:","tab-recovery-empty":"Ora ana sing bisa pulih.","tab-recovery-recover":"Waras","tab-recovery-delete":"Mbusak","tab-recovery-delete-confirmation":"Mbusak pemulihan iki? Pambusakan ora bisa dibatalake.","tab-recovery-failed-to-recover":"Gagal mbalekake tab.","tab-recovery-recovered":"Tab mbalekake.","cleared-layer":"Lapisan sing diresiki","cleared-selected-area":"Mbusak area sing dipilih","filled":"Kapenuhan","filled-selected-area":"Pilihan sing diisi","new-title":"Gambar Anyar","new-current":"Saiki","new-fit":"Fit","new-oversize":"Kegedhen","new-square":"Kothak","new-landscape":"Malang","new-portrait":"Mujur","new-screen":"Layar","new-video":"Video","new-din-paper":"Kertas DIN","new-px":"px","new-ratio":"Rasio","upload-title":"Upload menyang Imgur","upload-link-notice":"Sapa wae sing duwe pranala menyang gambar sing sampeyan upload bakal bisa ndeleng.","upload-name":"Judhul","upload-title-untitled":"Tanpa irah-irahan","upload-caption":"Caption","upload-submit":"Unggahan","upload-uploading":"Ngunggah...","upload-success":"Upload Kasil","upload-failed":"Unggahan gagal.","upload-delete":"Kanggo mbusak gambar saka Imgur ngunjungi:","cropcopy-title-copy":"Salin menyang Clipboard","cropcopy-title-crop":"Potong","cropcopy-mask":"Topeng ora dipilih","cropcopy-click-hold":"Klik-tengen utawa pencet terus kanggo nyalin.","cropcopy-btn-copy":"Kanggo Clipboard.","cropcopy-copied":"Disalin.","cropcopy-btn-crop":"Aplikasi Potong","crop-drag-to-crop":"Seret kanggo motong","filter-crop-extend":"Potong/Ngluwihi","filter-flip":"Flip","filter-perspective":"Perspektif","filter-resize":"Ngowahi ukuran","filter-rotate":"Puteran","filter-transform":"Ngowahi","filter-bright-contrast":"Padhang/Kontras","filter-curves":"Kurva","filter-hue-sat":"Werna/Saturasi","filter-invert":"Walik","filter-tilt-shift":"Ngalih Miring","filter-to-alpha":"Kanggo Alfa","filter-triangle-blur":"Triangle Blur","filter-unsharp-mask":"Topeng Unsharp","filter-crop-title":"Potong / Ngluwihi","filter-crop-description":"Potong utawa ngluwihi gambar.","filter-crop-left":"Ngiwa","filter-crop-right":"Bener","filter-crop-top":"Ndhuwur","filter-crop-bottom":"Ngisor","filter-crop-rule-thirds":"Aturan Katelu","filter-crop-fill":"Isi","filter-flip-title":"Flip","filter-flip-description":"Flips lapisan utawa kab\xe8h gambar.","filter-flip-horizontal":"Horisontal","filter-flip-vertical":"Vertikal","filter-flip-image":"Flip Gambar","filter-flip-layer":"Flip Lapisan","filter-perspective-title":"Perspektif","filter-perspective-description":"Ngowahi lapisan sing dipilih.","filter-resize-title":"Ngowahi ukuran","filter-resize-description":"Ngowahi ukuran gambar.","filter-rotate-title":"Puteran","filter-rotate-description":"Puter gambar.","filter-transform-empty":"Lapisan kosong","filter-transform-empty-selection":"Lapisan kosong ing area sing dipilih.","filter-transform-title":"Ngowahi","filter-transform-description":"Ngowahi lapisan sing dipilih. Tahan Shift kanggo prilaku tambahan.","filter-transform-rotation":"Rotasi","filter-transform-flip":"Flip","filter-transform-center":"Tengah","filter-transform-constrain":"Watesan","filter-transform-snap":"Snap","filter-transform-snap-title":"Snap Rotasi lan Posisi","filter-bright-contrast-title":"Padhang / Kontras","filter-bright-contrast-description":"Ganti padhange lan kontras kanggo lapisan sing dipilih.","filter-bright-contrast-brightness":"Padhang","filter-bright-contrast-contrast":"Kontras","filter-curves-title":"Kurva","filter-curves-description":"Gunakake kurva ing lapisan sing dipilih.","filter-curves-all":"Kabeh","filter-hue-sat-title":"Hue / Saturasi","filter-hue-sat-description":"Ganti hue lan jenuh kanggo lapisan sing dipilih.","filter-hue-sat-hue":"Hue","filter-hue-sat-saturation":"Saturasi","filter-applied":"ditrapake","filter-tilt-shift-title":"Ngalih Miring","filter-tilt-shift-description":"Nindakake shift miring ing lapisan sing dipilih.","filter-tilt-shift-blur":"Radius Blur","filter-tilt-shift-gradient":"Radius Gradien","filter-to-alpha-title":"Kanggo Alfa","filter-to-alpha-description":"Ngasilake saluran alfa kanggo lapisan sing dipilih saka:","filter-to-alpha-inverted-lum":"Walik Luminance","filter-to-alpha-lum":"Luminance","filter-to-alpha-replace":"Ganti RGB","filter-triangle-blur-title":"Triangle Blur","filter-triangle-blur-description":"Aplikasi blur segitiga ing lapisan sing dipilih.","filter-unsharp-mask-title":"Topeng Unsharp","filter-unsharp-mask-description":"Ngasah lapisan sing dipilih kanthi ukuran piksel adoh saka rata-rata tanggane.","filter-unsharp-mask-strength":"Kekuwatan","filter-grid":"Grid","filter-grid-description":"Nggambar kothak ing lapisan sing dipilih.","filter-noise":"Rame","filter-noise-description":"Nambahake gangguan menyang lapisan sing dipilih.","filter-noise-scale":"Skala","filter-noise-alpha":"Alfa","filter-pattern":"Pola","filter-pattern-description":"Ngasilake pola ing lapisan sing dipilih. Seret pratinjau kanggo kontrol luwih lanjut.","filter-distort":"Distort","filter-distort-description":"Ngrusak lapisan sing dipilih.","filter-distort-phase":"Urutane","filter-distort-stepsize":"Ukuran Langkah","filter-distort-sync-xy":"Sinkronisasi XY","filter-vanish-point":"Titik Lenyap","filter-vanish-point-title":"Titik ilang","filter-vanish-point-description":"Nambah titik ilang menyang lapisan sing dipilih. Seret pratinjau kanggo mindhah.","filter-vanish-point-lines":"Garis-garis","dropper-drop":"Gulung kanggo ngimpor","dropper-as-image":"Minangka Gambar Anyar","dropper-as-layer":"Minangka Lapisan","import-opening":"Mbukak file...","import-title":"Impor Gambar","import-too-large":"Gambar gedhe banget, bakal dikurangi.","import-btn-as-layer":"Minangka Lapisan","import-btn-as-image":"Minangka Gambar","import-as-layer-title":"Impor Gambar minangka Lapisan Anyar","import-as-layer-description":"Nyetel posisi gambar sing diimpor.","import-as-layer-limit-reached":"Watesan lapisan wis tekan. Gambar bakal diselehake ing lapisan sing wis ana.","import-as-layer-fit":"Fit","import-flatten":"Gambar flatten","import-unsupported-file":"Jinis file sing ora didhukung. Waca Bantuan kanggo jinis sing didhukung.","import-broken-file":"Ora bisa mbukak gambar. File bisa rusak.","import-psd-unsupported":"Fitur sing ora didhukung. PSD kudu flattened.","import-psd-limited-support":"Dhukungan PSD diwatesi. Flattened bakal luwih katon bener.","import-psd-too-large":"Gambar ngluwihi ukuran maksimal {x} x {x} piksel. Ora bisa ngimpor.","import-psd-size":"Ukuran gambar","clipboard-read-fail":"Gagal maca saka clipboard.","clipboard-no-image":"Ora ana gambar sing ditemokake ing clipboard.","hand-reset":"Reset","hand-fit":"Fit","hand-inertia-scrolling":"Gulung Inertia","bucket-tolerance":"Toleransi","bucket-sample":"Sampel","bucket-sample-title":"Kang lapisan kanggo sampel werna saka","bucket-sample-all":"Kabeh","bucket-sample-active":"Aktif","bucket-sample-above":"Ndhuwur","bucket-grow":"Tuwuh","bucket-grow-title":"Tuwuh area sing diisi (ing piksel)","bucket-contiguous":"Jejer","bucket-contiguous-title":"Mung isi wilayah sing disambungake","gradient-linear":"Linear","gradient-linear-mirror":"Linear-Mirror","gradient-radial":"Radial","shape-stroke":"Stroke","shape-fill":"Isi","shape-rect":"Persegi panjang","shape-ellipse":"Ellipse","shape-line":"Baris","shape-line-width":"Jembar Garis","shape-outwards":"Njaba","shape-fixed":"Tetep 1:1","shape-auto-pan":"Pan-otomatis","shape-auto-pan-title":"Obah kanthi otomatis nalika sampeyan nggambar","text-instruction":"Klik kanvas kanggo nyelehake teks","text-title":"Tambah Teks","text-text":"Teks","text-font":"Font","text-placeholder":"Teks Panjenengan","text-color":"Werna","text-size":"Ukuran","text-line-height":"Dhuwur garis","text-letter-spacing":"Spasi layang","text-left":"Ngiwa","text-center":"Tengah","text-right":"Bener","text-italic":"Miring","text-bold":"Kandel","text-failed-import":"Gagal ngimpor file ing ngisor iki:","text-supported-formats":"Format sing didhukung:","select-select":"Pilih","select-transform":"Ngowahi","select-lasso":"Lasso","select-polygon":"Poligon","select-boolean-replace":"Ngganti","select-boolean-add":"Tambah","select-boolean-subtract":"Ngurangi","select-all":"Kabeh","select-invert":"Walik","select-reset":"Reset","select-fill":"Isi","select-erase":"Mbusak","select-transform-clone":"Klone","select-transform-clone-applied":"Kloning","select-transform-move-to-layer":"Pindhah menyang lapisan:","select-transform-applied":"Transformasi ditrapake","select-transform-empty":"Wilayah sing dipilih ing lapisan aktif kosong.","save-reminder-title":"Karya sing ora Disimpen","save-reminder-text":"Gambar ora disimpen ing {a} menit{b}. Simpen saiki kanggo nyegah mundhut pungkasan.","save-reminder-save-psd":"Simpen Minangka PSD","save-reminder-psd-layers":"PSD bakal ngelingi kabeh lapisan.","backup-drawing":"Sampeyan bisa nggawe serep gambar sampeyan.","submit":"Kirimake","submit-title":"Kirim Gambar","submit-prompt":"Kirim gambar?","submit-submitting":"Ngirim","embed-init-loading":"Loading app","embed-init-waiting":"Nunggu gambar","help":"Pitulung","tab-settings":"Setelan","settings-language":"Basa","settings-language-reload":"Bakal nganyari sawise reloading.","settings-theme":"Tema","settings-save-reminder-label":"Simpen Pangeling","settings-save-reminder-disabled":"dipat\xe8ni","settings-save-reminder-confirm-title":"Pateni Simpen Pangeling?","settings-save-reminder-confirm-a":"Ora ana autosave lan tab browser ora langgeng. Yen sampeyan ora nyimpen kanthi periodik, sampeyan bakal kelangan karya.","settings-save-reminder-confirm-b":"Mateni kanthi resiko dhewe?","settings-save-reminder-confirm-disable":"Pateni","theme-dark":"Peteng","theme-light":"Cahya","terms-of-service":"Katentuan Pangginaan supados langkung Service","licenses":"Lisensi","source-code":"Kode Sumber","auto":"otomatis","zoom-in":"Nggedhekake","zoom-out":"Zoom Metu","radius":"Radius","constrain-proportions":"Watesan Proporsi","width":"Jembar","height":"Dhuwur","opacity":"Opacity","scatter":"Buyar","red":"Abang","green":"Ijo","blue":"Biru","eraser":"Pambupus","center":"Tengah","layers":"Lapisans","background":"Latar mburi","scaling-algorithm":"Algoritma Skala","algorithm-smooth":"Gamelan","algorithm-pixelated":"Pixelated","preview":"Pratinjau","angle-snap":"Snap","angle-snap-title":"45\xb0 Sudut Snapping","lock-alpha":"Kunci Alfa","lock-alpha-title":"Ngunci saluran alfa lapisan","reverse":"Mbalikke","compare-before":"Sadurunge","compare-after":"Sawise","loading":"Loading","more":"Liyane","x-minutes":"{x}min","wip":"Kerja ing kemajuan","browser-zoom-help":"Tutul kaping pindho utawa jiwitake kanggo ngreset zoom browser.","dismiss":"Ngilangi"}');

},{}]},["4j0mf"], null, "parcelRequire94c2", {})

//# sourceMappingURL=jv.1bf872f3.js.map
