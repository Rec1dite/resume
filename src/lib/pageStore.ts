import { get, writable } from "svelte/store";
import { navPages } from "../content/navbar";

const basePath = "/site";

function createPageStore() {
    const currPage = writable<navPages>(navPages.home);

    return {
        subscribe: currPage.subscribe,
        update: (updater: (page: navPages) => navPages) => {
            currPage.update(updater);
            window.history.pushState({}, "", `${basePath}/${get(currPage)}`);
        },
        set: (page: navPages) => {
            currPage.set(page);
            window.history.pushState({}, "", `${basePath}/${get(currPage)}`);
        }
    }
}

export const pageStore = createPageStore();