import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import InfoDisplay from './InfoDisplay'
import Form from './Form'

const AuthLogin = () => {
  return (
    <Box
        sx={{
            width: '100%',
            background: '#fff',
            display: 'flex',
            height: 'max-content',
        }}
    >
        <InfoDisplay />
        <Form />
    </Box>
  )
}

export default AuthLogin