import {useQuery} from 'react-query'
import axios from 'axios'
const theFetchRequest = () => {
    return axios.get("http://localhost:3000/liveScores")
}
 export const useFetchLiveScore = () => {
return useQuery("fetchLiveScores", theFetchRequest)

 }