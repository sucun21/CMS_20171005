package com.sogo.lmscms.settings;

import com.sogo.lmscms.utils.PropertyLoader;

public class UrlSetting {
//    public static final String REST_SERVER = "http://localhost:7575/";
    public static final String REST_SERVER = PropertyLoader.getPropertyByKey("REST_SERVER");
    public static final String REST_AUTH = "sogo-api-user:GNL%JKN8232&jbJJ";
}
