import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import data from './data';

import { Link as RouterLink,   useParams,useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const CandidatesListListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Candidate List"
    >
      <Container maxWidth={false}>
     
        <Box mt={3}>
       
           <Results  /> 
        </Box>
      </Container>
    </Page>
  );
};

export default CandidatesListListView;
