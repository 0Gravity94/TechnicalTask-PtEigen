import { FC, ButtonHTMLAttributes } from "react";
import { Button, Space } from "antd";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Load: FC<Props> = ({ label, onClick }) => {
  return (
    <Space wrap>
      <Button
        type="link"
        style={{ backgroundColor: "gray", width: 1000, height: 50 }}
        onClick={onClick}
      >
        <div style={{ lineHeight: 0, fontWeight: "bold", color: "white" }}>
          {label}
        </div>
      </Button>
    </Space>
  );
};

export default Load;
