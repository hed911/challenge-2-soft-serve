import React from "react"

type Props = {
  emails: Array<string>
}

const CsvDisplayer: React.FC<Props> = ({emails}) => {
  return (
    <>
      <h2 className="text-center">CSV output</h2>
      <p>
        {emails.length > 0 ? emails.join(", ") : "There are no elements to show."}
      </p>
    </>
  )
}

export default CsvDisplayer
