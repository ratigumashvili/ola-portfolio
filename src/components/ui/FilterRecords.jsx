const FilterRecords = ({ handleFilter, selected }) => {
  return (
    <div className="filters">
      <label className="form-control">
        <input
          type="radio"
          name="choose"
          id="all"
          onChange={handleFilter}
          checked={selected === "all"}
        />
        All
      </label>
      <label className="form-control">
        <input
          type="radio"
          name="choose"
          id="production"
          onChange={handleFilter}
          checked={selected === "production"}
        />
        Production
      </label>
      <label className="form-control">
        <input
          type="radio"
          name="choose"
          id="practice"
          onChange={handleFilter}
          checked={selected === "practice"}
        />
        Practice
      </label>
    </div>
  );
};

export default FilterRecords;
