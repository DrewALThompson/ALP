import {Link} from 'react-router-dom';

const NavBarLink = (props) => {
    return(
        <Link to={props.route} type='button'>{props.children}</Link>
    )
}

export default NavBarLink