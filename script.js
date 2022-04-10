import highway from '@dogstudio/highway';
import Fade from './transiton';


const H = new highway.core({
    transition: {
        default: Fade
    }
});