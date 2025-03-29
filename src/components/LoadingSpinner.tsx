const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="relative">
        <div className="h-10 w-10 rounded-full border-2 border-slate-200" />
        <div className="absolute top-0 left-0 h-10 w-10 animate-spin rounded-full border-t-2 border-slate-500" />
        <div className="sr-only">Loading</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
