// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const PROTOCOL_HTTPS      = true;
const HTTP_API            = PROTOCOL_HTTPS ? 'https://' : 'http://';

const MAIL_TO             = 'mailto:';
const PROJECT_EMAIL       = 'projetoPDSI1@projetoPDSI1.com?';
const SUBJECT             = 'Subject=';
const BODY                = 'body=';

const ACCESS              = 'finlearn-api-production.up.railway.app/v1';

export const environment = {
  production: false,
  login: {
    email: 'adm@adm.com.br',
    password: 'Admin123@',
  },

  INSTA         : HTTP_API + 'instagram.com',
  FB            : HTTP_API + 'facebook.com',
  TWITTER       : HTTP_API + 'twitter.com',
  MAIL_TO       : MAIL_TO + PROJECT_EMAIL + SUBJECT + 'Email de contato&' + BODY + "Digite o motivo do contato.",

  HTTP_REQUEST : HTTP_API + ACCESS,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
