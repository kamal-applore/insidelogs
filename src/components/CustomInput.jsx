/* eslint-disable import/no-anonymous-default-export */
import { Input, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  textField: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    width: '100%',
    height: '30px',
    marginTop: '20px',
    // borderRadius: '5px',
    border: 'none',
    // borderBottom: '1px solid #707070',
    paddingLeft: '5px',
    [theme.breakpoints.up('md')]: {
      //   borderRadius: '7px',
      height: '48px',
      marginTop: '24px',
      fontSize: '16px',
      paddingLeft: '10px',
    },
    [theme.breakpoints.up('lg')]: {
      //   borderRadius: '10px',
      marginTop: '24px',
      fontSize: '16px',
      paddingLeft: '15px',
    },
  },
  errorInput: {
    borderBottom: '1px solid #DE6262',
  },
}))

export default ({ label, value, handleChange, errorMessage, contactError, placeholder }) => {
  const classes = useStyles()
  const renderInputStyle = !errorMessage ? classes.textField : `${classes.textField} ${classes.errorInput}`
  const handleOnChange = (event) => {
    handleChange(event.target.value)
  }
  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        className={renderInputStyle}
        value={value}
        onChange={handleOnChange}
      />
    </>
  )
}
