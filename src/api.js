"use strict";

import NlpAccountsApi from "../bower_components/nlp-api/nlp-api-accounts.js";
import NlpDraftApi from "../bower_components/nlp-api/nlp-api-draft.js";

let apikey = "8eae8cce-302e-4f8f-a82e-54470d6e4642";
let local = location.hostname.endsWith(".example.com") ? true : false;

window.api = {
    set ticket(value) {
        this.draft.ticket = value;
        this.accounts.ticket = value;
        if (value) localStorage.setItem('session-ticket', value); else localStorage.removeItem("session-ticket");
    },
    set onUnauthorized(handler) {
        api.accounts.onUnauthorized = handler;
        api.draft.onUnauthorized = handler;
    },
    accounts: new NlpAccountsApi(local ? "http://localhost:35026" : "https://accounts.netlawplatform.com", apikey),
    draft: new NlpDraftApi(local ? "http://localhost:12282" : "https://draft.netlawplatform.com", apikey),
};

if (localStorage.getItem('session-ticket')) api.ticket = localStorage.getItem('session-ticket');
