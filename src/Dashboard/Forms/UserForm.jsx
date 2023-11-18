import React, { useState } from 'react'
import api from '../../api/axios';
import { Container, TextField, Button, Box, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';


export default function Details() {
  const user = useLocation().state;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [process, setProcess] = useState('Edit');
  const [read, setRead] = useState(true);
  const handleChange = (e, handler) => {
    console.log(e.target.value);
    handler(e.target.value);
  }

  const handleSubmit = async () => {
    if (name !== '' && email !== "" && password !== "") {
      try {
        const resp = await api.post(`/api/updateUser/${user._id}`, {
          name: name,
          email: email,
          password: password
        });
        alert('Deletion complete');

        console.log(resp);

      }
      catch (e) {
        alert(e.message);
      }
    }
  }


  const handleClick = (e) => {
    if (read) {
      setRead(false)
      console.log('read changed to ' + read)
      setProcess('Cancel')

    }
    else {

      setName(user.name)
      setEmail(user.email)
      setPassword(user.password)
      setRead(true)
      setProcess('Edit')
    }
  }
  return (
    <Container component="main" maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 6 }}>
      <Grid container spacing={2}>
        <TextField
          required
          fullWidth
          InputProps={{
            readOnly: read,
          }}
          id="outlined-name-input"
          label="Name"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          sx={{
            mb: 3
          }}
        />
        <TextField
          required
          fullWidth
          InputProps={{
            readOnly: read,
          }}
          id="outlined-email-input"
          label="Email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
          sx={{
            mb: 3
          }}
        />
        <TextField
          InputProps={{
            readOnly: read,
          }}
          required
          fullWidth
          id="outlined-password-input"
          label="Password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          sx={{
            display: (read) ? "none" : "initial",
            mb: 3
          }}
        />
        <Box sx={{ display: "flex", width: "100%" }} >
          <Button variant='contained' onClick={handleClick} sx={{ flexGrow: 1 }}>{process}</Button>
          <Button hidden={read} variant='contained' onClick={handleSubmit} sx={{
            display: (read) ? "none" : "initial", flexGrow: 1, ml: 4
          }}>Submit</Button>
        </Box>
      </Grid>
    </Container>
  )
}
