export const METADATA = {
  ANCHORFM: "anchorFM",
  EDITORS: "editors",
  HOSTS: "hosts",
  PARTICIPANTS: "participants",
};

export const PLATFORMS = Object.freeze({
  ANCHORFM: {
    icon: "",
    url: "https://www.twitter.com",
    rss: "https://anchor.fm/s/951cc10/podcast/rss",
  },
  FACEBOOK: {
    icon: "facebook-square",
    url: "https://www.facebook.com",
  },
  INSTAGRAM: {
    icon: "instagram",
    url: "https://www.instagram.com",
  },
  MASTODON: {
    icon: "mastodon",
    url: "https://botsin.space/",
  },
  TELEGRAM: {
    icon: "telegram-plane",
    url: "https://telegram.org/",
  },
  TWITTER: {
    icon: "twitter",
    url: "https://www.twitter.com",
  },
});

export const PEOPLE = Object.freeze({
  "ana-paula-mendes": {
    name: "Ana Paula Mendes",
    [PLATFORMS.TWITTER]: "ananoterminal",
  },
  "fernando-masanori": {
    name: "Fernando Masanori",
    [PLATFORMS.TWITTER]: "fmasanori",
  },
  "fiquem-sabendo": {
    name: "Fiquem Sabendo",
    [PLATFORMS.TWITTER]: "_fiquemsabendo",
  },
  "joao-ernane": {
    name: "João Ernane",
    [PLATFORMS.TWITTER]: "ChofenAdulto",
  },
  "judite-cypreste": {
    name: "Judite Cypreste",
    [PLATFORMS.TWITTER]: "juditecypreste",
  },
  "leticia-silva": {
    name: "Letícia Silva",
    [PLATFORMS.TWITTER]: "dii_lua",
  },
  "natalia-mazotte": {
    name: "Natália Mazotte",
    [PLATFORMS.TWITTER]: "NataliaMazotte",
  },
  "raphael-hernandes": {
    name: "Raphael Hernandes",
    [PLATFORMS.TWITTER]: "hernandesraph",
  },
  "rodrigo-menegat": {
    name: "Rodrigo Menegat",
    [PLATFORMS.TWITTER]: "RodrigoMenegat",
  },
  turicas: {
    name: "Turicas",
    [PLATFORMS.TWITTER]: "turicas",
  },
});

export const SOCIAL_LINKS = Object.freeze([
  {
    platform: PLATFORMS.TWITTER,
    handle: "@colaboradados",
    url: "https://twitter.com/colaboradados",
  },
  {
    platform: PLATFORMS.TWITTER,
    handle: "@colaborabot",
    url: "https://twitter.com/colabora_bot",
  },
  {
    platform: PLATFORMS.FACEBOOK,
    handle: "colaboradados",
    url: "https://facebook.com/colaboradados",
  },
  {
    platform: PLATFORMS.INSTAGRAM,
    handle: "@colaboradados",
    url: "https://www.instagram.com/colaboradados/",
  },
  {
    platform: PLATFORMS.TELEGRAM,
    handle: "colaboradados",
    url: "https://t.me/colaboradados",
  },
  {
    platform: PLATFORMS.MASTODON,
    handle: "@colaborabot",
    url: "https://botsin.space/@colaborabot",
  },
]);
