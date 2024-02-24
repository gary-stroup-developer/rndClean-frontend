import { Button, Card, CardContent, Header, Segment } from "semantic-ui-react"
import NavBar from "../components/NavBar"
import PaymentListCard from "../components/PaymentListCard"


const PaymentsMainPage = () => {
  return (
    <>
      <NavBar loggedIn={true} />
      <Card style={{ width: "75%", boxShadow:" 10px 10px 24px 1px rgba(7,131,135,0.52)"}} centered>
          <CardContent>
            <Header size="huge">Current Balance Due:</Header>
            <Header size="large">$75.00</Header>
            <Button color="teal" content="Make Payment" size="large" />
          </CardContent>
        </Card>
      <Segment style={{ border: "none" }} padded>
        <Header size="large" content={"Pending Payments"} />
        <PaymentListCard />
      </Segment>
      <Segment style={{ border: "none"}} padded>
        <Header size="large" content={"Payment History"} />
        <PaymentListCard />
      </Segment>
    </>
  )
}

export default PaymentsMainPage