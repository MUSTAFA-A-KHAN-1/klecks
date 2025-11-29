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
})({"21BYN":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "19091b3b6ab39b53";
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

},{}],"dpvNl":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"V\xe1lt\xe1s bal/jobb felhaszn\xe1l\xf3i fel\xfcleten","toggle-show-tools":"Eszk\xf6z\xf6k megjelen\xedt\xe9se/elrejt\xe9se","scroll":"Tekercs","donate":"Adom\xe1nyoz","home":"Otthon","modal-new-tab":"Megnyit\xe1s \xfaj lapon","tab-edit":"Szerkeszt\xe9s","tab-file":"F\xe1jl","tool-brush":"Kefe","tool-paint-bucket":"Fest\xe9kes v\xf6d\xf6r","tool-gradient":"Gradiens","tool-shape":"Alak","tool-text":"Sz\xf6veg","tool-hand":"K\xe9ziszersz\xe1m","tool-zoom":"Zoomol\xe1s","undo":"Visszavon\xe1s","redo":"\xdajra","brush-pen":"Toll","brush-blend":"Kever\xe9k","brush-sketchy":"V\xe1zlatos","brush-pixel":"Pixel","brush-chemy":"Chemy","brush-smudge":"Piszok","brush-size":"M\xe9ret","brush-blending":"Kever\xe9s","brush-toggle-pressure":"Nyom\xe1s\xe9rz\xe9kenys\xe9g v\xe1lt\xe1sa","brush-pen-circle":"K\xf6r","brush-pen-chalk":"Kr\xe9ta","brush-pen-calligraphy":"Kalligr\xe1fia","brush-pen-square":"N\xe9gyzet","brush-sketchy-scale":"Sk\xe1la","brush-pixel-dither":"Remeg","brush-chemy-fill":"T\xf6lt","brush-chemy-stroke":"Kont\xfar","brush-chemy-mirror-x":"V\xedzszintes szimmetria","brush-chemy-mirror-y":"F\xfcgg\u0151leges szimmetria","brush-chemy-gradient":"Gradiens","brush-eraser-transparent-bg":"\xc1tl\xe1tsz\xf3 h\xe1tt\xe9r","stabilizer":"Stabiliz\xe1tor","stabilizer-title":"L\xf6ket stabiliz\xe1tor","eyedropper":"Szemcseppent\u0151","secondary-color":"M\xe1sodlagos sz\xedn","manual-color-input":"K\xe9zi sz\xednbevitel","mci-hex":"Hex","mci-copy":"M\xe1solat","modal-ok":"Rendben","modal-cancel":"Megsz\xfcnteti","modal-close":"Bez\xe1r\xe1s","layers-active-layer":"Akt\xedv r\xe9teg","layers-layer":"R\xe9teg","layers-copy":"m\xe1solat","layers-blending":"Kever\xe9s","layers-new":"\xdaj r\xe9teg","layers-remove":"R\xe9teg elt\xe1vol\xedt\xe1sa","layers-duplicate":"M\xe1sodik r\xe9teg","layers-merge":"Egyes\xedtse az al\xe1bbi r\xe9teggel","layers-merge-all":"Egyes\xedtse az \xf6sszeset","layers-rename":"\xc1tnevez\xe9s","layers-active-layer-visible":"Az akt\xedv r\xe9teg l\xe1that\xf3","layers-active-layer-hidden":"Az akt\xedv r\xe9teg el van rejtve","layers-visibility-toggle":"R\xe9teg l\xe1that\xf3s\xe1ga","layers-blend-normal":"Norm\xe1l","layers-blend-darken":"s\xf6t\xe9tedni","layers-blend-multiply":"szaporodnak","layers-blend-color-burn":"sz\xednes \xe9g\xe9s","layers-blend-lighten":"k\xf6nny\xedtsen","layers-blend-screen":"k\xe9perny\u0151","layers-blend-color-dodge":"sz\xednes kit\xe9r\u0151","layers-blend-overlay":"\xc1tfed\xe9s","layers-blend-soft-light":"l\xe1gy f\xe9ny","layers-blend-hard-light":"Kem\xe9ny f\xe9ny","layers-blend-difference":"k\xfcl\xf6nbs\xe9g","layers-blend-exclusion":"kirekeszt\xe9s","layers-blend-hue":"sz\xedn\xe1rnyalat","layers-blend-saturation":"tel\xedtetts\xe9g","layers-blend-color":"sz\xedn","layers-blend-luminosity":"f\xe9nyess\xe9g","layers-rename-title":"R\xe9teg \xe1tnevez\xe9se","layers-rename-name":"N\xe9v","layers-rename-clear":"N\xe9v t\xf6rl\xe9se","layers-rename-sketch":"V\xe1zlat","layers-rename-colors":"Sz\xednek","layers-rename-shading":"\xc1rny\xe9kol\xe1s","layers-rename-lines":"Vonalak","layers-rename-effects":"Hat\xe1sok","layers-rename-foreground":"El\u0151t\xe9r","layers-merge-modal-title":"R\xe9tegek egyes\xedt\xe9se/kever\xe9se","layers-merge-description":"Egyes\xedti a kiv\xe1lasztott r\xe9teget az alatta l\xe9v\u0151vel. V\xe1lassza ki a kever\xe9si m\xf3dot:","file-no-autosave":"Nincs automatikus ment\xe9s, nincs felh\u0151t\xe1rhely","file-new":"\xdaj","file-import":"Import\xe1l\xe1s","file-save":"Megment","file-format":"F\xe1jlform\xe1tum","file-copy":"M\xe1solat","file-copy-title":"M\xe1solja a v\xe1g\xf3lapra","file-share":"Ossza meg","file-storage":"B\xf6ng\xe9sz\u0151 t\xe1rol\xf3","file-storage-about":"A b\xf6ng\xe9sz\u0151 t\xe1rol\xe1s\xe1r\xf3l","file-storage-cant-access":"Nem lehet el\xe9rni a t\xe1rhelyet.","file-storage-empty":"\xdcres","file-storage-store":"Bolt","file-storage-clear":"Egy\xe9rtelm\u0171","file-storage-storing":"T\xe1rol\xe1s","file-storage-overwrite":"\xc1t\xedr","file-storage-min-ago":"{x} perce","file-storage-hours-ago":"{x} \xf3r\xe1ja","file-storage-days-ago":"{x} napja","file-storage-month-ago":"> 1 h\xf3napja","file-storage-restored":"Vissza\xe1ll\xedtva a b\xf6ng\xe9sz\u0151 t\xe1rhely\xe9r\u0151l","file-storage-stored":"T\xe1rolva a b\xf6ng\xe9sz\u0151 t\xe1rhely\xe9n","file-storage-failed":"Nem siker\xfclt t\xe1rolni a b\xf6ng\xe9sz\u0151 t\xe1rhely\xe9n","file-storage-failed-1":"Nem siker\xfclt t\xe1rolni. Lehets\xe9ges okok:","file-storage-failed-2":"Elfogyott a lemezter\xfclet","file-storage-failed-3":"A t\xe1rhely le van tiltva az inkognit\xf3 lapon","file-storage-failed-4":"A b\xf6ng\xe9sz\u0151 nem t\xe1mogatja a t\xe1rol\xe1st","file-storage-failed-clear":"Nem siker\xfclt t\xf6r\xf6lni.","file-upload":"Felt\xf6lt\xe9s","cleared-layer":"Letisztult r\xe9teg","cleared-selected-area":"Letiszt\xedtott kijel\xf6lt ter\xfclet","filled":"Kit\xf6lt\xf6tt","filled-selected-area":"Kit\xf6lt\xf6tt kijel\xf6l\xe9s","new-title":"\xdaj k\xe9p","new-current":"Jelenlegi","new-fit":"Elf\xe9r","new-oversize":"T\xfalm\xe9retes","new-square":"N\xe9gyzet","new-landscape":"T\xe1jk\xe9p","new-portrait":"Portr\xe9","new-screen":"K\xe9perny\u0151","new-video":"Vide\xf3","new-din-paper":"DIN pap\xedr","new-px":"px","new-ratio":"H\xe1nyados","upload-title":"Felt\xf6lt\xe9s az Imgurba","upload-link-notice":"B\xe1rki, aki rendelkezik a felt\xf6lt\xf6tt k\xe9p linkj\xe9vel, megtekintheti azt.","upload-name":"C\xedm","upload-title-untitled":"N\xe9vtelen","upload-caption":"Felirat","upload-submit":"Felt\xf6lt\xe9s","upload-uploading":"Felt\xf6lt\xe9s...","upload-success":"Felt\xf6lt\xe9s sikeres","upload-failed":"Felt\xf6lt\xe9s sikertelen.","upload-delete":"A k\xe9p Imgurb\xf3l val\xf3 t\xf6rl\xe9s\xe9hez l\xe1togassa meg:","cropcopy-title-copy":"M\xe1solja a v\xe1g\xf3lapra","cropcopy-title-crop":"V\xe1g","cropcopy-click-hold":"Kattintson a jobb gombbal, vagy nyomja meg a tart\xe1st a m\xe1sol\xe1shoz.","cropcopy-btn-copy":"A v\xe1g\xf3lapra","cropcopy-copied":"M\xe1solva.","cropcopy-btn-crop":"Alkalmazza a V\xe1g\xe1st","crop-drag-to-crop":"H\xfazza a k\xf6rbev\xe1g\xe1shoz","filter-crop-extend":"V\xe1g\xe1s/hosszabb\xedt\xe1s","filter-flip":"Flip","filter-perspective":"Perspekt\xedva","filter-resize":"\xc1tm\xe9retez\xe9s","filter-rotate":"Forog","filter-transform":"\xc1talak\xedt\xe1s","filter-bright-contrast":"Vil\xe1gos/kontraszt","filter-curves":"G\xf6rb\xe9k","filter-hue-sat":"Sz\xedn\xe1rnyalat/tel\xedtetts\xe9g","filter-invert":"Invert","filter-tilt-shift":"Tilt Shift","filter-to-alpha":"Alf\xe1nak","filter-triangle-blur":"H\xe1romsz\xf6g elmos\xf3d\xe1s","filter-unsharp-mask":"\xc9letlen maszk","filter-crop-title":"V\xe1g\xe1s / meghosszabb\xedt\xe1s","filter-crop-description":"V\xe1gja ki vagy b\u0151v\xedtse ki a k\xe9pet.","filter-crop-left":"Bal","filter-crop-right":"Jobb","filter-crop-top":"Fels\u0151","filter-crop-bottom":"Als\xf3","filter-crop-rule-thirds":"Harmadik szab\xe1lya","filter-crop-fill":"T\xf6lt","filter-flip-title":"Flip","filter-flip-description":"Megford\xedtja a r\xe9teget vagy a teljes k\xe9pet.","filter-flip-horizontal":"V\xedzszintes","filter-flip-vertical":"F\xfcgg\u0151leges","filter-flip-image":"K\xe9p megford\xedt\xe1sa","filter-perspective-title":"Perspekt\xedva","filter-perspective-description":"\xc1talak\xedtja a kiv\xe1lasztott r\xe9teget.","filter-resize-title":"\xc1tm\xe9retez\xe9s","filter-resize-description":"\xc1tm\xe9retezi a k\xe9pet.","filter-rotate-title":"Forog","filter-rotate-description":"Elforgatja a k\xe9pet.","filter-transform-empty":"A r\xe9teg \xfcres.","filter-transform-title":"\xc1talak\xedtani","filter-transform-description":"\xc1talak\xedtja a kiv\xe1lasztott r\xe9teget. Tartsa lenyomva a Shift billenty\u0171t a tov\xe1bbi viselked\xe9shez.","filter-transform-rotation":"Forg\xe1s","filter-transform-flip":"Flip","filter-transform-center":"K\xf6zpont","filter-transform-constrain":"Korl\xe1tozni","filter-transform-snap-title":"Snap forgat\xe1s \xe9s poz\xedci\xf3","filter-bright-contrast-title":"F\xe9nyer\u0151 / kontraszt","filter-bright-contrast-description":"M\xf3dos\xedtja a kiv\xe1lasztott r\xe9teg f\xe9nyerej\xe9t \xe9s kontrasztj\xe1t.","filter-bright-contrast-brightness":"F\xe9nyer\u0151ss\xe9g","filter-bright-contrast-contrast":"Kontraszt","filter-curves-title":"G\xf6rb\xe9k","filter-curves-description":"G\xf6rb\xe9k alkalmaz\xe1sa a kiv\xe1lasztott r\xe9tegen.","filter-curves-all":"Minden","filter-hue-sat-title":"Sz\xedn\xe1rnyalat tel\xedtetts\xe9g\xe9t","filter-hue-sat-description":"M\xf3dos\xedtsa a kiv\xe1lasztott r\xe9teg sz\xedn\xe1rnyalat\xe1t \xe9s tel\xedtetts\xe9g\xe9t.","filter-hue-sat-hue":"Sz\xedn\xe1rnyalat","filter-hue-sat-saturation":"Tel\xedtetts\xe9g","filter-applied":"alkalmazott","filter-tilt-shift-title":"Tilt Shift","filter-tilt-shift-description":"D\xf6nt\xe9seltol\xe1st alkalmaz a kiv\xe1lasztott r\xe9tegen.","filter-tilt-shift-blur":"Elmos\xf3d\xe1si sug\xe1r","filter-tilt-shift-gradient":"Gradiens sug\xe1r","filter-to-alpha-title":"Alf\xe1nak","filter-to-alpha-description":"Alfa csatorn\xe1t hoz l\xe9tre a kiv\xe1lasztott r\xe9teghez a k\xf6vetkez\u0151kb\u0151l:","filter-to-alpha-inverted-lum":"Ford\xedtott f\xe9nyer\u0151","filter-to-alpha-lum":"F\xe9nyer\u0151","filter-to-alpha-replace":"Cser\xe9lje ki az RGB-t","filter-triangle-blur-title":"H\xe1romsz\xf6g elmos\xf3d\xe1s","filter-triangle-blur-description":"H\xe1romsz\xf6g elmos\xf3d\xe1st alkalmaz a kiv\xe1lasztott r\xe9tegen.","filter-unsharp-mask-title":"\xc9letlen maszk","filter-unsharp-mask-description":"\xc9les\xedti a kiv\xe1lasztott r\xe9teget \xfagy, hogy pixelekkel t\xe1vol\xedtja el a szomsz\xe9dok \xe1tlag\xe1t\xf3l.","filter-unsharp-mask-strength":"Er\u0151","filter-grid":"R\xe1cs","filter-grid-description":"R\xe1csot rajzol a kiv\xe1lasztott r\xe9tegre.","filter-noise":"Zaj","filter-noise-description":"Zajt ad a kiv\xe1lasztott r\xe9teghez.","filter-noise-scale":"Sk\xe1la","filter-noise-alpha":"Alpha","filter-pattern":"Minta","filter-pattern-description":"Mint\xe1zatot gener\xe1l a kiv\xe1lasztott r\xe9tegen. A tov\xe1bbi vez\xe9rl\u0151k megtekint\xe9s\xe9hez h\xfazza el az el\u0151n\xe9zetet.","filter-distort":"Torz\xedt","filter-distort-description":"Torz\xedtja a kiv\xe1lasztott r\xe9teget.","filter-distort-phase":"F\xe1zis","filter-distort-stepsize":"L\xe9p\xe9s m\xe9rete","filter-distort-sync-xy":"XY szinkroniz\xe1l\xe1sa","filter-vanish-point":"Elt\u0171n\xe9si pont","filter-vanish-point-title":"T\xe1vlatpont","filter-vanish-point-description":"Elt\u0171n\xe9si pontot ad a kiv\xe1lasztott r\xe9teghez. A mozgat\xe1shoz h\xfazza az el\u0151n\xe9zetet.","filter-vanish-point-lines":"Vonalak","import-opening":"F\xe1jl megnyit\xe1sa...","import-title":"K\xe9p import\xe1l\xe1sa","import-too-large":"A k\xe9p t\xfal nagy, kicsiny\xedtve lesz.","import-btn-as-layer":"R\xe9tegk\xe9nt","import-btn-as-image":"K\xe9pk\xe9nt","import-as-layer-title":"K\xe9p import\xe1l\xe1sa \xfaj r\xe9tegk\xe9nt","import-as-layer-description":"\xc1ll\xedtsa be az import\xe1lt k\xe9p helyzet\xe9t.","import-as-layer-limit-reached":"El\xe9rte a r\xe9tegkorl\xe1tot. A k\xe9p a megl\xe9v\u0151 r\xe9tegre ker\xfcl.","import-as-layer-fit":"Elf\xe9r","import-flatten":"Lapos k\xe9p","import-unsupported-file":"Nem t\xe1mogatott f\xe1jl t\xedpus. A t\xe1mogatott t\xedpusok\xe9rt l\xe1sd a S\xfag\xf3t.","import-broken-file":"Nem siker\xfclt bet\xf6lteni a k\xe9pet. Lehet, hogy a f\xe1jl s\xe9r\xfclt.","import-psd-unsupported":"Nem t\xe1mogatott funkci\xf3k. A PSD-t lap\xedtani kellett.","import-psd-limited-support":"A PSD t\xe1mogat\xe1s korl\xe1tozott. A lelap\xedtott nagy val\xf3sz\xedn\u0171s\xe9ggel helyesen fog kin\xe9zni.","import-psd-too-large":"A k\xe9p meghaladja a maxim\xe1lis {x} x {x} k\xe9ppont m\xe9retet. Nem lehet import\xe1lni.","import-psd-size":"K\xe9pm\xe9ret","hand-reset":"Vissza\xe1ll\xedt\xe1s","hand-fit":"Elf\xe9r","bucket-tolerance":"Meg\xe9rt\xe9s","bucket-sample":"Minta","bucket-sample-title":"Melyik r\xe9tegb\u0151l kell sz\xednmint\xe1t venni","bucket-sample-all":"Minden","bucket-sample-active":"Akt\xedv","bucket-sample-above":"Felett","bucket-grow":"N\xf6","bucket-grow-title":"A kit\xf6lt\xf6tt ter\xfclet n\xf6vel\xe9se (pixelben)","bucket-contiguous":"Szomsz\xe9dos","bucket-contiguous-title":"Csak az \xf6sszekapcsolt ter\xfcleteket t\xf6ltse fel","gradient-linear":"Line\xe1ris","gradient-linear-mirror":"Line\xe1ris t\xfck\xf6r","gradient-radial":"Sug\xe1rir\xe1ny\xfa","shape-stroke":"Stroke","shape-fill":"T\xf6lt","shape-rect":"T\xe9glalap","shape-ellipse":"Ellipszis","shape-line":"Vonal","shape-line-width":"Vonalvastags\xe1g","shape-outwards":"Kifel\xe9","shape-fixed":"Jav\xedtva 1:1","text-instruction":"Kattintson a v\xe1szonra a sz\xf6veg elhelyez\xe9s\xe9hez","text-title":"Sz\xf6veg hozz\xe1ad\xe1sa","text-text":"Sz\xf6veg","text-font":"Bet\u0171t\xedpus","text-placeholder":"A te sz\xf6veged","text-color":"Sz\xedn","text-size":"M\xe9ret","text-line-height":"Vonalmagass\xe1g","text-letter-spacing":"Bet\u0171t\xe1vols\xe1gok","text-left":"Bal","text-center":"K\xf6zpont","text-right":"Jobb","text-italic":"D\u0151lt","text-bold":"B\xe1tor","save-reminder-title":"Nem mentett munka","save-reminder-text":"A k\xe9p ment\xe9se nem siker\xfclt {a} percen bel\xfcl{b}. Mentse el most, hogy elker\xfclje az esetleges vesztes\xe9get.","save-reminder-save-psd":"Ment\xe9s PSD-k\xe9nt","save-reminder-psd-layers":"A PSD minden r\xe9tegre eml\xe9kezni fog.","backup-drawing":"Biztons\xe1gi m\xe1solatot k\xe9sz\xedthet a rajzr\xf3l.","submit":"Bek\xfcld\xe9s","submit-title":"Rajz bek\xfcld\xe9se","submit-prompt":"Elk\xfcldi a rajzot?","submit-submitting":"Bek\xfcld\xe9s","embed-init-loading":"Alkalmaz\xe1s bet\xf6lt\xe9se","embed-init-waiting":"K\xe9pre v\xe1rva","help":"Seg\xedts\xe9g","tab-settings":"Be\xe1ll\xedt\xe1sok","settings-language":"Nyelv","settings-language-reload":"\xdajrat\xf6lt\xe9s ut\xe1n friss\xfcl.","settings-theme":"T\xe9ma","settings-save-reminder-label":"Eml\xe9keztet\u0151 ment\xe9s","settings-save-reminder-disabled":"Tiltva","settings-save-reminder-confirm-title":"Kikapcsolja az Eml\xe9keztet\u0151 ment\xe9st?","settings-save-reminder-confirm-a":"Nincs automatikus ment\xe9s, \xe9s a b\xf6ng\xe9sz\u0151 lapjai sem tartanak \xf6r\xf6kk\xe9. Ha nem menti rendszeresen, akkor val\xf3sz\xedn\u0171leg elvesz\xedti a munk\xe1j\xe1t.","settings-save-reminder-confirm-b":"Saj\xe1t felel\u0151ss\xe9g\xe9re letiltani?","settings-save-reminder-confirm-disable":"Letilt\xe1s","theme-dark":"S\xf6t\xe9t","theme-light":"F\xe9ny","terms-of-service":"Szolg\xe1ltat\xe1s felt\xe9telei","licenses":"Licencek","source-code":"Forr\xe1sk\xf3d","auto":"auto","zoom-in":"Nagy\xedt\xe1s","zoom-out":"Kicsiny\xedt\xe9s","radius":"Sug\xe1r","constrain-proportions":"R\xf6gz\xedtett m\xe9retear\xe1nya","width":"Sz\xe9less\xe9g","height":"Magass\xe1g","opacity":"\xc1tl\xe1tszatlans\xe1g","red":"Piros","green":"Z\xf6ld","blue":"K\xe9k","eraser":"Rad\xedr","center":"K\xf6z\xe9pre","layers":"R\xe9tegek","background":"H\xe1tt\xe9r","scaling-algorithm":"M\xe9retez\xe9si algoritmus","algorithm-smooth":"Sima","algorithm-pixelated":"Pixeles","preview":"El\u0151n\xe9zet","angle-snap":"Snap","angle-snap-title":"45\xb0-os sz\xf6gkattint\xe1s","lock-alpha":"Alfa z\xe1r\xe1sa","lock-alpha-title":"Z\xe1rolja a r\xe9teg alfa csatorn\xe1j\xe1t","reverse":"Ford\xedtott","compare-before":"El\u0151tt","compare-after":"Ut\xe1n","loading":"Bet\xf6lt\xe9s","more":"T\xf6bb","x-minutes":"{x}perc"}');

},{}]},["21BYN"], null, "parcelRequire94c2", {})

//# sourceMappingURL=hu.6ab39b53.js.map
