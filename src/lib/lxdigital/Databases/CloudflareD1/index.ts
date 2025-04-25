import type {IDatabase} from "$lib/lxdigital/Databases/IDatabase";
class CloudflareD1 implements IDatabase {

    private _dbReference: D1Database;

    public constructor(db: D1Database){ this._dbReference = db; }

    public async saveClientInfo(client: CRM.Client): Promise<boolean> {
        try {
            const { query, values } = this.prepareInsertQuery(client);
            const { success } = await this._dbReference
                .prepare(query)
                .bind(...values)
                .run();

            return success;
        } catch (error) {
            console.error('Failed to save client:', error);
            return false;
        }
    }


    private prepareInsertQuery(object: Object): { query: string, values: unknown[] } {
        // Filter out undefined values
        const filteredEntries = Object.entries(object)
            .filter(([_, value]) => value !== undefined);

        if (filteredEntries.length === 0) {
            throw new Error("Cannot prepare insert query - no valid client data provided");
        }

        const [keys, values] = filteredEntries.reduce(
            ([ks, vs], [key, value]) => {
                ks.push(key);
                vs.push(value);
                return [ks, vs];
            },
            [[], []] as [string[], unknown[]]
        );

        const columns = keys.join(", ");
        const placeholders = keys.map(() => '?').join(', ');

        return {
            query: `INSERT INTO [clients] (${columns}) VALUES (${placeholders})`,
            values
        };
    }


}

export {CloudflareD1}