import CreateRoomView from "../views/createRoom.view.js";

class CreateRoomController {
    view: CreateRoomView
    callback: ()=> void

    constructor(callback: () => void) {
        this.view = new CreateRoomView()
        this.addClickEvents()
        this.callback = callback
    }

    addClickEvents(){
        document.querySelector("#createRoom-close")?.addEventListener("click", ()=>{
            this.return()
        })
    }

    return(){
        this.view.remove(document.querySelector(".create-room") as HTMLElement)
        this.callback()
    }
}

export default CreateRoomController