import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer, Search } from 'carbon-components-react';
import Page from '../components/commons/Page/Page';
import ClinicHistories from '../components/commons/Table/ClinicHistories';
import withAuth from '../hoc/withAuth';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }


  render() {
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
            clinicHistories={[{
              uuid: '1',
              patient: {
                firstName: 'Farid',
                lastName: 'Saud',
                documentNumber: Date.now(),
              },
            }]}
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


export default withAuth(Dashboard);
