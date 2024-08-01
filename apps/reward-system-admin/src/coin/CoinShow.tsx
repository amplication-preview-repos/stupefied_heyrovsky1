import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CoinShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="coins" source="coins" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="data_cadastro" source="dataCadastro" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="ip" source="ip" />
        <TextField label="reward_sharing" source="rewardSharing" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_hash" source="userHash" />
      </SimpleShowLayout>
    </Show>
  );
};
