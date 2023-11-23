import {useEffect, useState} from "react";
import {getAdverts, getPopular} from "../podo/ticketData";
import {Carousel, CarouselItem, Col, Container, Row} from "react-bootstrap";
import HomeAd, {HomeAdMobile} from "../components/HomeAd";
import Poster from "../components/poster";
import UpcomingEvents from "../components/UpcomingEvents";
import LoadingScreen from "../components/LoadingScreen";


export default function HomeScreen() {
    const [ads, setAds] = useState(getAdverts);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    useEffect(function () {
        setAds(getAdverts());
        let pop = getPopular();
        setPopular(pop);
        setUpcoming(pop);
    }, [])
    return (<>
        <Carousel>
            {ads.map((_advert, index) => (<CarouselItem key={index}>
                <HomeAd  advert={_advert}/>
                <HomeAdMobile advert={_advert}/>
            </CarouselItem>))}
        </Carousel>


        {/*//popular section*/}
        <section>
            <Container className={'py-3'}>
                <h2 className={'text-primary'}>
                    Popular Events
                </h2>

                <div className={'overflow-x-scroll'}>
                    <Row className={'gy-2 flex-nowrap'}>
                        {popular.map((_event, index) => (<Col xs={'12'} sm={'6'}  md={'4'} lg={'6'} xl={'4'} xxl={'3'}>
                            <Poster key={index} event={_event}/>
                        </Col>))}
                    </Row>
                </div>
            </Container>
        </section>

    {/*  upcoming section  */}
        <Container className={'py-3'}>
            <h2 className={'text-secondary text-center mb-3'}>Upcoming Events</h2>
            {(upcoming.length < 3)? <div><LoadingScreen/></div> : <UpcomingEvents upcoming={upcoming}/>}

        </Container>
    </>)
}