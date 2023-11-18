import { useFormik } from "formik";
import {basicSchema} from "../schemas/Validation.jsx";
import {Link} from "react-router-dom";

function HomeForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: basicSchema,
        onSubmit: (values,actions) => {
            // alert(JSON.stringify(values, null, 2));
            alert("Kayıt başarılı !");
            actions.resetForm()
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label className="text-xl font-extrabold mr-4 text-green-900 text-opacity-70">E-mail : </label>
                    <input
                        className="border-2 border-green-900 border-opacity-75 text-sm
                        rounded-xl block w-72 p-2 "
                        id="email"
                        type="email"
                        placeholder="Mail adresinizi giriniz"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <p className="text-red-300"> {formik.errors.email} </p>}
                </div>
                <div className="my-4">
                    <label className="text-xl font-extrabold mr-4 text-green-900 text-opacity-70">Yaş : </label>
                    <input
                        className="border-2 border-green-900 border-opacity-75 text-sm
                        rounded-xl block w-72 p-2 "
                        id="age"
                        type="number"
                        placeholder=" Yaşınızı giriniz"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.age && <p className="text-red-300"> {formik.errors.age} </p>}
                </div>
                <div className="my-4">
                    <label className="text-xl font-extrabold mr-4 text-green-900 text-opacity-70">Şifre : </label>
                    <input
                        className="border-2 border-green-900 border-opacity-75 text-sm
                        rounded-xl block w-72 p-2 "
                        id="password"
                        type="password"
                        placeholder="Şifrenizi giriniz"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && <p className="text-red-300"> {formik.errors.password} </p>}
                </div>
                <div className="my-4">
                    <label className="text-xl font-extrabold mr-4 text-green-900 text-opacity-70">Tekrar Şifre : </label>
                    <input
                        className="border-2 border-green-900 border-opacity-75 text-sm
                        rounded-xl block w-72 p-2 "
                        id="confirmPassword"
                        type="password"
                        placeholder="Şifrenizi tekrar giriniz"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.confirmPassword && <p className="text-red-300"> {formik.errors.confirmPassword} </p>}
                </div>
                <button disabled={formik.isSubmitting} type="submit" className="text-green-900 bg-gradient-to-r from-green-300
                to-green-400 hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600
                rounded-lg text-sm px-5 p-2
                text-center">Kaydet</button>
                <br/>
                <br/>
                <Link className=" text-l font-extrabold underline text-green-900 text-opacity-50" to="/inspection">Sonraki forma git</Link>
            </form>
        </div>
    );
}

export default HomeForm;
