import { FC, useState } from "react";
import { contactInfoColumns } from "@/components/contact-info-columns";
import { domainInfoColumns } from "@/components/domain-info-columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { INFORMATION_TYPE } from "@/contants/domain.constants";
import { useWhoisApi } from "@/hooks/useWhoisApi";
import { InfoType, WhoisRecord } from "@/types/domain.type";
import debounce from "debounce";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const HomePage: FC = () => {
  const [infoType, setInfoType] = useState<InfoType>(INFORMATION_TYPE.domain);
  const [searchQuery, setSearchQuery] = useState("");
  const [domainInfo, setDomainInfo] = useState<WhoisRecord>();

  const { getInformationByDomainName } = useWhoisApi();

  const handleSearchInput = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    250
  );

  const handleSearchClick = async () => {
    const responseData = await getInformationByDomainName(searchQuery);

    if (responseData) {
      setDomainInfo(responseData);
    }
  };

  const getTableColumns = () => {
    return infoType === INFORMATION_TYPE.contact
      ? contactInfoColumns
      : domainInfoColumns;
  };

  return (
    <div className="container h-screen py-10 flex flex-col items-center gap-10">
      <div className="md:w-4/6 w-full flex gap-2">
        <Input placeholder="Enter domain name" onChange={handleSearchInput} />
        <Button onClick={handleSearchClick}>Search</Button>
      </div>

      <div>
        <Label htmlFor="info_type" className="font-bold text-md">
          Choose Information Type
        </Label>
        <RadioGroup
          className="flex justify-between mt-2"
          defaultValue={infoType}
          onValueChange={(newValue: InfoType) => setInfoType(newValue)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="domain" id="domain" />
            <Label htmlFor="domain">Domain</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="contact" id="contact" />
            <Label htmlFor="contact">Contact</Label>
          </div>
        </RadioGroup>
      </div>

      <DataTable
        type={infoType}
        columns={getTableColumns()}
        data={domainInfo ? [domainInfo] : []}
      />
    </div>
  );
};

export default HomePage;
