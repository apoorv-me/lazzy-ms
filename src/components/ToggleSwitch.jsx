import React, { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ToggleSwitch({ label, checked, setChecked }) {
  return (
    <div className='flex justify-start items-center gap-4'>
      <label className='block text-sm font-medium text-gray-100 uppercase'>
        {label}
      </label>
      <button
        type='button'
        className={classNames(
          checked ? 'bg-fuchsia-600' : 'bg-fuchsia-500',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
        )}
        role='switch'
        aria-checked='false'
        onClick={() => setChecked(!checked)}
      >
        <span className='sr-only'>{label}</span>
        <span
          className={classNames(
            checked ? 'translate-x-5 bg-yellow-200' : 'translate-x-0 bg-white',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200'
          )}
        ></span>
      </button>
    </div>
  );
}
