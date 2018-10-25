export enum CurrencyInput {
    NA = "NA",
    USD = "USD",
    EU = "EU",
    PD = "PD",
    AUD = "AUD"
}

export enum Role {
    ADMIN = "ADMIN",
    GUEST = "GUEST",
    MEMBER = "MEMBER",
    UNKNOWN = "UNKNOWN"
}

export class ChangePasswordInput {
    oldPassword: string;
    newPassword: string;
}

export class CreateUserInput {
    username: string;
    displayName: string;
    email?: string;
    mobile?: string;
    password: string;
}

export class LoginEmailInput {
    email: string;
    password: string;
}

export class LoginUsernameInput {
    username: string;
    password: string;
}

export class AggregateUser {
    count: number;
}

export class AuthPayload {
    refreshToken: string;
    token: string;
    expireDate: DateTime;
    user: User;
}

export class BusinessAnalytics {
    relevance?: number;
    views: number;
    totalProducts?: number;
    totalProductsSold?: number;
    totalCustomersRetained?: number;
    currentMonthSales?: number;
    previousMonthSales?: number;
    previousMonthProfit?: number;
    currentMonthProfit?: number;
}

export abstract class IMutation {
    abstract signup(input?: CreateUserInput): User | Promise<User>;
    abstract signupWithEmail(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    abstract signupWithTwitter(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    abstract signupWithFacebook(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    abstract loginWithEmail(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    abstract loginWithFacebook(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    abstract loginWithTwitter(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    abstract logout(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    abstract refreshToken(): AuthPayload | Promise<AuthPayload>;
    abstract resetPassword(): User | Promise<User>;
    abstract forgotPassword(): AuthPayload | Promise<AuthPayload>;
    abstract changePassword(): AuthPayload | Promise<AuthPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Price {
    basePrice: number;
    currency: CurrencyInput;
    currentPrice: number;
}

export class ProductAnalytics {
    relevance?: number;
    views: number;
    totalProducts?: number;
    totalProductsSold?: number;
    totalCustomersRetained?: number;
    currentMonthSales?: number;
    previousMonthSales?: number;
    previousMonthProfit?: number;
    currentMonthProfit?: number;
}

export abstract class IQuery {
    abstract currentUser(): User | Promise<User>;
    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract userCreated(): User | Promise<User>;
    abstract userLogout(): User | Promise<User>;
    abstract userLogin(): User | Promise<User>;
    abstract profileUpdate(): User | Promise<User>;
}

export class User {
    _id: string;
    _key: string;
    _rev: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    username: string;
    displayName: string;
    email?: string;
    mobile: string;
    password: string;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges?: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export type DateTime = any;
export type JSON = any;
