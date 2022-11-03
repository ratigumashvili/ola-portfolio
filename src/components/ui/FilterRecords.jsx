const FilterRecords = ({ handleFilter }) => {
  return (
    <div className="filters">
      <label htmlFor="all">All</label>
      <input type="radio" name="choose" id="all" onChange={handleFilter} />
      <label htmlFor="production">Production</label>
      <input
        type="radio"
        name="choose"
        id="production"
        onChange={handleFilter}
      />
      <label htmlFor="practice">Practice</label>
      <input type="radio" name="choose" id="practice" onChange={handleFilter} />
    </div>
  );
};

export default FilterRecords;
