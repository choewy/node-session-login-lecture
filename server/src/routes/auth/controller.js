'use strict';

const mysql = require('../../config/mysql');
const queryMapper = require('../../models/mybatis');
const crpyto = require('../../utils/crypto');

module.exports = {
    register: (req, res) => {
        const saltkey =  crpyto.salter();
        const passwd = crpyto.hashing(req.body.passwd, saltkey);
        const param = {
            id: req.body.id,
            name: req.body.name,
            passwd, saltkey
        };
        const query = queryMapper("insertUser", param);
        mysql.query(query, (err, rows) => {
            if (err) {
                return res.send({
                    ok: false,
                    message: err.message
                });
            }

            req.session.auth = {
                id: param.id, 
                name: param.name, 
                role: 0
            };
            
            req.session.save(console.log);
            
            return res.send({
                ok: true
            });
        });
    },
    login: (req, res) => {
        const param = {
            id: req.body.id
        };
        const query = queryMapper("selectUserById", param);
        mysql.query(query, (err, rows) => {
            if (err) {
                return res.send({
                    ok: false,
                    message: err.message
                });
            };

            if (!rows.length) {
                return res.send({
                    ok: false,
                    message: "존재하지 않는 아이디입니다."
                });
            };

            const user = {...rows[0]};
            const verify = crpyto.verify(req.body.passwd, user.saltkey, user.passwd);

            if (!verify) {
                return res.send({
                    ok: false,
                    message: "비밀번호가 일치하지 않습니다."
                })
            };
            res.cookie('id', user.id);
            req.session.auth = {
                id: user.id, 
                name: user.name, 
                role: user.role
            };

            req.session.save((a) => {
                return res.send({
                    ok: true
                });
            });
        });
    },
    check: (req, res) => {
        if (!req.session.auth) {
            return res.send({
                ok: false
            });
        }
        return res.send({
            ok: true,
            auth: req.session.auth
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.end();
    }
};