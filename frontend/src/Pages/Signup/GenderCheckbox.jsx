import React from 'react';

const GenderCheckbox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className='flex gap-6'> {/* Added spacing between checkboxes */}
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className='label-text'>Male</span>
          <input type='checkbox' className='checkbox border-slate-900' 
          checked={selectedGender === 'male'}
          onChange={(e) => onCheckBoxChange('male')}
          />
        </label>
      </div>
      
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className='label-text'>Female</span>
          <input type='checkbox' className='checkbox border-slate-900' 
          checked={selectedGender === 'female'}
          onChange={(e) => onCheckBoxChange('female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
