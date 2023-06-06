const PROTOCOL_HTTPS      = true;
const HTTP_API            = PROTOCOL_HTTPS ? 'https://' : 'http://';

const MAIL_TO             = 'mailto:';
const PROJECT_EMAIL       = 'projetoPDSI1@projetoPDSI1.com?';
const SUBJECT             = 'Subject=';
const BODY                = 'body=';

const ACCESS              = 'finlearn-api-production.up.railway.app/v1';

export const environment = {
  production: true,
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
