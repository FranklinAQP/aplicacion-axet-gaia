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
