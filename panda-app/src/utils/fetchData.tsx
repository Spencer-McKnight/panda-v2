import { Action } from "types/types";

const fetchData: () => Promise<Action> = () => {
    return fetch("https://inlight-panda-rescue-api.herokuapp.com/donations?apiKey=cr2eJJDmDK94NgbaPL8Z")
        .then(res => res.json())
        .then((result) => {
            if (result.hasOwnProperty("error")) {
                const failObj: Action = { type: "failure", errorMsg: result.error };
                return failObj
            } else {
                const doneObj: Action = { type: "success", dataset: result };
                return doneObj;
            }
        })
}

export default fetchData;