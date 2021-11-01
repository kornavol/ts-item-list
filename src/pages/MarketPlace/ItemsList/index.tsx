import React, { FC } from "react";

import { Grid, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { ItemsListStyles, ItemStyles } from "./style";
import noPicture from "../../../assets/pictures/no-img-layout.png";

import EmptySearchMsg from "../../../components/messages/EmptySearchMsg";

import { CurrMeta } from "../../../interfaces";

const Item: FC<any> = ({ item }) => {
  const classes = ItemStyles();
  const images = item.images?.map((img: any, i: number) => (
    <img key={i} src={img?.object_url} alt="product" className={classes.img} />
  ));

  return (
    <Grid item key={item.id} xs={12} sm={6} md={3}>
      <motion.div
        className={classes.root}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images || (
          <img src={noPicture} alt="no-image" className={classes.img} />
        )}
        <p>{item.product_name}</p>
      </motion.div>
    </Grid>
  );
};

interface IProps {
  items: any[];
  meta: CurrMeta;
  searchTerm: string;
}

const ItemsList: FC<IProps> = ({ items, meta, searchTerm }) => {
  const classes = ItemsListStyles();

  console.log(items);
  

  const skeletons: JSX.Element[] = [...Array(meta.limit)].map((el, i) => (
    <Grid item key={i} xs={12} sm={6} md={3}>
      <div className={classes.skeleton}>
        <div className={classes.skeletonImg}>
          <Skeleton variant="rectangular" width={300} height={300} />
        </div>
        <div>
          <Skeleton
            variant="text"
            width={300}
            height={40}
            sx={{ marginBottom: "-5px" }}
          />
          <Skeleton variant="text" width={150} height={40} />
        </div>
      </div>
    </Grid>
  ));

  const list: JSX.Element[] = items
    .filter((item: any) => {
      if (searchTerm === "") {
        return item;
      } else if (
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return item;
      }
    })
    .map((item: any) => <Item key={item.id} item={item} />);

  return (
    <Grid container spacing={1}>
      {items.length > 0 ? (
        list.length > 0 ? (
          list
        ) : (
          <EmptySearchMsg text={searchTerm} />
        )
      ) : (
        skeletons
      )}
    </Grid>
  );
};

export default ItemsList;
