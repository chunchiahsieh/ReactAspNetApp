import { AppStates } from "controllers/AppController";

export default function logout() {
    // TODO TODO TODO 到時要連到後端，把後端的session清掉與登出
    AppStates.setUser(null);
}