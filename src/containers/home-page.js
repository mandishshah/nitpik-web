import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Container from '../components/container';
import FriendsList from '../components/friends-list';
import * as MOCK_NITS_FOR_MAAZ from '../constants/mock-db.json';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    openUserProfile: (userId) => dispatch(push(`/profile/${userId}`)),
  };
}

function HomePage({ openUserProfile }) {
  return (
    <Container testid="home" size={4} center>
      <h2 data-testid="home-heading" className="center caps" id="qa-counter-heading">Homepage</h2>
      <FriendsList friendships={MOCK_NITS_FOR_MAAZ.friendships} onProfileClick={openUserProfile}/>
    </Container>
  );
}

HomePage.propTypes = {
  openUserProfile: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
