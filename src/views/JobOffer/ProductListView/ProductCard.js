import React , {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'axios'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import moment from 'moment';
import { Link as RouterLink,   useParams,useNavigate } from 'react-router-dom';
import  {useSelector} from 'react-redux';
/////
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));


const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();
 const navigate = useNavigate();
    const { id } = useParams() 
     const user=useSelector((state =>state.user))

     let Recru ;
      if(user.isRecruiter == true){
           Recru = true
       }else {
           Recru = false
         }
     console.log('recru',Recru)
  

 const handl=()=>{
    navigate(`/app/JobOffer/${product._id}`, { replace: true })
          console.log('id',id)
 }

const handlee=()=>{
navigate(`/app/Candidates/${product._id}`, { replace: true })
          console.log('id',id)
 }
  return (
   
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt="Product"
            src={product.SocieteName}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.adress}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.JobDescription}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              { moment(product.date).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
           { ! Recru && <Button
             fullWidth
            color="primary"
            variant="contained"
            onClick={handl}
          >
           View Some details !
          </Button> } 
        </Box>
        { Recru &&<Button
             fullWidth
            color="primary"
            variant="contained"
            onClick={handlee}
          >
           View Candidates !
          </Button>} 
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
