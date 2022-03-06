const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper([__dirname + '/index.xml']);

const format = {language: 'sql', indent: ' '};

const queryMapper = (queryId, param) => {
    return mybatisMapper.getStatement('sqlMapper', queryId, param, format);
};

module.exports = queryMapper;