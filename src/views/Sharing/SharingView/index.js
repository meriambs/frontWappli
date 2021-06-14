import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid
} from '@material-ui/core';
import Page from 'src/components/Page';
import ShareArticle from './ShareArticle';
// import Password from './looklater';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  hero: {
    backgroundImage: ` url('https://images.golinks.io/blog/wp-content/uploads/2021/02/18223442/image-110.png')`,
    height: "600px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
}));

const SettingsView = () => {
  const classes = useStyles();

  return (
    // 
    <Page
      className={classes.root}
      title="Settings"
    >
    <Container maxWidth="lg">
    <Grid
      container
     
      className={classes.hero}
    >
     
      <ShareArticle />
      
      
    </Grid>
  </Container>
    </Page>
  );
};

export default SettingsView;
