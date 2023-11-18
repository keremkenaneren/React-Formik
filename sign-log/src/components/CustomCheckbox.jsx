import { useField } from "formik";

function CustomCheckbox({...props }) {
    const [field, meta] = useField(props);

    return (
        <div className="my-4">
            <input
                className=""
                {...field}
                {...props}
            />
            <span className="ml-2 text-l font-extrabold mr-4 text-green-900 text-opacity-70">
                Kullanım koşullarını kabul ediyorum.
            </span>

            {meta.touched && meta.error && (
                <p className="text-red-300">{meta.error}</p>
            )}
        </div>
    );
}

export default CustomCheckbox;
