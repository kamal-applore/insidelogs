import { Grid, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomButton from './CustomButton'
import CustomHeading from './CustomHeading'
import CustomLabel from './CustomLabel'
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
      // fontWeight: theme.typography.fontWeightBold,
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
  label2: {
    // marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      // marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '26px',
      lineHeight: '38px',
      // marginTop: '28px',
    },
  },
  heading2: {
    marginTop: '0px',
    marginBottom: '20px',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',

      marginTop: '50px',
      marginBottom: '30px',
      fontSize: '26px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '85px',
      marginBottom: '52px',
      lineHeight: '22px',
      fontSize: '32px',
    },
  },
}))

export default function ContentLayout({ title1, title2, button, heading, children, contact }) {
  const classes = useStyles()
  return (
    <>
      {title1 && title2 ? <Title heading={title1} heading2={title2} /> : null}
      <Grid container>
        <Grid item xs={12} md={5}>
          {contact ? (
            <div>
              <CustomHeading heading="CONTACT US" className={classes.heading2} />
              <Hidden smDown>
                <CustomLabel label="Contact Us to discuss your" className={classes.label2} />
                <CustomLabel label="dream project" className={classes.label2} />
              </Hidden>
            </div>
          ) : (
            <CustomHeading heading={heading} className={classes.heading} />
          )}
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
