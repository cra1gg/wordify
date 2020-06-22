# Woridfy
> Wordify is a URL shortener designed for readbility and memorability .

### Why does this exist?
The last thing we need is another URL shortener, especially one with such primitive functionality right? Well Wordify aims to address the problem at the root of the need to shorten urls. 

Let's use an example, let's say I want to shorten this mess of a url:

```https://www.google.com/search?rlz=1C1GCEA_enCA847CA847&sxsrf=ALeKk00Zncgu0yoyxhNHjIVeZm1CYziITg%3A1592868590748&ei=7j7xXu2RLeeE9PwPjtWkmAg&q=what+is+the+weather+in+toronto&oq=what+is+the+weather+in+toronto&gs_lcp=CgZwc3ktYWIQAzIHCAAQRhCAAjICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQRzoECCMQJzoHCAAQsQMQQzoECAAQQzoFCAAQsQM6BQgAEJECOgUIABCDAToKCAAQsQMQRhCAAlDeywRY_vIEYM7zBGgDcAN4AIABgQKIAbkskgEGMC4yOS4zmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwjtwJn0yZbqAhVnAp0JHY4qCYMQ4dUDCAw&uact=5```

I can put this into a normal URL shortener, and this is the result:

`https://bit.ly/2Cx0SsY`

That's cool, it's way shorter than that blob above, and it'll be easy to send to my friends. What's wrong with this?

Well to show you, let me put this same URL into wordify, this is the result:

`https://wordify.xyz/#mouse`

This seems to have the same effect, it generates a much shorter URL which can be circulated right?

There's one key difference here, let's ignore everything before the last `/` and consider only the unique link itself

`bit.ly: 2Cx0SsY`

`wordify: #mouse`

Now look at these two, and tell me which one is easier to memorize. Is it `2 capital c lowercase x zero capital s lowercase s capital y` or is it `#mouse`?

Some people may consider this a solution to a non-existant problem. To them I say, maybe you're right, but I had to find some way to occupy my time.


## Architecture Details

Wordify was built using JavaScript, HTML, and CSS. Wordify relies heavily on the `hash` part of URLs. This forms the entire basis for Wordify's URL redirection. There are plans to change this in the future, but it requires an entire code rebase.

Wordify is hosted on Github pages (because who doesn't love free hosting?) which is part of the reason for its heavy reliance on `hash`. The upside to this however, is that Wordify performs the same nearly everywhere in the world due to Github's lightning fast content delivery network. There are plans to migrate Wordify to repl.it to support real URL redirection and increase flexibility.

Wordify uses the [Wordify API](https://api.wordify.xyz/) as a backend for getting words. The Wordify API uses Flask, Python, and WSGI for the api endpoint, and Firebase's realtime database for storage. 

Wordify stores URLs in a [JSONBox](https://jsonbox.io/) so it may not be the best idea to use wordify for sensitive URLs. Consider yourself warned.

You can access wordify [here](https://wordify.com)

## Credits

At the beginning of this project, I knew approximately zero knowledge of JavaScript. I relied heavily on code from:



Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
