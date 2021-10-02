import React, { FC, useState, useEffect } from "react";

import { Box, Button, Skeleton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import ItemsList from "./ItemsList";
import Search from "../../components/Search";

import { CurrMeta } from "../../interfaces";

const MarketPlace: FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [meta, setMeta] = useState<CurrMeta>({
    cursor: 0,
    limit: 4,
  });
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  function compare(a: any, b: any): number {
    const first = a.product_name.split(" ");
    const second = b.product_name.split(" ");

    if (first[0] === second[0]) {
      return first[1] - second[1];
    } else {
      return 0;
    }
  }

  const list: JSX.Element[] = items.filter((item: any) => {
    if (searchTerm === "") {
      return item;
    } else if (
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return item;
    }
  });

  async function GetItems(meta: CurrMeta) {
    const url: string =
      "https://asterix-dev.concular.com/material-service/marketplace/mp";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meta),
    };

    const result = await fetch(url, options);
    const respond = await result.json();

    setIsLoading(() => false);
    const data: any[] = respond.data?.data;
    const newMeta: any = respond.data.meta;

    data
      .sort((a, b) => a.product_name.localeCompare(b.product_name))
      .sort(compare);

    setHasMoreData(newMeta.hasMoreData);
    delete newMeta.hasMoreData;
    setItems((prev: any[]) => prev.concat(data));
    setMeta((prev: CurrMeta) => Object.assign(prev, newMeta));
  }

  useEffect(() => {
    GetItems(meta);
  }, []);

  return (
    <Box
      maxWidth={"1480px"}
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {<Search value={searchTerm} setValue={setSearchTerm} />}
      <ItemsList items={items} meta={meta} searchTerm={searchTerm} />
      {hasMoreData ? (
        items.length > 0 ? (
          isLoading ? (
            <LoadingButton
              style={{ margin: "15px" }} //ch
              loading
              loadingIndicator="Loading..."
              variant="outlined"
            >
              Fetch data
            </LoadingButton>
          ) : (
            <Button
              style={{ margin: "15px" }} //ch
              variant="contained"
              onClick={() => {
                setIsLoading(true);
                GetItems(meta);
                setSearchTerm("");
              }}
            >
              Load more
            </Button>
          )
        ) : (
          <Skeleton variant="rectangular" width={100} height={33} />
        )
      ) : null}
    </Box>
  );
};

export default MarketPlace;
