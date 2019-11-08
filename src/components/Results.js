import React from 'react';
import {
    Container,
    Row,
    Table,
} from 'react-bootstrap';

const Results = () => (
    <Container>
        <Row>
            <h2>Results list</h2>
        </Row>
        <Row>
            <Table striped bordered hover size='sm'>
                <thead className='table-primary'>
                <tr>
                    <th>Chemical</th>
                    <th className="text-center">Rank</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <h5>Some Chemical</h5>
                        <h6 className='text-muted'>
                            50-50-50 | <a href="http://comptox.epa.gov/dashboard/DTXSID7044554">DTXSID7044554</a>
                        </h6>
                    </td>
                    <td><h4 className="text-center">1.8</h4></td>
                </tr>
                <tr>
                    <td>
                        <h5>Some Other Chemical</h5>
                        <h6 className='text-muted'>
                            50-50-50 | <a href="http://comptox.epa.gov/dashboard/DTXSID7044554">DTXSID7044554</a>
                        </h6>
                    </td>
                    <td><h4 className="text-center">1.4</h4></td>
                </tr>
                <tr>
                    <td>
                        <h5>Yet Another Chemical</h5>
                        <h6 className='text-muted'>
                            50-50-50 | <a href="http://comptox.epa.gov/dashboard/DTXSID7044554">DTXSID7044554</a>
                        </h6>
                    </td>
                    <td className="ali"><h4 className="text-center">1.2</h4></td>

                </tr>
                </tbody>
            </Table>
</Row>

    </Container>


);

export default Results;