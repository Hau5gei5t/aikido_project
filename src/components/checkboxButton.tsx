// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Button, Checkbox, Flex } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { useEffect, useState } from "react";

interface Props {
  value?: boolean;
  label: string;
  onChangeButton: (value: boolean) => void;
}

const CheckboxButton: React.FC<Props> = ({ value, label, onChangeButton }) => {
  const [checked, setChecked] = useState(value ? value : false);
  useEffect(() => {
    onChangeButton(checked);
  }, [checked]);

  const toggleChecked = () => {
    setChecked(!checked);

    onChange({
      target: { checked: !checked },
    });
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked ${label} = `, e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <Flex vertical>
      <p style={{ display: "none" }}>
        <Checkbox checked={checked} onChange={onChange}></Checkbox>
      </p>

      <Button
        type="primary"
        size="small"
        onClick={toggleChecked}
        className={
          (checked ? "text-white bg-[#1890FF]" : "bg-white text-black") +
          " " +
          "border-solid border-[#D9D9D9]"
        }
        style={{
          padding: "0px 24px",
          textAlign: "center",
          height: "40px",
        }}
      >
        {label}
      </Button>
    </Flex>
  );
};

export default CheckboxButton;
