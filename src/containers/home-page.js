import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/container';
import FriendsList from '../components/friends-list';
import * as C from '../constants';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function HomePage({ }) {
  return (
    <Container testid="home" size={4} center>
      <h2 data-testid="home-heading" className="center caps" id="qa-counter-heading">Homepage</h2>
      <FriendsList friends={C.FAV_FRIENDS_LIST}/>
    </Container>
  );
}

HomePage.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);