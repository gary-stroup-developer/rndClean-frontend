// this describes the login form values captured on the LandingPage
type formValues = {
    username: string
    password: string
}
// this describes the Props passed into the ModalDimmer component for initial Redux and Formik tetsing
type ModalProps = {
    username: string,
    password: string,
    open: boolean,
    dimmer: string,
}
// this describes the state variables that Redux manages inside the createSlice function in modal.ts
type modalState = {
    open: boolean
    dimmer: string
}

type SidebarProps = {
    visible: boolean,
}