import { connect } from "react-redux";
import { Formik, Form, Field, FieldArray } from "formik";
import { resetForm } from "../../modules/actions/products";
import { CustomTextField } from "./components/CustomTextField";
import { style } from "./components/CustomStyles";
import { Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
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
  images
}) => {
  
  const validateName = (value) => {
    let errorMessage;

    if (!value.trim()) {
      errorMessage = "обов'язкове поле!";
    }

    return errorMessage;
  };

  const validateNumber = (value) => {
    let errorMessage;

    if (value === "" || value <= -1) {
      errorMessage = "має бути не меньше нуля!";
    }

    return errorMessage;
  };

  const validateImages = (value)=> {
    let errorMessage;

    if (!value) {
      errorMessage = "обов'язкове поле!";
    }

    return errorMessage;
  }

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
              images,
            }
          : 
          {
              category: "",
              name: "",
              quantity: "",
              price: "",
              descriptions: "",
              images: [""],
            }
      }
      onSubmit={async (values, actions) => {
        await handleSubmit(values);
        actions.resetForm();
        onClose();
      }}
    >
      {({ isSubmitting, values }) => {
        return (
          <Form className={styles.form}>

            <Field name="category" validate={validateName}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label={meta.touched && meta.error ? `Категорія: ${meta.error}` : 'Категорія'}
                  variant="outlined"
                  error={Boolean(meta.error && meta.touched)}
                />
              )}
            </Field>


            <Field name="name" validate={validateName}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label={meta.touched && meta.error ? `Ім'я: ${meta.error}` : 'Ім\'я'}
                  variant="outlined"
                  error={Boolean(meta.error && meta.touched)}
                />
              )}
            </Field>

            <Field name="quantity" validate={validateNumber}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label={meta.touched && meta.error ? `Кількість: ${meta.error}` : 'Кількість'}
                  variant="outlined"
                  type="number"
                  error={Boolean(meta.error && meta.touched)}
                />
              )}
            </Field>

            <Field name="price" validate={validateNumber}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label={meta.touched && meta.error ? `Ціна: ${meta.error}` : 'Ціна'}
                  variant="outlined"
                  type="number"
                  error={Boolean(meta.error && meta.touched)}
                />
              )}
            </Field>

            <Field name="descriptions" validate={validateName}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label={meta.touched && meta.error ? `Опис: ${meta.error}` : 'Опис'}
                  variant="outlined"
                  error={Boolean(meta.error && meta.touched)}
                />
              )}
            </Field>

            <FieldArray name="images"> 
              {({ remove, push }) => (
                <div className={styles.container}>
                  { values.images.map((image, index) => (
                    <Field key={index} validate={values.images.length < 2 ? null : validateImages}
                      name={`images.${index}`}
                      render={({ field, meta }) => (
                        <CustomTextField
                          {...field}
                          label={`введіть URL Зображення ${index + 1}`}
                          variant="outlined"
                          error={Boolean(meta.error && meta.touched)}
                        />
                      )}
                    />
                  ))}

                  <div className={styles.buttonsContainer}>
                    {values.images.length > 3 ? null : 
                      <MyButton 
                        className={values.images.length <= 1 ? styles.addFullButton : styles.addLiteButton} 
                        type="button" 
                        onClick={() => push("")} 
                        textButton={values.images.length <= 1 ? "add image" : "add more images" } 
                      />
                    }

                    {values.images.length <= 1 ? null :
                      <MyButton
                        type="button"
                        className={values.images.length === 4 ? styles.deleteFullButton : styles.deleteLiteButton}
                        onClick={() => remove(values.images.length - 1)}
                        textButton={"delete image"}
                      />
                    }
                  </div>

            <div className={styles.footer}>
              <Button
                style={style.cancel}
                type="button"
                onClick={closeAndReset}>
                  Cancel
              </Button>

              <LoadingButton
                style={ isSubmitting ? style.disabled : style.submit }
                size="small"
                type="submit"
                loading={isSubmitting}
                variant="outlined"
                disabled={isSubmitting}>
                  { isSubmitting ? "Submit" : "Submit"}
              </LoadingButton>
            </div>
            </div>
            )}
        </FieldArray>
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
  images: state.products.images,
});

export default connect(mapStateToProps, { resetForm })(ProductForm);
