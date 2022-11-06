import React, {useState} from "react"
import EmailsList from "./EmailsList"
import NewEmailForm from "./NewEmailForm"
import CsvDisplayer from "./CsvDisplayer"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"

const ViewManager = () => {
  const [emails, setEmails] = useState<Array<string>>([])

  const onDeleteEmail = (deleteEmail: string) => {
    setEmails(emails.filter((email) => email !== deleteEmail))
  }

  const onCreateEmail = (newEmail: string) => {
    if (emails.find(email => email === newEmail) !== undefined) {
      return
    }
    setEmails([...emails, newEmail])
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Challenge 2</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Created by: Eduardo Escobar
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <EmailsList emails={emails} onDelete={onDeleteEmail} />
            <NewEmailForm emails={emails} onCreate={onCreateEmail} />
          </Col>
          <Col>
            <CsvDisplayer emails={emails} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ViewManager