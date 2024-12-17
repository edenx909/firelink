const Websites = ({ websiteData }) => {
  return (
    <div>
      <h1>Websites</h1>
      {websiteData?.map((url) => (
        <div key={url.id}>
          <a key={url.id} href={url.url}>
            {url.url}
            <br />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Websites;
