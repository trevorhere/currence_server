const getFollowingEvent = {
    body: null,
    headers: {
      Host: 'localhost:3000',
      Connection: 'keep-alive',
      'Sec-Fetch-Dest': 'empty',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
      'Content-Type': 'application/json',
      Accept: '*/*',
      Origin: 'http://localhost:3001',
      'Sec-Fetch-Site': 'same-site',
      'Sec-Fetch-Mode': 'cors',
      Referer: 'http://localhost:3001/following/x',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9'
    },
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {
      Host: [ 'localhost:3000' ],
      Connection: [ 'keep-alive' ],
      'Sec-Fetch-Dest': [ 'empty' ],
      'User-Agent': [
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
      ],
      'Content-Type': [ 'application/json' ],
      Accept: [ '*/*' ],
      Origin: [ 'http://localhost:3001' ],
      'Sec-Fetch-Site': [ 'same-site' ],
      'Sec-Fetch-Mode': [ 'cors' ],
      Referer: [ 'http://localhost:3001/following/x' ],
      'Accept-Encoding': [ 'gzip, deflate, br' ],
      'Accept-Language': [ 'en-US,en;q=0.9' ]
    },
    multiValueQueryStringParameters: {
      alias: [ 'x' ],
      token: [
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGlhcyI6IngiLCJpYXQiOjE1ODQ5MTcxNjAsImV4cCI6MTU4NDkyMDc2MH0.ubjpz8CFKnz7IN6PAdGWQPAXUOSlFCPaTEnoU5bkLEw'
      ]
    },
    path: '/following',
    pathParameters: null,
    queryStringParameters: {
      alias: 'x',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGlhcyI6IngiLCJpYXQiOjE1ODQ5MTcxNjAsImV4cCI6MTU4NDkyMDc2MH0.ubjpz8CFKnz7IN6PAdGWQPAXUOSlFCPaTEnoU5bkLEw'
    },
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'ck83nypre0003fvwh0sy0bgag',
      httpMethod: 'GET',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        userArn: 'offlineContext_userArn'
      },
      path: '/dev/following',
      protocol: 'HTTP/1.1',
      requestId: 'ck83nyprf0004fvwhe9iz97ed',
      requestTime: '22/Mar/2020:17:19:49 -0600',
      requestTimeEpoch: 1584919189994,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/following',
      stage: 'dev'
    },
    resource: '/following',
    stageVariables: null
  }

  module.exports = getFollowingEvent