import {faker} from "@faker-js/faker";

export function getAdverts() {
    // {
    //   id: i.toString(),
    //       image: faker.image.nightlife(),
    //     title: 'Masshouse presents: Heavy K The DrumBoss',
    //     description: faker.lorem.paragraph(5),
    //     date: faker.date.soon(15),
    //     price: faker.commerce.price(0,100),
    //     location: faker.address.cityName(),
    //
    // }

    let list = [];
    for (let i = 0; i < 2; i++) {
        list.push({
            id: i.toString(),
            image: faker.image.urlLoremFlickr({category: 'clouds', width: 500, height: 500}),
            title: faker.company.name(),
            description: faker.lorem.paragraph(5),
            date: faker.date.soon({days: 15}),
            price: faker.commerce.price({min: 0, max: 100, symbol: '€'}),
            location: faker.location.city(),
            venue: 'Venue ' + i,
            hostAvatar: faker.image.avatar(),
            hostName: faker.company.name()
        })
    }
    return list
}

export function getPopular() {
    let list = [];
    for (let i = 0; i < 7; i++) {
        let location = faker.location;
        list.push({
            id: i.toString(),
            title: faker.company.name(),
            description: faker.lorem.paragraph(5),
            poster: faker.image.urlLoremFlickr({width: 500, height: 500, category: 'poster'}),
            date: faker.date.soon({days: 7, refDate: Date.now().toString()}),
            EndingTime: 'Midnight',
            venueInSys: false,
            venue: {
                id: i.toString(), name: faker.company.name(), address: {
                    street_address: faker.location.streetAddress(),
                    city: faker.location.city(),
                    country: location.country(),
                    district: location.state(),
                    zipCode: location.zipCode(),
                    locationLink: 'google.com/maps',
                },
            },
            options: [{
                name: '', price: 50, available: 100, initial: 150,
            }, {
                name: '', price: 100, available: 50, initial: 70,
            }, {
                name: '', price: 200, available: 6, initial: 50,
            }]
        })
    }
    return list;
}