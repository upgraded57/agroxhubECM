export default function ErrorMessage({ formik, fieldName }) {
  return formik.touched[fieldName] && formik.errors[fieldName] ? (
    <p className="text-xs text-red-400 mt-1">{formik.errors[fieldName]}</p>
  ) : null;
}
