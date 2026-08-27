import { ID, Account, Client} from "appwrite";
import Config from "react-native-config";
import { Snackbar } from "react-native-snackbar";

const appwriteClint = new Client();

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
    email :string;
    password: string;
    name: string;
}
type LoginUserAccount = {
    email :string;
    password: string;
}

export default class AppwriteService {
    account;

    constructor() {
        appwriteClint
            .setEndpoint(APPWRITE_ENDPOINT)
            .setProject(APPWRITE_PROJECT_ID);

        this.account = new Account(appwriteClint);
    }

    // Create a new record of user inside appwrite
    async createAccount({email, password, name}: CreateUserAccount) {
        try{
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            })
            if(userAccount) {
                return this.login({
                    email,
                    password,
                })
            } else {
                return userAccount;
            }
        } catch(error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            })
            console.log("Appwrite service :: createAccount() :: " + error);
            
        }
    }

    async login({email, password}: LoginUserAccount) {
        try{
            const user = await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })
            return user;
        } catch(error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            })
            console.log("Appwrite service :: login() :: " + error);
        }
    }

    async getCurrentUser() {
        try{
            const user = await this.account.get();
            return user;
        } catch(error) {
            console.log("Appwrite service :: getCurrentUser() :: " + error);
        }
    }

    async logout() {
        try{
            const user = await this.account.deleteSession({ sessionId: "current" });
            return user;
        } catch(error) {
            console.log("Appwrite service :: logout() :: " + error);
        }
    }
} 
       
