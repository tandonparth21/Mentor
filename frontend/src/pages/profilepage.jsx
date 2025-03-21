import React from 'react';
import {
  Container, Typography, Box, Paper, Avatar, Divider,
  List, ListItem, ListItemText, Chip, Button, Grid,
  Tab, Tabs
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProfilePage = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState(0);

  // Mock user data
  const user = {
    name: 'Aekam Singh Sidhu',
    title: 'Frontend Developer',
    company: 'PEC Solutions Inc.',
    location: 'Chandigarh, IN',
    bio: 'Motivated college undergraduate with atrong aspirations in Data Analytics and Data Structures and Algorithms.',
    skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Git'],
    interests: ['System Architecture', 'Performance Optimization', 'UI/UX Design'],
    email: 'Aekam@example.com',
    avatar: 'https://source.unsplash.com/random/300x300/?portrait'
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' } }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ 
              width: 120, 
              height: 120, 
              mb: { xs: 2, sm: 0 }, 
              mr: { sm: 4 } 
            }}
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {user.title} at {user.company}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {user.location}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <Button variant="contained" color="primary">
                Edit Profile
              </Button>
              <Button variant="outlined">
                Settings
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="profile tabs">
            <Tab label="About" />
            <Tab label="Skills & Interests" />
            <Tab label="Mentorship" />
          </Tabs>
        </Box>

        {tabValue === 0 && (
          <Box sx={{ py: 3 }}>
            <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              {user.bio}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1">
              Email: {user.email}
            </Typography>
          </Box>
        )}

        {tabValue === 1 && (
          <Box sx={{ py: 3 }}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ mb: 3 }}>
              {user.skills.map((skill, index) => (
                <Chip 
                  key={index} 
                  label={skill} 
                  sx={{ mr: 1, mb: 1 }} 
                />
              ))}
            </Box>
            <Typography variant="h6" gutterBottom>
              Learning Interests
            </Typography>
            <Box>
              {user.interests.map((interest, index) => (
                <Chip 
                  key={index} 
                  label={interest}
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              ))}
            </Box>
          </Box>
        )}

        {tabValue === 2 && (
          <Box sx={{ py: 3 }}>
            <Typography variant="h6" gutterBottom>
              My Mentorships
            </Typography>
            <Typography variant="body1" paragraph>
              You don't have any active mentorships yet.
            </Typography>
            <Button variant="contained" color="primary">
              Find a Mentor
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ProfilePage;

