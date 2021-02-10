import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import CustomHeading from '../components/CustomHeading'
import CustomLabel from '../components/CustomLabel'
import CustomImage from '../components/CustomImage'
import Image from '../assets/images/time-managment.png'
import CustomButton from '../components/CustomButton'

const useStyles = makeStyles((theme) => ({
  labels: {
    margin: '15px 0px 17px 0px',
    [theme.breakpoints.up('md')]: {
      margin: '30px 0px 47px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '39px 0px 57px 0px',
    },
  },
  button: {
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
  },
  heading: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '48px',
      lineHeight: '62px',
    },
  },
}))

export default function HeroSection() {
  const classes = useStyles()
  return (
    <Grid container>
      {/* <Grid item md={1} lg={1} /> */}

      <Grid item md={5} lg={5}>
        <CustomHeading heading="We help brands" className={classes.heading} />
        <CustomHeading heading="develop digital world" className={classes.heading} />
        <div className={classes.labels}>
          <CustomLabel label="We specilaize in web development and server security services. Inside Logs is a leading and trusted reliable partner." />
        </div>
        <CustomButton text="Let’s develop your project" icon className={classes.button} />
      </Grid>
      <Grid item md={1} lg={1} />
      <Grid item md={5} lg={6}>
        <CustomImage image={Image} />
      </Grid>
    </Grid>
  )
}
