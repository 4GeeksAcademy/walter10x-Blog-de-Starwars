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
            ]
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                console.log('se cargo desde flux');
                fetch('https://www.swapi.tech/api/starships')
                    .then((response) => response.json())
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
                setStore({ demo: demo });
            },
           /*  fetchStarshipDetails: (naveId) => {
                fetch(`https://www.swapi.tech/api/starships/9`)
                    .then((response) => response.json())
                    .then((data) => {
                        const starshipDetails = data.result.properties;
                        setStarship(starshipDetails);
                    })
                    .catch((error) => console.error('Error fetching starship details:', error));
            } */
        }
    };
};

export default getState;