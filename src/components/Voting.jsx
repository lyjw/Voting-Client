import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {conenect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        // ref grabs the corresponding DOM node
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

// connect returns a connected version of Voting
// The module now exports two components - the pure component ('Voting') and the connected component ('VotingContainer')
export const VotingContainer = connect(mapStateToProps)(Voting);
