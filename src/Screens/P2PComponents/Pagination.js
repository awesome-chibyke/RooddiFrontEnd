import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginations = () => {
    return (
        <>
            <div className="row" style={{marginTop: '2rem'}}>
                <div className="col">
                    <Pagination style={{float: 'right'}}>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active style={{backgroundColor: ''}}>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item >{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item >{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </>
    )
}

export default Paginations
