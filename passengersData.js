const passengersData = [
    {
        name: 'Hakan Yarman',
        destination: 'Hatay',
        id: 0,
    },
    {
        name: 'Emre Yılmaz',
        destination: 'İstanbul',
        id: 1,
    },
    {
        name: 'Eren Yıldırım',
        destination: 'Ankara',
        id: 2,
    },
    {
        name: 'Mehmet Şimşek',
        destination: 'Antalya',
        id: 3,
    },
    {
        name: 'Furkan Demir',
        destination: 'Adana',
        id: 4,
    }
]

function addPassenger(passenger) {
    passengersData.push(passenger);
}

module.exports = { passengersData, addPassenger };

