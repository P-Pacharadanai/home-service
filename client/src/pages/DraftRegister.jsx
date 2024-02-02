import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication";

function DraftRegisterPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [avatars, setAvatars] = useState({});

  const { register, login, logout } = useAuth();

  const handleClick = (event) => {
    event.preventDefault();
    const data = {
      firstName: "โดน",
      lastName: "ลบแน่",
      email: "pacharadanaipinake@gmail.com",
      password: "123456789",
    };

    register(data);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      email: "pacharadanaipinake@gmail.com",
      password: "123456789",
    };

    login(data);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <>
      <Button colorScheme="blue" onClick={handleClick}>
        register
      </Button>
      <Button colorScheme="blue" onClick={handleLogin}>
        login
      </Button>
      <Button colorScheme="blue" onClick={handleLogout}>
        logout
      </Button>
    </>
  );
}

export default DraftRegisterPage;
