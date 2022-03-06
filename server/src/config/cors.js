const envs = process.env;
const keyword = 'CORS_ORIGIN';

module.exports = {
    origin: Object.keys(envs)
        .filter(key => key.includes(keyword))
        .map(key => envs[key]),
    credentials: true
};