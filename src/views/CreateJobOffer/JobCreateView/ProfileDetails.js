import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik  } from 'formik';

import {
  Box,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ProfileDetails = () => {
  const classes = useStyles();
  //ici c'est pour quand on valide il 'ya Link vers une autre page
  const navigate = useNavigate();

  return (
     <Page
      className={classes.root}
      title="Register"
    >
     <Container maxWidth="sm">
    {/* //debut partie Formik : */}

<Formik
            initialValues={{
              SocieteName: '',
              adress: '',
              JobDescription: '',
              JobRequirements: '',
              HowToApply: '',
              recruteurName: ''
            }}
            validationSchema={
              Yup.object().shape({
                SocieteName: Yup.string().max(255).required('SocieteName is required'),
                adress: Yup.string().max(255).required('adress name is required'),
                JobDescription: Yup.string().max(255).required('JobDescription name is required'),
                JobRequirements: Yup.string().max(255).required('JobRequirements is required'),
                HowToApply: Yup.string().max(255).required('HowToApply is required'),
                recruteurName: Yup.string().max(255).required('recruteurName is required'),
                // isRecruiter: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={async(values) => {
              const res = await axios.post(`${process.env.REACT_APP_URL}post`,{...values})
                            console.log('res', res);

              navigate('/app/Job-offer', { replace: true })
              
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Create Job Offer"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              error={Boolean(touched.SocieteName && errors.SocieteName)}
                fullWidth
                helperText={touched.SocieteName && errors.SocieteName}
                label="SocieteName"
                name="SocieteName"
                 onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.SocieteName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              error={Boolean(touched.adress && errors.adress)}
                fullWidth
                  helperText={touched.adress && errors.adress}
                label="adress"
                name="adress"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.adress}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               error={Boolean(touched.JobDescription && errors.JobDescription)}
                fullWidth
                helperText={touched.JobDescription && errors.JobDescription}
                label="JobDescription"
                name="JobDescription"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.JobDescription}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              error={Boolean(touched.JobRequirements && errors.JobRequirements)}
                fullWidth
                helperText={touched.JobRequirements && errors.JobRequirements}
                label="JobRequirements"
                name="JobRequirements"
                onBlur={handleBlur}
                onChange={handleChange}
               required
                value={values.JobRequirements}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.HowToApply && errors.HowToApply)}
                fullWidth
                helperText={touched.HowToApply && errors.HowToApply}
                label="HowToApply"
                name="HowToApply"
                 onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.HowToApply}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                 error={Boolean(touched.recruteurName && errors.recruteurName)}
                fullWidth
                helperText={touched.recruteurName && errors.recruteurName}
                label="recruteurName"
                name="recruteurName"
                 onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.recruteurName}
                variant="outlined"
              >
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
          disabled={isSubmitting}
             fullWidth
            color="primary"
            variant="contained"
             type="submit"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
       
      </Card>
    </form>
    )}
          </Formik>
    </Container>
    </Page>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
