import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RedeemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="action" source="action" />
        <TextField label="coin_value" source="coinValue" />
        <TextField label="coins_after" source="coinsAfter" />
        <TextField label="coins_before" source="coinsBefore" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_hash" source="userHash" />
      </SimpleShowLayout>
    </Show>
  );
};
