const FilterRecords = ({ handleFilter, selected }) => {
  return (
    <div className="filters">
      <label className="form-control">
        <input
          type="radio"
          name="choose"
          onChange={() => handleFilter("all")}
          checked={selected === "all"}
        />
        All
      </label>
      <label className="form-control">
        <input
          type="radio"
          name="choose"
          onChange={() => handleFilter("production")}
          checked={selected === "production"}
        />
        Production
      </label>
      <label className="form-control">
        <input
          type="radio"
          name="choose"
          onChange={() => handleFilter("practice")}
          checked={selected === "practice"}
        />
        Practice
      </label>
    </div>
  );
};

export default FilterRecords;
