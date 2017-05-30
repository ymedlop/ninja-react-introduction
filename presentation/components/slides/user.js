import React from "react";
import UserInfo from '../userinfo';
import Enhance from './enhance';

const UserSlide = props => <UserInfo user={props.user} />;

export default Enhance(UserSlide);