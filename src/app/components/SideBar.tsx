import { useState } from "react"
import { Icon, Menu, MenuItem, Sidebar } from "semantic-ui-react"


const SideBar = ({ visible }: SidebarProps) => {
    //need to use reducer to dispatch state
    const [hide, setHide] = useState(visible);
  return (
      <div className="ui one column grid">
          <Sidebar
              as={Menu}
              animation='push'
              icon='labeled'
              onHide={() => setHide(false)}
              inverted
              vertical
              visible={hide}
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
              {/* onClick={() => setVisible(false)} */}
              <MenuItem  as='a'>
                  <Icon name='close' />
                  Close
              </MenuItem>
          </Sidebar>
      </div>
  )
}

export default SideBar