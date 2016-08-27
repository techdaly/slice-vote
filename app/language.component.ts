import {Component} from '@angular/core'

@Component({
  selector: 'language',
  template: `
            <div id="language">
              <label for="language">Languages</label>
              <br>
              <select name="language">
                <option value="english">English</option>
                <option class="dim" value="spanish">Español</option>
                <option class="dim" value="russian">русский</option>
                <option class="dim" value="vietnamese">Tiếng Việt</option>
                <option class="dim" value="ukrainian">український</option>
                <option class="dim" value="hmong">ชาวม้ง</option>
              </select>
            </div>
            `
})

export class LanguageComponent { }
