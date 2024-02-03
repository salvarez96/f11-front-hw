import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function CustomButton(props) {
  const {buttonClassVariant, onClick, buttonType, textAid, dataId} = props
  const buttonContent = {
    edit: <FaEdit />,
    delete: <MdDelete />
  }
  return (
    <>
    {dataId && <input type="hidden" name="id" id="dataId" value={dataId} />}
    <button type="button" title={textAid} className={`btn btn-${buttonClassVariant} m-1`} onClick={onClick}>{ buttonContent[buttonType] }</button>
    </>
  )
}

CustomButton.propTypes

export default CustomButton