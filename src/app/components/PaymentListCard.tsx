import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'

const PaymentListCard = () => {
    
  return (
      <Table>
          <TableHeader>
              <TableRow>
                  <TableHeaderCell style={{ backgroundColor:"rgba(7,131,135,1)", color:"white"}}>Scheduled Date</TableHeaderCell>
                  <TableHeaderCell style={{ backgroundColor:"rgba(7,131,135,1)", color:"white"}}>Amount</TableHeaderCell>
                  <TableHeaderCell style={{ backgroundColor:"rgba(7,131,135,1)", color:"white"}}>Details</TableHeaderCell>
              </TableRow>
          </TableHeader>
          
              <TableBody>
                  <TableRow>
                      <TableCell>15-Jan-2024</TableCell>
                      <TableCell>$75.00</TableCell>
                      <TableCell><a>View Details</a></TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>12-Feb-2024</TableCell>
                      <TableCell>$125.00</TableCell>
                      <TableCell><a>View Details</a></TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>18-Feb-2024</TableCell>
                      <TableCell>$50.00</TableCell>
                      <TableCell><a>View Details</a></TableCell>
                  </TableRow>
              </TableBody>
          </Table>
  )
}

export default PaymentListCard