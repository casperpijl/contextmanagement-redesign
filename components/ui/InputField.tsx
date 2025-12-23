import React from 'react';

const InputField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, { label: string; textarea?: boolean } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>(({ label, textarea, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
    props.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
  }

  const Component = textarea ? 'textarea' : 'input';

  return (
    <div className="relative group mb-8">
      <Component
        ref={ref as any}
        className={`w-full bg-transparent border-b border-gray-300 py-3 text-brand-dark focus:outline-none transition-colors duration-300 ${textarea ? 'resize-none' : ''}`}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      
      {/* Animated Bottom Border */}
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-brand-lime transition-all duration-500 ease-out ${isFocused ? 'w-full' : 'w-0'}`} 
      />

      {/* Floating Label */}
      <label 
        className={`absolute left-0 pointer-events-none transition-all duration-300 ease-out ${
          isFocused || hasValue 
            ? '-top-5 text-xs text-brand-lime font-bold uppercase tracking-wider' 
            : 'top-3 text-gray-500 text-base'
        }`}
      >
        {label}
      </label>
    </div>
  );
});

export default InputField;
