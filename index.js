#!/usr/bin/env node
var jsdom = require('jsdom')

function scrape (opts, cb) {
  // TODO this could be done much better and needs to be more generic
  var regex = opts.regex || /(^|\s+)(1[1-9A-HJ-NP-Za-km-z]{26,33})/g
  var group = opts.group || 2

  jsdom.env({

    url: opts.url,

    done: function (err, window) {
      if (err) return cb(err)
      var addresses = {}
      var list = window.document.querySelectorAll(opts.selector)
      var length = list.length
      for (var i = 0; i < length; ++i) {
        var match = regex.exec(list[i].innerHTML)
        if (match) {
          var address = match[group]
          if (typeof address === 'string') addresses[address] = address
        }
      }
      cb(null, Object.keys(addresses))
    }

  })
}

if (!module.parent) {
  // TODO check for command line arguments
  var opts = { url: process.argv[2], selector: process.argv[3] }
  scrape(opts, function (err, result) {
    if (err) return process.stderr.write(err.toString())
    result.forEach(function (address) {
      process.stdout.write(address + '\n')
    })
  })
}

module.exports = scrape
