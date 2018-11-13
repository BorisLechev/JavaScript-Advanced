function validateRequest(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^[\w.*]+$/g;
    const messagePattern = /^[^<>\\&'"]+$/g;

    if (!validateMethod(obj)){
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!(validateUri(obj))){
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(validateVersion(obj))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!(validateMessage(obj))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;

    function validateMethod(obj) {
        if (!obj.hasOwnProperty('method')) return false;

        return validMethods.includes(obj.method);
    }

    function validateUri(obj) {
        if (!obj.hasOwnProperty('uri')) return false;
        if (obj.uri === '') return false;

        return uriPattern.test(obj.uri);
    }

    function validateVersion(obj) {
        if (!obj.hasOwnProperty('version')) return false;

        return validVersions.includes(obj.version);
    }

    function validateMessage(obj) {
        if (!obj.hasOwnProperty('message')) return false;
        if (obj.message === '') return true;

        return messagePattern.test(obj.message);
    }
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));
