
function AlertMessenger(props) {

  const { messageContent, statusCode } = props

  return (
    <>
    {(statusCode >= 200 && statusCode < 300) &&
      <div className="alert alert-success my-3" role="alert">
        { messageContent }
      </div>
    }
    {(statusCode < 200 || statusCode >= 300) &&
      <div className="alert alert-danger my-3" role="alert">
        { messageContent }
      </div>
    }
    {!messageContent && statusCode >= 500 &&
      <div className="alert alert-danger my-3" role="alert">
        Error de conexión, intente de nuevo por favor.
      </div>
    }
    </>
  )
}

AlertMessenger.propTypes

export default AlertMessenger