const movieList ={
  "movies": [
    {
      "id": 1,
      "title": "The Shining",
      "year": 1980,
      "runtime": "146 minutes",
      "cast": ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
      "director": "Stanley Kubrick",
      "plot": "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
    },
    {
      "id": 2,
      "title": "Psycho",
      "year": 1960,
      "runtime": "109 minutes",
      "cast": ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
      "director": "Alfred Hitchcock",
      "plot": "A secretary goes on the run after stealing money from her employer and checks into a secluded motel run by a young man under the domination of his mother."
    },
    {
      "id": 3,
      "title": "The Exorcist",
      "year": 1973,
      "runtime": "122 minutes",
      "cast": ["Ellen Burstyn", "Max von Sydow", "Linda Blair"],
      "director": "William Friedkin",
      "plot": "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter. The battle between good and evil ensues."
    },
    {
      "id": 4,
      "title": "Halloween",
      "year": 1978,
      "runtime": "91 minutes",
      "cast": ["Donald Pleasence", "Jamie Lee Curtis", "Tony Moran"],
      "director": "John Carpenter",
      "plot": "Fifteen years after murdering his sister on Halloween night, a deranged serial killer escapes from a mental hospital and returns to his hometown to wreak havoc."
    },
    {
      "id": 5,
      "title": "A Nightmare on Elm Street",
      "year": 1984,
      "runtime": "91 minutes",
      "cast": ["John Saxon", "Heather Langenkamp", "Johnny Depp"],
      "director": "Wes Craven",
      "plot": "In the dreams of his victims, a supernatural killer named Freddy Krueger stalks and murders teenagers, causing their deaths in the real world as well."
    },
    {
      "id": 6,
      "title": "The Texas Chain Saw Massacre",
      "year": 1974,
      "runtime": "83 minutes",
      "cast": ["Marilyn Burns", "Gunnar Hansen", "Edwin Neal"],
      "director": "Tobe Hooper",
      "plot": "Two siblings and their friends encounter a family of cannibalistic psychopaths while visiting their grandfather's grave in Texas."
    },
    {
      "id": 7,
      "title": "Night of the Living Dead",
      "year": 1968,
      "runtime": "96 minutes",
      "cast": ["Duane Jones", "Judith O'Dea", "Karl Hardman"],
      "director": "George A. Romero",
      "plot": "A group of people hide from bloodthirsty zombies in a farmhouse during the night of the living dead."
    },
    {
      "id": 8,
      "title": "Rosemary's Baby",
      "year": 1968,
      "runtime": "136 minutes",
      "cast": ["Mia Farrow", "John Cassavetes", "Ruth Gordon"],
      "director": "Roman Polanski",
      "plot": "A young couple moves into an apartment in New York City, only to be surrounded by peculiar neighbors and occurrences. As the wife becomes pregnant, paranoia and supernatural occurrences begin to consume her."
    },
    {
      "id": 9,
      "title": "Alien",
      "year": 1979,
      "runtime": "117 minutes",
      "cast": ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
      "director": "Ridley Scott",
      "plot": "After a space merchant vessel receives an unknown transmission, one of the crew members is attacked by a mysterious life form, leading to a desperate struggle for survival against the extraterrestrial creature."
    },
    {
      "id": 10,
      "title": "The Ring",
      "year": 2002,
      "runtime": "115 minutes",
      "cast": ["Naomi Watts", "Martin Henderson", "Brian Cox"],
      "director": "Gore Verbinski",
      "plot": "A journalist investigates a mysterious videotape that seems to cause the death of anyone who watches it within a week. As she delves deeper into the mystery, she uncovers a dark curse linked to the tape."
    },
    {
      "id": 11,
      "title": "Get Out",
      "year": 2017,
      "runtime": "104 minutes",
      "cast": ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
      "director": "Jordan Peele",
      "plot": "A young African-American man visits his white girlfriend's family estate, where he becomes ensnared in a more sinister real reason for the invitation."
    },
    {
      "id": 12,
      "title": "It",
      "year": 2017,
      "runtime": "135 minutes",
      "cast": ["Jaeden Martell", "Bill Skarsgård", "Finn Wolfhard"],
      "director": "Andy Muschietti",
      "plot": "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting creature that disguises itself as a clown and preys on the children of Derry, their small Maine town."
    },
    {
      "id": 13,
      "title": "The Conjuring",
      "year": 2013,
      "runtime": "112 minutes",
      "cast": ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
      "director": "James Wan",
      "plot": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. As they delve into the haunting, they uncover a history of supernatural events and malevolent spirits."
    },
    {
      "id": 14,
      "title": "Hereditary",
      "year": 2018,
      "runtime": "127 minutes",
      "cast": ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
      "director": "Ari Aster",
      "plot": "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and they uncover a terrifying family secret that unravels their sanity."
    },
    {
      "id": 15,
      "title": "A Quiet Place",
      "year": 2018,
      "runtime": "90 minutes",
      "cast": ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
      "director": "John Krasinski",
      "plot": "In a post-apocalyptic world, a family is forced to live in silence while hiding from creatures that hunt by sound. Their survival depends on their ability to communicate without making a sound."
    },
    {
      "id": 16,
      "title": "The Babadook",
      "year": 2014,
      "runtime": "93 minutes",
      "cast": ["Essie Davis", "Noah Wiseman", "Daniel Henshall"],
      "director": "Jennifer Kent",
      "plot": "A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house. As their lives spiral out of control, they must confront the reality of the monster's existence."
    },
    {
      "id": 17,
      "title": "The Witch",
      "year": 2015,
      "runtime": "92 minutes",
      "cast": ["Anya Taylor-Joy", "Ralph Ineson", "Kate Dickie"],
      "director": "Robert Eggers",
      "plot": "In 1630s New England, a family is torn apart by witchcraft, black magic, and possession. As their lives descend into chaos, they must confront their own fears and the evil that haunts them."
    },
    {
      "id": 18,
      "title": "Us",
      "year": 2019,
      "runtime": "116 minutes",
      "cast": ["Lupita Nyong'o", "Winston Duke", "Elisabeth Moss"],
      "director": "Jordan Peele",
      "plot": "A family's serene beach vacation turns into chaos when their doppelgängers appear and begin to terrorize them. As they confront their own dark reflections, they unravel a disturbing truth."
    },
    {
      "id": 19,
      "title": "Midsommar",
      "year": 2019,
      "runtime": "147 minutes",
      "cast": ["Florence Pugh", "Jack Reynor", "William Jackson Harper"],
      "director": "Ari Aster",
      "plot": "A couple travels to Sweden to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult."
    },
    {
      "id": 20,
      "title": "The Conjuring 2",
      "year": 2016,
      "runtime": "134 minutes",
      "cast": ["Vera Farmiga", "Patrick Wilson", "Madison Wolfe"],
      "director": "James Wan",
      "plot": "Paranormal investigators Ed and Lorraine Warren travel to London to help a single mother and her four children haunted by a supernatural entity. As they delve into the haunting, they encounter a malevolent spirit and face their most terrifying case."
    },
    {
      "id": 21,
      "title": "Insidious",
      "year": 2010,
      "runtime": "103 minutes",
      "cast": ["Patrick Wilson", "Rose Byrne", "Ty Simpkins"],
      "director": "James Wan",
      "plot": "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further. As they venture into the spiritual world, they encounter terrifying entities and face a battle for their son's soul."
    }
  ]
}

      
  export default movieList;