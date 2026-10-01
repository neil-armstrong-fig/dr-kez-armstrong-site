export type NavigationItem = {
  readonly href: string;
  readonly label: string;
};

export const site = {
  name: "Kez Armstrong",
  descriptor: "Ornithologist & ecological consultant",
  origin: "https://kezarmstrong.com",
  email: "kestrelsNI@gmail.com",
  linkedin: "https://www.linkedin.com/in/dr-kez-armstrong-3076a050/",
  twitter: "https://www.twitter.com/alethionaut",
} as const;

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

  return `${base}/${path.replace(/^\/+/, "")}`;
}

export function withoutBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

  return base && pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;
}

export const navigation: readonly NavigationItem[] = [
  {href: "/services/", label: "Services"},
  {href: "/about/", label: "About"},
  {href: "/kestrels-ni/", label: "Kestrels NI"},
  {href: "/cv/", label: "CV"},
  {href: "/contact/", label: "Contact"},
];
