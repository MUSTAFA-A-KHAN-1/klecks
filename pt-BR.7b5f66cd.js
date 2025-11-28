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
})({"dt0AD":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5f4bbd947b5f66cd";
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

},{}],"7yyvT":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"switch-ui-left-right":"Trocar IU para esquerda/direita","toggle-show-tools":"Mostrar/Esconder ferramentas","scroll":"Rolar","donate":"Doar","home":"In\xedcio","modal-new-tab":"Abrir em uma nova aba","tab-edit":"Editar","tab-file":"Arquivo","tool-brush":"Pincel","tool-paint-bucket":"Balde de tinta","tool-gradient":"Gradiente","tool-shape":"Forma","tool-text":"Texto","tool-hand":"M\xe3o","tool-select":"Selecionar","tool-zoom":"Zoom","tool-more-tools":"Mais Ferramentas","undo":"Desfazer","redo":"Refazer","brush-pen":"Caneta","brush-blend":"Misturar","brush-sketchy":"Croqui","brush-pixel":"Pixel","brush-chemy":"Chimia","brush-smudge":"Borrar","brush-size":"Tamanho","brush-blending":"Mistura","brush-toggle-pressure":"Ativar sensibilidade \xe0 press\xe3o","brush-pen-circle":"C\xedrculo","brush-pen-chalk":"Giz","brush-pen-calligraphy":"Caligrafia","brush-pen-square":"Quadrado","brush-sketchy-scale":"Escala","brush-pixel-dither":"Pontilhado","brush-chemy-fill":"Preencher","brush-chemy-stroke":"Tra\xe7ado","brush-chemy-mirror-x":"Simetria horizontal","brush-chemy-mirror-y":"Simetria vertical","brush-chemy-gradient":"Degrad\xea","brush-eraser-transparent-bg":"Fundo transparente","stabilizer":"Estabilizador","stabilizer-title":"Estabilizador de tra\xe7o","eyedropper":"Conta-gotas","secondary-color":"Cor secund\xe1ria","manual-color-input":"Inserir Cor Manualmente","mci-hex":"C\xf3digo Hex","mci-copy":"Copiar","modal-ok":"Ok","modal-cancel":"Cancelar","modal-close":"Fechar","layers-active-layer":"Camada Ativa","layers-layer":"Camada","layers-copy":"Copiar","layers-blending":"Mistura","layers-new":"Nova Camada","layers-remove":"Excluir Camada","layers-duplicate":"Duplicar Camada","layers-merge":"Mesclar com a camada abaixo","layers-clear":"Limpar camada","layers-merge-all":"Mesclar todas as camadas","layers-rename":"Renomear","layers-active-layer-visible":"Camada ativa vis\xedvel","layers-active-layer-hidden":"Camada ativa oculta","layers-visibility-toggle":"Visibilidade da Camada","layers-blend-normal":"Normal","layers-blend-darken":"Escurecer","layers-blend-multiply":"Multiplicar","layers-blend-color-burn":"Superexposi\xe7\xe3o","layers-blend-lighten":"Clarear","layers-blend-screen":"Tela","layers-blend-color-dodge":"Subexposi\xe7\xe3o","layers-blend-overlay":"Sobrepor","layers-blend-soft-light":"Luz indireta","layers-blend-hard-light":"Luz direta","layers-blend-difference":"Diferen\xe7a","layers-blend-exclusion":"Exclus\xe3o","layers-blend-hue":"Matiz","layers-blend-saturation":"Satura\xe7\xe3o","layers-blend-color":"Cor","layers-blend-luminosity":"Luminosidade","layers-rename-title":"Renomear Camada","layers-rename-name":"Nome","layers-rename-clear":"Apagar Nome","layers-rename-sketch":"Rascunho","layers-rename-colors":"Cores","layers-rename-shading":"Sombreamento","layers-rename-lines":"Linhas","layers-rename-effects":"Efeitos","layers-rename-foreground":"Primeiro Plano","layers-merge-modal-title":"Mesclar/Misturar Camadas","layers-merge-description":"Mescla a camada selecionada com a abaixo. Escolha o modo de mistura:","file-no-autosave":"Sem grava\xe7\xe3o autom\xe1tica, sem armazenamento na nuvem","file-new":"Novo","file-import":"Importar","file-save":"Salvar","file-format":"Formato do Arquivo","file-show-save-dialog":"Perguntar onde salvar","file-copy":"Copiar","file-copy-title":"Copiar para \xc1rea de Transfer\xeancia","file-paste":"Colar","file-share":"Compartilhar","file-storage":"Armazenamento do Navegador","file-storage-about":"Sobre o Armazenamento do Navegador","file-storage-cant-access":"Erro ao acessar o armazenamento.","file-storage-empty":"Vazio","file-storage-store":"Armazenar","file-storage-clear":"Limpar","file-storage-clear-prompt":"Limpar o armazenamento do navegador? A limpeza n\xe3o pode ser desfeita.","file-storage-storing":"Armazenando","file-storage-overwrite":"Substituir","file-storage-min-ago":"{x}m atr\xe1s","file-storage-hours-ago":"{x}h atr\xe1s","file-storage-days-ago":"{x}d atr\xe1s","file-storage-month-ago":"> 1m\xeas atr\xe1s","file-storage-restored":"Restaurado do Armazenamento do Navegador","file-storage-stored":"Salvo no Armazenamento do Navegador","file-storage-failed":"Erro ao salvar no Armazenamento do Navegador","file-storage-failed-1":"Erro ao salvar. Poss\xedveis causas:","file-storage-failed-2":"Sem espa\xe7o no disco","file-storage-failed-3":"Armazenamento desativado no modo an\xf4nimo","file-storage-failed-4":"O navegador n\xe3o oferece suporte para armazenamento","file-storage-failed-clear":"Erro ao limpar.","file-upload":"Upload","cleared-layer":"Camada limpa","cleared-selected-area":"A \xe1rea selecionada foi limpa","filled":"Preenchida","filled-selected-area":"Sele\xe7\xe3o preenchida","new-title":"Nova Imagem","new-current":"Atual","new-fit":"Encaixar","new-oversize":"Tamanho Grande","new-square":"Quadrado","new-landscape":"Paisagem","new-portrait":"Retrato","new-screen":"Tela","new-video":"V\xeddeo","new-din-paper":"Papel DIN","new-px":"Px","new-ratio":"Propor\xe7\xe3o","upload-title":"Fazer upload no Imgur","upload-link-notice":"Vis\xedvel para qualquer pessoa com o link.","upload-name":"T\xedtulo","upload-title-untitled":"Sem t\xedtulo","upload-caption":"Descri\xe7\xe3o","upload-submit":"Upload","upload-uploading":"Fazendo upload...","upload-success":"Upload Bem Sucedido","upload-failed":"Erro no upload.","upload-delete":"Para apagar sua imagem do Imgur visite:","cropcopy-title-copy":"Copiar para a \xc1rea de Transfer\xeancia","cropcopy-title-crop":"Cortar","cropcopy-click-hold":"Bot\xe3o direito ou segure para copiar","cropcopy-btn-copy":"Para a \xc1rea de Transfer\xeancia","cropcopy-copied":"Copiado.","cropcopy-btn-crop":"Aplicar corte","crop-drag-to-crop":"Arraste para cortar","filter-crop-extend":"Cortar/Esticar","filter-flip":"Virar","filter-perspective":"Perspectiva","filter-resize":"Redimensionar","filter-rotate":"Girar","filter-transform":"Transformar","filter-bright-contrast":"Brilho/Contraste","filter-curves":"Curvas","filter-hue-sat":"Matiz/Satura\xe7\xe3o","filter-invert":"Inverter","filter-tilt-shift":"Tilt Shift (Miniatura)","filter-to-alpha":"Ao Alfa","filter-triangle-blur":"Desfoque Triangular","filter-unsharp-mask":"M\xe1scara de Nitidez","filter-crop-title":"Cortar / Esticar","filter-crop-description":"Corta ou estica a imagem","filter-crop-left":"Esquerda","filter-crop-right":"Direita","filter-crop-top":"Topo","filter-crop-bottom":"Base","filter-crop-rule-thirds":"Regra dos Ter\xe7os","filter-crop-fill":"Preencher","filter-flip-title":"Virar","filter-flip-description":"Vira a camada ou a imagem","filter-flip-horizontal":"Horizontal","filter-flip-vertical":"Vertical","filter-flip-image":"Virar Imagem","filter-flip-layer":"Virar Camada","filter-perspective-title":"Perspectiva","filter-perspective-description":"Transforma a camada selecionada.","filter-resize-title":"Redimensionar","filter-resize-description":"Redimensiona a imagem.","filter-rotate-title":"Girar","filter-rotate-description":"Gira a Imagem","filter-transform-empty":"Camada vazia.","filter-transform-title":"Transformar","filter-transform-description":"Transforma a camada selecionada. Aperte Shift para mais op\xe7\xf5es.","filter-transform-rotation":"Rota\xe7\xe3o","filter-transform-flip":"Virar","filter-transform-center":"Centro","filter-transform-constrain":"Restringir","filter-transform-snap":"Alinhar","filter-transform-snap-title":"Alinhar Rota\xe7\xe3o e Posi\xe7\xe3o","filter-bright-contrast-title":"Brilho / Contraste","filter-bright-contrast-description":"Muda o brilho e contraste da camada","filter-bright-contrast-brightness":"Brilho","filter-bright-contrast-contrast":"Contraste","filter-curves-title":"Curvas","filter-curves-description":"Aplicar curvas \xe0 camada selecionada","filter-curves-all":"Tudo","filter-hue-sat-title":"Matiz / Satura\xe7\xe3o","filter-hue-sat-description":"Muda a matiz e satura\xe7\xe3o da camada selecionada","filter-hue-sat-hue":"Matiz","filter-hue-sat-saturation":"Satura\xe7\xe3o","filter-applied":"Aplicado","filter-tilt-shift-title":"Tilt Shift (Miniatura)","filter-tilt-shift-description":"Aplica Tilt Shift na camada selecionada.","filter-tilt-shift-blur":"Alcance de Desfoque","filter-tilt-shift-gradient":"Alcance de Degrad\xea","filter-to-alpha-title":"Ao Alfa","filter-to-alpha-description":"Gera um canal alfa para a camada selecionada.","filter-to-alpha-inverted-lum":"Luminosidade Invertida","filter-to-alpha-lum":"Luminosidade","filter-to-alpha-replace":"Substituir RGB","filter-triangle-blur-title":"Desfoque Triangular","filter-triangle-blur-description":"Aplica desfoque triangular na camada selecionada.","filter-unsharp-mask-title":"M\xe1scara de Nitidez","filter-unsharp-mask-description":"Aplica nitidez \xe0 camada selecionada compensando com a m\xe9dia dos pixels vizinhos.","filter-unsharp-mask-strength":"Intensidade","filter-grid":"Grade","filter-grid-description":"Adiciona grade \xe0 camada selecionada.","filter-noise":"Ru\xeddo","filter-noise-description":"Adiciona ru\xeddo \xe0 camada selecionada.","filter-noise-scale":"Escala","filter-noise-alpha":"Alfa","filter-pattern":"Estampa","filter-pattern-description":"Gera uma estampa na camada selecionada. Arraste a pr\xe9-visualiza\xe7\xe3o para mais op\xe7\xf5es.","filter-distort":"Distorcer","filter-distort-description":"Distorce a camada selecionada.","filter-distort-phase":"Fase","filter-distort-stepsize":"Tamanho da etapa","filter-distort-sync-xy":"Sincronizar XY","filter-vanish-point":"Ponto de Fuga","filter-vanish-point-title":"Ponto de Fuga","filter-vanish-point-description":"Adiciona um ponto de fuga \xe0 camada selecionada. Arraste a pr\xe9-visualiza\xe7\xe3o para mover.","filter-vanish-point-lines":"Linhas","dropper-drop":"Arraste para importar","dropper-as-image":"Como nova imagem","dropper-as-layer":"Como camada","import-opening":"Abrindo arquivo...","import-title":"Importar imagem","import-too-large":"Imagem muito grande, ser\xe1 reduzida.","import-btn-as-layer":"Como camada","import-btn-as-image":"Como imagem","import-as-layer-title":"Importar imagem como Nova Camada","import-as-layer-description":"Ajustar a posi\xe7\xe3o da imagem importada","import-as-layer-limit-reached":"Limite de camadas atingido. A imagem ser\xe1 colocada na camada atual.","import-as-layer-fit":"Encaixar","import-flatten":"Achatar Imagem","import-unsupported-file":"Formato de arquivo n\xe3o suportado. Consulte o menu Ajuda para ver arquivos suportados.","import-broken-file":"Erro ao carregar imagem. O arquivo pode estar corrompido.","import-psd-unsupported":"Recursos n\xe3o suportados. O PSD foi achatado.","import-psd-limited-support":"O suporte para PSD \xe9 limitado. O arquivo achatado provavelmente ter\xe1 melhor visualiza\xe7\xe3o.","import-psd-too-large":"Imagem excede o tamanho m\xe1ximo de {x} x {x} pixels. N\xe3o foi poss\xedvel importar.","import-psd-size":"Tamanho da imagem","clipboard-read-fail":"Falha ao ler da \xe1rea de transfer\xeancia.","clipboard-no-image":"Imagem n\xe3o encontrada na \xe1rea de transfer\xeancia.","hand-reset":"Restaurar","hand-fit":"Encaixar","hand-inertia-scrolling":"In\xe9rcia de rolagem","bucket-tolerance":"Toler\xe2ncia","bucket-sample":"Amostra","bucket-sample-title":"Retirar amostra de quais camadas","bucket-sample-all":"Tudo","bucket-sample-active":"Ativa","bucket-sample-above":"Acima","bucket-grow":"Expandir","bucket-grow-title":"Expandir \xe1rea preenchida (em pixels)","bucket-contiguous":"Adjacente","bucket-contiguous-title":"Preenche somente \xe1reas conectadas","gradient-linear":"Linear","gradient-linear-mirror":"Espelho Linear","gradient-radial":"Radial","shape-stroke":"Tra\xe7ado","shape-fill":"Preencher","shape-rect":"Ret\xe2ngulo","shape-ellipse":"Elipse","shape-line":"Linha","shape-line-width":"Largura da Linha","shape-outwards":"Para fora","shape-fixed":"Fixo 1:1","shape-auto-pan":"Auto-mover","shape-auto-pan-title":"Move automaticamente conforme desenha","text-instruction":"Clique na tela para inserir texto","text-title":"Adicionar texto","text-text":"Texto","text-font":"Fonte","text-placeholder":"Seu texto","text-color":"Cor","text-size":"Tamanho","text-line-height":"Altura da linha","text-letter-spacing":"Espa\xe7amento","text-left":"Esquerda","text-center":"Centro","text-right":"Direita","text-italic":"It\xe1lico","text-bold":"Negrito","select-select":"Selecionar","select-transform":"Transformar","select-lasso":"La\xe7o","select-polygon":"Pol\xedgono","select-boolean-replace":"Substituir","select-boolean-add":"Adicionar","select-boolean-subtract":"Subtrair","select-all":"Tudo","select-invert":"Inverter","select-reset":"Restaurar","select-fill":"Preencher","select-erase":"Apagar","select-transform-clone":"Clonar","select-transform-clone-applied":"Clonado","select-transform-move-to-layer":"Mover para camada:","select-transform-applied":"Transforma\xe7\xe3o feita","select-transform-empty":"A \xe1rea selecionada na camada ativa est\xe1 vazia","save-reminder-title":"Trabalho N\xe3o Salvo","save-reminder-text":"A imagem n\xe3o \xe9 salva h\xe1 {a} minutos{b}. Salve agora para prevenir a perda.","save-reminder-save-psd":"Salvar como PSD","save-reminder-psd-layers":"PSD grava todas as camadas.","backup-drawing":"Voc\xea pode fazer o backup do seu desenho.","submit":"Enviar","submit-title":"Enviar Desenho","submit-prompt":"Enviar Desenho?","submit-submitting":"Enviando","embed-init-loading":"Carregando aplica\xe7\xe3o","embed-init-waiting":"Esperando imagem","help":"Ajuda","tab-settings":"Configura\xe7\xf5es","settings-language":"Idioma","settings-language-reload":"A atualiza\xe7\xe3o ser\xe1 feita ap\xf3s recarregar a p\xe1gina","settings-theme":"Tema","settings-save-reminder-label":"Lembrete para Salvar","settings-save-reminder-disabled":"Desativado","settings-save-reminder-confirm-title":"Desligar Lembrete para Salvar?","settings-save-reminder-confirm-a":"N\xe3o h\xe1 grava\xe7\xe3o autom\xe1tica e abas n\xe3o s\xe3o eternas. Se voc\xea n\xe3o salvar periodicamente, perder\xe1 seu progresso.","settings-save-reminder-confirm-b":"Desativar por sua conta e risco?","settings-save-reminder-confirm-disable":"Desativar","theme-dark":"Escuro","theme-light":"Claro","terms-of-service":"Termos de Utiliza\xe7\xe3o","licenses":"Licen\xe7as","source-code":"C\xf3digo-Fonte","auto":"Auto","zoom-in":"Ampliar","zoom-out":"Reduzir","radius":"Alcance","constrain-proportions":"Limitar propor\xe7\xf5es","width":"Largura","height":"Altura","opacity":"Opacidade","scatter":"Espalhar","red":"Vermelho","green":"Verde","blue":"Azul","eraser":"Borracha","center":"Centro","layers":"Camadas","background":"Fundo","scaling-algorithm":"Algoritmo de dimensionamento","algorithm-smooth":"Suave","algorithm-pixelated":"Pixelado","preview":"Pr\xe9-visualiza\xe7\xe3o","angle-snap":"Alinhar","angle-snap-title":"Alinhar em 45\xba","lock-alpha":"Bloquear Alfa","lock-alpha-title":"Bloqueia o canal alfa da camada","reverse":"Inverter","compare-before":"Antes","compare-after":"Depois","loading":"Carregando","more":"Mais","x-minutes":"{x}min","wip":"Trabalho em andamento","browser-zoom-help":"Toque duplo ou movimento de pin\xe7a para restaurar o zoom do navegador","dismiss":"Dispensar"}');

},{}]},["dt0AD"], null, "parcelRequire94c2", {})

//# sourceMappingURL=pt-BR.7b5f66cd.js.map
