
/**
 * Simple proxy server for IOTA.
 * Relays commands to the IOTA Tangle, but intercepts attachToTangle commands and performs PoW locally.
 *
 * This proxy server useful for when you want to perform transfers with iota.lib.js in Node but do not
 * have access to a full node that grants you access to the necessary attachToTangle commands.
 */

var iotaProxy = require('./lib/iotaproxy.js');

var HOST = process.env.HOST || 'http://iota.bitfinex.com';
var PORT = process.env.PORT || 80;
var PROXY_PORT = process.env.PROXY_PORT || 14266;
var POW_TIMEOUT = process.env.POW_TIMEOUT || 25;

iotaProxy.start(
  {
    host: HOST,
    port: PORT,
    localPort: PROXY_PORT,
    overrideAttachToTangle: true,
    timeout: POW_TIMEOUT
  }
);
