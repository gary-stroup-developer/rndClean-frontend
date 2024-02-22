import { useState } from 'react';
import {
    SidebarPusher,
    SidebarPushable,
    MenuItem,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Button,
    ButtonContent,
    Container,
} from 'semantic-ui-react';

const LandingPageNav = () => {
    const [visible, setVisible] = useState(false)
    // const [activeItem, setActiveItem] = useState('home');

    // const handleClick = (_event:React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps): void => {
    //     data.name ? setActiveItem(data.name) : setActiveItem('home');
    // }
    return (
        <>
            <Menu pointing secondary>
                <MenuItem>
                    {!visible ?
                        <Button basic={true} color='teal' circular={true} attached={"left"} onClick={() => setVisible(true)} >
                            <ButtonContent hidden={visible}><Icon as={Icon} size="large" name='bars' /></ButtonContent>
                        </Button>
                        : <div></div>
                        }
                </MenuItem>
                <MenuItem
                    position='right'
                    name='RND Cleaning'
                    style={{ fontSize: "2rem", paddingRight: "38rem" }}
                />

            </Menu>
      </>
      
  )
}

export default LandingPageNav

