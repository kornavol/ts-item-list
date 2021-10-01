import React, { FC } from "react";

import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { ItemsListStyles, ItemStyles } from "./style";
import noPicture from "../../assets/pictures/no-img-layout.png";

import { Meta } from "../../interfaces";

const Item: FC<any> = ({ item }) => {
  const classes = ItemStyles();
  const images = item.images?.map((img: any, i: number) => (
    <img key={i} src={img?.object_url} alt="product" className={classes.img} />
  ));

  return (
    <Grid item key={item.id} xs={12} sm={6} md={3}>
      <div className={classes.root}>
        {images || (
          <img src={noPicture} alt="no-image" className={classes.img} />
        )}
        <p>{item.product_name}</p>
      </div>
    </Grid>
  );
};

interface IProps {
  items: any[];
  meta: Meta;
}

const ItemsList: FC<IProps> = ({ items, meta }) => {
  const classes = ItemsListStyles();

  const skeletons = [...Array(meta.limit)].map((el, i) => (
    <Grid item key={i} xs={12} sm={6} md={3}>
      <div className={classes.skeleton}>
        <div className={classes.skeletonImg}>
          <Skeleton variant="rectangular" width={300} height={300} />
        </div>
        <Skeleton variant="text" width={300} height={50} />
      </div>
    </Grid>
  ));

  const list: any = items.map((item: any) => (
    <Item key={item.id} item={item} />
  ));

  return (
    <Grid /* className={classes.root}  */ container spacing={1}>
      {items.length > 0 ? list : skeletons}
    </Grid>
  );
};

export default ItemsList;
