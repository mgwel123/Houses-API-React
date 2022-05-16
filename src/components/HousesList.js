import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesAPI';
import { NewHouseForm } from './NewHouseForm';

export class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount () {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    addNewHouse = async (newHouse) => {
        await housesApi.put(newHouse);
        this.fetchHouses();
    };

    deleteHouse = async (houseId) => {
        await housesApi.delete(houseId);
        this.fetchHouses();
    };

    render() {
        return (
            <>
                <NewHouseForm />
                <div className="house-list">
                    {this.state.houses.map((house) => (
                        <House
                            house={house}
                            key={house._id}
                            updateHouse={this.updateHouse}
                        />
                    ))}
                </div>
            </>
            
        )
    }
}