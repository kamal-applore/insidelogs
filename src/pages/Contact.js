/* eslint-disable import/no-anonymous-default-export */
import { makeStyles } from '@material-ui/core'
import React from 'react'
import ContactForm from '../components/ContactForm'
import CustomHeading from '../components/CustomHeading'
import Layout from '../components/Layout'
import Contact from '../sections/Contact'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 15px',
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0px 300px',
      marginTop: '50px',
    },
  },
  heading: {
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold,
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        {/* <CustomHeading heading="Contact Us" className={classes.heading} /> */}
        <ContactForm />
      </div>
    </Layout>
  )
}
