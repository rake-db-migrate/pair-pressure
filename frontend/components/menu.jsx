var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { roomCode: '' };
  },

  render: function() {
    return(
      <main className='main menu'>
        <input
          ref='roomCode'
          type='text'
          value={this.state.roomCode}
          className='input'
          onChange={this._handleChange}
          placeholder='Enter Room Code'>
        </input>
        {this._renderJoinButton()}
        <Link to='/game' className='link'>Start a New Game</Link>
        <Link to='/help' className='link link--brown'>How To Play</Link>
      </main>
    );
  },

  _renderJoinButton: function () {
    if (this.state.roomCode.length === 4) {
      return(
        <button className='button' onClick={this._joinGame}>
          Join Room!
        </button>
      );
    }
  },

  _handleChange: function () {
    if (this.refs.roomCode.value.length <= 4) {
      this.setState({roomCode: this.refs.roomCode.value});
    }
  },

  _joinGame: function () {
    if(this.refs.roomCode.value.length === 4) {
      var url = '/game/' + this.refs.roomCode.value.toLowerCase();
      this.context.router.push(url);
    }
  }
});

module.exports = Menu;
