
function AlertMessenger(props) {

  const { messageContent, statusCode } = props

  return (
    <>
    {(statusCode >= 200 && statusCode < 300) &&
      <div className="alert alert-success" role="alert">
        { messageContent }
      </div>
    }
    {(statusCode < 200 || statusCode >= 300) &&
      <div className="alert alert-danger" role="alert">
        { messageContent }
      </div>
    }
    </>
  )
}

AlertMessenger.propTypes

export default AlertMessenger