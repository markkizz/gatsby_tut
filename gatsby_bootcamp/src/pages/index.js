import React, { useState } from "react"
import Collapse from '@bit/mui-org.material-ui.collapse'
import { Button, Row } from "antd"
import { Link } from "gatsby"

import Layout from "../components/DefaultLayout"
import "../styles/index.scss"

const IndexPage = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Layout>
      <h1>Hello.</h1>
      <Button type="primary" onClick={() => setChecked(!checked)}>Click</Button>
      <h2>I'm Mark, a full-stack developer living in beautiful Bangkok.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Collapse in={checked}>
        testtest collapse
      </Collapse>
    </Layout>
  )
}

export default IndexPage
