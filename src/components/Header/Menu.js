import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

export default class Menu extends Component {
  render() {
    const { logo, menuState, menuToggle } = this.props;

    return (
      <div className={
        classNames(
          'navWrap',
          menuState ? 'open-menu' : 'close-menu'
        )}
      >
        <button
          className='close-button'
          onClick={() => menuToggle()}
          type='button'
        >
          <FontAwesomeIcon
            icon={['fas', 'times']}
          />
        </button>
        <Img sizes={logo} ariaHidden='true'/>
        <h2>ABOVE THE BATTLE</h2>
        <div className='line' />
        <ul className='nav'>
          <li>
            <Link
              to={'/categories/anxiety'}
            >
              ANXIETY
            </Link>
          </li>
          <li>
            <Link
              to={'/categories/depression'}
            >
              DEPRESSION
            </Link>
          </li>
          <li>
            <Link
              to={'/categories/faith'}
            >
              FAITH
            </Link>
          </li>
          <li>
            <Link
              to={'/categories/womens issues'}
            >
              WOMEN’S ISSUES
            </Link>
          </li>
          <li>
            <Link
              to={'/categories/marriage'}
            >
              MARRIAGE
            </Link>
          </li>
          <li>
            <Link
              to={'/categories/love'}
            >
              LOVE
            </Link>
          </li>
          <li>
            <Link
              to={'/resources'}
            >
              RESOURCES
            </Link>
          </li>
          <li>
            <Link
              to={'/about'}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to={'/contact'}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  logo: PropTypes.object,
  menuState: PropTypes.bool,
  menuToggle: PropTypes.func
};