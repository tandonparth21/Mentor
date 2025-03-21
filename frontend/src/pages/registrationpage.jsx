import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container, Typography, Box, TextField, Button,
  Paper, Stepper, Step, StepLabel, Grid,
  FormControlLabel, Checkbox, Divider, IconButton,
  Radio, RadioGroup, FormControl, FormLabel
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const steps = ['Account Setup', 'Personal Information', 'Preferences'];

const RegistrationPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Submit the form and navigate to home
      navigate('/');
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };
  
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
            />
            
            <Divider sx={{ my: 3 }}>
              <Typography color="textSecondary" variant="body2">OR</Typography>
            </Divider>
            
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{ py: 1 }}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  sx={{ py: 1 }}
                >
                  LinkedIn
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{ py: 1 }}
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              fullWidth
              id="title"
              label="Professional Title"
              name="title"
              placeholder="e.g. Software Developer, Product Manager"
            />
            <TextField
              margin="normal"
              fullWidth
              id="company"
              label="Company/Organization"
              name="company"
            />
            <TextField
              margin="normal"
              fullWidth
              id="location"
              label="Location"
              name="location"
              placeholder="City, Country"
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">I want to join as a:</FormLabel>
              <RadioGroup defaultValue="mentee" name="userType">
                <FormControlLabel value="mentee" control={<Radio />} label="Mentee (I'm looking for guidance)" />
                <FormControlLabel value="mentor" control={<Radio />} label="Mentor (I want to help others)" />
                <FormControlLabel value="both" control={<Radio />} label="Both (I want to mentor and be mentored)" />
              </RadioGroup>
            </FormControl>
            
            <TextField
              margin="normal"
              fullWidth
              id="skills"
              label="Your Skills (comma-separated)"
              name="skills"
              placeholder="e.g. JavaScript, Product Management, Data Analysis"
            />
            
            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={4}
              id="bio"
              label="Short Bio"
              name="bio"
              placeholder="Tell us a bit about yourself, your experience, and what you're looking for..."
            />
            
            <FormControlLabel
              control={<Checkbox name="agreeTerms" color="primary" required />}
              label="I agree to the Terms of Service and Privacy Policy"
              sx={{ mt: 2 }}
            />
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Join MentorBoat
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        {getStepContent(activeStep)}
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
          </Button>
        </Box>
        
        {activeStep === 0 && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/login" style={{ textDecoration: 'none' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default RegistrationPage;