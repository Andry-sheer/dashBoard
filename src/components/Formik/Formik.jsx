import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { resetForm } from "../../modules/actions/products";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import styles from "../../styles/Form.module.css";
import TextField from '@mui/material/TextField';

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

  const closeAndReset = () => {
    onClose();
    resetForm();
  };

  const style = {
    cancel: {
      color: 'white',
      fontWeight: 600,
      padding: "10px 50px",
      background: 'silver'
    },

    submit: {
      color: 'white',
      fontWeight: 600,
      padding: "10px 50px",
      background: '#44b26f',
      borderColor: 'transparent',
      letterSpacing: '1px'
    },

    disabled: {
      color: 'transparent',
      borderColor: '#726969',
      fontWeight: 600,
      padding: "10px 50px",
    }
  }

  const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderRadius: "12px",
      color: '#44b26f', 
      fontWeight: 600,
      
      '& fieldset': {
        borderColor: '#44b26f',
      },
      '&:hover fieldset': {
        borderColor: '#44b26f',
        cursor: 'pointer',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#44b26f',
        color: '#44b26f',
      },
    },

    '& .MuiInputLabel-root': {
      color: '#44b26f',
      fontWeight: 600,

      '&.Mui-focused': {
        color: '#44b26f',
      },
    },


    '& .Mui-error': {
      color: 'red',

      '& fieldset': {
        borderColor: 'red',
      },
      
      '&:hover fieldset': {
        borderColor: 'red',
      },

      '&.Mui-focused fieldset': {
        borderColor: 'red',
        color: 'red',
      },

      '&.MuiInputLabel-root': {
        color: 'red',
      }
    },

  });

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

            <Field name="category" validate={validateName}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label={meta.error ? `Категорія: ${meta.error}` : 'Категорія'}
                  variant="outlined"
                  error={Boolean(meta.error)}
                />
              )}
            </Field>


            <Field name="name" validate={validateName}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  // eslint-disable-next-line
                  label={meta.touched && meta.error ? `Ім\'я: ${meta.error}` : 'Ім\'я'}
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

            <Field name="image" validate={validateName}>
              {({ field, meta }) => (
                <CustomTextField
                  {...field}
                  label={meta.touched && meta.error ? `посилання на фото: ${meta.error}` : 'посилання на фото'}
                  variant="outlined"
                  error={Boolean(meta.error && meta.touched)}
                />
              )}
            </Field>

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
