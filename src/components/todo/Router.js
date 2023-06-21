import {Route,Routes} from "react-router-dom";
import List from "./List";
import Edit from "./Edit";

export default function ToDoListRouter() {
    return(
        <Routes>
            <Route path='/' element={<List />} />
            {/*<Route path='/new' element={<New />} />*/}
            {/*<Route path='/:id' element={<Full />} />*/}
            <Route path='/:id/edit' element={<Edit />} />
        </Routes>
    )
}
