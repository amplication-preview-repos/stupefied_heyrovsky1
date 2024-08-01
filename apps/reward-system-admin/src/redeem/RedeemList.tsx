import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RedeemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Redeems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="action" source="action" />
        <TextField label="coin_value" source="coinValue" />
        <TextField label="coins_after" source="coinsAfter" />
        <TextField label="coins_before" source="coinsBefore" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_hash" source="userHash" />
      </Datagrid>
    </List>
  );
};
