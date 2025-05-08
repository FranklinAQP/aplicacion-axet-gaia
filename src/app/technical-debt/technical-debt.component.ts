import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-debt',
  templateUrl: './technical-debt.component.html',
  styleUrls: ['./technical-debt.component.scss']
})
export class TechnicalDebtComponent {
  data: number[] = [1, 2, 3, 4];
  // Estado global hardcodeado
  state = 'initial';

  // Funciones con deuda técnica
  totalSum(data: number[]): number {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum;
  }

  // Repetición de lógica innecesaria
  duplicateLogic(data: number[]): number {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum * 2;
  }  

  updateStateHard(newState: string): void {
    this.state = newState;
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
