import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private URL: string = 'https://hybrid-1634f-default-rtdb.firebaseio.com/collection.json';

  constructor() { }
}
