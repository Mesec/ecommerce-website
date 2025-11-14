import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Card, CardContent, Divider } from '@mui/material';
import './Checkout.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('e-money');

  const handlePaymentChange = (event) => {
  setPaymentMethod(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="Checkout-Container">
      <Grid container spacing={4}>
        {/* Left Side - Form */}
        <Grid item xs={12} md={8}>
          {/* Checkout Main Header */}
          <Typography className="Checkout-Main-Header" variant="h4" gutterBottom>
            Checkout
          </Typography>

          {/* Billing Details */}
          <Box mb={4}>
            <Typography className="Section-Title" gutterBottom>
              Billing Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField size="small" fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size="small" fullWidth label="Email Address" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField size="small" fullWidth label="Phone Number" variant="outlined" />
              </Grid>
            </Grid>
          </Box>

          {/* Shipping Info */}
          <Box mb={4}>
            <Typography className="Section-Title" gutterBottom>
              Shipping Info
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField size="small" fullWidth label="Address" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size="small" fullWidth label="ZIP Code" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size="small" fullWidth label="City" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField size="small" fullWidth label="Country" variant="outlined" />
              </Grid>
            </Grid>
          </Box>

          {/* Payment Details */}
        <Grid item xs={12} md={12}>
          {/* Payment Details */}
          <Box mb={4}>
            <Typography className="Section-Title" gutterBottom>
              Payment Details
            </Typography>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" className="Payment-Method-Label">
                Payment Method
              </FormLabel>
              <RadioGroup
                name="payment-method"
                value={paymentMethod}
                onChange={handlePaymentChange}
                className="Payment-Options"
              >
                <Box className="Payment-Option-Box">
                  <FormControlLabel value="e-money" control={<Radio />} label="e-Money" />
                </Box>
                <Box className="Payment-Option-Box">
                  <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
                </Box>
              </RadioGroup>
            </FormControl>
            {paymentMethod === 'e-money' ? (
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" fullWidth label="e-Money Number" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" fullWidth label="e-Money PIN" variant="outlined" />
                </Grid>
              </Grid>
            ) : (
              <Box mt={2}>
                <Typography className="Cash-On-Delivery-Info">
                  The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. 
                  Just make sure your address is correct so that your order will not be cancelled.
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
        </Grid>

        {/* Right Side - Summary */}
        <Grid item xs={12} md={4}>
          <Card className="Summary-Card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>

              {/* Example Products */}
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography>XX99 MK II</Typography>
                <Typography>$2,999</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography>XX59</Typography>
                <Typography>$899 x2</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography>YX1</Typography>
                <Typography>$599</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Total */}
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2">Total</Typography>
                <Typography variant="body2">$5,396</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2">Shipping</Typography>
                <Typography variant="body2">$50</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2">VAT (Included)</Typography>
                <Typography variant="body2">$1,079</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Grand Total */}
              <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Grand Total
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  $5,446
                </Typography>
              </Box>

              {/* Continue Button */}
              <Button fullWidth variant="contained" className="Continue-Button">
                Continue & Pay
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
