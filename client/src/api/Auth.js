import axios from 'axios';

axios.defaults.withCredentials = true;
const Auth = {
    login: async (params) => {
        const { id, passwd } = params;
        if (!id) return {
            ok: false,
            message: "아이디를 입력하세요."
        };

        if (!passwd) return {
            ok: false,
            message: "비밀번호를 입력하세요."
        };

        return await axios.post('/auth/login', params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return {
                    ok: false,
                    message: err.message
                };
            });
    },
    register: async (params) => {
        const { id, name, passwd, confirmPasswd } = params;
        if (!id) return {
            ok: false,
            message: "아이디를 입력하세요."
        };

        if (!name) return {
            ok: false,
            message: "이름을 입력하세요."
        };

        if (!passwd) return {
            ok: false,
            message: "비밀번호를 입력하세요."
        };

        if (passwd !== confirmPasswd) return {
            ok: false,
            message: "비밀번호가 일치하지 않습니다."
        };

        delete params.confirmPasswd;

        return await axios.post('/auth/register', params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return {
                    ok: false,
                    message: err.message
                };
            });
    },
    check: async () => {
        return await axios.get('/auth/')
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return { ok: false };
            });
    },
    logout: async () => {
        return await axios.post('/auth/logout');
    }
};

export default Auth;