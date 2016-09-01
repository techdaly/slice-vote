import {Component} from '@angular/core'

@Component({
  selector: 'ballot-item',
  template: `
            <div id="ballot-item">
              <label for="ballot-item">Item</label>
              <br>
              <select name="ballot-item">
                <option value="candidates">Candidates</option>
                <option value="measure">Measure</option>
              </select>
            </div>
            `
})

export class BallotItemComponent { }
