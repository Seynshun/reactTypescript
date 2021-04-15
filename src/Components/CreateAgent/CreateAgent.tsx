import MyForm from "./Form/Form";
import { Popover, Button } from "antd";
import { useCallback, useState } from "react";

type FormProps = {
  formValues: any;
};

const CreateAgent: React.FunctionComponent<FormProps> = ({ formValues }) => {
  const [visibility, setVisibility] = useState(false);
  const handleAgentCreation = useCallback(
    (agent) => {
      setVisibility(false);
      const newAgent = {
        agent: {
          firstName: agent.firstName,
          lastName: agent.lastName,
        },
      };
      formValues(newAgent);
    },
    [formValues]
  );

  const changeVisibility = useCallback(
    () => setVisibility((visibility) => !visibility),
    []
  );
  return (
    <div className="right-button">
      <Popover
        content={<MyForm formValues={handleAgentCreation} />}
        title="Créer un agent"
        trigger="click"
        placement="bottomRight"
        visible={visibility}
      >
        <Button type="primary" onClick={changeVisibility}>
          Créer un agent
        </Button>
      </Popover>
    </div>
  );
};

export default CreateAgent;
