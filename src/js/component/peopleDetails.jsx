import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const PeopleDetails = () => {
const {store, actions} = useContext(Context)
    const params = useParams()

    useEffect(()=>{
        actions.loadPerson(params.uid)
    },[])

return (
    <div className="container">
        {
            store.person?.properties?
                <>
                    <h2>{store.person?.properties?.name}</h2>
                    <p>Height: {store.person?.properties?.height}</p>
                    <p>Mass: {store.person?.properties?.mass}</p>
                    <p>Skin Color: {store.person?.properties?.skin_color}</p>
                    <p>Hair Color: {store.person?.properties?.hair_color}</p>
                </>
                :
                <h2>Gathering The Force...</h2>

        }
    </div>
)

}