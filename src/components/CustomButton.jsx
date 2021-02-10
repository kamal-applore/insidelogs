import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Arrow from '../assets/images/arrow-left.png'
import CustomImage from './CustomImage'

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      padding: '6px 18px',
      fontSize: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontWeight: theme.typography.fontWeightBold,
      padding: '15px 18px',
      fontSize: '20px',
    },
  },
}))

export default function CustomButton({ text, className, icon, outlined }) {
  // console.log(className)
  const classes = useStyles()
  return (
    <Button
      variant="contained"
      color="primary"
      className={className ? `${className} ${classes.button}` : classes.button}
      endIcon={icon ? <CustomImage image={Arrow} /> : null}
    >
      {text}
    </Button>
  )
}
