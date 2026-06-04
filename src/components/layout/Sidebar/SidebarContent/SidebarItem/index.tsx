import overview from "./overview";
import management from "./management";
import other from "./other";

const sidebarItems = {
    items: [overview, management, other]
} as const;

export default sidebarItems;