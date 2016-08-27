import {Component} from '@angular/core'
import {JumpLinkComponent} from './jump-link.component'
import {LanguageComponent} from './language.component'
import {SiteAuthorComponent} from './site-author.component'
import {EmailMeComponent} from './email-me.component'
import {VoteRegComponent} from './vote-reg.component'
import {DonateComponent} from './donate.component'
import {CountyComponent} from './county.component'
import {PartyComponent} from './party.component'
import {BallotItemComponent} from './ballot-item.component'
import {PositionComponent} from './position.component'

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

            <h2 id="eval-title">You are currently evaluating the</h2>

            <nav>
              <county></county>
              <party></party>
              <ballot-item></ballot-item>
              <p>for</p>
              <position></position>
            </nav>
            `,
  directives: [JumpLinkComponent, LanguageComponent, SiteAuthorComponent, EmailMeComponent, VoteRegComponent, DonateComponent, CountyComponent, PartyComponent]
})

export class AppComponent { }
