const getOutlineColor = (state: any): string => {
  if (state.selectProps.hasError) {
    return '#ffa5a5';
  }
  return state.isFocused ? '#90a3f5' : 'transparent';
};

const getBackgroundColor = (state: any): string => {
  if (state.isDisabled) {
    return '#e9e9e9';
  }
  return state.isFocused ? '#eef4f8' : '#ffffff';
};

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    cursor: 'pointer',
    height: '4.8rem',
    fontSize: '1.8rem',
    border: `1px solid ${!state.isDisabled ? '#a1a1a1' : 'transparent'}`,
    borderRadius: '0.8rem',
    backgroundColor: getBackgroundColor(state),
    outline: 'none',
    boxShadow: `0 0 0 3px ${getOutlineColor(state)}`,
    '-webkit-appearance': 'none'
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    padding: `0 ${state.isMulti ? '0.8' : '1.6'}rem`
  }),
  menu: (provided: any) => ({
    ...provided,
    border: '1px solid #616161',
    borderRadius: '0.4rem',
    boxShadow: '0px 6px 11px rgba(125, 123, 123, 0.04)',
    backgroundColor: '#EEF4F8'
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: '0.4rem'
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: '1.8rem',
    color: '#252525',
    borderRadius: '0.8rem',
    cursor: state.isDisabled || state.isSelected ? 'default' : 'pointer',
    opacity: state.isDisabled ? 0.5 : 1,
    backgroundColor: state.isSelected ? '#FAFAFA' : 'transparent',
    '&:hover': {
      backgroundColor: '#FAFAFA'
    }
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: '#F9F9F9',
    boxShadow: '0px 3px 2px -2px rgba(0, 0, 0, 0.2)',
    borderRadius: '0.8rem',
    padding: '0.3rem 0.8rem'
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    padding: '0 1rem'
  }),
  clearIndicator: () => ({
    display: 'none'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
};
