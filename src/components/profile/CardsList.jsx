import SingleCard from "../app/SingleCard";

const CardsList = ({ petsArray }) => {
    return (
        <div className="d-flex flex-wrap m-2 mt-5 w-100 justify-content-around">
            {petsArray.map(pet => 
            <SingleCard key={pet.id} pet={pet} />
            )}
        </div>
    );
}
export default CardsList;