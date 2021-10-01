import React, { FC } from "react";
import { Grid } from "@mui/material";

import { ItemsListStyles, ItemStyles } from "./style";

const Item: FC<any> = ({ item }) => {
  const classes = ItemStyles();

  // console.log('item', item);
  
/* ! */
  const images = item.images.map((img: any, i:number) => (
    <img key={i} src={img?.object_url} alt="product" className={classes.img} />
  ));

  return (
    <Grid item key={item.id} xs={12} sm={6} md={3}>
      <div className={classes.root}>
        {images}
        <p>{item.product_name}</p>
      </div>
    </Grid>
  );
};

interface IProps {
  items: any[];
}

const ItemsList: FC<IProps> = ({ items }) => {
  const classes = ItemsListStyles();

  const list: any = items.map((item: any) => <Item key={item.id} item={item} />);

  return (
    
      <Grid /* className={classes.root}  */ container spacing={1}>
        {items && list}
      </Grid>
    
  );
};

export default ItemsList;
