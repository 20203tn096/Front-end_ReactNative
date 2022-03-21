import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Loading from '../components/Loading';
import UserLogin from './profile/UserLogin';

export default function Profile(props) {
   
    return (
      <UserLogin />
    )
  
}

const styles = StyleSheet.create({});
