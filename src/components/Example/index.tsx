import React from 'react'
import { useSelector } from 'react-redux'
import { ApplicationState } from "../../store/index"
import * as action from "../../store/ducks/example/actions"

const Index: React.FC = ()  => {

    const loading = useSelector<ApplicationState>(state => state.example.loading);

    return (
        <>
            <button 
                onClick={() => action.example(!loading)}
            >
                Clique Aqui
            </button>
            {loading ? "VERDADEIRO" : "FALSO"}
        </>
    )
}

export default Index
