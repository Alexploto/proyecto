

import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState, useEffect } from "react";
import CartItem from "./CartItem";
import { CardContext } from "../../Context/CardContext";

export default function ShoppingCart() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [itemsLength, setItemsLength] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { items, emptyCart } = useContext(CardContext);
  const handleClose = () => {
    emptyCart();
    setOpen(false);
  };

  /* Cada vez que se modifica el carrito, actualizamos la cantidad de productos */

  const totalCarrito = items.reduce((total, cerveza) => {
    return total + cerveza.precio * cerveza.quantity;
  }, 0);
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <Badge badgeContent={items.length || "0"}>
          <ShoppingCartIcon
            sx={{ width: "2rem", height: "2rem", color: "#D98504" }}
          />
        </Badge>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Has agregado lo siguiente
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle id="responsive-dialog-title">{"Productos"}</DialogTitle>
        <DialogContent>
          <div>
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                precio={item.precio}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p style={{ width: "50%", fontSize: "2rem", fontWeight: "bold" }}>
              Total de su compra
            </p>
            <p
              style={{
                width: "50%",
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              $ {totalCarrito}
            </p>
          </div>
          <ConfirmarCompra />
        </DialogContent>
        <DialogContent></DialogContent>
        <DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ConfirmarCompra() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // console.log("call backend for promo");
    // const getPromo = async () => {
    //   const res = await fetch("http://localhost:9000/promo");
    //   console.log("res", res);
    // };
    // getPromo();
  }, []);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Confirmar compra
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Felicidades!!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>Gracias por su compra</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
