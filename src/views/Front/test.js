import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import blue from '@material-ui/core/colors/blue';
const useStyles = makeStyles((theme) => ({
  root: {
    
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    // marginTop: 50,
    display: 'inline-block',
    // maxWidth: '100%',
     width:903,
     marginLeft:480,
  },
 titre:{
    backgroundColor: blue,
    color: blue[600],

 },
  margin: {
      margin: theme.spacing(1),
      marginLeft:79,
    },
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Hire"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container >
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
            {/* 404: The page you are looking for isn’t here */}
          </Typography>
         
          
            <img
              
              className={classes.image}
              src="/static/images/welc4.jpg"
            />
        
           <Typography
            // align="center"
            color="textPrimary"
            variant="subtitle2"
          >
             <h1 className={classes.titre}>
      To persude Please Click on one of the button 
        </h1>
          </Typography>
          <Typography
            align="left"
            color="textPrimary"
            variant="subtitle2"
            gutterBottom="bool"
            size="large" 
            fontSize="large" 
          >

<Button variant="outlined"   size="large"   color="primary" >Sign In </Button>
        <Button  variant="outlined"   size="large" className={classes.margin}  >Sign up </Button>
         
          </Typography>
           </Container>
     
   
</Box>
    </Page>
  );
};

export default NotFoundView;
