/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PropsWithChildren } from 'react';
import loadable from '@loadable/component';
import { toast, ToastContainer } from 'react-toastify';

import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AddExpenditure } from '../../services/add-expenditure-service';
import { useAuth } from '../../context/auth';
import EventEmitterService from '../../services/event-emitter-service';

import 'react-toastify/dist/ReactToastify.css';

const NameField = loadable(() => import('./name'));
const OrganizationField = loadable(() => import('./organization'));
const UnitPriceField = loadable(() => import('./unit-price'));
const QuantityField = loadable(() => import('./quantity'));

export default function AddExpenditureForm({
  id,
  closeForm,
}: PropsWithChildren<{ id: string; closeForm: () => void }>) {
  const [name, setName] = React.useState('');
  const [organization, setOrganization] = React.useState('');
  const [unitPrice, setUnitPrice] = React.useState(1);
  const [quantity, setQuantity] = React.useState(1);
  const { token } = useAuth();

  const submitExpenditureHandler: React.FormEventHandler<HTMLFormElement> =
    async (e) => {
      e.preventDefault();

      try {
        const expenditure = await AddExpenditure(
          token!,
          id,
          name,
          organization,
          unitPrice,
          quantity
        );
        EventEmitterService('add_expenditure', expenditure.data);
        closeForm();
      } catch (err: any) {
        toast.error(err.response.data.error);
      }
    };

  return (
    <>
      <Container component="div" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Expenditure Details
          </Typography>
          <Box
            component="form"
            onSubmit={submitExpenditureHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <NameField name={name} setName={setName} />
              </Grid>
              <Grid item xs={12}>
                <OrganizationField
                  organization={organization}
                  setOrganization={setOrganization}
                />
              </Grid>
              <Grid item xs={12}>
                <UnitPriceField
                  unitPrice={unitPrice}
                  setUnitPrice={setUnitPrice}
                />
              </Grid>
              <Grid item xs={12}>
                <QuantityField quantity={quantity} setQuantity={setQuantity} />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Proceed
            </Button>
          </Box>
        </Box>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
