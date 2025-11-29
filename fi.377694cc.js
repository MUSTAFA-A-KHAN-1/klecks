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
})({"bfDhd":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8c4268b6377694cc";
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

},{}],"9cTLq":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Valikko vasen/oikea","toggle-show-tools":"N\xe4yt\xe4/piilota ty\xf6kalut","scroll":"Rullaa","donate":"Lahjoita","home":"Kotisivu","modal-new-tab":"Avaa uusi v\xe4lilehti","tab-edit":"Muokkaa","tab-file":"Tiedosto","tool-brush":"Sivellin","tool-paint-bucket":"V\xe4rit\xe4ytt\xf6","tool-gradient":"Liukuv\xe4ri","tool-shape":"Muoto","tool-text":"Teksti","tool-hand":"K\xe4si","tool-select":"Valinta","tool-zoom":"Zoom","tool-more-tools":"Lis\xe4\xe4 ty\xf6kaluja","undo":"Peru","redo":"Uudelleen","brush-pen":"Kyn\xe4","brush-blend":"Vesiv\xe4ri","brush-sketchy":"Luonnos","brush-pixel":"Pikseli","brush-chemy":"Chemy","brush-smudge":"Tuhrinta","brush-size":"Koko","brush-blending":"Sekoitus","brush-toggle-pressure":"Paineherkkyys p\xe4\xe4lle/pois","brush-pen-circle":"Ympyr\xe4","brush-pen-chalk":"Liitu","brush-pen-calligraphy":"Kalligrafia","brush-pen-square":"Neli\xf6","brush-sketchy-scale":"Skaala","brush-pixel-dither":"Rasterointi","brush-chemy-fill":"T\xe4yt\xe4","brush-chemy-stroke":"Viiva","brush-chemy-mirror-x":"Vaakasymmetria","brush-chemy-mirror-y":"Pystysymmetria","brush-chemy-gradient":"Liukuv\xe4ri","brush-eraser-transparent-bg":"L\xe4pin\xe4kyv\xe4 tausta","stabilizer":"Vakautin","stabilizer-title":"Viivan vakautin","eyedropper":"Pipetti","secondary-color":"Taustav\xe4ri","manual-color-input":"Valitse v\xe4ri","mci-hex":"HTML-koodi","mci-copy":"Kopioi","modal-ok":"Ok","modal-cancel":"Peruuta","modal-close":"Sulje","layers-active-layer":"Aktiivinen taso","layers-layer":"Taso","layers-copy":"kopio","layers-blending":"Sekoitus","layers-new":"Uusi taso","layers-remove":"Poista taso","layers-duplicate":"Monista taso","layers-merge":"Yhdist\xe4 alemman tason kanssa","layers-clear":"Tyhjenn\xe4 taso","layers-merge-all":"Yhdist\xe4 kaikki tasot","layers-rename":"Nime\xe4 uudelleen","layers-active-layer-visible":"Aktiivinen taso n\xe4kyy","layers-active-layer-hidden":"Aktiivinen taso ei n\xe4y","layers-visibility-toggle":"Taso n\xe4kyvyys","layers-blend-normal":"normaali","layers-blend-darken":"tummentava","layers-blend-multiply":"kertova","layers-blend-color-burn":"v\xe4rivarjostus","layers-blend-lighten":"vaalentava","layers-blend-screen":"rasteri","layers-blend-color-dodge":"v\xe4rilis\xe4valotus","layers-blend-overlay":"sulauttava","layers-blend-soft-light":"pehme\xe4 valo","layers-blend-hard-light":"kova valo","layers-blend-difference":"erottava","layers-blend-exclusion":"poistava","layers-blend-hue":"s\xe4vy","layers-blend-saturation":"kyll\xe4isyys","layers-blend-color":"v\xe4ri","layers-blend-luminosity":"kirkkaus","layers-rename-title":"Nime\xe4 taso uudelleen","layers-rename-name":"Nimi","layers-rename-clear":"Poista nimi","layers-rename-sketch":"Luonnos","layers-rename-colors":"V\xe4rit","layers-rename-shading":"Varjostus","layers-rename-lines":"Viivat","layers-rename-effects":"Efektit","layers-rename-foreground":"Etuala","layers-merge-modal-title":"Yhdist\xe4/sekoita tasoja","layers-merge-description":"Yhdist\xe4\xe4 valitun tason alempana olevan tason kanssa. Valitse yhdist\xe4mistapa:","file-no-autosave":"Ei automaattitallennusta, pilvitallennustila puuttuu","file-new":"Uusi","file-import":"Avaa","file-save":"Tallenna","file-format":"Tiedostomuoto","file-show-save-dialog":"N\xe4yt\xe4 tallennusvalinnat","file-copy":"Kopioi","file-copy-title":"Kopioi leikep\xf6yd\xe4lle","file-paste":"Liit\xe4","file-share":"Jaa","file-storage":"Selaimen tallennustila","file-storage-about":"Lis\xe4tietoja selaimen talennustilasta","file-storage-empty":"Tyhj\xe4","file-storage-store":"Tallenna","file-storage-clear":"Tyhjenn\xe4","file-storage-clear-prompt":"Tyhjennet\xe4\xe4nk\xf6 selaimen tallennustila? Toimintoa ei voi peruuttaa.","file-storage-storing":"Tallennetaan","file-storage-overwrite":"Korvaa vanha","file-storage-min-ago":"{x} min sitten","file-storage-hours-ago":"{x} tuntia sitten","file-storage-days-ago":"{x} p\xe4iv\xe4\xe4 sitten","file-storage-month-ago":"> 1 kk sitten","file-storage-restored":"Palautettu selaimen tallennustilasta","file-storage-stored":"Tallennettu selaimen tallennustilaan","file-storage-failed":"Selaimen tallennustilaan kirjoitus ep\xe4onnistui","file-storage-failed-1":"Tallennus ep\xe4onnistui. Mahdollisia syit\xe4:","file-storage-failed-2":"Tallennustila on t\xe4ynn\xe4","file-storage-failed-3":"Tallennustilaa ei ole selaimen yksityisess\xe4 v\xe4lilehdess\xe4","file-storage-failed-4":"Selaimessa ei ole tallennustilaa","file-storage-failed-clear":"Tyhjennys ep\xe4onnistui.","file-upload":"Lataa","cleared-layer":"Taso on tyhjennetty","cleared-selected-area":"Valittu alue on tyhjennetty","filled":"T\xe4ytetty","filled-selected-area":"Valittu alue on t\xe4ytetty","new-title":"Uusi kuva","new-current":"Nykyinen","new-fit":"Sovita","new-oversize":"Ylisuuri","new-square":"Neli\xf6","new-landscape":"Vaakasuuntainen","new-portrait":"Pystysuuntainen","new-screen":"N\xe4ytt\xf6","new-video":"Video","new-din-paper":"A4-paperi","new-px":"px","new-ratio":"suhde","upload-title":"Siirr\xe4 Imgur-palveluun","upload-link-notice":"Kuka tahansa voi n\xe4hd\xe4 siirt\xe4m\xe4si kuvan, jos h\xe4nell\xe4 on linkki siihen.","upload-name":"Otsikko","upload-title-untitled":"Nimet\xf6n","upload-caption":"Kuvateksti","upload-submit":"Siirr\xe4","upload-uploading":"Siirret\xe4\xe4n...","upload-success":"Siirto onnistui","upload-failed":"Siirto ep\xe4onnistui.","upload-delete":"Poistaaksesi kuvan Imgur-palvelusta siirry t\xe4h\xe4n osoitteeseen:","cropcopy-title-copy":"Kopioi leikep\xf6yd\xe4lle","cropcopy-title-crop":"Rajaa","cropcopy-click-hold":"Klikkaa oikealla tai paina pitk\xe4\xe4n kopioidaksesi.","cropcopy-btn-copy":"Leikep\xf6yd\xe4lle","cropcopy-copied":"Kopioitu.","cropcopy-btn-crop":"Tee rajaus","crop-drag-to-crop":"Raahaa rajataksesi","filter-crop-extend":"Rajaa/laajenna","filter-flip":"Peilikuva","filter-perspective":"Perspektiivi","filter-resize":"Skaalaa","filter-rotate":"Kierr\xe4","filter-transform":"Muunna","filter-bright-contrast":"Kirkkaus/kontrasti","filter-curves":"K\xe4yr\xe4t","filter-hue-sat":"S\xe4vy/kyll\xe4isyys","filter-invert":"Negatiivi","filter-tilt-shift":"Syv\xe4ter\xe4vyys","filter-to-alpha":"Luo alfa","filter-triangle-blur":"Sumenna","filter-unsharp-mask":"Ter\xe4v\xf6inti","filter-crop-title":"Rajaa / laajenna","filter-crop-description":"Rajaa tai laajenna kuvaa","filter-crop-left":"Vasen","filter-crop-right":"Oikea","filter-crop-top":"Yl\xe4osa","filter-crop-bottom":"Alaosa","filter-crop-rule-thirds":"Kolmanneksen s\xe4\xe4nt\xf6","filter-crop-fill":"T\xe4yt\xe4","filter-flip-title":"Peilikuva","filter-flip-description":"Peilaa tason tai koko kuvan.","filter-flip-horizontal":"Vaakasuuntaan","filter-flip-vertical":"Pystysuuntaan","filter-flip-image":"Peilaa kuva","filter-flip-layer":"Peilaa taso","filter-perspective-title":"Perspektiivi","filter-perspective-description":"Muuntaa valitun tason.","filter-resize-title":"Skaalaa","filter-resize-description":"Skaalaa kuvan kokoa.","filter-rotate-title":"Kierr\xe4","filter-rotate-description":"Kiert\xe4\xe4 kuvaa.","filter-transform-empty":"Taso on tyhj\xe4.","filter-transform-title":"Muunna","filter-transform-description":"Muuntaa valitun tason. Paina Shift-nappia n\xe4hd\xe4ksesi lis\xe4toiminnot.","filter-transform-rotation":"Kierr\xe4","filter-transform-flip":"Peilikuva","filter-transform-center":"Keskit\xe4","filter-transform-constrain":"S\xe4ilyt\xe4 kuvasuhde","filter-transform-snap":"Tartu","filter-transform-snap-title":"Tartu kiertoon ja sijaintiin","filter-bright-contrast-title":"Kirkkaus / kontrasti","filter-bright-contrast-description":"S\xe4\xe4d\xe4 valitun tason kirkkautta ja kontrastia.","filter-bright-contrast-brightness":"Kirkkaus","filter-bright-contrast-contrast":"Kontrasti","filter-curves-title":"K\xe4yr\xe4t","filter-curves-description":"Muuttaa s\xe4vyt k\xe4yr\xe4n mukaiseksi valitulla tasolla.","filter-curves-all":"Kaikki","filter-hue-sat-title":"S\xe4vy / kyll\xe4isyys","filter-hue-sat-description":"Vaihtaa valitun tason s\xe4vy\xe4 ja kyll\xe4isyytt\xe4","filter-hue-sat-hue":"S\xe4vy","filter-hue-sat-saturation":"Kyll\xe4isyys","filter-applied":"toteutettu","filter-tilt-shift-title":"Syv\xe4ter\xe4vyys","filter-tilt-shift-description":"Tekee syv\xe4ter\xe4vyysefektin valitulle tasolle.","filter-tilt-shift-blur":"Sumennuksen s\xe4de","filter-tilt-shift-gradient":"Sumennuksen liukuma","filter-to-alpha-title":"Luo alfa-kanava","filter-to-alpha-description":"Luo alfa-kanavan valitusta tasosta:","filter-to-alpha-inverted-lum":"K\xe4\xe4nteinen kirkkaus","filter-to-alpha-lum":"Kirkkaus","filter-to-alpha-replace":"Korvaa RGB","filter-triangle-blur-title":"Sumenna","filter-triangle-blur-description":"Sumentaa valitun tason.","filter-unsharp-mask-title":"Ter\xe4v\xf6inti","filter-unsharp-mask-description":"Ter\xe4v\xf6itt\xe4\xe4 valitun tason muuttamalla pikselien v\xe4ri\xe4 kauemmas viereisten pikselien keskiarvosta.","filter-unsharp-mask-strength":"Vahvuus","filter-grid":"Ruudukko","filter-grid-description":"Piirt\xe4\xe4 ruudukon valitulle tasolle.","filter-noise":"Kohina","filter-noise-description":"Lis\xe4\xe4 kohinaa valittuun tasoon.","filter-noise-scale":"Skaala","filter-noise-alpha":"Alfa","filter-pattern":"Kuvio","filter-pattern-description":"Luo kuvion valitulle tasolle. Ved\xe4 n\xe4hd\xe4ksesi esikatselun lis\xe4asetuksista.","filter-distort":"V\xe4\xe4rist\xe4","filter-distort-description":"V\xe4\xe4rist\xe4\xe4 valitun tason.","filter-distort-phase":"Vaihe","filter-distort-stepsize":"Askelkoko","filter-distort-sync-xy":"Lukitse X=Y","filter-vanish-point":"Katoamispiste","filter-vanish-point-title":"Katoamispiste","filter-vanish-point-description":"Lis\xe4\xe4 katoamispisteen valittuun tasoon. Raahaa pistett\xe4 esikatselussa.","filter-vanish-point-lines":"Viivoja","dropper-drop":"Pudota avattava tiedosto","dropper-as-image":"Uudeksi kuvaksi","dropper-as-layer":"Uudeksi tasoksi","import-opening":"Tiedostoa avataan...","import-title":"Avaa kuva","import-too-large":"Kuva on liian suuri, sit\xe4 pienennet\xe4\xe4n.","import-btn-as-layer":"Tasoksi","import-btn-as-image":"Kuvaksi","import-as-layer-title":"Avaa kuva uudeksi tasoksi","import-as-layer-description":"Sijoita avattava kuva.","import-as-layer-limit-reached":"Tasoja ei voi en\xe4\xe4 lis\xe4t\xe4. Kuva sijoitetaan olemassa olevalle tasolle.","import-as-layer-fit":"Sovita","import-flatten":"Yhdist\xe4 tasot","import-unsupported-file":"Tuntematon tiedostomuoto. Toimivat tiedostomuodot l\xf6ytyv\xe4t ohjeista.","import-broken-file":"Kuvan avaus ep\xe4onnistui. Tiedosto voi olla viallinen.","import-psd-unsupported":"Tiedostossa on ei-tuettuja ominaisuuksia. PSD-tiedoston tasot t\xe4ytyi yhdist\xe4\xe4.","import-psd-limited-support":"PSD-tiedostojen tuki on rajoitettu. Yksitasoiset kuvat toimivat todenn\xe4k\xf6isesti parhaiten.","import-psd-too-large":"Kuvan koko ylitt\xe4\xe4 maksimimitat {x} x {x} pikseli\xe4. Kuvaa ei voitu avata.","import-psd-size":"Kuvan koko","clipboard-read-fail":"Leikep\xf6yd\xe4n lukeminen ep\xe4onnistu.","clipboard-no-image":"Leikep\xf6yd\xe4lt\xe4 ei l\xf6ytynyt kuvaa.","hand-reset":"Palauta","hand-fit":"Sovita","hand-inertia-scrolling":"Hidastuva siirto","bucket-tolerance":"Raja-arvo","bucket-sample":"N\xe4yte","bucket-sample-title":"Mist\xe4 tasoista v\xe4rin\xe4yte otetaan","bucket-sample-all":"Kaikki","bucket-sample-active":"Aktiivinen","bucket-sample-above":"Ylempi taso","bucket-grow":"Kasvata","bucket-grow-title":"Kasvata t\xe4ytett\xe4v\xe4 alue (pikselein\xe4)","bucket-contiguous":"Jatkuva","bucket-contiguous-title":"T\xe4yt\xe4 vain yhdistetyt alueet","gradient-linear":"Lineaarinen","gradient-linear-mirror":"K\xe4\xe4nteisesti lineaarinen","gradient-radial":"S\xe4teitt\xe4inen","shape-stroke":"Viiva","shape-fill":"T\xe4ytt\xf6","shape-rect":"Suorakulmio","shape-ellipse":"Ellipsi","shape-line":"Suora","shape-line-width":"Suoran leveys","shape-outwards":"Ulosp\xe4in","shape-fixed":"Lukittu 1:1","shape-auto-pan":"Autom. siirto","shape-auto-pan-title":"Piirtoalue siirtyy automaattisesti seuraten piirt\xe4mist\xe4","text-instruction":"Klikkaa kuvaa sijoittaaksesi tekstin","text-title":"Lis\xe4\xe4 teksti","text-text":"Teksti","text-font":"Kirjastin","text-placeholder":"Tekstisi","text-color":"V\xe4ri","text-size":"Koko","text-line-height":"Rivin korkeus","text-letter-spacing":"Kirjainten v\xe4listys","text-left":"Vasen","text-center":"Keskitetty","text-right":"Oikea","text-italic":"Kursiivi","text-bold":"Lihavoitu","select-select":"Valitse","select-transform":"Muunna","select-lasso":"Lasso","select-polygon":"Monikulmio","select-boolean-replace":"Korvaa","select-boolean-add":"Lis\xe4\xe4","select-boolean-subtract":"Poista","select-all":"Kaikki","select-invert":"K\xe4\xe4nteinen","select-reset":"Palauta","select-fill":"T\xe4yt\xe4","select-erase":"Poista","select-transform-clone":"Monista","select-transform-clone-applied":"Monistettu","select-transform-move-to-layer":"Siirr\xe4 tasolle:","select-transform-applied":"Muutokset tehty","select-transform-empty":"Aktiivisen tason valittu alue on tyhj\xe4.","save-reminder-title":"Tallentamattomia muutoksia","save-reminder-text":"Kuvaa ei ole tallennettu viimeiseen {a} minuuttiin. Tallenna nyt est\xe4\xe4ksesi muutosten katoamisen.","save-reminder-save-psd":"Tallenna PSD-muodossa","save-reminder-psd-layers":"PSD tallentaa kaikki tasot.","backup-drawing":"Voit varmuuskopioida kuvan.","submit":"L\xe4het\xe4","submit-title":"L\xe4het\xe4 kuva","submit-prompt":"L\xe4hetet\xe4\xe4nk\xf6 kuva?","submit-submitting":"L\xe4hetet\xe4\xe4n","embed-init-loading":"Sovellusta ladataan","embed-init-waiting":"Odotetaan kuvaa","help":"Ohje","tab-settings":"Asetukset","settings-language":"Kieli","settings-language-reload":"Muutokset tulevat voimaan, kun p\xe4ivit\xe4t sivun.","settings-theme":"Teema","settings-save-reminder-label":"Muistutus tallennuksesta","settings-save-reminder-disabled":"ei muistutusta","settings-save-reminder-confirm-title":"Kytket\xe4\xe4nk\xf6 tallennusmuistutus pois p\xe4\xe4lt\xe4?","settings-save-reminder-confirm-a":"Automaattitallennus on pois p\xe4\xe4lt\xe4 ja kuva ei v\xe4ltt\xe4m\xe4tt\xe4 s\xe4ily selaimen v\xe4lilehdess\xe4. Tallenna kuvasi s\xe4\xe4nn\xf6llisesti!","settings-save-reminder-confirm-b":"Otatko riskin ja kytket pois p\xe4\xe4lt\xe4?","settings-save-reminder-confirm-disable":"Ei muistutusta","theme-dark":"Tumma","theme-light":"Vaalea","terms-of-service":"K\xe4ytt\xf6ehdot","licenses":"Lisenssit","source-code":"L\xe4hdekoodi","auto":"automaattinen","zoom-in":"Suurenna","zoom-out":"Pienenn\xe4","radius":"S\xe4de","constrain-proportions":"S\xe4ilyt\xe4 kuvasuhde","width":"Leveys","height":"Korkeus","opacity":"Peitto","scatter":"Hajonta","red":"Punainen","green":"Vihre\xe4","blue":"Sininen","eraser":"Kumi","center":"Keskit\xe4","layers":"Tasot","background":"Tausta","scaling-algorithm":"Skaalausalgoritmi","algorithm-smooth":"Sulava","algorithm-pixelated":"Piksel\xf6ity","preview":"Esikatselu","angle-snap":"Tartu","angle-snap-title":"Tartu 45\xb0 kulmassa","lock-alpha":"Lukitse alfa","lock-alpha-title":"Lukitsee tason alfa-kanavan","reverse":"K\xe4\xe4nteinen","compare-before":"Ennen","compare-after":"J\xe4lkeen","loading":"Ladataan","more":"Lis\xe4\xe4","x-minutes":"{x} min","wip":"Ty\xf6 k\xe4ynniss\xe4","browser-zoom-help":"Palauta selaimen zoomaus kaksoisnapauttamalla tai nipist\xe4m\xe4ll\xe4 sormia erilleen.","dismiss":"Poistu"}');

},{}]},["bfDhd"], null, "parcelRequire94c2", {})

//# sourceMappingURL=fi.377694cc.js.map
