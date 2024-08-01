import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RedeemList } from "./redeem/RedeemList";
import { RedeemCreate } from "./redeem/RedeemCreate";
import { RedeemEdit } from "./redeem/RedeemEdit";
import { RedeemShow } from "./redeem/RedeemShow";
import { CoinList } from "./coin/CoinList";
import { CoinCreate } from "./coin/CoinCreate";
import { CoinEdit } from "./coin/CoinEdit";
import { CoinShow } from "./coin/CoinShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RewardSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Redeem"
          list={RedeemList}
          edit={RedeemEdit}
          create={RedeemCreate}
          show={RedeemShow}
        />
        <Resource
          name="Coin"
          list={CoinList}
          edit={CoinEdit}
          create={CoinCreate}
          show={CoinShow}
        />
      </Admin>
    </div>
  );
};

export default App;
