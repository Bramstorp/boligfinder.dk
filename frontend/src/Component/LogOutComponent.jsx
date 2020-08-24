import React from "react";
import axios from 'axios';
import { Form, Input, Button, Checkbox, Row, Col, Carousel  } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const LogOut = ({ logout })=> {
    logout();
    window.location = "/";
};

LogOut.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { logout })(LogOut);