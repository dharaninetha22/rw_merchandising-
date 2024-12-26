import React from 'react';
import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface TopHeaderProps {
  value: string;
  breadcrumbs?: BreadcrumbItem[];
}

const TopHeader: React.FC<TopHeaderProps> = ({ value, breadcrumbs = [] }) => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'left',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: theme.spacing(6),
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '600',
            mb: theme.spacing(2),
            color: 'white', // Ensure the color is white
          }}
        >
          {value}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{ color: 'white' }}>
            {/* Home Breadcrumb */}
            <Link
              to="/home"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <HomeIcon sx={{ fontSize: 20, marginRight: '5px', color: '#fff' }} />
              <Typography
                variant="body2"
                color="white"
                sx={{ fontWeight: 560, '&:hover': { color: 'white' } }}
              >
                Home
              </Typography>
            </Link>

            {/* Dynamically render breadcrumb items */}
            {breadcrumbs.map((breadcrumb, index) =>
              breadcrumb.path ? (
                <Link
                  key={index}
                  to={breadcrumb.path}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ fontWeight: 600, '&:hover': { color: 'white' } }}
                  >
                    {breadcrumb.label}
                  </Typography>
                </Link>
              ) : (
                <Typography key={index} color="white">
                  {breadcrumb.label}
                </Typography>
              )
            )}

            {/* Current page */}
            <Typography color="white">{value}</Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
