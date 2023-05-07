const books = [
    {    
        id: 1,    
        title: "Harry Potter and the Philosopher's Stone",    
        reviews: [      
            {        
                id: 1,        
                comment: 'Nice'      
            },      
            {        
                id: 2,        
                comment: 'The best book ever'      
            }    
        ]
    },
    {
        id: 2,
        title: 'The Game of Thrones',
        reviews: [
          {
            id: 1,
            comment: "I loved GOT. An absolute masterpiece"
          },
          {
            id: 2,
            comment: "It feels like you are in another world. I recommend it"
          }
        ]
    },
    {
        id: 3,
        title: 'The Green Mile',
        reviews: [
          {
            id: 1,
            comment: "One of King's best"
          },
          {
            id: 2,
            comment: "Loved the movie, loved the book!"
          }
        ]
    },
];

module.exports = books;