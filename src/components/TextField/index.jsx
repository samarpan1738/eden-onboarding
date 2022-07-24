import React from "react";

const TextField = React.forwardRef((props, ref = null) => {
	const { id, placeholder = "", required = false, name = "" } = props;
	return (
		<input
			ref={ref}
			id={id}
			type="text"
			name={name}
			placeholder={placeholder}
			className="border rounded-md w-full px-3.5 py-3 text-gray-600 text-sm focus:outline-primary focus:outline-1"
			required={required}
		/>
		// <input ref={ref} id={id} type="text" placeholder={placeholder} className='w-full px-3.5 py-3 text-gray-600 text-sm focus:outline-primary' required={required} />
	);
});

export default TextField;
