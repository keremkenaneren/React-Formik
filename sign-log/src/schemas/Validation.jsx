import * as yup from "yup";

const passwordRegex = /^(?=.*\d).{6,}$/;

export const basicSchema=yup.object().shape({
    email:yup
        .string()
        .email("Geçerli bir e-mail giriniz")
        .required("E-mail girmek zorunludur!"),

    age:yup
        .number()
        .positive("Lütfen pozitif bir değer giriniz")
        .integer("Lütfen yaşınızı tam sayı olarak giriniz ")
        .required("Yaş girmek zorunludur!"),

    password:yup
        .string()
        .min(6,"Lütfen minimum 6 karakter giriniz")
        .matches(passwordRegex, {
            message: "Lütfen en az 1 sayı giriniz"
        })
        .required("Şifre girmek zorunludur!"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")],"Şifreler eşleşmiyor")
        .required("Tekrar şifre girmek zorunludur!")

})

export const advancedSchema=yup.object().shape({
    username:yup
        .string()
        .min(3,"Kullanıcı adı minimum 3 karakter olmalıdır")
        .required("Kullanıcı adı girmek zorunludur!"),

    school:yup
        .string()
        .oneOf(["ilköğretim","ortaöğretim","yükseköğretim"],"Lütfen eğitim düzeyinizi seçiniz")
        .required("Eğitim girmek zorunludur!"),

    isAccepted:yup
        .boolean()
        .oneOf([true],"Kullanım koşullarını kabul ediniz")
})
