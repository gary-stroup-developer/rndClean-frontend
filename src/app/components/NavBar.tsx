import {
    MenuItem,
    Menu,
    Button,
} from 'semantic-ui-react';

const NavBar = ({loggedIn}:NavBarProps) => {

    return (
        <>
            <Menu pointing secondary>
                <MenuItem
                    position='left'
                    name='RND Cleaning'
                    style={{ fontSize: "2rem" }}
                />
                {
                    loggedIn ? <MenuItem><Button content='New Appointment' icon='signup' color='teal' /></MenuItem>
                        : <MenuItem><Button content='SignUp' icon='signup' color='teal' /></MenuItem>
                }
                
            </Menu>
      </>
      
  )
}

export default NavBar

