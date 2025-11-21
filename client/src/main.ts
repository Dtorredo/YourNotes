import "./style.css";
import "./firebase";
import { setRenderCallbacks, renderLocalNotes } from "./store";
import { renderSidebar, renderNote } from "./ui";
import "./collaboration";

// Break circular dependency
setRenderCallbacks(renderSidebar, renderNote);

// Render local notes immediately
renderLocalNotes();

console.log("App initialized");
