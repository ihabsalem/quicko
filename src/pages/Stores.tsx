import type { NextPage } from "next";

import React, { useState, useEffect } from "react";

import { Layout } from "@core/components";
import QResponse from "@models/QResponse";
import { StoreList, IStores } from "@models/stores";
import { get } from "@core/services/gateway";

import StoresList from "@features/StoresList";

const Stores: NextPage = () => {
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [storesList, setStoresList] = useState<StoreList[]>();

  useEffect(() => {
    // get("api/customer/stores/findstores?zipcode=1000&filter_name=rain").then(
    get("5435fecd-0e00-46f6-92d6-6656fbd1260a").then(
      ({ data: { store_lists } }: QResponse<IStores>) => {
        setStoresList(store_lists);

        setisLoading(false);
      }
    );
  }, []);
  return (
    <Layout>
      <div className="w-100">
        <StoresList storesList={storesList} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export default Stores;
