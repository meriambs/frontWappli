import React , {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import axios from 'axios'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import { setuser } from "../../../redux/action";
import { useDispatch } from "react-redux";
import  {useSelector} from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = ({ className, ...rest }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();


  const user=useSelector((state =>state.user));
  const [formData, setFormData] = useState('');
  
  const [info, setInfo] = useState({
    image: '',
    name: '',
  });
  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState({
    found: false,
    message: '',
  });
  /** end states */

  // Upload image
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('data', files[0]);
    data.append('name', files[0].name);
    setFormData(data);
  };
//click redirect :
const click=(e)=>{
  navigate('/app/account', { replace: true })
}




  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
   const token = localStorage.getItem('token');
    const options = {
     
 headers: {"x-auth-token": token ,'Content-Type': 'multipart'},
    
    };
    
       const res = await axios.post(`${process.env.REACT_APP_URL}users/photo`,formData,options);
       const dis = await axios.get(`${process.env.REACT_APP_URL}users`, {
        headers: {"x-auth-token": token}
    }
    )
    dispatch(setuser(dis.data[0]));
      }

  return (
    <div>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
       
         <div
      
    >
    <Box
    alignItems="center"
    display="flex"
    flexDirection="column"
  >
    
    <Typography
      color="textPrimary"
      gutterBottom
      variant="h3"
    >
      {user.name}
    </Typography>
  
    <Typography
      className={classes.dateText}
      color="textSecondary"
      variant="body1"
    >
      {user.lastName}
    </Typography>
  </Box> 
  
  <div>
      {error.found && (
        <div
          className='alert alert-danger'
          role='alert'
          style={{ width: '150px'}}
        >
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit} >
       
        <div  style={{position:'center'}}>
         <img
        className='mt-3'
        src={`${process.env.REACT_APP_URL}uploads/${info.image}`}
        alt={`${info.name}`}
        style={{ width: '150px',borderRadius:'60%' ,display: 'block',marginLeft: 'auto',marginRight:' auto'}}
      />
          <input
            type='file'
            
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
            onChange={upload}
          />
          
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
     
    </div>
       </div>
      </CardContent>
     
      <Divider />
      <Button onClick={click}>try more details</Button>
    </Card>
    
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;



