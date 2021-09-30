import React, { FC, useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";

const MarketPlace: FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [meta, setMeta] = useState<Meta>({
    cursor: 0,
    limit: 10,
  });
  const [hasMoreData, setHasMoreData] = useState<boolean>(false);

  interface Meta {
    cursor: number;
    limit: number;
    hasMoreData?: boolean;
  }

  console.log("items", items);
  console.log("meta", meta);
  console.log("hasMoreData", hasMoreData);

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

    console.log("respond", respond);

    const data: any[] = respond.data?.data;
    const newMeta: any = respond.data.meta;

    setHasMoreData(newMeta.hasMoreData);
    console.log("newMeta", newMeta);

    delete newMeta.hasMoreData;

    setItems((prev: any[]) => prev.concat(data));
    setMeta((prev: Meta) => Object.assign(prev, newMeta));
  }

  useEffect(() => {
    GetItems(meta);
  }, []);

  const list: any = items.map((item) => {
    const images = item.images.map((img: any) => (
      <img src={img?.object_url} alt="product" style={{ width: "100px" }} />
    ));
    return (
      <Grid key={item.id} item xs={6} md={8}>
        <h3>{`Product ${item.id}`}</h3>
        {images}
      </Grid>
    );
  });

  return (
    <>
      <Grid container>{items && list}</Grid>
      {hasMoreData ? (
        <Button variant="contained" onClick={() => GetItems(meta)}>
          Load more
        </Button>
      ) : null}
    </>
  );
};

export default MarketPlace;
