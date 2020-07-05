export const METADATA = {
  ANCHORFM: "anchorFM",
  EMBED: "Embed",
  EDITORS: "editors",
  HOSTS: "hosts",
  PARTICIPANTS: "participants",
};

export const PLATFORMS = Object.freeze({
  ANCHORFM: {
    name: "Anchor FM",
    icon: "",
    url: "https://www.twitter.com",
    rss: "https://anchor.fm/s/951cc10/podcast/rss",
  },
  FACEBOOK: {
    name: "Facebook",
    icon: "facebook-square",
    url: "https://www.facebook.com",
  },
  INSTAGRAM: {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com",
  },
  MASTODON: {
    name: "Mastodon",
    icon: "mastodon",
    url: "https://botsin.space/",
  },
  TELEGRAM: {
    name: "Telegram",
    icon: "telegram-plane",
    url: "https://telegram.org/",
  },
  TWITTER: {
    name: "Twitter",
    icon: "twitter",
    url: "https://www.twitter.com",
  },
});

export const PEOPLE = Object.freeze({
  "ana-paula-mendes": {
    name: "Ana Paula Mendes",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/ananoterminal",
      handle: "@ananoterminal",
    },
  },
  "fernando-masanori": {
    name: "Fernando Masanori",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/fmasanori",
      handle: "@fmasanori",
    },
  },
  "fiquem-sabendo": {
    name: "Fiquem Sabendo",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/_fiquemsabendo",
      handle: "@_fiquemsabendo",
    },
  },
  "joao-ernane": {
    name: "João Ernane",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/o_jovemadulto",
      handle: "@o_jovemadulto",
    },
  },
  "judite-cypreste": {
    name: "Judite Cypreste",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/juditecypreste",
      handle: "@juditecypreste",
    },
  },
  "leticia-silva": {
    name: "Letícia Silva",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/dii_lua",
      handle: "@dii_lua",
    },
  },
  "natalia-mazotte": {
    name: "Natália Mazotte",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/NataliaMazotte",
      handle: "@NataliaMazotte",
    },
  },
  "raphael-hernandes": {
    name: "Raphael Hernandes",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/hernandesraph",
      handle: "@hernandesraph",
    },
  },
  "rodrigo-menegat": {
    name: "Rodrigo Menegat",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/RodrigoMenegat",
      handle: "@RodrigoMenegat",
    },
  },
  turicas: {
    name: "Turicas",
    [PLATFORMS.TWITTER]: {
      url: "https://www.twitter.com/turicas",
      handle: "@turicas",
    },
  },
});

export const SOCIAL_LINKS = Object.freeze([
  {
    platform: PLATFORMS.TWITTER,
    handle: "@colaboradados",
    title: "colaboradados",
    url: "https://twitter.com/colaboradados",
  },
  // {
  //   platform: PLATFORMS.TWITTER,
  //   handle: "@colaborabot",
  //   url: "https://twitter.com/colabora_bot",
  // },
  {
    platform: PLATFORMS.FACEBOOK,
    handle: "colaboradados",
    title: "colaboradados",
    url: "https://facebook.com/colaboradados",
  },
  {
    platform: PLATFORMS.INSTAGRAM,
    handle: "@colaboradados",
    title: "colaboradados",
    url: "https://www.instagram.com/colaboradados/",
  },
  {
    platform: PLATFORMS.TELEGRAM,
    handle: "colaboradados",
    title: "colaboradados",
    url: "https://t.me/colaboradados",
  },
  // {
  //   platform: PLATFORMS.MASTODON,
  //   handle: "@colaborabot",
  //   url: "https://botsin.space/@colaborabot",
  // },
]);
