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
})({"1fRcI":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "2a962ee8e257a609";
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

},{}],"k2wtJ":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"P\u0101rsl\u0113gt kreiso/labo UI","toggle-show-tools":"R\u0101d\u012Bt/Sl\u0113pt r\u012Bkus","scroll":"Ritin\u0101t","donate":"Ziedot","home":"S\u0101kums","modal-new-tab":"Atv\u0113rt jaun\u0101 ciln\u0113","tab-edit":"Redi\u0123\u0113t","tab-file":"Fails","tool-brush":"Ota","tool-paint-bucket":"Aizpild\u012B\u0161anas r\u012Bks","tool-gradient":"P\u0101rejas r\u012Bks","tool-shape":"Fig\u016Bru r\u012Bks","tool-text":"Teksta r\u012Bks","tool-hand":"Rokas r\u012Bks","tool-select":"Atlases r\u012Bks","tool-zoom":"T\u0101lummai\u0146as r\u012Bks","tool-more-tools":"Vair\u0101k r\u012Bku","undo":"Atsaukt","redo":"Atcelt atsauk\u0161anu","brush-pen":"Pildspalva","brush-blend":"Sajauk\u0161ana","brush-sketchy":"Skic\u0113ts","brush-pixel":"Pikse\u013Cota","brush-chemy":"Kemija","brush-smudge":"Izsm\u0113r\u0113\u0161ana","brush-size":"Izm\u0113rs","brush-blending":"Sajauk\u0161anas pak\u0101pe","brush-toggle-pressure":"P\u0101rsl\u0113gt spiediena jut\u012Bbu","brush-pen-circle":"Aplis","brush-pen-chalk":"Kr\u012Bts","brush-pen-calligraphy":"Kaligr\u0101fija","brush-pen-square":"Kvadr\u0101ts","brush-sketchy-scale":"M\u0113rogs","brush-pixel-dither":"Punktu raksts","brush-chemy-fill":"Aizpild\u012Bt","brush-chemy-stroke":"Stroke","brush-chemy-mirror-x":"Horizont\u0101l\u0101 simetrija","brush-chemy-mirror-y":"Vertik\u0101l\u0101 simetrija","brush-chemy-gradient":"Kr\u0101su p\u0101reja","brush-eraser-transparent-bg":"Caursp\u012Bd\u012Bgs fons","stabilizer":"Stabilizators","stabilizer-title":"L\u012Bniju stabilizators","eyedropper":"Pipete","secondary-color":"Sekund\u0101r\u0101 kr\u0101sa","manual-color-input":"Manu\u0101la kr\u0101su ievade","mci-hex":"Heksadecim\u0101ls","mci-copy":"Kop\u0113t","modal-ok":"Labi","modal-cancel":"Atcelt","modal-close":"Aizv\u0113rt","layers-active-layer":"Akt\u012Bvais sl\u0101nis","layers-layer":"Sl\u0101nis","layers-copy":"Kopija","layers-blending":"Sajauk\u0161ana","layers-new":"Jauns sl\u0101nis","layers-remove":"No\u0146emt sl\u0101ni","layers-duplicate":"Dubl\u0113t sl\u0101ni","layers-merge":"Apvienot ar apak\u0161\u0113jo sl\u0101ni","layers-clear":"Not\u012Br\u012Bt sl\u0101ni","layers-merge-all":"Apvienot visus","layers-rename":"P\u0101rd\u0113v\u0113t","layers-active-layer-visible":"Akt\u012Bvais sl\u0101nis ir redzams","layers-active-layer-hidden":"Akt\u012Bvais sl\u0101nis ir pasl\u0113pts","layers-visibility-toggle":"Sl\u0101\u0146a redzam\u012Bba","layers-blend-normal":"Norm\u0101ls","layers-blend-darken":"Aptum\u0161ot","layers-blend-multiply":"Reizin\u0101t","layers-blend-color-burn":"Kr\u0101su dedzin\u0101\u0161ana","layers-blend-lighten":"Gai\u0161in\u0101t","layers-blend-screen":"Ekr\u0101ns","layers-blend-color-dodge":"Kr\u0101su izvair\u012B\u0161an\u0101s","layers-blend-overlay":"P\u0101rkl\u0101jums","layers-blend-soft-light":"M\u012Bkst\u0101 gaisma","layers-blend-hard-light":"Ciet\u0101 gaisma","layers-blend-difference":"At\u0161\u0137ir\u012Bba","layers-blend-exclusion":"Izsl\u0113g\u0161ana","layers-blend-hue":"Tonis","layers-blend-saturation":"Pies\u0101tin\u0101jums","layers-blend-color":"Kr\u0101sa","layers-blend-luminosity":"Spilgtums","layers-rename-title":"P\u0101rd\u0113v\u0113t sl\u0101ni","layers-rename-name":"Nosaukums","layers-rename-clear":"Not\u012Br\u012Bt nosaukumu","layers-rename-sketch":"Skice","layers-rename-colors":"Kr\u0101sas","layers-rename-shading":"\u0112nojums","layers-rename-lines":"L\u012Bnijas","layers-rename-effects":"Efekti","layers-rename-foreground":"Priek\u0161pl\u0101ns","layers-merge-modal-title":"Apvienot/Sajaukt sl\u0101\u0146us","layers-merge-description":"Apvieno izv\u0113l\u0113to sl\u0101ni ar apak\u0161\u0113jo. Izv\u0113lieties sajauk\u0161anas re\u017E\u012Bmu:","file-no-autosave":"Nav autom\u0101tisk\u0101s saglab\u0101\u0161anas","file-new":"Jauns","file-import":"Import\u0113t","file-save":"Saglab\u0101t","file-format":"Faila form\u0101ts","file-show-save-dialog":"R\u0101d\u012Bt saglab\u0101\u0161anas dialogu","file-copy":"Kop\u0113t","file-copy-title":"Kop\u0113t uz starpliktuvi","file-paste":"Iel\u012Bm\u0113t","file-share":"Kop\u012Bgot","file-storage":"P\u0101rl\u016Bka kr\u0101tuve","file-storage-about":"Par p\u0101rl\u016Bka kr\u0101tuvi","file-storage-cant-access":"Nevar piek\u013C\u016Bt kr\u0101tuvei.","file-storage-empty":"Tuk\u0161s","file-storage-store":"Saglab\u0101t","file-storage-clear":"Not\u012Br\u012Bt","file-storage-clear-prompt":"Not\u012Br\u012Bt p\u0101rl\u016Bka kr\u0101tuvi? Dz\u0113\u0161ana nav atsaucama.","file-storage-storing":"Saglab\u0101","file-storage-overwrite":"P\u0101rrakst\u012Bt","file-storage-min-ago":"Pirms {x} min","file-storage-hours-ago":"Pirms {x} stund\u0101m","file-storage-days-ago":"Pirms {x} dien\u0101m","file-storage-month-ago":"Pirms > 1 m\u0113ne\u0161a","file-storage-restored":"Atjaunots no p\u0101rl\u016Bka kr\u0101tuves","file-storage-stored":"Saglab\u0101ts p\u0101rl\u016Bka kr\u0101tuv\u0113","file-storage-failed":"Neizdev\u0101s saglab\u0101t p\u0101rl\u016Bka kr\u0101tuv\u0113","file-storage-failed-1":"Neizdev\u0101s saglab\u0101t. Iesp\u0113jamie iemesli:","file-storage-failed-2":"Nav vietas disk\u0101","file-storage-failed-3":"Kr\u0101tuve atsp\u0113jota inkognito ciln\u0113","file-storage-failed-4":"P\u0101rl\u016Bks neatbalsta kr\u0101tuvi","file-storage-failed-clear":"Neizdev\u0101s not\u012Br\u012Bt.","file-upload":"Aug\u0161upiel\u0101d\u0113t","cleared-layer":"Sl\u0101nis not\u012Br\u012Bts","cleared-selected-area":"Izv\u0113l\u0113t\u0101 zona not\u012Br\u012Bta","filled":"Aizpild\u012Bts","filled-selected-area":"Izv\u0113le aizpild\u012Bta","new-title":"Jauns att\u0113ls","new-current":"Pa\u0161reiz\u0113jais","new-fit":"Piel\u0101got","new-oversize":"Lielizm\u0113rs","new-square":"Kvadr\u0101ts","new-landscape":"Ainava","new-portrait":"Portrets","new-screen":"Ekr\u0101ns","new-video":"Video","new-din-paper":"DIN pap\u012Brs","new-px":"px","new-ratio":"Proporcija","upload-title":"Aug\u0161upiel\u0101d\u0113t uz Imgur","upload-link-notice":"Ikviens ar saiti uz j\u016Bsu aug\u0161upiel\u0101d\u0113to att\u0113lu to var\u0113s apskat\u012Bt.","upload-name":"Nosaukums","upload-title-untitled":"Bez nosaukuma","upload-caption":"Paraksts","upload-submit":"Aug\u0161upiel\u0101d\u0113t","upload-uploading":"Aug\u0161upiel\u0101d\u0113...","upload-success":"Aug\u0161upiel\u0101de veiksm\u012Bga","upload-failed":"Aug\u0161upiel\u0101de neizdev\u0101s.","upload-delete":"Lai dz\u0113stu att\u0113lu no Imgur","cropcopy-title-copy":"Kop\u0113t uz starpliktuvi","cropcopy-title-crop":"Apgriezt","cropcopy-click-hold":"Ar peles labo pogu vai turiet","cropcopy-btn-copy":"Uz starpliktuvi","cropcopy-copied":"Kop\u0113ts.","cropcopy-btn-crop":"Lietot apgrie\u0161anu","crop-drag-to-crop":"Velciet","filter-crop-extend":"Apgriezt/Papla\u0161in\u0101t","filter-flip":"P\u0101rv\u0113rst","filter-perspective":"Perspekt\u012Bva","filter-resize":"Main\u012Bt izm\u0113ru","filter-rotate":"Pagriezt","filter-transform":"Transform\u0113t","filter-bright-contrast":"Spilgtums/Kontrasts","filter-curves":"L\u012Bknes","filter-hue-sat":"Tonis/Pies\u0101tin\u0101jums","filter-invert":"Invert\u0113t","filter-tilt-shift":"Slaidu nob\u012Bde","filter-to-alpha":"Uz alfa","filter-triangle-blur":"Trijst\u016Bra izpl\u016B\u0161ana","filter-unsharp-mask":"Neasuma maska","filter-crop-title":"Apgrie\u0161ana / Papla\u0161in\u0101\u0161ana","filter-crop-description":"Apgrie\u017E vai papla\u0161ina att\u0113lu.","filter-crop-left":"Kreisais","filter-crop-right":"Labais","filter-crop-top":"Aug\u0161a","filter-crop-bottom":"Apak\u0161a","filter-crop-rule-thirds":"Tre\u0161da\u013Cu likums","filter-crop-fill":"Aizpild\u012Bt","filter-flip-title":"P\u0101rv\u0113r\u0161ana","filter-flip-description":"P\u0101rv\u0113r\u0161 sl\u0101ni vai visu att\u0113lu.","filter-flip-horizontal":"Horizont\u0101li","filter-flip-vertical":"Vertik\u0101li","filter-flip-image":"P\u0101rv\u0113rst att\u0113lu","filter-flip-layer":"P\u0101rv\u0113rst sl\u0101ni","filter-perspective-title":"Perspekt\u012Bvas transform\u0101cija","filter-perspective-description":"Transform\u0113 izv\u0113l\u0113to sl\u0101ni.","filter-resize-title":"Izm\u0113ra mai\u0146a","filter-resize-description":"Maina att\u0113la izm\u0113ru.","filter-rotate-title":"Rot\u0101cija","filter-rotate-description":"Pagrie\u017E att\u0113lu.","filter-transform-empty":"Sl\u0101nis ir tuk\u0161s.","filter-transform-title":"Transform\u0101cija","filter-transform-description":"Transform\u0113 izv\u0113l\u0113to sl\u0101ni. Turiet Shift papildu funkcionalit\u0101tei.","filter-transform-rotation":"Rot\u0101cija","filter-transform-flip":"P\u0101rv\u0113rst","filter-transform-center":"Centr\u0113t","filter-transform-constrain":"Saglab\u0101t proporcijas","filter-transform-snap":"Piep\u016Bst","filter-transform-snap-title":"Piep\u016Bst rot\u0101ciju un poz\u012Bciju","filter-bright-contrast-title":"Spilgtums / Kontrasts","filter-bright-contrast-description":"Maina izv\u0113l\u0113t\u0101 sl\u0101\u0146a spilgtumu un kontrastu.","filter-bright-contrast-brightness":"Spilgtums","filter-bright-contrast-contrast":"Kontrasts","filter-curves-title":"L\u012Bknes","filter-curves-description":"Pielieto l\u012Bknes izv\u0113l\u0113tajam sl\u0101nim.","filter-curves-all":"Visi","filter-hue-sat-title":"Tonis / Pies\u0101tin\u0101jums","filter-hue-sat-description":"Maina izv\u0113l\u0113t\u0101 sl\u0101\u0146a toni un pies\u0101tin\u0101jumu.","filter-hue-sat-hue":"Tonis","filter-hue-sat-saturation":"Pies\u0101tin\u0101jums","filter-applied":"Pielietots","filter-tilt-shift-title":"Slaidu nob\u012Bdes efekts","filter-tilt-shift-description":"Pielieto slaidu nob\u012Bdi izv\u0113l\u0113tajam sl\u0101nim.","filter-tilt-shift-blur":"Izpl\u016B\u0161anas r\u0101diuss","filter-tilt-shift-gradient":"P\u0101rejas r\u0101diuss","filter-to-alpha-title":"Uz alfa kan\u0101lu","filter-to-alpha-description":"\u0122ener\u0113 alfa kan\u0101lu izv\u0113l\u0113tajam sl\u0101nim no:","filter-to-alpha-inverted-lum":"Invert\u0113ts spilgtums","filter-to-alpha-lum":"Spilgtums","filter-to-alpha-replace":"Aizvietot RGB","filter-triangle-blur-title":"Trijst\u016Bra izpl\u016B\u0161ana","filter-triangle-blur-description":"Pielieto trijst\u016Bra izpl\u016B\u0161anu izv\u0113l\u0113tajam sl\u0101nim.","filter-unsharp-mask-title":"Neasuma maska","filter-unsharp-mask-description":"Asina izv\u0113l\u0113to sl\u0101ni","filter-unsharp-mask-strength":"Stiprums","filter-grid":"Re\u017E\u0123is","filter-grid-description":"Z\u012Bm\u0113 re\u017E\u0123i uz izv\u0113l\u0113t\u0101 sl\u0101\u0146a.","filter-noise":"Troksnis","filter-noise-description":"Pievieno troksni izv\u0113l\u0113tajam sl\u0101nim.","filter-noise-scale":"M\u0113rogs","filter-noise-alpha":"Alfa","filter-pattern":"Raksts","filter-pattern-description":"\u0122ener\u0113 rakstu uz izv\u0113l\u0113t\u0101 sl\u0101\u0146a. Velciet priek\u0161skat\u012Bjumu papildu kontrolei.","filter-distort":"Sagroz\u012Bt","filter-distort-description":"Sagroza izv\u0113l\u0113to sl\u0101ni.","filter-distort-phase":"F\u0101ze","filter-distort-stepsize":"Sol\u013Ca izm\u0113rs","filter-distort-sync-xy":"Sinhroniz\u0113t XY","filter-vanish-point":"Paz\u016Bdo\u0161ais punkts","filter-vanish-point-title":"Paz\u016Bdo\u0161\u0101 punkta efekts","filter-vanish-point-description":"Pievieno paz\u016Bdo\u0161o punktu izv\u0113l\u0113tajam sl\u0101nim. Velciet priek\u0161skat\u012Bjumu","filter-vanish-point-lines":"L\u012Bnijas","dropper-drop":"Nometiet","dropper-as-image":"K\u0101 jauns att\u0113ls","dropper-as-layer":"K\u0101 sl\u0101nis","import-opening":"Atver failu...","import-title":"Import\u0113t att\u0113lu","import-too-large":"Att\u0113ls p\u0101r\u0101k liels","import-btn-as-layer":"K\u0101 sl\u0101nis","import-btn-as-image":"K\u0101 att\u0113ls","import-as-layer-title":"Import\u0113t att\u0113lu k\u0101 jaunu sl\u0101ni","import-as-layer-description":"Piel\u0101gojiet import\u0113t\u0101 att\u0113la poz\u012Bciju.","import-as-layer-limit-reached":"Sl\u0101\u0146u limits sasniegts. Att\u0113ls tiks ievietots eso\u0161aj\u0101 sl\u0101n\u012B.","import-as-layer-fit":"Piel\u0101got","import-flatten":"Saplacin\u0101t att\u0113lu","import-unsupported-file":"Neatbalst\u012Bts faila tips. Skatiet Pal\u012Bdz\u012Bbu par atbalst\u012Btajiem tipiem.","import-broken-file":"Neizdev\u0101s iel\u0101d\u0113t att\u0113lu. Fails var b\u016Bt boj\u0101ts.","import-psd-unsupported":"Neatbalst\u012Btas funkcijas. PSD tika saplacin\u0101ts.","import-psd-limited-support":"PSD atbalsts ir ierobe\u017Eots. Saplacin\u0101ts att\u0113ls izskat\u012Bsies prec\u012Bz\u0101k.","import-psd-too-large":"Att\u0113ls p\u0101rsniedz maksim\u0101los izm\u0113rus {x} x {x} pikse\u013Ci. Nevar import\u0113t.","import-psd-size":"Att\u0113la izm\u0113rs","clipboard-read-fail":"Neizdev\u0101s nolas\u012Bt no starpliktuves.","clipboard-no-image":"Starpliktuv\u0113 nav att\u0113la.","hand-reset":"Atiestat\u012Bt","hand-fit":"Piel\u0101got","hand-inertia-scrolling":"Inerces ritin\u0101\u0161ana","bucket-tolerance":"Tolerance","bucket-sample":"Paraugs","bucket-sample-title":"Kurus sl\u0101\u0146us izmantot kr\u0101su paraugam","bucket-sample-all":"Visi","bucket-sample-active":"Akt\u012Bvais","bucket-sample-above":"Virspus\u0113","bucket-grow":"Papla\u0161in\u0101t","bucket-grow-title":"Papla\u0161in\u0101t aizpild\u012Bto zonu (pikse\u013Cos)","bucket-contiguous":"Savienots","bucket-contiguous-title":"Aizpild\u012Bt tikai savienot\u0101s zonas","gradient-linear":"Line\u0101rs","gradient-linear-mirror":"Line\u0101rs spogulis","gradient-radial":"Radial","shape-stroke":"Stroke","shape-fill":"Aizpild\u012Bt","shape-rect":"Taisnst\u016Bris","shape-ellipse":"Elipse","shape-line":"L\u012Bnija","shape-line-width":"L\u012Bnijas platums","shape-outwards":"No centra uz \u0101ru","shape-fixed":"Fiks\u0113ts 1:1","shape-auto-pan":"Autom\u0101tisk\u0101 panoram\u0113\u0161ana","shape-auto-pan-title":"Autom\u0101tiski p\u0101rvietojas z\u012Bm\u0113jot","text-instruction":"Noklik\u0161\u0137iniet uz audekla","text-title":"Pievienot tekstu","text-text":"Teksts","text-font":"Fonts","text-placeholder":"J\u016Bsu teksts","text-color":"Kr\u0101sa","text-size":"Izm\u0113rs","text-line-height":"Rindas augstums","text-letter-spacing":"Burtu atstarpe","text-left":"Pa kreisi","text-center":"Centr\u0101","text-right":"Pa labi","text-italic":"Sl\u012Bpraksts","text-bold":"Treknraksts","select-select":"Atlas\u012Bt","select-transform":"Transform\u0113t","select-lasso":"Lasso","select-polygon":"Poligons","select-boolean-replace":"Aizvietot","select-boolean-add":"Pievienot","select-boolean-subtract":"At\u0146emt","select-all":"Visu","select-invert":"Invert\u0113t","select-reset":"Atiestat\u012Bt","select-fill":"Aizpild\u012Bt","select-erase":"Dz\u0113st","select-transform-clone":"Klon\u0113t","select-transform-clone-applied":"Klon\u0113ts","select-transform-move-to-layer":"P\u0101rvietot uz sl\u0101ni:","select-transform-applied":"Transform\u0101cija pielietota","select-transform-empty":"Izv\u0113l\u0113t\u0101 zona uz akt\u012Bv\u0101 sl\u0101\u0146a ir tuk\u0161a.","save-reminder-title":"Nesaglab\u0101ts darbs","save-reminder-text":"Att\u0113ls nav saglab\u0101ts {a} min\u016Btes{b}. Saglab\u0101jiet tagad","save-reminder-save-psd":"Saglab\u0101t k\u0101 PSD","save-reminder-psd-layers":"PSD saglab\u0101s visus sl\u0101\u0146us.","backup-drawing":"J\u016Bs varat dubl\u0113t savu z\u012Bm\u0113jumu.","submit":"Iesniegt","submit-title":"Iesniegt z\u012Bm\u0113jumu","submit-prompt":"Iesniegt z\u012Bm\u0113jumu?","submit-submitting":"Iesniedz...","embed-init-loading":"Iel\u0101d\u0113 lietotni","embed-init-waiting":"Gaida att\u0113lu","help":"Pal\u012Bdz\u012Bba","tab-settings":"Iestat\u012Bjumi","settings-language":"Valoda","settings-language-reload":"Atjaunin\u0101sies p\u0113c p\u0101rl\u0101des.","settings-theme":"T\u0113ma","settings-save-reminder-label":"Saglab\u0101\u0161anas atg\u0101din\u0101jums","settings-save-reminder-disabled":"Atsp\u0113jots","settings-save-reminder-confirm-title":"Izsl\u0113gt saglab\u0101\u0161anas atg\u0101din\u0101jumu?","settings-save-reminder-confirm-a":"Nav autom\u0101tisk\u0101s saglab\u0101\u0161anas","settings-save-reminder-confirm-b":"Atsp\u0113jot uz savu atbild\u012Bbu?","settings-save-reminder-confirm-disable":"Atsp\u0113jot","theme-dark":"Tum\u0161s","theme-light":"Gai\u0161s","terms-of-service":"Lieto\u0161anas noteikumi","licenses":"Licences","source-code":"Avota kods","auto":"Autom\u0101tiski","zoom-in":"Tuvin\u0101t","zoom-out":"Att\u0101lin\u0101t","radius":"R\u0101diuss","constrain-proportions":"Saglab\u0101t proporcijas","width":"Platums","height":"Augstums","opacity":"Necaurredzam\u012Bba","scatter":"Izkliede","red":"Sarkans","green":"Za\u013C\u0161","blue":"Zils","eraser":"Dz\u0113\u0161gumija","center":"Centr\u0113t","layers":"Sl\u0101\u0146i","background":"Fons","scaling-algorithm":"M\u0113rogo\u0161anas algoritms","algorithm-smooth":"Gluds","algorithm-pixelated":"Pikse\u013Cots","preview":"Priek\u0161skat\u012Bjums","angle-snap":"Piep\u016Bst","angle-snap-title":"45\xb0 le\u0146\u0137a piep\u016B\u0161ana","lock-alpha":"Blo\u0137\u0113t alfa","lock-alpha-title":"Blo\u0137\u0113 sl\u0101\u0146a alfa kan\u0101lu","reverse":"Apgriezt","compare-before":"Pirms","compare-after":"P\u0113c","loading":"Iel\u0101d\u0113","more":"Vair\u0101k","x-minutes":"{x} min","wip":"Darbs proces\u0101","browser-zoom-help":"Veiciet dubultsk\u0101rienu vai izvelciet","dismiss":"Noraid\u012Bt"}');

},{}]},["1fRcI"], null, "parcelRequire94c2", {})

//# sourceMappingURL=lv.e257a609.js.map
