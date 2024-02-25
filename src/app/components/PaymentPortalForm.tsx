import { useFormik } from "formik";
import { Form, FormButton, FormGroup, FormInput, FormSelect, Grid, GridColumn, GridRow, Header} from "semantic-ui-react";

const initialValues: makePaymentFormValues = {
    fullname: "",
    cardNumber: "",
    address: "",
    city: "",
    state: "",
    amount: 0,
    paymentDate: new Date(Date.now()).toISOString(),

}
const options = [
    { key: 'AL', text: 'Alabama', value: 'Alabama' },
    { key: 'CA', text: 'California', value: 'California' },
    { key: 'OR', text: 'Oregon', value: 'Oregon' },
]
const PaymentPortalForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit: () => {
            console.log("submitted!!!!!");
            // dispatch(openModal("blurring"))
        }
    });
    
  return (
      <div>
          <Grid stretched padded relaxed>
              <GridRow centered><Header content="Payment Details" size="large" /></GridRow>
              <GridColumn style={{ marginInline: "auto", borderRadius: "8px", maxWidth:"850px" }} mobile={16} tablet={10} largeScreen={8} color="teal">
                  <Form size="large" widths="equal" onSubmit={formik.handleSubmit}>
                    <FormInput width={10} id="fullname" label="Name on Card" type="text" content={formik.values.fullname} onChange={formik.handleChange} />
                      <FormInput width={10 } id="cardNumber" label="Credit Card Number" type="password" content={formik.values.cardNumber} onChange={formik.handleChange} />
                    <FormInput width={10} id="address" label="Address" type="text" content={formik.values.address} onChange={formik.handleChange} />
                    <FormGroup widths={"equal"}>
                        <FormInput label="City" type="text" content={formik.values.city} onChange={formik.handleChange} />   
                        <FormSelect label="State" placeholder="State" options={options} content={formik.values.state} onChange={formik.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <FormInput label="Amount" type="number" content={formik.values.amount} onChange={formik.handleChange} />
                        <FormInput label="Payment Date" type="date" content={formik.values.paymentDate} onChange={formik.handleChange} />
                    </FormGroup>
                    <FormButton type="submit" content="Make Payment" color="black" size="large" />
                  </Form>
              </GridColumn>
               
          </Grid>
             
    </div>
  )
}

export default PaymentPortalForm