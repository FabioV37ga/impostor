import ui from "./ui.view.js";
import { createRoom, confirmedWord } from "../templates/createRoom.template.js";

class CreateRoomView extends ui{
    constructor(){
        super()
        this.render(createRoom())
    }
}

export default CreateRoomView