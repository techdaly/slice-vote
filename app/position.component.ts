import {Component} from '@angular/core'

@Component({
  selector: 'position',
  template: `
            <div id="position">
              <label for="position">Position</label>
              <br>
              <select name="position">
                <option value="mayor">Mayor</option>
                <option value="county-commissioner-D1">County Commissioner, District #1</option>
                <option value="county-commissioner-D3">County Commissioner, District #3</option>
                <option value="county-commissioner-D4">County Commissioner, District #4</option>
                <option value="city-commissioner-P1">City Commissioner, Position 1</option>
                <option value="city-commissioner-P4">City Commissioner, Position 4</option>
                <option value="metro-councilor-D5">Metro Councilor, 5th District</option>
                <option value="metro-councilor-D6">Metro Councilor, 6th District</option>
              </select>
            </div>
            `
})

export class PositionComponent { }
