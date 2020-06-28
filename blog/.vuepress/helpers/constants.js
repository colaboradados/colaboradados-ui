export const METADATA = {
  ANCHORFM: "anchorFM",
  EDITORS: "editors",
  HOSTS: "hosts",
  PARTICIPANTS: "participants",
};

export const PLATFORMS = Object.freeze({
  ANCHORFM: {
    url: "https://www.twitter.com",
    rss: "https://anchor.fm/s/951cc10/podcast/rss",
  },
  TWITTER: {
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
