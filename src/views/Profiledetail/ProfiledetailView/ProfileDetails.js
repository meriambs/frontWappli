import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
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
import { useSnackbar } from 'notistack';

import  {useSelector} from 'react-redux';


const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const user=useSelector((state =>state.user))
  console.log('user',user)

const navigate = useNavigate();
 


  return (
    
     <Page
      className={classes.root}
      title="Register"
    >
    <Container maxWidth="sm">
    {user.email !== 'duda-1258**' &&
          <Formik
            initialValues={{
              email: user.email,
              name: user.name,
              lastName: user.lastName,
              phoneNumber:user.phoneNumber,                 
             adress:user.adress,
               githubLink:user.githubLink,
            linkedin :user.linkedin,
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                name: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                
                phoneNumber:Yup.string().max(255).required('Phone number   is required'),
              })
            }
            onSubmit={async (values)=>{
               const res = await axios.put(`${process.env.REACT_APP_URL}users/${user._id}`, values)
               enqueueSnackbar('Profile updated', {variant:'success'});
               navigate('/app/account', { replace: true })
              console.log('testy')
              }
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
            }) => (<form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile Update"
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  fullWidth
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  label="phoneNumber"
                  margin="normal"
                  name="phoneNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  
                  value={values.phoneNumber}
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
                  margin="normal"
                  name="adress"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  
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
               error={Boolean(touched.githubLink && errors.githubLink)}
                  fullWidth
                  helperText={touched.githubLink && errors.githubLink}
                  label="githubLink"
                  margin="normal"
                  name="githubLink"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  
                  value={values.githubLink}
                  variant="outlined"
               
              />
            </Grid> 
             <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
             isSubmitting   error={Boolean(touched.linkedin && errors.linkedin)}
                  fullWidth
                  helperText={touched.linkedin && errors.linkedin}
                  label="linkedin"
                  margin="normal"
                  name="linkedin"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  
                  value={values.linkedin}
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
           color="primary"
                     disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained" 
          >
             Save details
           </Button>
         </Box> 
       </Card>
     </form> )}
    </Formik>}
    </Container>
  </Page>
    
  );
};

 ProfileDetails.propTypes = {
   className: PropTypes.string
 };

export default ProfileDetails;
