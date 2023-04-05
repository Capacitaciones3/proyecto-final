import React,{ useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typografy from '@mui/material/Typography'

const CardUser = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const url = `https://642db4a9bf8cbecdb40d0cf1.mockapi.io/licencias/1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Stack sx={{
      maxWidth:"300px",
      height:"60px",
      flexDirection : "row",
      backgroundColor: "#ffffff",
      border:"0.1px solid #797979",
      alignItems: "flex-start",
      justifyContent:"space-between"
    }}>
    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
    <Stack sx={{border:"1px solid black"}}>
      <Typografy component="span">Nombre</Typografy>
      <Typografy component="p">19/02 - 19-03</Typografy>
      <Typografy component="span">Vacaciones</Typografy>
    </Stack>
    <Stack>
    </Stack>
    </Stack>
  );
  }

export default CardUser;
