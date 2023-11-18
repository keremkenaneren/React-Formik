import { useField } from "formik";

function CustomSelect({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className="my-4">
            <label className="text-xl font-extrabold mr-4 text-green-900 text-opacity-70">
                {label}
            </label>
            <select
                className="border-2 border-green-900 border-opacity-75 text-sm rounded-xl block w-72 p-2"
                {...field}
                {...props}
            />
            {meta.touched && meta.error && (
                <p className="text-red-300">{meta.error}</p>
            )}
        </div>
    );
}

export default CustomSelect;
