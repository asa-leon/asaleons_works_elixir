// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

// React
import React from "react"
import ReactDOM from "react-dom"

import Hello from "./hello"

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

let liveSocket = new LiveSocket("/live", Socket, 
    {params: {_csrf_token: csrfToken}})

// Rendering relatives
const hello = document.getElementById("hello")
ReactDOM.render(<Hello />, hello)