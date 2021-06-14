import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import  {useSelector} from 'react-redux';
import {DropzoneDialog} from 'material-ui-dropzone';
import { IconButton } from '@material-ui/core';
import { Link as RouterLink,   useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import CameraRollIcon from '@material-ui/icons/CameraRoll';

import ReactRecorder from '../../recorder/recordrtc-react/src/RecordPage.react';


const useStyles = makeStyles(() => ({
  root: {}
}));
 
const ProfileDetails = ({ className, ...rest }) => {
  const {id}=useParams();
  const classes = useStyles();
  const user=useSelector((state =>state.user))
  const navigate = useNavigate();
 
 const [open, setOpen] = useState(false);
 const [video,setVideo] = useState(false);
 const [cv,setCv]=useState();
 const [videoBinary, setVideoBinary] = useState();
 const [isVideoRecorded, setIsVideoRecorded] = useState(false);
 const [isVideoUploaded, setIsVideoUploaded] = useState(false);
 const [recording, setRecording] = useState(false);
 
 const onRecordingComplete = (blob) => {
     setVideoBinary(blob)
     setIsVideoRecorded(true)
 }
 
    const handleClose = () => {
        setOpen(false)
    }
    const handleSave = async (files) => {
        setCv(files[0]);
        setOpen(false)
        }
 
 
    const handleOpen = () => {
        setOpen(true)
    }
    const postuler= async()=>{
      let fd = new FormData();
      fd.append('fname', 'cv.name');
      fd.append('video', videoBinary);
      fd.append('data', cv);
      fd.append('offer', id);
       const res = await axios.post(`${process.env.REACT_APP_URL}${user._id}`,fd, {
        headers: {
          'Content-Type': 'multipart'}});

navigate('/app/Job-offer', { replace: true })
    }
 
 
 
 
  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Some  information "
          title="Candidature Profile "
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
              <Typography
                fullWidth
                helperText="Please specify the first name"
                label="name"
                name="name"
                variant="outlined"
              > <h3>Name:</h3>
              {user.name}</Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                fullWidth
                label="Last name"
                name="lastName"
                value={user.lastName}
                variant="outlined"
              > <h3>Last Name:</h3>
              {user.lastName}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                fullWidth
                label="Email Address"
                name="email"
                value={user.email}
                variant="outlined"
                > <h3>Email:</h3>
              {user.email}
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
          <DropzoneDialog
                open={open}
                filesLimit={1}
                onSave={handleSave}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
            />
            <IconButton onClick={()=>setVideo(true)}>
              <CameraRollIcon/>
            </IconButton>
            <IconButton onClick={()=>setOpen(true)}>
          <AttachFileIcon/>
       </IconButton>
          <Button
            color="primary"
            variant="contained"
            onClick={postuler}
          >
            Postuler !
          </Button>
 
        </Box>
      </Card>
      {cv &&
          <Typography >
              {cv.name}
 
          </Typography>}
          {
            video && <ReactRecorder onRecordingComplete={onRecordingComplete}/>
          }
    </form>
  );
};
 
ProfileDetails.propTypes = {
  className: PropTypes.string
};
 
export default ProfileDetails;
 