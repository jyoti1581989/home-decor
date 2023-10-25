import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import * as itemsAPI from "../../utilities/items-api"

export default function SeasonItemPage() {
    const { season } = useParams()
    const [decorItems, setDecorItems] = useState([])

    // The empty dependency array causes the effect
    // to run ONLY after the FIRST render
    useEffect(function () {
        async function getItems() {
            const items = await itemsAPI.getAll()
            console.log(items)
            setDecorItems(items)
        }
        getItems()
    }, [])

    return (<div class="container">
        <ItemList seasonItems={decorItems.filter(item => item.category.name.toLowerCase() === season)}>
        </ItemList>
    </div>)

}