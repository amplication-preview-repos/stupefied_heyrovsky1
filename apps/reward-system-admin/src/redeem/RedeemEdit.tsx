import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RedeemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <NumberInput step={1} label="coin_value" source="coinValue" />
        <NumberInput step={1} label="coins_after" source="coinsAfter" />
        <NumberInput step={1} label="coins_before" source="coinsBefore" />
        <TextInput label="user_hash" source="userHash" />
      </SimpleForm>
    </Edit>
  );
};
