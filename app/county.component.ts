import {Component} from '@angular/core'

@Component({
  selector: 'county',
  template: `
            <div id="county">
              <label for="county">County</label>
              <br>
              <select name="county">
                <option value="baker">Baker County</option>
                <option value="benton">Benton County</option>
                <option value="clackamas">Clackamas County</option>
                <option value="clatsop">Clatsop County</option>
                <option value="columbia">Columbia County</option>
                <option value="coos">Coos County</option>
                <option value="crook">Crook County</option>
                <option value="curry">Curry County</option>
                <option value="deschutes">Deschutes County</option>
                <option value="douglas">Douglas County</option>
                <option value="gilliam">Gilliam County</option>
                <option value="grant">Grant County</option>
                <option value="harney">Harney County</option>
                <option value="hood-river">Hood River County</option>
                <option value="jackson">Jackson County</option>
                <option value="jefferson">Jefferson County</option>
                <option value="josephine">Josephine County</option>
                <option value="klamath">Klamath County</option>
                <option value="lake">Lake County</option>
                <option value="lane">Lane County</option>
                <option value="lincoln">Lincoln County</option>
                <option value="linn">Linn County</option>
                <option value="malheur">Malheur County</option>
                <option value="marion">Marion County</option>
                <option value="morrow">Morrow County</option>
                <option value="multnomah">Multnomah County</option>
                <option value="polk">Polk County</option>
                <option value="sherman">Sherman County</option>
                <option value="tillamook">Tillamook County</option>
                <option value="umatilla">Umatilla County</option>
                <option value="union">Union County</option>
                <option value="wallowa">Wallowa County</option>
                <option value="wasco">Wasco County</option>
                <option value="washington">Washington County</option>
                <option value="wheeler">Wheeler County</option>
                <option value="yamhill">Yamhill County</option>
              </select>
            </div>
            `
})

export class CountyComponent { }
