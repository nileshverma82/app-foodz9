export class AppUser {
    uid: string;
    isAnonymous: boolean;
    displayName?: string;
    email?: string;
    photoUrl?: string;
    accountType?: number; // Anonymous, Google, Faceboo etc...
    createdAt?: Date = new Date();
}