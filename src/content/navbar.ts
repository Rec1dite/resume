import { faContactCard, faHome, faShop } from "@fortawesome/free-solid-svg-icons";

// Toggle the navbar icons on and off
export const showIcons = true;

export enum navPages {
    home = "home",
    gallery = "gallery",
    store = "store",
    contact = "contact",
    notFound = "notFound"
};

type Nav = {
    name: string,
    icon: any,
    link?: string,
    page?: navPages
};

export const navs = [
    {
        "name": "Home",
        "icon": faHome,
        "page": navPages.home
    },
    // {
    //     "name": "Gallery",
    //     "icon": faImage,
    //     "page": navPages.gallery
    // },
    {
        "name": "Store",
        "icon": faShop,
        // "link": "https://www.unrealengine.com/marketplace/en-US/profile/TristanVoulelis",
        "page": navPages.store
    },
    {
        "name": "Contact",
        "icon": faContactCard,
        "page": navPages.contact
    }
];
