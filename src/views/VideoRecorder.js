import React, {useState} from 'react';
import axios from 'axios'
import VideoRecorder from 'react-video-recorder'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ReactRecorder from './recorder/recordrtc-react/src/RecordPage.react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachFilesModal from './AttachFilesModal';
import FileLine from './FileLine';
import IconButton from '@material-ui/core/Button';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
  icon:{
    fontSize: '2.2rem',
    color: '#5336B7',
  },
  applyButton: {
    background: '#5336B7',
    color:'#ffffff'
  },
  uploadIcon: {
    color: '#fffff'
  }
  })
)


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Recorder(props) {
  const classes = styles();
  const { candidate, jobOfferId } = props;
  const [videoBinary, setVideoBinary] = useState();
  const [isVideoRecorded, setIsVideoRecorded] = useState(false);
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const [recording, setRecording] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [attachementList,setAttachementList] = useState([]);
  const deleteFile=(fileId) => {
    const diff = (e) => e._id !== fileId;
    const newAttachementList = attachementList.filter(diff);
    setAttachementList(newAttachementList);
  }
  const onRecordingComplete = (blob) => {
      setVideoBinary(blob)
      setIsVideoRecorded(true)
  }
  const uploadVideo = async () => {
      let fd = new FormData();
      fd.append('fname', 'test.webm');
      fd.append('data', videoBinary);
      fd.append('candidate', candidate);
      fd.append('offer', jobOfferId);
      const getId = e => e._id;
      fd.append('attachements', attachementList.map(getId));
      const res = await axios.post(`${process.env.REACT_APP_URL}application`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
              })
      setIsVideoUploaded(true)
  }
  const openAttachementsModal = () => {
    setOpenModal(true)
  }
  return (
    <div>
        <Grid container>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
          { recording &&
            <ReactRecorder onRecordingComplete={onRecordingComplete}/>
          }
          </Grid>
          <Grid item sm={3}></Grid>
          </Grid>
          <Grid container>
          <Grid item xs={1} sm={3}></Grid>
          <Grid item xs={10} sm={6}>
          { !recording &&
          <IconButton>
            <VideoCallIcon classes={{root: classes.icon}} onClick={() => setRecording(true)} />
          </IconButton>
          }
           <IconButton>
            <AttachFileIcon classes={{root: classes.icon}} onClick={openAttachementsModal} />
          </IconButton>

           <AttachFilesModal attachementList={attachementList} setAttachementList={setAttachementList} open={openModal} setOpen={setOpenModal}/>
           {
            attachementList.map( media => (
                <FileLine deleteFile={deleteFile} isFromApplication={true} key={media._id} media={media}/>
            ))
          }
        
        <Snackbar open={isVideoUploaded} autoHideDuration={6000}>
          <Alert severity="success">
            Applied ! your application has been submitted
          </Alert>
        </Snackbar>
          </Grid>
          <Grid item xs={1} sm={3}></Grid>
          </Grid>
          {
          <Button
            variant="contained"
            onClick={uploadVideo}
            className={classes.applyButton}
            disabled={!(isVideoRecorded || attachementList.length !== 0)}
            style={{margin: '8px'}}
            startIcon={<CloudUploadIcon classes={{root:classes.uploadIcon}}/>}
          >
              Apply
        </Button>}
    </div>
  );
}

export default Recorder;
