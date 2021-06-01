import SinglePet from "./SinglePet";

const PetList = ({ pets }) => {
    return (
        <div>
            <h3>Pets</h3>
            <ul className="list-group">
                {pets.map(pet => 
                <SinglePet key={pet.id} pet={pet} />
                )}
            </ul>
        </div>
    );
};
export default PetList;