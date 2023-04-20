import React from 'react'
import Select from '@mui/material/Select';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import {Box, Typography, Stack, FormControl, InputLabel, Button} from '@mui/material'

import './style.css'

const Form = () => {
    //set state
    const [selectedYear, handleYearChange] = useState('');
    const [selectedCourse, handleCourseChange] = useState('');
     const [name, setName] = useState('');
     //error state
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [nameError, setNameError] = useState('');
    const [submitted, setSubmitted] = useState(false);


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
        setError('');
    };
    const handleChangeCourse = (event) => {
        handleCourseChange(event.target.value);
        setError2('')
    };
        const handleNameChange = (e) => {
        setName(e.target.value);
        setError('');
    };

    const handleSubmit =(e) => {
        e.preventDefault();

        // Perform form validation logic
        if (!selectedYear) {
            setError('Please select Graduation Year.');
            return;
        }
        if (!selectedCourse) {
            setError2('Please select Course of Study.');
            return;
        }
        if (name === '') {
            setNameError('Please enter your name.');
            return;
        }else(
            setNameError([])
        )

        if (!name.match(/^[a-zA-Z]+$/)) {
            setNameError("Only letters")
        }
        if (name.length < 3) {
            setNameError('name must be more than 3 latters')
        }

        const formData = {
            name: name,
            course: selectedCourse,
            years: selectedYear
        };
        console.log('Form data:', formData);

        // Set submitted state to true upon successful form submission
        setSubmitted(true);
    };
    
    // if (submitted) {
    //     return  <div style={{ color: 'green', textAlign: 'center' }}>Form submitted successfully!</div>
    // }


    const errors = (error && <div style={{ color: 'red' }}>{error}</div>)
    const errors2 = (error2 && <div style={{ color: 'red' }}>{error2}</div>)
    const nameErrors = (nameError && <div style={{ color: 'red' }}>{nameError}</div>)

  return (
    <Box sx={{flex: 2}}>
        <form action="#" className='form' onSubmit={handleSubmit}>
            <Typography fontSize={'32px'} color={'141414'} fontWeight={'600'} marginBottom={'40px'}>Verify Certificate</Typography>
            
            <Stack
                sx={{
                    width: '65%'
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
                    {errors}
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
                    {errors2}
                </FormControl >

                <FormControl style={{marginBottom: '33px'}}>
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        type='text'
                        onChange={handleNameChange}
                    />
                    {nameErrors}
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