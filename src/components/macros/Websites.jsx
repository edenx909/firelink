// svg icons
import { Twitch } from "../../assets/icons/Twitch";
import { Steam } from "../../assets/icons/Steam";
import { Wikipedia } from "../../assets/icons/Wikipedia";
import { Twitter } from "../../assets/icons/Twitter";

const Websites = ({ websiteData }) => {
  console.log(websiteData);
  const assignedIcons = (url) => {
    if (url.includes("twitch.tv")) {
      return <Twitch />;
    }
    if (url.includes("wikipedia.org")) {
      return <Wikipedia />;
    }
    if (url.includes("store.steampowered.com")) {
      return <Steam />;
    }
    if (url.includes("twitter.com")) {
      return <Twitter />;
    }
    return null;
  };

  const filteredData = websiteData?.filter(
    (item) => assignedIcons(item.url) !== null
  );

  const GameLinks = ({ url }) => {
    const Icon = assignedIcons(url);
    return (
      <div
        onClick={() => window.open(url, "_blank")}
        className="cursor-pointer "
      >
        {Icon}
      </div>
    );
  };
  return (
    <div className="flex items-center space-x-4  justify-center ">
      {filteredData?.length > 0 ? (
        filteredData.map((websites) => (
          <GameLinks key={websites.id} url={websites.url} />
        ))
      ) : (
        <>No Links</>
      )}
    </div>
  );
};

export default Websites;
