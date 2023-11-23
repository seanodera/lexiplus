import {Button, Card} from "react-bootstrap";
import {dayStringShort, monthStringShort} from "../podo/utils";

export default function Poster({event}) {
    let date = event.date;
    return (<Card className={'w-100 h-100 glassEffect text-primary'}>
        <Card.Img src={event.poster} variant={'top'}/>

        <Card.Body className={'px-1 mx-0'}>
            <h4 className={' fw-bolder text-secondary mb-1'}>{dayStringShort(date.getDay())}, {date.getDate()} {monthStringShort(date.getMonth())}</h4>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text className={'limitLines'}>{event.description}</Card.Text>

        </Card.Body>

        <Button size="small" variant={'secondary'}>
            Buy
        </Button>

    </Card>)
}