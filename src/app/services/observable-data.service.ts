import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ObservableDataService {
  headerVisible = new Subject<boolean>();

  constructor() { }
}
