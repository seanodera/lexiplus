import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {monthStringShort} from "../podo/utils";
import {IoAlertCircleOutline} from "react-icons/io5";
import {Avatar, ListItem, ListItemAvatar, ListItemIcon, ListItemText} from "@mui/material";


export function HomeAdMobile({advert}){

    let date = new Date(advert.date);

    return (<div className={'mobileOnly'} style={{
        backgroundImage: `url("${advert.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
        <div className={'landingGradient'}>
            <Container fluid
                       style={{
                           width: "100vw", height: '100vh',
                           backdropFilter: 'blur(0px)',
                           WebkitBackdropFilter: 'blur(0px)',
                       }}
                       className=' px-3 customCenter'>
                <div className={'w-50 justify-content-center'}>
                    <div className={'d-flex flex-row flex-fill justify-content-center'}>
                        <div className={'border-5 border-secondary px-1 pt-1 mb-2 text-center'}>
                            <h1 className={'text-primary blendText'}>{date.getDate()}</h1>
                            <h3 className={'text-primary mix-blend-difference'}>{monthStringShort(date.getMonth())}</h3>
                        </div>
                    </div>

                    <h1 className={'text-primary'}>{advert.title}</h1>
                    <p className={'limitLines'}>{advert.description}</p>
                    <div className={'d-flex flex-row flex-fill justify-content-center'}>
                        <Button variant={'secondary me-1'}>
                            Reserve
                        </Button>
                        <Button variant={'outline-primary ms-1'}>
                            Event Details
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    </div>)
}


export function HomeAd({advert}) {
    let date = new Date(advert.date);

    return (    <section className={'desktopOnly'} style={{
        background: `url("${advert.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
        <section style={{
            backgroundColor: 'transparent',
            // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            webkitBackdropFilter: 'blur( 20px )',
            backdropFilter: 'blur(20px)',
        }}>
            <section className={'landingGradient'}>
                <Container fluid className='py-5 px-5'>
                    <Row>
                        <Col className={'justify-content-center customCenter'}>
                            <div className={'ps-5 justify-content-center'}>
                                <div className={'d-flex flex-row flex-fill justify-content-center'}>
                                    <div className={'border-5 border-secondary px-1 pt-1 mb-2 text-center'}>
                                        <h1 className={'text-primary blendText'}>{date.getDate()}</h1>
                                        <h3 className={'text-primary mix-blend-difference'}>{monthStringShort(date.getMonth())}</h3>
                                    </div>
                                </div>

                                <h1 className={'text-primary'}>{advert.title}</h1>
                                <p className={'limitLines'}>{advert.description}</p>
                                <div className={'d-flex flex-row flex-fill justify-content-center'}>
                                    <Button variant={'secondary me-1'}>
                                        Reserve
                                    </Button>
                                    <Button variant={'outline-primary ms-1'}>
                                        Event Details
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col>

                            <Container style={{
                                width: '35vw',

                            }}>
                                <img src={advert.image} alt='advert' style={{
                                    width: '35vw',
                                    height: '35vw'
                                }}/>
                                <Container className={'bg-body px-0'} style={{width: '35vw'}}>
                                    {/*<li className="flex justify-between gap-x-6 py-5">*/}
                                    {/*    <div className="flex min-w-0 gap-x-4">*/}
                                    {/*        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={advert.hostAvatar} alt=""/>*/}
                                    {/*        <div className="min-w-0 flex-auto">*/}
                                    {/*            <p className="text-sm font-semibold leading-6 text-gray-900">{advert.hostName}</p>*/}
                                    {/*            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{advert}</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    <ListItem className='px-1 mx-0 bg-dark text-primary' style={{
                                        width: '35vw',
                                        // display: 'inline-flex'
                                    }}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={advert.hostAvatar} alt='cover profile' style={{objectFit: 'cover'}}/>
                                            </Avatar>

                                        </ListItemAvatar>
                                        <ListItemText  primary={advert.hostName}
                                                      secondary={advert.venue}
                                                       secondaryTypographyProps={{className: 'text-secondary'}}
                                        />

                                        <ListItemIcon>
                                            <IoAlertCircleOutline className={'text-primary'}/>
                                        </ListItemIcon>
                                    </ListItem>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>

        </section>
    </section>)
}

export default HomeAd;