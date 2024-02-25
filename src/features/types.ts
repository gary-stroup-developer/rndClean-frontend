// this describes the login form values captured on the LandingPage
type formValues = {
    username: string
    password: string
}

type makePaymentFormValues = {
    fullname: string
    cardNumber: string
    address: string
    city: string
    state: string
    amount: number
    paymentDate: string
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

type navbarState = {
    authenticated: boolean
}

type NavBarProps = {
    loggedIn: boolean,
}

type SideBarProps = {
    visible: boolean,
}