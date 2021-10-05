/**
 * Represents a menu item.
 */
export type MenuItem = {
  /**
   * The menu item's unique identifier
   *
   * @type {number}
   * @memberof MenuItem
   * @property id
   * @example
   * 1
   */
  id: number;

  /**
   * The menu item's name
   *
   * @type {string}
   * @memberof MenuItem
   * @example
   * "Dashboard"
   */
  name: string;

  /**
   * The menu item's description
   *
   * @type {string}
   * @memberof MenuItem
   * @example
   * "My Dashboard Page"
   *
   * @default ""
   * @optional
   */
  description?: string;

  /**
   * The menu item's status
   *
   * @type {boolean}
   * @memberof MenuItem
   * @example
   * true
   *
   * @default true
   */
  active: boolean;
};
