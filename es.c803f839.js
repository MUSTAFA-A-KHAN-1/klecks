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
})({"jOAwO":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "77720995c803f839";
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

},{}],"KK4Io":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Cambia UI a izquierda/derecha","toggle-show-tools":"Mostrar/Ocultar Herramientas","scroll":"Desplazar","donate":"Donar","home":"Inicio","modal-new-tab":"Abrir en pesta\xf1a nueva","tab-edit":"Editar","tab-file":"Archivo","tool-brush":"Pincel","tool-paint-bucket":"Bote de pintura","tool-gradient":"Gradiente","tool-shape":"Forma","tool-text":"Texto","tool-hand":"Herramienta Mano","tool-select":"Herramienta de Selecci\xf3n","tool-zoom":"Zoom","undo":"Deshacer","redo":"Rehacer","brush-pen":"Pluma","brush-blend":"Mezcla","brush-sketchy":"Esbozo","brush-pixel":"P\xedxel","brush-chemy":"Chemy","brush-smudge":"Difuminado","brush-size":"Tama\xf1o","brush-blending":"Mezcla","brush-toggle-pressure":"Alternar sensibilidad a la presi\xf3n","brush-pen-circle":"C\xedrculo","brush-pen-chalk":"Tiza","brush-pen-calligraphy":"Caligraf\xeda","brush-pen-square":"Cuadrado","brush-sketchy-scale":"Escala","brush-pixel-dither":"Tramado","brush-chemy-fill":"Llenar","brush-chemy-stroke":"Trazo","brush-chemy-mirror-x":"Horizontal simetr\xeda","brush-chemy-mirror-y":"Vertical simetr\xeda","brush-chemy-gradient":"Gradiente","brush-eraser-transparent-bg":"Fondo Transparente","stabilizer":"Estabilizador","stabilizer-title":"Estabilizador de trazo","eyedropper":"Cuentagotas","secondary-color":"Color Secundario","manual-color-input":"Entrada manual de color","mci-hex":"C\xf3digo hexadecimal","mci-copy":"Copiar","modal-ok":"Ok","modal-cancel":"Cancelar","modal-close":"Cerrar","layers-active-layer":"Capa activa","layers-layer":"Capa","layers-copy":"Copiar","layers-blending":"Fusi\xf3n","layers-new":"Nueva capa","layers-remove":"Eliminar capa","layers-duplicate":"Duplicar capa","layers-merge":"Combinar hacia abajo","layers-merge-all":"Combinar todas","layers-rename":"Nuevo Nombre","layers-active-layer-visible":"Capa activa es visible","layers-active-layer-hidden":"Capa activa est\xe1 escondida","layers-visibility-toggle":"Visibilidad de capa","layers-blend-normal":"normal","layers-blend-darken":"oscurecer","layers-blend-multiply":"multiplicar","layers-blend-color-burn":"subexponer color","layers-blend-lighten":"aclarar","layers-blend-screen":"trama","layers-blend-color-dodge":"sobreexponer color","layers-blend-overlay":"superponer","layers-blend-soft-light":"luz suave","layers-blend-hard-light":"luz fuerte","layers-blend-difference":"diferencia","layers-blend-exclusion":"exclusi\xf3n","layers-blend-hue":"tono","layers-blend-saturation":"saturaci\xf3n","layers-blend-color":"color","layers-blend-luminosity":"luminosidad","layers-rename-title":"Nuevo nombre de capa","layers-rename-name":"Nombre de capa","layers-rename-clear":"Borrar nombre","layers-rename-sketch":"Bosquejo","layers-rename-colors":"Colores","layers-rename-shading":"Sombreado","layers-rename-lines":"L\xedneas","layers-rename-effects":"Efectos","layers-rename-foreground":"Primer Plano","layers-merge-modal-title":"Unir/Mezclar Capas","layers-merge-description":"Fusiona la capa seleccionada con la que est\xe1 abajo. Seleccione el modo de mezcla:","file-no-autosave":"No autoguarda, no almacenamiento en la nube","file-new":"Nuevo","file-import":"Importar","file-save":"Guardar","file-format":"Formato de archivo","file-copy":"Copiar","file-copy-title":"Copiar a portapapeles","file-share":"Compartir","file-storage":"Almacenamiento del navegador","file-storage-about":"Acerca del almacenamiento del navegador","file-storage-cant-access":"No puedo acceder al almacenamiento.","file-storage-empty":"Vac\xedo","file-storage-store":"Almacenar","file-storage-clear":"Borrar","file-storage-storing":"Guardando","file-storage-overwrite":"Sobrescribir","file-storage-min-ago":"Hace {x} minutos","file-storage-hours-ago":"Hace {x} horas","file-storage-days-ago":"Hace {x} dias","file-storage-month-ago":"Hace >1 mes","file-storage-restored":"Restaurado desde el almacenamiento del navegador","file-storage-stored":"Almacenado en el almacenamiento del navegador","file-storage-failed":"No se pudo almacenar en el almacenamiento del navegador","file-storage-failed-1":"No se pudo almacenar. Causas Posibles:","file-storage-failed-2":"No espacio en el disco","file-storage-failed-3":"Almacenamiento deshabilitado en la pesta\xf1a de inc\xf3gnito","file-storage-failed-4":"El navegador no admite almacenamiento","file-storage-failed-clear":"No se pudo borrar","file-upload":"Subir","cleared-layer":"Capa borrada","cleared-selected-area":"\xe1rea seleccionada borrada","filled":"Lleno","filled-selected-area":"\xe1rea seleccionada llena","new-title":"Nueva Imagen","new-current":"Presente","new-fit":"Adaptar","new-oversize":"Descomunal","new-square":"Cuadro","new-landscape":"Paisaje","new-portrait":"Retrato","new-screen":"Pantalla","new-video":"Video","new-din-paper":"Papel DIN","new-px":"px","new-ratio":"Proporci\xf3n","upload-title":"Subir a Imgur","upload-link-notice":"Cualquiera que tenga el enlace a la imagen cargada podr\xe1 verla.","upload-name":"T\xedtulo","upload-title-untitled":"Sin t\xedtulo","upload-caption":"Descripci\xf3n","upload-submit":"Subir","upload-uploading":"Subiendo...","upload-success":"Subida exitosa","upload-failed":"Subida fallida","upload-delete":"Para eliminar su imagen de Imgur visite:","cropcopy-title-copy":"Copiar a portapapeles","cropcopy-title-crop":"Cortar","cropcopy-click-hold":"Clic derecho o mantenga presionado para copiar.","cropcopy-btn-copy":"A portapapeles","cropcopy-copied":"Copiado.","cropcopy-btn-crop":"Aplicar Cortar","crop-drag-to-crop":"Arrastrar para cortar","filter-crop-extend":"Recortar/Extender","filter-flip":"Voltear","filter-perspective":"Perspectiva","filter-resize":"Cambiar tama\xf1o","filter-rotate":"Girar","filter-transform":"Transformar","filter-bright-contrast":"Brillo/Contraste","filter-curves":"Curvas","filter-hue-sat":"Matiz/Saturaci\xf3n","filter-invert":"Invertir","filter-tilt-shift":"Cambio de Inclinaci\xf3n","filter-to-alpha":"A Alfa","filter-triangle-blur":"Desenfoque de Tri\xe1ngulo","filter-unsharp-mask":"M\xe1scara de Enfoque","filter-crop-title":"Recortar/Extender","filter-crop-description":"Recorta o ampl\xeda la imagen.","filter-crop-left":"Izquierda","filter-crop-right":"Derecha","filter-crop-top":"Arriba","filter-crop-bottom":"Abajo","filter-crop-rule-thirds":"Regla de los Tercios","filter-crop-fill":"Llenar","filter-flip-title":"Voltear","filter-flip-description":"Voltea la capa o imagen completa.","filter-flip-horizontal":"Horizontal","filter-flip-vertical":"Vertical","filter-flip-image":"Voltear Imagen","filter-flip-layer":"Voltear Capa","filter-perspective-title":"Perspectiva","filter-perspective-description":"Transforma la capa seleccionada.","filter-resize-title":"Cambiar tama\xf1o","filter-resize-description":"Cambia el tama\xf1o de la imagen.","filter-rotate-title":"Gira","filter-rotate-description":"Gira la imagen.","filter-transform-empty":"La capa est\xe1 vac\xeda.","filter-transform-title":"Transformar","filter-transform-description":"Transforma la capa seleccionada. Mantenga presionada tecla May\xfas para ver comportamiento adicional.","filter-transform-rotation":"Rotaci\xf3n","filter-transform-flip":"Voltear","filter-transform-center":"Centro","filter-transform-constrain":"Constre\xf1ir","filter-transform-snap":"Ajustar","filter-transform-snap-title":"Chasquido Rotaci\xf3n y Posici\xf3n","filter-bright-contrast-title":"Brillo/Contraste","filter-bright-contrast-description":"Cambie brillo y contraste de la capa seleccionada.","filter-bright-contrast-brightness":"Brillo","filter-bright-contrast-contrast":"Contraste","filter-curves-title":"Curvas","filter-curves-description":"Aplicar curvas en la capa seleccionada.","filter-curves-all":"Todo","filter-hue-sat-title":"Matiz/Saturaci\xf3n","filter-hue-sat-description":"Cambia el tono y la saturaci\xf3n de la capa seleccionada.","filter-hue-sat-hue":"Matiz","filter-hue-sat-saturation":"Saturaci\xf3n","filter-applied":"aplicado","filter-tilt-shift-title":"Cambio de Inclinaci\xf3n","filter-tilt-shift-description":"Aplica cambio de inclinaci\xf3n en la capa seleccionada.","filter-tilt-shift-blur":"Radio de Desenfoque","filter-tilt-shift-gradient":"Radio de Gradiente","filter-to-alpha-title":"A Alfa","filter-to-alpha-description":"Genera canal alfa para la capa seleccionada desde:","filter-to-alpha-inverted-lum":"Luminancia Invertida","filter-to-alpha-lum":"Luminancia","filter-to-alpha-replace":"Reemplazar RGB","filter-triangle-blur-title":"Desenfoque de Tri\xe1ngulo","filter-triangle-blur-description":"Aplica desenfoque triangular en la capa seleccionada.","filter-unsharp-mask-title":"M\xe1scara de Enfoque","filter-unsharp-mask-description":"Enfoca la capa seleccionada alejando los p\xedxeles del promedio de sus vecinos.","filter-unsharp-mask-strength":"Fortaleza","filter-grid":"Cuadr\xedcula","filter-grid-description":"Dibuja la cuadr\xedcula en la capa seleccionada.","filter-noise":"Ruido","filter-noise-description":"Agrega ruido a la capa seleccionada.","filter-noise-scale":"Escala","filter-noise-alpha":"Alfa","filter-pattern":"Patr\xf3n","filter-pattern-description":"Genera patr\xf3n en la capa seleccionada. Arrastre la vista previa para obtener m\xe1s controles.","filter-distort":"Distorsionar","filter-distort-description":"Distorsiona la capa seleccionada.","filter-distort-phase":"Fase","filter-distort-stepsize":"Tama\xf1o de Paso","filter-distort-sync-xy":"Sincronizar XY","filter-vanish-point":"Punto de Fuga","filter-vanish-point-title":"Punto de Fuga","filter-vanish-point-description":"Agrega un punto de fuga a la capa seleccionada. Arrastra la vista previa para moverla.","filter-vanish-point-lines":"L\xedneas","import-opening":"Abriendo archivo...","import-title":"Importar Imagen","import-too-large":"Imagen demasiado grande, ser\xe1 reducida.","import-btn-as-layer":"Como Capa","import-btn-as-image":"Como Imagen","import-as-layer-title":"Importar imagen como nueva capa","import-as-layer-description":"Ajuste la posici\xf3n de la imagen importada.","import-as-layer-limit-reached":"Se alcanz\xf3 el l\xedmite de capas. La imagen se colocar\xe1 en la capa existente.","import-as-layer-fit":"Adaptar","import-flatten":"Aplanar Imagen","import-unsupported-file":"Tipo de archivo no soportado. Consulte Ayuda para conocer los tipos admitidos.","import-broken-file":"No se pudo cargar la imagen. Es posible que el archivo est\xe9 da\xf1ado.","import-psd-unsupported":"Funciones no compatibles. El PSD tuvo que ser aplanado.","import-psd-limited-support":"La compatibilidad con PSD es limitada. Es m\xe1s probable que aplanado se vea correcto.","import-psd-too-large":"La imagen supera las dimensiones m\xe1ximas de {x} x {x} p\xedxeles. No se puede importar.","import-psd-size":"Tama\xf1o de Imagen","hand-reset":"Reiniciar","hand-fit":"Caber","hand-inertia-scrolling":"Desplazamiento por incercia","bucket-tolerance":"Tolerancia","bucket-sample":"Probar","bucket-sample-title":"De qu\xe9 capas tomar muestras de color","bucket-sample-all":"Todos","bucket-sample-active":"Activo","bucket-sample-above":"Arriba","bucket-grow":"Crecer","bucket-grow-title":"\xc1rea llena de crecimiento (en p\xedxeles)","bucket-contiguous":"Contiguo","bucket-contiguous-title":"Llene solo \xe1reas conectadas","gradient-linear":"Lineal","gradient-linear-mirror":"Espejo-lineal","gradient-radial":"Radial","shape-stroke":"Trazo","shape-fill":"Llenar","shape-rect":"Rect\xe1ngulo","shape-ellipse":"Elipse","shape-line":"L\xednea","shape-line-width":"Ancho de l\xednea","shape-outwards":"Exteriormente","shape-fixed":"Fijo 1:1","text-instruction":"Clic el lienzo para colocar el texto","text-title":"A\xf1adir texto","text-text":"Texto","text-font":"Tipo de letra","text-placeholder":"Tu texto","text-color":"Color","text-size":"Tama\xf1o","text-line-height":"Altura de la l\xednea","text-letter-spacing":"Espaciado de letras","text-left":"Izquierda","text-center":"Centro","text-right":"Derecho","text-italic":"Cursiva","text-bold":"Negrita","select-select":"Seleccionar","select-transform":"Transformar","select-lasso":"Lazo","select-polygon":"Pol\xedgono","select-boolean-replace":"Reemplazar","select-boolean-add":"A\xf1adir","select-boolean-subtract":"Sustraer","select-all":"Todo","select-invert":"Invertir","select-reset":"Reiniciar","select-fill":"Llenar","select-erase":"Borrar","select-transform-clone":"Clonar","select-transform-clone-applied":"Clonado","select-transform-move-to-layer":"Mover a capa:","select-transform-applied":"Transformaci\xf3n aplicada","select-transform-empty":"\xe1rea seleccionada en la capa activa est\xe1 vac\xeda.","save-reminder-title":"Trabajo no esta guardado","save-reminder-text":"La imagen no se guard\xf3 en {a} minutos{b}. Guarde ahora para evitar una eventual p\xe9rdida.","save-reminder-save-psd":"Guardar como PSD","save-reminder-psd-layers":"PSD recordar\xe1 todas las capas.","backup-drawing":"Puedes hacer una copia de seguridad de tu dibujo.","submit":"Entregar","submit-title":"Entrega Dibujo","submit-prompt":"Entrega dibujo?","submit-submitting":"Sumisi\xf3n...","embed-init-loading":"Cargando aplicaci\xf3n","embed-init-waiting":"Esperando imagen","help":"Ayuda","tab-settings":"Ajustes","settings-language":"Idioma","settings-language-reload":"Se actualizar\xe1 despu\xe9s de recargar.","settings-theme":"Tema","settings-save-reminder-label":"Requerda Guardar","settings-save-reminder-disabled":"Desactivado","settings-save-reminder-confirm-title":"Apagar a Requerda Guardar?","settings-save-reminder-confirm-a":"No hay guardado autom\xe1tico y las pesta\xf1as no duran para siempre. Si no guardas peri\xf3dicamente, probablemente perder\xe1 trabajo.","settings-save-reminder-confirm-b":"\xbfDesactivar bajo su propia responsabilidad?","settings-save-reminder-confirm-disable":"Desactivar","theme-dark":"Oscuro","theme-light":"Claro","terms-of-service":"T\xe9rminos de servicio","licenses":"Licencias","source-code":"C\xf3digo Fuente","auto":"auto","zoom-in":"Acercarse","zoom-out":"Disminuir el zoom","radius":"Radio","constrain-proportions":"Restringir las proporciones","width":"Ancho","height":"Altura","opacity":"Opacidad","scatter":"Dispersion","red":"Rojo","green":"Verde","blue":"Azul","eraser":"Borrador","center":"Centro","layers":"Capas","background":"Fondo","scaling-algorithm":"Algoritmo de Escala","algorithm-smooth":"Liso","algorithm-pixelated":"Pixelado","preview":"Vista Previa","angle-snap":"Ajustar","angle-snap-title":"Ajuste de \xc1ngulo de 45\xb0","lock-alpha":"Cerrar Alfa","lock-alpha-title":"Cerrar canal alfa de la capa","reverse":"Inverso","compare-before":"Antes","compare-after":"Despu\xe9s","loading":"Cargando","more":"M\xe1s","x-minutes":"{x}min","wip":"Trabajo en progreso","browser-zoom-help":"Haz doble clic o pellizca para resetear el zoom del buscador.","dismiss":"Descartar"}');

},{}]},["jOAwO"], null, "parcelRequire94c2", {})

//# sourceMappingURL=es.c803f839.js.map
