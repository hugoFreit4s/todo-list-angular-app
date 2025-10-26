export interface RegisterUserRequestDTO {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserRequestDTO {
  email: string;
  password: string;
}

export interface AuthResponseDTO {
  name: string;
  email: string;
  token: string;
  expiresIn: number;
}
