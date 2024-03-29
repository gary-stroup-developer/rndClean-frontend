import {
    GridColumn,
    FormInput,
    Button,
    Divider,
    Form,
    Grid,
    Segment,
} from 'semantic-ui-react';
import { useFormik } from 'formik';
import ModalDimmer from '../components/ModalDimmer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { openModal } from '../../features/modal';
import WindowResize from '../hooks/WindowResize';
import NavBar from '../components/NavBar';



const initialValues: formValues = {
    username: "",
    password: "",
}

const LandingPage = () => {
    const formik = useFormik({
        initialValues,
        onSubmit: () => {
            dispatch(openModal("blurring"))
        }
    });
    
    const { open, dimmer } = useAppSelector(state => state.modal);
    const { authenticated } = useAppSelector(state => state.navbar);
    const dispatch = useAppDispatch();

    const windowSize = WindowResize();

    return (
        <>
            <NavBar loggedIn={authenticated} />
            <ModalDimmer open={open} dimmer={dimmer} username={formik.values.username} password={formik.values.password} / >
            <Segment style={{ marginTop: "10rem", padding: "5rem 2rem" }} placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <GridColumn>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormInput
                                id={'username'}
                                icon='user'
                                iconPosition='left'
                                label='Username'
                                placeholder='Username'
                                onChange={formik.handleChange}
                                content={formik.values.username}
                            />
                            <FormInput
                                id={'password'}
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                                onChange={formik.handleChange}
                                content={formik.values.password}
                            />

                            <Button content='Login' primary type='submit' />
                        </Form>
                    </GridColumn>

                    <GridColumn verticalAlign='middle' >
                        <Button content='Sign up' icon='signup' size='big' />
                    </GridColumn>
                </Grid>
                {
                    windowSize.innerWidth > 780 ? <Divider vertical><h1>OR</h1></Divider> : <Divider hidden={true}></Divider>
                }
                
            </Segment>
      </>
  )
}

export default LandingPage