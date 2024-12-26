import React from 'react';
import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface TopHeadingProps {
  value: string;
  breadcrumbs?: BreadcrumbItem[];
}

const TopHeading: React.FC<TopHeadingProps> = ({ value, breadcrumbs = [] }) => {
  const theme = useTheme();

  return (
    <Container 
      sx={{ 
        textAlign: 'left', 
        height: { xs: '5vh', md: '9vh' },
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: '700', 
          mb: theme.spacing(2) 
        }}
      >
        {value}
      </Typography> */}

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        // mb: theme.spacing(2) 
      }}>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link 
            to="/home"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}
          >
            <HomeIcon sx={{ fontSize: 20, marginRight: '5px', color: '#30779d' }} />
            <Typography variant="body2" color="white" sx={{ fontWeight: 600, '&:hover': { color: '#white' } }}>
              Home
            </Typography>
          </Link>

          {breadcrumbs.map((breadcrumb, index) => (
            breadcrumb.path ? (
              <Link 
                key={index} 
                to={breadcrumb.path}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Typography variant="body2" color="white" sx={{ fontWeight: 600, '&:hover': { color: '#fff' } }}>
                  {breadcrumb.label}
                </Typography>
              </Link>
            ) : (
              <Typography key={index} color="white">{breadcrumb.label}</Typography>
            )
          ))}

          <Typography color="white">{value}</Typography>
        </Breadcrumbs>
      </Box>
    </Container>
  );
};

export default TopHeading;