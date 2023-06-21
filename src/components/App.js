import List from "./todo/List";
import {Route, Routes} from "react-router-dom";
import ToDoListRouter from "./todo/Router";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/todo/*' element={<ToDoListRouter/>}/>
            </Routes>
        </div>
    );
}

export default App;
