import {Component} from 'angular2/core'
import {NavComponent} from './nav.component'

@Component({
    selector: 'wingoes',
    template: `

        <wingoes-nav></wingoes-nav>

        <h4>Now we should show some photos or some shit</h4>

    `,
    directives: [NavComponent]
})
export class WingoesComponent { }