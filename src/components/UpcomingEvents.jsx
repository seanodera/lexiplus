import React from "react";
import {Col, Row} from "react-bootstrap";
import {monthStringShort} from "../podo/utils";

const UpcomingEvents = ({upcoming}) => {
    let date0 = new Date(0);
    let date1 = new Date(0);
    let date2 = new Date(0);

    date0.setUTCSeconds(upcoming[0].date)

    date1.setUTCSeconds(upcoming[1].date)

    date2.setUTCSeconds(upcoming[2].date)
    // TODO: create small screen version
    return (<Row className={'gx-0'} style={{
        aspectRatio: '2.2',

    }}>
        <Col md={'8'} className={'landingGradient'} style={{
            backgroundImage: `url("${upcoming[0].poster}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            objectFit: 'contain',

        }}>
            <div className={'upcomingGradient d-flex flex-column justify-content-end px-3'}>
                <p>{`${monthStringShort(date0.getMonth())} ${date0.getDate()}, ${date0.getFullYear()}`}</p>
                <h3 className={'text-white'}>{upcoming[0].name}</h3>
                <p className={'limitLines-2'}>{upcoming[0].description}</p>
            </div>
        </Col>
        <Col className={''}>
            <div className={'h-50 bg-primary'} style={{
                backgroundImage: `url("${upcoming[1].poster}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'contain',
            }}>
                <div className={'upcomingGradient d-flex flex-column justify-content-end px-2'}>
                    <p>{`${monthStringShort(date1.getMonth())} ${date1.getDate()}, ${date1.getUTCFullYear()}`}</p>
                    <h3 className={'text-white'}>{upcoming[1].name}</h3>
                </div>
            </div>
            <div className={'h-50 bg-danger'} style={{
                backgroundImage: `url("${upcoming[2].poster}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'contain',
            }}>
                <div className={'upcomingGradient d-flex flex-column justify-content-end px-2'}>
                    <p>{`${monthStringShort(date2.getMonth())} ${date2.getDate()}, ${date2.getUTCFullYear()}`}</p>
                    <h3 className={'text-white'}>{upcoming[2].name}</h3>

                </div>
            </div>
        </Col>
    </Row>)
}

export default UpcomingEvents