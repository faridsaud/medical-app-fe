import React, { Component } from 'react';
import styled from 'styled-components';
import { Search } from 'carbon-components-react';
import Router from 'next/router';
import Page from '../components/commons/Page/Page';
import ClinicHistories from '../components/commons/Table/ClinicHistories';
import RestServices from '../services/rest';
import Footer from '../components/commons/Footer/Footer';

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

  filterClinicHistories = (clinicHistories = [], searchTerm = '') => {
    if(!searchTerm){
      return clinicHistories;
    }
    return clinicHistories && clinicHistories.filter(({patient}) => {
      const fullName = `${patient.firstName || ''} ${patient.lastName || ''}`.toLowerCase();
      const documentNumber = `${patient.documentNumber || ''}`.toLowerCase();
      return fullName.includes(searchTerm) || documentNumber.includes(searchTerm);
    });
  };


  render() {
    const { clinicHistories, searchTerm } = this.state;
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
            clinicHistories={this.filterClinicHistories(clinicHistories, searchTerm)}
          />
        </Container>
        <Footer
          primaryAction={{
            label: 'New Clinic History',
            onClick: () => Router.push('/clinic-history')
          }}
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
