import {Form, Formik} from 'formik';
import CustomInput from "./CustomInput.jsx";
import {advancedSchema} from "../schemas/Validation.jsx";
import CustomSelect from "./CustomSelect.jsx";
import CustomCheckbox from "./CustomCheckbox.jsx";
import {Link} from "react-router-dom";

function InspectionForm() {


    return (
        <>
            {""}
            <Formik
                initialValues={{ username: '', school: '', isAccepted:false}}
                validationSchema={advancedSchema}
                onSubmit={(values, actions) => {
                    alert("Kayıt başarılı !");
                    actions.resetForm()
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <CustomInput
                            label="Kullanıcı adı : "
                            name="username"
                            type="text"
                            placeholder="Kullanıcı adınızı giriniz"/>

                            <CustomSelect
                                label="Eğitim : "
                                name="school"
                            >
                                <option>Eğitim düzeyinizi seçin</option>
                                <option value="ilköğretim" >ilköğretim </option>
                                <option value="ortaöğretim">ortaöğretim </option>
                                <option value="yükseköğretim" >yükseköğretim </option>
                            </CustomSelect>

                        <CustomCheckbox
                            name="isAccepted"
                            type="checkbox"
                            />
                        <button disabled={isSubmitting} type="submit" className="text-green-900 bg-gradient-to-r from-green-300
                             to-green-400 hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600
                             rounded-lg text-sm px-5 p-2
                         text-center">Kaydet</button>
                        <br/>
                        <br/>
                        <Link className=" text-l font-extrabold underline text-green-900 text-opacity-50" to="/">Ana forma git</Link>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default InspectionForm ;
