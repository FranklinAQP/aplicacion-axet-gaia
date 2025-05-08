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

  
  // Refactorización para reducir complejidad ciclomatica y cognitiva
  decisionMakingRefactored(data: any[]): string {
    return data.map(item => this.evaluateItem(item)).join('\n');
  }
  
  private evaluateItem(item: any): string {
    switch (item.type) {
      case 'type1':
        return this.evaluateType1(item);
      case 'type2':
        return this.evaluateType2(item);
      default:
        return 'Other Type';
    }
  }

  private evaluateType1(item: any): string {
    return item.value > 10 ? 'High Type1' : 'Low Type1';
  }

  private evaluateType2(item: any): string {
    return item.isActive ? (item.value < 5 ? 'Active Low Type2' : 'Active High Type2') : 'Inactive Type2';
  }
}
