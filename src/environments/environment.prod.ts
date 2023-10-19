const PROTOCOL_HTTPS      = true;
const HTTP_API            = PROTOCOL_HTTPS ? 'https://' : 'http://';

const MAIL_TO             = 'mailto:';
const PROJECT_EMAIL       = 'projetoPDSI1@projetoPDSI1.com?';
const SUBJECT             = 'Subject=';
const BODY                = 'body=';

const ACCESS              = 'finlearn-api-production.up.railway.app/v1';
const AUTH_ROUTE          = "auth";

export const environment = {
  production: true,

  INSTA         : HTTP_API + 'instagram.com',
  FB            : HTTP_API + 'facebook.com',
  TWITTER       : HTTP_API + 'twitter.com',
  MAIL_TO       : MAIL_TO + PROJECT_EMAIL + SUBJECT + 'Email de contato&' + BODY + "Digite o motivo do contato.",
  AUTHENTICATION: AUTH_ROUTE,

  HTTP_REQUEST : HTTP_API + ACCESS,

};
