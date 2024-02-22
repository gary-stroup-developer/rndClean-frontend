import { useState } from "react";
import {
    SidebarPusher,
    SidebarPushable,
    MenuItem,
    GridColumn,
    Grid,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Button,
    ButtonContent,
    GridRow,
} from 'semantic-ui-react';
import LandingPageNav from "../components/LandingPageNav";


const UserDashboard = () => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <LandingPageNav />
        
        <Grid columns={3} >
           
            <GridColumn width={1}>
                <Button onClick={() => setVisible(true)}>
                    <ButtonContent visible><Icon name='bars' /></ButtonContent>

                </Button>
            </GridColumn>
            <GridColumn width={13}>           
                <SidebarPushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <MenuItem as='a'>
                            <Icon name='home' />
                            Home
                        </MenuItem>
                        <MenuItem as='a'>
                            <Icon name='file outline' />
                            Invoice
                        </MenuItem>
                        <MenuItem as='a'>
                                <Icon name='credit card outline' />
                            Payment
                        </MenuItem>
                        <MenuItem as='a'>
                            <Icon name='user' />
                            User
                        </MenuItem>
                    </Sidebar>

                        <SidebarPusher dimmed={visible}>
                            <Grid>
                                <GridColumn width={16}>
                                <GridRow textAlign="left">
                                   <Segment basic>
                                        <h1>Welcome Gary</h1>
                                    </Segment> 
                                </GridRow>
                                <GridColumn >
                                    <GridRow>
                                      <Segment basic>
                                        <h1>Balance Due</h1>
                                        <h1>$0</h1>
                                        </Segment>  
                                    </GridRow>
                                    
                                </GridColumn>
                                <GridRow>
                                    <Segment basic>
                                        <h1>Upcoming Appointments</h1>
                                        <p>You have no upcoming services</p>
                                    </Segment>
                                    </GridRow>
                                </GridColumn>
                           
                            </Grid>
                        
                    </SidebarPusher>
                </SidebarPushable>
            </GridColumn >
            
        </Grid >
        </>      
            
            
       
        
)}

export default UserDashboard