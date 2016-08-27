import {Component} from '@angular/core'
import {JumpLinkComponent} from './jump-link.component'
import {LanguageComponent} from './language.component'
import {SiteAuthorComponent} from './site-author.component'
import {EmailMeComponent} from './email-me.component'
import {VoteRegComponent} from './vote-reg.component'
import {DonateComponent} from './donate.component'

@Component({
  selector: 'my-app',
  template: `
            <header>
            <div class="left-header">
              <jump-link></jump-link>
            </div>

            <div class="center-header">
              <h1 id="site-title">Slice Vote</h1>
              <site-author></site-author>
            </div>

            <div class="right-header">
              <email-me></email-me>
              <vote-reg></vote-reg>
              <donate></donate>
            </div>
            </header>
            <language></language>
            `,
  directives: [JumpLinkComponent, LanguageComponent, SiteAuthorComponent, EmailMeComponent, VoteRegComponent, DonateComponent]
})

export class AppComponent { }
