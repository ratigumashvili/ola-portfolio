const FilterRecords = ({ handleFilter, selected }) => {
  return (
    <div className="filters">
      <label htmlFor="all">All</label>
      <input
        type="radio"
        name="choose"
        id="all"
        onChange={handleFilter}
        checked={selected === "all"}
      />
      <label htmlFor="production">Production</label>
      <input
        type="radio"
        name="choose"
        id="production"
        onChange={handleFilter}
        checked={selected === "production"}
      />
      <label htmlFor="practice">Practice</label>
      <input
        type="radio"
        name="choose"
        id="practice"
        onChange={handleFilter}
        checked={selected === "practice"}
      />
    </div>
  );
};

export default FilterRecords;
