import React, { FC } from "react";

import { motion } from "framer-motion";
import picture from "../../assets/pictures/no-results.png";
import { EmptySearchMsg as style } from "./style";

interface IProps {
  text: string;
}

const EmptySearchMsg: FC<IProps> = ({ text }) => {
  const classes = style();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={classes.root}
    >
      <img className={classes.img} src={picture} alt="no-results" />
      <h4 className={classes.message}>
        No result found for <span className={classes.text}>{text}</span> product
      </h4>
    </motion.div>
  );
};

export default EmptySearchMsg;
