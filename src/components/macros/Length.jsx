const Length = ({ lengthData }) => {
  return (
    <div className="  rounded-lg">
      {lengthData && lengthData[0] && (
        <div className="flex flex-col items-end">
          {lengthData[0].normally && (
            <div className="flex items-center space-x-1">
              <p> {Math.round(lengthData[0].normally / 3600)} hrs</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M8 4v4l3 3m3.5-3a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"
                ></path>
              </svg>
            </div>
          )}
          {lengthData[0].completely && (
            <div className="flex items-center space-x-1">
              <p> {Math.round(lengthData[0].completely / 3600)} hrs</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m.5 6.793V4h-1v4.207l3.146 3.147l.708-.708z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Length;
