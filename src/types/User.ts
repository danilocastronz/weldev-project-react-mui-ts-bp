/**
 * Represents a user.
 */
export type User = {
	/**
	 * The user's unique identifier
	 * @type {string}
	 * @memberof User
	 * @property id
	 * @required
	 * @example
	 * "5e8d8hg8h8h8q8faf8g8f8f"
	 */
	id: string;

	/**
	 * The user's name
	 * @type {string}
	 * @memberof User
	 * @property name
	 * @required
	 * @example
	 * "John Smith"
	 */
	name: string;

	/**
	 * The user's email address
	 * @type {string}
	 * @memberof User
	 * @property email
	 * @required
	 * @example
	 * "john.smith@welcomedeveloper.com"
	 */
	email: string;

	/**
	 * The user's password
	 * @type {string}
	 * @memberof User
	 * @property password
	 * @optional
	 * @example
	 * "password"
	 */
	password?: string;

	/**
	 * The user's created date
	 * @type {Date}
	 * @memberof User
	 * @property createdAt
	 * @required
	 * @example
	 * "2020-01-01T00:00:00.000Z"
	 */
	createdAt: Date;

	/**
	 * The user's updated date
	 * @type {Date}
	 * @memberof User
	 * @property updatedAt
	 * @required
	 * @example
	 * "2020-01-01T00:00:00.000Z"
	 */
	updatedAt: Date;

	/**
	 * The user's deleted date
	 * @type {Date}
	 * @memberof User
	 * @property deletedAt
	 * @optional
	 * @example
	 * "2020-01-01T00:00:00.000Z"
	 */
	deletedAt?: Date;

	/**
	 * The user's status
	 * @type {boolean}
	 * @memberof User
	 * @property status
	 * @required
	 * @example
	 * true
	 * @default
	 * true
	 */
	isActive: boolean;

	/**
	 * The user's role
	 * @type {boolean}
	 * @memberof User
	 * @property isAdmin
	 * @required
	 * @example
	 * true
	 * @default
	 * false
	 */
	isAdmin: boolean;

	/**
	 * The user's verification status
	 * @type {boolean}
	 * @memberof User
	 * @property isVerified
	 * @required
	 * @example
	 * true
	 * @default
	 * false
	 */
	isVerified: boolean;
};
