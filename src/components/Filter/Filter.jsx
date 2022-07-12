import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <label>
        Filter
        <FilterInput type="name" value={value} onChange={onChange} />
      </label>
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Filter;
