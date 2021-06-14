import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Apply from './Apply';
import ApplyDetails from './ApplyDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();


  return (
    <Page
      className={classes.root}
      title="Candidature"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Apply />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <ApplyDetails />
          </Grid>
        </Grid>
       
      </Container>
    </Page>
  );
};

export default Account;
