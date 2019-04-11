import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>Still Here?</h1>
      <h3>
        I embedded a link to my GitHub in the navbar icon on the right.
      </h3>
      <Lorem />
    </Content>
  </Layout>
)