# Bast

Bitcoin Address Scraping Tool

# Install

```
$ npm install -g bast
```

# Usage

Simple tool based on jsdom. Takes two arguments on command line; a url and a selector string, e.g.:

```
$ bast 'http://bitkoinmama.com/2014/03/07/pierwsza-bitmonetka-milibits-giveaway/#comments'
'#comments > ol.comment-list > li.comment > article.comment-body > div.comment-content > p'
```

Gives the following output:

```
1GhbjNiuCJnAFQamvdGhzbEzjZAPpCs1Dd
1v7CxKCYwmXrrJF7nL1pFEnbGGzD5mbSt
1Ej7uZMxvoyy8g1zvQGmZrJZU4jDsHEcGH
.
.
1GoRE1oP6htfWjRNfx1w2x9oGyD3Q2rkBH
1ChsdvfgSsfkUruNSjBWNSauncVFXCAMqH
1L47E1wYYdvw2PE9a2D33NPxTYaSAXLaER
```

# License

MIT