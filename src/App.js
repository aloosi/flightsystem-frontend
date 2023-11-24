import React, { useState } from 'react';
import {
  AppBar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  IconButton, // Import IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CreateTourist from './components/Tourist/CreateTourist';
import DeleteTourist from './components/Tourist/DeleteTourist';
import GetAllTourists from './components/Tourist/GetAllTourists';
import GetTouristByID from './components/Tourist/GetTouristByID';
import UpdateTourist from './components/Tourist/UpdateTourist';

import CreateFlight from './components/Flights/CreateFlight';
import DeleteFlight from './components/Flights/DeleteFlight';
import GetAllFlights from './components/Flights/GetAllFlights';
import GetFlightByID from './components/Flights/GetFlightByID';
import UpdateFlight from './components/Flights/UpdateFlight';

import CreateAirline from './components/Airlines/CreateAirline';
import DeleteAirline from './components/Airlines/DeleteAirline';
import GetAllAirlines from './components/Airlines/GetAllAirlines';
import GetAirlineByID from './components/Airlines/GetAirlineByID';
import UpdateAirline from './components/Airlines/UpdateAirline';

import CreateBooking from './components/Bookings/CreateBooking';
import DeleteBooking from './components/Bookings/DeleteBooking';
import GetAllBookings from './components/Bookings/GetAllBookings';
import GetBookingByID from './components/Bookings/GetBookingByID';
import UpdateBooking from './components/Bookings/UpdateBooking';

import CreateReview from './components/Reviews/CreateReview';
import DeleteReview from './components/Reviews/DeleteReview';
import GetAllReviews from './components/Reviews/GetAllReviews';
import GetReviewByID from './components/Reviews/GetReviewByID';
import UpdateReview from './components/Reviews/UpdateReview';

import CreatePayment from './components/Payments/CreatePayment';
import DeletePayment from './components/Payments/DeletePayment';
import GetAllPayments from './components/Payments/GetAllPayments';
import GetPaymentByID from './components/Payments/GetPaymentByID';
import UpdatePayment from './components/Payments/UpdatePayment';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const categories = [
    {
      label: 'Tourist',
      items: [
        { label: 'Create Tourist', path: '/tourist/create-tourist' },
        { label: 'Delete Tourist', path: '/tourist/delete-tourist' },
        { label: 'Get All Tourists', path: '/tourist/get-all-tourists' },
        { label: 'Get Tourist By ID', path: '/tourist/get-tourist-by-id' },
        { label: 'Update Tourist', path: '/tourist/update-tourist' },
      ],
    },
    {
      label: 'Flights',
      items: [
        { label: 'Create Flight', path: '/flights/create-flight' },
        { label: 'Delete Flight', path: '/flights/delete-flight' },
        { label: 'Get All Flights', path: '/flights/get-all-flights' },
        { label: 'Get Flight By ID', path: '/flights/get-flight-by-id' },
        { label: 'Update Flight', path: '/flights/update-flight' },
      ],
    },
    {
      label: 'Airlines',
      items: [
        { label: 'Create Airline', path: '/airlines/create-airline' },
        { label: 'Delete Airline', path: '/airlines/delete-airline' },
        { label: 'Get All Airlines', path: '/airlines/get-all-airlines' },
        { label: 'Get Airline By ID', path: '/airlines/get-airline-by-id' },
        { label: 'Update Airline', path: '/airlines/update-airline' },
      ],
    },
    {
      label: 'Bookings',
      items: [
        { label: 'Create Booking', path: '/bookings/create-booking' },
        { label: 'Delete Booking', path: '/bookings/delete-booking' },
        { label: 'Get All Bookings', path: '/bookings/get-all-bookings' },
        { label: 'Get Booking By ID', path: '/bookings/get-booking-by-id' },
        { label: 'Update Booking', path: '/bookings/update-booking' },
      ],
    },
    {
      label: 'Reviews',
      items: [
        { label: 'Create Review', path: '/reviews/create-review' },
        { label: 'Delete Review', path: '/reviews/delete-review' },
        { label: 'Get All Reviews', path: '/reviews/get-all-reviews' },
        { label: 'Get Review By ID', path: '/reviews/get-review-by-id' },
        { label: 'Update Review', path: '/reviews/update-review' },
      ],
    },
    {
      label: 'Payments',
      items: [
        { label: 'Create Payment', path: '/payments/create-payment' },
        { label: 'Delete Payment', path: '/payments/delete-payment' },
        { label: 'Get All Payments', path: '/payments/get-all-payments' },
        { label: 'Get Payment By ID', path: '/payments/get-payment-by-id' },
        { label: 'Update Payment', path: '/payments/update-payment' },
      ],
    },
  ];

  return (
    <Router>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: '#2196f3', padding: '12px' }}>
            <AirplanemodeActiveIcon sx={{ fontSize: 32, color: 'white', marginRight: '12px' }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
              Tourist Booking System
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
      

        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <List>
            {categories.map((category) => (
              <Accordion key={category.label}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${category.label}-content`}
                  id={`${category.label}-header`}
                >
                  <Typography>{category.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {category.items.map((item) => (
                      <ListItem button key={item.label} component={Link} to={item.path}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </List>
        </Drawer>

        <hr />
        <Routes>
          {categories.map((category) =>
            category.items.map((item) => (
              <Route key={item.label} path={item.path} element={getComponentForPath(item.path)} />
            ))
          )}
        </Routes>
      </div>
    </Router>
  );
};

const getComponentForPath = (path) => {
  // Return the appropriate component for the given path
  switch (path) {
    case '/tourist/create-tourist':
      return <CreateTourist />;
    case '/tourist/delete-tourist':
      return <DeleteTourist />;
    case '/tourist/get-all-tourists':
      return <GetAllTourists />;
    case '/tourist/get-tourist-by-id':
      return <GetTouristByID />;
    case '/tourist/update-tourist':
      return <UpdateTourist />;
    case '/flights/create-flight':
      return <CreateFlight />;
    case '/flights/delete-flight':
      return <DeleteFlight />;
    case '/flights/get-all-flights':
      return <GetAllFlights />;
    case '/flights/get-flight-by-id':
      return <GetFlightByID />;
    case '/flights/update-flight':
      return <UpdateFlight />;
    case '/airlines/create-airline':
      return <CreateAirline />;
    case '/airlines/delete-airline':
      return <DeleteAirline />;
    case '/airlines/get-all-airlines':
      return <GetAllAirlines />;
    case '/airlines/get-airline-by-id':
      return <GetAirlineByID />;
    case '/airlines/update-airline':
      return <UpdateAirline />;
    case '/bookings/create-booking':
      return <CreateBooking />;
    case '/bookings/delete-booking':
      return <DeleteBooking />;
    case '/bookings/get-all-bookings':
      return <GetAllBookings />;
    case '/bookings/get-booking-by-id':
      return <GetBookingByID />;
    case '/bookings/update-booking':
      return <UpdateBooking />;
    case '/reviews/create-review':
      return <CreateReview />;
    case '/reviews/delete-review':
      return <DeleteReview />;
    case '/reviews/get-all-reviews':
      return <GetAllReviews />;
    case '/reviews/get-review-by-id':
      return <GetReviewByID />;
    case '/reviews/update-review':
      return <UpdateReview />;
    case '/payments/create-payment':
      return <CreatePayment />;
    case '/payments/delete-payment':
      return <DeletePayment />;
    case '/payments/get-all-payments':
      return <GetAllPayments />;
    case '/payments/get-payment-by-id':
      return <GetPaymentByID />;
    case '/payments/update-payment':
      return <UpdatePayment />;
    default:
      return null;
  }
};

export default App;
