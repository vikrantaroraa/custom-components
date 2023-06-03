import React, { FormEvent, useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import FormWrapper from "../FormWrapper";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_fORM_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const buttonStyle = {
  padding: "5px 10px",
  cursor: "pointer",
};

function MultistepForm() {
  const [formData, setFormData] = useState(INITIAL_fORM_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...formData} updateFields={updateFields} />,
      <AddressForm {...formData} updateFields={updateFields} />,
      <AccountForm {...formData} updateFields={updateFields} />,
    ]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isLastStep) return next();
    alert("Account created successfully!");
  };

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "2px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        height: "auto",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button style={buttonStyle} type="button" onClick={back}>
              Back
            </button>
          )}

          <button style={buttonStyle} type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MultistepForm;

interface UserData {
  firstName: string;
  lastName: string;
  age: string;
}

interface UserFormProps extends UserData {
  updateFields: (fields: Partial<UserData>) => void;
}

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Form">
      <label>First Name</label>
      <input
        type="text"
        required
        autoFocus
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        type="number"
        required
        min={1}
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

interface AddressFormData {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface AddressFormProps extends AddressFormData {
  updateFields: (fields: Partial<AddressFormData>) => void;
}

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Form">
      <label>Street</label>
      <input
        type="text"
        required
        autoFocus
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        type="text"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        type="text"
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        type="text"
        required
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

interface AccountFormData {
  email: string;
  password: string;
}

interface AccountFormProps extends AccountFormData {
  updateFields: (fields: Partial<AccountFormData>) => void;
}

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="Account Form">
      <label>Email</label>
      <input
        type="email"
        required
        autoFocus
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};
