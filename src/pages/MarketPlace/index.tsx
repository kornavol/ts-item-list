import React, { FC, useState, useEffect } from "react";

import { Box, Button, Skeleton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import ItemsList from "../../components/ItemsList";
import Search from "../../components/Search";

import { Meta } from "../../interfaces";

const MarketPlace: FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [meta, setMeta] = useState<Meta>({
    cursor: 0,
    limit: 4,
  });
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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


console.log("respond", respond);
    console.log("respond", respond.data.meta);

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

  console.log('hasMoreData', hasMoreData);
  

  return (
    <Box
      maxWidth={"1480px"}
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {<Search />}
      <ItemsList items={items} meta={meta} />
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
