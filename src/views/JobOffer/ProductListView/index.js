import React, { useState,useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
// import Test from './Test';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [products,setProducts] = useState([]);
  
 useEffect(() => {
    const fetchOffers = async() => {
  
     const dis = await axios.get(`${process.env.REACT_APP_URL}post`
    )
    setProducts(dis.data);
    console.log('data',dis.data)
      
  }
    
    fetchOffers()
  }, [])
  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
     <Toolbar/>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
      {/* <Test/> */}
    </Page>
  );
};

export default ProductList;
