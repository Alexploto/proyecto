

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import ButtonComponent from "./atomos/Button";

export default function Registrarme() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert("¡Las contraseñas no coinciden!");
      return;
    }

    const response = await fetch("http://localhost:9000/api/register", {
      // Cambia la URL si es necesario
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      handleClose(); // Cerrar el diálogo al éxito
    } else {
      alert(data.error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Suscribirme
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registrarme</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>Ingrese su correo electrónico</DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Correo Electrónico"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </DialogContent>

          <DialogContent>
            <DialogContentText>Ingrese su contraseña</DialogContentText>
            <TextField
              required
              margin="dense"
              id="password"
              name="password"
              label="Contraseña"
              type="password"
              fullWidth
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>

          <DialogContent>
            <DialogContentText>Repetir Contraseña</DialogContentText>
            <TextField
              required
              margin="dense"
              id="confirmPassword"
              name="confirmPassword"
              label="Repetir Contraseña"
              type="password"
              fullWidth
              variant="standard"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </DialogContent>
          <DialogContent>
            <Checkbox
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              inputProps={{ "aria-label": "Recordarme" }}
            />
            Recordarme
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Registrar</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Checkbox from "@mui/material/Checkbox";

// export default function Registrarme() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Suscribirme
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Registrarme</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Ingrese su correo electronico</DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>

//         <DialogContent>
//           <DialogContentText>Ingrese su contraseña</DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="password"
//             type="password"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>

//         <DialogContent>
//           <DialogContentText>Repetir Contraseña</DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="password"
//             type="password"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogContent>
//           Recordarme
//           <Checkboxes></Checkboxes>
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={handleClose}>Cancelar</Button>
//           <Button onClick={handleClose}>Registrar</Button>
//           <DialogContentText></DialogContentText>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// function Checkboxes() {
//   return (
//     <div>
//       <Checkbox {...label} defaultChecked />
//     </div>
//   );
// }
