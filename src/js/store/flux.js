import { Nave } from "../component/Nave";

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
                    name: "white",
                    initial: "white"
                }
            ],
            naves: [
                {
                    uid: "FIRST",
                    name: "white",
                    initial: "white"
                },
                {
                    uid: "SECOND",
                    name: "white",
                    initial: "white"
                }
            ],
            message:'inicial desde flux',
            favorite:[],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

             changeMessage : (title) => {
                console.log('cambio des la action de fliux la funcion llamada ' + title)
                setStore({
                     message: title });

                     const store = getStore();

                      if (store.favorite.includes(title)){
                        console.log('se encuentra ya  elegido')
                        setStore({
                            favorite: store.favorite.filter((nave)=> nave != title) 
                        });
                      }else{
                          setStore({
                             favorite: [...store.favorite, title] 
                         });
                        console.log('puedes agregar')
                      }

            },
        

             

            loadSomeData: () => {
                console.log('se cargo desde flux');
                fetch('https://swapi.dev/api/starships')
                    .then( (response) => response.json())
                    .then((data) => setStore({ naves: data.results }));
                      
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ 
                    demo: demo 
                });
            }

        }
    };
};

export default getState;