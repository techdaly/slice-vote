import {Component} from '@angular/core'

@Component({
  selector: 'jump-link',
  template: `
            <div id="jumplink">
            <h3>Jump-To Links</h3>
            <ul>
              <li><a href="#">Languages</a></li>
              <li><a href="#">Site Authors</a></li>
              <li><a href="#">Voting Reminders</a></li>
              <li><a href="#">Voter Registration</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Table Navigation</a></li>
              <li><a href="#">Main Table</a></li>
            </ul>
            </div>
            `
})

export class JumpLinkComponent { }
