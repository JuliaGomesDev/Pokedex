const listSelectionPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('card-pokemon')
 
listSelectionPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cardPokemonOpen = document.querySelector('.open')
        
        cardPokemonOpen.classList.remove('open')

        const idPokemonSelected = pokemon.attributes.id.value

        const cardPokemonForOpen = document.getElementById('card-' + idPokemonSelected)
        cardPokemonForOpen.classList.add('open')

        const pokemonListingActive = document.querySelector('.active')
        pokemonListingActive.classList.remove('active')

        const pokemonListingSelected = document.getElementById(idPokemonSelected)
        pokemonListingSelected.classList.add('active')       
    })
})

