import { Button, Grid, GridColumn, Header, Icon, Item, ItemContent, ItemGroup, ItemHeader,ItemMeta, Segment, SegmentGroup } from "semantic-ui-react"
import NavBar from "../components/NavBar"


const Invoices = () => {

  return (
      <div>
          <NavBar loggedIn={true} />
          <Header className="header-bg" as={'h1'} style={{marginBottom: "2rem"}}>Invoices</Header>
          <Grid stretched relaxed padded>
              <GridColumn width={11}>
                  <ItemGroup divided>
                      <Item>
                          <ItemContent verticalAlign="top">
                              <ItemHeader as='a'>Mr. Maybury</ItemHeader>
                              <ItemMeta>1234 Some Addy Dr.</ItemMeta>
                              <ItemMeta>
                                  <span className='price'>$200</span>
                                  <span className='stay'>4 hours</span>
                              </ItemMeta>
                          </ItemContent>
                          <ItemGroup>
                              <ItemMeta>PENDING</ItemMeta>
                              <Button color="teal" content="View" compact size="small" />
                          </ItemGroup>
                      </Item>

                      <Item>
                          <ItemContent>
                              <ItemHeader as='a'>Moutain Ridge BnB</ItemHeader>
                              <ItemMeta>704 Rocky Road Way, Palomir Mt, CA 94009</ItemMeta>
                              <ItemMeta>
                                  <span className='price'>$1200</span>
                                  <span className='stay'>1 Month</span>
                              </ItemMeta>
                              
                          </ItemContent>
                          <ItemGroup>
                              <ItemMeta>PAID</ItemMeta>
                              <Button color="teal" content="View" compact size="small" />
                          </ItemGroup>
                      </Item>
                  </ItemGroup> 
              </GridColumn>
              <GridColumn width={5}>
                  <SegmentGroup>
                      <Segment><Icon as={Icon} fitted name="filter"></Icon><span style={{marginInline:"1rem"}}>Filter</span></Segment>
                      <Segment className="filterOption">ALL</Segment>
                      <Segment className="filterOption">PAID</Segment>
                      <Segment className="filterOption">PENDING</Segment>
                      <Segment className="filterOption">UNPAID</Segment>
                  </SegmentGroup>
              </GridColumn>
          </Grid>
          
    </div>
  )
}

export default Invoices