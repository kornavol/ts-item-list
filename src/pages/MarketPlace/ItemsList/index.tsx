import React, { FC } from "react";

import { Grid , Skeleton} from "@mui/material";
import { motion } from "framer-motion";
import { ItemsListStyles, ItemStyles } from "./style";
import noPicture from "../../../assets/pictures/no-img-layout.png";

import EmptySearchMsg from '../../../components/messages/EmptySearchMsg'

import { Meta } from "../../../interfaces";

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
  meta: Meta;
  searchTerm: string;
}

const ItemsList: FC<IProps> = ({ items, meta, searchTerm }) => {
  const classes = ItemsListStyles();

  const skeletons: JSX.Element[] = [...Array(meta.limit)].map((el, i) => (
    <Grid item key={i} xs={12} sm={6} md={3}>
      <div className={classes.skeleton}>
        <div className={classes.skeletonImg}>
          <Skeleton variant="rectangular" width={300} height={300} />
        </div>
        <Skeleton variant="text" width={300} height={50} />
      </div>
    </Grid>
  ));

  function compare(a: any, b: any): number {
    const first = a.product_name.split(" ");
    const second = b.product_name.split(" ");

    return first[1] - second[1]
  }

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
    // .sort(compare)
    .sort((a, b) => a.product_name.localeCompare(b.product_name))
    .sort(compare)
    // .sort((a, b) => a.product_name.split(" ", 1).localeCompare(b.product_name.split(" ", 1)))
    .map((item: any) => <Item key={item.id} item={item} />);

  return (
    <Grid  container spacing={1}>
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
