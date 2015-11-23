var stripComments = require('strip-json-comments');

module.exports= function(source) {
    this.cacheable();
    console.log('source', source);
    console.log('source', stripComments(source));

    return stripComments(source);
}