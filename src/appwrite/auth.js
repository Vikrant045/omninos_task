import { Client,Account } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65f08754c09ed957c301');

export const account = new Account(client)      