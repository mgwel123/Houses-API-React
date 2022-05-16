import React, { useState } from 'react';

export const NewHouseForm = (props) => {
    const [ name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addNewHouse({name});
            setName('');
        }else {
            console.log('invalid input');
        }
    }

    return (
        <div class="new-house-form">
            <h1>Add a New House</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="New House Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type="submit">Add House</button>
            </form>
        </div>
    )
}