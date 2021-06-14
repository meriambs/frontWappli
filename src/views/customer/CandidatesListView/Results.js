import React, { useState ,useEffect } from 'react';
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
  makeStyles,
  IconButton,
  Modal
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import { Link as RouterLink,   useParams,useNavigate } from 'react-router-dom';
import data from './data'
 
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  paper: {
    position: 'absolute',
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
 
const Results = ({ className,data, ...rest }) => {
  const classes = useStyles();
  const { id } = useParams() 
  // partie get element
  console.log('idddddd',id)
  const [candidates,setCandidates] = useState([]);
    useEffect(() => {
      const fetchGetJobUser = async () =>{
        const res = await axios.get(`${process.env.REACT_APP_URL}application/offer/${id}`);
        setCandidates(res.data);
        console.log('verificatin donee',res.data)
 
       }
       fetchGetJobUser();
     }, []);
    //  end get element
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState(null)
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;
 
    if (event.target.checked) {
      newSelectedCustomerIds = jobuser.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }
 
    setSelectedCustomerIds(newSelectedCustomerIds);
  };
 
  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];
 
    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }
 
    setSelectedCustomerIds(newSelectedCustomerIds);
  };
 
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
 
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
 
  const download = (name)=>{
    window.open(`${process.env.REACT_APP_URL}${name}`)
  }
  const openVideo = (video) => {
    setVideoId(video);
    setOpen(true);
  }
  const handleClose = () => {
    setVideoId(null);
    setOpen(false);
  }
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
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === candidates.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < candidates.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
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
              {candidates.map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={`${process.env.REACT_APP_URL}uploads/${customer.photo}`}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {`${customer.user.name}  ${customer.user.lastName}`} 
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.user.email}
                  </TableCell>
 
                  <TableCell>
                  <IconButton onClick={() => openVideo(customer.video && customer.video._id)}>
                   <CameraRollIcon/>
                   </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                   <SaveIcon
                   onClick={()=>download(customer.attachments[0].name)}></SaveIcon>
                  </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          top: '10%',
          margin: 'auto',
          left: '30%',
          width: '1000px',
        }}
      >
          <div className={classes.paper}>
          <h2 id="simple-modal-title">Application video</h2>
          <video width="100%" key={videoId} id="videoPlayer" controls>
                <source src={`${process.env.REACT_APP_URL}video/${videoId}`} type="video/mp4" />
            </video>
        </div>
 
      </Modal>
      <TablePagination
        component="div"
        count={candidates.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};
 
Results.propTypes = {
  className: PropTypes.string,
  candidates: PropTypes.array.isRequired
};
 
export default Results;
 
