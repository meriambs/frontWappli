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

const ShareArticle = () => {
  const classes = useStyles();
  //ici c'est pour quand on valide il 'ya Link vers une autre page
  const navigate = useNavigate();

  return (
     <Page
      className={classes.root}
      title="sharing"
    >
     <Container maxWidth="sm">
    {/* //debut partie Formik : */}

<Formik
            initialValues={{
              Title: '',
              recruter_candidate: '',
              date: '',
              content: '',
              intro:''
              
            }}
            validationSchema={
              Yup.object().shape({
                Title: Yup.string().max(255).required('Title is required'),
                recruter_candidate: Yup.string().max(255).required('recruter_candidate name is required'),
                date: Yup.string().max(255).required('date name is required'),
                content: Yup.string().max(255).required('content is required'),
                intro: Yup.string().max(255).required('intro is required'),
           
              })
            }
            onSubmit={async(values) => {
             
              const res = await axios.post(`${process.env.REACT_APP_URL}share`,{...values})
                            console.log('res', res);

              navigate('/app/Acceuil', { replace: true })
              console.lg('test post send')
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
          title="Share an Article "
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
              error={Boolean(touched.titre && errors.titre)}
                fullWidth
                helperText={touched.titre && errors.titre}
                label="titre"
                name="titre"
                 onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.titre}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              error={Boolean(touched.recruter_candidate && errors.recruter_candidate)}
                fullWidth
                  helperText={touched.recruter_candidate && errors.recruter_candidate}
                label="recruter_candidate ?"
                name="recruter_candidate"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.recruter_candidate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               error={Boolean(touched.date && errors.date)}
                fullWidth
                helperText={touched.date && errors.date}
                label="mm/dd/aaaa"
                name="date"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.date}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              error={Boolean(touched.content && errors.content)}
                fullWidth
                helperText={touched.content && errors.content}
                label="content"
                name="content"
                onBlur={handleBlur}
                onChange={handleChange}
               required
                value={values.content}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              error={Boolean(touched.intro && errors.intro)}
                fullWidth
                helperText={touched.intro && errors.intro}
                label="intro"
                name="intro"
                onBlur={handleBlur}
                onChange={handleChange}
               required
                value={values.intro}
                variant="outlined"
              />
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

ShareArticle.propTypes = {
  className: PropTypes.string
};

export default ShareArticle;
