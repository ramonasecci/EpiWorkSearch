import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch,useSelector } from 'react-redux';
import { addToPrefAction, removeFromPrefAction } from '../redux/actions';



const Job = ({ data, i }) => {

  const [selected, setSelected] = useState(true);
  const dispatch = useDispatch()
  console.log(useSelector(state => state.pref.content))


  const handleSetSelected = () => {
    selected ? setSelected(false) : setSelected(true)
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={1} onClick={handleSetSelected}>
        {selected ? <Star color="gold"
          size={25}
          className="mx-1"
          onClick={() =>
            dispatch({
              type: "ADD_TO_PREF",
              payload: data.title
            })
          }
        /> : <StarFill color="gold"
          size={25}
          className="mx-1"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_PREF",
              payload: i,
            })
          }
        />}
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>

  )

}

export default Job
