'use strict';

const crpyto = require('crypto');

const salter = () => {
    return crpyto
        .randomBytes(64)
        .toString('hex');
};

const hashing = (string, saltKey) => {
    return crpyto
        .createHash('sha512')
        .update(string + saltKey)
        .digest('hex');
};

const verify = (string, saltkey, hashed) => {
    return hashed === hashing(string, saltkey);
};

module.exports = {salter, hashing, verify};