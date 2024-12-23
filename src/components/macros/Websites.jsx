import TwitchIcon from "../../assets/icons/Twitch.png";
import SteamIcon from "../../assets/icons/Steam.png";
import TwitterIcon from "../../assets/icons/Twitter.png";
import WikipediaIcon from "../../assets/icons/Wikipedia.png";
import YoutubeIcon from "../../assets/icons/Youtube.png";

const Websites = ({ websiteData }) => {
  const assignedIcons = (url) => {
    const iconMap = {
      "twitch.tv": TwitchIcon,
      "wikipedia.org": WikipediaIcon,
      "store.steampowered.com": SteamIcon,
      "twitter.com": TwitterIcon,
      "youtube.com": YoutubeIcon,
    };

    for (const key in iconMap) {
      if (url.includes(key)) {
        return <img src={iconMap[key]} alt={key} className="w-7 h-7" />;
      }
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
        className="cursor-pointer"
      >
        {Icon}
      </div>
    );
  };

  return (
    <div className="flex items-center space-x-4 justify-center">
      {filteredData?.length > 0 ? (
        filteredData.map((websites) => (
          <GameLinks key={websites.id} url={websites.url} />
        ))
      ) : (
        <>No Links Available</>
      )}
    </div>
  );
};

export default Websites;
