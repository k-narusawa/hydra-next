# HydraNext

## アプリケーションの起動方法

```shell
nx dev idp

ne dev sp
```

## hydra に登録する client

```json
{
  "client_name": "hydra",
  "grant_types": ["authorization_code", "refresh_token", "client_credentials"],
  "response_types": ["code"],
  "redirect_uris": ["http://127.0.0.1:3001/api/auth/callback/hydra", "http://localhost:3001/api/auth/callback/hydra"],
  "post_logout_redirect_uris": ["http://localhost:3001/signout"],
  "scope": "openid offline email",
  "token_endpoint_auth_method": "client_secret_basic",
  "backchannel_logout_uri": "http://host.docker.internal:3001/api/logout/back_channel"
  // "backchannel_logout_uri": null,
  // "frontchannel_logout_uri": "http://localhost:3001/signout/front_channel"
}
```
