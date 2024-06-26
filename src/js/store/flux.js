const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        demo: [
          {
            title: "FIRST",
            background: "white",
            initial: "white"
          },
          {
            title: "SECOND",
            background: "white",
            initial: "white"
          }
        ],
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
  
        // Cambia el mensaje almacenado en el store
        changeMessage: (title) => {
          console.log('Cambio desde la acción de Flux llamada ' + title);
          setStore({ message: title });
  
          const store = getStore();
  
          if (store.favorite.includes(title)) {
            console.log('Ya está marcado como favorito');
            setStore({ favorite: store.favorite.filter((nave) => nave !== title) });
          } else {
            console.log('Se puede agregar como favorito');
            setStore({ favorite: [...store.favorite, title] });
          }
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
  