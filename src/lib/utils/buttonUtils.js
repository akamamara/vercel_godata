import { browser } from '$app/env';
import { goto } from '$app/navigation';

export function onClickRefer(url = '#', newtab = true) {
    if (browser)
        if (!newtab) goto(url);
        else {
            let link = window.open(url, '_blank');
            link.location;
        }
}