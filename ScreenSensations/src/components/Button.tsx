import { FC, ButtonHTMLAttributes } from "react";
import { Button, Space } from "antd";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  url: string;
}

const LinkButton: FC<Props> = ({ label, onClick, ...props }) => {
  return (
    <Space wrap>
      <Button type="link" onClick={onClick} {...props}>
        <div style={{ lineHeight: 0, fontWeight: "bold" }}>{label}</div>
      </Button>
    </Space>
  );
};

export default LinkButton;
