/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ContentLayout from '../components/ContentLayout'
import CustomImage from '../components/CustomImage'
import AboutImage from '../assets/images/about.png'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: '40px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: '0px',
    },
  },
}))
export default () => {
  const classes = useStyles()
  const label = [
    'Inside Logs is a web development company specilaize in Data base Analysis, and server security services.',
    'Inside Logs is a leading and trusted reliable partner acting with integrity and expertise to deliver a dynamic, clear and accessible end-to-end solution.',
    'We are here to help buisness to endeavour their endless success',
  ]
  return (
    <ContentLayout title1="ABOUT" title2="US" label={label}>
      <CustomImage image={AboutImage} className={classes.image} />
    </ContentLayout>
  )
}
