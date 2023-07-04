import Section from "../../../components/layout/Section";
import Select from "../../../components/form/Select";
import RadioButton from "../../../components/form/RadioButton";
import StepCounter from "../../../components/form/StepCounter";
import style from "./PriceLadderForm.module.scss";
import { css } from "../../../utils/utils";
import { useState } from "react";
import { Product } from "../../../types/enums";
import { useForm } from "../../../hooks/useForm";

const PriceLadderForm = () => {
  const sourceData = [
    {
      name: "Select file",
      value: "",
      placeholder: true,
    },
    {
      name: "Logistikkalkyl-2023-01-01",
      value: "Logistikkalkyl-2023-01-01",
    },
    {
      name: "Logistikkalkyl-2023-02-02",
      value: "Logistikkalkyl-2023-02-02",
    },
  ];

  const stepsData = [
    {
      name: "Select step size",
      value: "",
      placeholder: true,
    },
    {
      name: "10%",
      value: "10",
    },
    {
      name: "12%",
      value: "12",
    },
    {
      name: "14%",
      value: "14",
    },
    {
      name: "16%",
      value: "16",
    },
    {
      name: "18%",
      value: "18",
    },
    {
      name: "20%",
      value: "20",
    },
  ];

  const [showError, setShowError] = useState(false);
  const { form, handleChange } = useForm({
    file: "",
    product: null,
    steps: 0,
    stepSize: "",
  });

  const submit = () => {
    setShowError(false);
    const formIsValid =
      form.file !== "" &&
      form.product !== null &&
      form.steps !== 0 &&
      form.stepSize !== "";
    if (!formIsValid) setShowError(true);
    // else console.table(form); //TODO: send data to endpoint
  };

  return (
    <Section>
      <h2 className="pn-m">Generate new price ladder</h2>
      <div className={css(style.formElement, style.selectWidth)}>
        <Select
          name="file"
          label="Which file do you want to pull the data from?"
          options={sourceData}
          value={form.file}
          onChange={handleChange}
        />
      </div>
      <div className={style.formElement}>
        <div className={css("pn-xs", style.formLabel)}>
          What product do you want to create the price ladder for?
        </div>
        <div className={style.radioGroup}>
          <RadioButton
            label="MyPack Collect"
            name="product"
            id={Product.MyPackCollect}
            checked={form.product === Product.MyPackCollect}
            onChange={handleChange}
            value={Product.MyPackCollect}
          />
          <RadioButton
            label="MyPack Home"
            name="product"
            id={Product.MyPackHome}
            checked={form.product === Product.MyPackHome}
            onChange={handleChange}
            value={Product.MyPackHome}
          />
          <RadioButton
            label="Varubrev"
            name="product"
            id={Product.Varubrev}
            checked={form.product === Product.Varubrev}
            onChange={handleChange}
            value={Product.Varubrev}
          />
        </div>
      </div>
      <div className={style.formElement}>
        <StepCounter
          onChange={handleChange}
          name="steps"
          min={9}
          max={50}
          defaultValue={14}
          label="How many steps do you want the ladder to have?"
          tooltip="Set the price ladder with a default of 14 steps, keeping the current contracted volume at step 4 and maintaining three steps below it. If the customer's volume surpasses the highest step, consider initiating a renegotiation for a revised pricing arrangement"
        />
      </div>
      <div className={css(style.formElement, style.selectWidth)}>
        <Select
          name="stepSize"
          label="How big do you want the steps to be?"
          tooltip="The step size regards how large (in volume based on the contracted volume) you want the ladder steps to be. If your customer have a larger volume potential set a bigger step size and set it lower if the potential is smaller. The recommended size is 10%."
          options={stepsData}
          value={form.stepSize}
          onChange={handleChange}
        />
      </div>
      <div>
        <pn-button onClick={submit}>Generate a new price ladder</pn-button>
      </div>
      {showError && (
        <div className={style.error}>
          <pn-toast
            appearance="warning"
            closable={false}
            icon="alert-exclamation-circle"
          >
            All fields are mandatory!
          </pn-toast>
        </div>
      )}
    </Section>
  );
};

export default PriceLadderForm;
