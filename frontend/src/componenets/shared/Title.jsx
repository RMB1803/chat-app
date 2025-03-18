import React from 'react'

const Title = ({title="Chat App", description}) => {
  return (
    <div>
      <title>{title}</title>
      <meta name="description" content={description} />
    </div>
  )
}

export default Title
