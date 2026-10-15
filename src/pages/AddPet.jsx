function AddPet() {

    return (
        <div>
            <h1>Add a New Pet</h1>
            <form>
                <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="species">Species:</label>
                    <input type="text" id="species" name="species" required />
                <label htmlFor="breed">Breed:</label>
                    <input type="text" id="breed" name="breed" required />
                <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required />
                
                <button type="submit">Add Pet</button>
            </form>
        </div>
    );
}

export default AddPet;