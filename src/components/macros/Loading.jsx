const Loading = () => {
  return (
    <>
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-11 h-11 border-2 border-transparent text-black text-2xl animate-spin flex items-center justify-center border-t-black rounded-full">
          <div className="w-16 h-16 border-2 border-transparent text-black text-xl animate-spin flex items-center justify-center border-t-black rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
