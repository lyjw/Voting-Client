import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return <div>
      {this.props.winner ?
        // ref grabs the corresponding DOM node
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />
      }
    </div>
  }
});
