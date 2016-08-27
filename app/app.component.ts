import {Component} from '@angular/core'
import {JumpLinkComponent} from './jump-link.component'

@Component({
  selector: 'my-app',
  template: `
            <h1 id="site-title">Slice Vote</h1>
            <jump-link></jump-link>
            `,
  directives: [JumpLinkComponent]
})

export class AppComponent { }
