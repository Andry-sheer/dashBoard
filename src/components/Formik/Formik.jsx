import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { resetForm } from "../../modules/actions/products";
import styles from "../../styles/Form.module.css";
import MyButton from "../MyButton/MyButton";

const ProductForm = ({
  editId,
  resetForm,
  handleSubmit,
  onClose,
  name,
  quantity,
  price,
  descriptions,
  category,
  image,
}) => {
  const validateName = (value) => {
    let errorMessage;

    if (!value.trim()) {
      errorMessage = "Обов'язкове поле!";
    }

    return errorMessage;
  };

  const validateNumber = (value) => {
    let errorMessage;

    if (value === "" || value <= -1) {
      errorMessage = "ціна або кількість має бути не меньше нуля!";
    }

    return errorMessage;
  };

  const closeAndReset = () => {
    onClose();
    resetForm();
  };

  return (
    <Formik
      initialValues={
        editId
          ? {
              category,
              name,
              quantity,
              price,
              descriptions,
              image,
            }
          : {
              category: "",
              name: "",
              quantity: "",
              price: "",
              descriptions: "",
              image: "",
            }
      }
      onSubmit={async (values, actions) => {
        await handleSubmit(values);
        actions.resetForm();
        onClose();
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form className={styles.form}>
            <label className={styles.label}>
              Category
              <Field
                className={styles.input}
                validate={validateName}
                type="text"
                name="category"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="category"
                component="div"
              />
            </label>

            <label className={styles.label}>
              Name
              <Field
                className={styles.input}
                validate={validateName}
                type="text"
                name="name"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="name"
                component="div"
              />
            </label>

            <label className={styles.label}>
              Quantity
              <Field
                className={styles.input}
                validate={validateNumber}
                type="number"
                name="quantity"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="quantity"
                component="div"
              />
            </label>

            <label className={styles.label}>
              Price
              <Field
                className={styles.input}
                validate={validateNumber}
                type="number"
                name="price"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="price"
                component="div"
              />
            </label>

            <label className={styles.label}>
              Descriptions
              <Field
                className={styles.input}
                validate={validateName}
                type="text"
                name="descriptions"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="descriptions"
                component="div"
              />
            </label>

            <label className={styles.label}>
              Images
              <Field
                className={styles.input}
                validate={validateName}
                placeholder="enter img url address..."
                type="text"
                name="image"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="image"
                component="div"
              />
            </label>

            <div className={styles.footer}>
              <MyButton
                className={styles.buttonCancel}
                type="button"
                textButton="Cancel"
                onClick={closeAndReset}
              />
              <MyButton
                className={
                  isSubmitting ? styles.buttonSubmitDis : styles.buttonSubmit
                }
                type="submit"
                textButton="Submit"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  name: state.products.name,
  category: state.products.category,
  price: state.products.price,
  quantity: state.products.quantity,
  descriptions: state.products.descriptions,
  image: state.products.image,
});

export default connect(mapStateToProps, {
  resetForm,
})(ProductForm);
