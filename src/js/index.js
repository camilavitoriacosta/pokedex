const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
// const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        // esconder cartão aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto');
        
        const idPokemonSelecionado = pokemon.attributes.id.value;
        const idCartaoPokemonAbrir = 'cartao-'+idPokemonSelecionado;
        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir);
        cartaoPokemonAbrir.classList.add('aberto');
        
        // remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo');
        
        // adicionar a classe ativo no item da lista selecionado 
        pokemon.classList.add('ativo');
    })
});