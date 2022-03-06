import { Link } from "react-router-dom";
import Auth from "../../api/Auth";

const Navbar = (props) => {
    const {authorized, setAuthorized} = props;

    const logoutClick = async () => {
        await Auth.logout();
        setAuthorized(false);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>홈</Link>
                </li>
                {authorized === false && <li>
                    <Link to='/login'>로그인</Link>
                </li>}
                {authorized === false && <li>
                    <Link to='/signup'>회원가입</Link>
                </li>}
                {authorized && <li onClick={logoutClick}>로그아웃</li>}
            </ul>
        </nav>
    );
};

export default Navbar;