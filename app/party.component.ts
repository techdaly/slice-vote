import {Component} from '@angular/core'

@Component({
  selector: 'party',
  template: `
            <div id="party">
              <label for="party">Party</label>
              <br>
              <select name="party">
                <option value="non-affiliated">Non-affiliated</option>
                <option value="democratic">Democratic</option>
                <option value="republican">Republican</option>
                <option value="independent">Independent</option>
                <option value="working-families">Working Families</option>
                <option value="pacific-green">Pacific Green</option>
                <option value="constitution">Constitution</option>
                <option value="progressive">Progressive</option>
                <option value="americans-elect">Americans Elect</option>
                <option value="all">All Parties</option>
              </select>
            </div>
            `
})

export class PartyComponent { }
