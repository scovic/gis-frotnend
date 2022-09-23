import React, { ReactElement } from 'react'
import NavButton from './NavButton'
import FlexBox from "../FlexBox"
import { useStyles } from "./styles"
import Grid from '@mui/joy/Grid'
import { useLocation } from 'react-router-dom'

type NavLink = {
  to: string
  icon: ReactElement
  iconSelected: ReactElement
}

type NavbarProps = {
  navlinks: NavLink[]
}

const Navbar = ({ navlinks }: NavbarProps) => {
  const styles = useStyles()
  const location = useLocation()

  const navbarNavlinks = navlinks.map(item => {
    const isSelected = location.pathname.includes(item.to)

    return <NavButton 
      selected={isSelected} 
      to={item.to}
      icon={isSelected ? item.iconSelected : item.icon} 
    />
  })

  return (
    <Grid  
      justifyContent={'center'} 
      className={styles.navbarContainer}
      container
    >
      <Grid xs={12} md={8} lg={6} xl={4}>
        <FlexBox className={styles.navbarNavItemsContainer}>
          {navbarNavlinks}
        </FlexBox>
      </Grid>
    </Grid>
  )
}

export default Navbar
