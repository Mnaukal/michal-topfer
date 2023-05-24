export type TopMenuItem = {
  "label": string,
  "subpages": SubMenuItem[]
}
export type SubMenuItem = {
  "label": string,
  "href": string,
}
export type MenuItemDivider = {}
export type MenuItem = TopMenuItem | SubMenuItem | MenuItemDivider

export function isTopMenuItem(page: MenuItem): page is TopMenuItem {
  return "subpages" in page;
}
export function isSubMenuItem(page: MenuItem): page is SubMenuItem {
  return "href" in page;
}