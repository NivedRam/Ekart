import {
  Box,
  Button,
  Card,
 
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

function ProductCard({ data }) {
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleAddToCart = (item) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    existingCartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    Swal.fire({
      title: "Done!",
      text: "Product Added To Cart!",
      icon: "success",
    });
  };

  return (
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <Box sx={{ width: "100%", height: "300px" }}>
        <img
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
          src={data.image}
          alt={data.title}
        />
      </Box>
      <CardContent>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "300px",
          }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {data.title}
        </Typography>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={() => handleAddToCart(data)}>Add To Cart</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
