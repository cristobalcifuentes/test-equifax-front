import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user.model';
import { MessageDto } from '../models/message-dto.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL: string = environment.URL_BASE + '/auth';

  constructor(private http: HttpClient) {}

  createNewUser(newUser: NewUser): Observable<MessageDto> {
    return this.http.post<MessageDto>(this.authURL + '/new_user', newUser);
  }
}