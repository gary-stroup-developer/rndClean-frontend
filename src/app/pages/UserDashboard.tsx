import { useState } from "react";
import {
    SidebarPusher,
    SidebarPushable,
    MenuItem,
    Icon,
    Menu,
    Segment,
    Container,
    ButtonContent,
    Button,
} from 'semantic-ui-react';
import SideBar from "../components/SideBar";



const UserDashboard = () => {
    const [visible, setVisible] = useState(false)

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
            <SideBar visible={visible} />
            <SidebarPushable>
                <SidebarPusher>

                    <Container fluid={true}>

                        <Segment basic>
                            <h1>Welcome Gary</h1>
                        </Segment>
                        <Segment basic>
                            <h1>Balance Due</h1>
                            <h1>$0</h1>
                        </Segment>
                        <Segment basic>
                            <h1>Upcoming Appointments</h1>
                            <p>You have no upcoming services</p>
                        </Segment>

                    </Container>

                </SidebarPusher>
            </SidebarPushable>
        </>
)}

export default UserDashboard