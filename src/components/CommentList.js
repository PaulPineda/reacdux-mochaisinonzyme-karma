import React, { Component, PropTypes } from 'react';

export default class CommentList extends Component {
  static propTypes = {
    onMount: PropTypes.func.isRequired,
    isActive: PropTypes.bool
  }

  componentDidMount(){
    this.props.onMount();
  }
  render(){
    const { isActive } = this.props;
    const className = isActive ? 'active-list':'inactive-list';
    return (
      <ul className={className}>
        <li>Comment One</li>
      </ul>
    );
  };
}
