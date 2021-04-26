import {Link} from 'react-router-dom';

const NavBarLink = (props) => {
    return(
        <Link to={props.route} type='button'>{props.children}</Link>
    )
}

//use RRD Link to inherit the route description from whatever Links I want to pass this to
//Overall multi purpose links for the two sets of routers I need
//Might need to change depending on CSS Will determine later

export default NavBarLink