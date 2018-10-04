'use strict';

let apikey = "eaa6dcf1-c067-416a-adca-31656c18225d"; //customers API Key

window.api = {
    set ticket(value) {
        this.accounts.ticket = value;
        this.draft.ticket = value;
        this.customers.ticket = value;
        this.vault.ticket = value;
        if (value) localStorage.setItem('session-ticket', value); else localStorage.removeItem("session-ticket");
    },
    set onUnauthorized(handler) {
        api.accounts.onUnauthorized = handler;
        api.draft.onUnauthorized = handler;
        api.customers.onUnauthorized = handler;
        api.vault.onUnauthorized = handler;
    },

    accounts: new NetLawPlatform.AccountsApi("https://accounts.netlawplatform.com", apikey),
    draft: new NetLawPlatform.DraftApi("https://draft.netlawplatform.com", apikey),
    customers: new NetLawPlatform.CustomersApi("https://customers.netlawplatform.com", apikey),
    vault: new NetLawPlatform.VaultApi("https://vault.netlawplatform.com", apikey),
};

if (localStorage.getItem('session-ticket')) api.ticket = localStorage.getItem('session-ticket');
