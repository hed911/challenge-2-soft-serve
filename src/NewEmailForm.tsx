import React, {useState} from "react"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"

type Props = {
  emails: Array<string>
  onCreate: (email: string) => void
}

const NewEmailForm: React.FC<Props> = ({emails, onCreate}) => {
  const [email, setEmail] = useState<string>("")
  const isValidEmail = /\S+@\S+\.\S+/.test(email)
  const shouldEnableSubmitButton = !emails.includes(email) && isValidEmail
  const shouldEnableResetButton = email !== ""

  const onEmailChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const onSubmitButtonClicked = () => {
    onCreate(email)
    setEmail("")
  }

  const onReset = () => {
    setEmail("")
  }

  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add an email here..." value={email} onChange={(event) => onEmailChanged(event as any)} />
      <Button variant="primary" disabled={!shouldEnableSubmitButton} onClick={() => onSubmitButtonClicked()}>Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger" disabled={!shouldEnableResetButton} onClick={() => onReset()}>Reset</Button>
    </Stack>
  )
}

export default NewEmailForm

