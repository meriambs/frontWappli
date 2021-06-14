import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Test = ({ className, customers, ...rest }) => {
  const classes = useStyles();
 
  const [page, setPage] = useState(0);

 

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
               
                <TableCell>
                  Video
                </TableCell>
                <TableCell>
                  Download Ficher
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                {/* > */}
                  
                
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        // className={classes.avatar}
                        // src={customer.avatarUrl}
                      >
                        {/* {getInitials(customer.name)} */}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {/* {customer.name} */}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {/* {customer.email} */}
                  </TableCell>
                 
                  <TableCell>
                   <CameraRollIcon/>
                  </TableCell>
                  <TableCell>
                   <SaveIcon/>
                  </TableCell>
                {/* </TableRow> */}
              {/* ))} */}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
     
    </Card>
  );
};



export default Test;