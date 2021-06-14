import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// partie add 
import * as Yup from 'yup';
import { Formik  } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Page from 'src/components/Page';
// import  {useSelector} from 'react-redux';


const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();

  // const user=useSelector((state =>state.user))
  

const navigate = useNavigate();

  //  const handleChange = (e, value) => {
      //  setAccountType(value)
  //  }
 const updated = async()=>{
 const res = await axios.post(`${process.env.REACT_APP_URL}profil`,{...values})
                             console.log('reyyyys', res);

               navigate('/app/profil', { replace: true })
              
 }

  return (
    
 <Page
      className={classes.root}
      title="Register"
    >
    <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              name: '',
              lastName: '',
              password: '',
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                name: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                password: Yup.string().max(255).required('password is required'),
                // isRecruiter: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }

          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (<form>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
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
                error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.PhoneNumber && errors.PhoneNumber)}
                  fullWidth
                  helperText={touched.PhoneNumber && errors.PhoneNumber}
                  label="PhoneNumber"
                  margin="normal"
                  name="PhoneNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="PhoneNumber"
                  value={values.PhoneNumber}
                  variant="outlined"
              />
            </Grid> */}
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               error={Boolean(touched.githubusername && errors.githubusername)}
                  fullWidth
                  helperText={touched.githubusername && errors.githubusername}
                  label="githubusername"
                  margin="normal"
                  name="githubusername"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="githubusername"
                  value={values.githubusername}
                  variant="outlined"
               
              />
            </Grid> */}
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.location && errors.location)}
                  fullWidth
                  helperText={touched.location && errors.location}
                  label="location"
                  margin="normal"
                  name="location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="location"
                  value={values.location}
                  variant="outlined"
              >
              </TextField>
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
           color="primary"
                    onClick={updated}
                    fullWidth
                    size="large"
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

//  ProfileDetails.propTypes = {
//    className: PropTypes.string
//  };

export default ProfileDetails;
