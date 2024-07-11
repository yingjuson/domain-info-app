import { WhoisRecord } from "@/types/domain.type";
import { ColumnDef } from "@tanstack/react-table";

export const domainInfoColumns: ColumnDef<WhoisRecord>[] = [
  {
    accessorKey: "domainName",
    header: "Domain Name",
  },
  {
    accessorKey: "registrarName",
    header: "Registrar",
  },
  {
    accessorKey: "registrationDate",
    header: "Registration Date",
  },
  {
    accessorKey: "expirationDate",
    header: "Expiration Date",
  },
  {
    accessorKey: "estimatedDomainAge",
    header: "Estimated Domain Age",
  },
  {
    accessorKey: "hostnames",
    header: "Hostnames",
  },
];
