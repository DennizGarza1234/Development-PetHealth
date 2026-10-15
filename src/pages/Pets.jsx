import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pets() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [selectedSpecies, setSelectedSpecies] = useState("All");

  const pets = [
    {
      id: 1,
      name: "Buddy",
      species: "Dog",
      breed: "Golden Retriever",
      age: "3 years old",
    },
    {
      id: 2,
      name: "Luna",
      species: "Cat",
      breed: "Domestic Shorthair",
      age: "2 years old",
    },
  ];

  const filteredPets = pets.filter((pet) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      pet.name.toLowerCase().includes(search) ||
      pet.species.toLowerCase().includes(search) ||
      pet.breed.toLowerCase().includes(search);

    const matchesSpecies =
      selectedSpecies === "All" || pet.species === selectedSpecies;

    return matchesSearch && matchesSpecies;
  });

  return (
    <section className="pets-page">
      <div className="pets-header">
        <div>
          <h2>My Pets</h2>
          <p>View and manage your pets.</p>
          <p className="pets-count">
            {filteredPets.length} {filteredPets.length === 1 ? "pet" : "pets"} found
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/add-pet")}
        >
          + Add Pet
        </button>
      </div>

      <input
        type="search"
        placeholder="Search pets by name, species, or breed..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="Search pets"
      />
      <select
        value={selectedSpecies}
        onChange={(event) => setSelectedSpecies(event.target.value)}
        aria-label="Filter pets by species"
      >
        <option value="All">All Pets</option>
        <option value="Dog">Dogs</option>
        <option value="Cat">Cats</option>
      </select>

      
      {pets.length === 0 ? (
      <p className="pets-empty-state">
        You haven't added any pets yet. Select "Add Pet" to get started!
      </p>
      ) : (
        <div className="pets-list">
          {filteredPets.map((pet) => (
            <article className="pet-card" key={pet.id}>
              <h3>{pet.name}</h3>
              <p>{pet.species}</p>
              <p>{pet.breed}</p>
              <p>{pet.age}</p>
            </article>
          ))}
        </div>
      )}


      {filteredPets.length === 0 && (
        <p role="status">
          No pets found. Try another search or change the species filter.
        </p>
      )}
    </section>
  );
}

export default Pets;
