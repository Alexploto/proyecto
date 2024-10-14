

import * as React from "react";
import Button from "@mui/material/Button";

// MATERIAL UI
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Registrarme from "./Registrarme";
import ButtonComponent from "./atomos/Button";

//este componente va en el navegador
//al clickear en Resgistrarme usar el UseEffect para modificar las propiedades;

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonComponent
        title="login"
        variant="outlined"
        textColor="primary"
        borderColor="succes"
        sx={{width: "100px"}}
        rounded={true}
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Iniciar Sesion</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingrese su correo electronico</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>Ingrese su contraseña</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <Button>Olvide mi contraseña</Button>
        <DialogContentText>
          ¿Aun no posees cuenta?
          <Registrarme />
        </DialogContentText>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={handleClose}>
            Iniciar sesion
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
