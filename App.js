import React from "react";
import ReactDOM from "react-dom/client";

const App=()=>{
    return (
        <div>
            <form>
                
                <label> Enter Pincode<input type="number" placeholder="Pincode"/></label>
            </form>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
