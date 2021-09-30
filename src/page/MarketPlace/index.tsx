import React, { FC, useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";

const MarketPlace: FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [meta, setMeta] = useState<Meta>({
    cursor: 0,
    limit: 10,
  });

  interface Meta {
    cursor: number;
    limit: number;
    hasMoreData?: boolean;
  }

  console.log('items', items);
  console.log('meta', meta);
  

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

    const data: any[] = respond.data?.data;
    setItems((prev: any[]) => prev.concat(data));
    setMeta((prev: Meta) => Object.assign(prev, respond.data.meta));
  }

  useEffect(() => {
    GetItems(meta);
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={6} md={8}>
          Test
        </Grid>
      </Grid>
      <Button variant="contained">Load more</Button>
    </>
  );
};

export default MarketPlace;
