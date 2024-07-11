import { formatDate, truncateText } from "@/lib/utils";
import { WhoisRecord } from "@/types/domain.type";
import { useToast } from "@/components/ui/use-toast";

export const useWhoisApi = () => {
  const { toast } = useToast();

  const getInformationByDomainName = async (domainName: string) => {
    try {
      const response = await fetch(
        `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${
          import.meta.env.VITE_WHOIS_API_KEY
        }&outputFormat=JSON&domainName=${domainName}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const jsonResponse = await response.json();

      if (jsonResponse.ErrorMessage) {
        throw new Error(jsonResponse.ErrorMessage.msg);
      }

      const responseData = jsonResponse.WhoisRecord;

      const cherryPickedInfo: WhoisRecord = {
        domainName: responseData.domainName,
        registrarName: responseData.registrarName,
        registrationDate: formatDate(responseData.createdDate),
        expirationDate: formatDate(responseData.expiresDate),
        estimatedDomainAge: responseData.estimatedDomainAge,
        hostnames: truncateText(responseData.nameServers.hostNames.toString()),

        registrantName: responseData.registrant?.name,
        technicalContactName: responseData.technicalContact?.name,
        administrativeContactName: responseData.administrativeContact?.name,
        contactEmail: responseData.contactEmail,
      };

      return cherryPickedInfo;
    } catch (error) {
      console.log(error);

      let errorMessage =
        "An unknown error occurred when fetching domain information. Please try again";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });

      return null;
    }
  };

  return {
    getInformationByDomainName,
  };
};
