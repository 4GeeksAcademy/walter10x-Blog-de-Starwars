const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        
        naves: [], // Se inicializa como un array vacío para cargar desde la API
        message: "Inicial desde Flux",
        favorite: [],
        characters: [],
        favoriteCharacter:[],
        info:[],
        planets:[],
        favoritePlanets:[]
      },
      actions: {
        // Carga de datos desde una API externa (ejemplo con Star Wars API)
        loadSomeData: () => {
          fetch("https://swapi.dev/api/starships")
            .then((response) => response.json())
            .then((data) => {
              // Almacena los resultados de la API en el store
              setStore({ naves: data.results });
            })
            .catch((error) => console.error("Error fetching starships:", error));
        },
        // Agrega una nave a la lista de favoritos
        addFavorite: (title) => {
          const store = getStore();
          if (!store.favorite.includes(title)) {
            setStore({ favorite: [...store.favorite, title] });
          }
        },
        // Elimina una nave de la lista de favoritos
        removeFavorite: (title) => {
          const store = getStore();
          if (store.favorite.includes(title)) {
            setStore({ favorite: store.favorite.filter((nave) => nave !== title) });
          }
        },  

        //Get para obtener los character 
        getCharacter: () => {
          fetch("https://swapi.dev/api/people")
            .then((response) => response.json())
            .then((data) => {
              setStore({ characters: data.results });
            })
            .catch((error) => console.error("Error fetching characters:", error));
        },
  
        addFavoriteCharacter: (name) => {
          const store = getStore();
          if (!store.favoriteCharacter.includes(name)) {
            setStore({ favoriteCharacter: [...store.favoriteCharacter, name] });
          }
        },
  
        removeFavoriteCharacter: (name) => {
          const store = getStore();
          if (store.favoriteCharacter.includes(name)) {
            setStore({ favoriteCharacter: store.favoriteCharacter.filter((char) => char !== name) });
          }
        },
     // Acción para obtener planetas
     getPlanets: () => {
      fetch("https://swapi.dev/api/planets")
        .then((response) => response.json())
        .then((data) => {
          setStore({ planets: data.results });
        })
        .catch((error) => console.error("Error fetching planets:", error));
    },

    // Acción para añadir planetas favoritos
    addFavoritePlanet: (name) => {
      const store = getStore();
      if (!store.favoritePlanets.includes(name)) {
        setStore({ favoritePlanets: [...store.favoritePlanets, name] });
      }
    },
    removeFavoritePlanet: (name) => {
      const store = getStore();
      if (store.favoritePlanets.includes(name)) {
        setStore({ favoritePlanets: store.favoritePlanets.filter((planet) => planet !== name) });
      }
    }

      },
    };
  };
  export default getState;
  