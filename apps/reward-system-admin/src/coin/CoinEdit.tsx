import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CoinEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="coins" source="coins" />
        <DateTimeInput label="data_cadastro" source="dataCadastro" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="ip" source="ip" />
        <NumberInput step={1} label="reward_sharing" source="rewardSharing" />
        <TextInput label="user_hash" source="userHash" />
      </SimpleForm>
    </Edit>
  );
};
