import * as React from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

function Info({ setPrice }) {
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const totalPrice = cartItems
    .reduce((sum, product) => {
      if (product?.price && typeof product.price === "number") {
        return sum + product.price;
      }
      return sum;
    }, 0)
    .toFixed(2);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  React.useEffect(() => {
    setPrice(totalPrice);
  }, [setPrice, totalPrice]);

  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        ${totalPrice}
      </Typography>
      <List disablePadding>
        {cartItems?.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText sx={{ mr: 2 }} primary={product.title} />
            <Typography variant="body1" fontWeight="medium">
              ${product.price.toFixed(2)}
            </Typography>
            <IconButton
              edge="end"
              aria-label="remove"
              onClick={() => handleRemove(product.id)}
            >
              <RemoveIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {};

export default Info;
