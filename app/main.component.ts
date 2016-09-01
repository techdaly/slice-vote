import {Component} from '@angular/core'

@Component({
  selector: 'main',
  template: `
            <div id="main">
              <table>
                <tr>
                  <th> Col 1 </th>
                  <th> Col 2 </th>
                </tr>
                <tr id="row-1">
                  <td class="col-1">
                    <button class="x-button" id="x-1">X</button>
                    <div class="can-img"></div>
                    <p class="can-first">First Name</p>
                    <p class="can-last">Last Name</p>
                  </td>
                  <td class="col-2">
                  <p class="col-2-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </td>
                </tr>
              </table>
            </div>
            `
})

export class MainComponent { }
