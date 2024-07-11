export type InfoType = "domain" | "contact";

export type WhoisRecord = {
  // domain info
  domainName: string;
  registrarName: string;
  registrationDate: Date | string;
  expirationDate: Date | string;
  estimatedDomainAge: number;
  hostnames: string;
  // contact info
  registrantName: string;
  technicalContactName: string;
  administrativeContactName: string;
  contactEmail: string;
};
