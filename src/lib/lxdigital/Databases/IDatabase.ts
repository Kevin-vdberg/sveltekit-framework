interface IDatabase {
    saveClientInfo(client: CRM.Client):Promise<boolean>;
}

export type {IDatabase}