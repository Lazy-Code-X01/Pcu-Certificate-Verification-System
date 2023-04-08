import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import logo from '../pculogo.png'
import './style.css'

const InfoDisplay = () => {
    var margin = '40px'
  return (
    <Box bgcolor={'#844F93'} p={8} flex={1}>

        {/* logo */}
        <Box
            sx={{
                width: '110px',
                height: '110px'
            }}
        >
            <img src={logo} alt="logo"  style={{width: '100%', height: '100%'}}/>
        </Box>

        {/* text */}
        <Typography marginTop='45px' fontSize='30px' color='#fff' fontWeight='700'>Certificate Verification</Typography>
       
        {/* how it works */}
        <Box 
            sx={{
                mt: '65px',
            }}
        >
            <Typography fontSize='20px' color='#fff' fontWeight='500' >How it Works:</Typography>
            
            <ul>
                <li>Choose your graduation year</li>
                <li>Choose your course of study</li>
                <li>Click the "verify result"</li>
            </ul>
        </Box>

        {/* info */}
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                mt: '65px',
            }}
        >
            <div className="icon">
                <MarkUnreadChatAltIcon style={{fontSize: '30px', color: '#844F93'}}/>
            </div>
            <div className="text">
                <a href='https://www.figma.com/file/OT8uAoVwamGzwKJJJnT43e/Result-Checker?node-id=109-3&t=pupy2OCcmS7tvdCw-0'>
                    Support info@pcu.edu.ng
                </a>
            </div>
        </Box>

    </Box>
  )
}

export default InfoDisplay