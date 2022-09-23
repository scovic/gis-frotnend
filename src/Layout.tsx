import React, { ReactNode } from "react"
import { Grid } from "@mui/joy"
import { createUseStyles } from "react-jss"

type LayoutProps = {
  navigation: ReactNode
  main?: ReactNode
  footer?: ReactNode
}

const useStyles = createUseStyles({
  container: {
    backgroundColor: '#F2F2F2',
    height: '100vh'
  },
  navbar: {
  },
  main: {
    border: "1px solid red",
    height: '90vh',
    // padding: '8px'
  },
  footer: {
  }
})

const Layout = (props: LayoutProps) => {
  const styles = useStyles()

  return (
    <Grid className={styles.container} spacing={2} >
      <Grid xs={12} className={styles.navbar} component="nav">
        {props.navigation}
      </Grid>
      <Grid xs={12} className={styles.main} component="main">
        Main
      </Grid>
      <Grid xs={12} className={styles.footer} component="footer">
        Copyright..
      </Grid>
    </Grid>
  )
}

export default Layout