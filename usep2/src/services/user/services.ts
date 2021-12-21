import { User } from "../../models/user/types";


export const login = async (
    basicUser: Partial<User>
  ): Promise<Partial<User> | Error> => {
    const response = await fetch("http://104.237.129.63:8017/usep/token/", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(basicUser),
    });
  
    if (basicUser.email && basicUser.password && response.status === 200) {
      const tokens: { access: string; refresh: string } = await response.json();
  
      const logUser: Partial<User> = {
        email: basicUser.email,
        password: basicUser.password,
        token: tokens.access,
        refreshToken: tokens.refresh,
        username: basicUser.username,
      };
  
      return logUser;
    } else {
      throw new Error("Escribe tu Email y contraseña");
    }
};


export const logout = async(basicUser: Partial<User>) => {
  if (basicUser.refreshToken) {

//         console.log(basicUser.refreshToken);
//         await fetchlogout(basicUser.refreshToken);

    const response = await fetch('http://104.237.129.63:8017/usep/logout', {
      method: 'post',
      headers: new Headers({
     'Authorization': `Bearer ${basicUser.token}`,
     'Content-Type': 'application/json',
     'Accept': 'application/json'
      }),
      body: `{"refresh": "${basicUser.refreshToken}"}`,
    });
    return response;
  }
};


export const signin = async (
  basicUser: Partial<User>
): Promise<Partial<User>> => {
  const response = await fetch(
    "http://104.237.129.63:8017/usep/register",
    {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(basicUser),
    }
  );

  if (basicUser.email && basicUser.password && response.status === 200) {
    const tokens: { access: string; refresh: string } = await response.json();

    const logUser: Partial<User> = {
      email: basicUser.email,
      password: basicUser.password,
      token: tokens.access,
      refreshToken: tokens.refresh,
      username: basicUser.username,
    };

    return logUser;
  } else {
    throw new Error("Escribe tu Email y contraseña");
  }
};

export const getInfoUser = async (
  basicUser: Partial<User>
): Promise<Partial<User>> => {
  const response = await fetch("http://104.237.129.63:8017/usep/login", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(basicUser),
  });

  if (basicUser.email && basicUser.password && response.status === 200) {
    const infoUser: User = await response.json();
    return infoUser;
  } else {
    throw new Error("Error en solicitud");
  }
};

