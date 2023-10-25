import { useParams } from "react-router-dom"
export default function SeasonItemPage() {
    const { season } = useParams()
    return (<div class="container">
        <ItemList></ItemList>

    </div>)

}