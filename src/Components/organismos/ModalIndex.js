

import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import ButtonComponent from "../atomos/Button";
import Default from "@/styles/Default";
import { Box, Button } from "@mui/material";

//va exportado como primer componente de Index.js

export default function ModalIndex() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Bienvenido</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Sos mayor de 18 años?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>si</Button>
          <Link href="https://www.google.com.ar/" underline="always">
            No
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
