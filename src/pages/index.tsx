import type { NextPage } from "next";

import { Layout } from "@core/components";
import QResponse from "@models/QResponse";
import Data, {
  BannerLogo,
  Category,
  OfferProducts,
} from "@models/store-home";
import { get } from "@core/services/gateway";

import BannerLogos from "@features/BannerLogos";
import Categories from "@features/Categories";
import OffersProducts from "@features/OffersProducts";

import React, { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [bannerLogos, setBannerLogos] = useState<BannerLogo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [offerProducts, setOfferProducts] = useState<OfferProducts>({
    products: [],
  });

  useEffect(() => {
    // get("customer/stores/storehome?").then(
    get("357a54c2-5efd-43e2-928a-790c66c8421a").then(
      ({
        data: { offer_products, categories, banner_logos },
      }: QResponse<Data>) => {
        setCategories(categories);
        setBannerLogos(banner_logos);
        setOfferProducts(offer_products);

        setisLoading(false);
      }
    );
  }, []);
  return (
    <Layout>
      <div className="w-100">
        <h2 className="mb-3"> Featured</h2>
        <BannerLogos bannerLogos={bannerLogos} isLoading={isLoading} />
        <div className="mt-5">
          <h2 className="mb-3"> Categories</h2>
          <Categories categories={categories} isLoading={isLoading} />
        </div>
        <div className="mt-5">
          <h2 className="mb-3"> Offers</h2>
          <OffersProducts offerProducts={offerProducts} isLoading={isLoading} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
