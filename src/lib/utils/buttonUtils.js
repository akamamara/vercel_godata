import { browser } from '$app/env';
import { goto } from '$app/navigation';

export function onClickRefer(url = '#') {
    if (browser) goto(url);
}