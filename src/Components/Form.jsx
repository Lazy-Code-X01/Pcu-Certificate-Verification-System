import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import {Box, Typography, Stack, FormControl, InputLabel, Button} from '@mui/material'

import './style.css'

const Form = () => {
    const [selectedYear, handleYearChange] = React.useState('');
    const [selectedCourse, handleCourseChange] = React.useState('');

    const years = [
        '2022',
        '2023',
        '2024',
        '2025',
        '2026',
        '2027',
        '2028',
        '2029',
        '2030',
    ];
    const courses = [
        'Bio Chemistry',
        'Computer Science',
        'Inventory Management',
        'Software Engineering',
        '',
    ]

    const handleChangeYear = (event) => {
        handleYearChange(event.target.value);
    };
    const handleChangeCourse = (event) => {
        handleCourseChange(event.target.value);
    };

  return (
    <Box sx={{flex: 2}}>
        <form action="#" className='form'>
            <Typography fontSize={'32px'} color={'141414'} fontWeight={'600'} marginBottom={'40px'}>Verify Certificate</Typography>
            
            <Stack
                sx={{
                    width: '50%'
                }}
            >

                <FormControl fullWidth className='form-control' style={{marginBottom: '33px'}}>
                    <InputLabel id="demo-simple-select-label">Graduation Year</InputLabel>

                    <Select
                        label="Graduation Year"
                        value={selectedYear}
                        onChange={handleChangeYear}
                    >
                        {years.map((year) => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth className='form-control' style={{marginBottom: '33px'}}>
                    <InputLabel id="demo-simple-select-label">Course of Study</InputLabel>

                    <Select
                        label="Course of Study"
                        value={selectedCourse}
                        onChange={handleChangeCourse}
                    >
                        {courses.map((course) => (
                        <MenuItem key={course} value={course}>
                            {course}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl >

                <FormControl style={{marginBottom: '33px'}}>
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        type='text'
                    />
                </FormControl>

                <Button 
                    type='submit'
                    variant="contained"
                    style={{
                    backgroundColor: '#844F93',
                    borderRadius: '5px',
                    color: '#FFFFFF', 
                    fontWeight: '500',
                    height: '55px',
                    textTransform: 'capitalize',
                    fontSize: '18px',
                    }}              
                 >
                    Verify Result
                </Button>
            </Stack>

        </form>
    </Box>
  )
}

export default Form