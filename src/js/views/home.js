import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peopleCard.jsx";


export const Home = () => {

	const {store, actions} = useContext(Context);

	return(
	<div className="text-center mt-5">
		<div className="row">
			{store.people?.map(el=><PeopleCard 
				key={el.uid}
				img={el.img}
				name={el.name}
				uid={el.uid}
			/>)}
		</div>
	</div>

);
};

