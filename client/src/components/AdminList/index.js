import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import API from "../../utils/API"

class AdminList extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      lunchItems: [],
      dinnerItems: [],
      appItems: []
    };

  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    this.loadLunch()
    this.loadDinner()
    this.loadApps()
  }

  loadLunch() {
    API.getLunch()
      .then(res => this.setState({ lunchItems: res.data[0].items }))
      .catch(err => console.log(err))
  }

  loadApps() {
    API.getAppetizers()
      .then(res => this.setState({ appItems: res.data[0].items }))
      .catch(err => console.log(err))
  }

  loadDinner() {
    API.getDinner()
      .then(res => this.setState({ dinnerItems: res.data[0].items }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='AdminList'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Appetizer
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Lunch
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Dinner
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ul className='app-ul'>
                  {this.state.appItems.map(app => {
                    return (
                      <li>
                        <p>{app.name}</p>
                        <p>{app.description}</p>
                        <p>{app.price}</p>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <ul className='lunch-ul'>
                  {this.state.lunchItems.map(lunch => {
                    return (
                      <li>
                        <p>{lunch.name}</p>
                        <p>{lunch.description}</p>
                        <p>{lunch.price}</p>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <ul className='dinner-ul'>
                  {this.state.dinnerItems.map(dinner => {
                    return (
                      <li>
                        <p>{dinner.name}</p>
                        <p>{dinner.description}</p>
                        <p>{dinner.price}</p>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export { AdminList };