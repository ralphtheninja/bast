#!/usr/bin/env node
var jsdom = require('jsdom')

var url = process.argv[2]
var selector = process.argv[3]

var opts = {
      url: url,
      done: function (err, window) {
        if (err) return console.log(err)
        var addresses = {}
        var list = window.document.querySelectorAll(selector)
        var length = list.length
        for (var i = 0; i < length; ++i) {
          var regex = /(^|\s+)(1[1-9A-HJ-NP-Za-km-z]{26,33})/g
          var match = regex.exec(list[i].innerHTML)
          if (match) {
            addresses[match[2]] = true
          }
        }
        Object.keys(addresses).forEach(function (address) {
          console.log(address)
        })
      }
    }

jsdom.env(opts)
