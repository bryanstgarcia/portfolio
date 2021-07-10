const getState = ({ getStore, getActions, setStore, setActions }) => {
	return {
		store: {
			hamburguer: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleHamburguer: () => {
				const store = getStore();
				const actions = getActions();
				if (store.hamburguer) {
					setStore({
						hamburguer: false
					});
				} else {
					setStore({
						hamburguer: true
					});
				}
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			}
		}
	};
};

export default getState;
