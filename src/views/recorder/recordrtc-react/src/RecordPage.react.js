import React, { useRef, useState, useEffect } from 'react';
import IconButton from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';
import { makeStyles } from '@material-ui/styles';
import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';
const styles = makeStyles((theme) => ({
  icon:{
    fontSize: '2.2rem',
    color: '#5336B7',
},
})
)

export default function Camera(props) {
  const [videoRef, setVideoRef] = useState(useRef());
  const classes = styles()
  const [blob, setBlob] = useState([]);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [time, setTime] = useState(0);
  const [videoRecorded, setVideoRecorded] = useState(false);
  const [playableVideo, setPlayableVideo] = useState(null);
  const [camIndex, setCamIndex] = useState(null);
  const [camCount, setCamCount] = useState(1);
  const { onRecordingComplete } = props;
  const [canPlay, setCanPlay] = useState(true);
  //l'ouverture dde la cam 
  const openCam = async (index) => {
    setCamIndex(index);
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(e => e.kind === 'videoinput');
    setCamCount(videoDevices.length)
    const CAPTURE_OPTIONS = {
      audio: 'default',
      video: { facingMode: "environment", deviceId: videoDevices[index].deviceId },
    };
    const stream = await navigator.mediaDevices.getUserMedia(CAPTURE_OPTIONS);
    setMediaStream(stream);
    videoRef.current.srcObject = stream;
    const recorder = new window.MediaRecorder(stream);
    setMediaRecorder(recorder);
    setCanPlay(true); 
  }
  useEffect(() =>{
    openCam(0);
  }, [])
  
  useEffect(() =>{
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = mediaStream;
      const recorder = new window.MediaRecorder(mediaStream);
      setMediaRecorder(recorder);
      setCanPlay(true);
    }
    }, [mediaStream])
  useEffect(() =>{
    if(mediaRecorder) {
      const ondataavailable = (e) => {
        blob.push(e.data)
      };
      mediaRecorder.ondataavailable = ondataavailable;
      mediaRecorder.start(10)
    }  
  }, [mediaRecorder])
  function handleCanPlay() {
    videoRef.current.play();
  }

  const MIME_TYPES = [
    'video/webm;codecs="vp8,opus"',
    'video/webm;codecs=h264',
    'video/webm;codecs=vp9',
    'video/webm'
  ]
  
  const getMimeType = () => {
    const mimeType = window.MediaRecorder.isTypeSupported
      ? MIME_TYPES.find(window.MediaRecorder.isTypeSupported)
      : 'video/webm'

    return mimeType || ''
  }

  const handleStop = () => {
    const videoBlob =
    blob.length === 1
      ? blob[0]
      : new window.Blob(blob, {
        type: getMimeType()
      })
    

    props.onRecordingComplete(videoBlob);
    setVideoRecorded(true);
    setPlayableVideo(URL.createObjectURL(videoBlob));
    if(mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
  };
  const flipCamera = () => {
    mediaStream.getTracks().forEach(track => {
      track.stop();
    });
    mediaRecorder.stop();  
    const i = (camIndex + 1) % camCount;
    videoRef.current.load();
    delete videoRef.current.srcObject; // empty source
    openCam(i)
  }
  return (
    <div>
      {(videoRecorded && playableVideo) ?
      <video width="100%" src={playableVideo} autoPlay playsInline controls/>
        :
        <div>
      { canPlay &&
      <video width="100%" ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline />
      }
      {camCount > 1 &&
      <IconButton onClick={flipCamera}>
            <FlipCameraIosIcon classes={{root:classes.icon}}/>
          </IconButton>
      }
        <IconButton onClick={handleStop}>
            <StopIcon classes={{root:classes.icon}}/>
          </IconButton>
      </div>}
    </div>
  );
}
