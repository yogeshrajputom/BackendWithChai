import express from 'express';
const app = express();

app.get('/', (req, res)=>{
    res.send('Server is Ready  dfed');
});

app.get('/api/jokes',(req, res)=>{
  const jokes =[
    {id:1,
        titel:"A jokes",
        content:"Ek tha chuha or bo chala"
    },
     {id:2,
        titel:"A jokes 2",
        content:"Ek tha chuha or bo chala city ke or"
    },
     {id:3,
        titel:"A jokes 3",
        content:"Ek tha chuha or bo chala or chalta rha"
    },
     {id:4,
        titel:"A jokes 4",
        content:"Ek tha chuha or bo chala or ek bhot mila ushe "
    },
     {id:5,
        titel:"A jokes 5",
        content:"Ek tha chuha or bo chala kiya tha chuha hi to tha"
    },
  ]
  res.send(jokes)
})

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`Server at https://localhost:${port}/`);
})