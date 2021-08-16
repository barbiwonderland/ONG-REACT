import * as React from "react";
import { ErrorMessage, Field, getIn } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../styles/inputGroup.css";

const ErrorTooltip = (msg) => <div className="invalid-tooltip mt-1">{msg}</div>;

const CKEditorCompnent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  return (
    <div className={props.className}>
      <CKEditor
        name={field.name}
        editor={ClassicEditor}
        data={field.value}
        onChange={(e, editor) => setFieldValue("content", editor.getData())}
      />
    </div>
  );
};

const TextareaField = (props) => {
  const { identifier, errors } = props;
  if (identifier === "content") {
    return (
      <Field
        name={identifier}
        component={CKEditorCompnent}
        className={`form-control ${
          errors[identifier] && "is-invalid"
        } textarea m-0 p-0`}
        errors={errors}
      />
    );
  } else {
    return (
      <Field
        as="textarea"
        name={identifier}
        className={`form-control ${errors[identifier] && "is-invalid"}`}
      />
    );
  }
};

const TextField = (props) => {
  const { identifier, type, errors } = props;

  return (
    <Field
      name={identifier}
      type={type}
      className={`form-control ${getIn(errors, identifier) && "is-invalid"}`}
    />
  );
};

const SelectField = (props) => {
  const { identifier, type, errors, category } = props;

  //Replace with getCategoryList
  const categories = [
    { name: "A", id: 1 },
    { name: "B", id: 2 },
    { name: "C", id: 3 },
    { name: "D", id: 4 },
  ];

  const noCategoriesOptions = () => {
    return category !== "" ? (
      <option defaultValue>Seleccione una categoría</option>
    ) : null;
  };

  const categoriesOptions = () => {
    return categories.map((option) => {
      return (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      );
    });
  };

  const options = categoriesOptions();
  const defaultOption = noCategoriesOptions();

  return (
    <Field
      as="select"
      name={identifier}
      type={type}
      className={`form-control ${getIn(errors[identifier]) && "is-invalid"}`}
    >
      {defaultOption}
      {options}
    </Field>
  );
};

const FieldComponent = (props) => {
  const { type, ...rest } = props;
  switch (type) {
    case "textarea":
      return <TextareaField {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    default:
      return <TextField type={type} {...rest} />;
  }
};

function InputGroup({ identifier, type, labelText, errors }) {
  return (
    <div className="mb-3 pt-3 position-relative">
      <label htmlFor={identifier} className="formLabel">
        {labelText}
      </label>
      <FieldComponent
        identifier={identifier}
        type={type}
        labelText={labelText}
        errors={errors}
      />
      <ErrorMessage name={identifier} render={ErrorTooltip} />
    </div>
  );
}

export default InputGroup;
