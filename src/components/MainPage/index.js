import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./MainPage.scss";
import Header from '../Header';
import Modal from "../Modal";
import GroupList from "../GroupList";


class MainPage extends Component {
  render() {
    const { addModalClick, isHidden, cancelClickModal, handleLogOut, groups } = this.props;
    return (
      <Fragment>
        <Header addModalClick={addModalClick} >
          <h2 className="header__tittle">Grupos</h2>
        </Header>
        <Modal isHidden={isHidden} cancelClickModal={cancelClickModal} handleLogOut={handleLogOut}/>
        <GroupList groups={groups}/>
      </Fragment>
    );
  }
}

MainPage.propTypes = {
  addModalClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  cancelClickModal: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired
}

export default MainPage;
