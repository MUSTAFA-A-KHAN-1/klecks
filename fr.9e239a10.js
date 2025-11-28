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
})({"9Cwlc":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "200038479e239a10";
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

},{}],"88TCU":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Basculer gauche / droite","toggle-show-tools":"Afficher / Masquer les Outils","scroll":"D\xe9filer","donate":"Don","home":"Accueil","modal-new-tab":"Ouvrir dans un nouvel onglet","tab-edit":"Modifier","tab-file":"Fichier","tool-brush":"Pinceau","tool-paint-bucket":"Pot de peinture","tool-gradient":"D\xe9grad\xe9","tool-shape":"Forme","tool-text":"Texte","tool-hand":"Outil Main","tool-select":"Outil S\xe9lection","tool-zoom":"Zoom","tool-more-tools":"Plus d\'outils","undo":"Annuler","redo":"R\xe9tablir","brush-pen":"Stylo","brush-blend":"Fusion","brush-sketchy":"Croquis","brush-pixel":"Pixel","brush-chemy":"Chimie","brush-smudge":"Outil doigt","brush-size":"Taille","brush-blending":"M\xe9langer","brush-toggle-pressure":"Basculer la sensibilit\xe9 de la pression","brush-pen-circle":"Cercle","brush-pen-chalk":"Craie","brush-pen-calligraphy":"Calligraphie","brush-pen-square":"Carr\xe9","brush-sketchy-scale":"\xc9chelle","brush-pixel-dither":"Trame","brush-chemy-fill":"Remplir","brush-chemy-stroke":"Ligne","brush-chemy-mirror-x":"Sym\xe9trie Horizontale","brush-chemy-mirror-y":"Sym\xe9trie Verticale","brush-chemy-gradient":"D\xe9grad\xe9","brush-eraser-transparent-bg":"Fond Transparent","stabilizer":"Stabilisateur","stabilizer-title":"Stabilisateur de Ligne","eyedropper":"Pipette","secondary-color":"Couleur Secondaire","manual-color-input":"Saisie Manuelle des Couleurs","mci-hex":"Hexad\xe9cimal","mci-copy":"Copier","modal-ok":"Ok","modal-cancel":"Annuler","modal-close":"Fermer","layers-active-layer":"Calque Active","layers-layer":"Calque","layers-copy":"Copier","layers-blending":"M\xe9langer","layers-new":"Nouveau Calque","layers-remove":"Supprim\xe9 un calque","layers-duplicate":"Dupliquer le Calque","layers-merge":"Fusionner avec le calque ci-dessous","layers-clear":"Effacer le calque","layers-merge-all":"Tout fusionner","layers-rename":"Renommer","layers-active-layer-visible":"Calque active visible","layers-active-layer-hidden":"Calque active masqu\xe9","layers-visibility-toggle":"Visibilit\xe9 des calques","layers-blend-normal":"normal","layers-blend-darken":"obscurcir","layers-blend-multiply":"produit","layers-blend-color-burn":"densit\xe9 couleur +","layers-blend-lighten":"\xe9claircir","layers-blend-screen":"superposition","layers-blend-color-dodge":"densit\xe9 couleur -","layers-blend-overlay":"incrustation","layers-blend-soft-light":"lumi\xe8re tamis\xe9e","layers-blend-hard-light":"lumi\xe8re crue","layers-blend-difference":"diff\xe9rence","layers-blend-exclusion":"exclusion","layers-blend-hue":"teinte","layers-blend-saturation":"saturation","layers-blend-color":"couleur","layers-blend-luminosity":"luminosit\xe9","layers-rename-title":"Renommer le Calque","layers-rename-name":"Nom","layers-rename-clear":"Nom Clair","layers-rename-sketch":"Croquis","layers-rename-colors":"Couleurs","layers-rename-shading":"Ombrage","layers-rename-lines":"Ligne","layers-rename-effects":"Effet","layers-rename-foreground":"Premier Plan","layers-merge-modal-title":"Fusionner / M\xe9langer des Calques","layers-merge-description":"Fusionne le calque s\xe9lectionn\xe9 avec celui du dessous. S\xe9lectionnez le mode de mixage:","file-no-autosave":"Pas de sauvegarde automatique, pas de cloud","file-new":"Nouveau","file-import":"Importer","file-save":"Enregistrer","file-format":"Format du Fichier","file-show-save-dialog":"Afficher le dialogue de sauvegarde","file-copy":"Copier","file-copy-title":"Copier Dans Le Presse-Papiers","file-paste":"Coller","file-share":"Partager","file-storage":"Stockage du navigateur","file-storage-about":"A propos du stockage du navigateur","file-storage-cant-access":"Impossible d\u2019acc\xe9der au stockage.","file-storage-empty":"Vide","file-storage-store":"Conserver","file-storage-open":"Ouvrir","file-storage-open-confirmation":"Cette image est d\xe9j\xe0 ouverte dans un autre onglet. L\'ouvrir ici aussi ?","file-storage-open-failed":"\xc9chec du chargement","file-storage-clear":"Effacer","file-storage-clear-prompt":"Effacer le stockage du navigateur ? L\'effacement est irr\xe9versible.","file-storage-storing":"Stockage","file-storage-overwrite":"\xc9craser","file-storage-overwrite-confirm":"\xc9craser le stockage du navigateur ? Les donn\xe9es \xe9cras\xe9es seront d\xe9finitivement supprim\xe9es.","file-storage-min-ago":"il y a {x}min","file-storage-hours-ago":"il y a {x}h","file-storage-days-ago":"il y a {x} jours","file-storage-month-ago":"> il y a un mois","file-storage-restored":"Restaur\xe9 \xe0 partir du stockage du Navigateur","file-storage-stored":"Stock\xe9 dans le Stockage du Navigateur","file-storage-failed":"\xc9chec de l\'enregistrement dans le stockage du navigateur","file-storage-failed-1":"Impossible de stocker. Causes possibles:","file-storage-failed-2":"Manque d\'espace disque","file-storage-failed-3":"Stockage d\xe9sactiv\xe9 dans l\'onglet Navigation priv\xe9e","file-storage-failed-4":"Navigateur ne supporte pas le stockage","file-storage-failed-clear":"\xc9chec de l\'effacement.","file-upload":"T\xe9l\xe9verser","tab-recovery-recover-tabs":"R\xe9cup\xe9rer les onglets ferm\xe9s","tab-recovery-explanation":"Les donn\xe9es de r\xe9cup\xe9ration ne sont conserv\xe9es que pendant une courte p\xe9riode. Enregistrez-les pour ne pas perdre votre travail.","tab-recovery-total-quota-label":"Total:","tab-recovery-empty":"Rien \xe0 r\xe9cup\xe9rer.","tab-recovery-recover":"R\xe9cup\xe9rer","tab-recovery-delete":"Effacer","tab-recovery-delete-confirmation":"Supprimer cette r\xe9cup\xe9ration ? La suppression est irr\xe9versible.","tab-recovery-failed-to-recover":"\xc9chec de la r\xe9cup\xe9ration de l\'onglet.","tab-recovery-recovered":"Onglet r\xe9cup\xe9r\xe9.","cleared-layer":"Calque effac\xe9","cleared-selected-area":"Zone s\xe9lectionn\xe9e effac\xe9e","filled":"Remplir","filled-selected-area":"Remplir la s\xe9lection","new-title":"Nouvelle Image","new-current":"Actuel","new-fit":"Cadrer","new-oversize":"Surdimensionn\xe9e","new-square":"Carr\xe9","new-landscape":"Paysage","new-portrait":"Portrait","new-screen":"\xc9cran","new-video":"Vid\xe9o","new-din-paper":"Papier DIN","new-px":"px","new-ratio":"Format","upload-title":"Publier sur Imgur","upload-link-notice":"Toute personne disposant du lien vers votre image t\xe9l\xe9charg\xe9e pourra la visualiser.","upload-name":"Titre","upload-title-untitled":"Sans Titre","upload-caption":"L\xe9gende","upload-submit":"T\xe9l\xe9verser","upload-uploading":"T\xe9l\xe9versement...","upload-success":"T\xe9l\xe9versement R\xe9ussi","upload-failed":"Le t\xe9l\xe9versement a \xe9chou\xe9.","upload-delete":"Pour supprimer votre image d\'Imgur, visitez:","cropcopy-title-copy":"Copier Dans Le Presse-Papiers","cropcopy-title-crop":"Rogner","cropcopy-click-hold":"Clique-droit ou rester appuy\xe9 pour copier.","cropcopy-btn-copy":"Copier","cropcopy-copied":"Copi\xe9.","cropcopy-btn-crop":"Recadrer","crop-drag-to-crop":"Glisser pour recadrer","filter-crop-extend":"Recadrer","filter-flip":"Retourne","filter-perspective":"Perspective","filter-resize":"Redimensionner","filter-rotate":"Pivoter","filter-transform":"Transformer","filter-bright-contrast":"Lum / Contraste","filter-curves":"Courbe","filter-hue-sat":"Teinte/Satur.","filter-invert":"Inverser","filter-tilt-shift":"Tilt Shift","filter-to-alpha":"Vers Alpha","filter-triangle-blur":"Flou de Triangle","filter-unsharp-mask":"Masque Flou","filter-crop-title":"Recadrer / \xc9tendre","filter-crop-description":"Recadrez ou \xe9tendez l\'image.","filter-crop-left":"Gauche","filter-crop-right":"Droite","filter-crop-top":"Haut","filter-crop-bottom":"Bas","filter-crop-rule-thirds":"R\xe8gle des Tiers","filter-crop-fill":"Remplir","filter-flip-title":"Retourne","filter-flip-description":"Retourne le calque ou l\'image enti\xe8re.","filter-flip-horizontal":"Horizontalement","filter-flip-vertical":"Verticalement","filter-flip-image":"Image","filter-flip-layer":"Calque","filter-perspective-title":"Perspective","filter-perspective-description":"Transforme le calque s\xe9lectionn\xe9.","filter-resize-title":"Redimensionner","filter-resize-description":"Redimensionne l\'image.","filter-rotate-title":"Tourner","filter-rotate-description":"Faire pivoter l\'image.","filter-transform-empty":"Le calque est vide.","filter-transform-title":"Transformer","filter-transform-description":"Transforme le calque s\xe9lectionn\xe9. Maintenez la touche Shift enfonc\xe9e pour un comportement suppl\xe9mentaire.","filter-transform-rotation":"Rotation","filter-transform-flip":"Retourne","filter-transform-center":"Centre","filter-transform-constrain":"Contraindre","filter-transform-snap":"Aligner","filter-transform-snap-title":"Aligner la rotation et la position","filter-bright-contrast-title":"Luminosit\xe9 / Contraste","filter-bright-contrast-description":"Modifiez la luminosit\xe9 et le contraste du calque s\xe9lectionn\xe9.","filter-bright-contrast-brightness":"Luminosit\xe9","filter-bright-contrast-contrast":"Contraste","filter-curves-title":"Courbe","filter-curves-description":"Appliquez des courbes sur le calque s\xe9lectionn\xe9.","filter-curves-all":"Tout","filter-hue-sat-title":"Teinte / Saturation","filter-hue-sat-description":"Modifiez la teinte et la saturation du calque s\xe9lectionn\xe9.","filter-hue-sat-hue":"Teinte","filter-hue-sat-saturation":"Saturation","filter-applied":"appliquer","filter-tilt-shift-title":"D\xe9calage d\'Inclinaison","filter-tilt-shift-description":"Applique le d\xe9calage d\'inclinaison sur le calque s\xe9lectionn\xe9.","filter-tilt-shift-blur":"Rayon du Flou","filter-tilt-shift-gradient":"Rayon du Gradient","filter-to-alpha-title":"Vers Alpha","filter-to-alpha-description":"G\xe9n\xe9r\xe9 un canal alpha pour le calque s\xe9lectionn\xe9:","filter-to-alpha-inverted-lum":"Luminance Invers\xe9e","filter-to-alpha-lum":"Luminance","filter-to-alpha-replace":"Remplacer RGB","filter-triangle-blur-title":"Flou Triangulaire","filter-triangle-blur-description":"Applique un flou triangulaire sur le calque s\xe9lectionn\xe9.","filter-unsharp-mask-title":"Masque Flou","filter-unsharp-mask-description":"Accentue le calque s\xe9lectionn\xe9 en d\xe9calant les pixels de la moyenne de leurs voisins.","filter-unsharp-mask-strength":"Force","filter-grid":"Grille","filter-grid-description":"Trace une grille sur le calque choisi.","filter-noise":"Bruit","filter-noise-description":"Ajouter du bruit au calque s\xe9lectionn\xe9.","filter-noise-scale":"\xc9chelle","filter-noise-alpha":"Alpha","filter-pattern":"Motif","filter-pattern-description":"Cr\xe9e un motif sur le calque choisi. Faites glisser l\'aper\xe7u pour plus de contr\xf4le.","filter-distort":"D\xe9former","filter-distort-description":"D\xe9former le calque s\xe9lectionn\xe9.","filter-distort-phase":"Phase","filter-distort-stepsize":"Taille de l\'\xc9tape","filter-distort-sync-xy":"Synchroniser XY","filter-vanish-point":"Point de Fuite","filter-vanish-point-title":"Point de Fuite","filter-vanish-point-description":"Ajoute un point de fuite au calque s\xe9lectionn\xe9. Faites glisser l\'aper\xe7u pour vous d\xe9placer.","filter-vanish-point-lines":"Lignes","dropper-drop":"D\xe9poser pour importer","dropper-as-image":"En Nouvelle Image","dropper-as-layer":"En Calque","import-opening":"Ouverture du fichier...","import-title":"Importer une Image","import-too-large":"Image trop grande, devrait \xeatre r\xe9duite.","import-btn-as-layer":"En calques","import-btn-as-image":"En image","import-as-layer-title":"Importer l\'Image en tant que nouveau Calque","import-as-layer-description":"Ajustez la position de l\'image import\xe9e.","import-as-layer-limit-reached":"Limite de couche atteinte. L\'image sera plac\xe9e sur le calque existant.","import-as-layer-fit":"Adapter","import-flatten":"Aplatir l\'image","import-unsupported-file":"Type de fichier non pris en charge. Voir l\'aide pour les types pris en charge.","import-broken-file":"Impossible de charger l\'image. Le fichier peut \xeatre corrompu.","import-psd-unsupported":"Fonctionnalit\xe9s non prises en charge. PSD a d\xfb \xeatre aplati.","import-psd-limited-support":"Le support PSD est limit\xe9. Aplati aura plus probablement l\'air correct.","import-psd-too-large":"L\'image d\xe9passe les dimensions maximales de {x} x {x} pixels. Impossible d\'importer.","import-psd-size":"Taille de l\'image","clipboard-read-fail":"La lecture du presse-papiers a \xe9chou\xe9.","clipboard-no-image":"Aucune image n\'a \xe9t\xe9 trouv\xe9e dans le presse-papiers.","hand-reset":"R\xe9initialiser","hand-fit":"Adapter","hand-inertia-scrolling":"D\xe9filement inertiel","bucket-tolerance":"Tol\xe9rance","bucket-sample":"\xc9chantillon","bucket-sample-title":"A quelles couches \xe9chantillonner la couleur","bucket-sample-all":"Tous","bucket-sample-active":"Actif","bucket-sample-above":"Sup\xe9rieur","bucket-grow":"\xc9tendre","bucket-grow-title":"Agrandir la zone remplie (en pixels)","bucket-contiguous":"Contigu\xeb","bucket-contiguous-title":"Ne remplissez que les zones connect\xe9es","gradient-linear":"Lin\xe9aire","gradient-linear-mirror":"Lin\xe9aire-Miroir","gradient-radial":"Radial","shape-stroke":"Contour","shape-fill":"Remplir","shape-rect":"Rectangle","shape-ellipse":"Ellipse","shape-line":"Ligne","shape-line-width":"Largeur de Ligne","shape-outwards":"Ext\xe9rieur","shape-fixed":"Fix\xe9 1:1","shape-auto-pan":"D\xe9filement automatique","shape-auto-pan-title":"D\xe9filement automatique pendant le dessin.","text-instruction":"Cliquez sur le canevas pour placer le texte","text-title":"Ajouter du Texte","text-text":"Texte","text-font":"Police","text-placeholder":"Votre texte","text-color":"Couleur","text-size":"Taille","text-line-height":"Hauteur de la ligne","text-letter-spacing":"Espace entre les lettres","text-left":"Gauche","text-center":"Centre","text-right":"Droite","text-italic":"Italique","text-bold":"Gras","select-select":"S\xe9lection","select-transform":"Transformer","select-lasso":"Lasso","select-polygon":"Polygone","select-boolean-replace":"Remplacer","select-boolean-add":"Ajouter","select-boolean-subtract":"Soustraire","select-all":"Tout","select-invert":"Inverser","select-reset":"R\xe9initialiser","select-fill":"Remplir","select-erase":"Effacer","select-transform-clone":"Cloner","select-transform-clone-applied":"Clon\xe9","select-transform-move-to-layer":"D\xe9placer vers le calque","select-transform-applied":"Transformation appliqu\xe9e","select-transform-empty":"La zone s\xe9lectionn\xe9e sur le calque actif est vide.","save-reminder-title":"Travail non sauv\xe9","save-reminder-text":"L\'image n\'a pas \xe9t\xe9 sauvegard\xe9e en {a} minutes{b}. Enregistrez-la maintenant pour \xe9viter toute perte \xe9ventuelle.","save-reminder-save-psd":"Enregistrer en tant que PSD","save-reminder-psd-layers":"PSD se souviendra de toutes les couches.","backup-drawing":"Vous pouvez sauvegarder votre dessin.","submit":"Envoyer","submit-title":"Soumettre Le Dessin","submit-prompt":"Soumettre Un Dessin?","submit-submitting":"Soumission","embed-init-loading":"Chargement de l\'application","embed-init-waiting":"En Attente de L\'image","help":"Aide","tab-settings":"Param\xe8tres","settings-language":"Langues","settings-language-reload":"Mettra \xe0 jour apr\xe8s le rechargement.","settings-theme":"Th\xe8me","settings-save-reminder-label":"Rappel de sauvegarde","settings-save-reminder-disabled":"d\xe9sactiv\xe9","settings-save-reminder-confirm-title":"D\xe9sactiver le rappel de sauvegarde?","settings-save-reminder-confirm-a":"Il n\u2019y a pas de sauvegarde automatique et les onglets du navigateur ne durent pas ind\xe9finiment. Si vous ne sauvegardez pas r\xe9guli\xe8rement, vous risquez de perdre votre travail.","settings-save-reminder-confirm-b":"D\xe9sactiver \xe0 vos risques et p\xe9rils?","settings-save-reminder-confirm-disable":"D\xe9sactiver","theme-dark":"Sombre","theme-light":"Clair","terms-of-service":"Conditions d\'utilisation","licenses":"Licence","source-code":"Code Source","auto":"auto","zoom-in":"Zoom Avant","zoom-out":"Zoom Arri\xe8re","radius":"Rayon","constrain-proportions":"Proportions Contraintes","width":"Largeur","height":"Hauteur","opacity":"Opacit\xe9","scatter":"Dispersion","red":"Rouge","green":"Vert","blue":"Bleu","eraser":"Gomme","center":"Centre","layers":"Calques","background":"Arri\xe8re Plan","scaling-algorithm":"Algorithme de Mise \xe0 l\'\xc9chelle","algorithm-smooth":"Lisse","algorithm-pixelated":"Pix\xe9lis\xe9","preview":"Aper\xe7u","angle-snap":"Casser","angle-snap-title":"Encliquetage \xe0 angle de 45\xb0","lock-alpha":"Verrou Alpha","lock-alpha-title":"Verrou Alpha du Calques","reverse":"Inverser","compare-before":"Avant","compare-after":"Apr\xe8s","loading":"Chargement","more":"Plus","x-minutes":"{x}min","wip":"Travaux en cours","browser-zoom-help":"Appuyez deux fois ou \xe9cartez les doigts pour r\xe9initialiser le zoom du navigateur.","dismiss":"Fermer"}');

},{}]},["9Cwlc"], null, "parcelRequire94c2", {})

//# sourceMappingURL=fr.9e239a10.js.map
