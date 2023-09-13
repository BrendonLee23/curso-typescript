//Tipar usando tipos primitivos é bem simples, mas a tarefa começa a se tornar um pouco mais complicada quando objetos começam a aparecer.
//Tipe o objeto e função a seguir.

/* const game = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games = [game];

function play(game){
    // runs the game
    console.log(game);
} */

// Resolução:

const game: 
{
    id: number,
    platform:{
        id: number,
        name: string
    },
    title: string,
    publisher: string,
    launch?: string | Date
} = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games: {
    id: number,
    platform:{
        id: number,
        name: string
    },
    title: string,
    publisher: string,
    launch?: string | Date
}[] = [game];

function play(game:{
    id: number,
    platform:{
        id: number,
        name: string
    },
    title: string,
    publisher: string,
    launch?: string | Date
}){
    // runs the game
    console.log(game);
}
