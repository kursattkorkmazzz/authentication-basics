# JWT Authentication

1. When server get request, it checks whether request contains the `Authorization` header or not.

2. If not contains server set the new header which is called `WWW-Authorization` header with "basic" value.

3. When browsers get the response with `WWW-Authorization` header, browser asks the credentials to users.

![image](https://roadmap.sh/guides/basic-authentication.png)
