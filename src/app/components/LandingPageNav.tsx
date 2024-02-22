import { MenuItem, Menu} from 'semantic-ui-react'

const LandingPageNav = () => {
    // const [activeItem, setActiveItem] = useState('home');

    // const handleClick = (_event:React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps): void => {
    //     data.name ? setActiveItem(data.name) : setActiveItem('home');
    // }
  return (
      <Menu pointing secondary>
          <MenuItem
              name='RND Cleaning'
              style={{ fontSize: "2rem", marginInline: "auto" }}
          />
      </Menu>
  )
}

export default LandingPageNav