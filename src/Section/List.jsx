import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

function List() {
  const product = useSelector((state) => state.product.product);
  console.log(product);

  return (
    <Grid sx={{ padding: "20px" }} container>
      <Grid item xs={12}>
        <Box sx={{marginLeft:"25px"}}>
<Typography>{product.length} ITEMS</Typography>
        </Box>
      </Grid>
      {product.map((data,key) => (
        <Grid sx={{padding:"20px"}} key={key} item md={3} xs={12  }>
          <ProductCard data={data}/>
        </Grid>

       ))}
    </Grid>
  );
}

export default List;
