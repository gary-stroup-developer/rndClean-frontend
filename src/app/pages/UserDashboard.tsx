import { useState } from "react";
import {
    MenuItem,
    Icon,
    Menu,
    Segment,
    MenuItemProps,
    GridColumn,
    Grid,
    Button,
} from 'semantic-ui-react';
import NavBar from "../components/NavBar";
import { useAppSelector } from "../../store/store";



const UserDashboard = () => {
    const [activeItem, setActiveItem] = useState('home');
    const { authenticated } = useAppSelector(state => state.navbar);
    const handleClick = (_event:React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps): void => {
        data.name ? setActiveItem(data.name) : setActiveItem('home');
    }

    return (
        <>
            <NavBar loggedIn={authenticated} />
            <Grid stretched>
                <GridColumn width={4}>
                    <Menu fluid vertical tabular>
                        <MenuItem as='a' name='home' active={activeItem === 'home'} onClick={handleClick}>
                            <Icon name='home' />
                            Home
                        </MenuItem>
                        <MenuItem as='a' name='invoice' active={activeItem === 'invoice'} onClick={handleClick}>
                            <Icon name='file outline' />
                            Invoice
                        </MenuItem>
                        <MenuItem as='a' name='payment' active={activeItem === 'payment'} onClick={handleClick}>
                            <Icon name='credit card outline' />
                            Payment
                        </MenuItem>
                        <MenuItem as='a' name='user' active={activeItem === 'user'} onClick={handleClick}>
                            <Icon name='user' />
                            User
                        </MenuItem>
                        <MenuItem as='a' name='logout' active={activeItem === 'logout'} onClick={handleClick}>
                            <Icon name='close' />
                            Logout
                        </MenuItem>
                    </Menu>
                </GridColumn>
                <GridColumn textAlign="left" stretched width={12}>
                    <Segment basic>
                        <h1>Welcome Gary</h1>
                    </Segment>
                    <Segment textAlign="center" basic>
                        <h1>Balance Due</h1>
                        <h1>$0</h1>
                        <Button color="teal" content="Pay Now" compact size="small" />
                    </Segment>
                    <Segment textAlign="center" basic>
                        <h1>Upcoming Appointments</h1>
                        <p>You have no upcoming services</p>
                    </Segment>

                </GridColumn>
            </Grid>
        </>
)}

export default UserDashboard