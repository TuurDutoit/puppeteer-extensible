/**
 * Based on Puppeteer's index.js
 */

// If node does not support async await, use the compiled folder.
let folder = 'lib';
try {
  new Function('async function test(){await 1}');
} catch (error) {
  folder = 'node6';
}

let Puppeteer = require(`puppeteer/${folder}/Puppeteer`);

function install(extensions) {
  return merge(Puppeteer, extensions);
}

function merge(dest, src) {
  const keys = Object.keys(src).concat('prototype');
  for(const key of keys) {
    if(typeof src[key] === 'object') {
      if(!dest[key]) {
        dest[key] = {};
      }
      merge(dest[key], src[key]);
    }
    else {
      dest[key] = src[key];
    }
  }
  
  return dest;
}

module.exports = Object.assign(Puppeteer, {
  install,
  merge,
   Puppeteer,
   Browser: require(`puppeteer/${folder}/Browser`).Browser,
   Connection: require(`puppeteer/${folder}/Connection`).Connection,
   Dialog: require(`puppeteer/${folder}/Dialog`),
   ElementHandle: require(`puppeteer/${folder}/ElementHandle`),
   EmulationManager: require(`puppeteer/${folder}/EmulationManager`),
   ExecutionContext: require(`puppeteer/${folder}/ExecutionContext`).ExecutionContext,
   FrameManager: require(`puppeteer/${folder}/FrameManager`).FrameManager,
   Frame: require(`puppeteer/${folder}/FrameManager`).Frame,
   helper: require(`puppeteer/${folder}/helper`).helper,
   JSHandle: require(`puppeteer/${folder}/ExecutionContext`).JSHandle,
   Keyboard: require(`puppeteer/${folder}/Input`).Keyboard,
   Launcher: require(`puppeteer/${folder}/Launcher`),
   Mouse: require(`puppeteer/${folder}/Input`).Mouse,
   Multimap: require(`puppeteer/${folder}/Multimap`),
   NavigatorWatcher: require(`puppeteer/${folder}/NavigatorWatcher`),
   NetworkManager: require(`puppeteer/${folder}/NetworkManager`),
   Page: require(`puppeteer/${folder}/Page`),
   Session: require(`puppeteer/${folder}/Connection`).Session,
   TaskQueue: require(`puppeteer/${folder}/Browser`).TaskQueue,
   Touchscreen: require(`puppeteer/${folder}/Input`).Touchscreen,
   Tracing: require(`puppeteer/${folder}/Tracing`),
   USKeyboardLayout: require(`puppeteer/${folder}/USKeyboardLayout`),
});
