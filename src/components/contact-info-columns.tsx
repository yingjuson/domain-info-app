import { WhoisRecord } from "@/types/domain.type";
import { ColumnDef } from "@tanstack/react-table";

export const contactInfoColumns: ColumnDef<WhoisRecord>[] = [
  {
    accessorKey: "registrantName",
    header: "Registrant Name",
  },
  {
    accessorKey: "technicalContactName",
    header: "Technical Contact Name",
  },
  {
    accessorKey: "administrativeContactName",
    header: "Administrative Contact Name",
  },
  {
    accessorKey: "contactEmail",
    header: "Contact Email",
  },
];
