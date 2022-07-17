import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  text = '';
  nome = 'Fabiano Scorsatto';

  pessoas = [
    {
      nome: "Fabiano",
      sobrenome: "Scorsatto"
    },
    {
      nome: "Pessoa",
      sobrenome: "2"
    },
    {
      nome: "Terceira",
      sobrenome: "Pessoa"
    },
    {
      nome: "Ultimo",
      sobrenome: "Humano"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;

      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: string): void {
    console.log('clicou em mim', nome);
  }
}
