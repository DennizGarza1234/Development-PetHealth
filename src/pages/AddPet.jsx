
function AddPet() {
  return (
    <section className="add-pet-page">
      <div className="add-pet-card">
        <h2>Add a New Pet</h2>
        <p>Enter your pet's information below.</p>

        <form className="add-pet-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter pet's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="species">Species</label>
            <input
              type="text"
              id="species"
              name="species"
              placeholder="e.g., Dog or Cat"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              id="breed"
              name="breed"
              placeholder="Enter breed"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age (years)</label>
            <input
              type="number"
              id="age"
              name="age"
              min="0"
              step="1"
              placeholder="Enter age"
              required
            />
          </div>

          <button type="submit">Add Pet</button>
        </form>
      </div>
    </section>
  );
}

export default AddPet;
