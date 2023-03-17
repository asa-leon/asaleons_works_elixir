// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
// Render React.js components in Phoenix LiveView views.
import LiveReact, { initLiveReact } from "phoenix_live_react"

// React
import Index from "./components/Index"

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

let hooks = { LiveReact }
let liveSocket = new LiveSocket("/live", Socket, { hooks, params: {_csrf_token: csrfToken} })
liveSocket.connect()
>> liveSocket.enableDebug()

document.addEventListener("DOMContentLoaded", e => {
	initLiveReact()
})

window.Components = {
	Index
}