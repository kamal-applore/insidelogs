import { makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  image: {
    // width: '90%',
    // [theme.breakpoints.up('md')]: { width: '90%' },
    width: '90%',
    [theme.breakpoints.up('lg')]: { marginTop: '0px' },
  },
}))
export default function CustomImage({ image, className }) {
  const classes = useStyles()
  return <img src={image} alt="custom" className={className ? `${className}` : classes.image} />
}
