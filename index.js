#!/usr/bin/env node
var jsdom = require('jsdom')

function scrape(url, selector, cb) {
  var opts = {
        url: url,
        done: function (err, window) {
          if (err) return cb(err)
          var addresses = {}
          var list = window.document.querySelectorAll(selector)
          var length = list.length
          for (var i = 0; i < length; ++i) {
            var regex = /(^|\s+)(1[1-9A-HJ-NP-Za-km-z]{26,33})/g
            var match = regex.exec(list[i].innerHTML)
            if (match) {
              var address = match[2]
              addresses[address] = address
            }
          }
          cb(null, Object.keys(addresses))
        }
      }
  jsdom.env(opts)
}

if (!module.parent) {
  scrape(process.argv[2], process.argv[3], function (err, result) {
    if (err) return process.stderr.write(err.toString())
    result.forEach(function (address) {
      process.stdout.write(address + '\n')
    })
  })
}

module.exports = scrape

