import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getWorksAction } from '../redux/actions';


const CompanySearchResults = () => {
  const params = useParams()
  const dispatch = useDispatch();
	const worksFromReduxStore = useSelector(state => state.works.workList);



  useEffect(() => {
    dispatch(getWorksAction(params.companyName))
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          {worksFromReduxStore.map((jobData, i) => (
            <Job key={jobData._id} data={jobData} i={i}/>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
