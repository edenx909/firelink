const Loading = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex h-11 w-11 animate-spin items-center justify-center rounded-full border-2 border-transparent border-t-black text-2xl text-black">
          <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-2 border-transparent border-t-black text-xl text-black"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
