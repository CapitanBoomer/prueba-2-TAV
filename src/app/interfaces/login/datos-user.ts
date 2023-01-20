export interface DatosUser {
  username: string,
  password: string
}

export interface RespDatos {
  id: string,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: 'male' | 'female',
  token: string,
  image: string
}
