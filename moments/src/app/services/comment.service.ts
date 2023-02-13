import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../environments/environment';
import { Comment } from 'src/app/Coment';
import { Response } from '../Responde';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`
  constructor(private http: HttpClient) { }

  createComment(data: Comment): Observable<Response<Comment>> {
    return this.http.post<Response<Comment>>(`${this.apiUrl}/${data.momentId}/coments`, data)
  }
}
