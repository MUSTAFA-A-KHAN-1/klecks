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
})({"6hOhD":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e78172ec374d6d8b";
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

},{}],"fqM0J":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Pindah UI k\xe9nca/katuhu","toggle-show-tools":"T\xe9mbongkeun/Sumputkeun Alat","scroll":"Ngagugulung","donate":"Nyumbangkeun","home":"Imah","modal-new-tab":"Buka dina tab anyar","tab-edit":"\xc9dit","tab-file":"File","tool-brush":"Sikat","tool-paint-bucket":"Ember Cet","tool-gradient":"Gradi\xe9n","tool-shape":"Wangun","tool-text":"T\xe9ks","tool-hand":"Pakakas leungeun","tool-select":"Pilih Alat","tool-zoom":"Zum","tool-more-tools":"Langkung Alat","tool-more-tools-click-again":"Penc\xe9t deui kanggo langkung seueur alat","undo":"Ngabolaykeun","redo":"Ulang deui","brush-pen":"Pen","brush-blend":"Nyampur","brush-sketchy":"Sketsa","brush-pixel":"Piksel","brush-chemy":"Kiamia","brush-smudge":"Smudge","brush-size":"Ukuran","brush-blending":"Nyampur","brush-toggle-pressure":"Toggle Sensitipitas Tekanan","brush-pen-circle":"Bunderan","brush-pen-chalk":"Kapur tulis","brush-pen-calligraphy":"Kaligrafi","brush-pen-square":"Pasagi","brush-sketchy-scale":"Skala","brush-pixel-dither":"Diter","brush-chemy-fill":"Eusian","brush-chemy-stroke":"Stroke","brush-chemy-mirror-x":"Sim\xe9tri Horizontal","brush-chemy-mirror-y":"Sim\xe9tri Nangtung","brush-chemy-gradient":"Gradi\xe9n","brush-eraser-transparent-bg":"Latar Transparan","stabilizer":"Penstabil","stabilizer-title":"Stroke Stabiliser","eyedropper":"Tetes panon","secondary-color":"Warna Sekund\xe9r","manual-color-input":"Input Warna Manual","mci-hex":"Hex","mci-copy":"Nyalin","modal-ok":"Ok\xe9","modal-cancel":"Ngabolaykeun","modal-close":"Tutup","layers-active-layer":"Lapisan Aktip","layers-layer":"Lapisan","layers-copy":"nulad","layers-blending":"Nyampur","layers-new":"Lapisan Anyar","layers-remove":"Leupaskeun Lapisan","layers-duplicate":"Lapisan Duplikat","layers-merge":"Ngagabung jeung lapisan handap","layers-clear":"Lapisan jelas","layers-merge-advanced":"Maju ngahiji","layers-merge-all":"Ngahijikeun sadayana","layers-rename":"Ganti ngaran","layers-active-layer-visible":"Lapisan aktip katingali","layers-active-layer-hidden":"Lapisan aktip disumputkeun","layers-visibility-toggle":"Lapisan Pisibilitas","layers-blend-normal":"biasa","layers-blend-darken":"poekeun","layers-blend-multiply":"kalikeun","layers-blend-color-burn":"kaduruk warna","layers-blend-lighten":"lngaringankeun","layers-blend-screen":"hahalang","layers-blend-color-dodge":"ngahindar warna","layers-blend-overlay":"overlay","layers-blend-soft-light":"cahaya lemes","layers-blend-hard-light":"cahaya teuas","layers-blend-difference":"b\xe9dana","layers-blend-exclusion":"pangaluaran","layers-blend-hue":"hue","layers-blend-saturation":"jenuh","layers-blend-color":"warna","layers-blend-luminosity":"luminositas","layers-rename-title":"Ganti ngaran Lapisan","layers-rename-name":"Ngaran","layers-rename-clear":"Hapus Ngaran","layers-rename-sketch":"Nyieun Sketsa","layers-rename-colors":"Warna-warna","layers-rename-shading":"Ngiuhan","layers-rename-lines":"Garis-garis","layers-rename-effects":"Balukar-balukar","layers-rename-foreground":"Latar hareup","layers-merge-modal-title":"Ngagabung/Campur Lapisan","layers-merge-description":"Ngagabungkeun lapisan anu dipilih sareng anu di handap. Pilih mode campuran:","file-no-autosave":"Taya autosave, euweuh gudang awan","file-new":"Anyar","file-import":"Impor","file-save":"Nyalametkeun","file-format":"Format File","file-show-save-dialog":"T\xe9mbongkeun dialog simpen","file-copy":"Nyalin","file-copy-title":"Nyalin Kana Clipboard","file-paste":"T\xe9mp\xe9l","file-share":"Andil","file-storage":"Panyimpenan Browser","file-storage-about":"Ngeunaan Panyimpenan Browser","file-storage-cant-access":"Teu bisa ngakses panyimpenan.","file-storage-empty":"Kosong","file-storage-store":"Store","file-storage-open":"Kabuka","file-storage-open-confirmation":"Gambar ieu parantos dibuka dina tab anu san\xe9s. Buka di dieu oge?","file-storage-open-failed":"Gagal ngamuat.","file-storage-clear":"Jelas","file-storage-clear-prompt":"Hapus Panyimpenan Browser? Hapusanna henteu tiasa dibalikeun deui.","file-storage-storing":"Nyimpen","file-storage-overwrite":"Nimpa","file-storage-overwrite-confirm":"Nimpa Panyimpenan Browser? Data overwritten bakal dihapus perman\xe9n.","file-storage-min-ago":"{x}mnt kaliwat","file-storage-hours-ago":"{x}h katukang","file-storage-days-ago":"{x}d baheula","file-storage-month-ago":"> 1sasih kapengker","file-storage-restored":"Dibalikeun tina Panyimpenan Browser","file-storage-stored":"Disimpen ka Panyimpenan Browser","file-storage-failed":"Gagal nyimpen kana Panyimpenan Browser","file-storage-failed-1":"Gagal pikeun nyimpen. Alesan anu mungkin:","file-storage-failed-2":"Kaluar tina rohangan disk","file-storage-failed-3":"Panyimpenan ditumpurkeun dina tab incognito","file-storage-failed-4":"Browser henteu ngadukung panyimpenan","file-storage-failed-clear":"Gagal mupus.","file-upload":"Unggah","tab-recovery-recover-tabs":"Cageur tab katutup","tab-recovery-explanation":"Data Pamulihan ngan disimpen sakedap. Simpen pikeun mastikeun karya anjeun teu leungit.","tab-recovery-total-quota-label":"Total:","tab-recovery-empty":"Euweuh nu cageur.","tab-recovery-recover":"Cageur","tab-recovery-delete":"Hapus","tab-recovery-delete-confirmation":"Pupus pamulihan ieu? Hapusan teu tiasa dibolaykeun.","tab-recovery-failed-to-recover":"Gagal cageur tab.","tab-recovery-recovered":"Tab pulih.","cleared-layer":"Lapisan diberesihan","cleared-selected-area":"Ngabersihan da\xe9rah anu dipilih","filled":"Dieusian","filled-selected-area":"Seleksi dieusian","new-title":"Gambar Anyar","new-current":"Ayeuna","new-fit":"Pas","new-oversize":"Geuning","new-square":"Pasagi","new-landscape":"Bentang","new-portrait":"Potr\xe9t","new-screen":"Layar","new-video":"Video","new-din-paper":"TI Kertas","new-px":"px","new-ratio":"Babandingan","upload-title":"Unggah ka Imgur","upload-link-notice":"Saha wa\xe9 anu gaduh tautan kana gambar anu anjeun unggah bakal tiasa ningali \xe9ta.","upload-name":"Judul","upload-title-untitled":"Teu dijudulan","upload-caption":"Caption","upload-submit":"Unggah","upload-uploading":"Ngunggah...","upload-success":"Unggahan Suks\xe9s","upload-failed":"Unggahan gagal.","upload-delete":"Pikeun mupus gambar anjeun tina kunjungan Imgur:","cropcopy-title-copy":"Salin ka Clipboard","cropcopy-title-crop":"Pamotongan","cropcopy-mask":"Topeng teu dipilih","cropcopy-click-hold":"Klik-katuhu atawa penc\xe9t tahan pikeun nyalin.","cropcopy-btn-copy":"Pikeun Clipboard","cropcopy-copied":"Disalin.","cropcopy-btn-crop":"Larapkeun Pamotongan","crop-drag-to-crop":"S\xe9red pikeun motong","filter-crop-extend":"Pamotongan/Ngalegaan","filter-flip":"Balikkeun","filter-perspective":"Sudut Pandang","filter-resize":"Ngarobah ukuran","filter-rotate":"Muterkeun","filter-transform":"Transformasi","filter-bright-contrast":"Caang/Kontras","filter-curves":"Lengkungan","filter-hue-sat":"Hue/Saturasi","filter-invert":"Balikkeun","filter-tilt-shift":"Dengdekkeun Shift","filter-to-alpha":"Pikeun Alfa","filter-triangle-blur":"Segitiga Blur","filter-unsharp-mask":"Top\xe9ng Unsharp","filter-crop-title":"Potong / Ngalegaan","filter-crop-description":"Potong atanapi manjangkeun gambar.","filter-crop-left":"K\xe9nca","filter-crop-right":"Leres","filter-crop-top":"Top","filter-crop-bottom":"Handapeun","filter-crop-rule-thirds":"Aturan Katilu","filter-crop-fill":"Eusian","filter-flip-title":"Balikkeun","filter-flip-description":"Balikkeun lapisan atawa sakabeh gambar.","filter-flip-horizontal":"Horizontal","filter-flip-vertical":"Nangtung","filter-flip-image":"Balikkeun Gambar","filter-flip-layer":"Lapisan Balikkeun","filter-perspective-title":"Sudut pandang","filter-perspective-description":"Transforms lapisan dipilih.","filter-resize-title":"Ngarobah ukuran","filter-resize-description":"Ngarobah ukuran gambar.","filter-rotate-title":"Muterkeun","filter-rotate-description":"Muterkeun gambar.","filter-transform-empty":"Lapisan kosong.","filter-transform-empty-selection":"Lapisan kosong di da\xe9rah anu dipilih.","filter-transform-title":"Transformasi","filter-transform-description":"Transforms lapisan dipilih. Tahan Shift pikeun kabiasaan tambahan.","filter-transform-rotation":"Rotasi","filter-transform-flip":"Balikkeun","filter-transform-center":"Puseur","filter-transform-constrain":"Ngawadahan","filter-transform-snap":"Snap","filter-transform-snap-title":"Snap Rotasi Jeung Posisi","filter-bright-contrast-title":"Caang / Kontras","filter-bright-contrast-description":"Robah kacaangan sareng kontras pikeun lapisan anu dipilih.","filter-bright-contrast-brightness":"Caang","filter-bright-contrast-contrast":"Kontras","filter-curves-title":"Lengkungan","filter-curves-description":"Larapkeun kurva dina lapisan anu dipilih.","filter-curves-all":"Sadayana","filter-hue-sat-title":"Hue / Saturasi","filter-hue-sat-description":"Robah hue sareng jenuh pikeun lapisan anu dipilih.","filter-hue-sat-hue":"Hue","filter-hue-sat-saturation":"Saturasi","filter-applied":"dilarapkeun","filter-tilt-shift-title":"Dengdekkeun Shift","filter-tilt-shift-description":"Larapkeun shift Dengdekkeun dina lapisan dipilih.","filter-tilt-shift-blur":"Radius Blur","filter-tilt-shift-gradient":"Radius Gradi\xe9n","filter-to-alpha-title":"Pikeun Alfa","filter-to-alpha-description":"Ngahasilkeun saluran alfa pikeun lapisan anu dipilih tina:","filter-to-alpha-inverted-lum":"Dibalikkeun Luminance","filter-to-alpha-lum":"Luminance","filter-to-alpha-replace":"Ganti RGB","filter-triangle-blur-title":"Segitiga Blur","filter-triangle-blur-description":"Larapkeun kabur segitiga dina lapisan anu dipilih.","filter-unsharp-mask-title":"Top\xe9ng Unsharp","filter-unsharp-mask-description":"Ngasah lapisan anu dipilih ku ngajauhan piksel tina rata-rata tatanggana.","filter-unsharp-mask-strength":"Kakuatan","filter-grid":"Grid","filter-grid-description":"Ngagambar grid dina lapisan anu dipilih.","filter-noise":"Geuning","filter-noise-description":"Nambahkeun noise ka lapisan dipilih.","filter-noise-scale":"Skala","filter-noise-alpha":"Alfa","filter-pattern":"Pola","filter-pattern-description":"Ngahasilkeun pola dina lapisan anu dipilih. S\xe9red sawangan pikeun kadali salajengna.","filter-distort":"Nyimpang","filter-distort-description":"Ngabalikeun lapisan anu dipilih.","filter-distort-phase":"Fase","filter-distort-stepsize":"Ukuran L\xe9ngkah","filter-distort-sync-xy":"Singkronkeun XY","filter-vanish-point":"Titik Leungit","filter-vanish-point-title":"Titik Lenyap","filter-vanish-point-description":"Nambahkeun titik leungit ka lapisan dipilih. S\xe9red sawangan pikeun mindahkeun.","filter-vanish-point-lines":"Garis-garis","dropper-drop":"Leupaskeun pikeun ngimpor","dropper-as-image":"Salaku Gambar Anyar","dropper-as-layer":"Salaku Lapisan","import-opening":"Ngabuka file...","import-title":"Impor Gambar","import-too-large":"Gambar badag teuing, bakal downscaled.","import-btn-as-layer":"Salaku Lapisan","import-btn-as-image":"Salaku Gambar","import-as-layer-title":"Impor Gambar salaku Lapisan Anyar","import-as-layer-description":"Saluyukeun posisi gambar anu diimpor.","import-as-layer-limit-reached":"wates lapisan ngahontal. Gambar bakal disimpen dina lapisan anu tos aya.","import-as-layer-fit":"Pas","import-flatten":"Gambar rata","import-unsupported-file":"Jinis file teu dirojong. Tempo Pitulung pikeun jenis nu dirojong.","import-broken-file":"Teu tiasa ngamuat gambar. File tiasa rusak.","import-psd-unsupported":"Fitur anu teu dirojong. PSD kedah diratakeun.","import-psd-limited-support":"Pangrojong PSD diwatesan. Flattened bakal leuwih gampang kasampak bener.","import-psd-too-large":"Gambar ngaleuwihan dim\xe9nsi maksimum {x} x {x} piksel. Teu bisa ngimpor.","import-psd-size":"Ukuran gambar","clipboard-read-fail":"Gagal maca tina clipboard.","clipboard-no-image":"Taya gambar kapanggih dina clipboard.","hand-reset":"Reset","hand-fit":"Pas","hand-inertia-scrolling":"Inersia Ngagulung","bucket-tolerance":"Toleransi","bucket-sample":"Sampel","bucket-sample-title":"Lapisan mana pikeun warna sampel","bucket-sample-all":"Sadayana","bucket-sample-active":"Aktip","bucket-sample-above":"Di luhur","bucket-grow":"Tumuwuh","bucket-grow-title":"Tumuwuh wewengkon dieusian (dina piksel)","bucket-contiguous":"Padeukeut","bucket-contiguous-title":"Ukur ngeusian da\xe9rah anu nyambung","gradient-linear":"Lini\xe9r","gradient-linear-mirror":"Linier-Eunteung","gradient-radial":"Radial","shape-stroke":"Stroke","shape-fill":"Eusian","shape-rect":"Sagi opat","shape-ellipse":"\xc9lips","shape-line":"Jalur","shape-line-width":"Lebar Jalur","shape-outwards":"Ka luar","shape-fixed":"Maneuh 1:1","shape-auto-pan":"Pan-otomatis","shape-auto-pan-title":"Ngal\xe9ngkah sacara otomatis nalika anjeun ngagambar","text-instruction":"Klik kanvas pikeun nempatkeun t\xe9ks","text-title":"Tambahkeun t\xe9ks","text-text":"T\xe9ks","text-font":"Font","text-placeholder":"T\xe9ks anjeun","text-color":"Warna","text-size":"Ukuran","text-line-height":"Jangkungna Garis","text-letter-spacing":"Spasi Surat","text-left":"K\xe9nca","text-center":"Puseur","text-right":"Leres","text-italic":"Miring","text-bold":"Kandel","text-failed-import":"Gagal ngimpor file ieu:","text-supported-formats":"Format anu dirojong:","select-select":"Pilih","select-transform":"Transformasi","select-lasso":"Lasso","select-polygon":"Poligon","select-boolean-replace":"Ngaganti","select-boolean-add":"Tambihan","select-boolean-subtract":"Ngurangan","select-all":"Sadayana","select-invert":"Balikkeun","select-reset":"Ngareset","select-fill":"Eusian","select-erase":"Mupus","select-transform-clone":"Klon","select-transform-clone-applied":"Kloning","select-transform-move-to-layer":"Pindah ka lapisan:","select-transform-applied":"Transformasi dilarapkeun","select-transform-empty":"Wewengkon anu dipilih dina lapisan aktip kosong.","save-reminder-title":"Gaw\xe9 teu Disimpen","save-reminder-text":"Gambar teu disimpen dina {a} menit{b}. Simpen ayeuna pikeun nyegah leungitna ahirna.","save-reminder-save-psd":"Simpen Salaku PSD","save-reminder-psd-layers":"PSD bakal nginget sadaya lapisan.","backup-drawing":"Anjeun tiasa nyadangkeun gambar anjeun.","submit":"Kirimkeun","submit-title":"Kirimkeun Gambar","submit-prompt":"Kirimkeun gambar?","submit-submitting":"Ngirimkeun","embed-init-loading":"Ngamuat aplikasi","embed-init-waiting":"Nungguan gambar","help":"Tulung","tab-settings":"Set\xe9lan","settings-language":"Basa","settings-language-reload":"Bakal ngamutahirkeun sanggeus reloading.","settings-theme":"T\xe9ma","settings-save-reminder-label":"Simpen Panginget","settings-save-reminder-disabled":"cacad","settings-save-reminder-confirm-title":"Pareuman Simpen Panginget?","settings-save-reminder-confirm-a":"Henteu aya autosave sareng tab browser henteu salami salamina. Upami anjeun henteu nyimpen p\xe9riodik anjeun kamungkinan bakal kaleungitan padamelan.","settings-save-reminder-confirm-b":"Pareuman dina resiko sorangan?","settings-save-reminder-confirm-disable":"Pareuman","theme-dark":"Poek","theme-light":"Caang","terms-of-service":"Sarat Service","licenses":"Lis\xe9nsi","source-code":"Kode Sumber","auto":"otomatis","zoom-in":"Ngazum Asup","zoom-out":"Zum Out","radius":"Radius","constrain-proportions":"Konstrain Babandingan","width":"Lebar","height":"Jangkungna","opacity":"Opacity","scatter":"Paburencay","red":"Beureum","green":"H\xe9jo","blue":"Biru","eraser":"Pamupus","center":"Puseur","layers":"Lapisan","background":"Latar","scaling-algorithm":"Algoritma Skala","algorithm-smooth":"Lemes","algorithm-pixelated":"Piksel","preview":"Sawangan","angle-snap":"Snap","angle-snap-title":"45 \xb0 Sudut Snapping","lock-alpha":"Konci Alfa","lock-alpha-title":"Ngonci saluran alfa lapisan","reverse":"Ngabalikeun","compare-before":"Sateuacanna","compare-after":"Sanggeus","loading":"Ngamuat","more":"Tambih deui","x-minutes":"{x}min","wip":"Gaw\xe9 dina kamajuan","browser-zoom-help":"Ketok dua kali atawa ciwit kaluar pikeun ngareset zum browser.","dismiss":"Ngaleungitkeun"}');

},{}]},["6hOhD"], null, "parcelRequire94c2", {})

//# sourceMappingURL=su.374d6d8b.js.map
