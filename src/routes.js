import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CandidatesListView from 'src/views/customer/CandidatesListView';

import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/JobOffer/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SharingView from 'src/views/Sharing/SharingView';
import JobCreateView from  'src/views/CreateJobOffer/JobCreateView';
import GetJobView from 'src/views/GetJobOffer/GetJobView'
import ApplyView from 'src/views/Apply/ApplyView';
 import FrontView from  'src/views/Front/FrontView';
 import AcceuilView from 'src/views/Acceuil/AcceuilView';
import ProfilUpdateView from 'src/views/ProfilUpdate/ProfilUpdateView';
import PhotoUpdtedView from 'src/views/PhotoUpdted/PhotoUpdtedView';
import ProfiledetailView from 'src/views/Profiledetail/ProfiledetailView';
const routes = [
  {
    
    path: 'app',
    
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
       {path: 'Acceuil' ,element:<AcceuilView/>},
       {path:'Photo',element:<PhotoUpdtedView/>},
     
      { path: 'creatJobOffer', element: <JobCreateView /> },
       
      { path: 'Candidates/:id', element: <CandidatesListView /> },
       { path: 'update-profil', element: <ProfilUpdateView /> },
      { path: 'Job-offer', element: <ProductListView /> },
      { path: 'apply/:id', element: <ApplyView /> },
      { path: 'JobOffer/:id', element: <GetJobView /> },
      { path: 'sharing', element: <SharingView /> },
      { path: 'Profile', element: <ProfiledetailView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
 
  
  {
    path: '/',
    
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
       { path: 'Welcome', element: <FrontView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/Welcome" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
