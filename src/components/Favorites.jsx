import { Row, Col } from 'react-bootstrap';
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux';



const Favorites = () => {
    const favo = useSelector(state => state.pref.content);
    const dispatch = useDispatch();

    console.log(favo)



    return (
        <Row>
            <Col sm={12}>
                {favo.length == 0 ? (
                    <h2>Nessun elemento selezionato</h2>
                ) : (
                    <ul style={{ listStyle: 'none' }}>
                        {favo?.map((work, i) => (
                            <li key={i} className="my-4">
                                <Row
                                    className="mx-0 mt-3 p-3"
                                    style={{ border: '1px solid #00000033', borderRadius: 4 }}
                                >
                                    <Col xs={1}>
                                        <StarFill color="gold"
                                            size={25}
                                            className="mx-1"
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_PREF",
                                                    payload: i,
                                                })
                                            }
                                        />
                                    </Col>
                                    <Col xs={8}>
                                        <p>{work}</p>
                                    </Col>
                                </Row>
                            </li>
                        ))}
                    </ul>
                )}
            </Col>
        </Row>
    );
};

export default Favorites;