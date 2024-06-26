const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        
        naves: [], // Se inicializa como un array vacío para cargar desde la API
        message: "Inicial desde Flux",
        favorite: []
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
        }
      }
    };
  };
  
  export default getState;
  