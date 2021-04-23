const NavBarLink = (props) => {
    return(
        <link to={props.route} type='button'>{props.children}</link>
    )
}

export default NavBarLink