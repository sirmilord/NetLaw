"use strict";

import NlpAccountsApi from "../bower_components/nlp-api/nlp-api-accounts.js";
import NlpVaultApi from "../bower_components/nlp-api/nlp-api-vault.js";

let apikey = "dc408573-6031-4d9f-93e1-b180085d06bd";

window.api = {
    set ticket(value) {
        this.accounts.ticket = value;
        this.vault.ticket = value;
        if (value) localStorage.setItem('session-ticket', value); else localStorage.removeItem("session-ticket");
    },
    set onUnauthorized(handler) {
        api.accounts.onUnauthorized = handler;
        api.vault.onUnauthorized = handler;
    },
    accounts: new NlpAccountsApi("http://accounts.netlawplatform.com", apikey),
    vault: new NlpVaultApi("http://vault.netlawplatform.com", apikey),
};

if (localStorage.getItem('session-ticket')) api.ticket = localStorage.getItem('session-ticket');
