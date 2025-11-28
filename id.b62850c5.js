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
})({"dsSlQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "dab6ac93b62850c5";
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

},{}],"kjQyW":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Beralih ke kiri/kanan UI","toggle-show-tools":"Menampilkan/Menyembunyikan Alat","scroll":"Gulir","donate":"Donasi","home":"Beranda","modal-new-tab":"Buka di tab baru","tab-edit":"Sunting","tab-file":"Berkas","tool-brush":"Kuas","tool-paint-bucket":"Ember Cat","tool-gradient":"Gradasi","tool-shape":"Bentuk","tool-text":"Teks","tool-hand":"Alat Bantu Tangan","tool-select":"Pilih Alat","tool-zoom":"Perbesar","tool-more-tools":"Alat Lainnya","tool-more-tools-click-again":"Klik lagi untuk alat lainnya","undo":"Urungkan","redo":"Ulangi","brush-pen":"Pena","brush-blend":"Mencampur","brush-sketchy":"Samar-samar","brush-pixel":"Piksel","brush-chemy":"Chemy","brush-smudge":"Noda","brush-size":"Ukuran","brush-blending":"Pencampuran","brush-toggle-pressure":"Mengalihkan Sensitivitas Tekanan","brush-pen-circle":"Lingkaran","brush-pen-chalk":"Kapur","brush-pen-calligraphy":"Kaligrafi","brush-pen-square":"Persegi","brush-sketchy-scale":"Skala","brush-pixel-dither":"Bimbang","brush-chemy-fill":"Isi","brush-chemy-stroke":"Stroke","brush-chemy-mirror-x":"Simetri Horisontal","brush-chemy-mirror-y":"Simetri Vertikal","brush-chemy-gradient":"Gradasi","brush-eraser-transparent-bg":"Latar Belakang Transparan","stabilizer":"Penstabil","stabilizer-title":"Penstabil Stroke","eyedropper":"Penetes Mata","secondary-color":"Warna Sekunder","manual-color-input":"Input Warna Manual","mci-hex":"Hex","mci-copy":"Salin","modal-ok":"Oke","modal-cancel":"Batal","modal-close":"Tutup","layers-active-layer":"Lapisan Aktif","layers-layer":"Lapisan","layers-copy":"salin","layers-blending":"Campuran","layers-new":"Lapisan Baru","layers-remove":"Hapus Lapisan","layers-duplicate":"Gandakan Lapisan","layers-merge":"Gabung dengan layer di bawah ini","layers-clear":"Lapisan bening","layers-merge-advanced":"Penggabungan lanjutan","layers-merge-all":"Gabungkan semua","layers-rename":"Ganti nama","layers-active-layer-visible":"Lapisan aktif terlihat","layers-active-layer-hidden":"Lapisan aktif tak terlihat","layers-visibility-toggle":"Ketampakan Lapisan","layers-blend-normal":"biasa","layers-blend-darken":"gelapkan","layers-blend-multiply":"gandakan","layers-blend-color-burn":"membakar warna","layers-blend-lighten":"cerahkan","layers-blend-screen":"layar","layers-blend-color-dodge":"menghindari warna","layers-blend-overlay":"hamparan","layers-blend-soft-light":"cahaya lembut","layers-blend-hard-light":"cahaya keras","layers-blend-difference":"perbedaan","layers-blend-exclusion":"pengecualian","layers-blend-hue":"rona","layers-blend-saturation":"saturasi","layers-blend-color":"warna","layers-blend-luminosity":"kilau","layers-rename-title":"Ganti Nama Lapisan","layers-rename-name":"Nama","layers-rename-clear":"Bersih Nama","layers-rename-sketch":"Sketsa","layers-rename-colors":"Warna-warna","layers-rename-shading":"Bayangan","layers-rename-lines":"Garis-garis","layers-rename-effects":"Efek-efek","layers-rename-foreground":"Latar depan","layers-merge-modal-title":"Gabung/Campur Lapisan","layers-merge-description":"Menggabungkan layer yang dipilih dengan layer di bawahnya. Pilih mode campuran:","file-no-autosave":"Tidak ada simpan otomatis, tidak ada awan","file-new":"Baru","file-import":"Impor","file-save":"Simpan","file-format":"Format Berkas","file-show-save-dialog":"Tanpilkan simpan dialog","file-copy":"Salin","file-copy-title":"Salin ke Papan Klip","file-paste":"Tempel","file-share":"Bagikan","file-storage":"Penyimpanan Peramban","file-storage-about":"Tentang Penyimpanan Peramban","file-storage-cant-access":"Tidak bisa akses penyimpanan.","file-storage-empty":"Kosong","file-storage-store":"Menyimpan","file-storage-open":"Buka","file-storage-open-confirmation":"Gambar ini sudah terbuka di tab lain. Buka di sini juga?","file-storage-open-failed":"Gagal memuat.","file-storage-clear":"Bersih","file-storage-clear-prompt":"Menghapus Penyimpanan Browser? Kliring tidak dapat dibatalkan.","file-storage-storing":"Penyimpanan","file-storage-overwrite":"Timpa","file-storage-overwrite-confirm":"Menimpa Penyimpanan Browser? Data yang ditimpa akan dihapus secara permanen.","file-storage-min-ago":"{x}menit yang lalu","file-storage-hours-ago":"{x}jam yang lalu","file-storage-days-ago":"{x}hari yang lalu","file-storage-month-ago":"> 1bulan yang lalu","file-storage-restored":"Dipulihkan dari Penyimpanan Peramban","file-storage-stored":"Disimpan ke Penyimpanan Peramban","file-storage-failed":"Gagal menyimpan ke Penyimpanan Peramban","file-storage-failed-1":"Gagal menyimpan. Kemungkinan penyebab:","file-storage-failed-2":"Kehabisan Penyimpanan","file-storage-failed-3":"Penyimpanan dinonaktifkan di tab penyamaran","file-storage-failed-4":"Peramban tidak mendukung penyimpanan","file-storage-failed-clear":"Gagal untuk bersih.","file-upload":"Unggah","tab-recovery-recover-tabs":"Memulihkan tab yang tertutup","tab-recovery-explanation":"Data pemulihan hanya disimpan untuk sementara waktu. Simpan untuk memastikan pekerjaan Anda tidak hilang.","tab-recovery-total-quota-label":"Total:","tab-recovery-empty":"Tidak ada yang bisa dipulihkan.","tab-recovery-recover":"Pulihkan","tab-recovery-delete":"Hapus","tab-recovery-delete-confirmation":"Menghapus pemulihan ini? Penghapusan tidak dapat dibatalkan.","tab-recovery-failed-to-recover":"Gagal memulihkan tab.","tab-recovery-recovered":"Tab dipulihkan.","cleared-layer":"Lapisan yang dibersihkan","cleared-selected-area":"Membersihkan area yang dipilih","filled":"Terisi","filled-selected-area":"Pilihan yang terisi","new-title":"Gambar Baru","new-current":"Saat ini","new-fit":"Cocok","new-oversize":"Kebesaran","new-square":"Persegi","new-landscape":"Lanskap","new-portrait":"Potret","new-screen":"Layar","new-video":"Video","new-din-paper":"Kertas DIN","new-px":"px","new-ratio":"Rasio","upload-title":"Unggah ke Imgur","upload-link-notice":"Siapa pun yang memiliki tautan ke gambar yang anda unggah akan dapat melihatnya.","upload-name":"Judul","upload-title-untitled":"Tak berjudul","upload-caption":"Deskripsi","upload-submit":"Unggah","upload-uploading":"Sedang mengunggah...","upload-success":"Unggah selesai","upload-failed":"Unggah gagal.","upload-delete":"Untuk menghapus gambar anda dari Imgur, kunjungi:","cropcopy-title-copy":"Salin ke Papan Klip","cropcopy-title-crop":"Pangkas","cropcopy-mask":"Topeng tidak dipilih","cropcopy-click-hold":"Klik kanan atau tekan terus untuk menyalin.","cropcopy-btn-copy":"Ke Papan Klip","cropcopy-copied":"Disalin.","cropcopy-btn-crop":"Terapkan Pangkas","crop-drag-to-crop":"Seret untuk memotong","filter-crop-extend":"Pangkas/Perpanjangan","filter-flip":"Balik","filter-perspective":"Perspektif","filter-resize":"Memperbesar","filter-rotate":"Putar","filter-transform":"Mengubah","filter-bright-contrast":"Cerah/Kontras","filter-curves":"Kurva","filter-hue-sat":"Rona/Kejenuhan","filter-invert":"Membalikkan","filter-tilt-shift":"Pergeseran Miring","filter-to-alpha":"Ke Alfa","filter-triangle-blur":"Segitiga Kabur","filter-unsharp-mask":"Topeng Tidak Tajam","filter-crop-title":"Pangkas / Perpanjangan","filter-crop-description":"Pangkas atau perpanjangan gambar.","filter-crop-left":"Kiri","filter-crop-right":"Kanan","filter-crop-top":"Bagian Atas","filter-crop-bottom":"Bawah","filter-crop-rule-thirds":"Aturan Thrids","filter-crop-fill":"Isi","filter-flip-title":"Balik","filter-flip-description":"Membalik lapisan atau seluruh gambar.","filter-flip-horizontal":"Horisontal","filter-flip-vertical":"Vertikal","filter-flip-image":"Balik Gambar","filter-flip-layer":"Balik Lapisan","filter-perspective-title":"Perspektif","filter-perspective-description":"Mentransformasi lapisan yang dipilih.","filter-resize-title":"Memperbesar","filter-resize-description":"Memperbesar ukuran gambar.","filter-rotate-title":"Putar","filter-rotate-description":"Putar gambar.","filter-transform-empty":"Lapisan sudah kosong.","filter-transform-empty-selection":"Lapisan kosong di area yang dipilih.","filter-transform-title":"Mengubah","filter-transform-description":"Mengubah lapisan yang dipilih. Tahan Shift untuk perilaku tambahan.","filter-transform-rotation":"Rotasi","filter-transform-flip":"Balik","filter-transform-center":"Tengah","filter-transform-constrain":"Batasan","filter-transform-snap":"Jepret","filter-transform-snap-title":"Rotasi Dan Posisi Jepret","filter-bright-contrast-title":"Kecerahan / Kontras","filter-bright-contrast-description":"Mengubah kecerahan dan kontras untuk lapisan yang dipilih.","filter-bright-contrast-brightness":"Kecerahan","filter-bright-contrast-contrast":"Kontras","filter-curves-title":"Kurva","filter-curves-description":"Menerapkan kurva pada layer yang dipilih.","filter-curves-all":"Semua","filter-hue-sat-title":"Rona Warna / Saturasi","filter-hue-sat-description":"Mengubah rona warna dan saturasi untuk lapisan yang dipilih.","filter-hue-sat-hue":"Rona","filter-hue-sat-saturation":"Saturasi","filter-applied":"diterapkan","filter-tilt-shift-title":"Pergeseran Miring","filter-tilt-shift-description":"Menerapkan pergeseran kemiringan pada layer yang dipilih.","filter-tilt-shift-blur":"Radius Keburaman","filter-tilt-shift-gradient":"Radius Gradasi","filter-to-alpha-title":"Ke Alfa","filter-to-alpha-description":"Menghasilkan saluran alfa untuk lapisan yang dipilih dari:","filter-to-alpha-inverted-lum":"Pencahayaan Terbalik","filter-to-alpha-lum":"Pencahayaan","filter-to-alpha-replace":"Gantikan RGB","filter-triangle-blur-title":"Segitiga Buram","filter-triangle-blur-description":"Menerapkan keburaman segitiga pada lapisan yang dipilih.","filter-unsharp-mask-title":"Topeng Tidak Tajam","filter-unsharp-mask-description":"Mempertajam layer yang dipilih dengan menskalakan piksel dari rata-rata tetangganya.","filter-unsharp-mask-strength":"Kekuatan","filter-grid":"Kisi","filter-grid-description":"Menggambar kisi-kisi pada layer yang dipilih.","filter-noise":"Kebisingan","filter-noise-description":"Menambahkan kebisingan ke lapisan yang dipilih.","filter-noise-scale":"Skala","filter-noise-alpha":"Alfa","filter-pattern":"Corak","filter-pattern-description":"Menghasilkan pola pada lapisan yang dipilih. Seret pratinjau untuk kontrol lebih lanjut.","filter-distort":"Mendistorsi","filter-distort-description":"Mendistorsi lapisan yang dipilih.","filter-distort-phase":"Fase","filter-distort-stepsize":"Ukuran Langkah","filter-distort-sync-xy":"Sinkronisasi XY","filter-vanish-point":"Titik Lenyap","filter-vanish-point-title":"Titik Hilang","filter-vanish-point-description":"Menambahkan titik lenyap ke lapisan yang dipilih. Seret pratinjau untuk memindahkan.","filter-vanish-point-lines":"Garis-garis","dropper-drop":"Jatuhkan untuk mengimpor","dropper-as-image":"Sebagai Gambar Baru","dropper-as-layer":"Sebagai Lapisan","import-opening":"Membuka berkas...","import-title":"Impor Gambar","import-too-large":"Gambar terlalu besar, akan diperkecil.","import-btn-as-layer":"Sebagai Lapisan","import-btn-as-image":"Sebagai Gambar","import-as-layer-title":"Impor Gambar sebagai Lapisan Baru","import-as-layer-description":"Sesuaikan posisi gambar yang diimpor.","import-as-layer-limit-reached":"Batas lapisan tercapai. Gambar akan ditempatkan pada layer yang ada.","import-as-layer-fit":"Cocok","import-flatten":"Meratakan gambar","import-unsupported-file":"Jenis file yang tak didukung. Lihat Bantuan untuk jenis yang didukung.","import-broken-file":"Tidak dapat memuat gambar. Berkas mungkin rusak.","import-psd-unsupported":"Fitur yang tak didukung. PSD harus diratakan.","import-psd-limited-support":"Dukungan PSD terbatas. Ratakan kemungkinan besar akan terlihat benar.","import-psd-too-large":"Gambar melebihi dimensi maksimum {x} x {x} piksel. Tak dapat mengimpor.","import-psd-size":"Ukuran Gambar","clipboard-read-fail":"Gagal membaca dari papan klip.","clipboard-no-image":"Tidak ada gambar yang ditemukan di papan klip.","hand-reset":"Atur ulang","hand-fit":"Sesuai","hand-inertia-scrolling":"Pengguliran Inersia","bucket-tolerance":"Tenggang Rasa","bucket-sample":"Contoh","bucket-sample-title":"Lapisan mana yang akan diambil sampel warnanya","bucket-sample-all":"Semua","bucket-sample-active":"Aktif","bucket-sample-above":"Atas","bucket-grow":"Tumbuh","bucket-grow-title":"Menumbuhkan area yang terisi (dalam piksel)","bucket-contiguous":"Berbatasan","bucket-contiguous-title":"Hanya mengisi area yang terhubung","gradient-linear":"Linier","gradient-linear-mirror":"Cermin-Linier","gradient-radial":"Radial","shape-stroke":"Stroke","shape-fill":"Isi","shape-rect":"Persegi Panjang","shape-ellipse":"Elipsis","shape-line":"Baris","shape-line-width":"Baris Lebar","shape-outwards":"Ke luar","shape-fixed":"Diperbaiki 1:1","shape-auto-pan":"Pena-otomatis","shape-auto-pan-title":"Secara otomatis bergerak saat anda menggambar","text-instruction":"Klik kanvas untuk menempatkan teks","text-title":"Tambah Teks","text-text":"Teks","text-font":"Font","text-placeholder":"Teks Anda","text-color":"Warna","text-size":"Ukuran","text-line-height":"Tinggi Baris","text-letter-spacing":"Pengaturan Jarak Huruf","text-left":"Kiri","text-center":"Tengah","text-right":"Kanan","text-italic":"Miring","text-bold":"Tebal","text-failed-import":"Gagal untuk mengimpor berkas berikut:","text-supported-formats":"Format didukung:","select-select":"Pilih","select-transform":"Mengubah","select-lasso":"Lasso","select-polygon":"Poligon","select-boolean-replace":"Ganti","select-boolean-add":"Tambah","select-boolean-subtract":"Mengurangkan","select-all":"Semua","select-invert":"Membalikkan","select-reset":"Atur ulang","select-fill":"Isi","select-erase":"Hapus","select-transform-clone":"Klon","select-transform-clone-applied":"Dikloning","select-transform-move-to-layer":"Pindah ke lapisan:","select-transform-applied":"Transformasi diterapkan","select-transform-empty":"Area yang dipilih pada lapisan aktif kosong.","save-reminder-title":"Pekerjaan yang Belum Disimpan","save-reminder-text":"Gambar tak disimpan dalam {a} menit{b}. Menabung sekarang untuk mencegah kerugian di kemudian hari.","save-reminder-save-psd":"Simpan Sebagai PSD","save-reminder-psd-layers":"PSD akan mengingat semua lapisan.","backup-drawing":"Anda dapat mencadangkan gambar Anda.","submit":"Kirim","submit-title":"Kirim Gambar","submit-prompt":"Kirim gambar?","submit-submitting":"Mengirimkan","embed-init-loading":"Memuat aplikasi","embed-init-waiting":"Tunggu untuk gambar","help":"Bantuan","tab-settings":"Pengaturan","settings-language":"Bahasa","settings-language-reload":"Akan diperbarui setelah memuat ulang.","settings-theme":"Tema","settings-save-reminder-label":"Simpan Pengingat","settings-save-reminder-disabled":"dimatikan","settings-save-reminder-confirm-title":"Matikan Simpan Pengingat?","settings-save-reminder-confirm-a":"Tidak ada penyimpanan otomatis dan tab peramban tidak bertahan selamanya. Jika anda tidak menyimpan secara berkala, kemungkinan besar Anda akan kehilangan pekerjaan.","settings-save-reminder-confirm-b":"Mematikan pada resiko anda sendiri?","settings-save-reminder-confirm-disable":"Mematikan","theme-dark":"Gelap","theme-light":"Terang","terms-of-service":"Ketentuan Layanan","licenses":"Lisensi","source-code":"Kode Sumber","auto":"otomatis","zoom-in":"Perbesar","zoom-out":"Perkecil","radius":"Radius","constrain-proportions":"Batasi Proporsi","width":"Lebar","height":"Panjang","opacity":"Keburaman","scatter":"Menyebar","red":"Merah","green":"Hijau","blue":"Biru","eraser":"Penghapus","center":"Tengah","layers":"Lapisan-Lapisan","background":"Latar Belakang","scaling-algorithm":"Algoritma Penskalaan","algorithm-smooth":"Halus","algorithm-pixelated":"Pikselasi","preview":"Pratinjau","angle-snap":"Jepret","angle-snap-title":"Gertakan Sudut 45\xb0","lock-alpha":"Kunci Alfa","lock-alpha-title":"Mengunci saluran alfa lapisan","reverse":"Membalikkan","compare-before":"Sebelum","compare-after":"Sesudah","loading":"Memuat","more":"Lebih lanjut","x-minutes":"{x}menit","wip":"Pekerjaan yang Sedang Berlangsung","browser-zoom-help":"Ketuk dua kali atau jepit untuk mengatur ulang zoom browser.","dismiss":"Bubarkan"}');

},{}]},["dsSlQ"], null, "parcelRequire94c2", {})

//# sourceMappingURL=id.b62850c5.js.map
