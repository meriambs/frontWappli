import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ProfileDetails from './ProfileDetails';

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
      title="Account"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={3}
            xs={12}
          >
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
          >
            <ProfileDetails />
          </Grid>
                    <Grid
            item
            lg={3}
            md={3}
            xs={12}
          >
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
