import React, { useState } from "react";
import axios from "axios";

const initialItem = {
    name: ""
}

const UpdateForm = props => {
    const [item, setItem] = useState(initialItem);

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={}>
                <input
                type="text"
                name="name"
                onChange={}
                placeholder="name"
                value={}
                />
                <button>Update</button>
            </form>
        </div>
    )

}

export default UpdateForm;