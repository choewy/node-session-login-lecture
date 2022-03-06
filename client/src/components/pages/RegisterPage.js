import { useState } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../../api/Auth";

const RegisterPage = (props) => {
    const {authorized, setAuthorized} = props;
    const [params, setParams] = useState({
        id: '',
        name: '',
        passwd: '',
        confirmPasswd: ''
    });

    const paramsChange = (e) => {
        const {target: {name, value}} = e;
        setParams({...params, [name]: value});
    };

    const paramsSubmit = async (e) => {
        e.preventDefault();
        const {ok, message} = await Auth.register();
        if (!ok) return alert(message);
        setAuthorized(ok);
    };

    if (authorized) return <Navigate to='/' />;

    return (
        <form onSubmit={paramsSubmit}>
            <div>
                <input type="text"
                    name="id"
                    value={params.id}
                    placeholder="아이디"
                    onChange={paramsChange} />
            </div>
            <div>
                <input type="text"
                    name="name"
                    value={params.name}
                    placeholder="이름"
                    onChange={paramsChange} />
            </div>
            <div>
                <input type="password"
                    name="passwd"
                    value={params.passwd}
                    placeholder="비밀번호"
                    onChange={paramsChange} />
            </div>
            <div>
                <input type="password"
                    name="confirmPasswd"
                    value={params.confirmPasswd}
                    placeholder="비밀번호 확인"
                    onChange={paramsChange} />
            </div>
            <div>
                <input type="submit"
                    value="회원가입" />
            </div>
        </form>
    );
};

export default RegisterPage;