import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer, Search } from 'carbon-components-react';
import Router from 'next/router';
import Page from '../components/commons/Page/Page';
import ClinicHistories from '../components/commons/Table/ClinicHistories';
import RestServices from '../services/rest';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      clinicHistories: [],
    };
  }

  componentDidMount = async () => {
    try {
      const {data} = await RestServices.clinicHistory.getAll();
      this.setState({
        clinicHistories: data.map(clinicHistory => ({
          uuid: clinicHistory._id,
          ...clinicHistory,
        }))
      })
    } catch (e) {

    }
  };


  render() {
    const { clinicHistories } = this.state;
    return (
      <Page title="Dashboard" id="dashboard">
        <Container className="bx--grid">
          <Search
            className="some-class"
            name=""
            defaultValue=""
            labelText="Filter clinic histories"
            closeButtonLabelText=""
            placeHolderText="Search by name or document number"
            onChange={(e) => { this.setState({ searchTerm: e.target.value }); }}
          />
          <ClinicHistories
            clinicHistories={clinicHistories}
          />
        </Container>
        <Footer
          labelOne=""
          linkTextOne=""
          linkHrefOne=""
          labelTwo=""
          linkTextTwo=""
          linkHrefTwo=""
          buttonText="New Clinic History"
          onClick={() => Router.push('/clinic-history')}
        />
      </Page>
    );
  }
}

Dashboard.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;


export default Dashboard;
