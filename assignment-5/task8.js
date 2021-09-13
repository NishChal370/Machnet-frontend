/*From array: details
Create an array of pokemon trainers that has only 2 pokemons and has a pokemon with yellow color
*/

  const details = [
    {
      name: 'Ram',
      pokemons: [
        {
          name: 'pikachu',
          color: 'yellow',
        },
        {
          name: 'charmendar',
          color: 'red',
        },
      ],
    },

    {
      name: 'Shyam',
      pokemons: [
        {
          name: 'Squirtel',
          color: 'blue',
        },
        {
          name: 'charmendar',
          color: 'red',
        },
        {
          name: 'bulbasaur',
          color: 'green',
        },
      ],
    },

    {
      name: 'hari',
      pokemons: [     
        {
          name: 'bulbasaur',
          color: 'green',
        },
        {
          name: 'pikachu',
          color: 'yellow',
        },
      ],
    },
  ];

  let newArray=[];
  details.forEach((data)=>{
    if(data.pokemons.length === 2){

      data.pokemons.forEach(({color})=>{
        if(color === 'yellow'){
          newArray.push(data);
        }

      });

    };
  });

console.log([newArray]);