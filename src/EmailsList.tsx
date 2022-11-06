import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Badge from "react-bootstrap/Badge"

import "./EmailsList.css"

type Props = {
  emails: Array<string>
  onDelete: (email: string) => void
}

const Emails: React.FC<Props> = ({emails, onDelete}) => {
  return (
    <ListGroup>
      {emails.map(email => {
        return (
          <ListGroup.Item key={email}>
            {email}
            <Badge onClick={() => onDelete(email)} bg="danger" pill>
              X
            </Badge>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

const EmptyState: React.FC = () => {
  return (
    <div className="empty-state">
      <p>There are no elements to show.</p>
    </div>
  )
}

const EmailsList: React.FC<Props> = ({emails, onDelete}) => {
  return (
    <>
      <h2 className="text-center">Created emails</h2>
      {emails.length > 0 ? <Emails emails={emails} onDelete={onDelete} /> : <EmptyState /> }
    </>
  )
}

export default EmailsList



