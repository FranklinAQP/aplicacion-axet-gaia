import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-refactored',
  templateUrl: './refactored.component.html',
  styleUrls: ['./refactored.component.scss']
})
export class RefactoredComponent {
  data: number[] = [1, 2, 3, 4];
  // Manejo de estado con BehaviorSubject para mejor gestión y reactividad
  private _stateSubject = new BehaviorSubject<string>('initial');
  public state$ = this._stateSubject.asObservable();

  // Función refactorizada usando métodos nativos
  calculateSum(data: number[]): number {
    return data.reduce((acc, curr) => acc + curr, 0);
  }

  // Función reutilizable, eliminando repetición
  referenceSum(data: number[], multiplier: number = 1): number {
    return this.calculateSum(data) * multiplier;
  }

  updateState(newState: string): void {
    this._stateSubject.next(newState);
  }

  // Función con alta complejidad ciclomatica y cognitiva
  decisionMaking(data: any[]): string {
    let result = '';
    for (let item of data) {
      if (item.type === 'type1') {
        if (item.value > 10) {
          result += 'High Type1\n';
        } else {
          result += 'Low Type1\n';
        }
      } else if (item.type === 'type2') {
        if (item.isActive) {
          if (item.value < 5) {
            result += 'Active Low Type2\n';
          } else {
            result += 'Active High Type2\n';
          }
        } else {
          result += 'Inactive Type2\n';
        }
      } else {
        result += 'Other Type\n';
      }
    }
    return result;
  }
}
