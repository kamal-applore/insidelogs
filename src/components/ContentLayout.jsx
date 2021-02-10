import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomButton from './CustomButton'
import CustomHeading from './CustomHeading'
import Title from './Title'

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: '30px',

    [theme.breakpoints.up('md')]: {
      marginTop: '50px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '85px',
    },
  },
  heading: {
    marginTop: '20px',
    marginBottom: '20px',
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      marginTop: '50px',
      marginBottom: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '85px',
      marginBottom: '68px',
      lineHeight: '38px',
    },
  },

  label: {
    marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '24px',
      marginTop: '28px',
    },
  },
}))

export default function ContentLayout({ title1, title2, button, heading, children }) {
  const classes = useStyles()
  return (
    <>
      <Title heading={title1} heading2={title2} />
      <Grid container>
        <Grid item md={5}>
          <CustomHeading heading={heading} className={classes.heading} />
          {button ? <CustomButton text="START YOUR PROJECT" /> : null}
        </Grid>
        <Grid item md={1} />
        <Grid item md={5}>
          {children}
        </Grid>
      </Grid>
    </>
  )
}
