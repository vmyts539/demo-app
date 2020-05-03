import React from 'react'

import { Link } from "react-router-dom";

import HamburgerMenu from 'react-hamburger-menu';
import Logo  from 'images/logo.png'

import Search from '../Search/Search'

import './header.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    }
  }

  handleClick() {
    this.setState({
        open: !this.state.open
    });
}

  render() {
    return (
      <>
        <div className="header d-flex align-items-center justify-content-between pr-3">
          <Link to="/">
            <div className="logo ml-3">
              <img src={Logo} alt="" />
            </div>
          </Link>

          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={27}
            height={24}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
          />

          <div className={(this.state.open ? '' : 'd-none') + ' sidebar'}>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>

        </div>
      </>
    )
  }
}

export default Header
