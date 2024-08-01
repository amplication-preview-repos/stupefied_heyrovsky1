import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CoinList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Coins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="coins" source="coins" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="data_cadastro" source="dataCadastro" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="ip" source="ip" />
        <TextField label="reward_sharing" source="rewardSharing" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_hash" source="userHash" />
      </Datagrid>
    </List>
  );
};
