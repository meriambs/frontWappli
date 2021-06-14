import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import NotFoundView from 'src/views/errors/NotFoundView';
import axios from 'axios';
import { setuser } from "../../redux/action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  if(!token) {
    window.location.href='/login'
  };
  useEffect(() => {
    const fetchUser = async() => {
    if(!!token){
     const dis = await axios.get(`${process.env.REACT_APP_URL}users`, {
        headers: {"x-auth-token": token}
    }
    )
    dispatch(setuser(dis.data[0]));
 console.log('dis',dis.data);
    //  ici on a la const enregistrée dan redux et la modification des nom du profil .
    
  
  }
    };
    fetchUser()
  }, [])
  return (
    <div>
    {!!token ?
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
    : <NotFoundView />}
    </div>)
};

export default DashboardLayout;
