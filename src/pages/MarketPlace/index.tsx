import React, { FC, useState, useEffect } from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import ItemsList from "../../components/ItemsList";
import Search from "../../components/Search";

const MarketPlace: FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [meta, setMeta] = useState<Meta>({
    cursor: 0,
    limit: 2,
  });
  const [hasMoreData, setHasMoreData] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  interface Meta {
    cursor: number;
    limit: number;
    hasMoreData?: boolean;
  }

  console.log("isLoading", isLoading);

  async function GetItems(meta: Meta) {
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

    // console.log("respond", respond);

    const data: any[] = respond.data?.data;
    const newMeta: any = respond.data.meta;

    setHasMoreData(newMeta.hasMoreData);
    delete newMeta.hasMoreData;
    setItems((prev: any[]) => prev.concat(data));
    setMeta((prev: Meta) => Object.assign(prev, newMeta));
  }

  useEffect(() => {
    GetItems(meta);
  }, []);

  return (
    <Box
      maxWidth={"1480px"}
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Search />
      <ItemsList items={items} />
      {hasMoreData ? (
        items && isLoading ? (
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
            }}
          >
            Load more
          </Button>
        )
      ) : null}
    </Box>
  );
};

export default MarketPlace;
