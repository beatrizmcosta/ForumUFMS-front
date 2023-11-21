import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import AccessToken from "../models/access-token.model";

@Injectable()
export default class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<AccessToken>("api/login", { email, password })
  }
}