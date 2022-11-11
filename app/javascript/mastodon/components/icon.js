import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends React.PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    fixedWidth: PropTypes.bool,
  };

  render () {
    const { id, className, fixedWidth, ...other } = this.props;

    const role = (other.includes('alt') || other.includes('title') || other.includes('aria-label') || other.includes('aria-labelledby')) ? 'img' : undefined;

    return (
      <i role={role} className={classNames('fa', `fa-${id}`, className, { 'fa-fw': fixedWidth })} {...other} />
    );
  }

}
