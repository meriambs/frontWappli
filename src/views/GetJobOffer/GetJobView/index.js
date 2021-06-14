import React, { useEffect, useState } from 'react';

import { Link as RouterLink,   useParams,useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import {
  Box,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
 
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
const GetJobOffer = ({ className, ...rest }) => {
     const classes = useStyles();
     const navigate = useNavigate();
 const {id}=useParams();
  console.log('id',id)
  const [jobOffer,setjobOffer] = useState([]);
    useEffect(() => {
      const fetchGetOff = async () =>{
        const res = await axios.get(`${process.env.REACT_APP_URL}post/${id}`);
        setjobOffer(res.data[0]);
        console.log('res',res.data[0])
      
       }
       fetchGetOff();
     }, []);

      const handle=()=>{
    navigate(`/app/apply/${id}`, { replace: true });
         
 }
  return (
     <Page
      className={classes.root}
      title="Register"
    >
     <Container maxWidth="sm">
    
      <Card>
        <CardHeader
          subheader="All the Information you need about the JOb Offer"
          title="Lecture "
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
              <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
              <h4>Societe name</h4>
                
                  
                </Typography>
                  {jobOffer.SocieteName}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
              <h4>Societe Description</h4>
                 
                </Typography>
                 {jobOffer.JobDescription}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
               <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
                 <h4> Job Requirements</h4>
                  
                  
                </Typography>
                {jobOffer.JobRequirements}
            </Grid>
              <Grid
              item
              md={6}
              xs={12}
            >
               <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
                 <h4> Job Benefits</h4>
                  
                  
                </Typography>
                {jobOffer.JobBenefits}
            </Grid>
                <Grid
              item
              md={6}
              xs={12}
            >
               <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
                 <h4> Job HowToApply</h4>
                
                  
                </Typography>
                  {jobOffer.HowToApply}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
 <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
                  <h4>Societe name</h4>
                 
                </Typography>
                 {jobOffer.JobDescription}
            </Grid>
             <Grid
              item
              md={6}
              xs={12}
            >
               <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
                 <h4>Recruteur Name </h4>
                 
                  
                </Typography>
                 {jobOffer.recruteurName}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
               <Typography variant="body2" style={{ cursor: 'pointer' }} gutterBottom variant="subtitle1">
                 <h4>Societe name</h4>
                  
                  
                </Typography>
                {jobOffer.SocieteName}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
  <Typography variant="body2" style={{ cursor: 'pointer' }}>
  <h4>Date </h4>
                  {moment(jobOffer.date).format('MMMM Do YYYY')}
                </Typography>
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
        onClick={handle}
             fullWidth
            color="primary"
            variant="contained"
            variant="contained"
          >
            Postuler !!
          </Button>
        </Box>
       
      </Card>
   
    </Container>
    </Page>
  );
};


GetJobOffer.propTypes = {
  className: GetJobOffer.string
};

export default GetJobOffer;