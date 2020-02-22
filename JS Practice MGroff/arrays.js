const movies = [{
        id: 0,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        metascore: 100,
        stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
    },
    {
        id: 1,
        title: "Star Wars",
        director: "George Lucas",
        metascore: 89,
        stars: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"]
    },
    {
        id: 2,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        metascore: 92,
        stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
    },
    {
        id: 3,
        title: "Terminator 2: Judgement Day",
        director: "James Cameron",
        metascore: 94,
        stars: ["Arnold Schwarzenegger", "Edward Furlong", "Linda Hamilton"]
    },
    {
        id: 4,
        title: "Dumb and Dumber",
        director: "The Farely Brothers",
        metascore: 76,
        stars: ["Jim Carrey", "Jeff Daniels", "Lauren Holly"]
    },
    {
        id: 5,
        title: "Tombstone",
        director: "George P. Cosmatos",
        metascore: 89,
        stars: ["Kurt Russell", "Bill Paxton", "Sam Elliot"]
    }
];

const zooAnimals = [{
        animal_name: "Jackal, asiatic",
        population: 5,
        scientific_name: "Canis aureus",
        state: "Kentucky"
    },
    {
        animal_name: "Screamer, southern",
        population: 1,
        scientific_name: "Chauna torquata",
        state: "Alabama"
    },
    {
        animal_name: "White spoonbill",
        population: 8,
        scientific_name: "Platalea leucordia",
        state: "Georgia"
    },
    {
        animal_name: "White-cheeked pintail",
        population: 1,
        scientific_name: "Anas bahamensis",
        state: "Oregon"
    },
    {
        animal_name: "Black-backed jackal",
        population: 2,
        scientific_name: "Canis mesomelas",
        state: "Washington"
    },
    {
        animal_name: "Brolga crane",
        population: 9,
        scientific_name: "Grus rubicundus",
        state: "New Mexico"
    },
    {
        animal_name: "Common melba finch",
        population: 5,
        scientific_name: "Pytilia melba",
        state: "Pennsylvania"
    },
    {
        animal_name: "Pampa gray fox",
        population: 10,
        scientific_name: "Pseudalopex gymnocercus",
        state: "Connecticut"
    },
    {
        animal_name: "Hawk-eagle, crowned",
        population: 10,
        scientific_name: "Spizaetus coronatus",
        state: "Florida"
    },
    {
        animal_name: "Australian pelican",
        population: 5,
        scientific_name: "Pelecanus conspicillatus",
        state: "West Virginia"
    }
];

let bankRoll = 305225;
console.log(movies)

function deposit(amount, num) {
    let balance = bankRoll += amount;
    let greeting = `your balance for account number:${num} is `;
    bankRoll = balance;
    return (`${greeting}" "${bankRoll}`)
}

function withdraw(amount, num) {
    let balance = bankRoll -= amount;
    let greeting = `your balance for account number:${num} is `;
    bankRoll = balance;
    return (`${greeting}" "${bankRoll}`)
}