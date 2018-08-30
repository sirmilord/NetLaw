"use strict";

import NlpAccountsApi from "../bower_components/nlp-api/nlp-api-accounts.js";
import NlpDraftApi from "../bower_components/nlp-api/nlp-api-draft.js";

let apikey = "8eae8cce-302e-4f8f-a82e-54470d6e4642";

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
    accounts: new NlpAccountsApi("https://accounts.netlawplatform.com", apikey),
    draft: new NlpDraftApi("https://draft.netlawplatform.com", apikey),
};

if (localStorage.getItem('session-ticket')) api.ticket = localStorage.getItem('session-ticket');
