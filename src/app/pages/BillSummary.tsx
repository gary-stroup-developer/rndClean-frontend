import { Button, Segment } from "semantic-ui-react"


const BillSummary = () => {
  return (
      <div>
          <link>Return to payments</link>
          <Segment>
              <p>Date of service</p>
              <p>Invoice amount</p>
              <p>Client name</p>
              <p>Client addy</p>
              <Button content="Proceed to Checkout" />
          </Segment>
    </div>
  )
}

export default BillSummary