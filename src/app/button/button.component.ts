import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button 
  class="button" 
  style="
    color: {{ textColor }};
    background-color: {{ backgroundColor }};">
    {{ content }}
  </button>
  `,
  styles: [`
    .button{
      padding: .3em .8em;
      /* background-color: var(--color3);
      color: var(--color4); */
      font-weight: 600;
      border: none;
      border-radius: .3em;
    }
    .button:hover{
      filter: brightness(.9);
      cursor: pointer;
    }
  `]
})
export class ButtonComponent {
  @Input() content: string = "REGRESAR";
  @Input() textColor: string = "#EEEEEE";
  @Input() backgroundColor: string = "#00ADB5";
}
