import { getElements, homeElements } from "../selectors/home.selector.js"
import home from "../templates/home.template.js"
import ui from "./ui.view.js"

class HomeView extends ui{
    elements: homeElements

    
    constructor(){
        super()

        this.render(home())
        this.elements = getElements()
    }
}

export default HomeView