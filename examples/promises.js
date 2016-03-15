'use strict';
const http = require('http')

const urls = process.argv.slice(2)

function makeAsyncHTMLCall (url) {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      let fullResponse = ''
      response.on('data', data => fullResponse += data)
      response.on('end', () => resolve(fullResponse))
    }).on('error', e => reject(e));
  });
}

function getLocalMessage (url) {
  return makeAsyncHTMLCall(url)
    .then(JSON.parse)
    .then(object => object.message)
    .then(array => array.join(' '))
    .catch(err => {
      console.error(`it all went wrong: ${err}`)
      throw err
    });
}

Promise.all(urls.map(url => getLocalMessage(url)))
  .then(messages => messages.forEach(message => console.log(message)))
  .catch(err => console.error(`Well, this is bad ... ${err}`))
