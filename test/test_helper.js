import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// Create jsdom versions of the document and window objects that are
// normally provided by the web browser
const doc = jsdom.jsdom('<!doctype html><html><body></body></html');
const win = doc.defaultView;

// Put them on the global object so they can be discovered by React
// when it accesses document or window
global.document = doc;
global.window = win;

// Hoist all properties from the jsdom window object to Node.js's global
// object, so they can be used without the window. prefix (which is what
// happens in a browser environment)
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
      global[key] = window[key];
  }
});

chai.use(chaiImmutable);
