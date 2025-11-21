import './style.css';
import './firebase';
import { setRenderCallbacks } from './store';
import { renderSidebar, renderNote } from './ui';
import './collaboration';

// Break circular dependency
setRenderCallbacks(renderSidebar, renderNote);

console.log('App initialized');
